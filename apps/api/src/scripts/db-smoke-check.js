import { query, closePool } from "../db/client.js";

const requiredTables = [
  "users",
  "world_cards",
  "creator_cards",
  "world_card_media",
  "world_card_rank_snapshots",
  "game_sessions",
  "game_turns",
  "posts",
  "communities",
  "community_posts",
  "conversations",
  "messages",
  "notifications",
  "wallet_accounts",
  "wallet_ledger",
  "search_documents",
  "event_logs",
  "analytics_daily_user_metrics",
  "analytics_daily_world_metrics"
];

try {
  const mig = await query("select version, filename, executed_at from schema_migrations order by version asc");
  const tables = await query(
    `select table_name
       from information_schema.tables
      where table_schema = 'public'
        and table_name = any($1::text[])`,
    [requiredTables]
  );

  const exists = new Set(tables.rows.map((x) => x.table_name));
  const missing = requiredTables.filter((x) => !exists.has(x));

  console.log("[db:smoke] migrations:");
  mig.rows.forEach((x) => {
    console.log(`  ${x.version} ${x.filename} @ ${new Date(x.executed_at).toISOString()}`);
  });

  if (missing.length) {
    console.log(`[db:smoke] missing tables: ${missing.join(", ")}`);
    process.exitCode = 2;
  } else {
    console.log(`[db:smoke] ok, required tables: ${requiredTables.length}`);
  }
} finally {
  await closePool();
}

