import { query, closePool } from "../db/client.js";

function pick(arr, i) {
  return arr[i % arr.length];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LAST_NAMES = ["林", "顾", "沈", "陆", "程", "周", "陈", "苏", "许", "白", "唐", "闻", "江", "乔", "宋", "季", "韩", "谢", "温", "叶"];
const FIRST_NAMES = ["雾", "序", "青", "宁", "舟", "溪", "禾", "昭", "岚", "屿", "念", "予", "然", "祁", "昭", "晚", "澜", "越", "澈", "言"];
const THEMES = ["现言", "女性成长", "脑洞", "奇幻", "逆袭", "治愈", "悬疑", "都市", "校园", "复仇"];
const FORMATS = ["短剧", "漫剧", "剧情向", "轻小说", "互动小说", "语音剧", "图文流", "纪实风", "悬疑线", "成长线"];
const SETTINGS = ["打脸虐渣", "大男主", "大女主", "系统加成", "双强", "群像", "重生", "穿越", "权谋", "养成"];
const BACKGROUNDS = ["现代", "都市", "古代", "乡村", "近未来", "架空世界", "校园", "职场", "宗门", "末日"];
const RECOMMENDS = ["最新上架", "最高热度", "最高收藏", "高完局率", "编辑精选", "剧情反转", "高口碑", "新锐作者", "冷门宝藏", "适合新手"];
const TIME_TAGS = ["7天内上新", "14天内上新", "30天内上新", "近3个月", "近半年", "今年", "去年", "2024", "2023", "更早"];
const AVATARS = Array.from({ length: 120 }).map((_, i) => `https://i.pravatar.cc/300?img=${(i % 70) + 1}`);
const COVERS = Array.from({ length: 200 }).map((_, i) => `https://picsum.photos/seed/drama-world-${i + 1}/1200/1600`);
const COMMUNITY_COVERS = Array.from({ length: 120 }).map((_, i) => `https://picsum.photos/seed/drama-community-${i + 1}/1600/900`);

async function resetAll() {
  await query(`
    truncate table
      user_coin_task_progress,
      coin_tasks,
      wallet_ledger,
      wallet_accounts,
      notifications,
      message_reactions,
      message_attachments,
      messages,
      conversation_members,
      conversations,
      community_member_actions,
      community_transfer_requests,
      community_blacklist,
      community_announcements,
      community_post_reactions,
      community_post_comments,
      community_post_media,
      community_posts,
      community_join_requests,
      community_members,
      communities,
      post_reactions,
      post_comments,
      post_media,
      posts,
      game_turns,
      game_sessions,
      world_card_rank_items,
      world_card_rank_snapshots,
      world_card_comments,
      world_card_reservations,
      world_card_interactions,
      world_card_stats,
      world_card_media,
      world_card_characters,
      world_card_tags,
      world_card_versions,
      creator_card_assets,
      creator_card_versions,
      creator_cards,
      world_cards,
      user_follows,
      user_settings,
      user_profiles,
      user_sessions,
      user_auth_providers,
      user_search_history,
      search_logs,
      search_documents,
      event_logs,
      analytics_daily_user_metrics,
      analytics_daily_world_metrics,
      analytics_daily_community_metrics,
      analytics_daily_message_metrics,
      analytics_daily_search_metrics,
      analytics_daily_creator_metrics,
      analytics_daily_user_relation_metrics,
      analytics_daily_funnel_metrics,
      users
    restart identity cascade
  `);
}

async function seedUsers(count = 60) {
  const users = [];
  for (let i = 0; i < count; i += 1) {
    const nickname = `${pick(LAST_NAMES, i)}${pick(FIRST_NAMES, i)}${i % 2 === 0 ? "" : pick(FIRST_NAMES, i + 3)}`;
    const email = `user${i + 1}@drama.app`;
    const phone = `139${String(10000000 + i).slice(-8)}`;
    const bio = `偏爱${pick(THEMES, i)}与${pick(SETTINGS, i + 3)}，常驻 Drama 创作与互动。`;
    const result = await query(
      `insert into users(email, phone, password_hash, nickname, avatar_url, bio, status)
       values ($1, $2, $3, $4, $5, $6, 'active')
       returning id, nickname, avatar_url`,
      [email, phone, "seed_password_hash", nickname, pick(AVATARS, i), bio]
    );
    const user = result.rows[0];
    users.push(user);
    await query(
      `insert into user_profiles(user_id, cover_url, theme_preference, font_size, extra)
       values ($1, $2, 'default', 'normal', $3::jsonb)`,
      [user.id, `https://picsum.photos/seed/profile-cover-${i + 1}/1600/600`, JSON.stringify({ handle: `@user_${i + 1}` })]
    );
    await query(`insert into user_settings(user_id) values ($1)`, [user.id]);
    await query(`insert into wallet_accounts(user_id, balance, frozen_balance) values ($1, $2, 0)`, [user.id, randomInt(200, 20000)]);
  }
  return users;
}

async function seedFollows(users) {
  for (let i = 0; i < users.length; i += 1) {
    const follower = users[i];
    for (let j = 1; j <= 8; j += 1) {
      const following = users[(i + j * 2) % users.length];
      if (follower.id === following.id) continue;
      await query(
        `insert into user_follows(follower_id, following_id, muted, status)
         values ($1, $2, false, 'active')
         on conflict (follower_id, following_id) do nothing`,
        [follower.id, following.id]
      );
    }
  }
}

async function seedWorldCards(users, count = 80) {
  const cards = [];
  for (let i = 0; i < count; i += 1) {
    const title = `${pick(["夜港档案", "冷焰回路", "玻璃列车", "长夜回声", "逆风告白", "临界航线", "灰塔协议", "北城迷局"], i)} · 第${(i % 16) + 1}章`;
    const summary = `你将进入${pick(THEMES, i)}主线，在${pick(BACKGROUNDS, i + 2)}背景下完成高压博弈。`;
    const overview = `这是一个可持续推进的互动故事：每回合都需要在信息、关系、风险之间做权衡。你将围绕“${pick(SETTINGS, i)}”逐步改写结局。`;
    const author = users[i % users.length];
    const result = await query(
      `insert into world_cards(
        author_id, title, subtitle, cover_url, summary, overview,
        format, theme, setting, background, recommend_tag, time_tag,
        rules_json, publish_status, is_test, visibility
      ) values (
        $1,$2,$3,$4,$5,$6,
        $7,$8,$9,$10,$11,$12,
        '[]'::jsonb,'published',false,'public'
      ) returning id, title, cover_url, author_id, format, theme, setting, background, recommend_tag, time_tag`,
      [
        author.id,
        title,
        `${pick(THEMES, i)} · ${pick(SETTINGS, i + 1)}`,
        pick(COVERS, i),
        summary,
        overview,
        pick(FORMATS, i),
        pick(THEMES, i + 1),
        pick(SETTINGS, i + 2),
        pick(BACKGROUNDS, i + 3),
        pick(RECOMMENDS, i + 4),
        pick(TIME_TAGS, i + 5)
      ]
    );
    const card = result.rows[0];
    cards.push(card);

    await query(
      `insert into world_card_stats(world_card_id, likes_count, favorites_count, comments_count, plays_count, followers_count, heat_score)
       values ($1,$2,$3,$4,$5,$6,$7)`,
      [card.id, randomInt(800, 18000), randomInt(200, 7000), randomInt(50, 1800), randomInt(500, 24000), randomInt(100, 9000), randomInt(60, 98)]
    );

    for (let k = 0; k < 3; k += 1) {
      await query(
        `insert into world_card_tags(world_card_id, tag) values ($1, $2) on conflict do nothing`,
        [card.id, pick(THEMES, i + k)]
      );
    }
    for (let k = 0; k < 5; k += 1) {
      await query(
        `insert into world_card_characters(world_card_id, name, role_title, description, keywords, avatar_url, sort_order)
         values ($1,$2,$3,$4,$5::text[],$6,$7)`,
        [
          card.id,
          `${pick(LAST_NAMES, i + k)}${pick(FIRST_NAMES, i + k + 1)}`,
          pick(["关键调查员", "同盟者", "反派核心", "线人", "守门人"], k),
          `角色在故事中承担${pick(["推进主线", "制造反转", "提供关键线索", "关系试炼"], i + k)}职责。`,
          [pick(THEMES, i + k), pick(SETTINGS, i + k + 1)],
          pick(AVATARS, i + k + 7),
          k
        ]
      );
    }
    for (let k = 0; k < 3; k += 1) {
      await query(
        `insert into world_card_media(world_card_id, media_type, media_url, thumb_url, width, height, usage_scene, sort_order)
         values ($1, 'image', $2, $2, 1200, 1600, $3, $4)`,
        [card.id, pick(COVERS, i * 3 + k), k === 0 ? "detail" : k === 1 ? "drama_banner" : "play_scene", k]
      );
    }
  }
  return cards;
}

async function seedCreatorCards(users, worldCards, count = 50) {
  const modes = ["long_narrative", "short_narrative", "virtual_character"];
  for (let i = 0; i < count; i += 1) {
    const mode = pick(modes, i);
    const author = users[(i * 3) % users.length];
    const world = worldCards[i % worldCards.length];
    const result = await query(
      `insert into creator_cards(author_id, card_mode, title, subtitle, content_json, prompt_context_json, save_status, publish_status, published_world_card_id)
       values ($1,$2,$3,$4,$5::jsonb,$6::jsonb,'saved','published',$7)
       returning id`,
      [
        author.id,
        mode,
        `${world.title} · 创作稿`,
        pick(["结构版", "人物版", "任务版"], i),
        JSON.stringify({ chapter: randomInt(1, 20), hooks: [pick(THEMES, i), pick(SETTINGS, i)] }),
        JSON.stringify({ mode, author: author.nickname }),
        world.id
      ]
    );
    const creatorId = result.rows[0].id;
    await query(
      `insert into creator_card_versions(creator_card_id, version_no, content_json, change_note, created_by)
       values ($1,1,$2::jsonb,'initial', $3)`,
      [creatorId, JSON.stringify({ draft: true }), author.id]
    );
    await query(
      `insert into creator_card_assets(creator_card_id, asset_type, asset_url, preview_url, meta, sort_order)
       values ($1,'image',$2,$2,$3::jsonb,0)`,
      [creatorId, pick(COVERS, i + 30), JSON.stringify({ source: "seed" })]
    );
  }
}

async function seedCommunities(users, worldCards, count = 50) {
  const communities = [];
  for (let i = 0; i < count; i += 1) {
    const owner = users[i % users.length];
    const name = `${pick(["夜港", "霓虹", "灰塔", "北境", "长夜", "镜城", "星雾", "冷焰"], i)}${pick(["剧社", "研究会", "同盟", "俱乐部", "观察组"], i + 1)}`;
    const memberCount = randomInt(180, 28000);
    const result = await query(
      `insert into communities(
        owner_id, name, description, cover_url, cover_mask_opacity, join_mode, status,
        member_count, post_count, last_active_at, theme, gender_focus, region, tags, latest_post_at
      ) values (
        $1,$2,$3,$4,0.36,'public','active',
        $5,0,now() - ($6 || ' hours')::interval, $7, $8, $9, $10::text[], now() - ($11 || ' hours')::interval
      ) returning id, name, owner_id, member_count`,
      [
        owner.id,
        name,
        `聚焦${pick(THEMES, i)}与${pick(SETTINGS, i + 2)}，定期发起共创任务与复盘活动。`,
        pick(COMMUNITY_COVERS, i),
        memberCount,
        randomInt(1, 240),
        pick(THEMES, i + 3),
        pick(["男频", "女频", "不限频向"], i),
        pick(["上海", "北京", "深圳", "成都", "杭州", "广州"], i),
        [pick(THEMES, i), pick(SETTINGS, i + 1), pick(BACKGROUNDS, i + 2)],
        randomInt(1, 120)
      ]
    );
    const community = result.rows[0];
    communities.push(community);

    await query(
      `insert into community_members(community_id, user_id, role, status)
       values ($1,$2,'owner','active') on conflict do nothing`,
      [community.id, owner.id]
    );
    for (let j = 1; j <= 20; j += 1) {
      const member = users[(i * 7 + j) % users.length];
      await query(
        `insert into community_members(community_id, user_id, role, status, joined_at)
         values ($1,$2,$3,'active', now() - ($4 || ' days')::interval)
         on conflict do nothing`,
        [community.id, member.id, j % 9 === 0 ? "admin" : "member", randomInt(1, 120)]
      );
    }
    await query(
      `insert into community_announcements(community_id, author_id, content, is_pinned)
       values ($1,$2,$3,true)`,
      [community.id, owner.id, `欢迎来到 ${name}，请先阅读群规并完成新人自我介绍。`]
    );
    for (let b = 0; b < 2; b += 1) {
      const u = users[(i * 5 + b + 11) % users.length];
      await query(
        `insert into community_blacklist(community_id, user_id, operator_id, reason)
         values ($1,$2,$3,$4) on conflict do nothing`,
        [community.id, u.id, owner.id, pick(["广告刷屏", "恶意引战", "辱骂他人"], b)]
      );
    }
    await query(
      `insert into community_transfer_requests(community_id, from_user_id, to_user_id, transfer_code_hash, status, expires_at)
       values ($1,$2,$3,$4,'pending', now() + interval '7 day')`,
      [community.id, owner.id, users[(i + 3) % users.length].id, `code_hash_${i}`]
    );
  }

  for (let i = 0; i < communities.length; i += 1) {
    const community = communities[i];
    for (let p = 0; p < 14; p += 1) {
      const author = users[(i * 3 + p) % users.length];
      const linked = worldCards[(i * 5 + p) % worldCards.length];
      const postRes = await query(
        `insert into community_posts(
          community_id, author_id, content, linked_world_card_id, post_type, visibility, likes_count, comments_count, shares_count, is_featured, status
        ) values (
          $1,$2,$3,$4,$5,'public',$6,$7,$8,$9,'published'
        ) returning id`,
        [
          community.id,
          author.id,
          `【${community.name}】第${p + 1}条动态：围绕“${linked.title}”做了一次高压路线测试，结论是先稳线索再冲突会更稳。`,
          linked.id,
          p % 4 === 0 ? "story_card" : p % 3 === 0 ? "video" : "text",
          randomInt(40, 5000),
          randomInt(5, 600),
          randomInt(3, 280),
          p % 5 === 0
        ]
      );
      const postId = postRes.rows[0].id;
      await query(
        `insert into community_post_media(community_post_id, media_type, media_url, width, height, sort_order)
         values ($1,'image',$2,1200,900,0)`,
        [postId, pick(COMMUNITY_COVERS, i * 14 + p)]
      );
    }
    await query(`update communities set post_count = (select count(*) from community_posts where community_id = $1) where id = $1`, [community.id]);
  }

  return communities;
}

async function seedPosts(users, worldCards, count = 220) {
  for (let i = 0; i < count; i += 1) {
    const author = users[(i * 11) % users.length];
    const linked = worldCards[(i * 7) % worldCards.length];
    const postType = i % 6 === 0 ? "video" : i % 4 === 0 ? "story_card" : i % 3 === 0 ? "text" : "image";
    const res = await query(
      `insert into posts(
        author_id, post_type, title, content, visibility, linked_world_card_id, status,
        likes_count, favorites_count, comments_count, shares_count
      ) values (
        $1,$2,$3,$4,'public',$5,'published',$6,$7,$8,$9
      ) returning id`,
      [
        author.id,
        postType,
        `${pick(["今日开刷", "剧情反转", "角色复盘", "高能节点", "创作手记"], i)} · ${linked.title}`,
        `围绕《${linked.title}》做了深度体验：第${(i % 9) + 1}回合的分支非常关键，建议先做信息校验再做高风险动作。`,
        linked.id,
        randomInt(80, 16000),
        randomInt(20, 6000),
        randomInt(5, 1200),
        randomInt(2, 400)
      ]
    );
    if (postType === "image" || postType === "video") {
      await query(
        `insert into post_media(post_id, media_type, media_url, width, height, duration_sec, sort_order)
         values ($1,$2,$3,1200,1600,$4,0)`,
        [res.rows[0].id, postType === "video" ? "video" : "image", pick(COVERS, i + 70), postType === "video" ? randomInt(12, 80) : null]
      );
    }
  }
}

async function seedMessages(users, communities) {
  const conversations = [];
  for (let i = 0; i < 70; i += 1) {
    const a = users[i % users.length];
    const b = users[(i * 3 + 9) % users.length];
    const conv = await query(
      `insert into conversations(conversation_type, title, avatar_url, created_by, biz_type, settings_json, is_archived)
       values ('private', $1, $2, $3, 'dm', '{}'::jsonb, false)
       returning id`,
      [`${a.nickname} 与 ${b.nickname}`, pick(AVATARS, i + 20), a.id]
    );
    const id = conv.rows[0].id;
    conversations.push(id);
    await query(`insert into conversation_members(conversation_id, user_id, role, unread_count) values ($1,$2,'member',$3)`, [id, a.id, randomInt(0, 5)]);
    await query(`insert into conversation_members(conversation_id, user_id, role, unread_count) values ($1,$2,'member',$3)`, [id, b.id, randomInt(0, 5)]);
    for (let m = 0; m < 16; m += 1) {
      const sender = m % 2 === 0 ? a.id : b.id;
      const msg = await query(
        `insert into messages(conversation_id, sender_id, message_type, content, payload, status, client_message_id)
         values ($1,$2,'text',$3,'{}'::jsonb,'sent',$4)
         returning id, created_at`,
        [id, sender, `第${m + 1}条对话：先稳线索，再推进冲突。`, `${id}_${m + 1}`]
      );
      if (m === 15) {
        await query(`update conversations set last_message_id=$2, last_message_at=$3 where id=$1`, [id, msg.rows[0].id, msg.rows[0].created_at]);
      }
    }
  }

  for (let i = 0; i < 24; i += 1) {
    const owner = users[(i * 4) % users.length];
    const community = communities[i % communities.length];
    const conv = await query(
      `insert into conversations(conversation_type, title, avatar_url, community_id, created_by, biz_type, settings_json, is_archived)
       values ('group', $1, $2, $3, $4, 'community', '{}'::jsonb, false)
       returning id`,
      [`${community.name} 群聊`, pick(COMMUNITY_COVERS, i), community.id, owner.id]
    );
    const id = conv.rows[0].id;
    await query(`insert into conversation_members(conversation_id, user_id, role, unread_count) values ($1,$2,'owner',$3)`, [id, owner.id, randomInt(0, 2)]);
    for (let k = 1; k <= 18; k += 1) {
      const member = users[(i * 9 + k) % users.length];
      await query(
        `insert into conversation_members(conversation_id, user_id, role, unread_count)
         values ($1,$2,'member',$3) on conflict do nothing`,
        [id, member.id, randomInt(0, 4)]
      );
    }
    for (let m = 0; m < 22; m += 1) {
      const sender = users[(i * 13 + m) % users.length];
      const msg = await query(
        `insert into messages(conversation_id, sender_id, message_type, content, payload, status, client_message_id)
         values ($1,$2,$3,$4,'{}'::jsonb,'sent',$5)
         returning id, created_at`,
        [id, sender.id, m % 6 === 0 ? "card" : "text", m % 6 === 0 ? "分享了一张故事卡" : `群聊消息 ${m + 1}：今晚8点跑图。`, `${id}_${m + 1}`]
      );
      if (m === 21) {
        await query(`update conversations set last_message_id=$2, last_message_at=$3 where id=$1`, [id, msg.rows[0].id, msg.rows[0].created_at]);
      }
    }
  }
}

async function seedNotifications(users, worldCards) {
  const types = ["post_like", "post_favorite", "new_follow", "comment_at", "system", "community"];
  for (let i = 0; i < 400; i += 1) {
    const user = users[i % users.length];
    const actor = users[(i * 7 + 3) % users.length];
    const world = worldCards[i % worldCards.length];
    const type = pick(types, i);
    await query(
      `insert into notifications(user_id, type, title, content, actor_id, target_type, target_id, is_read, read_at, action_url, extra)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11::jsonb)`,
      [
        user.id,
        type,
        type === "new_follow" ? "新增关注" : type === "comment_at" ? "收到评论和@" : "互动提醒",
        type === "new_follow"
          ? `${actor.nickname} 关注了你`
          : type === "comment_at"
            ? `${actor.nickname} 评论了你的动态`
            : `${actor.nickname} 互动了《${world.title}》`,
        actor.id,
        "world_card",
        world.id,
        i % 3 === 0,
        i % 3 === 0 ? new Date().toISOString() : null,
        "#/messages/chat",
        JSON.stringify({ worldTitle: world.title })
      ]
    );
  }
}

async function seedSearchDocs(users, worldCards, communities) {
  for (const card of worldCards) {
    await query(
      `insert into search_documents(scope, entity_type, entity_id, title, subtitle, content, author_id, tags, heat_score, status, published_at)
       values ('global','world_card',$1,$2,$3,$4,$5,$6::text[],$7,'active',now())`,
      [card.id, card.title, `${card.format} · ${card.theme}`, `${card.setting} ${card.background} ${card.recommend_tag}`, card.author_id, [card.theme, card.setting, card.background], randomInt(50, 99)]
    );
  }
  for (const c of communities) {
    await query(
      `insert into search_documents(scope, entity_type, entity_id, title, subtitle, content, author_id, tags, heat_score, status, published_at)
       values ('community','community',$1,$2,'社区',$3,$4,$5::text[],$6,'active',now())`,
      [c.id, c.name, "高活跃社区，支持世界卡共创与讨论。", c.owner_id, ["社区"], randomInt(40, 95)]
    );
  }
  for (const u of users) {
    await query(
      `insert into search_documents(scope, entity_type, entity_id, title, subtitle, content, author_id, tags, heat_score, status, published_at)
       values ('global','user',$1,$2,'用户',$3,$1,$4::text[],$5,'active',now())`,
      [u.id, u.nickname, "创作者 / 玩家", ["用户"], randomInt(30, 90)]
    );
  }
}

async function seedCoins(users) {
  const taskRows = await Promise.all(
    [
      ["daily_login", "每日登录", 20, "daily"],
      ["publish_post", "发布动态", 60, "daily"],
      ["reply_comment", "回复评论", 45, "daily"],
      ["invite_friend", "邀请好友", 120, "growth"],
      ["play_story", "完成一次剧情开刷", 80, "daily"]
    ].map(async ([key, title, reward, type]) => {
      const r = await query(
        `insert into coin_tasks(task_key, title, reward_amount, task_type, is_active)
         values ($1,$2,$3,$4,true) returning id`,
        [key, title, reward, type]
      );
      return r.rows[0];
    })
  );
  const wallets = await query(`select id, user_id, balance from wallet_accounts`);
  for (const w of wallets.rows) {
    for (let i = 0; i < 5; i += 1) {
      const change = i % 3 === 0 ? -randomInt(20, 320) : randomInt(10, 180);
      const balanceAfter = Math.max(0, Number(w.balance) + change);
      await query(
        `insert into wallet_ledger(wallet_id, user_id, change_amount, balance_after, biz_type, biz_id, remark, meta)
         values ($1,$2,$3,$4,$5,$6,$7,$8::jsonb)`,
        [w.id, w.user_id, change, balanceAfter, change > 0 ? "task_reward" : "consume", `seed_${w.user_id}_${i}`, "seed流水", JSON.stringify({ idx: i })]
      );
    }
    for (const t of taskRows) {
      await query(
        `insert into user_coin_task_progress(user_id, task_id, progress, target, status, reward_claimed)
         values ($1,$2,$3,$4,$5,$6)`,
        [w.user_id, t.id, randomInt(0, 1), 1, randomInt(0, 1) ? "done" : "ongoing", Boolean(randomInt(0, 1))]
      );
    }
  }
}

async function seedRankings(worldCards) {
  const rankTypes = ["recommend", "hot", "reserve"];
  for (let r = 0; r < rankTypes.length; r += 1) {
    const snap = await query(
      `insert into world_card_rank_snapshots(rank_type, sub_type, snapshot_date, title, summary, meta)
       values ($1,'overall',current_date,$2,$3,$4::jsonb) returning id`,
      [rankTypes[r], `${rankTypes[r]} 榜`, "每日依据播放/互动/收藏综合计算", JSON.stringify({ seed: true })]
    );
    const sid = snap.rows[0].id;
    for (let i = 0; i < 20; i += 1) {
      const card = worldCards[(r * 17 + i) % worldCards.length];
      await query(
        `insert into world_card_rank_items(snapshot_id, rank_no, world_card_id, score, stat_json)
         values ($1,$2,$3,$4,$5::jsonb)`,
        [sid, i + 1, card.id, 100 - i + Math.random(), JSON.stringify({ plays: randomInt(800, 6000), likes: randomInt(200, 3000) })]
      );
    }
  }
}

async function main() {
  console.log("[seed] reset tables...");
  await resetAll();

  console.log("[seed] users...");
  const users = await seedUsers(60);
  await seedFollows(users);

  console.log("[seed] world cards...");
  const worldCards = await seedWorldCards(users, 90);
  await seedCreatorCards(users, worldCards, 60);
  await seedRankings(worldCards);

  console.log("[seed] communities...");
  const communities = await seedCommunities(users, worldCards, 50);

  console.log("[seed] posts...");
  await seedPosts(users, worldCards, 240);

  console.log("[seed] messages...");
  await seedMessages(users, communities);

  console.log("[seed] notifications/search/coins...");
  await seedNotifications(users, worldCards);
  await seedSearchDocs(users, worldCards, communities);
  await seedCoins(users);

  console.log(`[seed] done: users=${users.length}, world_cards=${worldCards.length}, communities=${communities.length}`);
}

main()
  .catch((error) => {
    console.error("[seed] failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
