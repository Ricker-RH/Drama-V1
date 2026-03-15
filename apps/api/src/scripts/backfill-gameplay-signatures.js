import crypto from "node:crypto";
import { query } from "../db/client.js";

const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);

function safeMode(value) {
  const mode = String(value || "").trim();
  return VALID_MODES.has(mode) ? mode : "long_narrative";
}

function asJson(value, fallback = {}) {
  if (value && typeof value === "object") return value;
  return fallback;
}

function stableSortJson(value) {
  if (Array.isArray(value)) return value.map((item) => stableSortJson(item));
  if (!value || typeof value !== "object") return value;
  const out = {};
  Object.keys(value).sort().forEach((key) => {
    out[key] = stableSortJson(value[key]);
  });
  return out;
}

function computeGameplaySignature(card = {}) {
  const normalized = {
    mode: safeMode(card.card_mode),
    content: asJson(card.content_json, {}),
    runtime: asJson(card.runtime_config_json, {}),
    quality: asJson(card.quality_rules_json, {}),
    promptContext: asJson(card.prompt_context_json, {})
  };
  const stable = JSON.stringify(stableSortJson(normalized));
  return crypto.createHash("sha256").update(stable).digest("hex");
}

async function main() {
  const cardsRes = await query(
    `select id, card_mode, content_json, runtime_config_json, quality_rules_json, prompt_context_json
     from creator_cards
     where deleted_at is null
       and published_world_card_id is not null
       and (last_gameplay_signature is null or btrim(last_gameplay_signature) = '')`
  );
  const cards = cardsRes.rows || [];
  if (!cards.length) {
    console.log("[backfill:gameplay-signature] nothing to backfill");
    return;
  }
  let updated = 0;
  for (const card of cards) {
    const signature = computeGameplaySignature(card);
    await query(
      `update creator_cards
       set last_gameplay_signature = $2,
           updated_at = now()
       where id = $1`,
      [card.id, signature]
    );
    updated += 1;
  }
  console.log(`[backfill:gameplay-signature] updated ${updated} cards`);
}

main().catch((error) => {
  console.error("[backfill:gameplay-signature] failed", error);
  process.exitCode = 1;
});
