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
import { assertNoDataUrlFields, uploadPossibleDataUrl, uploadPossibleDataUrls } from "../services/media-storage.js";
import { publishMessageEventToUsers } from "../services/message-realtime.js";

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

function createDynamicPostAsync(payload = {}) {
  void createDynamicPost(payload).catch(() => {});
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
      subtitle: body.subtitle ?? body.cardIntro ?? null,
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
        subtitle: body.subtitle ?? body.cardIntro,
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
      const publishPayloadRaw = body.publishPayload || body.publishInfo || {};
      const publishPayload = publishPayloadRaw && typeof publishPayloadRaw === "object"
        ? { ...publishPayloadRaw }
        : {};
      try {
        publishPayload.cover = await uploadPossibleDataUrl(publishPayload.cover || "", {
          folder: "world/cover",
          maxBytes: 4 * 1024 * 1024
        });
        const rawMediaUrls = Array.isArray(publishPayload.mediaUrls)
          ? publishPayload.mediaUrls
          : Array.isArray(publishPayload.media_urls)
            ? publishPayload.media_urls
            : [];
        if (rawMediaUrls.length) {
          publishPayload.mediaUrls = await uploadPossibleDataUrls(rawMediaUrls, {
            folder: "world/album",
            maxBytes: 6 * 1024 * 1024,
            concurrency: 3
          });
        }
        const rawAlbum = Array.isArray(publishPayload.albumMedia)
          ? publishPayload.albumMedia
          : Array.isArray(publishPayload.album_media)
            ? publishPayload.album_media
            : [];
        if (rawAlbum.length) {
          const albumUrls = rawAlbum.map((item) => (
            typeof item === "string"
              ? String(item || "").trim()
              : String(item?.url || item?.mediaUrl || item?.media_url || "").trim()
          ));
          const uploadedAlbumUrls = await uploadPossibleDataUrls(albumUrls, {
            folder: "world/album",
            maxBytes: 6 * 1024 * 1024,
            concurrency: 3
          });
          publishPayload.albumMedia = uploadedAlbumUrls.map((url, idx) => ({
            id: `album_${idx + 1}`,
            url,
            name: `image_${idx + 1}`
          }));
          if (!Array.isArray(publishPayload.mediaUrls) || !publishPayload.mediaUrls.length) {
            publishPayload.mediaUrls = [...uploadedAlbumUrls];
          }
        }
        assertNoDataUrlFields(publishPayload, ["cover"], "PUBLISH_PAYLOAD_DATA_URL_FORBIDDEN");
      } catch (error) {
        const code = error instanceof Error ? error.message : "WORLD_COVER_UPLOAD_FAILED";
        if (code === "PUBLISH_PAYLOAD_DATA_URL_FORBIDDEN") {
          return json(res, 400, { code, message: code });
        }
        const message = error instanceof Error ? error.message : "WORLD_COVER_UPLOAD_FAILED";
        return json(res, 400, { code: "WORLD_COVER_UPLOAD_FAILED", message });
      }
      let result = null;
      try {
        result = await publishCreatorCard({
          id: cardId,
          authorId: body.authorId || null,
          publishPayload,
          syncToDynamic
        });
      } catch (error) {
        const code = error instanceof Error ? error.message : "CARD_PUBLISH_FAILED";
        const dbConstraint = error && typeof error === "object" && [
          "chk_creator_cards_publish_cover_not_data",
          "chk_card_publish_logs_cover_not_data",
          "chk_world_cards_cover_url_not_data"
        ].includes(String(error.constraint || ""));
        if (code === "CARD_AUTHOR_MISMATCH") {
          return json(res, 403, { code, message: code });
        }
        if (code === "PUBLISH_PAYLOAD_DATA_URL_FORBIDDEN" || dbConstraint) {
          return json(res, 400, {
            code: "PUBLISH_PAYLOAD_DATA_URL_FORBIDDEN",
            message: "PUBLISH_PAYLOAD_DATA_URL_FORBIDDEN"
          });
        }
        return json(res, 400, { code, message: code });
      }
      if (!result) {
        return json(res, 404, { code: "CARD_NOT_FOUND", message: "creator card not found" });
      }

      const interruptedRows = Array.isArray(result.interruptedSessions) ? result.interruptedSessions : [];
      if (interruptedRows.length) {
        const byUser = new Map();
        interruptedRows.forEach((row) => {
          const uid = String(row?.user_id || "").trim();
          const sid = String(row?.id || "").trim();
          if (!uid || !sid) return;
          if (!byUser.has(uid)) byUser.set(uid, []);
          byUser.get(uid).push(sid);
        });
        for (const [uid, sessionIds] of byUser.entries()) {
          publishMessageEventToUsers([uid], "social:patch", {
            kind: "game.session.interrupted",
            worldCardId: String(result?.worldCard?.id || ""),
            gameplayVersion: Number(result?.gameplayVersion || 1),
            reason: "WORLD_CARD_UPDATED",
            sessionIds
          });
        }
      }

      let dynamicPost = null;
      if (syncToDynamic) {
        const p = publishPayload;
        createDynamicPostAsync({
          authorId: result.creatorCard.author_id,
          postType: "story_card",
          title: String(p.title || result.worldCard.title || "新作品发布").slice(0, 80),
          content: String(p.intro || p.mainQuest || result.worldCard.summary || "发布了一个新作品").slice(0, 1000),
          linkedWorldCardId: result.worldCard.id
        });
      }

      invalidateBootstrapCoreCache();
      return json(res, 200, {
        card: result.creatorCard,
        worldCard: result.worldCard,
        publishClass: result.publishClass || "gameplay",
        gameplayChanged: Boolean(result.gameplayChanged),
        gameplayVersion: Number(result.gameplayVersion || 1),
        appearanceVersion: Number(result.appearanceVersion || 1),
        interruptedCount: interruptedRows.length,
        dynamicPost,
        message: syncToDynamic ? "已发布（动态同步中）" : "已发布"
      });
    }
  }

  return false;
}
