import { getPool, query } from "../db/client.js";

export async function createWorldCard({ authorId, title, setting, rules }) {
  const result = await query(
    `insert into world_cards(author_id, title, setting, rules_json, publish_status)
     values ($1, $2, $3, $4::jsonb, 'draft')
     returning id, author_id, title, setting, rules_json, publish_status, created_at`,
    [authorId, title, setting, JSON.stringify(rules || [])]
  );

  return result.rows[0];
}

export async function listWorldCards() {
  const result = await query(
    `select id, author_id, title, setting, rules_json, publish_status, created_at
     from world_cards
     order by created_at desc
     limit 100`
  );

  return result.rows;
}

export async function publishWorldCard(id) {
  const result = await query(
    `update world_cards
     set publish_status = 'published', updated_at = now()
     where id = $1
     returning id, author_id, title, setting, rules_json, publish_status, created_at`,
    [id]
  );

  return result.rows[0] || null;
}

export async function setWorldCardInteraction({
  worldCardId,
  userId,
  interactionType,
  active
}) {
  const type = interactionType === "favorite" ? "favorite" : "like";
  const counterColumn = type === "favorite" ? "favorites_count" : "likes_count";
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");

    const cardRes = await client.query(
      `select id
       from world_cards
       where id = $1
       limit 1`,
      [worldCardId]
    );
    if (!cardRes.rows[0]?.id) {
      await client.query("rollback");
      return null;
    }

    await client.query(
      `insert into world_card_stats(world_card_id)
       values ($1)
       on conflict (world_card_id) do nothing`,
      [worldCardId]
    );

    if (active) {
      const inserted = await client.query(
        `insert into world_card_interactions(world_card_id, user_id, interaction_type)
         values ($1, $2, $3)
         on conflict (world_card_id, user_id, interaction_type) do nothing
         returning id`,
        [worldCardId, userId, type]
      );
      if (inserted.rowCount > 0) {
        await client.query(
          `update world_card_stats
           set ${counterColumn} = ${counterColumn} + 1,
               updated_at = now()
           where world_card_id = $1`,
          [worldCardId]
        );
      }
    } else {
      const deleted = await client.query(
        `delete from world_card_interactions
         where world_card_id = $1
           and user_id = $2
           and interaction_type = $3
         returning id`,
        [worldCardId, userId, type]
      );
      if (deleted.rowCount > 0) {
        await client.query(
          `update world_card_stats
           set ${counterColumn} = greatest(0, ${counterColumn} - 1),
               updated_at = now()
           where world_card_id = $1`,
          [worldCardId]
        );
      }
    }

    const statsRes = await client.query(
      `select
        world_card_id,
        likes_count,
        favorites_count,
        updated_at
       from world_card_stats
       where world_card_id = $1
       limit 1`,
      [worldCardId]
    );
    const statusRes = await client.query(
      `select
        exists(
          select 1
          from world_card_interactions
          where world_card_id = $1
            and user_id = $2
            and interaction_type = 'like'
        ) as liked_by_me,
        exists(
          select 1
          from world_card_interactions
          where world_card_id = $1
            and user_id = $2
            and interaction_type = 'favorite'
        ) as favorited_by_me`,
      [worldCardId, userId]
    );

    await client.query("commit");
    return {
      worldCardId,
      interactionType: type,
      active: Boolean(active),
      likesCount: Number(statsRes.rows[0]?.likes_count || 0),
      favoritesCount: Number(statsRes.rows[0]?.favorites_count || 0),
      likedByMe: Boolean(statusRes.rows[0]?.liked_by_me),
      favoritedByMe: Boolean(statusRes.rows[0]?.favorited_by_me),
      version: statsRes.rows[0]?.updated_at
        ? new Date(statsRes.rows[0].updated_at).toISOString()
        : new Date().toISOString()
    };
  } catch (err) {
    await client.query("rollback");
    throw err;
  } finally {
    client.release();
  }
}

export async function listWorldCardComments(worldCardId, userId = "", limit = 100) {
  const safeLimit = Math.max(1, Math.min(300, Number(limit) || 100));
  const params = [worldCardId, safeLimit];
  const sql = `
    select
      c.id,
      c.world_card_id,
      c.user_id,
      c.parent_comment_id,
      c.content,
      c.likes_count,
      c.created_at,
      c.updated_at,
      coalesce(u.nickname, '玩家') as user_name,
      false as liked_by_me
    from world_card_comments c
    left join users u on u.id = c.user_id
    where c.world_card_id = $1
      and c.deleted_at is null
      and c.status = 'active'
      and c.parent_comment_id is null
    order by c.created_at desc
    limit $2
  `;
  const res = await query(sql, params);
  const parentRows = Array.isArray(res.rows) ? res.rows : [];
  const parentIds = parentRows.map((row) => row.id).filter(Boolean);
  let replyRows = [];
  if (parentIds.length) {
    const replyRes = await query(
      `with recursive thread as (
         select
           c.id,
           c.world_card_id,
           c.user_id,
           c.parent_comment_id,
           c.content,
           c.likes_count,
           c.created_at,
           c.updated_at,
           coalesce(u.nickname, '玩家') as user_name,
           false as liked_by_me
         from world_card_comments c
         left join users u on u.id = c.user_id
         where c.parent_comment_id = any($1::uuid[])
           and c.deleted_at is null
           and c.status = 'active'
         union all
         select
           c.id,
           c.world_card_id,
           c.user_id,
           c.parent_comment_id,
           c.content,
           c.likes_count,
           c.created_at,
           c.updated_at,
           coalesce(u.nickname, '玩家') as user_name,
           false as liked_by_me
         from world_card_comments c
         left join users u on u.id = c.user_id
         join thread t on c.parent_comment_id = t.id
         where c.deleted_at is null
           and c.status = 'active'
       )
       select *
       from thread
       order by created_at asc`,
      [parentIds]
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
     from world_card_comments
     where world_card_id = $1
       and deleted_at is null
       and status = 'active'
       and parent_comment_id is null`,
    [worldCardId]
  );
  return {
    comments: parentRows
      .map((row) => rowById.get(String(row?.id || "").trim()) || null)
      .filter(Boolean),
    totalCount: Number(countRes.rows[0]?.total_count || 0)
  };
}

export async function createWorldCardComment({
  worldCardId,
  userId,
  content,
  parentCommentId = null,
  clientToken = null
}) {
  const safeToken = String(clientToken || "").trim() || null;
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");

    const worldRes = await client.query(
      `select id
       from world_cards
       where id = $1
       limit 1`,
      [worldCardId]
    );
    if (!worldRes.rows[0]?.id) {
      await client.query("rollback");
      return null;
    }

    const insertedRaw = await client.query(
      `insert into world_card_comments(world_card_id, user_id, parent_comment_id, content, status, client_token)
       values ($1, $2, $3, $4, 'active', $5)
       on conflict (world_card_id, user_id, client_token)
       where client_token is not null
       do nothing
       returning id, world_card_id, user_id, parent_comment_id, content, likes_count, created_at, updated_at, client_token`,
      [worldCardId, userId, parentCommentId, content, safeToken]
    );
    let row = insertedRaw.rows[0] || null;
    const insertedNew = Boolean(row?.id);
    if (!row && safeToken) {
      const existed = await client.query(
        `select id, world_card_id, user_id, parent_comment_id, content, likes_count, created_at, updated_at, client_token
         from world_card_comments
         where world_card_id = $1
           and user_id = $2
           and client_token = $3
         order by created_at desc
         limit 1`,
        [worldCardId, userId, safeToken]
      );
      row = existed.rows[0] || null;
    }
    if (!row) {
      await client.query("rollback");
      return null;
    }

    await client.query(
      `insert into world_card_stats(world_card_id)
       values ($1)
       on conflict (world_card_id) do nothing`,
      [worldCardId]
    );

    if (insertedNew) {
      await client.query(
        `update world_card_stats
         set comments_count = comments_count + 1,
             updated_at = now()
         where world_card_id = $1`,
        [worldCardId]
      );
    }

    const countRes = await client.query(
      `select count(*)::int as total_count
       from world_card_comments
       where world_card_id = $1
         and deleted_at is null
         and status = 'active'
         and parent_comment_id is null`,
      [worldCardId]
    );

    const userRes = row
      ? await client.query(
          `select coalesce(nickname, '玩家') as user_name
           from users
           where id = $1
           limit 1`,
          [row.user_id]
        )
      : { rows: [] };

    await client.query("commit");
    return {
      comment: row
        ? {
            ...row,
            user_name: String(userRes.rows[0]?.user_name || "玩家"),
            liked_by_me: false,
            version: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString()
          }
        : null,
      commentsCount: Number(countRes.rows[0]?.total_count || 0)
    };
  } catch (err) {
    await client.query("rollback");
    throw err;
  } finally {
    client.release();
  }
}

export async function setWorldCardCommentLike({
  commentId,
  userId,
  active
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");

    const commentRes = await client.query(
      `select id, world_card_id
       from world_card_comments
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
    const worldCardId = commentRes.rows[0].world_card_id;

    if (active) {
      const inserted = await client.query(
        `insert into world_card_comment_likes(comment_id, user_id)
         values ($1, $2)
         on conflict (comment_id, user_id) do nothing
         returning id`,
        [commentId, userId]
      );
      if (inserted.rowCount > 0) {
        await client.query(
          `update world_card_comments
           set likes_count = likes_count + 1,
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    } else {
      const deleted = await client.query(
        `delete from world_card_comment_likes
         where comment_id = $1
           and user_id = $2
         returning id`,
        [commentId, userId]
      );
      if (deleted.rowCount > 0) {
        await client.query(
          `update world_card_comments
           set likes_count = greatest(0, likes_count - 1),
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    }

    const latestRes = await client.query(
      `select
        c.id,
        c.world_card_id,
        c.likes_count,
        c.updated_at
       from world_card_comments c
       where c.id = $1
       limit 1`,
      [commentId]
    );

    await client.query("commit");
    const row = latestRes.rows[0] || null;
    if (!row) return null;
    return {
      commentId: row.id,
      worldCardId: row.world_card_id || worldCardId,
      likesCount: Number(row.likes_count || 0),
      likedByMe: Boolean(active),
      version: row.updated_at ? new Date(row.updated_at).toISOString() : new Date().toISOString()
    };
  } catch (err) {
    await client.query("rollback");
    throw err;
  } finally {
    client.release();
  }
}

export async function deleteWorldCardComment({
  commentId,
  userId
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");

    const targetRes = await client.query(
      `select id, world_card_id, user_id, parent_comment_id
       from world_card_comments
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
         from world_card_comments
         where id = $1
           and deleted_at is null
           and status = 'active'
         union all
         select c.id, c.parent_comment_id
         from world_card_comments c
         join target_tree t on c.parent_comment_id = t.id
         where c.deleted_at is null
           and c.status = 'active'
       )
       update world_card_comments c
       set status = 'deleted',
           deleted_at = now(),
           updated_at = now()
       where c.id in (select id from target_tree)
       returning c.id, c.parent_comment_id`,
      [commentId]
    );
    const deletedCount = deleted.rowCount;
    const topLevelDeleted = deleted.rows.filter((row) => !row.parent_comment_id).length;

    if (deletedCount > 0) {
      await client.query(
        `insert into world_card_stats(world_card_id)
         values ($1)
         on conflict (world_card_id) do nothing`,
        [target.world_card_id]
      );
      await client.query(
        `update world_card_stats
         set comments_count = greatest(0, comments_count - $2),
             updated_at = now()
         where world_card_id = $1`,
        [target.world_card_id, deletedCount]
      );
    }

    const countRes = await client.query(
      `select count(*)::int as total_count
       from world_card_comments
       where world_card_id = $1
         and deleted_at is null
         and status = 'active'
         and parent_comment_id is null`,
      [target.world_card_id]
    );

    await client.query("commit");
    return {
      status: "ok",
      worldCardId: target.world_card_id,
      deletedCount: Number(deletedCount || 0),
      topLevelDeleted: Number(topLevelDeleted || 0),
      commentsCount: Number(countRes.rows[0]?.total_count || 0)
    };
  } catch (err) {
    await client.query("rollback");
    throw err;
  } finally {
    client.release();
  }
}
