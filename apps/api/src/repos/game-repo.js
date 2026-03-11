import { query } from "../db/client.js";

export async function createGameSession({ userId, category, subCategory, mode, storyContext, worldCardId, currentModel }) {
  const result = await query(
    `insert into game_sessions(
      user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model
    )
     values ($1, $2, $3, 0, 0, $4, $5::jsonb, $6, $7)
     returning id, user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model, created_at`,
    [
      userId,
      category,
      subCategory,
      mode || null,
      JSON.stringify(storyContext || {}),
      worldCardId || null,
      currentModel || null
    ]
  );

  return result.rows[0];
}

export async function getGameSessionById(id) {
  const result = await query(
    `select id, user_id, category, sub_category, round_no, current_round_no, mode, story_context, world_card_id, current_model, created_at
     from game_sessions where id = $1 limit 1`,
    [id]
  );

  return result.rows[0] || null;
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
     set round_no = round_no + 1, current_round_no = current_round_no + 1, updated_at = now()
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
