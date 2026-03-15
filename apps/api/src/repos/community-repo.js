import { getPool, query } from "../db/client.js";

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
      returning community_post_id, media_url, sort_order
    ),
    updated_community as (
      update communities c
      set post_count = greatest(0, c.post_count + 1),
          latest_post_at = now(),
          last_active_at = now(),
          updated_at = now()
      from inserted i
      where c.id = i.community_id
      returning c.id
    )
    select
      i.*,
      u.nickname as author_name,
      wc.title as world_title,
      0::integer as favorites_count,
      coalesce((
        select json_agg(mi.media_url order by mi.sort_order)
        from media_insert mi
        where mi.community_post_id = i.id
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
      select id, owner_id, join_mode, member_count
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
        member_count,
        case
          when join_mode = 'invite_only' then false
          else true
        end as can_join
      from target
    ),
    existing_member as (
      select status
      from community_members
      where community_id = (select id from target)
        and user_id = $2::uuid
      limit 1
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
        joined_at = case
          when community_members.status = 'active' then community_members.joined_at
          else now()
        end,
        updated_at = now()
      where community_members.status <> 'active'
      returning community_id
    ),
    sync_count as (
      update communities c
      set member_count = greatest(0, c.member_count + coalesce((select count(*) from upsert_member), 0)),
          last_active_at = now(),
          updated_at = now()
      where c.id = (select id from target)
        and (select can_join from guard)
      returning c.id, c.member_count
    )
    select
      g.id,
      g.join_mode,
      g.can_join,
      coalesce(s.member_count, g.member_count) as member_count,
      (
        coalesce((select status = 'active' from existing_member limit 1), false)
        or exists(select 1 from upsert_member)
      ) as joined
    from guard g
    left join sync_count s on s.id = g.id`,
    [communityId, userId]
  );
  return result.rows[0] || null;
}

export async function getCommunityPostAccess({ communityId = "", userId = "" } = {}) {
  const cid = String(communityId || "").trim();
  const uid = String(userId || "").trim();
  if (!cid || !uid) return null;
  const result = await query(
    `select
      c.id,
      exists(
        select 1
        from community_members cm
        where cm.community_id = c.id
          and cm.user_id = $2::uuid
          and cm.status = 'active'
      ) as can_post
     from communities c
     where c.id = $1::uuid
       and c.status = 'active'
     limit 1`,
    [cid, uid]
  );
  return result.rows[0] || null;
}

export async function listPosts({ communityId = "", limit = 100, viewerId = null } = {}) {
  const hasCommunity = String(communityId || "").trim().length > 0;
  const result = hasCommunity
    ? await query(
      `select
        cp.id, cp.community_id, cp.author_id, cp.content, cp.likes_count, cp.comments_count, cp.shares_count,
        cp.is_featured, cp.linked_world_card_id, cp.created_at,
        u.nickname as author_name,
        wc.title as world_title,
        (
          select count(*)
          from community_post_reactions r
          where r.community_post_id = cp.id
            and r.reaction_type = 'favorite'
            and r.status = 'active'
        )::integer as favorites_count,
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
         and (
           cp.visibility in ('public', 'all_users')
           or cp.visibility is null
           or (
             cp.visibility in ('community_only', 'community', '仅社区内可见', '本社区用户')
             and $3::uuid is not null
             and exists(
               select 1
               from community_members cm
               where cm.community_id = cp.community_id
                 and cm.user_id = $3::uuid
                 and cm.status = 'active'
             )
           )
         )
       order by cp.created_at desc
       limit $2`,
      [communityId, Math.max(1, Math.min(200, Number(limit) || 100)), viewerId || null]
    )
    : await query(
      `select
        cp.id, cp.community_id, cp.author_id, cp.content, cp.likes_count, cp.comments_count, cp.shares_count,
        cp.is_featured, cp.linked_world_card_id, cp.created_at,
        u.nickname as author_name,
        wc.title as world_title,
        (
          select count(*)
          from community_post_reactions r
          where r.community_post_id = cp.id
            and r.reaction_type = 'favorite'
            and r.status = 'active'
        )::integer as favorites_count,
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
         and (
           cp.visibility in ('public', 'all_users')
           or cp.visibility is null
           or (
             cp.visibility in ('community_only', 'community', '仅社区内可见', '本社区用户')
             and $2::uuid is not null
             and exists(
               select 1
               from community_members cm
               where cm.community_id = cp.community_id
                 and cm.user_id = $2::uuid
                 and cm.status = 'active'
             )
           )
         )
       order by cp.created_at desc
       limit $1`,
      [Math.max(1, Math.min(200, Number(limit) || 100)), viewerId || null]
    );

  return result.rows || [];
}

export async function listCommunityMembers({ communityId = "", limit = 100 } = {}) {
  const cid = String(communityId || "").trim();
  if (!cid) return [];
  const result = await query(
    `with ranked as (
      select
        cm.user_id,
        cm.role,
        cm.joined_at,
        row_number() over (
          partition by cm.user_id
          order by
            case cm.role
              when 'owner' then 0
              when 'admin' then 1
              else 2
            end,
            cm.joined_at asc
        ) as rn
      from community_members cm
      where cm.community_id = $1::uuid
        and cm.status = 'active'
    )
    select
      r.user_id,
      r.role,
      r.joined_at,
      u.nickname,
      coalesce(nullif(u.avatar_url, ''), nullif(up.extra->>'avatarUrl', ''), '') as avatar_url,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle
    from ranked r
    join users u on u.id = r.user_id
    left join user_profiles up on up.user_id = u.id
    where r.rn = 1
    order by
      case r.role
        when 'owner' then 0
        when 'admin' then 1
        else 2
      end,
      r.joined_at asc
    limit $2`,
    [cid, Math.max(1, Math.min(300, Number(limit) || 100))]
  );
  return result.rows || [];
}

export async function getPostDetail({ postId, viewerId = null }) {
  const result = await query(
    `select
      cp.id, cp.community_id, cp.author_id, cp.content, cp.likes_count, cp.comments_count, cp.shares_count,
      cp.is_featured, cp.linked_world_card_id, cp.created_at, cp.visibility, cp.status, cp.deleted_at,
      u.nickname as author_name,
      wc.title as world_title,
      (
        select count(*)
        from community_post_reactions r
        where r.community_post_id = cp.id
          and r.reaction_type = 'favorite'
          and r.status = 'active'
      )::integer as favorites_count,
      exists(
        select 1
        from community_post_reactions r
        where r.community_post_id = cp.id
          and r.user_id = $2::uuid
          and r.reaction_type = 'like'
          and r.status = 'active'
      ) as liked_by_me,
      exists(
        select 1
        from community_post_reactions r
        where r.community_post_id = cp.id
          and r.user_id = $2::uuid
          and r.reaction_type = 'favorite'
          and r.status = 'active'
      ) as favorited_by_me,
      (
        cp.visibility in ('public', 'all_users')
        or cp.visibility is null
        or (
          cp.visibility in ('community_only', 'community', '仅社区内可见', '本社区用户')
          and $2::uuid is not null
          and exists(
            select 1
            from community_members cm
            where cm.community_id = cp.community_id
              and cm.user_id = $2::uuid
              and cm.status = 'active'
          )
        )
      ) as can_view,
      coalesce((
        select json_agg(pm.media_url order by pm.sort_order)
        from community_post_media pm
        where pm.community_post_id = cp.id
          and pm.deleted_at is null
      ), '[]'::json) as media_urls
     from community_posts cp
     join users u on u.id = cp.author_id
     left join world_cards wc on wc.id = cp.linked_world_card_id
     where cp.id = $1::uuid
       and cp.status = 'published'
       and cp.deleted_at is null
     limit 1`,
    [postId, viewerId || null]
  );
  return result.rows[0] || null;
}

export async function getPostAccess({ postId, viewerId = null }) {
  const result = await query(
    `select
      cp.id,
      (
        cp.visibility in ('public', 'all_users')
        or cp.visibility is null
        or (
          cp.visibility in ('community_only', 'community', '仅社区内可见', '本社区用户')
          and $2::uuid is not null
          and exists(
            select 1
            from community_members cm
            where cm.community_id = cp.community_id
              and cm.user_id = $2::uuid
              and cm.status = 'active'
          )
        )
      ) as can_view
     from community_posts cp
     where cp.id = $1::uuid
       and cp.status = 'published'
       and cp.deleted_at is null
     limit 1`,
    [postId, viewerId || null]
  );
  return result.rows[0] || null;
}

export async function listPostComments(postId, viewerId = "", limit = 80) {
  const safeLimit = Math.max(1, Math.min(200, Number(limit) || 80));
  const vid = String(viewerId || "").trim() || null;
  const parentRes = await query(
    `select
      c.id,
      c.community_post_id,
      c.user_id,
      c.parent_comment_id,
      c.content,
      c.likes_count,
      c.created_at,
      c.updated_at,
      u.nickname as user_name,
      case
        when $3::uuid is null then false
        else exists(
          select 1
          from community_post_comment_likes l
          where l.comment_id = c.id
            and l.user_id = $3::uuid
        )
      end as liked_by_me
     from community_post_comments c
     join users u on u.id = c.user_id
     where c.community_post_id = $1::uuid
       and c.status = 'active'
       and c.deleted_at is null
       and c.parent_comment_id is null
     order by c.created_at desc
     limit $2`,
    [postId, safeLimit, vid]
  );
  const parentRows = Array.isArray(parentRes.rows) ? parentRes.rows : [];
  const parentIds = parentRows.map((row) => row.id).filter(Boolean);
  let replyRows = [];
  if (parentIds.length > 0) {
    const replyRes = await query(
      `with recursive thread as (
         select
           c.id,
           c.community_post_id,
           c.user_id,
           c.parent_comment_id,
           c.content,
           c.likes_count,
           c.created_at,
           c.updated_at,
           u.nickname as user_name,
           case
             when $2::uuid is null then false
             else exists(
               select 1
               from community_post_comment_likes l
               where l.comment_id = c.id
                 and l.user_id = $2::uuid
             )
           end as liked_by_me
         from community_post_comments c
         join users u on u.id = c.user_id
         where c.parent_comment_id = any($1::uuid[])
           and c.status = 'active'
           and c.deleted_at is null
         union all
         select
           c.id,
           c.community_post_id,
           c.user_id,
           c.parent_comment_id,
           c.content,
           c.likes_count,
           c.created_at,
           c.updated_at,
           u.nickname as user_name,
           case
             when $2::uuid is null then false
             else exists(
               select 1
               from community_post_comment_likes l
               where l.comment_id = c.id
                 and l.user_id = $2::uuid
             )
           end as liked_by_me
         from community_post_comments c
         join users u on u.id = c.user_id
         join thread t on c.parent_comment_id = t.id
         where c.status = 'active'
           and c.deleted_at is null
       )
       select *
       from thread
       order by created_at asc`,
      [parentIds, vid]
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
     from community_post_comments
     where community_post_id = $1::uuid
       and status = 'active'
       and deleted_at is null
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

export async function togglePostReaction({ postId, userId, reactionType, active = null }) {
  const type = reactionType === "favorite" ? "favorite" : "like";
  const hasActive = typeof active === "boolean";
  const result = await query(
    `with prev as (
      select status
      from community_post_reactions
      where community_post_id = $1::uuid
        and user_id = $2::uuid
        and reaction_type = $3
      limit 1
    ),
    upsert as (
      insert into community_post_reactions(community_post_id, user_id, reaction_type, status)
      values (
        $1::uuid,
        $2::uuid,
        $3,
        case
          when $4::boolean is null then 'active'
          when $4::boolean then 'active'
          else 'inactive'
        end
      )
      on conflict (community_post_id, user_id, reaction_type)
      do update set
        status = case
          when $4::boolean is null then
            case when community_post_reactions.status = 'active' then 'inactive' else 'active' end
          when $4::boolean then 'active'
          else 'inactive'
        end,
        updated_at = now()
      returning status
    ),
    delta as (
      select
        case
          when $3 <> 'like' then 0
          when coalesce((select status from prev limit 1), 'inactive') = (select status from upsert limit 1) then 0
          when (select status from upsert limit 1) = 'active' then 1
          else -1
        end::integer as like_delta
    ),
    updated_post as (
      update community_posts cp
      set likes_count = greatest(0, cp.likes_count + d.like_delta),
          updated_at = case when d.like_delta <> 0 then now() else cp.updated_at end
      from delta d
      where cp.id = $1::uuid
      returning cp.id, cp.likes_count, cp.updated_at
    ),
    favorite_counter as (
      select count(*)::integer as favorites_count
      from community_post_reactions r
      where r.community_post_id = $1::uuid
        and r.reaction_type = 'favorite'
        and r.status = 'active'
    )
    select
      (select status from upsert limit 1) as next_status,
      (select likes_count from updated_post limit 1)::integer as likes_count,
      (select favorites_count from favorite_counter limit 1)::integer as favorites_count,
      (select updated_at from updated_post limit 1) as updated_at`,
    [postId, userId, type, hasActive ? Boolean(active) : null]
  );

  const row = result.rows[0];
  if (!row) return null;
  return {
    reaction_type: type,
    active: String(row.next_status || "") === "active",
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
      insert into community_post_comments(community_post_id, user_id, parent_comment_id, content, status, client_token)
      values ($1::uuid, $2::uuid, $3::uuid, $4, 'active', $5)
      on conflict (community_post_id, user_id, client_token)
      where client_token is not null
      do nothing
      returning id, community_post_id, user_id, parent_comment_id, content, likes_count, created_at, updated_at, client_token
    ),
    inserted as (
      select * from inserted_raw
      union all
      select c.id, c.community_post_id, c.user_id, c.parent_comment_id, c.content, c.likes_count, c.created_at, c.updated_at, c.client_token
      from community_post_comments c
      where $5::text is not null
        and not exists(select 1 from inserted_raw)
        and c.community_post_id = $1::uuid
        and c.user_id = $2::uuid
        and c.client_token = $5::text
      order by created_at desc
      limit 1
    ),
    sync_post as (
      update community_posts cp
      set comments_count = (
            select count(*)::integer
            from community_post_comments c
            where c.community_post_id = $1::uuid
              and c.status = 'active'
              and c.deleted_at is null
              and c.parent_comment_id is null
          ),
          updated_at = now()
      from inserted i
      where cp.id = i.community_post_id
        and exists(select 1 from inserted_raw)
      returning cp.comments_count, cp.updated_at
    ),
    fallback_post as (
      select cp.comments_count, cp.updated_at
      from community_posts cp
      where cp.id = $1::uuid
      limit 1
    )
    select
      i.*,
      coalesce(s.comments_count, fp.comments_count, 0)::integer as comments_count,
      coalesce(s.updated_at, fp.updated_at) as updated_at,
      u.nickname as user_name
    from inserted i
    left join sync_post s on true
    left join fallback_post fp on true
    join users u on u.id = i.user_id`,
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

export async function setCommunityPostCommentLike({
  commentId,
  userId,
  active
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const commentRes = await client.query(
      `select id, community_post_id
       from community_post_comments
       where id = $1
         and status = 'active'
         and deleted_at is null
       limit 1`,
      [commentId]
    );
    if (!commentRes.rows[0]?.id) {
      await client.query("rollback");
      return null;
    }
    const postId = commentRes.rows[0].community_post_id;
    if (active) {
      const inserted = await client.query(
        `insert into community_post_comment_likes(comment_id, user_id)
         values ($1, $2)
         on conflict (comment_id, user_id) do nothing
         returning id`,
        [commentId, userId]
      );
      if (inserted.rowCount > 0) {
        await client.query(
          `update community_post_comments
           set likes_count = likes_count + 1,
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    } else {
      const deleted = await client.query(
        `delete from community_post_comment_likes
         where comment_id = $1
           and user_id = $2
         returning id`,
        [commentId, userId]
      );
      if (deleted.rowCount > 0) {
        await client.query(
          `update community_post_comments
           set likes_count = greatest(0, likes_count - 1),
               updated_at = now()
           where id = $1`,
          [commentId]
        );
      }
    }
    const latestRes = await client.query(
      `select id, community_post_id, likes_count, updated_at
       from community_post_comments
       where id = $1
       limit 1`,
      [commentId]
    );
    await client.query("commit");
    const row = latestRes.rows[0] || null;
    if (!row) return null;
    return {
      commentId: row.id,
      postId: row.community_post_id || postId,
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

export async function deleteCommunityPostComment({
  commentId,
  userId
}) {
  const pool = getPool();
  const client = await pool.connect();
  try {
    await client.query("begin");
    const targetRes = await client.query(
      `select id, community_post_id, user_id, parent_comment_id
       from community_post_comments
       where id = $1
         and status = 'active'
         and deleted_at is null
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
         from community_post_comments
         where id = $1
           and status = 'active'
           and deleted_at is null
         union all
         select c.id, c.parent_comment_id
         from community_post_comments c
         join target_tree t on c.parent_comment_id = t.id
         where c.status = 'active'
           and c.deleted_at is null
       )
       update community_post_comments c
       set status = 'deleted',
           deleted_at = now(),
           updated_at = now()
       where c.id in (select id from target_tree)
       returning c.id, c.parent_comment_id`,
      [commentId]
    );
    const deletedCount = deleted.rowCount;
    const topLevelDeleted = deleted.rows.filter((row) => !row.parent_comment_id).length;
    let commentsCount = 0;
    if (deletedCount > 0) {
      const postRes = await client.query(
        `update community_posts p
         set comments_count = (
               select count(*)::integer
               from community_post_comments c
               where c.community_post_id = p.id
                 and c.status = 'active'
                 and c.deleted_at is null
                 and c.parent_comment_id is null
             ),
             updated_at = now()
         where p.id = $1::uuid
         returning p.comments_count`,
        [target.community_post_id]
      );
      commentsCount = Number(postRes.rows[0]?.comments_count || 0);
    } else {
      const countRes = await client.query(
        `select comments_count
         from community_posts
         where id = $1::uuid
         limit 1`,
        [target.community_post_id]
      );
      commentsCount = Number(countRes.rows[0]?.comments_count || 0);
    }
    await client.query("commit");
    return {
      status: "ok",
      postId: target.community_post_id,
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

export async function incrementPostShare(postId) {
  const result = await query(
    `update community_posts
     set shares_count = shares_count + 1,
         updated_at = now()
     where id = $1::uuid
       and status = 'published'
       and deleted_at is null
     returning id, shares_count`,
    [postId]
  );
  return result.rows[0] || null;
}
