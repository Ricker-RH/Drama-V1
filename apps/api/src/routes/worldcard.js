import { json, parseBody } from "../core/http.js";
import {
  createWorldCard,
  listWorldCards,
  publishWorldCard,
  setWorldCardInteraction,
  listWorldCardComments,
  createWorldCardComment,
  setWorldCardCommentLike,
  deleteWorldCardComment
} from "../repos/worldcard-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

function isDbUnavailableError(error) {
  const msg = String(error instanceof Error ? error.message : error || "");
  return /DATABASE_URL is required|ECONNREFUSED|ENOTFOUND|connect ECONN/i.test(msg);
}

function toClock(dateLike) {
  if (!dateLike) return "刚刚";
  const d = new Date(dateLike);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export async function handleWorldCard(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/v1/worldcards/comments") {
    const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
    const worldCardId = String(url.searchParams.get("worldCardId") || "").trim();
    const userId = String(url.searchParams.get("userId") || "").trim();
    const limit = Number(url.searchParams.get("limit") || 100);
    if (!worldCardId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "worldCardId is required" });
    }
    let result;
    try {
      result = await listWorldCardComments(worldCardId, userId, limit);
    } catch (error) {
      if (isDbUnavailableError(error)) {
        return json(res, 200, {
          commentsCount: 0,
          comments: [],
          degraded: true
        });
      }
      throw error;
    }
    const rows = Array.isArray(result?.comments) ? result.comments : [];
    return json(res, 200, {
      commentsCount: Number(result?.totalCount || rows.length),
      comments: rows.map((row) => ({
        id: row.id,
        worldCardId: row.world_card_id,
        userId: row.user_id,
        parentCommentId: row.parent_comment_id || null,
        user: row.user_name || "玩家",
        text: row.content || "",
        likes: Number(row.likes_count || 0),
        likedByMe: Boolean(row.liked_by_me),
        createdAt: row.created_at,
        time: toClock(row.created_at),
        replies: Array.isArray(row.replies)
          ? row.replies.map((reply) => ({
              id: reply.id,
              worldCardId: reply.world_card_id,
              userId: reply.user_id,
              parentCommentId: reply.parent_comment_id || row.id,
              user: reply.user_name || "玩家",
              text: reply.content || "",
              likes: Number(reply.likes_count || 0),
              likedByMe: Boolean(reply.liked_by_me),
              createdAt: reply.created_at,
              time: toClock(reply.created_at)
            }))
          : []
      }))
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/worldcards/comments") {
    const body = await parseBody(req);
    if (!body.worldCardId || !body.userId || !body.content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "worldCardId, userId, content are required" });
    }
    let result;
    try {
      result = await createWorldCardComment({
        worldCardId: body.worldCardId,
        userId: body.userId,
        content: body.content,
        parentCommentId: body.parentCommentId || null
      });
    } catch (error) {
      if (isDbUnavailableError(error)) {
        return json(res, 503, {
          code: "COMMENT_SERVICE_UNAVAILABLE",
          message: "评论服务暂不可用（数据库未配置）"
        });
      }
      throw error;
    }
    if (!result?.comment) {
      return json(res, 404, { code: "WORLD_CARD_NOT_FOUND", message: "world card not found" });
    }
    invalidateBootstrapCoreCache();
    return json(res, 201, {
      comment: {
        id: result.comment.id,
        worldCardId: result.comment.world_card_id,
        userId: result.comment.user_id,
        parentCommentId: result.comment.parent_comment_id || null,
        user: result.comment.user_name || "玩家",
        text: result.comment.content || "",
        likes: Number(result.comment.likes_count || 0),
        likedByMe: false,
        createdAt: result.comment.created_at,
        time: toClock(result.comment.created_at)
      },
      commentsCount: Number(result.commentsCount || 0)
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/worldcards/comments/like") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    const active = body.active !== false;
    let result;
    try {
      result = await setWorldCardCommentLike({
        commentId: body.commentId,
        userId: body.userId,
        active
      });
    } catch (error) {
      if (isDbUnavailableError(error)) {
        return json(res, 503, {
          code: "COMMENT_SERVICE_UNAVAILABLE",
          message: "评论服务暂不可用（数据库未配置）"
        });
      }
      throw error;
    }
    if (!result) {
      return json(res, 404, { code: "COMMENT_NOT_FOUND", message: "comment not found" });
    }
    return json(res, 200, {
      comment: {
        id: result.commentId,
        worldCardId: result.worldCardId,
        likes: Number(result.likesCount || 0),
        likedByMe: Boolean(result.likedByMe)
      },
      active
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/worldcards/comments/delete") {
    const body = await parseBody(req);
    if (!body.commentId || !body.userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "commentId, userId are required" });
    }
    let result;
    try {
      result = await deleteWorldCardComment({
        commentId: body.commentId,
        userId: body.userId
      });
    } catch (error) {
      if (isDbUnavailableError(error)) {
        return json(res, 503, {
          code: "COMMENT_SERVICE_UNAVAILABLE",
          message: "评论服务暂不可用（数据库未配置）"
        });
      }
      throw error;
    }
    if (!result || result.status === "not_found") {
      return json(res, 404, { code: "COMMENT_NOT_FOUND", message: "comment not found" });
    }
    if (result.status === "forbidden") {
      return json(res, 403, { code: "COMMENT_FORBIDDEN", message: "cannot delete others comment" });
    }
    return json(res, 200, {
      commentId: body.commentId,
      worldCardId: result.worldCardId,
      commentsCount: Number(result.commentsCount || 0),
      deletedCount: Number(result.deletedCount || 0),
      topLevelDeleted: Number(result.topLevelDeleted || 0)
    });
  }

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
