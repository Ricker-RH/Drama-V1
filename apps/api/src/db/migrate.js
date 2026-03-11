import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { getPool } from "./client.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sqlDir = path.resolve(__dirname, "../../sql");
const SQL_FILE_RE = /^(\d+)_.*\.sql$/i;

function checksumOf(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

export async function ensureMigrationsTable() {
  const pool = getPool();
  await pool.query(`
    create table if not exists schema_migrations (
      version text primary key,
      checksum text not null,
      filename text not null,
      executed_at timestamptz not null default now(),
      execution_ms integer not null default 0
    )
  `);
}

export async function listMigrationFiles() {
  const entries = await fs.readdir(sqlDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && SQL_FILE_RE.test(e.name))
    .map((e) => {
      const m = e.name.match(SQL_FILE_RE);
      return {
        version: m?.[1] || e.name,
        filename: e.name,
        fullPath: path.join(sqlDir, e.name)
      };
    })
    .sort((a, b) => Number(a.version) - Number(b.version) || a.filename.localeCompare(b.filename));
}

export async function getAppliedMigrations() {
  const pool = getPool();
  const result = await pool.query("select version, checksum, filename, executed_at, execution_ms from schema_migrations order by version asc");
  return result.rows;
}

export async function migrateDatabase({ logger = console } = {}) {
  await ensureMigrationsTable();
  const pool = getPool();
  const files = await listMigrationFiles();
  const applied = new Map((await getAppliedMigrations()).map((x) => [String(x.version), x]));
  const summary = {
    applied: [],
    skipped: []
  };

  for (const file of files) {
    const sql = await fs.readFile(file.fullPath, "utf-8");
    const checksum = checksumOf(sql);
    const existed = applied.get(String(file.version));
    if (existed) {
      if (existed.checksum !== checksum) {
        throw new Error(
          `Migration checksum mismatch for version ${file.version} (${file.filename}).` +
          ` applied=${existed.checksum} current=${checksum}`
        );
      }
      summary.skipped.push(file.filename);
      continue;
    }

    const started = Date.now();
    const client = await pool.connect();
    try {
      await client.query("begin");
      await client.query(sql);
      const executionMs = Date.now() - started;
      await client.query(
        `insert into schema_migrations(version, checksum, filename, execution_ms)
         values ($1, $2, $3, $4)`,
        [String(file.version), checksum, file.filename, executionMs]
      );
      await client.query("commit");
      summary.applied.push(file.filename);
      logger.info?.(`[db:migrate] applied ${file.filename} (${executionMs}ms)`);
    } catch (error) {
      await client.query("rollback");
      throw error;
    } finally {
      client.release();
    }
  }

  return summary;
}

export async function migrationStatus() {
  await ensureMigrationsTable();
  const files = await listMigrationFiles();
  const appliedRows = await getAppliedMigrations();
  const appliedMap = new Map(appliedRows.map((x) => [String(x.version), x]));
  return files.map((file) => {
    const row = appliedMap.get(String(file.version));
    return {
      version: file.version,
      filename: file.filename,
      status: row ? "applied" : "pending",
      executedAt: row?.executed_at || null
    };
  });
}

