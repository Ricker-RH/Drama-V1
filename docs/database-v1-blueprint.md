# 抓马 Drama 数据库蓝图（V1）

> 目标：先支撑“可上线可迭代”的 Web 版本，后续功能扩展不推翻重建。  
> 数据库：PostgreSQL（Neon）。

## 1. 设计原则

- 主键统一 `uuid`（`gen_random_uuid()`）。
- 所有核心表统一审计字段：
  - `created_at timestamptz not null default now()`
  - `updated_at timestamptz not null default now()`
  - 可删除实体加 `deleted_at timestamptz`
- 高频列表字段必须有索引（时间、状态、外键）。
- 计数字段（likes/favorites/comments）采用“冗余计数 + 事实表”模式，读快写准。
- 复杂可变结构（玩法状态、AI状态增量）用 `jsonb`，但关键查询字段必须结构化落表。

---

## 2. 模块与表清单

## A. 用户与认证

### `users`
- 用途：账户基础信息。
- 字段：
  - `id uuid pk`
  - `email text unique`（可空，支持仅手机号/第三方注册）
  - `phone text unique`（可空）
  - `password_hash text`（可空，第三方登录无密码）
  - `nickname text not null`
  - `avatar_url text`
  - `bio text`
  - `status text not null default 'active'`（`active|banned|deleted`）
  - `last_login_at timestamptz`
  - 审计字段
- 索引：
  - `unique(email) where email is not null`
  - `unique(phone) where phone is not null`
  - `idx_users_created_at(created_at desc)`

### `user_auth_providers`
- 用途：绑定第三方登录（微信/Apple/Google）。
- 字段：
  - `id uuid pk`
  - `user_id uuid fk -> users(id)`
  - `provider text not null`（`wechat|apple|google`）
  - `provider_uid text not null`
  - `provider_meta jsonb not null default '{}'::jsonb`
  - 审计字段
- 约束/索引：
  - `unique(provider, provider_uid)`
  - `unique(user_id, provider)`

### `user_sessions`
- 用途：登录会话（用于后续真正鉴权）。
- 字段：
  - `id uuid pk`
  - `user_id uuid fk`
  - `token_hash text not null unique`
  - `device_info jsonb not null default '{}'::jsonb`
  - `ip inet`
  - `expires_at timestamptz not null`
  - `revoked_at timestamptz`
  - 审计字段
- 索引：
  - `idx_user_sessions_user(user_id, created_at desc)`
  - `idx_user_sessions_expires(expires_at)`

---

## B. 个人主页与关系

### `user_profiles`
- 用途：可扩展主页设置（背景图、展示配置）。
- 字段：
  - `user_id uuid pk fk -> users(id)`
  - `cover_url text`
  - `theme_preference text default 'default'`
  - `font_size text default 'normal'`
  - `extra jsonb default '{}'::jsonb`
  - 审计字段

### `user_follows`
- 用途：关注关系。
- 字段：
  - `id uuid pk`
  - `follower_id uuid fk -> users(id)`
  - `following_id uuid fk -> users(id)`
  - `muted boolean default false`
  - 审计字段
- 约束：
  - `unique(follower_id, following_id)`
  - `check(follower_id <> following_id)`
- 索引：
  - `idx_user_follows_following(following_id, created_at desc)`

---

## C. 马内（钱包）

### `wallet_accounts`
- 用途：每个用户一个钱包。
- 字段：
  - `id uuid pk`
  - `user_id uuid not null unique fk -> users(id)`
  - `balance bigint not null default 0`（单位：分，避免浮点误差）
  - `frozen_balance bigint not null default 0`
  - 审计字段

### `wallet_ledger`
- 用途：所有马内收支流水（唯一可信账本）。
- 字段：
  - `id uuid pk`
  - `wallet_id uuid fk -> wallet_accounts(id)`
  - `user_id uuid fk -> users(id)`（冗余便于查）
  - `change_amount bigint not null`（正负）
  - `balance_after bigint not null`
  - `biz_type text not null`（`signin_reward|task_reward|consume|refund|admin_adjust`）
  - `biz_id text`（业务单号）
  - `remark text`
  - `meta jsonb default '{}'::jsonb`
  - `created_at`
- 索引：
  - `idx_wallet_ledger_user(user_id, created_at desc)`
  - `idx_wallet_ledger_biz(biz_type, biz_id)`

---

## D. 世界/故事卡（核心）

### `world_cards`
- 用途：故事卡主体。
- 字段：
  - `id uuid pk`
  - `author_id uuid fk -> users(id)`
  - `title text not null`
  - `subtitle text`
  - `cover_url text`
  - `summary text`
  - `overview text`
  - `format text`（体裁）
  - `theme text`（主题）
  - `setting text`（设定）
  - `background text`（背景）
  - `publish_status text not null default 'draft'`（`draft|reviewing|published|archived`）
  - `is_test boolean not null default false`
  - `source_prompt_version text`（关联 system prompt 版本）
  - 审计字段
- 索引：
  - `idx_world_cards_author(author_id, created_at desc)`
  - `idx_world_cards_publish(publish_status, created_at desc)`
  - `idx_world_cards_discovery(format, theme, setting, background)`

### `world_card_versions`
- 用途：故事卡版本管理（可回滚）。
- 字段：
  - `id uuid pk`
  - `world_card_id uuid fk -> world_cards(id)`
  - `version_no int not null`
  - `content_json jsonb not null`（完整可玩配置：章节、NPC、线索、提示等）
  - `change_note text`
  - `created_by uuid fk -> users(id)`
  - `created_at`
- 约束：
  - `unique(world_card_id, version_no)`

### `world_card_tags`
- 用途：标签多对多。
- 字段：
  - `world_card_id uuid fk`
  - `tag text not null`
  - `created_at`
- 约束：
  - `primary key(world_card_id, tag)`
- 索引：
  - `idx_world_card_tags_tag(tag)`

### `world_card_characters`
- 用途：核心角色（详情页横滑）。
- 字段：
  - `id uuid pk`
  - `world_card_id uuid fk`
  - `name text not null`
  - `role_title text`
  - `description text`
  - `keywords text[] default '{}'`
  - `avatar_url text`
  - `sort_order int not null default 0`
  - 审计字段
- 索引：
  - `idx_world_characters_world(world_card_id, sort_order)`

### `world_card_stats`
- 用途：缓存统计（点赞、收藏、评论、开刷人数）。
- 字段：
  - `world_card_id uuid pk fk`
  - `likes_count int not null default 0`
  - `favorites_count int not null default 0`
  - `comments_count int not null default 0`
  - `plays_count int not null default 0`
  - `followers_count int not null default 0`（预约关注）
  - `heat_score numeric(12,2) not null default 0`
  - `updated_at`

### `world_card_interactions`
- 用途：用户与故事互动事实表（点赞/收藏/预约关注）。
- 字段：
  - `id uuid pk`
  - `world_card_id uuid fk`
  - `user_id uuid fk`
  - `interaction_type text not null`（`like|favorite|follow_reserve`）
  - `status text not null default 'active'`（`active|cancelled`）
  - 审计字段
- 约束：
  - `unique(world_card_id, user_id, interaction_type)`
- 索引：
  - `idx_world_interactions_user(user_id, created_at desc)`

---

## E. 开刷游戏过程（AI 回合）

### `game_sessions`
- 用途：一次“开刷”会话。
- 字段：
  - `id uuid pk`
  - `user_id uuid fk -> users(id)`
  - `world_card_id uuid fk -> world_cards(id)`（建议新增）
  - `category text not null`
  - `sub_category text not null`
  - `current_round_no int not null default 0`
  - `status text not null default 'active'`（`active|completed|abandoned`）
  - `session_state jsonb not null default '{}'::jsonb`
  - 审计字段
- 索引：
  - `idx_game_sessions_user(user_id, updated_at desc)`
  - `idx_game_sessions_world(world_card_id, updated_at desc)`

### `game_turns`
- 用途：每一回合记录（输入+AI输出+状态增量）。
- 字段：
  - `id uuid pk`
  - `session_id uuid fk -> game_sessions(id) on delete cascade`
  - `round_no int not null`
  - `user_input text not null`
  - `narrative text not null`
  - `state_delta jsonb not null`
  - `prompt_question text`（抛球问题）
  - `prompt_options jsonb`（选项数组）
  - `provider text`（openai/fallback）
  - `latency_ms int`
  - `created_at`
- 约束：
  - `unique(session_id, round_no)`
- 索引：
  - `idx_game_turns_session_round(session_id, round_no)`

---

## F. 动态（小红书式）

### `posts`
- 用途：统一“动态”内容（首页动态流+个人主页作品流）。
- 字段：
  - `id uuid pk`
  - `author_id uuid fk -> users(id)`
  - `post_type text not null`（`text|image|video|story_card`）
  - `title text`
  - `content text`
  - `visibility text not null default 'public'`
  - `linked_world_card_id uuid fk -> world_cards(id)`（可空）
  - `status text not null default 'published'`
  - 审计字段
- 索引：
  - `idx_posts_author(author_id, created_at desc)`
  - `idx_posts_created(created_at desc)`

### `post_media`
- 用途：动态媒体资源。
- 字段：
  - `id uuid pk`
  - `post_id uuid fk -> posts(id) on delete cascade`
  - `media_type text not null`（`image|video`）
  - `url text not null`
  - `width int`
  - `height int`
  - `duration_sec int`
  - `sort_order int not null default 0`
  - `created_at`
- 索引：
  - `idx_post_media_post(post_id, sort_order)`

### `post_comments`
- 用途：评论。
- 字段：
  - `id uuid pk`
  - `post_id uuid fk -> posts(id)`
  - `user_id uuid fk -> users(id)`
  - `parent_comment_id uuid fk -> post_comments(id)`（支持回复）
  - `content text not null`
  - `status text default 'active'`
  - 审计字段
- 索引：
  - `idx_post_comments_post(post_id, created_at desc)`

### `post_reactions`
- 用途：点赞/收藏。
- 字段：
  - `id uuid pk`
  - `post_id uuid fk -> posts(id)`
  - `user_id uuid fk -> users(id)`
  - `reaction_type text not null`（`like|favorite`）
  - `status text default 'active'`
  - 审计字段
- 约束：
  - `unique(post_id, user_id, reaction_type)`

---

## G. 社区（群组）

### `communities`
- 用途：社区实体。
- 字段：
  - `id uuid pk`
  - `owner_id uuid fk -> users(id)`
  - `name text not null`
  - `description text`
  - `cover_url text`
  - `cover_mask_opacity numeric(4,2) default 0.38`
  - `join_mode text not null default 'public'`（`public|approval|invite_only`）
  - `status text not null default 'active'`
  - `member_count int not null default 0`
  - `post_count int not null default 0`
  - `last_active_at timestamptz`
  - 审计字段
- 索引：
  - `idx_communities_owner(owner_id)`
  - `idx_communities_last_active(last_active_at desc)`

### `community_members`
- 用途：社群成员关系。
- 字段：
  - `id uuid pk`
  - `community_id uuid fk -> communities(id) on delete cascade`
  - `user_id uuid fk -> users(id)`
  - `role text not null default 'member'`（`owner|admin|member`）
  - `nickname_in_group text`
  - `mute_notifications boolean default false`
  - `hide_in_joined_list boolean default false`
  - `status text not null default 'active'`（`active|left|kicked`）
  - `joined_at timestamptz not null default now()`
  - `updated_at`
- 约束：
  - `unique(community_id, user_id)`
- 索引：
  - `idx_community_members_user(user_id, joined_at desc)`

### `community_join_requests`
- 用途：入群申请审核。
- 字段：
  - `id uuid pk`
  - `community_id uuid fk`
  - `user_id uuid fk`
  - `message text`
  - `status text not null default 'pending'`（`pending|approved|rejected`）
  - `reviewer_id uuid fk -> users(id)`
  - `reviewed_at timestamptz`
  - 审计字段

### `community_posts`
- 用途：社区内动态（可绑定故事卡）。
- 字段：
  - `id uuid pk`
  - `community_id uuid fk -> communities(id)`
  - `author_id uuid fk -> users(id)`
  - `content text not null`
  - `linked_world_card_id uuid fk -> world_cards(id)`
  - `post_type text default 'text'`
  - `is_featured boolean default false`
  - `likes_count int default 0`
  - `comments_count int default 0`
  - `status text default 'published'`
  - 审计字段
- 索引：
  - `idx_community_posts_community(community_id, created_at desc)`

### `community_post_comments`
- 用途：社区帖子评论。
- 字段与 `post_comments` 类似（多一个 `community_post_id`）。

### `community_post_reactions`
- 用途：社区帖子点赞/收藏等反应。
- 结构类似 `post_reactions`。

### `community_announcements`
- 用途：群公告。
- 字段：
  - `id uuid pk`
  - `community_id uuid fk`
  - `author_id uuid fk`
  - `content text not null`
  - `is_pinned boolean default true`
  - `created_at`

### `community_member_actions`
- 用途：管理日志（踢人、转让、禁言等）。
- 字段：
  - `id uuid pk`
  - `community_id uuid fk`
  - `operator_id uuid fk`
  - `target_user_id uuid fk`
  - `action_type text not null`
  - `reason text`
  - `meta jsonb`
  - `created_at`

---

## H. 消息与私信

### `conversations`
- 用途：会话（私聊/群聊/系统会话）。
- 字段：
  - `id uuid pk`
  - `conversation_type text not null`（`private|group|system`）
  - `title text`
  - `avatar_url text`
  - `created_by uuid fk -> users(id)`
  - `last_message_id uuid`（后补 fk）
  - `last_message_at timestamptz`
  - 审计字段
- 索引：
  - `idx_conversations_last_message(last_message_at desc)`

### `conversation_members`
- 用途：会话成员。
- 字段：
  - `id uuid pk`
  - `conversation_id uuid fk -> conversations(id) on delete cascade`
  - `user_id uuid fk -> users(id)`
  - `role text default 'member'`
  - `mute boolean default false`
  - `last_read_message_id uuid`
  - `last_read_at timestamptz`
  - `joined_at timestamptz default now()`
- 约束：
  - `unique(conversation_id, user_id)`

### `messages`
- 用途：消息正文。
- 字段：
  - `id uuid pk`
  - `conversation_id uuid fk -> conversations(id)`
  - `sender_id uuid fk -> users(id)`（系统消息可空）
  - `message_type text not null`（`text|image|video|card|system`）
  - `content text`
  - `payload jsonb default '{}'::jsonb`
  - `status text default 'sent'`
  - `created_at`
- 索引：
  - `idx_messages_conversation(conversation_id, created_at desc)`

### `message_reactions`
- 用途：消息表情反馈。
- 字段：
  - `id uuid pk`
  - `message_id uuid fk`
  - `user_id uuid fk`
  - `emoji text not null`
  - `created_at`
- 约束：
  - `unique(message_id, user_id, emoji)`

---

## I. 通知中心

### `notifications`
- 用途：赞和收藏 / 新增关注 / 评论和@ / 系统通知统一收敛。
- 字段：
  - `id uuid pk`
  - `user_id uuid fk -> users(id)`（接收人）
  - `type text not null`（`post_like|post_favorite|new_follow|comment_at|system|community`）
  - `title text`
  - `content text`
  - `actor_id uuid fk -> users(id)`（触发人，可空）
  - `target_type text`
  - `target_id uuid`
  - `is_read boolean default false`
  - `read_at timestamptz`
  - `created_at`
- 索引：
  - `idx_notifications_user(user_id, is_read, created_at desc)`

---

## J. 检索与推荐（先最小可用）

### `search_logs`
- 用途：记录全局搜索/社群搜索关键字，供热词与排序优化。
- 字段：
  - `id uuid pk`
  - `user_id uuid fk -> users(id)`（可空）
  - `scope text not null`（`global|community|message`）
  - `keyword text not null`
  - `result_count int not null default 0`
  - `created_at`
- 索引：
  - `idx_search_logs_scope_time(scope, created_at desc)`
  - `idx_search_logs_keyword(keyword)`

---

## 3. 与当前已有表的差异（必须升级）

当前已有：`users / game_sessions / game_turns / world_cards / community_posts`。  
建议升级点：

1. `game_sessions` 增加 `world_card_id、session_state、current_round_no`。  
2. `game_turns` 增加 `prompt_question、prompt_options、provider、latency_ms`。  
3. `world_cards` 增加封面/摘要/筛选字段（format/theme/setting/background）。  
4. `community_posts` 增加 `community_id、linked_world_card_id、comments_count`。  
5. 新增关系与事实表（follow、reaction、comment、conversation、wallet）。

---

## 4. 首批上线建议（最小闭环）

如果你要先快速上线核心闭环，先落这 12 张表：

- `users`
- `user_auth_providers`
- `world_cards`
- `world_card_versions`
- `world_card_interactions`
- `world_card_stats`
- `game_sessions`
- `game_turns`
- `posts`
- `post_comments`
- `post_reactions`
- `notifications`

然后第二批再加：

- 社区完整模型（`communities` 等）
- 消息完整模型（`conversations` 等）
- 钱包模型（`wallet_accounts` + `wallet_ledger`）

---

## 5. 命名与规范（避免后续维护混乱）

- 表名统一复数：`users`, `world_cards`, `game_turns`。
- 外键统一 `xxx_id`。
- 状态字段统一 `status` + 约束值。
- 计数字段统一 `*_count`。
- 所有“可恢复删除”的业务表使用 `deleted_at`，不直接物理删除。
- 业务枚举尽量先用 `text + check`，后续稳定再升 enum。

---

## 6. 本轮补强（2026-03-10）

为覆盖你当前 Web 全站页面与后续分析，本轮在 `002_schema_v1_full.sql` 里新增/补强：

- 卡片体系补强：
  - `creator_card_assets`：三种模式卡片素材资源。
  - `world_card_media`：故事卡详情轮播/Drama banner/游戏场景图。
  - `world_card_reservations`：预约关注偏好（通知开关）。
  - `world_card_rank_snapshots` + `world_card_rank_items`：排行榜快照与榜单明细。
- 社区补强：
  - `communities` 扩展 `theme/gender_focus/tags/latest_post_at`，直接支持筛选。
  - `community_post_media`：社区动态媒体。
  - `community_blacklist`：黑名单。
  - `community_transfer_requests`：社群转让流程。
  - 修复 `community_announcements.author_id`：允许 `on delete set null`。
- 消息补强：
  - `conversations` 增加 `biz_type/settings_json/is_archived`。
  - `messages` 增加 `reply_to_message_id/client_message_id/edited_at/revoked_at`。
  - `message_attachments`：图片/视频/定位/卡片附件。
  - 会话补 FK：`conversations.last_message_id`、`conversation_members.last_read_message_id`。
- 搜索与分析补强：
  - `search_documents`：统一检索索引（全局/社区/消息可分 scope）。
  - `event_logs` 扩展 `platform/trace_id/referrer/duration_ms/numeric_value`。
  - 新增日聚合：`analytics_daily_search_metrics`、`analytics_daily_creator_metrics`、`analytics_daily_user_relation_metrics`、`analytics_daily_funnel_metrics`。
  - 新增视图：`vw_user_profile_metrics`、`vw_world_card_metrics`。

---

## 7. 页面与数据覆盖矩阵（按当前前端）

- 用户相关（登录、主页、设置、粉丝、马内）：
  - `users`, `user_auth_providers`, `user_sessions`, `user_profiles`, `user_settings`, `user_follows`, `wallet_accounts`, `wallet_ledger`, `coin_tasks`, `user_coin_task_progress`
- 卡片相关（三种模式 + 发布世界卡 + 详情 + 排行）：
  - 创作侧：`creator_cards`, `creator_card_versions`, `creator_card_assets`
  - 发布侧：`world_cards`, `world_card_versions`, `world_card_tags`, `world_card_characters`, `world_card_media`, `world_card_stats`, `world_card_interactions`, `world_card_reservations`, `world_card_comments`
  - 榜单侧：`world_card_rank_snapshots`, `world_card_rank_items`
- 游戏开刷（回合、抛球、模型、状态）：
  - `game_sessions`, `game_turns`
- 动态流（图文/视频/绑定故事卡）：
  - `posts`, `post_media`, `post_comments`, `post_reactions`
- 社区（列表、详情、发帖、成员、管理）：
  - `communities`, `community_members`, `community_join_requests`, `community_posts`, `community_post_media`, `community_post_comments`, `community_post_reactions`, `community_announcements`, `community_blacklist`, `community_transfer_requests`, `community_member_actions`
- 消息（会话、私聊/群聊、未读、消息详情、三类互动入口）：
  - `conversations`, `conversation_members`, `messages`, `message_attachments`, `message_reactions`, `notifications`
- 搜索（全局搜索、社区搜索、历史、热词分析）：
  - `search_logs`, `user_search_history`, `search_documents`
- 深度分析（行为 + 日聚合）：
  - `event_logs`
  - `analytics_daily_user_metrics`, `analytics_daily_world_metrics`, `analytics_daily_community_metrics`, `analytics_daily_message_metrics`, `analytics_daily_search_metrics`, `analytics_daily_creator_metrics`, `analytics_daily_user_relation_metrics`, `analytics_daily_funnel_metrics`

---

## 8. 分析能力（上线可用的基础看板）

- 用户增长与留存：
  - 新增用户、活跃用户、7日留存（基于 `event_logs` + `analytics_daily_user_metrics`）
- 卡片转化漏斗：
  - 曝光 -> 详情 -> 喜欢/收藏/预约 -> 开刷（`analytics_daily_world_metrics` + `event_logs`）
- 社区活跃：
  - 新增成员、发帖、互动、流失（`analytics_daily_community_metrics`）
- 消息效率：
  - 会话活跃、响应时延、5分钟内回复率（`analytics_daily_message_metrics`）
- 搜索质量：
  - 热词、零结果率、点击率（`analytics_daily_search_metrics`）
- 创作效果（按三种模式）：
  - 创建量、发布量、开刷量、互动量（`analytics_daily_creator_metrics`）

---

## 9. 执行建议（避免一次性风险）

- Phase 1（先跑通业务）：
  - 跑 `001_init.sql` + `002_schema_v1_full.sql`。
  - 先接入：用户、卡片、游戏、消息、社区核心写入。
- Phase 2（补分析）：
  - API 层统一写 `event_logs`（页面曝光、点击、搜索、互动、发送消息、开刷回合）。
  - 每日定时任务写入 `analytics_daily_*`。
- Phase 3（优化）：
  - 根据真实查询慢 SQL 增索引；
  - 对 `event_logs` 做月分区或冷热归档。
