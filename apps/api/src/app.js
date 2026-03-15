import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { json, notFound } from "./core/http.js";
import { handleAuth } from "./routes/auth.js";
import { handleCommunity } from "./routes/community.js";
import { handleGame } from "./routes/game.js";
import { handleWorldCard } from "./routes/worldcard.js";
import { handleBootstrap } from "./routes/bootstrap.js";
import { handlePosts } from "./routes/posts.js";
import { handleMessages } from "./routes/messages.js";
import { handleCreatorCards } from "./routes/creator-cards.js";
import { handlePaint } from "./routes/paint.js";
import { handleMedia } from "./routes/media.js";
import { handleObservability } from "./routes/observability.js";
import { getLocalMediaRootDir } from "./services/media-storage.js";
import {
  createRequestMetricsContext,
  recordHttpRequest,
  runWithRequestMetrics
} from "./services/observability.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.resolve(__dirname, "../../web");
const localMediaRoot = getLocalMediaRootDir();

function getContentTypeByPathname(pathname = "") {
  const lower = String(pathname || "").toLowerCase();
  if (lower.endsWith(".css")) return "text/css; charset=utf-8";
  if (lower.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".ico")) return "image/x-icon";
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".ogg") || lower.endsWith(".ogv")) return "video/ogg";
  return "application/octet-stream";
}

async function serveWeb(res) {
  try {
    const html = await fs.readFile(path.join(webRoot, "index.html"), "utf-8");
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store"
    });
    res.end(html);
  } catch {
    json(res, 500, { code: "WEB_NOT_READY", message: "web shell not found" });
  }
}

async function serveAsset(res, pathname) {
  const filePath = path.join(webRoot, pathname);
  const contentType = getContentTypeByPathname(pathname);

  try {
    const data = await fs.readFile(filePath);
    const headers = { "Content-Type": contentType };
    if (pathname.endsWith(".css") || pathname.endsWith(".js")) {
      headers["Cache-Control"] = "no-store";
    }
    res.writeHead(200, headers);
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

async function serveUploadAsset(res, pathname) {
  const relativePath = String(pathname || "")
    .replace(/^\/+uploads\/?/i, "")
    .replace(/^\/+/, "");
  if (!relativePath || relativePath.includes("..")) return false;
  const absPath = path.resolve(localMediaRoot, relativePath);
  const normalizedRoot = `${localMediaRoot}${path.sep}`;
  if (absPath !== localMediaRoot && !absPath.startsWith(normalizedRoot)) return false;
  try {
    const data = await fs.readFile(absPath);
    res.writeHead(200, {
      "Content-Type": getContentTypeByPathname(absPath),
      "Cache-Control": "public, max-age=31536000, immutable"
    });
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

function hasUsableDatabaseUrl() {
  const raw = String(process.env.DATABASE_URL || "").trim();
  if (!raw) return false;
  if (raw.includes("<") || raw.includes(">")) return false;
  try {
    const u = new URL(raw);
    return Boolean(u.protocol && u.hostname);
  } catch {
    return false;
  }
}

function toChunkByteLength(chunk, encoding) {
  if (chunk == null) return 0;
  if (Buffer.isBuffer(chunk)) return chunk.length;
  if (chunk instanceof Uint8Array) return chunk.byteLength;
  if (typeof chunk === "string") return Buffer.byteLength(chunk, encoding);
  return Buffer.byteLength(String(chunk), encoding);
}

function setupHttpRequestMetrics(req, res, pathname, context) {
  if (pathname === "/api/v1/messages/stream") return;
  let responseBytes = 0;
  let finalized = false;
  const originalWrite = res.write.bind(res);
  const originalEnd = res.end.bind(res);

  res.write = function writePatched(chunk, encoding, callback) {
    responseBytes += toChunkByteLength(chunk, encoding);
    return originalWrite(chunk, encoding, callback);
  };

  res.end = function endPatched(chunk, encoding, callback) {
    responseBytes += toChunkByteLength(chunk, encoding);
    return originalEnd(chunk, encoding, callback);
  };

  const finalize = () => {
    if (finalized) return;
    finalized = true;
    const durationMs = Date.now() - Number(context?.startedAt || Date.now());
    recordHttpRequest({
      method: req.method,
      pathname,
      statusCode: Number(res.statusCode || 200),
      durationMs,
      queryCount: Number(context?.queryCount || 0),
      payloadBytes: responseBytes
    });
  };
  res.on("finish", finalize);
  res.on("close", finalize);
}

export async function handleHttp(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  const pathname = url.pathname;
  res.__request = req;
  const requestMetricsContext = createRequestMetricsContext();
  setupHttpRequestMetrics(req, res, pathname, requestMetricsContext);

  return runWithRequestMetrics(requestMetricsContext, async () => {
    try {
      if (pathname === "/health") {
        return json(res, 200, {
          ok: true,
          service: "immersion-api",
          dbConfigured: hasUsableDatabaseUrl()
        });
      }

      if (pathname.startsWith("/api/v1/observability")) {
        const handled = await handleObservability(req, res, pathname, url);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/auth")) {
        const handled = await handleAuth(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/game")) {
        const handled = await handleGame(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/worldcards")) {
        const handled = await handleWorldCard(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/posts")) {
        const handled = await handlePosts(req, res, pathname, url);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/creator/cards")) {
        const handled = await handleCreatorCards(req, res, pathname, url);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/messages")) {
        const handled = await handleMessages(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/paint")) {
        const handled = await handlePaint(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/community")) {
        const handled = await handleCommunity(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/media")) {
        const handled = await handleMedia(req, res, pathname);
        if (handled !== false) return;
      }

      if (pathname.startsWith("/api/v1/bootstrap")) {
        const handled = await handleBootstrap(req, res, pathname, url);
        if (handled !== false) return;
      }

      if (pathname === "/") {
        return serveWeb(res);
      }

      if (pathname === "/favicon.ico") {
        const ok = await serveAsset(res, "assets/logo-v5.png");
        if (ok) return;
      }

      if (pathname === "/styles.css" || pathname === "/app.js" || pathname.startsWith("/assets/")) {
        const ok = await serveAsset(res, pathname.slice(1));
        if (ok) return;
      }

      if (pathname.startsWith("/uploads/")) {
        const ok = await serveUploadAsset(res, pathname);
        if (ok) return;
      }

      return notFound(res);
    } catch (error) {
      return json(res, 500, {
        code: "INTERNAL_ERROR",
        message: error instanceof Error ? error.message : "unknown error"
      });
    }
  });
}
