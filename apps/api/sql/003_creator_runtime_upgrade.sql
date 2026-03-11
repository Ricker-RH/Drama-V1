-- Creator/runtime quality upgrade for 3 card modes

alter table if exists creator_cards
  add column if not exists runtime_config_json jsonb not null default '{}'::jsonb,
  add column if not exists quality_rules_json jsonb not null default '{}'::jsonb,
  add column if not exists ux_config_json jsonb not null default '{}'::jsonb,
  add column if not exists publish_info_json jsonb not null default '{}'::jsonb,
  add column if not exists last_quality_score numeric(5,2),
  add column if not exists published_at timestamptz,
  add column if not exists archived_at timestamptz;

create index if not exists idx_creator_cards_author_status_updated
  on creator_cards(author_id, publish_status, updated_at desc);

create table if not exists creator_card_npcs (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  npc_key text not null,
  display_name text not null,
  role_type text not null default 'support',
  stance text,
  motivation text,
  secrets text,
  trigger_conditions text,
  speak_style text,
  availability_window text,
  sort_order integer not null default 0,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint chk_creator_card_npcs_role_type check (role_type in ('main','support','random','boss','guide'))
);

create unique index if not exists uq_creator_card_npcs_card_key
  on creator_card_npcs(creator_card_id, npc_key);

create index if not exists idx_creator_card_npcs_card_sort
  on creator_card_npcs(creator_card_id, sort_order);

create table if not exists creator_card_events (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  event_key text not null,
  title text not null,
  mode_scope text,
  trigger_expr text,
  cooldown_turns integer not null default 0,
  impact_state_delta jsonb not null default '{}'::jsonb,
  narrative_seed text,
  priority integer not null default 0,
  is_enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create unique index if not exists uq_creator_card_events_card_key
  on creator_card_events(creator_card_id, event_key);

create index if not exists idx_creator_card_events_card_enabled_priority
  on creator_card_events(creator_card_id, is_enabled, priority desc);

create table if not exists creator_card_publish_logs (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  world_card_id uuid references world_cards(id),
  publish_payload_json jsonb not null default '{}'::jsonb,
  sync_to_dynamic boolean not null default false,
  status text not null default 'published',
  note text,
  created_at timestamptz not null default now(),
  created_by uuid references users(id),
  constraint chk_creator_card_publish_logs_status check (status in ('published','failed','rollback'))
);

create index if not exists idx_creator_card_publish_logs_card_created
  on creator_card_publish_logs(creator_card_id, created_at desc);

alter table if exists world_cards
  add column if not exists mode text,
  add column if not exists chapter_label text,
  add column if not exists main_quest text,
  add column if not exists key_npc text,
  add column if not exists key_clues text,
  add column if not exists opening_summary text,
  add column if not exists play_hook text,
  add column if not exists playable_config_json jsonb not null default '{}'::jsonb,
  add column if not exists source_creator_card_id uuid references creator_cards(id);

create index if not exists idx_world_cards_source_creator
  on world_cards(source_creator_card_id);

create index if not exists idx_world_cards_mode_publish_created
  on world_cards(mode, publish_status, created_at desc);

create index if not exists idx_world_cards_story_fields_trgm
  on world_cards using gin((coalesce(main_quest,'') || ' ' || coalesce(key_npc,'') || ' ' || coalesce(key_clues,'')) gin_trgm_ops);

update world_cards
set mode = coalesce(mode, 'long_narrative')
where mode is null;

alter table if exists world_cards
  alter column mode set default 'long_narrative';
