import { json, parseBody } from "../core/http.js";
import { hashPassword } from "../db/hash.js";
import {
  createUserSession,
  createUser,
  getFollowRelation,
  getFollowStats,
  getSessionByTokenHash,
  getUserAuthByIdentifier,
  getUserByEmail,
  listUsers,
  revokeSessionByTokenHash,
  setFollowRelation,
  userExistsById
} from "../repos/auth-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";
import {
  SESSION_TTL_MS,
  buildClearSessionCookie,
  buildSessionCookie,
  createSessionToken,
  getRequestDeviceInfo,
  getRequestIp,
  hashSessionToken,
  readSessionTokenFromRequest,
  resolveSessionUser,
  shouldUseSecureCookie
} from "../core/session.js";

function verifyPassword(inputPassword, storedHash) {
  if (!storedHash) return false;
  const inputHash = hashPassword(inputPassword);
  if (storedHash === inputHash) return true;
  // Seed data fallback for demo accounts.
  if (storedHash === "seed_password_hash" && inputPassword === "123456") return true;
  return false;
}

export async function handleAuth(req, res, pathname) {
  if (req.method === "GET" && pathname === "/api/v1/auth/session") {
    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser?.id) {
      return json(res, 200, { authenticated: false, user: null });
    }
    return json(res, 200, {
      authenticated: true,
      user: {
        id: sessionUser.id,
        email: sessionUser.email,
        nickname: sessionUser.nickname,
        createdAt: sessionUser.created_at
      },
      expiresAt: sessionUser.expires_at
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/auth/logout") {
    const rawToken = readSessionTokenFromRequest(req);
    if (rawToken) {
      await revokeSessionByTokenHash(hashSessionToken(rawToken));
    }
    res.setHeader("Set-Cookie", buildClearSessionCookie(shouldUseSecureCookie(req)));
    return json(res, 200, { ok: true });
  }

  if (req.method === "POST" && pathname === "/api/v1/auth/follow") {
    const body = await parseBody(req);
    const followerId = String(body.followerId || "").trim();
    const followingUserId = String(body.followingUserId || "").trim();
    const follow = Boolean(body.follow);

    if (!followerId || !followingUserId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "followerId and followingUserId are required" });
    }
    if (followerId === followingUserId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "cannot follow self" });
    }

    const [followerExists, followingExists] = await Promise.all([
      userExistsById(followerId),
      userExistsById(followingUserId)
    ]);
    if (!followerExists || !followingExists) {
      return json(res, 404, { code: "USER_NOT_FOUND", message: "user not found" });
    }

    await setFollowRelation({ followerId, followingId: followingUserId, follow });
    const [followedByMe, targetStats, meStats] = await Promise.all([
      getFollowRelation(followerId, followingUserId),
      getFollowStats(followingUserId),
      getFollowStats(followerId)
    ]);
    invalidateBootstrapCoreCache();
    return json(res, 200, {
      relation: {
        followerId,
        followingUserId,
        followedByMe,
        targetStats,
        meStats
      }
    });
  }

  if (req.method === "POST" && pathname === "/api/v1/auth/register") {
    const body = await parseBody(req);
    const account = String(body.account || body.email || "").trim();
    const password = String(body.password || "");
    const confirmPassword = String(body.confirmPassword || "");

    if (!account || !password) {
      return json(res, 400, { code: "INVALID_INPUT", message: "account and password are required" });
    }
    if (password.length < 6) {
      return json(res, 400, { code: "INVALID_PASSWORD", message: "密码至少 6 位" });
    }
    if (confirmPassword && confirmPassword !== password) {
      return json(res, 400, { code: "PASSWORD_MISMATCH", message: "两次输入的密码不一致" });
    }

    const isEmailAccount = account.includes("@");
    const nicknameInput = String(body.nickname || "").trim();
    const nickname = nicknameInput || (isEmailAccount ? account.split("@")[0] || "新玩家" : account);
    const email = isEmailAccount ? account.toLowerCase() : null;

    const exists = await getUserAuthByIdentifier(account);
    if (!exists && email) {
      // Backward-compat check for older data that may only have email populated.
      const legacyExists = await getUserByEmail(email);
      if (legacyExists) {
        return json(res, 409, { code: "ACCOUNT_EXISTS", message: "账号已存在" });
      }
    }
    if (exists) {
      return json(res, 409, { code: "ACCOUNT_EXISTS", message: "账号已存在" });
    }

    const user = await createUser({
      email,
      passwordHash: hashPassword(password),
      nickname
    });

    const sessionToken = createSessionToken();
    const sessionTokenHash = hashSessionToken(sessionToken);
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
    await createUserSession({
      userId: user.id,
      tokenHash: sessionTokenHash,
      deviceInfo: getRequestDeviceInfo(req),
      ip: getRequestIp(req),
      expiresAt
    });
    res.setHeader("Set-Cookie", buildSessionCookie(sessionToken, SESSION_TTL_MS, shouldUseSecureCookie(req)));

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

    const existingToken = readSessionTokenFromRequest(req);
    if (existingToken) {
      const existingHash = hashSessionToken(existingToken);
      const existingSession = await getSessionByTokenHash(existingHash);
      if (existingSession?.id) {
        await revokeSessionByTokenHash(existingHash);
      }
    }

    const sessionToken = createSessionToken();
    const sessionTokenHash = hashSessionToken(sessionToken);
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
    await createUserSession({
      userId: user.id,
      tokenHash: sessionTokenHash,
      deviceInfo: getRequestDeviceInfo(req),
      ip: getRequestIp(req),
      expiresAt
    });
    res.setHeader("Set-Cookie", buildSessionCookie(sessionToken, SESSION_TTL_MS, shouldUseSecureCookie(req)));

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
