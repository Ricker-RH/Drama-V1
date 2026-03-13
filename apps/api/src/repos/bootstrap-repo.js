import { query } from "../db/client.js";

function formatCompactNumber(value) {
  const n = Number(value || 0);
  if (!Number.isFinite(n)) return "0";
  if (n >= 10000) return `${(n / 10000).toFixed(1)}w`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(Math.round(n));
}

function formatMembers(value) {
  const n = Number(value || 0);
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万人`;
  return `${n}人`;
}

function formatTimeText(dateLike) {
  if (!dateLike) return "刚刚";
  const ms = Date.now() - new Date(dateLike).getTime();
  const mins = Math.max(0, Math.floor(ms / 60000));
  if (mins < 1) return "刚刚";
  if (mins < 60) return `${mins}分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}小时前`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}天前`;
  return `${Math.floor(days / 30)}个月前`;
}

function toClock(dateLike) {
  if (!dateLike) return "刚刚";
  const d = new Date(dateLike);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

async function buildAuthorDirectory(authorIds = [], viewerId = null) {
  const ids = Array.from(new Set((Array.isArray(authorIds) ? authorIds : []).filter(Boolean)));
  if (!ids.length) return {};
  const res = await query(
    `select
      u.id,
      u.nickname,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      coalesce(u.bio, '') as bio,
      coalesce(fans.cnt, 0) as fans_count,
      coalesce(follows.cnt, 0) as follows_count,
      coalesce(works.cnt, 0) as works_count,
      case
        when $2::uuid is null then false
        else exists(
          select 1
          from user_follows uf
          where uf.follower_id = $2::uuid
            and uf.following_id = u.id
            and uf.status = 'active'
        )
      end as followed_by_me
    from users u
    left join user_profiles up on up.user_id = u.id
    left join (
      select following_id, count(*) as cnt
      from user_follows
      where status='active'
      group by following_id
    ) fans on fans.following_id = u.id
    left join (
      select follower_id, count(*) as cnt
      from user_follows
      where status='active'
      group by follower_id
    ) follows on follows.follower_id = u.id
    left join (
      select author_id, count(*) as cnt
      from world_cards
      where publish_status='published'
      group by author_id
    ) works on works.author_id = u.id
    where u.id = any($1::uuid[])`,
    [ids, viewerId || null]
  );
  const out = {};
  res.rows.forEach((row) => {
    out[row.id] = {
      id: row.id,
      name: row.nickname || "匿名作者",
      handle: row.handle || "",
      bio: row.bio || "",
      followedByMe: Boolean(row.followed_by_me),
      stats: {
        fansCount: Number(row.fans_count || 0),
        followsCount: Number(row.follows_count || 0),
        worksCount: Number(row.works_count || 0)
      }
    };
  });
  return out;
}

export async function getBootstrapPayload(userId = null, mode = "core") {
  let currentUser = null;
  if (userId) {
    const userRes = await query(
      `select
        u.id,
        u.nickname,
        u.avatar_url,
        u.bio,
        coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
        coalesce(up.extra->>'gender', '保密') as gender,
        coalesce(up.extra->>'birthday', '') as birthday,
        up.cover_url,
        coalesce(wa.balance, 0) as coins
      from users u
      left join user_profiles up on up.user_id = u.id
      left join wallet_accounts wa on wa.user_id = u.id
      where u.id = $1::uuid
      limit 1`,
      [userId]
    );
    currentUser = userRes.rows[0] || null;
  }

  if (mode === "core") {
    const [feedRes, worldMediaRes, dynamicRes, communityRes, hotSearchRes] = await Promise.all([
      query(
        `select
          w.id, w.title, w.subtitle, w.summary, w.overview, w.format, w.theme, w.setting, w.background, w.recommend_tag, w.time_tag, w.cover_url, w.is_test,
          w.mode, w.chapter_label, w.main_quest, w.key_npc, w.key_clues, w.opening_summary, w.play_hook,
          coalesce(ws.likes_count, 0) as likes_count,
          coalesce(ws.favorites_count, 0) as favorites_count,
          coalesce(ws.comments_count, 0) as comments_count,
          coalesce(ws.plays_count, 0) as plays_count,
          coalesce(ws.heat_score, 0) as heat_score,
          exists(
            select 1
            from world_card_interactions wi
            where wi.world_card_id = w.id
              and wi.user_id = $1::uuid
              and wi.interaction_type = 'like'
          ) as liked_by_me,
          exists(
            select 1
            from world_card_interactions wi
            where wi.world_card_id = w.id
              and wi.user_id = $1::uuid
              and wi.interaction_type = 'favorite'
          ) as favorited_by_me,
          coalesce(array_remove(array_agg(distinct wt.tag), null), '{}'::text[]) as tags,
          coalesce(u.nickname, '匿名作者') as author,
          u.id as author_id
        from world_cards w
        left join world_card_stats ws on ws.world_card_id = w.id
        left join users u on u.id = w.author_id
        left join world_card_tags wt on wt.world_card_id = w.id
        where w.publish_status = 'published'
        group by w.id, ws.world_card_id, u.id
        order by w.created_at desc
        limit 160`,
        [currentUser?.id || null]
      ),
      query(
        `select media_url
         from world_card_media
         where media_type='image'
         order by created_at desc
         limit 12`
      ),
      query(
        `select
          p.id, p.author_id, p.post_type, p.title, p.content, p.likes_count, p.comments_count, p.created_at,
          u.nickname as author,
          coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
          p.linked_world_card_id,
          exists(
            select 1 from post_reactions pr
            where pr.post_id = p.id and pr.user_id = $1::uuid and pr.reaction_type = 'like'
          ) as liked_by_me,
          exists(
            select 1 from post_reactions pr
            where pr.post_id = p.id and pr.user_id = $1::uuid and pr.reaction_type = 'favorite'
          ) as favorited_by_me
        from posts p
        join users u on u.id = p.author_id
        left join user_profiles up on up.user_id = u.id
        where p.status = 'published'
        order by p.created_at desc
        limit 40`,
        [currentUser?.id || null]
      ),
      query(
        `select
          c.id, c.name, c.description, c.tags, c.member_count, c.last_active_at, c.latest_post_at,
          c.theme, c.gender_focus, c.cover_url, c.cover_mask_opacity, c.owner_id,
          case
            when $1::uuid is null then false
            else exists(
              select 1
              from community_members cm
              where cm.community_id = c.id
                and cm.user_id = $1::uuid
                and cm.status = 'active'
            )
          end as joined_by_me
        from communities c
        where c.status = 'active'
        order by coalesce(c.latest_post_at, c.last_active_at, c.updated_at) desc
        limit 40`,
        [currentUser?.id || null]
      ),
      query(
        `select title
         from search_documents
         where scope='global' and status='active'
         order by heat_score desc, created_at desc
         limit 20`
      )
    ]);

    const feedData = feedRes.rows.map((row) => ({
      id: row.id,
      format: row.format || "短剧",
      theme: row.theme || "悬疑",
      setting: row.setting || "双强",
      background: row.background || "都市",
      recommend: row.recommend_tag || "最新上架",
      time: row.time_tag || "7天内上新",
      title: row.title,
      subtitle: row.subtitle || "",
      summary: row.summary || "",
      overview: row.overview || "",
      tags: row.tags?.length ? row.tags.slice(0, 3) : [row.theme || "剧情向"],
      author: row.author,
      authorId: row.author_id || "",
      mode: row.mode || "long_narrative",
      chapter: row.chapter_label || "序幕",
      mainQuest: row.main_quest || "",
      npc: row.key_npc || "",
      clues: row.key_clues || "",
      openingSummary: row.opening_summary || "",
      playHook: row.play_hook || "",
      cover: row.cover_url
        ? `linear-gradient(180deg,rgba(15,23,42,.05),rgba(15,23,42,.35)),url('${row.cover_url}') center/cover`
        : "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)",
      like: Number(row.likes_count || 0).toLocaleString(),
      star: Number(row.favorites_count || 0).toLocaleString(),
      comment: Number(row.comments_count || 0).toLocaleString(),
      heat: `${((Number(row.heat_score || 0) || Number(row.plays_count || 0) / 1000) / 10).toFixed(1)}w`,
      isTest: Boolean(row.is_test),
      liked: Boolean(row.liked_by_me),
      favorited: Boolean(row.favorited_by_me)
    }));
    const authors = await buildAuthorDirectory(feedData.map((x) => x.authorId), currentUser?.id || null);
    const dramaStoryImages = worldMediaRes.rows.map((r) => r.media_url).filter(Boolean);
    const dynamicTabs = ["推荐", "关注", "发现"];
    const dynamicFeed = dynamicRes.rows.map((row, idx) => ({
      id: row.id,
      tab: currentUser?.id && row.author_id === currentUser.id ? "我的" : dynamicTabs[idx % dynamicTabs.length],
      type: row.post_type === "story_card" ? "story" : row.post_type,
      author: row.author,
      handle: row.handle,
      time: formatTimeText(row.created_at),
      title: row.title || "动态更新",
      text: row.content || "",
      tags: [],
      likes: Number(row.likes_count || 0),
      comments: Number(row.comments_count || 0),
      worldId: row.linked_world_card_id || null,
      liked: Boolean(row.liked_by_me),
      favorited: Boolean(row.favorited_by_me)
    }));
    const communityList = communityRes.rows.map((row) => {
      const refTime = row.latest_post_at || row.last_active_at;
      const updatedHours = Math.max(0, Math.floor((Date.now() - new Date(refTime || Date.now()).getTime()) / 3600000));
      return {
        id: row.id,
        name: row.name,
        desc: row.description || "暂无描述",
        tags: (row.tags || []).slice(0, 4),
        members: formatMembers(row.member_count),
        online: formatCompactNumber(Math.max(1, Math.round(Number(row.member_count || 0) * 0.18))),
        updated: formatTimeText(refTime),
        gender: row.gender_focus || "不限频向",
        updatedHours,
        memberCount: Number(row.member_count || 0),
        ownerId: row.owner_id || "",
        joinedByMe: Boolean(row.joined_by_me),
        cover: row.cover_url ? `url("${row.cover_url}")` : "",
        maskOpacity: Number(row.cover_mask_opacity || 0.36)
      };
    });

    return {
      user: currentUser
        ? {
            id: currentUser.id,
            name: currentUser.nickname,
            handle: currentUser.handle,
            bio: currentUser.bio || "",
            avatarUrl: currentUser.avatar_url || "",
            coverUrl: currentUser.cover_url || "",
            gender: currentUser.gender || "保密",
            birthday: currentUser.birthday || "",
            coins: Number(currentUser.coins || 0)
          }
        : null,
      feedData,
      authors,
      dramaStoryImages,
      dynamicFeed,
      communityList,
      communityPosts: {},
      messages: {
        inbox: [],
        likes: [],
        follows: [],
        comments: [],
        threads: {}
      },
      me: {
        contentLibrary: { works: [], likes: [], favorites: [], history: [] },
        relationUsers: [],
        stats: {
          storyCount: 0,
          likedCount: 0,
          fansCount: 0
        },
        coinBills: [],
        coinTasks: [],
        coinBenefits: []
      },
      search: {
        hotTerms: hotSearchRes.rows.map((x) => x.title).filter(Boolean),
        history: []
      }
    };
  }

  const feedRes = await query(
    `select
      w.id,
      w.title,
      w.subtitle,
      w.summary,
      w.overview,
      w.format,
      w.theme,
      w.setting,
      w.background,
      w.recommend_tag,
      w.time_tag,
      w.cover_url,
      w.is_test,
      w.mode,
      w.chapter_label,
      w.main_quest,
      w.key_npc,
      w.key_clues,
      w.opening_summary,
      w.play_hook,
      coalesce(ws.likes_count, 0) as likes_count,
      coalesce(ws.favorites_count, 0) as favorites_count,
      coalesce(ws.comments_count, 0) as comments_count,
      coalesce(ws.plays_count, 0) as plays_count,
      coalesce(ws.heat_score, 0) as heat_score,
      exists(
        select 1
        from world_card_interactions wi
        where wi.world_card_id = w.id
          and wi.user_id = $1::uuid
          and wi.interaction_type = 'like'
      ) as liked_by_me,
      exists(
        select 1
        from world_card_interactions wi
        where wi.world_card_id = w.id
          and wi.user_id = $1::uuid
          and wi.interaction_type = 'favorite'
      ) as favorited_by_me,
      coalesce(array_remove(array_agg(distinct wt.tag), null), '{}'::text[]) as tags,
      coalesce(u.nickname, '匿名作者') as author,
      u.id as author_id
    from world_cards w
    left join world_card_stats ws on ws.world_card_id = w.id
    left join users u on u.id = w.author_id
    left join world_card_tags wt on wt.world_card_id = w.id
    where w.publish_status = 'published'
    group by w.id, ws.world_card_id, u.id
    order by w.created_at desc
    limit 400`,
    [currentUser?.id || null]
  );
  const feedData = feedRes.rows.map((row) => ({
    id: row.id,
    format: row.format || "短剧",
    theme: row.theme || "悬疑",
    setting: row.setting || "双强",
    background: row.background || "都市",
    recommend: row.recommend_tag || "最新上架",
    time: row.time_tag || "7天内上新",
    title: row.title,
    subtitle: row.subtitle || "",
    summary: row.summary || "",
    overview: row.overview || "",
    tags: row.tags?.length ? row.tags.slice(0, 3) : [row.theme || "剧情向"],
    author: row.author,
    authorId: row.author_id || "",
    mode: row.mode || "long_narrative",
    chapter: row.chapter_label || "序幕",
    mainQuest: row.main_quest || "",
    npc: row.key_npc || "",
    clues: row.key_clues || "",
    openingSummary: row.opening_summary || "",
    playHook: row.play_hook || "",
    cover: row.cover_url
      ? `linear-gradient(180deg,rgba(15,23,42,.05),rgba(15,23,42,.35)),url('${row.cover_url}') center/cover`
      : "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)",
    like: Number(row.likes_count || 0).toLocaleString(),
    star: Number(row.favorites_count || 0).toLocaleString(),
    comment: Number(row.comments_count || 0).toLocaleString(),
    heat: `${((Number(row.heat_score || 0) || Number(row.plays_count || 0) / 1000) / 10).toFixed(1)}w`,
    isTest: Boolean(row.is_test),
    liked: Boolean(row.liked_by_me),
    favorited: Boolean(row.favorited_by_me)
  }));
  const authors = await buildAuthorDirectory(feedData.map((x) => x.authorId), currentUser?.id || null);

  const worldMediaRes = await query(
    `select media_url
     from world_card_media
     where media_type='image'
     order by created_at desc
     limit 24`
  );
  const dramaStoryImages = worldMediaRes.rows.map((r) => r.media_url).filter(Boolean);

  const dynamicRes = await query(
    `select
      p.id,
      p.author_id,
      p.post_type,
      p.title,
      p.content,
      p.likes_count,
      p.comments_count,
      p.created_at,
      u.nickname as author,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      p.linked_world_card_id,
      exists(
        select 1 from post_reactions pr
        where pr.post_id = p.id and pr.user_id = $1::uuid and pr.reaction_type = 'like'
      ) as liked_by_me,
      exists(
        select 1 from post_reactions pr
        where pr.post_id = p.id and pr.user_id = $1::uuid and pr.reaction_type = 'favorite'
      ) as favorited_by_me
    from posts p
    join users u on u.id = p.author_id
    left join user_profiles up on up.user_id = u.id
    where p.status = 'published'
    order by p.created_at desc
    limit 120`,
    [currentUser?.id || null]
  );
  const dynamicTabs = ["推荐", "关注", "发现"];
  const dynamicFeed = dynamicRes.rows.map((row, idx) => ({
    id: row.id,
    tab: currentUser?.id && row.author_id === currentUser.id ? "我的" : dynamicTabs[idx % dynamicTabs.length],
    type: row.post_type === "story_card" ? "story" : row.post_type,
    author: row.author,
    handle: row.handle,
    time: formatTimeText(row.created_at),
    title: row.title || "动态更新",
    text: row.content || "",
    tags: [],
    likes: Number(row.likes_count || 0),
    comments: Number(row.comments_count || 0),
    worldId: row.linked_world_card_id || null,
    liked: Boolean(row.liked_by_me),
    favorited: Boolean(row.favorited_by_me)
  }));

  const communityRes = await query(
    `select
      c.id, c.name, c.description, c.tags, c.member_count, c.last_active_at, c.latest_post_at,
      c.theme, c.gender_focus, c.cover_url, c.cover_mask_opacity, c.owner_id,
      case
        when $1::uuid is null then false
        else exists(
          select 1
          from community_members cm
          where cm.community_id = c.id
            and cm.user_id = $1::uuid
            and cm.status = 'active'
        )
      end as joined_by_me
    from communities c
    where c.status = 'active'
    order by coalesce(c.latest_post_at, c.last_active_at, c.updated_at) desc
    limit 120`,
    [currentUser?.id || null]
  );
  const communityList = communityRes.rows.map((row) => {
    const refTime = row.latest_post_at || row.last_active_at;
    const updatedHours = Math.max(0, Math.floor((Date.now() - new Date(refTime || Date.now()).getTime()) / 3600000));
    return {
      id: row.id,
      name: row.name,
      desc: row.description || "暂无描述",
      tags: (row.tags || []).slice(0, 4),
      members: formatMembers(row.member_count),
      online: formatCompactNumber(Math.max(1, Math.round(Number(row.member_count || 0) * 0.18))),
      updated: formatTimeText(refTime),
      gender: row.gender_focus || "不限频向",
      updatedHours,
      memberCount: Number(row.member_count || 0),
      ownerId: row.owner_id || "",
      joinedByMe: Boolean(row.joined_by_me),
      cover: row.cover_url ? `url("${row.cover_url}")` : "",
      maskOpacity: Number(row.cover_mask_opacity || 0.36)
    };
  });

  const communityPostRes = await query(
    `select
      cp.id, cp.community_id, cp.content, cp.likes_count, cp.comments_count, cp.is_featured, cp.created_at, cp.linked_world_card_id,
      u.nickname as user_name,
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
    where cp.status='published'
      and cp.community_id is not null
      and (
        cp.visibility in ('public', 'all_users')
        or cp.visibility is null
        or (
          cp.visibility in ('community_only', 'community', '仅社区内可见', '本社区用户')
          and $1::uuid is not null
          and exists(
            select 1
            from community_members cm
            where cm.community_id = cp.community_id
              and cm.user_id = $1::uuid
              and cm.status = 'active'
          )
        )
      )
    order by cp.created_at desc
    limit 1000`
    ,
    [currentUser?.id || null]
  );
  const communityPosts = {};
  communityPostRes.rows.forEach((row) => {
    if (!communityPosts[row.community_id]) communityPosts[row.community_id] = [];
    if (communityPosts[row.community_id].length >= 20) return;
    const rawContent = String(row.content || "").trim();
    const titleMatch = rawContent.match(/^【([^】]{1,80})】\s*\n?([\s\S]*)$/);
    const normalizedTitle = titleMatch ? String(titleMatch[1] || "").trim() : (rawContent.slice(0, 28) || "社区动态");
    const normalizedText = titleMatch ? String(titleMatch[2] || "").trim() : rawContent;
    communityPosts[row.community_id].push({
      id: row.id,
      user: row.user_name,
      time: formatTimeText(row.created_at),
      title: normalizedTitle,
      text: normalizedText,
      tag: row.is_featured ? "精华" : "动态",
      likes: Number(row.likes_count || 0),
      stars: Math.max(0, Math.floor(Number(row.likes_count || 0) * 0.22)),
      comments: Number(row.comments_count || 0),
      featured: Boolean(row.is_featured),
      story: row.world_title || undefined,
      storyId: row.linked_world_card_id || undefined,
      mediaUrls: Array.isArray(row.media_urls) ? row.media_urls.filter(Boolean) : []
    });
  });

  if (mode !== "full") {
    return {
      user: currentUser
        ? {
            id: currentUser.id,
            name: currentUser.nickname,
            handle: currentUser.handle,
            bio: currentUser.bio || "",
            avatarUrl: currentUser.avatar_url || "",
            coverUrl: currentUser.cover_url || "",
            gender: currentUser.gender || "保密",
            birthday: currentUser.birthday || "",
            coins: Number(currentUser.coins || 0)
          }
        : null,
      feedData,
      authors,
      dramaStoryImages,
      dynamicFeed,
      communityList,
      communityPosts,
      messages: {
        inbox: [],
        likes: [],
        follows: [],
        comments: [],
        threads: {}
      },
      me: {
        contentLibrary: { works: [], likes: [], favorites: [], history: [] },
        relationUsers: [],
        stats: {
          storyCount: 0,
          likedCount: 0,
          fansCount: 0
        },
        coinBills: [],
        coinTasks: [],
        coinBenefits: []
      },
      search: {
        hotTerms: [],
        history: []
      }
    };
  }

  if (!currentUser) {
    return {
      user: null,
      feedData,
      authors,
      dramaStoryImages,
      dynamicFeed,
      communityList,
      communityPosts,
      messages: {
        inbox: [],
        likes: [],
        follows: [],
        comments: [],
        threads: {}
      },
      me: {
        contentLibrary: { works: [], likes: [], favorites: [], history: [] },
        relationUsers: [],
        stats: {
          storyCount: 0,
          likedCount: 0,
          fansCount: 0
        },
        coinBills: [],
        coinTasks: [],
        coinBenefits: []
      },
      search: {
        hotTerms: [],
        history: []
      }
    };
  }

  const inbox = [];
  const messageThreads = {};
  if (currentUser?.id) {
    const inboxRes = await query(
      `select
        c.id,
        c.biz_type,
        case
          when c.conversation_type = 'private' then coalesce(uo.nickname, c.title, '私聊会话')
          else c.title
        end as title,
        c.last_message_at,
        coalesce(cm.unread_count, 0) as unread_count,
        coalesce(m.content, '') as preview
      from conversation_members cm
      join conversations c on c.id = cm.conversation_id
      left join conversation_members cmo
        on cmo.conversation_id = c.id
       and cmo.user_id <> $1
       and cmo.deleted_at is null
      left join users uo on uo.id = cmo.user_id
      left join messages m on m.id = c.last_message_id
      where cm.user_id = $1 and cm.deleted_at is null
      order by coalesce(c.last_message_at, c.updated_at) desc
      limit 80`,
      [currentUser.id]
    );
    inboxRes.rows.forEach((row) => {
      const bizType = row.biz_type;
      const type =
        bizType === "community" || bizType === "group" ? "群聊" :
        bizType === "system" ? "通知" :
        bizType === "story" ? "故事" : "私聊";
      inbox.push({
        id: row.id,
        type,
        name: row.title || "会话",
        preview: row.preview || "暂无消息",
        time: toClock(row.last_message_at),
        badge: Number(row.unread_count || 0)
      });
    });

    const threadRes = await query(
      `select
        m.conversation_id,
        m.message_type,
        m.content,
        m.payload,
        m.created_at,
        case when m.sender_id = $1 then 'me' else 'other' end as from_role
      from messages m
      where m.conversation_id = any($2::uuid[])
      order by m.created_at asc`,
      [currentUser.id, inbox.map((x) => x.id)]
    );
    threadRes.rows.forEach((row) => {
      if (!messageThreads[row.conversation_id]) messageThreads[row.conversation_id] = [];
      messageThreads[row.conversation_id].push({
        from: row.from_role,
        type: row.message_type || "text",
        text: row.content || "",
        payload: row.payload || {},
        time: toClock(row.created_at)
      });
    });
  }

  const likesRes = await query(
    `select n.id, n.title, n.content, n.created_at, n.target_id, wc.cover_url,
            a.id as actor_id,
            coalesce(a.nickname, '玩家') as actor_name
     from notifications n
     left join users a on a.id = n.actor_id
     left join world_cards wc on wc.id = n.target_id
     where ($1::uuid is null or n.user_id = $1::uuid)
       and n.type in ('post_like', 'post_favorite')
     order by n.created_at desc
     limit 40`,
    [currentUser?.id || null]
  );
  const messageLikes = likesRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    date: toClock(row.created_at),
    action: row.title || "赞了你的内容",
    note: row.content || "",
    cover: row.cover_url || "",
    worldId: row.target_id || null
  }));

  const followsRes = await query(
    `select n.id, n.content, n.created_at, a.id as actor_id, coalesce(a.nickname, '玩家') as actor_name
     from notifications n
     left join users a on a.id = n.actor_id
     where ($1::uuid is null or n.user_id = $1::uuid)
       and n.type = 'new_follow'
     order by n.created_at desc
     limit 40`,
    [currentUser?.id || null]
  );
  const messageNewFollows = followsRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    date: toClock(row.created_at),
    intro: row.content || `${row.actor_name} 开始关注你了`,
    action: "关注"
  }));

  const commentsRes = await query(
    `select n.id, n.content, n.created_at, n.target_id, wc.cover_url,
            coalesce(a.nickname, '玩家') as actor_name
     from notifications n
     left join users a on a.id = n.actor_id
     left join world_cards wc on wc.id = n.target_id
     where ($1::uuid is null or n.user_id = $1::uuid)
       and n.type = 'comment_at'
     order by n.created_at desc
     limit 40`,
    [currentUser?.id || null]
  );
  const messageComments = commentsRes.rows.map((row) => ({
    id: row.id,
    user: row.actor_name,
    date: toClock(row.created_at),
    action: "评论了你的笔记",
    text: row.content || "",
    reply: "",
    cover: row.cover_url || "",
    worldId: row.target_id || null
  }));

  const meWorksRes = await query(
    `select w.id, w.title, coalesce(w.theme, '主题') as theme, coalesce(ws.likes_count, 0) as likes, coalesce(ws.favorites_count, 0) as favorites
     from world_cards w
     left join world_card_stats ws on ws.world_card_id = w.id
     where ($1::uuid is null or w.author_id = $1::uuid) and w.publish_status='published'
     order by w.created_at desc
     limit 24`,
    [currentUser?.id || null]
  );
  const meLikesRes = await query(
    `select w.id, w.title, coalesce(w.theme, '主题') as theme, coalesce(ws.likes_count, 0) as likes
     from world_card_interactions i
     join world_cards w on w.id = i.world_card_id
     left join world_card_stats ws on ws.world_card_id = w.id
     where ($1::uuid is not null and i.user_id = $1::uuid and i.interaction_type='like')
     order by i.created_at desc
     limit 24`,
    [currentUser?.id || null]
  );
  const meFavRes = await query(
    `select w.id, w.title, coalesce(w.theme, '主题') as theme, coalesce(ws.favorites_count, 0) as favorites
     from world_card_interactions i
     join world_cards w on w.id = i.world_card_id
     left join world_card_stats ws on ws.world_card_id = w.id
     where ($1::uuid is not null and i.user_id = $1::uuid and i.interaction_type='favorite')
     order by i.created_at desc
     limit 24`,
    [currentUser?.id || null]
  );
  const meCreatorCardsRes = await query(
    `select
      c.id,
      c.card_mode,
      c.title,
      c.subtitle,
      c.save_status,
      c.publish_status,
      c.published_world_card_id,
      c.updated_at,
      coalesce(w.main_quest, w.summary, '') as world_summary
     from creator_cards c
     left join world_cards w on w.id = c.published_world_card_id
     where ($1::uuid is null or c.author_id = $1::uuid)
       and c.deleted_at is null
     order by c.updated_at desc
     limit 36`,
    [currentUser?.id || null]
  );

  const creatorWorks = meCreatorCardsRes.rows.map((x) => ({
    id: x.published_world_card_id || x.id,
    creatorCardId: x.id,
    mode: x.card_mode,
    title: x.title,
    meta: `${x.card_mode} · ${x.publish_status === "published" ? "已发布" : "草稿箱"}`,
    stat: x.publish_status === "published"
      ? `已发布 · ${x.world_summary || "可游玩"}`
      : "草稿待发布",
    status: x.publish_status,
    draft: x.publish_status !== "published"
  }));
  const creatorPublishedIds = new Set(
    creatorWorks
      .map((x) => x.id)
      .filter(Boolean)
  );

  const meContentLibrary = {
    works: [
      ...creatorWorks,
      ...meWorksRes.rows.map((x) => ({
        id: x.id,
        title: x.title,
        meta: `${x.theme} · 连载中`,
        stat: `收藏 ${Number(x.favorites).toLocaleString()} · 点赞 ${Number(x.likes).toLocaleString()}`
      })).filter((x) => !creatorPublishedIds.has(x.id))
    ],
    likes: meLikesRes.rows.map((x) => ({
      id: x.id,
      title: x.title,
      meta: `${x.theme} · 互动中`,
      stat: `点赞 ${Number(x.likes).toLocaleString()}`
    })),
    favorites: meFavRes.rows.map((x) => ({
      id: x.id,
      title: x.title,
      meta: `${x.theme} · 收藏中`,
      stat: `收藏 ${Number(x.favorites).toLocaleString()}`
    })),
    history: []
  };

  const meStatsRes = await query(
    `select
      coalesce((
        select count(*)
        from creator_cards c
        where c.author_id = $1::uuid
          and c.deleted_at is null
      ), 0) as story_count,
      (
        coalesce((
          select sum(coalesce(ws.likes_count, 0))
          from world_cards w
          left join world_card_stats ws on ws.world_card_id = w.id
          where w.author_id = $1::uuid
            and w.publish_status = 'published'
        ), 0)
        + coalesce((
          select sum(coalesce(p.likes_count, 0))
          from posts p
          where p.author_id = $1::uuid
            and p.status = 'published'
        ), 0)
        + coalesce((
          select sum(coalesce(cp.likes_count, 0))
          from community_posts cp
          where cp.author_id = $1::uuid
            and cp.status = 'active'
        ), 0)
      ) as liked_count,
      coalesce((
        select count(*)
        from user_follows uf
        where uf.following_id = $1::uuid
          and uf.status = 'active'
      ), 0) as fans_count`,
    [currentUser?.id || null]
  );
  const meStatsRow = meStatsRes.rows[0] || {};

  const relationRes = await query(
    `with rel as (
      select
        t.uid,
        max(case when t.rel = 'fan' then 1 else 0 end) as is_fan,
        max(case when t.rel = 'following' then 1 else 0 end) as is_following
      from (
        select uf.follower_id as uid, 'fan' as rel
        from user_follows uf
        where uf.following_id = $1::uuid and uf.status = 'active'
        union all
        select uf.following_id as uid, 'following' as rel
        from user_follows uf
        where uf.follower_id = $1::uuid and uf.status = 'active'
      ) t
      group by t.uid
    )
    select
      u.id,
      u.nickname,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      u.bio,
      coalesce(fc.cnt, 0) as fans,
      rel.is_fan,
      rel.is_following
    from rel
    join users u on u.id = rel.uid
    left join user_profiles up on up.user_id = u.id
    left join (
      select following_id, count(*) as cnt
      from user_follows
      where status='active'
      group by following_id
    ) fc on fc.following_id = u.id
    order by (rel.is_fan + rel.is_following) desc, fans desc, u.created_at desc
    limit 200`,
    [currentUser.id]
  );
  const meRelationUsers = relationRes.rows.map((x) => {
    const isFan = Boolean(Number(x.is_fan || 0));
    const isFollowing = Boolean(Number(x.is_following || 0));
    const tab = isFan && isFollowing ? "朋友" : isFan ? "粉丝" : "关注";
    return {
      id: x.id,
      name: x.nickname,
      handle: x.handle,
      intro: x.bio || "Drama 玩家",
      fans: formatCompactNumber(x.fans),
      tab,
      isFan,
      isFollowing
    };
  });

  const coinBillsRes = await query(
    `select id, change_amount, created_at, remark, biz_type
     from wallet_ledger
     where ($1::uuid is null or user_id = $1::uuid)
     order by created_at desc
     limit 120`,
    [currentUser?.id || null]
  );
  const coinBills = coinBillsRes.rows.map((x) => ({
    id: x.id,
    type: Number(x.change_amount) >= 0 ? "income" : "expense",
    title: x.biz_type || "账单",
    amount: Number(x.change_amount),
    createdAt: x.created_at,
    time: formatTimeText(x.created_at),
    desc: x.remark || ""
  }));

  const coinTasksRes = await query(
    `select
      t.id,
      t.title,
      t.reward_amount,
      coalesce(p.progress, 0) as progress,
      coalesce(p.target, 1) as target,
      coalesce(p.status, 'ongoing') as status
     from coin_tasks t
     left join user_coin_task_progress p
       on p.task_id = t.id and ($1::uuid is not null and p.user_id = $1::uuid)
     where t.is_active = true
     order by t.created_at asc
     limit 40`,
    [currentUser?.id || null]
  );
  const coinTasks = coinTasksRes.rows.map((x) => ({
    id: x.id,
    title: x.title,
    reward: Number(x.reward_amount),
    progress: `${x.progress}/${x.target}`,
    done: x.status === "done"
  }));

  const coinBenefitsRes = await query(
    `select id, title, theme
     from world_cards
     where publish_status='published'
     order by created_at desc
     limit 12`
  );
  const coinBenefits = coinBenefitsRes.rows.map((x, idx) => ({
    id: x.id,
    title: x.title,
    price: 120 + idx * 80,
    tag: x.theme || "热门",
    desc: "可兑换推荐位与创作权益"
  }));

  const hotSearchRes = await query(
    `select title
     from search_documents
     where scope='global' and status='active'
     order by heat_score desc, created_at desc
     limit 40`
  );
  const hotSearchTerms = hotSearchRes.rows.map((x) => x.title).filter(Boolean);

  const searchHistoryRes = await query(
    `select keyword
     from user_search_history
     where ($1::uuid is null or user_id = $1::uuid)
     order by last_used_at desc
     limit 20`,
    [currentUser?.id || null]
  );
  const defaultSearchHistory = searchHistoryRes.rows.map((x) => x.keyword).filter(Boolean);

  return {
    user: currentUser
      ? {
          id: currentUser.id,
          name: currentUser.nickname,
          handle: currentUser.handle,
          bio: currentUser.bio || "",
          avatarUrl: currentUser.avatar_url || "",
          coverUrl: currentUser.cover_url || "",
          gender: currentUser.gender || "保密",
          birthday: currentUser.birthday || "",
          coins: Number(currentUser.coins || 0)
        }
      : null,
    feedData,
    authors,
    dramaStoryImages,
    dynamicFeed,
    communityList,
    communityPosts,
    messages: {
      inbox,
      likes: messageLikes,
      follows: messageNewFollows,
      comments: messageComments,
      threads: messageThreads
    },
    me: {
      contentLibrary: meContentLibrary,
      relationUsers: meRelationUsers,
      stats: {
        storyCount: Number(meStatsRow.story_count || 0),
        likedCount: Number(meStatsRow.liked_count || 0),
        fansCount: Number(meStatsRow.fans_count || 0)
      },
      coinBills,
      coinTasks,
      coinBenefits
    },
    search: {
      hotTerms: hotSearchTerms,
      history: defaultSearchHistory
    }
  };
}
