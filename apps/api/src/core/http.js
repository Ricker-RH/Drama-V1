import { createHash } from "node:crypto";
import { brotliCompressSync, constants as zlibConstants, gzipSync } from "node:zlib";

const JSON_COMPRESS_MIN_BYTES = 1024;

function toUpperMethod(req) {
  return String(req?.method || "").trim().toUpperCase();
}

function parseQualityEncodingList(value = "") {
  return String(value || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [rawName, ...rawParams] = entry.split(";");
      const name = String(rawName || "").trim().toLowerCase();
      let q = 1;
      rawParams.forEach((p) => {
        const [k, v] = String(p || "").split("=");
        if (String(k || "").trim().toLowerCase() === "q") {
          const parsed = Number.parseFloat(String(v || "").trim());
          if (Number.isFinite(parsed)) q = parsed;
        }
      });
      return { name, q };
    });
}

function acceptsEncoding(acceptEncoding = "", target = "") {
  const wanted = String(target || "").trim().toLowerCase();
  if (!wanted) return false;
  const items = parseQualityEncodingList(acceptEncoding);
  if (!items.length) return false;
  for (const item of items) {
    if (!item || item.q <= 0) continue;
    if (item.name === wanted || item.name === "*") return true;
  }
  return false;
}

function mergeVary(existing = "", next = "") {
  const values = new Set();
  String(existing || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
    .forEach((x) => values.add(x.toLowerCase()));
  String(next || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean)
    .forEach((x) => values.add(x.toLowerCase()));
  return Array.from(values).join(", ");
}

function createWeakEtagFromBuffer(buffer) {
  const digest = createHash("sha1").update(buffer).digest("base64url");
  return `W/"${digest}"`;
}

function ifNoneMatchContains(reqEtagHeader = "", currentEtag = "") {
  const target = String(currentEtag || "").trim();
  if (!target) return false;
  const header = String(reqEtagHeader || "").trim();
  if (!header) return false;
  if (header === "*") return true;
  const values = header
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  return values.includes(target);
}

export function json(res, statusCode, data, options = {}) {
  const req = options?.req || res?.__request || null;
  const method = toUpperMethod(req);
  const isGetLike = method === "GET" || method === "HEAD";
  const isHead = method === "HEAD";
  const defaultCacheControl = isGetLike
    ? "private, no-cache, must-revalidate"
    : "no-store, no-cache, must-revalidate, proxy-revalidate";
  const cacheControl = String(options?.cacheControl || defaultCacheControl);
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": cacheControl,
    ...(options?.headers && typeof options.headers === "object" ? options.headers : {})
  };
  if (/no-store|no-cache/i.test(cacheControl)) {
    headers.Pragma = String(headers.Pragma || "no-cache");
    headers.Expires = String(headers.Expires || "0");
  }

  const payload = JSON.stringify(data);
  const payloadBuffer = Buffer.from(payload, "utf8");
  const allowEtag = options?.etag !== false && isGetLike && statusCode === 200;
  const etag = allowEtag ? createWeakEtagFromBuffer(payloadBuffer) : "";
  if (etag) {
    headers.ETag = etag;
    headers.Vary = mergeVary(headers.Vary || "", "Accept-Encoding");
    if (ifNoneMatchContains(req?.headers?.["if-none-match"], etag)) {
      res.writeHead(304, headers);
      res.end();
      return;
    }
  }

  let bodyBuffer = payloadBuffer;
  if (options?.compress !== false && isGetLike && statusCode === 200 && payloadBuffer.length >= JSON_COMPRESS_MIN_BYTES) {
    const acceptEncoding = String(req?.headers?.["accept-encoding"] || "");
    try {
      let compressed = null;
      if (acceptsEncoding(acceptEncoding, "br")) {
        compressed = brotliCompressSync(payloadBuffer, {
          params: {
            [zlibConstants.BROTLI_PARAM_QUALITY]: 4
          }
        });
        headers["Content-Encoding"] = "br";
      } else if (acceptsEncoding(acceptEncoding, "gzip")) {
        compressed = gzipSync(payloadBuffer, { level: 6 });
        headers["Content-Encoding"] = "gzip";
      }
      if (compressed && compressed.length > 0 && compressed.length < payloadBuffer.length) {
        bodyBuffer = compressed;
        headers.Vary = mergeVary(headers.Vary || "", "Accept-Encoding");
      } else {
        bodyBuffer = payloadBuffer;
        delete headers["Content-Encoding"];
      }
    } catch {
      bodyBuffer = payloadBuffer;
      delete headers["Content-Encoding"];
    }
  }

  headers["Content-Length"] = bodyBuffer.length;
  res.writeHead(statusCode, headers);
  if (isHead) {
    res.end();
    return;
  }
  res.end(bodyBuffer);
}

export function parseBody(req) {
  const maxBodyBytesRaw = Number.parseInt(String(process.env.MAX_BODY_BYTES || "52428800"), 10);
  const maxBodyBytes = Number.isFinite(maxBodyBytesRaw) && maxBodyBytesRaw > 0 ? maxBodyBytesRaw : 50 * 1024 * 1024;
  return new Promise((resolve, reject) => {
    let body = "";
    let done = false;
    req.on("data", (chunk) => {
      if (done) return;
      body += chunk;
      if (body.length > maxBodyBytes) {
        done = true;
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      if (done) return;
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

export function notFound(res) {
  json(res, 404, {
    code: "NOT_FOUND",
    message: "Route not found"
  });
}
