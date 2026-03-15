import { query } from "../db/client.js";

function normalizeTypes(types = []) {
  const list = Array.isArray(types) ? types : [types];
  return list
    .map((item) => String(item || "").trim())
    .filter(Boolean);
}

export async function createNotification({
  userId,
  type,
  title = "",
  content = "",
  actorId = null,
  targetType = "",
  targetId = null,
  actionUrl = "",
  extra = {}
}) {
  const uid = String(userId || "").trim();
  const t = String(type || "").trim();
  if (!uid || !t) return null;
  const res = await query(
    `insert into notifications(
       user_id, type, title, content, actor_id, target_type, target_id, action_url, extra
     ) values (
       $1::uuid, $2, $3, $4, $5::uuid, $6, $7::uuid, $8, $9::jsonb
     )
     returning id, user_id, type, created_at`,
    [
      uid,
      t,
      String(title || "").trim() || null,
      String(content || "").trim() || null,
      actorId ? String(actorId).trim() : null,
      String(targetType || "").trim() || null,
      targetId ? String(targetId).trim() : null,
      String(actionUrl || "").trim() || null,
      JSON.stringify(extra && typeof extra === "object" ? extra : {})
    ]
  );
  return res.rows[0] || null;
}

export async function markNotificationRead({ userId, notificationId }) {
  const uid = String(userId || "").trim();
  const nid = String(notificationId || "").trim();
  if (!uid || !nid) return { updated: 0 };
  const res = await query(
    `update notifications
     set is_read = true,
         read_at = coalesce(read_at, now())
     where id = $1::uuid
       and user_id = $2::uuid
       and is_read = false`,
    [nid, uid]
  );
  return { updated: Number(res.rowCount || 0) };
}

export async function markNotificationsReadByTypes({ userId, types = [] }) {
  const uid = String(userId || "").trim();
  const safeTypes = normalizeTypes(types);
  if (!uid || safeTypes.length === 0) return { updated: 0 };
  const res = await query(
    `update notifications
     set is_read = true,
         read_at = coalesce(read_at, now())
     where user_id = $1::uuid
       and type = any($2::text[])
       and is_read = false`,
    [uid, safeTypes]
  );
  return { updated: Number(res.rowCount || 0) };
}

export async function getNotificationByIdForUser({ notificationId, userId }) {
  const nid = String(notificationId || "").trim();
  const uid = String(userId || "").trim();
  if (!nid || !uid) return null;
  const res = await query(
    `select id, user_id, type, title, content, actor_id, target_type, target_id, is_read, extra, created_at
     from notifications
     where id = $1::uuid
       and user_id = $2::uuid
     limit 1`,
    [nid, uid]
  );
  return res.rows[0] || null;
}

export async function resolvePostById(postId = "") {
  const pid = String(postId || "").trim();
  if (!pid) return null;
  const res = await query(
    `select
       p.id,
       p.author_id,
       p.title,
       p.content,
       p.linked_world_card_id,
       (
         select pm.media_url
         from post_media pm
         where pm.post_id = p.id
         order by pm.sort_order asc, pm.created_at asc
         limit 1
       ) as cover_url
     from posts p
     where p.id = $1::uuid
     limit 1`,
    [pid]
  );
  return res.rows[0] || null;
}

export async function resolveCommunityPostById(postId = "") {
  const pid = String(postId || "").trim();
  if (!pid) return null;
  const res = await query(
    `select
       cp.id,
       cp.author_id,
       cp.content,
       (
         select cpm.media_url
         from community_post_media cpm
         where cpm.community_post_id = cp.id
         order by cpm.sort_order asc, cpm.created_at asc
         limit 1
       ) as cover_url
     from community_posts cp
     where cp.id = $1::uuid
     limit 1`,
    [pid]
  );
  return res.rows[0] || null;
}

export async function resolvePostCommentById(commentId = "") {
  const cid = String(commentId || "").trim();
  if (!cid) return null;
  const res = await query(
    `select
       c.id,
       c.post_id,
       c.user_id,
       c.parent_comment_id,
       c.content,
       p.author_id as post_author_id,
       p.title as post_title,
       p.linked_world_card_id,
       (
         select pm.media_url
         from post_media pm
         where pm.post_id = p.id
         order by pm.sort_order asc, pm.created_at asc
         limit 1
       ) as cover_url
     from post_comments c
     join posts p on p.id = c.post_id
     where c.id = $1::uuid
       and c.deleted_at is null
       and c.status = 'active'
     limit 1`,
    [cid]
  );
  return res.rows[0] || null;
}

export async function resolveCommunityPostCommentById(commentId = "") {
  const cid = String(commentId || "").trim();
  if (!cid) return null;
  const res = await query(
    `select
       c.id,
       c.community_post_id as post_id,
       c.user_id,
       c.parent_comment_id,
       c.content,
       cp.author_id as post_author_id,
       (
         select cpm.media_url
         from community_post_media cpm
         where cpm.community_post_id = cp.id
         order by cpm.sort_order asc, cpm.created_at asc
         limit 1
       ) as cover_url
     from community_post_comments c
     join community_posts cp on cp.id = c.community_post_id
     where c.id = $1::uuid
       and c.deleted_at is null
       and c.status = 'active'
     limit 1`,
    [cid]
  );
  return res.rows[0] || null;
}

export async function resolveUsersByMentionTokens(tokens = [], excludeUserIds = []) {
  const safeTokens = (Array.isArray(tokens) ? tokens : [])
    .map((item) => String(item || "").trim().replace(/^@+/, "").toLowerCase())
    .filter(Boolean);
  if (safeTokens.length === 0) return [];
  const excludes = (Array.isArray(excludeUserIds) ? excludeUserIds : [])
    .map((item) => String(item || "").trim())
    .filter(Boolean);
  const res = await query(
    `select
       u.id,
       lower(coalesce(u.nickname, '')) as nickname_lc,
       lower(replace(coalesce(up.extra->>'handle', ''), '@', '')) as handle_lc
     from users u
     left join user_profiles up on up.user_id = u.id
     where (
       lower(coalesce(u.nickname, '')) = any($1::text[])
       or lower(replace(coalesce(up.extra->>'handle', ''), '@', '')) = any($1::text[])
     )
       and (
         cardinality($2::uuid[]) = 0
         or u.id <> all($2::uuid[])
       )`,
    [safeTokens, excludes]
  );
  return res.rows || [];
}
