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
     where lower(coalesce(email, '')) = $1
        or lower(coalesce(nickname, '')) = $1
     limit 1`,
    [key]
  );
  return result.rows[0] || null;
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
