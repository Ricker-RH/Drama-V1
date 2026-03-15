import { json, parseBody } from "../core/http.js";
import {
  findOrCreateDirectConversation,
  getConversationPeerPresence,
  listConversationMemberUserIds,
  listUserInbox,
  listConversationMessages,
  markConversationRead,
  setConversationThreadPrefs,
  sendConversationMessage
} from "../repos/message-repo.js";
import { createPostComment, setPostCommentLike } from "../repos/post-repo.js";
import {
  createPostComment as createCommunityPostComment,
  getPostAccess as getCommunityPostAccess,
  setCommunityPostCommentLike
} from "../repos/community-repo.js";
import { getFollowRelation, setFollowRelation, userExistsById } from "../repos/auth-repo.js";
import {
  getNotificationByIdForUser,
  markNotificationRead,
  markNotificationsReadByTypes,
  resolveCommunityPostCommentById,
  resolvePostCommentById
} from "../repos/notification-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";
import { openMessageStream, publishMessageEventToUsers } from "../services/message-realtime.js";
import { assertNoDataUrlFields, uploadPossibleDataUrl } from "../services/media-storage.js";

function toClock(dateLike) {
  const dt = new Date(String(dateLike || ""));
  if (Number.isNaN(dt.getTime())) return "刚刚";
  const h = String(dt.getHours()).padStart(2, "0");
  const m = String(dt.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function normalizeNoticeTypesFromBucket(bucket = "", customTypes = []) {
  const b = String(bucket || "").trim();
  if (Array.isArray(customTypes) && customTypes.length > 0) {
    return customTypes.map((item) => String(item || "").trim()).filter(Boolean);
  }
  if (b === "likes") return ["post_like", "post_favorite"];
  if (b === "follows") return ["new_follow"];
  if (b === "comments") return ["comment_at"];
  if (b === "all") return ["post_like", "post_favorite", "new_follow", "comment_at"];
  return [];
}

function resolveNotificationTargetType(notification = {}) {
  const targetType = String(notification?.target_type || "").trim();
  if (targetType) return targetType;
  const extra = notification?.extra && typeof notification.extra === "object" ? notification.extra : {};
  return String(extra?.targetType || "").trim();
}

function resolveNotificationTargetId(notification = {}) {
  const targetId = String(notification?.target_id || "").trim();
  if (targetId) return targetId;
  const extra = notification?.extra && typeof notification.extra === "object" ? notification.extra : {};
  return String(extra?.targetId || "").trim();
}

async function resolveCommentTarget(notification = {}) {
  const targetType = resolveNotificationTargetType(notification);
  const targetId = resolveNotificationTargetId(notification);
  const extra = notification?.extra && typeof notification.extra === "object" ? notification.extra : {};
  if (!targetId) return null;
  if (targetType === "post_comment") {
    const ctx = await resolvePostCommentById(targetId);
    return {
      source: "post",
      commentId: targetId,
      postId: String(extra?.postId || ctx?.post_id || "").trim(),
      targetType
    };
  }
  if (targetType === "community_post_comment") {
    const ctx = await resolveCommunityPostCommentById(targetId);
    return {
      source: "community",
      commentId: targetId,
      postId: String(extra?.postId || ctx?.post_id || "").trim(),
      targetType
    };
  }
  return null;
}

export async function handleMessages(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/v1/messages/stream") {
    const reqUrl = new URL(req.url, "http://127.0.0.1");
    const userId = String(reqUrl.searchParams.get("userId") || "").trim();
    if (!userId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "userId is required"
      });
    }
    openMessageStream({ req, res, userId });
    return true;
  }

  if (req.method === "GET" && pathname === "/api/v1/messages/inbox") {
    const reqUrl = new URL(req.url, "http://127.0.0.1");
    const userId = String(reqUrl.searchParams.get("userId") || "").trim();
    const limit = Number.parseInt(String(reqUrl.searchParams.get("limit") || "80"), 10);
    if (!userId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "userId is required"
      });
    }
    try {
      const rows = await listUserInbox({ userId, limit });
      const inbox = rows.map((row) => {
        const bizType = row.biz_type;
        const type =
          bizType === "community" || bizType === "group" ? "群聊" :
          bizType === "system" ? "通知" :
          "私聊";
        return {
          id: row.id,
          type,
          bizType: String(bizType || "").trim() || "dm",
          name: row.title || "会话",
          userId: row.peer_user_id || "",
          avatarUrl: row.peer_avatar_url || "",
          preview: row.preview || "暂无消息",
          time: toClock(row.last_message_at),
          lastMessageAt: row.last_message_at || null,
          badge: Number(row.unread_count || 0),
          pinned: Boolean(row.pinned),
          muted: Boolean(row.muted),
          worldId: String(row.story_world_card_id || "").trim(),
          sessionId: String(row.story_latest_session_id || "").trim()
        };
      });
      return json(res, 200, { inbox });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "INBOX_FETCH_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }

  if (req.method === "GET" && pathname === "/api/v1/messages/thread") {
    const reqUrl = new URL(req.url, "http://127.0.0.1");
    const conversationId = String(reqUrl.searchParams.get("conversationId") || "").trim();
    const userId = String(reqUrl.searchParams.get("userId") || "").trim();
    const limit = Number.parseInt(String(reqUrl.searchParams.get("limit") || "120"), 10);
    if (!conversationId || !userId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "conversationId and userId are required"
      });
    }
    try {
      const [rows, peer] = await Promise.all([
        listConversationMessages({ conversationId, userId, limit }),
        getConversationPeerPresence({ conversationId, userId })
      ]);
      return json(res, 200, { messages: rows, peer });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "THREAD_FETCH_FAILED";
      const status = msg === "FORBIDDEN_CONVERSATION" ? 403 : 400;
      return json(res, status, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/thread/prefs") {
    const body = await parseBody(req);
    const conversationId = String(body?.conversationId || "").trim();
    const userId = String(body?.userId || "").trim();
    const hasPinned = Object.prototype.hasOwnProperty.call(body || {}, "pinned");
    const hasMuted = Object.prototype.hasOwnProperty.call(body || {}, "muted");
    const pinned = hasPinned ? Boolean(body?.pinned) : null;
    const muted = hasMuted ? Boolean(body?.muted) : null;
    if (!conversationId || !userId || (!hasPinned && !hasMuted)) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "conversationId, userId and at least one of pinned/muted are required"
      });
    }
    try {
      const prefs = await setConversationThreadPrefs({
        conversationId,
        userId,
        pinned,
        muted
      });
      if (!prefs) {
        return json(res, 404, { code: "CONVERSATION_NOT_FOUND", message: "conversation not found" });
      }
      return json(res, 200, {
        prefs: {
          conversationId: String(prefs.conversation_id || conversationId),
          userId: String(prefs.user_id || userId),
          pinned: Boolean(prefs.pinned),
          muted: Boolean(prefs.muted),
          updatedAt: prefs.updated_at || null
        }
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "THREAD_PREFS_UPDATE_FAILED";
      const status = msg === "FORBIDDEN_CONVERSATION" ? 403 : 400;
      return json(res, status, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/send") {
    const body = await parseBody(req);
    if (!body.conversationId || !body.senderId || !body.content) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "conversationId, senderId, content are required"
      });
    }
    const safeMessageType = String(body.messageType || "text").trim().toLowerCase();
    let payload = body.payload && typeof body.payload === "object" ? { ...body.payload } : {};
    try {
      if (safeMessageType === "image" || safeMessageType === "video") {
        const rawUrl = String(payload.url || "").trim();
        if (rawUrl) {
          payload.url = await uploadPossibleDataUrl(rawUrl, {
            folder: safeMessageType === "video" ? "message/video" : "message/image",
            maxBytes: safeMessageType === "video" ? 8 * 1024 * 1024 : 4 * 1024 * 1024
          });
        }
      }
      assertNoDataUrlFields(payload, ["url"], "MESSAGE_PAYLOAD_DATA_URL_FORBIDDEN");
    } catch (error) {
      const code = error instanceof Error ? error.message : "MESSAGE_MEDIA_UPLOAD_FAILED";
      if (code === "MESSAGE_PAYLOAD_DATA_URL_FORBIDDEN") {
        return json(res, 400, { code, message: code });
      }
      const message = error instanceof Error ? error.message : "MESSAGE_MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "MESSAGE_MEDIA_UPLOAD_FAILED", message });
    }

    try {
      const message = await sendConversationMessage({
        conversationId: body.conversationId,
        senderId: body.senderId,
        content: body.content,
        messageType: safeMessageType || "text",
        payload,
        clientMessageId: body.clientMessageId || null
      });
      const memberUserIds = await listConversationMemberUserIds(body.conversationId);
      publishMessageEventToUsers(memberUserIds, "message:new", {
        conversationId: body.conversationId,
        message,
        serverTime: new Date().toISOString()
      });
      const version = String(message?.created_at || new Date().toISOString());
      return json(res, 201, {
        message,
        patch: {
          conversationId: String(body.conversationId || ""),
          messageId: String(message?.id || ""),
          version
        },
        version
      });
    } catch (error) {
      const code = error instanceof Error ? error.message : "MESSAGE_SEND_FAILED";
      const dbConstraint = error && typeof error === "object" && error.constraint === "chk_messages_payload_url_not_data";
      if (code === "FORBIDDEN_CONVERSATION") {
        return json(res, 403, { code, message: code });
      }
      if (code === "MESSAGE_PAYLOAD_DATA_URL_FORBIDDEN" || dbConstraint) {
        return json(res, 400, {
          code: "MESSAGE_PAYLOAD_DATA_URL_FORBIDDEN",
          message: "MESSAGE_PAYLOAD_DATA_URL_FORBIDDEN"
        });
      }
      return json(res, 400, { code, message: code });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/direct/start") {
    const body = await parseBody(req);
    const initiatorId = String(body.initiatorId || "").trim();
    const targetUserId = String(body.targetUserId || "").trim();
    if (!initiatorId || !targetUserId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "initiatorId and targetUserId are required"
      });
    }
    try {
      const conversation = await findOrCreateDirectConversation({ initiatorId, targetUserId });
      invalidateBootstrapCoreCache();
      return json(res, 200, { conversation });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "DIRECT_START_FAILED";
      const status = msg === "TARGET_USER_NOT_FOUND" ? 404 : 400;
      return json(res, status, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/read") {
    const body = await parseBody(req);
    const conversationId = String(body.conversationId || "").trim();
    const userId = String(body.userId || "").trim();
    if (!conversationId || !userId) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "conversationId and userId are required"
      });
    }
    try {
      const receipt = await markConversationRead({ conversationId, userId });
      const memberUserIds = await listConversationMemberUserIds(conversationId);
      publishMessageEventToUsers(memberUserIds, "conversation:read", {
        conversationId,
        receipt,
        serverTime: new Date().toISOString()
      });
      const version = String(receipt?.lastReadAt || new Date().toISOString());
      return json(res, 200, {
        receipt,
        patch: {
          conversationId,
          lastReadAt: receipt?.lastReadAt || null,
          unreadCount: 0,
          version
        },
        version
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "READ_MARK_FAILED";
      const status = msg === "FORBIDDEN_CONVERSATION" ? 403 : 400;
      return json(res, status, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/notifications/read") {
    const body = await parseBody(req);
    const userId = String(body.userId || "").trim();
    const notificationId = String(body.notificationId || "").trim();
    if (!userId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId is required" });
    }
    try {
      if (notificationId) {
        const result = await markNotificationRead({ userId, notificationId });
        invalidateBootstrapCoreCache();
        return json(res, 200, { updated: Number(result.updated || 0) });
      }
      const types = normalizeNoticeTypesFromBucket(body.bucket, body.types);
      if (!types.length) {
        return json(res, 400, { code: "INVALID_INPUT", message: "bucket or types is required" });
      }
      const result = await markNotificationsReadByTypes({ userId, types });
      invalidateBootstrapCoreCache();
      return json(res, 200, { updated: Number(result.updated || 0) });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "NOTIFICATION_READ_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/notifications/follow") {
    const body = await parseBody(req);
    const userId = String(body.userId || "").trim();
    const notificationId = String(body.notificationId || "").trim();
    const follow = body.follow !== false;
    if (!userId || !notificationId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId and notificationId are required" });
    }
    try {
      const notification = await getNotificationByIdForUser({ notificationId, userId });
      if (!notification || notification.type !== "new_follow") {
        return json(res, 404, { code: "NOTIFICATION_NOT_FOUND", message: "notification not found" });
      }
      const targetUserId = String(notification.actor_id || "").trim();
      if (!targetUserId || targetUserId === userId) {
        return json(res, 400, { code: "INVALID_TARGET_USER", message: "invalid target user" });
      }
      const [selfExists, targetExists] = await Promise.all([
        userExistsById(userId),
        userExistsById(targetUserId)
      ]);
      if (!selfExists || !targetExists) {
        return json(res, 404, { code: "USER_NOT_FOUND", message: "user not found" });
      }
      await setFollowRelation({ followerId: userId, followingId: targetUserId, follow });
      const followedByMe = await getFollowRelation(userId, targetUserId);
      await markNotificationRead({ userId, notificationId });
      invalidateBootstrapCoreCache();
      return json(res, 200, {
        relation: {
          followerId: userId,
          followingUserId: targetUserId,
          followedByMe
        }
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "FOLLOW_ACTION_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/notifications/comment/like") {
    const body = await parseBody(req);
    const userId = String(body.userId || "").trim();
    const notificationId = String(body.notificationId || "").trim();
    const active = body.active !== false;
    if (!userId || !notificationId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId and notificationId are required" });
    }
    try {
      const notification = await getNotificationByIdForUser({ notificationId, userId });
      if (!notification || notification.type !== "comment_at") {
        return json(res, 404, { code: "NOTIFICATION_NOT_FOUND", message: "notification not found" });
      }
      const target = await resolveCommentTarget(notification);
      if (!target?.commentId || !target?.source) {
        return json(res, 400, { code: "UNSUPPORTED_COMMENT_TARGET", message: "unsupported comment target" });
      }
      const result = target.source === "community"
        ? await setCommunityPostCommentLike({ commentId: target.commentId, userId, active })
        : await setPostCommentLike({ commentId: target.commentId, userId, active });
      if (!result) {
        return json(res, 404, { code: "COMMENT_NOT_FOUND", message: "comment not found" });
      }
      await markNotificationRead({ userId, notificationId });
      invalidateBootstrapCoreCache();
      return json(res, 200, {
        comment: {
          id: result.commentId,
          postId: result.postId,
          likes: Number(result.likesCount || 0),
          likedByMe: Boolean(result.likedByMe)
        },
        version: result.version
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "MESSAGE_COMMENT_LIKE_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/messages/notifications/comment/reply") {
    const body = await parseBody(req);
    const userId = String(body.userId || "").trim();
    const notificationId = String(body.notificationId || "").trim();
    const content = String(body.content || "").trim();
    if (!userId || !notificationId || !content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId, notificationId and content are required" });
    }
    try {
      const notification = await getNotificationByIdForUser({ notificationId, userId });
      if (!notification || notification.type !== "comment_at") {
        return json(res, 404, { code: "NOTIFICATION_NOT_FOUND", message: "notification not found" });
      }
      const target = await resolveCommentTarget(notification);
      if (!target?.commentId || !target?.postId || !target?.source) {
        return json(res, 400, { code: "UNSUPPORTED_COMMENT_TARGET", message: "unsupported comment target" });
      }
      const clientCommentId = `message_reply_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
      const created = target.source === "community"
        ? await (async () => {
          const access = await getCommunityPostAccess({ postId: target.postId, viewerId: userId });
          if (!access?.id || !access?.can_view) throw new Error("FORBIDDEN");
          return createCommunityPostComment({
            postId: target.postId,
            userId,
            content,
            parentCommentId: target.commentId,
            clientToken: clientCommentId
          });
        })()
        : await createPostComment({
          postId: target.postId,
          userId,
          content,
          parentCommentId: target.commentId,
          clientToken: clientCommentId
        });
      if (!created?.id) {
        return json(res, 404, { code: "COMMENT_CREATE_FAILED", message: "comment create failed" });
      }
      await markNotificationRead({ userId, notificationId });
      invalidateBootstrapCoreCache();
      return json(res, 201, {
        reply: {
          id: created.id,
          postId: created.post_id || created.community_post_id || target.postId,
          parentCommentId: created.parent_comment_id || target.commentId,
          userId: created.user_id || userId,
          user: created.user_name || "玩家",
          text: created.content || content,
          createdAt: created.created_at || null,
          time: toClock(created.created_at)
        },
        version: created.version || new Date().toISOString()
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "MESSAGE_COMMENT_REPLY_FAILED";
      return json(res, 400, { code: msg, message: msg });
    }
  }
  return false;
}
