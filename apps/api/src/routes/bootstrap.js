import { json } from "../core/http.js";
import { getBootstrapPayload } from "../repos/bootstrap-repo.js";
import { resolveSessionUser } from "../core/session.js";

const CORE_CACHE_TTL_MS = 20_000;
let coreCache = null;
let coreCacheAt = 0;
let inflightCorePromise = null;

export function invalidateBootstrapCoreCache() {
  coreCache = null;
  coreCacheAt = 0;
}

export async function warmBootstrapCoreCache() {
  try {
    const data = await getBootstrapPayload(null, "core");
    coreCache = data;
    coreCacheAt = Date.now();
  } catch {
    // warm-up best effort
  }
}

export async function handleBootstrap(req, res, pathname, url) {
  if (req.method !== "GET" || pathname !== "/api/v1/bootstrap") return false;
  const userId = url.searchParams.get("userId");
  const mode = url.searchParams.get("mode") || "core";
  let resolvedUserId = String(userId || "").trim();
  if (!resolvedUserId) {
    const sessionUser = await resolveSessionUser(req);
    resolvedUserId = String(sessionUser?.id || "").trim();
  }

  if (mode === "core" && !resolvedUserId) {
    const now = Date.now();
    if (coreCache && now - coreCacheAt < CORE_CACHE_TTL_MS) {
      return json(res, 200, coreCache);
    }
    if (!inflightCorePromise) {
      inflightCorePromise = getBootstrapPayload(null, "core")
        .then((data) => {
          coreCache = data;
          coreCacheAt = Date.now();
          return data;
        })
        .finally(() => {
          inflightCorePromise = null;
        });
    }
    const data = await inflightCorePromise;
    return json(res, 200, data);
  }
  const data = await getBootstrapPayload(resolvedUserId || null, mode);
  return json(res, 200, data);
}
