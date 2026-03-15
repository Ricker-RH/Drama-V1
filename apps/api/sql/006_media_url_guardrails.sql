-- Media URL guardrails (P2-1)
-- Goal: block NEW data URL persistence in DB columns/json fields that should store only object-storage URLs.
-- Strategy: add NOT VALID check constraints so existing legacy rows do not block deployment.

DO $$
BEGIN
  IF to_regclass('public.users') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_users_avatar_url_not_data') THEN
    ALTER TABLE users
      ADD CONSTRAINT chk_users_avatar_url_not_data
      CHECK (
        avatar_url IS NULL
        OR btrim(avatar_url) = ''
        OR lower(btrim(avatar_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.user_profiles') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_user_profiles_cover_url_not_data') THEN
    ALTER TABLE user_profiles
      ADD CONSTRAINT chk_user_profiles_cover_url_not_data
      CHECK (
        cover_url IS NULL
        OR btrim(cover_url) = ''
        OR lower(btrim(cover_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.communities') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_communities_cover_url_not_data') THEN
    ALTER TABLE communities
      ADD CONSTRAINT chk_communities_cover_url_not_data
      CHECK (
        cover_url IS NULL
        OR btrim(cover_url) = ''
        OR lower(btrim(cover_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.world_cards') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_world_cards_cover_url_not_data') THEN
    ALTER TABLE world_cards
      ADD CONSTRAINT chk_world_cards_cover_url_not_data
      CHECK (
        cover_url IS NULL
        OR btrim(cover_url) = ''
        OR lower(btrim(cover_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.world_card_characters') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_world_card_chars_avatar_url_not_data') THEN
    ALTER TABLE world_card_characters
      ADD CONSTRAINT chk_world_card_chars_avatar_url_not_data
      CHECK (
        avatar_url IS NULL
        OR btrim(avatar_url) = ''
        OR lower(btrim(avatar_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.world_card_media') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_world_card_media_media_url_not_data') THEN
    ALTER TABLE world_card_media
      ADD CONSTRAINT chk_world_card_media_media_url_not_data
      CHECK (
        btrim(media_url) <> ''
        AND lower(btrim(media_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.world_card_media') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_world_card_media_thumb_url_not_data') THEN
    ALTER TABLE world_card_media
      ADD CONSTRAINT chk_world_card_media_thumb_url_not_data
      CHECK (
        thumb_url IS NULL
        OR btrim(thumb_url) = ''
        OR lower(btrim(thumb_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.post_media') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_post_media_media_url_not_data') THEN
    ALTER TABLE post_media
      ADD CONSTRAINT chk_post_media_media_url_not_data
      CHECK (
        btrim(media_url) <> ''
        AND lower(btrim(media_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.community_post_media') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_community_post_media_media_url_not_data') THEN
    ALTER TABLE community_post_media
      ADD CONSTRAINT chk_community_post_media_media_url_not_data
      CHECK (
        btrim(media_url) <> ''
        AND lower(btrim(media_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.creator_card_assets') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_creator_card_assets_asset_url_not_data') THEN
    ALTER TABLE creator_card_assets
      ADD CONSTRAINT chk_creator_card_assets_asset_url_not_data
      CHECK (
        btrim(asset_url) <> ''
        AND lower(btrim(asset_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.creator_card_assets') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_creator_card_assets_preview_url_not_data') THEN
    ALTER TABLE creator_card_assets
      ADD CONSTRAINT chk_creator_card_assets_preview_url_not_data
      CHECK (
        preview_url IS NULL
        OR btrim(preview_url) = ''
        OR lower(btrim(preview_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.conversations') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_conversations_avatar_url_not_data') THEN
    ALTER TABLE conversations
      ADD CONSTRAINT chk_conversations_avatar_url_not_data
      CHECK (
        avatar_url IS NULL
        OR btrim(avatar_url) = ''
        OR lower(btrim(avatar_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.message_attachments') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_message_attachments_file_url_not_data') THEN
    ALTER TABLE message_attachments
      ADD CONSTRAINT chk_message_attachments_file_url_not_data
      CHECK (
        btrim(file_url) <> ''
        AND lower(btrim(file_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.message_attachments') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_message_attachments_thumb_url_not_data') THEN
    ALTER TABLE message_attachments
      ADD CONSTRAINT chk_message_attachments_thumb_url_not_data
      CHECK (
        thumb_url IS NULL
        OR btrim(thumb_url) = ''
        OR lower(btrim(thumb_url)) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.messages') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_messages_payload_url_not_data') THEN
    ALTER TABLE messages
      ADD CONSTRAINT chk_messages_payload_url_not_data
      CHECK (
        coalesce(nullif(btrim(payload->>'url'), ''), '') = ''
        OR lower(btrim(payload->>'url')) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.creator_cards') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_creator_cards_publish_cover_not_data') THEN
    ALTER TABLE creator_cards
      ADD CONSTRAINT chk_creator_cards_publish_cover_not_data
      CHECK (
        coalesce(nullif(btrim(publish_info_json->>'cover'), ''), '') = ''
        OR lower(btrim(publish_info_json->>'cover')) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;

  IF to_regclass('public.creator_card_publish_logs') IS NOT NULL
     AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_card_publish_logs_cover_not_data') THEN
    ALTER TABLE creator_card_publish_logs
      ADD CONSTRAINT chk_card_publish_logs_cover_not_data
      CHECK (
        coalesce(nullif(btrim(publish_payload_json->>'cover'), ''), '') = ''
        OR lower(btrim(publish_payload_json->>'cover')) NOT LIKE 'data:%'
      ) NOT VALID;
  END IF;
END $$;
