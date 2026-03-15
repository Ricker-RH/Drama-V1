const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);

const CREATOR_CARD_SCHEMA = {
  version: "v3",
  modes: {
    long_narrative: {
      label: "世界卡",
      required: ["openingLine", "worldSetting", "playerIdentity", "primaryGoal", "coreConflict", "fixedNpcs"],
      optional: ["resourceSystem", "toneStyle", "forbiddenRules", "detailMemorySeed"]
    },
    short_narrative: {
      label: "故事卡",
      required: ["openingLine", "openingAnchor", "endingAnchors", "fixedNpcs", "scopeLimits", "primaryGoal", "coreConflict"],
      optional: ["branchSeeds", "pacingHint", "cluePool"]
    },
    virtual_character: {
      label: "角色卡",
      required: ["personaName", "relationStart", "personaCore", "dialogueStyle", "relationBoundary", "taboos", "openingLine", "memoryHooks"],
      optional: ["triggerWords", "growthMilestones"]
    }
  }
};

function normalizeMode(value = "") {
  const mode = String(value || "").trim().toLowerCase();
  return VALID_MODES.has(mode) ? mode : "";
}

function inferModeFromText(text = "") {
  const src = String(text || "");
  if (!src.trim()) return "long_narrative";
  const charScore = (src.match(/角色|人设|对话|语气|边界|禁忌|她|他|同桌|总裁|青梅|关系/g) || []).length;
  const storyScore = (src.match(/开场|结局|三幕|序章|支线|分歧|结尾|反转/g) || []).length;
  const worldScore = (src.match(/世界观|阵营|资源|势力|规则|背景|沙盒|地图/g) || []).length;
  if (charScore >= storyScore && charScore >= worldScore && charScore >= 2) return "virtual_character";
  if (storyScore >= worldScore && storyScore >= 2) return "short_narrative";
  return "long_narrative";
}

function linesOf(text = "") {
  return String(text || "")
    .split(/\n+/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function firstSentence(text = "", fallback = "") {
  const src = String(text || "").trim();
  if (!src) return fallback;
  const hit = src.split(/[。！？!?]/).map((x) => x.trim()).find(Boolean);
  return hit || fallback;
}

function joinPicked(items = [], n = 3) {
  return items.filter(Boolean).slice(0, n).join(" / ");
}

function heuristicParseByMode(mode, text) {
  const src = String(text || "").trim();
  const lines = linesOf(src);
  const first = firstSentence(src, "");
  const seedPeople = joinPicked(
    (src.match(/[^\s，。；、“”]{2,10}(?:老师|同桌|男士|女士|店员|经理|总监|队长|学长|学姐|邻居|前台|陌生人)/g) || [])
      .map((x) => x.trim()),
    4
  );
  const seedObjects = joinPicked((src.match(/酒杯|吧台|窗边|名单|纸条|课本|工牌|屏幕|档案|走廊|风声|雨声|音乐|灯光/g) || []), 4);

  if (mode === "virtual_character") {
    const nameHit = src.match(/(?:她叫|他叫|我是|名字是|名叫)\s*([^\s，。；、“”]{2,8})/);
    const personaName = (nameHit?.[1] || "").trim() || "未命名角色";
    return {
      personaName,
      relationStart: "初次接触，彼此试探边界。",
      personaCore: first || "克制外壳下有明显情绪波动，重视承诺兑现。",
      dialogueStyle: "短句、带停顿、可反问，避免功能提示口吻。",
      relationBoundary: "不接受情绪勒索，不在公开场合暴露私域关系。",
      taboos: "隐私越界 / 强迫表态 / 公开羞辱。",
      openingLine: first || "她抬眼看向你，手指在杯沿轻敲了一下。",
      memoryHooks: joinPicked([seedObjects, seedPeople, "上一回合未兑现承诺"], 3) || "杯沿轻敲 / 视线停顿 / 未说出口的话",
      triggerWords: "失控、兑现、边界、真话",
      growthMilestones: "信任阈值 20/50/80：信息交换 / 共同行动 / 私域坦白"
    };
  }

  if (mode === "short_narrative") {
    return {
      openingLine: first || "你刚踏入现场，局势已经逼近临界点。",
      openingAnchor: first || "突发事件打断日常秩序，你被迫在有限时间内选择站位。",
      endingAnchors: "A 正面翻盘达成目标；B 代价换胜；C 保底过线但错失关键机会",
      fixedNpcs: seedPeople || "关键角色A（支持） / 关键角色B（对立） / 关键角色C（摇摆）",
      scopeLimits: "限定在当前主场景及其相邻区域，不跨城跳场。",
      primaryGoal: "在限定回合内完成一次可验证的关键突破。",
      coreConflict: first || "资源与关系不可兼得，任何选择都有代价。",
      branchSeeds: joinPicked([seedObjects, "关系线 / 证据线 /资源线"], 2) || "关系线 / 证据线 / 资源线",
      pacingHint: "3回合内给正反馈，8回合内触发结局分歧。",
      cluePool: seedObjects || "名单 / 纸条 / 监控记录"
    };
  }

  return {
    openingLine: first || "你刚踏入现场，局势已经处于高压临界点。",
    worldSetting: src.slice(0, 140) || "多势力共存的灰度都市，信息与关系同等重要。",
    playerIdentity: "夹在多方势力之间的行动者，拥有稀缺但危险的信息。",
    primaryGoal: "在高压环境中完成一次可验证的主线突破。",
    coreConflict: first || "真相价值越高，公开成本越高。",
    fixedNpcs: seedPeople || "情报中介 / 规则守门人 / 竞争对手",
    resourceSystem: "信用、关系债、可验证证据",
    toneStyle: "冷峻、近景、强因果",
    forbiddenRules: "禁止跨世界串线；禁止无代价全知全能推进。",
    detailMemorySeed: seedObjects || "门口风声 / 桌面划痕 / 灯光盲区"
  };
}

function findMissingFields(mode, draft) {
  const req = CREATOR_CARD_SCHEMA.modes[mode]?.required || [];
  return req.filter((k) => !String(draft?.[k] || "").trim());
}

async function parseByModel(mode, text) {
  const apiKey = String(process.env.OPENAI_API_KEY || "").trim();
  if (!apiKey || apiKey.includes("<")) return null;
  const apiBase = String(process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").trim();
  const model = String(process.env.OPENAI_MODEL || "gpt-4.1-mini").trim();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const schema = CREATOR_CARD_SCHEMA.modes[mode];
    const resp = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content: [
              "你是卡片结构拆分器。",
              "任务：把用户自由文本拆成指定字段，输出严格 JSON。",
              "禁止输出 markdown、解释、代码块。"
            ].join("\n")
          },
          {
            role: "user",
            content: JSON.stringify({
              mode,
              required: schema?.required || [],
              optional: schema?.optional || [],
              text
            })
          }
        ]
      }),
      signal: controller.signal
    });
    if (!resp.ok) return null;
    const data = await resp.json().catch(() => ({}));
    const content = String(data?.choices?.[0]?.message?.content || "").trim();
    if (!content) return null;
    const parsed = JSON.parse(content);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export function getCreatorCardSchema(mode = "") {
  const m = normalizeMode(mode);
  if (m) {
    return { version: CREATOR_CARD_SCHEMA.version, mode: m, schema: CREATOR_CARD_SCHEMA.modes[m] };
  }
  return CREATOR_CARD_SCHEMA;
}

export async function parseCreatorCardIdea({ mode, text }) {
  const src = String(text || "").trim();
  const inferredMode = normalizeMode(mode) || inferModeFromText(src);
  const heuristic = heuristicParseByMode(inferredMode, src);
  const modelParsed = await parseByModel(inferredMode, src);
  const merged = { ...heuristic, ...(modelParsed && typeof modelParsed === "object" ? modelParsed : {}) };
  const missingFields = findMissingFields(inferredMode, merged);
  const warnings = [];
  if (!src) warnings.push("输入为空，已使用默认骨架填充。");
  if (missingFields.length) warnings.push(`仍缺少关键字段：${missingFields.join("、")}`);
  return {
    mode: inferredMode,
    normalizedDraft: merged,
    missingFields,
    warnings,
    source: modelParsed ? "ai_split" : "heuristic_split",
    confidence: modelParsed ? 0.86 : 0.62
  };
}
