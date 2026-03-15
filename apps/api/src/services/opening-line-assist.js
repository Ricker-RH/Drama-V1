import { resolveRuntimeModelConfig } from "./model-router.js";

function asBoolean(value, fallback = false) {
  if (typeof value === "boolean") return value;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["1", "true", "yes", "on", "y"].includes(text)) return true;
  if (["0", "false", "no", "off", "n"].includes(text)) return false;
  return fallback;
}

function parseJsonObject(text = "") {
  const src = String(text || "").trim();
  if (!src) return null;
  try {
    return JSON.parse(src);
  } catch {
    const m = src.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try {
      return JSON.parse(m[0]);
    } catch {
      return null;
    }
  }
}

async function rewriteOpeningLineWithModel({
  openingLine,
  mode,
  title,
  mainQuest,
  npc,
  modelLabel
}) {
  const cfg = resolveRuntimeModelConfig(modelLabel || "Prose-4");
  if (!String(cfg.apiKey || "").trim() || String(cfg.apiKey || "").includes("<")) {
    return "";
  }
  const timeoutMsRaw = Number.parseInt(String(process.env.OPENING_LINE_ASSIST_TIMEOUT_MS || cfg.timeoutMs || 8000), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 8000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const payload = {
      mode: String(mode || "").trim(),
      title: String(title || "").trim(),
      mainQuest: String(mainQuest || "").trim(),
      npc: String(npc || "").trim(),
      openingLine: String(openingLine || "").trim()
    };
    const response = await fetch(`${cfg.apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`
      },
      body: JSON.stringify({
        model: cfg.model,
        temperature: 0.4,
        messages: [
          {
            role: "system",
            content: [
              "你是剧情开场白润色器。",
              "任务：在不改变核心事实的前提下，对输入开场白做轻度扩写与润色。",
              "要求：保持第二人称沉浸感；避免系统口吻；不引入新设定或新角色；输出 1-3 句中文，总长度 40-180 字。",
              "只输出 JSON：{\"opening\":\"...\"}"
            ].join("\n")
          },
          { role: "user", content: JSON.stringify(payload) }
        ]
      }),
      signal: controller.signal
    });
    if (!response.ok) return "";
    const data = await response.json().catch(() => ({}));
    const content = String(data?.choices?.[0]?.message?.content || "").trim();
    const parsed = parseJsonObject(content);
    return String(parsed?.opening || "").trim();
  } catch {
    return "";
  } finally {
    clearTimeout(timer);
  }
}

export async function resolveOpeningLineForFirstTurn(sessionMeta = {}) {
  const storyContext = sessionMeta?.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const openingLine = String(
    storyContext.opening_line
      || storyContext.openingLine
      || storyContext.opening_anchor
      || storyContext.openingAnchor
      || ""
  ).trim();
  if (!openingLine) return null;

  const useAiAssist = asBoolean(
    storyContext.opening_line_ai_assist
      ?? storyContext.openingLineAiAssist
      ?? storyContext.opening_line_use_ai
      ?? storyContext.openingLineUseAi
      ?? false,
    false
  );
  if (!useAiAssist) {
    return {
      text: openingLine,
      assisted: false,
      source: "opening_line_direct"
    };
  }

  const enabled = String(process.env.OPENING_LINE_ASSIST_USE_LLM || "true").toLowerCase() !== "false";
  if (!enabled) {
    return {
      text: openingLine,
      assisted: false,
      source: "opening_line_llm_disabled"
    };
  }

  const rewritten = await rewriteOpeningLineWithModel({
    openingLine,
    mode: String(sessionMeta?.mode || storyContext.mode || "").trim(),
    title: String(storyContext.title || "").trim(),
    mainQuest: String(storyContext.mainQuest || storyContext.main_quest || "").trim(),
    npc: String(storyContext.npc || "").trim(),
    modelLabel: String(sessionMeta?.model || "Prose-4").trim()
  });
  if (!rewritten) {
    return {
      text: openingLine,
      assisted: false,
      source: "opening_line_llm_fallback"
    };
  }
  return {
    text: rewritten,
    assisted: true,
    source: "opening_line_llm_rewrite"
  };
}

