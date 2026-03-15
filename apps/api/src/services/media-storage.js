import fs from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { fileURLToPath } from "node:url";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_LOCAL_MEDIA_ROOT = path.resolve(__dirname, "../../../web/uploads");
const DEFAULT_DATA_URL_MAX_BYTES = 10 * 1024 * 1024;

const MIME_TO_EXT = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/ogg": "ogv"
};

let localRootReady = false;
let s3Client = null;

function boolFromEnv(value, fallback = false) {
  const raw = String(value ?? "").trim().toLowerCase();
  if (!raw) return fallback;
  if (["1", "true", "yes", "on"].includes(raw)) return true;
  if (["0", "false", "no", "off"].includes(raw)) return false;
  return fallback;
}

function trimSlash(value = "") {
  return String(value || "").replace(/\/+$/g, "");
}

function ensureFolderSlug(value = "") {
  const raw = String(value || "")
    .trim()
    .replaceAll("\\", "/")
    .replace(/^\/+|\/+$/g, "")
    .replace(/[^a-zA-Z0-9/_-]+/g, "_");
  return raw || "misc";
}

function toPathEncodedKey(key = "") {
  return String(key || "")
    .split("/")
    .filter(Boolean)
    .map((x) => encodeURIComponent(x))
    .join("/");
}

function inferExtFromMime(contentType = "") {
  const clean = String(contentType || "").trim().toLowerCase();
  if (MIME_TO_EXT[clean]) return MIME_TO_EXT[clean];
  if (clean.startsWith("image/")) return clean.slice("image/".length) || "jpg";
  if (clean.startsWith("video/")) return clean.slice("video/".length) || "mp4";
  return "bin";
}

function getStorageDriver() {
  const driver = String(process.env.MEDIA_STORAGE_DRIVER || "").trim().toLowerCase() === "s3" ? "s3" : "local";
  const isProd = String(process.env.NODE_ENV || "").trim().toLowerCase() === "production";
  const allowLocalInProd = boolFromEnv(process.env.MEDIA_ALLOW_LOCAL_IN_PROD, false);
  if (isProd && driver === "local" && !allowLocalInProd) {
    throw new Error("MEDIA_LOCAL_STORAGE_BLOCKED_IN_PRODUCTION");
  }
  return driver;
}

function getLocalRoot() {
  const custom = String(process.env.MEDIA_LOCAL_DIR || "").trim();
  return custom ? path.resolve(custom) : DEFAULT_LOCAL_MEDIA_ROOT;
}

export function getLocalMediaRootDir() {
  return getLocalRoot();
}

function getPublicBaseUrl() {
  return trimSlash(process.env.MEDIA_PUBLIC_BASE_URL || "");
}

export function getMediaPublicBaseUrl() {
  return getPublicBaseUrl();
}

function buildObjectKey(folder = "misc", contentType = "application/octet-stream") {
  const now = new Date();
  const y = String(now.getFullYear());
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const ext = inferExtFromMime(contentType);
  const fileName = `${Date.now()}_${randomBytes(6).toString("hex")}.${ext}`;
  return `${ensureFolderSlug(folder)}/${y}/${m}/${d}/${fileName}`;
}

function parseDataUrl(rawDataUrl = "") {
  const raw = String(rawDataUrl || "").trim();
  if (!raw.startsWith("data:")) throw new Error("MEDIA_DATA_URL_INVALID");
  const commaIdx = raw.indexOf(",");
  if (commaIdx <= 5) throw new Error("MEDIA_DATA_URL_INVALID");
  const metadata = raw.slice(5, commaIdx);
  const payload = raw.slice(commaIdx + 1);
  const metadataParts = metadata.split(";").map((x) => String(x || "").trim()).filter(Boolean);
  const contentType = metadataParts[0] || "application/octet-stream";
  const isBase64 = metadataParts.some((x) => x.toLowerCase() === "base64");
  let buffer;
  try {
    if (isBase64) {
      buffer = Buffer.from(payload, "base64");
    } else {
      buffer = Buffer.from(decodeURIComponent(payload), "utf8");
    }
  } catch {
    throw new Error("MEDIA_DATA_URL_DECODE_FAILED");
  }
  if (!buffer || !Buffer.isBuffer(buffer) || !buffer.length) {
    throw new Error("MEDIA_DATA_URL_EMPTY");
  }
  return { contentType: String(contentType).toLowerCase(), buffer };
}

function assertDataUrlSize(buffer, maxBytes = DEFAULT_DATA_URL_MAX_BYTES) {
  const safeMax = Number.isFinite(Number(maxBytes)) && Number(maxBytes) > 0
    ? Number(maxBytes)
    : DEFAULT_DATA_URL_MAX_BYTES;
  if (buffer.byteLength > safeMax) {
    throw new Error("MEDIA_TOO_LARGE");
  }
}

async function ensureLocalRootReady() {
  if (localRootReady) return;
  await fs.mkdir(getLocalRoot(), { recursive: true });
  localRootReady = true;
}

function buildLocalPublicUrl(key = "") {
  const base = getPublicBaseUrl();
  const encoded = toPathEncodedKey(key);
  if (base) return `${base}/uploads/${encoded}`;
  return `/uploads/${encoded}`;
}

async function uploadToLocalStore({ buffer, contentType, folder }) {
  await ensureLocalRootReady();
  const key = buildObjectKey(folder, contentType);
  const absPath = path.join(getLocalRoot(), key);
  await fs.mkdir(path.dirname(absPath), { recursive: true });
  await fs.writeFile(absPath, buffer);
  return buildLocalPublicUrl(key);
}

function getS3Client() {
  if (s3Client) return s3Client;
  const region = String(process.env.MEDIA_S3_REGION || process.env.AWS_REGION || "auto").trim() || "auto";
  const endpoint = String(process.env.MEDIA_S3_ENDPOINT || "").trim();
  const forcePathStyle = boolFromEnv(process.env.MEDIA_S3_FORCE_PATH_STYLE, Boolean(endpoint));
  const accessKeyId = String(process.env.MEDIA_S3_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || "").trim();
  const secretAccessKey = String(process.env.MEDIA_S3_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || "").trim();
  if (!accessKeyId || !secretAccessKey) throw new Error("MEDIA_S3_CREDENTIALS_MISSING");
  s3Client = new S3Client({
    region,
    endpoint: endpoint || undefined,
    forcePathStyle,
    credentials: { accessKeyId, secretAccessKey }
  });
  return s3Client;
}

function buildS3PublicUrl({ key, bucket }) {
  const publicBase = getPublicBaseUrl();
  const encodedKey = toPathEncodedKey(key);
  if (publicBase) return `${publicBase}/${encodedKey}`;
  const endpoint = trimSlash(process.env.MEDIA_S3_ENDPOINT || "");
  if (endpoint) return `${endpoint}/${bucket}/${encodedKey}`;
  const region = String(process.env.MEDIA_S3_REGION || process.env.AWS_REGION || "us-east-1").trim() || "us-east-1";
  return `https://${bucket}.s3.${region}.amazonaws.com/${encodedKey}`;
}

async function uploadToS3Store({ buffer, contentType, folder }) {
  const bucket = String(process.env.MEDIA_S3_BUCKET || "").trim();
  if (!bucket) throw new Error("MEDIA_S3_BUCKET_MISSING");
  const key = buildObjectKey(folder, contentType);
  const client = getS3Client();
  const acl = String(process.env.MEDIA_S3_ACL || "").trim();
  const cacheControl = String(process.env.MEDIA_CACHE_CONTROL || "public, max-age=31536000, immutable").trim();
  const commandInput = {
    Bucket: bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: cacheControl || undefined
  };
  if (acl) commandInput.ACL = acl;
  await client.send(new PutObjectCommand(commandInput));
  return buildS3PublicUrl({ key, bucket });
}

export function isDataUrl(value) {
  return String(value || "").trim().startsWith("data:");
}

export function assertNoDataUrl(value, errorCode = "MEDIA_DATA_URL_FORBIDDEN") {
  const raw = String(value || "").trim();
  if (!raw) return;
  if (isDataUrl(raw)) {
    throw new Error(errorCode);
  }
}

export function assertNoDataUrlFields(payload = {}, fields = [], errorCode = "MEDIA_DATA_URL_FORBIDDEN") {
  if (!payload || typeof payload !== "object") return;
  for (const field of fields) {
    const raw = String(payload?.[field] || "").trim();
    if (!raw) continue;
    if (isDataUrl(raw)) {
      throw new Error(errorCode);
    }
  }
}

export async function uploadPossibleDataUrl(value, {
  folder = "misc",
  maxBytes = DEFAULT_DATA_URL_MAX_BYTES
} = {}) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (!isDataUrl(raw)) return raw;
  const { contentType, buffer } = parseDataUrl(raw);
  assertDataUrlSize(buffer, maxBytes);
  if (getStorageDriver() === "s3") {
    return uploadToS3Store({ buffer, contentType, folder });
  }
  return uploadToLocalStore({ buffer, contentType, folder });
}

export async function uploadPossibleDataUrls(values = [], options = {}) {
  if (!Array.isArray(values)) return [];
  const total = values.length;
  if (total === 0) return [];
  const concurrency = Math.max(1, Math.min(6, Number(options?.concurrency || 3) || 3));
  const out = new Array(total).fill("");
  let cursor = 0;
  async function worker() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= total) return;
      const next = await uploadPossibleDataUrl(values[index], options);
      out[index] = String(next || "").trim();
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, total) }, () => worker())
  );
  return out.filter(Boolean);
}
