import { closePool, query } from "../db/client.js";
import { isDataUrl, uploadPossibleDataUrl } from "../services/media-storage.js";

const BATCH_SIZE = Math.max(1, Math.min(500, Number.parseInt(String(process.env.MIGRATE_BATCH_SIZE || "120"), 10) || 120));
const DRY_RUN = String(process.env.DRY_RUN || "true").trim().toLowerCase() !== "false";
const MAX_ROUNDS = Math.max(1, Math.min(5000, Number.parseInt(String(process.env.MIGRATE_MAX_ROUNDS || "500"), 10) || 500));

async function migrateSimpleUrlColumn({
  name,
  selectSql,
  updateSql,
  idField = "id",
  valueField = "url",
  folder = "legacy/misc",
  maxBytes = 8 * 1024 * 1024
}) {
  let rounds = 0;
  let scanned = 0;
  let updated = 0;
  while (rounds < MAX_ROUNDS) {
    rounds += 1;
    const res = await query(selectSql, [BATCH_SIZE]);
    const rows = Array.isArray(res.rows) ? res.rows : [];
    if (!rows.length) break;
    for (const row of rows) {
      scanned += 1;
      const id = row?.[idField];
      const raw = String(row?.[valueField] || "").trim();
      if (!id || !isDataUrl(raw)) continue;
      const next = await uploadPossibleDataUrl(raw, { folder, maxBytes });
      if (!next || next === raw) continue;
      if (!DRY_RUN) await query(updateSql, [id, next]);
      updated += 1;
    }
    if (rows.length < BATCH_SIZE) break;
    if (DRY_RUN) break;
  }
  return { name, scanned, updated, rounds };
}

async function migrateMessagePayloadUrl() {
  let rounds = 0;
  let scanned = 0;
  let updated = 0;
  while (rounds < MAX_ROUNDS) {
    rounds += 1;
    const res = await query(
      `select id, message_type, payload
       from messages
       where payload->>'url' like 'data:%'
       order by created_at asc
       limit $1`,
      [BATCH_SIZE]
    );
    const rows = Array.isArray(res.rows) ? res.rows : [];
    if (!rows.length) break;
    for (const row of rows) {
      scanned += 1;
      const id = row?.id;
      const messageType = String(row?.message_type || "").trim().toLowerCase();
      const payload = row?.payload && typeof row.payload === "object" ? row.payload : {};
      const raw = String(payload?.url || "").trim();
      if (!id || !isDataUrl(raw)) continue;
      const next = await uploadPossibleDataUrl(raw, {
        folder: messageType === "video" ? "message/video" : "message/image",
        maxBytes: messageType === "video" ? 8 * 1024 * 1024 : 4 * 1024 * 1024
      });
      if (!next || next === raw) continue;
      if (!DRY_RUN) {
        await query(
          `update messages
           set payload = jsonb_set(coalesce(payload, '{}'::jsonb), '{url}', to_jsonb($2::text), true)
           where id = $1`,
          [id, next]
        );
      }
      updated += 1;
    }
    if (rows.length < BATCH_SIZE) break;
    if (DRY_RUN) break;
  }
  return { name: "messages.payload.url", scanned, updated, rounds };
}

async function migrateCreatorPublishCover() {
  let rounds = 0;
  let scanned = 0;
  let updated = 0;
  while (rounds < MAX_ROUNDS) {
    rounds += 1;
    const res = await query(
      `select id, publish_info_json
       from creator_cards
       where publish_info_json->>'cover' like 'data:%'
       order by updated_at asc
       limit $1`,
      [BATCH_SIZE]
    );
    const rows = Array.isArray(res.rows) ? res.rows : [];
    if (!rows.length) break;
    for (const row of rows) {
      scanned += 1;
      const id = row?.id;
      const payload = row?.publish_info_json && typeof row.publish_info_json === "object"
        ? row.publish_info_json
        : {};
      const raw = String(payload?.cover || "").trim();
      if (!id || !isDataUrl(raw)) continue;
      const next = await uploadPossibleDataUrl(raw, { folder: "world/cover", maxBytes: 4 * 1024 * 1024 });
      if (!next || next === raw) continue;
      if (!DRY_RUN) {
        await query(
          `update creator_cards
           set publish_info_json = jsonb_set(coalesce(publish_info_json, '{}'::jsonb), '{cover}', to_jsonb($2::text), true),
               updated_at = now()
           where id = $1`,
          [id, next]
        );
      }
      updated += 1;
    }
    if (rows.length < BATCH_SIZE) break;
    if (DRY_RUN) break;
  }
  return { name: "creator_cards.publish_info_json.cover", scanned, updated, rounds };
}

async function migrateCreatorPublishLogCover() {
  let rounds = 0;
  let scanned = 0;
  let updated = 0;
  while (rounds < MAX_ROUNDS) {
    rounds += 1;
    const res = await query(
      `select id, publish_payload_json
       from creator_card_publish_logs
       where publish_payload_json->>'cover' like 'data:%'
       order by created_at asc
       limit $1`,
      [BATCH_SIZE]
    );
    const rows = Array.isArray(res.rows) ? res.rows : [];
    if (!rows.length) break;
    for (const row of rows) {
      scanned += 1;
      const id = row?.id;
      const payload = row?.publish_payload_json && typeof row.publish_payload_json === "object"
        ? row.publish_payload_json
        : {};
      const raw = String(payload?.cover || "").trim();
      if (!id || !isDataUrl(raw)) continue;
      const next = await uploadPossibleDataUrl(raw, { folder: "world/cover", maxBytes: 4 * 1024 * 1024 });
      if (!next || next === raw) continue;
      if (!DRY_RUN) {
        await query(
          `update creator_card_publish_logs
           set publish_payload_json = jsonb_set(coalesce(publish_payload_json, '{}'::jsonb), '{cover}', to_jsonb($2::text), true)
           where id = $1`,
          [id, next]
        );
      }
      updated += 1;
    }
    if (rows.length < BATCH_SIZE) break;
    if (DRY_RUN) break;
  }
  return { name: "creator_card_publish_logs.publish_payload_json.cover", scanned, updated, rounds };
}

async function main() {
  console.log(`[media-migrate] start (dryRun=${DRY_RUN}, batchSize=${BATCH_SIZE})`);
  const tasks = [
    {
      name: "users.avatar_url",
      selectSql: `select id, avatar_url as url from users where avatar_url like 'data:%' limit $1`,
      updateSql: `update users set avatar_url = $2, updated_at = now() where id = $1`,
      folder: "profile/avatar",
      maxBytes: 2 * 1024 * 1024
    },
    {
      name: "user_profiles.cover_url",
      selectSql: `select user_id as id, cover_url as url from user_profiles where cover_url like 'data:%' limit $1`,
      updateSql: `update user_profiles set cover_url = $2, updated_at = now() where user_id = $1`,
      folder: "profile/cover",
      maxBytes: 3 * 1024 * 1024
    },
    {
      name: "communities.cover_url",
      selectSql: `select id, cover_url as url from communities where cover_url like 'data:%' limit $1`,
      updateSql: `update communities set cover_url = $2, updated_at = now() where id = $1`,
      folder: "community/cover",
      maxBytes: 3 * 1024 * 1024
    },
    {
      name: "world_cards.cover_url",
      selectSql: `select id, cover_url as url from world_cards where cover_url like 'data:%' limit $1`,
      updateSql: `update world_cards set cover_url = $2, updated_at = now() where id = $1`,
      folder: "world/cover",
      maxBytes: 4 * 1024 * 1024
    },
    {
      name: "world_card_media.media_url",
      selectSql: `select id, media_url as url from world_card_media where media_url like 'data:%' limit $1`,
      updateSql: `update world_card_media set media_url = $2 where id = $1`,
      folder: "world/media",
      maxBytes: 5 * 1024 * 1024
    },
    {
      name: "world_card_media.thumb_url",
      selectSql: `select id, thumb_url as url from world_card_media where thumb_url like 'data:%' limit $1`,
      updateSql: `update world_card_media set thumb_url = $2 where id = $1`,
      folder: "world/thumb",
      maxBytes: 4 * 1024 * 1024
    },
    {
      name: "world_card_characters.avatar_url",
      selectSql: `select id, avatar_url as url from world_card_characters where avatar_url like 'data:%' limit $1`,
      updateSql: `update world_card_characters set avatar_url = $2, updated_at = now() where id = $1`,
      folder: "world/character/avatar",
      maxBytes: 2 * 1024 * 1024
    },
    {
      name: "post_media.media_url",
      selectSql: `select id, media_type, media_url as url from post_media where media_url like 'data:%' limit $1`,
      updateSql: `update post_media set media_url = $2 where id = $1`,
      folder: "dynamic/media",
      maxBytes: 8 * 1024 * 1024
    },
    {
      name: "community_post_media.media_url",
      selectSql: `select id, media_url as url from community_post_media where media_url like 'data:%' limit $1`,
      updateSql: `update community_post_media set media_url = $2 where id = $1`,
      folder: "community/post",
      maxBytes: 5 * 1024 * 1024
    },
    {
      name: "creator_card_assets.asset_url",
      selectSql: `select id, asset_url as url from creator_card_assets where asset_url like 'data:%' limit $1`,
      updateSql: `update creator_card_assets set asset_url = $2, updated_at = now() where id = $1`,
      folder: "creator/asset",
      maxBytes: 8 * 1024 * 1024
    },
    {
      name: "creator_card_assets.preview_url",
      selectSql: `select id, preview_url as url from creator_card_assets where preview_url like 'data:%' limit $1`,
      updateSql: `update creator_card_assets set preview_url = $2, updated_at = now() where id = $1`,
      folder: "creator/preview",
      maxBytes: 4 * 1024 * 1024
    },
    {
      name: "conversations.avatar_url",
      selectSql: `select id, avatar_url as url from conversations where avatar_url like 'data:%' limit $1`,
      updateSql: `update conversations set avatar_url = $2, updated_at = now() where id = $1`,
      folder: "conversation/avatar",
      maxBytes: 2 * 1024 * 1024
    },
    {
      name: "message_attachments.file_url",
      selectSql: `select id, file_url as url from message_attachments where file_url like 'data:%' limit $1`,
      updateSql: `update message_attachments set file_url = $2 where id = $1`,
      folder: "message/attachment",
      maxBytes: 8 * 1024 * 1024
    },
    {
      name: "message_attachments.thumb_url",
      selectSql: `select id, thumb_url as url from message_attachments where thumb_url like 'data:%' limit $1`,
      updateSql: `update message_attachments set thumb_url = $2 where id = $1`,
      folder: "message/thumb",
      maxBytes: 4 * 1024 * 1024
    }
  ];

  const reports = [];
  for (const task of tasks) {
    const report = await migrateSimpleUrlColumn(task);
    reports.push(report);
    console.log(`[media-migrate] ${report.name}: scanned=${report.scanned}, updated=${report.updated}, rounds=${report.rounds}`);
  }
  const msgReport = await migrateMessagePayloadUrl();
  reports.push(msgReport);
  console.log(`[media-migrate] ${msgReport.name}: scanned=${msgReport.scanned}, updated=${msgReport.updated}, rounds=${msgReport.rounds}`);

  const creatorReport = await migrateCreatorPublishCover();
  reports.push(creatorReport);
  console.log(`[media-migrate] ${creatorReport.name}: scanned=${creatorReport.scanned}, updated=${creatorReport.updated}, rounds=${creatorReport.rounds}`);

  const creatorLogReport = await migrateCreatorPublishLogCover();
  reports.push(creatorLogReport);
  console.log(`[media-migrate] ${creatorLogReport.name}: scanned=${creatorLogReport.scanned}, updated=${creatorLogReport.updated}, rounds=${creatorLogReport.rounds}`);

  const totalScanned = reports.reduce((sum, x) => sum + Number(x.scanned || 0), 0);
  const totalUpdated = reports.reduce((sum, x) => sum + Number(x.updated || 0), 0);
  console.log(`[media-migrate] done: scanned=${totalScanned}, updated=${totalUpdated}, dryRun=${DRY_RUN}`);
}

main()
  .catch((error) => {
    console.error("[media-migrate] failed:", error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool().catch(() => {});
  });
