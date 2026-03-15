import { query } from "../db/client.js";

function asCleanText(value = "", max = 8000) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text.slice(0, Math.max(1, Math.min(max, 20000)));
}

function normalizeImageItem(item = {}) {
  const src = item && typeof item === "object" ? item : {};
  return {
    id: asCleanText(src.id || "", 120),
    url: asCleanText(src.url || "", 4096),
    fallbackUrl: asCleanText(src.fallbackUrl || "", 4096),
    seed: Number.isFinite(Number(src.seed)) ? Number(src.seed) : 0,
    width: Number.isFinite(Number(src.width)) ? Number(src.width) : 1024,
    height: Number.isFinite(Number(src.height)) ? Number(src.height) : 1024,
    style: asCleanText(src.style || "", 80),
    ratio: asCleanText(src.ratio || "", 20),
    prompt: asCleanText(src.prompt || "", 3000),
    negative: asCleanText(src.negative || "", 2000),
    model: asCleanText(src.model || "", 120),
    category: asCleanText(src.category || "sfw", 20),
    createdAt: Number.isFinite(Number(src.createdAt)) ? Number(src.createdAt) : Date.now()
  };
}

function normalizeWarnings(warnings = []) {
  if (!Array.isArray(warnings)) return [];
  return warnings
    .map((item) => asCleanText(item || "", 500))
    .filter(Boolean)
    .slice(0, 8);
}

export async function createPaintGenerationRecord(payload = {}) {
  const userId = String(payload.userId || "").trim() || null;
  const model = asCleanText(payload.model || "", 120);
  const prompt = asCleanText(payload.prompt || "", 3000);
  if (!model || !prompt) return null;

  const enhancedPrompt = asCleanText(payload.enhancedPrompt || prompt, 5000) || prompt;
  const negativePrompt = asCleanText(payload.negativePrompt || "", 2000);
  const style = asCleanText(payload.style || "cinematic", 80) || "cinematic";
  const ratio = asCleanText(payload.ratio || "1:1", 20) || "1:1";
  const category = asCleanText(payload.category || "sfw", 20) || "sfw";
  const provider = asCleanText(payload.provider || "dashscope", 40) || "dashscope";
  const countRequested = Math.max(1, Math.min(8, Number.parseInt(String(payload.countRequested || 1), 10) || 1));
  const images = Array.isArray(payload.images) ? payload.images.map((item) => normalizeImageItem(item)).filter((item) => item.url) : [];
  const successCount = Math.max(0, Math.min(8, Number.parseInt(String(payload.successCount || images.length), 10) || images.length));
  const warnings = normalizeWarnings(payload.warnings || []);

  const result = await query(
    `insert into ai_paint_generations(
      user_id, provider, model, prompt, enhanced_prompt, negative_prompt, style, ratio, category,
      count_requested, success_count, warnings, images
    ) values (
      $1::uuid, $2, $3, $4, $5, $6, $7, $8, $9,
      $10, $11, $12::jsonb, $13::jsonb
    )
    returning id, user_id, provider, model, prompt, enhanced_prompt, negative_prompt, style, ratio, category,
              count_requested, success_count, warnings, images, created_at`,
    [
      userId,
      provider,
      model,
      prompt,
      enhancedPrompt,
      negativePrompt,
      style,
      ratio,
      category,
      countRequested,
      successCount,
      JSON.stringify(warnings),
      JSON.stringify(images)
    ]
  );
  return result.rows[0] || null;
}

export async function listPaintGenerationHistory({ userId, limit = 24 } = {}) {
  const uid = String(userId || "").trim();
  if (!uid) return [];
  const take = Math.max(1, Math.min(100, Number.parseInt(String(limit || 24), 10) || 24));
  const result = await query(
    `select id, user_id, provider, model, prompt, enhanced_prompt, negative_prompt, style, ratio, category,
            count_requested, success_count, warnings, images, created_at
     from ai_paint_generations
     where user_id = $1::uuid
     order by created_at desc
     limit $2`,
    [uid, take]
  );
  return result.rows;
}
