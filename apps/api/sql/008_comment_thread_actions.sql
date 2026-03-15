-- Comment thread actions for dynamic/community:
-- - like / unlike comments (idempotent)
-- - soft delete comments
-- - nested replies remain supported via parent_comment_id

alter table if exists community_post_comments
  add column if not exists deleted_at timestamptz;

create table if not exists post_comment_likes (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null references post_comments(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (comment_id, user_id)
);

create index if not exists idx_post_comment_likes_comment
  on post_comment_likes(comment_id, created_at desc);

create index if not exists idx_post_comment_likes_user
  on post_comment_likes(user_id, created_at desc);

create table if not exists community_post_comment_likes (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null references community_post_comments(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (comment_id, user_id)
);

create index if not exists idx_community_post_comment_likes_comment
  on community_post_comment_likes(comment_id, created_at desc);

create index if not exists idx_community_post_comment_likes_user
  on community_post_comment_likes(user_id, created_at desc);
