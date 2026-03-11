import { Pool } from "pg";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

let pool;
let envLoaded = false;

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

  return pool;
}

export async function query(text, params = []) {
  const p = getPool();
  return p.query(text, params);
}

export async function closePool() {
  if (!pool) return;
  await pool.end();
  pool = undefined;
}
