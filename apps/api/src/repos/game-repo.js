import { query } from "../db/client.js";

export async function getWorldCardRuntimeMeta(worldCardId) {
  const safeWorldId = String(worldCardId || "").trim();
  if (!safeWorldId) return null;
  const result = await query(
    `select
       id,
       title,
       cover_url,
       (
         select wcm.media_url
         from world_card_media wcm
         where wcm.world_card_id = w.id
           and wcm.media_type = 'image'
         order by wcm.sort_order asc, wcm.created_at asc
         limit 1
       ) as first_image_url,
       mode,
       chapter_label,
       gameplay_version,
       appearance_version
     from world_cards
     where id = $1
       and publish_status = 'published'
       and deleted_at is null
     limit 1`,
    [safeWorldId]
  );
  return result.rows[0] || null;
}

export async function createGameSession({
  userId,
  category,
  subCategory,
  mode,
  storyContext,
  worldCardId,
  currentModel,
  gameplayVersion = 1,
  appearanceVersion = 1
}) {
  const result = await query(
    `insert into game_sessions(
      user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model,
      gameplay_version, appearance_version, status
    )
     values ($1, $2, $3, 0, 0, $4, $5::jsonb, $6, $7, $8, $9, 'active')
     returning id, user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model,
               gameplay_version, appearance_version, status, created_at`,
    [
      userId,
      category,
      subCategory,
      mode || null,
      JSON.stringify(storyContext || {}),
      worldCardId || null,
      currentModel || null,
      Math.max(1, Number(gameplayVersion || 1) || 1),
      Math.max(1, Number(appearanceVersion || 1) || 1)
    ]
  );

  return result.rows[0];
}

export async function getGameSessionById(id) {
  const result = await query(
    `select id, user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model,
            gameplay_version, appearance_version, status, paused_at, interrupted_at, interrupted_reason,
            story_conversation_id, story_message_id, ended_at, created_at, updated_at
     from game_sessions where id = $1 limit 1`,
    [id]
  );

  return result.rows[0] || null;
}

export async function updateGameSessionModel(sessionId, currentModel) {
  if (!sessionId) return null;
  const result = await query(
    `update game_sessions
     set current_model = $2, updated_at = now()
     where id = $1
     returning id, current_model`,
    [sessionId, currentModel || null]
  );
  return result.rows[0] || null;
}

export async function attachGameSessionStoryCard(sessionId, conversationId, messageId) {
  if (!sessionId) return null;
  const result = await query(
    `update game_sessions
     set story_conversation_id = $2::uuid,
         story_message_id = $3::uuid,
         updated_at = now()
     where id = $1
     returning id, story_conversation_id, story_message_id`,
    [sessionId, conversationId || null, messageId || null]
  );
  return result.rows[0] || null;
}

export async function pauseGameSession(sessionId) {
  if (!sessionId) return null;
  const result = await query(
    `update game_sessions
     set status = case when status in ('interrupted', 'completed', 'archived') then status else 'paused' end,
         paused_at = case when status in ('interrupted', 'completed', 'archived') then paused_at else now() end,
         updated_at = now()
     where id = $1
     returning id, status, paused_at`,
    [sessionId]
  );
  return result.rows[0] || null;
}

export async function interruptGameSession(sessionId, reason = "WORLD_CARD_UPDATED") {
  if (!sessionId) return null;
  const result = await query(
    `update game_sessions
     set status = 'interrupted',
         interrupted_at = now(),
         interrupted_reason = $2,
         updated_at = now()
     where id = $1
     returning id, status, interrupted_at, interrupted_reason`,
    [sessionId, String(reason || "WORLD_CARD_UPDATED")]
  );
  return result.rows[0] || null;
}

export async function interruptSessionsByWorldVersion({
  worldCardId,
  nextGameplayVersion,
  reason = "WORLD_CARD_UPDATED"
}) {
  const safeWorldId = String(worldCardId || "").trim();
  if (!safeWorldId) return [];
  const targetVersion = Math.max(1, Number(nextGameplayVersion || 1) || 1);
  const result = await query(
    `update game_sessions
     set status = 'interrupted',
         interrupted_at = now(),
         interrupted_reason = $3,
         updated_at = now()
     where world_card_id = $1::uuid
       and deleted_at is null
       and status in ('active', 'paused')
       and coalesce(gameplay_version, 1) < $2
       and ended_at is null
     returning id, user_id, world_card_id, gameplay_version`,
    [safeWorldId, targetVersion, String(reason || "WORLD_CARD_UPDATED")]
  );
  return result.rows;
}

export async function createTurn({
  sessionId,
  userInput,
  narrative,
  stateDelta,
  promptQuestion,
  promptOptions,
  provider,
  errorMessage
}) {
  const nextRound = await query(
    `update game_sessions
     set round_no = round_no + 1,
         current_round_no = current_round_no + 1,
         status = 'active',
         paused_at = null,
         updated_at = now()
     where id = $1
     returning round_no`,
    [sessionId]
  );

  if (!nextRound.rows[0]) return null;

  const roundNo = nextRound.rows[0].round_no;

  await query(
    `insert into game_turns(
      session_id, round_no, user_input, narrative, state_delta, prompt_question, prompt_options, provider, error_message
    )
     values ($1, $2, $3, $4, $5::jsonb, $6, $7::jsonb, $8, $9)`,
    [
      sessionId,
      roundNo,
      userInput,
      narrative,
      JSON.stringify(stateDelta || {}),
      promptQuestion || null,
      JSON.stringify(promptOptions || []),
      provider || null,
      errorMessage || null
    ]
  );

  return { roundNo };
}

export async function getLatestTurnBySessionId(sessionId) {
  const result = await query(
    `select round_no, user_input, narrative, state_delta
     from game_turns
     where session_id = $1
     order by round_no desc
     limit 1`,
    [sessionId]
  );
  return result.rows[0] || null;
}

export async function listTurnsBySessionId(sessionId, limit = 200) {
  const safeLimit = Math.min(500, Math.max(1, Number.parseInt(String(limit || 200), 10) || 200));
  const result = await query(
    `select id, session_id, round_no, user_input, narrative, state_delta, prompt_question, prompt_options, provider, created_at
     from game_turns
     where session_id = $1
     order by round_no asc
     limit $2`,
    [sessionId, safeLimit]
  );
  return result.rows;
}
