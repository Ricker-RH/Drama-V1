import { query } from "../db/client.js";

export async function createUser({ email, passwordHash, nickname }) {
  const result = await query(
    `insert into users(email, password_hash, nickname)
     values ($1, $2, $3)
     returning id, email, nickname, created_at`,
    [email, passwordHash, nickname]
  );

  return result.rows[0];
}

export async function getUserByEmail(email) {
  const result = await query(
    `select id, email, nickname, created_at from users where email = $1 limit 1`,
    [email]
  );

  return result.rows[0] || null;
}

export async function getUserAuthByIdentifier(identifier) {
  const key = String(identifier || "").trim().toLowerCase();
  if (!key) return null;
  const result = await query(
    `select id, email, nickname, password_hash, created_at
     from users
     where status = 'active'
       and deleted_at is null
       and (
         lower(email) = $1
         or lower(nickname) = $1
       )
     limit 1`,
    [key]
  );
  return result.rows[0] || null;
}

export async function createUserSession({ userId, tokenHash, deviceInfo = {}, ip = null, expiresAt }) {
  const result = await query(
    `insert into user_sessions(user_id, token_hash, device_info, ip, expires_at)
     values ($1::uuid, $2, $3::jsonb, $4::inet, $5::timestamptz)
     returning id, user_id, expires_at, created_at`,
    [userId, tokenHash, JSON.stringify(deviceInfo || {}), ip || null, expiresAt]
  );
  return result.rows[0] || null;
}

export async function getSessionByTokenHash(tokenHash) {
  const result = await query(
    `select id, user_id, expires_at
     from user_sessions
     where token_hash = $1
       and revoked_at is null
       and expires_at > now()
     limit 1`,
    [tokenHash]
  );
  return result.rows[0] || null;
}

export async function getSessionUserByTokenHash(tokenHash) {
  const result = await query(
    `select
       s.id as session_id,
       s.user_id,
       s.expires_at,
       u.id,
       u.email,
       u.nickname,
       u.created_at
     from user_sessions s
     join users u on u.id = s.user_id
     where s.token_hash = $1
       and s.revoked_at is null
       and s.expires_at > now()
       and coalesce(u.status, 'active') = 'active'
     limit 1`,
    [tokenHash]
  );
  return result.rows[0] || null;
}

export async function revokeSessionByTokenHash(tokenHash) {
  await query(
    `update user_sessions
     set revoked_at = now(),
         updated_at = now()
     where token_hash = $1
       and revoked_at is null`,
    [tokenHash]
  );
}

export async function listUsers() {
  const result = await query(
    `select id, email, nickname, created_at from users order by created_at desc limit 100`
  );

  return result.rows;
}

export async function userExistsById(userId) {
  const result = await query(
    `select id from users where id = $1::uuid limit 1`,
    [userId]
  );
  return Boolean(result.rows[0]?.id);
}

export async function setFollowRelation({ followerId, followingId, follow = true }) {
  if (follow) {
    await query(
      `insert into user_follows(follower_id, following_id, muted, status, deleted_at)
       values ($1::uuid, $2::uuid, false, 'active', null)
       on conflict (follower_id, following_id)
       do update set
         status = 'active',
         deleted_at = null,
         updated_at = now()`,
      [followerId, followingId]
    );
    return true;
  }

  await query(
    `update user_follows
     set status = 'inactive',
         deleted_at = now(),
         updated_at = now()
     where follower_id = $1::uuid
       and following_id = $2::uuid`,
    [followerId, followingId]
  );
  return false;
}

export async function getFollowRelation(followerId, followingId) {
  const result = await query(
    `select status
     from user_follows
     where follower_id = $1::uuid
       and following_id = $2::uuid
     limit 1`,
    [followerId, followingId]
  );
  return result.rows[0]?.status === "active";
}

export async function getFollowStats(userId) {
  const result = await query(
    `select
      coalesce((
        select count(*) from user_follows
        where following_id = $1::uuid and status = 'active'
      ), 0) as fans_count,
      coalesce((
        select count(*) from user_follows
        where follower_id = $1::uuid and status = 'active'
      ), 0) as follows_count`,
    [userId]
  );
  return {
    fansCount: Number(result.rows[0]?.fans_count || 0),
    followsCount: Number(result.rows[0]?.follows_count || 0)
  };
}

export async function updateUserProfile({
  userId,
  name,
  handle,
  bio,
  avatarUrl,
  coverUrl,
  backstageCoverUrl,
  gender,
  birthday,
  backstageMask = null
}) {
  await query(
    `update users
     set nickname = $2,
         bio = $3,
         avatar_url = $4,
         updated_at = now()
     where id = $1::uuid`,
    [
      userId,
      name,
      bio || "",
      avatarUrl || null
    ]
  );

  await query(
    `insert into user_profiles(user_id, cover_url, extra)
     values (
      $1::uuid,
      $2,
      jsonb_strip_nulls(
        jsonb_build_object(
          'handle', $3::text,
          'gender', $4::text,
          'birthday', $5::text,
          'backstageMask', $6::boolean,
          'backstageCoverUrl', $7::text
        )
      )
     )
     on conflict (user_id) do update set
      cover_url = excluded.cover_url,
      extra = coalesce(user_profiles.extra, '{}'::jsonb) || excluded.extra,
      updated_at = now()`,
    [
      userId,
      coverUrl || null,
      handle || null,
      gender || null,
      birthday || null,
      typeof backstageMask === "boolean" ? backstageMask : null,
      backstageCoverUrl || null
    ]
  );

  const result = await query(
    `select
      u.id,
      u.nickname,
      u.bio,
      u.avatar_url,
      up.cover_url,
      coalesce(up.extra->>'handle', '@'||replace(lower(u.nickname), ' ', '_')) as handle,
      coalesce(up.extra->>'gender', '') as gender,
      coalesce(up.extra->>'birthday', '') as birthday,
      coalesce(up.extra->>'backstageCoverUrl', '') as backstage_cover_url,
      case
        when lower(coalesce(up.extra->>'backstageMask', '')) in ('true', 'false')
          then (up.extra->>'backstageMask')::boolean
        else null
      end as backstage_mask
    from users u
    left join user_profiles up on up.user_id = u.id
    where u.id = $1::uuid
    limit 1`,
    [userId]
  );

  return result.rows[0] || null;
}
