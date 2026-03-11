import { migrateDatabase } from "./migrate.js";

export async function initDatabase() {
  await migrateDatabase();
}
