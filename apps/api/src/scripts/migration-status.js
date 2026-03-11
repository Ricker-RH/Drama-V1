import { migrationStatus } from "../db/migrate.js";
import { closePool } from "../db/client.js";

try {
  const rows = await migrationStatus();
  if (!rows.length) {
    console.log("[db:status] no migration files found");
  } else {
    console.log("[db:status]");
    rows.forEach((r) => {
      const stamp = r.executedAt ? ` @ ${new Date(r.executedAt).toISOString()}` : "";
      console.log(`  ${r.version} ${r.filename} -> ${r.status}${stamp}`);
    });
  }
} finally {
  await closePool();
}

