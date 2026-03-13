import { query } from "../db/client.js";

export async function createPost({
  communityId,
  authorId,
  content,
  linkedWorldCardId = null,
  postType = "text",
  visibility = "public",
  isFeatured = false,
  mediaUrls = []
}) {
  const mediaList = Array.isArray(mediaUrls)
    ? mediaUrls.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 9)
    : [];
  const postRes = await query(
    `with inserted as (
      insert into community_posts(
        community_id, author_id, content, linked_world_card_id,
        post_type, visibility, is_featured, status
      )
      values (
        $1::uuid, $2::uuid, $3, $4::uuid,
        $5, $6, $7::boolean, 'published'
      )
      returning id, community_id, author_id, content, linked_world_card_id,
        likes_count, comments_count, shares_count, is_featured, status, created_at
    ),
    media_insert as (
      insert into community_post_media(community_post_id, media_type, media_url, sort_order)
      select
        i.id,
        'image',
        m.url,
        m.sort_order
      from inserted i
      cross join lateral (
        select
          x.url,
          row_number() over () - 1 as sort_order
        from unnest($8::text[]) as x(url)
      ) m
      where cardinality($8::text[]) > 0
      returning community_post_id
    ),
    updated_community as (
      update communities c
      set post_count = (
            select count(*)
            from community_posts cp
            where cp.community_id = c.id
              and cp.status = 'published'
              and cp.deleted_at is null
          ),
          latest_post_at = now(),
          last_active_at = now(),
          updated_at = now()
      where c.id = $1::uuid
      returning c.id
    )
    select
      i.*,
      u.nickname as author_name,
      wc.title as world_title,
      coalesce((
        select json_agg(pm.media_url order by pm.sort_order)
        from community_post_media pm
        where pm.community_post_id = i.id
          and pm.deleted_at is null
      ), '[]'::json) as media_urls
    from inserted i
    join users u on u.id = i.author_id
    left join world_cards wc on wc.id = i.linked_world_card_id`,
    [communityId, authorId, content, linkedWorldCardId || null, postType, visibility, Boolean(isFeatured), mediaList]
  );

  return postRes.rows[0] || null;
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

export async function joinCommunity({ communityId, userId }) {
  const result = await query(
    `with target as (
      select id, owner_id, join_mode
      from communities
      where id = $1::uuid
        and status = 'active'
      limit 1
    ),
    guard as (
      select
        id,
        owner_id,
        join_mode,
        case
          when join_mode = 'invite_only' then false
          else true
        end as can_join
      from target
    ),
    upsert_member as (
      insert into community_members(community_id, user_id, role, status, joined_at, updated_at)
      select
        g.id,
        $2::uuid,
        case when $2::uuid = g.owner_id then 'owner' else 'member' end,
        'active',
        now(),
        now()
      from guard g
      where g.can_join
      on conflict (community_id, user_id)
      do update set
        status = 'active',
        updated_at = now()
      returning community_id
    ),
    sync_count as (
      update communities c
      set member_count = (
            select count(*)
            from community_members cm
            where cm.community_id = c.id
              and cm.status = 'active'
          ),
          last_active_at = now(),
          updated_at = now()
      where c.id = (select id from target)
      returning c.id, c.member_count
    )
    select
      g.id,
      g.join_mode,
      g.can_join,
      s.member_count,
      exists(
        select 1
        from community_members cm
        where cm.community_id = g.id
          and cm.user_id = $2::uuid
          and cm.status = 'active'
      ) as joined
    from guard g
    left join sync_count s on s.id = g.id`,
    [communityId, userId]
  );
  return result.rows[0] || null;
}

export async function listPosts({ communityId = "", limit = 100 } = {}) {
  const hasCommunity = String(communityId || "").trim().length > 0;
  const result = hasCommunity
    ? await query(
      `select
        cp.id, cp.community_id, cp.author_id, cp.content, cp.likes_count, cp.comments_count, cp.shares_count,
        cp.is_featured, cp.linked_world_card_id, cp.created_at,
        u.nickname as author_name,
        wc.title as world_title,
        coalesce((
          select json_agg(pm.media_url order by pm.sort_order)
          from community_post_media pm
          where pm.community_post_id = cp.id
            and pm.deleted_at is null
        ), '[]'::json) as media_urls
       from community_posts cp
       join users u on u.id = cp.author_id
       left join world_cards wc on wc.id = cp.linked_world_card_id
       where cp.status = 'published'
         and cp.deleted_at is null
         and cp.community_id = $1::uuid
       order by cp.created_at desc
       limit $2`,
      [communityId, Math.max(1, Math.min(200, Number(limit) || 100))]
    )
    : await query(
      `select
        cp.id, cp.community_id, cp.author_id, cp.content, cp.likes_count, cp.comments_count, cp.shares_count,
        cp.is_featured, cp.linked_world_card_id, cp.created_at,
        u.nickname as author_name,
        wc.title as world_title,
        coalesce((
          select json_agg(pm.media_url order by pm.sort_order)
          from community_post_media pm
          where pm.community_post_id = cp.id
            and pm.deleted_at is null
        ), '[]'::json) as media_urls
       from community_posts cp
       join users u on u.id = cp.author_id
       left join world_cards wc on wc.id = cp.linked_world_card_id
       where cp.status = 'published'
         and cp.deleted_at is null
       order by cp.created_at desc
       limit $1`,
      [Math.max(1, Math.min(200, Number(limit) || 100))]
    );

  return result.rows || [];
}
