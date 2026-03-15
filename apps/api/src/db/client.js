import { Pool } from "pg";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";
import { recordDbQuery } from "../services/observability.js";

let pool;
let envLoaded = false;
const TRANSIENT_DB_ERROR_CODES = new Set([
  "ECONNRESET",
  "ETIMEDOUT",
  "ECONNREFUSED",
  "EAI_AGAIN",
  "ENOTFOUND",
  "57P01", // admin_shutdown
  "57P02", // crash_shutdown
  "57P03" // cannot_connect_now
]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../../../../.env");

function loadEnvFile() {
  if (envLoaded) return;
  envLoaded = true;
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, "utf-8");
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = String(line || "").trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) return;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) return;
    process.env[key] = value;
  });
}

export function getPool() {
  if (pool) return pool;

  loadEnvFile();
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is required (Neon PostgreSQL connection string)");
  }

  pool = new Pool({
    connectionString,
    max: Number.parseInt(process.env.DB_POOL_MAX || "15", 10),
    idleTimeoutMillis: Number.parseInt(process.env.DB_IDLE_TIMEOUT_MS || "30000", 10),
    connectionTimeoutMillis: Number.parseInt(process.env.DB_CONNECT_TIMEOUT_MS || "10000", 10),
    keepAlive: true,
    application_name: "drama-web-api",
    ssl: {
      rejectUnauthorized: false
    }
  });
  pool.on("error", (error) => {
    const code = String(error?.code || "").trim();
    const msg = error instanceof Error ? error.message : String(error || "unknown");
    console.warn(`[db] pool error (${code || "no_code"}): ${msg}`);
  });

  return pool;
}

export async function query(text, params = []) {
  const started = performance.now();
  try {
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        const p = getPool();
        return await p.query(text, params);
      } catch (error) {
        const code = String(error?.code || "").trim();
        const transient = TRANSIENT_DB_ERROR_CODES.has(code);
        if (!transient || attempt >= maxAttempts) throw error;
        try {
          await closePool();
        } catch {}
        await new Promise((resolve) => setTimeout(resolve, 120 * attempt));
      }
    }
    throw new Error("DB_QUERY_RETRY_EXHAUSTED");
  } finally {
    recordDbQuery(performance.now() - started);
  }
}

export async function closePool() {
  if (!pool) return;
  await pool.end();
  pool = undefined;
}
