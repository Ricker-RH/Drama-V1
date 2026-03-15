import { json, parseBody } from "../core/http.js";
import { resolveSessionUser } from "../core/session.js";
import {
  createCommunity,
  joinCommunity,
  createPost,
  getCommunityPostAccess,
  getPostAccess,
  getPostDetail,
  listPostComments,
  togglePostReaction,
  createPostComment,
  setCommunityPostCommentLike,
  deleteCommunityPostComment,
  incrementPostShare,
  listCommunities,
  listPosts,
  listCommunityMembers
} from "../repos/community-repo.js";
import {
  createNotification,
  resolveCommunityPostById,
  resolveCommunityPostCommentById,
  resolveUsersByMentionTokens
} from "../repos/notification-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";
import { uploadPossibleDataUrl, uploadPossibleDataUrls } from "../services/media-storage.js";
import { publishMessageEventToAllUsers } from "../services/message-realtime.js";

function isUuid(value = "") {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || "").trim());
}

function toClock(dateLike) {
  if (!dateLike) return "刚刚";
  const d = new Date(dateLike);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function mapCommunityCommentNode(row, parentId = null) {
  return {
    id: row.id,
    postId: row.community_post_id,
    userId: row.user_id,
    parentCommentId: row.parent_comment_id || parentId || null,
    user: row.user_name || "玩家",
    text: row.content || "",
    likes: Number(row.likes_count || 0),
    likedByMe: Boolean(row.liked_by_me),
    createdAt: row.created_at,
    time: toClock(row.created_at),
    replies: Array.isArray(row.replies)
      ? row.replies.map((reply) => mapCommunityCommentNode(reply, row.id))
      : []
  };
}

function extractMentionTokens(text = "") {
  const raw = String(text || "");
  const tokens = raw.match(/@([^\s#@，。！？；：,.!?]{1,32})/g) || [];
  return [...new Set(tokens.map((item) => String(item || "").replace(/^@+/, "").trim()).filter(Boolean))];
}

async function emitCommunityReactionNotification({
  postId,
  actorId,
  reactionType
}) {
  const post = await resolveCommunityPostById(postId);
  if (!post?.id) return;
  const ownerId = String(post.author_id || "").trim();
  if (!ownerId || ownerId === String(actorId || "").trim()) return;
  const isFavorite = String(reactionType || "").trim() === "favorite";
  await createNotification({
    userId: ownerId,
    type: isFavorite ? "post_favorite" : "post_like",
    title: isFavorite ? "收藏了你的帖子" : "赞了你的帖子",
    content: String(post.content || "").slice(0, 120),
    actorId,
    targetType: "community_post",
    targetId: post.id,
    extra: {
      postId: post.id,
      coverUrl: post.cover_url || "",
      reactionType: isFavorite ? "favorite" : "like"
    }
  });
}

async function emitCommunityCommentNotifications({
  comment,
  actorId,
  content
}) {
  if (!comment?.id) return;
  const commentCtx = await resolveCommunityPostCommentById(comment.id);
  if (!commentCtx?.id) return;
  const actor = String(actorId || "").trim();
  const notifiedUserIds = new Set();

  const postOwnerId = String(commentCtx.post_author_id || "").trim();
  if (postOwnerId && postOwnerId !== actor) {
    await createNotification({
      userId: postOwnerId,
      type: "comment_at",
      title: "评论了你的帖子",
      content,
      actorId: actor,
      targetType: "community_post_comment",
      targetId: commentCtx.id,
      extra: {
        postId: commentCtx.post_id,
        parentCommentId: commentCtx.parent_comment_id || null,
        coverUrl: commentCtx.cover_url || "",
        reason: "community_post_comment"
      }
    });
    notifiedUserIds.add(postOwnerId);
  }

  const parentId = String(commentCtx.parent_comment_id || "").trim();
  if (parentId) {
    const parentCtx = await resolveCommunityPostCommentById(parentId);
    const parentOwnerId = String(parentCtx?.user_id || "").trim();
    if (parentOwnerId && parentOwnerId !== actor && !notifiedUserIds.has(parentOwnerId)) {
      await createNotification({
        userId: parentOwnerId,
        type: "comment_at",
        title: "回复了你的评论",
        content,
        actorId: actor,
        targetType: "community_post_comment",
        targetId: commentCtx.id,
        extra: {
          postId: commentCtx.post_id,
          parentCommentId: parentId,
          coverUrl: commentCtx.cover_url || "",
          reason: "comment_reply"
        }
      });
      notifiedUserIds.add(parentOwnerId);
    }
  }

  const mentions = extractMentionTokens(content);
  if (!mentions.length) return;
  const mentionedRows = await resolveUsersByMentionTokens(mentions, [actor, ...notifiedUserIds]);
  for (const row of mentionedRows) {
    const targetUserId = String(row?.id || "").trim();
    if (!targetUserId || notifiedUserIds.has(targetUserId)) continue;
    await createNotification({
      userId: targetUserId,
      type: "comment_at",
      title: "@了你",
      content,
      actorId: actor,
      targetType: "community_post_comment",
      targetId: commentCtx.id,
      extra: {
        postId: commentCtx.post_id,
        parentCommentId: commentCtx.parent_comment_id || null,
        coverUrl: commentCtx.cover_url || "",
        reason: "mention"
      }
    });
    notifiedUserIds.add(targetUserId);
  }
}

export async function handleCommunity(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/community/communities") {
    const body = await parseBody(req);
    const ownerId = String(body.ownerId || "").trim();
    const name = String(body.name || "").trim();
    const description = String(body.description || "").trim();
    const tags = Array.isArray(body.tags)
      ? body.tags.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 8)
      : [];
    const coverUrlInput = String(body.coverUrl || "").trim();
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
      ? Math.max(0, Math.min(0.85, coverMaskOpacity))
      : 0.38;

    let coverUrl = coverUrlInput;
    try {
      coverUrl = await uploadPossibleDataUrl(coverUrlInput, {
        folder: "community/cover",
        maxBytes: 3 * 1024 * 1024
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "COMMUNITY_COVER_UPLOAD_FAILED";
      return json(res, 400, { code: "COMMUNITY_COVER_UPLOAD_FAILED", message });
    }

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
    const contentRaw = String(body.content ?? "");
    const content = contentRaw.trim();
    const linkedWorldCardId = String(body.linkedWorldCardId || "").trim();
    const postType = String(body.postType || "text").trim() || "text";
    const visibility = String(body.visibility || "public").trim() || "public";
    const isFeatured = Boolean(body.isFeatured);
    const mediaUrlsRaw = Array.isArray(body.mediaUrls)
      ? body.mediaUrls.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 9)
      : [];

    if (!communityId || !authorId || (!content && mediaUrlsRaw.length === 0)) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "communityId, authorId and (content or mediaUrls) are required"
      });
    }
    if (!isUuid(communityId) || !isUuid(authorId)) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "communityId and authorId must be valid uuid"
      });
    }

    const access = await getCommunityPostAccess({ communityId, userId: authorId });
    if (!access?.id) {
      return json(res, 404, { code: "COMMUNITY_NOT_FOUND", message: "community not found" });
    }
    if (!access.can_post) {
      return json(res, 403, { code: "FORBIDDEN", message: "仅社区成员可发布动态" });
    }

    let mediaUrls = mediaUrlsRaw;
    try {
      mediaUrls = await uploadPossibleDataUrls(mediaUrlsRaw, {
        folder: "community/post",
        maxBytes: 4 * 1024 * 1024
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "COMMUNITY_POST_MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "COMMUNITY_POST_MEDIA_UPLOAD_FAILED", message });
    }
    if (!content && mediaUrls.length === 0) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "content or mediaUrls is required"
      });
    }

    let post;
    try {
      post = await createPost({
        communityId,
        authorId,
        content,
        linkedWorldCardId: linkedWorldCardId || null,
        postType,
        visibility,
        isFeatured,
        mediaUrls
      });
    } catch (error) {
      const dbCode = error && typeof error === "object" ? String(error.code || "") : "";
      const dbConstraint = error && typeof error === "object" ? String(error.constraint || "") : "";
      if (dbCode === "22P02") {
        return json(res, 400, { code: "INVALID_INPUT", message: "invalid uuid format" });
      }
      if (dbCode === "23503" && dbConstraint === "community_posts_community_id_fkey") {
        return json(res, 404, { code: "COMMUNITY_NOT_FOUND", message: "community not found" });
      }
      if (dbCode === "23503" && dbConstraint === "community_posts_author_id_fkey") {
        return json(res, 404, { code: "USER_NOT_FOUND", message: "author user not found" });
      }
      return json(res, 400, { code: "POST_CREATE_FAILED", message: error instanceof Error ? error.message : "create post failed" });
    }
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

  if (req.method === "GET" && pathname === "/api/v1/community/members") {
    const params = req.url?.includes("?") ? new URL(req.url, "http://127.0.0.1").searchParams : new URLSearchParams();
    const communityId = String(params.get("communityId") || "").trim();
    const limit = Number(params.get("limit") || "") || 100;
    if (!communityId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "communityId is required" });
    }
    const members = await listCommunityMembers({ communityId, limit });
    return json(res, 200, { members, memberCount: members.length });
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
    const result = await listPostComments(postId, viewerId, 80);
    const rows = Array.isArray(result?.comments) ? result.comments : [];
    return json(res, 200, {
      post,
      commentsCount: Number(result?.totalCount || rows.length),
      comments: rows.map((row) => mapCommunityCommentNode(row))
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/react") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    const reactionType = String(body.reactionType || "like").trim();
    const active = typeof body.active === "boolean" ? body.active : true;
    if (!postId || !userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId and userId are required" });
    }
    if (!["like", "favorite"].includes(reactionType)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "reactionType must be like or favorite" });
    }
    const access = await getPostAccess({ postId, viewerId: userId });
    if (!access?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    if (!access.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    const data = await togglePostReaction({ postId, userId, reactionType, active });
    if (!data) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    if (data?.active) {
      void emitCommunityReactionNotification({
        postId,
        actorId: userId,
        reactionType: data.reaction_type || reactionType
      }).catch(() => {});
      invalidateBootstrapCoreCache();
    }
    const patch = {
      postId,
      reactionType: String(data?.reaction_type || reactionType || "like"),
      active: typeof data?.active === "boolean" ? data.active : Boolean(active),
      likesCount: Number(data?.likes_count || 0),
      favoritesCount: Number(data?.favorites_count || 0),
      version: String(data?.version || new Date().toISOString())
    };
    publishMessageEventToAllUsers("social:patch", {
      kind: "community.reaction",
      actorId: userId,
      patch,
      serverTime: new Date().toISOString()
    });
    return json(res, 200, {
      patch,
      version: patch.version
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/comments") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    const content = String(body.content || "").trim();
    if (!postId || !userId || !content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId and content are required" });
    }
    const access = await getPostAccess({ postId, viewerId: userId });
    if (!access?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    if (!access.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    const comment = await createPostComment({
      postId,
      userId,
      content,
      parentCommentId: body.parentCommentId || null,
      clientToken: body.clientCommentId || null
    });
    if (!comment?.id) {
      return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    }
    void emitCommunityCommentNotifications({
      comment,
      actorId: userId,
      content
    }).catch(() => {});
    invalidateBootstrapCoreCache();
    const patch = {
      postId,
      parentCommentId: comment?.parent_comment_id || null,
      commentsCount: Number(comment?.comments_count || 0),
      version: String(comment?.version || new Date().toISOString())
    };
    publishMessageEventToAllUsers("social:patch", {
      kind: "community.comment.created",
      actorId: userId,
      postId,
      comment: {
        id: String(comment.id || ""),
        postId: String(comment.community_post_id || postId || ""),
        userId: String(comment.user_id || userId || ""),
        parentCommentId: comment.parent_comment_id || null,
        user: String(comment.user_name || "玩家"),
        text: String(comment.content || ""),
        likes: Number(comment.likes_count || 0),
        likedByMe: false,
        createdAt: comment.created_at || null
      },
      patch,
      serverTime: new Date().toISOString()
    });
    return json(res, 201, {
      comment: {
        id: comment.id,
        postId: comment.community_post_id,
        userId: comment.user_id,
        parentCommentId: comment.parent_comment_id || null,
        user: comment.user_name || "玩家",
        text: comment.content || "",
        likes: Number(comment.likes_count || 0),
        likedByMe: false,
        createdAt: comment.created_at,
        time: toClock(comment.created_at)
      },
      patch,
      version: patch.version
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/comments/like") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    const active = body.active !== false;
    const result = await setCommunityPostCommentLike({
      commentId: body.commentId,
      userId: body.userId,
      active
    });
    if (!result) {
      return json(res, 404, { code: "COMMENT_NOT_FOUND", message: "comment not found" });
    }
    const version = String(result?.version || new Date().toISOString());
    const patch = {
      commentId: String(result.commentId || body.commentId || ""),
      postId: String(result.postId || ""),
      likedByMe: Boolean(result.likedByMe),
      likesCount: Number(result.likesCount || 0),
      version
    };
    publishMessageEventToAllUsers("social:patch", {
      kind: "community.comment.like",
      actorId: String(body.userId || ""),
      patch,
      serverTime: new Date().toISOString()
    });
    return json(res, 200, {
      comment: {
        id: result.commentId,
        postId: result.postId,
        likes: Number(result.likesCount || 0),
        likedByMe: Boolean(result.likedByMe)
      },
      active,
      patch,
      version
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/comments/delete") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    const result = await deleteCommunityPostComment({
      commentId: body.commentId,
      userId: body.userId
    });
    if (!result || result.status === "not_found") {
      return json(res, 404, { code: "COMMENT_NOT_FOUND", message: "comment not found" });
    }
    if (result.status === "forbidden") {
      return json(res, 403, { code: "COMMENT_FORBIDDEN", message: "cannot delete others comment" });
    }
    publishMessageEventToAllUsers("social:patch", {
      kind: "community.comment.deleted",
      actorId: String(body.userId || ""),
      postId: String(result.postId || ""),
      commentId: String(body.commentId || ""),
      commentsCount: Number(result.commentsCount || 0),
      deletedCount: Number(result.deletedCount || 0),
      topLevelDeleted: Number(result.topLevelDeleted || 0),
      serverTime: new Date().toISOString()
    });
    return json(res, 200, {
      commentId: body.commentId,
      postId: result.postId,
      commentsCount: Number(result.commentsCount || 0),
      deletedCount: Number(result.deletedCount || 0),
      topLevelDeleted: Number(result.topLevelDeleted || 0)
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/community/posts/share") {
    const body = await parseBody(req);
    const postId = String(body.postId || "").trim();
    const userId = String(body.userId || "").trim();
    if (!postId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId is required" });
    }
    if (userId) {
      const access = await getPostAccess({ postId, viewerId: userId });
      if (!access?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
      if (!access.can_view) return json(res, 403, { code: "FORBIDDEN", message: "该动态仅社区成员可见" });
    }
    const row = await incrementPostShare(postId);
    if (!row?.id) return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found" });
    invalidateBootstrapCoreCache();
    return json(res, 200, { postId: row.id, sharesCount: Number(row.shares_count || 0) });
  }

  return false;
}
