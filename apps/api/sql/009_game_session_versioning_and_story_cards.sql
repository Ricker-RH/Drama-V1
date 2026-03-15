-- Gameplay session versioning + story-card linkage.
-- Goals:
-- 1) Distinguish gameplay-breaking publish vs cosmetic publish.
-- 2) Keep resumable play sessions addressable from message cards.
-- 3) Interrupt old sessions when gameplay version changes.

alter table if exists world_cards
  add column if not exists gameplay_version integer not null default 1,
  add column if not exists appearance_version integer not null default 1,
  add column if not exists last_gameplay_change_at timestamptz;

alter table if exists creator_cards
  add column if not exists gameplay_version integer not null default 1,
  add column if not exists appearance_version integer not null default 1,
  add column if not exists last_gameplay_signature text,
  add column if not exists last_publish_class text not null default 'gameplay';

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'chk_creator_cards_last_publish_class') then
    alter table creator_cards
      add constraint chk_creator_cards_last_publish_class
      check (last_publish_class in ('gameplay', 'cosmetic'));
  end if;
end$$;

alter table if exists game_sessions
  add column if not exists gameplay_version integer not null default 1,
  add column if not exists appearance_version integer not null default 1,
  add column if not exists paused_at timestamptz,
  add column if not exists interrupted_at timestamptz,
  add column if not exists interrupted_reason text,
  add column if not exists story_conversation_id uuid references conversations(id) on delete set null,
  add column if not exists story_message_id uuid references messages(id) on delete set null;

update game_sessions
set status = 'active'
where status is null
   or btrim(status) = '';

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'chk_game_sessions_status') then
    alter table game_sessions
      add constraint chk_game_sessions_status
      check (status in ('active', 'paused', 'interrupted', 'completed', 'archived'));
  end if;
end$$;

create index if not exists idx_game_sessions_world_status_updated
  on game_sessions(world_card_id, status, updated_at desc);

create index if not exists idx_game_sessions_story_conversation
  on game_sessions(story_conversation_id, updated_at desc)
  where story_conversation_id is not null;

create index if not exists idx_messages_card_play_session
  on messages ((payload->>'kind'), (payload->>'worldId'))
  where message_type = 'card';
