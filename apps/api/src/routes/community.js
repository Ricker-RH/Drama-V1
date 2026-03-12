import { json, parseBody } from "../core/http.js";
import {
  createCommunity,
  createPost,
  listCommunities,
  listPosts
} from "../repos/community-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

export async function handleCommunity(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/community/communities") {
    const body = await parseBody(req);
    const ownerId = String(body.ownerId || "").trim();
    const name = String(body.name || "").trim();
    const description = String(body.description || "").trim();
    const tags = Array.isArray(body.tags)
      ? body.tags.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 8)
      : [];
    const coverUrl = String(body.coverUrl || "").trim();
    const coverMaskOpacity = Number(body.coverMaskOpacity);
    const joinMode = String(body.joinMode || "public").trim();
    const theme = String(body.theme || "综合").trim();
    const genderFocus = String(body.genderFocus || "不限频向").trim();

    if (!ownerId || !name || !description) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "ownerId, name and description are required"
      });
    }
    if (!["public", "approval", "invite_only"].includes(joinMode)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "invalid joinMode" });
    }
    const normalizedMask = Number.isFinite(coverMaskOpacity)
      ? Math.max(0.05, Math.min(0.85, coverMaskOpacity))
      : 0.38;

    const community = await createCommunity({
      ownerId,
      name,
      description,
      tags,
      coverUrl,
      coverMaskOpacity: normalizedMask,
      joinMode,
      theme,
      genderFocus
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, { community });
  }

  if (req.method === "GET" && pathname === "/api/v1/community/communities") {
    const limit = Number(req.url?.includes("?") ? new URL(req.url, "http://127.0.0.1").searchParams.get("limit") : "") || 100;
    const communities = await listCommunities(limit);
    return json(res, 200, { communities });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts") {
    const body = await parseBody(req);
    if (!body.authorId || !body.content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "authorId and content are required" });
    }

    const post = await createPost({
      authorId: body.authorId,
      content: body.content
    });
    invalidateBootstrapCoreCache();

    return json(res, 201, { post });
  }

  if (req.method === "GET" && pathname === "/api/v1/community/posts") {
    const posts = await listPosts();
    return json(res, 200, { posts });
  }

  return false;
}
