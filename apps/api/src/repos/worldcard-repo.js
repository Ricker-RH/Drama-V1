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
        favorites_count
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
      likesCount: Number(statsRes.rows[0]?.likes_count || 0),
      favoritesCount: Number(statsRes.rows[0]?.favorites_count || 0),
      likedByMe: Boolean(statusRes.rows[0]?.liked_by_me),
      favoritedByMe: Boolean(statusRes.rows[0]?.favorited_by_me)
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
    comments: res.rows,
    totalCount: Number(countRes.rows[0]?.total_count || 0)
  };
}

export async function createWorldCardComment({
  worldCardId,
  userId,
  content,
  parentCommentId = null
}) {
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

    const inserted = await client.query(
      `insert into world_card_comments(world_card_id, user_id, parent_comment_id, content, status)
       values ($1, $2, $3, $4, 'active')
       returning id, world_card_id, user_id, parent_comment_id, content, likes_count, created_at, updated_at`,
      [worldCardId, userId, parentCommentId, content]
    );

    await client.query(
      `insert into world_card_stats(world_card_id)
       values ($1)
       on conflict (world_card_id) do nothing`,
      [worldCardId]
    );

    await client.query(
      `update world_card_stats
       set comments_count = comments_count + 1,
           updated_at = now()
       where world_card_id = $1`,
      [worldCardId]
    );

    const countRes = await client.query(
      `select comments_count
       from world_card_stats
       where world_card_id = $1
       limit 1`,
      [worldCardId]
    );

    const row = inserted.rows[0] || null;
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
            liked_by_me: false
          }
        : null,
      commentsCount: Number(countRes.rows[0]?.comments_count || 0)
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
      await client.query(
        `update world_card_comments
         set likes_count = likes_count + 1,
             updated_at = now()
         where id = $1`,
        [commentId]
      );
    } else {
      await client.query(
        `update world_card_comments
         set likes_count = greatest(0, likes_count - 1),
             updated_at = now()
         where id = $1`,
        [commentId]
      );
    }

    const latestRes = await client.query(
      `select
        c.id,
        c.world_card_id,
        c.likes_count
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
      worldCardId,
      likesCount: Number(row.likes_count || 0),
      likedByMe: Boolean(active)
    };
  } catch (err) {
    await client.query("rollback");
    throw err;
  } finally {
    client.release();
  }
}
