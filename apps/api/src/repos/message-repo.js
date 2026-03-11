import { query } from "../db/client.js";

async function assertConversationMember(conversationId, userId) {
  const res = await query(
    `select 1
     from conversation_members
     where conversation_id = $1
       and user_id = $2
       and deleted_at is null
     limit 1`,
    [conversationId, userId]
  );
  if (!res.rowCount) {
    throw new Error("FORBIDDEN_CONVERSATION");
  }
}

export async function sendConversationMessage({
  conversationId,
  senderId,
  content,
  messageType = "text",
  clientMessageId = null
}) {
  await assertConversationMember(conversationId, senderId);

  const inserted = await query(
    `insert into messages(
       conversation_id, sender_id, message_type, content, payload, status, client_message_id
     ) values (
       $1, $2, $3, $4, '{}'::jsonb, 'sent', $5
     )
     returning id, conversation_id, sender_id, message_type, content, created_at`,
    [conversationId, senderId, messageType, content, clientMessageId]
  );
  const message = inserted.rows[0] || null;
  if (!message) return null;

  await query(
    `update conversations
     set last_message_id = $2,
         last_message_at = $3,
         updated_at = now()
     where id = $1`,
    [conversationId, message.id, message.created_at]
  );

  await query(
    `update conversation_members
     set unread_count = case when user_id = $2 then 0 else unread_count + 1 end,
         last_read_message_id = case when user_id = $2 then $3 else last_read_message_id end,
         last_read_at = case when user_id = $2 then now() else last_read_at end,
         updated_at = now()
     where conversation_id = $1
       and deleted_at is null`,
    [conversationId, senderId, message.id]
  );

  return message;
}

