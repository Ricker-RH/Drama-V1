import { json, parseBody } from "../core/http.js";
import { createGameSession, createTurn, getGameSessionById, getLatestTurnBySessionId } from "../repos/game-repo.js";
import { getPromptMeta, loadSystemPrompt, runStoryTurn, runStoryTurnStream } from "../services/story-engine.js";
import { rewriteUserInputForTurn } from "../services/input-rewriter.js";

const memorySessions = new Map();
const memoryTurns = new Map();
const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);

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
  if (process.env.FORCE_MEMORY_STORE === "true") return true;
  return !hasUsableDatabaseUrl();
}

function createMemorySession({ userId, category, subCategory, mode }) {
  const id = `mem_${Date.now()}`;
  const session = {
    id,
    user_id: userId || null,
    category,
    sub_category: subCategory,
    mode: normalizeMode(mode) || null,
    story_context: null,
    round_no: 0,
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
  const turn = {
    roundNo: session.round_no,
    userInput,
    narrative,
    stateDelta,
    createdAt: new Date().toISOString()
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
  return reason;
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

function getSessionMeta({ session, requestMode, body, latestTurn }) {
  return {
    id: session.id,
    category: session.category || "悬疑",
    subCategory: session.sub_category || session.subCategory || "都市追踪",
    mode: requestMode || normalizeMode(session.mode) || "",
    storyContext: body.storyContext || session.story_context || null,
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

async function persistTurnAndBuildResponse({
  inMemory,
  body,
  llmResult,
  sessionMeta,
  turnIndex,
  rewriteMeta = null
}) {
  const actionResult = llmResult.narrativeBlock;
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

    const payload = {
      userId: body.userId || null,
      category: body.category || "悬疑",
      subCategory: body.subCategory || "都市追踪",
      mode: requestMode || null,
      storyContext: body.storyContext && typeof body.storyContext === "object" ? body.storyContext : null,
      worldCardId: body.worldCardId || body.storyContext?.worldId || null,
      currentModel: body.model || process.env.OPENAI_MODEL || null
    };

    const session = inMemory
      ? createMemorySession(payload)
      : await createGameSession(payload);
    if (inMemory && payload.storyContext) {
      session.story_context = payload.storyContext;
      if (!session.mode) session.mode = normalizeMode(payload.storyContext.mode) || null;
      memorySessions.set(session.id, session);
    }

    return json(res, 201, { session });
  }

  if (req.method === "POST" && pathname === "/api/v1/game/turns/stream") {
    const body = await parseBody(req);
    if (!body.sessionId || !body.input) {
      return json(res, 400, { code: "INVALID_INPUT", message: "sessionId and input are required" });
    }
    const requestMode = normalizeMode(body.mode || body?.storyContext?.mode);
    const inMemory = useMemoryStore();
    const session = inMemory
      ? getMemorySessionById(body.sessionId)
      : await getGameSessionById(body.sessionId);
    if (!session) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }
    const latestTurn = inMemory
      ? getMemoryLatestTurn(body.sessionId)
      : await getLatestTurnBySessionId(body.sessionId);
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

    const session = inMemory
      ? getMemorySessionById(body.sessionId)
      : await getGameSessionById(body.sessionId);
    if (!session) {
      return json(res, 404, { code: "SESSION_NOT_FOUND", message: "session not found" });
    }

    const latestTurn = inMemory
      ? getMemoryLatestTurn(body.sessionId)
      : await getLatestTurnBySessionId(body.sessionId);

    const nextTurnIndex = Number(session.round_no || 0) + 1;
    const sessionMeta = getSessionMeta({ session, requestMode, body, latestTurn });
    const rewriteMeta = await rewriteUserInputForTurn({
      input: String(body.input),
      sessionMeta
    });
    const effectiveInput = String(rewriteMeta?.effectiveInput || body.input || "");
    const llmResult = await runStoryTurn({
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
