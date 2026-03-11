import { query } from "../db/client.js";

export async function createPost({ authorId, content }) {
  const result = await query(
    `insert into community_posts(author_id, content)
     values ($1, $2)
     returning id, author_id, content, likes_count, created_at`,
    [authorId, content]
  );

  return result.rows[0];
}

export async function listPosts() {
  const result = await query(
    `select id, author_id, content, likes_count, created_at
     from community_posts
     order by created_at desc
     limit 100`
  );

  return result.rows;
}
