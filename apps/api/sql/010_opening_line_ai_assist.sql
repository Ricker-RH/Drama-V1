-- Add opening-line AI-assist controls for creator/runtime card flow.
-- Non-destructive migration.

alter table if exists creator_cards
  add column if not exists opening_line_ai_assist boolean not null default false;

alter table if exists world_cards
  add column if not exists opening_line_ai_assist boolean not null default false;
