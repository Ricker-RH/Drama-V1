import fs from "node:fs/promises";
import path from "node:path";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { getLocalMediaRootDir } from "../services/media-storage.js";

const DRY_RUN = String(process.env.DRY_RUN || "true").trim().toLowerCase() !== "false";
const ONLY_MISSING = String(process.env.ONLY_MISSING || "true").trim().toLowerCase() !== "false";
const UPLOAD_PREFIX = String(process.env.UPLOAD_PREFIX || "uploads").trim().replace(/^\/+|\/+$/g, "") || "uploads";
const CONCURRENCY = Math.max(1, Math.min(12, Number.parseInt(String(process.env.UPLOAD_CONCURRENCY || "4"), 10) || 4));

const MIME_BY_EXT = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".ogv": "video/ogg"
};

function toPosix(value = "") {
  return String(value || "").replaceAll(path.sep, "/");
}

function extToContentType(filePath = "") {
  const ext = path.extname(String(filePath || "")).toLowerCase();
  return MIME_BY_EXT[ext] || "application/octet-stream";
}

function getS3Config() {
  const bucket = String(process.env.MEDIA_S3_BUCKET || "").trim();
  const accessKeyId = String(process.env.MEDIA_S3_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || "").trim();
  const secretAccessKey = String(process.env.MEDIA_S3_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || "").trim();
  const region = String(process.env.MEDIA_S3_REGION || process.env.AWS_REGION || "auto").trim() || "auto";
  const endpoint = String(process.env.MEDIA_S3_ENDPOINT || "").trim();
  const forcePathStyle = String(process.env.MEDIA_S3_FORCE_PATH_STYLE || "").trim().toLowerCase() === "true";
  if (!bucket) throw new Error("MEDIA_S3_BUCKET_MISSING");
  if (!accessKeyId || !secretAccessKey) throw new Error("MEDIA_S3_CREDENTIALS_MISSING");
  return { bucket, region, endpoint, forcePathStyle, accessKeyId, secretAccessKey };
}

async function walkFiles(rootDir) {
  const out = [];
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(abs);
        continue;
      }
      if (entry.isFile()) out.push(abs);
    }
  }
  await walk(rootDir);
  return out;
}

async function main() {
  const localRoot = getLocalMediaRootDir();
  const exists = await fs.stat(localRoot).then((s) => s.isDirectory()).catch(() => false);
  if (!exists) throw new Error(`LOCAL_UPLOADS_NOT_FOUND: ${localRoot}`);
  const files = await walkFiles(localRoot);
  if (!files.length) {
    console.log(`[media-sync] no files under ${localRoot}`);
    return;
  }

  const conf = getS3Config();
  const client = new S3Client({
    region: conf.region,
    endpoint: conf.endpoint || undefined,
    forcePathStyle: conf.forcePathStyle,
    credentials: {
      accessKeyId: conf.accessKeyId,
      secretAccessKey: conf.secretAccessKey
    }
  });

  let scanned = 0;
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  let idx = 0;

  async function worker() {
    while (true) {
      const cur = idx;
      idx += 1;
      if (cur >= files.length) return;
      const absPath = files[cur];
      const relative = toPosix(path.relative(localRoot, absPath)).replace(/^\/+/, "");
      const key = `${UPLOAD_PREFIX}/${relative}`;
      scanned += 1;
      try {
        if (ONLY_MISSING) {
          const existsRemote = await client.send(
            new HeadObjectCommand({ Bucket: conf.bucket, Key: key })
          ).then(() => true).catch(() => false);
          if (existsRemote) {
            skipped += 1;
            continue;
          }
        }
        if (DRY_RUN) {
          uploaded += 1;
          continue;
        }
        const body = await fs.readFile(absPath);
        await client.send(
          new PutObjectCommand({
            Bucket: conf.bucket,
            Key: key,
            Body: body,
            ContentType: extToContentType(absPath),
            CacheControl: String(process.env.MEDIA_CACHE_CONTROL || "public, max-age=31536000, immutable").trim() || undefined
          })
        );
        uploaded += 1;
      } catch (error) {
        failed += 1;
        console.error(`[media-sync] failed: ${key} -> ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  console.log(`[media-sync] start dryRun=${DRY_RUN} onlyMissing=${ONLY_MISSING} files=${files.length} root=${localRoot} prefix=${UPLOAD_PREFIX}`);
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, files.length) }, () => worker()));
  console.log(`[media-sync] done scanned=${scanned} uploaded=${uploaded} skipped=${skipped} failed=${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error("[media-sync] fatal:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
