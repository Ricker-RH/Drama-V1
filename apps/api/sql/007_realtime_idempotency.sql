-- Realtime + idempotent mutation foundations (P2-2)

-- ------------------------------------------------------------
-- 1) Idempotent token support for comments
-- ------------------------------------------------------------
alter table if exists post_comments
  add column if not exists client_token text;

create unique index if not exists uq_post_comments_post_user_client_token
  on post_comments(post_id, user_id, client_token)
  where client_token is not null;

alter table if exists community_post_comments
  add column if not exists client_token text;

create unique index if not exists uq_community_post_comments_post_user_client_token
  on community_post_comments(community_post_id, user_id, client_token)
  where client_token is not null;

alter table if exists world_card_comments
  add column if not exists client_token text;

create unique index if not exists uq_world_card_comments_world_user_client_token
  on world_card_comments(world_card_id, user_id, client_token)
  where client_token is not null;

-- ------------------------------------------------------------
-- 2) Idempotent world comment likes
-- ------------------------------------------------------------
create table if not exists world_card_comment_likes (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null references world_card_comments(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (comment_id, user_id)
);

create index if not exists idx_world_card_comment_likes_comment
  on world_card_comment_likes(comment_id, created_at desc);

create index if not exists idx_world_card_comment_likes_user
  on world_card_comment_likes(user_id, created_at desc);
