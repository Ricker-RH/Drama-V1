export function json(res, statusCode, data) {
  const payload = JSON.stringify(data);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload),
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0"
  });
  res.end(payload);
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
