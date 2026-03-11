-- Card Template V2 schema baseline
-- Non-destructive migration: add columns/tables for strict template-driven creation.

-- ------------------------------------------------------------
-- 1) creator_cards: shared core + mode-specific structured fields
-- ------------------------------------------------------------
alter table if exists creator_cards
  add column if not exists schema_version text not null default 'v2',
  add column if not exists opening_line text,
  add column if not exists player_identity text,
  add column if not exists primary_goal text,
  add column if not exists core_conflict text,
  add column if not exists tone_style text,
  add column if not exists content_rating text,
  add column if not exists fixed_npc_count integer,
  add column if not exists hard_rules_json jsonb not null default '{}'::jsonb,
  add column if not exists random_npc_policy_json jsonb not null default '{}'::jsonb,
  add column if not exists taboo_topics_json jsonb not null default '[]'::jsonb,
  add column if not exists success_criteria_json jsonb not null default '{}'::jsonb,
  add column if not exists failure_costs_json jsonb not null default '{}'::jsonb,
  add column if not exists mode_payload_json jsonb not null default '{}'::jsonb;

create index if not exists idx_creator_cards_mode_schema_updated
  on creator_cards(card_mode, schema_version, updated_at desc);

-- ------------------------------------------------------------
-- 2) NPCs: enrich profile for fixed/random role governance
-- ------------------------------------------------------------
alter table if exists creator_card_npcs
  add column if not exists is_fixed boolean not null default true,
  add column if not exists public_stance text,
  add column if not exists hidden_motive text,
  add column if not exists relation_to_player text,
  add column if not exists red_lines_json jsonb not null default '[]'::jsonb,
  add column if not exists trigger_conditions_json jsonb not null default '{}'::jsonb,
  add column if not exists profile_json jsonb not null default '{}'::jsonb;

create index if not exists idx_creator_card_npcs_fixed_priority
  on creator_card_npcs(creator_card_id, is_fixed, priority desc);

-- ------------------------------------------------------------
-- 3) Story branch graph (mainly for short_narrative)
-- ------------------------------------------------------------
create table if not exists creator_card_branches (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  node_key text not null,
  node_title text,
  mode_scope text not null default 'short_narrative',
  entry_condition_json jsonb not null default '{}'::jsonb,
  choices_json jsonb not null default '[]'::jsonb,
  merge_to_node text,
  ending_anchor text,
  priority integer not null default 0,
  enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (creator_card_id, node_key)
);

create index if not exists idx_creator_card_branches_creator_scope
  on creator_card_branches(creator_card_id, mode_scope, enabled, priority desc);

-- ------------------------------------------------------------
-- 4) State blueprint (allowed mutable states + bounds)
-- ------------------------------------------------------------
create table if not exists creator_card_state_blueprints (
  id uuid primary key default gen_random_uuid(),
  creator_card_id uuid not null references creator_cards(id) on delete cascade,
  scope text not null default 'shared',
  state_key text not null,
  state_type text not null default 'number',
  initial_value_json jsonb not null default 'null'::jsonb,
  min_value numeric,
  max_value numeric,
  description text,
  mutable boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (creator_card_id, scope, state_key)
);

create index if not exists idx_creator_card_state_blueprints_card_scope
  on creator_card_state_blueprints(creator_card_id, scope);

-- ------------------------------------------------------------
-- 5) world_cards: publish snapshot strong fields for runtime
-- ------------------------------------------------------------
alter table if exists world_cards
  add column if not exists opening_line text,
  add column if not exists player_identity text,
  add column if not exists primary_goal text,
  add column if not exists core_conflict text,
  add column if not exists tone_style text,
  add column if not exists fixed_npc_count integer,
  add column if not exists hard_rules_json jsonb not null default '{}'::jsonb,
  add column if not exists random_npc_policy_json jsonb not null default '{}'::jsonb,
  add column if not exists schema_version text not null default 'v2';

create index if not exists idx_world_cards_mode_schema_publish
  on world_cards(mode, schema_version, publish_status, updated_at desc);
