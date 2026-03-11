create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  nickname text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists game_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  category text not null,
  sub_category text not null,
  round_no integer not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists game_turns (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references game_sessions(id) on delete cascade,
  round_no integer not null,
  user_input text not null,
  narrative text not null,
  state_delta jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_game_turns_session_round
  on game_turns(session_id, round_no);

create table if not exists world_cards (
  id uuid primary key default gen_random_uuid(),
  author_id uuid,
  title text not null,
  setting text not null default '',
  rules_json jsonb not null default '[]'::jsonb,
  publish_status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid,
  content text not null,
  likes_count integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
