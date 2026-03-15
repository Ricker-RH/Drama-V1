const HEARTBEAT_MS = 20_000;

const clientsByUserId = new Map();
let heartbeatTimer = null;

function writeSse(res, event, payload) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

function ensureHeartbeat() {
  if (heartbeatTimer) return;
  heartbeatTimer = setInterval(() => {
    const now = new Date().toISOString();
    for (const clients of clientsByUserId.values()) {
      for (const client of clients) {
        writeSse(client.res, "heartbeat", { now });
      }
    }
  }, HEARTBEAT_MS);
}

function stopHeartbeatIfIdle() {
  if (!heartbeatTimer) return;
  if (clientsByUserId.size > 0) return;
  clearInterval(heartbeatTimer);
  heartbeatTimer = null;
}

function removeClient(client) {
  const key = String(client.userId || "").trim();
  if (!key) return;
  const clients = clientsByUserId.get(key);
  if (!clients) return;
  clients.delete(client);
  if (!clients.size) clientsByUserId.delete(key);
  stopHeartbeatIfIdle();
}

export function openMessageStream({ req, res, userId }) {
  const safeUserId = String(userId || "").trim();
  if (!safeUserId) return false;
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Connection: "keep-alive",
    "X-Accel-Buffering": "no"
  });
  const client = { userId: safeUserId, res };
  if (!clientsByUserId.has(safeUserId)) {
    clientsByUserId.set(safeUserId, new Set());
  }
  clientsByUserId.get(safeUserId).add(client);
  ensureHeartbeat();

  writeSse(res, "connected", {
    userId: safeUserId,
    serverTime: new Date().toISOString()
  });

  const close = () => removeClient(client);
  req.on("close", close);
  req.on("error", close);
  return true;
}

export function publishMessageEventToUsers(userIds, event, payload) {
  const targets = Array.isArray(userIds) ? userIds : [];
  for (const rawUserId of targets) {
    const userId = String(rawUserId || "").trim();
    if (!userId) continue;
    const clients = clientsByUserId.get(userId);
    if (!clients?.size) continue;
    for (const client of clients) {
      writeSse(client.res, event, payload);
    }
  }
}

export function publishMessageEventToAllUsers(event, payload, options = {}) {
  const excluded = new Set(
    Array.isArray(options?.excludeUserIds)
      ? options.excludeUserIds.map((x) => String(x || "").trim()).filter(Boolean)
      : []
  );
  for (const [userId, clients] of clientsByUserId.entries()) {
    if (excluded.has(userId)) continue;
    if (!clients?.size) continue;
    for (const client of clients) {
      writeSse(client.res, event, payload);
    }
  }
}
