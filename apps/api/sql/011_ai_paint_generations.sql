-- Persist AI text-to-image generation history for workshop paint.
-- Safe additive migration.

create table if not exists ai_paint_generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete set null,
  provider text not null default 'dashscope',
  model text not null,
  prompt text not null,
  enhanced_prompt text not null,
  negative_prompt text not null default '',
  style text not null default 'cinematic',
  ratio text not null default '1:1',
  category text not null default 'sfw',
  count_requested integer not null default 1,
  success_count integer not null default 0,
  warnings jsonb not null default '[]'::jsonb,
  images jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_ai_paint_generations_user_created
  on ai_paint_generations(user_id, created_at desc);

create index if not exists idx_ai_paint_generations_created
  on ai_paint_generations(created_at desc);
