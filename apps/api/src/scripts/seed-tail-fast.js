import { query, closePool } from "../db/client.js";

function pick(arr, i) {
  return arr[i % arr.length];
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function loadIds() {
  const users = (await query(`select id, nickname from users order by created_at asc`)).rows;
  const worlds = (await query(`select id, title, author_id from world_cards order by created_at desc`)).rows;
  const communities = (await query(`select id, name, owner_id from communities order by created_at desc`)).rows;
  return { users, worlds, communities };
}

async function seedPosts(users, worlds) {
  const c = Number((await query(`select count(*)::int c from posts`)).rows[0].c);
  if (c >= 80) return;
  for (let i = 0; i < 180; i += 1) {
    const u = pick(users, i * 3 + 1);
    const w = pick(worlds, i * 5 + 2);
    await query(
      `insert into posts(author_id, post_type, title, content, visibility, linked_world_card_id, status, likes_count, favorites_count, comments_count, shares_count)
       values ($1,$2,$3,$4,'public',$5,'published',$6,$7,$8,$9)`,
      [
        u.id,
        i % 5 === 0 ? "video" : i % 3 === 0 ? "story_card" : "image",
        `动态 ${i + 1} · ${w.title}`,
        `围绕《${w.title}》做了第${(i % 9) + 1}轮策略测试，结论是先稳线索再推进冲突。`,
        w.id,
        rand(50, 12000),
        rand(20, 4000),
        rand(5, 800),
        rand(1, 280)
      ]
    );
  }
}

async function seedConversations(users, communities) {
  const current = Number((await query(`select count(*)::int c from conversations`)).rows[0].c);
  if (current >= 70) return;

  const inboxSamples = [
    "今天把分支写完了，帮我看下结局A。",
    "先别冲主线，先拿线索。",
    "今晚 8 点开车，记得上线。",
    "你关注的故事卡更新了。"
  ];

  for (let i = 0; i < 50; i += 1) {
    const a = pick(users, i);
    const b = pick(users, i + 9);
    const conv = await query(
      `insert into conversations(conversation_type, title, created_by, biz_type, settings_json, is_archived)
       values ('private', $1, $2, 'dm', '{}'::jsonb, false) returning id`,
      [`${a.nickname} · ${b.nickname}`, a.id]
    );
    const cid = conv.rows[0].id;
    await query(`insert into conversation_members(conversation_id, user_id, role, unread_count) values ($1,$2,'member',$3)`, [cid, a.id, rand(0, 2)]);
    await query(`insert into conversation_members(conversation_id, user_id, role, unread_count) values ($1,$2,'member',$3)`, [cid, b.id, rand(0, 2)]);
    let lastId = null;
    let lastAt = null;
    for (let m = 0; m < 10; m += 1) {
      const sender = m % 2 === 0 ? a.id : b.id;
      const msg = await query(
        `insert into messages(conversation_id, sender_id, message_type, content, payload, status, client_message_id)
         values ($1,$2,'text',$3,'{}'::jsonb,'sent',$4) returning id, created_at`,
        [cid, sender, pick(inboxSamples, i + m), `${cid}_${m + 1}`]
      );
      lastId = msg.rows[0].id;
      lastAt = msg.rows[0].created_at;
    }
    await query(`update conversations set last_message_id=$2,last_message_at=$3 where id=$1`, [cid, lastId, lastAt]);
  }

  for (let i = 0; i < 20; i += 1) {
    const c = pick(communities, i);
    const conv = await query(
      `insert into conversations(conversation_type, title, community_id, created_by, biz_type, settings_json, is_archived)
       values ('group', $1, $2, $3, 'community', '{}'::jsonb, false) returning id`,
      [`${c.name} 群聊`, c.id, c.owner_id]
    );
    const cid = conv.rows[0].id;
    for (let k = 0; k < 18; k += 1) {
      const u = pick(users, i * 11 + k);
      await query(
        `insert into conversation_members(conversation_id, user_id, role, unread_count)
         values ($1,$2,$3,$4) on conflict do nothing`,
        [cid, u.id, k === 0 ? "owner" : "member", rand(0, 4)]
      );
    }
    let lastId = null;
    let lastAt = null;
    for (let m = 0; m < 12; m += 1) {
      const sender = pick(users, i * 7 + m);
      const msg = await query(
        `insert into messages(conversation_id, sender_id, message_type, content, payload, status, client_message_id)
         values ($1,$2,'text',$3,'{}'::jsonb,'sent',$4) returning id, created_at`,
        [cid, sender.id, `群聊消息 ${m + 1}：今晚复盘第${(m % 5) + 1}回合。`, `${cid}_${m + 1}`]
      );
      lastId = msg.rows[0].id;
      lastAt = msg.rows[0].created_at;
    }
    await query(`update conversations set last_message_id=$2,last_message_at=$3 where id=$1`, [cid, lastId, lastAt]);
  }
}

async function seedNotifications(users, worlds) {
  const c = Number((await query(`select count(*)::int c from notifications`)).rows[0].c);
  if (c >= 120) return;
  const types = ["post_like", "post_favorite", "new_follow", "comment_at", "system"];
  for (let i = 0; i < 360; i += 1) {
    const user = pick(users, i);
    const actor = pick(users, i + 17);
    const world = pick(worlds, i + 3);
    const type = pick(types, i);
    await query(
      `insert into notifications(user_id, type, title, content, actor_id, target_type, target_id, is_read, action_url, extra)
       values ($1,$2,$3,$4,$5,'world_card',$6,$7,$8,$9::jsonb)`,
      [
        user.id,
        type,
        type === "new_follow" ? "新增关注" : type === "comment_at" ? "收到评论和@" : "互动提醒",
        type === "new_follow" ? `${actor.nickname} 关注了你` : `${actor.nickname} 互动了《${world.title}》`,
        actor.id,
        world.id,
        i % 3 === 0,
        "#/messages/chat",
        JSON.stringify({ worldTitle: world.title })
      ]
    );
  }
}

async function seedSearchAndCoins(users, worlds, communities) {
  const docCount = Number((await query(`select count(*)::int c from search_documents`)).rows[0].c);
  if (docCount < 100) {
    for (const w of worlds) {
      await query(
        `insert into search_documents(scope, entity_type, entity_id, title, subtitle, content, author_id, tags, heat_score, status, published_at)
         values ('global','world_card',$1,$2,'故事卡','剧情玩法',$3,'{}'::text[],$4,'active',now())`,
        [w.id, w.title, w.author_id, rand(50, 99)]
      );
    }
    for (const c of communities) {
      await query(
        `insert into search_documents(scope, entity_type, entity_id, title, subtitle, content, author_id, tags, heat_score, status, published_at)
         values ('community','community',$1,$2,'社区','社区讨论与共创',$3,'{}'::text[],$4,'active',now())`,
        [c.id, c.name, c.owner_id, rand(35, 95)]
      );
    }
  }

  const taskCount = Number((await query(`select count(*)::int c from coin_tasks`)).rows[0].c);
  if (taskCount < 5) {
    const taskSeed = [
      ["daily_login", "每日登录", 20, "daily"],
      ["publish_post", "发布动态", 60, "daily"],
      ["reply_comment", "回复评论", 45, "daily"],
      ["invite_friend", "邀请好友", 120, "growth"],
      ["play_story", "完成一次剧情开刷", 80, "daily"]
    ];
    for (const t of taskSeed) {
      await query(
        `insert into coin_tasks(task_key, title, reward_amount, task_type, is_active)
         values ($1,$2,$3,$4,true)`,
        t
      );
    }
  }
  const wallets = (await query(`select id, user_id, balance from wallet_accounts`)).rows;
  for (const w of wallets) {
    const ledgerCount = Number((await query(`select count(*)::int c from wallet_ledger where user_id=$1`, [w.user_id])).rows[0].c);
    if (ledgerCount >= 5) continue;
    for (let i = 0; i < 6; i += 1) {
      const delta = i % 2 === 0 ? rand(20, 180) : -rand(10, 140);
      const next = Math.max(0, Number(w.balance) + delta);
      await query(
        `insert into wallet_ledger(wallet_id, user_id, change_amount, balance_after, biz_type, biz_id, remark, meta)
         values ($1,$2,$3,$4,$5,$6,$7,$8::jsonb)`,
        [w.id, w.user_id, delta, next, delta > 0 ? "task_reward" : "consume", `${w.user_id}_${i}`, "seed fast", "{}"]
      );
    }
  }
}

async function main() {
  const { users, worlds, communities } = await loadIds();
  if (!users.length || !worlds.length || !communities.length) {
    throw new Error("missing base entities: users/worlds/communities");
  }
  await seedPosts(users, worlds);
  await seedConversations(users, communities);
  await seedNotifications(users, worlds);
  await seedSearchAndCoins(users, worlds, communities);
  console.log("[seed-fast] done");
}

main()
  .catch((e) => {
    console.error("[seed-fast] failed:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });

