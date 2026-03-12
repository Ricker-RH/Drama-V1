import { createHash, randomBytes } from "node:crypto";
import { getSessionUserByTokenHash } from "../repos/auth-repo.js";

export const SESSION_COOKIE_NAME = "drama_sid";
export const SESSION_TTL_MS = 30 * 60 * 1000;

export function createSessionToken() {
  return randomBytes(32).toString("base64url");
}

export function hashSessionToken(rawToken) {
  return createHash("sha256").update(String(rawToken || "")).digest("hex");
}

export function parseCookies(req) {
  const raw = String(req?.headers?.cookie || "");
  if (!raw) return {};
  const map = {};
  raw.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx <= 0) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (!key) return;
    map[key] = decodeURIComponent(value);
  });
  return map;
}

export function readSessionTokenFromRequest(req) {
  const cookies = parseCookies(req);
  return String(cookies[SESSION_COOKIE_NAME] || "").trim();
}

export async function resolveSessionUser(req) {
  const token = readSessionTokenFromRequest(req);
  if (!token) return null;
  return getSessionUserByTokenHash(hashSessionToken(token));
}

export function shouldUseSecureCookie(req) {
  const proto = String(req?.headers?.["x-forwarded-proto"] || "").toLowerCase();
  if (proto.includes("https")) return true;
  if (req?.socket?.encrypted) return true;
  const host = String(req?.headers?.host || "").toLowerCase();
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) return false;
  return true;
}

export function buildSessionCookie(token, ttlMs = SESSION_TTL_MS, secure = true) {
  const maxAge = Math.max(1, Math.floor((Number(ttlMs) || SESSION_TTL_MS) / 1000));
  const parts = [
    `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

export function buildClearSessionCookie(secure = true) {
  const parts = [
    `${SESSION_COOKIE_NAME}=`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=0"
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

export function getRequestIp(req) {
  const xff = String(req?.headers?.["x-forwarded-for"] || "").trim();
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  return String(req?.socket?.remoteAddress || "").trim() || null;
}

export function getRequestDeviceInfo(req) {
  return {
    userAgent: String(req?.headers?.["user-agent"] || "").slice(0, 400),
    secChUa: String(req?.headers?.["sec-ch-ua"] || "").slice(0, 400),
    secChUaMobile: String(req?.headers?.["sec-ch-ua-mobile"] || "").slice(0, 100),
    secChUaPlatform: String(req?.headers?.["sec-ch-ua-platform"] || "").slice(0, 100)
  };
}
