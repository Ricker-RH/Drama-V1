import { json } from "../core/http.js";
import {
  getBootstrapMeSectionPayload,
  getBootstrapMessagesSectionPayload,
  getBootstrapPayload
} from "../repos/bootstrap-repo.js";
import { resolveSessionUser } from "../core/session.js";

const GUEST_CORE_CACHE_TTL_MS = 30_000;
const USER_CORE_CACHE_TTL_MS = 15_000;
const MAX_USER_CORE_CACHE_ENTRIES = 64;
const USER_FULL_CACHE_TTL_MS = 12_000;
const USER_ME_CACHE_TTL_MS = 8_000;
const USER_MESSAGES_CACHE_TTL_MS = 8_000;

let guestCoreCache = null;
let guestCoreCacheAt = 0;
let inflightGuestCorePromise = null;
const userCoreCacheMap = new Map();
const userCoreInflightMap = new Map();
const userFullCacheMap = new Map();
const userFullInflightMap = new Map();
const userMeCacheMap = new Map();
const userMeInflightMap = new Map();
const userMessagesCacheMap = new Map();
const userMessagesInflightMap = new Map();

function emptyMessagesPayload() {
  return {
    inbox: [],
    likes: [],
    follows: [],
    comments: [],
    threads: {}
  };
}

function emptyMePayload() {
  return {
    contentLibrary: { works: [], likes: [], favorites: [], history: [] },
    relationUsers: [],
    stats: {
      storyCount: 0,
      likedCount: 0,
      fansCount: 0
    },
    coinBills: [],
    coinTasks: [],
    coinBenefits: []
  };
}

function emptySearchPayload() {
  return { hotTerms: [], history: [] };
}

function toHomeSectionPayload(payload = {}) {
  return {
    user: payload?.user || null,
    feedData: Array.isArray(payload?.feedData) ? payload.feedData : [],
    authors: payload?.authors && typeof payload.authors === "object" ? payload.authors : {},
    dramaStoryImages: Array.isArray(payload?.dramaStoryImages) ? payload.dramaStoryImages : [],
    communityList: Array.isArray(payload?.communityList) ? payload.communityList : [],
    communityPosts: payload?.communityPosts && typeof payload.communityPosts === "object" ? payload.communityPosts : {},
    search: payload?.search && typeof payload.search === "object"
      ? {
          hotTerms: Array.isArray(payload.search.hotTerms) ? payload.search.hotTerms : [],
          history: Array.isArray(payload.search.history) ? payload.search.history : []
        }
      : emptySearchPayload()
  };
}

function toDynamicSectionPayload(payload = {}) {
  return {
    dynamicFeed: Array.isArray(payload?.dynamicFeed) ? payload.dynamicFeed : []
  };
}

function toMessagesSectionPayload(payload = {}) {
  return {
    user: payload?.user || null,
    messages: payload?.messages && typeof payload.messages === "object"
      ? {
          inbox: Array.isArray(payload.messages.inbox) ? payload.messages.inbox : [],
          likes: Array.isArray(payload.messages.likes) ? payload.messages.likes : [],
          follows: Array.isArray(payload.messages.follows) ? payload.messages.follows : [],
          comments: Array.isArray(payload.messages.comments) ? payload.messages.comments : [],
          threads: payload.messages.threads && typeof payload.messages.threads === "object"
            ? payload.messages.threads
            : {}
        }
      : emptyMessagesPayload()
  };
}

function toMeSectionPayload(payload = {}) {
  return {
    user: payload?.user || null,
    me: payload?.me && typeof payload.me === "object"
      ? {
          contentLibrary: payload.me.contentLibrary && typeof payload.me.contentLibrary === "object"
            ? {
                works: Array.isArray(payload.me.contentLibrary.works) ? payload.me.contentLibrary.works : [],
                likes: Array.isArray(payload.me.contentLibrary.likes) ? payload.me.contentLibrary.likes : [],
                favorites: Array.isArray(payload.me.contentLibrary.favorites) ? payload.me.contentLibrary.favorites : [],
                history: Array.isArray(payload.me.contentLibrary.history) ? payload.me.contentLibrary.history : []
              }
            : emptyMePayload().contentLibrary,
          relationUsers: Array.isArray(payload.me.relationUsers) ? payload.me.relationUsers : [],
          stats: payload.me.stats && typeof payload.me.stats === "object"
            ? {
                storyCount: Number(payload.me.stats.storyCount || 0),
                likedCount: Number(payload.me.stats.likedCount || 0),
                fansCount: Number(payload.me.stats.fansCount || 0)
              }
            : emptyMePayload().stats,
          coinBills: Array.isArray(payload.me.coinBills) ? payload.me.coinBills : [],
          coinTasks: Array.isArray(payload.me.coinTasks) ? payload.me.coinTasks : [],
          coinBenefits: Array.isArray(payload.me.coinBenefits) ? payload.me.coinBenefits : []
        }
      : emptyMePayload(),
    search: payload?.search && typeof payload.search === "object"
      ? {
          hotTerms: Array.isArray(payload.search.hotTerms) ? payload.search.hotTerms : [],
          history: Array.isArray(payload.search.history) ? payload.search.history : []
        }
      : emptySearchPayload()
  };
}

function getUserCoreCache(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const item = userCoreCacheMap.get(id);
  if (!item) return null;
  if (Date.now() - Number(item.at || 0) > USER_CORE_CACHE_TTL_MS) return null;
  return item.data;
}

function setUserCoreCache(userId, data) {
  const id = String(userId || "").trim();
  if (!id) return;
  if (userCoreCacheMap.size >= MAX_USER_CORE_CACHE_ENTRIES) {
    const firstKey = userCoreCacheMap.keys().next().value;
    if (firstKey) userCoreCacheMap.delete(firstKey);
  }
  userCoreCacheMap.set(id, { data, at: Date.now() });
}

function getUserFullCache(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const item = userFullCacheMap.get(id);
  if (!item) return null;
  if (Date.now() - Number(item.at || 0) > USER_FULL_CACHE_TTL_MS) return null;
  return item.data;
}

function setUserFullCache(userId, data) {
  const id = String(userId || "").trim();
  if (!id) return;
  if (userFullCacheMap.size >= MAX_USER_CORE_CACHE_ENTRIES) {
    const firstKey = userFullCacheMap.keys().next().value;
    if (firstKey) userFullCacheMap.delete(firstKey);
  }
  userFullCacheMap.set(id, { data, at: Date.now() });
}

function getUserMeCache(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const item = userMeCacheMap.get(id);
  if (!item) return null;
  if (Date.now() - Number(item.at || 0) > USER_ME_CACHE_TTL_MS) return null;
  return item.data;
}

function setUserMeCache(userId, data) {
  const id = String(userId || "").trim();
  if (!id) return;
  if (userMeCacheMap.size >= MAX_USER_CORE_CACHE_ENTRIES) {
    const firstKey = userMeCacheMap.keys().next().value;
    if (firstKey) userMeCacheMap.delete(firstKey);
  }
  userMeCacheMap.set(id, { data, at: Date.now() });
}

function getUserMessagesCache(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const item = userMessagesCacheMap.get(id);
  if (!item) return null;
  if (Date.now() - Number(item.at || 0) > USER_MESSAGES_CACHE_TTL_MS) return null;
  return item.data;
}

function setUserMessagesCache(userId, data) {
  const id = String(userId || "").trim();
  if (!id) return;
  if (userMessagesCacheMap.size >= MAX_USER_CORE_CACHE_ENTRIES) {
    const firstKey = userMessagesCacheMap.keys().next().value;
    if (firstKey) userMessagesCacheMap.delete(firstKey);
  }
  userMessagesCacheMap.set(id, { data, at: Date.now() });
}

async function resolveBootstrapUserId(req, explicitUserId = "") {
  const raw = String(explicitUserId || "").trim();
  if (raw) return raw;
  const sessionUser = await resolveSessionUser(req);
  return String(sessionUser?.id || "").trim();
}

async function getOrLoadUserCorePayload(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const cached = getUserCoreCache(id);
  if (cached) return cached;
  const stale = userCoreCacheMap.get(id)?.data || null;
  const inflight = userCoreInflightMap.get(id);
  if (inflight) return inflight;
  const promise = getBootstrapPayload(id, "core")
    .then((data) => {
      setUserCoreCache(id, data);
      return data;
    })
    .catch((error) => {
      if (stale) return stale;
      throw error;
    })
    .finally(() => {
      userCoreInflightMap.delete(id);
    });
  userCoreInflightMap.set(id, promise);
  return promise;
}

async function getOrLoadGuestCorePayload() {
  const now = Date.now();
  if (guestCoreCache && now - guestCoreCacheAt < GUEST_CORE_CACHE_TTL_MS) {
    return guestCoreCache;
  }
  const stale = guestCoreCache;
  if (!inflightGuestCorePromise) {
    inflightGuestCorePromise = getBootstrapPayload(null, "core")
      .then((data) => {
        guestCoreCache = data;
        guestCoreCacheAt = Date.now();
        return data;
      })
      .catch((error) => {
        if (stale) return stale;
        throw error;
      })
      .finally(() => {
        inflightGuestCorePromise = null;
      });
  }
  return inflightGuestCorePromise;
}

async function getOrLoadUserFullPayload(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const cached = getUserFullCache(id);
  if (cached) return cached;
  const stale = userFullCacheMap.get(id)?.data || null;
  const inflight = userFullInflightMap.get(id);
  if (inflight) return inflight;
  const promise = getBootstrapPayload(id, "full")
    .then((data) => {
      setUserFullCache(id, data);
      return data;
    })
    .catch((error) => {
      if (stale) return stale;
      throw error;
    })
    .finally(() => {
      userFullInflightMap.delete(id);
    });
  userFullInflightMap.set(id, promise);
  return promise;
}

async function getOrLoadUserMePayload(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const cached = getUserMeCache(id);
  if (cached) return cached;
  const stale = userMeCacheMap.get(id)?.data || null;
  const inflight = userMeInflightMap.get(id);
  if (inflight) return inflight;
  const promise = getBootstrapMeSectionPayload(id)
    .then((data) => {
      setUserMeCache(id, data);
      return data;
    })
    .catch((error) => {
      if (stale) return stale;
      throw error;
    })
    .finally(() => {
      userMeInflightMap.delete(id);
    });
  userMeInflightMap.set(id, promise);
  return promise;
}

async function getOrLoadUserMessagesPayload(userId) {
  const id = String(userId || "").trim();
  if (!id) return null;
  const cached = getUserMessagesCache(id);
  if (cached) return cached;
  const stale = userMessagesCacheMap.get(id)?.data || null;
  const inflight = userMessagesInflightMap.get(id);
  if (inflight) return inflight;
  const promise = getBootstrapMessagesSectionPayload(id)
    .then((data) => {
      setUserMessagesCache(id, data);
      return data;
    })
    .catch((error) => {
      if (stale) return stale;
      throw error;
    })
    .finally(() => {
      userMessagesInflightMap.delete(id);
    });
  userMessagesInflightMap.set(id, promise);
  return promise;
}

export function invalidateBootstrapCoreCache(options = {}) {
  const includeFull = options === false ? false : (options === true || options?.full !== false);
  guestCoreCache = null;
  guestCoreCacheAt = 0;
  inflightGuestCorePromise = null;
  userCoreCacheMap.clear();
  userCoreInflightMap.clear();
  userMeCacheMap.clear();
  userMeInflightMap.clear();
  userMessagesCacheMap.clear();
  userMessagesInflightMap.clear();
  if (includeFull) {
    userFullCacheMap.clear();
    userFullInflightMap.clear();
  }
}

export async function warmBootstrapCoreCache() {
  try {
    const data = await getBootstrapPayload(null, "core");
    guestCoreCache = data;
    guestCoreCacheAt = Date.now();
  } catch {
    // warm-up best effort
  }
}

export async function handleBootstrap(req, res, pathname, url) {
  if (req.method !== "GET" || !pathname.startsWith("/api/v1/bootstrap")) return false;
  const userId = url.searchParams.get("userId");
  const mode = url.searchParams.get("mode") || "core";
  const resolvedUserId = await resolveBootstrapUserId(req, userId);

  if (pathname === "/api/v1/bootstrap/home") {
    const corePayload = resolvedUserId
      ? await getOrLoadUserCorePayload(resolvedUserId)
      : await getOrLoadGuestCorePayload();
    return json(res, 200, toHomeSectionPayload(corePayload));
  }

  if (pathname === "/api/v1/bootstrap/dynamic") {
    const corePayload = resolvedUserId
      ? await getOrLoadUserCorePayload(resolvedUserId)
      : await getOrLoadGuestCorePayload();
    return json(res, 200, toDynamicSectionPayload(corePayload));
  }

  if (pathname === "/api/v1/bootstrap/messages") {
    if (!resolvedUserId) {
      return json(res, 200, { messages: emptyMessagesPayload() });
    }
    const messagesPayload = await getOrLoadUserMessagesPayload(resolvedUserId);
    return json(res, 200, toMessagesSectionPayload(messagesPayload));
  }

  if (pathname === "/api/v1/bootstrap/me") {
    if (!resolvedUserId) {
      return json(res, 200, {
        user: null,
        me: emptyMePayload(),
        search: emptySearchPayload()
      });
    }
    const mePayload = await getOrLoadUserMePayload(resolvedUserId);
    return json(res, 200, toMeSectionPayload(mePayload));
  }

  if (pathname !== "/api/v1/bootstrap") return false;

  if (mode === "core") {
    const data = resolvedUserId
      ? await getOrLoadUserCorePayload(resolvedUserId)
      : await getOrLoadGuestCorePayload();
    return json(res, 200, data);
  }

  if (mode === "full" && resolvedUserId) {
    const data = await getOrLoadUserFullPayload(resolvedUserId);
    return json(res, 200, data);
  }

  const data = await getBootstrapPayload(resolvedUserId || null, mode);
  return json(res, 200, data);
}
