import { json, parseBody } from "../core/http.js";
import {
  findOrCreateDirectConversation,
  getConversationPeerPresence,
  listUserInbox,
  listConversationMessages,
  markConversationRead,
  sendConversationMessage
} from "../repos/message-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

export async function handleMessages(req, res, pathname) {
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
          bizType === "story" ? "故事" : "私聊";
        return {
          id: row.id,
          type,
          name: row.title || "会话",
          preview: row.preview || "暂无消息",
          time: toClock(row.last_message_at),
          badge: Number(row.unread_count || 0)
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

  if (req.method === "POST" && pathname === "/api/v1/messages/send") {
    const body = await parseBody(req);
    if (!body.conversationId || !body.senderId || !body.content) {
      return json(res, 400, {
        code: "INVALID_INPUT",
        message: "conversationId, senderId, content are required"
      });
    }
    const message = await sendConversationMessage({
      conversationId: body.conversationId,
      senderId: body.senderId,
      content: body.content,
      messageType: body.messageType || "text",
      payload: body.payload || {},
      clientMessageId: body.clientMessageId || null
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, { message });
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
      invalidateBootstrapCoreCache();
      return json(res, 200, { receipt });
    } catch (error) {
      const msg = error instanceof Error ? error.message : "READ_MARK_FAILED";
      const status = msg === "FORBIDDEN_CONVERSATION" ? 403 : 400;
      return json(res, status, { code: msg, message: msg });
    }
  }
  return false;
}
