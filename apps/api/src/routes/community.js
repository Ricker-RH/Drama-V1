import { json, parseBody } from "../core/http.js";
import {
  createCommunity,
  joinCommunity,
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

  if (req.method === "POST" && pathname === "/api/v1/community/communities/join") {
    const body = await parseBody(req);
    const communityId = String(body.communityId || "").trim();
    const userId = String(body.userId || "").trim();
    if (!communityId || !userId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "communityId and userId are required"
      });
    }
    const joined = await joinCommunity({ communityId, userId });
    if (!joined?.id) {
      return json(res, 404, { code: "COMMUNITY_NOT_FOUND", message: "community not found" });
    }
    if (!joined.can_join) {
      return json(res, 403, { code: "JOIN_NOT_ALLOWED", message: "当前社群仅限邀请加入" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 200, {
      communityId: joined.id,
      joined: Boolean(joined.joined),
      memberCount: Number(joined.member_count || 0)
    });
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
