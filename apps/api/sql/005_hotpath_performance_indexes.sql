-- Hot-path performance indexes (auth/feed/community/messages)
-- Non-destructive migration: only adds indexes for high-frequency filters and counts.

-- ------------------------------------------------------------
-- 1) Auth / identity lookups
-- ------------------------------------------------------------
create index if not exists idx_users_email_lower_active
  on users ((lower(email)))
  where deleted_at is null and status = 'active';

create index if not exists idx_users_nickname_lower_active
  on users ((lower(nickname)))
  where deleted_at is null and status = 'active';

-- ------------------------------------------------------------
-- 2) Follow graph counters
-- ------------------------------------------------------------
create index if not exists idx_user_follows_following_active
  on user_follows(following_id)
  where status = 'active' and deleted_at is null;

create index if not exists idx_user_follows_follower_active
  on user_follows(follower_id)
  where status = 'active' and deleted_at is null;

-- ------------------------------------------------------------
-- 3) Dynamic posts
-- ------------------------------------------------------------
create index if not exists idx_posts_published_created
  on posts(created_at desc)
  where status = 'published' and deleted_at is null;

create index if not exists idx_posts_author_published_created
  on posts(author_id, created_at desc)
  where status = 'published' and deleted_at is null;

create index if not exists idx_post_comments_post_active_created
  on post_comments(post_id, created_at desc)
  where status = 'active' and deleted_at is null;

create index if not exists idx_post_reactions_post_type
  on post_reactions(post_id, reaction_type);

-- ------------------------------------------------------------
-- 4) Community / community posts
-- ------------------------------------------------------------
create index if not exists idx_community_members_active_community_user
  on community_members(community_id, user_id)
  where status = 'active';

create index if not exists idx_community_members_active_community
  on community_members(community_id)
  where status = 'active';

create index if not exists idx_community_posts_active_feed
  on community_posts(community_id, created_at desc)
  where status = 'published' and deleted_at is null;

create index if not exists idx_community_posts_active_created
  on community_posts(created_at desc)
  where status = 'published' and deleted_at is null;

create index if not exists idx_community_post_comments_active_post_created
  on community_post_comments(community_post_id, created_at desc)
  where status = 'active';

create index if not exists idx_community_post_reactions_post_type_status
  on community_post_reactions(community_post_id, reaction_type, status);

create index if not exists idx_community_post_reactions_favorite_active
  on community_post_reactions(community_post_id)
  where reaction_type = 'favorite' and status = 'active';

-- ------------------------------------------------------------
-- 5) Messaging inbox/member filters
-- ------------------------------------------------------------
create index if not exists idx_conversation_members_user_active
  on conversation_members(user_id, updated_at desc)
  where deleted_at is null;

create index if not exists idx_conversation_members_conversation_active
  on conversation_members(conversation_id, user_id)
  where deleted_at is null;

-- ------------------------------------------------------------
-- 6) Notification unread list
-- ------------------------------------------------------------
create index if not exists idx_notifications_user_unread_created
  on notifications(user_id, created_at desc)
  where read_at is null;
