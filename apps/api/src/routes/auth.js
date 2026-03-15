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
  updateUserProfile,
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
import { uploadPossibleDataUrl } from "../services/media-storage.js";
import { createNotification } from "../repos/notification-repo.js";

function verifyPassword(inputPassword, storedHash) {
  if (!storedHash) return false;
  const inputHash = hashPassword(inputPassword);
  if (storedHash === inputHash) return true;
  // Seed data fallback for demo accounts.
  if (storedHash === "seed_password_hash" && inputPassword === "123456") return true;
  return false;
}

function normalizeGenderValue(input) {
  const raw = String(input || "").trim();
  if (["男", "male", "男生"].includes(raw)) return "男";
  if (["女", "female", "女生"].includes(raw)) return "女";
  if (["保密", "secret", "unknown"].includes(raw)) return "保密";
  return "保密";
}

function normalizeBirthdayValue(input) {
  const raw = String(input || "").trim();
  if (!raw) return "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return "";
  const d = new Date(`${raw}T00:00:00.000Z`);
  if (Number.isNaN(d.getTime())) return "";
  const now = new Date();
  if (d.getTime() > now.getTime()) return "";
  return raw;
}

function normalizeBooleanFlag(input, fallback = false) {
  if (typeof input === "boolean") return input;
  const raw = String(input ?? "").trim().toLowerCase();
  if (raw === "true" || raw === "1" || raw === "yes" || raw === "on") return true;
  if (raw === "false" || raw === "0" || raw === "no" || raw === "off") return false;
  return Boolean(fallback);
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
    if (follow) {
      void createNotification({
        userId: followingUserId,
        type: "new_follow",
        title: "新增关注",
        content: "开始关注你了",
        actorId: followerId,
        targetType: "user_follow",
        targetId: followerId,
        extra: {
          followerId,
          followingUserId
        }
      }).catch(() => {});
    }
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

  if (req.method === "POST" && pathname === "/api/v1/auth/profile") {
    const body = await parseBody(req);
    const userId = String(body.userId || "").trim();
    const name = String(body.name || "").trim();
    const handle = String(body.handle || "").trim();
    const bio = String(body.bio || "").trim();
    const avatarUrlInput = String(body.avatarUrl || "").trim();
    const coverUrlInput = String(body.coverUrl || "").trim();
    const backstageCoverUrlInput = String(body.backstageCoverUrl || "").trim();
    const gender = normalizeGenderValue(body.gender);
    const birthday = normalizeBirthdayValue(body.birthday);
    const hasBackstageMask = Object.prototype.hasOwnProperty.call(body, "backstageMask");
    const backstageMask = hasBackstageMask ? normalizeBooleanFlag(body.backstageMask, true) : null;

    if (!userId || !name) {
      return json(res, 400, { code: "INVALID_INPUT", message: "userId and name are required" });
    }
    if (name.length > 24) {
      return json(res, 400, { code: "INVALID_INPUT", message: "昵称最多 24 个字符" });
    }
    if (bio.length > 300) {
      return json(res, 400, { code: "INVALID_INPUT", message: "个人介绍最多 300 个字符" });
    }

    const exists = await userExistsById(userId);
    if (!exists) {
      return json(res, 404, { code: "USER_NOT_FOUND", message: "user not found" });
    }

    let avatarUrl = avatarUrlInput;
    let coverUrl = coverUrlInput;
    let backstageCoverUrl = backstageCoverUrlInput;
    try {
      avatarUrl = await uploadPossibleDataUrl(avatarUrlInput, {
        folder: "profile/avatar",
        maxBytes: 2 * 1024 * 1024
      });
      coverUrl = await uploadPossibleDataUrl(coverUrlInput, {
        folder: "profile/cover",
        maxBytes: 3 * 1024 * 1024
      });
      backstageCoverUrl = await uploadPossibleDataUrl(backstageCoverUrlInput, {
        folder: "profile/backstage-cover",
        maxBytes: 3 * 1024 * 1024
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "PROFILE_MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "PROFILE_MEDIA_UPLOAD_FAILED", message });
    }

    const profile = await updateUserProfile({
      userId,
      name,
      handle,
      bio,
      avatarUrl,
      coverUrl,
      backstageCoverUrl,
      gender,
      birthday,
      backstageMask
    });
    invalidateBootstrapCoreCache();
    return json(res, 200, {
      profile: profile
        ? {
            id: profile.id,
            name: profile.nickname || "Drama 用户",
            handle: profile.handle || "@drama_user",
            bio: profile.bio || "",
            avatarUrl: profile.avatar_url || "",
            coverUrl: profile.cover_url || "",
            backstageCoverUrl: profile.backstage_cover_url || "",
            gender: profile.gender || "保密",
            birthday: profile.birthday || "",
            backstageMask: profile.backstage_mask !== false
          }
        : null
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
