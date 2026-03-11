import { json, parseBody } from "../core/http.js";
import { sendConversationMessage } from "../repos/message-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

export async function handleMessages(req, res, pathname) {
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
      clientMessageId: body.clientMessageId || null
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, { message });
  }
  return false;
}

