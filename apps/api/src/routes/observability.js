import { json, parseBody } from "../core/http.js";
import { getObservabilitySnapshot, recordClientObservability } from "../services/observability.js";

function hasObservabilityReadAccess(req, url) {
  const expected = String(process.env.OBSERVABILITY_KEY || "").trim();
  if (!expected) return true;
  const headerValue = String(req.headers["x-observability-key"] || "").trim();
  const queryValue = String(url.searchParams.get("key") || "").trim();
  return headerValue === expected || queryValue === expected;
}

export async function handleObservability(req, res, pathname, url) {
  if (!pathname.startsWith("/api/v1/observability")) return false;

  if (req.method === "GET" && pathname === "/api/v1/observability") {
    if (!hasObservabilityReadAccess(req, url)) {
      return json(res, 403, { code: "FORBIDDEN", message: "invalid observability key" });
    }
    const limit = Number.parseInt(String(url.searchParams.get("limit") || "40"), 10);
    return json(res, 200, getObservabilitySnapshot({ limit }));
  }

  if (req.method === "POST" && pathname === "/api/v1/observability/client") {
    let body;
    try {
      body = await parseBody(req);
    } catch {
      return json(res, 400, { code: "INVALID_INPUT", message: "invalid JSON body" });
    }
    recordClientObservability(body);
    return json(res, 200, { ok: true });
  }

  return false;
}
