import { migrateDatabase } from "../db/migrate.js";
import { closePool } from "../db/client.js";

try {
  const summary = await migrateDatabase();
  console.log("[db:migrate] done");
  console.log(`[db:migrate] applied: ${summary.applied.length ? summary.applied.join(", ") : "none"}`);
  console.log(`[db:migrate] skipped: ${summary.skipped.length ? summary.skipped.join(", ") : "none"}`);
} finally {
  await closePool();
}

