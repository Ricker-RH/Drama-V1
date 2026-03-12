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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.resolve(__dirname, "../../web");

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
  const contentType = pathname.endsWith(".css")
    ? "text/css; charset=utf-8"
    : pathname.endsWith(".js")
      ? "application/javascript; charset=utf-8"
      : pathname.endsWith(".png")
        ? "image/png"
        : pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")
          ? "image/jpeg"
          : pathname.endsWith(".svg")
            ? "image/svg+xml"
            : pathname.endsWith(".ico")
              ? "image/x-icon"
              : "text/plain; charset=utf-8";

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

export async function handleHttp(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  const pathname = url.pathname;

  try {
    if (pathname === "/health") {
      return json(res, 200, {
        ok: true,
        service: "immersion-api",
        dbConfigured: hasUsableDatabaseUrl()
      });
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

    if (pathname.startsWith("/api/v1/bootstrap")) {
      const handled = await handleBootstrap(req, res, pathname, url);
      if (handled !== false) return;
    }

    if (pathname === "/") {
      return serveWeb(res);
    }

    if (pathname === "/favicon.ico") {
      const ok = await serveAsset(res, "assets/logo-256.png");
      if (ok) return;
    }

    if (pathname === "/styles.css" || pathname === "/app.js" || pathname.startsWith("/assets/")) {
      const ok = await serveAsset(res, pathname.slice(1));
      if (ok) return;
    }

    return notFound(res);
  } catch (error) {
    return json(res, 500, {
      code: "INTERNAL_ERROR",
      message: error instanceof Error ? error.message : "unknown error"
    });
  }
}
