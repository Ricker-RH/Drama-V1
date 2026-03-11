-- Drama Web V1 Full Schema Upgrade (for Neon / PostgreSQL)
-- Purpose:
-- 1) Cover current web features: user / cards(3 modes) / community / messages / coins / search / gameplay.
-- 2) Prepare for basic deep analytics with event logs and daily aggregate tables.
-- Safe strategy:
-- - Only CREATE IF NOT EXISTS / ALTER ... ADD COLUMN IF NOT EXISTS
-- - No destructive drop statements

create extension if not exists pgcrypto;
create extension if not exists pg_trgm;

-- ------------------------------------------------------------
-- Utility: updated_at trigger
-- ------------------------------------------------------------
create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ------------------------------------------------------------
-- 1) USERS & AUTH
-- ------------------------------------------------------------

alter table if exists users
  alter column email drop not null,
  alter column password_hash drop not null;

alter table if exists users
  add column if not exists phone text,
  add column if not exists avatar_url text,
  add column if not exists bio text,
  add column if not exists status text not null default 'active',
  add column if not exists last_login_at timestamptz,
  add column if not exists deleted_at timestamptz;

create unique index if not exists uq_users_phone_not_null
  on users(phone) where phone is not null;

create index if not exists idx_users_status_created_at
  on users(status, created_at desc);

create table if not exists user_auth_providers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  provider text not null,
  provider_uid text not null,
  provider_meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create unique index if not exists uq_user_auth_provider_uid
  on user_auth_providers(provider, provider_uid);

create unique index if not exists uq_user_auth_provider_user
  on user_auth_providers(user_id, provider);

create index if not exists idx_user_auth_providers_user
  on user_auth_providers(user_id);

create table if not exists user_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  token_hash text not null unique,
  device_info jsonb not null default '{}'::jsonb,
  ip inet,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_user_sessions_user_created
  on user_sessions(user_id, created_at desc);

create index if not exists idx_user_sessions_expires
  on user_sessions(expires_at);

create table if not exists user_profiles (
  user_id uuid primary key references users(id) on delete cascade,
  cover_url text,
  theme_preference text not null default 'default',
  font_size text not null default 'normal',
  extra jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists user_settings (
  user_id uuid primary key references users(id) on delete cascade,
  story_push boolean not null default true,
  comment_push boolean not null default true,
  follow_push boolean not null default true,
  system_push boolean not null default true,
  private_account boolean not null default false,
  allow_stranger_dm boolean not null default true,
  show_online_status boolean not null default true,
  sync_play_history boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists user_follows (
  id uuid primary key default gen_random_uuid(),
  follower_id uuid not null references users(id) on delete cascade,
  following_id uuid not null references users(id) on delete cascade,
  muted boolean not null default false,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_user_follow_not_self check (follower_id <> following_id)
);

create unique index if not exists uq_user_follows_pair
  on user_follows(follower_id, following_id);

create index if not exists idx_user_follows_following_created
  on user_follows(following_id, created_at desc);

-- ------------------------------------------------------------
-- 2) CARDS (3 MODES) + PUBLISHED WORLD CARDS
-- ------------------------------------------------------------

-- Existing world_cards table gets upgraded for feed/filter/details.
alter table if exists world_cards
  add column if not exists subtitle text,
  add column if not exists cover_url text,
  add column if not exists summary text,
  add column if not exists overview text,
  add column if not exists format text,
  add column if not exists theme text,
  add column if not exists background text,
  add column if not exists recommend_tag text,
  add column if not exists time_tag text,
  add column if not exists is_test boolean not null default false,
  add column if not exists source_prompt_version text,
  add column if not exists visibility text not null default 'public',
  add column if not exists deleted_at timestamptz;

create index if not exists idx_world_cards_discovery
  on world_cards(format, theme, setting, background, recommend_tag, time_tag);

create index if not exists idx_world_cards_publish_created
  on world_cards(publish_status, created_at desc);

create index if not exists idx_world_cards_title_trgm
  on world_cards using gin(title gin_trgm_ops);

create index if not exists idx_world_cards_summary_trgm
  on world_cards using gin(summary gin_trgm_ops);

-- Creator-side 3 card modes:
-- long_narrative(世界卡), short_narrative(故事卡), virtual_character(角色/任务人格卡)
create table if not exists creator_cards (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references users(id) on delete cascade,
  card_mode text not null,
  title text not null,
  subtitle text,
  content_json jsonb not null default '{}'::jsonb,
  template_id text,
  prompt_context_json jsonb not null default '{}'::jsonb,
  save_status text not null default 'draft',
  publish_status text not null default 'unpublished',
  published_world_card_id uuid references world_cards(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_creator_card_mode check (card_mode in ('long_narrative','short_narrative','virtual_character'))
);

create index if not exists idx_creator_cards_author_mode
  on creator_cards(author_id, card_mode, updated_at desc);

create index if not exists idx_creator_cards_publish
  on creator_cards(publish_status, updated_at desc);

create table if not exists creator_card_versions (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  version_no integer not null,
  content_json jsonb not null,
  change_note text,
  created_by uuid references users(id),
  created_at timestamptz not null default now(),
  unique (creator_card_id, version_no)
);

create table if not exists creator_card_assets (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  asset_type text not null,
  asset_url text not null,
  preview_url text,
  meta jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_creator_card_asset_type check (asset_type in ('image','video','audio','file','reference'))
);

create index if not exists idx_creator_card_assets_card_sort
  on creator_card_assets(creator_card_id, sort_order);

create table if not exists world_card_versions (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  version_no integer not null,
  content_json jsonb not null,
  change_note text,
  created_by uuid references users(id),
  created_at timestamptz not null default now(),
  unique (world_card_id, version_no)
);

create table if not exists world_card_tags (
  world_card_id uuid not null references world_cards(id) on delete cascade,
  tag text not null,
  created_at timestamptz not null default now(),
  primary key (world_card_id, tag)
);

create index if not exists idx_world_card_tags_tag
  on world_card_tags(tag);

create table if not exists world_card_characters (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  name text not null,
  role_title text,
  description text,
  keywords text[] not null default '{}'::text[],
  avatar_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_world_card_characters_world_sort
  on world_card_characters(world_card_id, sort_order);

create table if not exists world_card_media (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  media_type text not null,
  media_url text not null,
  thumb_url text,
  width integer,
  height integer,
  duration_sec integer,
  usage_scene text not null default 'detail',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_world_card_media_type check (media_type in ('image','video','audio')),
  constraint chk_world_card_media_usage_scene check (usage_scene in ('detail','drama_banner','play_scene','author_profile'))
);

create index if not exists idx_world_card_media_world_scene_sort
  on world_card_media(world_card_id, usage_scene, sort_order);

create table if not exists world_card_stats (
  world_card_id uuid primary key references world_cards(id) on delete cascade,
  likes_count integer not null default 0,
  favorites_count integer not null default 0,
  comments_count integer not null default 0,
  plays_count integer not null default 0,
  followers_count integer not null default 0,
  heat_score numeric(12,2) not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists world_card_interactions (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  interaction_type text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (world_card_id, user_id, interaction_type),
  constraint chk_world_card_interaction_type check (interaction_type in ('like','favorite','follow_reserve'))
);

create index if not exists idx_world_card_interactions_user
  on world_card_interactions(user_id, created_at desc);

create table if not exists world_card_reservations (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  notify_on_publish boolean not null default true,
  notify_on_update boolean not null default true,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  unique (world_card_id, user_id)
);

create index if not exists idx_world_card_reservations_user_created
  on world_card_reservations(user_id, created_at desc);

create table if not exists world_card_comments (
  id uuid primary key default gen_random_uuid(),
  world_card_id uuid not null references world_cards(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  parent_comment_id uuid references world_card_comments(id) on delete cascade,
  content text not null,
  likes_count integer not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_world_card_comments_world_created
  on world_card_comments(world_card_id, created_at desc);

create table if not exists world_card_rank_snapshots (
  id uuid primary key default gen_random_uuid(),
  rank_type text not null,
  sub_type text not null default 'overall',
  snapshot_date date not null default current_date,
  title text,
  summary text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (rank_type, sub_type, snapshot_date),
  constraint chk_world_card_rank_type check (rank_type in ('recommend','hot','reserve','new_release','drama'))
);

create table if not exists world_card_rank_items (
  snapshot_id uuid not null references world_card_rank_snapshots(id) on delete cascade,
  rank_no integer not null,
  world_card_id uuid not null references world_cards(id) on delete cascade,
  score numeric(14,4),
  stat_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (snapshot_id, rank_no)
);

create unique index if not exists uq_world_card_rank_items_snapshot_world
  on world_card_rank_items(snapshot_id, world_card_id);

create index if not exists idx_world_card_rank_items_world_created
  on world_card_rank_items(world_card_id, created_at desc);

-- ------------------------------------------------------------
-- 3) GAMEPLAY (AI sessions / turns)
-- ------------------------------------------------------------

alter table if exists game_sessions
  add column if not exists world_card_id uuid references world_cards(id),
  add column if not exists mode text,
  add column if not exists story_context jsonb not null default '{}'::jsonb,
  add column if not exists current_model text,
  add column if not exists current_round_no integer not null default 0,
  add column if not exists session_state jsonb not null default '{}'::jsonb,
  add column if not exists ended_at timestamptz,
  add column if not exists deleted_at timestamptz;

update game_sessions
set current_round_no = coalesce(round_no, current_round_no)
where current_round_no = 0 and coalesce(round_no, 0) > 0;

create index if not exists idx_game_sessions_user_updated
  on game_sessions(user_id, updated_at desc);

create index if not exists idx_game_sessions_world_updated
  on game_sessions(world_card_id, updated_at desc);

create index if not exists idx_game_sessions_mode_updated
  on game_sessions(mode, updated_at desc);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'chk_game_sessions_mode') then
    alter table game_sessions
      add constraint chk_game_sessions_mode
      check (mode is null or mode in ('long_narrative','short_narrative','virtual_character'));
  end if;
end$$;

alter table if exists game_turns
  add column if not exists prompt_question text,
  add column if not exists prompt_options jsonb,
  add column if not exists provider text,
  add column if not exists latency_ms integer,
  add column if not exists error_code text,
  add column if not exists error_message text,
  add column if not exists token_usage jsonb;

create unique index if not exists uq_game_turns_session_round
  on game_turns(session_id, round_no);

create index if not exists idx_game_turns_created
  on game_turns(created_at desc);

-- ------------------------------------------------------------
-- 4) DYNAMIC POSTS (小红书式动态)
-- ------------------------------------------------------------

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references users(id) on delete cascade,
  post_type text not null,
  title text,
  content text,
  visibility text not null default 'public',
  linked_world_card_id uuid references world_cards(id),
  status text not null default 'published',
  likes_count integer not null default 0,
  favorites_count integer not null default 0,
  comments_count integer not null default 0,
  shares_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_post_type check (post_type in ('text','image','video','story_card'))
);

create index if not exists idx_posts_author_created
  on posts(author_id, created_at desc);

create index if not exists idx_posts_created
  on posts(created_at desc);

create index if not exists idx_posts_linked_world
  on posts(linked_world_card_id);

create table if not exists post_media (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  media_type text not null,
  media_url text not null,
  width integer,
  height integer,
  duration_sec integer,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint chk_post_media_type check (media_type in ('image','video'))
);

create index if not exists idx_post_media_post_sort
  on post_media(post_id, sort_order);

create table if not exists post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  parent_comment_id uuid references post_comments(id) on delete cascade,
  content text not null,
  likes_count integer not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index if not exists idx_post_comments_post_created
  on post_comments(post_id, created_at desc);

create table if not exists post_reactions (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  reaction_type text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, user_id, reaction_type),
  constraint chk_post_reaction_type check (reaction_type in ('like','favorite'))
);

create index if not exists idx_post_reactions_user_created
  on post_reactions(user_id, created_at desc);

-- ------------------------------------------------------------
-- 5) COMMUNITY
-- ------------------------------------------------------------

create table if not exists communities (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references users(id) on delete restrict,
  name text not null,
  description text,
  cover_url text,
  cover_mask_opacity numeric(4,2) not null default 0.38,
  join_mode text not null default 'public',
  status text not null default 'active',
  member_count integer not null default 0,
  post_count integer not null default 0,
  last_active_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_communities_join_mode check (join_mode in ('public','approval','invite_only'))
);

alter table if exists communities
  add column if not exists theme text not null default '综合',
  add column if not exists gender_focus text not null default '不限频向',
  add column if not exists region text,
  add column if not exists tags text[] not null default '{}'::text[],
  add column if not exists latest_post_at timestamptz;

create index if not exists idx_communities_owner
  on communities(owner_id, created_at desc);

create index if not exists idx_communities_last_active
  on communities(last_active_at desc);

create index if not exists idx_communities_name_trgm
  on communities using gin(name gin_trgm_ops);

create index if not exists idx_communities_filters
  on communities(theme, gender_focus, member_count desc, last_active_at desc);

create index if not exists idx_communities_tags_gin
  on communities using gin(tags);

create table if not exists community_members (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role text not null default 'member',
  nickname_in_group text,
  mute_notifications boolean not null default false,
  hide_in_joined_list boolean not null default false,
  status text not null default 'active',
  joined_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (community_id, user_id),
  constraint chk_community_member_role check (role in ('owner','admin','member'))
);

create index if not exists idx_community_members_user_joined
  on community_members(user_id, joined_at desc);

create table if not exists community_join_requests (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  message text,
  status text not null default 'pending',
  reviewer_id uuid references users(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (community_id, user_id)
);

create index if not exists idx_community_join_requests_status
  on community_join_requests(community_id, status, created_at desc);

-- upgrade existing community_posts table
alter table if exists community_posts
  add column if not exists community_id uuid references communities(id) on delete cascade,
  add column if not exists linked_world_card_id uuid references world_cards(id),
  add column if not exists post_type text not null default 'text',
  add column if not exists visibility text not null default 'public',
  add column if not exists comments_count integer not null default 0,
  add column if not exists shares_count integer not null default 0,
  add column if not exists is_featured boolean not null default false,
  add column if not exists status text not null default 'published',
  add column if not exists deleted_at timestamptz;

create index if not exists idx_community_posts_community_created
  on community_posts(community_id, created_at desc);

create index if not exists idx_community_posts_author_created
  on community_posts(author_id, created_at desc);

create table if not exists community_post_comments (
  id uuid primary key default gen_random_uuid(),
  community_post_id uuid not null references community_posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  parent_comment_id uuid references community_post_comments(id) on delete cascade,
  content text not null,
  likes_count integer not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_community_post_comments_post_created
  on community_post_comments(community_post_id, created_at desc);

create table if not exists community_post_reactions (
  id uuid primary key default gen_random_uuid(),
  community_post_id uuid not null references community_posts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  reaction_type text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (community_post_id, user_id, reaction_type),
  constraint chk_community_post_reaction_type check (reaction_type in ('like','favorite'))
);

create table if not exists community_post_media (
  id uuid primary key default gen_random_uuid(),
  community_post_id uuid not null references community_posts(id) on delete cascade,
  media_type text not null,
  media_url text not null,
  width integer,
  height integer,
  duration_sec integer,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_community_post_media_type check (media_type in ('image','video'))
);

create index if not exists idx_community_post_media_post_sort
  on community_post_media(community_post_id, sort_order);

create table if not exists community_blacklist (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  operator_id uuid references users(id),
  reason text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (community_id, user_id)
);

create index if not exists idx_community_blacklist_community_created
  on community_blacklist(community_id, created_at desc);

create table if not exists community_transfer_requests (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  from_user_id uuid not null references users(id) on delete cascade,
  to_user_id uuid not null references users(id) on delete cascade,
  transfer_code_hash text,
  status text not null default 'pending',
  requested_at timestamptz not null default now(),
  confirmed_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint chk_community_transfer_status check (status in ('pending','accepted','rejected','expired','cancelled'))
);

create index if not exists idx_community_transfer_requests_community_created
  on community_transfer_requests(community_id, created_at desc);

create table if not exists community_announcements (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  author_id uuid references users(id) on delete set null,
  content text not null,
  is_pinned boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table if exists community_announcements
  alter column author_id drop not null;

create index if not exists idx_community_announcements_community_created
  on community_announcements(community_id, created_at desc);

create table if not exists community_member_actions (
  id uuid primary key default gen_random_uuid(),
  community_id uuid not null references communities(id) on delete cascade,
  operator_id uuid references users(id),
  target_user_id uuid references users(id),
  action_type text not null,
  reason text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_community_member_actions_community_created
  on community_member_actions(community_id, created_at desc);

-- ------------------------------------------------------------
-- 6) MESSAGE CENTER
-- ------------------------------------------------------------

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  conversation_type text not null,
  title text,
  avatar_url text,
  community_id uuid references communities(id),
  created_by uuid references users(id),
  last_message_id uuid,
  last_message_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_conversation_type check (conversation_type in ('private','group','system'))
);

alter table if exists conversations
  add column if not exists biz_type text not null default 'dm',
  add column if not exists settings_json jsonb not null default '{}'::jsonb,
  add column if not exists is_archived boolean not null default false;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'chk_conversations_biz_type') then
    alter table conversations
      add constraint chk_conversations_biz_type
      check (biz_type in ('dm','story','group','system','community'));
  end if;
end$$;

create index if not exists idx_conversations_last_message_at
  on conversations(last_message_at desc);

create index if not exists idx_conversations_type_biz_updated
  on conversations(conversation_type, biz_type, updated_at desc);

create table if not exists conversation_members (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  role text not null default 'member',
  muted boolean not null default false,
  pinned boolean not null default false,
  unread_count integer not null default 0,
  last_read_message_id uuid,
  last_read_at timestamptz,
  joined_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (conversation_id, user_id)
);

alter table if exists conversation_members
  add column if not exists deleted_at timestamptz,
  add column if not exists is_blocked boolean not null default false;

create index if not exists idx_conversation_members_user
  on conversation_members(user_id, updated_at desc);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  sender_id uuid references users(id),
  message_type text not null,
  content text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'sent',
  created_at timestamptz not null default now(),
  constraint chk_message_type check (message_type in ('text','image','video','card','system'))
);

alter table if exists messages
  add column if not exists reply_to_message_id uuid references messages(id) on delete set null,
  add column if not exists client_message_id text,
  add column if not exists edited_at timestamptz,
  add column if not exists revoked_at timestamptz;

create index if not exists idx_messages_conversation_created
  on messages(conversation_id, created_at desc);

create unique index if not exists uq_messages_conversation_client_message_id
  on messages(conversation_id, client_message_id)
  where client_message_id is not null;

create table if not exists message_attachments (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references messages(id) on delete cascade,
  attachment_type text not null,
  file_url text not null,
  thumb_url text,
  width integer,
  height integer,
  duration_sec integer,
  size_bytes bigint,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint chk_message_attachment_type check (attachment_type in ('image','video','audio','file','location','card'))
);

create index if not exists idx_message_attachments_message_created
  on message_attachments(message_id, created_at desc);

create table if not exists message_reactions (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references messages(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  emoji text not null,
  created_at timestamptz not null default now(),
  unique (message_id, user_id, emoji)
);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'fk_conversations_last_message') then
    alter table conversations
      add constraint fk_conversations_last_message
      foreign key (last_message_id) references messages(id) on delete set null not valid;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'fk_conversation_members_last_read_message') then
    alter table conversation_members
      add constraint fk_conversation_members_last_read_message
      foreign key (last_read_message_id) references messages(id) on delete set null not valid;
  end if;
end$$;

-- ------------------------------------------------------------
-- 7) NOTIFICATIONS
-- ------------------------------------------------------------

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  type text not null,
  title text,
  content text,
  actor_id uuid references users(id),
  target_type text,
  target_id uuid,
  is_read boolean not null default false,
  read_at timestamptz,
  action_url text,
  extra jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_notifications_user_read_created
  on notifications(user_id, is_read, created_at desc);

create index if not exists idx_notifications_type_created
  on notifications(type, created_at desc);

-- ------------------------------------------------------------
-- 8) COIN (马内)
-- ------------------------------------------------------------

create table if not exists wallet_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references users(id) on delete cascade,
  balance bigint not null default 0,
  frozen_balance bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists wallet_ledger (
  id uuid primary key default gen_random_uuid(),
  wallet_id uuid not null references wallet_accounts(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  change_amount bigint not null,
  balance_after bigint not null,
  biz_type text not null,
  biz_id text,
  remark text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_wallet_ledger_user_created
  on wallet_ledger(user_id, created_at desc);

create index if not exists idx_wallet_ledger_biz
  on wallet_ledger(biz_type, biz_id);

create table if not exists coin_tasks (
  id uuid primary key default gen_random_uuid(),
  task_key text not null unique,
  title text not null,
  reward_amount bigint not null,
  task_type text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists user_coin_task_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  task_id uuid not null references coin_tasks(id) on delete cascade,
  progress integer not null default 0,
  target integer not null default 1,
  status text not null default 'ongoing',
  reward_claimed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, task_id)
);

-- ------------------------------------------------------------
-- 9) SEARCH & DISCOVERY
-- ------------------------------------------------------------

create table if not exists search_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  scope text not null,
  keyword text not null,
  result_count integer not null default 0,
  sort_by text,
  created_at timestamptz not null default now()
);

create index if not exists idx_search_logs_scope_created
  on search_logs(scope, created_at desc);

create index if not exists idx_search_logs_keyword
  on search_logs(keyword);

create table if not exists search_documents (
  id uuid primary key default gen_random_uuid(),
  scope text not null,
  entity_type text not null,
  entity_id uuid not null,
  title text not null default '',
  subtitle text,
  content text,
  author_id uuid references users(id) on delete set null,
  tags text[] not null default '{}'::text[],
  heat_score numeric(12,2) not null default 0,
  status text not null default 'active',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (scope, entity_type, entity_id)
);

create index if not exists idx_search_documents_scope_status_heat
  on search_documents(scope, status, heat_score desc, published_at desc);

create index if not exists idx_search_documents_title_trgm
  on search_documents using gin(title gin_trgm_ops);

create index if not exists idx_search_documents_content_trgm
  on search_documents using gin(content gin_trgm_ops);

create index if not exists idx_search_documents_tags_gin
  on search_documents using gin(tags);

create table if not exists user_search_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  scope text not null,
  keyword text not null,
  last_used_at timestamptz not null default now(),
  use_count integer not null default 1,
  unique (user_id, scope, keyword)
);

create index if not exists idx_user_search_history_user_scope
  on user_search_history(user_id, scope, last_used_at desc);

-- ------------------------------------------------------------
-- 10) ANALYTICS EVENTS & DAILY FACT TABLES
-- ------------------------------------------------------------

create table if not exists event_logs (
  id uuid primary key default gen_random_uuid(),
  event_time timestamptz not null default now(),
  user_id uuid references users(id) on delete set null,
  anonymous_id text,
  session_id text,
  page_path text,
  event_name text not null,
  source text not null default 'web',
  platform text not null default 'web',
  entity_type text,
  entity_id uuid,
  trace_id text,
  referrer text,
  duration_ms integer,
  numeric_value numeric(18,4),
  properties jsonb not null default '{}'::jsonb
);

create index if not exists idx_event_logs_time
  on event_logs(event_time desc);

create index if not exists idx_event_logs_user_time
  on event_logs(user_id, event_time desc);

create index if not exists idx_event_logs_event_time
  on event_logs(event_name, event_time desc);

create index if not exists idx_event_logs_entity
  on event_logs(entity_type, entity_id, event_time desc);

create index if not exists idx_event_logs_platform_time
  on event_logs(platform, event_time desc);

-- Daily aggregates (written by scheduled jobs)
create table if not exists analytics_daily_user_metrics (
  metric_date date not null,
  user_id uuid not null references users(id) on delete cascade,
  login_count integer not null default 0,
  play_sessions integer not null default 0,
  play_turns integer not null default 0,
  posts_published integer not null default 0,
  post_interactions integer not null default 0,
  messages_sent integer not null default 0,
  communities_joined integer not null default 0,
  coins_income bigint not null default 0,
  coins_expense bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, user_id)
);

create table if not exists analytics_daily_world_metrics (
  metric_date date not null,
  world_card_id uuid not null references world_cards(id) on delete cascade,
  impressions integer not null default 0,
  detail_views integer not null default 0,
  likes integer not null default 0,
  favorites integer not null default 0,
  follows integer not null default 0,
  plays integer not null default 0,
  avg_rounds numeric(10,2) not null default 0,
  completion_rate numeric(10,4) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, world_card_id)
);

create table if not exists analytics_daily_community_metrics (
  metric_date date not null,
  community_id uuid not null references communities(id) on delete cascade,
  new_members integer not null default 0,
  active_members integer not null default 0,
  posts_count integer not null default 0,
  comments_count integer not null default 0,
  reactions_count integer not null default 0,
  churn_members integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, community_id)
);

create table if not exists analytics_daily_message_metrics (
  metric_date date not null,
  conversation_id uuid not null references conversations(id) on delete cascade,
  messages_sent integer not null default 0,
  active_users integer not null default 0,
  replies_within_5m integer not null default 0,
  avg_response_sec numeric(10,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, conversation_id)
);

create table if not exists analytics_daily_search_metrics (
  metric_date date not null,
  scope text not null,
  keyword text not null,
  searches integer not null default 0,
  search_users integer not null default 0,
  zero_result_count integer not null default 0,
  click_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, scope, keyword)
);

create table if not exists analytics_daily_creator_metrics (
  metric_date date not null,
  creator_id uuid not null references users(id) on delete cascade,
  card_mode text not null,
  cards_created integer not null default 0,
  cards_published integer not null default 0,
  total_plays integer not null default 0,
  total_likes integer not null default 0,
  total_favorites integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, creator_id, card_mode)
);

create table if not exists analytics_daily_user_relation_metrics (
  metric_date date not null,
  user_id uuid not null references users(id) on delete cascade,
  new_followers integer not null default 0,
  unfollows integer not null default 0,
  active_followers integer not null default 0,
  interaction_rate numeric(10,4) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, user_id)
);

create table if not exists analytics_daily_funnel_metrics (
  metric_date date not null,
  funnel_name text not null,
  step_name text not null,
  step_order integer not null,
  users_count integer not null default 0,
  conversion_rate numeric(10,4) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (metric_date, funnel_name, step_name)
);

create or replace view vw_user_profile_metrics as
select
  u.id as user_id,
  u.nickname,
  u.avatar_url,
  coalesce(w.balance, 0) as mane_balance,
  coalesce(p.post_count, 0) as post_count,
  coalesce(fg.following_count, 0) as following_count,
  coalesce(fr.follower_count, 0) as follower_count
from users u
left join wallet_accounts w on w.user_id = u.id
left join (
  select author_id, count(*)::integer as post_count
  from posts
  where deleted_at is null and status = 'published'
  group by author_id
) p on p.author_id = u.id
left join (
  select follower_id, count(*)::integer as following_count
  from user_follows
  where deleted_at is null and status = 'active'
  group by follower_id
) fg on fg.follower_id = u.id
left join (
  select following_id, count(*)::integer as follower_count
  from user_follows
  where deleted_at is null and status = 'active'
  group by following_id
) fr on fr.following_id = u.id;

create or replace view vw_world_card_metrics as
select
  wc.id as world_card_id,
  wc.title,
  wc.author_id,
  coalesce(ws.likes_count, 0) as likes_count,
  coalesce(ws.favorites_count, 0) as favorites_count,
  coalesce(ws.comments_count, 0) as comments_count,
  coalesce(ws.plays_count, 0) as plays_count,
  coalesce(ws.followers_count, 0) as reserve_count,
  coalesce(ws.heat_score, 0) as heat_score
from world_cards wc
left join world_card_stats ws on ws.world_card_id = wc.id
where wc.deleted_at is null;

-- ------------------------------------------------------------
-- 11) TRIGGERS
-- ------------------------------------------------------------

do $$
begin
  if not exists (select 1 from pg_trigger where tgname = 'trg_users_set_updated_at') then
    create trigger trg_users_set_updated_at before update on users for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_auth_providers_set_updated_at') then
    create trigger trg_user_auth_providers_set_updated_at before update on user_auth_providers for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_sessions_set_updated_at') then
    create trigger trg_user_sessions_set_updated_at before update on user_sessions for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_cards_set_updated_at') then
    create trigger trg_world_cards_set_updated_at before update on world_cards for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_stats_set_updated_at') then
    create trigger trg_world_card_stats_set_updated_at before update on world_card_stats for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_game_sessions_set_updated_at') then
    create trigger trg_game_sessions_set_updated_at before update on game_sessions for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_posts_set_updated_at') then
    create trigger trg_community_posts_set_updated_at before update on community_posts for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_profiles_set_updated_at') then
    create trigger trg_user_profiles_set_updated_at before update on user_profiles for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_settings_set_updated_at') then
    create trigger trg_user_settings_set_updated_at before update on user_settings for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_follows_set_updated_at') then
    create trigger trg_user_follows_set_updated_at before update on user_follows for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_creator_cards_set_updated_at') then
    create trigger trg_creator_cards_set_updated_at before update on creator_cards for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_creator_card_assets_set_updated_at') then
    create trigger trg_creator_card_assets_set_updated_at before update on creator_card_assets for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_characters_set_updated_at') then
    create trigger trg_world_card_characters_set_updated_at before update on world_card_characters for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_media_set_updated_at') then
    create trigger trg_world_card_media_set_updated_at before update on world_card_media for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_reservations_set_updated_at') then
    create trigger trg_world_card_reservations_set_updated_at before update on world_card_reservations for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_interactions_set_updated_at') then
    create trigger trg_world_card_interactions_set_updated_at before update on world_card_interactions for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_comments_set_updated_at') then
    create trigger trg_world_card_comments_set_updated_at before update on world_card_comments for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_world_card_rank_snapshots_set_updated_at') then
    create trigger trg_world_card_rank_snapshots_set_updated_at before update on world_card_rank_snapshots for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_posts_set_updated_at') then
    create trigger trg_posts_set_updated_at before update on posts for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_post_comments_set_updated_at') then
    create trigger trg_post_comments_set_updated_at before update on post_comments for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_post_reactions_set_updated_at') then
    create trigger trg_post_reactions_set_updated_at before update on post_reactions for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_communities_set_updated_at') then
    create trigger trg_communities_set_updated_at before update on communities for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_members_set_updated_at') then
    create trigger trg_community_members_set_updated_at before update on community_members for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_join_requests_set_updated_at') then
    create trigger trg_community_join_requests_set_updated_at before update on community_join_requests for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_post_comments_set_updated_at') then
    create trigger trg_community_post_comments_set_updated_at before update on community_post_comments for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_post_reactions_set_updated_at') then
    create trigger trg_community_post_reactions_set_updated_at before update on community_post_reactions for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_post_media_set_updated_at') then
    create trigger trg_community_post_media_set_updated_at before update on community_post_media for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_blacklist_set_updated_at') then
    create trigger trg_community_blacklist_set_updated_at before update on community_blacklist for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_transfer_requests_set_updated_at') then
    create trigger trg_community_transfer_requests_set_updated_at before update on community_transfer_requests for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_community_announcements_set_updated_at') then
    create trigger trg_community_announcements_set_updated_at before update on community_announcements for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_conversations_set_updated_at') then
    create trigger trg_conversations_set_updated_at before update on conversations for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_conversation_members_set_updated_at') then
    create trigger trg_conversation_members_set_updated_at before update on conversation_members for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_wallet_accounts_set_updated_at') then
    create trigger trg_wallet_accounts_set_updated_at before update on wallet_accounts for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_coin_tasks_set_updated_at') then
    create trigger trg_coin_tasks_set_updated_at before update on coin_tasks for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_user_coin_task_progress_set_updated_at') then
    create trigger trg_user_coin_task_progress_set_updated_at before update on user_coin_task_progress for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_search_documents_set_updated_at') then
    create trigger trg_search_documents_set_updated_at before update on search_documents for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_user_metrics_set_updated_at') then
    create trigger trg_analytics_daily_user_metrics_set_updated_at before update on analytics_daily_user_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_world_metrics_set_updated_at') then
    create trigger trg_analytics_daily_world_metrics_set_updated_at before update on analytics_daily_world_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_community_metrics_set_updated_at') then
    create trigger trg_analytics_daily_community_metrics_set_updated_at before update on analytics_daily_community_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_message_metrics_set_updated_at') then
    create trigger trg_analytics_daily_message_metrics_set_updated_at before update on analytics_daily_message_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_search_metrics_set_updated_at') then
    create trigger trg_analytics_daily_search_metrics_set_updated_at before update on analytics_daily_search_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_creator_metrics_set_updated_at') then
    create trigger trg_analytics_daily_creator_metrics_set_updated_at before update on analytics_daily_creator_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_user_relation_metrics_set_updated_at') then
    create trigger trg_analytics_daily_user_relation_metrics_set_updated_at before update on analytics_daily_user_relation_metrics for each row execute function set_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_analytics_daily_funnel_metrics_set_updated_at') then
    create trigger trg_analytics_daily_funnel_metrics_set_updated_at before update on analytics_daily_funnel_metrics for each row execute function set_updated_at();
  end if;
end$$;

-- ------------------------------------------------------------
-- 12) COMMENTS (key entities)
-- ------------------------------------------------------------

comment on table users is '用户主表：支持邮箱/手机号/三方登录主体信息';
comment on table creator_cards is '创作中心三种模式卡片草稿表：long_narrative/short_narrative/virtual_character';
comment on table creator_card_assets is '创作卡素材资源（图片/视频/音频/参考资料）';
comment on table world_cards is '已发布可玩故事卡（首页/Drama/详情/开刷入口）';
comment on table world_card_media is '故事卡媒体（详情轮播/Drama大图/游戏场景）';
comment on table world_card_reservations is '用户预约关注故事卡，支持通知偏好';
comment on table world_card_rank_snapshots is '排行榜快照头表（推荐榜/热播榜/预约榜）';
comment on table world_card_rank_items is '排行榜快照明细（名次+分值+关联故事）';
comment on table game_sessions is '开刷会话主表，每次进入 play/core 创建会话';
comment on table game_turns is '开刷回合记录，保存输入、叙事、状态增量、抛球问题与选项';
comment on table posts is '动态主表，支持图文/视频/故事卡分享';
comment on table communities is '社区主表';
comment on table community_posts is '社区动态，支持绑定故事卡';
comment on table community_post_media is '社区动态媒体附件';
comment on table community_blacklist is '社区黑名单';
comment on table community_transfer_requests is '社区转让请求与审批流水';
comment on table conversations is '消息会话（私聊/群聊/系统）';
comment on table messages is '消息正文';
comment on table message_attachments is '消息附件（图片/视频/定位/卡片）';
comment on table notifications is '通知中心（赞藏/关注/评论@/系统）';
comment on table wallet_ledger is '马内账本流水（强审计）';
comment on table search_documents is '检索文档索引表（全局/社区/消息检索统一入口）';
comment on table event_logs is '全量行为事件日志，用于深度分析与漏斗';
comment on table analytics_daily_creator_metrics is '创作者按模式（日）聚合指标';
comment on table analytics_daily_search_metrics is '搜索关键词（日）聚合指标';
