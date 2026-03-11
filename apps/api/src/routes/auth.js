import { json, parseBody } from "../core/http.js";
import { hashPassword } from "../db/hash.js";
import { createUser, getUserAuthByIdentifier, getUserByEmail, listUsers } from "../repos/auth-repo.js";

function verifyPassword(inputPassword, storedHash) {
  if (!storedHash) return false;
  const inputHash = hashPassword(inputPassword);
  if (storedHash === inputHash) return true;
  // Seed data fallback for demo accounts.
  if (storedHash === "seed_password_hash" && inputPassword === "123456") return true;
  return false;
}

export async function handleAuth(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/auth/register") {
    const body = await parseBody(req);
    if (!body.email || !body.password) {
      return json(res, 400, { code: "INVALID_INPUT", message: "email and password are required" });
    }

    const exists = await getUserByEmail(body.email);
    if (exists) {
      return json(res, 409, { code: "EMAIL_EXISTS", message: "email already exists" });
    }

    const user = await createUser({
      email: body.email,
      passwordHash: hashPassword(body.password),
      nickname: body.nickname || "新玩家"
    });

    return json(res, 201, { user });
  }

  if (req.method === "GET" && pathname === "/api/v1/auth/users") {
    const users = await listUsers();
    return json(res, 200, { users });
  }

  if (req.method === "POST" && pathname === "/api/v1/auth/login") {
    const body = await parseBody(req);
    const account = String(body.account || "").trim();
    const password = String(body.password || "");
    if (!account || !password) {
      return json(res, 400, { code: "INVALID_INPUT", message: "account and password are required" });
    }

    const user = await getUserAuthByIdentifier(account);
    if (!user || !verifyPassword(password, user.password_hash)) {
      return json(res, 401, { code: "INVALID_CREDENTIALS", message: "账号或密码错误" });
    }

    return json(res, 200, {
      user: {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
        createdAt: user.created_at
      }
    });
  }

  return false;
}
