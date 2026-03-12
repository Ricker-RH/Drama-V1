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

export async function createCommunity({
  ownerId,
  name,
  description,
  tags = [],
  coverUrl = "",
  coverMaskOpacity = 0.38,
  joinMode = "public",
  theme = "综合",
  genderFocus = "不限频向"
}) {
  const result = await query(
    `with created as (
      insert into communities(
        owner_id, name, description, cover_url, cover_mask_opacity,
        join_mode, status, member_count, post_count, last_active_at,
        theme, gender_focus, tags, latest_post_at
      ) values (
        $1::uuid, $2, $3, $4, $5::numeric,
        $6, 'active', 1, 0, now(),
        $7, $8, $9::text[], now()
      )
      returning *
    ), owner_member as (
      insert into community_members(community_id, user_id, role, status, joined_at)
      select id, $1::uuid, 'owner', 'active', now()
      from created
      on conflict (community_id, user_id) do nothing
      returning community_id
    )
    select *
    from created`,
    [
      ownerId,
      name,
      description,
      coverUrl || null,
      Number.isFinite(Number(coverMaskOpacity)) ? Number(coverMaskOpacity) : 0.38,
      joinMode,
      theme,
      genderFocus,
      Array.isArray(tags) ? tags : []
    ]
  );
  return result.rows[0] || null;
}

export async function listCommunities(limit = 100) {
  const result = await query(
    `select
      id, owner_id, name, description, tags, member_count, last_active_at, latest_post_at,
      theme, gender_focus, cover_url, cover_mask_opacity, join_mode, status, created_at
     from communities
     where status = 'active'
     order by coalesce(latest_post_at, last_active_at, created_at) desc
     limit $1`,
    [Math.max(1, Math.min(200, Number(limit) || 100))]
  );
  return result.rows;
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
