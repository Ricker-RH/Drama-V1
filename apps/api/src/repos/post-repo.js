import { query } from "../db/client.js";

export async function createDynamicPost({
  authorId,
  postType,
  title,
  content,
  linkedWorldCardId = null
}) {
  const res = await query(
    `insert into posts(
      author_id, post_type, title, content, visibility, linked_world_card_id, status,
      likes_count, favorites_count, comments_count, shares_count
    ) values (
      $1, $2, $3, $4, 'public', $5, 'published',
      0, 0, 0, 0
    )
    returning id, author_id, post_type, title, content, linked_world_card_id, created_at`,
    [authorId, postType, title || null, content || null, linkedWorldCardId]
  );
  return res.rows[0] || null;
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
    `select id, likes_count, favorites_count
     from posts
     where id = $1
     limit 1`,
    [postId]
  );

  return latest.rows[0] || null;
}

export async function createPostComment({
  postId,
  userId,
  content,
  parentCommentId = null
}) {
  const inserted = await query(
    `insert into post_comments(post_id, user_id, parent_comment_id, content, status)
     values ($1, $2, $3, $4, 'active')
     returning id, post_id, user_id, content, created_at`,
    [postId, userId, parentCommentId, content]
  );
  await query(
    `update posts
     set comments_count = comments_count + 1
     where id = $1`,
    [postId]
  );
  return inserted.rows[0] || null;
}

export async function listPostComments(postId, limit = 100) {
  const res = await query(
    `select
       pc.id,
       pc.post_id,
       pc.user_id,
       pc.content,
       pc.created_at,
       coalesce(u.nickname, '玩家') as user_name
     from post_comments pc
     left join users u on u.id = pc.user_id
     where pc.post_id = $1
       and pc.deleted_at is null
       and pc.status = 'active'
     order by pc.created_at desc
     limit $2`,
    [postId, Math.max(1, Math.min(300, Number(limit) || 100))]
  );
  return res.rows;
}
