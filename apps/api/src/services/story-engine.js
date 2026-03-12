import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const promptFilePath = path.resolve(__dirname, "../../../../system prompt/system_prompt.md");

let cachedPrompt = "";
let promptLoadedAt = 0;
const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);

function normalizeMode(value) {
  const mode = String(value || "").trim().toLowerCase();
  return VALID_MODES.has(mode) ? mode : "";
}

export async function loadSystemPrompt(force = false) {
  if (!force && cachedPrompt) return cachedPrompt;
  const content = await fs.readFile(promptFilePath, "utf-8");
  cachedPrompt = content;
  promptLoadedAt = Date.now();
  return cachedPrompt;
}

export function getPromptMeta() {
  return {
    path: promptFilePath,
    loaded: Boolean(cachedPrompt),
    loadedAt: promptLoadedAt || null,
    size: cachedPrompt.length
  };
}

function pickFallbackScenario(sessionMeta = {}) {
  const category = String(sessionMeta.category || "").toLowerCase();
  const subCategory = String(sessionMeta.subCategory || "").toLowerCase();
  const storyContext = sessionMeta.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const contextBag = [
    storyContext.title,
    storyContext.chapter,
    storyContext.mainQuest,
    storyContext.npc,
    storyContext.clues,
    ...(Array.isArray(storyContext.intro) ? storyContext.intro : []),
    ...(Array.isArray(storyContext.opening) ? storyContext.opening : [])
  ]
    .map((x) => String(x || "").toLowerCase())
    .join(" ");
  const bag = `${category} ${subCategory} ${contextBag}`;

  const scenarios = [
    {
      hit: ["悬疑", "推理", "谜", "密室"],
      quest: "锁定关键嫌疑人并补全证据链",
      clue: "证词存在时间矛盾",
      challenge: "对手正在清理现场信息",
      choiceA: "先保全证据",
      choiceAHint: "你可以输入：优先封存现场并固定证据顺序",
      choiceB: "先追击嫌疑人",
      choiceBHint: "你可以输入：锁定嫌疑人撤离路径并立即追踪",
      narrative: "你沿着线索推进，发现证词与监控时间戳并不一致。真正的突破口不在显眼证据，而在被忽略的细节顺序。"
    },
    {
      hit: ["古风", "权谋", "宫", "朝"],
      quest: "查明账册真伪并争取朝堂话语权",
      clue: "账册印鉴存在后补痕迹",
      challenge: "对方派系提前布局反咬",
      choiceA: "先保命线",
      choiceAHint: "你可以输入：先联络可托底的盟友稳住局面",
      choiceB: "先出手破局",
      choiceBHint: "你可以输入：直接在公开场合抛出关键疑点",
      narrative: "你在层层礼法下寻找可用缝隙，每一步都牵动派系平衡。真正能改局的，不是情绪，而是证据与时机。"
    },
    {
      hit: ["言情", "情感", "婚", "恋"],
      quest: "稳定合作关系并拿下关键投票",
      clue: "外部舆论出现异常放大",
      challenge: "关系与利益线开始互相冲突",
      choiceA: "先统一对外口径",
      choiceAHint: "你可以输入：与合作对象同步公开回应策略",
      choiceB: "先处理内部裂痕",
      choiceBHint: "你可以输入：单独沟通核心矛盾并重建信任",
      narrative: "看似是情感选择，实则每次表态都在改变利益格局。你必须同时管理关系温度与现实筹码。"
    },
    {
      hit: ["创业", "经营", "逆袭", "都市", "门店", "现金流", "商圈", "平台", "复购"],
      quest: "稳住现金流并打出增长拐点",
      clue: "核心数据出现异常波动",
      challenge: "竞争方正在同步压价抢量",
      choiceA: "先守利润",
      choiceAHint: "你可以输入：优先调整成本结构，保住现金流",
      choiceB: "先抢增量",
      choiceBHint: "你可以输入：投放资源冲刺增长窗口",
      narrative: "你把复杂经营问题拆成可执行动作：流量、转化、复购。只要顺序对，逆风也能转成上升曲线。"
    },
    {
      hit: ["科幻", "系统", "末日", "机甲", "废土", "反应堆", "能源", "据点", "边境"],
      quest: "修复核心系统并确保据点安全",
      clue: "控制台日志被人为改写",
      challenge: "资源不足与外部威胁同步逼近",
      choiceA: "先修系统",
      choiceAHint: "你可以输入：优先修复核心模块，保证基础运转",
      choiceB: "先布防线",
      choiceBHint: "你可以输入：先部署防御单元，拖出修复时间",
      narrative: "你在倒计时中做取舍：系统稳定、资源消耗与外部风险彼此牵制。正确决策来自对约束的精确计算。"
    }
  ];

  const matched = scenarios.find((s) => s.hit.some((kw) => bag.includes(String(kw).toLowerCase())));
  return matched || scenarios[0];
}

function buildOpeningResult(input, scenario, sessionMeta = {}) {
  const storyContext = sessionMeta.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const chapter = String(storyContext.chapter || "序幕").trim();
  const mainQuest = String(storyContext.mainQuest || scenario.quest).trim();
  const npc = String(storyContext.npc || "关键角色").trim();
  const clues = String(storyContext.clues || scenario.clue).trim();
  const introLines = (Array.isArray(storyContext.intro) ? storyContext.intro : [])
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  const openingLines = (Array.isArray(storyContext.opening) ? storyContext.opening : [])
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  const introMerged = introLines.length ? introLines.join(" ") : "你已经进入高压局面，任何动作都在重写后续分支。";
  const openingMerged = openingLines.length ? openingLines.join(" ") : "当前窗口正在收缩，局势会在短时间内快速升级。";
  return [
    `【${chapter}】${introMerged}${openingMerged} 你刚进入这一局，局面立刻给出反馈：眼前并非单点冲突，而是由规则、关系与时间窗口共同构成的动态棋盘。`,
    `你的主任务已经非常明确：${mainQuest}。这不是一句口号，而是接下来每回合都要被验证的执行目标。你第一步拿到的信息切口集中在“${clues}”，它决定了你能否在后续回合里把主动权从对手手里夺回来。与此同时，${npc}所在的关系链也在观察你的动作质量，如果你能在当前回合做出低风险高价值的推进，你将获得稳定的协作空间；如果动作粗糙，后续会立刻被贴上不可控标签。`,
    `当前冲突已经浮出水面：${scenario.challenge}。这意味着你既不能原地等待，也不能盲目冲锋。你现在可执行的切入点有两个层次：第一层是“先校验关键线索和边界条件”，确保信息不被假象误导；第二层是“围绕任务目标进行一次可度量推进”，让每个动作都能沉淀为状态增量。你的优势在于你已经先动手验证，而不是被动接招；你的风险在于窗口期不会重来。只要接下来两回合维持正确顺序，你就能把这条主线从生存局推进到反制局。`
  ].join("");
}

function buildTurnResult(input, scenario, sessionMeta = {}) {
  const storyContext = sessionMeta.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const chapter = String(storyContext.chapter || "当前章节").trim();
  const quest = String(storyContext.mainQuest || scenario.quest).trim();
  const clues = String(storyContext.clues || scenario.clue).trim();
  const npc = String(storyContext.npc || "关键角色").trim();
  const action = String(input || "推进主线").trim();
  const actionType = action.includes("核验") || action.includes("验证")
    ? "verify"
    : action.includes("交换") || action.includes("沟通") || action.includes("联络")
      ? "social"
      : action.includes("公开") || action.includes("发布") || action.includes("表态")
        ? "public"
        : "advance";

  if (actionType === "verify") {
    return `你执行了“${action}”，并在【${chapter}】拿到第一层硬反馈：关键材料中的时间戳与登记路径并不完全一致，说明“${clues}”里至少有一项被人为处理过。围绕“${quest}”这条主线，你把模糊风险转成了可验证问题，这一步直接提升了你下一回合的决策质量。${npc} 对你“先验真再表态”的顺序给出了正向响应，但也提醒你窗口期不会等人，若不在下一回合把证据转化为行动，优势会被快速抹平。`;
  }
  if (actionType === "social") {
    return `你执行了“${action}”，并在【${chapter}】拿到关系层反馈：你与${npc}建立了有限互信，对方愿意开放一部分内部视角，但明确要求你在后续回合拿出可落地结果。围绕“${quest}”这条主线，你把原本孤立的信息处理，升级成“信息+协作”的双线推进。代价是你的行动半径被放大后，也更容易被对手捕捉，一旦下一步失误，反制强度会成倍提高。`;
  }
  if (actionType === "public") {
    return `你执行了“${action}”，并在【${chapter}】触发了外部反馈回路：舆论和对手都开始重新评估你的站位。围绕“${quest}”这条主线，这个动作帮你争取到短期关注与议价空间，但也同步抬高了容错成本。${npc} 侧给出的信号很清晰：你已经把局面从暗线拉到明线，接下来必须用“${clues}”中的可验证事实持续支撑，否则这次公开动作会反噬你的可信度。`;
  }
  return `你执行了“${action}”，并在【${chapter}】拿到阶段性推进：围绕“${quest}”这条主线，你先稳住关键边界，再推动一段可度量进展。你把“${clues}”从背景信息转成了可执行抓手，局势因此向你倾斜了一步。${npc} 的态度从观察转向试探性配合，但对手侧已经开始调整应对节奏，你必须在下一回合继续兑现推进质量，才能把当前优势固化下来。`;
}

function fallbackTurn({ provider = "error", providerReason = "llm_unavailable", retryable = false }) {
  return {
    failed: true,
    provider,
    providerReason,
    retryable: Boolean(retryable),
    jsonBlock: null,
    narrativeBlock: ""
  };
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableTransportError(message = "") {
  const msg = String(message || "").toUpperCase();
  if (!msg) return false;
  return [
    "FETCH FAILED",
    "NETWORKERROR",
    "NETWORK REQUEST FAILED",
    "ECONNRESET",
    "ETIMEDOUT",
    "EAI_AGAIN",
    "ENOTFOUND",
    "ECONNREFUSED",
    "UND_ERR_CONNECT_TIMEOUT",
    "UND_ERR_HEADERS_TIMEOUT",
    "UND_ERR_SOCKET",
    "ABORTERROR",
    "LLM_HTTP_429",
    "LLM_HTTP_500",
    "LLM_HTTP_502",
    "LLM_HTTP_503",
    "LLM_HTTP_504"
  ].some((token) => msg.includes(token));
}

function parseRetryAfterSeconds(message = "") {
  const m = String(message || "").match(/RETRY_AFTER_(\d{1,5})/i);
  if (!m) return 0;
  const n = Number.parseInt(m[1], 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function extractTagged(text, tagName) {
  const re = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const m = String(text || "").match(re);
  return m?.[1]?.trim() || "";
}

function extractResultSection(narrativeText) {
  const m = String(narrativeText || "").match(/【结果】\s*([\s\S]*?)(?=\n【[^】]+】|$)/);
  return m?.[1]?.trim() || "";
}

function countVisibleChars(text) {
  return String(text || "").replace(/\s+/g, "").length;
}

function buildContextAnchors(sessionMeta = {}) {
  const storyContext = sessionMeta?.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const raw = [
    storyContext.title,
    storyContext.chapter,
    storyContext.mainQuest,
    storyContext.npc,
    storyContext.clues,
    storyContext.opening_line,
    storyContext.primary_goal,
    storyContext.core_conflict
  ]
    .map((x) => String(x || "").trim())
    .filter(Boolean)
    .join(" / ");

  const genericStop = new Set([
    "主线", "关键角色", "待接触", "初始线索", "关系变化", "环境异动", "你", "世界", "故事", "章节", "序章",
    "推进", "当前任务", "选择", "行动", "目标"
  ]);

  const parts = raw
    .split(/[，。；、,/\-|：:\s\[\]（）()·]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => x.length >= 2 && x.length <= 16)
    .filter((x) => !genericStop.has(x));

  return [...new Set(parts)].slice(0, 20);
}

function buildDetailMemory(sessionMeta = {}) {
  const storyContext = sessionMeta?.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  const previousNarrative = String(sessionMeta?.previousTurn?.narrative || "");
  const previousResult = extractResultSection(previousNarrative) || previousNarrative;
  const contextParts = [
    storyContext.opening_line,
    storyContext.opening_anchor,
    storyContext.title,
    storyContext.chapter,
    storyContext.mainQuest,
    storyContext.npc,
    storyContext.clues,
    storyContext.player_identity,
    storyContext.primary_goal,
    storyContext.core_conflict
  ]
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  const contextTokens = contextParts
    .join(" / ")
    .split(/[，。；、,/\-|：:\s\[\]（）()·]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => x.length >= 2 && x.length <= 16);

  const prevTokens = pickKeyPhrases(previousResult, 2, 16)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => x.length >= 2 && x.length <= 16);

  const merged = [...new Set([...contextTokens, ...prevTokens])];
  return merged.slice(0, 24);
}

function pickKeyPhrases(text, min = 6, max = 20) {
  const matches = String(text || "").match(/[\u4e00-\u9fa5A-Za-z0-9]{6,20}/g) || [];
  return [...new Set(matches)].slice(0, 20);
}

function ngramSet(text, n = 3) {
  const s = String(text || "").replace(/\s+/g, "");
  const set = new Set();
  if (!s) return set;
  if (s.length <= n) {
    set.add(s);
    return set;
  }
  for (let i = 0; i <= s.length - n; i += 1) {
    set.add(s.slice(i, i + n));
  }
  return set;
}

function jaccardSimilarity(a, b) {
  const A = ngramSet(a, 3);
  const B = ngramSet(b, 3);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  A.forEach((x) => {
    if (B.has(x)) inter += 1;
  });
  return inter / (A.size + B.size - inter);
}

function splitNarrativeParagraphs(text) {
  return String(text || "")
    .split(/\n{2,}/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => x.replace(/^【[^】]+】\s*/, "").trim())
    .filter(Boolean);
}

function hasInternalDuplication(narrativeText) {
  const ps = splitNarrativeParagraphs(narrativeText);
  for (let i = 0; i < ps.length; i += 1) {
    for (let j = i + 1; j < ps.length; j += 1) {
      // Avoid false positives on short connective paragraphs.
      if (countVisibleChars(ps[i]) < 80 || countVisibleChars(ps[j]) < 80) continue;
      if (jaccardSimilarity(ps[i], ps[j]) >= 0.84) return true;
    }
  }
  return false;
}

function isActionCovered(input, narrativeText) {
  const keys = pickKeyPhrases(input);
  if (!keys.length) return true;
  const t = String(narrativeText || "");
  const hit = keys.filter((k) => t.includes(k)).length;
  return hit >= 1;
}

function hasContextAnchorCoverage(narrativeText, anchors = [], turnIndex = 1) {
  if (!Array.isArray(anchors) || !anchors.length) return true;
  const text = String(narrativeText || "");
  const hits = anchors.filter((a) => a && text.includes(a)).length;
  if (turnIndex <= 1) return hits >= Math.min(2, anchors.length);
  return hits >= 1;
}

function paragraphAnchorCoverage(narrativeText, anchors = []) {
  const ps = splitNarrativeParagraphs(narrativeText);
  if (!ps.length || !anchors.length) return 1;
  let anchored = 0;
  for (const p of ps) {
    if (anchors.some((a) => a && p.includes(a))) anchored += 1;
  }
  return anchored / ps.length;
}

function countTermHits(text, terms = []) {
  const src = String(text || "");
  let hit = 0;
  for (const term of terms) {
    if (term && src.includes(term)) hit += 1;
  }
  return hit;
}

function hasDialoguePresence(text) {
  const src = String(text || "");
  if (/[“"][^”"\n]{2,120}[”"]/.test(src)) return true;
  if (/[：:]\s*[^\n]{2,80}/.test(src)) return true;
  return false;
}

function hasSignatureDialogue(text) {
  const src = String(text || "");
  const quoteMatches = src.match(/[“"]([^”"\n]{6,120})[”"]/g) || [];
  if (quoteMatches.length >= 1) {
    const rich = quoteMatches.some((q) => /[？！…，。!?,]/.test(q) && countVisibleChars(q) >= 8);
    if (rich) return true;
  }
  const lineMatches = src.match(/[^\n：:]{1,20}[：:]\s*[^\n]{8,120}/g) || [];
  return lineMatches.length >= 1;
}

function dialogueQuoteCount(text) {
  const src = String(text || "");
  const quoted = src.match(/[“"][^”"\n]{4,120}[”"]/g) || [];
  return quoted.length;
}

function sensoryDensityScore(text) {
  const terms = [
    "看见", "听见", "闻到", "触到", "冷", "热", "潮", "刺痛", "脚步", "呼吸", "眼神", "手指",
    "喉咙", "背脊", "汗", "灯光", "气味", "风", "震动", "心跳", "杯沿", "门把", "衣料", "声线",
    "雨", "雾", "潮湿", "发麻", "灼", "发烫", "金属味", "消毒水", "咔哒", "砰", "沙沙", "低鸣",
    "窒息", "发紧", "颤", "打滑", "沉", "脚底", "余光", "鼻腔", "耳后", "掌心", "指节", "裙角",
    "袖口", "门缝", "桌沿", "反光", "影子", "回声", "白噪", "眩光", "烟味", "铁锈味", "霉味"
  ];
  return countTermHits(text, terms);
}

function actionBeatScore(text) {
  const terms = [
    "抬眼", "移开视线", "盯着", "敲了敲", "指节", "呼吸", "停顿", "咬住", "合上", "攥紧",
    "后仰", "前倾", "靠近", "退开", "侧过头", "压低声音", "挑眉", "皱眉", "冷笑", "沉默",
    "把笔放下", "手腕", "掌心", "脚步", "肩线", "喉结", "眼尾"
  ];
  return countTermHits(text, terms);
}

function emotionShiftScore(text) {
  const terms = [
    "不耐", "轻蔑", "压住火气", "克制", "迟疑", "犹豫", "恼怒", "冷淡", "松动", "僵住",
    "语气一沉", "语气放缓", "目光发冷", "呼吸一滞", "心口发紧", "神色一顿", "嘴角一抿"
  ];
  return countTermHits(text, terms);
}

function abstractJargonScore(text) {
  const terms = [
    "关系迁移", "推进一步", "状态变化", "策略层", "主线推进", "可执行路径", "阶段性推进", "复盘"
  ];
  return countTermHits(text, terms);
}

function reportToneScore(text) {
  const terms = [
    "你执行了", "你拿到", "围绕“", "这条主线", "状态增量", "窗口期", "可执行",
    "推进质量", "决策质量", "阶段性推进", "反馈回路", "双线推进", "主线推进", "策略抓手",
    "可执行路径", "状态变化", "任务拆解", "目标导向", "模型输出", "复盘", "策略层"
  ];
  return countTermHits(text, terms);
}

function specificityCoverageScore(text, detailMemory = []) {
  const src = String(text || "");
  if (!detailMemory.length) return 0;
  let hit = 0;
  for (const d of detailMemory) {
    if (!d) continue;
    if (d.length < 2 || d.length > 16) continue;
    if (src.includes(d)) hit += 1;
  }
  return hit;
}

function sentenceCount(text) {
  const src = String(text || "").trim();
  if (!src) return 0;
  return src.split(/[。！？!?]/).map((x) => x.trim()).filter(Boolean).length;
}

function firstSentence(text = "", maxChars = 68) {
  const src = String(text || "").trim().replace(/\s+/g, "");
  if (!src) return "";
  const m = src.match(/^(.{8,120}?[。！？!?])/);
  const s = (m?.[1] || src.slice(0, maxChars)).trim();
  return s.slice(0, maxChars);
}

function hasRepeatedOpeningTemplate(nowResult = "", prevResult = "", mode = "") {
  const nowHead = firstSentence(nowResult);
  const prevHead = firstSentence(prevResult);
  if (!nowHead || !prevHead) return false;
  const sim = jaccardSimilarity(nowHead, prevHead);
  if (sim >= 0.9 && Math.min(nowHead.length, prevHead.length) >= 18) return true;
  if (mode === "virtual_character") {
    const staleTemplatePatterns = [
      /清晨的(?:阳光|落地窗)/,
      /空气中弥漫着新一天的希望和紧张/,
      /签字笔在半空中停了一下/,
      /银色镜片反光/
    ];
    const nowHit = staleTemplatePatterns.some((re) => re.test(nowHead));
    const prevHit = staleTemplatePatterns.some((re) => re.test(prevHead));
    if (nowHit && prevHit) return true;
  }
  return false;
}

function parseStoryClueTerms(sessionMeta = {}) {
  const storyContext = sessionMeta?.storyContext && typeof sessionMeta.storyContext === "object"
    ? sessionMeta.storyContext
    : {};
  return String(storyContext.clues || "")
    .split(/[，。；、,/\-|：:\s\[\]（）()·]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => x.length >= 2 && x.length <= 16)
    .slice(0, 10);
}

function pickInputAnchors(input = "", max = 4) {
  const src = String(input || "");
  const stop = new Set(["然后", "接着", "继续", "一下", "这个", "那个", "这里", "那里", "可以", "帮我", "我们"]);
  const chunks = src
    .split(/[，。；、,/\-|：:\s\[\]（）()·!?？！]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => x.length >= 2 && x.length <= 10)
    .filter((x) => !stop.has(x));
  const uniq = [...new Set(chunks)];
  return uniq.slice(0, max);
}

function buildOpeningGenerationGuard(input, sessionMeta = {}, turnIndex = 1) {
  const prevFirst = firstSentence(sessionMeta?.previousTurn?.narrative || "", 56);
  const prevInput = String(sessionMeta?.previousTurn?.userInput || "");
  const bannedOpenings = [
    prevFirst,
    "清晨的阳光透过落地窗洒在办公室的每一个角落",
    "清晨的落地窗前，阳光洒在你的桌面上",
    "空气中弥漫着新一天的希望和紧张",
    "你站在茫茫人海之中，锐利的目光如同猎鹰搜寻猎物"
  ]
    .map((x) => String(x || "").trim())
    .filter(Boolean)
    .slice(0, 6);

  const anchorsFromInput = pickInputAnchors(input, 6);
  const anchorsFromPrevInput = pickInputAnchors(prevInput, 3);
  const requiredAnchorTokens = [...new Set([...anchorsFromInput, ...anchorsFromPrevInput])].slice(0, 6);
  const clueTerms = parseStoryClueTerms(sessionMeta);
  const activeClue = clueTerms.length ? clueTerms[(Math.max(1, turnIndex) - 1) % clueTerms.length] : "";
  const prevResult = extractResultSection(sessionMeta?.previousTurn?.narrative || "") || String(sessionMeta?.previousTurn?.narrative || "");
  const repeatedCluesInPrev = clueTerms.filter((c) => prevResult.includes(c)).slice(0, 4);

  const instructionLines = [
    "首句去模板化硬约束：",
    `- 首句禁止复用这些起手句（或其近义改写）：${bannedOpenings.join(" / ")}`,
    `- 首句必须命中本回合动作锚点至少1个：${requiredAnchorTokens.join(" / ")}`,
    "- 首句优先从“动作/对话/冲突”起手，不要从天气、时间、氛围描写起手。",
    "线索推进硬约束：",
    activeClue
      ? `- 本回合优先推进线索“${activeClue}”，不要整段重复线索清单。`
      : "- 本回合线索只允许轻量回指，重心放在动作后果与关系变化。",
    repeatedCluesInPrev.length
      ? `- 以下线索上回合已提及，本回合避免再次完整复述：${repeatedCluesInPrev.join(" / ")}`
      : "- 若提及旧线索，最多点到1项并立即给出新变化。"
  ];

  return {
    bannedOpenings,
    requiredAnchorTokens,
    activeClue,
    repeatedCluesInPrev,
    instructionText: instructionLines.join("\n")
  };
}

function hasEnumeratedListStyle(text = "") {
  const src = String(text || "");
  if (!src) return false;
  const lines = src.split(/\n+/).map((x) => x.trim()).filter(Boolean);
  return lines.some((line) => /^(\d+[.、]|[-*])\s+/.test(line));
}

function hasUserAgencyHijack(text = "", userInput = "") {
  const src = String(text || "").trim();
  const input = String(userInput || "");
  if (!src) return false;
  const tail = src.slice(Math.max(0, src.length - 180));
  const hijack = /(你决定(先|要|去)|你选择了|你径直走向|你马上走向|你最终选择)/.test(tail);
  if (!hijack) return false;
  const userExplicit = /(我决定|我选择|我先|先从|我要走向|我走向|我去找)/.test(input);
  return !userExplicit;
}

function hasGenericEnding(text) {
  const src = String(text || "").trim();
  if (!src) return false;
  const tail = src.slice(Math.max(0, src.length - 220));
  const patterns = [
    /新的开始/,
    /等待着你去(探索|选择)/,
    /故事.*(等待|等着)你/,
    /序章.*(展开|拉开)/,
    /这个夜晚.*(不同寻常|改变一切)/,
    /命运.*(齿轮|开始转动)/,
    /你知道.*(将|会).*(选择|故事)/
  ];
  return patterns.some((re) => re.test(tail));
}

function hasRolecardTemplateCadence(text = "") {
  const src = String(text || "").trim();
  if (!src) return false;
  const tail = src.slice(Math.max(0, src.length - 320));
  const patterns = [
    /你(?:的)?心跳(?:不由自主)?加速/,
    /你意识到[，,。]/,
    /你深吸一口气(?:，|,)?(?:准备|决定|知道)/,
    /这个夜晚(?:，|,)?(?:可能|将)/,
    /接下来(?:的)?故事(?:走向|将)/,
    /你不知道.*会带你走向何方/
  ];
  return patterns.some((re) => re.test(tail));
}

function hasPromptHookLeak(text = "") {
  const src = String(text || "");
  if (!src) return false;
  return /(抛球给用户|抛球给用户)\s*】?/.test(src);
}

function normalizeChoiceText(choice = {}) {
  if (!choice || typeof choice !== "object") return "";
  const label = String(choice.label || "").trim();
  const hint = String(choice.prompt_hint || "").trim().replace(/^你可以输入：?/, "");
  return [label, hint].filter(Boolean).join(" ");
}

function isGenericChoiceText(text = "") {
  const src = String(text || "");
  if (!src) return true;
  const genericPatterns = [
    /继续(推进|探索|观察|交流|对话)/,
    /做出(选择|决定)/,
    /下一步/,
    /尝试(沟通|接触|了解)/,
    /先看看/,
    /保持谨慎/,
    /随机/,
    /提升关系/,
    /推进一步/
  ];
  return genericPatterns.some((re) => re.test(src));
}

function areChoicesGroundedToNarrative(jsonBlock, narrativeText, modeName = "") {
  const nextChoices = Array.isArray(jsonBlock?.director?.next_choices)
    ? jsonBlock.director.next_choices
    : [];
  const mode = String(modeName || "").trim();
  if (!nextChoices.length) {
    // short_narrative requires choices; other modes may have 0.
    return mode !== "short_narrative";
  }
  const narrative = String(narrativeText || "");
  let grounded = 0;
  let nonGeneric = 0;
  for (const c of nextChoices) {
    const text = normalizeChoiceText(c);
    if (!text) continue;
    if (!isGenericChoiceText(text)) nonGeneric += 1;
    const terms = pickKeyPhrases(text, 2, 16).filter((x) => x.length >= 2);
    const hit = terms.some((t) => narrative.includes(t));
    if (hit) grounded += 1;
  }
  if (mode === "short_narrative") {
    return grounded >= 2 && nonGeneric >= 2;
  }
  if (mode === "virtual_character") {
    return grounded >= Math.min(1, nextChoices.length) && nonGeneric >= Math.min(1, nextChoices.length);
  }
  return grounded >= Math.min(1, nextChoices.length) && nonGeneric >= Math.min(1, nextChoices.length);
}

function hasMicroReactionChain(text) {
  const src = String(text || "");
  const actionTokens = ["你", "刚", "伸手", "开口", "问", "说", "靠近", "后退", "停住", "抬眼", "按下", "推开"];
  const reactionTokens = ["他", "她", "对方", "老师", "店员", "同桌", "眉", "眼神", "手", "肩", "沉默", "停顿", "笑", "皱眉"];
  const consequenceTokens = ["于是", "因此", "结果", "随即", "立刻", "关系", "气氛", "局面", "门口", "人群", "节奏", "态度"];
  const actionHit = actionTokens.some((t) => src.includes(t));
  const reactionHit = reactionTokens.some((t) => src.includes(t));
  const consequenceHit = consequenceTokens.some((t) => src.includes(t));
  if (actionHit && reactionHit && consequenceHit) return true;
  return /(你[^。！？\n]{2,30}[。！？].{0,30}(他|她|对方|老师|店员|同桌)[^。！？\n]{2,35}[。！？].{0,30}(于是|因此|结果|随即|立刻|关系|气氛|局面|态度)[^。！？\n]{2,40}[。！？])/.test(src);
}

function hasCallbackToPreviousDetail(nowText, previousNarrative) {
  const prev = String(previousNarrative || "");
  if (!prev) return true;
  const prevResult = extractResultSection(prev) || prev;
  const anchors = pickKeyPhrases(prevResult, 2, 16).filter((p) => {
    if (!p) return false;
    if (p.length < 2 || p.length > 16) return false;
    return !/^(继续|然后|所以|但是|如果|因为|这个|那个|我们|你们|他们)$/.test(p);
  });
  if (!anchors.length) return true;
  const now = String(nowText || "");
  return anchors.slice(0, 18).some((a) => now.includes(a));
}

function isOpeningTurnQualified(narrativeText, sessionMeta = {}) {
  const fullText = String(narrativeText || "");
  const result = extractResultSection(fullText);
  const resultLen = countVisibleChars(result);
  const fullLen = countVisibleChars(fullText);
  return !(resultLen < 500 && fullLen < 520);
}

function evaluateNarrativeQuality({ narrativeText, turnIndex, input, sessionMeta }) {
  const issues = [];
  const text = String(narrativeText || "");
  const mode = normalizeMode(sessionMeta?.mode || sessionMeta?.storyContext?.mode || "");
  const prev = String(sessionMeta?.previousTurn?.narrative || "");
  const nowResult = extractResultSection(text) || text;
  const prevResult = extractResultSection(prev) || prev;
  const sectionLabelLeak = /(?:^|\n)\s*(?:【\s*)?(承接|结果|抛球给用户|抛球给用户)\s*】|(?:^|\n|\s)(抛球给用户|抛球给用户)\s*[：:]/m.test(String(text || ""));
  const promptHookLeak = hasPromptHookLeak(text);
  if (sectionLabelLeak) issues.push("section_label_leak");
  if (promptHookLeak) issues.push("prompt_hook_leak");
  const enumeratedList = hasEnumeratedListStyle(nowResult);
  if (enumeratedList) issues.push("enumerated_list_style");
  const agencyHijack = hasUserAgencyHijack(nowResult, input);
  if (agencyHijack) issues.push("user_agency_hijack");

  const internalDup = hasInternalDuplication(nowResult);
  if (internalDup) issues.push("internal_duplication");

  // Only apply action coverage gate for meaningful user input.
  const inputLen = countVisibleChars(input);
  const actionMiss = inputLen >= 6 && !isActionCovered(input, nowResult);
  if (actionMiss) issues.push("action_miss");

  const anchors = buildContextAnchors(sessionMeta);
  const detailMemory = buildDetailMemory(sessionMeta);
  const anchorMiss = !hasContextAnchorCoverage(nowResult, anchors, turnIndex);
  if (anchorMiss) issues.push("context_anchor_miss");
  const paraAnchorRatio = paragraphAnchorCoverage(nowResult, anchors);
  if (turnIndex <= 2 && paraAnchorRatio < 0.45) {
    issues.push("paragraph_anchor_sparse");
  }

  const dialogueMissing = !hasDialoguePresence(nowResult);
  const signatureDialogueMissing = !hasSignatureDialogue(nowResult);
  const sensorySparse = sensoryDensityScore(nowResult) < 3;
  const reportToneHeavy = reportToneScore(nowResult) >= 2;
  const jargonHeavy = abstractJargonScore(nowResult) >= 2;
  const microReactionMissing = !hasMicroReactionChain(nowResult);
  const callbackMissing = turnIndex > 1 && !hasCallbackToPreviousDetail(nowResult, prevResult);
  const genericEnding = hasGenericEnding(nowResult);
  if (genericEnding) issues.push("generic_ending");
  const rolecardTemplateCadence = mode === "virtual_character" && hasRolecardTemplateCadence(nowResult);
  if (rolecardTemplateCadence) issues.push("rolecard_template_cadence");
  const specificityHits = specificityCoverageScore(nowResult, detailMemory);
  const sentenceTotal = sentenceCount(nowResult);
  const minLen = turnIndex <= 1 ? 500 : (mode === "virtual_character" ? 300 : 360);
  const tooShort = countVisibleChars(nowResult) < minLen;
  if (tooShort) issues.push("content_too_short");
  const specificitySparse = turnIndex <= 2
    ? specificityHits < Math.min(2, Math.max(1, detailMemory.length))
    : specificityHits < 1;
  if (sentenceTotal >= 3 && specificitySparse) issues.push("specificity_sparse");
  if (mode === "virtual_character") {
    const quotes = dialogueQuoteCount(nowResult);
    const actionBeats = actionBeatScore(nowResult);
    const emotionShifts = emotionShiftScore(nowResult);
    if (dialogueMissing) issues.push("conversation_missing");
    if (quotes < 2) issues.push("dialogue_density_low");
    if (actionBeats < 2) issues.push("action_beats_low");
    if (emotionShifts < 1) issues.push("emotion_shift_missing");
    if (signatureDialogueMissing) issues.push("signature_dialogue_missing");
    if (microReactionMissing) issues.push("micro_reaction_missing");
    if (callbackMissing) issues.push("callback_missing");
    if (reportToneHeavy) issues.push("role_voice_drift");
    if (jargonHeavy) issues.push("abstract_jargon_heavy");
  } else {
    if (dialogueMissing) issues.push("dialogue_missing");
    if (signatureDialogueMissing) issues.push("signature_dialogue_missing");
    if (sensorySparse) issues.push("sensory_sparse");
    if (microReactionMissing) issues.push("micro_reaction_missing");
    if (callbackMissing) issues.push("callback_missing");
    if (reportToneHeavy) issues.push("report_tone_heavy");
  }

  let highRepeat = false;
  let sceneReset = false;
  let openingTemplateRepeat = false;
  if (turnIndex > 1 && prevResult) {
    const sim = jaccardSimilarity(prevResult, nowResult);
    const prevLen = Math.max(1, countVisibleChars(prevResult));
    const nowLen = Math.max(1, countVisibleChars(nowResult));
    const lenRatio = nowLen / prevLen;
    const lenComparable = lenRatio >= 0.72 && lenRatio <= 1.38;
    if (sim >= 0.9 && lenComparable) {
      highRepeat = true;
      issues.push("high_repeat_with_previous_turn");
    }
    const prevHead = prevResult.slice(0, 120);
    const nowHead = nowResult.slice(0, 120);
    if (
      prevHead
      && nowHead
      && lenComparable
      && jaccardSimilarity(prevHead, nowHead) >= 0.95
      && sim >= 0.82
    ) {
      sceneReset = true;
      issues.push("scene_reset_risk");
    }
    if (hasRepeatedOpeningTemplate(nowResult, prevResult, mode)) {
      openingTemplateRepeat = true;
      issues.push("opening_template_repeat");
    }
  }

  // Hard fail should focus on true regressions (rollback/repetition) rather than style variance.
  const hardFailures = [];
  if (sceneReset) hardFailures.push("scene_reset_risk");
  if (openingTemplateRepeat) hardFailures.push("opening_template_repeat");
  if ((highRepeat && internalDup) || (highRepeat && actionMiss) || (internalDup && actionMiss)) {
    hardFailures.push("compound_quality_failure");
  }

  return { issues, hardFailures, anchors, detailMemory };
}

function parseModelOutput(content, turnIndex, input, sessionMeta) {
  const jsonText = extractTagged(content, "JSON_BLOCK");
  const narrativeText = extractTagged(content, "NARRATIVE_BLOCK");
  if (!jsonText) return fallbackTurn({ provider: "openai", providerReason: "missing_json_block", retryable: true });
  try {
    const jsonBlock = JSON.parse(jsonText);
    if (!narrativeText) return fallbackTurn({ provider: "openai", providerReason: "missing_narrative_block", retryable: true });
    const narrativeBlock = narrativeText;
    if (turnIndex === 1 && !isOpeningTurnQualified(narrativeBlock, sessionMeta)) {
      return {
        failed: true,
        retryable: true,
        provider: "openai",
        providerReason: "opening_gate_failed",
        jsonBlock,
        narrativeBlock
      };
    }
    const qualityEval = evaluateNarrativeQuality({
      narrativeText: narrativeBlock,
      turnIndex,
      input,
      sessionMeta
    });
    const modeName = String(
      jsonBlock?.mode?.name
      || sessionMeta?.mode
      || sessionMeta?.storyContext?.mode
      || ""
    ).trim();
    if (!areChoicesGroundedToNarrative(jsonBlock, narrativeBlock, modeName)) {
      return {
        failed: true,
        retryable: true,
        provider: "openai",
        providerReason: "quality_gate_failed:choices_not_grounded",
        jsonBlock,
        narrativeBlock,
        qualityIssues: qualityEval.issues || [],
        qualityHardFailures: qualityEval.hardFailures || [],
        qualityAnchors: qualityEval.anchors || [],
        detailMemory: qualityEval.detailMemory || []
      };
    }
    if (qualityEval.hardFailures.length) {
      return {
        failed: true,
        retryable: true,
        provider: "openai",
        providerReason: `quality_gate_failed:${qualityEval.issues.join(",")}`,
        jsonBlock,
        narrativeBlock,
        qualityIssues: qualityEval.issues || [],
        qualityHardFailures: qualityEval.hardFailures || [],
        qualityAnchors: qualityEval.anchors || [],
        detailMemory: qualityEval.detailMemory || []
      };
    }
    return { jsonBlock, narrativeBlock, provider: "openai", providerReason: "" };
  } catch {
    return fallbackTurn({ provider: "openai", providerReason: "json_parse_failed", retryable: true });
  }
}

function extractNarrativeVisibleText(fullContent) {
  const src = String(fullContent || "");
  const openTag = "<NARRATIVE_BLOCK>";
  const closeTag = "</NARRATIVE_BLOCK>";
  const start = src.indexOf(openTag);
  if (start < 0) return "";
  const bodyStart = start + openTag.length;
  const end = src.indexOf(closeTag, bodyStart);
  const raw = end < 0 ? src.slice(bodyStart) : src.slice(bodyStart, end);
  // Streaming may receive partial closing tags chunk-by-chunk (e.g. "</NARRATIVE_BLOCK"),
  // avoid leaking internal protocol tags into user-visible text.
  return raw
    .replace(/<\/?[A-Z_]{0,64}$/g, "")
    .replace(/<$/g, "");
}

async function streamModelWithNarrativeDelta({
  apiBase,
  apiKey,
  model,
  temperature,
  timeoutMs,
  messages,
  onNarrativeDelta
}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const resp = await fetch(`${apiBase}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature,
        stream: true,
        messages
      }),
      signal: controller.signal
    });
    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      const retryAfterRaw = Number.parseInt(String(resp.headers.get("retry-after") || "0"), 10);
      const retryAfter = Number.isFinite(retryAfterRaw) && retryAfterRaw > 0 ? retryAfterRaw : 0;
      const suffix = resp.status === 429 && retryAfter ? `_RETRY_AFTER_${retryAfter}` : "";
      throw new Error(`LLM_HTTP_${resp.status}${suffix}:${errText.slice(0, 180)}`);
    }
    if (!resp.body) {
      throw new Error("stream_body_missing");
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let sseBuffer = "";
    let fullContent = "";
    let emittedNarrative = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      sseBuffer += decoder.decode(value, { stream: true });
      const events = sseBuffer.split(/\n\n/);
      sseBuffer = events.pop() || "";
      for (const evt of events) {
        const lines = String(evt || "")
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        const dataLines = lines
          .filter((line) => line.startsWith("data:"))
          .map((line) => line.slice(5).trim());
        for (const dataLine of dataLines) {
          if (!dataLine || dataLine === "[DONE]") continue;
          let parsed;
          try {
            parsed = JSON.parse(dataLine);
          } catch {
            continue;
          }
          const delta = String(parsed?.choices?.[0]?.delta?.content || "");
          if (!delta) continue;
          fullContent += delta;
          const visible = extractNarrativeVisibleText(fullContent);
          if (visible.length > emittedNarrative.length) {
            const append = visible.slice(emittedNarrative.length);
            emittedNarrative = visible;
            if (append) onNarrativeDelta?.(append);
          }
        }
      }
    }
    return { fullContent };
  } finally {
    clearTimeout(timeout);
  }
}

export async function runStoryTurn({ turnIndex, input, sessionMeta, options = {} }) {
  const systemPrompt = await loadSystemPrompt();
  const apiKey = process.env.OPENAI_API_KEY;
  const apiBase = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const envTemp = Number.parseFloat(String(process.env.OPENAI_TEMPERATURE || ""));
  const temperature = Number.isFinite(envTemp)
    ? envTemp
    : model.startsWith("kimi")
      ? 0.6
      : 0.7;
  const timeoutMsRaw = Number.parseInt(String(process.env.OPENAI_TIMEOUT_MS || "60000"), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 60000;

  if (!apiKey) {
    return fallbackTurn({ provider: "error", providerReason: "missing_api_key" });
  }

  const runtimeMode = normalizeMode(sessionMeta.mode || sessionMeta?.storyContext?.mode || "");
  const detailMemory = buildDetailMemory(sessionMeta);
  const openingGuard = buildOpeningGenerationGuard(input, sessionMeta, turnIndex);

  const userPayload = {
    session: {
      id: sessionMeta.id,
      category: sessionMeta.category,
      subCategory: sessionMeta.subCategory
    },
    mode: runtimeMode,
    world_context: sessionMeta.storyContext || {},
    previous_turn: sessionMeta.previousTurn
      ? {
          round_no: Number(sessionMeta.previousTurn.roundNo || 0),
          user_input: String(sessionMeta.previousTurn.userInput || ""),
          narrative_summary: String(sessionMeta.previousTurn.narrative || "").slice(0, 1200),
          state_delta: sessionMeta.previousTurn.stateDelta || {},
          detail_memory: detailMemory.slice(0, 12)
        }
      : null,
    detail_memory: detailMemory.slice(0, 16),
    generation_guard: {
      opening_sentence: {
        avoid_templates: openingGuard.bannedOpenings,
        require_action_anchor_tokens: openingGuard.requiredAnchorTokens,
        instruction: "首句必须与本回合用户动作强绑定，不得复用上一回合或固定模板起手句。"
      },
      clue_progression: {
        active_clue: openingGuard.activeClue || "",
        avoid_full_recap_clues: openingGuard.repeatedCluesInPrev || [],
        instruction: "线索按回合推进，禁止每回合复述整组线索；若回指旧线索，最多点到1项并给出新变化。"
      }
    },
    turn_index: turnIndex,
    user_input: input,
    output_contract: "strict_json_and_narrative_tags",
    instruction_hint: "world_context 是本局 canonical 世界设定。禁止偏离 world_context 的主任务、背景与人物关系。"
  };

  async function requestModel(messages, temperatureOverride = null) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const resp = await fetch(`${apiBase}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          temperature: Number.isFinite(temperatureOverride) ? temperatureOverride : temperature,
          messages
        }),
        signal: controller.signal
      });

      if (!resp.ok) {
        const errText = await resp.text().catch(() => "");
        const retryAfterRaw = Number.parseInt(String(resp.headers.get("retry-after") || "0"), 10);
        const retryAfter = Number.isFinite(retryAfterRaw) && retryAfterRaw > 0 ? retryAfterRaw : 0;
        const suffix = resp.status === 429 && retryAfter ? `_RETRY_AFTER_${retryAfter}` : "";
        throw new Error(`LLM_HTTP_${resp.status}${suffix}:${errText.slice(0, 180)}`);
      }

      const data = await resp.json();
      const content = data?.choices?.[0]?.message?.content || "";
      return parseModelOutput(content, turnIndex, input, sessionMeta);
    } catch (error) {
      const msg = error instanceof Error ? error.message : "unknown";
      return fallbackTurn({
        provider: "error",
        providerReason: msg.slice(0, 180),
        retryable: isRetryableTransportError(msg)
      });
    } finally {
      clearTimeout(timeout);
    }
  }

  const baseMessages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: JSON.stringify(userPayload, null, 2) },
    { role: "user", content: openingGuard.instructionText }
  ];

  let result = await requestModel(baseMessages);
  if (!result?.failed || !result.retryable) return result;

  const overrideMaxAttempts = Number.parseInt(String(options?.maxAttempts ?? ""), 10);
  const maxAttemptsRaw = Number.isFinite(overrideMaxAttempts) && overrideMaxAttempts > 0
    ? overrideMaxAttempts
    : Number.parseInt(String(process.env.OPENAI_RETRY_MAX_ATTEMPTS || "5"), 10);
  const maxAttempts = Number.isFinite(maxAttemptsRaw) ? Math.max(2, Math.min(8, maxAttemptsRaw)) : 5;
  for (let attempt = 2; attempt <= maxAttempts; attempt += 1) {
    const retryLines = [
      "RETRY_REQUIRED",
      `attempt=${attempt}`,
      `failure_reason=${result.providerReason || "unknown"}`,
      "请严格按 system prompt 重写输出。",
      "必须返回可解析的 <JSON_BLOCK> 与 <NARRATIVE_BLOCK>。",
      "NARRATIVE_BLOCK 必须是纯正文，不要输出【承接】【结果】【抛球给用户】标签。"
    ];
    if (turnIndex === 1) {
      retryLines.push("首回合必须让【结果】可见字数>=500，并明确背景/任务/冲突/可执行入口。");
      if (result.narrativeBlock) {
        retryLines.push("以下是你上一次输出，请在不改动事实前提下扩写并修复，不要删减关键信息：");
        retryLines.push(result.narrativeBlock.slice(0, 3200));
      }
    } else {
      retryLines.push("必须强承接用户输入，给出具体后果与下一步可执行抛球。");
      retryLines.push("禁止重复上一回合开场与场景铺垫，禁止回档到已发生场景。");
      retryLines.push("开头首句必须换新：不得复用“清晨的落地窗/阳光/空气中弥漫”等模板起手句。");
    }
    retryLines.push(openingGuard.instructionText);
    if (runtimeMode === "virtual_character") {
      retryLines.push("必须像真人聊天：用角色口吻直接说话，不要写“你执行了/阶段性推进”这类复盘口吻。");
      retryLines.push("人称硬要求：以第三人称镜头叙事承接现场（你/她/他），台词中可自然使用第一人称。");
      retryLines.push("风格硬要求：至少2句带引号台词 + 2个动作镜头细节 + 1处情绪转折。");
      retryLines.push("采用节拍：台词 -> 动作 -> 微反应 -> 后果，不要平铺概述。");
      retryLines.push("禁止抽象术语（关系迁移/推进一步/状态变化/策略层）主导正文。");
      retryLines.push("禁止模板收束句（如“你意识到…/你深吸一口气…/这个夜晚将…”）。");
      retryLines.push("禁止在正文输出任何“抛球给用户”字样；引导只写入 JSON director.next_choices。");
      retryLines.push("正文以单段为默认，不要分点列举，不要把候选对象写成清单。");
    } else {
      retryLines.push("必须提升沉浸感：至少加入1句有辨识度台词与3个可感知细节（动作/声音/气味/触感/眼神）。");
      retryLines.push("必须包含1条“用户动作→他人反应→可见后果”的完整链路。");
      retryLines.push("禁止报告腔，不要把正文写成策略总结。");
    }
    retryLines.push("禁止使用 1. 2. 3. 或项目符号列点来罗列候选对象。");
    retryLines.push("禁止替用户做决定（如“你决定先…”），结尾应停在可执行抉择点。");
    retryLines.push("非首回合正文长度不得过短，必须给出充分场景与互动细节。");
    retryLines.push("director.next_choices 必须来源于正文已出现的具体对象/动作，不得使用泛化按钮文案。");
    retryLines.push("结尾禁止使用“新的开始/等待探索/序章展开/命运齿轮”这类抽象模板收束句。");
    const forcedDetailMemory = Array.isArray(result.detailMemory) && result.detailMemory.length
      ? result.detailMemory
      : detailMemory;
    if (forcedDetailMemory.length) {
      retryLines.push(`必须落地这些本局细节（至少命中2项）：${forcedDetailMemory.slice(0, 10).join(" / ")}`);
      retryLines.push("结尾钩子必须指向正文中已经出现的具体对象或动作，不可只写抽象情绪。");
    }
    if (String(result.providerReason || "").includes("quality_gate_failed:")) {
      retryLines.push(`上次失败问题：${String(result.providerReason || "").replace("quality_gate_failed:", "")}`);
    }
    if (Array.isArray(result.qualityAnchors) && result.qualityAnchors.length) {
      retryLines.push(`必须保留并命中这些世界锚点（至少2个）：${result.qualityAnchors.slice(0, 8).join(' / ')}`);
    }
    const reason = String(result.providerReason || "");
    const retryAfterSec = parseRetryAfterSeconds(reason);
    const backoffMs = /LLM_HTTP_429/i.test(reason)
      ? Math.max(retryAfterSec * 1000, Math.min(12000, 1200 * (2 ** (attempt - 2))))
      : Math.min(3000, 500 * attempt);
    await wait(backoffMs);
    result = await requestModel([...baseMessages, { role: "user", content: retryLines.join("\n") }], 0.2);
    if (!result?.failed || !result.retryable) return result;
  }
  return result;
}

export async function runStoryTurnStream({ turnIndex, input, sessionMeta, onNarrativeDelta }) {
  const systemPrompt = await loadSystemPrompt();
  const apiKey = process.env.OPENAI_API_KEY;
  const apiBase = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const envTemp = Number.parseFloat(String(process.env.OPENAI_TEMPERATURE || ""));
  const temperature = Number.isFinite(envTemp)
    ? envTemp
    : model.startsWith("kimi")
      ? 0.6
      : 0.7;
  const timeoutMsRaw = Number.parseInt(String(process.env.OPENAI_TIMEOUT_MS || "60000"), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 60000;

  if (!apiKey) {
    return fallbackTurn({ provider: "error", providerReason: "missing_api_key" });
  }

  const runtimeMode = normalizeMode(sessionMeta.mode || sessionMeta?.storyContext?.mode || "");
  const detailMemory = buildDetailMemory(sessionMeta);
  const openingGuard = buildOpeningGenerationGuard(input, sessionMeta, turnIndex);
  const userPayload = {
    session: {
      id: sessionMeta.id,
      category: sessionMeta.category,
      subCategory: sessionMeta.subCategory
    },
    mode: runtimeMode,
    world_context: sessionMeta.storyContext || {},
    previous_turn: sessionMeta.previousTurn
      ? {
          round_no: Number(sessionMeta.previousTurn.roundNo || 0),
          user_input: String(sessionMeta.previousTurn.userInput || ""),
          narrative_summary: String(sessionMeta.previousTurn.narrative || "").slice(0, 1200),
          state_delta: sessionMeta.previousTurn.stateDelta || {},
          detail_memory: detailMemory.slice(0, 12)
        }
      : null,
    detail_memory: detailMemory.slice(0, 16),
    generation_guard: {
      opening_sentence: {
        avoid_templates: openingGuard.bannedOpenings,
        require_action_anchor_tokens: openingGuard.requiredAnchorTokens,
        instruction: "首句必须与本回合用户动作强绑定，不得复用上一回合或固定模板起手句。"
      },
      clue_progression: {
        active_clue: openingGuard.activeClue || "",
        avoid_full_recap_clues: openingGuard.repeatedCluesInPrev || [],
        instruction: "线索按回合推进，禁止每回合复述整组线索；若回指旧线索，最多点到1项并给出新变化。"
      }
    },
    turn_index: turnIndex,
    user_input: input,
    output_contract: "strict_json_and_narrative_tags",
    instruction_hint: "world_context 是本局 canonical 世界设定。禁止偏离 world_context 的主任务、背景与人物关系。"
  };
  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: JSON.stringify(userPayload, null, 2) },
    { role: "user", content: openingGuard.instructionText }
  ];
  try {
    const { fullContent } = await streamModelWithNarrativeDelta({
      apiBase,
      apiKey,
      model,
      temperature,
      timeoutMs,
      messages,
      onNarrativeDelta
    });
    const parsed = parseModelOutput(fullContent, turnIndex, input, sessionMeta);
    if (parsed?.failed && !String(parsed?.narrativeBlock || "").trim()) {
      const streamedNarrative = extractNarrativeVisibleText(fullContent).trim();
      if (streamedNarrative) {
        return {
          ...parsed,
          narrativeBlock: streamedNarrative
        };
      }
    }
    return parsed;
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown";
    return fallbackTurn({
      provider: "error",
      providerReason: msg.slice(0, 180),
      retryable: isRetryableTransportError(msg)
    });
  }
}
