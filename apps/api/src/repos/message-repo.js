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
        when c.biz_type = 'story' then coalesce(
          nullif(c.title, '游戏记录'),
          nullif(c.title, '故事会话'),
          wc.title,
          '故事会话'
        )
        when c.conversation_type = 'private' then coalesce(uo.nickname, c.title, '私聊会话')
        else c.title
      end as title,
      cmo.user_id as peer_user_id,
      case
        when c.biz_type = 'story' then coalesce(
          nullif(c.avatar_url, ''),
          nullif(to_jsonb(wc)->>'first_image_url', ''),
          nullif(wc.cover_url, ''),
          ''
        )
        else coalesce(nullif(uo.avatar_url, ''), nullif(c.avatar_url, ''), '')
      end as peer_avatar_url,
      c.last_message_at,
      coalesce(cm.unread_count, 0) as unread_count,
      coalesce(m.content, '') as preview,
      c.settings_json,
      coalesce(c.settings_json->>'worldCardId', '') as story_world_card_id,
      coalesce(c.settings_json->>'latestSessionId', '') as story_latest_session_id
    from conversation_members cm
    join conversations c on c.id = cm.conversation_id
    left join conversation_members cmo
      on cmo.conversation_id = c.id
     and cmo.user_id <> $1
     and cmo.deleted_at is null
    left join users uo on uo.id = cmo.user_id
    left join world_cards wc on wc.id::text = nullif(c.settings_json->>'worldCardId', '')
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

export async function findOrCreateStoryConversation({ userId, title = "故事会话" }) {
  if (!userId) throw new Error("INVALID_STORY_CONVERSATION_INPUT");
  const existed = await query(
    `select c.id
     from conversations c
     join conversation_members cm
       on cm.conversation_id = c.id
      and cm.user_id = $1
      and cm.deleted_at is null
     where c.deleted_at is null
       and c.conversation_type = 'system'
       and c.biz_type = 'story'
     order by coalesce(c.last_message_at, c.updated_at) desc
     limit 1`,
    [userId]
  );
  if (existed.rows[0]?.id) return { id: existed.rows[0].id, created: false };

  const createdConv = await query(
    `insert into conversations(conversation_type, biz_type, title, created_by)
     values ('system', 'story', $1, $2)
     returning id`,
    [String(title || "故事会话").trim() || "故事会话", userId]
  );
  const conversationId = createdConv.rows[0]?.id;
  if (!conversationId) throw new Error("STORY_CONVERSATION_CREATE_FAILED");

  await query(
    `insert into conversation_members(conversation_id, user_id, role, unread_count, joined_at)
     values ($1, $2, 'member', 0, now())
     on conflict (conversation_id, user_id) do update
       set deleted_at = null,
           updated_at = now()`,
    [conversationId, userId]
  );

  return { id: conversationId, created: true };
}

function resolveStoryConversationTitle(title = "", fallback = "故事会话") {
  const safe = String(title || "").trim();
  if (safe) return safe;
  const fb = String(fallback || "").trim();
  return fb || "故事会话";
}

function toStoryConversationSettings({
  worldCardId,
  latestSessionId = "",
  extra = null
}) {
  const worldId = String(worldCardId || "").trim();
  const sessionId = String(latestSessionId || "").trim();
  const merged = {
    kind: "world_story_chat",
    worldCardId: worldId,
    ...(sessionId ? { latestSessionId: sessionId } : {}),
    ...(extra && typeof extra === "object" ? extra : {})
  };
  return merged;
}

export async function findOrCreateStoryConversationByWorld({
  userId,
  worldCardId,
  title = "故事会话",
  avatarUrl = "",
  latestSessionId = ""
}) {
  const uid = String(userId || "").trim();
  const worldId = String(worldCardId || "").trim();
  if (!uid || !worldId) throw new Error("INVALID_STORY_WORLD_CONVERSATION_INPUT");
  const safeTitle = resolveStoryConversationTitle(title);
  const safeAvatar = String(avatarUrl || "").trim();
  const safeSessionId = String(latestSessionId || "").trim();
  const existed = await query(
    `select c.id, c.title, c.avatar_url, c.settings_json
     from conversations c
     join conversation_members cm
       on cm.conversation_id = c.id
      and cm.user_id = $1
      and cm.deleted_at is null
     where c.deleted_at is null
       and c.biz_type = 'story'
       and coalesce(c.settings_json->>'worldCardId', '') = $2
     order by coalesce(c.last_message_at, c.updated_at) desc
     limit 1`,
    [uid, worldId]
  );

  if (existed.rows[0]?.id) {
    const row = existed.rows[0];
    const nextSettings = toStoryConversationSettings({
      worldCardId: worldId,
      latestSessionId: safeSessionId || String(row?.settings_json?.latestSessionId || "").trim(),
      extra: row?.settings_json && typeof row.settings_json === "object" ? row.settings_json : {}
    });
    await query(
      `update conversations
       set title = $2,
           avatar_url = $3,
           settings_json = $4::jsonb,
           updated_at = now()
       where id = $1`,
      [
        row.id,
        safeTitle || resolveStoryConversationTitle(row.title),
        safeAvatar || String(row.avatar_url || "").trim() || null,
        JSON.stringify(nextSettings)
      ]
    );
    await query(
      `insert into conversation_members(conversation_id, user_id, role, unread_count, joined_at)
       values ($1, $2, 'member', 0, now())
       on conflict (conversation_id, user_id) do update
         set deleted_at = null,
             updated_at = now()`,
      [row.id, uid]
    );
    return { id: row.id, created: false };
  }

  const settings = toStoryConversationSettings({
    worldCardId: worldId,
    latestSessionId: safeSessionId
  });
  const createdConv = await query(
    `insert into conversations(conversation_type, biz_type, title, avatar_url, created_by, settings_json)
     values ('private', 'story', $1, $2, $3, $4::jsonb)
     returning id`,
    [safeTitle, safeAvatar || null, uid, JSON.stringify(settings)]
  );
  const conversationId = createdConv.rows[0]?.id;
  if (!conversationId) throw new Error("STORY_WORLD_CONVERSATION_CREATE_FAILED");

  await query(
    `insert into conversation_members(conversation_id, user_id, role, unread_count, joined_at)
     values ($1, $2, 'member', 0, now())
     on conflict (conversation_id, user_id) do update
       set deleted_at = null,
           updated_at = now()`,
    [conversationId, uid]
  );

  return { id: conversationId, created: true };
}

async function appendConversationMessageWithReadTarget({
  conversationId,
  senderId = null,
  content = "",
  messageType = "text",
  payload = {},
  clientMessageId = null,
  readUserId = null
}) {
  const safeConversationId = String(conversationId || "").trim();
  if (!safeConversationId) throw new Error("INVALID_CONVERSATION_ID");
  const safeMessageType = normalizeMessageType(messageType);
  const safeSenderId = String(senderId || "").trim() || null;
  const safeReadUserId = String(readUserId || "").trim() || null;
  const inserted = await query(
    `insert into messages(
       conversation_id, sender_id, message_type, content, payload, status, client_message_id
     ) values (
       $1, $2::uuid, $3, $4, $5::jsonb, 'sent', $6
     )
     returning id, conversation_id, sender_id, message_type, content, payload, created_at`,
    [
      safeConversationId,
      safeSenderId,
      safeMessageType,
      String(content || ""),
      JSON.stringify(payload || {}),
      clientMessageId
    ]
  );
  const message = inserted.rows[0] || null;
  if (!message) return null;

  await query(
    `update conversations
     set last_message_id = $2,
         last_message_at = $3,
         updated_at = now()
     where id = $1`,
    [safeConversationId, message.id, message.created_at]
  );

  await query(
    `update conversation_members
     set unread_count = case
           when $3::uuid is not null and user_id = $3::uuid then 0
           when $2::uuid is not null and user_id = $2::uuid then 0
           else unread_count + 1
         end,
         last_read_message_id = case
           when $3::uuid is not null and user_id = $3::uuid then $4::uuid
           when $2::uuid is not null and user_id = $2::uuid then $4::uuid
           else last_read_message_id
         end,
         last_read_at = case
           when $3::uuid is not null and user_id = $3::uuid then now()
           when $2::uuid is not null and user_id = $2::uuid then now()
           else last_read_at
         end,
         updated_at = now()
     where conversation_id = $1
       and deleted_at is null`,
    [safeConversationId, safeSenderId, safeReadUserId, message.id]
  );
  return message;
}

export async function appendStoryConversationTurnMessages({
  conversationId,
  userId,
  worldCardId,
  sessionId,
  roundNo = null,
  userInput = "",
  narrative = ""
}) {
  const cid = String(conversationId || "").trim();
  const uid = String(userId || "").trim();
  if (!cid || !uid) throw new Error("INVALID_STORY_TURN_MESSAGE_INPUT");
  await assertConversationMember(cid, uid);

  const worldId = String(worldCardId || "").trim();
  const sid = String(sessionId || "").trim();
  const safeRound = Number.isFinite(Number(roundNo)) ? Number(roundNo) : null;
  const commonPayload = {
    kind: "play_turn",
    worldId,
    sessionId: sid,
    ...(safeRound ? { roundNo: safeRound } : {})
  };

  const messages = [];
  const userText = String(userInput || "").trim();
  if (userText) {
    const userMessage = await appendConversationMessageWithReadTarget({
      conversationId: cid,
      senderId: uid,
      content: userText,
      messageType: "text",
      payload: {
        ...commonPayload,
        role: "user"
      },
      readUserId: uid
    });
    if (userMessage) messages.push(userMessage);
  }

  const aiText = String(narrative || "").trim();
  if (aiText) {
    const aiMessage = await appendConversationMessageWithReadTarget({
      conversationId: cid,
      senderId: null,
      content: aiText,
      messageType: "text",
      payload: {
        ...commonPayload,
        role: "assistant"
      },
      readUserId: uid
    });
    if (aiMessage) messages.push(aiMessage);
  }
  return messages;
}

export async function appendSystemConversationMessage({
  conversationId,
  content,
  messageType = "card",
  payload = {},
  clientMessageId = null
}) {
  if (!conversationId) throw new Error("INVALID_CONVERSATION_ID");
  const safeMessageType = normalizeMessageType(messageType);
  const inserted = await query(
    `insert into messages(
       conversation_id, sender_id, message_type, content, payload, status, client_message_id
     ) values (
       $1, null, $2, $3, $4::jsonb, 'sent', $5
     )
     returning id, conversation_id, sender_id, message_type, content, payload, created_at`,
    [conversationId, safeMessageType, String(content || ""), JSON.stringify(payload || {}), clientMessageId]
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
     set unread_count = unread_count + 1,
         updated_at = now()
     where conversation_id = $1
       and deleted_at is null`,
    [conversationId]
  );

  return message;
}

export async function listConversationMemberUserIds(conversationId) {
  const safeId = String(conversationId || "").trim();
  if (!safeId) return [];
  const result = await query(
    `select user_id
     from conversation_members
     where conversation_id = $1
       and deleted_at is null`,
    [safeId]
  );
  return result.rows.map((row) => String(row.user_id || "").trim()).filter(Boolean);
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
     ),
     latest as (
       select
         m.id,
         m.conversation_id,
         m.sender_id,
         m.message_type,
         m.content,
         m.payload,
         m.created_at
       from messages m
       where m.conversation_id = $1
       order by m.created_at desc
       limit $3
     )
     select
       l.id,
       l.conversation_id,
       l.sender_id,
       l.message_type,
       l.content,
       l.payload,
       l.created_at,
       case
         when l.sender_id = $2 then coalesce((select last_read_at from peer) >= l.created_at, false)
         else true
       end as read_by_peer
     from latest l
     order by l.created_at asc`,
    [conversationId, userId, safeLimit]
  );
  return result.rows;
}

export async function getConversationPeerPresence({ conversationId, userId }) {
  await assertConversationMember(conversationId, userId);
  const result = await query(
    `select
       cm.user_id as peer_user_id,
       coalesce(u.nickname, '对方') as peer_name,
       coalesce(u.avatar_url, '') as peer_avatar_url,
       cm.last_read_at
     from conversation_members cm
     left join users u on u.id = cm.user_id
     where cm.conversation_id = $1
       and cm.user_id <> $2
       and cm.deleted_at is null
     order by cm.last_read_at desc nulls last
     limit 1`,
    [conversationId, userId]
  );
  const row = result.rows[0] || {};
  const hasPeer = Boolean(String(row?.peer_user_id || "").trim());
  const lastReadAt = row?.last_read_at || null;
  const online = Boolean(lastReadAt && (Date.now() - new Date(lastReadAt).getTime()) <= 5 * 60 * 1000);
  return {
    userId: hasPeer ? (row?.peer_user_id || "") : "",
    name: hasPeer ? (row?.peer_name || "对方") : "",
    avatarUrl: hasPeer ? (row?.peer_avatar_url || "") : "",
    lastReadAt,
    online: hasPeer ? online : false
  };
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
  const updated = await query(
    `update conversation_members
     set unread_count = 0,
         last_read_message_id = $3::uuid,
         last_read_at = now(),
         updated_at = now()
     where conversation_id = $1
       and user_id = $2
       and deleted_at is null
     returning last_read_at`,
    [conversationId, userId, latest?.id || null]
  );
  const lastReadAt = updated.rows?.[0]?.last_read_at || new Date().toISOString();
  return {
    conversationId,
    userId,
    lastReadMessageId: latest?.id || null,
    lastReadAt
  };
}
