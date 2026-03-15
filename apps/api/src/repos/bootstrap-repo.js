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

const MAX_BOOTSTRAP_URL_LENGTH = 4096;
const DEFAULT_FEED_COVER = "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)";
const CORE_FEED_LIMIT = 36;
const CORE_DYNAMIC_LIMIT = 20;
const CORE_COMMUNITY_LIMIT = 24;
const FULL_FEED_LIMIT = 120;
const FULL_DYNAMIC_LIMIT = 48;
const FULL_COMMUNITY_LIMIT = 56;
const FULL_COMMUNITY_POST_LIMIT = 240;
const FULL_INBOX_LIMIT = 28;

function sanitizeBootstrapUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw.startsWith("data:")) return "";
  if (raw.length > MAX_BOOTSTRAP_URL_LENGTH) return "";
  return raw;
}

function toFeedCoverStyle(rawUrl) {
  const safeUrl = sanitizeBootstrapUrl(rawUrl).replaceAll("'", "%27");
  if (!safeUrl) return DEFAULT_FEED_COVER;
  return `linear-gradient(180deg,rgba(15,23,42,.05),rgba(15,23,42,.35)),url('${safeUrl}') center/cover`;
}

function toCommunityCoverStyle(rawUrl) {
  const safeUrl = sanitizeBootstrapUrl(rawUrl);
  return safeUrl ? `url("${safeUrl}")` : "";
}

function normalizeBootstrapMediaItems(rawItems = []) {
  if (!Array.isArray(rawItems)) return [];
  return rawItems
    .map((item) => {
      const type = String(item?.type || "").trim().toLowerCase() === "video" ? "video" : "image";
      const url = sanitizeBootstrapUrl(item?.url);
      if (!url) return null;
      return {
        type,
        url,
        durationSec: Math.max(0, Number(item?.durationSec || 0) || 0)
      };
    })
    .filter(Boolean);
}

function normalizeBootstrapMediaUrls(rawItems = []) {
  if (!Array.isArray(rawItems)) return [];
  return rawItems
    .map((item) => sanitizeBootstrapUrl(typeof item === "string" ? item : item?.url))
    .filter(Boolean);
}

function toBootstrapHeatText(heatScoreValue = 0, playsCountValue = 0) {
  const heatScore = Number(heatScoreValue || 0);
  const playsCount = Number(playsCountValue || 0);
  const base = Number.isFinite(heatScore) && heatScore > 0
    ? heatScore
    : (Number.isFinite(playsCount) ? playsCount / 1000 : 0);
  return `${(Math.max(0, base) / 10).toFixed(1)}w`;
}

function toMeLibraryCoverUrl(row = {}) {
  return sanitizeBootstrapUrl(
    row?.cover_url
    || row?.world_cover_url
    || row?.first_image_url
    || row?.world_first_image_url
    || ""
  );
}

function buildMeLibraryWorldItem(row = {}, options = {}) {
  const id = String(options?.id || row?.id || "").trim();
  if (!id) return null;
  const theme = String(
    options?.theme
    || row?.theme
    || row?.world_theme
    || "主题"
  ).trim() || "主题";
  const likes = Number(options?.likes ?? row?.likes ?? row?.likes_count ?? row?.world_likes_count ?? 0);
  const favorites = Number(options?.favorites ?? row?.favorites ?? row?.favorites_count ?? row?.world_favorites_count ?? 0);
  const commentsCount = Number(options?.commentsCount ?? row?.comments_count ?? row?.world_comments_count ?? 0);
  const playsCount = Number(options?.playsCount ?? row?.plays_count ?? row?.world_plays_count ?? 0);
  const heatScore = Number(options?.heatScore ?? row?.heat_score ?? row?.world_heat_score ?? 0);
  const coverUrl = toMeLibraryCoverUrl(row);
  const cover = toFeedCoverStyle(coverUrl);
  const title = String(options?.title || row?.title || row?.world_title || "未命名作品").trim() || "未命名作品";
  const metaSuffix = String(options?.metaSuffix || "连载中").trim();
  const statText = String(
    options?.statText
    || `收藏 ${favorites.toLocaleString()} · 点赞 ${likes.toLocaleString()}`
  ).trim();
  const author = String(options?.authorName || row?.author || "Drama 用户").trim() || "Drama 用户";
  const authorId = String(options?.authorId || row?.author_id || "").trim();
  const tags = Array.isArray(row?.tags) && row.tags.length
    ? row.tags.slice(0, 3)
    : [theme];
  return {
    id,
    title,
    meta: `${theme} · ${metaSuffix || "连载中"}`,
    stat: statText,
    theme,
    tags,
    author,
    authorId,
    cover,
    coverUrl,
    firstImageUrl: sanitizeBootstrapUrl(row?.first_image_url || row?.world_first_image_url || ""),
    cardBackground: coverUrl,
    like: likes.toLocaleString(),
    star: favorites.toLocaleString(),
    comment: commentsCount.toLocaleString(),
    heat: toBootstrapHeatText(heatScore, playsCount),
    status: "published",
    draft: false
  };
}

function buildMeLibraryDraftItem(row = {}) {
  const mode = String(row?.card_mode || "创作").trim() || "创作";
  return {
    id: row?.id,
    creatorCardId: row?.id,
    mode,
    title: row?.title,
    meta: `${mode} · 草稿箱`,
    stat: "草稿待发布",
    status: row?.publish_status || "draft",
    draft: true
  };
}

function buildMeContentLibraryPayload({
  creatorRows = [],
  worksRows = [],
  likesRows = [],
  favoritesRows = [],
  userName = "Drama 用户",
  userId = ""
} = {}) {
  const creatorWorks = (Array.isArray(creatorRows) ? creatorRows : []).map((row) => {
    const isPublished = String(row?.publish_status || "").trim() === "published";
    const worldId = String(row?.published_world_card_id || "").trim();
    if (!isPublished || !worldId) {
      return buildMeLibraryDraftItem(row);
    }
    const mapped = buildMeLibraryWorldItem(row, {
      id: worldId,
      title: row?.world_title || row?.title,
      theme: row?.world_theme || "主题",
      likes: row?.world_likes_count,
      favorites: row?.world_favorites_count,
      commentsCount: row?.world_comments_count,
      playsCount: row?.world_plays_count,
      heatScore: row?.world_heat_score,
      metaSuffix: "已发布",
      authorName: userName,
      authorId: userId
    });
    if (!mapped) return buildMeLibraryDraftItem(row);
    return {
      ...mapped,
      creatorCardId: row?.id,
      mode: row?.card_mode,
      status: "published",
      draft: false
    };
  });

  const creatorPublishedIds = new Set(
    creatorWorks
      .filter((x) => !x?.draft)
      .map((x) => String(x?.id || "").trim())
      .filter(Boolean)
  );

  const works = [
    ...creatorWorks,
    ...(Array.isArray(worksRows) ? worksRows : [])
      .map((row) => buildMeLibraryWorldItem(row, {
        authorName: userName,
        authorId: userId
      }))
      .filter((x) => x && !creatorPublishedIds.has(String(x.id || "").trim()))
  ];

  const likes = (Array.isArray(likesRows) ? likesRows : [])
    .map((row) => buildMeLibraryWorldItem(row, {
      metaSuffix: "互动中",
      statText: `点赞 ${Number(row?.likes || row?.likes_count || row?.world_likes_count || 0).toLocaleString()}`
    }))
    .filter(Boolean);

  const favorites = (Array.isArray(favoritesRows) ? favoritesRows : [])
    .map((row) => buildMeLibraryWorldItem(row, {
      metaSuffix: "收藏中",
      statText: `收藏 ${Number(row?.favorites || row?.favorites_count || row?.world_favorites_count || 0).toLocaleString()}`
    }))
    .filter(Boolean);

  return {
    works,
    likes,
    favorites,
    history: []
  };
}

async function buildAuthorDirectory(authorIds = [], viewerId = null) {
  const ids = Array.from(new Set((Array.isArray(authorIds) ? authorIds : []).filter(Boolean)));
  if (!ids.length) return {};
  const res = await query(
    `select
      u.id,
      u.nickname,
      u.avatar_url,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      coalesce(u.bio, '') as bio,
      up.cover_url,
      coalesce(up.extra->>'backstageCoverUrl', '') as backstage_cover_url,
      coalesce(up.extra->>'gender', '保密') as gender,
      coalesce(up.extra->>'birthday', '') as birthday,
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
      avatarUrl: sanitizeBootstrapUrl(row.avatar_url),
      coverUrl: sanitizeBootstrapUrl(row.cover_url),
      backstageCoverUrl: sanitizeBootstrapUrl(row.backstage_cover_url),
      gender: row.gender || "保密",
      birthday: row.birthday || "",
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

function mapBootstrapUser(currentUser = null) {
  if (!currentUser) return null;
  return {
    id: currentUser.id,
    name: currentUser.nickname,
    handle: currentUser.handle,
    bio: currentUser.bio || "",
    avatarUrl: sanitizeBootstrapUrl(currentUser.avatar_url),
    coverUrl: sanitizeBootstrapUrl(currentUser.cover_url),
    backstageCoverUrl: sanitizeBootstrapUrl(currentUser.backstage_cover_url),
    gender: currentUser.gender || "保密",
    birthday: currentUser.birthday || "",
    backstageMask: currentUser.backstage_mask !== false,
    coins: Number(currentUser.coins || 0)
  };
}

async function getBootstrapCurrentUser(userId = null) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const userRes = await query(
    `select
      u.id,
      u.nickname,
      u.avatar_url,
      u.bio,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      coalesce(up.extra->>'gender', '保密') as gender,
      coalesce(up.extra->>'birthday', '') as birthday,
      coalesce(up.extra->>'backstageCoverUrl', '') as backstage_cover_url,
      case
        when lower(coalesce(up.extra->>'backstageMask', '')) in ('true', 'false')
          then (up.extra->>'backstageMask')::boolean
        else null
      end as backstage_mask,
      up.cover_url,
      coalesce(wa.balance, 0) as coins
    from users u
    left join user_profiles up on up.user_id = u.id
    left join wallet_accounts wa on wa.user_id = u.id
    where u.id = $1::uuid
    limit 1`,
    [id]
  );
  return userRes.rows[0] || null;
}

export async function getBootstrapPayload(userId = null, mode = "core") {
  const currentUser = await getBootstrapCurrentUser(userId);

  if (mode === "core") {
    const [feedRes, worldMediaRes, dynamicRes, communityRes, hotSearchRes] = await Promise.all([
      query(
        `select
          w.id, w.title, w.subtitle, w.summary, w.overview, w.format, w.theme, w.setting, w.background, w.recommend_tag, w.time_tag, w.cover_url, w.is_test,
          w.mode, w.chapter_label, w.main_quest, w.key_npc, w.key_clues, w.opening_summary, w.play_hook, w.opening_line, w.opening_line_ai_assist,
          (
            select wcm.media_url
            from world_card_media wcm
            where wcm.world_card_id = w.id
              and wcm.media_type = 'image'
            order by wcm.sort_order asc, wcm.created_at asc
            limit 1
          ) as first_image_url,
          coalesce((
            select json_agg(wcm.media_url order by wcm.sort_order asc, wcm.created_at asc)
            from world_card_media wcm
            where wcm.world_card_id = w.id
              and wcm.media_type = 'image'
              and wcm.usage_scene = 'detail'
              and wcm.deleted_at is null
          ), '[]'::json) as media_urls,
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
        order by coalesce(w.updated_at, w.created_at) desc
        limit ${CORE_FEED_LIMIT}`,
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
          p.id, p.author_id, p.post_type, p.title, p.content, p.visibility, p.likes_count, p.comments_count, p.created_at,
          u.nickname as author,
          coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
          p.linked_world_card_id,
          coalesce((
            select json_agg(
              json_build_object(
                'type', pm.media_type,
                'url', pm.media_url,
                'durationSec', pm.duration_sec
              )
              order by pm.sort_order
            )
            from post_media pm
            where pm.post_id = p.id
          ), '[]'::json) as media_items,
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
          and (
            p.visibility in ('public', 'all_users')
            or p.visibility is null
            or (
              p.visibility = 'followers'
              and $1::uuid is not null
              and (
                p.author_id = $1::uuid
                or exists(
                  select 1
                  from user_follows uf
                  where uf.follower_id = $1::uuid
                    and uf.following_id = p.author_id
                    and uf.status = 'active'
                    and uf.deleted_at is null
                )
              )
            )
            or (
              p.visibility = 'private'
              and $1::uuid is not null
              and p.author_id = $1::uuid
            )
          )
        order by p.created_at desc
        limit ${CORE_DYNAMIC_LIMIT}`,
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
        limit ${CORE_COMMUNITY_LIMIT}`,
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
      openingLine: row.opening_line || "",
      openingLineAiAssist: Boolean(row.opening_line_ai_assist),
      playHook: row.play_hook || "",
      firstImageUrl: sanitizeBootstrapUrl(row.first_image_url),
      mediaUrls: normalizeBootstrapMediaUrls(row.media_urls),
      cover: toFeedCoverStyle(row.cover_url),
      coverUrl: sanitizeBootstrapUrl(row.cover_url),
      cardBackground: sanitizeBootstrapUrl(row.cover_url),
      like: Number(row.likes_count || 0).toLocaleString(),
      star: Number(row.favorites_count || 0).toLocaleString(),
      comment: Number(row.comments_count || 0).toLocaleString(),
      heat: `${((Number(row.heat_score || 0) || Number(row.plays_count || 0) / 1000) / 10).toFixed(1)}w`,
      isTest: Boolean(row.is_test),
      liked: Boolean(row.liked_by_me),
      favorited: Boolean(row.favorited_by_me)
    }));
    const dramaStoryImages = worldMediaRes.rows
      .map((r) => sanitizeBootstrapUrl(r.media_url))
      .filter(Boolean);
    const dynamicTabs = ["推荐", "关注", "发现"];
    const dynamicFeed = dynamicRes.rows.map((row, idx) => {
      const mediaItems = normalizeBootstrapMediaItems(row.media_items);
      return {
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
        visibility: String(row.visibility || "public"),
        mediaItems,
        liked: Boolean(row.liked_by_me),
        favorited: Boolean(row.favorited_by_me)
      };
    });
    const authors = await buildAuthorDirectory(
      [
        ...feedData.map((x) => x.authorId),
        ...dynamicRes.rows.map((row) => row.author_id)
      ],
      currentUser?.id || null
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
        cover: toCommunityCoverStyle(row.cover_url),
        maskOpacity: Number.isFinite(Number(row.cover_mask_opacity))
          ? Number(row.cover_mask_opacity)
          : 0.36
      };
    });

    return {
      user: currentUser
        ? {
            id: currentUser.id,
            name: currentUser.nickname,
            handle: currentUser.handle,
            bio: currentUser.bio || "",
            avatarUrl: sanitizeBootstrapUrl(currentUser.avatar_url),
            coverUrl: sanitizeBootstrapUrl(currentUser.cover_url),
            backstageCoverUrl: sanitizeBootstrapUrl(currentUser.backstage_cover_url),
            gender: currentUser.gender || "保密",
            birthday: currentUser.birthday || "",
            backstageMask: currentUser.backstage_mask !== false,
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

  const userIdParam = currentUser?.id || null;
  const feedPromise = query(
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
      w.opening_line,
      w.opening_line_ai_assist,
      (
        select wcm.media_url
        from world_card_media wcm
        where wcm.world_card_id = w.id
          and wcm.media_type = 'image'
        order by wcm.sort_order asc, wcm.created_at asc
        limit 1
      ) as first_image_url,
      coalesce((
        select json_agg(wcm.media_url order by wcm.sort_order asc, wcm.created_at asc)
        from world_card_media wcm
        where wcm.world_card_id = w.id
          and wcm.media_type = 'image'
          and wcm.usage_scene = 'detail'
          and wcm.deleted_at is null
      ), '[]'::json) as media_urls,
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
    order by coalesce(w.updated_at, w.created_at) desc
    limit ${FULL_FEED_LIMIT}`,
    [userIdParam]
  );
  const worldMediaPromise = query(
    `select media_url
     from world_card_media
     where media_type='image'
     order by created_at desc
     limit 24`
  );
  const dynamicPromise = query(
    `select
      p.id,
      p.author_id,
      p.post_type,
      p.title,
      p.content,
      p.visibility,
      p.likes_count,
      p.comments_count,
      p.created_at,
      u.nickname as author,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      p.linked_world_card_id,
      coalesce((
        select json_agg(
          json_build_object(
            'type', pm.media_type,
            'url', pm.media_url,
            'durationSec', pm.duration_sec
          )
          order by pm.sort_order
        )
        from post_media pm
        where pm.post_id = p.id
      ), '[]'::json) as media_items,
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
      and (
        p.visibility in ('public', 'all_users')
        or p.visibility is null
        or (
          p.visibility = 'followers'
          and $1::uuid is not null
          and (
            p.author_id = $1::uuid
            or exists(
              select 1
              from user_follows uf
              where uf.follower_id = $1::uuid
                and uf.following_id = p.author_id
                and uf.status = 'active'
                and uf.deleted_at is null
            )
          )
        )
        or (
          p.visibility = 'private'
          and $1::uuid is not null
          and p.author_id = $1::uuid
        )
      )
    order by p.created_at desc
    limit ${FULL_DYNAMIC_LIMIT}`,
    [userIdParam]
  );
  const communityPromise = query(
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
    limit ${FULL_COMMUNITY_LIMIT}`,
    [userIdParam]
  );
  const communityPostPromise = query(
    `select
      cp.id, cp.community_id, cp.content, cp.likes_count, cp.comments_count, cp.is_featured, cp.created_at, cp.linked_world_card_id,
      u.nickname as user_name,
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
    limit ${FULL_COMMUNITY_POST_LIMIT}`,
    [userIdParam]
  );
  const feedRes = await feedPromise;
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
    openingLine: row.opening_line || "",
    openingLineAiAssist: Boolean(row.opening_line_ai_assist),
    playHook: row.play_hook || "",
    firstImageUrl: sanitizeBootstrapUrl(row.first_image_url),
    mediaUrls: normalizeBootstrapMediaUrls(row.media_urls),
    cover: toFeedCoverStyle(row.cover_url),
    coverUrl: sanitizeBootstrapUrl(row.cover_url),
    cardBackground: sanitizeBootstrapUrl(row.cover_url),
    like: Number(row.likes_count || 0).toLocaleString(),
    star: Number(row.favorites_count || 0).toLocaleString(),
    comment: Number(row.comments_count || 0).toLocaleString(),
    heat: `${((Number(row.heat_score || 0) || Number(row.plays_count || 0) / 1000) / 10).toFixed(1)}w`,
    isTest: Boolean(row.is_test),
    liked: Boolean(row.liked_by_me),
    favorited: Boolean(row.favorited_by_me)
  }));
  const worldMediaRes = await worldMediaPromise;
  const dramaStoryImages = worldMediaRes.rows
    .map((r) => sanitizeBootstrapUrl(r.media_url))
    .filter(Boolean);

  const dynamicRes = await dynamicPromise;
  const dynamicTabs = ["推荐", "关注", "发现"];
  const dynamicFeed = dynamicRes.rows.map((row, idx) => {
    const mediaItems = normalizeBootstrapMediaItems(row.media_items);
    return {
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
      visibility: String(row.visibility || "public"),
      mediaItems,
      liked: Boolean(row.liked_by_me),
      favorited: Boolean(row.favorited_by_me)
    };
  });

  const communityRes = await communityPromise;
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
      cover: toCommunityCoverStyle(row.cover_url),
      maskOpacity: Number.isFinite(Number(row.cover_mask_opacity))
        ? Number(row.cover_mask_opacity)
        : 0.36
    };
  });

  const communityPostRes = await communityPostPromise;
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
      stars: Number(row.favorites_count || 0),
      comments: Number(row.comments_count || 0),
      featured: Boolean(row.is_featured),
      story: row.world_title || undefined,
      storyId: row.linked_world_card_id || undefined,
      mediaUrls: normalizeBootstrapMediaUrls(row.media_urls)
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
            avatarUrl: sanitizeBootstrapUrl(currentUser.avatar_url),
            coverUrl: sanitizeBootstrapUrl(currentUser.cover_url),
            backstageCoverUrl: sanitizeBootstrapUrl(currentUser.backstage_cover_url),
            gender: currentUser.gender || "保密",
            birthday: currentUser.birthday || "",
            backstageMask: currentUser.backstage_mask !== false,
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
  const [
    inboxRes,
    likesRes,
    followsRes,
    commentsRes,
    meWorksRes,
    meLikesRes,
    meFavRes,
    meCreatorCardsRes,
    meStatsRes,
    relationRes,
    coinBillsRes,
    coinTasksRes,
    coinBenefitsRes,
    hotSearchRes,
    searchHistoryRes
  ] = await Promise.all([
    query(
      `select
        c.id,
        c.biz_type,
        case
          when c.biz_type = 'story' then coalesce(
            nullif(c.title, '游戏记录'),
            nullif(c.title, '故事会话'),
            wc_story.title,
            '故事会话'
          )
          when c.conversation_type = 'private' then coalesce(uo.nickname, c.title, '私聊会话')
          else c.title
        end as title,
        cmo.user_id as peer_user_id,
        case
          when c.biz_type = 'story' then coalesce(
            nullif(c.avatar_url, ''),
            nullif(to_jsonb(wc_story)->>'first_image_url', ''),
            nullif(wc_story.cover_url, ''),
            ''
          )
          else coalesce(nullif(uo.avatar_url, ''), nullif(c.avatar_url, ''), '')
        end as peer_avatar_url,
        c.last_message_at,
        coalesce(cm.unread_count, 0) as unread_count,
        coalesce(m.content, '') as preview,
        c.settings_json,
        coalesce(c.settings_json->>'worldCardId', '') as story_world_card_id,
        coalesce(c.settings_json->>'latestSessionId', '') as story_latest_session_id
      from conversation_members cm
      join conversations c on c.id = cm.conversation_id
      left join conversation_members cmo
        on cmo.conversation_id = c.id
       and cmo.user_id <> $1
       and cmo.deleted_at is null
      left join users uo on uo.id = cmo.user_id
      left join world_cards wc_story on wc_story.id::text = nullif(c.settings_json->>'worldCardId', '')
      left join messages m on m.id = c.last_message_id
      where cm.user_id = $1 and cm.deleted_at is null
        and not (
          c.biz_type = 'story'
          and coalesce(c.settings_json->>'worldCardId', '') = ''
        )
      order by coalesce(c.last_message_at, c.updated_at) desc
      limit ${FULL_INBOX_LIMIT}`,
      [currentUser.id]
    ),
    query(
      `select n.id, n.title, n.content, n.created_at, n.target_id, n.target_type, n.is_read, n.extra, wc.cover_url,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name
       from notifications n
       left join users a on a.id = n.actor_id
       left join world_cards wc on wc.id = n.target_id
       where ($1::uuid is null or n.user_id = $1::uuid)
         and n.type in ('post_like', 'post_favorite')
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select n.id, n.content, n.created_at, n.is_read,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name,
              exists(
                select 1
                from user_follows uf
                where uf.follower_id = $1::uuid
                  and uf.following_id = n.actor_id
                  and uf.status = 'active'
              ) as followed_by_me
       from notifications n
       left join users a on a.id = n.actor_id
       where ($1::uuid is null or n.user_id = $1::uuid)
         and n.type = 'new_follow'
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select n.id, n.content, n.created_at, n.target_id, n.target_type, n.is_read, n.extra, wc.cover_url,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name,
              pc.post_id as dynamic_post_id,
              cpc.community_post_id as community_post_id,
              coalesce(pc.parent_comment_id, cpc.parent_comment_id) as parent_comment_id,
              case
                when n.target_type = 'post_comment'
                  then exists(
                    select 1 from post_comment_likes pcl
                    where pcl.comment_id = n.target_id
                      and pcl.user_id = $1::uuid
                  )
                when n.target_type = 'community_post_comment'
                  then exists(
                    select 1 from community_post_comment_likes cpcl
                    where cpcl.comment_id = n.target_id
                      and cpcl.user_id = $1::uuid
                  )
                else false
              end as liked_by_me
       from notifications n
       left join users a on a.id = n.actor_id
       left join world_cards wc on wc.id = n.target_id
       left join post_comments pc on n.target_type = 'post_comment' and pc.id = n.target_id
       left join community_post_comments cpc on n.target_type = 'community_post_comment' and cpc.id = n.target_id
       where ($1::uuid is null or n.user_id = $1::uuid)
         and n.type = 'comment_at'
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_cards w
       left join world_card_stats ws on ws.world_card_id = w.id
       where ($1::uuid is null or w.author_id = $1::uuid) and w.publish_status='published'
       order by coalesce(w.updated_at, w.created_at) desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_card_interactions i
       join world_cards w on w.id = i.world_card_id
       left join world_card_stats ws on ws.world_card_id = w.id
       where ($1::uuid is not null and i.user_id = $1::uuid and i.interaction_type='like')
       order by i.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_card_interactions i
       join world_cards w on w.id = i.world_card_id
       left join world_card_stats ws on ws.world_card_id = w.id
       where ($1::uuid is not null and i.user_id = $1::uuid and i.interaction_type='favorite')
       order by i.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        c.id,
        c.card_mode,
        c.title,
        c.subtitle,
        c.save_status,
        c.publish_status,
        c.published_world_card_id,
        c.updated_at,
        coalesce(w.main_quest, w.summary, '') as world_summary,
        coalesce(w.title, c.title) as world_title,
        coalesce(w.theme, '') as world_theme,
        w.cover_url as world_cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as world_first_image_url,
        coalesce(ws.likes_count, 0) as world_likes_count,
        coalesce(ws.favorites_count, 0) as world_favorites_count,
        coalesce(ws.comments_count, 0) as world_comments_count,
        coalesce(ws.plays_count, 0) as world_plays_count,
        coalesce(ws.heat_score, 0) as world_heat_score
       from creator_cards c
       left join world_cards w on w.id = c.published_world_card_id
       left join world_card_stats ws on ws.world_card_id = c.published_world_card_id
       where ($1::uuid is null or c.author_id = $1::uuid)
         and c.deleted_at is null
       order by c.updated_at desc
       limit 36`,
      [userIdParam]
    ),
    query(
      `select
        coalesce((
          select count(*)
          from creator_cards c
          where c.author_id = $1::uuid
            and c.deleted_at is null
            and c.publish_status = 'published'
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
      [userIdParam]
    ),
    query(
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
      limit 120`,
      [currentUser.id]
    ),
    query(
      `select id, change_amount, created_at, remark, biz_type
       from wallet_ledger
       where ($1::uuid is null or user_id = $1::uuid)
       order by created_at desc
       limit 80`,
      [userIdParam]
    ),
    query(
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
      [userIdParam]
    ),
    query(
      `select id, title, theme
       from world_cards
       where publish_status='published'
       order by created_at desc
       limit 12`
    ),
    query(
      `select title
       from search_documents
       where scope='global' and status='active'
       order by heat_score desc, created_at desc
       limit 40`
    ),
    query(
      `select keyword
       from user_search_history
       where ($1::uuid is null or user_id = $1::uuid)
       order by last_used_at desc
       limit 20`,
      [userIdParam]
    )
  ]);
  inboxRes.rows.forEach((row) => {
    const bizType = row.biz_type;
    const type =
      bizType === "community" || bizType === "group" ? "群聊" :
      bizType === "system" ? "通知" :
      "私聊";
    inbox.push({
      id: row.id,
      type,
      bizType: String(bizType || "").trim() || "dm",
      name: row.title || "会话",
      userId: row.peer_user_id || "",
      avatarUrl: sanitizeBootstrapUrl(row.peer_avatar_url),
      preview: row.preview || "暂无消息",
      time: toClock(row.last_message_at),
      lastMessageAt: row.last_message_at || null,
      badge: Number(row.unread_count || 0),
      worldId: String(row.story_world_card_id || "").trim(),
      sessionId: String(row.story_latest_session_id || "").trim()
    });
  });
  const messageLikes = likesRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    action: row.title || "赞了你的内容",
    note: row.content || "",
    cover: sanitizeBootstrapUrl(row.cover_url || row.extra?.coverUrl || ""),
    worldId: row.extra?.worldId || row.target_id || null,
    targetType: row.target_type || "post",
    targetId: row.target_id || null,
    isRead: Boolean(row.is_read)
  }));

  const messageNewFollows = followsRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    intro: row.content || `${row.actor_name} 开始关注你了`,
    action: row.followed_by_me ? "发私信" : "回关",
    followedByMe: Boolean(row.followed_by_me),
    isRead: Boolean(row.is_read)
  }));

  const messageComments = commentsRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    action: row.extra?.reason === "mention" ? "@了你" : (row.extra?.reason === "comment_reply" ? "回复了你的评论" : "评论了你的笔记"),
    text: row.content || "",
    reply: "",
    cover: sanitizeBootstrapUrl(row.cover_url || row.extra?.coverUrl || ""),
    worldId: row.extra?.worldId || null,
    targetType: row.target_type || "post_comment",
    targetId: row.target_id || null,
    postId: row.extra?.postId || row.dynamic_post_id || row.community_post_id || null,
    parentCommentId: row.parent_comment_id || row.extra?.parentCommentId || null,
    likedByMe: Boolean(row.liked_by_me),
    isRead: Boolean(row.is_read)
  }));

  const meContentLibrary = buildMeContentLibraryPayload({
    creatorRows: meCreatorCardsRes.rows,
    worksRows: meWorksRes.rows,
    likesRows: meLikesRes.rows,
    favoritesRows: meFavRes.rows,
    userName: currentUser?.nickname || "Drama 用户",
    userId: currentUser?.id || ""
  });

  const meStatsRow = meStatsRes.rows[0] || {};
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

  const coinBills = coinBillsRes.rows.map((x) => ({
    id: x.id,
    type: Number(x.change_amount) >= 0 ? "income" : "expense",
    title: x.biz_type || "账单",
    amount: Number(x.change_amount),
    createdAt: x.created_at,
    time: formatTimeText(x.created_at),
    desc: x.remark || ""
  }));

  const coinTasks = coinTasksRes.rows.map((x) => ({
    id: x.id,
    title: x.title,
    reward: Number(x.reward_amount),
    progress: `${x.progress}/${x.target}`,
    done: x.status === "done"
  }));

  const coinBenefits = coinBenefitsRes.rows.map((x, idx) => ({
    id: x.id,
    title: x.title,
    price: 120 + idx * 80,
    tag: x.theme || "热门",
    desc: "可兑换推荐位与创作权益"
  }));

  const hotSearchTerms = hotSearchRes.rows.map((x) => x.title).filter(Boolean);
  const defaultSearchHistory = searchHistoryRes.rows.map((x) => x.keyword).filter(Boolean);
  const authors = await buildAuthorDirectory(
    [
      ...feedData.map((x) => x.authorId),
      ...dynamicRes.rows.map((row) => row.author_id),
      ...inboxRes.rows.map((row) => row.peer_user_id),
      ...likesRes.rows.map((row) => row.actor_id),
      ...followsRes.rows.map((row) => row.actor_id),
      ...relationRes.rows.map((row) => row.id)
    ],
    currentUser?.id || null
  );

  return {
    user: currentUser
      ? {
          id: currentUser.id,
          name: currentUser.nickname,
          handle: currentUser.handle,
          bio: currentUser.bio || "",
          avatarUrl: sanitizeBootstrapUrl(currentUser.avatar_url),
          coverUrl: sanitizeBootstrapUrl(currentUser.cover_url),
          backstageCoverUrl: sanitizeBootstrapUrl(currentUser.backstage_cover_url),
          gender: currentUser.gender || "保密",
          birthday: currentUser.birthday || "",
          backstageMask: currentUser.backstage_mask !== false,
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

function emptyMessagesPayload() {
  return {
    inbox: [],
    likes: [],
    follows: [],
    comments: [],
    threads: {}
  };
}

function emptyMePayload() {
  return {
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
  };
}

function emptySearchPayload() {
  return {
    hotTerms: [],
    history: []
  };
}

function pickHomeSection(payload = {}) {
  return {
    user: payload?.user || null,
    feedData: Array.isArray(payload?.feedData) ? payload.feedData : [],
    authors: payload?.authors && typeof payload.authors === "object" ? payload.authors : {},
    dramaStoryImages: Array.isArray(payload?.dramaStoryImages) ? payload.dramaStoryImages : [],
    communityList: Array.isArray(payload?.communityList) ? payload.communityList : [],
    communityPosts: payload?.communityPosts && typeof payload.communityPosts === "object" ? payload.communityPosts : {},
    search: payload?.search && typeof payload.search === "object"
      ? {
          hotTerms: Array.isArray(payload.search.hotTerms) ? payload.search.hotTerms : [],
          history: Array.isArray(payload.search.history) ? payload.search.history : []
        }
      : emptySearchPayload()
  };
}

export async function getBootstrapHomeSectionPayload(userId = null) {
  const corePayload = await getBootstrapPayload(userId, "core");
  return pickHomeSection(corePayload);
}

export async function getBootstrapDynamicSectionPayload(userId = null) {
  const corePayload = await getBootstrapPayload(userId, "core");
  return {
    dynamicFeed: Array.isArray(corePayload?.dynamicFeed) ? corePayload.dynamicFeed : []
  };
}

export async function getBootstrapMessagesSectionPayload(userId = null) {
  const id = String(userId || "").trim();
  if (!id) return { messages: emptyMessagesPayload() };
  const currentUser = await getBootstrapCurrentUser(id);
  if (!currentUser) return { user: null, messages: emptyMessagesPayload() };
  const userIdParam = currentUser.id;
  const [inboxRes, likesRes, followsRes, commentsRes] = await Promise.all([
    query(
      `select
        c.id,
        c.biz_type,
        case
          when c.biz_type = 'story' then coalesce(
            nullif(c.title, '游戏记录'),
            nullif(c.title, '故事会话'),
            wc_story.title,
            '故事会话'
          )
          when c.conversation_type = 'private' then coalesce(uo.nickname, c.title, '私聊会话')
          else c.title
        end as title,
        cmo.user_id as peer_user_id,
        case
          when c.biz_type = 'story' then coalesce(
            nullif(c.avatar_url, ''),
            nullif(to_jsonb(wc_story)->>'first_image_url', ''),
            nullif(wc_story.cover_url, ''),
            ''
          )
          else coalesce(nullif(uo.avatar_url, ''), nullif(c.avatar_url, ''), '')
        end as peer_avatar_url,
        c.last_message_at,
        coalesce(cm.unread_count, 0) as unread_count,
        coalesce(m.content, '') as preview,
        c.settings_json,
        coalesce(c.settings_json->>'worldCardId', '') as story_world_card_id,
        coalesce(c.settings_json->>'latestSessionId', '') as story_latest_session_id
      from conversation_members cm
      join conversations c on c.id = cm.conversation_id
      left join conversation_members cmo
        on cmo.conversation_id = c.id
       and cmo.user_id <> $1
       and cmo.deleted_at is null
      left join users uo on uo.id = cmo.user_id
      left join world_cards wc_story on wc_story.id::text = nullif(c.settings_json->>'worldCardId', '')
      left join messages m on m.id = c.last_message_id
      where cm.user_id = $1 and cm.deleted_at is null
        and not (
          c.biz_type = 'story'
          and coalesce(c.settings_json->>'worldCardId', '') = ''
        )
      order by coalesce(c.last_message_at, c.updated_at) desc
      limit ${FULL_INBOX_LIMIT}`,
      [userIdParam]
    ),
    query(
      `select n.id, n.title, n.content, n.created_at, n.target_id, n.target_type, n.is_read, n.extra, wc.cover_url,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name
       from notifications n
       left join users a on a.id = n.actor_id
       left join world_cards wc on wc.id = n.target_id
       where n.user_id = $1::uuid
         and n.type in ('post_like', 'post_favorite')
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select n.id, n.content, n.created_at, n.is_read,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name,
              exists(
                select 1
                from user_follows uf
                where uf.follower_id = $1::uuid
                  and uf.following_id = n.actor_id
                  and uf.status = 'active'
              ) as followed_by_me
       from notifications n
       left join users a on a.id = n.actor_id
       where n.user_id = $1::uuid
         and n.type = 'new_follow'
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select n.id, n.content, n.created_at, n.target_id, n.target_type, n.is_read, n.extra, wc.cover_url,
              a.id as actor_id,
              coalesce(a.avatar_url, '') as actor_avatar_url,
              coalesce(a.nickname, '玩家') as actor_name,
              pc.post_id as dynamic_post_id,
              cpc.community_post_id as community_post_id,
              coalesce(pc.parent_comment_id, cpc.parent_comment_id) as parent_comment_id,
              case
                when n.target_type = 'post_comment'
                  then exists(
                    select 1 from post_comment_likes pcl
                    where pcl.comment_id = n.target_id
                      and pcl.user_id = $1::uuid
                  )
                when n.target_type = 'community_post_comment'
                  then exists(
                    select 1 from community_post_comment_likes cpcl
                    where cpcl.comment_id = n.target_id
                      and cpcl.user_id = $1::uuid
                  )
                else false
              end as liked_by_me
       from notifications n
       left join users a on a.id = n.actor_id
       left join world_cards wc on wc.id = n.target_id
       left join post_comments pc on n.target_type = 'post_comment' and pc.id = n.target_id
       left join community_post_comments cpc on n.target_type = 'community_post_comment' and cpc.id = n.target_id
       where n.user_id = $1::uuid
         and n.type = 'comment_at'
       order by n.created_at desc
       limit 24`,
      [userIdParam]
    )
  ]);

  const inbox = [];
  inboxRes.rows.forEach((row) => {
    const bizType = row.biz_type;
    const type =
      bizType === "community" || bizType === "group" ? "群聊" :
      bizType === "system" ? "通知" :
      "私聊";
    inbox.push({
      id: row.id,
      type,
      bizType: String(bizType || "").trim() || "dm",
      name: row.title || "会话",
      userId: row.peer_user_id || "",
      avatarUrl: sanitizeBootstrapUrl(row.peer_avatar_url),
      preview: row.preview || "暂无消息",
      time: toClock(row.last_message_at),
      lastMessageAt: row.last_message_at || null,
      badge: Number(row.unread_count || 0),
      worldId: String(row.story_world_card_id || "").trim(),
      sessionId: String(row.story_latest_session_id || "").trim()
    });
  });
  const messageLikes = likesRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    action: row.title || "赞了你的内容",
    note: row.content || "",
    cover: sanitizeBootstrapUrl(row.cover_url || row.extra?.coverUrl || ""),
    worldId: row.extra?.worldId || row.target_id || null,
    targetType: row.target_type || "post",
    targetId: row.target_id || null,
    isRead: Boolean(row.is_read)
  }));

  const messageNewFollows = followsRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    intro: row.content || `${row.actor_name} 开始关注你了`,
    action: row.followed_by_me ? "发私信" : "回关",
    followedByMe: Boolean(row.followed_by_me),
    isRead: Boolean(row.is_read)
  }));

  const messageComments = commentsRes.rows.map((row) => ({
    id: row.id,
    userId: row.actor_id || "",
    user: row.actor_name,
    avatarUrl: sanitizeBootstrapUrl(row.actor_avatar_url),
    date: toClock(row.created_at),
    action: row.extra?.reason === "mention" ? "@了你" : (row.extra?.reason === "comment_reply" ? "回复了你的评论" : "评论了你的笔记"),
    text: row.content || "",
    reply: "",
    cover: sanitizeBootstrapUrl(row.cover_url || row.extra?.coverUrl || ""),
    worldId: row.extra?.worldId || null,
    targetType: row.target_type || "post_comment",
    targetId: row.target_id || null,
    postId: row.extra?.postId || row.dynamic_post_id || row.community_post_id || null,
    parentCommentId: row.parent_comment_id || row.extra?.parentCommentId || null,
    likedByMe: Boolean(row.liked_by_me),
    isRead: Boolean(row.is_read)
  }));

  return {
    user: mapBootstrapUser(currentUser),
    messages: {
      inbox,
      likes: messageLikes,
      follows: messageNewFollows,
      comments: messageComments,
      threads: {}
    }
  };
}

export async function getBootstrapMeSectionPayload(userId = null) {
  const id = String(userId || "").trim();
  if (!id) {
    return {
      user: null,
      me: emptyMePayload(),
      search: emptySearchPayload()
    };
  }
  const currentUser = await getBootstrapCurrentUser(id);
  if (!currentUser) {
    return {
      user: null,
      me: emptyMePayload(),
      search: emptySearchPayload()
    };
  }
  const userIdParam = currentUser.id;
  const [
    meWorksRes,
    meLikesRes,
    meFavRes,
    meCreatorCardsRes,
    meStatsRes,
    relationRes,
    coinBillsRes,
    coinTasksRes,
    coinBenefitsRes,
    hotSearchRes,
    searchHistoryRes
  ] = await Promise.all([
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_cards w
       left join world_card_stats ws on ws.world_card_id = w.id
       where w.author_id = $1::uuid and w.publish_status='published'
       order by coalesce(w.updated_at, w.created_at) desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_card_interactions i
       join world_cards w on w.id = i.world_card_id
       left join world_card_stats ws on ws.world_card_id = w.id
       where i.user_id = $1::uuid and i.interaction_type='like'
       order by i.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        w.id,
        w.title,
        coalesce(w.theme, '主题') as theme,
        coalesce(ws.likes_count, 0) as likes,
        coalesce(ws.favorites_count, 0) as favorites,
        coalesce(ws.comments_count, 0) as comments_count,
        coalesce(ws.plays_count, 0) as plays_count,
        coalesce(ws.heat_score, 0) as heat_score,
        w.cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as first_image_url
       from world_card_interactions i
       join world_cards w on w.id = i.world_card_id
       left join world_card_stats ws on ws.world_card_id = w.id
       where i.user_id = $1::uuid and i.interaction_type='favorite'
       order by i.created_at desc
       limit 24`,
      [userIdParam]
    ),
    query(
      `select
        c.id,
        c.card_mode,
        c.title,
        c.subtitle,
        c.save_status,
        c.publish_status,
        c.published_world_card_id,
        c.updated_at,
        coalesce(w.main_quest, w.summary, '') as world_summary,
        coalesce(w.title, c.title) as world_title,
        coalesce(w.theme, '') as world_theme,
        w.cover_url as world_cover_url,
        (
          select wcm.media_url
          from world_card_media wcm
          where wcm.world_card_id = w.id
            and wcm.media_type = 'image'
          order by wcm.sort_order asc, wcm.created_at asc
          limit 1
        ) as world_first_image_url,
        coalesce(ws.likes_count, 0) as world_likes_count,
        coalesce(ws.favorites_count, 0) as world_favorites_count,
        coalesce(ws.comments_count, 0) as world_comments_count,
        coalesce(ws.plays_count, 0) as world_plays_count,
        coalesce(ws.heat_score, 0) as world_heat_score
       from creator_cards c
       left join world_cards w on w.id = c.published_world_card_id
       left join world_card_stats ws on ws.world_card_id = c.published_world_card_id
       where c.author_id = $1::uuid
         and c.deleted_at is null
       order by c.updated_at desc
       limit 36`,
      [userIdParam]
    ),
    query(
      `select
        coalesce((
          select count(*)
          from creator_cards c
          where c.author_id = $1::uuid
            and c.deleted_at is null
            and c.publish_status = 'published'
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
      [userIdParam]
    ),
    query(
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
      limit 120`,
      [userIdParam]
    ),
    query(
      `select id, change_amount, created_at, remark, biz_type
       from wallet_ledger
       where user_id = $1::uuid
       order by created_at desc
       limit 80`,
      [userIdParam]
    ),
    query(
      `select
        t.id,
        t.title,
        t.reward_amount,
        coalesce(p.progress, 0) as progress,
        coalesce(p.target, 1) as target,
        coalesce(p.status, 'ongoing') as status
       from coin_tasks t
       left join user_coin_task_progress p
         on p.task_id = t.id and p.user_id = $1::uuid
       where t.is_active = true
       order by t.created_at asc
       limit 40`,
      [userIdParam]
    ),
    query(
      `select id, title, theme
       from world_cards
       where publish_status='published'
       order by created_at desc
       limit 12`
    ),
    query(
      `select title
       from search_documents
       where scope='global' and status='active'
       order by heat_score desc, created_at desc
       limit 40`
    ),
    query(
      `select keyword
       from user_search_history
       where user_id = $1::uuid
       order by last_used_at desc
       limit 20`,
      [userIdParam]
    )
  ]);

  const meContentLibrary = buildMeContentLibraryPayload({
    creatorRows: meCreatorCardsRes.rows,
    worksRows: meWorksRes.rows,
    likesRows: meLikesRes.rows,
    favoritesRows: meFavRes.rows,
    userName: currentUser?.nickname || "Drama 用户",
    userId: currentUser?.id || ""
  });

  const meStatsRow = meStatsRes.rows[0] || {};
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

  const coinBills = coinBillsRes.rows.map((x) => ({
    id: x.id,
    type: Number(x.change_amount) >= 0 ? "income" : "expense",
    title: x.biz_type || "账单",
    amount: Number(x.change_amount),
    createdAt: x.created_at,
    time: formatTimeText(x.created_at),
    desc: x.remark || ""
  }));

  const coinTasks = coinTasksRes.rows.map((x) => ({
    id: x.id,
    title: x.title,
    reward: Number(x.reward_amount),
    progress: `${x.progress}/${x.target}`,
    done: x.status === "done"
  }));

  const coinBenefits = coinBenefitsRes.rows.map((x, idx) => ({
    id: x.id,
    title: x.title,
    price: 120 + idx * 80,
    tag: x.theme || "热门",
    desc: "可兑换推荐位与创作权益"
  }));

  const hotSearchTerms = hotSearchRes.rows.map((x) => x.title).filter(Boolean);
  const defaultSearchHistory = searchHistoryRes.rows.map((x) => x.keyword).filter(Boolean);

  return {
    user: mapBootstrapUser(currentUser),
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
