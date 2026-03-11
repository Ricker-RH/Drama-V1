import { initDatabase } from "../db/init.js";
import { closePool } from "../db/client.js";

try {
  await initDatabase();
  console.log("Database initialized successfully.");
} finally {
  await closePool();
}
