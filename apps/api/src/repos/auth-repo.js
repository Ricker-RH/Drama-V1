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
