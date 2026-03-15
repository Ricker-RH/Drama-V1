import { AsyncLocalStorage } from "node:async_hooks";

const REQUEST_CONTEXT = new AsyncLocalStorage();
const ROUTE_MAX_SAMPLES = Math.max(100, Math.min(2000, Number.parseInt(String(process.env.OBS_ROUTE_MAX_SAMPLES || "600"), 10) || 600));
const ROUTE_MAX_KEYS = Math.max(20, Math.min(1000, Number.parseInt(String(process.env.OBS_ROUTE_MAX_KEYS || "180"), 10) || 180));

const routeBuckets = new Map();
const CLIENT_EVENT_MAX_SAMPLES = Math.max(40, Math.min(800, Number.parseInt(String(process.env.OBS_CLIENT_EVENT_MAX_SAMPLES || "240"), 10) || 240));

const globalStats = {
  apiRequestCount: 0,
  apiErrorCount: 0,
  writeRequestCount: 0,
  writeErrorCount: 0
};

const clientStats = {
  reportCount: 0,
  bootstrapRequestCount: 0,
  rollbackDropCount: 0,
  recentEvents: []
};

function capPush(arr, value) {
  arr.push(value);
  if (arr.length > ROUTE_MAX_SAMPLES) arr.shift();
}

function quantile(values = [], q = 0.95) {
  const list = Array.isArray(values) ? values.filter((x) => Number.isFinite(Number(x))).map((x) => Number(x)) : [];
  if (!list.length) return 0;
  list.sort((a, b) => a - b);
  const idx = Math.max(0, Math.min(list.length - 1, Math.ceil(q * list.length) - 1));
  return list[idx] || 0;
}

function avg(values = []) {
  const list = Array.isArray(values) ? values.filter((x) => Number.isFinite(Number(x))).map((x) => Number(x)) : [];
  if (!list.length) return 0;
  const total = list.reduce((sum, x) => sum + x, 0);
  return total / list.length;
}

function toFiniteNonNegativeNumber(value, fallback = 0) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(0, n);
}

function normalizePathname(pathname = "") {
  const text = String(pathname || "").trim();
  if (!text) return "/";
  return text.replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, ":uuid");
}

function getOrCreateBucket(method = "GET", pathname = "/") {
  const normalizedMethod = String(method || "GET").toUpperCase();
  const normalizedPath = normalizePathname(pathname);
  const key = `${normalizedMethod} ${normalizedPath}`;
  if (!routeBuckets.has(key)) {
    if (routeBuckets.size >= ROUTE_MAX_KEYS) {
      const first = routeBuckets.keys().next();
      if (!first.done) routeBuckets.delete(first.value);
    }
    routeBuckets.set(key, {
      key,
      method: normalizedMethod,
      pathname: normalizedPath,
      count: 0,
      errorCount: 0,
      durations: [],
      queryCounts: [],
      payloadBytes: []
    });
  }
  return routeBuckets.get(key);
}

export function createRequestMetricsContext() {
  return {
    queryCount: 0,
    queryDurationMs: 0,
    responseBytes: 0,
    startedAt: Date.now()
  };
}

export function runWithRequestMetrics(context, fn) {
  return REQUEST_CONTEXT.run(context, fn);
}

export function getCurrentRequestMetrics() {
  return REQUEST_CONTEXT.getStore() || null;
}

export function recordDbQuery(durationMs = 0) {
  const context = REQUEST_CONTEXT.getStore();
  if (!context) return;
  context.queryCount += 1;
  context.queryDurationMs += Number.isFinite(Number(durationMs)) ? Number(durationMs) : 0;
}

export function recordHttpRequest({
  method = "GET",
  pathname = "/",
  statusCode = 200,
  durationMs = 0,
  queryCount = 0,
  payloadBytes = 0
} = {}) {
  const normalizedPath = normalizePathname(pathname);
  const isApi = normalizedPath.startsWith("/api/");
  if (!isApi) return;

  globalStats.apiRequestCount += 1;
  if (Number(statusCode) >= 400) globalStats.apiErrorCount += 1;

  const m = String(method || "GET").toUpperCase();
  const isWrite = ["POST", "PATCH", "PUT", "DELETE"].includes(m);
  if (isWrite) {
    globalStats.writeRequestCount += 1;
    if (Number(statusCode) >= 400) globalStats.writeErrorCount += 1;
  }

  const bucket = getOrCreateBucket(m, normalizedPath);
  bucket.count += 1;
  if (Number(statusCode) >= 400) bucket.errorCount += 1;
  capPush(bucket.durations, Math.max(0, Number(durationMs) || 0));
  capPush(bucket.queryCounts, Math.max(0, Number(queryCount) || 0));
  capPush(bucket.payloadBytes, Math.max(0, Number(payloadBytes) || 0));
}

function isRollbackEventType(type = "") {
  const text = String(type || "").toLowerCase();
  if (!text) return false;
  return text.includes("rollback") || text.includes("stale") || text.includes("drop");
}

export function recordClientObservability(payload = {}) {
  const body = payload && typeof payload === "object" ? payload : {};
  const counters = body.counters && typeof body.counters === "object" ? body.counters : {};
  const events = Array.isArray(body.events) ? body.events : [];
  const sessionId = String(body.sessionId || "").trim();
  const userId = String(body.userId || "").trim();
  const hasBootstrapCounter = Object.prototype.hasOwnProperty.call(counters, "bootstrapRequests")
    || Object.prototype.hasOwnProperty.call(counters, "bootstrapRequestCount");
  const hasRollbackCounter = Object.prototype.hasOwnProperty.call(counters, "rollbackDrops")
    || Object.prototype.hasOwnProperty.call(counters, "rollbackDropCount");

  const bootstrapRequests = hasBootstrapCounter
    ? toFiniteNonNegativeNumber(counters.bootstrapRequests || counters.bootstrapRequestCount || 0, 0)
    : 0;
  const rollbackDrops = hasRollbackCounter
    ? toFiniteNonNegativeNumber(counters.rollbackDrops || counters.rollbackDropCount || 0, 0)
    : 0;
  clientStats.reportCount += 1;
  clientStats.bootstrapRequestCount += bootstrapRequests;
  clientStats.rollbackDropCount += rollbackDrops;

  events.forEach((event) => {
    const safe = event && typeof event === "object" ? event : {};
    const type = String(safe.type || "").trim() || "client.event";
    const count = toFiniteNonNegativeNumber(safe.count || 1, 1);
    if (!hasRollbackCounter && isRollbackEventType(type)) {
      clientStats.rollbackDropCount += count;
    }
    capPush(clientStats.recentEvents, {
      type,
      count,
      ts: String(safe.ts || new Date().toISOString()),
      sessionId,
      userId,
      route: String(safe.route || "").trim()
    });
  });
  if (clientStats.recentEvents.length > CLIENT_EVENT_MAX_SAMPLES) {
    clientStats.recentEvents.splice(0, clientStats.recentEvents.length - CLIENT_EVENT_MAX_SAMPLES);
  }
}

function toRouteReport(bucket) {
  return {
    route: bucket.key,
    method: bucket.method,
    pathname: bucket.pathname,
    count: Number(bucket.count || 0),
    errorRate: bucket.count > 0 ? Number((bucket.errorCount / bucket.count).toFixed(4)) : 0,
    latency: {
      avgMs: Number(avg(bucket.durations).toFixed(2)),
      p95Ms: Number(quantile(bucket.durations, 0.95).toFixed(2)),
      p99Ms: Number(quantile(bucket.durations, 0.99).toFixed(2))
    },
    query: {
      avgCount: Number(avg(bucket.queryCounts).toFixed(2)),
      p95Count: Number(quantile(bucket.queryCounts, 0.95).toFixed(2))
    },
    payload: {
      avgBytes: Number(avg(bucket.payloadBytes).toFixed(2)),
      p95Bytes: Number(quantile(bucket.payloadBytes, 0.95).toFixed(2))
    }
  };
}

export function getObservabilitySnapshot({ limit = 40 } = {}) {
  const buckets = [...routeBuckets.values()];
  const reports = buckets
    .map(toRouteReport)
    .sort((a, b) => b.latency.p95Ms - a.latency.p95Ms)
    .slice(0, Math.max(1, Math.min(200, Number(limit) || 40)));

  const allDurations = buckets.flatMap((x) => x.durations || []);
  const allQueryCounts = buckets.flatMap((x) => x.queryCounts || []);
  const allPayloadBytes = buckets.flatMap((x) => x.payloadBytes || []);

  const writeRollbackRate = globalStats.writeRequestCount > 0
    ? Number((globalStats.writeErrorCount / globalStats.writeRequestCount).toFixed(4))
    : 0;
  const clientRollbackRate = clientStats.bootstrapRequestCount > 0
    ? Number((clientStats.rollbackDropCount / clientStats.bootstrapRequestCount).toFixed(4))
    : 0;

  return {
    timestamp: new Date().toISOString(),
    summary: {
      apiRequestCount: Number(globalStats.apiRequestCount || 0),
      apiErrorRate: globalStats.apiRequestCount > 0
        ? Number((globalStats.apiErrorCount / globalStats.apiRequestCount).toFixed(4))
        : 0,
      writeRequestCount: Number(globalStats.writeRequestCount || 0),
      writeRollbackRate,
      clientReportCount: Number(clientStats.reportCount || 0),
      clientBootstrapRequestCount: Number(clientStats.bootstrapRequestCount || 0),
      clientRollbackDropCount: Number(clientStats.rollbackDropCount || 0),
      clientRollbackRate,
      routeP95Ms: Number(quantile(allDurations, 0.95).toFixed(2)),
      queryP95Count: Number(quantile(allQueryCounts, 0.95).toFixed(2)),
      payloadP95Bytes: Number(quantile(allPayloadBytes, 0.95).toFixed(2))
    },
    routes: reports,
    client: {
      recentEvents: [...clientStats.recentEvents].slice(-30).reverse()
    },
    config: {
      maxSamplesPerRoute: ROUTE_MAX_SAMPLES,
      maxRouteKeys: ROUTE_MAX_KEYS
    }
  };
}
