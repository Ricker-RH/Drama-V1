import { query } from "../db/client.js";

function normalizeMessageType(messageType = "text") {
  const raw = String(messageType || "").trim().toLowerCase();
  if (raw === "story_card") return "card";
  if (["text", "image", "video", "card", "system"].includes(raw)) return raw;
  return "text";
}

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

export async function listUserInbox({ userId, limit = 80 }) {
  if (!userId) throw new Error("INVALID_INPUT");
  const safeLimit = Math.min(200, Math.max(1, Number.parseInt(String(limit || 80), 10) || 80));
  const res = await query(
    `select
      c.id,
      c.biz_type,
      case
        when c.conversation_type = 'private' then coalesce(uo.nickname, c.title, '私聊会话')
        else c.title
      end as title,
      c.last_message_at,
      coalesce(cm.unread_count, 0) as unread_count,
      coalesce(m.content, '') as preview
    from conversation_members cm
    join conversations c on c.id = cm.conversation_id
    left join conversation_members cmo
      on cmo.conversation_id = c.id
     and cmo.user_id <> $1
     and cmo.deleted_at is null
    left join users uo on uo.id = cmo.user_id
    left join messages m on m.id = c.last_message_id
    where cm.user_id = $1
      and cm.deleted_at is null
    order by coalesce(c.last_message_at, c.updated_at) desc
    limit $2`,
    [userId, safeLimit]
  );
  return res.rows;
}

export async function sendConversationMessage({
  conversationId,
  senderId,
  content,
  messageType = "text",
  payload = {},
  clientMessageId = null
}) {
  await assertConversationMember(conversationId, senderId);
  const safeMessageType = normalizeMessageType(messageType);

  const inserted = await query(
    `insert into messages(
       conversation_id, sender_id, message_type, content, payload, status, client_message_id
     ) values (
       $1, $2, $3, $4, $5::jsonb, 'sent', $6
     )
     returning id, conversation_id, sender_id, message_type, content, payload, created_at`,
    [conversationId, senderId, safeMessageType, content, JSON.stringify(payload || {}), clientMessageId]
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

export async function findOrCreateDirectConversation({ initiatorId, targetUserId }) {
  if (!initiatorId || !targetUserId) throw new Error("INVALID_DIRECT_INPUT");
  if (initiatorId === targetUserId) throw new Error("INVALID_DIRECT_SELF");

  const existed = await query(
    `select c.id
     from conversations c
     join conversation_members m1
       on m1.conversation_id = c.id
      and m1.user_id = $1
      and m1.deleted_at is null
     join conversation_members m2
       on m2.conversation_id = c.id
      and m2.user_id = $2
      and m2.deleted_at is null
     where c.deleted_at is null
       and c.conversation_type = 'private'
       and c.biz_type = 'dm'
     order by coalesce(c.last_message_at, c.updated_at) desc
     limit 1`,
    [initiatorId, targetUserId]
  );
  if (existed.rows[0]?.id) return { id: existed.rows[0].id, created: false };

  const targetRes = await query(
    `select id, nickname
     from users
     where id = $1
     limit 1`,
    [targetUserId]
  );
  const target = targetRes.rows[0];
  if (!target?.id) throw new Error("TARGET_USER_NOT_FOUND");

  const createdConv = await query(
    `insert into conversations(conversation_type, biz_type, title, created_by)
     values ('private', 'dm', $1, $2)
     returning id`,
    [target.nickname || "私聊会话", initiatorId]
  );
  const conversationId = createdConv.rows[0]?.id;
  if (!conversationId) throw new Error("DIRECT_CONVERSATION_CREATE_FAILED");

  await query(
    `insert into conversation_members(conversation_id, user_id, role, unread_count, joined_at)
     values ($1, $2, 'member', 0, now()),
            ($1, $3, 'member', 0, now())
     on conflict (conversation_id, user_id) do update
       set deleted_at = null,
           updated_at = now()`,
    [conversationId, initiatorId, targetUserId]
  );

  return { id: conversationId, created: true };
}

export async function listConversationMessages({
  conversationId,
  userId,
  limit = 120
}) {
  await assertConversationMember(conversationId, userId);
  const safeLimit = Math.min(300, Math.max(1, Number.parseInt(String(limit || 120), 10) || 120));
  const result = await query(
    `with peer as (
       select cm.last_read_at
       from conversation_members cm
       where cm.conversation_id = $1
         and cm.user_id <> $2
         and cm.deleted_at is null
       order by cm.last_read_at desc nulls last
       limit 1
     )
     select
       m.id,
       m.conversation_id,
       m.sender_id,
       m.message_type,
       m.content,
       m.payload,
       m.created_at,
       case
         when m.sender_id = $2 then coalesce((select last_read_at from peer) >= m.created_at, false)
         else true
       end as read_by_peer
     from messages m
     where m.conversation_id = $1
     order by m.created_at asc
     limit $3`,
    [conversationId, userId, safeLimit]
  );
  return result.rows;
}

export async function getConversationPeerPresence({ conversationId, userId }) {
  await assertConversationMember(conversationId, userId);
  const result = await query(
    `select cm.last_read_at
     from conversation_members cm
     where cm.conversation_id = $1
       and cm.user_id <> $2
       and cm.deleted_at is null
     order by cm.last_read_at desc nulls last
     limit 1`,
    [conversationId, userId]
  );
  const lastReadAt = result.rows[0]?.last_read_at || null;
  const online = Boolean(lastReadAt && (Date.now() - new Date(lastReadAt).getTime()) <= 5 * 60 * 1000);
  return { lastReadAt, online };
}

export async function markConversationRead({ conversationId, userId }) {
  await assertConversationMember(conversationId, userId);
  const latestRes = await query(
    `select id, created_at
     from messages
     where conversation_id = $1
     order by created_at desc
     limit 1`,
    [conversationId]
  );
  const latest = latestRes.rows[0] || null;
  await query(
    `update conversation_members
     set unread_count = 0,
         last_read_message_id = $3::uuid,
         last_read_at = case when $4::timestamptz is not null then $4::timestamptz else now() end,
         updated_at = now()
     where conversation_id = $1
       and user_id = $2
       and deleted_at is null`,
    [conversationId, userId, latest?.id || null, latest?.created_at || null]
  );
  return {
    conversationId,
    userId,
    lastReadMessageId: latest?.id || null,
    lastReadAt: latest?.created_at || null
  };
}
