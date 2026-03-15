import { json, parseBody } from "../core/http.js";
import {
  createPaintGenerationRecord,
  listPaintGenerationHistory
} from "../repos/paint-repo.js";

const DEFAULT_IMAGE_MODELS = [
  "wan2.1-t2i-turbo",
  "wan2.2-t2i-flash",
  "z-image-turbo"
];

const MODEL_META = {
  "wan2.1-t2i-turbo": {
    label: "超省钱",
    price: "¥0.18/张",
    quality: "草图 / 头脑风暴"
  },
  "wan2.2-t2i-flash": {
    label: "默认推荐",
    price: "¥0.18/张",
    quality: "速度与质量平衡"
  },
  "z-image-turbo": {
    label: "高质量",
    price: "¥0.22/张",
    quality: "轻量高质感，快速出图"
  }
};

function isUuid(value = "") {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "").trim()
  );
}

function mapRatioToSize(ratio = "1:1") {
  const key = String(ratio || "1:1").trim();
  if (key === "16:9") return "1536x1024";
  if (key === "9:16") return "1024x1536";
  if (key === "4:3") return "1536x1024";
  if (key === "3:4") return "1024x1536";
  return "1024x1024";
}

function mapStyleLabelToPrompt(style = "cinematic") {
  const s = String(style || "").trim().toLowerCase();
  if (s === "anime") return "anime illustration";
  if (s === "realistic") return "photorealistic";
  if (s === "illustration") return "digital illustration";
  if (s === "watercolor") return "watercolor painting";
  if (s === "pixel art") return "pixel art";
  return "cinematic";
}

function resolveAllowedModels() {
  const envModels = [
    process.env.IMAGE_MODEL_FAST,
    process.env.IMAGE_MODEL_BALANCED,
    process.env.IMAGE_MODEL_QUALITY,
    process.env.OPENAI_IMAGE_MODEL
  ]
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  const merged = [...new Set([...envModels, ...DEFAULT_IMAGE_MODELS])];
  return merged.slice(0, 12);
}

function pickImageModel(rawModel = "") {
  const allowed = resolveAllowedModels();
  const candidate = String(rawModel || "").trim();
  if (candidate && allowed.includes(candidate)) return candidate;
  return String(process.env.OPENAI_IMAGE_MODEL || allowed[0] || "wan2.2-t2i-flash").trim();
}

function inferCategory(prompt = "", style = "") {
  const text = `${prompt} ${style}`.toLowerCase();
  if (/\bnsfw\b|成人|露骨|情色/.test(text)) return "nsfw";
  if (/\banime\b|动漫|二次元/.test(text)) return "anime";
  return "sfw";
}

function parseSize(size = "1024x1024") {
  const [w, h] = String(size || "1024x1024").split("x");
  const width = Number.parseInt(String(w || "1024"), 10);
  const height = Number.parseInt(String(h || "1024"), 10);
  return {
    width: Number.isFinite(width) ? width : 1024,
    height: Number.isFinite(height) ? height : 1024
  };
}

function isDashScopeCompatibleBase(apiBase = "") {
  const raw = String(apiBase || "").trim();
  if (!raw) return false;
  try {
    const parsed = new URL(raw);
    const host = String(parsed.host || "").toLowerCase();
    const path = String(parsed.pathname || "").toLowerCase();
    const isDashScopeHost = /(^|\.)(dashscope|dashscope-intl)\.aliyuncs\.com$/.test(host);
    return isDashScopeHost && path.includes("/compatible-mode/");
  } catch {
    const base = raw.toLowerCase();
    return (
      base.includes("dashscope.aliyuncs.com/compatible-mode/")
      || base.includes("dashscope-intl.aliyuncs.com/compatible-mode/")
    );
  }
}

function toDashScopeRoot(apiBase = "") {
  try {
    const parsed = new URL(String(apiBase || "").trim());
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return "https://dashscope.aliyuncs.com";
  }
}

function getDashScopeCandidateOrigins(apiBase = "") {
  const primary = toDashScopeRoot(apiBase);
  const candidates = [primary];
  if (primary.includes("dashscope.aliyuncs.com")) {
    candidates.push("https://dashscope-intl.aliyuncs.com");
  } else if (primary.includes("dashscope-intl.aliyuncs.com")) {
    candidates.push("https://dashscope.aliyuncs.com");
  } else {
    candidates.push("https://dashscope.aliyuncs.com", "https://dashscope-intl.aliyuncs.com");
  }
  return [...new Set(candidates)];
}

function toDashScopeSize(size = "1024x1024") {
  return String(size || "1024x1024").replace("x", "*");
}

function isDashScopeZImageModel(model = "") {
  const id = String(model || "").trim().toLowerCase();
  return id.startsWith("z-image");
}

function parseJsonSafe(raw = "") {
  const text = String(raw || "").trim();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function extractProviderErrorMessage(resp, payload = {}, rawBody = "") {
  const fromPayload = String(
    payload?.message
    || payload?.code
    || payload?.error?.message
    || payload?.output?.message
    || ""
  ).trim();
  if (fromPayload) return fromPayload;
  const plain = String(rawBody || "").trim();
  if (plain) return plain.slice(0, 200);
  return `HTTP_${Number(resp?.status || 0) || 500}`;
}

function isInappropriateContentMessage(raw = "") {
  const msg = String(raw || "").toLowerCase();
  return (
    msg.includes("inappropriate content")
    || msg.includes("input data may contain inappropriate content")
    || msg.includes("data inspection failed")
    || msg.includes("safety")
    || msg.includes("content policy")
    || msg.includes("内容违规")
    || msg.includes("不当内容")
    || msg.includes("敏感内容")
  );
}

function humanizeImageError(raw = "", { apiBase = "", isDashScope = false } = {}) {
  const msg = String(raw || "").trim();
  if (!msg) return "图片生成失败";
  if (msg === "NETWORK_UNREACHABLE") return "网络不可达，请检查本机网络或代理设置";
  if (msg === "REQUEST_TIMEOUT" || msg === "dashscope_task_timeout") return "生成超时，请稍后重试";
  if (msg === "DASHSCOPE_INAPPROPRIATE_CONTENT" || isInappropriateContentMessage(msg)) {
    return "提示词触发内容安全策略，已被拦截。请改成非敏感描述（避免成人、未成年人相关、血腥暴力、政治敏感等）后重试。";
  }
  if (msg === "dashscope_task_id_missing") return "任务创建成功但未返回 task_id，请稍后重试";
  if (msg === "dashscope_image_payload_missing") return "任务成功但未返回图片链接，请稍后重试";
  if (/\bHTTP_404\b/i.test(msg)) {
    const base = String(apiBase || "").trim() || "OPENAI_IMAGE_BASE_URL";
    if (isDashScope) {
      return `HTTP_404：接口路径/地域不匹配，或任务刚创建尚未可查询。请确认 ${base} 与 API Key 所属地域一致。`;
    }
    return "HTTP_404：接口路径不存在，请检查图片 API 基础地址与模型配置";
  }
  return msg;
}

function sleep(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractDashScopeImageUrl(data = {}) {
  const output = data?.output && typeof data.output === "object" ? data.output : {};
  const candidates = [];
  const fromResults = Array.isArray(output.results) ? output.results : [];
  fromResults.forEach((item) => {
    if (!item || typeof item !== "object") return;
    candidates.push(item.url, item.image_url, item.result_url);
  });
  const fromChoices = Array.isArray(output.choices) ? output.choices : [];
  fromChoices.forEach((choice) => {
    const contentList = Array.isArray(choice?.message?.content) ? choice.message.content : [];
    contentList.forEach((entry) => {
      if (!entry || typeof entry !== "object") return;
      candidates.push(entry.image, entry.image_url, entry.url, entry.result_url);
    });
  });
  candidates.push(
    output.url,
    output.image_url,
    output.result_url,
    data?.url,
    data?.image_url
  );
  for (const c of candidates) {
    const s = String(c || "").trim();
    if (s) return s;
  }
  return "";
}

async function generateOneImageByDashScope({
  apiBase,
  apiKey,
  prompt,
  model,
  style,
  negative,
  size,
  timeoutMs,
  seed
}) {
  const finalPrompt = `${prompt}, ${style}, highly detailed, best quality${negative ? `, avoid: ${negative}` : ""}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const origins = getDashScopeCandidateOrigins(apiBase);
    let createData = null;
    let createError = "";
    let createErrorType = "";
    let usedOrigin = origins[0] || "https://dashscope.aliyuncs.com";
    for (const origin of origins) {
      usedOrigin = origin;
      const createResp = await fetch(`${origin}/api/v1/services/aigc/text2image/image-synthesis`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "X-DashScope-Async": "enable"
        },
        body: JSON.stringify({
          model,
          input: {
            prompt: finalPrompt,
            ...(negative ? { negative_prompt: negative } : {})
          },
          parameters: {
            size: toDashScopeSize(size),
            n: 1,
            ...(Number.isFinite(Number(seed)) ? { seed: Number(seed) } : {})
          }
        }),
        signal: controller.signal
      });
      const createRaw = await createResp.text().catch(() => "");
      createData = parseJsonSafe(createRaw);
      if (createResp.ok) {
        createError = "";
        break;
      }
      const msg = extractProviderErrorMessage(createResp, createData, createRaw);
      if (isInappropriateContentMessage(msg)) {
        createError = msg;
        createErrorType = "INAPPROPRIATE_CONTENT";
        break;
      }
      createError = `${msg} @ ${origin}`;
      if (createResp.status !== 404) break;
    }
    if (createError) {
      if (createErrorType === "INAPPROPRIATE_CONTENT") {
        throw new Error("DASHSCOPE_INAPPROPRIATE_CONTENT");
      }
      throw new Error(
        `DASHSCOPE_CREATE_FAILED: ${createError}。请检查 API Key 所属地域与 OPENAI_IMAGE_BASE_URL 是否一致。`
      );
    }

    const inlineUrl = extractDashScopeImageUrl(createData);
    if (inlineUrl) return inlineUrl;

    const taskId = String(
      createData?.output?.task_id
      || createData?.output?.taskId
      || createData?.task_id
      || ""
    ).trim();
    if (!taskId) throw new Error("dashscope_task_id_missing");

    const startedAt = Date.now();
    const pollIntervalMs = 3200;
    while ((Date.now() - startedAt) < timeoutMs) {
      await sleep(pollIntervalMs);
      const taskResp = await fetch(`${usedOrigin}/api/v1/tasks/${encodeURIComponent(taskId)}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`
        },
        signal: controller.signal
      });
      const taskRaw = await taskResp.text().catch(() => "");
      const taskData = parseJsonSafe(taskRaw);
      if (!taskResp.ok) {
        // DashScope async tasks may briefly return 404/429 while task metadata is propagating.
        if (taskResp.status === 404 || taskResp.status === 429 || taskResp.status >= 500) {
          continue;
        }
        throw new Error(extractProviderErrorMessage(taskResp, taskData, taskRaw));
      }
      const status = String(
        taskData?.output?.task_status
        || taskData?.output?.status
        || taskData?.status
        || ""
      ).toUpperCase();
      if (status === "SUCCEEDED") {
        const url = extractDashScopeImageUrl(taskData);
        if (url) return url;
        throw new Error("dashscope_image_payload_missing");
      }
      if (status === "FAILED" || status === "CANCELED") {
        throw new Error(
          taskData?.output?.message
          || taskData?.message
          || taskData?.code
          || "dashscope_task_failed"
        );
      }
    }
    throw new Error("dashscope_task_timeout");
  } finally {
    clearTimeout(timer);
  }
}

async function generateOneImageByDashScopeZImage({
  apiBase,
  apiKey,
  prompt,
  style,
  negative,
  model,
  size,
  timeoutMs
}) {
  const finalPrompt = `${prompt}, ${style}, highly detailed, best quality${negative ? `, avoid: ${negative}` : ""}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const origin = toDashScopeRoot(apiBase);
    const resp = await fetch(`${origin}/api/v1/services/aigc/multimodal-generation/generation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        input: {
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: finalPrompt }
              ]
            }
          ]
        },
        parameters: {
          size: toDashScopeSize(size)
        }
      }),
      signal: controller.signal
    });
    const raw = await resp.text().catch(() => "");
    const data = parseJsonSafe(raw);
    if (!resp.ok) {
      throw new Error(extractProviderErrorMessage(resp, data, raw));
    }
    const url = extractDashScopeImageUrl(data);
    if (url) return url;
    throw new Error("dashscope_image_payload_missing");
  } finally {
    clearTimeout(timer);
  }
}

async function generateOneImage({
  apiBase,
  apiKey,
  prompt,
  model,
  style,
  negative,
  size,
  timeoutMs,
  seed
}) {
  if (isDashScopeCompatibleBase(apiBase)) {
    if (isDashScopeZImageModel(model)) {
      return generateOneImageByDashScopeZImage({
        apiBase,
        apiKey,
        prompt,
        style,
        negative,
        model,
        size,
        timeoutMs
      });
    }
    return generateOneImageByDashScope({
      apiBase,
      apiKey,
      prompt,
      model,
      style,
      negative,
      size,
      timeoutMs,
      seed
    });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const finalPrompt = `${prompt}, ${style}, highly detailed, best quality${negative ? `, avoid: ${negative}` : ""}`;
    const resp = await fetch(`${apiBase.replace(/\/$/, "")}/images/generations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        prompt: finalPrompt,
        size,
        n: 1
      }),
      signal: controller.signal
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      const rawMessage = data?.error?.message || data?.message || `HTTP_${resp.status}`;
      if (isInappropriateContentMessage(rawMessage)) {
        throw new Error("DASHSCOPE_INAPPROPRIATE_CONTENT");
      }
      if (String(rawMessage).toLowerCase().includes("not open")) {
        throw new Error("IMAGE_API_NOT_OPEN: 当前图像接口未开通，请检查图片专用 API Key 与服务商权限");
      }
      throw new Error(rawMessage);
    }
    const item = Array.isArray(data?.data) ? data.data[0] : null;
    const b64 = String(item?.b64_json || "").trim();
    const url = String(item?.url || "").trim();
    if (b64) return `data:image/png;base64,${b64}`;
    if (url) return url;
    throw new Error("image_payload_missing");
  } finally {
    clearTimeout(timer);
  }
}

export async function handlePaint(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/v1/paint/models") {
    const allowedModels = resolveAllowedModels();
    return json(res, 200, {
      models: allowedModels.map((id) => ({
        id,
        label: MODEL_META[id]?.label || id,
        price: MODEL_META[id]?.price || "",
        quality: MODEL_META[id]?.quality || ""
      }))
    });
  }

  if (req.method === "GET" && pathname === "/api/v1/paint/history") {
    const reqUrl = new URL(req.url, "http://127.0.0.1");
    const userId = String(reqUrl.searchParams.get("userId") || "").trim();
    const limit = Number.parseInt(String(reqUrl.searchParams.get("limit") || "24"), 10);
    if (!isUuid(userId)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId must be valid uuid" });
    }
    try {
      const history = await listPaintGenerationHistory({ userId, limit });
      return json(res, 200, { history });
    } catch (error) {
      if (String(error?.code || "").trim() === "42P01") {
        return json(res, 200, { history: [] });
      }
      const msg = error instanceof Error ? error.message : "PAINT_HISTORY_FETCH_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }

  if (req.method !== "POST" || pathname !== "/api/v1/paint/generate") return false;

  const body = await parseBody(req);
  const userIdRaw = String(body?.userId || "").trim();
  const userId = isUuid(userIdRaw) ? userIdRaw : "";
  const prompt = String(body?.prompt || "").trim();
  const model = pickImageModel(body?.model);
  const style = mapStyleLabelToPrompt(body?.style || "cinematic");
  const rawStyle = String(body?.style || "cinematic").trim().toLowerCase() || "cinematic";
  const negative = String(body?.negative || "").trim();
  const ratio = String(body?.ratio || "1:1").trim();
  const category = inferCategory(prompt, rawStyle);
  const countRaw = Number.parseInt(String(body?.count || 4), 10);
  const count = Math.max(1, Math.min(4, Number.isFinite(countRaw) ? countRaw : 4));
  const baseSeedRaw = Number.parseInt(String(body?.seed || ""), 10);
  const hasFixedSeed = Number.isFinite(baseSeedRaw) && baseSeedRaw >= 0;
  const baseSeed = hasFixedSeed ? Math.max(0, Math.min(99999999, baseSeedRaw)) : null;

  if (!prompt) {
    return json(res, 400, { code: "INVALID_INPUT", message: "prompt is required" });
  }

  const apiKey = String(
    process.env.OPENAI_IMAGE_API_KEY
      || process.env.DASHSCOPE_API_KEY
      || process.env.OPENAI_API_KEY
      || ""
  ).trim();
  if (!apiKey) {
    return json(res, 500, {
      code: "OPENAI_KEY_MISSING",
      message: "OPENAI_IMAGE_API_KEY / DASHSCOPE_API_KEY / OPENAI_API_KEY is missing"
    });
  }
  const apiBase = String(process.env.OPENAI_IMAGE_BASE_URL || "https://api.openai.com/v1").trim();
  const size = mapRatioToSize(ratio);
  const { width, height } = parseSize(size);
  const timeoutMsRaw = Number.parseInt(String(process.env.OPENAI_IMAGE_TIMEOUT_MS || "90000"), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 90000;

  try {
    const images = [];
    const failures = [];
    for (let idx = 0; idx < count; idx += 1) {
      const seed = hasFixedSeed
        ? Number(baseSeed) + idx * 97
        : Math.floor(Math.random() * 100000) + idx * 97;
      try {
        const url = await generateOneImage({
          apiBase,
          apiKey,
          prompt,
          model,
          style,
          negative,
          size,
          timeoutMs,
          seed
        });
        images.push({
          id: `paint_${Date.now()}_${idx}`,
          url,
          seed,
          width,
          height,
          ratio,
          style: rawStyle,
          model,
          prompt,
          negative,
          category,
          createdAt: Date.now() + idx
        });
      } catch (error) {
        failures.push(error instanceof Error ? error.message : "unknown");
      }
    }

    if (!images.length) {
      const firstError = humanizeImageError(failures[0] || "image generation failed", {
        apiBase,
        isDashScope: isDashScopeCompatibleBase(apiBase)
      });
      return json(res, 502, {
        code: "IMAGE_GENERATION_FAILED",
        message: firstError
      });
    }

    if (userId) {
      try {
        await createPaintGenerationRecord({
          userId,
          provider: "dashscope",
          model,
          prompt,
          enhancedPrompt: `${prompt}, ${style}, highly detailed, best quality${negative ? `, avoid: ${negative}` : ""}`,
          negativePrompt: negative,
          style: rawStyle,
          ratio,
          category,
          countRequested: count,
          successCount: images.length,
          warnings: failures,
          images
        });
      } catch {
        // Keep generation successful even if history persistence fails.
      }
    }

    return json(res, 200, {
      model,
      images,
      warnings: failures
    });
  } catch (error) {
    const msg = humanizeImageError(error instanceof Error ? error.message : "image generation failed", {
      apiBase,
      isDashScope: isDashScopeCompatibleBase(apiBase)
    });
    return json(res, 502, {
      code: "IMAGE_GENERATION_FAILED",
      message: msg
    });
  }
}
