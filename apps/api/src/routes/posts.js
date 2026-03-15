import { json, parseBody } from "../core/http.js";
import {
  createDynamicPost,
  createPostComment,
  deletePostComment,
  deletePostByAuthor,
  listPostComments,
  setPostCommentLike,
  setPostReaction,
  setPostVisibilityByAuthor
} from "../repos/post-repo.js";
import {
  createNotification,
  resolvePostById,
  resolvePostCommentById,
  resolveUsersByMentionTokens
} from "../repos/notification-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";
import { uploadPossibleDataUrl } from "../services/media-storage.js";
import { publishMessageEventToAllUsers } from "../services/message-realtime.js";

function toClock(dateLike) {
  if (!dateLike) return "刚刚";
  const d = new Date(dateLike);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function mapPostCommentNode(row, parentId = null) {
  return {
    id: row.id,
    postId: row.post_id,
    userId: row.user_id,
    parentCommentId: row.parent_comment_id || parentId || null,
    user: row.user_name || "玩家",
    text: row.content || "",
    likes: Number(row.likes_count || 0),
    likedByMe: Boolean(row.liked_by_me),
    createdAt: row.created_at,
    time: toClock(row.created_at),
    replies: Array.isArray(row.replies)
      ? row.replies.map((reply) => mapPostCommentNode(reply, row.id))
      : []
  };
}

function extractMentionTokens(text = "") {
  const raw = String(text || "");
  const tokens = raw.match(/@([^\s#@，。！？；：,.!?]{1,32})/g) || [];
  return [...new Set(tokens.map((item) => String(item || "").replace(/^@+/, "").trim()).filter(Boolean))];
}

async function emitPostReactionNotification({
  postId,
  actorId,
  reactionType
}) {
  const post = await resolvePostById(postId);
  if (!post?.id) return;
  const ownerId = String(post.author_id || "").trim();
  if (!ownerId || ownerId === String(actorId || "").trim()) return;
  const isFavorite = String(reactionType || "").trim() === "favorite";
  await createNotification({
    userId: ownerId,
    type: isFavorite ? "post_favorite" : "post_like",
    title: isFavorite ? "收藏了你的笔记" : "赞了你的笔记",
    content: String(post.title || post.content || "").slice(0, 120),
    actorId,
    targetType: "post",
    targetId: post.id,
    extra: {
      postId: post.id,
      coverUrl: post.cover_url || "",
      worldId: post.linked_world_card_id || null,
      reactionType: isFavorite ? "favorite" : "like"
    }
  });
}

async function emitPostCommentNotifications({
  comment,
  actorId,
  content
}) {
  if (!comment?.id) return;
  const commentCtx = await resolvePostCommentById(comment.id);
  if (!commentCtx?.id) return;
  const actor = String(actorId || "").trim();
  const notifiedUserIds = new Set();

  const postOwnerId = String(commentCtx.post_author_id || "").trim();
  if (postOwnerId && postOwnerId !== actor) {
    await createNotification({
      userId: postOwnerId,
      type: "comment_at",
      title: "评论了你的笔记",
      content,
      actorId: actor,
      targetType: "post_comment",
      targetId: commentCtx.id,
      extra: {
        postId: commentCtx.post_id,
        parentCommentId: commentCtx.parent_comment_id || null,
        coverUrl: commentCtx.cover_url || "",
        worldId: commentCtx.linked_world_card_id || null,
        reason: "post_comment"
      }
    });
    notifiedUserIds.add(postOwnerId);
  }

  const parentId = String(commentCtx.parent_comment_id || "").trim();
  if (parentId) {
    const parentCtx = await resolvePostCommentById(parentId);
    const parentOwnerId = String(parentCtx?.user_id || "").trim();
    if (parentOwnerId && parentOwnerId !== actor && !notifiedUserIds.has(parentOwnerId)) {
      await createNotification({
        userId: parentOwnerId,
        type: "comment_at",
        title: "回复了你的评论",
        content,
        actorId: actor,
        targetType: "post_comment",
        targetId: commentCtx.id,
        extra: {
          postId: commentCtx.post_id,
          parentCommentId: parentId,
          coverUrl: commentCtx.cover_url || "",
          worldId: commentCtx.linked_world_card_id || null,
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
      targetType: "post_comment",
      targetId: commentCtx.id,
      extra: {
        postId: commentCtx.post_id,
        parentCommentId: commentCtx.parent_comment_id || null,
        coverUrl: commentCtx.cover_url || "",
        worldId: commentCtx.linked_world_card_id || null,
        reason: "mention"
      }
    });
    notifiedUserIds.add(targetUserId);
  }
}

export async function handlePosts(req, res, pathname, url) {
  if (req.method === "POST" && pathname === "/api/v1/posts") {
    const body = await parseBody(req);
    const mediaItemsRaw = Array.isArray(body.mediaItems) ? body.mediaItems : [];
    if (!body.authorId || (!body.title && !body.content && mediaItemsRaw.length === 0)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "authorId and (title/content/mediaItems) are required" });
    }
    let mediaItems = [];
    try {
      mediaItems = (await Promise.all(
        mediaItemsRaw.map(async (item) => {
          const mediaType = String(item?.mediaType || item?.type || "").trim().toLowerCase() === "video" ? "video" : "image";
          const rawUrl = String(item?.url || item?.mediaUrl || "").trim();
          const uploadedUrl = await uploadPossibleDataUrl(rawUrl, {
            folder: mediaType === "video" ? "dynamic/video" : "dynamic/image",
            maxBytes: mediaType === "video" ? 8 * 1024 * 1024 : 4 * 1024 * 1024
          });
          return {
            ...item,
            mediaType,
            type: mediaType,
            url: uploadedUrl
          };
        })
      ))
        .filter((item) => String(item?.url || "").trim())
        .slice(0, 9);
    } catch (error) {
      const message = error instanceof Error ? error.message : "DYNAMIC_MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "DYNAMIC_MEDIA_UPLOAD_FAILED", message });
    }
    const post = await createDynamicPost({
      authorId: body.authorId,
      postType: body.postType || "text",
      title: body.title || "",
      content: body.content || "",
      linkedWorldCardId: body.linkedWorldCardId || null,
      visibility: body.visibility || "public",
      mediaItems
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, { post });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/reaction") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId || !body.reactionType) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId, reactionType are required" });
    }
    const active = body.active !== false;
    const post = await setPostReaction({
      postId: body.postId,
      userId: body.userId,
      reactionType: body.reactionType,
      active
    });
    if (post?.id && post?.active) {
      void emitPostReactionNotification({
        postId: post.id,
        actorId: body.userId,
        reactionType: post.reaction_type || body.reactionType
      }).catch(() => {});
      invalidateBootstrapCoreCache();
    }
    const patch = {
      postId: String(post?.id || body.postId || ""),
      reactionType: String(post?.reaction_type || body.reactionType || "like"),
      active: typeof post?.active === "boolean" ? post.active : active,
      likesCount: Number(post?.likes_count || 0),
      favoritesCount: Number(post?.favorites_count || 0),
      version: String(post?.version || new Date().toISOString())
    };
    publishMessageEventToAllUsers("social:patch", {
      kind: "dynamic.reaction",
      actorId: String(body.userId || ""),
      patch,
      serverTime: new Date().toISOString()
    });
    return json(res, 200, {
      patch,
      version: patch.version
    });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/visibility") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId and userId are required" });
    }
    const post = await setPostVisibilityByAuthor({
      postId: body.postId,
      authorId: body.userId,
      visibility: body.visibility || "public"
    });
    if (!post?.id) {
      return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found or no permission" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 200, { post });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/delete") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId and userId are required" });
    }
    const post = await deletePostByAuthor({
      postId: body.postId,
      authorId: body.userId
    });
    if (!post?.id) {
      return json(res, 404, { code: "POST_NOT_FOUND", message: "post not found or no permission" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 200, { ok: true, postId: post.id });
  }
  if (req.method === "GET" && pathname === "/api/v1/posts/comments") {
    const postId = url?.searchParams?.get("postId");
    const userId = String(url?.searchParams?.get("userId") || "").trim();
    const limit = Number(url?.searchParams?.get("limit") || 100);
    if (!postId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId is required" });
    }
    const result = await listPostComments(postId, userId, limit);
    const rows = Array.isArray(result?.comments) ? result.comments : [];
    return json(res, 200, {
      commentsCount: Number(result?.totalCount || rows.length),
      comments: rows.map((row) => mapPostCommentNode(row))
    });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/comments") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId || !body.content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId, content are required" });
    }
    const comment = await createPostComment({
      postId: body.postId,
      userId: body.userId,
      content: body.content,
      parentCommentId: body.parentCommentId || null,
      clientToken: body.clientCommentId || null
    });
    if (comment?.id) {
      void emitPostCommentNotifications({
        comment,
        actorId: body.userId,
        content: String(body.content || "").trim()
      }).catch(() => {});
      invalidateBootstrapCoreCache();
    }
    const patch = {
      postId: String(comment?.post_id || body.postId || ""),
      parentCommentId: comment?.parent_comment_id || null,
      commentsCount: Number(comment?.comments_count || 0),
      version: String(comment?.version || new Date().toISOString())
    };
    const responseComment = comment
      ? {
          id: comment.id,
          postId: comment.post_id,
          userId: comment.user_id,
          parentCommentId: comment.parent_comment_id || null,
          user: String(comment.user_name || "玩家"),
          text: comment.content || "",
          likes: Number(comment.likes_count || 0),
          likedByMe: false,
          createdAt: comment.created_at || null,
          time: toClock(comment.created_at)
        }
      : null;
    publishMessageEventToAllUsers("social:patch", {
      kind: "dynamic.comment.created",
      actorId: String(body.userId || ""),
      postId: String(comment?.post_id || body.postId || ""),
      comment: comment
        ? {
            id: String(comment.id || ""),
            postId: String(comment.post_id || body.postId || ""),
            userId: String(comment.user_id || body.userId || ""),
            parentCommentId: comment.parent_comment_id || null,
            user: String(comment.user_name || "玩家"),
            text: String(comment.content || ""),
            likes: Number(comment.likes_count || 0),
            likedByMe: false,
            createdAt: comment.created_at || null
          }
        : null,
      patch,
      serverTime: new Date().toISOString()
    });
    return json(res, 201, {
      comment: responseComment,
      patch,
      version: patch.version
    });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/comments/like") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    const active = body.active !== false;
    const result = await setPostCommentLike({
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
      kind: "dynamic.comment.like",
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
  if (req.method === "POST" && pathname === "/api/v1/posts/comments/delete") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    const result = await deletePostComment({
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
      kind: "dynamic.comment.deleted",
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
  return false;
}
