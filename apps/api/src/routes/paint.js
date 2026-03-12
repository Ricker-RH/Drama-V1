import { json, parseBody } from "../core/http.js";

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

function parseSize(size = "1024x1024") {
  const [w, h] = String(size || "1024x1024").split("x");
  const width = Number.parseInt(String(w || "1024"), 10);
  const height = Number.parseInt(String(h || "1024"), 10);
  return {
    width: Number.isFinite(width) ? width : 1024,
    height: Number.isFinite(height) ? height : 1024
  };
}

async function generateOneImage({
  apiBase,
  apiKey,
  prompt,
  style,
  negative,
  size,
  timeoutMs
}) {
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
        model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-1",
        prompt: finalPrompt,
        size,
        n: 1
      }),
      signal: controller.signal
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      const rawMessage = data?.error?.message || data?.message || `HTTP_${resp.status}`;
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
  if (req.method !== "POST" || pathname !== "/api/v1/paint/generate") return false;

  const body = await parseBody(req);
  const prompt = String(body?.prompt || "").trim();
  const style = mapStyleLabelToPrompt(body?.style || "cinematic");
  const negative = String(body?.negative || "").trim();
  const ratio = String(body?.ratio || "1:1").trim();
  const countRaw = Number.parseInt(String(body?.count || 4), 10);
  const count = Math.max(1, Math.min(4, Number.isFinite(countRaw) ? countRaw : 4));

  if (!prompt) {
    return json(res, 400, { code: "INVALID_INPUT", message: "prompt is required" });
  }

  const apiKey = String(process.env.OPENAI_IMAGE_API_KEY || process.env.OPENAI_API_KEY || "").trim();
  if (!apiKey) {
    return json(res, 500, { code: "OPENAI_KEY_MISSING", message: "OPENAI_IMAGE_API_KEY / OPENAI_API_KEY is missing" });
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
      const seed = Math.floor(Math.random() * 100000) + idx * 97;
      try {
        const url = await generateOneImage({
          apiBase,
          apiKey,
          prompt,
          style,
          negative,
          size,
          timeoutMs
        });
        images.push({
          id: `paint_${Date.now()}_${idx}`,
          url,
          seed,
          width,
          height
        });
      } catch (error) {
        failures.push(error instanceof Error ? error.message : "unknown");
      }
    }

    if (!images.length) {
      return json(res, 502, {
        code: "IMAGE_GENERATION_FAILED",
        message: failures[0] || "image generation failed"
      });
    }

    return json(res, 200, {
      images,
      warnings: failures
    });
  } catch (error) {
    return json(res, 502, {
      code: "IMAGE_GENERATION_FAILED",
      message: error instanceof Error ? error.message : "image generation failed"
    });
  }
}
