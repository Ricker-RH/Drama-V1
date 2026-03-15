import { getPool } from "./client.js";
import { migrateDatabase } from "./migrate.js";

export async function ensureRuntimeSchemaCompat() {
  const pool = getPool();
  const sqlList = [
    `
      alter table if exists creator_cards
        add column if not exists opening_line_ai_assist boolean not null default false
    `,
    `
      alter table if exists world_cards
        add column if not exists opening_line_ai_assist boolean not null default false
    `
  ];
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      for (const sql of sqlList) {
        await pool.query(sql);
      }
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 300));
      }
    }
  }
  throw lastError;
}

export async function initDatabase() {
  await migrateDatabase();
  await ensureRuntimeSchemaCompat();
}
