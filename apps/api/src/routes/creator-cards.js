import { json, parseBody } from "../core/http.js";
import {
  createCreatorCard,
  getCreatorCardById,
  listCreatorCards,
  publishCreatorCard,
  updateCreatorCardDraft
} from "../repos/creator-card-repo.js";
import { createDynamicPost } from "../repos/post-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";
import { getCreatorCardSchema, parseCreatorCardIdea } from "../services/creator-card-parser.js";

const VALID_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);

function normalizeMode(value) {
  const mode = String(value || "").trim().toLowerCase();
  return VALID_MODES.has(mode) ? mode : "";
}

function parseCardId(pathname = "") {
  const m = pathname.match(/^\/api\/v1\/creator\/cards\/([^/]+)$/);
  return m?.[1] || "";
}

function parsePublishCardId(pathname = "") {
  const m = pathname.match(/^\/api\/v1\/creator\/cards\/([^/]+)\/publish$/);
  return m?.[1] || "";
}

export async function handleCreatorCards(req, res, pathname, url) {
  if (req.method === "GET" && pathname === "/api/v1/creator/cards/schema") {
    const mode = normalizeMode(url?.searchParams?.get("mode") || "");
    return json(res, 200, getCreatorCardSchema(mode));
  }

  if (req.method === "POST" && pathname === "/api/v1/creator/cards/parse") {
    const body = await parseBody(req);
    const text = String(body?.text || body?.rawText || "").trim();
    if (!text) {
      return json(res, 400, { code: "INVALID_INPUT", message: "text is required" });
    }
    const mode = normalizeMode(body?.mode || "");
    const parsed = await parseCreatorCardIdea({ mode, text });
    return json(res, 200, parsed);
  }

  if (req.method === "POST" && pathname === "/api/v1/creator/cards") {
    const body = await parseBody(req);
    if (!body.authorId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "authorId is required" });
    }
    const mode = normalizeMode(body.cardMode || body.mode);
    if (!mode) {
      return json(res, 400, { code: "INVALID_MODE", message: "cardMode must be long_narrative|short_narrative|virtual_character" });
    }
    const title = String(body.title || "").trim();
    if (!title) {
      return json(res, 400, { code: "INVALID_INPUT", message: "title is required" });
    }

    const card = await createCreatorCard({
      authorId: body.authorId,
      cardMode: mode,
      title,
      subtitle: body.subtitle || null,
      templateId: body.templateId || null,
      contentJson: body.contentJson || body.content || {},
      promptContextJson: body.promptContextJson || body.promptContext || {},
      runtimeConfigJson: body.runtimeConfigJson || body.runtimeConfig || {},
      qualityRulesJson: body.qualityRulesJson || body.qualityRules || {},
      uxConfigJson: body.uxConfigJson || body.uxConfig || {},
      saveStatus: body.saveStatus || "saved",
      publishStatus: body.publishStatus || "unpublished",
      npcSeeds: Array.isArray(body.npcSeeds) ? body.npcSeeds : [],
      eventSeeds: Array.isArray(body.eventSeeds) ? body.eventSeeds : []
    });

    invalidateBootstrapCoreCache();
    return json(res, 201, { card });
  }

  if (req.method === "GET" && pathname === "/api/v1/creator/cards") {
    const authorId = url?.searchParams?.get("authorId") || null;
    const mode = normalizeMode(url?.searchParams?.get("mode") || "") || null;
    const includeArchived = (url?.searchParams?.get("includeArchived") || "").toLowerCase() === "true";
    const limit = Number(url?.searchParams?.get("limit") || 60);
    const cards = await listCreatorCards({ authorId, mode, includeArchived, limit });
    return json(res, 200, { cards });
  }

  if (req.method === "GET") {
    const cardId = parseCardId(pathname);
    if (cardId) {
      const card = await getCreatorCardById(cardId);
      if (!card) {
        return json(res, 404, { code: "CARD_NOT_FOUND", message: "creator card not found" });
      }
      return json(res, 200, { card });
    }
  }

  if (req.method === "PATCH") {
    const cardId = parseCardId(pathname);
    if (cardId) {
      const body = await parseBody(req);
      const card = await updateCreatorCardDraft(cardId, {
        title: body.title,
        subtitle: body.subtitle,
        templateId: body.templateId,
        contentJson: body.contentJson || body.content,
        promptContextJson: body.promptContextJson || body.promptContext,
        runtimeConfigJson: body.runtimeConfigJson || body.runtimeConfig,
        qualityRulesJson: body.qualityRulesJson || body.qualityRules,
        uxConfigJson: body.uxConfigJson || body.uxConfig,
        saveStatus: body.saveStatus,
        publishStatus: body.publishStatus,
        npcSeeds: body.npcSeeds,
        eventSeeds: body.eventSeeds,
        cardMode: normalizeMode(body.cardMode || body.mode || "") || undefined
      });
      if (!card) {
        return json(res, 404, { code: "CARD_NOT_FOUND", message: "creator card not found" });
      }
      invalidateBootstrapCoreCache();
      return json(res, 200, { card });
    }
  }

  if (req.method === "POST") {
    const cardId = parsePublishCardId(pathname);
    if (cardId) {
      const body = await parseBody(req);
      const syncToDynamic = body.syncToDynamic !== false;
      const result = await publishCreatorCard({
        id: cardId,
        authorId: body.authorId || null,
        publishPayload: body.publishPayload || body.publishInfo || {},
        syncToDynamic
      });
      if (!result) {
        return json(res, 404, { code: "CARD_NOT_FOUND", message: "creator card not found" });
      }

      let dynamicPost = null;
      if (syncToDynamic) {
        const p = body.publishPayload || body.publishInfo || {};
        const post = await createDynamicPost({
          authorId: result.creatorCard.author_id,
          postType: "story_card",
          title: String(p.title || result.worldCard.title || "新作品发布").slice(0, 80),
          content: String(p.intro || p.mainQuest || result.worldCard.summary || "发布了一个新作品").slice(0, 1000),
          linkedWorldCardId: result.worldCard.id
        });
        dynamicPost = post;
      }

      invalidateBootstrapCoreCache();
      return json(res, 200, {
        card: result.creatorCard,
        worldCard: result.worldCard,
        dynamicPost,
        message: syncToDynamic
          ? "发布成功，已同步到动态。可在“我的-作品”中查看。"
          : "发布成功。可在“我的-作品”中查看。"
      });
    }
  }

  return false;
}
