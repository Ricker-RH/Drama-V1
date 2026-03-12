import { query, getPool } from "../db/client.js";

const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);
const VALID_SAVE_STATUS = new Set(["draft", "saved", "archived"]);
const VALID_PUBLISH_STATUS = new Set(["unpublished", "published", "offline"]);

function safeMode(value) {
  const mode = String(value || "").trim();
  return VALID_MODES.has(mode) ? mode : "long_narrative";
}

function safeSaveStatus(value) {
  const status = String(value || "").trim();
  return VALID_SAVE_STATUS.has(status) ? status : "saved";
}

function safePublishStatus(value) {
  const status = String(value || "").trim();
  return VALID_PUBLISH_STATUS.has(status) ? status : "unpublished";
}

function asJson(value, fallback = {}) {
  if (value && typeof value === "object") return value;
  return fallback;
}

function extractIntroText(payload = {}) {
  const intro = String(payload.intro || "").trim();
  if (!intro) return "";
  return intro.split(/\n+/).map((x) => x.trim()).filter(Boolean).join(" ");
}

function buildWorldCardPayload(card, publishPayload = {}) {
  const content = asJson(card.content_json, {});
  const runtimeCfg = asJson(card.runtime_config_json, {});
  const qualityRules = asJson(card.quality_rules_json, {});
  const promptCtx = asJson(card.prompt_context_json, {});
  const mode = safeMode(card.card_mode);

  const title = String(publishPayload.title || card.title || "未命名作品").trim();
  const chapterLabel = String(publishPayload.chapter || "序章").trim();
  const mainQuest = String(
    publishPayload.mainQuest
    || content.primaryGoal
    || content.mainQuest
    || "推进主线并锁定关键胜负手"
  ).trim();
  const keyNpc = String(
    publishPayload.npc
    || content.personaName
    || content.fixedNpcs
    || content.npc
    || "关键角色（待接触）"
  ).trim();
  const keyClues = String(publishPayload.clues || "").trim();
  const openingSummary = extractIntroText(publishPayload)
    || String(content.openingLine || content.openingAnchor || content.worldSetting || "").trim();
  const playHook = String(publishPayload.playHook || mainQuest).trim();

  return {
    title,
    subtitle: String(card.subtitle || `${chapterLabel} · ${mainQuest.slice(0, 12)}`).trim(),
    setting: String(publishPayload.setting || content.scopeLimits || content.relationBoundary || content.worldSetting || "").trim(),
    summary: String(publishPayload.summary || mainQuest).trim(),
    overview: extractIntroText(publishPayload) || String(content.worldSetting || content.openingLine || content.openingAnchor || content.personaCore || "").trim(),
    format: String(publishPayload.format || (mode === "long_narrative" ? "长叙事" : mode === "short_narrative" ? "短叙事" : "虚拟人物")).trim(),
    theme: String(publishPayload.theme || content.toneStyle || content.dialogueStyle || "剧情向").trim(),
    background: String(publishPayload.background || content.personaBackground || "原创世界").trim(),
    recommendTag: String(publishPayload.recommend || "创作中心发布").trim(),
    timeTag: String(publishPayload.timeTag || "刚刚更新").trim(),
    mode,
    chapterLabel,
    mainQuest,
    keyNpc,
    keyClues,
    openingSummary,
    playHook,
    coverUrl: String(publishPayload.cover || "").trim() || null,
    sourcePromptVersion: String(promptCtx.promptVersion || "system_prompt_v2"),
    rulesJson: Array.isArray(runtimeCfg.rules) ? runtimeCfg.rules : [],
    playableConfigJson: {
      quality_rules: qualityRules,
      runtime_config: runtimeCfg,
      prompt_context: promptCtx,
      mode
    }
  };
}

async function replaceCardNpcs(client, creatorCardId, list = []) {
  await client.query("delete from creator_card_npcs where creator_card_id = $1", [creatorCardId]);
  for (let i = 0; i < list.length; i += 1) {
    const npc = list[i] || {};
    await client.query(
      `insert into creator_card_npcs(
        creator_card_id, npc_key, display_name, role_type, stance, motivation, secrets,
        trigger_conditions, speak_style, availability_window, sort_order, meta
      ) values (
        $1, $2, $3, $4, $5, $6, $7,
        $8, $9, $10, $11, $12::jsonb
      )`,
      [
        creatorCardId,
        String(npc.npcKey || `npc_${i + 1}`),
        String(npc.displayName || npc.name || `NPC_${i + 1}`),
        String(npc.roleType || "support"),
        npc.stance || null,
        npc.motivation || null,
        npc.secrets || null,
        npc.triggerConditions || null,
        npc.speakStyle || null,
        npc.availabilityWindow || null,
        Number.isFinite(npc.sortOrder) ? npc.sortOrder : i,
        JSON.stringify(asJson(npc.meta, {}))
      ]
    );
  }
}

async function replaceCardEvents(client, creatorCardId, list = []) {
  await client.query("delete from creator_card_events where creator_card_id = $1", [creatorCardId]);
  for (let i = 0; i < list.length; i += 1) {
    const event = list[i] || {};
    await client.query(
      `insert into creator_card_events(
        creator_card_id, event_key, title, mode_scope, trigger_expr, cooldown_turns,
        impact_state_delta, narrative_seed, priority, is_enabled
      ) values (
        $1, $2, $3, $4, $5, $6,
        $7::jsonb, $8, $9, $10
      )`,
      [
        creatorCardId,
        String(event.eventKey || `event_${i + 1}`),
        String(event.title || `事件_${i + 1}`),
        String(event.modeScope || "all"),
        event.triggerExpr || null,
        Number.isFinite(event.cooldownTurns) ? event.cooldownTurns : 0,
        JSON.stringify(asJson(event.impactStateDelta, {})),
        event.narrativeSeed || null,
        Number.isFinite(event.priority) ? event.priority : 0,
        event.isEnabled !== false
      ]
    );
  }
}

export async function createCreatorCard({
  authorId,
  cardMode,
  title,
  subtitle,
  templateId,
  contentJson,
  promptContextJson,
  runtimeConfigJson,
  qualityRulesJson,
  uxConfigJson,
  saveStatus,
  publishStatus,
  npcSeeds,
  eventSeeds
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const result = await client.query(
      `insert into creator_cards(
        author_id, card_mode, title, subtitle, template_id,
        content_json, prompt_context_json, runtime_config_json, quality_rules_json, ux_config_json,
        publish_info_json, save_status, publish_status
      ) values (
        $1, $2, $3, $4, $5,
        $6::jsonb, $7::jsonb, $8::jsonb, $9::jsonb, $10::jsonb,
        '{}'::jsonb, $11, $12
      )
      returning *`,
      [
        authorId,
        safeMode(cardMode),
        String(title || "未命名卡片"),
        subtitle || null,
        templateId || null,
        JSON.stringify(asJson(contentJson, {})),
        JSON.stringify(asJson(promptContextJson, {})),
        JSON.stringify(asJson(runtimeConfigJson, {})),
        JSON.stringify(asJson(qualityRulesJson, {})),
        JSON.stringify(asJson(uxConfigJson, {})),
        safeSaveStatus(saveStatus),
        safePublishStatus(publishStatus)
      ]
    );
    const card = result.rows[0];
    await replaceCardNpcs(client, card.id, Array.isArray(npcSeeds) ? npcSeeds : []);
    await replaceCardEvents(client, card.id, Array.isArray(eventSeeds) ? eventSeeds : []);
    await client.query("commit");
    return card;
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

export async function updateCreatorCardDraft(id, {
  title,
  subtitle,
  templateId,
  contentJson,
  promptContextJson,
  runtimeConfigJson,
  qualityRulesJson,
  uxConfigJson,
  saveStatus,
  publishStatus,
  npcSeeds,
  eventSeeds,
  cardMode
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const result = await client.query(
      `update creator_cards
       set
         card_mode = coalesce($2, card_mode),
         title = coalesce($3, title),
         subtitle = coalesce($4, subtitle),
         template_id = coalesce($5, template_id),
         content_json = coalesce($6::jsonb, content_json),
         prompt_context_json = coalesce($7::jsonb, prompt_context_json),
         runtime_config_json = coalesce($8::jsonb, runtime_config_json),
         quality_rules_json = coalesce($9::jsonb, quality_rules_json),
         ux_config_json = coalesce($10::jsonb, ux_config_json),
         save_status = coalesce($11, save_status),
         publish_status = coalesce($12, publish_status),
         updated_at = now()
       where id = $1
       returning *`,
      [
        id,
        cardMode ? safeMode(cardMode) : null,
        title ? String(title) : null,
        subtitle ?? null,
        templateId ?? null,
        contentJson ? JSON.stringify(asJson(contentJson, {})) : null,
        promptContextJson ? JSON.stringify(asJson(promptContextJson, {})) : null,
        runtimeConfigJson ? JSON.stringify(asJson(runtimeConfigJson, {})) : null,
        qualityRulesJson ? JSON.stringify(asJson(qualityRulesJson, {})) : null,
        uxConfigJson ? JSON.stringify(asJson(uxConfigJson, {})) : null,
        saveStatus ? safeSaveStatus(saveStatus) : null,
        publishStatus ? safePublishStatus(publishStatus) : null
      ]
    );

    const card = result.rows[0] || null;
    if (!card) {
      await client.query("rollback");
      return null;
    }

    if (Array.isArray(npcSeeds)) {
      await replaceCardNpcs(client, card.id, npcSeeds);
    }
    if (Array.isArray(eventSeeds)) {
      await replaceCardEvents(client, card.id, eventSeeds);
    }
    await client.query("commit");
    return card;
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

export async function getCreatorCardById(id) {
  const result = await query(
    `select *
     from creator_cards
     where id = $1 and deleted_at is null
     limit 1`,
    [id]
  );
  return result.rows[0] || null;
}

export async function listCreatorCards({ authorId, mode, includeArchived = false, limit = 60 }) {
  const rows = await query(
    `select *
     from creator_cards
     where ($1::uuid is null or author_id = $1::uuid)
       and ($2::text is null or card_mode = $2::text)
       and ($3::boolean = true or archived_at is null)
       and deleted_at is null
     order by updated_at desc
     limit $4`,
    [authorId || null, mode ? safeMode(mode) : null, Boolean(includeArchived), Math.max(1, Math.min(200, Number(limit) || 60))]
  );
  return rows.rows;
}

export async function publishCreatorCard({ id, authorId, publishPayload, syncToDynamic = false }) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const cardRes = await client.query(
      `select * from creator_cards where id = $1 and deleted_at is null limit 1`,
      [id]
    );
    const card = cardRes.rows[0] || null;
    if (!card) {
      await client.query("rollback");
      return null;
    }
    if (authorId && card.author_id !== authorId) {
      await client.query("rollback");
      throw new Error("CARD_AUTHOR_MISMATCH");
    }

    const mapped = buildWorldCardPayload(card, asJson(publishPayload, {}));
    let worldCard = null;

    if (card.published_world_card_id) {
      const updated = await client.query(
        `update world_cards
         set
           title = $2,
           subtitle = $3,
           setting = $4,
           summary = $5,
           overview = $6,
           format = $7,
           theme = $8,
           background = $9,
           recommend_tag = $10,
           time_tag = $11,
           mode = $12,
           chapter_label = $13,
           main_quest = $14,
           key_npc = $15,
           key_clues = $16,
           opening_summary = $17,
           play_hook = $18,
           playable_config_json = $19::jsonb,
           source_creator_card_id = $20,
           cover_url = coalesce($21, cover_url),
           source_prompt_version = $22,
           rules_json = $23::jsonb,
           publish_status = 'published',
           visibility = 'public',
           updated_at = now()
         where id = $1
         returning *`,
        [
          card.published_world_card_id,
          mapped.title,
          mapped.subtitle,
          mapped.setting,
          mapped.summary,
          mapped.overview,
          mapped.format,
          mapped.theme,
          mapped.background,
          mapped.recommendTag,
          mapped.timeTag,
          mapped.mode,
          mapped.chapterLabel,
          mapped.mainQuest,
          mapped.keyNpc,
          mapped.keyClues,
          mapped.openingSummary,
          mapped.playHook,
          JSON.stringify(mapped.playableConfigJson),
          card.id,
          mapped.coverUrl,
          mapped.sourcePromptVersion,
          JSON.stringify(mapped.rulesJson)
        ]
      );
      worldCard = updated.rows[0] || null;
    } else {
      const inserted = await client.query(
        `insert into world_cards(
          author_id, title, subtitle, setting, summary, overview,
          format, theme, background, recommend_tag, time_tag,
          mode, chapter_label, main_quest, key_npc, key_clues, opening_summary, play_hook,
          playable_config_json, source_creator_card_id,
          cover_url, source_prompt_version, rules_json,
          publish_status, visibility, is_test
        ) values (
          $1,$2,$3,$4,$5,$6,
          $7,$8,$9,$10,$11,
          $12,$13,$14,$15,$16,$17,$18,
          $19::jsonb,$20,
          $21,$22,$23::jsonb,
          'published','public',false
        )
        returning *`,
        [
          card.author_id,
          mapped.title,
          mapped.subtitle,
          mapped.setting,
          mapped.summary,
          mapped.overview,
          mapped.format,
          mapped.theme,
          mapped.background,
          mapped.recommendTag,
          mapped.timeTag,
          mapped.mode,
          mapped.chapterLabel,
          mapped.mainQuest,
          mapped.keyNpc,
          mapped.keyClues,
          mapped.openingSummary,
          mapped.playHook,
          JSON.stringify(mapped.playableConfigJson),
          card.id,
          mapped.coverUrl,
          mapped.sourcePromptVersion,
          JSON.stringify(mapped.rulesJson)
        ]
      );
      worldCard = inserted.rows[0] || null;
    }

    if (!worldCard?.id) {
      await client.query("rollback");
      throw new Error("WORLD_CARD_PUBLISH_FAILED");
    }

    const updatedCard = await client.query(
      `update creator_cards
       set
         save_status = 'saved',
         publish_status = 'published',
         published_world_card_id = $2,
         publish_info_json = $3::jsonb,
         published_at = now(),
         updated_at = now()
       where id = $1
       returning *`,
      [card.id, worldCard.id, JSON.stringify(asJson(publishPayload, {}))]
    );

    await client.query(
      `insert into creator_card_publish_logs(
        creator_card_id, world_card_id, publish_payload_json, sync_to_dynamic, status, created_by
      ) values ($1,$2,$3::jsonb,$4,'published',$5)`,
      [card.id, worldCard.id, JSON.stringify(asJson(publishPayload, {})), Boolean(syncToDynamic), card.author_id]
    );

    await client.query("commit");

    return {
      creatorCard: updatedCard.rows[0] || card,
      worldCard
    };
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}
