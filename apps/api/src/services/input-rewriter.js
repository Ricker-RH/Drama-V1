const LOW_INFO_PATTERNS = [
  /^嗯+$/,
  /^哦+$/,
  /^好+$/,
  /^继续$/,
  /^随便$/,
  /^看情况$/,
  /^直觉$/,
  /^不知道$/,
  /^都行$/,
  /^然后呢[？?]?$/,
  /^你说呢[？?]?$/
];

function shouldRewrite(input = "") {
  const src = String(input || "").trim();
  if (!src) return true;
  if (src.length <= 2) return true;
  if (LOW_INFO_PATTERNS.some((re) => re.test(src))) return true;
  const punctuationOnly = /^[。！？,.!?、\s]+$/.test(src);
  if (punctuationOnly) return true;
  return false;
}

function safeText(value, fallback = "") {
  const txt = String(value || "").trim();
  return txt || fallback;
}

function pickAnchor(sessionMeta = {}) {
  const storyContext = sessionMeta?.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  return safeText(
    storyContext.npc
    || storyContext.mainQuest
    || storyContext.title
    || "对方"
  );
}

function heuristicRewrite(input, sessionMeta = {}) {
  const raw = String(input || "").trim();
  const mode = String(sessionMeta?.mode || sessionMeta?.storyContext?.mode || "");
  const anchor = pickAnchor(sessionMeta);
  if (!raw) {
    return {
      effectiveInput: `我先盯住${anchor}的反应，开口问一个具体问题，再决定下一步。`,
      rewritten: true,
      source: "heuristic",
      reason: "empty_input"
    };
  }
  if (/^直觉$/.test(raw)) {
    return {
      effectiveInput: `我看着${anchor}停顿半秒，低声说：这是我的直觉，我想先确认一个具体细节。`,
      rewritten: true,
      source: "heuristic",
      reason: "low_info_keyword"
    };
  }
  if (mode === "virtual_character") {
    return {
      effectiveInput: `我看着${anchor}，语气放低：${raw}。然后观察他/她的第一反应。`,
      rewritten: true,
      source: "heuristic",
      reason: "low_info_input"
    };
  }
  return {
    effectiveInput: `我先围绕${anchor}执行这个动作：${raw}，并立即观察可见反馈。`,
    rewritten: true,
    source: "heuristic",
    reason: "low_info_input"
  };
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

async function rewriteByModel(input, sessionMeta = {}) {
  const apiKey = String(process.env.OPENAI_API_KEY || "").trim();
  if (!apiKey || apiKey.includes("<")) return null;
  const enabled = String(process.env.INPUT_REWRITE_USE_LLM || "true").toLowerCase() !== "false";
  if (!enabled) return null;

  const apiBase = String(process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").trim();
  const model = String(process.env.OPENAI_REWRITE_MODEL || process.env.OPENAI_MODEL || "gpt-4.1-mini").trim();
  const timeoutMsRaw = Number.parseInt(String(process.env.INPUT_REWRITE_TIMEOUT_MS || "8000"), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 8000;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const payload = {
      mode: String(sessionMeta?.mode || sessionMeta?.storyContext?.mode || ""),
      npc: String(sessionMeta?.storyContext?.npc || ""),
      input: String(input || "")
    };
    const resp = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.1,
        messages: [
          {
            role: "system",
            content: [
              "你是输入理解改写器。",
              "任务：将用户短输入改写成“可执行、可观察”的行动句，用于后续叙事生成。",
              "要求：不改变用户立场，不新增关键事实，不替用户做决定。",
              "只输出 JSON：{\"rewrite\":\"...\",\"reason\":\"...\",\"confidence\":0.0}"
            ].join("\n")
          },
          { role: "user", content: JSON.stringify(payload) }
        ]
      }),
      signal: controller.signal
    });
    if (!resp.ok) return null;
    const data = await resp.json().catch(() => ({}));
    const content = String(data?.choices?.[0]?.message?.content || "").trim();
    const parsed = parseJsonObject(content);
    const rewrite = safeText(parsed?.rewrite, "");
    if (!rewrite) return null;
    return {
      effectiveInput: rewrite,
      rewritten: rewrite !== String(input || "").trim(),
      source: "llm",
      reason: safeText(parsed?.reason, "llm_rewrite"),
      confidence: Number(parsed?.confidence || 0)
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function rewriteUserInputForTurn({ input, sessionMeta }) {
  const originalInput = String(input || "").trim();
  if (!shouldRewrite(originalInput)) {
    return {
      originalInput,
      effectiveInput: originalInput,
      rewritten: false,
      source: "none",
      reason: "input_is_specific",
      confidence: 1
    };
  }

  const llm = await rewriteByModel(originalInput, sessionMeta);
  if (llm?.effectiveInput) {
    return {
      originalInput,
      effectiveInput: llm.effectiveInput,
      rewritten: Boolean(llm.rewritten),
      source: llm.source || "llm",
      reason: llm.reason || "llm_rewrite",
      confidence: Number(llm.confidence || 0.75)
    };
  }

  const fallback = heuristicRewrite(originalInput, sessionMeta);
  return {
    originalInput,
    effectiveInput: fallback.effectiveInput,
    rewritten: true,
    source: fallback.source || "heuristic",
    reason: fallback.reason || "heuristic_rewrite",
    confidence: 0.6
  };
}
