import { json, parseBody } from "../core/http.js";
import {
  createGameSession,
  createTurn,
  getWorldCardRuntimeMeta,
  getGameSessionById,
  getLatestTurnBySessionId,
  listTurnsBySessionId,
  pauseGameSession,
  interruptGameSession,
  attachGameSessionStoryCard,
  updateGameSessionModel
} from "../repos/game-repo.js";
import {
  appendStoryConversationTurnMessages,
  findOrCreateStoryConversationByWorld,
  listConversationMemberUserIds
} from "../repos/message-repo.js";
import { getPromptMeta, loadSystemPrompt, runStoryTurn, runStoryTurnStream } from "../services/story-engine.js";
import { rewriteUserInputForTurn } from "../services/input-rewriter.js";
import { resolveOpeningLineForFirstTurn } from "../services/opening-line-assist.js";
import { publishMessageEventToUsers } from "../services/message-realtime.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

const memorySessions = new Map();
const memoryTurns = new Map();
const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);
const STORY_SFW_GUARD_ENABLED = String(process.env.STORY_SFW_GUARD || "true").trim().toLowerCase() !== "false";

function isUuid(value = "") {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "").trim()
  );
}

function isMemorySessionId(value = "") {
  return /^mem_[A-Za-z0-9_-]{6,}$/.test(String(value || "").trim());
}

function isSupportedSessionId(value = "", inMemory = false) {
  const sid = String(value || "").trim();
  if (!sid) return false;
  return inMemory ? isMemorySessionId(sid) : isUuid(sid);
}

function normalizeMode(value) {
  const mode = String(value || "").trim().toLowerCase();
  return VALID_MODES.has(mode) ? mode : "";
}

function hasUsableDatabaseUrl() {
  const raw = String(process.env.DATABASE_URL || "").trim();
  if (!raw) return false;
  // Treat template placeholders as "not configured", so local demo can fall back to memory mode.
  if (raw.includes("<") || raw.includes(">")) return false;
  try {
    const u = new URL(raw);
    return Boolean(u.protocol && u.hostname);
  } catch {
    return false;
  }
}

function useMemoryStore() {
  const dbReady = hasUsableDatabaseUrl();
  if (!dbReady) return true;
  // Prefer DB whenever available to keep local/dev behavior consistent with deployment.
  // Use FORCE_MEMORY_STORE=true only when DB is unavailable.
  return false;
}

function createMemorySession({ userId, category, subCategory, mode, currentModel, worldCardId, gameplayVersion = 1, appearanceVersion = 1 }) {
  const id = `mem_${Date.now()}`;
  const session = {
    id,
    user_id: userId || null,
    category,
    sub_category: subCategory,
    mode: normalizeMode(mode) || null,
    world_card_id: String(worldCardId || "").trim() || null,
    current_model: String(currentModel || "").trim() || null,
    story_context: null,
    gameplay_version: Math.max(1, Number(gameplayVersion || 1) || 1),
    appearance_version: Math.max(1, Number(appearanceVersion || 1) || 1),
    status: "active",
    round_no: 0,
    current_round_no: 0,
    created_at: new Date().toISOString()
  };
  memorySessions.set(id, session);
  memoryTurns.set(id, []);
  return session;
}

function getMemorySessionById(id) {
  return memorySessions.get(id) || null;
}

function createMemoryTurn({ sessionId, userInput, narrative, stateDelta }) {
  const session = memorySessions.get(sessionId);
  if (!session) return null;
  session.round_no += 1;
  session.current_round_no = session.round_no;
  session.status = "active";
  const turn = {
    id: `mem_turn_${session.round_no}`,
    session_id: sessionId,
    roundNo: session.round_no,
    userInput,
    narrative,
    stateDelta,
    createdAt: new Date().toISOString(),
    created_at: new Date().toISOString()
  };
  memoryTurns.get(sessionId)?.push(turn);
  return turn;
}

function getMemoryLatestTurn(sessionId) {
  const turns = memoryTurns.get(sessionId) || [];
  if (!turns.length) return null;
  const last = turns[turns.length - 1];
  return {
    round_no: Number(last.roundNo || turns.length),
    user_input: String(last.userInput || ""),
    narrative: String(last.narrative || ""),
    state_delta: last.stateDelta || {}
  };
}

function listMemoryTurns(sessionId, limit = 200) {
  const turns = memoryTurns.get(sessionId) || [];
  const safeLimit = Math.min(500, Math.max(1, Number.parseInt(String(limit || 200), 10) || 200));
  return turns.slice(-safeLimit).map((turn, idx) => ({
    id: String(turn.id || `mem_turn_${idx + 1}`),
    session_id: sessionId,
    round_no: Number(turn.roundNo || idx + 1),
    user_input: String(turn.userInput || ""),
    narrative: String(turn.narrative || ""),
    state_delta: turn.stateDelta || {},
    prompt_question: null,
    prompt_options: [],
    provider: null,
    created_at: turn.created_at || turn.createdAt || new Date().toISOString()
  }));
}

function pauseMemorySession(sessionId) {
  const session = memorySessions.get(sessionId);
  if (!session) return null;
  if (["interrupted", "completed", "archived"].includes(String(session.status || ""))) {
    return {
      id: session.id,
      status: session.status,
      paused_at: session.paused_at || null
    };
  }
  session.status = "paused";
  session.paused_at = new Date().toISOString();
  memorySessions.set(sessionId, session);
  return {
    id: session.id,
    status: session.status,
    paused_at: session.paused_at
  };
}

function parseSessionId(pathname = "") {
  const m = pathname.match(/^\/api\/v1\/game\/sessions\/([^/]+)$/);
  return m?.[1] || "";
}

function parsePauseSessionId(pathname = "") {
  const m = pathname.match(/^\/api\/v1\/game\/sessions\/([^/]+)\/pause$/);
  return m?.[1] || "";
}

function toUserFacingTurnError(llmResult) {
  const reason = String(llmResult?.providerReason || "llm turn generation failed");
  if (/quality_gate_failed/i.test(reason)) {
    const qualityKeys = extractQualityFailureKeys(reason);
    if (
      qualityKeys.includes("scene_reset_risk")
      || qualityKeys.includes("high_repeat_with_previous_turn")
      || qualityKeys.includes("opening_template_repeat")
      || qualityKeys.includes("compound_quality_failure")
    ) {
      return "文本质量门禁未通过（检测到重复或回档），已自动重试后仍失败，请换一种更具体的行动描述再试";
    }
    return "文本质量门禁未通过（自动重试后仍失败），请重试或换一种更明确的行动描述";
  }
  if (/fetch failed|networkerror|network request failed/i.test(reason)) {
    return "上游模型网络波动（已自动重试后仍失败），请稍后重试";
  }
  if (/ECONNRESET|UND_ERR_SOCKET|UND_ERR_HEADERS_TIMEOUT|ETIMEDOUT|ABORTERROR/i.test(reason)) {
    return "上游模型连接波动（自动重试后仍失败），请稍后重试";
  }
  if (/LLM_HTTP_429/i.test(reason)) {
    if (/insufficient|余额|quota|额度|credit/i.test(reason)) {
      return "模型额度不足或配额受限，请检查 Kimi 账户额度/并发限制";
    }
    const retryAfter = reason.match(/RETRY_AFTER_(\d{1,5})/i)?.[1];
    if (retryAfter) return `模型限流中，建议约 ${retryAfter} 秒后重试`;
    return "模型请求过于频繁，请稍后再试";
  }
  if (/LLM_HTTP_5\d\d/i.test(reason)) {
    return "模型服务暂时不可用，请稍后重试";
  }
  if (/missing_json_block|missing_narrative_block|json_parse_failed/i.test(reason)) {
    return "模型返回格式不完整（已自动重试后仍失败），请重试或切换模型";
  }
  return reason;
}

function containsUnsafeEroticContent(text = "") {
  const src = String(text || "").toLowerCase();
  if (!src) return false;
  const hardKeywords = [
    "强奸", "轮奸", "迷奸", "性奴", "做爱", "口交", "性交", "裸照", "援交",
    "乱伦", "约炮", "sm", "调教", "颜射", "射精", "下体", "阴茎", "阴道"
  ];
  if (hardKeywords.some((kw) => src.includes(kw))) return true;
  const minors = ["未成年", "小学生", "初中生", "高中生", "同桌", "老师", "校园"];
  const sexual = ["性", "色情", "露骨", "上床", "摸", "强吻", "举动", "挑逗", "欲望"];
  const minorHit = minors.some((kw) => src.includes(kw));
  const sexualHit = sexual.some((kw) => src.includes(kw));
  return minorHit && sexualHit;
}

function sanitizeNarrativeForSafety(text = "") {
  const src = String(text || "").trim();
  if (!src) return "";
  if (!STORY_SFW_GUARD_ENABLED) return src;
  if (!containsUnsafeEroticContent(src)) return src;
  return "系统提示：当前文本触发安全策略，已自动拦截。请使用非敏感、健康的剧情描述继续推进。";
}

function extractQualityFailureKeys(reason) {
  const raw = String(reason || "");
  if (!/quality_gate_failed:/i.test(raw)) return [];
  const segment = raw.split(/quality_gate_failed:/i)[1] || "";
  return segment
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function isRepeatRollbackQualityFailure(llmResult) {
  const reasonKeys = extractQualityFailureKeys(llmResult?.providerReason || "");
  const issueKeys = Array.isArray(llmResult?.qualityIssues) ? llmResult.qualityIssues : [];
  const hardKeys = Array.isArray(llmResult?.qualityHardFailures) ? llmResult.qualityHardFailures : [];
  const keySet = new Set(
    [...reasonKeys, ...issueKeys, ...hardKeys]
      .map((x) => String(x || "").trim())
      .filter(Boolean)
  );
  return (
    keySet.has("scene_reset_risk")
    || keySet.has("high_repeat_with_previous_turn")
    || keySet.has("opening_template_repeat")
    || keySet.has("compound_quality_failure")
  );
}

function toPartialTurnFromFailedResult(llmResult, source = "fallback") {
  const streamedNarrative = String(llmResult?.narrativeBlock || "").trim();
  if (!streamedNarrative) return null;
  const reason = String(llmResult?.providerReason || "");
  return {
    failed: false,
    jsonBlock: llmResult?.jsonBlock || {},
    narrativeBlock: streamedNarrative,
    provider: llmResult?.provider || "openai",
    providerReason: `${source}:${reason.slice(0, 180)}`
  };
}

function sseWrite(res, event, payload) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function buildPlaySessionCardPayload({
  session,
  worldMeta,
  chapter = ""
}) {
  const safeSession = session && typeof session === "object" ? session : {};
  const safeWorld = worldMeta && typeof worldMeta === "object" ? worldMeta : {};
  const worldId = String(safeSession.world_card_id || safeWorld.id || "").trim();
  const title = String(safeWorld.title || "").trim() || "未命名故事";
  const coverUrl = String(safeWorld.cover_url || "").trim();
  return {
    kind: "play_session",
    sessionId: String(safeSession.id || "").trim(),
    worldId,
    title,
    coverUrl,
    mode: String(safeSession.mode || safeWorld.mode || "").trim(),
    chapter: String(chapter || safeWorld.chapter_label || "").trim(),
    gameplayVersion: Math.max(1, Number(safeSession.gameplay_version || safeWorld.gameplay_version || 1) || 1),
    appearanceVersion: Math.max(1, Number(safeSession.appearance_version || safeWorld.appearance_version || 1) || 1),
    status: String(safeSession.status || "active").trim() || "active"
  };
}

function resolveStoryConversationAvatar(worldMeta = {}) {
  return String(worldMeta?.first_image_url || worldMeta?.cover_url || "").trim();
}

async function ensureSessionRuntimeCompatibility({ session, inMemory }) {
  if (!session) return { ok: false, code: "SESSION_NOT_FOUND", message: "session not found", worldMeta: null };
  const status = String(session.status || "active").trim() || "active";
  if (status === "interrupted") {
    return {
      ok: false,
      code: "SESSION_INTERRUPTED",
      message: "该剧情已发布新版本，请退出后重新进入",
      worldMeta: null
    };
  }
  if (status === "completed" || status === "archived") {
    return {
      ok: false,
      code: "SESSION_ENDED",
      message: "该局已结束，请重新开始新剧情",
      worldMeta: null
    };
  }
  const worldCardId = String(session.world_card_id || "").trim();
  if (!worldCardId) return { ok: true, worldMeta: null };
  if (inMemory) return { ok: true, worldMeta: null };
  const worldMeta = await getWorldCardRuntimeMeta(worldCardId);
  if (!worldMeta) {
    await interruptGameSession(session.id, "WORLD_CARD_UNAVAILABLE");
    return {
      ok: false,
      code: "WORLD_CARD_UNAVAILABLE",
      message: "当前故事已下线或不可用，请重新选择故事",
      worldMeta: null
    };
  }
  const sessionVersion = Math.max(1, Number(session.gameplay_version || 1) || 1);
  const currentVersion = Math.max(1, Number(worldMeta.gameplay_version || 1) || 1);
  if (currentVersion > sessionVersion) {
    await interruptGameSession(session.id, "WORLD_CARD_UPDATED");
    return {
      ok: false,
      code: "SESSION_INTERRUPTED",
      message: "该剧情新版本已上线，请退出后重新进入",
      worldMeta
    };
  }
  return { ok: true, worldMeta };
}

function getSessionMeta({ session, requestMode, body, latestTurn }) {
  const requestModel = String(body?.model || "").trim();
  const sessionModel = String(session?.current_model || session?.currentModel || "").trim();
  const worldCardId = String(session?.world_card_id || "").trim();
  const storyContext = body.storyContext || session.story_context || null;
  return {
    id: session.id,
    userId: String(session?.user_id || "").trim(),
    worldCardId,
    storyConversationId: String(session?.story_conversation_id || "").trim(),
    storyTitle: String(
      storyContext?.title
      || storyContext?.worldTitle
      || ""
    ).trim(),
    storyAvatarUrl: String(
      storyContext?.coverUrl
      || storyContext?.firstImageUrl
      || storyContext?.avatarUrl
      || ""
    ).trim(),
    category: session.category || "悬疑",
    subCategory: session.sub_category || session.subCategory || "都市追踪",
    mode: requestMode || normalizeMode(session.mode) || "",
    model: requestModel || sessionModel || "Prose-4",
    storyContext,
    previousTurn: latestTurn
      ? {
          roundNo: Number(latestTurn.round_no || 0),
          userInput: String(latestTurn.user_input || ""),
          narrative: String(latestTurn.narrative || ""),
          stateDelta: latestTurn.state_delta || {}
        }
      : null
  };
}

async function buildFirstTurnOpeningResult(sessionMeta = {}, turnIndex = 1) {
  if (Number(turnIndex || 0) !== 1) return null;
  const opening = await resolveOpeningLineForFirstTurn(sessionMeta);
  const text = String(opening?.text || "").trim();
  if (!text) return null;
  return {
    failed: false,
    jsonBlock: {},
    narrativeBlock: text,
    provider: opening?.assisted ? "opening_assist" : "opening_line",
    providerReason: String(opening?.source || "").trim() || "opening_line_dispatch"
  };
}

async function persistTurnAndBuildResponse({
  inMemory,
  body,
  llmResult,
  sessionMeta,
  turnIndex,
  rewriteMeta = null
}) {
  const actionResult = sanitizeNarrativeForSafety(llmResult.narrativeBlock);
  const stateDelta = llmResult.jsonBlock?.state_delta || {};
  const promptQuestion = llmResult?.jsonBlock?.prompt_question || "";
  const promptOptions = Array.isArray(llmResult?.jsonBlock?.prompt_options)
    ? llmResult.jsonBlock.prompt_options
    : [];

  const turn = inMemory
    ? createMemoryTurn({
        sessionId: body.sessionId,
        userInput: body.input,
        narrative: actionResult,
        stateDelta
      })
    : await createTurn({
        sessionId: body.sessionId,
        userInput: body.input,
        narrative: actionResult,
        stateDelta,
        promptQuestion,
        promptOptions,
        provider: llmResult.provider || "",
        errorMessage: llmResult.providerReason || ""
      });
  if (!turn) {
    return null;
  }
  if (!inMemory) {
    try {
      const worldCardId = String(sessionMeta?.worldCardId || "").trim();
      const userId = String(sessionMeta?.userId || "").trim();
      const sessionId = String(body?.sessionId || "").trim();
      if (worldCardId && userId && sessionId) {
        let conversationId = String(sessionMeta?.storyConversationId || "").trim();
        if (!conversationId) {
          const storyConversation = await findOrCreateStoryConversationByWorld({
            userId,
            worldCardId,
            title: sessionMeta?.storyTitle || "故事会话",
            avatarUrl: sessionMeta?.storyAvatarUrl || "",
            latestSessionId: sessionId
          });
          conversationId = String(storyConversation?.id || "").trim();
          if (conversationId) {
            await attachGameSessionStoryCard(sessionId, conversationId, null);
            sessionMeta.storyConversationId = conversationId;
          }
        }
        if (conversationId) {
          const appended = await appendStoryConversationTurnMessages({
            conversationId,
            userId,
            worldCardId,
            sessionId,
            roundNo: Number(turn?.roundNo || 0),
            userInput: body?.input,
            narrative: actionResult
          });
          if (Array.isArray(appended) && appended.length) {
            const memberUserIds = await listConversationMemberUserIds(conversationId);
            appended.forEach((message) => {
              publishMessageEventToUsers(memberUserIds, "message:new", {
                conversationId,
                message,
                serverTime: new Date().toISOString()
              });
            });
          }
          invalidateBootstrapCoreCache();
        }
      }
    } catch {
      // non-blocking for game turn success
    }
  }
  return {
    actionResult: llmResult.narrativeBlock,
    jsonBlock: llmResult.jsonBlock,
    provider: llmResult.provider,
    providerReason: llmResult.providerReason || "",
    inputAssist: rewriteMeta || null,
    prompt: getPromptMeta(),
    stateDelta,
    round: turn.roundNo
  };
}

export async function handleGame(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/v1/game/prompt/status") {
    try {
      await loadSystemPrompt();
      return json(res, 200, {
        ok: true,
        prompt: getPromptMeta()
      });
    } catch (error) {
      return json(res, 500, {
        ok: false,
        code: "PROMPT_LOAD_FAILED",
        message: error instanceof Error ? error.message : "failed to load prompt"
      });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/game/sessions") {
    const body = await parseBody(req);
    const requestMode = normalizeMode(body.mode || body?.storyContext?.mode);
    const inMemory = useMemoryStore();
    const worldCardId = String(body.worldCardId || body.worldId || body.storyContext?.worldId || "").trim() || null;
    const worldMeta = worldCardId && !inMemory
      ? await getWorldCardRuntimeMeta(worldCardId)
      : null;

    const payload = {
      userId: body.userId || null,
      category: body.category || "悬疑",
      subCategory: body.subCategory || "都市追踪",
      mode: requestMode || normalizeMode(worldMeta?.mode) || null,
      storyContext: body.storyContext && typeof body.storyContext === "object" ? body.storyContext : null,
      worldCardId,
      currentModel: body.model || "Prose-4",
      gameplayVersion: Math.max(1, Number(worldMeta?.gameplay_version || 1) || 1),
      appearanceVersion: Math.max(1, Number(worldMeta?.appearance_version || 1) || 1)
    };

    const session = inMemory
      ? createMemorySession(payload)
      : await createGameSession(payload);
    if (inMemory && payload.storyContext) {
      session.story_context = payload.storyContext;
      if (!session.mode) session.mode = normalizeMode(payload.storyContext.mode) || null;
      memorySessions.set(session.id, session);
    }

    let storyCard = null;
    let warning = "";
    if (!inMemory && payload.userId && session?.id && session?.world_card_id) {
      try {
        const storyConversation = await findOrCreateStoryConversationByWorld({
          userId: payload.userId,
          worldCardId: session.world_card_id,
          title: String(worldMeta?.title || "").trim() || "故事会话",
          avatarUrl: resolveStoryConversationAvatar(worldMeta),
          latestSessionId: session.id
        });
        await attachGameSessionStoryCard(session.id, storyConversation.id, null);
        storyCard = {
          conversationId: storyConversation.id,
          messageId: null
        };
        invalidateBootstrapCoreCache();
      } catch (error) {
        warning = error instanceof Error ? error.message : "STORY_CARD_CREATE_FAILED";
      }
    }

    return json(res, 201, { session, storyCard, warning: warning || undefined });
  }

  if (req.method === "GET") {
    const sessionId = parseSessionId(pathname);
    if (sessionId) {
      const reqUrl = new URL(req.url, "http://127.0.0.1");
      const userId = String(reqUrl.searchParams.get("userId") || "").trim();
      const limit = Number.parseInt(String(reqUrl.searchParams.get("limit") || "200"), 10);
      const inMemory = useMemoryStore();
      if (!isSupportedSessionId(sessionId, inMemory)) {
        return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
      }
      const session = inMemory
        ? getMemorySessionById(sessionId)
        : await getGameSessionById(sessionId);
      if (!session) {
        return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
      }
      const ownerId = String(session.user_id || "").trim();
      if (userId && ownerId && userId !== ownerId) {
        return json(res, 403, { code: "SESSION_FORBIDDEN", message: "session is not owned by current user" });
      }
      const compat = await ensureSessionRuntimeCompatibility({ session, inMemory });
      const turns = inMemory
        ? listMemoryTurns(sessionId, limit)
        : await listTurnsBySessionId(sessionId, limit);
      const currentSession = inMemory
        ? getMemorySessionById(sessionId)
        : await getGameSessionById(sessionId);
      return json(res, 200, {
        session: currentSession || session,
        turns,
        resumeAllowed: Boolean(compat.ok),
        reason: compat.ok ? "" : String(compat.message || ""),
        code: compat.ok ? "" : String(compat.code || ""),
        world: compat.worldMeta || null
      });
    }
  }

  if (req.method === "POST") {
    const pauseSessionId = parsePauseSessionId(pathname);
    if (pauseSessionId) {
      const body = await parseBody(req);
      const userId = String(body?.userId || "").trim();
      const inMemory = useMemoryStore();
      if (!isSupportedSessionId(pauseSessionId, inMemory)) {
        return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
      }
      const session = inMemory
        ? getMemorySessionById(pauseSessionId)
        : await getGameSessionById(pauseSessionId);
      if (!session) {
        return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
      }
      const ownerId = String(session.user_id || "").trim();
      if (userId && ownerId && userId !== ownerId) {
        return json(res, 403, { code: "SESSION_FORBIDDEN", message: "session is not owned by current user" });
      }
      const paused = inMemory
        ? pauseMemorySession(pauseSessionId)
        : await pauseGameSession(pauseSessionId);
      return json(res, 200, { session: paused || null });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/game/turns/stream") {
    const body = await parseBody(req);
    if (!body.sessionId || !body.input) {
      return json(res, 400, { code: "INVALID_INPUT", message: "sessionId and input are required" });
    }
    const requestMode = normalizeMode(body.mode || body?.storyContext?.mode);
    const inMemory = useMemoryStore();
    if (!isSupportedSessionId(body.sessionId, inMemory)) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }
    const session = inMemory
      ? getMemorySessionById(body.sessionId)
      : await getGameSessionById(body.sessionId);
    if (!session) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }
    const compat = await ensureSessionRuntimeCompatibility({ session, inMemory });
    if (!compat.ok) {
      return json(res, 409, { code: compat.code || "SESSION_INTERRUPTED", message: compat.message || "session interrupted" });
    }
    const latestTurn = inMemory
      ? getMemoryLatestTurn(body.sessionId)
      : await getLatestTurnBySessionId(body.sessionId);
    const requestedModel = String(body.model || "").trim();
    if (requestedModel) {
      if (inMemory) {
        session.current_model = requestedModel;
        memorySessions.set(session.id, session);
      } else {
        await updateGameSessionModel(body.sessionId, requestedModel);
        session.current_model = requestedModel;
      }
    }
    const nextTurnIndex = Number(session.round_no || 0) + 1;

    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    });
    sseWrite(res, "ack", { ok: true, turnIndex: nextTurnIndex });

    const sessionMeta = getSessionMeta({ session, requestMode, body, latestTurn });
    const rewriteMeta = await rewriteUserInputForTurn({
      input: String(body.input),
      sessionMeta
    });
    const effectiveInput = String(rewriteMeta?.effectiveInput || body.input || "");
    const openingResult = await buildFirstTurnOpeningResult(sessionMeta, nextTurnIndex);
    if (openingResult) {
      sseWrite(res, "delta", { text: openingResult.narrativeBlock });
      const response = await persistTurnAndBuildResponse({
        inMemory,
        body,
        llmResult: openingResult,
        sessionMeta,
        turnIndex: nextTurnIndex,
        rewriteMeta
      });
      if (!response) {
        sseWrite(res, "error", {
          code: "SESSION_UPDATE_FAILED",
          message: "failed to update session"
        });
        res.end();
        return true;
      }
      sseWrite(res, "final", { response });
      sseWrite(res, "done", { ok: true });
      res.end();
      return true;
    }
    if (rewriteMeta?.rewritten) {
      sseWrite(res, "notice", {
        type: "input_rewrite",
        message: "已将输入补全为可执行行动，再进行生成。",
        source: rewriteMeta.source || "heuristic"
      });
    }
    let llmResult = await runStoryTurnStream({
      turnIndex: nextTurnIndex,
      input: effectiveInput,
      sessionMeta,
      onNarrativeDelta: (text) => {
        if (!text) return;
        sseWrite(res, "delta", { text });
      }
    });

    if (llmResult?.failed) {
      const streamedNarrative = String(llmResult?.narrativeBlock || "").trim();
      const reason = String(llmResult?.providerReason || "");
      const qualityFailed = /quality_gate_failed/i.test(reason);
      const hardRepeatRollback = qualityFailed && isRepeatRollbackQualityFailure(llmResult);
      if (streamedNarrative) {
        sseWrite(res, "notice", {
          type: "stream_partial_commit",
          message: hardRepeatRollback
            ? "已保留本回合已生成正文并完成落库，建议下回合使用更具体动作推进"
            : qualityFailed
              ? "已使用流式正文完成本回合（已忽略非阻断质量告警），结构化字段将下回合继续校正"
            : "已使用流式正文完成本回合，结构化字段将下回合继续校正"
        });
        llmResult = {
          failed: false,
          jsonBlock: llmResult.jsonBlock || {},
          narrativeBlock: streamedNarrative,
          provider: llmResult.provider || "openai",
          providerReason: qualityFailed
            ? `stream_partial_quality_bypass:${String(llmResult.providerReason || "").slice(0, 120)}`
            : `stream_partial:${String(llmResult.providerReason || "").slice(0, 120)}`
        };
      } else {
        sseWrite(res, "notice", {
          type: "stream_fallback",
          message: "流式结构化解析失败，自动切换标准生成"
        });
        llmResult = await runStoryTurn({
          turnIndex: nextTurnIndex,
          input: effectiveInput,
          sessionMeta,
          options: { maxAttempts: 2 }
        });
        if (llmResult?.failed) {
          sseWrite(res, "error", {
            code: "LLM_TURN_FAILED",
            message: toUserFacingTurnError(llmResult),
            reason: llmResult.providerReason || "llm turn generation failed",
            provider: llmResult.provider || "error"
          });
          res.end();
          return true;
        }
      }
    }

    const response = await persistTurnAndBuildResponse({
      inMemory,
      body,
      llmResult,
      sessionMeta,
      turnIndex: nextTurnIndex,
      rewriteMeta
    });
    if (!response) {
      sseWrite(res, "error", {
        code: "SESSION_UPDATE_FAILED",
        message: "failed to update session"
      });
      res.end();
      return true;
    }
    sseWrite(res, "final", { response });
    sseWrite(res, "done", { ok: true });
    res.end();
    return true;
  }

  if (req.method === "POST" && pathname === "/api/v1/game/turns") {
    const body = await parseBody(req);
    if (!body.sessionId || !body.input) {
      return json(res, 400, { code: "INVALID_INPUT", message: "sessionId and input are required" });
    }
    const requestMode = normalizeMode(body.mode || body?.storyContext?.mode);
    const inMemory = useMemoryStore();
    if (!isSupportedSessionId(body.sessionId, inMemory)) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }

    const session = inMemory
      ? getMemorySessionById(body.sessionId)
      : await getGameSessionById(body.sessionId);
    if (!session) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }
    const compat = await ensureSessionRuntimeCompatibility({ session, inMemory });
    if (!compat.ok) {
      return json(res, 409, { code: compat.code || "SESSION_INTERRUPTED", message: compat.message || "session interrupted" });
    }

    const latestTurn = inMemory
      ? getMemoryLatestTurn(body.sessionId)
      : await getLatestTurnBySessionId(body.sessionId);
    const requestedModel = String(body.model || "").trim();
    if (requestedModel) {
      if (inMemory) {
        session.current_model = requestedModel;
        memorySessions.set(session.id, session);
      } else {
        await updateGameSessionModel(body.sessionId, requestedModel);
        session.current_model = requestedModel;
      }
    }

    const nextTurnIndex = Number(session.round_no || 0) + 1;
    const sessionMeta = getSessionMeta({ session, requestMode, body, latestTurn });
    const rewriteMeta = await rewriteUserInputForTurn({
      input: String(body.input),
      sessionMeta
    });
    const effectiveInput = String(rewriteMeta?.effectiveInput || body.input || "");
    const openingResult = await buildFirstTurnOpeningResult(sessionMeta, nextTurnIndex);
    if (openingResult) {
      const response = await persistTurnAndBuildResponse({
        inMemory,
        body,
        llmResult: openingResult,
        sessionMeta,
        turnIndex: nextTurnIndex,
        rewriteMeta
      });
      if (!response) {
        return json(res, 409, { code: "SESSION_UPDATE_FAILED", message: "failed to update session" });
      }
      return json(res, 200, { response });
    }
    let llmResult = await runStoryTurn({
      turnIndex: nextTurnIndex,
      input: effectiveInput,
      sessionMeta
    });

    if (llmResult?.failed) {
      const partialResult = toPartialTurnFromFailedResult(llmResult, "non_stream_partial_commit");
      if (!partialResult) {
        return json(res, 502, {
          code: "LLM_TURN_FAILED",
          message: toUserFacingTurnError(llmResult),
          reason: llmResult.providerReason || "llm turn generation failed",
          provider: llmResult.provider || "error"
        });
      }
      llmResult = partialResult;
    }

    const response = await persistTurnAndBuildResponse({
      inMemory,
      body,
      llmResult,
      sessionMeta,
      turnIndex: nextTurnIndex,
      rewriteMeta
    });
    if (!response) {
      return json(res, 409, { code: "SESSION_UPDATE_FAILED", message: "failed to update session" });
    }

    return json(res, 200, { response });
  }

  return false;
}
