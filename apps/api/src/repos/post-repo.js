import { getPool, query } from "../db/client.js";

export async function createDynamicPost({
  authorId,
  postType,
  title,
  content,
  linkedWorldCardId = null,
  visibility = "public",
  mediaItems = []
}) {
  const safeVisibility = ["public", "followers", "private", "all_users"].includes(String(visibility || "").trim())
    ? String(visibility || "").trim()
    : "public";
  const res = await query(
    `insert into posts(
      author_id, post_type, title, content, visibility, linked_world_card_id, status,
      likes_count, favorites_count, comments_count, shares_count
    ) values (
      $1, $2, $3, $4, $5, $6, 'published',
      0, 0, 0, 0
    )
    returning id, author_id, post_type, title, content, visibility, linked_world_card_id, created_at`,
    [authorId, postType, title || null, content || null, safeVisibility, linkedWorldCardId]
  );
  const inserted = res.rows[0] || null;
  if (!inserted?.id) return null;

  const normalizedMedia = Array.isArray(mediaItems)
    ? mediaItems
      .map((x) => {
        const mediaType = String(x?.mediaType || x?.type || "").trim().toLowerCase() === "video" ? "video" : "image";
        const mediaUrl = String(x?.url || x?.mediaUrl || "").trim();
        if (!mediaUrl) return null;
        const durationSec = Math.max(0, Number(x?.durationSec || x?.duration_sec || 0) || 0);
        return { mediaType, mediaUrl, durationSec };
      })
      .filter(Boolean)
      .slice(0, 9)
    : [];

  if (normalizedMedia.length > 0) {
    const mediaTypes = normalizedMedia.map((item) => item.mediaType);
    const mediaUrls = normalizedMedia.map((item) => item.mediaUrl);
    const mediaDurations = normalizedMedia.map((item) => {
      const value = Number(item.durationSec || 0);
      return Number.isFinite(value) && value > 0 ? Math.trunc(value) : null;
    });
    const mediaOrders = normalizedMedia.map((_, index) => index);
    await query(
      `insert into post_media(post_id, media_type, media_url, duration_sec, sort_order)
       select
         $1::uuid,
         x.media_type,
         x.media_url,
         x.duration_sec,
         x.sort_order
       from unnest($2::text[], $3::text[], $4::integer[], $5::integer[])
         as x(media_type, media_url, duration_sec, sort_order)`,
      [inserted.id, mediaTypes, mediaUrls, mediaDurations, mediaOrders]
    );
  }

  const mediaRes = await query(
    `select
       media_type as type,
       media_url as url,
       duration_sec as "durationSec",
       sort_order as "sortOrder"
     from post_media
     where post_id = $1
     order by sort_order asc`,
    [inserted.id]
  );

  return {
    ...inserted,
    media_items: mediaRes.rows || []
  };
}

export async function setPostReaction({
  postId,
  userId,
  reactionType,
  active
}) {
  const type = reactionType === "favorite" ? "favorite" : "like";
  const counterColumn = type === "favorite" ? "favorites_count" : "likes_count";

  if (active) {
    const inserted = await query(
      `insert into post_reactions(post_id, user_id, reaction_type)
       values ($1, $2, $3)
       on conflict (post_id, user_id, reaction_type) do nothing
       returning id`,
      [postId, userId, type]
    );
    if (inserted.rowCount > 0) {
      await query(
        `update posts
         set ${counterColumn} = ${counterColumn} + 1
         where id = $1`,
        [postId]
      );
    }
  } else {
    const removed = await query(
      `delete from post_reactions
       where post_id = $1 and user_id = $2 and reaction_type = $3
       returning id`,
      [postId, userId, type]
    );
    if (removed.rowCount > 0) {
      await query(
        `update posts
         set ${counterColumn} = greatest(0, ${counterColumn} - 1)
         where id = $1`,
        [postId]
      );
    }
  }

  const latest = await query(
    `select id, likes_count, favorites_count, updated_at
     from posts
     where id = $1
     limit 1`,
    [postId]
  );

  const row = latest.rows[0] || null;
  if (!row) return null;
  return {
    id: row.id,
    reaction_type: type,
    active: Boolean(active),
    likes_count: Number(row.likes_count || 0),
    favorites_count: Number(row.favorites_count || 0),
    version: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString()
  };
}

export async function createPostComment({
  postId,
  userId,
  content,
  parentCommentId = null,
  clientToken = null
}) {
  const safeToken = String(clientToken || "").trim() || null;
  const result = await query(
    `with inserted_raw as (
      insert into post_comments(post_id, user_id, parent_comment_id, content, status, client_token)
      values ($1, $2, $3, $4, 'active', $5)
      on conflict (post_id, user_id, client_token)
      where client_token is not null
      do nothing
      returning id, post_id, user_id, parent_comment_id, content, likes_count, created_at, updated_at, client_token
    ),
    inserted as (
      select * from inserted_raw
      union all
      select pc.id, pc.post_id, pc.user_id, pc.parent_comment_id, pc.content, pc.likes_count, pc.created_at, pc.updated_at, pc.client_token
      from post_comments pc
      where $5::text is not null
        and not exists(select 1 from inserted_raw)
        and pc.post_id = $1
        and pc.user_id = $2
        and pc.client_token = $5::text
      order by created_at desc
      limit 1
    ),
    sync_post as (
      update posts
      set comments_count = (
            select count(*)::integer
            from post_comments c
            where c.post_id = $1
              and c.deleted_at is null
              and c.status = 'active'
              and c.parent_comment_id is null
          ),
          updated_at = now()
      where id = $1
        and exists(select 1 from inserted_raw)
      returning comments_count, updated_at
    ),
    fallback_post as (
      select comments_count, updated_at
      from posts
      where id = $1
      limit 1
    )
    select
      i.*,
      coalesce(s.comments_count, fp.comments_count, 0)::integer as comments_count,
      coalesce(s.updated_at, fp.updated_at) as updated_at,
      coalesce(u.nickname, '玩家') as user_name
    from inserted i
    left join sync_post s on true
    left join fallback_post fp on true
    left join users u on u.id = i.user_id`,
    [postId, userId, parentCommentId, content, safeToken]
  );
  const row = result.rows[0] || null;
  if (!row) return null;
  return {
    ...row,
    comments_count: Number(row.comments_count || 0),
    version: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString()
  };
}

export async function listPostComments(postId, userId = "", limit = 100) {
  const safeLimit = Math.max(1, Math.min(300, Number(limit) || 100));
  const viewerId = String(userId || "").trim() || null;
  const parentRes = await query(
    `select
       pc.id,
       pc.post_id,
       pc.user_id,
       pc.parent_comment_id,
       pc.content,
       pc.likes_count,
       pc.created_at,
       pc.updated_at,
       coalesce(u.nickname, '玩家') as user_name,
       case
         when $3::uuid is null then false
         else exists(
           select 1
           from post_comment_likes pcl
           where pcl.comment_id = pc.id
             and pcl.user_id = $3::uuid
         )
       end as liked_by_me
     from post_comments pc
     left join users u on u.id = pc.user_id
     where pc.post_id = $1
       and pc.deleted_at is null
       and pc.status = 'active'
       and pc.parent_comment_id is null
     order by pc.created_at desc
     limit $2`,
    [postId, safeLimit, viewerId]
  );
  const parentRows = Array.isArray(parentRes.rows) ? parentRes.rows : [];
  const parentIds = parentRows.map((row) => row.id).filter(Boolean);
  let replyRows = [];
  if (parentIds.length > 0) {
    const replyRes = await query(
      `with recursive thread as (
         select
           pc.id,
           pc.post_id,
           pc.user_id,
           pc.parent_comment_id,
           pc.content,
           pc.likes_count,
           pc.created_at,
           pc.updated_at,
           coalesce(u.nickname, '玩家') as user_name,
           case
             when $2::uuid is null then false
             else exists(
               select 1
               from post_comment_likes pcl
               where pcl.comment_id = pc.id
                 and pcl.user_id = $2::uuid
             )
           end as liked_by_me
         from post_comments pc
         left join users u on u.id = pc.user_id
         where pc.parent_comment_id = any($1::uuid[])
           and pc.deleted_at is null
           and pc.status = 'active'
         union all
         select
           pc.id,
           pc.post_id,
           pc.user_id,
           pc.parent_comment_id,
           pc.content,
           pc.likes_count,
           pc.created_at,
           pc.updated_at,
           coalesce(u.nickname, '玩家') as user_name,
           case
             when $2::uuid is null then false
             else exists(
               select 1
               from post_comment_likes pcl
               where pcl.comment_id = pc.id
                 and pcl.user_id = $2::uuid
             )
           end as liked_by_me
         from post_comments pc
         left join users u on u.id = pc.user_id
         join thread t on pc.parent_comment_id = t.id
         where pc.deleted_at is null
           and pc.status = 'active'
       )
       select *
       from thread
       order by created_at asc`,
      [parentIds, viewerId]
    );
    replyRows = Array.isArray(replyRes.rows) ? replyRes.rows : [];
  }
  const rowById = new Map();
  parentRows.forEach((row) => {
    const id = String(row?.id || "").trim();
    if (!id) return;
    rowById.set(id, { ...row, replies: [] });
  });
  const replyOrder = [];
  replyRows.forEach((row) => {
    const id = String(row?.id || "").trim();
    if (!id || rowById.has(id)) return;
    rowById.set(id, { ...row, replies: [] });
    replyOrder.push(id);
  });
  replyOrder.forEach((id) => {
    const node = rowById.get(id);
    if (!node) return;
    const pid = String(node.parent_comment_id || "").trim();
    const parent = pid ? rowById.get(pid) : null;
    if (!parent) return;
    if (!Array.isArray(parent.replies)) parent.replies = [];
    parent.replies.push(node);
  });
  const countRes = await query(
    `select count(*)::int as total_count
     from post_comments
     where post_id = $1
       and deleted_at is null
       and status = 'active'
       and parent_comment_id is null`,
    [postId]
  );
  return {
    comments: parentRows
      .map((row) => rowById.get(String(row?.id || "").trim()) || null)
      .filter(Boolean),
    totalCount: Number(countRes.rows[0]?.total_count || 0)
  };
}

export async function setPostCommentLike({
  commentId,
  userId,
  active
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const commentRes = await client.query(
      `select id, post_id
       from post_comments
       where id = $1
         and deleted_at is null
         and status = 'active'
       limit 1`,
      [commentId]
    );
    if (!commentRes.rows[0]?.id) {
      await client.query("rollback");
      return null;
    }
    const postId = commentRes.rows[0].post_id;
    if (active) {
      const inserted = await client.query(
        `insert into post_comment_likes(comment_id, user_id)
         values ($1, $2)
         on conflict (comment_id, user_id) do nothing
         returning id`,
        [commentId, userId]
      );
      if (inserted.rowCount > 0) {
        await client.query(
          `update post_comments
           set likes_count = likes_count + 1,
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    } else {
      const deleted = await client.query(
        `delete from post_comment_likes
         where comment_id = $1
           and user_id = $2
         returning id`,
        [commentId, userId]
      );
      if (deleted.rowCount > 0) {
        await client.query(
          `update post_comments
           set likes_count = greatest(0, likes_count - 1),
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    }
    const latestRes = await client.query(
      `select id, post_id, likes_count, updated_at
       from post_comments
       where id = $1
       limit 1`,
      [commentId]
    );
    await client.query("commit");
    const row = latestRes.rows[0] || null;
    if (!row) return null;
    return {
      commentId: row.id,
      postId: row.post_id || postId,
      likesCount: Number(row.likes_count || 0),
      likedByMe: Boolean(active),
      version: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString()
    };
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

export async function deletePostComment({
  commentId,
  userId
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const targetRes = await client.query(
      `select id, post_id, user_id, parent_comment_id
       from post_comments
       where id = $1
         and deleted_at is null
         and status = 'active'
       limit 1`,
      [commentId]
    );
    const target = targetRes.rows[0];
    if (!target?.id) {
      await client.query("rollback");
      return { status: "not_found" };
    }
    if (String(target.user_id || "") !== String(userId || "")) {
      await client.query("rollback");
      return { status: "forbidden" };
    }
    const deleted = await client.query(
      `with recursive target_tree as (
         select id, parent_comment_id
         from post_comments
         where id = $1
           and deleted_at is null
           and status = 'active'
         union all
         select c.id, c.parent_comment_id
         from post_comments c
         join target_tree t on c.parent_comment_id = t.id
         where c.deleted_at is null
           and c.status = 'active'
       )
       update post_comments pc
       set status = 'deleted',
           deleted_at = now(),
           updated_at = now()
       where pc.id in (select id from target_tree)
       returning pc.id, pc.parent_comment_id`,
      [commentId]
    );
    const deletedCount = deleted.rowCount;
    const topLevelDeleted = deleted.rows.filter((row) => !row.parent_comment_id).length;
    let commentsCount = 0;
    if (deletedCount > 0) {
      const postRes = await client.query(
        `update posts p
         set comments_count = (
               select count(*)::integer
               from post_comments c
               where c.post_id = p.id
                 and c.deleted_at is null
                 and c.status = 'active'
                 and c.parent_comment_id is null
             ),
             updated_at = now()
         where p.id = $1
         returning p.comments_count`,
        [target.post_id]
      );
      commentsCount = Number(postRes.rows[0]?.comments_count || 0);
    } else {
      const countRes = await client.query(
        `select comments_count
         from posts
         where id = $1
         limit 1`,
        [target.post_id]
      );
      commentsCount = Number(countRes.rows[0]?.comments_count || 0);
    }
    await client.query("commit");
    return {
      status: "ok",
      postId: target.post_id,
      deletedCount: Number(deletedCount || 0),
      topLevelDeleted: Number(topLevelDeleted || 0),
      commentsCount: Number(commentsCount || 0)
    };
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

export async function setPostVisibilityByAuthor({
  postId,
  authorId,
  visibility
}) {
  const safeVisibility = ["public", "followers", "private", "all_users"].includes(String(visibility || "").trim())
    ? String(visibility || "").trim()
    : "public";
  const res = await query(
    `update posts
     set visibility = $3, updated_at = now()
     where id = $1
       and author_id = $2
       and status = 'published'
     returning id, author_id, visibility`,
    [postId, authorId, safeVisibility]
  );
  return res.rows[0] || null;
}

export async function deletePostByAuthor({
  postId,
  authorId
}) {
  const res = await query(
    `update posts
     set status = 'deleted', updated_at = now()
     where id = $1
       and author_id = $2
       and status = 'published'
     returning id`,
    [postId, authorId]
  );
  return res.rows[0] || null;
}
