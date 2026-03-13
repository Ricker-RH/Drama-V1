import { json, parseBody } from "../core/http.js";
import { resolveSessionUser } from "../core/session.js";
import {
  createCommunity,
  joinCommunity,
  createPost,
  getPostDetail,
  listPostComments,
  togglePostReaction,
  createPostComment,
  incrementPostShare,
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
    const communityId = String(body.communityId || "").trim();
    const authorId = String(body.authorId || "").trim();
    const content = String(body.content || "").trim();
    const linkedWorldCardId = String(body.linkedWorldCardId || "").trim();
    const postType = String(body.postType || "text").trim() || "text";
    const visibility = String(body.visibility || "public").trim() || "public";
    const isFeatured = Boolean(body.isFeatured);
    const mediaUrls = Array.isArray(body.mediaUrls)
      ? body.mediaUrls.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 9)
      : [];

    if (!communityId || !authorId || !content) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "communityId, authorId and content are required"
      });
    }

    const post = await createPost({
      communityId,
      authorId,
      content,
      linkedWorldCardId: linkedWorldCardId || null,
      postType,
      visibility,
      isFeatured,
      mediaUrls
    });
    if (!post?.id) {
      return json(res, 500, { code: "POST_CREATE_FAILED", message: "create post failed" });
    }
    invalidateBootstrapCoreCache();

    return json(res, 201, { post });
  }

  if (req.method === "GET" && pathname === "/api/v1/community/posts") {
    const params = req.url?.includes("?") ? new URL(req.url, "http://127.0.0.1").searchParams : new URLSearchParams();
    const communityId = String(params.get("communityId") || "").trim();
    const limit = Number(params.get("limit") || "") || 100;
    const viewerIdQuery = String(params.get("viewerId") || "").trim();
    const sessionUser = viewerIdQuery ? null : await resolveSessionUser(req);
    const viewerId = viewerIdQuery || String(sessionUser?.id || "").trim() || null;
    const posts = await listPosts({ communityId, limit, viewerId });
    return json(res, 200, { posts });
  }

  if (req.method === "GET" && pathname === "/api/v1/community/posts/detail") {
    const params = req.url?.includes("?") ? new URL(req.url, "http://127.0.0.1").searchParams : new URLSearchParams();
    const postId = String(params.get("postId") || "").trim();
    const viewerIdQuery = String(params.get("viewerId") || "").trim();
    const sessionUser = viewerIdQuery ? null : await resolveSessionUser(req);
    const viewerId = viewerIdQuery || String(sessionUser?.id || "").trim() || null;
    if (!postId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId is required" });
    }
    const post = await getPostDetail({ postId, viewerId });
    if (!post?.id) {
      return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    }
    if (!post.can_view) {
      return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    }
    const comments = await listPostComments(postId, 80);
    return json(res, 200, { post, comments });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/react") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    const reactionType = String(body.reactionType || "like").trim();
    if (!postId || !userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId and userId are required" });
    }
    if (!["like", "favorite"].includes(reactionType)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "reactionType must be like or favorite" });
    }
    const detail = await getPostDetail({ postId, viewerId: userId });
    if (!detail?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    if (!detail.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    const data = await togglePostReaction({ postId, userId, reactionType });
    if (!data) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    invalidateBootstrapCoreCache();
    return json(res, 200, { reaction: data });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/comments") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    const content = String(body.content || "").trim();
    if (!postId || !userId || !content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId and content are required" });
    }
    const detail = await getPostDetail({ postId, viewerId: userId });
    if (!detail?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    if (!detail.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    const comment = await createPostComment({ postId, userId, content });
    if (!comment?.id) {
      return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 201, { comment });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/share") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    if (!postId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId is required" });
    }
    if (userId) {
      const detail = await getPostDetail({ postId, viewerId: userId });
      if (!detail?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
      if (!detail.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    }
    const row = await incrementPostShare(postId);
    if (!row?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    invalidateBootstrapCoreCache();
    return json(res, 200, { postId: row.id, sharesCount: Number(row.shares_count || 0) });
  }

  return false;
}
