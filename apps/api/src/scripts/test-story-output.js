import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3000/api/v1";

async function postJson(path, payload) {
  const resp = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    throw new Error(`${path} failed: ${data?.message || data?.code || `HTTP_${resp.status}`}`);
  }
  return data;
}

function getSection(text, title) {
  const re = new RegExp(`【${title}】\\s*([\\s\\S]*?)(?=\\n【[^】]+】|$)`);
  return String(text || "").match(re)?.[1]?.trim() || "";
}

function getChoiceLines(ballSection) {
  return String(ballSection || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\s*[.、]/.test(line));
}

function countChars(text) {
  return String(text || "").replace(/\s+/g, "").length;
}

function validateTurn(response, { expectOpeningLong = false } = {}) {
  assert.equal(typeof response?.actionResult, "string", "actionResult 必须是字符串");
  assert.equal(typeof response?.jsonBlock, "object", "jsonBlock 必须存在");

  const resultSection = getSection(response.actionResult, "结果");
  const ballSection = getSection(response.actionResult, "抛球给用户");
  const choiceLines = getChoiceLines(ballSection);
  const nextChoices = response?.jsonBlock?.director?.next_choices;

  assert.ok(resultSection.length > 0, "【结果】段不能为空");
  if (expectOpeningLong) {
    const len = countChars(resultSection);
    assert.ok(len >= 500, `首回合【结果】长度不足 500，当前=${len}`);
  }

  assert.ok(Array.isArray(nextChoices), "director.next_choices 必须是数组");
  assert.ok(nextChoices.length >= 2 && nextChoices.length <= 3, "director.next_choices 数量必须是 2~3");
  assert.ok(choiceLines.length >= 2 && choiceLines.length <= 3, "【抛球给用户】编号选项数量必须是 2~3");

  const labelHits = nextChoices
    .map((x) => String(x?.label || "").trim())
    .filter(Boolean)
    .filter((label) => ballSection.includes(label)).length;
  assert.ok(labelHits >= 1, "【抛球给用户】应与 next_choices 保持语义对齐（至少命中 1 个 label）");
}

async function main() {
  const storyContext = {
    worldId: "test_world_1",
    title: "故事名称-test 1",
    chapter: "保送风暴",
    mainQuest: "三个月内进入省队并锁定保送资格",
    npc: "林老师（谨慎支持）",
    clues: "名额表 / 模考排名 / 竞赛通知",
    hint: "先锁定竞赛名额的真实分配规则，再决定正面冲突或迂回布局。",
    intro: [
      "你重生回到高三开学第一天，唯一优势是一份并不完整的未来记忆。",
      "你要在规则内抢回主动权：成绩、资源、人际，每一步都必须算成本。"
    ],
    opening: [
      "晨会刚散，竞赛组临时通知：本轮只保留两个名额。",
      "你意识到窗口期只剩72小时。"
    ]
  };

  const session = await postJson("/game/sessions", {
    category: "悬疑",
    subCategory: "都市追踪",
    storyContext
  });
  const sessionId = session?.session?.id;
  assert.ok(sessionId, "创建 session 失败");

  const turn1 = await postJson("/game/turns", {
    sessionId,
    input: "先核实名额表真实性，再判断名单是否被提前锁定。",
    storyContext
  });
  validateTurn(turn1?.response, { expectOpeningLong: true });
  assert.ok(
    String(turn1?.response?.actionResult || "").includes("三个月内进入省队并锁定保送资格"),
    "首回合应包含故事卡主任务，避免题材跑偏"
  );

  const turn2 = await postJson("/game/turns", {
    sessionId,
    input: "先找林老师做最小信息交换，再决定是否公开质疑名单。",
    storyContext
  });
  validateTurn(turn2?.response, { expectOpeningLong: false });

  console.log("story-output test passed");
  console.log(`session=${sessionId}, round1=${turn1?.response?.round}, round2=${turn2?.response?.round}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
