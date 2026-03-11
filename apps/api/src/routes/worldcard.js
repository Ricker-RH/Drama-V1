import { json, parseBody } from "../core/http.js";
import { createWorldCard, listWorldCards, publishWorldCard, setWorldCardInteraction } from "../repos/worldcard-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

export async function handleWorldCard(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/worldcards/interaction") {
    const body = await parseBody(req);
    if (!body.worldCardId || !body.userId || !body.interactionType) {
      return json(res, 400, { code: "INVALID_INPUT", message: "worldCardId, userId, interactionType are required" });
    }
    if (!["like", "favorite"].includes(body.interactionType)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "interactionType must be like/favorite" });
    }

    const active = body.active !== false;
    const stats = await setWorldCardInteraction({
      worldCardId: body.worldCardId,
      userId: body.userId,
      interactionType: body.interactionType,
      active
    });
    if (!stats) {
      return json(res, 404, { code: "WORLD_CARD_NOT_FOUND", message: "world card not found" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 200, { stats, active });
  }

  if (req.method === "POST" && pathname === "/api/v1/worldcards") {
    const body = await parseBody(req);
    if (!body.title) {
      return json(res, 400, { code: "INVALID_INPUT", message: "title is required" });
    }

    const card = await createWorldCard({
      authorId: body.authorId || null,
      title: body.title,
      setting: body.setting || "",
      rules: body.rules || []
    });

    return json(res, 201, { card });
  }

  if (req.method === "POST" && pathname.startsWith("/api/v1/worldcards/") && pathname.endsWith("/publish")) {
    const id = pathname.split("/")[4];
    const card = await publishWorldCard(id);
    if (!card) {
      return json(res, 404, { code: "WORLD_CARD_NOT_FOUND", message: "world card not found" });
    }

    return json(res, 200, { card });
  }

  if (req.method === "GET" && pathname === "/api/v1/worldcards") {
    const worldCards = await listWorldCards();
    return json(res, 200, { worldCards });
  }

  return false;
}
