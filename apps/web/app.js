const FILTER_CONFIG = [
  { key: "format", label: "全部体裁", options: ["短剧", "漫剧", "剧情向", "轻小说", "互动小说", "语音剧", "图文流", "纪实风", "悬疑线", "成长线"] },
  { key: "theme", label: "全部主题", options: ["现言", "女性成长", "脑洞", "奇幻", "逆袭", "治愈", "悬疑", "都市", "校园", "复仇"] },
  { key: "setting", label: "全部设定", options: ["打脸虐渣", "大男主", "大女主", "系统加成", "双强", "群像", "重生", "穿越", "权谋", "养成"] },
  { key: "background", label: "全部背景", options: ["现代", "都市", "古代", "乡村", "近未来", "架空世界", "校园", "职场", "宗门", "末日"] },
  { key: "recommend", label: "全部推荐", options: ["最新上架", "最高热度", "最高收藏", "高完局率", "编辑精选", "剧情反转", "高口碑", "新锐作者", "冷门宝藏", "适合新手"] },
  { key: "time", label: "全部时间", options: ["7天内上新", "14天内上新", "30天内上新", "近3个月", "近半年", "今年", "去年", "2024", "2023", "更早"] }
];

const FEED_DATA = [];
const DRAMA_STORY_IMAGES = [];
const DYNAMIC_TABS = ["推荐", "关注", "发现", "我的"];
const DYNAMIC_FEED = [];
const COMMUNITY_LIST = [];
const COMMUNITY_MEMBERS = [];
const COMMUNITY_POSTS = {};
const COMMUNITY_CREATED_MEMBERS_SEED = [];
const COMMUNITY_REVIEW_SEED = [];
const COMMUNITY_BLACKLIST_SEED = [];
const COMMUNITY_FILTER_CONFIG = [
  { key: "theme", label: "全部主题", options: ["悬疑", "言情", "古风", "科幻"] }
];
const COMMUNITY_TOPIC_SUGGESTIONS = [
  "短剧夜行地图",
  "社交APP",
  "社区日常",
  "开荒实录",
  "角色关系",
  "互动玩法",
  "剧情讨论",
  "周更连载"
];
const HOT_SEARCH_TERMS = [];
const DEFAULT_SEARCH_HISTORY = [];
const COMMUNITY_CARD_IMAGES = [
  'url("https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&w=1200&q=80")',
  'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80")',
  'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80")',
  'url("https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80")',
  'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80")',
  'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80")'
];
const MESSAGE_INBOX = [];
const MESSAGE_LIKES = [];
const MESSAGE_NEW_FOLLOWS = [];
const MESSAGE_COMMENTS = [];
const ME_PREFERENCE_OPTIONS = ["悬疑", "言情", "古风", "系统", "逆袭", "校园", "都市", "群像", "科幻", "治愈"];
const ME_CONTENT_LIBRARY = { works: [], likes: [], favorites: [], history: [] };
const ME_RELATION_USERS = [];
const COIN_BILLS = [];
const COIN_TASKS = [];
const COIN_BENEFITS = [];
const AUTHOR_DIRECTORY = {};
const AUTH_USER_ALIAS_INDEX = Object.create(null);
let AUTH_USER_ALIAS_INDEX_AT = 0;
const AUTH_USER_ALIAS_INDEX_TTL_MS = 5 * 60 * 1000;
let DRAMA_HERO_TOTAL = 1;
const API_BASE = "/api/v1";
const PWA_SW_URL = "/sw.js";
const PWA_DISABLE_KEY = "drama_pwa_disabled_v1";
const PWA_DEBUG_KEY = "drama_pwa_debug_v1";
const PWA_INSTALL_HINT_DISMISS_UNTIL_KEY = "drama_pwa_install_hint_dismiss_until_v1";
const PWA_INSTALL_HINT_COOLDOWN_MS = 5 * 24 * 60 * 60 * 1000;
const CLIENT_OBSERVABILITY_ENDPOINT = `${API_BASE}/observability/client`;
const CLIENT_OBSERVABILITY_SESSION_KEY = "drama_client_obs_session_v1";
const CLIENT_OBSERVABILITY_FLUSH_INTERVAL_MS = 12_000;
const CLIENT_OBSERVABILITY_MAX_EVENTS = 40;
const BOOTSTRAP_CORE_CACHE_PREFIX = "drama_bootstrap_core_v8_";
const BOOTSTRAP_CORE_GUEST_CACHE_KEY = `${BOOTSTRAP_CORE_CACHE_PREFIX}guest`;
const BOOTSTRAP_FULL_CACHE_PREFIX = "drama_bootstrap_full_v7_";
const BOOTSTRAP_ETAG_CACHE_PREFIX = "drama_bootstrap_etag_v2_";
const SELECTED_WORLD_ID_CACHE_KEY = "drama_selected_world_id_v4";
const AUTH_USER_ID_SESSION_KEY = "drama_auth_session_v3";
const AUTH_USER_ID_LEGACY_LOCAL_KEY = "drama_auth_user_id_v1";
const AUTH_REDIRECT_HASH_KEY = "drama_auth_redirect_hash_v1";
const AUTH_PUBLIC_ROUTES = new Set([
  "#/auth/login",
  "#/auth/phone",
  "#/auth/wechat",
  "#/auth/google",
  "#/auth/account"
]);
const WORLD_INTERACTION_CACHE_PREFIX = "drama_world_interactions_v1_";
const WORLD_REACTION_PENDING_PREFIX = "drama_world_reaction_pending_v1_";
const FOLLOW_STATE_CACHE_PREFIX = "drama_follow_state_v1_";
const FOLLOW_PENDING_PREFIX = "drama_follow_pending_v1_";
const DYNAMIC_INTERACTION_CACHE_PREFIX = "drama_dynamic_interaction_v1_";
const COMMUNITY_POST_STATE_CACHE_PREFIX = "drama_community_post_state_v1_";
const ME_VIEWED_PROFILE_CACHE_KEY = "drama_me_viewed_profile_v1";
const COMMUNITY_ASSET_CACHE_KEY = "drama_community_asset_v1";
const MESSAGE_META_CACHE_KEY = "drama_message_meta_v1";
const MESSAGE_THREAD_PREF_CACHE_KEY = "drama_message_thread_pref_v1";
const MESSAGE_THREAD_CACHE_PREFIX = "drama_message_thread_cache_v1_";
const MESSAGE_THREAD_CLEARED_AT_CACHE_KEY = "drama_message_thread_cleared_at_v1";
const MESSAGE_THREAD_CLEAR_HINT_CACHE_KEY = "drama_message_thread_clear_hint_v1";
const MESSAGE_THREAD_HIDDEN_IDS_CACHE_KEY = "drama_message_thread_hidden_ids_v1";
const MESSAGE_CONVERSATION_DELETED_AT_CACHE_KEY = "drama_message_conversation_deleted_at_v1";
const MESSAGE_CONVERSATION_FORCE_UNREAD_CACHE_KEY = "drama_message_conversation_force_unread_v1";
const PLAY_SESSION_CACHE_PREFIX = "drama_play_session_v1_";
const PLAY_BACKGROUND_PREF_CACHE_KEY = "drama_play_background_pref_v1";
const MESSAGE_NOTICE_READ_COOLDOWN_MS = 6_000;
const MESSAGE_NOTICE_LAST_MARKED_AT = {
  likes: 0,
  follows: 0,
  comments: 0,
  all: 0
};
const ROUTE_ONDEMAND_COOLDOWN_MS = 1_500;
const ROUTE_ONDEMAND_LAST_RUN_AT = {};
const ME_TAB_RENDER_LIMIT_INITIAL = 12;
const ME_TAB_RENDER_LIMIT_STEP = 12;
const WORKSHOP_SYNC_TTL_MS = 45_000;
const WORKSHOP_PAINT_HISTORY_CACHE_KEY = "drama_workshop_paint_history_v1";
const WORKSHOP_PAINT_HISTORY_MAX = 80;
const WORKSHOP_PAINT_HISTORY_SYNC_TTL_MS = 25_000;
const WORKSHOP_PAINT_MODEL_META = {
  "wan2.1-t2i-turbo": {
    name: "极速省钱",
    price: "¥0.18/张",
    desc: "出草图最快，适合批量探索"
  },
  "wan2.2-t2i-flash": {
    name: "平衡默认",
    price: "¥0.18/张",
    desc: "速度与细节均衡，推荐日常使用"
  },
  "z-image-turbo": {
    name: "高质量",
    price: "¥0.22/张",
    desc: "轻量模型，画质稳定，适合成片"
  }
};
const WORKSHOP_PAINT_MODEL_ORDER = ["wan2.1-t2i-turbo", "wan2.2-t2i-flash", "z-image-turbo"];
const WORKSHOP_PAINT_ACTIVE_MODEL_ID = "z-image-turbo";
const WORKSHOP_PAINT_PROMPT_PRESETS = [
  {
    key: "movie",
    label: "电影镜头",
    text: "广角镜头，景深明确，主体清晰，电影级光影，体积雾"
  },
  {
    key: "character",
    label: "人物特写",
    text: "角色面部细节，真实皮肤纹理，眼神光，服装质感，构图稳定"
  },
  {
    key: "scene",
    label: "场景概念",
    text: "环境叙事，前中后景分层，材质细节丰富，空间透视准确"
  },
  {
    key: "cover",
    label: "封面海报",
    text: "高冲击构图，主标题留白区域，视觉焦点集中，商业海报质感"
  }
];
const WORKSHOP_PAINT_MODEL_FALLBACK = WORKSHOP_PAINT_MODEL_ORDER.map((id) => ({
  id,
  label: WORKSHOP_PAINT_MODEL_META[id]?.name || id,
  price: WORKSHOP_PAINT_MODEL_META[id]?.price || "",
  quality: WORKSHOP_PAINT_MODEL_META[id]?.desc || ""
}));
const PROFILE_PENDING_PATCH_PREFIX = "drama_profile_pending_patch_v1_";
const PLAY_RESPONSE_POOL = [];
const PLAY_MODEL_OPTIONS = [
  "Prose-4",
  "Prose-4 Lite",
  "Director-3",
  "Grok-4.1 Fast Reasoning",
  "Grok-4.1 Quality"
];
const PLAY_MODEL_META = {
  "Prose-4": {
    group: "PROSE 系列",
    subtitle: "叙事均衡",
    desc: "长文稳定，剧情推进自然",
    speed: "2.8s",
    badge: "推荐"
  },
  "Prose-4 Lite": {
    group: "PROSE 系列",
    subtitle: "轻量快写",
    desc: "成本更低，适合高频互动",
    speed: "1.6s",
    badge: ""
  },
  "Director-3": {
    group: "DIRECTOR 系列",
    subtitle: "镜头调度",
    desc: "场景感和画面语言更强",
    speed: "2.3s",
    badge: "电影感"
  },
  "Grok-4.1 Fast Reasoning": {
    group: "GROK 系列",
    subtitle: "快速推理",
    desc: "反应快，适合短平快博弈",
    speed: "1.2s",
    badge: "快"
  },
  "Grok-4.1 Quality": {
    group: "GROK 系列",
    subtitle: "高质量推理",
    desc: "细节更足，复杂情境更稳",
    speed: "3.4s",
    badge: "深度"
  }
};
const PLAY_BACKGROUND_PRESET_COLORS = [
  { id: "mist-white", label: "雾白", color: "#f8f7ff" },
  { id: "soft-lavender", label: "浅紫", color: "#f2eeff" },
  { id: "lilac-haze", label: "淡薰衣", color: "#ece6ff" },
  { id: "moon-white", label: "月光白", color: "#fcfcff" },
  { id: "fog-blue", label: "雾蓝白", color: "#f3f6ff" },
  { id: "warm-milk", label: "暖白", color: "#fffaf7" }
];
const PLAY_BACKGROUND_DEFAULT = {
  preset: PLAY_BACKGROUND_PRESET_COLORS[1].id,
  color: PLAY_BACKGROUND_PRESET_COLORS[1].color,
  image: "",
  opacity: 0.36
};
const PLAY_IDEA_SUGGESTIONS = [
  "先观察人群动线",
  "尝试伪装成站务",
  "直接靠近 3 号车厢",
  "给林雾发密语",
  "向广播室反向追踪信号",
  "先确认 1 号车厢是否有埋伏",
  "绕到维修通道再切入站台",
  "用假情报测试陌生观察者反应"
];
const TEST_WORLD_PROFILES = {};
const WORLD_COMMENTS_CACHE_PREFIX = "drama_world_comments_v1_";
const PLAY_INITIAL_ENTRIES = [
  {
    type: "narrator",
    text: "雨在穹顶上敲出细密的回声，像一封迟到多年的审判书。你推开旧站台的隔离门，冷光从脚边爬上墙面，编号“N-17”在雾里一闪而过。"
  },
  {
    type: "narrator",
    text: "广播在第三次卡顿后恢复，陌生女声只留下一句——“别让他先看见你。”列车正在进站，风把告示牌吹得倾斜。你忽然明白这不是一次调查，而是一次被写进你名字的追猎。"
  }
];
const WORKSHOP_MODE_META = {
  long_narrative: {
    label: "长叙事 · 世界卡",
    kicker: "自由沙盒",
    title: "世界卡编辑器",
    subtitle: "",
    guidance: "none"
  },
  short_narrative: {
    label: "短叙事 · 故事卡",
    kicker: "半自由剧情",
    title: "故事卡编辑器",
    subtitle: "固定开端与结局锚点，中段允许偏航。",
    guidance: "low"
  },
  virtual_character: {
    label: "虚拟人物 · 角色卡",
    kicker: "互动养成",
    title: "角色卡编辑器",
    subtitle: "人物一致性优先，长期关系可成长。",
    guidance: "low"
  }
};
const WORKSHOP_AUTHORING_MODE_META = {
  template: {
    label: "表格输入",
    desc: "逐段填写，清晰可控",
    icon: "▦"
  },
  custom: {
    label: "自定义输入",
    desc: "成段设定，AI帮你拆分",
    icon: "✦"
  }
};
const WORKSHOP_FORCE_CUSTOM_MODES = new Set();
const WORKSHOP_TEMPLATES = {
  long_narrative: [
    {
      id: "night-city",
      name: "霓虹夜城",
      openingLine: "你推开港区旧站台的门，冷雾从鞋面一路爬上膝盖。",
      openingLineAiAssist: false,
      worldSetting: "近未来海港城，财团与灰产共治，信息比火力更值钱。",
      playerIdentity: "你是刚从底层爬上来的中间人，既懂街头规则也懂体制缝隙。",
      primaryGoal: "180 天内从底层中间人进入候选名单并拿到稳定席位。",
      coreConflict: "你掌握一份会改变势力平衡的黑账索引，但每公开一条都要付出关系代价。",
      fixedNpcs: "情报贩子白雀；审计官林序；港务安保队长段铮。",
      resourceSystem: "信用点、关系债、可验证证据。",
      toneStyle: "冷峻、快节奏、强博弈。",
      forbiddenRules: "禁止跨城跳场；禁止无代价获得核心证据。",
      detailMemorySeed: "旧站台编号 N-17 / 断续广播女声 / 倾斜告示牌"
    },
    {
      id: "ancient-clan",
      name: "古风宗门",
      openingLine: "晨钟第三响，内门石阶已站满围观弟子。",
      openingLineAiAssist: false,
      worldSetting: "三宗两朝并立，名义讲道统，实则争资源与舆论。",
      playerIdentity: "你是被逐出内门的旁支后人，记得旧谱但无话语权。",
      primaryGoal: "在宗门大比前拿回继承正名资格。",
      coreConflict: "你手里的残卷能证明宗门继承顺序被篡改。",
      fixedNpcs: "执法长老沈策；外门首席顾岚；皇城司线人阿渡。",
      resourceSystem: "声望、灵材、见证人、契约印信。",
      toneStyle: "克制、狠准、反转强。",
      forbiddenRules: "禁止跨时代设定；禁止系统外挂式逆转。",
      detailMemorySeed: "残卷缺页 / 石阶裂纹 / 夜巡铜铃"
    }
  ],
  short_narrative: [
    {
      id: "campus-rush",
      name: "保送风暴",
      openingLine: "你刚走出晨会礼堂，竞赛名额缩减公告已贴满走廊。",
      openingLineAiAssist: false,
      openingAnchor: "晨会后竞赛组宣布名额缩减，名单疑似已内定。",
      endingAnchors: "A 公开翻盘进省队；B 暗线胜出但名声受损；C 保底上岸但错失第一志愿。",
      fixedNpcs: "林老师（谨慎支持）；顾沉（竞争者）；教务主任（规则守门人）。",
      scopeLimits: "校园、教务系统、竞赛社群三域；禁止跨城跳场。",
      primaryGoal: "三个月内进入省队并锁定保送资格。",
      coreConflict: "规则看似公开，名额却被隐形关系网提前分配。",
      branchSeeds: "证据线、关系线、成绩线。",
      pacingHint: "3 回合内给第一次正反馈，8 回合内触发结局分歧。",
      cluePool: "名额表 / 模考排名 / 竞赛通知"
    },
    {
      id: "survival-7d",
      name: "据点七日",
      openingLine: "停电后的第一晚，远处火光映在你脸上，街区秩序瞬间坍塌。",
      openingLineAiAssist: false,
      openingAnchor: "停电第 1 夜，东侧仓库起火，街区秩序失控。",
      endingAnchors: "A 建成补给线守住据点；B 守住但失去关键同伴；C 据点失守转入流亡线。",
      fixedNpcs: "乔夏（医学生）；陈叔（维修工）；临街车队头目。",
      scopeLimits: "七天时间窗，主舞台为三条街区与废弃仓储。",
      primaryGoal: "七日内建立稳定补给与夜间防线。",
      coreConflict: "有限资源无法同时保全所有人，任何决定都带牺牲。",
      branchSeeds: "医疗线、防线、外交线。",
      pacingHint: "每回合必须有成本与收益并存。",
      cluePool: "仓库监控 / 物资清单 / 夜间巡逻日志"
    }
  ],
  virtual_character: [
    {
      id: "cold-ceo",
      name: "冷感总裁",
      personaName: "顾衍",
      relationStart: "你是新入职成员，他对你保持审视与距离。",
      personaCore: "高控制欲、低表达、对承诺极度敏感。",
      dialogueStyle: "短句、反问、克制，偶尔用数据压场。",
      relationBoundary: "不接受情绪勒索，不在公开场合暴露私域关系。",
      taboos: "失约、越级试探、公开逼问私事。",
      openingLine: "清晨的落地窗前，他把签字笔停在半空，抬眼看向你。",
      openingLineAiAssist: false,
      memoryHooks: "签字笔停顿 / 银色镜片反光 / 考勤报表角落折痕",
      growthMilestones: "信任阈值 20/50/80 解锁：资源共享、共同决策、私密坦白。",
      triggerWords: "失控、背叛、效率、兑现。"
    },
    {
      id: "rebellious-idol",
      name: "反骨艺人",
      personaName: "黎青",
      relationStart: "你是临时接入她项目的人，她对你有戒备也有好奇。",
      personaCore: "外冷内热，强反骨，讨厌被定义。",
      dialogueStyle: "口语化、带刺但不恶意，情绪上来会突然沉默。",
      relationBoundary: "不聊家庭创伤，不接受交易式靠近。",
      taboos: "替她做决定、拿隐私换合作、情绪勒索。",
      openingLine: "后台灯光忽明忽暗，她把耳返摘下一只，侧头看你。",
      openingLineAiAssist: false,
      memoryHooks: "耳返线打结 / 舞台返听杂音 / 纸杯上的口红印",
      growthMilestones: "默契阈值 25/55/85 解锁：后台闲聊、私人行程、合作创作。",
      triggerWords: "舞台、自由、合同、真话。"
    }
  ]
};

const app = document.getElementById("app");
const publishPlaceholderTimers = new Map();

function clearLegacyClientCaches() {
  try {
    localStorage.removeItem("drama_bootstrap_core_v1");
    localStorage.removeItem("drama_bootstrap_core_v2");
    localStorage.removeItem("drama_bootstrap_core_v3");
    localStorage.removeItem("drama_bootstrap_core_v4");
    localStorage.removeItem("drama_bootstrap_core_v5");
    localStorage.removeItem("drama_bootstrap_core_v6");
    localStorage.removeItem("drama_selected_world_id_v1");
    localStorage.removeItem("drama_selected_world_id_v2");
    localStorage.removeItem("drama_selected_world_id_v3");
    localStorage.removeItem(AUTH_USER_ID_LEGACY_LOCAL_KEY);
    const removeKeys = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (
        key.startsWith("drama_bootstrap_full_v1_")
        || key.startsWith("drama_bootstrap_full_v2_")
        || key.startsWith("drama_bootstrap_full_v3_")
        || key.startsWith("drama_bootstrap_full_v4_")
        || key.startsWith("drama_bootstrap_full_v5_")
        || key.startsWith("drama_bootstrap_core_v6_")
        || key.startsWith("drama_bootstrap_etag_v0_")
      ) {
        removeKeys.push(key);
      }
    }
    removeKeys.forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore storage access issues (private mode / blocked storage)
  }
}

clearLegacyClientCaches();

const uiState = {
  wechatMode: "account",
  homeSideTab: "首页",
  dramaHomeRankTab: "推荐榜",
  dramaHomeReserveTab: "即将开播",
  reserveGender: "全部",
  filters: FILTER_CONFIG.reduce((acc, f) => ({ ...acc, [f.key]: f.label }), {}),
  lastFilterKey: "format",
  selectedWorldId: null,
  worldCarouselIndex: 0,
  dramaHeroIndex: 0,
  storyLiked: false,
  storyFavorited: false,
  storyLikeCount: 1380,
  storyFavCount: 24000,
  roleScrollLeft: 0,
  isFollowingAuthor: false,
  authorFeedback: "",
  showProfileEditModal: false,
  showProfileAvatarPreview: false,
  showWorldShareSheet: false,
  showWorldShareImageModal: false,
  shareTargetType: "world",
  shareTargetDynamicId: "",
  worldShareMode: "picker",
  worldShareSelectedUserId: "",
  worldShareSelectedUserName: "",
  worldShareDraft: "",
  worldShareFeedback: "",
  profileAvatarPreview: {
    name: "",
    handle: "",
    avatarText: "",
    avatarUrl: ""
  },
  modalProfile: null,
  userModalTab: "works",
  reserveFollowed: false,
  reserveFeedback: "",
  carouselTimerActive: false,
  showLoginModal: false,
  postLoginRedirectHash: "",
  authLoginAt: 0,
  loginMethod: "phone",
  accountAuthMode: "login",
  loginAccount: "",
  loginPassword: "",
  registerAccount: "",
  registerPassword: "",
  registerConfirmPassword: "",
  loginPhone: "",
  loginCode: "",
  loginError: "",
  loginLoading: false,
  isLoggedIn: false,
  currentUserId: "",
  homeFilterExpanded: true,
  plazaTopicPanelOpen: false,
  communityTopicPanelOpen: false,
  searchPanelOpen: false,
  searchQuery: "",
  searchHistory: [],
  hotSearchCursor: 0,
  communitySearchPanelOpen: false,
  communitySearchQuery: "",
  communitySearchHistory: [],
  communityHotSearchCursor: 0,
  unifiedSearchScope: "all",
  searchOriginRoute: "",
  searchResultTab: "全部",
  searchSubTab: "综合",
  searchSort: "相关度",
  communitySearchTab: "综合",
  communitySearchSort: "相关度",
  userCoins: 0,
  searchAutoFocus: false,
  profile: {
    name: "Drama 用户",
    handle: "@drama_user",
    bio: "",
    avatarUrl: "",
    gender: "保密",
    birthday: "",
    coverUrl: "",
    backstageCoverUrl: "",
    backstageMask: true
  },
  profileDraft: {
    name: "Drama 用户",
    handle: "@drama_user",
    bio: "",
    avatarUrl: "",
    gender: "保密",
    birthday: "",
    coverUrl: "",
    backstageCoverUrl: "",
    backstageMask: true
  },
  profileSaving: false,
  profileAssetProcessing: false,
  profileCoreSyncGuardUntil: 0,
  profilePendingPatch: null,
  dynamicTab: "推荐",
  showDynamicComposer: false,
  dynamicPublishing: false,
  dynamicComposerType: "图文",
  dynamicDraftText: "",
  dynamicDraftTitle: "",
  dynamicDraftMedia: [],
  dynamicComposeStoryId: "",
  dynamicDraftVisibility: "public",
  dynamicDraftAllowComments: true,
  dynamicDraftMediaProcessing: false,
  dynamicPublishFeedback: "",
  dynamicPosts: [],
  selectedDynamicId: null,
  dynamicMeta: {},
  dynamicCommentDraft: "",
  dynamicCommentDraftByPostId: {},
  dynamicShareFeedback: "",
  publishPlaceholders: {},
  dynamicDetailMenuOpen: false,
  dynamicDetailActionLoading: false,
  backstageSignature: "",
  backstageTopBackground: "",
  backstageTopBackgroundMask: true,
  backstageSignatureDraft: "",
  backstageTopBackgroundDraft: "",
  backstageTopBackgroundMaskDraft: true,
  backstageSettingsSaving: false,
  backstageTopBgProcessing: false,
  meContentTab: "works",
  meContentVisibleLimitByTab: {
    drafts: ME_TAB_RENDER_LIMIT_INITIAL,
    works: ME_TAB_RENDER_LIMIT_INITIAL,
    likes: ME_TAB_RENDER_LIMIT_INITIAL,
    favorites: ME_TAB_RENDER_LIMIT_INITIAL,
    history: ME_TAB_RENDER_LIMIT_INITIAL
  },
  mePreferences: ["悬疑", "系统", "都市", "女性成长"],
  meTheme: "light",
  meFontSize: "标准",
  meLanguage: "简体中文",
  meFeedback: "",
  meMenuToast: "",
  meHeroCover: "",
  meMenuOpen: false,
  meViewedUserId: "",
  meViewedUserName: "",
  meStats: {
    storyCount: 0,
    likedCount: 0,
    fansCount: 0
  },
  meRelationTab: "粉丝",
  meRelationSearch: "",
  meRelationFollowing: {},
  meCoinTab: "总览",
  meCoinFeedback: "",
  meCoinClaimedTaskIds: [],
  meSettings: {
    storyPush: true,
    commentPush: true,
    followPush: true,
    systemPush: true,
    privateAccount: false,
    allowStrangerDm: true,
    showOnlineStatus: true,
    syncPlayHistory: true
  },
  messagesPlusOpen: false,
  messageTab: "全部",
  messageSearchOpen: false,
  messageSearchQuery: "",
  messageSearchKeyword: "",
  selectedMessageId: "",
  messageThreadDraft: "",
  messageQuoteDraft: null,
  messageThreadToolsOpen: false,
  messageEmojiPanelOpen: false,
  messageThreadMenuOpen: false,
  messageThreadAutoScrollOnEnter: false,
  messageThreadForceBottomUntil: 0,
  messageFeedback: "",
  messageFollowActions: {},
  messageCommentLikes: {},
  messageReplyTargetId: "",
  messageReplyDraft: "",
  messageReplyDraftByCommentId: {},
  messageReadAckConversationId: "",
  messagePeerPresence: {},
  messagePresenceBeatAt: {},
  messageThreads: {},
  messageThreadSendGuardAt: {},
  messageThreadRecentLocalIds: {},
  messagePinnedByConversationId: {},
  messageMutedByConversationId: {},
  messageThreadPrefsLoaded: false,
  messageLongPressMenuOpen: false,
  messageLongPressAnchorX: 0,
  messageLongPressAnchorY: 0,
  messageLongPressPointerOffsetX: 0,
  messageLongPressMessageId: "",
  messageLongPressConversationId: "",
  messageCardLongPressMenuOpen: false,
  messageCardLongPressAnchorX: 0,
  messageCardLongPressAnchorY: 0,
  messageCardLongPressPointerOffsetX: 0,
  messageCardLongPressConversationId: "",
  messageCardDeleteConfirmOpen: false,
  messageCardDeleteConfirmConversationId: "",
  messageForwardPickerOpen: false,
  messageClearConfirmOpen: false,
  messageClearConfirmConversationId: "",
  messageDeleteConfirmOpen: false,
  messageDeleteConfirmConversationId: "",
  messageDeleteConfirmMessageId: "",
  messageImagePreviewUrl: "",
  messageImagePreviewAlt: "",
  communityMyTab: "joined",
  communityGroupTab: "dynamic",
  selectedCommunityId: "c_1",
  selectedCommunityPostId: "cp_1",
  communityComposeType: "图片",
  communityComposeTitle: "",
  communityComposeText: "",
  communityComposeMedia: [],
  communityComposeMentions: [],
  communityComposeTopics: [],
  communityComposeMentionSheetOpen: false,
  communityComposeTopicSheetOpen: false,
  storyBindSheetOpen: false,
  storyBindSheetTarget: "",
  storyBindSearchKeyword: "",
  communityComposeStoryId: "",
  communityComposeVisibility: "community_only",
  communityComposeSync: true,
  communityPostPublished: false,
  communityGroupJoining: false,
  communityGroupFeedback: "",
  communityMembersByCommunityId: {},
  communityMembersLoadingByCommunityId: {},
  communityMembersErrorByCommunityId: {},
  communityMembersFetchedAtByCommunityId: {},
  communityPostMeta: {},
  communityPostDetailLoadingId: "",
  communityPostDetailError: "",
  communityCommentDraft: "",
  communityCommentDraftByPostId: {},
  communityAnnounceDraft: "",
  communityTransferMethod: "password",
  communityTransferCodeDraft: "",
  communityFilterExpanded: false,
  communityFilterTheme: "全部主题",
  communityFilterGender: "不限频向",
  communityFilterTime: "全部时间",
  communityFilterSize: "全部人数",
  communityCreateName: "",
  communityCreateTags: "",
  communityCreateDesc: "",
  communityCreateJoinMode: "公开加入",
  communityCreateAvatar: "",
  communityCreateCover: "",
  communityCreateMaskOpacity: 0.38,
  communityCreatePublishedId: "",
  communityCreateSubmitting: false,
  communityCreateAssetProcessing: false,
  communityCreateError: "",
  communityManageFeedback: "",
  communityJoinedSettings: {
    hideInJoinedList: false,
    muteNotifications: false,
    pinGroup: false,
    weeklyDigest: true
  },
  communityJoinedMembers: COMMUNITY_MEMBERS.slice(0, 8).map((m, i) => ({
    id: `jm_${i + 1}`,
    name: m.name,
    role: m.role,
    intro: m.intro,
    color: m.color
  })),
  communityCreatedMembers: COMMUNITY_CREATED_MEMBERS_SEED.map((m) => ({ ...m })),
  communityReviewQueue: COMMUNITY_REVIEW_SEED.map((x) => ({ ...x })),
  communityBlacklist: COMMUNITY_BLACKLIST_SEED.map((x) => ({ ...x })),
  communityTransferReceiverId: "cm_1",
  communityDismissConfirm: false,
  playStatusExpanded: true,
  playToolsExpanded: false,
  playModelMenuOpen: false,
  playModel: "Prose-4",
  playActionDraft: "",
  playSessionId: "",
  playRequesting: false,
  playRequestNonce: 0,
  playHintOpen: false,
  playSystemHint: "",
  playSystemHintTone: "notice",
  playIdeaModalOpen: false,
  playIdeaOptions: [],
  playPromptQuestion: "你打算怎么做？",
  playPromptOptions: [],
  playAutoOpeningRequested: false,
  playSessionBlockedReason: "",
  playResumeLoading: false,
  playAutoResumeCheckedWorldId: "",
  playAutoResumeInFlight: false,
  playInitScrollPending: false,
  playTopPinSpacer: 0,
  playBackgroundPreset: PLAY_BACKGROUND_DEFAULT.preset,
  playBackgroundColor: PLAY_BACKGROUND_DEFAULT.color,
  playBackgroundImage: PLAY_BACKGROUND_DEFAULT.image,
  playBackgroundOpacity: PLAY_BACKGROUND_DEFAULT.opacity,
  playLatestTurnPulseUntil: 0,
  playLatestTurnPulseNonce: 0,
  workshopMode: "long_narrative",
  workshopAuthoringMode: "custom",
  workshopSelectedTemplateId: {
    long_narrative: "",
    short_narrative: "",
    virtual_character: ""
  },
  workshopWorldDraft: {
    cardName: "",
    cardIntro: "",
    openingLine: "",
    openingLineAiAssist: false,
    worldSetting: "",
    playerIdentity: "",
    primaryGoal: "",
    coreConflict: "",
    fixedNpcs: "",
    resourceSystem: "",
    toneStyle: "",
    forbiddenRules: "",
    detailMemorySeed: "",
    cardBackground: "",
    albumMedia: []
  },
  workshopStoryDraft: {
    cardName: "",
    cardIntro: "",
    openingLine: "",
    openingLineAiAssist: false,
    openingAnchor: "",
    endingAnchors: "",
    fixedNpcs: "",
    scopeLimits: "",
    primaryGoal: "",
    coreConflict: "",
    branchSeeds: "",
    pacingHint: "",
    cluePool: "",
    cardBackground: "",
    albumMedia: []
  },
  workshopCharacterDraft: {
    cardName: "",
    cardIntro: "",
    personaName: "",
    relationStart: "",
    personaCore: "",
    dialogueStyle: "",
    relationBoundary: "",
    taboos: "",
    openingLine: "",
    openingLineAiAssist: false,
    memoryHooks: "",
    growthMilestones: "",
    triggerWords: "",
    cardBackground: "",
    albumMedia: []
  },
  workshopCustomRaw: "",
  workshopCustomParsing: false,
  workshopCustomParsed: null,
  workshopFeedback: "",
  workshopSavedCards: [],
  workshopCardsLoadedForUser: "",
  workshopLastSyncAt: 0,
  workshopSyncInFlight: false,
  workshopSaving: false,
  workshopPublishing: false,
  workshopActiveCardId: "",
  workshopSaveDecisionOpen: false,
  workshopPublishModalOpen: false,
  workshopPendingCardId: "",
  workshopSyncDynamic: true,
  workshopPublishDraft: {
    title: "",
    chapter: "",
    mainQuest: "",
    npc: "",
    clues: "",
    intro: "",
    format: "",
    theme: "",
    setting: "",
    background: "",
    recommend: "",
    cover: "",
    statline: ""
  },
  workshopPaintPrompt: "",
  workshopPaintNegativePrompt: "",
  workshopPaintStyle: "cinematic",
  workshopPaintRatio: "1:1",
  workshopPaintModel: WORKSHOP_PAINT_ACTIVE_MODEL_ID,
  workshopPaintCount: 4,
  workshopPaintSeedInput: "",
  workshopPaintSeedLocked: false,
  workshopPaintPromptEnhance: true,
  workshopPaintGenerating: false,
  workshopPaintResults: [],
  workshopPaintModels: WORKSHOP_PAINT_MODEL_FALLBACK.slice(),
  workshopPaintModelsLoaded: false,
  workshopPaintModelsLoading: false,
  workshopPaintHistory: [],
  workshopPaintHistoryLoadedForUser: "",
  workshopPaintHistoryLoading: false,
  workshopPaintHistoryLastSyncAt: 0,
  workshopPaintFeedback: "",
  workshopPaintView: "create",
  workshopPaintHistoryKeyword: "",
  workshopPaintComposerOpen: false,
  workshopBulkPublishing: false,
  playRound: 1,
  playChapter: getWorldProfile(FEED_DATA[0]).chapter,
  worldCommentDraftByCard: {},
  worldCommentsState: {},
  worldDetailMenuOpen: false,
  worldDetailMenuFeedback: "",
  worldActionFxUntil: {
    like: 0,
    favorite: 0,
    follow: 0,
    tip: 0,
    comment: 0,
    share: 0
  },
  playSceneImageReady: false,
  playEntries: getProfileOpeningEntries(getWorldProfile(FEED_DATA[0])),
  bootstrapFullLoaded: false,
  bootstrapFullLoading: false
};
uiState.workshopPaintHistory = readWorkshopPaintHistoryCache();

function persistViewedProfile() {
  try {
    const id = String(uiState.meViewedUserId || "").trim();
    const name = String(uiState.meViewedUserName || "").trim();
    if (!id && !name) {
      localStorage.removeItem(ME_VIEWED_PROFILE_CACHE_KEY);
      return;
    }
    localStorage.setItem(ME_VIEWED_PROFILE_CACHE_KEY, JSON.stringify({ id, name }));
  } catch {
    // ignore storage errors
  }
}

function readCommunityAssetCache() {
  try {
    const raw = localStorage.getItem(COMMUNITY_ASSET_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function readMessageMetaCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_META_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function readMessageThreadPrefCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_THREAD_PREF_CACHE_KEY);
    if (!raw) return { pinned: {}, muted: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { pinned: {}, muted: {} };
    const pinned = parsed.pinned && typeof parsed.pinned === "object" ? parsed.pinned : {};
    const muted = parsed.muted && typeof parsed.muted === "object" ? parsed.muted : {};
    return { pinned, muted };
  } catch {
    return { pinned: {}, muted: {} };
  }
}

function writeMessageThreadPrefCache(next = {}) {
  try {
    const payload = next && typeof next === "object" ? next : {};
    localStorage.setItem(MESSAGE_THREAD_PREF_CACHE_KEY, JSON.stringify(payload));
  } catch {}
}

function readMessageThreadClearedAtCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_THREAD_CLEARED_AT_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeMessageThreadClearedAtCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_THREAD_CLEARED_AT_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function readMessageThreadClearHintCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_THREAD_CLEAR_HINT_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeMessageThreadClearHintCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_THREAD_CLEAR_HINT_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function readMessageThreadHiddenIdsCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_THREAD_HIDDEN_IDS_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeMessageThreadHiddenIdsCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_THREAD_HIDDEN_IDS_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function readMessageConversationDeletedAtCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_CONVERSATION_DELETED_AT_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeMessageConversationDeletedAtCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_CONVERSATION_DELETED_AT_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function readMessageConversationForceUnreadCache() {
  try {
    const raw = localStorage.getItem(MESSAGE_CONVERSATION_FORCE_UNREAD_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeMessageConversationForceUnreadCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_CONVERSATION_FORCE_UNREAD_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function isMessageConversationForceUnread(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return false;
  const map = readMessageConversationForceUnreadCache();
  return Boolean(map[id]);
}

function setMessageConversationForceUnread(conversationId, forceUnread = true) {
  const id = String(conversationId || "").trim();
  if (!id) return;
  const map = readMessageConversationForceUnreadCache();
  if (forceUnread) map[id] = true;
  else delete map[id];
  writeMessageConversationForceUnreadCache(map);
}

function clearAllMessageConversationForceUnread() {
  writeMessageConversationForceUnreadCache({});
}

function applyMessageConversationForceUnread(item = {}) {
  const id = String(item?.id || "").trim();
  if (!id) return item;
  if (!isMessageConversationForceUnread(id)) return item;
  const unread = Number(item?.badge || 0);
  if (Number.isFinite(unread) && unread > 0) return item;
  return {
    ...item,
    badge: 1
  };
}

function getMessageConversationDeletedAt(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return 0;
  const map = readMessageConversationDeletedAtCache();
  const value = Number(map[id] || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function setMessageConversationDeletedAt(conversationId, timestamp = Date.now()) {
  const id = String(conversationId || "").trim();
  if (!id) return 0;
  const ts = Number(timestamp || Date.now());
  const safeTs = Number.isFinite(ts) && ts > 0 ? ts : Date.now();
  const map = readMessageConversationDeletedAtCache();
  map[id] = safeTs;
  writeMessageConversationDeletedAtCache(map);
  return safeTs;
}

function clearMessageConversationDeletedAt(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return;
  const map = readMessageConversationDeletedAtCache();
  if (!Object.prototype.hasOwnProperty.call(map, id)) return;
  delete map[id];
  writeMessageConversationDeletedAtCache(map);
}

function shouldHideInboxConversationByDeletedState(item = {}) {
  const id = String(item?.id || "").trim();
  if (!id) return false;
  const deletedAt = getMessageConversationDeletedAt(id);
  if (!deletedAt) return false;
  const lastTs = resolveMessageLastInteractionTs(item);
  if (Number.isFinite(lastTs) && lastTs > deletedAt) {
    clearMessageConversationDeletedAt(id);
    return false;
  }
  return true;
}

function isThreadMessageHidden(conversationId, messageId) {
  const cid = String(conversationId || "").trim();
  const mid = String(messageId || "").trim();
  if (!cid || !mid) return false;
  const map = readMessageThreadHiddenIdsCache();
  const bucket = map[cid] && typeof map[cid] === "object" ? map[cid] : {};
  return Boolean(bucket[mid]);
}

function setThreadMessageHidden(conversationId, messageId, hidden = true) {
  const cid = String(conversationId || "").trim();
  const mid = String(messageId || "").trim();
  if (!cid || !mid) return;
  const map = readMessageThreadHiddenIdsCache();
  const bucket = map[cid] && typeof map[cid] === "object" ? { ...map[cid] } : {};
  if (hidden) bucket[mid] = true;
  else delete bucket[mid];
  if (Object.keys(bucket).length > 0) map[cid] = bucket;
  else delete map[cid];
  writeMessageThreadHiddenIdsCache(map);
}

function setMessageThreadClearHint(conversationId, hint = {}) {
  const id = String(conversationId || "").trim();
  if (!id) return;
  const map = readMessageThreadClearHintCache();
  map[id] = {
    preview: String(hint?.preview || "").trim(),
    time: String(hint?.time || "").trim(),
    updatedAt: Date.now()
  };
  writeMessageThreadClearHintCache(map);
}

function getMessageThreadClearHint(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return null;
  const map = readMessageThreadClearHintCache();
  const hit = map[id];
  return hit && typeof hit === "object" ? hit : null;
}

function clearMessageThreadClearedState(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return;
  const clearedMap = readMessageThreadClearedAtCache();
  if (Object.prototype.hasOwnProperty.call(clearedMap, id)) {
    delete clearedMap[id];
    writeMessageThreadClearedAtCache(clearedMap);
  }
  const hintMap = readMessageThreadClearHintCache();
  if (Object.prototype.hasOwnProperty.call(hintMap, id)) {
    delete hintMap[id];
    writeMessageThreadClearHintCache(hintMap);
  }
}

function getMessageThreadClearedAt(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return 0;
  const map = readMessageThreadClearedAtCache();
  const value = Number(map[id] || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function setMessageThreadClearedAt(conversationId, timestamp = Date.now()) {
  const id = String(conversationId || "").trim();
  if (!id) return 0;
  const ts = Number(timestamp || Date.now());
  const safeTs = Number.isFinite(ts) && ts > 0 ? ts : Date.now();
  const map = readMessageThreadClearedAtCache();
  map[id] = safeTs;
  writeMessageThreadClearedAtCache(map);
  return safeTs;
}

function filterThreadRowsByClearedAt(conversationId, rows = []) {
  const clearedAt = getMessageThreadClearedAt(conversationId);
  const list = Array.isArray(rows) ? rows : [];
  if (!clearedAt) return list;
  return list.filter((row) => {
    const createdAtText = String(row?.created_at || row?.createdAt || "").trim();
    const createdAt = new Date(createdAtText).getTime();
    if (!Number.isFinite(createdAt)) return false;
    return createdAt > clearedAt;
  });
}

function applyClearedStateToInboxItem(item = {}) {
  const id = String(item?.id || "").trim();
  if (!id) return item;
  const clearedAt = getMessageThreadClearedAt(id);
  if (!clearedAt) return item;
  const lastMessageTs = new Date(String(item?.lastMessageAt || item?.last_message_at || "")).getTime();
  if (Number.isFinite(lastMessageTs) && lastMessageTs > clearedAt) {
    return item;
  }
  const localMessages = ensureMessageThread(id);
  const latestLocal = localMessages[localMessages.length - 1];
  const latestLocalTs = new Date(String(latestLocal?.createdAt || "")).getTime();
  if (Number.isFinite(latestLocalTs) && latestLocalTs > clearedAt) {
    return item;
  }
  if (!Number.isFinite(lastMessageTs) && localMessages.length > 0) return item;
  if (!Number.isFinite(lastMessageTs) || lastMessageTs <= clearedAt) {
    return {
      ...item,
      preview: "",
      badge: 0
    };
  }
  return item;
}

function ensureMessageThreadPrefsLoaded() {
  if (uiState.messageThreadPrefsLoaded) return;
  const cache = readMessageThreadPrefCache();
  uiState.messagePinnedByConversationId = cache.pinned && typeof cache.pinned === "object" ? { ...cache.pinned } : {};
  uiState.messageMutedByConversationId = cache.muted && typeof cache.muted === "object" ? { ...cache.muted } : {};
  uiState.messageThreadPrefsLoaded = true;
}

function persistMessageThreadPrefs() {
  ensureMessageThreadPrefsLoaded();
  writeMessageThreadPrefCache({
    pinned: { ...(uiState.messagePinnedByConversationId || {}) },
    muted: { ...(uiState.messageMutedByConversationId || {}) }
  });
}

function getMessageThreadCacheKey(conversationId, userId = uiState.currentUserId || "") {
  const cid = String(conversationId || "").trim();
  const uid = String(userId || "").trim();
  if (!cid || !uid) return "";
  return `${MESSAGE_THREAD_CACHE_PREFIX}${uid}_${cid}`;
}

function writeMessageThreadCache(conversationId, rows = [], userId = uiState.currentUserId || "") {
  const key = getMessageThreadCacheKey(conversationId, userId);
  if (!key) return;
  try {
    const list = Array.isArray(rows) ? rows.slice(-200) : [];
    localStorage.setItem(key, JSON.stringify({
      updatedAt: Date.now(),
      rows: list
    }));
  } catch {}
}

function readMessageThreadCache(conversationId, userId = uiState.currentUserId || "") {
  const key = getMessageThreadCacheKey(conversationId, userId);
  if (!key) return [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    const rows = Array.isArray(parsed?.rows) ? parsed.rows : [];
    return rows.slice(-200);
  } catch {
    return [];
  }
}

function clearMessageThreadCache(conversationId, userId = uiState.currentUserId || "") {
  const key = getMessageThreadCacheKey(conversationId, userId);
  if (!key) return;
  try {
    localStorage.removeItem(key);
  } catch {}
}

function hydrateMessageThreadFromCache(conversationId) {
  const cid = String(conversationId || "").trim();
  if (!cid || !uiState.currentUserId) return false;
  const current = ensureMessageThread(cid);
  if (current.length > 0) return false;
  const cached = readMessageThreadCache(cid, uiState.currentUserId);
  const filtered = filterThreadRowsByClearedAt(cid, cached);
  uiState.messageThreads[cid] = filtered;
  return filtered.length > 0;
}

function persistMessageThreadForConversation(conversationId) {
  const cid = String(conversationId || "").trim();
  if (!cid || !uiState.currentUserId) return;
  const rows = ensureMessageThread(cid);
  if (!rows.length) return;
  writeMessageThreadCache(cid, rows, uiState.currentUserId);
}

function markMessageSendGuard(conversationId, messageId = "") {
  const cid = String(conversationId || "").trim();
  if (!cid) return;
  const now = Date.now();
  uiState.messageThreadSendGuardAt[cid] = now;
  const mid = String(messageId || "").trim();
  if (!mid) return;
  if (!uiState.messageThreadRecentLocalIds[cid] || typeof uiState.messageThreadRecentLocalIds[cid] !== "object") {
    uiState.messageThreadRecentLocalIds[cid] = {};
  }
  uiState.messageThreadRecentLocalIds[cid][mid] = now;
}

function pruneMessageLocalIds(conversationId, ttlMs = 15_000) {
  const cid = String(conversationId || "").trim();
  if (!cid) return {};
  const bucket = uiState.messageThreadRecentLocalIds[cid];
  if (!bucket || typeof bucket !== "object") return {};
  const now = Date.now();
  const next = {};
  Object.entries(bucket).forEach(([id, ts]) => {
    const at = Number(ts || 0);
    if (at > 0 && (now - at) <= ttlMs) next[id] = at;
  });
  uiState.messageThreadRecentLocalIds[cid] = next;
  return next;
}

function mergeServerThreadWithLocalOptimistic(conversationId, prev = [], next = []) {
  const cid = String(conversationId || "").trim();
  if (!cid) return next;
  const resolveMsgSortTs = (msg) => {
    const localTs = Number(msg?.localAt || 0);
    if (Number.isFinite(localTs) && localTs > 0) return localTs;
    const createdTs = new Date(String(msg?.createdAt || "")).getTime();
    if (Number.isFinite(createdTs) && createdTs > 0) return createdTs;
    return 0;
  };
  const now = Date.now();
  const guardAt = Number(uiState.messageThreadSendGuardAt[cid] || 0);
  const guardActive = guardAt > 0 && (now - guardAt) <= 18_000;
  const recentLocalIds = pruneMessageLocalIds(cid, 45_000);
  const nextIds = new Set(next.map((x) => String(x?.id || "").trim()).filter(Boolean));
  if (!guardActive && Object.keys(recentLocalIds).length === 0) return next;
  const keep = [];
  prev.forEach((msg) => {
    const id = String(msg?.id || "").trim();
    if (!id || nextIds.has(id)) return;
    const isPending = Boolean(msg?.pending) && String(msg?.from || "") === "me";
    const recentConfirmed = String(msg?.from || "") === "me" && Boolean(recentLocalIds[id]);
    const createdTs = resolveMsgSortTs(msg);
    const recentByTime = (
      String(msg?.from || "") === "me"
      && (
        (Number.isFinite(createdTs) && createdTs > 0 && (now - createdTs) <= 45_000)
      )
    );
    if (!isPending && !recentConfirmed && !recentByTime) return;
    keep.push(msg);
  });
  if (!keep.length) return next;
  const merged = [...next];
  keep.forEach((msg) => {
    const id = String(msg?.id || "").trim();
    if (!id) return;
    if (merged.some((x) => String(x?.id || "").trim() === id)) return;
    merged.push(msg);
  });
  return merged.sort((a, b) => {
    const aTs = resolveMsgSortTs(a);
    const bTs = resolveMsgSortTs(b);
    if (aTs && bTs && aTs !== bTs) return aTs - bTs;
    if (aTs && !bTs) return 1;
    if (!aTs && bTs) return -1;
    return 0;
  });
}

function isMessageThreadPinned(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return false;
  ensureMessageThreadPrefsLoaded();
  return Boolean(uiState.messagePinnedByConversationId[id]);
}

function isMessageThreadMuted(conversationId) {
  const id = String(conversationId || "").trim();
  if (!id) return false;
  ensureMessageThreadPrefsLoaded();
  return Boolean(uiState.messageMutedByConversationId[id]);
}

function setMessageThreadPinned(conversationId, pinned) {
  const id = String(conversationId || "").trim();
  if (!id) return false;
  ensureMessageThreadPrefsLoaded();
  if (pinned) uiState.messagePinnedByConversationId[id] = true;
  else delete uiState.messagePinnedByConversationId[id];
  persistMessageThreadPrefs();
  return Boolean(pinned);
}

function setMessageThreadMuted(conversationId, muted) {
  const id = String(conversationId || "").trim();
  if (!id) return false;
  ensureMessageThreadPrefsLoaded();
  if (muted) uiState.messageMutedByConversationId[id] = true;
  else delete uiState.messageMutedByConversationId[id];
  persistMessageThreadPrefs();
  return Boolean(muted);
}

function orderMessageInboxWithPinned(items = []) {
  ensureMessageThreadPrefsLoaded();
  return [...items].sort((a, b) => {
    const aPinned = isMessageThreadPinned(a?.id) ? 1 : 0;
    const bPinned = isMessageThreadPinned(b?.id) ? 1 : 0;
    if (aPinned !== bPinned) return bPinned - aPinned;
    return 0;
  });
}

function writeMessageMetaCache(next = {}) {
  try {
    localStorage.setItem(MESSAGE_META_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistMessageMeta(messageId, patch = {}) {
  const id = String(messageId || "").trim();
  if (!id) return;
  const map = readMessageMetaCache();
  const prev = map[id] && typeof map[id] === "object" ? map[id] : {};
  const next = {
    ...prev,
    ...(String(patch?.name || "").trim() ? { name: String(patch.name).trim() } : {}),
    ...(String(patch?.userId || "").trim() ? { userId: String(patch.userId).trim() } : {}),
    ...(String(patch?.avatarUrl || "").trim() ? { avatarUrl: String(patch.avatarUrl).trim() } : {}),
    ...(String(patch?.bizType || "").trim() ? { bizType: String(patch.bizType).trim() } : {}),
    ...(String(patch?.worldId || "").trim() ? { worldId: String(patch.worldId).trim() } : {}),
    ...(String(patch?.sessionId || "").trim() ? { sessionId: String(patch.sessionId).trim() } : {}),
    updatedAt: Date.now()
  };
  map[id] = next;
  writeMessageMetaCache(map);
}

function writeCommunityAssetCache(next = {}) {
  try {
    localStorage.setItem(COMMUNITY_ASSET_CACHE_KEY, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistCommunityAssetById(communityId, patch = {}) {
  const cid = String(communityId || "").trim();
  if (!cid) return;
  const avatarUrl = String(patch?.avatarUrl || "").trim();
  const coverUrl = String(patch?.coverUrl || "").trim();
  const map = readCommunityAssetCache();
  map[cid] = {
    ...(map[cid] && typeof map[cid] === "object" ? map[cid] : {}),
    ...(avatarUrl ? { avatarUrl } : {}),
    ...(coverUrl ? { coverUrl } : {})
  };
  writeCommunityAssetCache(map);
}

function overlayCommunityAssetsFromCache() {
  const map = readCommunityAssetCache();
  COMMUNITY_LIST.forEach((item, idx) => {
    const cid = String(item?.id || "").trim();
    if (!cid || !map[cid] || typeof map[cid] !== "object") return;
    const cachedAvatar = String(map[cid].avatarUrl || "").trim();
    const cachedCover = String(map[cid].coverUrl || "").trim();
    COMMUNITY_LIST[idx] = {
      ...item,
      ...(cachedAvatar ? { avatarUrl: cachedAvatar } : {}),
      ...(cachedCover && !String(item?.cover || "").trim() ? { cover: `url("${cachedCover}")` } : {})
    };
  });
}

function getProfilePendingPatchKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${PROFILE_PENDING_PATCH_PREFIX}${uid}` : "";
}

function persistProfilePendingPatch(userId = uiState.currentUserId || "", patch = null) {
  const key = getProfilePendingPatchKey(userId);
  if (!key) return;
  try {
    if (!patch || typeof patch !== "object") {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(patch));
  } catch {}
}

function hydrateProfilePendingPatch(userId = uiState.currentUserId || "") {
  const key = getProfilePendingPatchKey(userId);
  if (!key) return;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const expiresAt = Number(parsed?.expiresAt || 0);
    const values = parsed?.values && typeof parsed.values === "object" ? parsed.values : null;
    if (!values || !expiresAt || Date.now() >= expiresAt) {
      localStorage.removeItem(key);
      return;
    }
    uiState.profilePendingPatch = { values, expiresAt };
  } catch {}
}

function restoreViewedProfile() {
  try {
    const raw = localStorage.getItem(ME_VIEWED_PROFILE_CACHE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const id = String(parsed?.id || "").trim();
    const name = String(parsed?.name || "").trim();
    uiState.meViewedUserId = id;
    uiState.meViewedUserName = name;
  } catch {
    uiState.meViewedUserId = "";
    uiState.meViewedUserName = "";
  }
}

restoreViewedProfile();

function replaceArray(target, next) {
  target.splice(0, target.length, ...(Array.isArray(next) ? next : []));
}

function replaceObject(target, next) {
  Object.keys(target).forEach((k) => delete target[k]);
  if (next && typeof next === "object") {
    Object.entries(next).forEach(([k, v]) => {
      target[k] = v;
    });
  }
}

function getDefaultWorldCard() {
  return {
    id: "",
    title: "暂无故事",
    format: "短剧",
    theme: "悬疑",
    setting: "双强",
    background: "都市",
    recommend: "最新上架",
    time: "7天内上新",
    tags: [],
    author: "Drama",
    cover: "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)",
    like: "0",
    star: "0",
    comment: "0",
    heat: "0.0w",
    isTest: false,
    liked: false,
    favorited: false
  };
}

function buildFeedDataFromPublishedWorldCard(worldCard = {}) {
  const id = String(worldCard?.id || "").trim();
  if (!id) return null;
  const mediaUrls = normalizeMediaUrls(worldCard?.mediaUrls || worldCard?.media_urls || worldCard?.albumMedia || worldCard?.album_media);
  const coverUrl = String(worldCard?.cover_url || worldCard?.coverUrl || worldCard?.cardBackground || worldCard?.card_background || "").trim();
  return {
    id,
    format: String(worldCard?.format || "短剧"),
    theme: String(worldCard?.theme || "剧情向"),
    setting: String(worldCard?.setting || "原创"),
    background: String(worldCard?.background || "原创世界"),
    recommend: String(worldCard?.recommend_tag || "最新发布"),
    time: String(worldCard?.time_tag || "刚刚更新"),
    title: String(worldCard?.title || "未命名作品"),
    subtitle: String(worldCard?.subtitle || ""),
    summary: String(worldCard?.summary || ""),
    overview: String(worldCard?.overview || ""),
    tags: [String(worldCard?.theme || "剧情向")],
    author: String(uiState.profile?.name || "Drama 用户"),
    authorId: String(uiState.currentUserId || ""),
    mode: String(worldCard?.mode || "long_narrative"),
    chapter: String(worldCard?.chapter_label || "序章"),
    mainQuest: String(worldCard?.main_quest || ""),
    npc: String(worldCard?.key_npc || ""),
    clues: String(worldCard?.key_clues || ""),
    openingLine: String(worldCard?.opening_line || worldCard?.openingLine || ""),
    openingLineAiAssist: parseBoolFlag(
      worldCard?.opening_line_ai_assist
      ?? worldCard?.openingLineAiAssist
      ?? worldCard?.opening_line_use_ai
      ?? worldCard?.openingLineUseAi,
      false
    ),
    openingSummary: String(worldCard?.opening_summary || ""),
    playHook: String(worldCard?.play_hook || ""),
    cover: coverUrl
      ? `linear-gradient(180deg,rgba(15,23,42,.05),rgba(15,23,42,.35)),url('${coverUrl}') center/cover`
      : "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)",
    coverUrl,
    cardBackground: coverUrl,
    mediaUrls,
    firstImageUrl: mediaUrls[0] || coverUrl || "",
    like: "0",
    star: "0",
    comment: "0",
    heat: "0.0w",
    isTest: false,
    liked: false,
    favorited: false
  };
}

function upsertFeedDataFromPublishedWorldCard(worldCard = {}) {
  const feedItem = buildFeedDataFromPublishedWorldCard(worldCard);
  if (!feedItem) return;
  const id = feedItem.id;
  const idx = FEED_DATA.findIndex((x) => String(x?.id || "") === id);
  if (idx >= 0) FEED_DATA[idx] = { ...FEED_DATA[idx], ...feedItem };
  else FEED_DATA.unshift(feedItem);
}

function clearPublishingPlaceholderTimer(placeholderId = "") {
  const id = String(placeholderId || "").trim();
  if (!id) return;
  const timer = publishPlaceholderTimers.get(id);
  if (timer) window.clearInterval(timer);
  publishPlaceholderTimers.delete(id);
}

function overlayPendingPublishingFeedItems() {
  const entries = Object.values(uiState.publishPlaceholders || {});
  if (!entries.length) return;
  entries.forEach((item) => {
    const placeholderId = String(item?.id || "").trim();
    if (!placeholderId || item?.doneAt) return;
    const idx = FEED_DATA.findIndex((x) => String(x?.id || "") === placeholderId);
    if (idx >= 0) {
      FEED_DATA[idx] = { ...FEED_DATA[idx], ...item };
      return;
    }
    FEED_DATA.unshift({ ...item });
  });
}

function createPublishPlaceholderFromCard(card = {}, publishDraft = {}) {
  const placeholderId = `publishing_${String(card?.id || "card")}_${Date.now()}`;
  const mode = String(card?.mode || uiState.workshopMode || "long_narrative");
  const fallbackTitle = String(card?.title || "发布中作品").trim() || "发布中作品";
  const title = String(publishDraft?.title || fallbackTitle).trim() || fallbackTitle;
  const summary = String(publishDraft?.summary || publishDraft?.intro || card?.summary || card?.subtitle || "内容正在整理并发布到首页").trim();
  const coverUrl = String(publishDraft?.cover || card?.cardBackground || card?.coverUrl || "").trim();
  const authorName = String(
    card?.author
    || card?.authorName
    || uiState.profile?.name
    || "Drama 用户"
  ).trim() || "Drama 用户";
  const authorId = String(card?.authorId || uiState.currentUserId || "").trim();
  const authorAvatarUrl = String(card?.authorAvatarUrl || uiState.profile?.avatarUrl || "").trim();
  const placeholder = {
    id: placeholderId,
    format: mode === "short_narrative" ? "短剧" : mode === "virtual_character" ? "角色" : "长剧",
    theme: "发布中",
    setting: "处理中",
    background: "创作中心",
    recommend: "处理中",
    time: "刚刚开始",
    title,
    subtitle: "正在发布到首页",
    summary,
    overview: summary,
    tags: ["发布中"],
    author: authorName,
    authorId,
    authorAvatarUrl,
    mode,
    chapter: String(card?.subtitle || "序章"),
    mainQuest: String(summary || ""),
    npc: "",
    clues: "",
    openingSummary: "",
    playHook: "",
    cover: coverUrl
      ? `linear-gradient(180deg,rgba(15,23,42,.1),rgba(15,23,42,.5)),url('${coverUrl}') center/cover`
      : "linear-gradient(135deg,#111827 0%,#374151 55%,#6b7280 100%)",
    coverUrl,
    like: "0",
    star: "0",
    comment: "0",
    heat: "0.0w",
    isTest: false,
    liked: false,
    favorited: false,
    isPublishing: true,
    publishProgress: 4,
    publishPhaseText: "正在上传素材",
    publishPulse: true,
    startedAt: Date.now()
  };
  uiState.publishPlaceholders[placeholderId] = placeholder;
  FEED_DATA.unshift({ ...placeholder });
  const timer = window.setInterval(() => {
    const current = uiState.publishPlaceholders[placeholderId];
    if (!current || current.doneAt) {
      clearPublishingPlaceholderTimer(placeholderId);
      return;
    }
    const progress = Number(current.publishProgress || 0);
    const next = Math.min(94, progress + (progress < 35 ? 8 : progress < 70 ? 4 : 2));
    const phase = next < 32
      ? "正在上传素材"
      : next < 68
        ? "正在合成发布卡片"
        : "正在同步到推荐页";
    const updated = { ...current, publishProgress: next, publishPhaseText: phase };
    uiState.publishPlaceholders[placeholderId] = updated;
    const idx = FEED_DATA.findIndex((x) => String(x?.id || "") === placeholderId);
    if (idx >= 0) FEED_DATA[idx] = { ...FEED_DATA[idx], ...updated };
    render();
  }, 220);
  publishPlaceholderTimers.set(placeholderId, timer);
  return placeholderId;
}

function settlePublishPlaceholderSuccess(placeholderId = "", worldCard = {}) {
  const id = String(placeholderId || "").trim();
  if (!id) return;
  clearPublishingPlaceholderTimer(id);
  const placeholder = uiState.publishPlaceholders[id];
  const nextFeedItem = buildFeedDataFromPublishedWorldCard(worldCard) || {};
  const doneCard = {
    ...(placeholder || {}),
    ...(nextFeedItem || {}),
    id: String(nextFeedItem?.id || placeholder?.id || id),
    isPublishing: true,
    publishProgress: 100,
    publishPhaseText: "发布完成",
    publishPulse: false,
    publishDone: true,
    doneAt: Date.now()
  };
  delete uiState.publishPlaceholders[id];
  const idx = FEED_DATA.findIndex((x) => String(x?.id || "") === id);
  if (idx >= 0) FEED_DATA[idx] = doneCard;
  else FEED_DATA.unshift(doneCard);
  const targetId = String(doneCard.id || "");
  if (targetId) {
    const firstIdx = FEED_DATA.findIndex((x) => String(x?.id || "") === targetId);
    if (firstIdx >= 0) {
      for (let i = FEED_DATA.length - 1; i > firstIdx; i -= 1) {
        if (String(FEED_DATA[i]?.id || "") === targetId) FEED_DATA.splice(i, 1);
      }
    }
  }
  window.setTimeout(() => {
    const tIdx = FEED_DATA.findIndex((x) => String(x?.id || "") === targetId);
    if (tIdx >= 0) {
      const item = FEED_DATA[tIdx];
      FEED_DATA[tIdx] = {
        ...item,
        isPublishing: false,
        publishDone: false,
        publishProgress: undefined,
        publishPhaseText: ""
      };
    }
    render();
  }, 1200);
}

function settlePublishPlaceholderFailed(placeholderId = "", message = "") {
  const id = String(placeholderId || "").trim();
  if (!id) return;
  clearPublishingPlaceholderTimer(id);
  const current = uiState.publishPlaceholders[id];
  if (!current) return;
  const failed = {
    ...current,
    isPublishing: true,
    publishPulse: false,
    publishFailed: true,
    publishPhaseText: String(message || "发布失败，请稍后重试")
  };
  uiState.publishPlaceholders[id] = failed;
  const idx = FEED_DATA.findIndex((x) => String(x?.id || "") === id);
  if (idx >= 0) FEED_DATA[idx] = { ...FEED_DATA[idx], ...failed };
  window.setTimeout(() => {
    delete uiState.publishPlaceholders[id];
    const removeIdx = FEED_DATA.findIndex((x) => String(x?.id || "") === id);
    if (removeIdx >= 0) FEED_DATA.splice(removeIdx, 1);
    render();
  }, 2600);
}

function ensurePublishedCreatorWorksInFeedData(creatorWorks = [], authorName = "") {
  creatorWorks.forEach((item) => {
    const worldId = String(item?.worldId || "").trim();
    if (!worldId) return;
    if (FEED_DATA.some((x) => String(x?.id || "") === worldId)) return;
    FEED_DATA.unshift({
      id: worldId,
      format: item.mode === "short_narrative" ? "短剧" : item.mode === "virtual_character" ? "角色" : "长剧",
      theme: "剧情向",
      setting: "原创",
      background: "原创世界",
      recommend: "已发布",
      time: "刚刚更新",
      title: String(item.title || "未命名作品"),
      subtitle: String(item.subtitle || ""),
      summary: String(item.summary || ""),
      overview: String(item.summary || ""),
      tags: [item.mode === "short_narrative" ? "短叙事" : item.mode === "virtual_character" ? "虚拟人物" : "长叙事"],
      author: String(authorName || uiState.profile?.name || "Drama 用户"),
      authorId: String(uiState.currentUserId || ""),
      mode: String(item.mode || "long_narrative"),
      chapter: String(item.subtitle || "序章"),
      mainQuest: String(item.summary || ""),
      npc: "",
      clues: "",
      openingSummary: "",
      playHook: "",
      cover: "linear-gradient(180deg,#c4b5fd 0%,#6d28d9 100%)",
      like: "0",
      star: "0",
      comment: "0",
      heat: "0.0w",
      isTest: false,
      liked: false,
      favorited: false
    });
  });
}

function shouldApplyFeedDataFromBootstrap(payloadFeed = null, sourceMode = "unknown") {
  const mode = String(sourceMode || "").trim();
  const allowByMode = mode === "full" || mode === "core" || mode === "core_cache";
  if (!allowByMode) return false;
  if (!Array.isArray(payloadFeed)) return false;
  if (payloadFeed.length > 0) return true;
  // Never wipe an already resolved feed with empty slice from partial/unstable responses.
  return FEED_DATA.length === 0;
}

function applyBootstrapData(payload, sourceMode = "unknown") {
  const prevDynamicMeta = uiState.dynamicMeta && typeof uiState.dynamicMeta === "object"
    ? uiState.dynamicMeta
    : {};
  if (shouldApplyFeedDataFromBootstrap(payload?.feedData, sourceMode)) {
    replaceArray(FEED_DATA, payload?.feedData || []);
  }
  overlayPendingPublishingFeedItems();
  replaceArray(DRAMA_STORY_IMAGES, payload?.dramaStoryImages || []);
  if (Object.prototype.hasOwnProperty.call(payload || {}, "dynamicFeed")) {
    const incomingDynamicFeed = Array.isArray(payload?.dynamicFeed) ? payload.dynamicFeed : [];
    const hasIncomingDynamicFeed = incomingDynamicFeed.length > 0;
    // Core/home bootstrap may omit dynamicFeed; don't wipe local list unless this fetch
    // is authoritative for dynamic scope (dynamic/full).
    if (hasIncomingDynamicFeed || sourceMode === "full" || sourceMode === "dynamic") {
      replaceArray(DYNAMIC_FEED, incomingDynamicFeed);
    }
  }
  const nextDynamicMeta = {};
  [...uiState.dynamicPosts, ...DYNAMIC_FEED].forEach((item) => {
    const id = String(item?.id || "").trim();
    if (!id || !prevDynamicMeta[id]) return;
    nextDynamicMeta[id] = prevDynamicMeta[id];
  });
  uiState.dynamicMeta = nextDynamicMeta;
  replaceArray(COMMUNITY_LIST, payload?.communityList || []);
  resolveCommunityComposeTargetId();
  overlayCommunityAssetsFromCache();
  uiState.communityMembersByCommunityId = {};
  uiState.communityMembersLoadingByCommunityId = {};
  uiState.communityMembersErrorByCommunityId = {};
  uiState.communityMembersFetchedAtByCommunityId = {};
  if (Object.prototype.hasOwnProperty.call(payload || {}, "communityPosts")) {
    const incomingCommunityPosts = payload?.communityPosts;
    const hasIncomingCommunityPosts = Boolean(
      incomingCommunityPosts
      && typeof incomingCommunityPosts === "object"
      && Object.keys(incomingCommunityPosts).length
    );
    // Core/home bootstrap may intentionally omit heavy post payload (or send empty object).
    // In that case, keep current local posts to avoid wiping just-published/community cached data.
    if (hasIncomingCommunityPosts || sourceMode === "full") {
      replaceObject(COMMUNITY_POSTS, hasIncomingCommunityPosts ? incomingCommunityPosts : {});
    }
  }
  replaceObject(AUTHOR_DIRECTORY, payload?.authors || {});
  overlayFollowStateForCurrentUser();
  overlayDynamicInteractionsForCurrentUser();
  overlayCommunityPostStateForCurrentUser();
  if (uiState.modalProfile?.id && AUTHOR_DIRECTORY[uiState.modalProfile.id]) {
    const nextProfile = buildAuthorProfileByName(uiState.modalProfile.name, uiState.modalProfile.id);
    uiState.modalProfile = nextProfile;
    uiState.isFollowingAuthor = Boolean(nextProfile.isFollowedByMe);
  }
  const incomingMessages = payload?.messages && typeof payload.messages === "object" ? payload.messages : {};
  const incomingMessageInbox = Array.isArray(incomingMessages.inbox) ? incomingMessages.inbox : [];
  const incomingMessageLikes = Array.isArray(incomingMessages.likes) ? incomingMessages.likes : [];
  const incomingMessageFollows = Array.isArray(incomingMessages.follows) ? incomingMessages.follows : [];
  const incomingMessageComments = Array.isArray(incomingMessages.comments) ? incomingMessages.comments : [];
  const incomingThreads = incomingMessages.threads && typeof incomingMessages.threads === "object" ? incomingMessages.threads : {};
  const hasIncomingMessageDetails = (
    incomingMessageInbox.length > 0
    || incomingMessageLikes.length > 0
    || incomingMessageFollows.length > 0
    || incomingMessageComments.length > 0
    || Object.keys(incomingThreads).length > 0
  );
  const shouldApplyMessageDetails = (
    sourceMode === "full"
    || sourceMode === "core_cache"
    || hasIncomingMessageDetails
  );
  if (shouldApplyMessageDetails) {
    const nextInbox = incomingMessageInbox
      .map((item) => applyClearedStateToInboxItem(item))
      .map((item) => applyMessageConversationForceUnread(item))
      .map((item) => normalizeStoryInboxItem(item))
      .filter((item) => !shouldHideInboxConversationByDeletedState(item));
    replaceArray(MESSAGE_INBOX, nextInbox);
    replaceArray(MESSAGE_LIKES, incomingMessageLikes);
    replaceArray(MESSAGE_NEW_FOLLOWS, incomingMessageFollows);
    replaceArray(MESSAGE_COMMENTS, incomingMessageComments);
    replaceObject(uiState.messageThreads, incomingThreads);
    const nextFollowActions = {};
    MESSAGE_NEW_FOLLOWS.forEach((item) => {
      const id = String(item?.id || "").trim();
      if (!id) return;
      const followedByMe = Boolean(item?.followedByMe);
      const defaultAction = followedByMe ? "发私信" : "回关";
      nextFollowActions[id] = String(item?.action || defaultAction);
    });
    uiState.messageFollowActions = nextFollowActions;
    const nextCommentLikes = {};
    MESSAGE_COMMENTS.forEach((item) => {
      const id = String(item?.id || "").trim();
      if (!id) return;
      if (typeof item?.likedByMe === "boolean") nextCommentLikes[id] = Boolean(item.likedByMe);
      else if (Object.prototype.hasOwnProperty.call(uiState.messageCommentLikes || {}, id)) nextCommentLikes[id] = Boolean(uiState.messageCommentLikes[id]);
      else nextCommentLikes[id] = false;
    });
    uiState.messageCommentLikes = nextCommentLikes;
    nextInbox.forEach((item) => {
      persistMessageMeta(item?.id, {
        name: item?.name,
        userId: item?.userId,
        avatarUrl: item?.avatarUrl,
        bizType: item?.bizType,
        worldId: item?.worldId,
        sessionId: item?.sessionId
      });
    });
  }
  const incomingRelationUsers = Array.isArray(payload?.me?.relationUsers) ? payload.me.relationUsers : [];
  const incomingCoinBills = Array.isArray(payload?.me?.coinBills) ? payload.me.coinBills : [];
  const incomingCoinTasks = Array.isArray(payload?.me?.coinTasks) ? payload.me.coinTasks : [];
  const incomingCoinBenefits = Array.isArray(payload?.me?.coinBenefits) ? payload.me.coinBenefits : [];
  const hasIncomingMeDetails = (
    incomingRelationUsers.length > 0
    || incomingCoinBills.length > 0
    || incomingCoinTasks.length > 0
    || incomingCoinBenefits.length > 0
  );
  const isAuthoritativeMeSource = sourceMode === "full" || sourceMode === "section";
  const shouldApplyMeDetails = isAuthoritativeMeSource
    && (
      sourceMode === "full"
      || hasIncomingMeDetails
      || !uiState.bootstrapFullLoaded
    );
  if (shouldApplyMeDetails) {
    replaceArray(ME_RELATION_USERS, incomingRelationUsers);
    uiState.meRelationFollowing = {};
    ME_RELATION_USERS.forEach((x) => {
      const id = String(x?.id || "").trim();
      if (!id) return;
      uiState.meRelationFollowing[id] = Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友");
    });
    replaceArray(COIN_BILLS, incomingCoinBills);
    replaceArray(COIN_TASKS, incomingCoinTasks);
    replaceArray(COIN_BENEFITS, incomingCoinBenefits);
  }
  replaceArray(HOT_SEARCH_TERMS, payload?.search?.hotTerms || []);
  const history = payload?.search?.history || [];
  uiState.searchHistory = [...history];
  uiState.communitySearchHistory = [...history];
  const incomingLibrary = payload?.me?.contentLibrary || {};
  const incomingStats = payload?.me?.stats || {};
  const hasIncomingMeStats = (
    Number.isFinite(Number(incomingStats.storyCount))
    || Number.isFinite(Number(incomingStats.likedCount))
    || Number.isFinite(Number(incomingStats.fansCount))
  );
  const hasResolvedUserPayload = Boolean(payload?.user && payload.user.id);
  const shouldTrustMePayload = hasResolvedUserPayload || !uiState.isLoggedIn;
  const incomingWorks = Array.isArray(incomingLibrary.works) ? incomingLibrary.works : null;
  const incomingLikes = Array.isArray(incomingLibrary.likes) ? incomingLibrary.likes : null;
  const incomingFavorites = Array.isArray(incomingLibrary.favorites) ? incomingLibrary.favorites : null;
  const incomingHistory = Array.isArray(incomingLibrary.history) ? incomingLibrary.history : null;
  const prevMeStats = uiState.meStats && typeof uiState.meStats === "object"
    ? uiState.meStats
    : { storyCount: 0, likedCount: 0, fansCount: 0 };
  const shouldApplyMeStats = isAuthoritativeMeSource
    && (
      sourceMode === "full"
      || hasIncomingMeStats
      || !uiState.bootstrapFullLoaded
    );
  if (shouldApplyMeStats && shouldTrustMePayload) {
    uiState.meStats = {
      storyCount: Number.isFinite(Number(incomingStats.storyCount))
        ? toMetricCount(incomingStats.storyCount)
        : toMetricCount(prevMeStats.storyCount),
      likedCount: Number.isFinite(Number(incomingStats.likedCount))
        ? toMetricCount(incomingStats.likedCount)
        : toMetricCount(prevMeStats.likedCount),
      fansCount: Number.isFinite(Number(incomingStats.fansCount))
        ? toMetricCount(incomingStats.fansCount)
        : toMetricCount(prevMeStats.fansCount)
    };
  } else if (!uiState.meStats || typeof uiState.meStats !== "object") {
    uiState.meStats = {
      storyCount: toMetricCount(prevMeStats.storyCount),
      likedCount: toMetricCount(prevMeStats.likedCount),
      fansCount: toMetricCount(prevMeStats.fansCount)
    };
  }
  if (sourceMode === "full" || sourceMode === "section") {
    if (shouldTrustMePayload) {
      ME_CONTENT_LIBRARY.works = incomingWorks || [];
      ME_CONTENT_LIBRARY.likes = incomingLikes || [];
      ME_CONTENT_LIBRARY.favorites = incomingFavorites || [];
      ME_CONTENT_LIBRARY.history = incomingHistory || [];
    }
  } else {
    if (!Array.isArray(ME_CONTENT_LIBRARY.works)) ME_CONTENT_LIBRARY.works = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.likes)) ME_CONTENT_LIBRARY.likes = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.favorites)) ME_CONTENT_LIBRARY.favorites = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.history)) ME_CONTENT_LIBRARY.history = [];
    // Never let core/core_cache slices rollback me-library once section/full has hydrated.
  }
  DRAMA_HERO_TOTAL = Math.max(1, Math.min(3, FEED_DATA.length));

  const me = payload?.user;
  if (me) {
    const prevUser = uiState.currentUserId;
    uiState.isLoggedIn = true;
    uiState.currentUserId = me.id || "";
    persistAuthUserId();
    const prevCoins = Number(uiState.userCoins || 0);
    const incomingCoins = Number(me.coins);
    const hasIncomingCoins = Number.isFinite(incomingCoins);
    if (sourceMode === "full" || sourceMode === "core_cache") {
      uiState.userCoins = hasIncomingCoins ? Math.max(0, incomingCoins) : Math.max(0, prevCoins);
    } else if (hasIncomingCoins) {
      const normalizedIncomingCoins = Math.max(0, incomingCoins);
      if (normalizedIncomingCoins > 0 || prevCoins <= 0) {
        uiState.userCoins = normalizedIncomingCoins;
      }
    }
    const nextProfileRaw = {
      name: me.name || "Drama 用户",
      handle: me.handle || "@drama_user",
      bio: me.bio || "",
      avatarUrl: me.avatarUrl || "",
      gender: me.gender || "保密",
      birthday: me.birthday || "",
      coverUrl: me.coverUrl || "",
      backstageCoverUrl: me.backstageCoverUrl || "",
      backstageMask: normalizeBackstageMaskValue(me.backstageMask, true)
    };
    const pendingPatch = uiState.profilePendingPatch;
    const pendingActive = Boolean(
      pendingPatch
      && pendingPatch.values
      && Date.now() < Number(pendingPatch.expiresAt || 0)
    );
    const nextProfile = pendingActive
      ? { ...nextProfileRaw, ...pendingPatch.values }
      : nextProfileRaw;
    if (pendingActive && sourceMode === "full") {
      const keys = ["name", "handle", "bio", "avatarUrl", "gender", "birthday", "coverUrl", "backstageCoverUrl", "backstageMask"];
      const serverMatched = keys.every((k) => String(nextProfileRaw[k] ?? "") === String(pendingPatch.values[k] ?? ""));
      if (serverMatched) {
        uiState.profilePendingPatch = null;
        persistProfilePendingPatch(uiState.currentUserId, null);
      }
    } else if (!pendingActive && pendingPatch) {
      uiState.profilePendingPatch = null;
      persistProfilePendingPatch(uiState.currentUserId, null);
    }
    const shouldSkipProfileFromCore = sourceMode === "core"
      && Date.now() < Number(uiState.profileCoreSyncGuardUntil || 0);
    if (!shouldSkipProfileFromCore) {
      uiState.profile = nextProfile;
      if (!(uiState.showProfileEditModal && !uiState.profileSaving)) {
        uiState.profileDraft = { ...uiState.profile };
      }
      uiState.meHeroCover = me.coverUrl ? `url("${me.coverUrl}")` : "";
      uiState.backstageSignature = uiState.profile.bio || "";
      uiState.backstageTopBackground = uiState.profile.backstageCoverUrl || "";
      uiState.backstageTopBackgroundMask = normalizeBackstageMaskValue(uiState.profile?.backstageMask, true);
      const editingBackstage = getCurrentRoutePath() === "#/messages/story/settings";
      if (!(editingBackstage && !uiState.backstageSettingsSaving && !uiState.backstageTopBgProcessing)) {
        uiState.backstageSignatureDraft = uiState.backstageSignature;
        uiState.backstageTopBackgroundDraft = uiState.backstageTopBackground;
        uiState.backstageTopBackgroundMaskDraft = uiState.backstageTopBackgroundMask;
      }
    }
    if (prevUser !== uiState.currentUserId) {
      uiState.workshopCardsLoadedForUser = "";
      uiState.workshopLastSyncAt = 0;
      uiState.workshopSavedCards = [];
      uiState.workshopActiveCardId = "";
      uiState.meViewedUserId = "";
      uiState.meViewedUserName = "";
      persistViewedProfile();
    }
  } else {
    const shouldKeepLoggedRuntime = Boolean(uiState.currentUserId);
    if (!shouldKeepLoggedRuntime) {
      uiState.isLoggedIn = false;
      uiState.currentUserId = "";
      persistAuthUserId();
      uiState.userCoins = 0;
      uiState.meStats = {
        storyCount: 0,
        likedCount: 0,
        fansCount: 0
      };
      ME_CONTENT_LIBRARY.works = [];
      ME_CONTENT_LIBRARY.likes = [];
      ME_CONTENT_LIBRARY.favorites = [];
      ME_CONTENT_LIBRARY.history = [];
      uiState.workshopCardsLoadedForUser = "";
      uiState.workshopLastSyncAt = 0;
      uiState.workshopSavedCards = [];
      uiState.workshopActiveCardId = "";
      uiState.backstageSignature = "";
      uiState.backstageTopBackground = "";
      uiState.backstageTopBackgroundMask = true;
      uiState.backstageSignatureDraft = "";
      uiState.backstageTopBackgroundDraft = "";
      uiState.backstageTopBackgroundMaskDraft = true;
      uiState.meViewedUserId = "";
      uiState.meViewedUserName = "";
      persistViewedProfile();
    }
  }

  if (DYNAMIC_FEED.length > 0 && !uiState.selectedDynamicId) {
    uiState.selectedDynamicId = DYNAMIC_FEED[0].id;
  }
  if (uiState.selectedWorldId && !FEED_DATA.some((x) => x.id === uiState.selectedWorldId)) {
    uiState.selectedWorldId = null;
  }
  if (!uiState.selectedWorldId && FEED_DATA[0]?.id) {
    uiState.selectedWorldId = FEED_DATA[0].id;
  }
  overlayWorldInteractionsForCurrentUser();
  overlayDynamicInteractionsForCurrentUser();
  overlayCommunityPostStateForCurrentUser();
  persistSelectedWorldId();
  const hasFullMessages = Array.isArray(payload?.messages?.inbox) && payload.messages.inbox.length > 0;
  const hasFullMe = Array.isArray(payload?.me?.coinBills) && payload.me.coinBills.length > 0;
  if (hasFullMessages || hasFullMe) uiState.bootstrapFullLoaded = true;
  if (!getCurrentRoutePath().startsWith("#/play")) {
    resetPlayStateForWorld(uiState.selectedWorldId);
  }
}

function persistSelectedWorldId() {
  try {
    const v = String(uiState.selectedWorldId || "").trim();
    if (!v) {
      localStorage.removeItem(SELECTED_WORLD_ID_CACHE_KEY);
      return;
    }
    localStorage.setItem(SELECTED_WORLD_ID_CACHE_KEY, v);
  } catch {}
}

function hydrateSelectedWorldId() {
  try {
    const cached = String(localStorage.getItem(SELECTED_WORLD_ID_CACHE_KEY) || "").trim();
    if (cached) uiState.selectedWorldId = cached;
  } catch {}
}

function getPlaySessionCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${PLAY_SESSION_CACHE_PREFIX}${uid}` : "";
}

function readPlaySessionCache(userId = uiState.currentUserId || "") {
  const key = getPlaySessionCacheKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writePlaySessionCache(next = {}, userId = uiState.currentUserId || "") {
  const key = getPlaySessionCacheKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistPlaySessionHint({ worldId = "", sessionId = "", title = "" } = {}, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const wid = String(worldId || "").trim();
  const sid = String(sessionId || "").trim();
  if (!uid || !wid || !sid) return;
  const map = readPlaySessionCache(uid);
  map[wid] = {
    worldId: wid,
    sessionId: sid,
    title: String(title || "").trim(),
    updatedAt: Date.now()
  };
  writePlaySessionCache(map, uid);
}

function clearPlaySessionHint(worldId = "", userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const wid = String(worldId || "").trim();
  if (!uid || !wid) return;
  const map = readPlaySessionCache(uid);
  if (!Object.prototype.hasOwnProperty.call(map, wid)) return;
  delete map[wid];
  writePlaySessionCache(map, uid);
}

function resolveLatestPlaySessionHintByWorld(worldId = "", userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const wid = String(worldId || "").trim();
  if (!uid || !wid) return { sessionId: "", title: "" };
  let bestSessionId = "";
  let bestTitle = "";
  let bestUpdatedAt = 0;

  const cached = readPlaySessionCache(uid);
  const cacheHit = cached[wid] && typeof cached[wid] === "object" ? cached[wid] : null;
  const cacheSessionId = String(cacheHit?.sessionId || "").trim();
  if (cacheSessionId) {
    bestSessionId = cacheSessionId;
    bestTitle = String(cacheHit?.title || "").trim();
    bestUpdatedAt = Number(cacheHit?.updatedAt || 0) || 0;
  }

  const inboxHit = MESSAGE_INBOX
    .filter((item) => {
      const itemWorldId = String(item?.worldId || "").trim();
      const itemSessionId = String(item?.sessionId || "").trim();
      if (!itemWorldId || itemWorldId !== wid) return false;
      return Boolean(itemSessionId);
    })
    .sort((a, b) => resolveMessageLastInteractionTs(b) - resolveMessageLastInteractionTs(a))[0];
  if (inboxHit) {
    const candidateSessionId = String(inboxHit?.sessionId || "").trim();
    const candidateUpdatedAt = resolveMessageLastInteractionTs(inboxHit);
    if (
      candidateSessionId
      && (!bestSessionId || candidateUpdatedAt >= bestUpdatedAt)
    ) {
      bestSessionId = candidateSessionId;
      bestTitle = String(inboxHit?.name || "").trim();
      bestUpdatedAt = candidateUpdatedAt;
    }
  }

  const metaMap = readMessageMetaCache();
  Object.values(metaMap || {}).forEach((meta) => {
    if (!meta || typeof meta !== "object") return;
    const metaWorldId = String(meta.worldId || "").trim();
    const metaSessionId = String(meta.sessionId || "").trim();
    if (!metaSessionId || metaWorldId !== wid) return;
    const candidateUpdatedAt = Number(meta.updatedAt || 0) || 0;
    if (!bestSessionId || candidateUpdatedAt >= bestUpdatedAt) {
      bestSessionId = metaSessionId;
      bestTitle = String(meta.name || "").trim();
      bestUpdatedAt = candidateUpdatedAt;
    }
  });

  return {
    sessionId: bestSessionId,
    title: bestTitle
  };
}

function hasPlayHistoryForWorld(worldId = "", userId = uiState.currentUserId || "") {
  const wid = String(worldId || "").trim();
  const uid = String(userId || "").trim();
  if (!wid || !uid) return false;
  if (
    String(uiState.playSessionId || "").trim()
    && String(uiState.selectedWorldId || "").trim() === wid
  ) {
    return true;
  }
  const hint = resolveLatestPlaySessionHintByWorld(wid, uid);
  return Boolean(String(hint?.sessionId || "").trim());
}

function setSelectedWorldId(worldId) {
  const id = String(worldId || "").trim();
  if (!id) return;
  if (String(uiState.selectedWorldId || "").trim() !== id) {
    uiState.playAutoResumeCheckedWorldId = "";
    uiState.playAutoResumeInFlight = false;
  }
  uiState.selectedWorldId = id;
  persistSelectedWorldId();
}

function triggerTapFeedback(node, className = "tip-anim") {
  if (!(node instanceof HTMLElement)) return;
  node.classList.remove(className);
  void node.offsetWidth;
  node.classList.add(className);
  window.setTimeout(() => node.classList.remove(className), 620);
}

function isWorldActionFxActive(type) {
  const key = String(type || "");
  return Date.now() < Number(uiState.worldActionFxUntil?.[key] || 0);
}

function triggerWorldActionFx(type, duration = 620) {
  const key = String(type || "");
  if (!key || !uiState.worldActionFxUntil || !(key in uiState.worldActionFxUntil)) return;
  const until = Date.now() + Math.max(220, Number(duration) || 620);
  uiState.worldActionFxUntil[key] = until;
  render();
  window.setTimeout(() => {
    if (Date.now() >= Number(uiState.worldActionFxUntil[key] || 0)) render();
  }, Math.max(260, Number(duration) + 30));
}

function persistAuthUserId() {
  try {
    const uid = String(uiState.currentUserId || "").trim();
    if (uid) {
      sessionStorage.setItem(AUTH_USER_ID_SESSION_KEY, uid);
      localStorage.setItem(AUTH_USER_ID_LEGACY_LOCAL_KEY, uid);
      return;
    }
    sessionStorage.removeItem(AUTH_USER_ID_SESSION_KEY);
    sessionStorage.removeItem(AUTH_REDIRECT_HASH_KEY);
    localStorage.removeItem(AUTH_USER_ID_LEGACY_LOCAL_KEY);
    uiState.authLoginAt = 0;
  } catch {}
}

function hydrateAuthUserId() {
  try {
    const sessionUid = String(sessionStorage.getItem(AUTH_USER_ID_SESSION_KEY) || "").trim();
    if (sessionUid) return sessionUid;
    const legacyUid = String(localStorage.getItem(AUTH_USER_ID_LEGACY_LOCAL_KEY) || "").trim();
    return legacyUid;
  } catch {
    return "";
  }
}

function isAuthRoute(routePath = "") {
  return AUTH_PUBLIC_ROUTES.has(String(routePath || "").trim());
}

function setPostLoginRedirectHash(hash = "") {
  const safe = String(hash || "").trim();
  if (!safe || isAuthRoute(safe.split("?")[0] || safe)) return;
  uiState.postLoginRedirectHash = safe;
  try {
    sessionStorage.setItem(AUTH_REDIRECT_HASH_KEY, safe);
  } catch {}
}

function consumePostLoginRedirectHash() {
  let next = String(uiState.postLoginRedirectHash || "").trim();
  if (!next) {
    try {
      next = String(sessionStorage.getItem(AUTH_REDIRECT_HASH_KEY) || "").trim();
    } catch {}
  }
  if (!next || isAuthRoute(next.split("?")[0] || next)) next = "#/theater/home";
  uiState.postLoginRedirectHash = "";
  try {
    sessionStorage.removeItem(AUTH_REDIRECT_HASH_KEY);
  } catch {}
  return next;
}

function touchAuthLoginNow() {
  uiState.authLoginAt = 0;
}

function hasAuthSessionExpired() {
  return false;
}

function performLogoutAndRedirectToLogin() {
  const prevUserId = String(uiState.currentUserId || "").trim();
  void flushClientObservability({ force: true, keepalive: true, userId: prevUserId }).catch(() => {});
  void fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
    credentials: "same-origin",
    cache: "no-store"
  }).catch(() => {});
  uiState.isLoggedIn = false;
  uiState.currentUserId = "";
  uiState.bootstrapFullLoaded = false;
  uiState.bootstrapFullLoading = false;
  bootstrapCoreInflightPromise = null;
  bootstrapCoreInflightUserKey = "";
  meRelationForceRefreshAt = 0;
  resetBootstrapSectionRuntime();
  uiState.profilePendingPatch = null;
  uiState.showLoginModal = false;
  persistProfilePendingPatch(prevUserId, null);
  clearBootstrapEtagsForUser(prevUserId);
  persistAuthUserId();
  if (window.location.hash !== "#/auth/login") {
    window.location.hash = "#/auth/login";
  }
}

const BOOTSTRAP_FULL_REFRESH_DEBOUNCE_MS = 160;
const BOOTSTRAP_HOME_MIN_REFRESH_INTERVAL_MS = 2500;
const BOOTSTRAP_HOME_FETCH_TIMEOUT_MS = 5000;
const BOOTSTRAP_SECTION_FETCH_TIMEOUT_MS = 5000;
const BOOTSTRAP_FULL_FETCH_TIMEOUT_MS = 6500;
let bootstrapFullController = null;
let bootstrapCoreRequestId = 0;
let bootstrapFullRequestId = 0;
let bootstrapLastFullAppliedAt = 0;
let bootstrapFullRefreshTimer = 0;
let bootstrapCoreInflightPromise = null;
let bootstrapCoreInflightUserKey = "";
const bootstrapCoreLastSuccessAtByUser = {};
let meRelationForceRefreshAt = 0;
let mePageAutoRecoverAt = 0;
let meFeedAutoRecoverAt = 0;
let meFeedFullRecoverAt = 0;
let meLibraryRecoverAt = 0;
let meLibraryFullRecoverAt = 0;
const BOOTSTRAP_SECTION_TTL_MS = 12_000;
const BOOTSTRAP_SECTION_PATHS = {
  dynamic: "/bootstrap/dynamic",
  me: "/bootstrap/me",
  messages: "/bootstrap/messages"
};
let clientObservabilitySessionId = "";
let clientObservabilityFlushTimer = 0;
let clientObservabilityInflightPromise = null;
const clientObservabilityPending = {
  bootstrapRequests: 0,
  rollbackDrops: 0,
  events: []
};
const bootstrapSectionRuntime = {
  dynamic: {
    requestId: 0,
    controller: null,
    inflight: null,
    inflightUserId: "",
    loadedUserId: "",
    loadedAt: 0
  },
  me: {
    requestId: 0,
    controller: null,
    inflight: null,
    inflightUserId: "",
    loadedUserId: "",
    loadedAt: 0
  },
  messages: {
    requestId: 0,
    controller: null,
    inflight: null,
    inflightUserId: "",
    loadedUserId: "",
    loadedAt: 0
  }
};

function getClientObservabilitySessionId() {
  if (clientObservabilitySessionId) return clientObservabilitySessionId;
  try {
    const cached = String(sessionStorage.getItem(CLIENT_OBSERVABILITY_SESSION_KEY) || "").trim();
    if (cached) {
      clientObservabilitySessionId = cached;
      return cached;
    }
  } catch {
    // ignore
  }
  clientObservabilitySessionId = `obs_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  try {
    sessionStorage.setItem(CLIENT_OBSERVABILITY_SESSION_KEY, clientObservabilitySessionId);
  } catch {
    // ignore
  }
  return clientObservabilitySessionId;
}

function queueClientObservabilityEvent(type = "", detail = {}) {
  const safeType = String(type || "").trim();
  if (!safeType) return;
  clientObservabilityPending.events.push({
    type: safeType,
    route: getCurrentRoutePath(),
    ts: new Date().toISOString(),
    ...(detail && typeof detail === "object" ? detail : {})
  });
  if (clientObservabilityPending.events.length > CLIENT_OBSERVABILITY_MAX_EVENTS) {
    clientObservabilityPending.events.splice(
      0,
      clientObservabilityPending.events.length - CLIENT_OBSERVABILITY_MAX_EVENTS
    );
  }
}

function scheduleClientObservabilityFlush(delayMs = CLIENT_OBSERVABILITY_FLUSH_INTERVAL_MS) {
  if (clientObservabilityFlushTimer) return;
  clientObservabilityFlushTimer = window.setTimeout(() => {
    clientObservabilityFlushTimer = 0;
    void flushClientObservability();
  }, Math.max(1200, Number(delayMs) || CLIENT_OBSERVABILITY_FLUSH_INTERVAL_MS));
}

async function flushClientObservability(options = {}) {
  const keepalive = Boolean(options?.keepalive);
  if (clientObservabilityInflightPromise && !options?.force) return clientObservabilityInflightPromise;
  if (
    clientObservabilityPending.bootstrapRequests <= 0
    && clientObservabilityPending.rollbackDrops <= 0
    && !clientObservabilityPending.events.length
  ) {
    return null;
  }

  const payload = {
    sessionId: getClientObservabilitySessionId(),
    userId: String(options?.userId || uiState.currentUserId || "").trim(),
    counters: {
      bootstrapRequests: Math.max(0, Number(clientObservabilityPending.bootstrapRequests || 0)),
      rollbackDrops: Math.max(0, Number(clientObservabilityPending.rollbackDrops || 0))
    },
    events: clientObservabilityPending.events.slice(0, CLIENT_OBSERVABILITY_MAX_EVENTS)
  };
  const backup = {
    bootstrapRequests: clientObservabilityPending.bootstrapRequests,
    rollbackDrops: clientObservabilityPending.rollbackDrops,
    events: clientObservabilityPending.events.slice()
  };
  clientObservabilityPending.bootstrapRequests = 0;
  clientObservabilityPending.rollbackDrops = 0;
  clientObservabilityPending.events = [];

  const task = (async () => {
    try {
      const body = JSON.stringify(payload);
      if (
        keepalive
        && typeof navigator !== "undefined"
        && typeof navigator.sendBeacon === "function"
      ) {
        const sent = navigator.sendBeacon(
          CLIENT_OBSERVABILITY_ENDPOINT,
          new Blob([body], { type: "application/json" })
        );
        if (sent) return true;
      }
      const resp = await fetch(CLIENT_OBSERVABILITY_ENDPOINT, {
        method: "POST",
        credentials: "same-origin",
        keepalive,
        headers: { "Content-Type": "application/json" },
        body
      });
      if (!resp.ok) throw new Error(`OBS_HTTP_${resp.status}`);
      return true;
    } catch {
      clientObservabilityPending.bootstrapRequests += backup.bootstrapRequests;
      clientObservabilityPending.rollbackDrops += backup.rollbackDrops;
      clientObservabilityPending.events = [
        ...backup.events,
        ...clientObservabilityPending.events
      ].slice(-CLIENT_OBSERVABILITY_MAX_EVENTS);
      scheduleClientObservabilityFlush(2800);
      return false;
    } finally {
      if (clientObservabilityInflightPromise === task) {
        clientObservabilityInflightPromise = null;
      }
    }
  })();

  clientObservabilityInflightPromise = task;
  return task;
}

function trackBootstrapRequestStarted(source = "") {
  clientObservabilityPending.bootstrapRequests += 1;
  if (source) queueClientObservabilityEvent("bootstrap.request", { source, count: 1 });
  if (clientObservabilityPending.bootstrapRequests >= 8) {
    void flushClientObservability();
    return;
  }
  scheduleClientObservabilityFlush();
}

function trackBootstrapRollbackDrop(reason = "", detail = {}) {
  clientObservabilityPending.rollbackDrops += 1;
  queueClientObservabilityEvent(String(reason || "").trim() || "bootstrap.rollback_drop", detail);
  if (clientObservabilityPending.rollbackDrops >= 3 || clientObservabilityPending.events.length >= 10) {
    void flushClientObservability();
    return;
  }
  scheduleClientObservabilityFlush(2000);
}

function getBootstrapCoreCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${BOOTSTRAP_CORE_CACHE_PREFIX}${uid}` : BOOTSTRAP_CORE_GUEST_CACHE_KEY;
}

function getBootstrapFullCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${BOOTSTRAP_FULL_CACHE_PREFIX}${uid}` : "";
}

function normalizeBootstrapEtagUid(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid || "guest";
}

function getBootstrapEtagCacheKey(section = "home", userId = uiState.currentUserId || "") {
  const sec = String(section || "").trim() || "home";
  return `${BOOTSTRAP_ETAG_CACHE_PREFIX}${normalizeBootstrapEtagUid(userId)}_${sec}`;
}

function readBootstrapEtag(section = "home", userId = uiState.currentUserId || "") {
  const key = getBootstrapEtagCacheKey(section, userId);
  if (!key) return "";
  try {
    const raw = localStorage.getItem(key);
    return String(raw || "").trim();
  } catch {
    return "";
  }
}

function writeBootstrapEtag(section = "home", userId = uiState.currentUserId || "", etag = "") {
  const key = getBootstrapEtagCacheKey(section, userId);
  if (!key) return;
  const value = String(etag || "").trim();
  try {
    if (!value) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {}
}

function clearBootstrapEtagsForUser(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const sections = ["home", "dynamic", "me", "messages"];
  sections.forEach((section) => {
    writeBootstrapEtag(section, uid, "");
  });
}

function readBootstrapCacheByKey(key = "") {
  const cacheKey = String(key || "").trim();
  if (!cacheKey) return null;
  try {
    const raw = localStorage.getItem(cacheKey);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (!payload || typeof payload !== "object") return null;
    return payload;
  } catch {
    return null;
  }
}

function writeBootstrapCacheByKey(key = "", payload = null) {
  const cacheKey = String(key || "").trim();
  if (!cacheKey || !payload || typeof payload !== "object") return false;
  try {
    localStorage.setItem(cacheKey, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

function mergeCoreCommunityPostsForCacheWrite(userId = "", payload = null) {
  if (!payload || typeof payload !== "object") return payload;
  if (!Object.prototype.hasOwnProperty.call(payload, "communityPosts")) return payload;
  const incoming = payload.communityPosts;
  const incomingHasPosts = Boolean(
    incoming
    && typeof incoming === "object"
    && Object.keys(incoming).length
  );
  if (incomingHasPosts) return payload;
  const cached = readBootstrapCacheByKey(getBootstrapCoreCacheKey(userId));
  const cachedPosts = cached?.communityPosts;
  const cachedHasPosts = Boolean(
    cachedPosts
    && typeof cachedPosts === "object"
    && Object.keys(cachedPosts).length
  );
  if (!cachedHasPosts) return payload;
  return {
    ...payload,
    communityPosts: cachedPosts
  };
}

function mergeCoreDynamicFeedForCacheWrite(userId = "", payload = null) {
  if (!payload || typeof payload !== "object") return payload;
  if (Object.prototype.hasOwnProperty.call(payload, "dynamicFeed")) return payload;
  const cached = readBootstrapCacheByKey(getBootstrapCoreCacheKey(userId));
  const cachedDynamicFeed = Array.isArray(cached?.dynamicFeed) ? cached.dynamicFeed : null;
  if (!cachedDynamicFeed) return payload;
  return {
    ...payload,
    dynamicFeed: cachedDynamicFeed
  };
}

function isBootstrapMeSlicePlaceholder(me = null) {
  if (!me || typeof me !== "object") return true;
  const stats = me.stats && typeof me.stats === "object" ? me.stats : {};
  const statsAllZero = (
    Number(stats.storyCount || 0) === 0
    && Number(stats.likedCount || 0) === 0
    && Number(stats.fansCount || 0) === 0
  );
  const lib = me.contentLibrary && typeof me.contentLibrary === "object" ? me.contentLibrary : {};
  const libEmpty = (
    Array.isArray(lib.works) && lib.works.length === 0
    && Array.isArray(lib.likes) && lib.likes.length === 0
    && Array.isArray(lib.favorites) && lib.favorites.length === 0
    && Array.isArray(lib.history) && lib.history.length === 0
  );
  const relationEmpty = Array.isArray(me.relationUsers) && me.relationUsers.length === 0;
  const coinsEmpty = (
    Array.isArray(me.coinBills) && me.coinBills.length === 0
    && Array.isArray(me.coinTasks) && me.coinTasks.length === 0
    && Array.isArray(me.coinBenefits) && me.coinBenefits.length === 0
  );
  return statsAllZero && libEmpty && relationEmpty && coinsEmpty;
}

function mergeCoreMeForCacheWrite(userId = "", payload = null) {
  if (!payload || typeof payload !== "object") return payload;
  if (!Object.prototype.hasOwnProperty.call(payload, "me")) return payload;
  if (!isBootstrapMeSlicePlaceholder(payload.me)) return payload;
  const cached = readBootstrapCacheByKey(getBootstrapCoreCacheKey(userId));
  if (!cached || typeof cached !== "object" || isBootstrapMeSlicePlaceholder(cached.me)) return payload;
  return {
    ...payload,
    me: cached.me
  };
}

function mergeCoreUserCoinsForCacheWrite(userId = "", payload = null) {
  if (!payload || typeof payload !== "object") return payload;
  if (!payload.user || typeof payload.user !== "object") return payload;
  const incomingUserId = String(payload.user.id || "").trim();
  if (!incomingUserId) return payload;
  const incomingCoins = Number(payload.user.coins);
  if (Number.isFinite(incomingCoins) && incomingCoins > 0) return payload;
  const cached = readBootstrapCacheByKey(getBootstrapCoreCacheKey(userId));
  const cachedUser = cached?.user && typeof cached.user === "object" ? cached.user : null;
  if (!cachedUser || String(cachedUser.id || "").trim() !== incomingUserId) return payload;
  const cachedCoins = Number(cachedUser.coins);
  if (!Number.isFinite(cachedCoins) || cachedCoins <= 0) return payload;
  return {
    ...payload,
    user: {
      ...payload.user,
      coins: cachedCoins
    }
  };
}

function mutateBootstrapCacheByKey(key = "", mutator = null) {
  if (typeof mutator !== "function") return false;
  const cacheKey = String(key || "").trim();
  if (!cacheKey) return false;
  const payload = readBootstrapCacheByKey(cacheKey);
  if (!payload) return false;
  const changed = mutator(payload);
  if (!changed) return false;
  return writeBootstrapCacheByKey(cacheKey, payload);
}

function mutateBootstrapCoreCache(mutator, userId = uiState.currentUserId || "") {
  return mutateBootstrapCacheByKey(getBootstrapCoreCacheKey(userId), mutator);
}

function mutateBootstrapFullCache(mutator, userId = uiState.currentUserId || "") {
  const key = getBootstrapFullCacheKey(userId);
  if (!key) return false;
  return mutateBootstrapCacheByKey(key, mutator);
}

function cloneCommunityPostsMap(source = {}) {
  const out = {};
  Object.keys(source || {}).forEach((key) => {
    out[key] = Array.isArray(source[key]) ? [...source[key]] : [];
  });
  return out;
}

function buildBootstrapPayloadSnapshot() {
  return {
    user: uiState.isLoggedIn
      ? {
          id: uiState.currentUserId || "",
          name: uiState.profile?.name || "Drama 用户",
          handle: uiState.profile?.handle || "@drama_user",
          bio: uiState.profile?.bio || "",
          avatarUrl: uiState.profile?.avatarUrl || "",
          coverUrl: uiState.profile?.coverUrl || "",
          backstageCoverUrl: uiState.profile?.backstageCoverUrl || "",
          backstageMask: normalizeBackstageMaskValue(uiState.profile?.backstageMask, true),
          gender: uiState.profile?.gender || "保密",
          birthday: uiState.profile?.birthday || "",
          coins: Number(uiState.userCoins || 0)
        }
      : null,
    feedData: [...FEED_DATA],
    authors: { ...AUTHOR_DIRECTORY },
    dramaStoryImages: [...DRAMA_STORY_IMAGES],
    dynamicFeed: [...DYNAMIC_FEED],
    communityList: [...COMMUNITY_LIST],
    communityPosts: cloneCommunityPostsMap(COMMUNITY_POSTS),
    messages: {
      inbox: [...MESSAGE_INBOX],
      likes: [...MESSAGE_LIKES],
      follows: [...MESSAGE_NEW_FOLLOWS],
      comments: [...MESSAGE_COMMENTS],
      threads: { ...(uiState.messageThreads || {}) }
    },
    me: {
      contentLibrary: {
        works: Array.isArray(ME_CONTENT_LIBRARY.works) ? [...ME_CONTENT_LIBRARY.works] : [],
        likes: Array.isArray(ME_CONTENT_LIBRARY.likes) ? [...ME_CONTENT_LIBRARY.likes] : [],
        favorites: Array.isArray(ME_CONTENT_LIBRARY.favorites) ? [...ME_CONTENT_LIBRARY.favorites] : [],
        history: Array.isArray(ME_CONTENT_LIBRARY.history) ? [...ME_CONTENT_LIBRARY.history] : []
      },
      relationUsers: [...ME_RELATION_USERS],
      stats: {
        storyCount: Number(uiState.meStats?.storyCount || 0),
        likedCount: Number(uiState.meStats?.likedCount || 0),
        fansCount: Number(uiState.meStats?.fansCount || 0)
      },
      coinBills: [...COIN_BILLS],
      coinTasks: [...COIN_TASKS],
      coinBenefits: [...COIN_BENEFITS]
    },
    search: {
      hotTerms: [...HOT_SEARCH_TERMS],
      history: [...(uiState.searchHistory || [])]
    }
  };
}

function applyBootstrapSectionPatch(patch = {}, sourceMode = "core") {
  const base = buildBootstrapPayloadSnapshot();
  const merged = {
    ...base,
    ...(patch && typeof patch === "object" ? patch : {})
  };
  applyBootstrapData(merged, sourceMode);
}

function resetBootstrapSectionRuntime() {
  Object.keys(bootstrapSectionRuntime).forEach((section) => {
    const runtime = bootstrapSectionRuntime[section];
    if (runtime.controller) runtime.controller.abort();
    runtime.requestId = 0;
    runtime.controller = null;
    runtime.inflight = null;
    runtime.inflightUserId = "";
    runtime.loadedUserId = "";
    runtime.loadedAt = 0;
  });
}

function isAbortRequestError(error) {
  if (!error) return false;
  if (error instanceof DOMException && error.name === "AbortError") return true;
  const name = String(error?.name || "").trim();
  const msg = String(error?.message || "").trim();
  return name === "AbortError" || /aborted|abort/i.test(msg);
}

function scheduleBootstrapFullRefresh(userId = uiState.currentUserId || "", options = {}) {
  const uid = String(userId || "").trim();
  if (!uid) return;
  const delayMs = Math.max(0, Number(options?.delayMs ?? BOOTSTRAP_FULL_REFRESH_DEBOUNCE_MS) || 0);
  const execute = () => {
    const route = getCurrentRoutePath();
    void refreshBootstrapSectionsForRoute(route, uid, { force: true })
      .then(() => {
        render();
      })
      .catch((error) => {
        const msg = error instanceof Error ? error.message : "";
        if (msg === "BOOTSTRAP_ABORTED") return;
      });
  };
  if (bootstrapFullRefreshTimer) {
    window.clearTimeout(bootstrapFullRefreshTimer);
    bootstrapFullRefreshTimer = 0;
  }
  if (options?.immediate || delayMs <= 0) {
    execute();
    return;
  }
  bootstrapFullRefreshTimer = window.setTimeout(() => {
    bootstrapFullRefreshTimer = 0;
    execute();
  }, delayMs);
}

async function bootstrapClientData(userId = "", options = {}) {
  const uid = String(userId || "").trim();
  const userKey = uid || "guest";
  const force = Boolean(options?.force);
  if (!force && bootstrapCoreInflightPromise && bootstrapCoreInflightUserKey === userKey) {
    return bootstrapCoreInflightPromise;
  }
  if (!force) {
    const lastAt = Number(bootstrapCoreLastSuccessAtByUser[userKey] || 0);
    if (lastAt > 0 && (Date.now() - lastAt) < BOOTSTRAP_HOME_MIN_REFRESH_INTERVAL_MS) {
      return null;
    }
  }

  const startedAt = Date.now();
  const requestId = bootstrapCoreRequestId + 1;
  bootstrapCoreRequestId = requestId;
  trackBootstrapRequestStarted("home");
  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = window.setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, BOOTSTRAP_HOME_FETCH_TIMEOUT_MS);
  const query = uid ? `?userId=${encodeURIComponent(uid)}` : "";
  const etag = readBootstrapEtag("home", uid);
  const headers = etag ? { "If-None-Match": etag } : undefined;
  const task = (async () => {
    try {
      const resp = await fetch(`${API_BASE}/bootstrap/home${query}`, {
        credentials: "same-origin",
        cache: "no-store",
        headers,
        signal: controller.signal
      });
      if (resp.status === 304) {
        bootstrapCoreLastSuccessAtByUser[userKey] = Date.now();
        return null;
      }
      if (!resp.ok) throw new Error(`BOOTSTRAP_HTTP_${resp.status}`);
      const data = await resp.json();
      const nextEtag = String(resp.headers.get("etag") || "").trim();
      if (nextEtag) writeBootstrapEtag("home", uid, nextEtag);
      if (requestId !== bootstrapCoreRequestId) {
        trackBootstrapRollbackDrop("bootstrap.home.request_stale", { source: "home" });
        return data;
      }
      // Once a newer full bootstrap has landed, drop stale core responses to avoid UI rollback.
      if (uiState.bootstrapFullLoaded && bootstrapLastFullAppliedAt > startedAt) {
        trackBootstrapRollbackDrop("bootstrap.home.older_than_full", { source: "home" });
        return data;
      }
      applyBootstrapSectionPatch(data, "core");
      const mergedForCache = mergeCoreUserCoinsForCacheWrite(
        uid,
        mergeCoreMeForCacheWrite(
          uid,
          mergeCoreCommunityPostsForCacheWrite(
            uid,
            mergeCoreDynamicFeedForCacheWrite(uid, data)
          )
        )
      );
      writeBootstrapCacheByKey(getBootstrapCoreCacheKey(uid), mergedForCache);
      bootstrapCoreLastSuccessAtByUser[userKey] = Date.now();
      return data;
    } catch (error) {
      const fallback = readBootstrapCacheByKey(getBootstrapCoreCacheKey(uid));
      if (didTimeout) {
        if (fallback) {
          applyBootstrapData(fallback, "core_cache");
          bootstrapCoreLastSuccessAtByUser[userKey] = Date.now();
          return fallback;
        }
        throw new Error("BOOTSTRAP_TIMEOUT");
      }
      if (isAbortRequestError(error)) throw new Error("BOOTSTRAP_ABORTED");
      if (fallback) {
        applyBootstrapData(fallback, "core_cache");
        bootstrapCoreLastSuccessAtByUser[userKey] = Date.now();
        return fallback;
      }
      throw error;
    } finally {
      window.clearTimeout(timeoutId);
    }
  })();

  bootstrapCoreInflightPromise = task;
  bootstrapCoreInflightUserKey = userKey;
  return task.finally(() => {
    if (bootstrapCoreInflightPromise === task) {
      bootstrapCoreInflightPromise = null;
      bootstrapCoreInflightUserKey = "";
    }
  });
}

function getBootstrapSectionsForRoute(routePath = "") {
  const path = String(routePath || "").trim();
  const sections = [];
  if (path.startsWith("#/messages/story") || path === "#/messages/detail") {
    sections.push("dynamic");
  }
  if (
    path === "#/messages/chat"
    || path === "#/messages/likes"
    || path === "#/messages/follows"
    || path === "#/messages/comments"
  ) {
    sections.push("messages");
  }
  if (path.startsWith("#/me")) {
    sections.push("me");
  }
  return sections;
}

function isBootstrapSectionLoaded(section = "", userId = uiState.currentUserId || "") {
  const runtime = bootstrapSectionRuntime[section];
  if (!runtime) return false;
  const uid = String(userId || "").trim();
  return Boolean(uid && runtime.loadedUserId === uid && Number(runtime.loadedAt || 0) > 0);
}

function getBootstrapSectionPatchFromFullCache(section = "", userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid) return null;
  if (section !== "me" && section !== "messages") return null;
  const fullCached = readBootstrapCacheByKey(getBootstrapFullCacheKey(uid));
  if (!fullCached || typeof fullCached !== "object") return null;
  if (section === "me") {
    if (!fullCached.me || typeof fullCached.me !== "object") return null;
    return {
      user: fullCached.user || null,
      me: fullCached.me,
      search: fullCached.search && typeof fullCached.search === "object"
        ? fullCached.search
        : { hotTerms: [], history: [] }
    };
  }
  if (!fullCached.messages || typeof fullCached.messages !== "object") return null;
  return {
    user: fullCached.user || null,
    messages: fullCached.messages
  };
}

function hydrateBootstrapSectionFromFullCache(section = "", userId = uiState.currentUserId || "", sourceMode = "full") {
  const patch = getBootstrapSectionPatchFromFullCache(section, userId);
  if (!patch) return false;
  applyBootstrapSectionPatch(patch, sourceMode);
  return true;
}

function persistBootstrapFullSnapshot(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid) return false;
  return writeBootstrapCacheByKey(getBootstrapFullCacheKey(uid), buildBootstrapPayloadSnapshot());
}

function isMeBootstrapDataPending(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid || !uiState.isLoggedIn) return false;
  if (isBootstrapSectionLoaded("me", uid)) return false;
  const hasWorks = Array.isArray(ME_CONTENT_LIBRARY?.works) && ME_CONTENT_LIBRARY.works.length > 0;
  if (hasWorks) return false;
  const stats = uiState.meStats && typeof uiState.meStats === "object" ? uiState.meStats : {};
  const statsAllZero = (
    Number(stats.storyCount || 0) === 0
    && Number(stats.likedCount || 0) === 0
    && Number(stats.fansCount || 0) === 0
  );
  const relationEmpty = !Array.isArray(ME_RELATION_USERS) || ME_RELATION_USERS.length === 0;
  return statsAllZero && relationEmpty;
}

function getMePublishedWorldIdsFromLibrary() {
  const works = Array.isArray(ME_CONTENT_LIBRARY?.works) ? ME_CONTENT_LIBRARY.works : [];
  return works
    .filter((x) => {
      const status = String(x?.status || "").trim();
      const isDraft = Boolean(x?.draft) || status === "draft" || status === "unpublished";
      return !isDraft;
    })
    .map((x) => String(x?.id || "").trim())
    .filter(Boolean);
}

function shouldSkipSectionFetch(section = "", userId = "", force = false) {
  if (force) return false;
  const runtime = bootstrapSectionRuntime[section];
  if (!runtime) return true;
  const uid = String(userId || "").trim();
  if (runtime.loadedUserId !== uid) return false;
  return (Date.now() - Number(runtime.loadedAt || 0)) < BOOTSTRAP_SECTION_TTL_MS;
}

async function fetchBootstrapSection(section = "", userId = uiState.currentUserId || "", options = {}) {
  const path = BOOTSTRAP_SECTION_PATHS[section];
  if (!path) return null;
  const uid = String(userId || "").trim();
  const runtime = bootstrapSectionRuntime[section];
  const force = Boolean(options?.force);
  if (shouldSkipSectionFetch(section, uid, force)) return null;
  if (!force && runtime.inflight && runtime.inflightUserId === uid) {
    return runtime.inflight;
  }
  if (runtime.controller) runtime.controller.abort();
  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = window.setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, BOOTSTRAP_SECTION_FETCH_TIMEOUT_MS);
  runtime.controller = controller;
  runtime.requestId += 1;
  const requestId = runtime.requestId;
  trackBootstrapRequestStarted(`section:${section}`);
  const query = uid ? `?userId=${encodeURIComponent(uid)}` : "";
  const sourceMode = section === "me" || section === "messages"
    ? "section"
    : section === "dynamic"
      ? "dynamic"
      : "core";
  const etag = readBootstrapEtag(section, uid);
  const cachedCorePayload = section === "dynamic"
    ? readBootstrapCacheByKey(getBootstrapCoreCacheKey(uid))
    : null;
  const hasDynamicCacheSnapshot = section === "dynamic"
    ? Array.isArray(cachedCorePayload?.dynamicFeed)
    : false;
  const headers = etag && (section !== "dynamic" || hasDynamicCacheSnapshot)
    ? { "If-None-Match": etag }
    : undefined;

  const promise = fetch(`${API_BASE}${path}${query}`, {
    credentials: "same-origin",
    cache: "no-store",
    headers,
    signal: controller.signal
  })
    .then(async (resp) => {
      const applySectionData = (data) => {
        if (requestId !== runtime.requestId) {
          trackBootstrapRollbackDrop("bootstrap.section.request_stale", { source: section });
          return data;
        }
        applyBootstrapSectionPatch(data, sourceMode);
        if (section === "dynamic" && Array.isArray(data?.dynamicFeed)) {
          mutateBootstrapCoreCache((core) => {
            core.dynamicFeed = data.dynamicFeed;
            return true;
          }, uid);
        }
        if ((section === "me" || section === "messages") && uid) {
          persistBootstrapFullSnapshot(uid);
        }
        runtime.loadedAt = Date.now();
        runtime.loadedUserId = uid;
        return data;
      };

      if (resp.status === 304) {
        if (requestId !== runtime.requestId) return null;
        const hydratedFromCache = hydrateBootstrapSectionFromFullCache(section, uid, sourceMode);
        if (hydratedFromCache) {
          runtime.loadedAt = Date.now();
          runtime.loadedUserId = uid;
          return null;
        }
        // If ETag exists but local payload is missing, retry once without If-None-Match.
        writeBootstrapEtag(section, uid, "");
        const retryResp = await fetch(`${API_BASE}${path}${query}`, {
          credentials: "same-origin",
          cache: "no-store",
          signal: controller.signal
        });
        if (retryResp.status === 304) {
          runtime.loadedAt = Date.now();
          runtime.loadedUserId = uid;
          return null;
        }
        if (!retryResp.ok) throw new Error(`BOOTSTRAP_SECTION_HTTP_${retryResp.status}`);
        const retryData = await retryResp.json();
        const retryEtag = String(retryResp.headers.get("etag") || "").trim();
        if (retryEtag) writeBootstrapEtag(section, uid, retryEtag);
        return applySectionData(retryData);
      }
      if (!resp.ok) throw new Error(`BOOTSTRAP_SECTION_HTTP_${resp.status}`);
      const data = await resp.json();
      const nextEtag = String(resp.headers.get("etag") || "").trim();
      if (nextEtag) writeBootstrapEtag(section, uid, nextEtag);
      return applySectionData(data);
    })
    .catch((error) => {
      if (requestId === runtime.requestId) {
        const hydratedFromCache = hydrateBootstrapSectionFromFullCache(section, uid, sourceMode);
        if (hydratedFromCache) {
          runtime.loadedAt = Date.now();
          runtime.loadedUserId = uid;
          return null;
        }
      }
      if (didTimeout) throw new Error("BOOTSTRAP_SECTION_TIMEOUT");
      if (isAbortRequestError(error)) throw new Error("BOOTSTRAP_ABORTED");
      throw error;
    })
    .finally(() => {
      window.clearTimeout(timeoutId);
      if (runtime.inflight === promise) {
        runtime.inflight = null;
        runtime.inflightUserId = "";
      }
      if (runtime.controller === controller) runtime.controller = null;
    });

  runtime.inflight = promise;
  runtime.inflightUserId = uid;
  return promise;
}

async function refreshBootstrapSectionsForRoute(routePath = "", userId = uiState.currentUserId || "", options = {}) {
  const uid = String(userId || "").trim();
  const force = Boolean(options?.force);
  const tasks = [];
  if (uid) tasks.push(bootstrapClientData(uid, { force }).catch(() => null));
  const sections = getBootstrapSectionsForRoute(routePath);
  sections.forEach((section) => {
    tasks.push(fetchBootstrapSection(section, uid, { force }).catch(() => null));
  });
  if (!tasks.length) return;
  await Promise.all(tasks);
}

function ensureSectionDataOnDemand(routePath = "") {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  const route = String(routePath || "").trim();
  if (!route) return;
  const now = Date.now();
  const lastRunAt = Number(ROUTE_ONDEMAND_LAST_RUN_AT[route] || 0);
  if ((now - lastRunAt) < ROUTE_ONDEMAND_COOLDOWN_MS) return;
  ROUTE_ONDEMAND_LAST_RUN_AT[route] = now;
  if (route.startsWith("#/messages/chat")) {
    const warmupId = String(MESSAGE_INBOX[0]?.id || "").trim();
    const warmupThread = warmupId ? ensureMessageThread(warmupId) : [];
    if (warmupId && isUuid(warmupId) && warmupThread.length === 0) {
      void syncActiveConversationThread({ conversationId: warmupId }).catch(() => {});
    }
  }
  if (route.startsWith("#/messages/thread")) {
    const threadId = hydrateThreadRouteImmediately(getMessageConversationIdFromHash() || uiState.selectedMessageId || getActiveConversationId());
    void syncMessageInbox()
      .then((changed) => {
        if (changed) render();
      })
      .catch(() => {});
    void syncActiveConversationThread({ conversationId: threadId })
      .then((state) => {
        if (state?.messageChanged || state?.peerChanged) render();
      })
      .catch(() => {});
  }
  if (route === "#/messages/likes" || route === "#/messages/follows" || route === "#/messages/comments") {
    const bucket = route === "#/messages/likes"
      ? "likes"
      : route === "#/messages/follows"
        ? "follows"
        : "comments";
    void syncMessageNoticeSections()
      .then((changed) => {
        if (changed) render();
      })
      .catch(() => {});
    void markMessageNotificationsRead(bucket)
      .then((updated) => {
        if (updated > 0) {
          void syncMessageNoticeSections({ force: true })
            .then((changed) => {
              if (changed) render();
            })
            .catch(() => {});
        }
      })
      .catch(() => {});
  }
  if (route === "#/me/followers") {
    const now = Date.now();
    if ((now - meRelationForceRefreshAt) > 8_000) {
      meRelationForceRefreshAt = now;
      writeBootstrapEtag("me", uiState.currentUserId, "");
      void fetchBootstrapSection("me", uiState.currentUserId, { force: true })
        .then(() => {
          render();
        })
        .catch(() => {});
    }
  }
  if (route === "#/me/home") {
    hydrateBootstrapSectionFromFullCache("me", uiState.currentUserId, "section");
    void fetchBootstrapSection("me", uiState.currentUserId, { force: true })
      .then(() => {
        render();
      })
      .catch(() => {});
    const mePublishedWorldIds = getMePublishedWorldIdsFromLibrary();
    const unresolvedCount = mePublishedWorldIds.filter(
      (id) => !FEED_DATA.some((x) => String(x?.id || "") === id)
    ).length;
    const needHomeFeedRecover = FEED_DATA.length === 0 || unresolvedCount > 0;
    if (needHomeFeedRecover && (Date.now() - meFeedAutoRecoverAt) > 2_500) {
      meFeedAutoRecoverAt = Date.now();
      void bootstrapClientData(uiState.currentUserId, { force: FEED_DATA.length === 0 })
        .then(() => {
          render();
        })
        .catch(() => {});
    }
    if (unresolvedCount > 0 && (Date.now() - meFeedFullRecoverAt) > 12_000) {
      meFeedFullRecoverAt = Date.now();
      void bootstrapClientDataFull(uiState.currentUserId)
        .then(() => {
          render();
        })
        .catch(() => {});
    }
  }
  const sections = getBootstrapSectionsForRoute(routePath);
  sections.forEach((section) => {
    void fetchBootstrapSection(section, uiState.currentUserId).catch(() => {});
  });
}

function prefetchBootstrapSectionsForRoute(routePath = "", userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid) return;
  const route = String(routePath || "").trim();
  if (!route) return;
  const sections = getBootstrapSectionsForRoute(route);
  sections.forEach((section) => {
    void fetchBootstrapSection(section, uid, { force: false }).catch(() => {});
  });
  if (route === "#/me/home") {
    void bootstrapClientData(uid, { force: false }).catch(() => {});
  }
}

async function bootstrapClientDataFull(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const requestId = bootstrapFullRequestId + 1;
  bootstrapFullRequestId = requestId;
  trackBootstrapRequestStarted("full");
  if (bootstrapFullController) bootstrapFullController.abort();
  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = window.setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, BOOTSTRAP_FULL_FETCH_TIMEOUT_MS);
  bootstrapFullController = controller;
  const query = uid ? `?mode=full&userId=${encodeURIComponent(uid)}` : "?mode=full";
  try {
    const resp = await fetch(`${API_BASE}/bootstrap${query}`, {
      credentials: "same-origin",
      cache: "no-store",
      signal: controller.signal
    });
    if (!resp.ok) throw new Error(`BOOTSTRAP_FULL_HTTP_${resp.status}`);
    const data = await resp.json();
    if (requestId !== bootstrapFullRequestId) {
      trackBootstrapRollbackDrop("bootstrap.full.request_stale", { source: "full" });
      return data;
    }
    applyBootstrapData(data, "full");
    bootstrapLastFullAppliedAt = Date.now();
    if (uid) writeBootstrapCacheByKey(getBootstrapFullCacheKey(uid), data);
    return data;
  } catch (error) {
    const cachedFull = uid ? readBootstrapCacheByKey(getBootstrapFullCacheKey(uid)) : null;
    if (cachedFull) {
      applyBootstrapData(cachedFull, "full");
      bootstrapLastFullAppliedAt = Date.now();
      return cachedFull;
    }
    if (didTimeout) throw new Error("BOOTSTRAP_FULL_TIMEOUT");
    if (isAbortRequestError(error)) throw new Error("BOOTSTRAP_ABORTED");
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
    if (bootstrapFullController === controller) bootstrapFullController = null;
  }
}

function tryHydrateFullCache(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid) return false;
  const cached = readBootstrapCacheByKey(getBootstrapFullCacheKey(uid));
  if (!cached) return false;
  const payloadUserId = String(cached?.user?.id || "").trim();
  if (payloadUserId && payloadUserId !== uid) return false;
  applyBootstrapData(cached, "full");
  uiState.bootstrapFullLoaded = true;
  bootstrapLastFullAppliedAt = Date.now();
  return true;
}

function tryHydrateFromCache(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const cached = readBootstrapCacheByKey(getBootstrapCoreCacheKey(uid));
  if (!cached) return false;
  const payloadUserId = String(cached?.user?.id || "").trim();
  if (uid) {
    if (payloadUserId && payloadUserId !== uid) return false;
  } else if (payloadUserId) {
    return false;
  }
  applyBootstrapData(cached, "core_cache");
  return true;
}

function sectionTitle(text) {
  return `<h3 class="title">${text}</h3>`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toMetricCount(value) {
  const n = Number(String(value ?? "0").replaceAll(",", ""));
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : 0;
}

function formatMetricCount(value) {
  return toMetricCount(value).toLocaleString();
}

function calculateAgeFromBirthday(birthday = "") {
  const raw = String(birthday || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  const [y, m, d] = raw.split("-").map((x) => Number(x));
  if (!y || !m || !d) return null;
  const now = new Date();
  let age = now.getFullYear() - y;
  const month = now.getMonth() + 1;
  const day = now.getDate();
  if (month < m || (month === m && day < d)) age -= 1;
  if (!Number.isFinite(age) || age < 0 || age > 130) return null;
  return age;
}

function formatGenderAgeText(gender = "保密", birthday = "") {
  const g = ["男", "女", "保密"].includes(String(gender || "").trim()) ? String(gender || "").trim() : "保密";
  const age = calculateAgeFromBirthday(birthday);
  if (age == null) return g;
  return `${g} · ${age} 岁`;
}

function syncProfileDraftFromFormDom() {
  if (!uiState.showProfileEditModal) return;
  const root = document.querySelector(".profile-edit-modal-overlay");
  if (!(root instanceof HTMLElement)) return;
  const queryValue = (selector) => {
    const node = root.querySelector(selector);
    if (
      node instanceof HTMLInputElement
      || node instanceof HTMLTextAreaElement
      || node instanceof HTMLSelectElement
    ) {
      return node.value;
    }
    return "";
  };
  const nextName = queryValue(".profile-edit-input[data-field='name']");
  const nextHandle = queryValue(".profile-edit-input[data-field='handle']");
  const nextBio = queryValue(".profile-edit-input[data-field='bio']");
  const nextBirthday = queryValue(".profile-edit-input[data-field='birthday']");
  const nextGender = queryValue(".profile-edit-input[data-field='gender']");
  if (nextName) uiState.profileDraft.name = nextName;
  uiState.profileDraft.handle = nextHandle;
  uiState.profileDraft.bio = nextBio;
  uiState.profileDraft.birthday = nextBirthday;
  if (["男", "女", "保密"].includes(nextGender)) {
    uiState.profileDraft.gender = nextGender;
  }
}

function closeProfileEditAndReturnHome() {
  uiState.showProfileEditModal = false;
  uiState.showProfileAvatarPreview = false;
  uiState.profileSaving = false;
  uiState.profileAssetProcessing = false;
  uiState.profileDraft = { ...uiState.profile };
  uiState.meViewedUserId = "";
  uiState.meViewedUserName = "";
  persistViewedProfile();
  if (window.location.hash !== "#/me/home") {
    window.location.hash = "#/me/home";
  } else {
    render();
  }
  window.setTimeout(() => {
    // Guard against any async rerender accidentally reopening the modal.
    if (uiState.showProfileEditModal) {
      uiState.showProfileEditModal = false;
      render();
    }
  }, 50);
}

function isMobileViewport() {
  return window.innerWidth <= 980;
}

function pageLogin() {
  return `
    <section class="screen">
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-page-brand">
            <img src="/assets/logo-v5.png" alt="爪马 Logo" loading="eager" fetchpriority="high" />
            <h1>Drama 抓马</h1>
            <p>请选择登录方式</p>
          </div>
          <div class="login-page-methods">
            <button class="login-provider-btn" data-go="#/auth/phone">手机号登录</button>
            <button class="login-provider-btn" data-go="#/auth/wechat">微信号登录</button>
            <button class="login-provider-btn" data-go="#/auth/google">Google 登录</button>
            <button class="login-provider-btn" data-go="#/auth/account">账号密码登录</button>
          </div>
          <label class="login-agree">
            <input type="checkbox" checked />
            <span>已阅读并同意《用户协议》《隐私政策》</span>
          </label>
        </section>
      </div>
    </section>
  `;
}

function pageAuthPhone() {
  uiState.loginMethod = "phone";
  return `
    <section class="screen">
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-subpage-head">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <h2>手机号登录</h2>
            <span></span>
          </div>
          <p class="login-subpage-subtitle">输入手机号并填写验证码登录</p>
          <div class="login-field-row">
            <span>+86</span>
            <input data-field="login-phone" value="${escapeHtml(uiState.loginPhone)}" placeholder="输入手机号" />
          </div>
          <div class="login-field-row">
            <input data-field="login-code" value="${escapeHtml(uiState.loginCode)}" placeholder="输入验证码" />
            <button type="button">获取验证码</button>
          </div>
          <button class="login-submit" data-action="confirm-login">验证码登录</button>
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <p class="login-note">未注册手机号将自动创建账号（后续接入短信服务后可用）</p>
        </section>
      </div>
    </section>
  `;
}

function pageAuthWechat() {
  uiState.loginMethod = "wechat";
  return `
    <section class="screen">
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-subpage-head">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <h2>微信号登录</h2>
            <span></span>
          </div>
          <p class="login-subpage-subtitle">将跳转微信授权页完成登录</p>
          <button class="login-submit" data-action="login-quick-provider" data-provider="wechat">继续使用微信号登录</button>
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <p class="login-note">暂未接入微信开放平台，后续接入后可直接授权登录</p>
        </section>
      </div>
    </section>
  `;
}

function pageAuthGoogle() {
  uiState.loginMethod = "google";
  return `
    <section class="screen">
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-subpage-head">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <h2>Google 登录</h2>
            <span></span>
          </div>
          <p class="login-subpage-subtitle">将跳转 Google 授权页完成登录</p>
          <button class="login-submit" data-action="login-quick-provider" data-provider="google">继续使用 Google 登录</button>
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <p class="login-note">暂未接入 Google OAuth，后续接入后可直接授权登录</p>
        </section>
      </div>
    </section>
  `;
}

function pageAuthAccount() {
  uiState.loginMethod = "account";
  const accountAuthMode = uiState.accountAuthMode || "login";
  return `
    <section class="screen">
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-subpage-head">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <h2>账号密码登录</h2>
            <span></span>
          </div>
          ${
            accountAuthMode === "login"
              ? `
            <div class="login-field-row"><input data-field="login-account" value="${escapeHtml(uiState.loginAccount)}" placeholder="邮箱或昵称" /></div>
            <div class="login-field-row"><input data-field="login-password" value="${escapeHtml(uiState.loginPassword)}" placeholder="密码" type="password" /></div>
            <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "登录中..." : "账号登录"}</button>
          `
              : `
            <div class="login-field-row"><input data-field="register-account" value="${escapeHtml(uiState.registerAccount)}" placeholder="设置账号（邮箱或昵称）" /></div>
            <div class="login-field-row"><input data-field="register-password" value="${escapeHtml(uiState.registerPassword)}" placeholder="设置密码（至少6位）" type="password" /></div>
            <div class="login-field-row"><input data-field="register-confirm-password" value="${escapeHtml(uiState.registerConfirmPassword)}" placeholder="重新输入密码" type="password" /></div>
            <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "注册中..." : "立即注册"}</button>
          `
          }
          <div class="login-agree-row">
            <label class="login-agree"><input type="checkbox" checked /><span>已阅读并同意《用户协议》《隐私政策》</span></label>
            <button class="login-switch-link" data-action="toggle-account-auth-mode">${
              accountAuthMode === "login" ? "还没有账号？马上注册" : "已有账号？去登录"
            }</button>
          </div>
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <p class="login-note">账号密码登录保持当前逻辑不变</p>
        </section>
      </div>
    </section>
  `;
}

function pageTheater() {
  const feed = getHomeFeed();
  const themeGroup = FILTER_CONFIG.find((group) => group.key === "theme") || { label: "全部主题", options: [] };
  const mobileTopicTabs = [themeGroup.label, ...themeGroup.options.slice(0, 8)];
  const currentTheme = uiState.filters.theme;
  const activeTheme = mobileTopicTabs.includes(currentTheme) ? currentTheme : themeGroup.label;
  const selectedTopics = Array.from(new Set([activeTheme, ...themeGroup.options.slice(0, 7)]));
  const recommendedTopics = themeGroup.options.filter((topic) => !selectedTopics.includes(topic));
  const filterPanelDesktopHtml = `
    <div class="xh-filter-panel ${uiState.homeFilterExpanded ? "expanded" : "collapsed"}">
      <div class="xh-filter-head">
        <strong>选出你的Drama</strong>
        <button class="xh-filter-toggle" data-action="toggle-home-filter">${uiState.homeFilterExpanded ? "收起" : "展开"}</button>
      </div>
      <div class="xh-filter-body">
        ${FILTER_CONFIG.map((group) => renderFilterGroup(group)).join("")}
      </div>
    </div>
  `;
  const filterPanelMobileHtml = `
    <div class="xh-mobile-topic-shell">
      <div class="xh-mobile-topic-bar">
        <div class="xh-mobile-topic-tabs">
          ${mobileTopicTabs
            .map(
              (topic) => `
            <button class="xh-mobile-topic-tab ${currentTheme === topic ? "active" : ""}" data-action="home-filter" data-key="theme" data-value="${topic}">
              ${topic}
            </button>
          `
            )
            .join("")}
        </div>
        <button class="xh-mobile-topic-expand ${uiState.plazaTopicPanelOpen ? "active" : ""}" data-action="toggle-plaza-topics" aria-label="更多主题">⌄</button>
      </div>
      ${
        uiState.plazaTopicPanelOpen
          ? `
        <div class="xh-mobile-topic-panel">
          <section class="xh-mobile-topic-section">
            <div class="xh-mobile-topic-section-head">
              <strong>我的频道</strong>
              <span>点击进入频道</span>
            </div>
            <div class="xh-mobile-topic-grid">
              ${selectedTopics
                .map(
                  (topic) => `
                <button class="xh-mobile-topic-chip ${currentTheme === topic ? "active" : ""}" data-action="plaza-topic-pick" data-value="${topic}">${topic}</button>
              `
                )
                .join("")}
            </div>
          </section>
          <section class="xh-mobile-topic-section">
            <div class="xh-mobile-topic-section-head">
              <strong>推荐频道</strong>
              <span>点击添加频道</span>
            </div>
            <div class="xh-mobile-topic-grid">
              ${recommendedTopics
                .map(
                  (topic) => `
                <button class="xh-mobile-topic-chip recommend" data-action="plaza-topic-pick" data-value="${topic}">+ ${topic}</button>
              `
                )
                .join("")}
            </div>
          </section>
        </div>
      `
          : ""
      }
    </div>
  `;

  return `
    ${renderExploreShell(`
      <div class="xh-filter-panel-desktop">
        ${filterPanelDesktopHtml}
      </div>

      <div class="xh-feed-grid theater-feed-grid">
        ${
          feed.length
            ? feed.map((item) => renderHomeCard(item)).join("")
            : `<article class="home-card"><div class="home-body"><h4>暂无内容</h4><p class="sub">当前筛选组合下暂未匹配到卡片。</p></div></article>`
        }
      </div>
    `, `<div class="xh-filter-panel-mobile">${filterPanelMobileHtml}</div>`)}
  `;
}

function getPageTitleByRoute(hash) {
  if (!hash || hash === "#/") return "页面";
  const titleByExactRoute = {
    "#/auth/login": "登录",
    "#/auth/phone": "手机号登录",
    "#/auth/wechat": "微信登录",
    "#/auth/google": "Google 登录",
    "#/auth/account": "账号密码登录",
    "#/theater/filter": "筛选",
    "#/search": "搜索",
    "#/search/results": "搜索结果",
    "#/drama/filter": "Drama筛选",
    "#/drama/filter/results": "筛选结果",
    "#/play/core": "开刷",
    "#/play/model": "模型模式",
    "#/play/settings": "游戏设置",
    "#/workshop/world": "创作中心",
    "#/workshop/world/editor": "世界卡编辑器",
    "#/workshop/story/editor": "故事卡编辑器",
    "#/workshop/character/editor": "角色卡编辑器",
    "#/workshop/paint": "AI画图",
    "#/community/create": "创建社区",
    "#/community/post": "动态详情",
    "#/community/group/post": "发动态",
    "#/community/post/detail": "社区动态",
    "#/community/user": "用户主页",
    "#/community/join": "加入社区",
    "#/messages/detail": "动态详情",
    "#/messages/story/dynamic": "我的动态",
    "#/messages/story/album": "我的相册",
    "#/messages/story/stories": "我的故事",
    "#/messages/story/publish": "发布动态",
    "#/messages/story/settings": "幕后设置",
    "#/messages/thread": "私信会话",
    "#/messages/likes": "收到的赞和收藏",
    "#/messages/follows": "新增关注",
    "#/messages/comments": "收到的评论和@",
    "#/me/followers": "关系列表",
    "#/me/coins": "马内中心",
    "#/me/settings": "账号与安全"
  };
  if (titleByExactRoute[hash]) return titleByExactRoute[hash];
  if (hash.startsWith("#/drama/rank")) return "排行榜";
  if (hash.startsWith("#/drama/reserve")) return "新剧预约";
  if (hash.startsWith("#/community/manage")) return "社群管理";
  if (hash.startsWith("#/community/group")) return "社区详情";
  if (hash.startsWith("#/messages/story")) return "幕后";
  if (hash.startsWith("#/messages/chat")) return "消息";
  if (hash.startsWith("#/me/")) return "我的";
  return "页面";
}

function normalizePlayBackgroundOpacity(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return PLAY_BACKGROUND_DEFAULT.opacity;
  return Math.max(0, Math.min(1, parsed));
}

function normalizePlayBackgroundColor(color) {
  const raw = String(color || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(raw) || /^#[0-9a-f]{3}$/i.test(raw)) return raw;
  return PLAY_BACKGROUND_DEFAULT.color;
}

function normalizePlayBackgroundState(raw = {}) {
  const payload = raw && typeof raw === "object" ? raw : {};
  const preset = PLAY_BACKGROUND_PRESET_COLORS.find((x) => x.id === String(payload.preset || "").trim()) || PLAY_BACKGROUND_PRESET_COLORS[1];
  const color = normalizePlayBackgroundColor(payload.color || preset.color);
  const image = String(payload.image || "").trim();
  const opacity = normalizePlayBackgroundOpacity(payload.opacity);
  return {
    preset: preset.id,
    color,
    image,
    opacity
  };
}

function hydratePlayBackgroundPreference() {
  try {
    const raw = localStorage.getItem(PLAY_BACKGROUND_PREF_CACHE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    const normalized = normalizePlayBackgroundState(parsed);
    uiState.playBackgroundPreset = normalized.preset;
    uiState.playBackgroundColor = normalized.color;
    uiState.playBackgroundImage = normalized.image;
    uiState.playBackgroundOpacity = normalized.opacity;
  } catch {}
}

function persistPlayBackgroundPreference() {
  try {
    const normalized = normalizePlayBackgroundState({
      preset: uiState.playBackgroundPreset,
      color: uiState.playBackgroundColor,
      image: uiState.playBackgroundImage,
      opacity: uiState.playBackgroundOpacity
    });
    localStorage.setItem(PLAY_BACKGROUND_PREF_CACHE_KEY, JSON.stringify(normalized));
  } catch {}
}

function getPlayBackgroundState() {
  return normalizePlayBackgroundState({
    preset: uiState.playBackgroundPreset,
    color: uiState.playBackgroundColor,
    image: uiState.playBackgroundImage,
    opacity: uiState.playBackgroundOpacity
  });
}

function buildPlayRouteHostStyleVars() {
  const bg = getPlayBackgroundState();
  const imageLayer = bg.image ? `url('${bg.image.replace(/'/g, "%27")}')` : "none";
  const overlayOpacity = bg.image
    ? Math.max(0.08, Math.min(0.48, bg.opacity * 0.6))
    : Math.max(0.06, Math.min(0.42, bg.opacity * 0.52));
  return `--play-bg-solid:${bg.color};--play-bg-image:${imageLayer};--play-bg-image-opacity:${bg.opacity.toFixed(2)};--play-bg-overlay-opacity:${overlayOpacity.toFixed(2)};`;
}

function renderExploreShell(mainContentHtml, mobileAddonHtml = "") {
  const baseTabs = [
    { label: "首页", path: "#/theater/home", match: (hash) => hash.startsWith("#/theater") || hash.startsWith("#/world") || hash.startsWith("#/author") || hash.startsWith("#/search") },
    { label: "Drama", path: "#/drama/home", match: (hash) => hash.startsWith("#/drama") || hash.startsWith("#/play") },
    { label: "动态", path: "#/messages/story", match: (hash) => hash.startsWith("#/messages/story") || hash === "#/messages/detail" },
    { label: "社区", path: "#/community/home", match: (hash) => hash.startsWith("#/community") }
  ];
  const sideTabs = [
    ...baseTabs,
    { label: "消息", path: "#/messages/chat", match: (hash) => hash.startsWith("#/messages/") && !hash.startsWith("#/messages/story") && hash !== "#/messages/detail" },
    { label: "我的", path: "#/me/home", match: (hash) => hash === "#/me/home" || hash.startsWith("#/me/") },
    { label: "创作中心", path: "#/workshop/world", match: (hash) => hash.startsWith("#/workshop") }
  ];
  const currentHash = getCurrentRoutePath();
  const isPlayRoute = currentHash.startsWith("#/play");
  const isCommunityRoute = currentHash.startsWith("#/community");
  const isMessageRoute = currentHash.startsWith("#/messages");
  const isBackstageRoute = currentHash.startsWith("#/messages/story");
  const isMeRoute = currentHash === "#/me/home" || currentHash.startsWith("#/me/");
  const isWorkshopRoute = currentHash.startsWith("#/workshop");
  const isMessageFullRoute = isMessageRoute && !isBackstageRoute && currentHash !== "#/messages/detail";
  const isCommunitySearchContext = isCommunityRoute;
  const isUnifiedSearchRoute = currentHash === "#/search" || currentHash === "#/search/results" || currentHash === "#/community/search";
  const isMobileMessageActive = currentHash.startsWith("#/messages/") && !isBackstageRoute && currentHash !== "#/messages/detail";
  const isMobilePlazaActive = currentHash.startsWith("#/theater") || currentHash.startsWith("#/world") || currentHash.startsWith("#/author") || currentHash.startsWith("#/search");
  const isMobileCommunityActive = currentHash.startsWith("#/community");
  const bottomNavVisibleRoutes = new Set([
    "#/theater/home",
    "#/theater",
    "#/drama/home",
    "#/drama/rank",
    "#/drama/reserve",
    "#/messages/chat",
    "#/messages/story",
    "#/community/home",
    "#/community/join",
    "#/community/mine",
    "#/community/group",
    "#/me/home"
  ]);
  const hideMobileBottomNav = !bottomNavVisibleRoutes.has(currentHash);
  const isMobileMeActive = currentHash === "#/me/home" || currentHash.startsWith("#/me/");
  const isMobileWorkshopActive = currentHash.startsWith("#/workshop");
  const isTopNavLinkedRoute = isBackstageRoute || currentHash === "#/theater/home" || currentHash === "#/theater";
  const isDynamicDetailRoute = currentHash === "#/messages/detail" || currentHash === "#/community/post/detail";
  const hideMobileTopBarRoutes = new Set([
    "#/messages/story/settings"
  ]);
  const showMobileTopBar = !isDynamicDetailRoute && !isUnifiedSearchRoute && (
    currentHash === "#/theater/home" ||
    currentHash === "#/theater" ||
    currentHash.startsWith("#/drama") ||
    (isBackstageRoute && currentHash !== "#/messages/story/publish")
  ) && !hideMobileTopBarRoutes.has(currentHash);
  const mobileTopTabs = [
    { label: "推荐", path: "#/theater/home", match: (hash) => hash.startsWith("#/theater") || hash.startsWith("#/world") || hash.startsWith("#/author") || hash.startsWith("#/search") },
    { label: "Drama", path: "#/drama/home", match: (hash) => hash.startsWith("#/drama") || hash.startsWith("#/play") },
    { label: "幕后", path: "#/messages/story", match: (hash) => hash.startsWith("#/messages/story") || hash === "#/messages/detail" }
  ];
  const showHeadSearch = ((!isCommunityRoute && !isMessageRoute && !isMeRoute && !isWorkshopRoute) || currentHash === "#/community/search") && !isUnifiedSearchRoute;
  const isSearchResultRoute = isUnifiedSearchRoute;
  const showHeadCoin = isMeRoute;
  const noBackOn = new Set([
    "#/theater/home",
    "#/theater",
    "#/drama/home",
    "#/drama/rank",
    "#/drama/rank/recommend",
    "#/drama/rank/hot",
    "#/drama/rank/new",
    "#/drama/reserve",
    "#/drama/reserve/upcoming",
    "#/drama/reserve/week",
    "#/drama/reserve/mine",
    "#/drama/filter/results",
    "#/messages/story",
    "#/messages/story/dynamic",
    "#/messages/story/album",
    "#/messages/story/stories",
    "#/messages/chat",
    "#/messages/thread",
    "#/community/home",
    "#/community/join",
    "#/community/mine",
    "#/community/group",
    "#/me/home",
    "#/search",
    "#/search/results",
    "#/community/search",
    "#/community/manage",
    "#/community/manage/joined",
    "#/community/manage/joined/members",
    "#/community/manage/members",
    "#/community/manage/review",
    "#/community/manage/blacklist",
    "#/community/manage/announcement",
    "#/community/manage/settings",
    "#/community/manage/transfer",
    "#/community/manage/transfer/receiver",
    "#/community/manage/transfer/verify",
    "#/community/manage/dismiss",
    "#/world/detail",
    "#/theater/world",
    "#/drama/reserve/detail",
    "#/me/followers",
    "#/me/coins",
    "#/me/settings"
  ]);
  const showBackButton = !noBackOn.has(currentHash);
  const pageTitle = getPageTitleByRoute(currentHash);
  const activeSearchQuery = isCommunitySearchContext ? uiState.communitySearchQuery : uiState.searchQuery;
  const activeSearchScope = isCommunitySearchContext ? "community" : "all";
  const pageTitleActionHtml = currentHash === "#/messages/story/settings"
    ? `<button class="page-title-action backstage-settings-save-btn" data-action="save-backstage-settings" ${(uiState.backstageSettingsSaving || uiState.backstageTopBgProcessing) ? "disabled" : ""}>${uiState.backstageSettingsSaving ? "保存中..." : (uiState.backstageTopBgProcessing ? "处理中..." : "保存")}</button>`
    : currentHash === "#/community/create"
      ? `<button class="page-title-action backstage-settings-save-btn" data-action="publish-community-create" ${(uiState.communityCreateSubmitting || uiState.communityCreateAssetProcessing) ? "disabled" : ""}>${uiState.communityCreateSubmitting ? "保存中..." : (uiState.communityCreateAssetProcessing ? "处理中..." : "保存")}</button>`
    : currentHash === "#/messages/story/publish"
      ? `<span class="page-title-spacer"></span>`
      : `<span class="page-title-spacer"></span>`;
  const mobileAddon = mobileAddonHtml.trim();
  const mobileAddonForRender = showMobileTopBar ? mobileAddon : "";
  const messageUnreadTotal = getMessageUnreadTotal();
  const messageUnreadBadge = messageUnreadTotal > 0
    ? `<span class="xh-mobile-bottom-badge">${formatMessageUnreadCount(messageUnreadTotal)}</span>`
    : "";

  if (isPlayRoute) {
    const playHostStyle = buildPlayRouteHostStyleVars();
    return `
      <div class="play-route-host" style="${escapeHtml(playHostStyle)}">
        ${mainContentHtml}
      </div>
      ${uiState.showProfileEditModal ? renderProfileEditModal() : ""}
      ${uiState.showProfileAvatarPreview ? renderProfileAvatarPreviewModal() : ""}
      ${uiState.showWorldShareSheet ? renderWorldShareSheet() : ""}
      ${uiState.showWorldShareImageModal ? renderWorldShareImageModal() : ""}
    `;
  }

  return `
    ${
      showMobileTopBar
        ? `
      <div class="xh-mobile-shell">
        <div class="xh-mobile-top">
          <div class="xh-mobile-top-left">
            <img class="xh-mobile-home-logo" src="/assets/logo-v5.png" alt="爪马 Logo" loading="eager" fetchpriority="high" />
          </div>
          <div class="xh-mobile-tabs">
            ${mobileTopTabs
              .map(
                (tab) => `
              <button class="xh-mobile-tab ${tab.match(currentHash) ? "active" : ""}" data-go="${tab.path}">${tab.label}</button>
            `
              )
              .join("")}
          </div>
          <div class="xh-mobile-right">
            <button class="xh-mobile-top-search-btn" data-action="open-unified-search" data-scope="${activeSearchScope}" aria-label="搜索">⌕</button>
            ${
              showHeadCoin
                ? `<button class="xh-coin-chip" data-go="#/me/coins">🪙 ${(uiState.isLoggedIn ? uiState.userCoins : 0).toLocaleString()}</button>`
                : ""
            }
          </div>
        </div>
      </div>
    `
        : ""
    }
    <div class="xh-mobile-search-host"></div>

    <section class="xh-shell ${isMessageFullRoute ? "xh-shell-message" : ""} ${showMobileTopBar ? "mobile-top-visible" : ""} ${isTopNavLinkedRoute ? "top-nav-linked" : ""} ${isBackstageRoute ? "is-backstage-route" : ""}">
      <aside class="xh-left">
        <div class="xh-logo"><img src="/assets/logo-v5.png" alt="爪马 Logo" loading="eager" fetchpriority="high" /></div>
        <div class="xh-left-nav">
          ${sideTabs
            .map(
              (tab) => `
            <button class="xh-side-tab ${tab.match(currentHash) ? "active" : ""}" data-go="${tab.path}">${tab.label}</button>
          `
            )
            .join("")}
        </div>

        ${
          uiState.isLoggedIn
            ? `
          <div class="xh-user-card">
            <strong>Drama 用户</strong>
            <p>已登录，同步偏好推荐已开启</p>
          </div>
        `
            : `
          <button class="xh-login-btn" data-action="open-login-modal">登录</button>
          <div class="xh-login-tip">
            <p>马上登录即可</p>
            <ul>
              <li>刷到更懂你的优质内容</li>
              <li>搜索最新剧情，找热信息</li>
              <li>查看收藏、点赞的笔记</li>
              <li>与他人更好地互动交流</li>
            </ul>
          </div>
        `
        }

        <button class="xh-more-btn">更多</button>
      </aside>

      <div class="xh-main ${isMessageFullRoute ? "xh-main-message" : ""}">
        <div class="xh-head">
          <div class="xh-head-links">
            ${
              showHeadCoin
                ? `<button class="xh-coin-chip" data-go="#/me/coins">🪙 ${(uiState.isLoggedIn ? uiState.userCoins : 0).toLocaleString()}</button>`
                : ""
            }
            ${
              uiState.isLoggedIn
                ? `<button class="xh-avatar-btn logged user-avatar-click" data-action="open-self-profile" data-user="${escapeHtml(uiState.profile?.name || "Drama 用户")}" data-user-id="${escapeHtml(uiState.currentUserId || "")}">${getAvatarText(uiState.profile.name)}</button>`
                : `<button class="xh-avatar-btn guest" data-action="open-login-modal">👤</button>`
            }
          </div>
          ${
            !showHeadSearch
              ? `<div></div>`
              : `
            <button class="xh-search-entry-btn" data-action="open-unified-search" data-scope="${activeSearchScope}">
              <span>${escapeHtml(activeSearchQuery || "搜索世界/主题/设定/作者")}</span>
              <em>${isSearchResultRoute ? "↩" : "⌕"}</em>
            </button>
          `
          }
        </div>

        ${
          showBackButton
            ? `
          <div class="xh-subhead page-title-row">
            <button class="xh-back-btn unified-back-btn" data-action="go-back" aria-label="返回">←</button>
            <h2>${pageTitle}</h2>
            ${pageTitleActionHtml}
          </div>
        `
            : ""
        }

        ${mobileAddonForRender ? `<div class="xh-mobile-addon-host"><div class="xh-mobile-addon">${mobileAddonForRender}</div></div>` : ""}
        ${mainContentHtml}
      </div>
    </section>
    ${
      hideMobileBottomNav
        ? ""
        : `
      <nav class="xh-mobile-bottom-nav">
        <button class="xh-mobile-bottom-item ${isMobilePlazaActive ? "active" : ""}" data-go="#/theater/home">广场</button>
        <button class="xh-mobile-bottom-item ${isMobileCommunityActive ? "active" : ""}" data-go="#/community/home">社区</button>
        <button class="xh-mobile-bottom-plus ${isMobileWorkshopActive ? "active" : ""}" data-go="#/workshop/world" aria-label="创作中心">＋</button>
        <button class="xh-mobile-bottom-item ${isMobileMessageActive ? "active" : ""}" data-go="#/messages/chat">消息${messageUnreadBadge}</button>
        <button class="xh-mobile-bottom-item ${isMobileMeActive ? "active" : ""}" data-go="#/me/home">我的</button>
      </nav>
    `
    }
    ${uiState.showProfileEditModal ? renderProfileEditModal() : ""}
    ${uiState.showProfileAvatarPreview ? renderProfileAvatarPreviewModal() : ""}
    ${uiState.showWorldShareSheet ? renderWorldShareSheet() : ""}
    ${uiState.showWorldShareImageModal ? renderWorldShareImageModal() : ""}
  `;
}

function renderFilterGroup(group) {
  return `
    <div class="xh-filter-row">
      <button class="xh-filter-label ${uiState.filters[group.key] === group.label ? "active" : ""}" data-action="home-filter" data-key="${group.key}" data-value="${group.label}">${group.label}</button>
      ${group.options
        .map(
          (option) => `
        <button class="xh-filter-option ${uiState.filters[group.key] === option ? "active" : ""}" data-action="home-filter" data-key="${group.key}" data-value="${option}">${option}</button>
      `
        )
        .join("")}
    </div>
  `;
}

function getMessageSearchMatches(query, limit = 12) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return [];
  const withIndex = MESSAGE_INBOX
    .map((item, idx) => ({ item, idx }))
    .filter(({ item }) => `${item.name} ${item.preview} ${item.type}`.toLowerCase().includes(q));
  return withIndex
    .sort((a, b) => a.idx - b.idx)
    .slice(0, limit)
    .map(({ item }) => item);
}

function pageUnifiedSearch() {
  const q = uiState.searchQuery.trim();
  const scope = ["all", "community", "messages"].includes(uiState.unifiedSearchScope) ? uiState.unifiedSearchScope : "all";
  if (scope === "messages") {
    return renderExploreShell(renderMessageInlineSearchSection(q));
  }
  const history = [...new Set([...(uiState.searchHistory || []), ...(uiState.communitySearchHistory || [])])].slice(0, 12);
  const activeHot = getHotSearchBatch(uiState.hotSearchCursor).slice(0, 12);
  const suggestions = q
    ? [
      ...searchFeed(q, 6, "相关度").map((item) => item.title).filter(Boolean),
      ...searchCommunityList(q, 6, "相关度").map((item) => item.name).filter(Boolean),
      ...getMessageSearchMatches(q, 6).map((item) => item.name).filter(Boolean)
    ].filter(Boolean).slice(0, 12)
    : [];

  return renderExploreShell(`
    <section class="unified-search-page" data-search-scope="${scope}">
      <div class="unified-search-top">
        <div class="unified-search-field xh-search">
          <input class="unified-search-input xh-mobile-search-input" value="${escapeHtml(q)}" placeholder="搜索世界/主题/设定/作者/联系人" />
          <button class="xh-search-submit xh-search-close-btn" data-action="cancel-search-results" aria-label="返回">×</button>
          <button class="xh-search-submit" data-action="submit-search">搜索</button>
        </div>
      </div>

      <section class="unified-search-panel">
        <div class="unified-search-head">
          <h3>历史记录</h3>
          <button data-action="clear-search-history" aria-label="清空历史">🗑</button>
        </div>
        <div class="unified-search-chip-cloud">
          ${
            history.length
              ? history.map((x) => `<button data-action="apply-search-term" data-term="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")
              : `<p class="unified-search-empty">还没有搜索记录，先搜一搜感兴趣的内容吧。</p>`
          }
        </div>
      </section>

      <section class="unified-search-panel">
        <div class="unified-search-head">
          <h3>猜你想搜</h3>
          <button data-action="rotate-hot-search">换一换</button>
        </div>
        <div class="unified-search-suggest-grid">
          ${
            activeHot.length
              ? activeHot.map((term) => `<button data-action="apply-search-term" data-term="${escapeHtml(term)}">${escapeHtml(term)}</button>`).join("")
              : `<p class="unified-search-empty">暂无推荐关键词。</p>`
          }
        </div>
      </section>

      ${
        suggestions.length
          ? `
        <section class="unified-search-panel">
          <div class="unified-search-head">
            <h3>搜索建议</h3>
          </div>
          <div class="unified-search-chip-cloud">
            ${suggestions.map((x) => `<button data-action="apply-search-term" data-term="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")}
          </div>
        </section>
      `
          : ""
      }
    </section>
  `);
}

function renderMessageInlineSearchSection(query = "") {
  const q = String(query || "").trim();
  const lower = q.toLowerCase();
  const recentContacts = MESSAGE_INBOX.slice(0, 4);
  const matched = q
    ? MESSAGE_INBOX.filter((item) => `${item.name} ${item.preview} ${item.type}`.toLowerCase().includes(lower))
    : recentContacts;
  const displayList = matched.slice(0, 12);
  const hasQuery = Boolean(q);

  return `
    <section class="message-search-page unified-search-page" data-search-scope="messages">
      <div class="message-search-topbar">
        <div class="message-search-field xh-search">
          <span class="message-search-magnifier" aria-hidden="true">⌕</span>
          <input class="unified-search-input xh-mobile-search-input" value="${escapeHtml(q)}" placeholder="搜索联系人/群聊/聊天记录" />
          ${
            q
              ? `<button class="message-search-clear-btn" data-action="message-search-clear-inline" aria-label="清空">×</button>`
              : ""
          }
        </div>
        <button class="message-search-cancel-btn" data-action="cancel-search-results">取消</button>
      </div>

      <section class="message-search-section">
        <h3>${hasQuery ? "搜索结果" : "最近常用"}</h3>
        ${
          displayList.length
            ? `
          <div class="message-search-contact-list">
            ${displayList.map((item) => `
              <article class="message-search-contact-item" data-action="open-message-thread" data-id="${escapeHtml(item.id || "")}">
                ${renderMessageConversationAvatarNode(item, "avatar")}
                <div class="copy">
                  <h4>${highlightKeyword(item.name, q)}</h4>
                  <p>${escapeHtml(item.preview || "")}</p>
                </div>
                <button class="message-search-chat-btn" data-action="open-message-thread" data-id="${escapeHtml(item.id || "")}">去聊天</button>
              </article>
            `).join("")}
          </div>
        `
            : renderSearchEmptyState("没有匹配会话", "试试搜索昵称、群聊名或消息关键词。")
        }
      </section>

    </section>
  `;
}

function highlightKeyword(text = "", keyword = "") {
  const raw = String(text || "");
  const q = String(keyword || "").trim();
  if (!q) return escapeHtml(raw);
  const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(escapedQ, "ig");
  let out = "";
  let last = 0;
  let match = pattern.exec(raw);
  while (match) {
    const start = match.index;
    const end = start + match[0].length;
    out += escapeHtml(raw.slice(last, start));
    out += `<mark>${escapeHtml(raw.slice(start, end))}</mark>`;
    last = end;
    match = pattern.exec(raw);
  }
  out += escapeHtml(raw.slice(last));
  return out;
}

function pageSearchResults() {
  return renderExploreShell(renderSearchResultSection());
}

function renderSearchEmptyState(title = "没有匹配内容", desc = "试试更换关键词，或减少筛选条件后再搜索。") {
  return `
    <section class="search-empty-state" aria-live="polite">
      <div class="search-empty-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" focusable="false">
          <circle cx="28" cy="28" r="14"></circle>
          <path d="M38.5 38.5L51 51"></path>
          <path d="M18 18L38 38"></path>
        </svg>
      </div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(desc)}</p>
    </section>
  `;
}

function renderSearchResultSection() {
  const q = uiState.searchQuery.trim();
  const tabs = ["全部", "用户", "图片", "视频", "剧本", "连载"];
  const subTabMap = {
    全部: ["综合", "最近", "最热"],
    图片: ["综合", "最新", "最热"],
    视频: ["综合", "最近", "最热"],
    剧本: ["综合", "最近", "最热"],
    连载: ["综合", "最近", "最热"]
  };
  const ranked = searchFeed(q, 80, uiState.searchSort);
  const authors = getAuthorMatches(ranked, q);
  const topics = getTopicMatches(ranked, q);
  const activeTab = uiState.searchResultTab;
  const activeSubTabs = subTabMap[activeTab] || ["综合", "最近", "最热"];
  const activeSubTab = activeSubTabs.includes(uiState.searchSubTab) ? uiState.searchSubTab : activeSubTabs[0];
  const isUserTab = activeTab === "用户";

  const idOf = (item) => hashText(String(item.id || ""));
  let resultItems = ranked;
  if (activeTab === "图片") resultItems = ranked.filter((item) => idOf(item) % 2 === 0);
  if (activeTab === "视频") resultItems = ranked.filter((item) => idOf(item) % 2 === 1);
  if (activeTab === "剧本") resultItems = ranked.filter((item) => item.tags.includes("悬疑") || item.tags.includes("群像") || item.tags.includes("奇幻"));
  if (activeTab === "连载") resultItems = ranked.filter((item) => item.time === "7天内上新" || item.time === "14天内上新" || item.time === "30天内上新");

  if (!isUserTab) {
    if (activeSubTab === "最近") {
      resultItems = [...resultItems].sort((a, b) => idOf(b) - idOf(a));
    } else if (activeSubTab === "最热") {
      resultItems = [...resultItems].sort((a, b) => toNumeric(b.heat) - toNumeric(a.heat));
    }
  }

  return `
    <section class="search-result-page">
      <div class="search-mobile-global">
        <div class="search-mobile-global-field xh-search">
          <input class="xh-mobile-search-input search-mobile-global-input" value="${escapeHtml(q)}" placeholder="搜索世界/主题/设定/作者" />
          <button class="xh-search-submit xh-search-close-btn" data-action="cancel-search-results" aria-label="返回">×</button>
          <button class="xh-search-submit" data-action="submit-search">搜索</button>
        </div>
      </div>

      <div class="search-result-tabs">
        ${tabs.map((t) => `<button class="${t === activeTab ? "active" : ""}" data-action="set-search-tab" data-tab="${t}">${t}</button>`).join("")}
      </div>
      ${
        isUserTab
          ? ""
          : `
        <div class="search-result-subtabs">
          ${activeSubTabs.map((s) => `<button class="${s === activeSubTab ? "active" : ""}" data-action="set-search-subtab" data-subtab="${s}">${s}</button>`).join("")}
        </div>
      `
      }

      ${
        isUserTab
          ? `
        ${
          authors.length
            ? `
          <div class="search-author-list">
            ${authors
              .map(
                (a) => `
              <article class="search-author-item" data-action="open-user-modal" data-user="${a.name}" data-user-id="${escapeHtml(a.id || "")}">
                <div class="avatar">${a.name.slice(0, 1)}</div>
                <div class="copy">
                  <h4>${a.name}</h4>
                  <p>${a.count} 部相关作品 · 近7天热度 ${a.heat}</p>
                </div>
                <button>关注</button>
              </article>
            `
              )
              .join("")}
          </div>
        `
            : renderSearchEmptyState("没有找到匹配用户", "换个昵称、ID 或关键词试试看。")
        }
      `
          : (
            resultItems.length
              ? renderDramaStoryDeck(
                resultItems.map((item) => ({
                  id: item.id,
                  title: item.title,
                  tags: item.tags.length ? item.tags : topics.slice(0, 2),
                  author: item.author,
                  like: item.like,
                  star: item.star,
                  comment: item.comment,
                  heat: item.heat
                })),
                "open-world-detail"
              )
              : renderSearchEmptyState("没有匹配内容", "试试换个关键词，或切换筛选标签。")
          )
      }
    </section>
  `;
}

function renderExploreLoginModal(options = {}) {
  const standalone = Boolean(options?.standalone);
  const rawMethod = uiState.loginMethod || "phone";
  const method = ["phone", "account", "wechat", "google"].includes(rawMethod) ? rawMethod : "phone";
  const accountAuthMode = uiState.accountAuthMode || "login";
  if (standalone) {
    return `
      <div class="login-page-shell">
        <div class="login-page-bg" aria-hidden="true">
          <img src="/assets/login-bg-vertical.webp" alt="" loading="eager" fetchpriority="high" decoding="sync" />
        </div>
        <section class="login-page-card">
          <div class="login-page-brand">
            <img src="/assets/logo-v5.png" alt="爪马 Logo" loading="eager" fetchpriority="high" />
            <h1>Drama 抓马</h1>
            <p>沉浸式剧情社区，探索、创作、开刷一次完成。</p>
          </div>

          <div class="login-page-methods">
            <button class="login-provider-btn ${method === "phone" ? "active" : ""}" data-action="set-login-method" data-method="phone">手机号登录</button>
            <button class="login-provider-btn ${method === "wechat" ? "active" : ""}" data-action="set-login-method" data-method="wechat">微信号登录</button>
            <button class="login-provider-btn ${method === "google" ? "active" : ""}" data-action="set-login-method" data-method="google">Google 登录</button>
            <button class="login-provider-btn ${method === "account" ? "active" : ""}" data-action="set-login-method" data-method="account">账号密码登录</button>
          </div>

          ${
            method === "account"
              ? `
            ${
              accountAuthMode === "login"
                ? `
              <div class="login-field-row"><input data-field="login-account" value="${escapeHtml(uiState.loginAccount)}" placeholder="邮箱或昵称" /></div>
              <div class="login-field-row"><input data-field="login-password" value="${escapeHtml(uiState.loginPassword)}" placeholder="密码" type="password" /></div>
              <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "登录中..." : "账号登录"}</button>
            `
                : `
              <div class="login-field-row"><input data-field="register-account" value="${escapeHtml(uiState.registerAccount)}" placeholder="设置账号（邮箱或昵称）" /></div>
              <div class="login-field-row"><input data-field="register-password" value="${escapeHtml(uiState.registerPassword)}" placeholder="设置密码（至少6位）" type="password" /></div>
              <div class="login-field-row"><input data-field="register-confirm-password" value="${escapeHtml(uiState.registerConfirmPassword)}" placeholder="重新输入密码" type="password" /></div>
              <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "注册中..." : "立即注册"}</button>
            `
            }
            <div class="login-agree-row">
              <label class="login-agree"><input type="checkbox" checked /><span>已阅读并同意《用户协议》《隐私政策》</span></label>
              <button class="login-switch-link" data-action="toggle-account-auth-mode">${
                accountAuthMode === "login" ? "还没有账号？马上注册" : "已有账号？去登录"
              }</button>
            </div>
          `
              : method === "phone"
                ? `
            <div class="login-field-row"><span>+86</span><input data-field="login-phone" value="${escapeHtml(uiState.loginPhone)}" placeholder="输入手机号" /></div>
            <div class="login-field-row"><input data-field="login-code" value="${escapeHtml(uiState.loginCode)}" placeholder="输入验证码" /><button type="button">获取验证码</button></div>
            <button class="login-submit" data-action="confirm-login">验证码登录</button>
          `
                : `
            <button class="login-submit" data-action="login-quick-provider" data-provider="${method}">
              ${method === "wechat" ? "继续使用微信号登录" : "继续使用 Google 登录"}
            </button>
          `
          }

          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          ${method !== "account" ? `<label class="login-agree"><input type="checkbox" checked /><span>已阅读并同意《用户协议》《隐私政策》</span></label>` : ""}
          <p class="login-note">新用户可直接登录 · 登录有效期 30 分钟</p>
        </section>
      </div>
    `;
  }
  return `
    <div class="login-overlay${standalone ? " login-overlay-standalone" : ""}">
      <div class="login-modal">
        ${standalone ? "" : `<button class="login-modal-close" data-action="close-login-modal">×</button>`}
        <div class="login-modal-left">
          <div class="login-bubble">登录后推荐更懂你的内容</div>
          <div class="login-mini-brand"><img src="/assets/logo-v5.png" alt="爪马 Logo" loading="eager" fetchpriority="high" /><span>Drama 抓马</span></div>
          <div class="login-qr-box">扫码区</div>
          <p>可用 Drama 或 微信扫码</p>
          <small>▶ 如何扫码登录</small>
        </div>
        <div class="login-modal-right">
          <h3>登录 Drama</h3>
          <div class="login-switch">
            <button class="${method === "phone" ? "active" : ""}" data-action="set-login-method" data-method="phone">手机号</button>
            <button class="${method === "account" ? "active" : ""}" data-action="set-login-method" data-method="account">账号密码</button>
          </div>
          ${
            method === "account"
              ? `
            <div class="login-account-mode">
              <button class="${accountAuthMode === "login" ? "active" : ""}" data-action="set-account-auth-mode" data-mode="login">登录</button>
              <button class="${accountAuthMode === "register" ? "active" : ""}" data-action="set-account-auth-mode" data-mode="register">注册</button>
            </div>
            ${
              accountAuthMode === "login"
                ? `
            <div class="login-field-row"><input data-field="login-account" value="${escapeHtml(uiState.loginAccount)}" placeholder="邮箱或昵称" /></div>
            <div class="login-field-row"><input data-field="login-password" value="${escapeHtml(uiState.loginPassword)}" placeholder="密码" type="password" /></div>
            <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "登录中..." : "账号登录"}</button>
            <p class="login-note">测试账号可用：user1@drama.app / 123456</p>
          `
                : `
            <div class="login-field-row"><input data-field="register-account" value="${escapeHtml(uiState.registerAccount)}" placeholder="设置账号（邮箱或昵称）" /></div>
            <div class="login-field-row"><input data-field="register-password" value="${escapeHtml(uiState.registerPassword)}" placeholder="设置密码（至少6位）" type="password" /></div>
            <div class="login-field-row"><input data-field="register-confirm-password" value="${escapeHtml(uiState.registerConfirmPassword)}" placeholder="重新输入密码" type="password" /></div>
            <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "注册中..." : "立即注册"}</button>
            <p class="login-note">注册成功后将自动登录</p>
          `
            }
          `
              : `
            <div class="login-field-row"><span>+86</span><input data-field="login-phone" value="${escapeHtml(uiState.loginPhone)}" placeholder="输入手机号" /></div>
            <div class="login-field-row"><input data-field="login-code" value="${escapeHtml(uiState.loginCode)}" placeholder="输入验证码" /><button type="button">获取验证码</button></div>
            <button class="login-submit" data-action="confirm-login">验证码登录</button>
          `
          }
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <label class="login-agree"><input type="checkbox" checked /><span>已阅读并同意《用户协议》《隐私政策》</span></label>
          <p class="login-note">新用户可直接登录 · 登录有效期 30 分钟</p>
        </div>
      </div>
    </div>
  `;
}

function renderProfileEditModal() {
  const draft = uiState.profileDraft;
  const avatarText = getAvatarText(draft.name || uiState.profile?.name || "Drama 用户");
  const avatarUrl = String(draft.avatarUrl || "").trim();
  const coverUrl = String(draft.coverUrl || "").trim();
  const gender = ["男", "女", "保密"].includes(draft.gender) ? draft.gender : "保密";
  return `
    <div class="profile-edit-modal-overlay" data-action="close-profile-edit-modal">
      <div class="profile-edit-modal-card" data-action="noop">
        <div class="profile-edit-modal-head">
          <button class="profile-edit-head-btn" data-action="close-profile-edit-modal">返回</button>
          <h3>编辑资料</h3>
          <button class="profile-edit-head-btn primary" data-action="save-profile-edit-modal" ${(uiState.profileSaving || uiState.profileAssetProcessing) ? "disabled" : ""}>${uiState.profileSaving ? "保存中..." : (uiState.profileAssetProcessing ? "处理中..." : "保存")}</button>
        </div>
        <section class="profile-edit-modal-body">
          <div class="user-profile-edit-box">
            <div class="profile-edit-media-grid">
              <div class="profile-edit-media-item">
                <div class="profile-edit-avatar-row">
                  <button class="profile-edit-avatar-btn" data-action="profile-avatar-upload" aria-label="上传头像">
                    ${
                      avatarUrl
                        ? `<img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(draft.name || "头像")}" />`
                        : `<span>${escapeHtml(avatarText)}</span>`
                    }
                  </button>
                  <div class="profile-edit-avatar-actions">
                    <strong>头像</strong>
                    <div class="actions">
                      <button class="user-edit-btn subtle" data-action="profile-avatar-upload">上传头像</button>
                    </div>
                  </div>
                  <input class="profile-avatar-file-input" type="file" accept="image/*" data-field="profile-avatar-file" />
                </div>
              </div>
              <div class="profile-edit-media-item">
                <div class="profile-edit-cover-row">
                  <button class="profile-edit-cover-btn" data-action="me-hero-cover-upload" aria-label="上传背景">
                    ${
                      coverUrl
                        ? `<img src="${escapeHtml(coverUrl)}" alt="顶部背景预览" />`
                        : `<span>封面</span>`
                    }
                  </button>
                  <div class="profile-edit-avatar-actions">
                    <strong>顶部背景</strong>
                    <div class="actions">
                      <button class="user-edit-btn subtle" data-action="me-hero-cover-upload">上传背景</button>
                    </div>
                  </div>
                </div>
                <input class="me-hero-cover-input" type="file" accept="image/*" data-field="me-hero-cover-file" />
              </div>
            </div>
            <label>昵称<input class="profile-edit-input" data-field="name" value="${escapeHtml(draft.name)}" /></label>
            <label>简介标签<input class="profile-edit-input" data-field="handle" value="${escapeHtml(draft.handle)}" /></label>
            <div class="profile-edit-row">
              <label>
                性别
                <select class="profile-edit-input" data-field="gender">
                  ${["男", "女", "保密"].map((x) => `<option value="${x}" ${x === gender ? "selected" : ""}>${x}</option>`).join("")}
                </select>
              </label>
              <label>
                生日
                <input class="profile-edit-input" type="date" max="${new Date().toISOString().slice(0, 10)}" data-field="birthday" value="${escapeHtml(draft.birthday || "")}" />
              </label>
            </div>
            <label>个人介绍<textarea class="profile-edit-input profile-edit-textarea" data-field="bio">${escapeHtml(draft.bio)}</textarea></label>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderProfileAvatarPreviewModal() {
  const name = String(uiState.profileAvatarPreview?.name || uiState.profile?.name || "Drama 用户");
  const handle = String(uiState.profileAvatarPreview?.handle || uiState.profile?.handle || "@drama_user");
  const avatarText = String(uiState.profileAvatarPreview?.avatarText || getAvatarText(name));
  const avatarUrl = String(uiState.profileAvatarPreview?.avatarUrl || uiState.profile?.avatarUrl || "").trim();
  return `
    <div class="avatar-preview-overlay" data-action="close-profile-avatar-preview">
      <div class="avatar-preview-modal" data-action="noop">
        <button class="avatar-preview-close" data-action="close-profile-avatar-preview" aria-label="关闭">×</button>
        <div class="avatar-preview-bubble">
          ${avatarUrl ? `<img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(name)}" />` : escapeHtml(avatarText)}
        </div>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(handle)}</p>
      </div>
    </div>
  `;
}

function getWorldShareFriends() {
  const myId = String(uiState.currentUserId || "").trim();
  const myName = normalizeUserName(uiState.profile?.name || "");
  const pool = ME_RELATION_USERS
    .filter((x) => Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友"))
    .map((x) => ({
      id: String(x?.id || "").trim(),
      name: String(x?.name || "").trim()
    }))
    .filter((x) => {
      if (!x.name) return false;
      if (x.id && myId && x.id === myId) return false;
      return normalizeUserName(x.name) !== myName;
    });
  const map = new Map();
  pool.forEach((x) => {
    if (!x.name) return;
    const key = x.id || `name:${x.name}`;
    if (!map.has(key)) map.set(key, { id: x.id, name: x.name });
  });
  return [...map.values()].slice(0, 24);
}

function buildWorldShareUrl(world = getSelectedWorld()) {
  const worldId = String(world?.id || uiState.selectedWorldId || "").trim();
  const hash = window.location.hash || "#/world/detail";
  const route = hash.split("?")[0] || "#/world/detail";
  const wid = encodeURIComponent(worldId || "story");
  return `${window.location.origin}${window.location.pathname}${route}?wid=${wid}`;
}

function buildDynamicShareUrl(dynamic = getDynamicById(uiState.selectedDynamicId)) {
  const dynamicId = String(dynamic?.id || uiState.selectedDynamicId || "").trim();
  const wid = encodeURIComponent(uiState.selectedWorldId || "story");
  const did = encodeURIComponent(dynamicId || "dynamic");
  return `${window.location.origin}${window.location.pathname}#/messages/detail?wid=${wid}&did=${did}`;
}

function getActiveShareTarget() {
  if (uiState.shareTargetType === "dynamic") {
    const dynamic = getDynamicById(uiState.shareTargetDynamicId || uiState.selectedDynamicId);
    if (dynamic?.id) return { type: "dynamic", dynamic };
  }
  return { type: "world", world: getSelectedWorld() };
}

function buildShareTargetUrl() {
  const target = getActiveShareTarget();
  if (target.type === "dynamic") return buildDynamicShareUrl(target.dynamic);
  return buildWorldShareUrl(target.world);
}

function buildShareTargetDefaultDraft() {
  const target = getActiveShareTarget();
  if (target.type === "dynamic") {
    return `给你分享一个我觉得不错的动态：${target.dynamic?.title || "动态内容"}`;
  }
  return `给你分享一个我觉得不错的故事卡：${target.world?.title || ""}`;
}

function copyTextToClipboard(text) {
  const safe = String(text || "");
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(safe).catch(() => {});
    return;
  }
  const helper = document.createElement("textarea");
  helper.value = safe;
  helper.setAttribute("readonly", "readonly");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  try {
    document.execCommand("copy");
  } catch {}
  document.body.removeChild(helper);
}

function renderWorldShareSheet() {
  const friends = getWorldShareFriends();
  const mode = uiState.worldShareMode === "send" ? "send" : "picker";
  const selectedName = uiState.worldShareSelectedUserName || "";
  const target = getActiveShareTarget();
  const isDynamic = target.type === "dynamic";
  return `
    <div class="world-share-sheet-overlay" data-action="close-world-share">
      <section class="world-share-sheet" data-action="noop">
        <header class="world-share-sheet-head">
          <h3>${mode === "send" ? "发送给好友" : "分享至"}</h3>
          <button data-action="close-world-share" aria-label="关闭">×</button>
        </header>
        ${
          mode === "send"
            ? `
          <div class="world-share-friends-row">
            ${friends.map((friend) => `
              <button
                class="world-share-friend ${friend.name === selectedName ? "active" : ""}"
                data-action="world-share-pick-friend"
                data-user-id="${escapeHtml(friend.id || "")}"
                data-user-name="${escapeHtml(friend.name)}"
              >
                <span>${escapeHtml(getAvatarText(friend.name))}</span>
                <strong>${escapeHtml(friend.name)}</strong>
              </button>
            `).join("")}
          </div>
          <div class="world-share-send-box">
            <p>发送给：${escapeHtml(selectedName || "请选择好友")}</p>
            <textarea data-field="world-share-draft" placeholder="跟朋友说点什么呢......">${escapeHtml(uiState.worldShareDraft)}</textarea>
            <button class="world-share-send-btn" data-action="world-share-send" ${selectedName ? "" : "disabled"}>发送</button>
            <button class="world-share-back-btn" data-action="world-share-back">返回分享方式</button>
          </div>
        `
            : `
          <div class="world-share-friends-row">
            ${
              friends.length
                ? friends.map((friend) => `
                  <button
                    class="world-share-friend"
                    data-action="world-share-pick-friend"
                    data-user-id="${escapeHtml(friend.id || "")}"
                    data-user-name="${escapeHtml(friend.name)}"
                  >
                    <span>${escapeHtml(getAvatarText(friend.name))}</span>
                    <strong>${escapeHtml(friend.name)}</strong>
                  </button>
                `).join("")
                : `<p class="world-share-empty-friends">暂无关注好友，先去关注再分享给好友。</p>`
            }
          </div>
          <div class="world-share-actions-grid">
            <button class="world-share-action" data-action="world-share-copy-link">
              <span>🔗</span>
              <strong>${isDynamic ? "生成动态分享链接" : "生成卡片分享链接"}</strong>
              <small>${isDynamic ? "点击后复制当前动态链接" : "点击后复制当前卡片网址"}</small>
            </button>
            <button class="world-share-action" data-action="world-share-open-image">
              <span>🖼️</span>
              <strong>生成图片分享</strong>
              <small>打开分享图弹窗</small>
            </button>
          </div>
        `
        }
        ${uiState.worldShareFeedback ? `<p class="world-share-feedback">${escapeHtml(uiState.worldShareFeedback)}</p>` : ""}
      </section>
    </div>
  `;
}

function renderWorldShareImageModal() {
  const target = getActiveShareTarget();
  const isDynamic = target.type === "dynamic";
  const world = target.world;
  const dynamic = target.dynamic;
  const mediaItems = normalizeDynamicMediaItems(dynamic?.mediaItems || dynamic?.media_items || dynamic?.mediaUrls || dynamic?.media_urls);
  const dynamicCover = String(mediaItems.find((x) => x.mediaType === "image")?.url || "").trim();
  const link = buildShareTargetUrl();
  const posterCoverStyle = isDynamic
    ? (dynamicCover
      ? `background-image:url('${escapeHtml(dynamicCover)}');background-size:cover;background-position:center;`
      : "background:linear-gradient(160deg,#ddd6fe 0%,#818cf8 100%);")
    : `background:${getWorldCoverStyle(world, world?.id || world?.title || "share")};`;
  const posterTitle = isDynamic
    ? String(dynamic?.title || "动态分享").trim() || "动态分享"
    : String(world?.title || "未命名故事卡");
  const posterDesc = isDynamic
    ? String(dynamic?.text || "来看看这条动态").slice(0, 120)
    : String(world?.desc || "和我一起玩这个故事吧").slice(0, 120);
  const posterMetaPrimary = isDynamic ? String(dynamic?.author || "Drama 用户") : String(world?.author || "Drama 用户");
  const posterMetaSecondary = isDynamic ? "动态" : String(world?.theme || "主题");
  const posterMetaTertiary = isDynamic ? String(dynamic?.time || "刚刚") : String(world?.format || "模式");
  return `
    <div class="world-share-image-overlay" data-action="close-world-share-image">
      <section class="world-share-image-modal" data-action="noop">
        <header class="world-share-image-head">
          <h3>分享</h3>
          <button data-action="close-world-share-image" aria-label="关闭">×</button>
        </header>
        <p>保存下方图片或复制链接即可分享给好友</p>
        <article class="world-share-poster">
          <div class="world-share-poster-cover" style="${posterCoverStyle}"></div>
          <div class="world-share-poster-body">
            <h4>${escapeHtml(posterTitle)}</h4>
            <p>${escapeHtml(posterDesc)}</p>
            <div class="world-share-poster-meta">
              <span>${escapeHtml(posterMetaPrimary)}</span>
              <span>${escapeHtml(posterMetaSecondary)}</span>
              <span>${escapeHtml(posterMetaTertiary)}</span>
            </div>
          </div>
        </article>
        <div class="world-share-link-row">
          <input value="${escapeHtml(link)}" readonly />
          <button data-action="world-share-copy-link">复制链接</button>
        </div>
        <button class="world-share-image-save" data-action="world-share-download-image">下载分享图</button>
      </section>
    </div>
  `;
}

function renderHomeCard(item, options = {}) {
  const cardClassName = String(options.className || "").trim();
  const isPublishing = Boolean(item?.isPublishing);
  const action = isPublishing ? "noop" : (String(options.action || "open-world-detail").trim() || "open-world-detail");
  const itemId = String(options.id || item.id || "").trim();
  const cardActionAttr = action === "noop"
    ? 'data-action="noop"'
    : `data-action="${escapeHtml(action)}"${itemId ? ` data-id="${escapeHtml(itemId)}"` : ""}`;
  const authorName = String(options.authorName || item.author || "Drama 作者").trim() || "Drama 作者";
  const authorId = String(options.authorId || item.authorId || "").trim();
  const explicitAuthorAvatarUrl = String(options.authorAvatarUrl || item.authorAvatarUrl || "").trim();
  const authorAvatarUrl = explicitAuthorAvatarUrl || resolveAvatarUrlByIdentity(authorName, authorId);
  const authorAvatarText = getAvatarText(authorName);
  const coverClassName = String(options.coverClassName || "").trim();
  const coverStyle = String(options.coverStyle || item.cover || "").trim();
  const metrics = Array.isArray(options.metrics) && options.metrics.length
    ? options.metrics
    : [`♡ ${item.like}`, `☆ ${item.star}`, `💬 ${item.comment}`, `🔥 ${item.heat}`];
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const publishProgress = Math.max(0, Math.min(100, Number(item?.publishProgress || 0)));
  const publishPhaseText = String(item?.publishPhaseText || "发布中").trim() || "发布中";
  const publishOverlay = isPublishing
    ? `
      <div class="home-publish-overlay ${item?.publishDone ? "done" : ""} ${item?.publishFailed ? "failed" : ""}">
        <div class="home-publish-ring ${item?.publishPulse ? "pulse" : ""}" style="--progress:${publishProgress};">
          <span>${publishProgress}%</span>
        </div>
        <p>${escapeHtml(publishPhaseText)}</p>
      </div>
    `
    : "";
  const publishInlineBadge = isPublishing
    ? `<div class="home-publish-inline-badge">${escapeHtml(publishPhaseText)}</div>`
    : "";
  return `
    <article class="home-card ${escapeHtml(cardClassName)}" ${cardActionAttr}>
      <div class="home-cover ${escapeHtml(coverClassName)}"${coverStyle ? ` style="background:${escapeHtml(coverStyle)};"` : ""}>
        ${publishOverlay}
      </div>
      <div class="home-body">
        ${item.isTest ? `<div class="home-test-badge">TEST可玩</div>` : ""}
        ${publishInlineBadge}
        <h4>${escapeHtml(item.title || "未命名作品")}</h4>
        <div class="home-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="home-author">
          <span class="home-author-avatar ${authorAvatarUrl ? "with-image" : ""}">
            ${authorAvatarUrl ? `<img src="${escapeHtml(authorAvatarUrl)}" alt="${escapeHtml(authorName)}" loading="lazy" />` : escapeHtml(authorAvatarText)}
          </span>
          <span class="home-author-name">${escapeHtml(authorName)}</span>
        </div>
        <div class="home-metrics">${metrics.map((metric) => `<span>${escapeHtml(metric)}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function renderDramaStoryDeck(cards, action = "open-world-detail") {
  return `
    <div class="xh-feed-grid drama-story-grid">
      ${cards
        .map(
          (item, idx) => {
            const coverStyle = getWorldCoverStyle(item, item.id || idx);
            return renderHomeCard(
              { ...item, cover: `${coverStyle};background-size:cover;background-position:center;` },
              { action, id: getSafeWorldId(item.id, idx), className: "drama-story-card" }
            );
          }
        )
        .join("")}
    </div>
  `;
}

function renderTopRankBadge(rank) {
  if (rank === "1") return "🥇";
  if (rank === "2") return "🥈";
  if (rank === "3") return "🥉";
  return rank;
}

function buildFeedData() {
  return [];
}

function buildDynamicFeed() {
  return [];
}

function formatCount(value) {
  const n = Number(value) || 0;
  if (n >= 10000) return `${(n / 10000).toFixed(1)}w`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function extractImageUrl(raw) {
  const text = String(raw || "").trim();
  if (!text) return "";
  if (/^https?:\/\//i.test(text)) return text;
  const m = text.match(/url\((['"]?)(.*?)\1\)/i);
  return m?.[2] || "";
}

function getDramaFallbackImage(seed = "") {
  if (!DRAMA_STORY_IMAGES.length) return "";
  const i = Math.abs(hashText(String(seed || "drama"))) % DRAMA_STORY_IMAGES.length;
  return extractImageUrl(DRAMA_STORY_IMAGES[i]) || "";
}

function extractFirstWorldCardImageUrl(world = {}) {
  const groupedMediaCandidates = [
    world?.mediaItems,
    world?.media_items,
    world?.images,
    world?.imageUrls,
    world?.image_urls,
    world?.mediaUrls,
    world?.media_urls
  ];
  for (const mediaLike of groupedMediaCandidates) {
    const mediaItems = normalizeDynamicMediaItems(mediaLike);
    const firstImageItem = mediaItems.find((item) => item?.mediaType === "image" && String(item?.url || "").trim());
    if (firstImageItem?.url) return String(firstImageItem.url).trim();
    const urls = normalizeMediaUrls(mediaLike);
    if (urls.length > 0) return urls[0];
  }
  const directCandidates = [
    world?.firstImageUrl,
    world?.first_image_url
  ];
  for (const candidate of directCandidates) {
    const url = extractImageUrl(candidate);
    if (url) return url;
  }
  return "";
}

function getWorldImageUrl(world, seed = "") {
  const firstImageUrl = extractFirstWorldCardImageUrl(world);
  if (firstImageUrl) return firstImageUrl;
  const candidates = [
    world?.cover,
    world?.firstImageUrl,
    world?.first_image_url,
    world?.coverUrl,
    world?.cover_url,
    world?.image,
    world?.imageUrl,
    world?.poster,
    world?.posterUrl,
    world?.thumbnail,
    world?.thumbnailUrl
  ];
  for (const candidate of candidates) {
    const url = extractImageUrl(candidate);
    if (url) return url;
  }
  return getDramaFallbackImage(world?.id || world?.title || seed);
}

function getWorldCoverStyle(world, seed = "") {
  const cover = String(world?.cover || "").trim();
  if (cover.startsWith("linear-gradient")) return cover;
  const url = getWorldImageUrl(world, seed);
  if (!url) return "linear-gradient(160deg,#ddd6fe 0%,#818cf8 100%)";
  return `linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.34)),url('${url}') center/cover`;
}

function getWorldHeroCoverStyle(world, seed = "") {
  const firstImageUrl = extractFirstWorldCardImageUrl(world);
  if (firstImageUrl) {
    return `linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.58)),url('${firstImageUrl}') center/cover`;
  }
  return getWorldCoverStyle(world, seed);
}

function allDynamicItems() {
  return [...uiState.dynamicPosts, ...DYNAMIC_FEED];
}

function isMyDynamicItem(item) {
  if (!item) return false;
  const meName = String(uiState.profile?.name || "").trim();
  const author = String(item.author || "").trim();
  if (meName && author && meName === author) return true;
  return String(item.tab || "") === "我的";
}

function resolveDynamicAuthorFollowMeta(item) {
  const authorName = String(item?.author || "").trim();
  const authorHandle = String(item?.handle || "").trim();
  const explicitId = String(item?.authorId || item?.author_id || "").trim();
  const resolvedId = isUuid(explicitId)
    ? explicitId
    : resolveAuthorIdByName(authorName || authorHandle)
      || resolveRelationUserIdByName(authorName || authorHandle)
      || resolveAuthUserIdByAlias(authorName || authorHandle);
  const sameHandleAsMe = Boolean(
    normalizeUserName(authorHandle)
    && normalizeUserName(authorHandle) === normalizeUserName(uiState.profile?.handle || "")
  );
  const isMine = isMyDynamicItem(item)
    || Boolean(uiState.currentUserId && resolvedId && resolvedId === uiState.currentUserId)
    || sameHandleAsMe;
  const profile = buildAuthorProfileByName(authorName || "Drama 用户", resolvedId);
  return {
    isMine,
    authorId: String(profile?.id || resolvedId || "").trim(),
    authorName: authorName || String(profile?.name || "Drama 用户").trim() || "Drama 用户",
    followedByMe: Boolean(profile?.isFollowedByMe)
  };
}

function isDynamicItemHidden(item) {
  return normalizeDynamicVisibility(item?.visibility || "public") === "private";
}

function getDynamicById(id) {
  return allDynamicItems().find((x) => x.id === id) || allDynamicItems()[0] || null;
}

function ensureDynamicMeta(item) {
  if (!item) return null;
  if (!uiState.dynamicMeta[item.id]) {
    uiState.dynamicMeta[item.id] = {
      liked: Boolean(item.liked),
      favorited: Boolean(item.favorited),
      likes: Number(item.likes) || 0,
      star: Number(item.star) || 0,
      commentsCount: Number(item.comments) || 0,
      commentsLoaded: false,
      commentsLoading: false,
      comments: [],
      liking: false,
      favoriting: false,
      commentSubmitting: false,
      commentError: "",
      likingByCommentId: {},
      deletingByCommentId: {},
      submittingReplyByCommentId: {},
      activeReplyCommentId: "",
      activeReplyTargetId: "",
      activeActionCommentId: "",
      replyDraftByCommentId: {}
    };
  }
  const meta = uiState.dynamicMeta[item.id];
  if (!Array.isArray(meta.comments)) meta.comments = [];
  if (!meta.likingByCommentId || typeof meta.likingByCommentId !== "object") meta.likingByCommentId = {};
  if (!meta.deletingByCommentId || typeof meta.deletingByCommentId !== "object") meta.deletingByCommentId = {};
  if (!meta.submittingReplyByCommentId || typeof meta.submittingReplyByCommentId !== "object") meta.submittingReplyByCommentId = {};
  if (!meta.replyDraftByCommentId || typeof meta.replyDraftByCommentId !== "object") meta.replyDraftByCommentId = {};
  if (typeof meta.activeReplyCommentId !== "string") meta.activeReplyCommentId = "";
  if (typeof meta.activeReplyTargetId !== "string") meta.activeReplyTargetId = "";
  if (typeof meta.activeActionCommentId !== "string") meta.activeActionCommentId = "";
  if (typeof meta.commentError !== "string") meta.commentError = "";
  return meta;
}

function buildCommunityList() {
  return [];
}

function getCommunityQuickOptions(sortKey) {
  if (sortKey === "theme") return ["全部主题", "悬疑", "言情", "古风", "科幻"];
  if (sortKey === "gender") return ["不限频向", "男频", "女频", "不限"];
  if (sortKey === "time") return ["全部时间", "24小时", "3天", "7天", "30天"];
  if (sortKey === "size") return ["全部人数", "<100", "100-500", "500-1k", ">1k"];
  return [];
}

function getSelectedCommunityFilterValue(sortKey) {
  if (sortKey === "theme") return uiState.communityFilterTheme;
  if (sortKey === "gender") return uiState.communityFilterGender;
  if (sortKey === "time") return uiState.communityFilterTime;
  if (sortKey === "size") return uiState.communityFilterSize;
  return "";
}

function matchCommunitySize(memberCount, sizeFilter) {
  if (sizeFilter === "全部人数") return true;
  if (sizeFilter === "<100") return memberCount < 100;
  if (sizeFilter === "100-500") return memberCount >= 100 && memberCount <= 500;
  if (sizeFilter === "500-1k") return memberCount > 500 && memberCount <= 1000;
  if (sizeFilter === ">1k") return memberCount > 1000;
  return true;
}

function getFilteredCommunityList() {
  return COMMUNITY_LIST.filter((item) => {
    const themeOk = uiState.communityFilterTheme === "全部主题"
      ? true
      : uiState.communityFilterTheme === "悬疑"
      ? item.desc.includes("悬疑") || item.tags.includes("悬疑") || item.tags.includes("推理")
      : uiState.communityFilterTheme === "言情"
        ? item.desc.includes("情") || item.tags.includes("言情")
      : uiState.communityFilterTheme === "古风"
        ? item.desc.includes("古") || item.tags.includes("古风")
      : item.tags.includes("科幻") || item.desc.includes("未来");
    return themeOk;
  });
}

function getCommunityFilterValue(key) {
  if (key === "theme") return uiState.communityFilterTheme;
  if (key === "gender") return uiState.communityFilterGender;
  if (key === "time") return uiState.communityFilterTime;
  if (key === "size") return uiState.communityFilterSize;
  return "";
}

function renderCommunityFilterGroup(group) {
  const current = getCommunityFilterValue(group.key);
  const options = [group.label, ...(Array.isArray(group.options) ? group.options : [])];
  return `
    <div class="community-filter-tab-group">
      <div class="community-filter-tab-track xh-mobile-topic-tabs">
      ${options
        .map(
          (option) => `
        <button class="community-filter-tab xh-mobile-topic-tab ${current === option ? "active" : ""}" data-action="community-filter-change" data-key="${group.key}" data-value="${option}">${option}</button>
      `
        )
        .join("")}
      </div>
    </div>
  `;
}

function getCommunityCardCover(item, index = 0) {
  if (item.cover && String(item.cover).trim()) return item.cover;
  const raw = String(item.id || index || "");
  const seed = raw.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return COMMUNITY_CARD_IMAGES[seed % COMMUNITY_CARD_IMAGES.length];
}

function renderCommunityCards(list, emptyText = "暂无符合条件的社群") {
  if (!list.length) return `<p class="community-empty">${emptyText}</p>`;
  return `
    <div class="community-card-grid">
      ${list
        .map((x, i) => {
          const avatarText = (x.name || "社").slice(0, 1);
          const avatarUrl = String(x.avatarUrl || "").trim();
          const tags = (x.tags || []).slice(0, 3);
          const cover = getCommunityCardCover(x, i);
          const coverStyleValue = escapeHtml(String(cover || "").replaceAll('"', "'"));
          const rawMaskOpacity = Number(x.maskOpacity);
          const maskOpacity = Number.isFinite(rawMaskOpacity)
            ? Math.max(0, Math.min(0.85, rawMaskOpacity))
            : 0.34;
          return `
            <article class="community-mini-card" style="--community-cover:${coverStyleValue};--community-mask-opacity:${maskOpacity};" data-action="open-community-group" data-id="${x.id}">
              <div class="head">
                <div class="avatar"${avatarUrl ? ` style="background-image:url('${escapeHtml(avatarUrl)}');background-size:cover;background-position:center;color:transparent;"` : ""}>${avatarText}</div>
                <div class="title-wrap">
                  <h4>${x.name}</h4>
                  <p>${x.desc}</p>
                </div>
              </div>
              <div class="tags">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
              <div class="meta">
                <span>成员 ${x.members}</span>
                <span>在线 ${x.online}</span>
              </div>
              <div class="foot">
                <span>最近活跃：${x.updated}</span>
                <span class="jump">进入 ›</span>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function buildCommunityMembers() {
  return [];
}

function buildCommunityPosts() {
  return {};
}

function getCommunityStoryOptions() {
  return FEED_DATA.slice(0, 20).map((x) => ({ id: x.id, title: x.title }));
}

function getStoryBindOptions() {
  const seen = new Set();
  return FEED_DATA
    .map((item) => ({
      id: String(item?.id || "").trim(),
      title: String(item?.title || "").trim() || "未命名故事卡",
      desc: String(item?.desc || "").trim(),
      author: String(item?.author || "").trim()
    }))
    .filter((item) => {
      if (!item.id || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, 180);
}

function getStoryBindIdByTarget(target = "community") {
  return target === "dynamic"
    ? String(uiState.dynamicComposeStoryId || "").trim()
    : String(uiState.communityComposeStoryId || "").trim();
}

function getStoryBindTitleByTarget(target = "community", options = getStoryBindOptions()) {
  const id = getStoryBindIdByTarget(target);
  if (!id) return "";
  const hit = options.find((x) => x.id === id);
  return String(hit?.title || "").trim();
}

function renderStoryBindSettingRow({ target = "community", options = getStoryBindOptions() } = {}) {
  const safeTarget = target === "dynamic" ? "dynamic" : "community";
  const boundId = getStoryBindIdByTarget(safeTarget);
  const boundTitle = getStoryBindTitleByTarget(safeTarget, options);
  return `
    <div class="community-setting-row community-story-bind-row">
      <span>绑定故事卡</span>
      <div class="community-story-bind-controls">
        <button data-action="open-story-bind-sheet" data-target="${safeTarget}">搜索</button>
        <em class="${boundTitle ? "has-value" : ""}">${escapeHtml(boundTitle || "未绑定")}</em>
        ${boundId ? `<button class="clear" data-action="clear-story-bind" data-target="${safeTarget}" aria-label="清空绑定">×</button>` : ""}
      </div>
    </div>
  `;
}

function renderStoryBindSearchSheet() {
  if (!uiState.storyBindSheetOpen) return "";
  const target = uiState.storyBindSheetTarget === "dynamic" ? "dynamic" : "community";
  const keyword = String(uiState.storyBindSearchKeyword || "").trim().toLowerCase();
  const options = getStoryBindOptions();
  const boundId = getStoryBindIdByTarget(target);
  const filtered = options
    .filter((item) => {
      if (!keyword) return true;
      return `${item.title} ${item.desc} ${item.author}`.toLowerCase().includes(keyword);
    })
    .slice(0, 80);
  return `
    <div class="community-compose-sheet-mask" data-action="close-story-bind-sheet">
      <div class="community-compose-sheet story-bind-sheet" data-action="noop">
        <header>
          <h4>搜索故事卡</h4>
          <button data-action="close-story-bind-sheet">完成</button>
        </header>
        <div class="story-bind-search-row">
          <input data-field="story-bind-search-keyword" value="${escapeHtml(uiState.storyBindSearchKeyword || "")}" placeholder="输入标题/描述/作者搜索" />
        </div>
        <div class="community-compose-sheet-list">
          ${
            filtered.length
              ? filtered.map((item) => `
                <button
                  class="story-bind-item ${boundId === item.id ? "active" : ""}"
                  data-action="pick-story-bind"
                  data-target="${target}"
                  data-id="${escapeHtml(item.id)}"
                >
                  <span class="story-bind-item-mark" aria-hidden="true">${boundId === item.id ? "✓" : "◦"}</span>
                  <em>${escapeHtml(item.title)}</em>
                </button>
              `).join("")
              : `<p class="community-compose-sheet-empty">没有找到匹配的故事卡</p>`
          }
        </div>
      </div>
    </div>
  `;
}

function getSelectedCommunity() {
  return COMMUNITY_LIST.find((x) => x.id === uiState.selectedCommunityId) || COMMUNITY_LIST[0];
}

function normalizeComposeVisibility(value) {
  const v = String(value || "").trim();
  if (v === "public" || v === "all_users" || v === "所有用户") return "public";
  return "community_only";
}

function getComposeVisibilityLabel(value) {
  return normalizeComposeVisibility(value) === "public" ? "所有用户" : "本社区用户";
}

function resolveCommunityComposeTargetId() {
  const current = String(uiState.selectedCommunityId || "").trim();
  if (isUuid(current) && COMMUNITY_LIST.some((x) => String(x?.id || "").trim() === current)) return current;
  const uid = String(uiState.currentUserId || "").trim();
  const created = COMMUNITY_LIST.find((x) => isUuid(x?.id) && uid && String(x?.ownerId || "").trim() === uid);
  if (created?.id) {
    uiState.selectedCommunityId = created.id;
    return created.id;
  }
  const joined = COMMUNITY_LIST.find((x) => isUuid(x?.id) && Boolean(x?.joinedByMe));
  if (joined?.id) {
    uiState.selectedCommunityId = joined.id;
    return joined.id;
  }
  const first = COMMUNITY_LIST.find((x) => isUuid(x?.id));
  if (first?.id) {
    uiState.selectedCommunityId = first.id;
    return first.id;
  }
  return "";
}

function getMyJoinedCommunities() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return [];
  return COMMUNITY_LIST.filter((x) => Boolean(x?.joinedByMe));
}

function getMyCreatedCommunities() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return [];
  return COMMUNITY_LIST.filter((x) => String(x?.ownerId || "").trim() === uid);
}

function syncCommunityMemberCount(communityId, nextCount) {
  const cid = String(communityId || "").trim();
  if (!cid) return;
  const count = Math.max(0, Number(nextCount) || 0);
  const target = COMMUNITY_LIST.find((x) => String(x?.id || "").trim() === cid);
  if (target) target.memberCount = count;
}

function getCommunityMemberPreviewList(community) {
  const communityId = String(community?.id || "").trim();
  const realMembers = communityId ? uiState.communityMembersByCommunityId[communityId] : null;
  if (Array.isArray(realMembers) && realMembers.length) {
    return realMembers;
  }
  const total = Math.max(0, toMetricCount(community?.memberCount || 0));
  if (total <= 0) return [];
  if (COMMUNITY_MEMBERS.length >= total) return COMMUNITY_MEMBERS.slice(0, total);
  const seed = COMMUNITY_MEMBERS.length
    ? COMMUNITY_MEMBERS
    : [{ name: "成员", role: "member", intro: "社区成员", color: "#c4b5fd" }];
  const out = [];
  for (let i = 0; i < Math.min(total, 24); i += 1) {
    const base = seed[i % seed.length];
    out.push({
      ...base,
      name: `${base.name}${i + 1}`
    });
  }
  return out;
}

function getCommunityRoleLabel(role) {
  const value = String(role || "").trim().toLowerCase();
  if (value === "owner") return "群主";
  if (value === "admin") return "管理员";
  return "成员";
}

function getCommunityMemberColor(seed) {
  const src = String(seed || "");
  let hash = 0;
  for (let i = 0; i < src.length; i += 1) {
    hash = (hash * 31 + src.charCodeAt(i)) >>> 0;
  }
  const palette = ["#c4b5fd", "#a5b4fc", "#93c5fd", "#f9a8d4", "#86efac", "#fcd34d", "#fca5a5", "#67e8f9"];
  return palette[hash % palette.length];
}

async function fetchCommunityMembersAndSync(communityId, { force = false } = {}) {
  const cid = String(communityId || "").trim();
  if (!cid) return;
  const loaded = Array.isArray(uiState.communityMembersByCommunityId[cid]);
  if (loaded && !force) return;
  if (uiState.communityMembersLoadingByCommunityId[cid]) return;
  uiState.communityMembersLoadingByCommunityId[cid] = true;
  uiState.communityMembersErrorByCommunityId[cid] = "";
  render();
  try {
    const data = await apiGetJson(`/community/members?communityId=${encodeURIComponent(cid)}&limit=120`);
    const list = Array.isArray(data?.members) ? data.members : [];
    const normalizedMembers = list.map((row) => {
      const name = String(row?.nickname || "用户").trim() || "用户";
      const handle = String(row?.handle || "").trim();
      const roleText = getCommunityRoleLabel(row?.role);
      const intro = handle || "社区成员";
      const avatarUrl = String(row?.avatar_url || "").trim();
      return {
        id: String(row?.user_id || "").trim(),
        name,
        role: roleText,
        intro,
        color: getCommunityMemberColor(row?.user_id || name),
        avatarUrl
      };
    });
    uiState.communityMembersByCommunityId[cid] = normalizedMembers;
    uiState.communityMembersFetchedAtByCommunityId[cid] = Date.now();
    const apiMemberCount = Math.max(0, Number(data?.memberCount));
    const resolvedCount = Number.isFinite(apiMemberCount) ? apiMemberCount : normalizedMembers.length;
    syncCommunityMemberCount(cid, resolvedCount);
  } catch (error) {
    uiState.communityMembersErrorByCommunityId[cid] = error instanceof Error ? error.message : "成员加载失败";
  } finally {
    uiState.communityMembersLoadingByCommunityId[cid] = false;
    render();
  }
}

function getCommunityPosts(cid) {
  return COMMUNITY_POSTS[cid] || [];
}

function getCommunityMentionCandidates() {
  const uid = String(uiState.currentUserId || "").trim();
  const friends = ME_RELATION_USERS
    .filter((x) => {
      const id = String(x?.id || "").trim();
      if (!id || id === uid) return false;
      return Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友");
    })
    .slice(0, 60)
    .map((x) => {
      const name = String(x?.name || x?.nickname || "").trim() || "好友";
      return {
        id: String(x?.id || "").trim(),
        name,
        avatar: name.slice(0, 1) || "友"
      };
    });
  return friends;
}

function appendTextTokenWithSpace(base, token) {
  const current = String(base || "");
  const suffix = current && !/\s$/.test(current) ? " " : "";
  return `${current}${suffix}${token} `;
}

function normalizeMediaUrls(mediaLike) {
  const src = Array.isArray(mediaLike) ? mediaLike : [];
  return src
    .map((x) => (typeof x === "string" ? x : x?.url))
    .map((x) => String(x || "").trim())
    .filter(Boolean);
}

function normalizeDynamicVisibility(value = "public") {
  const v = String(value || "").trim().toLowerCase();
  if (v === "private" || v === "仅自己可见") return "private";
  if (v === "followers" || v === "仅粉丝可见") return "followers";
  return "public";
}

function normalizeBackstageMaskValue(value, fallback = true) {
  if (typeof value === "boolean") return value;
  const raw = String(value ?? "").trim().toLowerCase();
  if (raw === "true" || raw === "1" || raw === "on" || raw === "yes") return true;
  if (raw === "false" || raw === "0" || raw === "off" || raw === "no") return false;
  return Boolean(fallback);
}

function getDynamicVisibilityLabel(value = "public") {
  const normalized = normalizeDynamicVisibility(value);
  if (normalized === "private") return "仅自己可见";
  if (normalized === "followers") return "仅粉丝可见";
  return "所有人可见";
}

function normalizeDynamicMediaItems(mediaLike) {
  const src = Array.isArray(mediaLike) ? mediaLike : [];
  return src
    .map((row, idx) => {
      if (typeof row === "string") {
        const url = String(row || "").trim();
        if (!url) return null;
        return { id: `media_${idx}`, mediaType: "image", url, durationSec: 0 };
      }
      const url = String(row?.url || row?.mediaUrl || row?.media_url || row?.src || "").trim();
      if (!url) return null;
      const mediaType = String(row?.mediaType || row?.type || row?.media_type || "").trim().toLowerCase() === "video"
        ? "video"
        : "image";
      const durationSec = Math.max(0, Number(row?.durationSec || row?.duration_sec || row?.duration || 0) || 0);
      return {
        id: String(row?.id || `media_${idx}`),
        mediaType,
        url,
        durationSec
      };
    })
    .filter(Boolean)
    .slice(0, 9);
}

function renderCommunityPostMedia(post = {}, options = {}) {
  const urls = normalizeMediaUrls(post.mediaUrls || post.media_urls);
  const limit = Number(options.limit || 0);
  const picked = limit > 0 ? urls.slice(0, limit) : urls;
  if (!picked.length) return "";
  return `
    <div class="community-post-media">
      ${picked.map((url) => `<div class="community-post-media-item"><img src="${escapeHtml(url)}" alt="社区动态图片" loading="lazy" /></div>`).join("")}
    </div>
  `;
}

function getSelectedCommunityPost() {
  const c = getSelectedCommunity();
  const all = [...getCommunityPosts(c.id)];
  return all.find((x) => x.id === uiState.selectedCommunityPostId) || all[0] || null;
}

function ensureCommunityPostMeta(post) {
  if (!post) return null;
  const id = String(post.id || "").trim();
  if (!id) return null;
  const cacheMap = readCommunityPostStateCache(uiState.currentUserId);
  const cached = cacheMap && typeof cacheMap[id] === "object" ? cacheMap[id] : null;
  if (!uiState.communityPostMeta[id]) {
    uiState.communityPostMeta[id] = {
      liked: typeof cached?.liked === "boolean" ? cached.liked : false,
      starred: typeof cached?.starred === "boolean" ? cached.starred : false,
      shared: typeof cached?.shared === "boolean" ? cached.shared : false,
      likes: Number.isFinite(Number(cached?.likes)) ? Number(cached.likes) : Number(post.likes || 0),
      stars: Number.isFinite(Number(cached?.stars)) ? Number(cached.stars) : Number(post.stars || 0),
      commentsCount: Number.isFinite(Number(cached?.commentsCount)) ? Number(cached.commentsCount) : Number(post.comments || 0),
      shares: Number.isFinite(Number(cached?.shares)) ? Number(cached.shares) : 0,
      comments: Array.isArray(cached?.comments) ? normalizeThreadCommentsFromApi(cached.comments, `cached_community_${id}`) : [],
      likePending: false,
      starPending: false,
      commentSubmitting: false,
      commentError: "",
      likingByCommentId: {},
      deletingByCommentId: {},
      submittingReplyByCommentId: {},
      activeReplyCommentId: "",
      activeReplyTargetId: "",
      activeActionCommentId: "",
      replyDraftByCommentId: {}
    };
  } else if (cached) {
    const prev = uiState.communityPostMeta[id];
    uiState.communityPostMeta[id] = {
      ...prev,
      ...(typeof cached.liked === "boolean" ? { liked: cached.liked } : {}),
      ...(typeof cached.starred === "boolean" ? { starred: cached.starred } : {}),
      ...(typeof cached.shared === "boolean" ? { shared: cached.shared } : {}),
      ...(Number.isFinite(Number(cached.likes)) ? { likes: Number(cached.likes) } : {}),
      ...(Number.isFinite(Number(cached.stars)) ? { stars: Number(cached.stars) } : {}),
      ...(Number.isFinite(Number(cached.commentsCount)) ? { commentsCount: Number(cached.commentsCount) } : {}),
      ...(Number.isFinite(Number(cached.shares)) ? { shares: Number(cached.shares) } : {}),
      ...(Array.isArray(cached.comments) && !prev.comments?.length
        ? { comments: normalizeThreadCommentsFromApi(cached.comments, `cached_community_${id}`) }
        : {})
    };
  }
  const meta = uiState.communityPostMeta[id];
  if (!Array.isArray(meta.comments)) meta.comments = [];
  if (!meta.likingByCommentId || typeof meta.likingByCommentId !== "object") meta.likingByCommentId = {};
  if (!meta.deletingByCommentId || typeof meta.deletingByCommentId !== "object") meta.deletingByCommentId = {};
  if (!meta.submittingReplyByCommentId || typeof meta.submittingReplyByCommentId !== "object") meta.submittingReplyByCommentId = {};
  if (!meta.replyDraftByCommentId || typeof meta.replyDraftByCommentId !== "object") meta.replyDraftByCommentId = {};
  if (typeof meta.activeReplyCommentId !== "string") meta.activeReplyCommentId = "";
  if (typeof meta.activeReplyTargetId !== "string") meta.activeReplyTargetId = "";
  if (typeof meta.activeActionCommentId !== "string") meta.activeActionCommentId = "";
  if (typeof meta.commentError !== "string") meta.commentError = "";
  return meta;
}

function findCommunityPostById(postId) {
  const id = String(postId || "").trim();
  if (!id) return null;
  for (const key of Object.keys(COMMUNITY_POSTS)) {
    const list = COMMUNITY_POSTS[key] || [];
    const found = list.find((x) => String(x?.id || "") === id);
    if (found) return found;
  }
  return null;
}

function patchCommunityPostById(postId, patch = {}, options = {}) {
  const id = String(postId || "").trim();
  if (!id) return;
  for (const key of Object.keys(COMMUNITY_POSTS)) {
    const list = COMMUNITY_POSTS[key] || [];
    const idx = list.findIndex((x) => String(x?.id || "") === id);
    if (idx < 0) continue;
    list[idx] = { ...list[idx], ...patch };
  }
  if (options?.persist !== false) {
    persistCommunityPostToCache(id, patch);
  }
}

async function loadCommunityPostDetail(postId, options = {}) {
  const id = String(postId || "").trim();
  if (!id) return null;
  const viewerId = String(uiState.currentUserId || "").trim();
  const suffix = viewerId ? `&viewerId=${encodeURIComponent(viewerId)}` : "";
  const data = await apiGetJson(`/community/posts/detail?postId=${encodeURIComponent(id)}${suffix}`);
  const post = normalizeCommunityPostFromApi(data?.post || {});
  const comments = normalizeThreadCommentsFromApi(data?.comments || [], `community_${id}_comment`);
  const commentsCount = Number.isFinite(Number(data?.commentsCount))
    ? Number(data.commentsCount)
    : Number(data?.post?.comments_count || comments.length || 0);
  patchCommunityPostById(id, {
    title: post.title,
    text: post.text,
    likes: post.likes,
    stars: post.stars,
    comments: post.comments,
    mediaUrls: post.mediaUrls,
    story: post.story,
    storyId: post.storyId,
    user: post.user,
    time: post.time
  });
  uiState.communityPostMeta[id] = {
    liked: Boolean(data?.post?.liked_by_me),
    starred: Boolean(data?.post?.favorited_by_me),
    shared: false,
    likes: Number(data?.post?.likes_count || post.likes || 0),
    stars: Number(data?.post?.favorites_count || post.stars || 0),
    shares: Number(data?.post?.shares_count || 0),
    commentsCount,
    comments,
    likePending: false,
    starPending: false,
    commentSubmitting: false,
    commentError: "",
    likingByCommentId: {},
    deletingByCommentId: {},
    submittingReplyByCommentId: {},
    activeReplyCommentId: "",
    replyDraftByCommentId: {}
  };
  persistCommunityPostState(id, {
    liked: uiState.communityPostMeta[id].liked,
    starred: uiState.communityPostMeta[id].starred,
    likes: uiState.communityPostMeta[id].likes,
    stars: uiState.communityPostMeta[id].stars,
    shares: uiState.communityPostMeta[id].shares,
    commentsCount: uiState.communityPostMeta[id].commentsCount,
    comments: comments.slice(0, 60)
  });
  if (!options.silent) render();
  return { post, comments };
}

function getHomeFeed() {
  const f = uiState.filters;
  const filtered = FEED_DATA.filter((item) => {
    const formatMatched = f.format === "全部体裁" ? true : item.format === f.format;
    const themeMatched = f.theme === "全部主题" ? true : item.theme === f.theme;
    const settingMatched = f.setting === "全部设定" ? true : item.setting === f.setting;
    const backgroundMatched = f.background === "全部背景" ? true : item.background === f.background;
    const recommendMatched = f.recommend === "全部推荐" ? true : item.recommend === f.recommend;
    const timeMatched = f.time === "全部时间" ? true : item.time === f.time;
    return formatMatched && themeMatched && settingMatched && backgroundMatched && recommendMatched && timeMatched;
  });

  if (filtered.length > 0) return filtered;

  const key = uiState.lastFilterKey;
  const allLabel = FILTER_CONFIG.find((x) => x.key === key)?.label;
  const selected = f[key];
  if (!key || !selected || selected === allLabel) return FEED_DATA.slice(0, 20);

  return FEED_DATA.filter((item) => item[key] === selected);
}

function getSelectedWorld() {
  if (!FEED_DATA.length) return getDefaultWorldCard();
  if (!uiState.selectedWorldId) return FEED_DATA[0];
  return FEED_DATA.find((x) => x.id === uiState.selectedWorldId) || FEED_DATA[0];
}

function pickDramaWorld(index = 0, offset = 0) {
  if (!FEED_DATA.length) return getDefaultWorldCard();
  const i = (offset + index) % FEED_DATA.length;
  return FEED_DATA[(i + FEED_DATA.length) % FEED_DATA.length] || FEED_DATA[0];
}

function hasWorldCard(worldId = "") {
  return !!(worldId && FEED_DATA.some((x) => x.id === worldId));
}

function resolveDynamicBoundStoryMeta(item = {}) {
  const worldId = String(item?.worldId || item?.storyId || "").trim();
  if (!worldId) return null;
  const world = FEED_DATA.find((x) => String(x?.id || "").trim() === worldId) || null;
  const title = String(
    item?.storyTitle
    || item?.worldTitle
    || world?.title
    || "已绑定故事卡"
  ).trim();
  return {
    worldId,
    title: title || "已绑定故事卡"
  };
}

function getSafeWorldId(preferredId = "", offset = 0) {
  if (preferredId && FEED_DATA.some((x) => x.id === preferredId)) return preferredId;
  return pickDramaWorld(0, offset)?.id || "";
}

function toHandle(name = "") {
  const base = String(name || "user")
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return `@${base || "user"}`;
}

function getAvatarText(name = "") {
  const n = String(name || "").trim();
  return (n || "玩").slice(0, 1);
}

function renderMessageInboxAvatar(item = {}) {
  const name = String(item?.name || "").trim();
  const avatarUrl = String(item?.avatarUrl || "").trim();
  if (avatarUrl) {
    return `<img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(name || "会话头像")}" loading="lazy" />`;
  }
  return escapeHtml(getAvatarText(name));
}

function renderMessageConversationAvatarNode(item = {}, className = "avatar") {
  const worldId = String(item?.worldId || "").trim();
  if (isStoryConversationInboxItem(item) && worldId) {
    return `<div class="${escapeHtml(className)}" data-action="open-world-detail" data-id="${escapeHtml(worldId)}">${renderMessageInboxAvatar(item)}</div>`;
  }
  return `
    <div
      class="${escapeHtml(className)} user-avatar-click"
      data-user="${escapeHtml(String(item?.name || "").trim())}"
      data-user-id="${escapeHtml(String(item?.userId || "").trim())}"
      data-avatar-url="${escapeHtml(String(item?.avatarUrl || "").trim())}"
    >${renderMessageInboxAvatar(item)}</div>
  `;
}

function resolveWorldInboxAvatarByWorldId(worldId = "") {
  const wid = String(worldId || "").trim();
  if (!wid) return "";
  const world = FEED_DATA.find((x) => String(x?.id || "").trim() === wid);
  if (!world) return "";
  const album = normalizeMediaUrls(world?.albumMedia || world?.album_media || world?.mediaUrls || world?.media_urls);
  return String(
    album[0]
    || extractImageUrl(world?.firstImageUrl || world?.first_image_url || world?.coverUrl || world?.cover_url || "")
    || ""
  ).trim();
}

function normalizeStoryInboxItem(item = {}) {
  const next = item && typeof item === "object" ? { ...item } : {};
  const bizType = String(next?.bizType || "").trim().toLowerCase();
  const rawName = String(next?.name || "").trim();
  const previewText = String(next?.preview || "").trim();
  const titleFromPreview = previewText.match(/《([^》]{1,80})》/)?.[1] || "";
  let worldId = String(next?.worldId || "").trim();
  if (!worldId && titleFromPreview) {
    const matched = FEED_DATA.find((x) => String(x?.title || "").trim() === String(titleFromPreview || "").trim());
    worldId = String(matched?.id || "").trim();
  }
  const legacyByName = rawName === "游戏记录" || rawName === "故事会话";
  const legacyByPreview = /继续游玩《[^》]+》/.test(previewText);
  const isStory = bizType === "story" || Boolean(worldId && !String(next?.userId || "").trim()) || legacyByName || legacyByPreview;
  if (!isStory) return next;

  const isLegacyName = legacyByName || !rawName;
  const world = worldId ? FEED_DATA.find((x) => String(x?.id || "").trim() === worldId) : null;
  const finalName = String(
    (isLegacyName ? (world?.title || titleFromPreview) : rawName)
    || world?.title
    || titleFromPreview
    || rawName
    || "故事会话"
  ).trim();
  const finalAvatar = String(
    next?.avatarUrl
    || resolveWorldInboxAvatarByWorldId(worldId)
    || ""
  ).trim();

  next.type = "私聊";
  next.bizType = "story";
  if (worldId) next.worldId = worldId;
  next.name = finalName;
  next.avatarUrl = finalAvatar;
  return next;
}

function normalizeMessageInboxInPlace() {
  if (!Array.isArray(MESSAGE_INBOX) || !MESSAGE_INBOX.length) return false;
  let changed = false;
  for (let i = 0; i < MESSAGE_INBOX.length; i += 1) {
    const current = MESSAGE_INBOX[i];
    const next = normalizeStoryInboxItem(current);
    if (!next || typeof next !== "object") continue;
    const same = (
      String(current?.name || "") === String(next?.name || "")
      && String(current?.avatarUrl || "") === String(next?.avatarUrl || "")
      && String(current?.bizType || "") === String(next?.bizType || "")
      && String(current?.type || "") === String(next?.type || "")
      && String(current?.worldId || "") === String(next?.worldId || "")
    );
    if (same) continue;
    MESSAGE_INBOX[i] = { ...current, ...next };
    changed = true;
  }
  return changed;
}

function canDeleteCommentByCurrentUser(comment = {}) {
  const currentUserId = String(uiState.currentUserId || "").trim();
  const currentProfileName = String(uiState.profile?.name || "").trim().replace(/^@+/, "").toLowerCase();
  const currentProfileTag = String(uiState.profile?.tag || "").trim().replace(/^@+/, "").toLowerCase();
  const currentHandle = String(toHandle(uiState.profile?.name || "") || "").trim().replace(/^@+/, "").toLowerCase();
  const commentUserId = String(comment?.userId || comment?.user_id || "").trim();
  if (currentUserId && commentUserId && commentUserId === currentUserId) return true;
  const commentUserName = String(comment?.user || comment?.user_name || comment?.userName || "")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
  if (!commentUserName) return false;
  return Boolean(
    (currentProfileName && commentUserName === currentProfileName)
    || (currentProfileTag && commentUserName === currentProfileTag)
    || (currentHandle && commentUserName === currentHandle)
  );
}

function getDynamicCommentDraft(postId = uiState.selectedDynamicId) {
  const id = String(postId || "").trim();
  if (!id) return String(uiState.dynamicCommentDraft || "");
  const map = uiState.dynamicCommentDraftByPostId && typeof uiState.dynamicCommentDraftByPostId === "object"
    ? uiState.dynamicCommentDraftByPostId
    : {};
  return String(map[id] ?? uiState.dynamicCommentDraft ?? "");
}

function setDynamicCommentDraft(postId = uiState.selectedDynamicId, value = "") {
  const id = String(postId || "").trim();
  const text = String(value || "");
  if (!uiState.dynamicCommentDraftByPostId || typeof uiState.dynamicCommentDraftByPostId !== "object") {
    uiState.dynamicCommentDraftByPostId = {};
  }
  if (id) uiState.dynamicCommentDraftByPostId[id] = text;
  uiState.dynamicCommentDraft = text;
}

function getCommunityCommentDraft(postId = uiState.selectedCommunityPostId) {
  const id = String(postId || "").trim();
  if (!id) return String(uiState.communityCommentDraft || "");
  const map = uiState.communityCommentDraftByPostId && typeof uiState.communityCommentDraftByPostId === "object"
    ? uiState.communityCommentDraftByPostId
    : {};
  return String(map[id] ?? uiState.communityCommentDraft ?? "");
}

function setCommunityCommentDraft(postId = uiState.selectedCommunityPostId, value = "") {
  const id = String(postId || "").trim();
  const text = String(value || "");
  if (!uiState.communityCommentDraftByPostId || typeof uiState.communityCommentDraftByPostId !== "object") {
    uiState.communityCommentDraftByPostId = {};
  }
  if (id) uiState.communityCommentDraftByPostId[id] = text;
  uiState.communityCommentDraft = text;
}

function getMessageReplyDraft(commentId = uiState.messageReplyTargetId) {
  const id = String(commentId || "").trim();
  if (!id) return String(uiState.messageReplyDraft || "");
  const map = uiState.messageReplyDraftByCommentId && typeof uiState.messageReplyDraftByCommentId === "object"
    ? uiState.messageReplyDraftByCommentId
    : {};
  return String(map[id] ?? uiState.messageReplyDraft ?? "");
}

function setMessageReplyDraft(commentId = uiState.messageReplyTargetId, value = "") {
  const id = String(commentId || "").trim();
  const text = String(value || "");
  if (!uiState.messageReplyDraftByCommentId || typeof uiState.messageReplyDraftByCommentId !== "object") {
    uiState.messageReplyDraftByCommentId = {};
  }
  if (id) uiState.messageReplyDraftByCommentId[id] = text;
  uiState.messageReplyDraft = text;
}

function normalizeThreadCommentNode(raw = {}, fallbackIdPrefix = "comment", fallbackIndex = 0, fallbackParentId = null) {
  const resolvedId = String(raw?.id || `${fallbackIdPrefix}_${fallbackIndex + 1}`).trim();
  const createdAt = raw?.createdAt || raw?.created_at || null;
  const parentCommentId = raw?.parentCommentId || raw?.parent_comment_id || fallbackParentId || null;
  const replies = Array.isArray(raw?.replies) ? raw.replies : [];
  return {
    id: resolvedId,
    userId: String(raw?.userId || raw?.user_id || "").trim(),
    parentCommentId: parentCommentId ? String(parentCommentId) : null,
    user: String(raw?.user || raw?.user_name || raw?.userName || "玩家"),
    text: String(raw?.text || raw?.content || "").trim(),
    likes: Number(raw?.likes || raw?.likes_count || 0),
    likedByMe: Boolean(raw?.likedByMe || raw?.liked_by_me),
    createdAt,
    time: String(raw?.time || formatWorldCommentTime(createdAt || Date.now())),
    replies: replies.map((reply, idx) => normalizeThreadCommentNode(reply, `${resolvedId}_reply`, idx, resolvedId))
  };
}

function normalizeThreadCommentsFromApi(rows = [], prefix = "comment") {
  const list = Array.isArray(rows) ? rows : [];
  return list.map((row, idx) => normalizeThreadCommentNode(row, prefix, idx, null));
}

function findThreadCommentRowInList(comments = [], commentId = "") {
  const id = String(commentId || "").trim();
  if (!id) {
    return {
      row: null,
      parent: null,
      parentList: null,
      index: -1,
      depth: -1,
      rootId: ""
    };
  }
  const walk = (list = [], parent = null, depth = 0, rootId = "") => {
    if (!Array.isArray(list) || !list.length) return null;
    for (let index = 0; index < list.length; index += 1) {
      const row = list[index];
      const currentId = String(row?.id || "").trim();
      const nextRootId = rootId || currentId;
      if (currentId && currentId === id) {
        return {
          row,
          parent,
          parentList: list,
          index,
          depth,
          rootId: nextRootId
        };
      }
      if (Array.isArray(row?.replies) && row.replies.length) {
        const nested = walk(row.replies, row, depth + 1, nextRootId);
        if (nested) return nested;
      }
    }
    return null;
  };
  return walk(Array.isArray(comments) ? comments : [], null, 0, "") || {
    row: null,
    parent: null,
    parentList: null,
    index: -1,
    depth: -1,
    rootId: ""
  };
}

function upsertThreadComment(comments = [], incoming = null, optimisticId = "", fallbackIndex = 0) {
  if (!Array.isArray(comments) || !incoming || typeof incoming !== "object") return false;
  const nextId = String(incoming.id || "").trim();
  if (!nextId) return false;
  const optimistic = String(optimisticId || "").trim();
  const byIdIdx = comments.findIndex((x) => String(x?.id || "") === nextId);
  if (byIdIdx >= 0) {
    comments[byIdIdx] = incoming;
    return true;
  }
  const byOptimisticIdx = optimistic
    ? comments.findIndex((x) => String(x?.id || "") === optimistic)
    : -1;
  if (byOptimisticIdx >= 0) {
    comments[byOptimisticIdx] = incoming;
    return true;
  }
  comments.splice(Math.max(0, fallbackIndex), 0, incoming);
  return true;
}

function upsertThreadReply(replies = [], incoming = null, optimisticId = "") {
  if (!Array.isArray(replies) || !incoming || typeof incoming !== "object") return false;
  const nextId = String(incoming.id || "").trim();
  if (!nextId) return false;
  const optimistic = String(optimisticId || "").trim();
  const byIdIdx = replies.findIndex((x) => String(x?.id || "") === nextId);
  if (byIdIdx >= 0) {
    replies[byIdIdx] = incoming;
    return true;
  }
  const byOptimisticIdx = optimistic
    ? replies.findIndex((x) => String(x?.id || "") === optimistic)
    : -1;
  if (byOptimisticIdx >= 0) {
    replies[byOptimisticIdx] = incoming;
    return true;
  }
  replies.push(incoming);
  return true;
}

function removeThreadCommentById(comments = [], commentId = "") {
  const hit = findThreadCommentRowInList(comments, commentId);
  if (!hit?.row || !Array.isArray(hit.parentList) || hit.index < 0) return null;
  const [removed] = hit.parentList.splice(hit.index, 1);
  return {
    removed,
    parentList: hit.parentList,
    index: hit.index,
    rootId: String(hit.rootId || ""),
    isTopLevel: !hit.parent
  };
}

function restoreRemovedThreadComment(snapshot = null) {
  if (!snapshot || !Array.isArray(snapshot.parentList) || !snapshot.removed) return false;
  const idx = Math.max(0, Math.min(Number(snapshot.index || 0), snapshot.parentList.length));
  snapshot.parentList.splice(idx, 0, snapshot.removed);
  return true;
}

function openThreadReplyEditorForState(state = null, comments = [], targetCommentId = "") {
  if (!state) return null;
  const hit = findThreadCommentRowInList(comments, targetCommentId);
  if (!hit?.row) return null;
  const rootId = String(hit.rootId || hit.row.id || targetCommentId || "").trim();
  const targetId = String(hit.row.id || targetCommentId || "").trim();
  if (!rootId || !targetId) return null;
  state.activeReplyCommentId = rootId;
  state.activeReplyTargetId = targetId;
  if (!String(state.replyDraftByCommentId?.[rootId] || "").trim()) {
    const user = String(hit.row?.user || "玩家").trim();
    state.replyDraftByCommentId[rootId] = user ? `@${user} ` : "";
  }
  return {
    rootId,
    targetId,
    targetUser: String(hit.row?.user || "玩家").trim() || "玩家"
  };
}

function resolveThreadReplySubmitTarget(state = null, comments = [], rootCommentId = "") {
  const rootId = String(rootCommentId || "").trim();
  const targetId = String(state?.activeReplyTargetId || rootId).trim();
  const hit = findThreadCommentRowInList(comments, targetId);
  if (hit?.row) return hit;
  return findThreadCommentRowInList(comments, rootId);
}

function readThreadCommentTextById(comments = [], commentId = "") {
  const hit = findThreadCommentRowInList(comments, commentId);
  return String(hit?.row?.text || "").trim();
}

async function copyTextToClipboardBestEffort(text = "") {
  const value = String(text || "").trim();
  if (!value) return false;
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {}
  return false;
}

function renderThreadRepliesRecursive(replies = [], config = {}, depth = 1) {
  if (!Array.isArray(replies) || replies.length === 0) return "";
  const safeDepth = Math.max(1, Math.min(5, Number(depth || 1)));
  const openReplyAction = String(config.openReplyAction || "").trim();
  const likeAction = String(config.likeAction || "").trim();
  const deleteAction = String(config.deleteAction || "").trim();
  const openMenuAction = String(config.openMenuAction || "").trim();
  const likingByCommentId = config.likingByCommentId && typeof config.likingByCommentId === "object" ? config.likingByCommentId : {};
  const deletingByCommentId = config.deletingByCommentId && typeof config.deletingByCommentId === "object" ? config.deletingByCommentId : {};
  const activeReplyTargetId = String(config.activeReplyTargetId || "").trim();
  return `
    <div class="world-reply-list depth-${safeDepth}">
      ${replies.map((r) => {
    const rid = String(r?.id || "").trim();
    const isTarget = rid && activeReplyTargetId === rid;
    return `
          <div class="world-reply-item depth-${safeDepth}">
            <button
              class="avatar world-reply-avatar user-link user-avatar-click"
              data-action="open-user-modal"
              data-user="${escapeHtml(r.user || "玩家")}"
              data-user-id="${escapeHtml(String(r.userId || ""))}"
              data-avatar-url="${escapeHtml(String(r.avatarUrl || ""))}"
            >${escapeHtml(getAvatarText(String(r.user || "玩家")))}</button>
            <div class="world-reply-main ${isTarget ? "is-reply-target" : ""}">
              <div class="world-reply-head">
                <div class="meta" data-action="${openReplyAction}" data-id="${escapeHtml(rid)}">${escapeHtml(r.user || "玩家")} · ${escapeHtml(formatWorldCommentTime(r.createdAt || r.time || ""))}</div>
                <button class="world-comment-more-btn" data-action="${openMenuAction}" data-id="${escapeHtml(rid)}" aria-label="更多操作">⋯</button>
              </div>
              <p data-action="${openReplyAction}" data-id="${escapeHtml(rid)}">${escapeHtml(r.text || "")}</p>
              <div class="world-comment-actions compact">
                <button
                  class="world-comment-like-btn ${r.likedByMe ? "active" : ""}"
                  data-action="${likeAction}"
                  data-id="${escapeHtml(rid)}"
                  data-liked="${r.likedByMe ? "1" : "0"}"
                  ${likingByCommentId?.[rid] ? "disabled" : ""}
                >♡ ${formatMetricCount(r.likes || 0)}</button>
                <button class="world-comment-reply-btn" data-action="${openReplyAction}" data-id="${escapeHtml(rid)}">回复</button>
                ${canDeleteCommentByCurrentUser(r)
        ? `<button class="world-comment-delete-btn small" data-action="${deleteAction}" data-id="${escapeHtml(rid)}" ${deletingByCommentId?.[rid] ? "disabled" : ""}>${deletingByCommentId?.[rid] ? "删除中..." : "删除"}</button>`
        : ""}
              </div>
              ${renderThreadRepliesRecursive(r.replies || [], config, safeDepth + 1)}
            </div>
          </div>
        `;
  }).join("")}
    </div>
  `;
}

function renderThreadCommentActionSheet(comments = [], config = {}) {
  const activeId = String(config.activeActionCommentId || "").trim();
  if (!activeId) return "";
  const hit = findThreadCommentRowInList(comments, activeId);
  if (!hit?.row) return "";
  const replyAction = String(config.replyFromSheetAction || "").trim();
  const copyAction = String(config.copyFromSheetAction || "").trim();
  const reportAction = String(config.reportFromSheetAction || "").trim();
  const deleteAction = String(config.deleteAction || "").trim();
  const closeAction = String(config.closeSheetAction || "").trim();
  const canDelete = canDeleteCommentByCurrentUser(hit.row);
  return `
    <div class="comment-action-sheet-mask" data-action="${closeAction}">
      <div class="comment-action-sheet" data-action="noop">
        <button class="comment-action-sheet-item" data-action="${replyAction}" data-id="${escapeHtml(activeId)}">回复</button>
        <button class="comment-action-sheet-item" data-action="${copyAction}" data-id="${escapeHtml(activeId)}">复制</button>
        ${!canDelete && reportAction ? `<button class="comment-action-sheet-item" data-action="${reportAction}" data-id="${escapeHtml(activeId)}">举报</button>` : ""}
        ${canDelete ? `<button class="comment-action-sheet-item danger" data-action="${deleteAction}" data-id="${escapeHtml(activeId)}">删除</button>` : ""}
        <button class="comment-action-sheet-item cancel" data-action="${closeAction}">取消</button>
      </div>
    </div>
  `;
}

function renderThreadCommentListWithControls({
  comments = [],
  state = null,
  openReplyAction = "",
  likeAction = "",
  deleteAction = "",
  openMenuAction = "",
  replyFromSheetAction = "",
  copyFromSheetAction = "",
  reportFromSheetAction = "",
  closeSheetAction = "",
  replyDraftField = "",
  replyCancelAction = "",
  replySubmitAction = ""
} = {}) {
  const safeComments = Array.isArray(comments) ? comments : [];
  if (!safeComments.length) {
    return `<p class="world-comments-empty">还没有评论，来抢首评吧。</p>`;
  }
  const list = safeComments
    .map((c) => {
      const cid = String(c?.id || "").trim();
      const isReplying = String(state?.activeReplyCommentId || "") === cid;
      const targetId = String(state?.activeReplyTargetId || cid).trim();
      const targetHit = findThreadCommentRowInList(safeComments, targetId);
      const replyTargetUser = String(targetHit?.row?.user || c?.user || "玩家");
      return `
        <article class="world-comment-item ${isReplying ? "is-replying" : ""}">
          <button
            class="avatar user-link user-avatar-click"
            data-action="open-user-modal"
            data-user="${escapeHtml(c.user || "玩家")}"
            data-user-id="${escapeHtml(String(c.userId || ""))}"
            data-avatar-url="${escapeHtml(String(c.avatarUrl || ""))}"
          >${escapeHtml(getAvatarText(String(c.user || "玩家")))}</button>
          <div class="world-comment-body">
            <div class="world-comment-head">
              <div class="meta" data-action="${openReplyAction}" data-id="${escapeHtml(cid)}">${escapeHtml(c.user || "玩家")} · ${escapeHtml(formatWorldCommentTime(c.createdAt || c.time || ""))}</div>
              <button class="world-comment-more-btn" data-action="${openMenuAction}" data-id="${escapeHtml(cid)}" aria-label="更多操作">⋯</button>
            </div>
            <p class="world-comment-text" data-action="${openReplyAction}" data-id="${escapeHtml(cid)}">${escapeHtml(c.text || "")}</p>
            <div class="world-comment-actions">
              <button
                class="world-comment-like-btn ${c.likedByMe ? "active" : ""}"
                data-action="${likeAction}"
                data-id="${escapeHtml(cid)}"
                data-liked="${c.likedByMe ? "1" : "0"}"
                ${state?.likingByCommentId?.[cid] ? "disabled" : ""}
              >♡ ${formatMetricCount(c.likes || 0)}</button>
              <button class="world-comment-reply-btn" data-action="${openReplyAction}" data-id="${escapeHtml(cid)}">回复</button>
              ${canDeleteCommentByCurrentUser(c)
                ? `<button class="world-comment-delete-btn" data-action="${deleteAction}" data-id="${escapeHtml(cid)}" ${state?.deletingByCommentId?.[cid] ? "disabled" : ""}>${state?.deletingByCommentId?.[cid] ? "删除中..." : "删除"}</button>`
                : ""}
            </div>
            ${renderThreadRepliesRecursive(c.replies || [], {
              openReplyAction,
              likeAction,
              deleteAction,
              openMenuAction,
              likingByCommentId: state?.likingByCommentId || {},
              deletingByCommentId: state?.deletingByCommentId || {},
              activeReplyTargetId: state?.activeReplyTargetId || ""
            })}
            ${
              isReplying
                ? `
              <div class="world-reply-editor">
                <input data-field="${replyDraftField}" data-comment-id="${escapeHtml(cid)}" value="${escapeHtml(String(state?.replyDraftByCommentId?.[cid] || ""))}" placeholder="回复 ${escapeHtml(replyTargetUser)}..." />
                <button class="ghost" data-action="${replyCancelAction}">取消</button>
                <button class="primary" data-action="${replySubmitAction}" data-id="${escapeHtml(cid)}" ${state?.submittingReplyByCommentId?.[cid] ? "disabled" : ""}>${state?.submittingReplyByCommentId?.[cid] ? "发送中..." : "发送"}</button>
              </div>
            `
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
  return `
    ${list}
    ${renderThreadCommentActionSheet(safeComments, {
      activeActionCommentId: String(state?.activeActionCommentId || ""),
      replyFromSheetAction,
      copyFromSheetAction,
      reportFromSheetAction,
      deleteAction,
      closeSheetAction
    })}
  `;
}

function renderUnifiedCommentComposer({
  field,
  value = "",
  submitAction,
  placeholder = "说点什么...",
  submitting = false,
  containerClass = "",
  inputAttrs = "",
  submitAttrs = ""
} = {}) {
  const currentUserAvatar = getAvatarText(uiState.profile?.name || "我");
  const avatarAction = uiState.isLoggedIn ? "open-self-profile" : "open-login-modal";
  const currentUserName = String(uiState.profile?.name || "我").trim();
  const currentUserId = String(uiState.profile?.id || uiState.currentUserId || "").trim();
  const currentUserAvatarUrl = resolveAvatarUrlByIdentity(currentUserName, currentUserId);
  const normalizedContainerClass = String(containerClass || "").trim();
  const normalizedInputAttrs = String(inputAttrs || "").trim();
  const normalizedSubmitAttrs = String(submitAttrs || "").trim();
  return `
    <div class="world-comment-input${normalizedContainerClass ? ` ${normalizedContainerClass}` : ""}">
      <button
        class="avatar user-link user-avatar-click world-comment-self-avatar"
        data-action="${avatarAction}"
        data-user="${escapeHtml(currentUserName)}"
        data-user-id="${escapeHtml(currentUserId)}"
        data-avatar-url="${escapeHtml(currentUserAvatarUrl || "")}"
      >${escapeHtml(currentUserAvatar)}</button>
      <input data-field="${escapeHtml(field || "")}" value="${escapeHtml(value)}" placeholder="${escapeHtml(placeholder)}" ${normalizedInputAttrs} />
      <button class="world-comment-send-btn" data-action="${escapeHtml(submitAction || "")}" ${normalizedSubmitAttrs} ${submitting ? "disabled" : ""}>${submitting ? "发送中..." : "发送"}</button>
    </div>
  `;
}

function findRelationUserByIdentity(name = "", authorId = "") {
  const safeAuthorId = String(authorId || "").trim();
  if (!Array.isArray(ME_RELATION_USERS)) return null;
  if (safeAuthorId) {
    const hitById = ME_RELATION_USERS.find((x) => String(x?.id || "").trim() === safeAuthorId);
    if (hitById) return hitById;
  }
  const needle = normalizeUserName(name);
  if (!needle) return null;
  return ME_RELATION_USERS.find((x) => {
    const n1 = normalizeUserName(x?.name || "");
    const n2 = normalizeUserName(x?.handle || "");
    return n1 === needle || n2 === needle;
  }) || null;
}

function syncRelationStateLocal(targetUserId = "", followed = false, profileHint = null) {
  const tid = String(targetUserId || "").trim();
  if (!tid) return;
  const nextFollowed = Boolean(followed);
  uiState.meRelationFollowing[tid] = nextFollowed;
  const idx = ME_RELATION_USERS.findIndex((x) => String(x?.id || "").trim() === tid);
  if (idx >= 0) {
    const item = ME_RELATION_USERS[idx];
    const isFan = Boolean(item?.isFan || item?.tab === "粉丝" || item?.tab === "朋友");
    item.isFollowing = nextFollowed;
    if (nextFollowed) {
      item.tab = isFan ? "朋友" : "关注";
    } else if (isFan) {
      item.tab = "粉丝";
    } else {
      ME_RELATION_USERS.splice(idx, 1);
    }
    return;
  }
  if (!nextFollowed) return;
  const source = profileHint || AUTHOR_DIRECTORY[tid] || {};
  const name = String(source?.name || "").trim() || "Drama 用户";
  ME_RELATION_USERS.unshift({
    id: tid,
    name,
    handle: String(source?.handle || toHandle(name)),
    intro: String(source?.bio || "Drama 玩家"),
    fans: String(
      source?.stats?.fansCount != null || source?.stats?.fans != null
        ? formatMetricCount(source.stats.fansCount ?? source.stats.fans ?? 0)
        : "0"
    ),
    tab: "关注",
    isFan: false,
    isFollowing: true
  });
}

function resolveRelationUserIdByName(name = "") {
  const hit = findRelationUserByIdentity(name, "");
  const id = String(hit?.id || "").trim();
  return isUuid(id) ? id : "";
}

function buildAuthorProfileByName(name = "", authorId = "") {
  const safeName = String(name || "").trim() || "Drama 用户";
  const works = FEED_DATA.filter((x) => x.author === safeName);
  const safeAuthorId = String(authorId || "").trim();
  const byId = safeAuthorId ? AUTHOR_DIRECTORY[safeAuthorId] : null;
  const needle = normalizeUserName(safeName);
  const byName = Object.values(AUTHOR_DIRECTORY).find((x) => {
    const n1 = normalizeUserName(x?.name || "");
    const n2 = normalizeUserName(x?.handle || "");
    return Boolean(needle && (n1 === needle || n2 === needle));
  }) || null;
  const relationUser = findRelationUserByIdentity(safeName, safeAuthorId);
  const resolved = byId || byName || null;
  const resolvedId = String(resolved?.id || safeAuthorId || relationUser?.id || "").trim();
  const isFollowedFromRelation = Boolean(
    (resolvedId && uiState.meRelationFollowing?.[resolvedId])
    || relationUser?.isFollowing
    || relationUser?.tab === "关注"
    || relationUser?.tab === "朋友"
  );
  const stats = resolved?.stats || {};
  const relationFans = relationUser?.fans ?? "0";
  const followsFromStats = stats.followsCount ?? stats.follows ?? 0;
  const worksFromStats = stats.worksCount ?? works.length;
  const hasResolvedFollowFlag = Boolean(
    resolved && Object.prototype.hasOwnProperty.call(resolved, "followedByMe")
  );
  return {
    id: resolvedId,
    name: resolved?.name || safeName,
    handle: resolved?.handle || toHandle(safeName),
    bio: resolved?.bio || works[0]?.tags?.join(" · ") || "热爱创作与互动剧情",
    avatarUrl: String(resolved?.avatarUrl || resolved?.avatar_url || relationUser?.avatarUrl || "").trim(),
    coverUrl: String(resolved?.coverUrl || resolved?.cover_url || "").trim(),
    gender: resolved?.gender || "保密",
    birthday: resolved?.birthday || "",
    isFollowedByMe: hasResolvedFollowFlag ? Boolean(resolved?.followedByMe) : isFollowedFromRelation,
    stats: {
      fans: String(
        stats.fansCount != null || stats.fans != null
          ? formatMetricCount(stats.fansCount ?? stats.fans ?? 0)
          : relationFans
      ),
      follows: formatMetricCount(followsFromStats),
      works: formatMetricCount(worksFromStats)
    },
    likes: [],
    favorites: []
  };
}

function resolveAvatarUrlByIdentity(name = "", userId = "") {
  const uid = String(userId || "").trim();
  if (uid && uiState.currentUserId && uid === uiState.currentUserId) {
    const ownAvatar = String(uiState.profile?.avatarUrl || "").trim();
    if (ownAvatar) return ownAvatar;
  }
  if (uid && AUTHOR_DIRECTORY[uid]) {
    const byId = String(AUTHOR_DIRECTORY[uid]?.avatarUrl || AUTHOR_DIRECTORY[uid]?.avatar_url || "").trim();
    if (byId) return byId;
  }
  const profile = buildAuthorProfileByName(name, uid);
  return String(profile?.avatarUrl || "").trim();
}

function hydrateAvatarNodes() {
  const nodes = document.querySelectorAll(".user-avatar-click, .dm-modern-avatar, .dm-avatar, .user-profile-avatar, .xh-avatar-btn.logged");
  nodes.forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    if (node.querySelector("img")) return;
    const explicitAvatar = String(node.getAttribute("data-avatar-url") || "").trim();
    const userId = resolveUserIdFromNode(node);
    const userName = resolveUserNameFromNode(node);
    const avatarUrl = explicitAvatar || resolveAvatarUrlByIdentity(userName, userId);
    if (!avatarUrl) return;
    node.style.backgroundImage = `url('${avatarUrl.replace(/'/g, "%27")}')`;
    node.style.backgroundSize = "cover";
    node.style.backgroundPosition = "center";
    node.style.color = "transparent";
  });
}

function getModalProfileWorks(profile) {
  const name = String(profile?.name || "").trim();
  const works = FEED_DATA.filter((x) => x.author === name).slice(0, 24);
  return works.map((x) => ({
    id: x.id,
    title: x.title,
    subtitle: `${x.theme} · ${x.background}`,
    summary: `收藏 ${x.star} · 点赞 ${x.like}`,
    draft: false
  }));
}

function resolveUserNameFromNode(node) {
  if (!node) return "";
  const own = node.getAttribute?.("data-user");
  if (own) return own.trim();
  const ownAlt = node.getAttribute?.("data-name");
  if (ownAlt) return ownAlt.trim();

  const article = node.closest?.("article, .msg-thread-item, .dynamic-card, .dynamic-detail-card, .community-post-card, .community-post-detail, .msg-comment-item");
  if (article) {
    const marked = article.getAttribute("data-user");
    if (marked) return marked.trim();
    const candidates = [
      article.querySelector(".dynamic-user strong"),
      article.querySelector(".msg-thread-copy strong"),
      article.querySelector(".msg-notice-copy h4"),
      article.querySelector(".user-profile-meta h2"),
      article.querySelector(".copy strong"),
      article.querySelector("header strong"),
      article.querySelector("h4"),
      article.querySelector(".copy h4")
    ];
    for (const el of candidates) {
      const txt = String(el?.textContent || "").trim();
      if (txt) return txt;
    }
  }
  return "";
}

function openAuthorProfileByName(name = "", preferredAuthorId = "") {
  const resolved = String(name || "").trim();
  if (!resolved) {
    if (!uiState.isLoggedIn) {
      setPostLoginRedirectHash(window.location.hash || "#/theater/home");
      window.location.hash = "#/auth/login";
      return;
    }
    if (window.location.hash !== "#/me/home") window.location.hash = "#/me/home";
    else render();
    return;
  }
  if (uiState.isLoggedIn && resolved === uiState.profile.name) {
    uiState.meViewedUserId = "";
    uiState.meViewedUserName = "";
    persistViewedProfile();
    if (window.location.hash !== "#/me/home") window.location.hash = "#/me/home";
    else render();
    return;
  }
  const preferredId = String(preferredAuthorId || "").trim();
  const resolvedAuthorId = (isUuid(preferredId) ? preferredId : "")
    || resolveAuthorIdByName(resolved)
    || resolveRelationUserIdByName(resolved)
    || resolveAuthUserIdByAlias(resolved);
  uiState.meViewedUserId = resolvedAuthorId;
  uiState.meViewedUserName = resolved;
  persistViewedProfile();
  uiState.modalProfile = buildAuthorProfileByName(resolved, resolvedAuthorId);
  uiState.isFollowingAuthor = Boolean(uiState.modalProfile?.isFollowedByMe);
  if (!resolvedAuthorId && uiState.isLoggedIn) {
    void resolveAuthorIdForAction({ name: resolved, handle: uiState.modalProfile?.handle || "" })
      .then((resolvedId) => {
        if (!isUuid(resolvedId)) return;
        if (normalizeUserName(uiState.meViewedUserName || "") !== normalizeUserName(resolved)) return;
        uiState.meViewedUserId = resolvedId;
        if (uiState.modalProfile && !uiState.modalProfile.id) uiState.modalProfile.id = resolvedId;
        persistViewedProfile();
        render();
      })
      .catch(() => {});
  }
  uiState.userModalTab = "works";
  if (window.location.hash !== "#/me/home") window.location.hash = "#/me/home";
  else render();
}

function hashText(text) {
  let h = 0;
  const src = String(text || "");
  for (let i = 0; i < src.length; i += 1) {
    h = (h * 31 + src.charCodeAt(i)) >>> 0;
  }
  return h;
}

function parseBoolFlag(value, fallback = false) {
  if (typeof value === "boolean") return value;
  const text = String(value || "").trim().toLowerCase();
  if (!text) return fallback;
  if (["1", "true", "yes", "on", "y"].includes(text)) return true;
  if (["0", "false", "no", "off", "n"].includes(text)) return false;
  return fallback;
}

function getWorldProfile(world = getSelectedWorld()) {
  const w = world || FEED_DATA[0];
  const preset = TEST_WORLD_PROFILES[w?.id];
  if (preset) return preset;
  const chapter = String(w?.chapter || w?.chapterLabel || "").trim();
  const mainQuest = String(w?.mainQuest || w?.main_quest || "").trim();
  const npc = String(w?.npc || w?.keyNpc || w?.key_npc || "").trim();
  const clues = String(w?.clues || w?.keyClues || w?.key_clues || "").trim();
  const openingLine = String(w?.openingLine || w?.opening_line || "").trim();
  const openingLineAiAssist = parseBoolFlag(
    w?.openingLineAiAssist
    ?? w?.opening_line_ai_assist
    ?? w?.openingLineUseAi
    ?? w?.opening_line_use_ai,
    false
  );
  const openingSummary = String(w?.openingSummary || w?.opening_summary || "").trim();
  const overview = String(w?.overview || "").trim();
  const summary = String(w?.summary || "").trim();
  if (chapter || mainQuest || npc || clues || openingLine || openingSummary || overview || summary) {
    return {
      chapter: chapter || "序幕",
      hint: String(w?.playHook || w?.play_hook || `先围绕“${w?.theme || "核心主题"}”做小步试探，再决定是否强推进主线。`),
      mainQuest: mainQuest || `推进《${w?.title || "当前世界"}》主线并锁定关键胜负手`,
      npc: npc || "关键角色（待接触）",
      clues: clues || "",
      openingLine,
      openingLineAiAssist,
      statline: String(w?.statline || `世界热度 ${80 + (hashText(w?.id) % 18)} · 连载中 · ${((4 + (hashText(w?.title) % 80)) / 10).toFixed(1)}万人在追`),
      intro: [summary, overview].filter(Boolean),
      opening: [openingLine, openingSummary].filter(Boolean)
    };
  }
  return {
    chapter: "序幕",
    hint: `先围绕“${w?.theme || "核心主题"}”做小步试探，再决定是否强推进主线。`,
    mainQuest: `推进《${w?.title || "当前世界"}》主线并锁定关键胜负手`,
    npc: "关键角色（待接触）",
    clues: "",
    openingLine: "",
    openingLineAiAssist: false,
    statline: `世界热度 ${80 + (hashText(w?.id) % 18)} · 连载中 · ${((4 + (hashText(w?.title) % 80)) / 10).toFixed(1)}万人在追`,
    intro: [
      `${w?.title || "这个世界"}已经进入高压阶段，任何行动都会影响后续关系与资源走向。`,
      `建议先建立稳定的信息面，再执行高风险策略。你可以通过复盘动作链来逼近最优结局。`
    ],
    opening: [
      "你刚抵达关键场景，系统提示本回合将决定后续三幕节奏。",
      "周围信息看似碎片化，但其中至少有一条线索能直接改写主线分支。"
    ]
  };
}

function getWorldScoreBoard(world = getSelectedWorld()) {
  const seed = hashText(world?.id || "world");
  return {
    tension: 78 + (seed % 18),
    strategy: 72 + (Math.floor(seed / 17) % 22),
    friendly: 64 + (Math.floor(seed / 31) % 26)
  };
}

function getProfileOpeningEntries(profile) {
  const lines = Array.isArray(profile?.opening) && profile.opening.length ? profile.opening : PLAY_INITIAL_ENTRIES.map((x) => x.text);
  return lines
    .map((text) => String(text || "").trim())
    .filter(Boolean)
    .map((text) => ({ type: "narrator", text }));
}

function getPlayIdeaPool(world = getSelectedWorld()) {
  const profile = getWorldProfile(world);
  const npcName = String(profile.npc || "").split("（")[0].trim() || "关键角色";
  const custom = [
    "先确认对方当前态度与边界",
    `尝试和${npcName}建立最小信任交换`,
    `围绕“${String(profile.mainQuest || "主线目标").slice(0, 14)}”推进一步`,
    `先做低风险试探，再决定是否公开表态`
  ];
  const merged = [...custom, ...PLAY_IDEA_SUGGESTIONS];
  return [...new Set(merged)];
}

function inferCardTypeByWorld(world = getSelectedWorld(), profile = getWorldProfile(world)) {
  const explicit = String(
    world?.cardType
    || world?.card_type
    || profile?.cardType
    || profile?.card_type
    || ""
  ).toLowerCase().trim();
  if (explicit === "world" || explicit === "story" || explicit === "character") return explicit;

  const id = String(world?.id || "");
  const bag = `${world?.title || ""} ${profile?.chapter || ""} ${profile?.mainQuest || ""}`.toLowerCase();
  if (id.startsWith("character_") || /角色卡|虚拟角色|虚拟人物|角色扮演|陪伴|聊天|恋爱模拟/.test(bag)) return "character";
  if (id.startsWith("test_world_")) return "story";
  return "world";
}

function modeByCardType(cardType = "world") {
  if (cardType === "character") return "virtual_character";
  if (cardType === "story") return "short_narrative";
  return "long_narrative";
}

function sanitizeStreamingDelta(text) {
  return String(text || "")
    .replace(/(?:【\s*)?(?:承接|结果|抛球给用户|抛球给用户)\s*】?/g, "")
    .replace(/<\/?NARRATIVE_BLOCK>?/gi, "")
    .replace(/<\/?JSON_BLOCK>?/gi, "")
    .replace(/<\/?[A-Z_]{2,64}$/g, "")
    .replace(/【[^】\n]{0,8}$/g, "");
}

function buildStoryContext(world = getSelectedWorld()) {
  const selected = world || getSelectedWorld();
  const profile = getWorldProfile(selected);
  const cardType = inferCardTypeByWorld(selected, profile);
  const mode = modeByCardType(cardType);
  return {
    card_type: cardType,
    mode,
    worldId: selected?.id || "",
    title: selected?.title || "",
    theme: selected?.theme || "",
    format: selected?.format || "",
    chapter: profile?.chapter || "",
    mainQuest: profile?.mainQuest || "",
    npc: profile?.npc || "",
    opening_line: String(selected?.opening_line || selected?.openingLine || profile?.opening_line || profile?.openingLine || profile?.opening?.[0] || "").trim(),
    opening_line_ai_assist: parseBoolFlag(
      selected?.opening_line_ai_assist
      ?? selected?.openingLineAiAssist
      ?? selected?.opening_line_use_ai
      ?? selected?.openingLineUseAi
      ?? profile?.openingLineAiAssist,
      false
    ),
    opening_anchor: String(selected?.opening_anchor || selected?.openingAnchor || profile?.opening_anchor || profile?.openingAnchor || "").trim(),
    hint: profile?.hint || "",
    intro: Array.isArray(profile?.intro) ? profile.intro : [],
    opening: Array.isArray(profile?.opening) ? profile.opening : []
  };
}

function getHotSearchBatch(cursor = uiState.hotSearchCursor) {
  if (!HOT_SEARCH_TERMS.length) return [];
  const size = 6;
  const start = (cursor * size) % HOT_SEARCH_TERMS.length;
  const looped = [...HOT_SEARCH_TERMS, ...HOT_SEARCH_TERMS];
  return looped.slice(start, start + size);
}

function toNumeric(text) {
  return Number.parseFloat(String(text).replace(/,/g, "").replace("w", "")) || 0;
}

function searchFeed(query, limit = 40, sort = "相关度") {
  const q = query.trim().toLowerCase();
  const tokens = q.split(/\s+/).filter(Boolean);
  const hasQuery = tokens.length > 0;
  const maxId = FEED_DATA.length || 1;

  const scored = FEED_DATA.map((item) => {
    const title = item.title.toLowerCase();
    const author = item.author.toLowerCase();
    const tags = item.tags.join(" ").toLowerCase();
    const meta = `${item.format} ${item.theme} ${item.setting} ${item.background} ${item.recommend} ${item.time}`.toLowerCase();
    const bag = `${title} ${author} ${tags} ${meta}`;
    const heat = toNumeric(item.heat);
    const like = toNumeric(item.like);
    const star = toNumeric(item.star);
    const comment = toNumeric(item.comment);
    const idNum = hashText(item.id || "") || 1;

    let exact = 0;
    let tokenHit = 0;
    if (hasQuery && bag.includes(q)) exact += 1;
    if (hasQuery && title.includes(q)) exact += 2;
    if (hasQuery && author.includes(q)) exact += 1.2;

    tokens.forEach((tk) => {
      if (title.includes(tk)) tokenHit += 1.8;
      if (tags.includes(tk)) tokenHit += 1.2;
      if (author.includes(tk)) tokenHit += 1;
      if (meta.includes(tk)) tokenHit += 0.8;
    });

    const tokenCoverage = hasQuery ? tokenHit / Math.max(tokens.length, 1) : 0;
    const relevance = hasQuery ? exact * 65 + tokenHit * 22 + tokenCoverage * 18 : 0;
    const popularity = heat * 34 + like * 0.012 + star * 0.02 + comment * 0.05;
    const freshness = (idNum / maxId) * 100;

    const blended = hasQuery ? relevance * 0.74 + popularity * 0.2 + freshness * 0.06 : popularity * 0.72 + freshness * 0.28;
    return { item, relevance, popularity, freshness, blended };
  });

  const filtered = hasQuery ? scored.filter((x) => x.relevance > 0) : scored;
  const sorted = filtered.sort((a, b) => {
    if (sort === "热度") return b.popularity - a.popularity || b.relevance - a.relevance;
    if (sort === "最新") return b.freshness - a.freshness || b.relevance - a.relevance;
    return b.blended - a.blended;
  });

  return sorted.slice(0, limit).map((x) => x.item);
}

function getAuthorMatches(items, query) {
  const map = new Map();
  items.forEach((item) => {
    const prev = map.get(item.author) || {
      id: String(item?.authorId || "").trim(),
      name: item.author,
      count: 0,
      heat: 0
    };
    if (!prev.id && item?.authorId) prev.id = String(item.authorId).trim();
    prev.count += 1;
    prev.heat += Number.parseFloat(item.heat.replace("w", "")) || 0;
    map.set(item.author, prev);
  });
  const arr = [...map.values()].sort((a, b) => b.count - a.count || b.heat - a.heat);
  if (!query.trim()) {
    return arr.slice(0, 12).map((x) => ({
      ...x,
      id: isUuid(x.id) ? x.id : "",
      heat: `${x.heat.toFixed(1)}w`
    }));
  }
  return arr.slice(0, 12).map((x) => ({
    ...x,
    id: isUuid(x.id) ? x.id : "",
    heat: `${x.heat.toFixed(1)}w`
  }));
}

function getTopicMatches(items, query) {
  const map = new Map();
  items.forEach((item) => {
    item.tags.forEach((tag) => {
      map.set(tag, (map.get(tag) || 0) + 1);
    });
  });
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag);
  if (sorted.length) return sorted.slice(0, 16);
  return query.trim() ? [query.trim()] : ["悬疑推理", "古风", "逆袭爽文", "校园", "系统", "都市", "脑洞", "情感"];
}

function searchCommunityList(query, limit = 80, sort = "相关度") {
  const q = query.trim().toLowerCase();
  const tokens = q.split(/\s+/).filter(Boolean);
  const hasQuery = tokens.length > 0;
  const scored = COMMUNITY_LIST.map((item) => {
    const name = item.name.toLowerCase();
    const desc = item.desc.toLowerCase();
    const tags = (item.tags || []).join(" ").toLowerCase();
    const bag = `${name} ${desc} ${tags}`;
    const members = item.memberCount || toNumeric(item.members);
    const freshness = Math.max(0, 100 - Math.min(item.updatedHours || 999, 240) / 2.4);

    let exact = 0;
    let tokenHit = 0;
    if (hasQuery && bag.includes(q)) exact += 1;
    if (hasQuery && name.includes(q)) exact += 2;
    tokens.forEach((tk) => {
      if (name.includes(tk)) tokenHit += 1.8;
      if (tags.includes(tk)) tokenHit += 1.2;
      if (desc.includes(tk)) tokenHit += 1;
    });
    const relevance = hasQuery ? exact * 68 + tokenHit * 24 : 0;
    const popularity = members * 0.002 + toNumeric(item.online);
    const blended = hasQuery ? relevance * 0.76 + popularity * 0.18 + freshness * 0.06 : popularity * 0.75 + freshness * 0.25;
    return { item, relevance, popularity, freshness, blended };
  });

  const filtered = hasQuery ? scored.filter((x) => x.relevance > 0) : scored;
  const sorted = filtered.sort((a, b) => {
    if (sort === "热度") return b.popularity - a.popularity || b.relevance - a.relevance;
    if (sort === "最新") return b.freshness - a.freshness || b.relevance - a.relevance;
    return b.blended - a.blended;
  });
  return sorted.slice(0, limit).map((x) => x.item);
}

function openUnifiedSearch(scope = "all") {
  const normalizedScope = ["all", "community", "messages"].includes(scope) ? scope : "all";
  const currentPath = getCurrentRoutePath();
  const inSearchFlow = currentPath === "#/search" || currentPath === "#/search/results" || currentPath === "#/community/search";
  if (!inSearchFlow) {
    uiState.searchOriginRoute = window.location.hash || "#/theater/home";
  }
  uiState.unifiedSearchScope = normalizedScope;
  uiState.searchPanelOpen = false;
  uiState.communitySearchPanelOpen = false;
  uiState.messageSearchOpen = false;
  uiState.searchAutoFocus = true;
  const origin = (uiState.searchOriginRoute || "").trim();
  const query = (uiState.searchQuery || "").trim();
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (origin) params.set("from", origin);
  if (normalizedScope !== "all") params.set("scope", normalizedScope);
  const nextHash = `#/search${params.toString() ? `?${params.toString()}` : ""}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
    return;
  }
  render();
}

function getHashQueryValue(key = "") {
  const targetKey = String(key || "").trim();
  if (!targetKey) return "";
  try {
    const rawHash = String(window.location.hash || "");
    const qIndex = rawHash.indexOf("?");
    if (qIndex < 0) return "";
    const params = new URLSearchParams(rawHash.slice(qIndex + 1));
    return String(params.get(targetKey) || "").trim();
  } catch {
    return "";
  }
}

function getMessageConversationIdFromHash() {
  const cid = getHashQueryValue("cid");
  return isUuid(cid) ? cid : "";
}

function buildMessageThreadHash(conversationId = "") {
  const cid = String(conversationId || "").trim();
  if (!isUuid(cid)) return "#/messages/thread";
  return `#/messages/thread?cid=${encodeURIComponent(cid)}`;
}

function syncSearchStateFromHash(currentRoute = getCurrentRoutePath()) {
  const route = String(currentRoute || "").trim();
  if (route !== "#/search" && route !== "#/search/results" && route !== "#/community/search") return;
  const q = getHashQueryValue("q");
  const from = getHashQueryValue("from");
  const scopeFromHash = getHashQueryValue("scope");
  if (q) {
    uiState.searchQuery = q;
    uiState.communitySearchQuery = q;
  }
  if (from) {
    uiState.searchOriginRoute = from;
  }
  if (["all", "community", "messages"].includes(scopeFromHash)) {
    uiState.unifiedSearchScope = scopeFromHash;
  }
  if (route === "#/community/search") {
    uiState.unifiedSearchScope = "community";
  }
}

function executeSearch(term, options = {}) {
  const q = term.trim();
  if (!q) return;
  const isCommunitySearchFlow = window.location.hash.startsWith("#/community");
  uiState.searchQuery = q;
  uiState.communitySearchQuery = q;
  uiState.searchPanelOpen = false;
  uiState.communitySearchPanelOpen = false;
  uiState.searchResultTab = "全部";
  uiState.searchSubTab = "综合";
  uiState.searchSort = "相关度";
  uiState.communitySearchTab = "综合";
  uiState.communitySearchSort = "相关度";
  uiState.searchHistory = [q, ...uiState.searchHistory.filter((x) => x !== q)].slice(0, 8);
  uiState.communitySearchHistory = [q, ...uiState.communitySearchHistory.filter((x) => x !== q)].slice(0, 8);
  const preferredScope = ["all", "community", "messages"].includes(options.scope)
    ? options.scope
    : (isCommunitySearchFlow ? "community" : "all");
  uiState.unifiedSearchScope = preferredScope;
  const origin = (uiState.searchOriginRoute || "").trim();
  const target = preferredScope === "community"
    ? "#/community/search"
    : preferredScope === "messages"
      ? "#/search"
      : "#/search/results";
  const params = new URLSearchParams();
  params.set("q", q);
  if (origin) params.set("from", origin);
  if (preferredScope !== "all") params.set("scope", preferredScope);
  const nextHash = `${target}?${params.toString()}`;
  if (window.location.hash !== nextHash) {
    window.location.hash = nextHash;
    return;
  }
  render();
}

function pageFilter() {
  return renderExploreShell(`
    <section class="screen">
      <div class="card">${sectionTitle("题材与时长筛选")}<div class="chips"><span class="chip">宗门修行</span><span class="chip">王朝权谋</span><span class="chip">签到变强</span><span class="chip">20-40分钟</span></div></div>
    </section>
  `);
}

function pageDramaHome() {
  const rankTabs = [
    { label: "推荐榜", key: "recommend", path: "#/drama/rank/recommend" },
    { label: "热播榜", key: "hot", path: "#/drama/rank/hot" },
    { label: "新剧榜", key: "new", path: "#/drama/rank/new" }
  ];
  const reserveTabs = [
    { label: "即将开播", key: "upcoming", path: "#/drama/reserve/upcoming" },
    { label: "本周上新", key: "week", path: "#/drama/reserve/week" },
    { label: "我的预约", key: "mine", path: "#/drama/reserve/mine" }
  ];
  const rankPool = {
    recommend: [
      ["1", "我真没想重生啊", "4206万热度 · 615.2万次点赞", "重生后在商业与感情双线中反复博弈，反转频出。", "韩世泽 · 周柏柏"],
      ["2", "重生七年后，我要娶了死对头校花", "5665万热度 · 133.5万次点赞", "都市情感与成长线并进，节奏快、爽点密。", "流光工作室"],
      ["3", "一品布衣", "4225万热度 · 143.0万次点赞", "历史古代线代表作，权谋与群像刻画稳定。", "墨城编剧组"],
      ["4", "鹤唳江南", "4102万热度 · 128.1万次点赞", "古风权谋线口碑稳定，群像和主线推进平衡。", "夜航社"],
      ["5", "凌晨四点的电话", "3921万热度 · 109.8万次点赞", "都市悬疑氛围强，节奏紧凑且反转高密。", "风铃剧团"],
      ["6", "离婚后她杀疯了", "3812万热度 · 100.2万次点赞", "女性反击成长线，讨论度持续上升。", "青柠厂牌"],
      ["7", "末日据点经营手册", "3655万热度 · 96.4万次点赞", "熔点小组"],
      ["8", "假千金反杀日记", "3521万热度 · 88.0万次点赞", "荒原编剧组"],
      ["9", "古代权谋：冷宫回潮", "3398万热度 · 81.4万次点赞", "山海社"],
      ["10", "乡村振兴：我的直播助农路", "3270万热度 · 76.2万次点赞", "木棉小组"]
    ],
    hot: [
      ["1", "离婚后她杀疯了", "3988万热度 · 542.1万次点赞", "女主反击线强，连续五周站内热度上升。", "青柠厂牌"],
      ["2", "古风权谋录", "3577万热度 · 322.3万次点赞", "高压权谋叙事，人物关系复杂但清晰。", "风暴文学"],
      ["3", "凌晨四点的电话", "3120万热度 · 287.1万次点赞", "都市悬疑气质突出，氛围感拉满。", "夜行制作组"],
      ["4", "玻璃列车", "2860万热度 · 231.0万次点赞", "密闭空间反转强，口碑稳定上涨。", "迷雾小组"],
      ["5", "旧港沉默", "2742万热度 · 218.4万次点赞", "港口疑案主线清晰，讨论度高。", "港城剧社"],
      ["6", "暗潮双线", "2610万热度 · 206.9万次点赞", "双线叙事紧凑，角色成长明显。", "潮汐社"],
      ["7", "潮汐同盟", "2488万热度 · 194.2万次点赞", "共振工作室"],
      ["8", "寒潮预案", "2364万热度 · 188.8万次点赞", "熔点小组"],
      ["9", "零点法庭", "2250万热度 · 176.3万次点赞", "墨城编剧组"],
      ["10", "雾港回声", "2142万热度 · 168.7万次点赞", "南风剧社"]
    ],
    new: [
      ["1", "逆风告白", "首周 1269万热度", "校园情感新作，角色成长线讨论度高。", "青果工作室"],
      ["2", "年代小院", "首周 1102万热度", "年代经营题材，女性角色群像表现亮眼。", "木棉小组"],
      ["3", "雾港回声", "首周 986万热度", "港城疑案线，剧情反转密度高。", "南风剧社"],
      ["4", "北城长夜", "首周 920万热度", "都市悬疑节奏紧凑，情绪线稳定。", "无眠社"],
      ["5", "无声风暴", "首周 876万热度", "多线博弈设定，角色张力强。", "重力工坊"],
      ["6", "临界夜航", "首周 844万热度", "极限救援线，关卡玩法突出。", "海平线小组"],
      ["7", "热雨协议", "首周 803万热度", "栀子花工作室"],
      ["8", "冷焰回路", "首周 768万热度", "山海社"],
      ["9", "回声法则", "首周 732万热度", "织影厂牌"],
      ["10", "灰塔协议", "首周 701万热度", "破晓剧团"]
    ]
  };
  const reservePool = {
    upcoming: [
      ["world_1", "03-12 20:00", "《冒充乞丐，我是集团继承人》", "1.3万人预约 · 都市反转", "作者：南风剧社 · 阿序", "身份反转 / 都市高能"],
      ["world_2", "03-13 19:30", "《南下南宝》", "8671人预约 · 轻喜萌宝", "作者：青果工作室 · 禾页", "亲情线 / 萌宝喜剧"],
      ["world_3", "03-14 20:00", "《当离婚律师想离婚2》", "4.3万人预约 · 现代都市", "作者：流光厂牌 · 林河", "都市情感 / 反差人设"],
      ["world_4", "03-15 18:00", "《逆风告白》", "3997人预约 · 校园成长", "作者：木棉小组 · 江岚", "校园成长 / 情绪爽点"],
      ["world_5", "03-16 20:00", "《年代小院》", "5299人预约 · 年代种田", "作者：木棉小组 · 沐风", "年代成长 / 治愈经营"],
      ["world_6", "03-17 21:00", "《空军幻想》", "5772人预约 · 都市情感", "作者：夜航社 · 明川", "都市情感 / 强节奏"],
      ["world_7", "03-18 20:30", "《玻璃列车》", "4886人预约 · 悬疑", "作者：迷雾小组 · 简禾"],
      ["world_8", "03-19 19:00", "《港口晨雾》", "4620人预约 · 港城线", "作者：港城剧社 · 梁野"],
      ["world_9", "03-20 20:00", "《北城长夜》", "4310人预约 · 都市悬疑", "作者：无眠社 · 祁山"],
      ["world_10", "03-21 19:30", "《无声风暴》", "4097人预约 · 多线博弈", "作者：重力工坊 · 昼白"]
    ],
    week: [
      ["world_11", "03-22 20:00", "《临界夜航》", "5031人预约 · 极限救援", "作者：海平线小组 · 周衡", "高压任务 / 团队协作"],
      ["world_12", "03-23 19:30", "《热雨协议》", "4788人预约 · 情绪爽点", "作者：栀子花工作室 · 青时", "都市博弈 / 情绪回报"],
      ["world_13", "03-24 20:10", "《冷焰回路》", "4520人预约 · 工业奇幻", "作者：山海社 · 临渊", "系统流 / 世界构建"],
      ["world_14", "03-25 19:20", "《回声法则》", "4392人预约 · 科幻叙事", "作者：织影厂牌 · 砚秋", "逻辑谜题 / 反转线"],
      ["world_15", "03-26 20:00", "《灰塔协议》", "4216人预约 · 系统流", "作者：破晓剧团 · 牧言", "成长主线 / 策略抉择"],
      ["world_16", "03-27 20:30", "《终局钟摆》", "3985人预约 · 对抗线", "作者：共振工作室 · 林澈", "终局博弈 / 爽感"],
      ["world_17", "03-28 19:40", "《北岸联署》", "3877人预约 · 团队协作", "作者：共振工作室 · 苏禾"],
      ["world_18", "03-29 20:15", "《夜行档案室》", "3722人预约 · 悬疑惊悚", "作者：夜行制作组 · 郁舟"],
      ["world_19", "03-30 19:50", "《港口夜巡》", "3618人预约 · 港城线", "作者：港城剧社 · 梁野"],
      ["world_20", "03-31 20:00", "《逆光之城》", "3499人预约 · 都市线", "作者：南风剧社 · 阿序"]
    ],
    mine: [
      ["world_1", "03-12 20:00", "《冒充乞丐，我是集团继承人》", "你已预约 · 开播提醒开启", "作者：南风剧社 · 阿序", "开播提醒已开启"],
      ["world_3", "03-14 20:00", "《当离婚律师想离婚2》", "你已预约 · 开播提醒开启", "作者：流光厂牌 · 林河", "开播提醒已开启"],
      ["world_6", "03-17 21:00", "《空军幻想》", "你已预约 · 开播提醒开启", "作者：夜航社 · 明川", "开播提醒已开启"],
      ["world_11", "03-22 20:00", "《临界夜航》", "你已预约 · 开播提醒开启", "作者：海平线小组 · 周衡", "开播提醒已开启"],
      ["world_13", "03-24 20:10", "《冷焰回路》", "你已预约 · 开播提醒开启", "作者：山海社 · 临渊", "开播提醒已开启"],
      ["world_16", "03-27 20:30", "《终局钟摆》", "你已预约 · 开播提醒开启", "作者：共振工作室 · 林澈", "开播提醒已开启"],
      ["world_18", "03-29 20:15", "《夜行档案室》", "你已预约 · 开播提醒开启", "作者：夜行制作组 · 郁舟"],
      ["world_19", "03-30 19:50", "《港口夜巡》", "你已预约 · 开播提醒开启", "作者：港城剧社 · 梁野"],
      ["world_20", "03-31 20:00", "《逆光之城》", "你已预约 · 开播提醒开启", "作者：南风剧社 · 阿序"],
      ["world_10", "03-21 19:30", "《无声风暴》", "你已预约 · 开播提醒开启", "作者：重力工坊 · 昼白"]
    ]
  };
  const activeRankKey = rankTabs.find((t) => t.label === uiState.dramaHomeRankTab)?.key || "recommend";
  const activeReserveKey = reserveTabs.find((t) => t.label === uiState.dramaHomeReserveTab)?.key || "upcoming";
  const filteredPreviewCardsRaw = getHomeFeed();
  const filteredPreviewCards = (filteredPreviewCardsRaw.length ? filteredPreviewCardsRaw : FEED_DATA).slice(0, 10);
  const activeFilterBadges = FILTER_CONFIG
    .map((group) => {
      const value = uiState.filters[group.key];
      if (!value || value === group.label) return "";
      return `<button class="active" data-action="home-filter" data-key="${group.key}" data-value="${group.label}">${group.label}：${value}</button>`;
    })
    .filter(Boolean)
    .join("");
  const rankData = rankPool[activeRankKey];
  const reserveData = reservePool[activeReserveKey];
  const rankWorlds = rankData.map((_, idx) => pickDramaWorld(idx, activeRankKey === "hot" ? 20 : activeRankKey === "new" ? 40 : 0));
  const reserveWorlds = reserveData.map((_, idx) => pickDramaWorld(idx, 60));
  const rankTop6 = rankData.slice(0, 6).map((row, idx) => {
    const world = rankWorlds[idx] || {};
    const heat = row[2] || `${(4200 - idx * 180).toLocaleString()}万热度 · ${(615 - idx * 23).toFixed(1)}万次点赞`;
    const theme = world.theme || row[3] || "剧情冒险";
    const author = world.author || row[4] || "Drama 作者";
    return { rank: row[0], world, heat, theme, author };
  });
  const reserveTop6 = reserveData.slice(0, 6).map((row, idx) => {
    const world = reserveWorlds[idx] || {};
    const reserveText = row[3] || `${(8600 - idx * 420).toLocaleString()}人预约 · ${world.theme || "剧情冒险"}`;
    const authorText = world.author ? `作者：${world.author}` : row[4] || "作者：Drama 作者";
    return {
      rank: String(idx + 1),
      world,
      reserveText,
      authorText,
      schedule: row[1] || `03-${String(12 + idx).padStart(2, "0")} 20:00`
    };
  });
  const heroSourceCards = (filteredPreviewCards.length ? filteredPreviewCards : FEED_DATA).slice(0, 8);
  const safeHeroCards = heroSourceCards.length ? heroSourceCards : [getDefaultWorldCard()];
  const heroPromos = safeHeroCards.map((item, idx) => ({
    worldId: getSafeWorldId(item?.id, idx),
    title: String(item?.title || `推荐作品 ${idx + 1}`),
    subtitle: String(
      item?.openingSummary
      || item?.summary
      || item?.overview
      || `${item?.format || "短剧"} · ${item?.theme || "剧情向"}`
    ),
    cover: getWorldHeroCoverStyle(item, item?.id || `drama-hero-${idx}`)
  }));
  DRAMA_HERO_TOTAL = Math.max(1, heroPromos.length);
  const heroIndex = ((uiState.dramaHeroIndex % heroPromos.length) + heroPromos.length) % heroPromos.length;
  const hero = heroPromos[heroIndex];
  return renderExploreShell(`
    <section class="drama-home drama-home-vision">
      <article class="drama-hero-stage" data-action="open-world-detail" data-id="${hero.worldId}">
        <div class="drama-hero-visual" style="background:${hero.cover};background-size:cover;background-position:center;">
          <div class="drama-hero-copy">
            <h2>${hero.title}</h2>
            <p>${hero.subtitle}</p>
          </div>
          <button class="drama-hero-arrow left" data-action="drama-hero-prev">‹</button>
          <button class="drama-hero-arrow right" data-action="drama-hero-next">›</button>
          <div class="drama-hero-dots in-hero">
            ${heroPromos
              .map((_, i) => `<button class="${i === heroIndex ? "active" : ""}" data-action="drama-hero-goto" data-index="${i}" aria-label="切换到第${i + 1}张"></button>`)
              .join("")}
          </div>
        </div>
      </article>

      <div class="drama-home-block drama-filter-block">
        <div class="xh-filter-panel expanded drama-filter-panel">
          <div class="xh-filter-body">
            ${FILTER_CONFIG.map((group) => renderFilterGroup(group)).join("")}
          </div>
        </div>
      </div>

      <div class="drama-home-block drama-filter-result-block">
        <div class="drama-filter-link-row">
          <div class="drama-filter-link-scroll">
            <div class="drama-filter-link-bar">
              ${activeFilterBadges}
            </div>
          </div>
          <button class="drama-filter-more-btn" data-go="#/drama/filter/results">更多 ›</button>
        </div>
        <div class="drama-filter-result-strip">
          ${filteredPreviewCards
            .map(
              (item, idx) => `
            <article class="drama-filter-result-card" data-action="open-world-detail" data-id="${getSafeWorldId(item.id, idx)}">
              <div class="cover" style="background:${getWorldCoverStyle(item, item.id || `drama-filter-${idx}`)};background-size:cover;background-position:center;"></div>
              <div class="copy">
                <h4>${item.title}</h4>
                <div class="tags">${(item.tags || []).slice(0, 2).map((tag) => `<span>${tag}</span>`).join("")}</div>
                <p>${item.author}</p>
                <small>♡ ${item.like} · 💬 ${item.comment}</small>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="drama-home-block drama-rank-block drama-iq-module">
        <div class="drama-block-head">
          <div>
            <h3>排行榜</h3>
            <p>按热度 / 互动 / 收藏综合更新</p>
          </div>
          <div class="drama-block-head-actions">
            <button data-go="${rankTabs.find((t) => t.key === activeRankKey)?.path || "#/drama/rank/recommend"}">更多 ›</button>
          </div>
        </div>
        <div class="drama-inline-filters">
          ${rankTabs
            .map((t) => `<button class="${uiState.dramaHomeRankTab === t.label ? "active" : ""}" data-action="drama-home-rank-tab" data-tab="${t.label}">${t.label}</button>`)
            .join("")}
          <button>女频</button><button>男频</button><button>总裁</button><button>古风</button>
        </div>
        <div class="drama-iq-layout">
          <article class="drama-iq-feature" data-action="open-world-detail" data-id="${rankTop6[0]?.world?.id || rankWorlds[0]?.id || getSafeWorldId("", 0)}">
            <div class="cover" style="background:${getWorldCoverStyle(rankTop6[0]?.world, `drama-home-rank-feature-${activeRankKey}`)};background-size:cover;background-position:center;"></div>
            <div class="copy">
              <small>本周 TOP1</small>
              <h4>${rankTop6[0]?.world?.title || "本周推荐"}</h4>
              <p>${rankTop6[0]?.heat || ""}</p>
              <span>${rankTop6[0]?.theme || ""} · ${rankTop6[0]?.author || ""}</span>
            </div>
          </article>
          <div class="drama-top6-box">
            <div class="drama-top6-grid">
              ${[rankTop6.slice(0, 3), rankTop6.slice(3, 6)]
                .map(
                  (group, gIdx) => `
                <div class="drama-top6-col">
                  ${group
                    .map(
                      (row, rowIdx) => `
                    <article class="drama-top6-item" data-action="open-world-detail" data-id="${row?.world?.id || rankWorlds[gIdx * 3 + rowIdx]?.id || getSafeWorldId("", gIdx * 3 + rowIdx)}">
                      <span class="no ${Number(row?.rank || gIdx * 3 + rowIdx + 1) <= 3 ? "medal" : ""}">${renderTopRankBadge(row?.rank || String(gIdx * 3 + rowIdx + 1))}</span>
                      <div class="cover" style="background:${getWorldCoverStyle(row?.world, `drama-home-rank-${activeRankKey}-${gIdx}-${rowIdx}`)};background-size:cover;background-position:center;"></div>
                      <div class="copy">
                        <h4>${row?.world?.title || "故事卡"}</h4>
                        <p>${row?.heat || ""}</p>
                        <small>${row?.theme || ""} · ${row?.author || ""}</small>
                      </div>
                    </article>
                  `
                    )
                    .join("")}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>

      <div class="drama-home-block drama-reserve-block drama-iq-module">
        <div class="drama-block-head">
          <div>
            <h3>预约剧场</h3>
            <p>按开播时间排序，预约后自动消息提醒</p>
          </div>
          <button data-go="${reserveTabs.find((t) => t.key === activeReserveKey)?.path || "#/drama/reserve/upcoming"}">更多 ›</button>
        </div>
        <div class="drama-inline-filters">
          ${reserveTabs
            .map((t) => `<button class="${uiState.dramaHomeReserveTab === t.label ? "active" : ""}" data-action="drama-home-reserve-tab" data-tab="${t.label}">${t.label}</button>`)
            .join("")}
        </div>
        <div class="drama-iq-layout">
          <article class="drama-iq-feature reserve" data-action="open-reserve-detail" data-id="${reserveTop6[0]?.world?.id || reserveWorlds[0]?.id || getSafeWorldId("", 60)}">
            <div class="cover" style="background:${getWorldCoverStyle(reserveTop6[0]?.world, `drama-home-reserve-feature-${activeReserveKey}`)};background-size:cover;background-position:center;"></div>
            <div class="copy">
              <small>抢先预约</small>
              <h4>${reserveTop6[0]?.world?.title || "新剧预约"}</h4>
              <p>${reserveTop6[0]?.reserveText || ""}</p>
              <span>${reserveTop6[0]?.schedule || ""} · ${reserveTop6[0]?.authorText || ""}</span>
              <button>去预约</button>
            </div>
          </article>
          <div class="drama-top6-box">
            <div class="drama-top6-grid">
              ${[reserveTop6.slice(0, 3), reserveTop6.slice(3, 6)]
                .map(
                  (group, gIdx) => `
                <div class="drama-top6-col">
                  ${group
                    .map(
                      (item, idx) => `
                    <article class="drama-top6-item drama-top6-item-reserve" data-action="open-reserve-detail" data-id="${item?.world?.id || reserveWorlds[gIdx * 3 + idx]?.id || getSafeWorldId("", 60 + gIdx * 3 + idx)}">
                      <span class="no ${(gIdx * 3 + idx) < 3 ? "medal" : ""}">${renderTopRankBadge(String(gIdx * 3 + idx + 1))}</span>
                      <div class="cover" style="background:${getWorldCoverStyle(item?.world, `drama-home-reserve-${activeReserveKey}-${gIdx}-${idx}`)};background-size:cover;background-position:center;"></div>
                      <div class="copy">
                        <h4>${item?.world?.title || "故事卡"}</h4>
                        <p>${item?.reserveText || ""}</p>
                        <small>${item?.authorText || ""}</small>
                      </div>
                    </article>
                  `
                    )
                    .join("")}
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `);
}

function pageDramaFilter() {
  return pageDramaRank();
}

function pageDramaFilterResults() {
  const filtered = getHomeFeed();
  const rows = (filtered.length ? filtered : FEED_DATA).slice(0, 24).map((item, idx) => ({
    world: item,
    author: item.author || "Drama 作者",
    metrics: `♡ ${formatMetricCount(item.like)} · ☆ ${formatMetricCount(item.star)} · 💬 ${formatMetricCount(item.comment)} · 🔥 ${item.heat || "0.0w"}`,
    desc: `${item.theme || "题材"} · ${item.setting || "设定"} · ${item.background || "背景"}`
  }));

  return renderExploreShell(`
    <section class="drama-rank-page">
      <div class="drama-home-block drama-rank-block">
        <div class="drama-block-head">
          <div class="drama-list-headline">
            <button class="drama-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
            <h3>筛选结果</h3>
            <span class="drama-list-head-meta">${rows.length} 条</span>
          </div>
        </div>
        <div class="drama-filter-link-bar drama-filter-link-bar-page">
          ${FILTER_CONFIG
            .map((group) => {
              const value = uiState.filters[group.key];
              if (!value || value === group.label) return "";
              return `<button data-action="home-filter" data-key="${group.key}" data-value="${group.label}">${group.label}：${value}</button>`;
            })
            .filter(Boolean)
            .join("")}
        </div>
        <div class="drama-filter-result-list">
          ${rows
            .map(
              (row, idx) => `
            <article class="drama-filter-row-card" data-action="open-world-detail" data-id="${row?.world?.id || getSafeWorldId("", idx)}">
              <div class="cover" style="background:${getWorldCoverStyle(row?.world, `drama-filter-row-${idx}`)};background-size:cover;background-position:center;"></div>
              <div class="copy">
                <h4>${row?.world?.title || "筛选故事"}</h4>
                <p>${row?.desc || ""}</p>
                <small>${row?.metrics || ""}</small>
                <em>${row?.author || ""}</em>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `);
}

function pageDramaReserve() {
  const hash = window.location.hash || "#/drama/reserve/upcoming";
  const active = hash.includes("/week") ? "week" : hash.includes("/mine") ? "mine" : "upcoming";
  const tabs = [
    { key: "upcoming", label: "即将开播", path: "#/drama/reserve/upcoming" },
    { key: "week", label: "本周上新", path: "#/drama/reserve/week" },
    { key: "mine", label: "我的预约", path: "#/drama/reserve/mine" }
  ];
  const reserveCards = {
    upcoming: [
      ["world_1", "03-12 20:00", "《冒充乞丐，我是集团继承人》", "1.3万人预约 · 都市反转", "作者：南风剧社 · 阿序"],
      ["world_2", "03-13 19:30", "《南下南宝》", "8671人预约 · 轻喜萌宝", "作者：青果工作室 · 禾页"],
      ["world_3", "03-14 20:00", "《当离婚律师想离婚2》", "4.3万人预约 · 现代都市", "作者：流光厂牌 · 林河"],
      ["world_4", "03-15 18:00", "《逆风告白》", "3997人预约 · 校园成长", "作者：木棉小组 · 江岚"],
      ["world_5", "03-16 20:00", "《年代小院》", "5299人预约 · 年代种田", "作者：木棉小组 · 沐风"],
      ["world_6", "03-17 21:00", "《空军幻想》", "5772人预约 · 都市情感", "作者：夜航社 · 明川"],
      ["world_7", "03-18 20:30", "《玻璃列车》", "4886人预约 · 悬疑", "作者：迷雾小组 · 简禾"],
      ["world_8", "03-19 19:00", "《港口晨雾》", "4620人预约 · 港城线", "作者：港城剧社 · 梁野"],
      ["world_9", "03-20 20:00", "《北城长夜》", "4310人预约 · 都市悬疑", "作者：无眠社 · 祁山"],
      ["world_10", "03-21 19:30", "《无声风暴》", "4097人预约 · 多线博弈", "作者：重力工坊 · 昼白"]
    ],
    week: [
      ["world_5", "03-16 20:00", "《年代小院》", "5299人预约 · 年代种田", "作者：木棉小组 · 沐风"],
      ["world_6", "03-17 21:00", "《空军幻想》", "5772人预约 · 都市情感", "作者：夜航社 · 明川"],
      ["world_7", "03-18 20:30", "《玻璃列车》", "4886人预约 · 悬疑", "作者：迷雾小组 · 简禾"],
      ["world_8", "03-19 19:00", "《港口晨雾》", "4620人预约 · 港城线", "作者：港城剧社 · 梁野"],
      ["world_11", "03-22 20:00", "《临界夜航》", "5031人预约 · 极限救援", "作者：海平线小组 · 周衡"],
      ["world_12", "03-23 19:30", "《热雨协议》", "4788人预约 · 情绪爽点", "作者：栀子花工作室 · 青时"],
      ["world_13", "03-24 20:10", "《冷焰回路》", "4520人预约 · 工业奇幻", "作者：山海社 · 临渊"],
      ["world_14", "03-25 19:20", "《回声法则》", "4392人预约 · 科幻叙事", "作者：织影厂牌 · 砚秋"],
      ["world_15", "03-26 20:00", "《灰塔协议》", "4216人预约 · 系统流", "作者：破晓剧团 · 牧言"],
      ["world_16", "03-27 20:30", "《终局钟摆》", "3985人预约 · 对抗线", "作者：共振工作室 · 林澈"]
    ],
    mine: [
      ["world_1", "03-12 20:00", "《冒充乞丐，我是集团继承人》", "你已预约 · 开播提醒开启", "作者：南风剧社 · 阿序"],
      ["world_3", "03-14 20:00", "《当离婚律师想离婚2》", "你已预约 · 开播提醒开启", "作者：流光厂牌 · 林河"],
      ["world_6", "03-17 21:00", "《空军幻想》", "你已预约 · 开播提醒开启", "作者：夜航社 · 明川"],
      ["world_11", "03-22 20:00", "《临界夜航》", "你已预约 · 开播提醒开启", "作者：海平线小组 · 周衡"],
      ["world_13", "03-24 20:10", "《冷焰回路》", "你已预约 · 开播提醒开启", "作者：山海社 · 临渊"],
      ["world_16", "03-27 20:30", "《终局钟摆》", "你已预约 · 开播提醒开启", "作者：共振工作室 · 林澈"],
      ["world_18", "03-29 20:15", "《夜行档案室》", "你已预约 · 开播提醒开启", "作者：夜行制作组 · 郁舟"],
      ["world_19", "03-30 19:50", "《港口夜巡》", "你已预约 · 开播提醒开启", "作者：港城剧社 · 梁野"],
      ["world_20", "03-31 20:00", "《逆光之城》", "你已预约 · 开播提醒开启", "作者：南风剧社 · 阿序"],
      ["world_10", "03-21 19:30", "《无声风暴》", "你已预约 · 开播提醒开启", "作者：重力工坊 · 昼白"]
    ]
  };
  const reserveWorlds = reserveCards[active].map((_, idx) => pickDramaWorld(idx, active === "week" ? 24 : active === "mine" ? 48 : 12));
  const reserveRows = reserveCards[active].map((item, idx) => {
    const world = reserveWorlds[idx] || {};
    return {
      rank: String(idx + 1),
      schedule: item[1] || `03-${String(12 + idx).padStart(2, "0")} 20:00`,
      world,
      reserveText: item[3] || `${(8600 - idx * 420).toLocaleString()}人预约 · ${world.theme || "剧情冒险"}`,
      authorText: world.author ? `作者：${world.author}` : item[4] || "作者：Drama 作者"
    };
  });
  const reserveStoryCards = reserveRows.map((row, idx) => ({
    id: row.world?.id || getSafeWorldId("", 12 + idx),
    title: row.world?.title || "预约故事",
    tags: [active === "mine" ? "我的预约" : tabs.find((t) => t.key === active)?.label || "新剧预约", row.world?.theme || "可开刷"],
    author: row.world?.author || "Drama 作者",
    cover: row.world?.cover || getWorldImageUrl(row.world, `drama-reserve-story-${active}-${idx}`),
    like: `${(1200 + idx * 319).toLocaleString()}`,
    star: `${(500 + idx * 103).toLocaleString()}`,
    comment: `${(150 + idx * 47).toLocaleString()}`,
    heat: `${(1.5 + idx * 0.3).toFixed(1)}w`
  }));

  return renderExploreShell(`
    <section class="drama-list-page">
      <div class="drama-home-block drama-reserve-block">
        <div class="drama-block-head">
          <div class="drama-list-headline">
            <button class="drama-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
            <h3>新剧预约</h3>
            <span class="drama-list-head-meta">${tabs.find((t) => t.key === active)?.label}</span>
          </div>
        </div>
        <div class="drama-inline-filters">
          ${tabs.map((t) => `<button class="${t.key === active ? "active" : ""}" data-go="${t.path}">${t.label}</button>`).join("")}
        </div>
        <div class="drama-top6-box">
          <div class="drama-top6-grid">
            ${[reserveRows.slice(0, 3), reserveRows.slice(3, 6)]
              .map(
                (group, gIdx) => `
              <div class="drama-top6-col">
                ${group
                  .map(
                    (item, idx) => `
                  <article class="drama-top6-item" data-action="open-reserve-detail" data-id="${item?.world?.id || reserveWorlds[gIdx * 3 + idx]?.id || getSafeWorldId("", 12 + gIdx * 3 + idx)}">
                    <span class="no ${(gIdx * 3 + idx) < 3 ? "medal" : ""}">${renderTopRankBadge(item?.rank || String(gIdx * 3 + idx + 1))}</span>
                    <div class="cover" style="background:${getWorldCoverStyle(item?.world, `drama-reserve-${active}-${gIdx}-${idx}`)};background-size:cover;background-position:center;"></div>
                    <div class="copy">
                      <h4>${item?.world?.title || "预约故事"}</h4>
                      <p>${item?.reserveText || ""}</p>
                      <small>${item?.authorText || ""}</small>
                    </div>
                  </article>
                `
                  )
                  .join("")}
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="drama-reserve-home-rest-grid">
          ${[reserveRows.slice(6, 8), reserveRows.slice(8, 10)]
            .map(
              (group, gIdx) => `
            <div class="drama-rest-col">
              ${group
                .map(
                  (item, rowIdx) => `
                <article class="drama-reserve-home-rest-item" data-action="open-reserve-detail" data-id="${item?.world?.id || reserveWorlds[6 + gIdx * 2 + rowIdx]?.id || getSafeWorldId("", 18 + gIdx * 2 + rowIdx)}">
                  <span class="time">${item?.schedule || ""}</span>
                  <div class="copy">
                    <h4>${item?.world?.title || "预约故事"}</h4>
                    <p>${item?.reserveText || ""}</p>
                    <small>${item?.authorText || ""}</small>
                  </div>
                  <button>去预约</button>
                </article>
              `
                )
                .join("")}
            </div>
          `
            )
            .join("")}
        </div>
        <div class="drama-story-feed-wrap">
          ${renderDramaStoryDeck(reserveStoryCards, "open-reserve-detail")}
        </div>
      </div>
    </section>
  `);
}

function pageDramaRank() {
  const hash = window.location.hash || "#/drama/rank/recommend";
  const active = hash.includes("/hot") ? "hot" : hash.includes("/new") ? "new" : "recommend";
  const tabs = [
    { key: "recommend", label: "推荐榜", path: "#/drama/rank/recommend" },
    { key: "hot", label: "热播榜", path: "#/drama/rank/hot" },
    { key: "new", label: "新剧榜", path: "#/drama/rank/new" }
  ];
  const pool = {
    recommend: [
      ["1", "我真没想重生啊", "4206万热度 · 615.2万次点赞", "重生后在商业与感情双线中反复博弈，反转频出。", "韩世泽 · 周柏柏"],
      ["2", "重生七年后，我要娶了死对头校花", "5665万热度 · 133.5万次点赞", "都市情感与成长线并进，节奏快、爽点密。", "流光工作室"],
      ["3", "一品布衣", "4225万热度 · 143.0万次点赞", "历史古代线代表作，权谋与群像刻画稳定。", "墨城编剧组"],
      ["4", "鹤唳江南", "4102万热度 · 128.1万次点赞", "古风权谋", "夜航社"],
      ["5", "凌晨四点的电话", "3921万热度 · 109.8万次点赞", "都市悬疑", "风铃剧团"],
      ["6", "离婚后她杀疯了", "3812万热度 · 100.2万次点赞", "女性成长", "青柠厂牌"],
      ["7", "末日据点经营手册", "3655万热度 · 96.4万次点赞", "末日经营", "熔点小组"],
      ["8", "假千金反杀日记", "3521万热度 · 88.0万次点赞", "身份反转", "荒原编剧组"],
      ["9", "古代权谋：冷宫回潮", "3398万热度 · 81.4万次点赞", "宫廷权谋", "山海社"],
      ["10", "乡村振兴：我的直播助农路", "3270万热度 · 76.2万次点赞", "现实题材", "木棉小组"]
    ],
    hot: [
      ["1", "离婚后她杀疯了", "3988万热度 · 542.1万次点赞", "女主反击线强，连续五周站内热度上升。", "青柠厂牌"],
      ["2", "古风权谋录", "3577万热度 · 322.3万次点赞", "高压权谋叙事，人物关系复杂但清晰。", "风暴文学"],
      ["3", "凌晨四点的电话", "3120万热度 · 287.1万次点赞", "都市悬疑气质突出，氛围感拉满。", "夜行制作组"],
      ["4", "玻璃列车", "2860万热度 · 231.0万次点赞", "密闭空间", "迷雾小组"],
      ["5", "旧港沉默", "2742万热度 · 218.4万次点赞", "悬疑追凶", "港城剧社"],
      ["6", "暗潮双线", "2610万热度 · 206.9万次点赞", "双线叙事", "潮汐社"],
      ["7", "潮汐同盟", "2488万热度 · 194.2万次点赞", "联盟博弈", "共振工作室"],
      ["8", "寒潮预案", "2364万热度 · 188.8万次点赞", "末日协作", "熔点小组"],
      ["9", "零点法庭", "2250万热度 · 176.3万次点赞", "庭审攻防", "墨城编剧组"],
      ["10", "雾港回声", "2142万热度 · 168.7万次点赞", "港城疑案", "南风剧社"]
    ],
    new: [
      ["1", "逆风告白", "首周 1269万热度", "校园情感新作，角色成长线讨论度高。", "青果工作室"],
      ["2", "年代小院", "首周 1102万热度", "年代经营题材，女性角色群像表现亮眼。", "木棉小组"],
      ["3", "雾港回声", "首周 986万热度", "港城疑案线，剧情反转密度高。", "南风剧社"],
      ["4", "北城长夜", "首周 920万热度", "都市悬疑", "无眠社"],
      ["5", "无声风暴", "首周 876万热度", "多线博弈", "重力工坊"],
      ["6", "临界夜航", "首周 844万热度", "极限救援", "海平线小组"],
      ["7", "热雨协议", "首周 803万热度", "情绪爽点", "栀子花工作室"],
      ["8", "冷焰回路", "首周 768万热度", "工业奇幻", "山海社"],
      ["9", "回声法则", "首周 732万热度", "科幻叙事", "织影厂牌"],
      ["10", "灰塔协议", "首周 701万热度", "系统流", "破晓剧团"]
    ]
  };
  const ranks = pool[active];
  const rankWorlds = ranks.map((_, idx) => pickDramaWorld(idx, active === "hot" ? 20 : active === "new" ? 40 : 0));
  const rankRows = ranks.map((row, idx) => {
    const world = rankWorlds[idx] || {};
    return {
      rank: row[0] || String(idx + 1),
      world,
      heat: row[2] || `${(4200 - idx * 180).toLocaleString()}万热度 · ${(615 - idx * 23).toFixed(1)}万次点赞`,
      theme: world.theme || row[3] || "剧情冒险",
      author: world.author || row[4] || "Drama 作者"
    };
  });
  const rankTop6 = rankRows.slice(0, 6);
  const rankRest = rankRows.slice(6, 10);
  const rankStoryCards = rankRows.map((row, idx) => ({
    id: row.world?.id || "",
    title: row.world?.title || "排行榜故事",
    tags: [tabs.find((t) => t.key === active)?.label || "排行榜", idx < 5 ? "TOP榜单" : "热门"],
    author: row.author,
    cover: row.world?.cover || getWorldImageUrl(row.world, `drama-rank-story-${active}-${idx}`),
    like: `${(2200 + idx * 420).toLocaleString()}`,
    star: `${(980 + idx * 167).toLocaleString()}`,
    comment: `${(260 + idx * 53).toLocaleString()}`,
    heat: `${(2.8 + idx * 0.26).toFixed(1)}w`
  }));

  return renderExploreShell(`
    <section class="drama-rank-page">
      <div class="drama-home-block drama-rank-block">
        <div class="drama-block-head">
          <div class="drama-list-headline">
            <button class="drama-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
            <h3>排行榜</h3>
            <span class="drama-list-head-meta">${tabs.find((t) => t.key === active)?.label}</span>
          </div>
        </div>
        <div class="drama-inline-filters">
          ${tabs.map((t) => `<button class="${t.key === active ? "active" : ""}" data-go="${t.path}">${t.label}</button>`).join("")}
          <button>女频</button><button>男频</button><button>总裁</button><button>古风</button>
        </div>
        <div class="drama-top6-box">
          <div class="drama-top6-grid">
            ${[rankTop6.slice(0, 3), rankTop6.slice(3, 6)]
              .map(
                (group, colIdx) => `
              <div class="drama-top6-col">
                  ${group
                  .map(
                    (row, rowIdx) => `
                  <article class="drama-top6-item" data-action="open-world-detail" data-id="${row?.world?.id || rankWorlds[colIdx * 3 + rowIdx]?.id || getSafeWorldId("", colIdx * 3 + rowIdx)}">
                    <span class="no ${Number(row?.rank || colIdx * 3 + rowIdx + 1) <= 3 ? "medal" : ""}">${renderTopRankBadge(row?.rank || String(colIdx * 3 + rowIdx + 1))}</span>
                    <div class="cover" style="background:${getWorldCoverStyle(row?.world, `drama-rank-${active}-${colIdx}-${rowIdx}`)};background-size:cover;background-position:center;"></div>
                    <div class="copy">
                      <h4>${row?.world?.title || "排行榜故事"}</h4>
                      <p>${row?.heat || ""}</p>
                      <small>${row?.theme || ""} · ${row?.author || ""}</small>
                    </div>
                  </article>
                `
                  )
                  .join("")}
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="drama-rank-rest-box">
          ${[rankRest.slice(0, 2), rankRest.slice(2, 4)]
            .map(
              (group, colIdx) => `
            <div class="drama-rest-col">
              ${group
                .map(
                  (row, rowIdx) => `
                <article class="drama-rank-rest-item" data-action="open-world-detail" data-id="${row?.world?.id || rankWorlds[6 + colIdx * 2 + rowIdx]?.id || getSafeWorldId("", 6 + colIdx * 2 + rowIdx)}">
                  <span class="no">${row?.rank || String(6 + colIdx * 2 + rowIdx + 1)}</span>
                  <h4>${row?.world?.title || "排行榜故事"}</h4>
                  <p>${row?.heat || ""}</p>
                </article>
              `
                )
                .join("")}
            </div>
          `
            )
            .join("")}
        </div>
        <div class="drama-story-feed-wrap">
          ${renderDramaStoryDeck(rankStoryCards, "open-world-detail")}
        </div>
      </div>
    </section>
  `);
}


function pageDramaBounty() {
  const jobs = [
    ["真假千金反转：豪门身份互换", "悬赏要求：30集以内，反转密度高", "¥ 9,999", "投稿中"],
    ["年代逆袭：从摆摊到商会会长", "悬赏要求：成长爽点+感情副线", "¥ 8,888", "投稿中"],
    ["校园复仇：她重生后只想搞事业", "悬赏要求：女强线清晰，节奏快", "¥ 6,666", "即将截止"]
  ];

  return renderExploreShell(`
    <section class="drama-bounty-page">
      <article class="drama-bounty-banner">
        <h2>剧本悬赏榜</h2>
        <p>高奖金 · 快截止 · 可投稿</p>
        <button>发布任务</button>
      </article>

      <div class="drama-rank-tabs">
        <button class="active">全部</button><button>高奖金</button><button>快截止</button><button>已结束</button>
      </div>

      <div class="drama-rank-tabs subtle">
        <button class="active">总榜</button><button>女频</button><button>男频</button><button>现代</button><button>古风</button>
      </div>

      <div class="drama-bounty-list">
        ${jobs
          .map(
            (j) => `
          <article class="drama-bounty-item">
            <div class="cover"></div>
            <div class="copy">
              <div class="topline"><h4>${j[0]}</h4><strong>${j[2]}</strong></div>
              <p>${j[1]}</p>
              <small>截止 03-12 · 已投稿 213</small>
              <div class="bottom"><span>${j[3]}</span><button>去投稿</button></div>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `);
}

function pageWorldDetail() {
  const world = getSelectedWorld();
  const profile = getWorldProfile(world);
  const score = getWorldScoreBoard(world);
  const isReserveDetail = window.location.hash === "#/drama/reserve/detail";
  const heroSlidesRaw = normalizeMediaUrls(world?.albumMedia || world?.album_media || world?.mediaUrls || world?.media_urls);
  const backgroundFallback = extractImageUrl(
    world?.cardBackground
    || world?.card_background
    || world?.coverUrl
    || world?.cover_url
    || world?.firstImageUrl
    || world?.first_image_url
  ) || getWorldImageUrl(world, `${world.id || world.title}-primary`);
  const heroSlides = heroSlidesRaw.length
    ? heroSlidesRaw
    : [backgroundFallback].filter(Boolean);
  const currentSlide = heroSlides[uiState.worldCarouselIndex % heroSlides.length];

  const roleItems = [
    { name: "林岚 | 风暴调度员", desc: "外冷内热，擅长在混乱里抓关键变量。每次决策都背负‘全员生还’的执念。", keywords: "理性、反压、救援", cover: "linear-gradient(180deg,#c4b5fd 0%,#6366f1 100%)" },
    { name: "顾沉 | 财团继承人", desc: "表面克制，内里锋利。善于谈判和资源调度，但对林岚的选择始终保持怀疑。", keywords: "博弈、权力、信任", cover: "linear-gradient(180deg,#f5d0fe 0%,#ec4899 100%)" },
    { name: "周渡 | 列车安保长", desc: "身经百战的危机处理者，对流程近乎偏执，认为‘秩序先于情绪’。", keywords: "秩序、执行、底线", cover: "linear-gradient(180deg,#dbeafe 0%,#3b82f6 100%)" },
    { name: "宋予安 | 调查记者", desc: "敏锐、克制、永远带着备份录音笔，擅长在沉默里找到裂缝。", keywords: "真相、追踪、突破", cover: "linear-gradient(180deg,#fde68a 0%,#f59e0b 100%)" },
    { name: "秦冽 | 应急总指挥", desc: "习惯以结果定义价值，倾向高风险高收益方案，与林岚理念冲突。", keywords: "指挥、速度、牺牲", cover: "linear-gradient(180deg,#fecdd3 0%,#ef4444 100%)" },
    { name: "唐鸢 | 数据建模师", desc: "安静寡言但推演极强，对异常数据有近乎直觉的判断能力。", keywords: "模型、预测、偏差", cover: "linear-gradient(180deg,#e9d5ff 0%,#a855f7 100%)" },
    { name: "陆择 | 系统架构师", desc: "负责城市关键系统联动，擅长临时补丁与极限兜底。", keywords: "系统、容错、修复", cover: "linear-gradient(180deg,#ccfbf1 0%,#14b8a6 100%)" },
    { name: "许棠 | 协调官", desc: "强共情但决断果断，专注于多方关系维系和临场谈判。", keywords: "谈判、情绪、协同", cover: "linear-gradient(180deg,#fef3c7 0%,#f97316 100%)" },
    { name: "柏礼 | 医疗队长", desc: "原则坚定，面对资源稀缺时常以‘最小遗憾’作为决策准则。", keywords: "救治、优先级、人性", cover: "linear-gradient(180deg,#dcfce7 0%,#22c55e 100%)" },
    { name: "姜回 | 灰色中间人", desc: "掌握地下情报网络，立场摇摆不定，却总能提供关键线索。", keywords: "情报、灰度、交易", cover: "linear-gradient(180deg,#e2e8f0 0%,#64748b 100%)" }
  ];
  const authorProfile = buildAuthorProfileByName(world.author, world.authorId);
  const authorFollowed = Boolean(authorProfile?.isFollowedByMe);
  const isWorldAuthor = Boolean(
    uiState.isLoggedIn
    && uiState.currentUserId
    && String(uiState.currentUserId || "").trim() === String(authorProfile?.id || world.authorId || "").trim()
  );
  const worldCommentState = getWorldCommentState(world?.id, toMetricCount(world?.comment));
  ensureWorldCardCommentsLoaded(world);
  const worldCommentDraft = getWorldCommentDraft(world?.id);
  const likeFxClass = isWorldActionFxActive("like") ? "tap-pop" : "";
  const favoriteFxClass = isWorldActionFxActive("favorite") ? "tap-pop" : "";
  const followFxClass = isWorldActionFxActive("follow") ? "tap-pop" : "";
  const tipFxClass = isWorldActionFxActive("tip") ? "tip-anim" : "";
  const hasPlayHistory = hasPlayHistoryForWorld(world?.id, uiState.currentUserId);

  return renderExploreShell(`
    <section class="world-page world-rich">
      <div class="world-hero world-carousel">
        <button class="world-hero-back-float unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <div class="world-hero-nav">
          <div class="world-detail-owner-menu-wrap">
            <button class="world-detail-owner-menu-btn" data-action="toggle-world-detail-menu" aria-label="更多操作">
              <span></span><span></span><span></span>
            </button>
            ${
              uiState.worldDetailMenuOpen
                ? `
              <div class="world-detail-owner-menu">
                <button data-action="world-detail-share">分享</button>
                ${isWorldAuthor ? `<button data-action="world-detail-edit">编辑</button>` : ""}
              </div>
            `
                : ""
            }
          </div>
        </div>
        <img src="${currentSlide}" alt="${world.title}" />
        <div class="world-hero-copy">
          ${uiState.worldDetailMenuFeedback ? `<p class="world-detail-menu-feedback">${escapeHtml(uiState.worldDetailMenuFeedback)}</p>` : ""}
          <h1>${world.title}</h1>
          <p class="world-statline">${escapeHtml(profile.statline)}</p>
          <section class="world-author-inline world-author-inline-hero">
            <div class="world-author-inline-strip">
              <button
                class="world-author-avatar user-link user-avatar-click"
                data-action="open-user-modal"
                data-user="${escapeHtml(authorProfile.name || world.author)}"
                data-user-id="${escapeHtml(authorProfile.id || world.authorId || "")}"
                data-avatar-url="${escapeHtml(authorProfile.avatarUrl || "")}"
              >${getAvatarText(world.author)}</button>
              ${
                isReserveDetail
                  ? `
                <span class="world-author-name">${escapeHtml(authorProfile.name)}</span>
                <span class="world-author-fans">${escapeHtml(authorProfile.stats.fans)} 粉丝</span>
                <button class="world-author-action-ghost ${uiState.reserveFollowed ? "active" : ""} ${favoriteFxClass}" data-action="toggle-reserve-follow">${uiState.reserveFollowed ? "★ 已收藏" : "☆ 收藏"}</button>
                <button class="world-author-action-ghost" data-action="noop"><span class="icon-like-outline" aria-hidden="true"></span> 点赞</button>
                <button class="world-author-action-ghost ${tipFxClass}" data-action="world-tip-author"><span class="icon-money-outline" aria-hidden="true"></span> 打赏</button>
                <button
                  class="world-author-follow-btn ${authorFollowed ? "active" : ""} ${followFxClass}"
                  data-action="toggle-world-author-follow"
                  data-user-id="${escapeHtml(authorProfile.id || world.authorId || "")}"
                  data-user="${escapeHtml(authorProfile.name || world.author)}"
                >${authorFollowed ? "✓ 已关注" : "＋ 关注"}</button>
                ${uiState.reserveFeedback ? `<small class="reserve-follow-feedback">${uiState.reserveFeedback}</small>` : ""}
              `
                  : `
                <span class="world-author-name">${escapeHtml(authorProfile.name)}</span>
                <span class="world-author-fans">${escapeHtml(authorProfile.stats.fans)} 粉丝</span>
                <button class="world-author-action-ghost ${world.liked ? "active" : ""} ${likeFxClass}" data-action="toggle-like-story"><span class="icon-like-outline" aria-hidden="true"></span> 赞 ${formatMetricCount(world.like)}</button>
                <button class="world-author-action-ghost ${world.favorited ? "active" : ""} ${favoriteFxClass}" data-action="toggle-fav-story">☆ 收藏 ${formatMetricCount(world.star)}</button>
                <button class="world-author-action-ghost ${tipFxClass}" data-action="world-tip-author"><span class="icon-money-outline" aria-hidden="true"></span> 打赏</button>
                <button
                  class="world-author-follow-btn ${authorFollowed ? "active" : ""} ${followFxClass}"
                  data-action="toggle-world-author-follow"
                  data-user-id="${escapeHtml(authorProfile.id || world.authorId || "")}"
                  data-user="${escapeHtml(authorProfile.name || world.author)}"
                >${authorFollowed ? "✓ 已关注" : "＋ 关注"}</button>
              `
              }
              <div class="world-carousel-actions world-carousel-actions-inline">
                <button data-action="carousel-prev">‹</button>
                <div class="world-carousel-dots">
                  ${heroSlides
                    .map(
                      (_, i) =>
                        `<span class="${i === uiState.worldCarouselIndex ? "active" : ""}" data-action="carousel-goto" data-index="${i}"></span>`
                    )
                    .join("")}
                </div>
                <button data-action="carousel-next">›</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="world-intro world-intro-rich ios-card">
        <div class="world-intro-content">
          <div class="world-fav-box world-fav-float">
            <strong>${(toMetricCount(world.star) / 10000).toFixed(1)}万</strong>
            <span>收藏</span>
          </div>
          <h3>世界简介 · 故事概述</h3>
          ${(profile.intro || [])
            .map((line) => `<p>${escapeHtml(line)}</p>`)
            .join("")}
          <p>本世界支持分支复玩：你每一次输入都将影响关系、资源和后续事件顺序。建议先稳信息，再抢节奏，优先保证关键节点的可逆性。</p>
          <div class="world-meta-strip">
            <div class="world-tag-row">
              <span># ${escapeHtml(world.theme)}</span><span># ${escapeHtml(world.setting)}</span><span># ${escapeHtml(world.background)}</span><span># ${escapeHtml(world.recommend)}</span><span># 可复玩</span>
            </div>
            <div class="world-chart">
              <div><label>剧情张力</label><em style="--bar:${score.tension}%"></em><b>${score.tension}</b></div>
              <div><label>策略深度</label><em style="--bar:${score.strategy}%"></em><b>${score.strategy}</b></div>
              <div><label>新手友好</label><em style="--bar:${score.friendly}%"></em><b>${score.friendly}</b></div>
            </div>
          </div>
        </div>
      </div>

      <section class="world-section">
        <h3>核心角色</h3>
        <div class="world-role-scroll">
          ${roleItems
            .map(
              (r) => `
            <article class="world-role-card ios-card world-role-card-h">
              <div class="world-role-cover" style="background:${r.cover};"></div>
              <div>
                <h4>${r.name}</h4>
                <p>${r.desc}</p>
                <strong class="world-keywords">关键词：${r.keywords}</strong>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="world-comments ios-card">
        <div class="world-comments-head">
          <h3>共${formatMetricCount(worldCommentState?.commentsCount || 0)}条评论</h3>
        </div>
        ${renderUnifiedCommentComposer({
          field: "world-comment-draft",
          value: worldCommentDraft,
          submitAction: "world-comment-submit",
          placeholder: "说点什么...",
          submitting: Boolean(worldCommentState?.submitting)
        })}
        ${worldCommentState?.loading ? `<p class="world-comments-loading">评论加载中...</p>` : ""}
        ${worldCommentState?.error ? `<p class="world-comments-error">评论加载失败：${escapeHtml(worldCommentState.error)}</p>` : ""}
        ${renderThreadCommentListWithControls({
          comments: worldCommentState?.comments || [],
          state: worldCommentState || {},
          openReplyAction: "world-comment-open-reply",
          likeAction: "world-comment-like",
          deleteAction: "world-comment-delete",
          openMenuAction: "world-comment-open-menu",
          replyFromSheetAction: "world-comment-sheet-reply",
          copyFromSheetAction: "world-comment-sheet-copy",
          reportFromSheetAction: "world-comment-sheet-report",
          closeSheetAction: "world-comment-sheet-close",
          replyDraftField: "world-reply-draft",
          replyCancelAction: "world-comment-reply-cancel",
          replySubmitAction: "world-comment-reply-submit"
        })}
      </section>

      <div class="world-detail-floatbar" aria-label="剧情操作栏">
        <div class="world-detail-floatbar-left${hasPlayHistory ? " has-history" : ""}">
          <button class="world-detail-floatbar-btn ghost" data-action="open-world-share">分享</button>
          ${
            hasPlayHistory
              ? `<button class="world-detail-floatbar-btn ghost restart" data-action="restart-world-play" data-world-id="${escapeHtml(String(world?.id || "").trim())}">重新抓马</button>`
              : ""
          }
        </div>
        <button class="world-detail-floatbar-btn start" data-go="#/play/core">开始抓马</button>
      </div>
    </section>
  `);
}

function pageAuthorDetail() {
  const currentWorld = getSelectedWorld();
  const profile = uiState.modalProfile || buildAuthorProfileByName(currentWorld?.author || "Drama 用户", currentWorld?.authorId || "");
  const profileId = String(profile?.id || "").trim() || resolveAuthorIdByName(profile?.name || profile?.handle || "");
  const activeTab = uiState.userModalTab;
  const feedByTab = {
    works: getModalProfileWorks(profile),
    likes: Array.isArray(profile?.likes) ? profile.likes : [],
    favorites: Array.isArray(profile?.favorites) ? profile.favorites : []
  };
  const stats = profile.stats || {
    fans: "0",
    follows: "0",
    works: String(feedByTab.works.length || 0)
  };
  const isFollowing = Boolean(profile?.isFollowedByMe);
  const genderAgeText = formatGenderAgeText(profile?.gender || "保密", profile?.birthday || "");
  const activeFeed = feedByTab[activeTab] || [];
  const isActiveFeedEmpty = activeFeed.length === 0;
  return renderExploreShell(`
    <section class="world-page user-page">
      <article class="user-profile-head ios-card">
        <div class="user-profile-main">
          <div
            class="user-profile-avatar user-avatar-click"
            data-user="${escapeHtml(profile.name)}"
            data-user-id="${escapeHtml(profileId)}"
            data-avatar-url="${escapeHtml(profile.avatarUrl || "")}"
          >${getAvatarText(profile.name)}</div>
          <div class="user-profile-meta">
            <h2>${escapeHtml(profile.name)}</h2>
            <p>${escapeHtml(profile.handle)}</p>
            <small class="user-profile-demographics">${escapeHtml(genderAgeText)}</small>
            <div class="user-profile-stats">
              <span><b>${stats.fans}</b> 粉丝</span>
              <span><b>${stats.follows}</b> 关注</span>
              <span><b>${stats.works}</b> 作品</span>
            </div>
          </div>
          <div class="user-profile-actions">
            <button class="user-follow-btn ${isFollowing ? "active" : ""}" data-action="toggle-follow-author" data-user="${escapeHtml(profile.name)}" data-user-id="${escapeHtml(profileId)}">
              ${isFollowing ? "已关注" : "+ 关注"}
            </button>
            <button class="user-dm-btn" data-action="open-author-dm" data-user="${escapeHtml(profile.name)}" data-user-id="${escapeHtml(profileId)}">私聊</button>
          </div>
        </div>
        ${uiState.authorFeedback ? `<div class="user-follow-feedback">${escapeHtml(uiState.authorFeedback)}</div>` : ""}
        <p class="user-profile-bio">${escapeHtml(profile.bio || "热爱创作与互动剧情")}</p>
      </article>

      <div class="user-tabs ios-card">
        <button class="${activeTab === "works" ? "active" : ""}" data-action="user-modal-tab" data-tab="works">作品</button>
        <button class="${activeTab === "likes" ? "active" : ""}" data-action="user-modal-tab" data-tab="likes">喜欢</button>
        <button class="${activeTab === "favorites" ? "active" : ""}" data-action="user-modal-tab" data-tab="favorites">收藏</button>
      </div>

      <section class="user-feed-grid ${isActiveFeedEmpty ? "is-empty" : ""}">
        ${activeFeed
          .map((item) => {
            const clickable = hasWorldCard(item.id);
            return `
              <article class="user-feed-card" ${clickable ? `data-action="open-world-detail" data-id="${item.id}"` : 'data-action="noop"'}>
                <div class="cover"></div>
                <h4>${escapeHtml(item.title || "未命名")}</h4>
                <p>${escapeHtml(item.subtitle || "")}</p>
                ${item.summary ? `<small>${escapeHtml(item.summary)}</small>` : ""}
              </article>
            `;
          })
          .join("")}
        ${isActiveFeedEmpty ? `<div class="user-feed-empty-tip">暂无内容</div>` : ""}
      </section>
    </section>
  `);
}

function ensureMessageThread(messageId) {
  if (!messageId) return [];
  return Array.isArray(uiState.messageThreads[messageId]) ? uiState.messageThreads[messageId] : [];
}

function getMessageInboxItem(messageId) {
  return MESSAGE_INBOX.find((x) => x.id === messageId);
}

function getCachedMessageMeta(messageId) {
  const id = String(messageId || "").trim();
  if (!id) return null;
  const map = readMessageMetaCache();
  const cached = map[id];
  return cached && typeof cached === "object" ? cached : null;
}

function resolveThreadChatMeta(messageId) {
  const id = String(messageId || "").trim();
  const inboxMeta = getMessageInboxItem(id) || {};
  const peerMeta = uiState.messagePeerPresence[id] && typeof uiState.messagePeerPresence[id] === "object"
    ? uiState.messagePeerPresence[id]
    : {};
  const cachedMeta = getCachedMessageMeta(id) || {};
  const resolvedUserId = String(peerMeta.userId || inboxMeta.userId || cachedMeta.userId || "").trim();
  const authorById = resolvedUserId ? AUTHOR_DIRECTORY[resolvedUserId] : null;
  const name = String(
    peerMeta.name
    || inboxMeta.name
    || cachedMeta.name
    || authorById?.name
    || ""
  ).trim();
  const avatarUrl = String(
    peerMeta.avatarUrl
    || inboxMeta.avatarUrl
    || cachedMeta.avatarUrl
    || authorById?.avatarUrl
    || ""
  ).trim();
  return {
    id,
    type: String(inboxMeta.type || "私聊").trim() || "私聊",
    bizType: String(inboxMeta.bizType || cachedMeta.bizType || "dm").trim() || "dm",
    userId: resolvedUserId,
    name: name || "会话",
    avatarUrl,
    preview: String(inboxMeta.preview || "").trim(),
    time: String(inboxMeta.time || "").trim(),
    worldId: String(inboxMeta.worldId || cachedMeta.worldId || "").trim(),
    sessionId: String(inboxMeta.sessionId || cachedMeta.sessionId || "").trim()
  };
}

function getThreadMessageById(conversationId, messageId) {
  const cid = String(conversationId || "").trim();
  const mid = String(messageId || "").trim();
  if (!cid || !mid) return null;
  const messages = ensureMessageThread(cid);
  return messages.find((msg) => String(msg?.id || "") === mid) || null;
}

function getThreadMessageActionText(message = {}) {
  const type = String(message?.type || "text").trim();
  const text = String(message?.text || "").trim();
  if (type === "image") return "[图片]";
  if (type === "video") return "[视频]";
  if (type === "card" || type === "story_card") return "[故事卡]";
  if (type === "emoji" || type === "sticker") return text || String(message?.payload?.emoji || "").trim() || "[表情]";
  if (type === "system") return text || "[系统消息]";
  return text || "新消息";
}

function normalizeQuotePayload(input = {}) {
  if (!input || typeof input !== "object") return null;
  const messageId = String(input.messageId || input.id || "").trim();
  const text = String(input.text || "").trim();
  const senderName = String(input.senderName || input.author || "").trim();
  if (!messageId || !text) return null;
  return {
    messageId,
    text: text.slice(0, 96),
    senderName: senderName || "引用消息"
  };
}

function resolveQuoteSenderName(conversationId, message = {}) {
  const from = String(message?.from || "").trim();
  if (from === "me") {
    return String(uiState.profile?.name || "我").trim() || "我";
  }
  const meta = resolveThreadChatMeta(conversationId);
  return String(meta?.name || "对方").trim() || "对方";
}

function closeMessageLongPressMenu() {
  uiState.messageLongPressMenuOpen = false;
  uiState.messageForwardPickerOpen = false;
  uiState.messageLongPressMessageId = "";
  uiState.messageLongPressConversationId = "";
  uiState.messageLongPressPointerOffsetX = 0;
  uiState.messageClearConfirmOpen = false;
  uiState.messageClearConfirmConversationId = "";
  uiState.messageDeleteConfirmOpen = false;
  uiState.messageDeleteConfirmConversationId = "";
  uiState.messageDeleteConfirmMessageId = "";
}

function closeMessageCardLongPressMenu() {
  uiState.messageCardLongPressMenuOpen = false;
  uiState.messageCardLongPressConversationId = "";
  uiState.messageCardLongPressPointerOffsetX = 0;
  uiState.messageCardDeleteConfirmOpen = false;
  uiState.messageCardDeleteConfirmConversationId = "";
}

function openMessageCardLongPressMenu(options = {}) {
  const conversationId = String(options.conversationId || "").trim();
  if (!conversationId) return;
  const anchorX = Number(options.anchorX || 0);
  const anchorY = Number(options.anchorY || 0);
  const pointerX = Number(options.pointerX || anchorX || 0);
  const menuWidth = 272;
  const menuHeight = 74;
  const minGap = 12;
  const maxX = Math.max(minGap, window.innerWidth - menuWidth - minGap);
  const maxY = Math.max(minGap, window.innerHeight - menuHeight - minGap);
  const menuLeft = Math.min(maxX, Math.max(minGap, anchorX - (menuWidth / 2)));
  uiState.messageCardLongPressAnchorX = menuLeft;
  uiState.messageCardLongPressAnchorY = Math.min(maxY, Math.max(minGap, anchorY - menuHeight - 18));
  uiState.messageCardLongPressPointerOffsetX = Math.min(menuWidth - 18, Math.max(18, pointerX - menuLeft));
  uiState.messageCardLongPressConversationId = conversationId;
  uiState.messageCardLongPressMenuOpen = true;
  uiState.messageCardDeleteConfirmOpen = false;
  render();
}

function openMessageLongPressMenu(options = {}) {
  const messageId = String(options.messageId || "").trim();
  const conversationId = String(options.conversationId || getActiveConversationId() || "").trim();
  if (!messageId || !conversationId) return;
  const anchorX = Number(options.anchorX || 0);
  const anchorY = Number(options.anchorY || 0);
  const pointerX = Number(options.pointerX || anchorX || 0);
  const menuWidth = 296;
  const menuHeight = 78;
  const minGap = 14;
  const maxX = Math.max(minGap, window.innerWidth - menuWidth - minGap);
  const maxY = Math.max(minGap, window.innerHeight - menuHeight - minGap);
  const menuLeft = Math.min(maxX, Math.max(minGap, anchorX - (menuWidth / 2)));
  uiState.messageLongPressAnchorX = menuLeft;
  uiState.messageLongPressAnchorY = Math.min(maxY, Math.max(minGap, anchorY - menuHeight - 18));
  const pointerOffset = Math.min(menuWidth - 18, Math.max(18, pointerX - menuLeft));
  uiState.messageLongPressPointerOffsetX = pointerOffset;
  uiState.messageLongPressConversationId = conversationId;
  uiState.messageLongPressMessageId = messageId;
  uiState.messageForwardPickerOpen = false;
  uiState.messageLongPressMenuOpen = true;
  render();
}

function refreshInboxPreviewFromThread(conversationId) {
  const cid = String(conversationId || "").trim();
  if (!cid) return;
  const messages = ensureMessageThread(cid);
  const inboxItem = getMessageInboxItem(cid);
  if (!inboxItem) return;
  const latest = messages[messages.length - 1];
  if (!latest) {
    inboxItem.preview = "";
    inboxItem.time = inboxItem.time || "刚刚";
    inboxItem.lastMessageAt = new Date().toISOString();
    inboxItem.badge = 0;
    return;
  }
  inboxItem.preview = getThreadMessageActionText(latest);
  inboxItem.time = String(latest.time || "").trim() || "刚刚";
  inboxItem.lastMessageAt = String(latest.createdAt || "").trim() || new Date().toISOString();
}

function applyWithdrawSystemMessage(conversationId, message = {}, currentUserId = uiState.currentUserId || "") {
  const cid = String(conversationId || "").trim();
  if (!cid || !message) return false;
  const payload = message?.payload && typeof message.payload === "object" ? message.payload : {};
  if (String(payload?.kind || "") !== "withdraw") return false;
  const targetId = String(payload?.targetMessageId || "").trim();
  const fromMe = String(message?.sender_id || "") === String(currentUserId || "");
  const rows = ensureMessageThread(cid);
  if (targetId) {
    setThreadMessageHidden(cid, targetId, true);
    const idx = rows.findIndex((row) => String(row?.id || "") === targetId);
    if (idx >= 0) rows.splice(idx, 1);
  }
  const systemId = String(message?.id || "").trim();
  const exists = rows.findIndex((row) => String(row?.id || "") === systemId);
  const systemRow = {
    id: systemId,
    from: fromMe ? "me" : "other",
    type: "system",
    payload,
    text: fromMe ? "你撤回了一条消息" : "对方撤回了一条消息",
    time: formatThreadClock(message?.created_at),
    createdAt: String(message?.created_at || ""),
    read: true,
    withdrawn: true,
    pending: false
  };
  if (exists >= 0) rows[exists] = systemRow;
  else rows.push(systemRow);
  refreshInboxPreviewFromThread(cid);
  persistMessageThreadForConversation(cid);
  return true;
}

async function forwardThreadMessageToConversation(message, targetConversationId) {
  const targetId = String(targetConversationId || "").trim();
  if (!message || !targetId) return false;
  if (!isUuid(targetId)) return false;
  const type = String(message?.type || "text").trim() || "text";
  const payload = message?.payload && typeof message.payload === "object" ? { ...message.payload } : {};
  const text = getThreadMessageActionText(message);
  const sent = await sendMessageToThread(targetId, text, {
    messageType: type,
    payload
  });
  if (targetId === getActiveConversationId()) {
    applySentThreadMessage(targetId, sent, text);
    return true;
  }
  const inboxItem = getMessageInboxItem(targetId);
  if (inboxItem) {
    updateMessageInboxPreview(targetId, text, {
      time: formatThreadClock(sent?.created_at),
      lastMessageAt: String(sent?.created_at || "").trim()
    });
    markMessageRead(targetId);
  }
  return true;
}

function getMessageUnreadTotal() {
  return MESSAGE_INBOX.reduce((sum, item) => {
    const value = Number(item?.badge || 0);
    if (!Number.isFinite(value) || value <= 0) return sum;
    return sum + Math.floor(value);
  }, 0);
}

function formatMessageUnreadCount(value) {
  const count = Number(value || 0);
  if (!Number.isFinite(count) || count <= 0) return "";
  return count > 99 ? "99+" : String(Math.floor(count));
}

function nowClockText() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || "").trim());
}

function normalizeUserName(value = "") {
  return String(value || "")
    .trim()
    .replace(/^@+/, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function resolveAuthorIdByName(name = "") {
  const needle = normalizeUserName(name);
  if (!needle) return "";
  const hit = Object.values(AUTHOR_DIRECTORY).find((x) => {
    const candidateName = normalizeUserName(x?.name || "");
    const candidateHandle = normalizeUserName(x?.handle || "");
    return candidateName === needle || candidateHandle === needle;
  });
  const id = String(hit?.id || resolveRelationUserIdByName(name) || "").trim();
  return isUuid(id) ? id : "";
}

function upsertAuthUserAliasEntry(user = {}) {
  const id = String(user?.id || "").trim();
  if (!isUuid(id)) return;
  const aliases = [
    user?.nickname,
    user?.name,
    user?.handle,
    user?.email
  ]
    .map((x) => normalizeUserName(x))
    .filter(Boolean);
  aliases.forEach((alias) => {
    AUTH_USER_ALIAS_INDEX[alias] = id;
  });
}

function resolveAuthUserIdByAlias(value = "") {
  const key = normalizeUserName(value);
  if (!key) return "";
  const id = String(AUTH_USER_ALIAS_INDEX[key] || "").trim();
  return isUuid(id) ? id : "";
}

async function ensureAuthUserAliasIndex(force = false) {
  const now = Date.now();
  if (
    !force
    && AUTH_USER_ALIAS_INDEX_AT > 0
    && (now - AUTH_USER_ALIAS_INDEX_AT) < AUTH_USER_ALIAS_INDEX_TTL_MS
    && Object.keys(AUTH_USER_ALIAS_INDEX).length > 0
  ) {
    return;
  }
  const data = await apiGetJson("/auth/users");
  const users = Array.isArray(data?.users) ? data.users : [];
  Object.keys(AUTH_USER_ALIAS_INDEX).forEach((key) => {
    delete AUTH_USER_ALIAS_INDEX[key];
  });
  users.forEach((user) => upsertAuthUserAliasEntry(user));
  AUTH_USER_ALIAS_INDEX_AT = Date.now();
}

async function resolveAuthorIdForAction({ userId = "", name = "", handle = "" } = {}) {
  const explicitId = String(userId || "").trim();
  if (isUuid(explicitId)) return explicitId;

  const localId = resolveAuthorIdByName(name)
    || resolveAuthorIdByName(handle)
    || resolveRelationUserIdByName(name)
    || resolveRelationUserIdByName(handle)
    || resolveAuthUserIdByAlias(name)
    || resolveAuthUserIdByAlias(handle);
  if (localId) return localId;

  try {
    await Promise.race([
      ensureAuthUserAliasIndex(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("ALIAS_INDEX_TIMEOUT")), 320))
    ]);
  } catch {
    return "";
  }
  return resolveAuthorIdByName(name)
    || resolveAuthorIdByName(handle)
    || resolveRelationUserIdByName(name)
    || resolveRelationUserIdByName(handle)
    || resolveAuthUserIdByAlias(name)
    || resolveAuthUserIdByAlias(handle)
    || "";
}

function resolveUserIdFromNode(node) {
  if (!node) return "";
  const ownUserId = String(node.getAttribute?.("data-user-id") || "").trim();
  if (isUuid(ownUserId)) return ownUserId;
  const article = node.closest?.("article, .msg-thread-item, .dynamic-card, .dynamic-detail-card, .community-post-card, .community-post-detail, .msg-comment-item");
  if (article) {
    const articleUserId = String(article.getAttribute?.("data-user-id") || "").trim();
    if (isUuid(articleUserId)) return articleUserId;
  }
  const userName = resolveUserNameFromNode(node);
  return resolveAuthorIdByName(userName) || resolveAuthUserIdByAlias(userName);
}

function getActiveConversationId() {
  const fromHash = getMessageConversationIdFromHash();
  if (isUuid(fromHash)) return fromHash;
  const selected = String(uiState.selectedMessageId || "").trim();
  if (isUuid(selected)) return selected;
  const fallback = MESSAGE_INBOX.find((x) => isUuid(x.id));
  return fallback?.id || "";
}

function hydrateThreadRouteImmediately(conversationId = "") {
  const cidCandidate = String(
    conversationId
    || getMessageConversationIdFromHash()
    || uiState.selectedMessageId
    || ""
  ).trim();
  const cid = isUuid(cidCandidate) ? cidCandidate : "";
  if (!cid) return "";
  uiState.selectedMessageId = cid;
  hydrateMessageThreadFromCache(cid);
  const cachedMeta = getCachedMessageMeta(cid);
  if (!cachedMeta || getMessageInboxItem(cid)) return cid;
  MESSAGE_INBOX.unshift(normalizeStoryInboxItem({
    id: cid,
    name: String(cachedMeta.name || "会话").trim() || "会话",
    preview: "",
    type: "私聊",
    bizType: String(cachedMeta.bizType || "dm").trim() || "dm",
    time: "刚刚",
    lastMessageAt: new Date(Number(cachedMeta.updatedAt || Date.now())).toISOString(),
    badge: 0,
    userId: String(cachedMeta.userId || "").trim(),
    avatarUrl: String(cachedMeta.avatarUrl || "").trim(),
    worldId: String(cachedMeta.worldId || "").trim(),
    sessionId: String(cachedMeta.sessionId || "").trim()
  }));
  return cid;
}

function moveMessageToTop(messageId) {
  const index = MESSAGE_INBOX.findIndex((x) => x.id === messageId);
  if (index <= 0) return;
  const [item] = MESSAGE_INBOX.splice(index, 1);
  MESSAGE_INBOX.unshift(item);
}

function markMessageRead(messageId) {
  const item = getMessageInboxItem(messageId);
  if (item) item.badge = 0;
  setMessageConversationForceUnread(messageId, false);
}

function markAllMessagesReadLocal() {
  const unreadConversationIds = [];
  MESSAGE_INBOX.forEach((item) => {
    const unread = Number(item?.badge || 0);
    if (!Number.isFinite(unread) || unread <= 0) return;
    item.badge = 0;
    setMessageConversationForceUnread(item.id, false);
    if (isUuid(item.id)) unreadConversationIds.push(item.id);
  });
  clearAllMessageConversationForceUnread();
  return unreadConversationIds;
}

async function markAllMessagesRead() {
  const unreadConversationIds = markAllMessagesReadLocal();
  if (!unreadConversationIds.length) {
    uiState.messageFeedback = "";
    render();
    return;
  }
  render();
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.messageFeedback = "";
    return;
  }
  await Promise.allSettled(unreadConversationIds.map((conversationId) => markConversationReadOnServer(conversationId)));
  scheduleBootstrapFullRefresh(uiState.currentUserId);
  uiState.messageFeedback = "";
  render();
}

function updateMessageInboxPreview(messageId, preview, options = {}) {
  const item = getMessageInboxItem(messageId);
  if (!item) return;
  item.preview = preview;
  item.time = String(options.time || "").trim() || nowClockText();
  item.lastMessageAt = String(options.lastMessageAt || "").trim() || item.lastMessageAt || new Date().toISOString();
  moveMessageToTop(messageId);
}

function resolveMessageLastInteractionTs(item = {}) {
  const textFields = [
    item.lastMessageAt,
    item.last_message_at,
    item.updatedAt,
    item.updated_at,
    item.createdAt,
    item.created_at
  ];
  for (let i = 0; i < textFields.length; i += 1) {
    const value = String(textFields[i] || "").trim();
    if (!value) continue;
    const ts = new Date(value).getTime();
    if (Number.isFinite(ts)) return ts;
  }
  const numericFields = [item.lastMessageAt, item.updatedAt, item.createdAt];
  for (let i = 0; i < numericFields.length; i += 1) {
    const value = Number(numericFields[i]);
    if (Number.isFinite(value) && value > 0) return value;
  }
  return Date.now();
}

function resolveMessageTimeBucket(item = {}) {
  const ts = resolveMessageLastInteractionTs(item);
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const d1 = startOfToday.getTime() - (24 * 60 * 60 * 1000);
  const d3 = startOfToday.getTime() - (3 * 24 * 60 * 60 * 1000);
  const d7 = startOfToday.getTime() - (7 * 24 * 60 * 60 * 1000);
  if (ts >= startOfToday.getTime()) return "今天";
  if (ts >= d1) return "昨天";
  if (ts >= d3) return "三天前";
  if (ts >= d7) return "一周前";
  return "更远";
}

function groupMessageInboxByTime(items = []) {
  const order = ["今天", "昨天", "三天前", "一周前", "更远"];
  const bucketMap = {
    今天: [],
    昨天: [],
    三天前: [],
    一周前: [],
    更远: []
  };
  items.forEach((item) => {
    const bucket = resolveMessageTimeBucket(item);
    if (!bucketMap[bucket]) {
      bucketMap.更远.push(item);
      return;
    }
    bucketMap[bucket].push(item);
  });
  return order
    .map((title) => ({ title, items: bucketMap[title] }))
    .filter((group) => group.items.length > 0);
}

function messageInboxChanged(prev = [], next = []) {
  if (!Array.isArray(prev) || !Array.isArray(next)) return true;
  if (prev.length !== next.length) return true;
  for (let i = 0; i < next.length; i += 1) {
    const a = prev[i] || {};
    const b = next[i] || {};
    if ((a.id || "") !== (b.id || "")) return true;
    if ((a.badge || 0) !== (b.badge || 0)) return true;
    if ((a.preview || "") !== (b.preview || "")) return true;
    if ((a.time || "") !== (b.time || "")) return true;
    if ((a.name || "") !== (b.name || "")) return true;
    if ((a.type || "") !== (b.type || "")) return true;
    if ((a.bizType || "") !== (b.bizType || "")) return true;
    if ((a.worldId || "") !== (b.worldId || "")) return true;
    if ((a.sessionId || "") !== (b.sessionId || "")) return true;
  }
  return false;
}

async function syncMessageInbox() {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return false;
  const data = await apiGetJson(`/messages/inbox?userId=${encodeURIComponent(uiState.currentUserId)}&limit=80&_ts=${Date.now()}`);
  const next = (Array.isArray(data?.inbox) ? data.inbox : [])
    .map((item) => applyClearedStateToInboxItem(item))
    .map((item) => applyMessageConversationForceUnread(item))
    .map((item) => normalizeStoryInboxItem(item))
    .filter((item) => !shouldHideInboxConversationByDeletedState(item));
  next.forEach((item) => {
    persistMessageMeta(item?.id, {
      name: item?.name,
      userId: item?.userId,
      avatarUrl: item?.avatarUrl,
      bizType: item?.bizType,
      worldId: item?.worldId,
      sessionId: item?.sessionId
    });
  });
  if (!messageInboxChanged(MESSAGE_INBOX, next)) return false;
  replaceArray(MESSAGE_INBOX, next);
  const activeId = String(uiState.selectedMessageId || "").trim();
  const fromHash = getMessageConversationIdFromHash();
  const currentRoute = getCurrentRoutePath();
  if (!activeId || !MESSAGE_INBOX.some((x) => x.id === activeId)) {
    if (fromHash && (MESSAGE_INBOX.some((x) => x.id === fromHash) || currentRoute === "#/messages/thread")) {
      uiState.selectedMessageId = fromHash;
    } else {
      uiState.selectedMessageId = MESSAGE_INBOX[0]?.id || "";
    }
    uiState.messageReadAckConversationId = "";
  }
  return true;
}

function pushThreadMessage(messageId, text, from = "me", extra = {}) {
  const messages = ensureMessageThread(messageId);
  const messageType = String(extra.type || "text");
  const payload = extra.payload && typeof extra.payload === "object" ? extra.payload : {};
  const createdAt = String(extra.createdAt || extra.created_at || "").trim();
  const resolvedTime = createdAt ? formatThreadClock(createdAt) : nowClockText();
  messages.push({
    id: String(extra.id || ""),
    from,
    type: messageType,
    payload,
    text,
    time: resolvedTime,
    createdAt: createdAt || null,
    read: from !== "me"
  });
  if (from === "me") {
    updateMessageInboxPreview(messageId, text, {
      time: resolvedTime,
      lastMessageAt: createdAt || new Date().toISOString()
    });
    markMessageRead(messageId);
  } else {
    const item = getMessageInboxItem(messageId);
    if (!item) return;
    item.preview = text;
    item.time = resolvedTime;
    item.lastMessageAt = createdAt || new Date().toISOString();
    item.badge = (Number(item.badge) || 0) + 1;
    moveMessageToTop(messageId);
  }
}

function upsertThreadMessageFromServer(messageId, row, currentUserId) {
  if (!messageId || !row) return false;
  if (isThreadMessageHidden(messageId, row?.id)) return false;
  const clearedAt = getMessageThreadClearedAt(messageId);
  if (clearedAt) {
    const createdAtTs = new Date(String(row?.created_at || "")).getTime();
    if (!Number.isFinite(createdAtTs) || createdAtTs <= clearedAt) return false;
  }
  const messages = ensureMessageThread(messageId);
  const msgId = String(row?.id || "").trim();
  const senderId = String(row?.sender_id || "").trim();
  const createdAt = String(row?.created_at || "").trim();
  const from = senderId === String(currentUserId || "") ? "me" : "other";
  const normalized = {
    id: msgId,
    from,
    type: String(row?.message_type || "text"),
    payload: row?.payload && typeof row.payload === "object" ? row.payload : {},
    text: String(row?.content || ""),
    time: formatThreadClock(createdAt),
    createdAt: createdAt || null,
    read: from === "me" ? Boolean(row?.read_by_peer) : true
  };
  const existsAt = msgId ? messages.findIndex((item) => String(item?.id || "") === msgId) : -1;
  if (existsAt >= 0) {
    messages[existsAt] = { ...messages[existsAt], ...normalized };
    return false;
  }
  messages.push(normalized);
  return true;
}

function applyPeerReadReceipt(messageId, lastReadAt) {
  const readTs = new Date(String(lastReadAt || "")).getTime();
  if (!Number.isFinite(readTs)) return false;
  const messages = ensureMessageThread(messageId);
  let changed = false;
  messages.forEach((msg) => {
    if (msg?.from !== "me") return;
    if (msg.read) return;
    const createdTs = new Date(String(msg.createdAt || "")).getTime();
    if (Number.isFinite(createdTs) && createdTs <= readTs) {
      msg.read = true;
      changed = true;
    }
  });
  return changed;
}

function formatThreadClock(isoTime) {
  const dt = new Date(String(isoTime || ""));
  if (Number.isNaN(dt.getTime())) return "刚刚";
  const h = String(dt.getHours()).padStart(2, "0");
  const m = String(dt.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

async function fetchThreadMessages(conversationId, userId, limit = 120) {
  const query = new URLSearchParams({
    conversationId: String(conversationId || "").trim(),
    userId: String(userId || "").trim(),
    limit: String(limit),
    _ts: String(Date.now())
  });
  const data = await apiGetJson(`/messages/thread?${query.toString()}`);
  return {
    messages: Array.isArray(data?.messages) ? data.messages : [],
    peer: data?.peer || null
  };
}

function toThreadViewMessages(rows, currentUserId) {
  const list = [];
  (Array.isArray(rows) ? rows : []).forEach((row) => {
    const conversationId = String(row?.conversation_id || row?.conversationId || "").trim();
    if (conversationId && isThreadMessageHidden(conversationId, row?.id)) return;
    const from = String(row?.sender_id || "") === String(currentUserId || "") ? "me" : "other";
    const type = String(row?.message_type || "text");
    const payload = row?.payload && typeof row.payload === "object" ? row.payload : {};
    if (type === "system" && String(payload?.kind || "") === "withdraw") {
      const targetId = String(payload?.targetMessageId || "").trim();
      if (targetId) {
        if (conversationId) setThreadMessageHidden(conversationId, targetId, true);
        const idx = list.findIndex((x) => String(x?.id || "") === targetId);
        if (idx >= 0) list.splice(idx, 1);
      }
      list.push({
        id: String(row?.id || ""),
        from,
        type: "system",
        payload,
        text: from === "me" ? "你撤回了一条消息" : "对方撤回了一条消息",
        time: formatThreadClock(row?.created_at),
        createdAt: String(row?.created_at || ""),
        read: true,
        withdrawn: true
      });
      return;
    }
    list.push({
      id: String(row?.id || ""),
      from,
      type,
      payload,
      text: String(row?.content || ""),
      time: formatThreadClock(row?.created_at),
      createdAt: String(row?.created_at || ""),
      read: Boolean(row?.read_by_peer)
    });
  });
  return list;
}

function threadViewChanged(prev = [], next = []) {
  if (!Array.isArray(prev) || !Array.isArray(next)) return true;
  if (prev.length !== next.length) return true;
  for (let i = 0; i < prev.length; i += 1) {
    const a = prev[i] || {};
    const b = next[i] || {};
    if ((a.id || "") !== (b.id || "")) return true;
    if ((a.text || "") !== (b.text || "")) return true;
    if ((a.type || "text") !== (b.type || "text")) return true;
    if (JSON.stringify(a.payload || {}) !== JSON.stringify(b.payload || {})) return true;
    if ((a.from || "") !== (b.from || "")) return true;
    if ((a.time || "") !== (b.time || "")) return true;
    if ((a.createdAt || "") !== (b.createdAt || "")) return true;
    if (Boolean(a.read) !== Boolean(b.read)) return true;
  }
  return false;
}

function peerPresenceChanged(prev, next) {
  const a = prev && typeof prev === "object" ? prev : {};
  const b = next && typeof next === "object" ? next : {};
  return (
    String(a.lastReadAt || "") !== String(b.lastReadAt || "")
    || Boolean(a.online) !== Boolean(b.online)
  );
}

function formatPeerOnlineStatus(peer) {
  if (!peer?.lastReadAt) return "离线";
  if (peer.online) return "在线";
  const ts = new Date(peer.lastReadAt).getTime();
  if (!Number.isFinite(ts)) return "离线";
  const mins = Math.max(1, Math.floor((Date.now() - ts) / 60000));
  if (mins < 60) return `${mins} 分钟前在线`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} 小时前在线`;
  const days = Math.floor(hours / 24);
  return `${days} 天前在线`;
}

async function markConversationReadOnServer(conversationId) {
  if (!uiState.currentUserId || !conversationId) return null;
  return apiJson("/messages/read", {
    conversationId,
    userId: uiState.currentUserId
  });
}

function shouldHeartbeatPresence(conversationId) {
  const key = String(conversationId || "").trim();
  if (!key) return false;
  const now = Date.now();
  const last = Number(uiState.messagePresenceBeatAt[key] || 0);
  if (now - last < 10_000) return false;
  uiState.messagePresenceBeatAt[key] = now;
  return true;
}

async function syncActiveConversationThread(options = {}) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    return { messageChanged: false, peerChanged: false };
  }
  const forcedConversationId = String(options?.conversationId || "").trim();
  const currentHash = window.location.hash || "";
  if (!forcedConversationId && !currentHash.startsWith("#/messages/thread")) {
    return { messageChanged: false, peerChanged: false };
  }
  const activeId = forcedConversationId || getActiveConversationId();
  if (!activeId || !isUuid(activeId)) {
    return { messageChanged: false, peerChanged: false };
  }
  const payload = await fetchThreadMessages(activeId, uiState.currentUserId, 120);
  const prevPeer = uiState.messagePeerPresence[activeId] || null;
  const rows = filterThreadRowsByClearedAt(activeId, payload.messages || []);
  if (payload.peer) {
    uiState.messagePeerPresence[activeId] = payload.peer;
    persistMessageMeta(activeId, {
      name: payload.peer?.name,
      userId: payload.peer?.userId,
      avatarUrl: payload.peer?.avatarUrl
    });
  }
  const peerChanged = peerPresenceChanged(prevPeer, uiState.messagePeerPresence[activeId] || null);
  const nextRaw = toThreadViewMessages(rows, uiState.currentUserId);
  const prev = ensureMessageThread(activeId);
  const next = mergeServerThreadWithLocalOptimistic(activeId, prev, nextRaw);
  if (!threadViewChanged(prev, next)) return { messageChanged: false, peerChanged };
  uiState.messageThreads[activeId] = next;
  persistMessageThreadForConversation(activeId);
  const latest = next[next.length - 1];
  if (latest?.text) {
    updateMessageInboxPreview(activeId, latest.text, {
      lastMessageAt: String(latest.createdAt || "").trim() || new Date().toISOString()
    });
    if (latest.from === "me") markMessageRead(activeId);
  }
  return { messageChanged: true, peerChanged };
}

function showMessageFeedback(text) {
  uiState.messageFeedback = text;
  render();
  setTimeout(() => {
    if (uiState.messageFeedback === text) {
      uiState.messageFeedback = "";
      render();
    }
  }, 1300);
}

async function startOrReuseDirectConversation(targetUserId, targetName = "对方", options = {}) {
  const navigate = options.navigate !== false;
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    setPostLoginRedirectHash("#/messages/thread");
    window.location.hash = "#/auth/login";
    return "";
  }
  const targetIdRaw = String(targetUserId || "").trim();
  const targetId = isUuid(targetIdRaw) ? targetIdRaw : resolveAuthorIdByName(targetName);
  if (!targetId) {
    uiState.messageFeedback = "缺少目标用户ID，暂无法发起私聊";
    render();
    return "";
  }
  const resp = await fetch(`${API_BASE}/messages/direct/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      initiatorId: uiState.currentUserId,
      targetUserId: targetId
    })
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok || !data?.conversation?.id) {
    throw new Error(data?.message || data?.code || `DIRECT_START_HTTP_${resp.status}`);
  }
  const conversationId = String(data.conversation.id);
  const targetAvatarUrl = resolveAvatarUrlByIdentity(targetName, targetId);
  clearMessageConversationDeletedAt(conversationId);
  setMessageConversationForceUnread(conversationId, false);
  if (!MESSAGE_INBOX.some((x) => x.id === conversationId)) {
    MESSAGE_INBOX.unshift({
      id: conversationId,
      name: String(targetName || "私聊会话").trim() || "私聊会话",
      userId: targetId,
      avatarUrl: targetAvatarUrl,
      preview: "",
      type: "私聊",
      bizType: "dm",
      time: "刚刚",
      lastMessageAt: new Date().toISOString(),
      badge: 0
    });
  }
  persistMessageMeta(conversationId, {
    name: targetName,
    userId: targetId,
    avatarUrl: targetAvatarUrl,
    bizType: "dm"
  });
  if (!Array.isArray(uiState.messageThreads[conversationId])) {
    uiState.messageThreads[conversationId] = [];
  }
  if (navigate) {
    uiState.selectedMessageId = conversationId;
    uiState.messageReadAckConversationId = "";
    uiState.messagePresenceBeatAt[conversationId] = 0;
    uiState.messageThreadAutoScrollOnEnter = true;
    uiState.messageThreadForceBottomUntil = Date.now() + 1800;
    markMessageRead(conversationId);
  }
  uiState.messageFeedback = "";
  if (navigate) {
    const threadHash = buildMessageThreadHash(conversationId);
    if (window.location.hash !== threadHash) window.location.hash = threadHash;
    else render();
    void syncActiveConversationThread()
      .then((changed) => {
        if (changed) render();
      })
      .catch(() => {});
  } else {
    render();
  }
  scheduleBootstrapFullRefresh(uiState.currentUserId);
  return conversationId;
}

async function openOrCreateDirectThread(targetUserId, targetName = "对方") {
  return startOrReuseDirectConversation(targetUserId, targetName, { navigate: true });
}

function advancePlayTurn(actionText) {
  const safeAction = String(actionText || "").trim();
  if (!safeAction) return;
  if (!PLAY_RESPONSE_POOL.length) return;
  const response = PLAY_RESPONSE_POOL[Math.floor(Math.random() * PLAY_RESPONSE_POOL.length)];
  uiState.playEntries.push({ type: "action", text: safeAction });
  uiState.playEntries.push({ type: "narrator", text: response.narrator });
  uiState.playEntries.push({ type: "impact", text: response.impact });
  uiState.playRound += 1;
}

function scrollPlayTurnToTop(behavior = "auto") {
  const resolveBehavior = (mode = "auto") => (mode === "smooth" ? "smooth" : "auto");
  const setPlayTopPinSpacer = (playMain, heightPx) => {
    const clamped = Math.max(0, Math.round(Number(heightPx || 0)));
    uiState.playTopPinSpacer = clamped;
    const spacerNode = playMain.querySelector(".play-scroll-spacer");
    if (spacerNode instanceof HTMLElement) spacerNode.style.height = `${clamped}px`;
  };
  const alignLatestTurnToTop = (mode = "auto") => {
    const playMain = document.querySelector(".play-main");
    if (!(playMain instanceof HTMLElement)) {
      setCurrentViewScrollTop(0);
      return;
    }

    const latestTurn = playMain.querySelector(".play-current-turn");
    if (!(latestTurn instanceof HTMLElement)) {
      setPlayTopPinSpacer(playMain, 0);
      playMain.scrollTo({ top: 0, behavior: resolveBehavior(mode) });
      return;
    }

    const anchor = latestTurn.querySelector(".play-log-action")
      || latestTurn.querySelector(".play-narrative-meta")
      || latestTurn.querySelector(".play-narrative-block")
      || latestTurn;
    if (!(anchor instanceof HTMLElement)) {
      setPlayTopPinSpacer(playMain, 0);
      playMain.scrollTo({ top: 0, behavior: resolveBehavior(mode) });
      return;
    }

    const mainRect = playMain.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const desiredTop = Math.max(0, playMain.scrollTop + (anchorRect.top - mainRect.top) - 16);
    const currentSpacer = Math.max(0, Math.round(Number(uiState.playTopPinSpacer || 0)));
    const baseScrollable = (playMain.scrollHeight - playMain.clientHeight) - currentSpacer;
    const requiredSpacer = Math.max(0, Math.ceil(desiredTop - baseScrollable));
    setPlayTopPinSpacer(playMain, requiredSpacer);
    const maxScrollable = Math.max(0, playMain.scrollHeight - playMain.clientHeight);
    const nextTop = Math.min(desiredTop, maxScrollable);
    playMain.scrollTo({ top: nextTop, behavior: resolveBehavior(mode) });
  };

  requestAnimationFrame(() => {
    alignLatestTurnToTop(behavior);
    window.setTimeout(() => alignLatestTurnToTop("auto"), 80);
    window.setTimeout(() => alignLatestTurnToTop("auto"), 220);
  });
}

function groupPlayEntriesByTurn(entries = []) {
  const turns = [];
  let currentTurn = null;
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    if (entry.type === "action") {
      if (currentTurn) turns.push(currentTurn);
      currentTurn = { action: entry, items: [] };
      return;
    }
    if (currentTurn) {
      currentTurn.items.push(entry);
      return;
    }
    turns.push({ action: null, items: [entry] });
  });
  if (currentTurn) turns.push(currentTurn);
  return turns;
}

function triggerPlayLatestTurnPulse() {
  const nonce = Number(uiState.playLatestTurnPulseNonce || 0) + 1;
  uiState.playLatestTurnPulseNonce = nonce;
  uiState.playLatestTurnPulseUntil = Date.now() + 1200;
  window.setTimeout(() => {
    if (Number(uiState.playLatestTurnPulseNonce || 0) !== nonce) return;
    uiState.playLatestTurnPulseUntil = 0;
    render();
  }, 1250);
}

function clearPlayPendingEntries() {
  uiState.playEntries = uiState.playEntries.filter((x) => x.type !== "pending");
}

function resetPlayStateForWorld(worldId = uiState.selectedWorldId) {
  const world = FEED_DATA.find((x) => x.id === worldId) || getSelectedWorld();
  const profile = getWorldProfile(world);
  uiState.playRequestNonce = Number(uiState.playRequestNonce || 0) + 1;
  uiState.playSessionId = "";
  uiState.playRequesting = false;
  uiState.playHintOpen = false;
  uiState.playSystemHint = "";
  uiState.playSystemHintTone = "notice";
  uiState.playIdeaModalOpen = false;
  uiState.playIdeaOptions = [];
  uiState.playStatusExpanded = true;
  uiState.playToolsExpanded = false;
  uiState.playModelMenuOpen = false;
  uiState.playActionDraft = "";
  uiState.playRound = 1;
  uiState.playChapter = profile.chapter || "序幕";
  uiState.playSceneImageReady = false;
  uiState.playEntries = getProfileOpeningEntries(profile);
  uiState.playPromptQuestion = "你打算怎么做？";
  uiState.playPromptOptions = [];
  uiState.playAutoOpeningRequested = false;
  uiState.playSessionBlockedReason = "";
  uiState.playResumeLoading = false;
  uiState.playAutoResumeCheckedWorldId = "";
  uiState.playAutoResumeInFlight = false;
  uiState.playInitScrollPending = true;
  uiState.playTopPinSpacer = 0;
  uiState.playLatestTurnPulseUntil = 0;
  uiState.playLatestTurnPulseNonce = 0;
}

function parseNarrativeToEntries(narrativeText) {
  const cleanupNarrativeBody = (rawText) => {
    let clean = String(rawText || "");
    clean = clean
      .replace(/(?:【\s*)?(?:承接|结果|抛球给用户|抛球给用户)\s*】?/g, "")
      .replace(/<\/?NARRATIVE_BLOCK>?/gi, "")
      .replace(/<\/?JSON_BLOCK>?/gi, "");
    // Remove leaked choice-hook tails from narrative display; these choices belong to the lightbulb modal.
    clean = clean.replace(
      /(现在[，,。]?\s*你可以选择[\s\S]*?(?:故事走向|接下来的走向|后续走向|将如何展开|将如何发展)[。！？]?)/g,
      ""
    );
    clean = clean.replace(
      /(你(?:将)?如何抉择[？?][\s\S]*$)/g,
      "你将如何抉择？"
    );
    return clean.replace(/\s{2,}/g, " ").trim();
  };

  const text = cleanupNarrativeBody(narrativeText);
  if (!text) return [];
  const entries = [];
  const sectionRe = /【([^】]+)】\s*([\s\S]*?)(?=(?:\n【[^】]+】)|$)/g;
  let matched = false;
  const narratorBlocks = [];
  let m;
  while ((m = sectionRe.exec(text)) !== null) {
    matched = true;
    const title = (m[1] || "").trim();
    const body = (m[2] || "").trim().replaceAll(/\n+/g, " ");
    if (!body) continue;
    if (title.includes("抛球给用户") || title.includes("抛球给用户")) continue;
    if (title.includes("承接") || title.includes("结果")) {
      narratorBlocks.push(body);
      continue;
    }
    entries.push({ type: "impact", text: `${title}：${body}` });
  }
  if (!matched) {
    const oneBlock = text.replace(/\n+/g, " ").replace(/\s{2,}/g, " ").trim();
    if (oneBlock) entries.push({ type: "narrator", text: oneBlock });
    return entries;
  }
  if (narratorBlocks.length) {
    entries.unshift({
      type: "narrator",
      text: narratorBlocks.join(" ").replace(/\s{2,}/g, " ").trim()
    });
  }
  return entries;
}

function extractPlayPromptFromResponse(actionResult, jsonBlock, world = getSelectedWorld()) {
  let question = "你打算怎么做？";
  let options = [];
  const text = String(actionResult || "").replace(/\n+/g, " ");

  const makeContextFallback = (sourceText) => {
    const source = String(sourceText || "");
    const anchors = [];
    const people = source.match(/([^\s，。、“”]{2,8})(?:男士|女士|女孩|男生|同桌|老师|店员|服务生|前台|陌生人)/g) || [];
    for (const item of people) {
      const clean = String(item).replace(/(男士|女士|女孩|男生|同桌|老师|店员|服务生|前台|陌生人)$/g, "").trim();
      if (clean && clean.length <= 8) anchors.push(clean);
      if (anchors.length >= 2) break;
    }
    const objectWords = (source.match(/酒杯|吧台|手机|笔记|门口|窗边|走廊|名单|通知|纸条|课本|桌面|工牌|屏幕|档案|人群|乐声|课桌|窗帘/g) || []);
    for (const item of objectWords) {
      if (!anchors.includes(item)) anchors.push(item);
      if (anchors.length >= 3) break;
    }
    if (anchors.length >= 2) {
      return [
        `先提起“${anchors[0]}”，试探对方态度`,
        `先围绕“${anchors[1]}”问一个具体问题`,
        "先给出一句低风险自我信息，再看对方反应"
      ];
    }
    if (anchors.length === 1) {
      return [
        `先围绕“${anchors[0]}”开口，不直接表态`,
        "先观察对方的即时反应，再决定推进",
        "先抛一个具体问题，避免空泛寒暄"
      ];
    }
    return [
      "先观察对方的即时反应，再决定推进",
      "先确认一个具体细节后再开口",
      "先抛一个低风险具体问题试探"
    ];
  };

  const nextChoices = jsonBlock?.director?.next_choices;
  if (Array.isArray(nextChoices) && nextChoices.length) {
    options = nextChoices
      .map((choice) => {
        const label = String(choice?.label || "").trim();
        const hint = String(choice?.prompt_hint || "").trim().replace(/^你可以输入：?/, "");
        if (label && hint) return `${label}：${hint}`;
        return label || hint;
      })
      .filter(Boolean);
  }

  if (!options.length) {
    const block = String(actionResult || "").match(/【(?:抛球给用户|抛球给用户)】([\s\S]*?)(?=\n【|$)/);
    const body = block?.[1] || "";
    options = body
      .split(/\n+/)
      .map((line) => line.replace(/^\s*\d+\s*[.、]\s*/, "").trim())
      .filter((line) => line && !line.includes("你打算怎么做"));
  }

  if (!options.length) {
    const tri = text.match(/是([^，。,？?]{2,14})[，,、\s]*(?:还是|或是|或者)([^，。,？?]{2,14})[，,、\s]*(?:还是|或是|或者)([^，。,？?]{2,14})[？?]/);
    if (tri) {
      options = [
        `先接触${tri[1].trim()}`,
        `先接触${tri[2].trim()}`,
        `先接触${tri[3].trim()}`
      ];
    } else {
      const duo = text.match(/是([^，。,？?]{2,16})[，,、\s]*(?:还是|或是|或者)([^，。,？?]{2,16})[？?]/);
      if (duo) {
        options = [`先选${duo[1].trim()}`, `先选${duo[2].trim()}`];
      }
    }
  }

  const qMatch = String(actionResult || "").match(/你打算怎么做[？?]?/);
  if (qMatch) question = qMatch[0].replace("?", "？");
  const isGeneric = (line) => /最小信任交换|核验初始线索|推进一步|主线目标|关系迁移|围绕“?[^”"]{1,18}”?推进一步|完成一次明确/.test(String(line || ""));
  options = options
    .map((x) => String(x || "").replace(/^\s*\d+\s*[.、]\s*/, "").trim())
    .filter((x) => x && !isGeneric(x));
  if (!options.length) {
    options = makeContextFallback(text);
  }

  return {
    question,
    options: [...new Set(options)].slice(0, 6)
  };
}

function pickPlayGuideOptions(world = getSelectedWorld(), size = 3) {
  const base = Array.isArray(uiState.playPromptOptions) && uiState.playPromptOptions.length
    ? uiState.playPromptOptions
    : ["先观察对方的即时反应，再决定推进", "先确认一个具体细节后再开口", "先抛一个低风险具体问题试探"];
  const uniq = [...new Set(base.map((x) => String(x || "").trim()).filter(Boolean))];
  return uniq.slice(0, size);
}

async function apiJson(path, payload, method = "POST", fetchOptions = {}) {
  const timeoutMsRaw = Number.parseInt(String(fetchOptions?.timeoutMs ?? "0"), 10);
  const timeoutMs = Number.isFinite(timeoutMsRaw) && timeoutMsRaw > 0 ? timeoutMsRaw : 0;
  const { timeoutMs: _omitTimeoutMs, ...requestOptions } = fetchOptions || {};
  const controller = timeoutMs > 0 ? new AbortController() : null;
  const timer = controller
    ? window.setTimeout(() => controller.abort(), timeoutMs)
    : null;
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(payload),
      ...requestOptions,
      signal: requestOptions.signal || controller?.signal
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error || "");
    if (error?.name === "AbortError") {
      throw new Error("REQUEST_TIMEOUT");
    }
    if (/Failed to fetch|NetworkError|fetch/i.test(msg)) {
      throw new Error("NETWORK_UNREACHABLE");
    }
    throw error;
  } finally {
    if (timer) window.clearTimeout(timer);
  }
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const err = new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    err.code = String(data?.code || "").trim();
    err.httpStatus = Number(resp.status || 0);
    throw err;
  }
  return data;
}

async function apiGetJson(path) {
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      cache: "no-store",
      credentials: "same-origin",
      headers: {
        "Cache-Control": "no-cache"
      }
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error || "");
    if (/Failed to fetch|NetworkError|fetch/i.test(msg)) {
      throw new Error("NETWORK_UNREACHABLE");
    }
    throw error;
  }
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const err = new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    err.code = String(data?.code || "").trim();
    err.httpStatus = Number(resp.status || 0);
    throw err;
  }
  return data;
}

async function getServerAuthSessionUser() {
  try {
    const resp = await fetch(`${API_BASE}/auth/session`, {
      method: "GET",
      cache: "no-store",
      credentials: "same-origin",
      headers: {
        "Cache-Control": "no-cache"
      }
    });
    if (!resp.ok) return null;
    const data = await resp.json().catch(() => ({}));
    if (!data?.user?.id) return null;
    return data.user;
  } catch {
    return null;
  }
}

function extractRawUrlFromCssUrl(rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) return "";
  const match = value.match(/^url\((['"]?)(.*)\1\)$/i);
  return match ? String(match[2] || "").trim() : value;
}

function normalizeCommunityJoinMode(label) {
  if (label === "审核加入") return "approval";
  if (label === "仅邀请") return "invite_only";
  return "public";
}

function formatCommunityMemberCount(value) {
  const count = Math.max(0, Number(value) || 0);
  if (count >= 10000) return `${(count / 10000).toFixed(1)}万人`;
  return `${count}人`;
}

function formatCommunityOnlineCount(value) {
  const count = Math.max(1, Math.round(Number(value) || 1));
  if (count >= 10000) return `${(count / 10000).toFixed(1)}w`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return String(count);
}

function normalizeCommunityItemFromCreateResponse(community = {}, fallback = {}) {
  const memberCount = Math.max(1, Number(community?.member_count || fallback.memberCount || 1));
  const tags = Array.isArray(community?.tags)
    ? community.tags
    : (Array.isArray(fallback.tags) ? fallback.tags : []);
  const coverUrl = String(
    community?.cover_url
    || fallback.coverUrl
    || ""
  ).trim();
  const avatarUrl = String(
    fallback.avatarUrl
    || community?.avatar_url
    || ""
  ).trim();
  return {
    id: String(community?.id || ""),
    name: String(community?.name || fallback.name || "新社群"),
    desc: String(community?.description || fallback.description || "暂无描述"),
    tags: tags.filter(Boolean).slice(0, 4),
    members: formatCommunityMemberCount(memberCount),
    online: formatCommunityOnlineCount(Math.max(1, Math.round(memberCount * 0.18))),
    updated: "刚刚",
    gender: String(community?.gender_focus || fallback.genderFocus || "不限频向"),
    updatedHours: 0,
    memberCount,
    ownerId: String(community?.owner_id || fallback.ownerId || uiState.currentUserId || ""),
    joinedByMe: true,
    avatarUrl,
    cover: coverUrl ? `url("${coverUrl}")` : "",
    maskOpacity: Number.isFinite(Number(community?.cover_mask_opacity))
      ? Number(community.cover_mask_opacity)
      : Number.isFinite(Number(fallback.maskOpacity))
        ? Number(fallback.maskOpacity)
        : 0.38
  };
}

async function publishCommunityCreateAndPersist() {
  const name = String(uiState.communityCreateName || "").trim();
  const description = String(uiState.communityCreateDesc || "").trim();
  const rawTags = String(uiState.communityCreateTags || "").trim();
  if (!name || !description) {
    uiState.communityCreateError = "请填写社区名称和简介";
    render();
    return;
  }
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.communityCreateError = "请先登录后再创建社区";
    setPostLoginRedirectHash("#/community/create");
    window.location.hash = "#/auth/login";
    render();
    return;
  }
  if (uiState.communityCreateAssetProcessing) {
    uiState.communityCreateError = "图片处理中，请稍候再发布";
    render();
    return;
  }

  const tags = rawTags
    ? rawTags.split(/[、,/，\s]+/).map((x) => String(x || "").trim()).filter(Boolean).slice(0, 8)
    : ["新社群"];
  const draftAvatarUrl = String(uiState.communityCreateAvatar || "").trim();
  const draftCoverUrl = extractRawUrlFromCssUrl(uiState.communityCreateCover);
  const payload = {
    ownerId: uiState.currentUserId,
    name,
    description,
    tags,
    coverUrl: draftCoverUrl,
    avatarUrl: draftAvatarUrl,
    coverMaskOpacity: Number.isFinite(Number(uiState.communityCreateMaskOpacity))
      ? Number(uiState.communityCreateMaskOpacity)
      : 0.38,
    joinMode: normalizeCommunityJoinMode(uiState.communityCreateJoinMode),
    theme: tags[0] || "综合",
    genderFocus: "不限频向"
  };

  uiState.communityCreateSubmitting = true;
  uiState.communityCreateError = "";
  render();
  try {
    const data = await apiJson("/community/communities", payload);
    const created = data?.community || {};
    const createdId = String(created?.id || "").trim();
    if (!createdId) throw new Error("创建失败，请稍后重试");
    const normalizedCommunity = normalizeCommunityItemFromCreateResponse(created, {
      ownerId: uiState.currentUserId,
      name,
      description,
      tags,
      avatarUrl: draftAvatarUrl,
      coverUrl: draftCoverUrl,
      maskOpacity: Number.isFinite(Number(uiState.communityCreateMaskOpacity))
        ? Number(uiState.communityCreateMaskOpacity)
        : 0.38,
      genderFocus: "不限频向",
      memberCount: 1
    });
    const oldList = Array.isArray(COMMUNITY_LIST) ? COMMUNITY_LIST : [];
    const deduped = oldList.filter((x) => String(x?.id || "") !== createdId);
    COMMUNITY_LIST.splice(0, COMMUNITY_LIST.length, normalizedCommunity, ...deduped);
    persistCommunityItemToCache(normalizedCommunity);
    if (draftAvatarUrl || draftCoverUrl) {
      const persistedCoverUrl = String(created?.cover_url || draftCoverUrl || "").trim();
      persistCommunityAssetById(createdId, {
        avatarUrl: draftAvatarUrl,
        coverUrl: persistedCoverUrl
      });
    }
    overlayCommunityAssetsFromCache();
    uiState.selectedCommunityId = createdId;
    uiState.communityCreatePublishedId = "";
    uiState.communityMyTab = "created";
    uiState.communityCreateName = "";
    uiState.communityCreateTags = "";
    uiState.communityCreateDesc = "";
    uiState.communityCreateAvatar = "";
    uiState.communityCreateJoinMode = "公开加入";
    uiState.communityCreateCover = "";
    uiState.communityCreateMaskOpacity = 0.38;
    window.location.hash = "#/community/home";
    void bootstrapClientData(uiState.currentUserId).catch(() => {});
    scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 260 });
  } catch (error) {
    uiState.communityCreateError = error instanceof Error ? error.message : "创建失败，请稍后重试";
  } finally {
    uiState.communityCreateSubmitting = false;
    render();
  }
}

function normalizeCommunityPostFromApi(post = {}) {
  const rawContent = String(post?.content || "").trim();
  const titleMatch = rawContent.match(/^【([^】]{1,80})】\s*\n?([\s\S]*)$/);
  const title = titleMatch ? String(titleMatch[1] || "").trim() : (rawContent ? rawContent.slice(0, 28) : "社区动态");
  const text = titleMatch ? String(titleMatch[2] || "").trim() : rawContent;
  const mediaUrls = normalizeMediaUrls(post?.media_urls || post?.mediaUrls);
  return {
    id: String(post?.id || `cp_${Date.now()}`),
    user: String(post?.author_name || post?.authorName || "").trim() || "匿名",
    time: formatWorldCommentTime(post?.created_at || post?.createdAt || Date.now()),
    title,
    text,
    tag: Boolean(post?.is_featured || post?.isFeatured) ? "精华" : "动态",
    likes: Number(post?.likes_count || post?.likes || 0),
    stars: Number(post?.favorites_count || post?.stars || 0),
    comments: Number(post?.comments_count || post?.comments || 0),
    featured: Boolean(post?.is_featured || post?.isFeatured),
    story: String(post?.world_title || post?.worldTitle || "").trim() || undefined,
    storyId: String(post?.linked_world_card_id || post?.storyId || "").trim() || undefined,
    mediaUrls
  };
}

async function publishCommunityPostAndPersist() {
  const text = String(uiState.communityComposeText || "").trim();
  const title = String(uiState.communityComposeTitle || "").trim();
  const mediaList = Array.isArray(uiState.communityComposeMedia) ? uiState.communityComposeMedia : [];
  const mediaUrls = normalizeMediaUrls(mediaList);
  const hasText = Boolean(String(title || text).trim());
  if (!mediaUrls.length && !hasText) {
    uiState.communityGroupFeedback = "请填写文字内容或上传至少 1 张图片";
    render();
    return;
  }
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.communityGroupFeedback = "请先登录后再发布";
    setPostLoginRedirectHash("#/community/post");
    window.location.hash = "#/auth/login";
    render();
    return;
  }
  const communityId = String(resolveCommunityComposeTargetId() || "").trim();
  if (!communityId || !isUuid(communityId)) {
    uiState.communityGroupFeedback = "未选择有效社区，无法发布";
    render();
    return;
  }
  const content = title ? `【${title}】\n${text}`.trim() : text;

  uiState.communityPostPublished = true;
  uiState.communityGroupFeedback = "";
  render();
  try {
    const data = await apiJson("/community/posts", {
      communityId,
      authorId: uiState.currentUserId,
      content,
      linkedWorldCardId: uiState.communityComposeStoryId || null,
      postType: "text",
      visibility: normalizeComposeVisibility(uiState.communityComposeVisibility),
      mediaUrls,
      mentions: uiState.communityComposeMentions || [],
      topics: uiState.communityComposeTopics || []
    });
    const nextPost = normalizeCommunityPostFromApi(data?.post || {});
    if (!Array.isArray(nextPost.mediaUrls) || nextPost.mediaUrls.length === 0) {
      nextPost.mediaUrls = [...mediaUrls];
    }
    if (!COMMUNITY_POSTS[communityId]) COMMUNITY_POSTS[communityId] = [];
    COMMUNITY_POSTS[communityId].unshift(nextPost);
    uiState.selectedCommunityPostId = nextPost.id;
    uiState.communityComposeTitle = "";
    uiState.communityComposeText = "";
    uiState.communityComposeMedia = [];
    uiState.communityComposeMentions = [];
    uiState.communityComposeTopics = [];
    uiState.communityComposeStoryId = "";
    uiState.communityComposeMentionSheetOpen = false;
    uiState.communityComposeTopicSheetOpen = false;
    uiState.storyBindSheetOpen = false;
    uiState.storyBindSheetTarget = "";
    uiState.storyBindSearchKeyword = "";
    uiState.communityComposeVisibility = "community_only";
    const selectedCommunity = getSelectedCommunity();
    if (selectedCommunity) {
      selectedCommunity.postCount = Math.max(0, Number(selectedCommunity.postCount || 0) + 1);
      selectedCommunity.updated = "刚刚";
      selectedCommunity.updatedHours = 0;
      persistCommunityItemToCache(selectedCommunity);
    }
    persistCommunityPostItemToCache(communityId, nextPost);
    uiState.communityPostPublished = false;
    uiState.communityGroupFeedback = "发布成功";
    const targetHash = "#/community/post/detail";
    if ((window.location.hash || "") !== targetHash) window.location.hash = targetHash;
    else render();
    void bootstrapClientData(uiState.currentUserId).catch(() => {});
  } catch (error) {
    uiState.communityPostPublished = false;
    const errMsg = error instanceof Error ? String(error.message || "").trim() : "";
    const errCode = String(error?.code || "").trim();
    const staleCommunity = (
      errCode === "COMMUNITY_NOT_FOUND"
      || /community not found/i.test(errMsg)
      || /community_posts_community_id_fkey/i.test(errMsg)
    );
    if (staleCommunity) {
      removeCommunityFromLocalState(communityId);
      uiState.communityGroupFeedback = "该社区已不存在，已为你刷新社区列表";
      void bootstrapClientData(uiState.currentUserId)
        .then(() => {
          render();
        })
        .catch(() => {});
      scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 180 });
      if ((window.location.hash || "").startsWith("#/community/group")) {
        window.location.hash = "#/community/home";
      }
      render();
      return;
    }
    if (errCode === "FORBIDDEN" && /成员/.test(errMsg)) {
      uiState.communityGroupFeedback = "你当前不是该社区成员，无法发布动态";
      render();
      return;
    }
    uiState.communityGroupFeedback = errMsg || "发布失败，请稍后重试";
  } finally {
    render();
  }
}

async function joinSelectedCommunity() {
  const c = getSelectedCommunity();
  if (!c?.id) return;
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.communityGroupFeedback = "请先登录后再加入社区";
    setPostLoginRedirectHash(`#/community/group`);
    window.location.hash = "#/auth/login";
    render();
    return;
  }
  if (c.joinedByMe) {
    uiState.communityGroupFeedback = "你已加入该社区";
    render();
    return;
  }
  uiState.communityGroupJoining = true;
  uiState.communityGroupFeedback = "";
  render();
  try {
    const data = await apiJson("/community/communities/join", {
      communityId: c.id,
      userId: uiState.currentUserId
    });
    c.joinedByMe = Boolean(data?.joined);
    const nextMemberCount = Math.max(0, Number(data?.memberCount || c.memberCount || 0));
    c.memberCount = nextMemberCount;
    c.members = formatCommunityMemberCount(nextMemberCount);
    c.online = formatCommunityOnlineCount(Math.max(1, Math.round(nextMemberCount * 0.18)));
    c.updated = "刚刚";
    c.updatedHours = 0;
    persistCommunityItemToCache(c);
    uiState.communityGroupFeedback = "加入成功";
    void bootstrapClientData(uiState.currentUserId).catch(() => {});
    scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 260 });
  } catch (error) {
    uiState.communityGroupFeedback = error instanceof Error ? error.message : "加入失败，请稍后重试";
  } finally {
    uiState.communityGroupJoining = false;
    render();
  }
}

async function apiSseJson(path, payload, handlers = {}) {
  const controller = new AbortController();
  const timeoutMs = Number.parseInt(String(window?.__PLAY_STREAM_TIMEOUT_MS__ || 90000), 10);
  const timer = Number.isFinite(timeoutMs) && timeoutMs > 0
    ? window.setTimeout(() => controller.abort(), timeoutMs)
    : 0;
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
  } catch (error) {
    if (timer) window.clearTimeout(timer);
    const msg = error instanceof Error ? error.message : String(error || "");
    if (/Failed to fetch|NetworkError|fetch/i.test(msg)) {
      throw new Error("NETWORK_UNREACHABLE");
    }
    throw error;
  }
  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    const err = new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    err.code = String(data?.code || "").trim();
    err.httpStatus = Number(resp.status || 0);
    throw err;
  }
  if (!resp.body) {
    throw new Error("STREAM_UNSUPPORTED");
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  const emitEvent = (rawEvent) => {
    const lines = String(rawEvent || "").split(/\r?\n/);
    let eventName = "message";
    const dataParts = [];
    lines.forEach((line) => {
      if (line.startsWith("event:")) eventName = line.slice(6).trim() || "message";
      else if (line.startsWith("data:")) dataParts.push(line.slice(5).trim());
    });
    const dataText = dataParts.join("\n").trim();
    let data = {};
    if (dataText) {
      try {
        data = JSON.parse(dataText);
      } catch {
        data = { text: dataText };
      }
    }
    if (eventName === "delta") handlers.onDelta?.(String(data?.text || ""));
    if (eventName === "final") handlers.onFinal?.(data?.response || {});
    if (eventName === "error") handlers.onError?.(data || {});
  };

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split(/\n\n/);
      buffer = events.pop() || "";
      events.forEach((evt) => emitEvent(evt));
    }
  } catch (error) {
    if (error && typeof error === "object" && error.name === "AbortError") {
      throw new Error("STREAM_TIMEOUT");
    }
    throw error;
  } finally {
    if (timer) window.clearTimeout(timer);
  }
}

async function createDynamicPostAndSync({
  title,
  text,
  type,
  mediaItems = [],
  linkedWorldCardId = "",
  visibility = "public",
  allowComments = true
}) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const pickedMedia = normalizeDynamicMediaItems(mediaItems);
  const hasVideo = pickedMedia.some((x) => x.mediaType === "video");
  const postType = hasVideo ? "video" : (pickedMedia.length > 0 ? "image" : (type === "故事卡" ? "story_card" : "text"));
  const bindWorldId = String(linkedWorldCardId || "").trim();
  const data = await apiJson("/posts", {
    authorId: uiState.currentUserId,
    postType,
    title,
    content: text,
    linkedWorldCardId: bindWorldId || null,
    visibility: normalizeDynamicVisibility(visibility),
    allowComments: allowComments !== false,
    mediaItems: pickedMedia.map((item) => ({
      mediaType: item.mediaType,
      url: item.url,
      durationSec: item.durationSec || 0
    }))
  });
  const row = data?.post;
  if (!row?.id) throw new Error("POST_CREATE_FAILED");
  const serverMediaItems = normalizeDynamicMediaItems(row.media_items || []);
  const resolvedMediaItems = serverMediaItems.length > 0
    ? serverMediaItems
    : pickedMedia;
  const dynamic = {
    id: row.id,
    tab: "我的",
    type: postType === "story_card" ? "story" : postType,
    author: uiState.profile.name || "我",
    handle: uiState.profile.handle || "@me",
    time: "刚刚",
    title: title || `${type}动态`,
    text: text || "发布了一条新动态",
    tags: [type, "我的动态"],
    likes: 0,
    comments: 0,
    worldId: row.linked_world_card_id || bindWorldId || null,
    visibility: normalizeDynamicVisibility(row.visibility || visibility),
    allowComments: row.allow_comments !== false && allowComments !== false,
    mediaItems: resolvedMediaItems
  };
  const cleanDynamicPosts = uiState.dynamicPosts.filter((x) => String(x?.id || "") !== dynamic.id);
  uiState.dynamicPosts = [dynamic, ...cleanDynamicPosts].slice(0, 30);
  const cleanFeed = DYNAMIC_FEED.filter((x) => String(x?.id || "") !== dynamic.id);
  DYNAMIC_FEED.splice(0, DYNAMIC_FEED.length, dynamic, ...cleanFeed.slice(0, 119));
  persistDynamicItemToCache(dynamic);
  uiState.selectedDynamicId = dynamic.id;
  return dynamic;
}

function syncDynamicItemMetrics(postId, patch = {}) {
  const lists = [uiState.dynamicPosts, DYNAMIC_FEED];
  lists.forEach((list) => {
    const idx = list.findIndex((x) => x.id === postId);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...patch };
    }
  });
  persistDynamicMetricsToCache(postId, patch);
  persistDynamicInteractionState(postId, patch);
}

function syncWorldCardMetrics(worldCardId, patch = {}) {
  const idx = FEED_DATA.findIndex((x) => x.id === worldCardId);
  if (idx < 0) return;
  FEED_DATA[idx] = { ...FEED_DATA[idx], ...patch };
}

function getWorldInteractionCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${WORLD_INTERACTION_CACHE_PREFIX}${uid}` : "";
}

function getPendingWorldReactionKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${WORLD_REACTION_PENDING_PREFIX}${uid}` : "";
}

function getFollowStateCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${FOLLOW_STATE_CACHE_PREFIX}${uid}` : "";
}

function getPendingFollowKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${FOLLOW_PENDING_PREFIX}${uid}` : "";
}

function getDynamicInteractionCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${DYNAMIC_INTERACTION_CACHE_PREFIX}${uid}` : "";
}

function getCommunityPostStateCacheKey(userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  return uid ? `${COMMUNITY_POST_STATE_CACHE_PREFIX}${uid}` : "";
}

function readFollowStateCache(userId = uiState.currentUserId || "") {
  const key = getFollowStateCacheKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeFollowStateCache(next = {}, userId = uiState.currentUserId || "") {
  const key = getFollowStateCacheKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistFollowState(targetUserId, followed, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const tid = String(targetUserId || "").trim();
  if (!uid || !tid) return;
  const map = readFollowStateCache(uid);
  map[tid] = { followedByMe: Boolean(followed), updatedAt: Date.now() };
  writeFollowStateCache(map, uid);
}

function overlayFollowStateForCurrentUser() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  const map = readFollowStateCache(uid);
  if (!map || typeof map !== "object") return;
  Object.entries(map).forEach(([userId, value]) => {
    const followed = Boolean(value && typeof value === "object" ? value.followedByMe : false);
    if (AUTHOR_DIRECTORY[userId]) AUTHOR_DIRECTORY[userId].followedByMe = followed;
  });
}

function readDynamicInteractionCache(userId = uiState.currentUserId || "") {
  const key = getDynamicInteractionCacheKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeDynamicInteractionCache(next = {}, userId = uiState.currentUserId || "") {
  const key = getDynamicInteractionCacheKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistDynamicInteractionState(dynamicId, patch = {}, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const id = String(dynamicId || "").trim();
  if (!uid || !id) return;
  const map = readDynamicInteractionCache(uid);
  const prev = map[id] && typeof map[id] === "object" ? map[id] : {};
  const nextPatch = {
    ...(typeof patch?.liked === "boolean" ? { liked: patch.liked } : {}),
    ...(typeof patch?.favorited === "boolean" ? { favorited: patch.favorited } : {}),
    ...(Number.isFinite(Number(patch?.likes)) ? { likes: Number(patch.likes) } : {}),
    ...(Number.isFinite(Number(patch?.comments)) ? { comments: Number(patch.comments) } : {}),
    ...(Number.isFinite(Number(patch?.star)) ? { star: Number(patch.star) } : {})
  };
  if (!Object.keys(nextPatch).length) return;
  map[id] = { ...prev, ...nextPatch, updatedAt: Date.now() };
  writeDynamicInteractionCache(map, uid);
}

function overlayDynamicInteractionsForCurrentUser() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  const map = readDynamicInteractionCache(uid);
  if (!map || typeof map !== "object") return;
  const applyOnList = (list = []) => {
    for (let i = 0; i < list.length; i += 1) {
      const row = list[i];
      const id = String(row?.id || "").trim();
      if (!id) continue;
      const patch = map[id];
      if (!patch || typeof patch !== "object") continue;
      list[i] = {
        ...row,
        ...(typeof patch.liked === "boolean" ? { liked: patch.liked } : {}),
        ...(typeof patch.favorited === "boolean" ? { favorited: patch.favorited } : {}),
        ...(Number.isFinite(Number(patch.likes)) ? { likes: Number(patch.likes) } : {}),
        ...(Number.isFinite(Number(patch.comments)) ? { comments: Number(patch.comments) } : {}),
        ...(Number.isFinite(Number(patch.star)) ? { star: Number(patch.star) } : {})
      };
    }
  };
  applyOnList(uiState.dynamicPosts);
  applyOnList(DYNAMIC_FEED);
}

function readCommunityPostStateCache(userId = uiState.currentUserId || "") {
  const key = getCommunityPostStateCacheKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeCommunityPostStateCache(next = {}, userId = uiState.currentUserId || "") {
  const key = getCommunityPostStateCacheKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistCommunityPostState(postId, patch = {}, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  const id = String(postId || "").trim();
  if (!uid || !id) return;
  const map = readCommunityPostStateCache(uid);
  const prev = map[id] && typeof map[id] === "object" ? map[id] : {};
  const nextPatch = {
    ...(typeof patch?.liked === "boolean" ? { liked: patch.liked } : {}),
    ...(typeof patch?.starred === "boolean" ? { starred: patch.starred } : {}),
    ...(typeof patch?.shared === "boolean" ? { shared: patch.shared } : {}),
    ...(Number.isFinite(Number(patch?.likes)) ? { likes: Number(patch.likes) } : {}),
    ...(Number.isFinite(Number(patch?.stars)) ? { stars: Number(patch.stars) } : {}),
    ...(Number.isFinite(Number(patch?.commentsCount)) ? { commentsCount: Number(patch.commentsCount) } : {}),
    ...(Number.isFinite(Number(patch?.shares)) ? { shares: Number(patch.shares) } : {}),
    ...(Array.isArray(patch?.comments) ? { comments: patch.comments.slice(0, 60) } : {})
  };
  if (!Object.keys(nextPatch).length) return;
  map[id] = { ...prev, ...nextPatch, updatedAt: Date.now() };
  writeCommunityPostStateCache(map, uid);
}

function overlayCommunityPostStateForCurrentUser() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  const map = readCommunityPostStateCache(uid);
  if (!map || typeof map !== "object") return;
  Object.entries(map).forEach(([postId, state]) => {
    if (!state || typeof state !== "object") return;
    const postPatch = {};
    if (Number.isFinite(Number(state.likes))) postPatch.likes = Number(state.likes);
    if (Number.isFinite(Number(state.stars))) postPatch.stars = Number(state.stars);
    if (Number.isFinite(Number(state.commentsCount))) postPatch.comments = Number(state.commentsCount);
    if (Number.isFinite(Number(state.shares))) postPatch.shares = Number(state.shares);
    if (Object.keys(postPatch).length) {
      patchCommunityPostById(postId, postPatch, { persist: false });
    }
    const prevMeta = uiState.communityPostMeta[postId] && typeof uiState.communityPostMeta[postId] === "object"
      ? uiState.communityPostMeta[postId]
      : { comments: [] };
    uiState.communityPostMeta[postId] = {
      ...prevMeta,
      ...(typeof state.liked === "boolean" ? { liked: state.liked } : {}),
      ...(typeof state.starred === "boolean" ? { starred: state.starred } : {}),
      ...(typeof state.shared === "boolean" ? { shared: state.shared } : {}),
      ...(Number.isFinite(Number(state.likes)) ? { likes: Number(state.likes) } : {}),
      ...(Number.isFinite(Number(state.stars)) ? { stars: Number(state.stars) } : {}),
      ...(Number.isFinite(Number(state.commentsCount)) ? { commentsCount: Number(state.commentsCount) } : {}),
      ...(Number.isFinite(Number(state.shares)) ? { shares: Number(state.shares) } : {}),
      ...(Array.isArray(state.comments) && !prevMeta.comments?.length
        ? { comments: normalizeThreadCommentsFromApi(state.comments, `cached_community_${postId}`) }
        : {}),
      likePending: Boolean(prevMeta.likePending),
      starPending: Boolean(prevMeta.starPending),
      commentSubmitting: Boolean(prevMeta.commentSubmitting),
      commentError: String(prevMeta.commentError || ""),
      likingByCommentId: prevMeta.likingByCommentId && typeof prevMeta.likingByCommentId === "object"
        ? prevMeta.likingByCommentId
        : {},
      deletingByCommentId: prevMeta.deletingByCommentId && typeof prevMeta.deletingByCommentId === "object"
        ? prevMeta.deletingByCommentId
        : {},
      submittingReplyByCommentId: prevMeta.submittingReplyByCommentId && typeof prevMeta.submittingReplyByCommentId === "object"
        ? prevMeta.submittingReplyByCommentId
        : {},
      activeReplyCommentId: String(prevMeta.activeReplyCommentId || ""),
      activeReplyTargetId: String(prevMeta.activeReplyTargetId || ""),
      activeActionCommentId: String(prevMeta.activeActionCommentId || ""),
      replyDraftByCommentId: prevMeta.replyDraftByCommentId && typeof prevMeta.replyDraftByCommentId === "object"
        ? prevMeta.replyDraftByCommentId
        : {}
    };
  });
}

function readPendingFollowOps(userId = uiState.currentUserId || "") {
  const key = getPendingFollowKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writePendingFollowOps(next = {}, userId = uiState.currentUserId || "") {
  const key = getPendingFollowKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function queuePendingFollowOp(targetUserId, follow) {
  const uid = String(uiState.currentUserId || "").trim();
  const tid = String(targetUserId || "").trim();
  if (!uid || !tid) return;
  const bucket = readPendingFollowOps(uid);
  bucket[tid] = { targetUserId: tid, follow: Boolean(follow), updatedAt: Date.now() };
  writePendingFollowOps(bucket, uid);
}

function clearPendingFollowOp(targetUserId) {
  const uid = String(uiState.currentUserId || "").trim();
  const tid = String(targetUserId || "").trim();
  if (!uid || !tid) return;
  const bucket = readPendingFollowOps(uid);
  if (!Object.prototype.hasOwnProperty.call(bucket, tid)) return;
  delete bucket[tid];
  writePendingFollowOps(bucket, uid);
}

function readPendingWorldReactions(userId = uiState.currentUserId || "") {
  const key = getPendingWorldReactionKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writePendingWorldReactions(next = {}, userId = uiState.currentUserId || "") {
  const key = getPendingWorldReactionKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function queuePendingWorldReaction(worldCardId, interactionType, active) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || !worldCardId) return;
  const bucket = readPendingWorldReactions(uid);
  const key = `${worldCardId}:${interactionType}`;
  bucket[key] = {
    worldCardId: String(worldCardId),
    interactionType: interactionType === "favorite" ? "favorite" : "like",
    active: Boolean(active),
    updatedAt: Date.now()
  };
  writePendingWorldReactions(bucket, uid);
}

function clearPendingWorldReaction(worldCardId, interactionType) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || !worldCardId) return;
  const bucket = readPendingWorldReactions(uid);
  const key = `${worldCardId}:${interactionType}`;
  if (!Object.prototype.hasOwnProperty.call(bucket, key)) return;
  delete bucket[key];
  writePendingWorldReactions(bucket, uid);
}

function readWorldInteractionCache(userId = uiState.currentUserId || "") {
  const key = getWorldInteractionCacheKey(userId);
  if (!key) return {};
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeWorldInteractionCache(next = {}, userId = uiState.currentUserId || "") {
  const key = getWorldInteractionCacheKey(userId);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(next && typeof next === "object" ? next : {}));
  } catch {}
}

function persistWorldInteractionState(worldCardId, patch = {}, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid || !worldCardId) return;
  const map = readWorldInteractionCache(uid);
  const prev = map[worldCardId] && typeof map[worldCardId] === "object" ? map[worldCardId] : {};
  map[worldCardId] = { ...prev, ...patch, updatedAt: Date.now() };
  writeWorldInteractionCache(map, uid);
}

function overlayWorldInteractionsForCurrentUser() {
  if (!uiState.currentUserId || !Array.isArray(FEED_DATA) || FEED_DATA.length === 0) return;
  const map = readWorldInteractionCache(uiState.currentUserId);
  if (!map || typeof map !== "object") return;
  FEED_DATA.forEach((item, idx) => {
    const patch = map[item?.id];
    if (!patch || typeof patch !== "object") return;
    FEED_DATA[idx] = {
      ...item,
      ...(typeof patch.liked === "boolean" ? { liked: patch.liked } : {}),
      ...(typeof patch.favorited === "boolean" ? { favorited: patch.favorited } : {}),
      ...(typeof patch.like === "string" ? { like: patch.like } : {}),
      ...(typeof patch.star === "string" ? { star: patch.star } : {})
    };
  });
}

function patchWorldMetricsInPayload(payload, worldCardId, patch = {}) {
  if (!payload || typeof payload !== "object") return false;
  const feed = Array.isArray(payload.feedData) ? payload.feedData : [];
  const idx = feed.findIndex((x) => x?.id === worldCardId);
  if (idx < 0) return false;
  feed[idx] = { ...feed[idx], ...patch };
  payload.feedData = feed;
  return true;
}

function prependFeedItemInPayload(payload, feedItem) {
  if (!payload || typeof payload !== "object" || !feedItem?.id) return false;
  const list = Array.isArray(payload.feedData) ? payload.feedData : [];
  const deduped = list.filter((x) => String(x?.id || "") !== String(feedItem.id));
  payload.feedData = [feedItem, ...deduped].slice(0, 120);
  return true;
}

function prependDynamicItemInPayload(payload, dynamicItem) {
  if (!payload || typeof payload !== "object" || !dynamicItem?.id) return false;
  const list = Array.isArray(payload.dynamicFeed) ? payload.dynamicFeed : [];
  const deduped = list.filter((x) => String(x?.id || "") !== String(dynamicItem.id));
  payload.dynamicFeed = [dynamicItem, ...deduped].slice(0, 120);
  return true;
}

function removeDynamicItemFromPayload(payload, dynamicId) {
  if (!payload || typeof payload !== "object" || !dynamicId) return false;
  const list = Array.isArray(payload.dynamicFeed) ? payload.dynamicFeed : [];
  const next = list.filter((x) => String(x?.id || "") !== String(dynamicId));
  if (next.length === list.length) return false;
  payload.dynamicFeed = next;
  return true;
}

function patchDynamicMetricsInPayload(payload, dynamicId, patch = {}) {
  if (!payload || typeof payload !== "object") return false;
  const id = String(dynamicId || "").trim();
  if (!id) return false;
  const list = Array.isArray(payload.dynamicFeed) ? payload.dynamicFeed : [];
  const idx = list.findIndex((x) => String(x?.id || "") === id);
  if (idx < 0) return false;
  list[idx] = { ...list[idx], ...patch };
  payload.dynamicFeed = list;
  return true;
}

function patchCommunityPostInPayload(payload, postId, patch = {}) {
  if (!payload || typeof payload !== "object") return false;
  const id = String(postId || "").trim();
  if (!id) return false;
  const groups = payload.communityPosts && typeof payload.communityPosts === "object"
    ? payload.communityPosts
    : {};
  let hit = false;
  Object.keys(groups).forEach((groupId) => {
    const list = Array.isArray(groups[groupId]) ? groups[groupId] : [];
    const idx = list.findIndex((x) => String(x?.id || "") === id);
    if (idx < 0) return;
    list[idx] = { ...list[idx], ...patch };
    groups[groupId] = list;
    hit = true;
  });
  if (hit) payload.communityPosts = groups;
  return hit;
}

function prependCommunityPostInPayload(payload, communityId, post = {}) {
  if (!payload || typeof payload !== "object" || !post?.id) return false;
  const cid = String(communityId || "").trim();
  if (!cid) return false;
  const groups = payload.communityPosts && typeof payload.communityPosts === "object"
    ? payload.communityPosts
    : {};
  const list = Array.isArray(groups[cid]) ? groups[cid] : [];
  const deduped = list.filter((x) => String(x?.id || "") !== String(post.id));
  groups[cid] = [post, ...deduped].slice(0, 240);
  payload.communityPosts = groups;
  return true;
}

function removeCommunityInPayload(payload, communityId) {
  if (!payload || typeof payload !== "object") return false;
  const cid = String(communityId || "").trim();
  if (!cid) return false;
  let changed = false;
  if (Array.isArray(payload.communityList)) {
    const prev = payload.communityList;
    const next = prev.filter((x) => String(x?.id || "").trim() !== cid);
    if (next.length !== prev.length) {
      payload.communityList = next;
      changed = true;
    }
  }
  if (payload.communityPosts && typeof payload.communityPosts === "object") {
    const groups = payload.communityPosts;
    if (Object.prototype.hasOwnProperty.call(groups, cid)) {
      delete groups[cid];
      payload.communityPosts = groups;
      changed = true;
    }
  }
  return changed;
}

function upsertCommunityItemInPayload(payload, community = {}) {
  if (!payload || typeof payload !== "object" || !community?.id) return false;
  const list = Array.isArray(payload.communityList) ? payload.communityList : [];
  const id = String(community.id || "").trim();
  if (!id) return false;
  const idx = list.findIndex((x) => String(x?.id || "") === id);
  if (idx >= 0) list[idx] = { ...list[idx], ...community };
  else list.unshift(community);
  payload.communityList = list.slice(0, 80);
  return true;
}

function patchProfileInPayload(payload, profile = {}) {
  if (!payload || typeof payload !== "object") return false;
  if (!payload.user || typeof payload.user !== "object") return false;
  const nextBackstageMask = normalizeBackstageMaskValue(
    Object.prototype.hasOwnProperty.call(profile, "backstageMask")
      ? profile.backstageMask
      : payload.user.backstageMask,
    true
  );
  payload.user = {
    ...payload.user,
    name: String(profile.name || payload.user.name || "Drama 用户"),
    handle: String(profile.handle || payload.user.handle || "@drama_user"),
    bio: String(profile.bio || payload.user.bio || ""),
    avatarUrl: String(profile.avatarUrl || payload.user.avatarUrl || ""),
    gender: String(profile.gender || payload.user.gender || "保密"),
    birthday: String(profile.birthday || payload.user.birthday || ""),
    coverUrl: String(profile.coverUrl || payload.user.coverUrl || ""),
    backstageCoverUrl: String(profile.backstageCoverUrl || payload.user.backstageCoverUrl || ""),
    backstageMask: nextBackstageMask
  };
  return true;
}

function persistProfileToCache(profile = {}, userId = uiState.currentUserId || "") {
  const uid = String(userId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => patchProfileInPayload(core, profile), uid);
  mutateBootstrapFullCache((full) => patchProfileInPayload(full, profile), uid);
}

function persistDynamicItemToCache(dynamicItem) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => prependDynamicItemInPayload(core, dynamicItem), uid);
  mutateBootstrapFullCache((full) => prependDynamicItemInPayload(full, dynamicItem), uid);
}

function persistDynamicMetricsToCache(dynamicId, patch = {}) {
  const id = String(dynamicId || "").trim();
  if (!id) return;
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => patchDynamicMetricsInPayload(core, id, patch), uid);
  mutateBootstrapFullCache((full) => patchDynamicMetricsInPayload(full, id, patch), uid);
}

function removeDynamicItemFromCache(dynamicId) {
  const id = String(dynamicId || "").trim();
  if (!id) return;
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => removeDynamicItemFromPayload(core, id), uid);
  mutateBootstrapFullCache((full) => removeDynamicItemFromPayload(full, id), uid);
}

function persistCommunityPostToCache(postId, patch = {}) {
  const id = String(postId || "").trim();
  if (!id) return;
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => patchCommunityPostInPayload(core, id, patch), uid);
  mutateBootstrapFullCache((full) => patchCommunityPostInPayload(full, id, patch), uid);
}

function persistCommunityPostItemToCache(communityId, post = {}) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => prependCommunityPostInPayload(core, communityId, post), uid);
  mutateBootstrapFullCache((full) => prependCommunityPostInPayload(full, communityId, post), uid);
}

function persistCommunityItemToCache(community = {}) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => upsertCommunityItemInPayload(core, community), uid);
  mutateBootstrapFullCache((full) => upsertCommunityItemInPayload(full, community), uid);
}

function removeCommunityItemFromCache(communityId = "") {
  const uid = String(uiState.currentUserId || "").trim();
  const cid = String(communityId || "").trim();
  if (!uid || !cid) return;
  mutateBootstrapCoreCache((core) => removeCommunityInPayload(core, cid), uid);
  mutateBootstrapFullCache((full) => removeCommunityInPayload(full, cid), uid);
}

function removeCommunityAssetById(communityId = "") {
  const cid = String(communityId || "").trim();
  if (!cid) return;
  const map = readCommunityAssetCache();
  if (!Object.prototype.hasOwnProperty.call(map, cid)) return;
  delete map[cid];
  writeCommunityAssetCache(map);
}

function removeCommunityFromLocalState(communityId = "") {
  const cid = String(communityId || "").trim();
  if (!cid) return false;
  let removed = false;
  for (let i = COMMUNITY_LIST.length - 1; i >= 0; i -= 1) {
    if (String(COMMUNITY_LIST[i]?.id || "").trim() !== cid) continue;
    COMMUNITY_LIST.splice(i, 1);
    removed = true;
  }
  if (Object.prototype.hasOwnProperty.call(COMMUNITY_POSTS, cid)) {
    delete COMMUNITY_POSTS[cid];
    removed = true;
  }
  delete uiState.communityMembersByCommunityId[cid];
  delete uiState.communityMembersLoadingByCommunityId[cid];
  delete uiState.communityMembersErrorByCommunityId[cid];
  delete uiState.communityMembersFetchedAtByCommunityId[cid];
  if (String(uiState.selectedCommunityId || "").trim() === cid) {
    uiState.selectedCommunityId = "";
    resolveCommunityComposeTargetId();
  }
  removeCommunityItemFromCache(cid);
  removeCommunityAssetById(cid);
  return removed;
}

function persistFeedItemToCache(feedItem = {}) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || !feedItem?.id) return;
  mutateBootstrapCoreCache((core) => prependFeedItemInPayload(core, feedItem), uid);
  mutateBootstrapFullCache((full) => prependFeedItemInPayload(full, feedItem), uid);
}

function persistWorldMetricsToCache(worldCardId, patch = {}) {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  mutateBootstrapCoreCache((core) => patchWorldMetricsInPayload(core, worldCardId, patch), uid);
  mutateBootstrapFullCache((full) => patchWorldMetricsInPayload(full, worldCardId, patch), uid);
}

function syncWorldCardMetricsAndCache(worldCardId, patch = {}) {
  syncWorldCardMetrics(worldCardId, patch);
  persistWorldMetricsToCache(worldCardId, patch);
  persistWorldInteractionState(worldCardId, patch);
}

function syncWorldStateEverywhere(worldCardId, patch = {}) {
  syncWorldCardMetricsAndCache(worldCardId, patch);
}

function resolveWorldReactionPatch(baseWorld = {}, patch = {}) {
  const interactionType = String(patch?.interactionType || "").trim();
  const hasActive = typeof patch?.active === "boolean";
  const fallbackLike = toMetricCount(baseWorld?.like);
  const fallbackStar = toMetricCount(baseWorld?.star);
  const liked = typeof patch?.likedByMe === "boolean"
    ? patch.likedByMe
    : interactionType === "like" && hasActive
      ? Boolean(patch.active)
      : Boolean(baseWorld?.liked);
  const favorited = typeof patch?.favoritedByMe === "boolean"
    ? patch.favoritedByMe
    : interactionType === "favorite" && hasActive
      ? Boolean(patch.active)
      : Boolean(baseWorld?.favorited);
  const likeCount = Number.isFinite(Number(patch?.likesCount)) ? Number(patch.likesCount) : fallbackLike;
  const starCount = Number.isFinite(Number(patch?.favoritesCount)) ? Number(patch.favoritesCount) : fallbackStar;
  return {
    liked,
    favorited,
    like: formatMetricCount(likeCount),
    star: formatMetricCount(starCount),
    likeCount,
    starCount
  };
}

function reconcileWorldReactionsInBackground() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  scheduleBootstrapFullRefresh(uid, { delayMs: 1200 });
}

let worldReactionFlushRunning = false;
async function flushPendingWorldReactions() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || worldReactionFlushRunning) return;
  const bucket = readPendingWorldReactions(uid);
  const jobs = Object.values(bucket || {});
  if (!jobs.length) return;
  const interactionCache = readWorldInteractionCache(uid);
  worldReactionFlushRunning = true;
  try {
    for (const job of jobs) {
      const worldCardId = String(job?.worldCardId || "").trim();
      const interactionType = String(job?.interactionType || "").trim();
      if (!worldCardId || !["like", "favorite"].includes(interactionType)) continue;
      const active = Boolean(job?.active);
      try {
        const stats = await setWorldCardReaction(worldCardId, interactionType, active);
        if (stats) {
          const feedWorld = FEED_DATA.find((x) => String(x?.id || "") === worldCardId) || {};
          const cachedWorld = interactionCache?.[worldCardId] && typeof interactionCache[worldCardId] === "object"
            ? interactionCache[worldCardId]
            : {};
          const resolved = resolveWorldReactionPatch({ ...feedWorld, ...cachedWorld }, stats);
          syncWorldStateEverywhere(worldCardId, {
            liked: resolved.liked,
            favorited: resolved.favorited,
            like: resolved.like,
            star: resolved.star
          });
        }
        clearPendingWorldReaction(worldCardId, interactionType);
      } catch (error) {
        const msg = error instanceof Error ? error.message : "";
        if (msg && msg !== "NETWORK_UNREACHABLE") {
          clearPendingWorldReaction(worldCardId, interactionType);
        }
      }
    }
  } finally {
    worldReactionFlushRunning = false;
  }
}

let followFlushRunning = false;
async function flushPendingFollowOps() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || followFlushRunning) return;
  const bucket = readPendingFollowOps(uid);
  const jobs = Object.values(bucket || {});
  if (!jobs.length) return;
  followFlushRunning = true;
  try {
    for (const job of jobs) {
      const targetUserId = String(job?.targetUserId || "").trim();
      if (!targetUserId) continue;
      const follow = Boolean(job?.follow);
      try {
        const relation = await setUserFollowRelation(targetUserId, follow, { keepalive: true });
        const followedByMe = Boolean(relation?.followedByMe);
        persistFollowState(targetUserId, followedByMe);
        if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = followedByMe;
        clearPendingFollowOp(targetUserId);
      } catch (error) {
        const msg = error instanceof Error ? error.message : "";
        if (msg && msg !== "NETWORK_UNREACHABLE") {
          clearPendingFollowOp(targetUserId);
        }
      }
    }
  } finally {
    followFlushRunning = false;
  }
}

function buildWorldLibraryItem(world, tabType = "likes") {
  const theme = world?.theme || "主题";
  if (tabType === "favorites") {
    return {
      id: world.id,
      title: world.title,
      meta: `${theme} · 收藏中`,
      stat: `收藏 ${formatMetricCount(world.star)}`
    };
  }
  return {
    id: world.id,
    title: world.title,
    meta: `${theme} · 互动中`,
    stat: `点赞 ${formatMetricCount(world.like)}`
  };
}

function upsertMeContentLibrary(world, tabType = "likes") {
  const key = tabType === "favorites" ? "favorites" : "likes";
  if (!world?.id) return;
  if (!Array.isArray(ME_CONTENT_LIBRARY[key])) ME_CONTENT_LIBRARY[key] = [];
  const list = ME_CONTENT_LIBRARY[key];
  const next = buildWorldLibraryItem(world, key);
  const i = list.findIndex((x) => x.id === world.id);
  if (i >= 0) list[i] = next;
  else list.unshift(next);
}

function removeMeContentLibrary(worldId, tabType = "likes") {
  const key = tabType === "favorites" ? "favorites" : "likes";
  if (!Array.isArray(ME_CONTENT_LIBRARY[key])) return;
  ME_CONTENT_LIBRARY[key] = ME_CONTENT_LIBRARY[key].filter((x) => x.id !== worldId);
}

async function setWorldCardReaction(worldCardId, reactionType, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/worldcards/interaction", {
    worldCardId,
    userId: uiState.currentUserId,
    interactionType: reactionType,
    active
  }, "POST", { keepalive: true });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    worldCardId: String(patch.worldCardId || worldCardId || ""),
    interactionType: String(patch.interactionType || reactionType || "like"),
    active: typeof patch.active === "boolean" ? patch.active : Boolean(active),
    likesCount: Number(patch.likesCount || 0),
    favoritesCount: Number(patch.favoritesCount || 0),
    likedByMe: typeof patch.likedByMe === "boolean" ? patch.likedByMe : null,
    favoritedByMe: typeof patch.favoritedByMe === "boolean" ? patch.favoritedByMe : null,
    version: String(patch.version || data?.version || "")
  };
}

async function setUserFollowRelation(followingUserId, active, fetchOptions = {}) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/auth/follow", {
    followerId: uiState.currentUserId,
    followingUserId,
    follow: Boolean(active)
  }, "POST", fetchOptions);
  return data?.relation || null;
}

async function syncMessageNoticeSections(options = {}) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return false;
  if (syncMessageNoticeSections.inflight) return false;
  syncMessageNoticeSections.inflight = true;
  try {
    await fetchBootstrapSection("messages", uiState.currentUserId, { force: Boolean(options?.force) });
    return true;
  } catch {
    return false;
  } finally {
    syncMessageNoticeSections.inflight = false;
  }
}

async function markMessageNotificationsRead(bucket = "all") {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return 0;
  const safeBucket = ["likes", "follows", "comments", "all"].includes(bucket) ? bucket : "all";
  const now = Date.now();
  if ((now - Number(MESSAGE_NOTICE_LAST_MARKED_AT[safeBucket] || 0)) < MESSAGE_NOTICE_READ_COOLDOWN_MS) return 0;
  MESSAGE_NOTICE_LAST_MARKED_AT[safeBucket] = now;
  const data = await apiJson("/messages/notifications/read", {
    userId: uiState.currentUserId,
    bucket: safeBucket
  }, "POST", { keepalive: true });
  return Number(data?.updated || 0);
}

async function setMessageNoticeFollowAction(notificationId, follow) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/messages/notifications/follow", {
    userId: uiState.currentUserId,
    notificationId,
    follow
  });
  return data?.relation || null;
}

async function setMessageNoticeCommentLike(notificationId, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/messages/notifications/comment/like", {
    userId: uiState.currentUserId,
    notificationId,
    active
  });
  return {
    likes: Number(data?.comment?.likes || 0),
    likedByMe: Boolean(data?.comment?.likedByMe)
  };
}

async function sendMessageNoticeCommentReply(notificationId, content) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/messages/notifications/comment/reply", {
    userId: uiState.currentUserId,
    notificationId,
    content
  });
  return data?.reply || null;
}

async function setDynamicReaction(postId, reactionType, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/reaction", {
    postId,
    userId: uiState.currentUserId,
    reactionType,
    active
  });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    postId: String(patch.postId || postId || ""),
    reactionType: String(patch.reactionType || reactionType || "like"),
    active: typeof patch.active === "boolean" ? patch.active : Boolean(active),
    likesCount: Number(patch.likesCount || 0),
    favoritesCount: Number(patch.favoritesCount || 0),
    version: String(patch.version || data?.version || "")
  };
}

async function setDynamicVisibility(postId, visibility) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/visibility", {
    postId,
    userId: uiState.currentUserId,
    visibility: normalizeDynamicVisibility(visibility)
  });
  return data?.post || null;
}

async function deleteDynamicPostByAuthor(postId) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/delete", {
    postId,
    userId: uiState.currentUserId
  });
  return Boolean(data?.ok);
}

async function loadDynamicComments(postId) {
  const uid = String(uiState.currentUserId || "").trim();
  const query = new URLSearchParams({
    postId: String(postId || ""),
    limit: "120"
  });
  if (uid) query.set("userId", uid);
  const data = await apiGetJson(`/posts/comments?${query.toString()}`);
  return {
    comments: normalizeThreadCommentsFromApi(data?.comments || [], `dynamic_${postId}_comment`),
    commentsCount: Number(data?.commentsCount || 0)
  };
}

async function createDynamicCommentAndSync(postId, text, parentCommentId = "") {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const clientCommentId = `dyn_comment_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  const payload = {
    postId,
    userId: uiState.currentUserId,
    content: text,
    clientCommentId
  };
  const parentId = String(parentCommentId || "").trim();
  if (parentId) payload.parentCommentId = parentId;
  const data = await apiJson("/posts/comments", {
    ...payload
  });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    comment: data?.comment ? normalizeThreadCommentNode(data.comment, `dynamic_${postId}_comment`, 0, parentId || null) : null,
    commentsCount: Number(patch.commentsCount || 0),
    version: String(patch.version || data?.version || "")
  };
}

async function setDynamicCommentLike(commentId, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/comments/like", {
    commentId,
    userId: uiState.currentUserId,
    active
  });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    id: String(patch.commentId || data?.comment?.id || commentId || ""),
    postId: String(patch.postId || data?.comment?.postId || ""),
    likes: Number(patch.likesCount || data?.comment?.likes || 0),
    likedByMe: typeof patch.likedByMe === "boolean" ? patch.likedByMe : Boolean(data?.comment?.likedByMe),
    version: String(patch.version || data?.version || "")
  };
}

async function deleteDynamicCommentAndSync(commentId) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/comments/delete", {
    commentId,
    userId: uiState.currentUserId
  });
  return {
    commentsCount: Number(data?.commentsCount || 0),
    deletedCount: Number(data?.deletedCount || 0),
    topLevelDeleted: Number(data?.topLevelDeleted || 0)
  };
}

async function createCommunityPostCommentAndSync(postId, text, parentCommentId = "") {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const clientCommentId = `community_comment_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  const payload = {
    postId,
    userId: uiState.currentUserId,
    content: text,
    clientCommentId
  };
  const parentId = String(parentCommentId || "").trim();
  if (parentId) payload.parentCommentId = parentId;
  const data = await apiJson("/community/posts/comments", payload);
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    comment: data?.comment ? normalizeThreadCommentNode(data.comment, `community_${postId}_comment`, 0, parentId || null) : null,
    commentsCount: Number(patch.commentsCount || 0),
    version: String(patch.version || data?.version || "")
  };
}

async function setCommunityPostCommentLike(commentId, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/community/posts/comments/like", {
    commentId,
    userId: uiState.currentUserId,
    active
  });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    id: String(patch.commentId || data?.comment?.id || commentId || ""),
    postId: String(patch.postId || data?.comment?.postId || ""),
    likes: Number(patch.likesCount || data?.comment?.likes || 0),
    likedByMe: typeof patch.likedByMe === "boolean" ? patch.likedByMe : Boolean(data?.comment?.likedByMe),
    version: String(patch.version || data?.version || "")
  };
}

async function deleteCommunityPostCommentAndSync(commentId) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/community/posts/comments/delete", {
    commentId,
    userId: uiState.currentUserId
  });
  return {
    commentsCount: Number(data?.commentsCount || 0),
    deletedCount: Number(data?.deletedCount || 0),
    topLevelDeleted: Number(data?.topLevelDeleted || 0)
  };
}

function formatWorldCommentTime(dateLike) {
  const d = new Date(String(dateLike || ""));
  if (Number.isNaN(d.getTime())) return "刚刚";
  const delta = Math.max(0, Date.now() - d.getTime());
  const mins = Math.floor(delta / 60000);
  if (mins < 1) return "刚刚";
  if (mins < 60) return `${mins}分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}小时前`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}天前`;
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}-${dd}`;
}

function getWorldCommentState(worldCardId, fallbackCount = 0) {
  const id = String(worldCardId || "").trim();
  if (!id) return null;
  if (!uiState.worldCommentsState[id]) {
    const cached = readWorldCommentsCache(id);
    uiState.worldCommentsState[id] = {
      loaded: false,
      loading: false,
      submitting: false,
      error: "",
      comments: Array.isArray(cached?.comments) ? cached.comments : [],
      commentsCount: Number.isFinite(Number(cached?.commentsCount))
        ? Number(cached.commentsCount)
        : Number(fallbackCount || 0),
      likingByCommentId: {},
      deletingByCommentId: {},
      submittingReplyByCommentId: {},
      activeReplyCommentId: "",
      activeReplyTargetId: "",
      activeActionCommentId: "",
      replyDraftByCommentId: {}
    };
  } else if (!Number.isFinite(Number(uiState.worldCommentsState[id].commentsCount || 0))) {
    uiState.worldCommentsState[id].commentsCount = Number(fallbackCount || 0);
  }
  if (typeof uiState.worldCommentsState[id].activeReplyTargetId !== "string") uiState.worldCommentsState[id].activeReplyTargetId = "";
  if (typeof uiState.worldCommentsState[id].activeActionCommentId !== "string") uiState.worldCommentsState[id].activeActionCommentId = "";
  return uiState.worldCommentsState[id];
}

function getWorldCommentDraft(worldCardId) {
  const id = String(worldCardId || "").trim();
  if (!id) return "";
  return String(uiState.worldCommentDraftByCard[id] || "");
}

function setWorldCommentDraft(worldCardId, text) {
  const id = String(worldCardId || "").trim();
  if (!id) return;
  uiState.worldCommentDraftByCard[id] = String(text || "");
}

function getWorldCommentsCacheKey(worldCardId) {
  const id = String(worldCardId || "").trim();
  return id ? `${WORLD_COMMENTS_CACHE_PREFIX}${id}` : "";
}

function readWorldCommentsCache(worldCardId) {
  const key = getWorldCommentsCacheKey(worldCardId);
  if (!key) return null;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const comments = Array.isArray(parsed.comments) ? parsed.comments : [];
    return {
      comments,
      commentsCount: Number(parsed.commentsCount || comments.length || 0)
    };
  } catch {
    return null;
  }
}

function persistWorldCommentsCache(worldCardId, state) {
  const key = getWorldCommentsCacheKey(worldCardId);
  if (!key || !state) return;
  try {
    const payload = {
      comments: Array.isArray(state.comments) ? state.comments : [],
      commentsCount: Number(state.commentsCount || 0),
      savedAt: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(payload));
  } catch {
    // ignore storage errors
  }
}

function mergeWorldCommentsWithCache(serverComments = [], cachedComments = []) {
  const safeServer = Array.isArray(serverComments) ? serverComments : [];
  const safeCached = Array.isArray(cachedComments) ? cachedComments : [];
  const cachedById = new Map();
  safeCached.forEach((item) => {
    const id = String(item?.id || "").trim();
    if (id) cachedById.set(id, item);
  });
  const merged = safeServer.map((item) => {
    const id = String(item?.id || "").trim();
    const cached = id ? cachedById.get(id) : null;
    const serverReplies = Array.isArray(item?.replies) ? item.replies : [];
    const cachedReplies = Array.isArray(cached?.replies) ? cached.replies : [];
    const replyMap = new Map();
    serverReplies.forEach((r) => {
      const rid = String(r?.id || "").trim();
      if (rid) replyMap.set(rid, r);
    });
    cachedReplies.forEach((r) => {
      const rid = String(r?.id || "").trim();
      if (rid && !replyMap.has(rid)) replyMap.set(rid, r);
    });
    return {
      ...item,
      replies: Array.from(replyMap.values())
    };
  });
  return merged;
}

async function loadWorldCardComments(worldCardId) {
  const uid = String(uiState.currentUserId || "").trim();
  const query = new URLSearchParams({
    worldCardId: String(worldCardId || ""),
    limit: "120"
  });
  if (uid) query.set("userId", uid);
  const data = await apiGetJson(`/worldcards/comments?${query.toString()}`);
  return {
    comments: Array.isArray(data?.comments) ? data.comments : [],
    commentsCount: Number(data?.commentsCount || 0)
  };
}

async function createWorldCardCommentAndSync(worldCardId, text, parentCommentId = "") {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const clientCommentId = `world_comment_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  const payload = {
    worldCardId,
    userId: uiState.currentUserId,
    content: text,
    clientCommentId
  };
  const parentId = String(parentCommentId || "").trim();
  if (parentId) payload.parentCommentId = parentId;
  const data = await apiJson("/worldcards/comments", payload);
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    comment: data?.comment || null,
    commentsCount: Number(patch.commentsCount || data?.commentsCount || 0),
    version: String(patch.version || data?.version || "")
  };
}

async function deleteWorldCardCommentAndSync(commentId) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/worldcards/comments/delete", {
    commentId,
    userId: uiState.currentUserId
  });
  return {
    commentsCount: Number(data?.commentsCount || 0),
    deletedCount: Number(data?.deletedCount || 0),
    topLevelDeleted: Number(data?.topLevelDeleted || 0)
  };
}

async function setWorldCardCommentLike(worldCommentId, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/worldcards/comments/like", {
    commentId: worldCommentId,
    userId: uiState.currentUserId,
    active
  });
  const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
  return {
    id: String(patch.commentId || data?.comment?.id || worldCommentId || ""),
    worldCardId: String(patch.worldCardId || data?.comment?.worldCardId || ""),
    likes: Number(patch.likesCount || data?.comment?.likes || 0),
    likedByMe: typeof patch.likedByMe === "boolean" ? patch.likedByMe : Boolean(data?.comment?.likedByMe),
    version: String(patch.version || data?.version || "")
  };
}

function ensureWorldCardCommentsLoaded(world) {
  const worldId = String(world?.id || "").trim();
  if (!worldId) return;
  const fallbackCount = toMetricCount(world?.comment);
  const state = getWorldCommentState(worldId, fallbackCount);
  if (!state || state.loaded || state.loading) return;
  state.loading = true;
  state.error = "";
  void loadWorldCardComments(worldId)
    .then(({ comments, commentsCount }) => {
      const cached = readWorldCommentsCache(worldId);
      const serverNormalized = (Array.isArray(comments) ? comments : []).map((item) => ({
        ...item,
        replies: Array.isArray(item?.replies) ? item.replies : []
      }));
      state.comments = mergeWorldCommentsWithCache(serverNormalized, cached?.comments || []);
      state.commentsCount = Number.isFinite(commentsCount) && commentsCount >= 0 ? commentsCount : comments.length;
      state.loaded = true;
      state.loading = false;
      syncWorldStateEverywhere(worldId, { comment: formatMetricCount(state.commentsCount) });
      persistWorldCommentsCache(worldId, state);
      render();
    })
    .catch((err) => {
      state.loading = false;
      state.loaded = true;
      state.error = err instanceof Error ? err.message : "加载失败";
      render();
    });
}

function ensureDynamicCommentsLoaded(item) {
  if (!item?.id) return;
  const meta = ensureDynamicMeta(item);
  if (!meta || meta.commentsLoaded || meta.commentsLoading) return;
  meta.commentsLoading = true;
  meta.commentError = "";
  void loadDynamicComments(item.id)
    .then(({ comments, commentsCount }) => {
      const safeComments = Array.isArray(comments) ? comments : [];
      meta.comments = safeComments;
      meta.commentsCount = Number.isFinite(Number(commentsCount))
        ? Math.max(0, Number(commentsCount))
        : safeComments.length;
      meta.commentsLoaded = true;
      meta.commentsLoading = false;
      syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
      render();
    })
    .catch((error) => {
      meta.commentsLoaded = true;
      meta.commentsLoading = false;
      meta.commentError = error instanceof Error ? error.message : "评论加载失败";
      render();
    });
}

async function sendMessageToThread(conversationId, text, options = {}) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const messageType = String(options.messageType || "text");
  const payload = options.payload && typeof options.payload === "object" ? options.payload : {};
  const data = await apiJson("/messages/send", {
    conversationId,
    senderId: uiState.currentUserId,
    content: text,
    messageType,
    payload,
    clientMessageId: `${Date.now()}_${Math.random().toString(16).slice(2, 8)}`
  });
  return data?.message || null;
}

async function uploadMessageImage(dataUrl, folder = "message/image") {
  const safeDataUrl = String(dataUrl || "").trim();
  if (!safeDataUrl) throw new Error("IMAGE_DATA_MISSING");
  const data = await apiJson("/media/upload", {
    dataUrl: safeDataUrl,
    folder
  });
  const url = String(data?.url || "").trim();
  if (!url) throw new Error("MEDIA_UPLOAD_EMPTY_URL");
  return url;
}

function formatThreadImageSendError(error) {
  const msg = String(error?.message || error || "").trim();
  if (!msg) return "图片发送失败，请重试";
  if (msg === "NETWORK_UNREACHABLE") return "网络异常，图片发送失败，请检查网络后重试";
  if (msg === "REQUEST_TIMEOUT") return "图片上传超时，请稍后重试";
  if (msg === "MEDIA_TOO_LARGE") return "图片过大，请压缩后再发送";
  if (msg === "IMAGE_DECODE_FAILED") return "当前图片格式无法解析，请换一张图片再试";
  if (msg === "IMAGE_ENCODE_FAILED") return "图片处理失败，请重试";
  if (msg === "IMAGE_UPLOAD_FAILED" || msg === "MEDIA_UPLOAD_FAILED" || msg === "MEDIA_UPLOAD_EMPTY_URL") {
    return "图片上传失败，请稍后重试";
  }
  return msg;
}

function getActiveThreadForSending() {
  const activeId = getActiveConversationId();
  if (!activeId || !isUuid(activeId)) {
    showMessageFeedback("请先打开一个真实会话再发送");
    return "";
  }
  return activeId;
}

function applySentThreadMessage(activeId, message, fallbackPreviewText = "") {
  upsertThreadMessageFromServer(activeId, message || {}, uiState.currentUserId);
  const preview = String(message?.content || fallbackPreviewText || "").trim() || "新消息";
  updateMessageInboxPreview(activeId, preview, {
    time: formatThreadClock(message?.created_at),
    lastMessageAt: String(message?.created_at || "")
  });
  persistMessageThreadForConversation(activeId);
  markMessageRead(activeId);
  uiState.messageReadAckConversationId = "";
  triggerMessageRealtimeRender({ scrollToBottom: true, forceBottom: true });
}

function appendPendingThreadMessage(activeId, options = {}) {
  const type = String(options?.type || "text").trim() || "text";
  const text = String(options?.text || "").trim();
  const payload = options?.payload && typeof options.payload === "object" ? options.payload : {};
  const messages = ensureMessageThread(activeId);
  const tempId = `tmp_msg_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
  const preview = text || (type === "image" ? "[图片]" : "新消息");
  messages.push({
    id: tempId,
    from: "me",
    type,
    text,
    payload,
    time: "刚刚",
    localAt: Date.now(),
    read: false,
    pending: true
  });
  markMessageSendGuard(activeId, tempId);
  updateMessageInboxPreview(activeId, preview);
  markMessageRead(activeId);
  triggerMessageRealtimeRender({ scrollToBottom: true, forceBottom: true });
  return tempId;
}

function removePendingMessage(activeId, tempId) {
  const messages = ensureMessageThread(activeId);
  const idx = messages.findIndex((m) => String(m?.id || "") === String(tempId || ""));
  if (idx >= 0) messages.splice(idx, 1);
  refreshInboxPreviewFromThread(activeId);
}

function resolveThreadMessageFromServer(message = {}, fallbackText = "") {
  const text = String(message?.content || fallbackText || "").trim();
  const createdAt = String(message?.created_at || "").trim();
  return {
    id: String(message?.id || ""),
    from: "me",
    type: String(message?.message_type || "text"),
    payload: message?.payload && typeof message.payload === "object" ? message.payload : {},
    text,
    time: createdAt ? formatThreadClock(createdAt) : nowClockText(),
    createdAt: createdAt || null,
    read: Boolean(message?.read_by_peer),
    pending: false
  };
}

function finalizePendingThreadMessage(activeId, pendingId, message, fallbackPreviewText = "") {
  const messages = ensureMessageThread(activeId);
  const idx = messages.findIndex((m) => String(m?.id || "") === String(pendingId || ""));
  const finalMessageId = String(message?.id || "").trim();
  markMessageSendGuard(activeId, finalMessageId || String(pendingId || ""));
  if (idx >= 0) {
    messages[idx] = {
      ...messages[idx],
      ...resolveThreadMessageFromServer(message || {}, fallbackPreviewText)
    };
    if (finalMessageId) {
      for (let i = messages.length - 1; i >= 0; i -= 1) {
        if (i === idx) continue;
        if (String(messages[i]?.id || "").trim() !== finalMessageId) continue;
        messages.splice(i, 1);
      }
    }
  } else {
    upsertThreadMessageFromServer(activeId, message || {}, uiState.currentUserId);
  }
  const preview = String(message?.content || fallbackPreviewText || "").trim() || "新消息";
  updateMessageInboxPreview(activeId, preview, {
    time: formatThreadClock(message?.created_at),
    lastMessageAt: String(message?.created_at || "")
  });
  markMessageRead(activeId);
  uiState.messageReadAckConversationId = "";
  triggerMessageRealtimeRender({ scrollToBottom: true, forceBottom: true });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("INVALID_FILE_DATA"));
    };
    reader.onerror = () => reject(new Error("FILE_READ_FAILED"));
    reader.readAsDataURL(file);
  });
}

function isLikelyImageFile(file) {
  if (!(file instanceof File)) return false;
  const mime = String(file.type || "").trim().toLowerCase();
  if (mime.startsWith("image/")) return true;
  const name = String(file.name || "").trim().toLowerCase();
  return /\.(png|jpe?g|webp|gif|bmp|svg|avif|heic|heif)$/.test(name);
}

function dataUrlByteSize(dataUrl) {
  const raw = String(dataUrl || "");
  const comma = raw.indexOf(",");
  if (comma < 0) return 0;
  const b64 = raw.slice(comma + 1);
  const padding = b64.endsWith("==") ? 2 : (b64.endsWith("=") ? 1 : 0);
  return Math.max(0, Math.floor((b64.length * 3) / 4) - padding);
}

async function compressImageFileToDataUrl(file, {
  maxSide = 1280,
  jpegQuality = 0.74,
  minJpegQuality = 0.42,
  maxOutputBytes = 880_000,
  allowRawFallback = true,
  rawFallbackMaxBytes = 3_600_000
} = {}) {
  const rawUrl = await fileToDataUrl(file);
  if (dataUrlByteSize(rawUrl) <= maxOutputBytes) return rawUrl;
  let img;
  try {
    img = await new Promise((resolve, reject) => {
      const node = new Image();
      node.onload = () => resolve(node);
      node.onerror = () => reject(new Error("IMAGE_DECODE_FAILED"));
      node.src = rawUrl;
    });
  } catch (error) {
    if (allowRawFallback && dataUrlByteSize(rawUrl) <= rawFallbackMaxBytes) {
      return rawUrl;
    }
    throw error;
  }
  const width = Number(img.width || 0);
  const height = Number(img.height || 0);
  if (!width || !height) return rawUrl;
  const scale = Math.min(1, maxSide / Math.max(width, height));
  const targetW = Math.max(1, Math.round(width * scale));
  const targetH = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d");
  if (!ctx) return rawUrl;
  let attemptSide = Math.max(640, Math.max(targetW, targetH));
  let attemptQuality = jpegQuality;
  let best = rawUrl;
  while (attemptSide >= 640) {
    const ratio = attemptSide / Math.max(width, height);
    const drawW = Math.max(1, Math.round(width * Math.min(1, ratio)));
    const drawH = Math.max(1, Math.round(height * Math.min(1, ratio)));
    canvas.width = drawW;
    canvas.height = drawH;
    ctx.clearRect(0, 0, drawW, drawH);
    ctx.drawImage(img, 0, 0, drawW, drawH);
    let q = attemptQuality;
    while (q >= minJpegQuality) {
      const candidate = canvas.toDataURL("image/jpeg", q);
      if (candidate && candidate.length < best.length) best = candidate;
      if (dataUrlByteSize(candidate) <= maxOutputBytes) return candidate;
      q = Math.max(minJpegQuality, Number((q - 0.08).toFixed(2)));
      if (q === minJpegQuality) break;
    }
    attemptSide = Math.round(attemptSide * 0.82);
    attemptQuality = Math.max(minJpegQuality, Number((attemptQuality - 0.06).toFixed(2)));
  }
  if (dataUrlByteSize(best) <= maxOutputBytes) return best;
  if (allowRawFallback && dataUrlByteSize(rawUrl) <= rawFallbackMaxBytes) {
    return rawUrl;
  }
  throw new Error("图片过大，请换一张或先压缩后再发");
}

async function loginWithAccountAndSync() {
  const account = String(uiState.loginAccount || "").trim();
  const password = String(uiState.loginPassword || "");
  if (!account || !password) {
    uiState.loginError = "请输入账号和密码";
    render();
    return;
  }

  uiState.loginLoading = true;
  uiState.loginError = "";
  render();

  try {
    const resp = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ account, password })
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data?.user?.id) {
      throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    }

    await syncUserAfterAuth(data.user.id, data.user);

    uiState.showLoginModal = false;
    uiState.loginPassword = "";
    uiState.loginError = "";
    window.location.hash = consumePostLoginRedirectHash();
  } catch (err) {
    uiState.loginError = err instanceof Error ? err.message : "登录失败，请稍后重试";
  } finally {
    uiState.loginLoading = false;
    render();
  }
}

async function registerWithAccountAndSync() {
  const account = String(uiState.registerAccount || "").trim();
  const password = String(uiState.registerPassword || "");
  const confirmPassword = String(uiState.registerConfirmPassword || "");

  if (!account || !password || !confirmPassword) {
    uiState.loginError = "请填写账号、密码和确认密码";
    render();
    return;
  }
  if (password.length < 6) {
    uiState.loginError = "密码至少 6 位";
    render();
    return;
  }
  if (password !== confirmPassword) {
    uiState.loginError = "两次输入的密码不一致";
    render();
    return;
  }

  uiState.loginLoading = true;
  uiState.loginError = "";
  render();

  try {
    const resp = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ account, password, confirmPassword })
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data?.user?.id) {
      throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    }

    await syncUserAfterAuth(data.user.id, data.user);

    uiState.showLoginModal = false;
    uiState.accountAuthMode = "login";
    uiState.registerAccount = "";
    uiState.registerPassword = "";
    uiState.registerConfirmPassword = "";
    uiState.loginPassword = "";
    uiState.loginError = "";
    window.location.hash = consumePostLoginRedirectHash();
  } catch (err) {
    uiState.loginError = err instanceof Error ? err.message : "注册失败，请稍后重试";
  } finally {
    uiState.loginLoading = false;
    render();
  }
}

async function syncUserAfterAuth(preferredUserId = "", userHint = null) {
  const preferredId = String(preferredUserId || "").trim();
  const sessionUser = preferredId ? null : await getServerAuthSessionUser();
  const resolvedUserId = preferredId || String(sessionUser?.id || "").trim();
  if (!resolvedUserId) throw new Error("BOOTSTRAP_USER_MISSING");
  uiState.currentUserId = resolvedUserId;
  uiState.isLoggedIn = true;
  persistAuthUserId();
  hydrateProfilePendingPatch(resolvedUserId);
  uiState.bootstrapFullLoaded = false;
  uiState.bootstrapFullLoading = false;
  meRelationForceRefreshAt = 0;
  resetBootstrapSectionRuntime();

  if (userHint && typeof userHint === "object") {
    const nickname = String(userHint.nickname || userHint.name || "").trim();
    if (nickname) {
      const handleSeed = nickname
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5]+/g, "_")
        .replace(/^_+|_+$/g, "");
      uiState.profile = {
        ...uiState.profile,
        name: nickname,
        handle: uiState.profile.handle || `@${handleSeed || "drama_user"}`
      };
      if (!uiState.showProfileEditModal) {
        uiState.profileDraft = { ...uiState.profile };
      }
    }
  }

  const hasWarmCache = tryHydrateFromCache(resolvedUserId);
  render();

  // Auth should feel instant: wait a short bounded window for core data, then continue.
  const coreBootstrapPromise = bootstrapClientData(resolvedUserId)
    .catch(() => null)
    .finally(() => {
      render();
    });
  if (!hasWarmCache) {
    await Promise.race([
      coreBootstrapPromise,
      new Promise((resolve) => setTimeout(resolve, 1200))
    ]);
  }

  const currentHash = window.location.hash || "#/theater/home";
  ensureSectionDataOnDemand(currentHash);
  if (hasWarmCache) {
    scheduleBootstrapFullRefresh(resolvedUserId, {
      immediate: false,
      delayMs: 320
    });
  }
}

async function ensurePlaySession() {
  if (uiState.playSessionId) return uiState.playSessionId;
  const world = getSelectedWorld();
  const profile = getWorldProfile(world);
  const storyContext = buildStoryContext(world);
  const data = await apiJson("/game/sessions", {
    userId: uiState.currentUserId || null,
    category: world?.theme || "悬疑",
    subCategory: world?.format || "都市追踪",
    mode: storyContext.mode,
    worldCardId: world?.id || "",
    worldId: world?.id || "",
    worldTitle: world?.title || "",
    chapter: profile.chapter || "序幕",
    storyContext,
    model: uiState.playModel || "Prose-4"
  });
  const id = data?.session?.id;
  if (!id) throw new Error("SESSION_CREATE_FAILED");
  uiState.playSessionId = id;
  persistPlaySessionHint({
    worldId: String(world?.id || "").trim(),
    sessionId: String(id || "").trim(),
    title: String(world?.title || "").trim()
  });
  uiState.playAutoResumeCheckedWorldId = String(world?.id || "").trim();
  return id;
}

async function fetchPlaySessionSnapshot(sessionId, limit = 200) {
  const sid = String(sessionId || "").trim();
  if (!sid) throw new Error("SESSION_ID_REQUIRED");
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  return apiGetJson(
    `/game/sessions/${encodeURIComponent(sid)}?userId=${encodeURIComponent(uiState.currentUserId)}&limit=${Math.max(1, Number(limit) || 200)}&_ts=${Date.now()}`
  );
}

function buildPlayEntriesFromSessionTurns(turns = []) {
  const entries = [];
  (Array.isArray(turns) ? turns : []).forEach((turn) => {
    const actionText = String(turn?.user_input || turn?.userInput || "").trim();
    if (actionText) entries.push({ type: "action", text: actionText });
    const narrative = String(turn?.narrative || "").trim();
    if (!narrative) return;
    const parsed = parseNarrativeToEntries(narrative);
    if (Array.isArray(parsed) && parsed.length) entries.push(...parsed);
    else entries.push({ type: "narrator", text: narrative });
  });
  return entries;
}

async function openPlaySessionFromSnapshot({
  sessionId,
  worldId,
  fallbackTitle = ""
}) {
  const sid = String(sessionId || "").trim();
  const wid = String(worldId || "").trim();
  if (!sid || !wid) return;
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.showLoginModal = true;
    render();
    return;
  }
  if (uiState.playResumeLoading) return;
  uiState.playResumeLoading = true;
  render();
  try {
    if (!hasWorldCard(wid)) {
      await bootstrapClientData(uiState.currentUserId).catch(() => null);
    }
    if (!hasWorldCard(wid)) {
      showPlaySystemHint(`找不到《${fallbackTitle || "该故事"}》，可能已下线`, "error");
      return;
    }
    const data = await fetchPlaySessionSnapshot(sid, 200);
    const session = data?.session && typeof data.session === "object" ? data.session : null;
    const turns = Array.isArray(data?.turns) ? data.turns : [];
    const resumeAllowed = data?.resumeAllowed !== false;
    setSelectedWorldId(wid);
    resetPlayStateForWorld(wid);
    if (!resumeAllowed || !session?.id) {
      uiState.playSessionId = "";
      uiState.playSessionBlockedReason = "";
      uiState.playAutoOpeningRequested = false;
      clearPlaySessionHint(wid, uiState.currentUserId);
      uiState.playAutoResumeCheckedWorldId = wid;
      window.location.hash = "#/play/core";
      showPlaySystemHint(String(data?.reason || "该剧情有新版本，已为你切换到新局"), "notice");
      return;
    }

    const entries = buildPlayEntriesFromSessionTurns(turns);
    uiState.playSessionId = String(session.id || "");
    persistPlaySessionHint({
      worldId: wid,
      sessionId: uiState.playSessionId,
      title: String(session?.story_context?.title || fallbackTitle || getSelectedWorld()?.title || "").trim()
    }, uiState.currentUserId);
    uiState.playAutoResumeCheckedWorldId = wid;
    uiState.playModel = String(session.current_model || uiState.playModel || "Prose-4");
    uiState.playRound = Math.max(1, Number(session.round_no || turns.length || 1) || 1);
    const world = getSelectedWorld();
    const profile = getWorldProfile(world);
    const chapterFromSession = String(session?.story_context?.chapter || "").trim();
    uiState.playChapter = chapterFromSession || profile.chapter || "序幕";
    uiState.playEntries = entries.length ? entries : getProfileOpeningEntries(profile);
    uiState.playAutoOpeningRequested = Boolean(entries.length);
    uiState.playSessionBlockedReason = "";
    uiState.playInitScrollPending = true;
    const latestTurn = turns[turns.length - 1] || null;
    const latestQuestion = String(latestTurn?.prompt_question || "").trim();
    const latestOptions = Array.isArray(latestTurn?.prompt_options) ? latestTurn.prompt_options.map((x) => String(x || "").trim()).filter(Boolean) : [];
    if (latestQuestion) uiState.playPromptQuestion = latestQuestion;
    if (latestOptions.length) uiState.playPromptOptions = latestOptions.slice(0, 6);
    window.location.hash = "#/play/core";
  } catch (error) {
    clearPlaySessionHint(wid, uiState.currentUserId);
    uiState.playAutoResumeCheckedWorldId = wid;
    showPlaySystemHint(`恢复失败：${error instanceof Error ? error.message : "unknown"}`, "error");
  } finally {
    uiState.playResumeLoading = false;
    render();
  }
}

function isStoryConversationInboxItem(item = {}) {
  const bizType = String(item?.bizType || "").trim().toLowerCase();
  if (bizType === "story") return true;
  const worldId = String(item?.worldId || "").trim();
  return Boolean(worldId && !String(item?.userId || "").trim());
}

async function openStoryConversationFromInbox(item = {}) {
  const worldId = String(item?.worldId || "").trim();
  const sessionId = String(item?.sessionId || "").trim();
  const fallbackTitle = String(item?.name || "").trim();
  if (sessionId && worldId) {
    persistPlaySessionHint({
      worldId,
      sessionId,
      title: fallbackTitle
    }, uiState.currentUserId);
    await openPlaySessionFromSnapshot({
      sessionId,
      worldId,
      fallbackTitle
    });
    return;
  }
  if (!worldId) {
    throw new Error("STORY_WORLD_MISSING");
  }
  if (!hasWorldCard(worldId) && uiState.currentUserId) {
    await bootstrapClientData(uiState.currentUserId).catch(() => null);
  }
  if (!hasWorldCard(worldId)) {
    throw new Error("STORY_WORLD_NOT_FOUND");
  }
  setSelectedWorldId(worldId);
  resetPlayStateForWorld(worldId);
  uiState.playSessionId = "";
  uiState.playSessionBlockedReason = "";
  uiState.playAutoOpeningRequested = false;
  window.location.hash = "#/play/core";
}

let playPauseInFlight = false;
async function pauseCurrentPlaySessionIfNeeded(reason = "leave_play_route") {
  const sid = String(uiState.playSessionId || "").trim();
  if (!sid || playPauseInFlight) return;
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  playPauseInFlight = true;
  try {
    await apiJson(`/game/sessions/${encodeURIComponent(sid)}/pause`, {
      userId: uiState.currentUserId,
      reason
    });
  } catch {
    // keep local session id even if pause request fails
  } finally {
    playPauseInFlight = false;
  }
}

async function submitPlayTurn(actionText, options = {}) {
  const input = String(actionText || "").trim();
  if (!input || uiState.playRequesting) return;
  if (uiState.playSessionBlockedReason) {
    showPlaySystemHint(uiState.playSessionBlockedReason, "error");
    return;
  }
  const requestWorldId = String(getSelectedWorld()?.id || "");
  const storyContext = buildStoryContext(getSelectedWorld());
  const silentAction = Boolean(options.silentAction);
  const replaceOpening = Boolean(options.replaceOpening);
  const autoOpening = Boolean(options.autoOpening);
  const requestNonce = Number(uiState.playRequestNonce || 0) + 1;
  uiState.playRequestNonce = requestNonce;

  uiState.playRequesting = true;
  if (replaceOpening) {
    uiState.playEntries = [];
  }
  if (!silentAction) uiState.playEntries.push({ type: "action", text: input });
  if (!silentAction) triggerPlayLatestTurnPulse();
  const streamingEntry = { type: "streaming", text: "..." };
  uiState.playEntries.push(streamingEntry);
  uiState.playActionDraft = "";
  render();
  scrollPlayTurnToTop();

  try {
    const sessionId = await ensurePlaySession();
    if (requestNonce !== uiState.playRequestNonce) return;
    if (String(getSelectedWorld()?.id || "") !== requestWorldId) return;
    let finalResponse = null;
    let streamBuffer = "";
    let streamFlushTimer = 0;
    let streamedSnapshot = "";
    const flushStreamBuffer = () => {
      if (!streamBuffer) return;
      streamingEntry.text = `${streamingEntry.text === "..." ? "" : streamingEntry.text}${streamBuffer}`;
      streamBuffer = "";
      streamedSnapshot = String(streamingEntry.text || "").trim();
      render();
      scrollPlayTurnToTop("auto");
    };
    await apiSseJson(
      "/game/turns/stream",
      { sessionId, input, mode: storyContext.mode, storyContext, model: uiState.playModel || "Prose-4" },
      {
        onDelta: (text) => {
          if (requestNonce !== uiState.playRequestNonce) return;
          if (String(getSelectedWorld()?.id || "") !== requestWorldId) return;
          streamBuffer += sanitizeStreamingDelta(text);
          if (!streamFlushTimer) {
            streamFlushTimer = window.setTimeout(() => {
              streamFlushTimer = 0;
              flushStreamBuffer();
            }, 45);
          }
        },
        onFinal: (response) => {
          if (streamFlushTimer) {
            window.clearTimeout(streamFlushTimer);
            streamFlushTimer = 0;
          }
          flushStreamBuffer();
          finalResponse = response || {};
        },
        onError: (err) => {
          if (streamFlushTimer) {
            window.clearTimeout(streamFlushTimer);
            streamFlushTimer = 0;
          }
          const streamErr = new Error(err?.message || err?.code || "STREAM_FAILED");
          streamErr.code = String(err?.code || "").trim();
          throw streamErr;
        }
      }
    );
    if (requestNonce !== uiState.playRequestNonce) return;
    if (String(getSelectedWorld()?.id || "") !== requestWorldId) return;
    clearPlayPendingEntries();
    const streamedText = String(streamingEntry.text || streamedSnapshot || "").trim();
    uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
    const response = finalResponse || {};
    if (!response?.actionResult && streamedText && streamedText !== "...") {
      uiState.playEntries.push({ type: "narrator", text: streamedText });
      if (autoOpening) uiState.playAutoOpeningRequested = true;
      showPlaySystemHint("已保留流式正文，结构化字段将在下一回合继续补全。", "notice");
      return;
    }
    if (!response?.actionResult) throw new Error("STREAM_EMPTY_RESULT");
    const entries = parseNarrativeToEntries(response.actionResult);
    const promptData = extractPlayPromptFromResponse(response.actionResult, response.jsonBlock, getSelectedWorld());
    uiState.playPromptQuestion = promptData.question;
    uiState.playPromptOptions = promptData.options;
    if (entries.length) {
      const narrativeEntries = entries.filter((x) => x.type !== "impact");
      const impactHints = entries
        .filter((x) => x.type === "impact")
        .map((x) => x.text)
        .filter((line) => !/^(抛球给用户|抛球给用户)：/.test(String(line)));
      if (narrativeEntries.length) uiState.playEntries.push(...narrativeEntries);
      showPlaySystemHintBatch(impactHints);
    }
    if (typeof response.round === "number") uiState.playRound = response.round;
    if (autoOpening) uiState.playAutoOpeningRequested = true;
    const providerHint = buildProviderHintMessage(response);
    if (providerHint) showPlaySystemHint(providerHint);
  } catch (error) {
    if (requestNonce !== uiState.playRequestNonce) return;
    if (String(getSelectedWorld()?.id || "") !== requestWorldId) return;
    const errCode = String(error?.code || error?.message || "").trim();
    if (["SESSION_INTERRUPTED", "WORLD_CARD_UPDATED", "WORLD_CARD_UNAVAILABLE", "SESSION_ENDED"].includes(errCode)) {
      clearPlayPendingEntries();
      uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
      uiState.playSessionId = "";
      clearPlaySessionHint(requestWorldId, uiState.currentUserId);
      uiState.playRequesting = false;
      uiState.playSessionBlockedReason = "该剧情新版本已上线，请先退出并重新进入";
      uiState.playEntries.push({ type: "impact", text: "系统提示：该剧情已更新为新版本，请返回并重新进入。"});
      showPlaySystemHint(uiState.playSessionBlockedReason, "error");
      render();
      scrollPlayTurnToTop("auto");
      return;
    }
    clearPlayPendingEntries();
    const streamedText = String(streamingEntry.text || "").trim();
    uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
    if (streamedText && streamedText !== "...") {
      uiState.playEntries.push({ type: "narrator", text: streamedText });
      showPlaySystemHint("已保留本回合已生成内容。", "notice");
    }
    try {
      const sessionId = await ensurePlaySession();
      const data = await apiJson("/game/turns", {
        sessionId,
        input,
        mode: storyContext.mode,
        storyContext,
        model: uiState.playModel || "Prose-4"
      });
      const response = data?.response || {};
      const entries = parseNarrativeToEntries(response.actionResult);
      const promptData = extractPlayPromptFromResponse(response.actionResult, response.jsonBlock, getSelectedWorld());
      uiState.playPromptQuestion = promptData.question;
      uiState.playPromptOptions = promptData.options;
      if (entries.length) {
        const narrativeEntries = entries.filter((x) => x.type !== "impact");
        const impactHints = entries
          .filter((x) => x.type === "impact")
          .map((x) => x.text)
          .filter((line) => !/^(抛球给用户|抛球给用户)：/.test(String(line)));
        if (narrativeEntries.length) uiState.playEntries.push(...narrativeEntries);
        showPlaySystemHintBatch(impactHints);
      }
      if (typeof response.round === "number") uiState.playRound = response.round;
      showPlaySystemHint("流式不可用，已自动切换普通生成", "notice");
    } catch (fallbackError) {
      const msg = fallbackError instanceof Error ? fallbackError.message : "unknown";
      const view = msg === "STREAM_TIMEOUT"
        ? "系统提示：本回合生成超时，请重试或缩短输入。"
        : msg === "NETWORK_UNREACHABLE"
          ? "系统提示：无法连接到生成服务，请确认后端 API 已启动（127.0.0.1:3010）。"
        : `系统提示：回合生成失败（${msg}）`;
      uiState.playEntries.push({ type: "impact", text: view });
    }
  } finally {
    if (requestNonce !== uiState.playRequestNonce) return;
    uiState.playRequesting = false;
    render();
    scrollPlayTurnToTop("auto");
  }
}

function ensurePlayAutoOpening(world) {
  if (ensurePlayResumeFromHint(world)) return;
  if (uiState.playAutoResumeInFlight || uiState.playResumeLoading) return;
  if (uiState.playAutoOpeningRequested) return;
  if (uiState.playRequesting) return;
  if (String(uiState.playSessionId || "").trim()) return;
  if (uiState.playSessionBlockedReason) return;
  if (uiState.playRound !== 1) return;
  const currentHash = window.location.hash || "";
  if (!currentHash.startsWith("#/play")) return;
  uiState.playAutoOpeningRequested = true;
  const mode = buildStoryContext(world).mode;
  const openingInput = mode === "virtual_character"
    ? "我们初次见面，你先做一个自然的自我介绍。"
    : "开始本故事";
  setTimeout(() => {
    void submitPlayTurn(openingInput, { silentAction: true, replaceOpening: true, autoOpening: true });
  }, 0);
}

function showPlaySystemHint(text, tone = "notice") {
  const message = String(text || "").trim();
  if (!message) return;
  const safeTone = tone === "success" || tone === "error" ? tone : "notice";
  uiState.playSystemHint = message;
  uiState.playSystemHintTone = safeTone;
  render();
  setTimeout(() => {
    if (uiState.playSystemHint === message) {
      uiState.playSystemHint = "";
      uiState.playSystemHintTone = "notice";
      render();
    }
  }, 3800);
}

function showPlaySystemHintBatch(lines) {
  const queue = (Array.isArray(lines) ? lines : [])
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  if (!queue.length) return;
  queue.forEach((line, index) => {
    setTimeout(() => showPlaySystemHint(line), index * 3900);
  });
}

function ensurePlayResumeFromHint(world = getSelectedWorld()) {
  const currentHash = window.location.hash || "";
  if (!currentHash.startsWith("#/play")) return false;
  const worldId = String(world?.id || uiState.selectedWorldId || "").trim();
  if (!worldId) return false;
  if (!uiState.isLoggedIn || !uiState.currentUserId) return false;
  if (String(uiState.playSessionId || "").trim()) return false;
  if (uiState.playAutoResumeInFlight || uiState.playResumeLoading) return true;
  if (String(uiState.playAutoResumeCheckedWorldId || "").trim() === worldId) return false;

  uiState.playAutoResumeCheckedWorldId = worldId;
  const hint = resolveLatestPlaySessionHintByWorld(worldId, uiState.currentUserId);
  const hintedSessionId = String(hint?.sessionId || "").trim();
  if (!hintedSessionId) return false;

  uiState.playAutoResumeInFlight = true;
  setTimeout(() => {
    void openPlaySessionFromSnapshot({
      sessionId: hintedSessionId,
      worldId,
      fallbackTitle: String(hint?.title || world?.title || "").trim()
    })
      .catch(() => {})
      .finally(() => {
        uiState.playAutoResumeInFlight = false;
        render();
      });
  }, 0);
  return true;
}

function buildProviderHintMessage(response) {
  const provider = String(response?.provider || "").trim();
  const reason = String(response?.providerReason || "").trim();
  if (!provider || !reason) return "";
  const normalized = reason.toLowerCase();
  // Hide backend/internal fallback traces from end users.
  if (
    normalized.startsWith("stream_partial:")
    || normalized.startsWith("stream_partial_quality_bypass:")
    || normalized.includes("opening_gate_failed")
    || normalized.includes("missing_json_block")
    || normalized.includes("missing_narrative_block")
    || normalized.includes("quality_gate_failed")
  ) {
    return "";
  }
  return `引擎：${provider}（${reason}）`;
}

function normalizeStoryCardPayload(payload = {}) {
  const worldId = getSafeWorldId(payload.worldId || payload.wid || payload.id || "", 0);
  const title = String(payload.title || "").trim() || "故事卡";
  const desc = String(payload.desc || payload.subtitle || "").trim();
  const author = String(payload.author || "").trim();
  return { worldId, title, desc, author };
}

function normalizePlaySessionCardPayload(payload = {}) {
  const kind = String(payload?.kind || "").trim();
  if (kind !== "play_session") return null;
  const sessionId = String(payload?.sessionId || payload?.sid || "").trim();
  const worldId = String(payload?.worldId || payload?.wid || "").trim();
  if (!sessionId || !worldId) return null;
  return {
    kind,
    sessionId,
    worldId,
    title: String(payload?.title || "故事会话").trim() || "故事会话",
    coverUrl: String(payload?.coverUrl || payload?.cover || "").trim(),
    chapter: String(payload?.chapter || "").trim(),
    mode: String(payload?.mode || "").trim(),
    status: String(payload?.status || "active").trim() || "active",
    gameplayVersion: Math.max(1, Number(payload?.gameplayVersion || 1) || 1),
    appearanceVersion: Math.max(1, Number(payload?.appearanceVersion || 1) || 1)
  };
}

const MESSAGE_EMOJI_PACK = ["😀", "😂", "😍", "🥹", "😎", "🤔", "😭", "😡", "👍", "🙏", "🎉", "❤️"];

function renderMessageComposerIcon(kind = "image") {
  if (kind === "emoji") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8"></circle>
        <path d="M8.8 14.4c.8 1 1.9 1.6 3.2 1.6 1.3 0 2.4-.6 3.2-1.6"></path>
        <circle cx="9.2" cy="10.1" r="1"></circle>
        <circle cx="14.8" cy="10.1" r="1"></circle>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="5" width="16" height="14" rx="2"></rect>
      <circle cx="9" cy="10" r="1.5"></circle>
      <path d="M6.5 16.5l4.2-4.3 2.7 2.8 2.8-3.1 1.3 1.6"></path>
    </svg>
  `;
}

function renderThreadMessageBubble(message) {
  const type = String(message?.type || "text");
  if (Boolean(message?.withdrawn) || (type === "system" && String(message?.text || "").includes("撤回"))) {
    return `<div class="dm-modern-bubble dm-withdrawn-bubble">${escapeHtml(String(message?.text || "你撤回了一条消息"))}</div>`;
  }
  if (type === "image") {
    const imageUrl = String(message?.payload?.url || "").trim();
    if (imageUrl) {
      return `
        <div class="dm-modern-bubble dm-media-bubble">
          <img src="${escapeHtml(imageUrl)}" alt="聊天图片" />
          <button
            class="dm-media-preview-trigger"
            data-action="preview-message-image"
            data-url="${escapeHtml(imageUrl)}"
            aria-label="查看大图"
          ></button>
        </div>
      `;
    }
  }
  if (type === "emoji" || type === "sticker") {
    const emoji = String(message?.payload?.emoji || message?.text || "").trim() || "😀";
    return `<div class="dm-modern-bubble dm-emoji-bubble">${escapeHtml(emoji)}</div>`;
  }
  const cardLike = type === "story_card" || type === "card";
  if (!cardLike) {
    const quote = normalizeQuotePayload(message?.payload?.quote || {});
    const quoteHtml = quote ? `<div class="dm-quote-inline">${escapeHtml(quote.senderName)}：${escapeHtml(quote.text)}</div>` : "";
    return `<div class="dm-modern-bubble">${quoteHtml}<div class="dm-bubble-text">${escapeHtml(String(message?.text || ""))}</div></div>`;
  }
  const playCard = normalizePlaySessionCardPayload(message?.payload || {});
  if (playCard) {
    const fallbackText = String(message?.text || "").trim() || `继续游玩《${playCard.title}》`;
    return `<div class="dm-modern-bubble"><div class="dm-bubble-text">${escapeHtml(fallbackText)}</div></div>`;
  }
  const card = normalizeStoryCardPayload(message?.payload || {});
  if (!card.worldId) {
    return `<div class="dm-modern-bubble">${escapeHtml(String(message?.text || ""))}</div>`;
  }
  const subtitle = [card.author ? `作者：${card.author}` : "", card.desc || ""].filter(Boolean).join(" · ");
  return `
    <article class="dm-story-share-card" data-action="open-world-detail" data-id="${card.worldId}">
      <small>故事卡分享</small>
      <h4>${escapeHtml(card.title)}</h4>
      ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}
      <button data-action="open-world-detail" data-id="${card.worldId}">点击进入详情</button>
    </article>
  `;
}

function getThreadMessageDeliveryState(message = {}) {
  const type = String(message?.type || "text");
  const isWithdrawn = Boolean(message?.withdrawn) || (type === "system" && String(message?.text || "").includes("撤回"));
  if (isWithdrawn) return "none";
  if (String(message?.from || "") !== "me") return "none";
  if (Boolean(message?.pending)) return "sending";
  if (Boolean(message?.read)) return "read";
  return "sent";
}

function renderThreadMessageDeliveryState(message = {}) {
  const state = getThreadMessageDeliveryState(message);
  if (state === "none") return "";
  if (state === "sending") {
    return `
      <span class="dm-delivery-state is-sending" aria-label="发送中">
        <span class="dm-delivery-spinner" aria-hidden="true"></span>
      </span>
    `;
  }
  if (state === "read") {
    return `
      <span class="dm-delivery-state is-read" aria-label="已读">
        <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
          <path d="M1.8 9.4l2.8 2.8 4.2-5"></path>
          <path d="M6.8 9.4l2.8 2.8 4.2-5"></path>
        </svg>
      </span>
    `;
  }
  return `
    <span class="dm-delivery-state is-sent" aria-label="已发送">
      <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
        <path d="M3 9.4l3 3 5-6"></path>
      </svg>
    </span>
  `;
}

function buildThreadMessagesHtml(activeId, chatMeta, myAvatar = {}) {
  const messages = ensureMessageThread(activeId);
  const peerName = String(chatMeta?.name || "").trim();
  const peerUserId = String(chatMeta?.userId || "").trim();
  const peerAvatarUrl = String(chatMeta?.avatarUrl || "").trim();
  const myName = String(myAvatar?.name || uiState.profile?.name || "我").trim() || "我";
  const myAvatarText = String(myAvatar?.text || myName.slice(0, 1) || "我").trim() || "我";
  const myUserId = String(myAvatar?.userId || uiState.currentUserId || uiState.profile?.id || "").trim();
  const myAvatarUrl = String(
    myAvatar?.avatarUrl
    || resolveAvatarUrlByIdentity(myName, myUserId)
    || ""
  ).trim();
  const threadWorldId = String(chatMeta?.worldId || "").trim();
  const isStoryThread = isStoryConversationInboxItem(chatMeta) && Boolean(threadWorldId);
  return messages
    .map(
      (m, idx) => `
            ${
              idx === 0 || messages[idx - 1].time !== m.time
                ? `<div class="dm-time-sep dm-time-sep-dark">${m.time || ""}</div>`
                : ""
            }
            <div class="dm-modern-row ${m.from === "me" ? "right" : "left"}">
              ${m.from === "other"
                ? (
                  isStoryThread
                    ? `<span class="dm-modern-avatar" data-action="open-world-detail" data-id="${escapeHtml(threadWorldId)}">${renderMessageInboxAvatar({ name: peerName, avatarUrl: peerAvatarUrl })}</span>`
                    : `<span class="dm-modern-avatar user-avatar-click" data-user="${escapeHtml(peerName)}" data-user-id="${escapeHtml(peerUserId)}" data-avatar-url="${escapeHtml(peerAvatarUrl)}">${escapeHtml(peerName.slice(0, 1))}</span>`
                )
                : ""}
              ${
                m.from === "me"
                  ? `<span class="dm-delivery-slot">${renderThreadMessageDeliveryState(m)}</span>`
                  : ""
              }
              <div class="dm-modern-bubble-wrap dm-message-touch-target ${uiState.messageLongPressMenuOpen && String(uiState.messageLongPressMessageId || "") === String(m?.id || "") ? "is-longpress-target" : ""}" data-message-id="${escapeHtml(String(m?.id || ""))}" data-conversation-id="${escapeHtml(String(activeId || ""))}">
                ${renderThreadMessageBubble(m)}
              </div>
              ${m.from === "me"
                ? `<button
                    class="dm-modern-avatar self dm-self-avatar-btn user-avatar-click"
                    data-action="open-self-profile"
                    data-user="${escapeHtml(myName)}"
                    data-user-id="${escapeHtml(myUserId)}"
                    data-avatar-url="${escapeHtml(myAvatarUrl)}"
                  >${escapeHtml(myAvatarText)}</button>`
                : ""}
            </div>
          `
    )
    .join("");
}

function syncThreadMessageRowAlignment(root = document) {
  if (!(root instanceof Document || root instanceof Element)) return;
  const rows = root.querySelectorAll(".dm-modern-row");
  rows.forEach((row) => {
    if (!(row instanceof HTMLElement)) return;
    const bubbleWrap = row.querySelector(".dm-modern-bubble-wrap");
    if (!(bubbleWrap instanceof HTMLElement)) {
      row.classList.remove("is-single-line");
      return;
    }
    const hasRichContent = Boolean(
      bubbleWrap.querySelector(".dm-media-bubble, .dm-emoji-bubble, .dm-story-share-card")
    );
    const hasQuote = Boolean(bubbleWrap.querySelector(".dm-quote-inline"));
    const bubble = bubbleWrap.querySelector(".dm-modern-bubble");
    if (!(bubble instanceof HTMLElement) || hasRichContent || hasQuote) {
      row.classList.remove("is-single-line");
      return;
    }
    const textNode = bubbleWrap.querySelector(".dm-bubble-text");
    const measureNode = textNode instanceof HTMLElement ? textNode : bubble;
    const textContent = String(measureNode.textContent || "").trim();
    if (!textContent) {
      row.classList.remove("is-single-line");
      return;
    }
    const style = window.getComputedStyle(measureNode);
    let lineHeight = Number.parseFloat(style.lineHeight);
    if (!Number.isFinite(lineHeight) || lineHeight <= 0) {
      const fontSize = Number.parseFloat(style.fontSize) || 16;
      lineHeight = fontSize * 1.3;
    }
    const isSingleLine = Number(measureNode.scrollHeight) <= (lineHeight * 1.28);
    row.classList.toggle("is-single-line", isSingleLine);
  });
}

function pageDirectMessage() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看私信", "查看聊天记录、已读状态和快捷回复。");
  }
  const hashConversationId = getMessageConversationIdFromHash();
  hydrateThreadRouteImmediately(hashConversationId || uiState.selectedMessageId || "");
  const activeId = getActiveConversationId();
  if (activeId) hydrateMessageThreadFromCache(activeId);
  const peerPresence = uiState.messagePeerPresence[activeId] || null;
  const chatMeta = resolveThreadChatMeta(activeId);
  const headerName = String(chatMeta.name || "会话").trim() || "会话";
  const threadWorldId = String(chatMeta.worldId || "").trim();
  const isStoryThread = isStoryConversationInboxItem(chatMeta) && Boolean(threadWorldId);
  const activePinned = isMessageThreadPinned(activeId);
  const activeMuted = isMessageThreadMuted(activeId);
  const onlineStatusText = formatPeerOnlineStatus(peerPresence);
  const myName = String(uiState.profile?.name || "我").trim() || "我";
  const myUserId = String(uiState.currentUserId || uiState.profile?.id || "").trim();
  const myAvatarText = myName.slice(0, 1) || "我";
  const myAvatarUrl = resolveAvatarUrlByIdentity(myName, myUserId);
  const longPressMsg = getThreadMessageById(uiState.messageLongPressConversationId, uiState.messageLongPressMessageId);
  const canWithdrawLongPressMsg = Boolean(
    longPressMsg
    && String(longPressMsg?.from || "") === "me"
    && !Boolean(longPressMsg?.pending)
  );
  const forwardTargets = MESSAGE_INBOX
    .filter((item) => String(item?.id || "").trim() && String(item?.id || "").trim() !== String(activeId || "").trim())
    .slice(0, 12);
  return renderExploreShell(`
    <section class="dm-modern-page">
      <article class="dm-modern-shell ${uiState.messageThreadToolsOpen ? "tools-open" : ""}">
        <div class="dm-head">
          <div class="dm-user">
            <button class="dm-back-btn unified-back-btn" data-action="go-back">←</button>
            ${
              isStoryThread
                ? `<div class="dm-avatar" data-action="open-world-detail" data-id="${escapeHtml(threadWorldId)}">${renderMessageInboxAvatar({ name: headerName, avatarUrl: chatMeta.avatarUrl })}</div>`
                : `<div class="dm-avatar user-avatar-click" data-user="${escapeHtml(String(chatMeta.name || ""))}" data-user-id="${escapeHtml(String(chatMeta.userId || ""))}" data-avatar-url="${escapeHtml(String(chatMeta.avatarUrl || ""))}">${headerName.slice(0, 1)}</div>`
            }
            <div>
              <h3>${escapeHtml(headerName)}</h3>
              <p>${chatMeta.type === "私聊" ? onlineStatusText : chatMeta.type}</p>
            </div>
          </div>
          <div class="dm-head-actions">
            <button class="dm-more-btn" data-action="toggle-message-thread-menu" aria-label="会话菜单">☰</button>
            ${
              uiState.messageThreadMenuOpen
                ? `
              <div class="dm-thread-menu" data-action="noop">
                <button data-action="pin-message-thread">${activePinned ? "取消置顶" : "置顶会话"}</button>
                <button data-action="mute-message-thread">${activeMuted ? "取消免打扰" : "免打扰"}</button>
                <button data-action="clear-message-thread">清空聊天</button>
                ${
                  isStoryThread
                    ? `<button data-action="open-world-detail" data-id="${escapeHtml(threadWorldId)}">查看卡片</button>`
                    : `<button data-action="open-user-modal" data-user="${escapeHtml(String(chatMeta.name || ""))}" data-user-id="${escapeHtml(String(chatMeta.userId || ""))}">查看资料</button>`
                }
              </div>
            `
                : ""
            }
          </div>
        </div>
        <div class="dm-modern-messages dm-modern-messages-dark">
          ${buildThreadMessagesHtml(activeId, chatMeta, {
            name: myName,
            userId: myUserId,
            text: myAvatarText,
            avatarUrl: myAvatarUrl
          })}
        </div>
        ${
          uiState.messageQuoteDraft
            ? `
          <div class="dm-quote-draft-bar">
            <span>${escapeHtml(String(uiState.messageQuoteDraft.senderName || "引用消息"))}：${escapeHtml(String(uiState.messageQuoteDraft.text || ""))}</span>
            <button data-action="message-quote-cancel" aria-label="取消引用">×</button>
          </div>
        `
            : ""
        }
        <div class="dm-modern-input-wrap dm-modern-input-wrap-dark">
          <button class="dm-attach-btn image" data-action="message-open-image-picker" aria-label="发送图片">${renderMessageComposerIcon("image")}</button>
          <button class="dm-attach-btn emoji" data-action="toggle-message-emoji-panel" aria-label="打开表情">${renderMessageComposerIcon("emoji")}</button>
          <input type="file" accept="image/*" data-field="message-thread-image-file" class="dm-hidden-file-input" />
          <input data-field="message-thread-draft" value="${escapeHtml(uiState.messageThreadDraft)}" placeholder="发消息..." />
          <button class="dm-send-btn dm-send-btn-dark" data-action="message-thread-send">发送</button>
        </div>
        ${
          uiState.messageEmojiPanelOpen
            ? `
          <div class="dm-emoji-panel">
            ${MESSAGE_EMOJI_PACK.map((emoji) => `<button data-action="message-send-emoji" data-emoji="${emoji}">${emoji}</button>`).join("")}
          </div>
        `
            : ""
        }
        ${
          uiState.messageImagePreviewUrl
            ? `
          <div class="dm-image-preview-layer" data-action="close-message-image-preview">
            <div class="dm-image-preview-modal" data-action="noop">
              <button class="dm-image-preview-close" data-action="close-message-image-preview" aria-label="关闭">×</button>
              <img src="${escapeHtml(uiState.messageImagePreviewUrl)}" alt="${escapeHtml(uiState.messageImagePreviewAlt || "聊天图片")}" />
            </div>
          </div>
        `
            : ""
        }
        ${
          uiState.messageLongPressMenuOpen
            ? `
          <div class="dm-msg-action-mask" data-action="close-message-longpress-menu">
            <div class="dm-msg-action-menu" data-action="noop" style="left:${Number(uiState.messageLongPressAnchorX || 0)}px;top:${Number(uiState.messageLongPressAnchorY || 0)}px;--pointer-left:${Number(uiState.messageLongPressPointerOffsetX || 0)}px;">
              <button class="dm-msg-action-btn" data-action="message-longpress-copy">
                <span>⧉</span><em>复制</em>
              </button>
              <button class="dm-msg-action-btn" data-action="message-longpress-forward">
                <span>↗</span><em>转发</em>
              </button>
              <button class="dm-msg-action-btn" data-action="message-longpress-quote">
                <span>❝</span><em>引用</em>
              </button>
              <button class="dm-msg-action-btn ${canWithdrawLongPressMsg ? "" : "disabled"}" data-action="message-longpress-withdraw" ${canWithdrawLongPressMsg ? "" : "disabled"}>
                <span>↶</span><em>撤回</em>
              </button>
              <button class="dm-msg-action-btn" data-action="message-longpress-delete">
                <span>⌫</span><em>删除</em>
              </button>
            </div>
            ${
              uiState.messageForwardPickerOpen
                ? `
              <div class="dm-msg-forward-sheet" data-action="noop">
                <header>
                  <strong>转发到</strong>
                  <button data-action="message-forward-cancel">关闭</button>
                </header>
                <div class="dm-msg-forward-list">
                  ${
                    forwardTargets.length
                      ? forwardTargets.map((item) => `
                        <button class="dm-msg-forward-item" data-action="message-forward-pick-target" data-id="${escapeHtml(String(item.id || ""))}">
                          <span class="avatar">${getAvatarText(item.name)}</span>
                          <span class="copy">
                            <strong>${escapeHtml(String(item.name || "会话"))}</strong>
                            <small>${escapeHtml(String(item.type || "私聊"))}</small>
                          </span>
                        </button>
                      `).join("")
                      : `<p class="dm-msg-forward-empty">暂无可转发会话</p>`
                  }
                </div>
              </div>
            `
                : ""
            }
          </div>
        `
            : ""
        }
        ${
          uiState.messageClearConfirmOpen
            ? `
          <div class="dm-clear-confirm-mask" data-action="message-clear-cancel">
            <div class="dm-clear-confirm-modal" data-action="noop">
              <h4>确认清空聊天记录？</h4>
              <p>清空后会隐藏当前会话的历史消息，仅保留后续新消息。</p>
              <div class="dm-clear-confirm-actions">
                <button data-action="message-clear-cancel">取消</button>
                <button class="danger" data-action="message-clear-confirm">确认清空</button>
              </div>
            </div>
          </div>
        `
            : ""
        }
        ${
          uiState.messageDeleteConfirmOpen
            ? `
          <div class="dm-clear-confirm-mask" data-action="message-delete-cancel">
            <div class="dm-clear-confirm-modal" data-action="noop">
              <h4>删除这条消息？</h4>
              <p>仅在你的界面删除，对方仍能看到这条消息。</p>
              <div class="dm-clear-confirm-actions">
                <button data-action="message-delete-cancel">取消</button>
                <button class="danger" data-action="message-delete-confirm">确认删除</button>
              </div>
            </div>
          </div>
        `
            : ""
        }
        ${uiState.messageFeedback ? `<div class="msg-action-feedback">${uiState.messageFeedback}</div>` : ""}
      </article> 
    </section>
  `);
}

function pagePlayCore() {
  const world = getSelectedWorld();
  const profile = getWorldProfile(world);
  const playShellStyle = buildPlayRouteHostStyleVars();
  const authorProfile = buildAuthorProfileByName(world?.author || "Drama 用户", world?.authorId || "");
  const authorFollowed = Boolean(authorProfile?.isFollowedByMe);
  ensurePlayAutoOpening(world);
  const modelMenuOpen = uiState.playModelMenuOpen;
  const playSendDisabled = uiState.playRequesting || Boolean(uiState.playSessionBlockedReason);
  const likeFxClass = isWorldActionFxActive("like") ? "tap-pop" : "";
  const favoriteFxClass = isWorldActionFxActive("favorite") ? "tap-pop" : "";
  const followFxClass = isWorldActionFxActive("follow") ? "tap-pop" : "";
  const tipFxClass = isWorldActionFxActive("tip") ? "tip-anim" : "";
  const worldSummary = String(
    world?.summary
    || world?.intro
    || world?.setting
    || profile?.mainQuest
    || "你已进入故事，请继续推进主线。"
  ).trim();
  const modelGroups = PLAY_MODEL_OPTIONS.reduce((bucket, model) => {
    const meta = PLAY_MODEL_META[model] || {};
    const group = String(meta.group || "常规模型");
    if (!bucket[group]) bucket[group] = [];
    bucket[group].push({
      id: model,
      subtitle: String(meta.subtitle || ""),
      desc: String(meta.desc || ""),
      speed: String(meta.speed || ""),
      badge: String(meta.badge || "")
    });
    return bucket;
  }, {});
  const groupDesc = {
    "PROSE 系列": "偏叙事表达，适合沉浸剧情",
    "DIRECTOR 系列": "偏镜头感与场景化描述",
    "GROK 系列": "偏推理与策略博弈"
  };
  const narratorName = String(world?.title || "旁白").trim() || "旁白";
  const narratorAvatarCandidates = normalizeMediaUrls(
    world?.albumMedia
    || world?.album_media
    || world?.mediaUrls
    || world?.media_urls
  );
  const narratorAvatarUrl = String(
    narratorAvatarCandidates[0]
    || world?.firstImageUrl
    || world?.coverUrl
    || world?.cover_url
    || ""
  ).trim();
  const playTopPinSpacer = Math.max(0, Math.round(Number(uiState.playTopPinSpacer || 0)));
  const turnGroups = groupPlayEntriesByTurn(uiState.playEntries);
  const latestActionTurnIndex = (() => {
    for (let i = turnGroups.length - 1; i >= 0; i -= 1) {
      if (turnGroups[i]?.action) return i;
    }
    return -1;
  })();
  const hasActionTurn = latestActionTurnIndex >= 0;
  const latestTurn = hasActionTurn ? turnGroups[latestActionTurnIndex] : null;
  const historyTurns = hasActionTurn
    ? turnGroups.filter((_, idx) => idx !== latestActionTurnIndex)
    : turnGroups;
  const renderTurnGroup = (turn, isLatest = false) => {
    if (!turn) return "";
    const turnClass = isLatest
      && Date.now() < Number(uiState.playLatestTurnPulseUntil || 0)
      && turn?.action
        ? " is-latest-pulse"
        : "";
    const actionHtml = turn?.action
      ? `
        <article class="play-log-action">
          <p>${escapeHtml(turn.action.text)}</p>
        </article>
      `
      : "";
    const bodyHtml = (Array.isArray(turn?.items) ? turn.items : [])
      .map((entry) => {
        if (entry.type === "impact") {
          return `
            <article class="play-log-impact">
              <p>${escapeHtml(entry.text)}</p>
            </article>
          `;
        }
        if (entry.type === "pending") {
          return `
            <article class="play-log-pending">
              <p>${escapeHtml(entry.text)}</p>
            </article>
          `;
        }
        return `
          <div class="play-narrative-meta">
            <span class="play-narrative-avatar ${narratorAvatarUrl ? "with-image" : ""}">
              ${narratorAvatarUrl ? `<img src="${escapeHtml(narratorAvatarUrl)}" alt="${escapeHtml(narratorName)}" />` : escapeHtml(narratorName.slice(0, 1))}
            </span>
            <strong>${escapeHtml(narratorName)}</strong>
          </div>
          <article class="play-narrative-block ${entry.type === "streaming" ? "is-streaming" : ""}">
            <p>${escapeHtml(entry.text)}</p>
          </article>
          <div class="play-narrative-tools">
            <button data-action="play-copy-entry" data-text="${escapeHtml(entry.text)}" data-tip="复制" aria-label="复制"><span class="icon-copy-outline" aria-hidden="true"></span></button>
            <button data-action="play-regenerate-entry" data-text="${escapeHtml(entry.text)}" data-tip="重新生成" aria-label="重新生成"><span class="icon-regen-outline" aria-hidden="true"></span></button>
            <button data-action="play-read-entry" data-text="${escapeHtml(entry.text)}" data-tip="朗读" aria-label="朗读"><span class="icon-speak-outline" aria-hidden="true"></span></button>
            <button data-action="play-generate-image" data-tip="文生图" aria-label="文生图"><span class="icon-image-outline" aria-hidden="true"></span></button>
            <button data-action="play-generate-video" data-tip="文生视频" aria-label="文生视频"><span class="icon-video-outline" aria-hidden="true"></span></button>
          </div>
        `;
      })
      .join("");
    return `<section class="play-turn-group${turnClass}">${actionHtml}${bodyHtml}</section>`;
  };
  const focusCardHtml = `
    <article class="play-focus-card">
      <h2>${escapeHtml(profile.mainQuest || "推进主线")}</h2>
      <p>${escapeHtml(worldSummary)}</p>
      <div class="world-author-inline world-author-inline-hero play-world-actions-wrap">
        <div class="world-author-inline-strip play-world-card-actions">
          <button class="world-author-action-ghost ${world?.liked ? "active" : ""} ${likeFxClass}" data-action="toggle-like-story" aria-label="点赞">
            <span class="icon-like-outline" aria-hidden="true"></span>赞 ${formatMetricCount(world?.like)}
          </button>
          <button class="world-author-action-ghost ${world?.favorited ? "active" : ""} ${favoriteFxClass}" data-action="toggle-fav-story" aria-label="收藏">
            <span aria-hidden="true">★</span> 收藏 ${formatMetricCount(world?.star)}
          </button>
          <button class="world-author-action-ghost ${tipFxClass}" data-action="world-tip-author" aria-label="打赏">
            <span class="icon-money-outline" aria-hidden="true"></span> 打赏
          </button>
          <button
            class="world-author-follow-btn ${authorFollowed ? "active" : ""} ${followFxClass}"
            data-action="toggle-world-author-follow"
            data-user-id="${escapeHtml(authorProfile.id || world?.authorId || "")}"
            data-user="${escapeHtml(authorProfile.name || world?.author || "Drama 用户")}"
            aria-label="关注"
          >${authorFollowed ? "✓ 已关注" : "+ 关注"}</button>
        </div>
      </div>
    </article>
  `;
  return `
    <section class="play-shell" style="${escapeHtml(playShellStyle)}">
      <header class="play-topbar">
        <button class="play-back-btn" data-action="go-back" aria-label="返回">←</button>
        <div class="play-title-wrap">
          <h1>${escapeHtml(world?.title || "夜港档案")}</h1>
        </div>
        <div class="play-top-actions">
          <button class="play-model-pill" data-action="toggle-play-model" aria-label="切换模型">
            <span>${escapeHtml(uiState.playModel)}</span>
            <small>模型</small>
          </button>
          <div class="play-head-panel">
            <button class="play-head-icon" data-action="open-world-share" aria-label="分享">↗</button>
            <button class="play-head-icon" data-action="play-export-record" aria-label="复制全文">⤓</button>
            <button class="play-head-icon" data-go="#/play/settings" aria-label="设置">⚙</button>
          </div>
        </div>
      </header>

      ${uiState.playSystemHint ? `
        <div class="play-toast-hint tone-${escapeHtml(uiState.playSystemHintTone || "notice")}" role="status" aria-live="polite">
          <span class="play-toast-icon" aria-hidden="true">${
            uiState.playSystemHintTone === "success" ? "✓" : uiState.playSystemHintTone === "error" ? "×" : "!"
          }</span>
          <p>${escapeHtml(uiState.playSystemHint)}</p>
        </div>
      ` : ""}

      <main class="play-main">
        <section class="play-story-card">
          ${uiState.playSessionBlockedReason ? `<div class="play-system-hint play-session-warning">${escapeHtml(uiState.playSessionBlockedReason)}</div>` : ""}

          <div class="play-log">
            ${hasActionTurn
              ? `
                <div class="play-history-stack">
                  ${focusCardHtml}
                  ${historyTurns.map((turn) => renderTurnGroup(turn, false)).join("")}
                </div>
                <div class="play-current-turn">
                  ${renderTurnGroup(latestTurn, true)}
                </div>
              `
              : `
                ${focusCardHtml}
                ${turnGroups.map((turn) => renderTurnGroup(turn, false)).join("")}
              `
            }
            <div class="play-scroll-spacer" style="height:${playTopPinSpacer}px" aria-hidden="true"></div>

            ${
              uiState.playSceneImageReady
                ? `
              <div class="play-scene-card">
                <div class="play-scene-placeholder"></div>
                <div class="play-scene-card-foot">
                  <p>场景图已生成：雨夜站台，雾重，列车进站</p>
                  <button data-action="play-copy-latest">复制本局最新文本</button>
                </div>
              </div>
            `
                : ""
            }
          </div>
        </section>

      </main>

      <footer class="play-input-dock">
        <div class="play-input-main">
          <button class="play-dock-idea" data-action="play-idea-tips">💡</button>
          <textarea data-field="play-action-draft" placeholder="写下行动，世界会给出代价...">${escapeHtml(uiState.playActionDraft)}</textarea>
          <button class="play-dock-send ${uiState.playRequesting ? "is-loading" : ""}" data-action="play-submit-action" ${playSendDisabled ? "disabled" : ""}>${uiState.playRequesting ? "生成中" : "发送"}</button>
        </div>
      </footer>

      ${
        modelMenuOpen
          ? `
        <div class="play-model-sheet-mask" data-action="toggle-play-model">
          <section class="play-model-sheet" data-action="noop">
            <div class="play-model-sheet-grab"></div>
            <div class="play-model-sheet-head">
              <h3>选择模型</h3>
              <button data-action="toggle-play-model">关闭</button>
            </div>
            <div class="play-model-sheet-body">
              ${Object.entries(modelGroups)
                .map(([group, items]) => `
                  <section class="play-model-group">
                    <header>
                      <strong>${escapeHtml(group)}</strong>
                      <small>${escapeHtml(groupDesc[group] || "模型能力维度")}</small>
                    </header>
                    <div class="play-model-group-list">
                      ${items
                        .map((item) => `
                          <button class="${uiState.playModel === item.id ? "active" : ""}" data-action="play-model-select" data-model="${escapeHtml(item.id)}">
                            <div class="play-model-row-main">
                              <h4>${escapeHtml(item.id)}</h4>
                              <p>${escapeHtml(item.subtitle)} · ${escapeHtml(item.desc)}</p>
                            </div>
                            <div class="play-model-row-side">
                              ${item.badge ? `<em>${escapeHtml(item.badge)}</em>` : ""}
                              <small>${escapeHtml(item.speed)}</small>
                            </div>
                          </button>
                        `)
                        .join("")}
                    </div>
                  </section>
                `)
                .join("")}
            </div>
          </section>
        </div>
      `
          : ""
      }

      ${
        uiState.playIdeaModalOpen
          ? `
        <div class="play-idea-mask" data-action="play-idea-close">
          <div class="play-idea-modal" data-action="noop">
            <div class="play-idea-head">
              <div class="play-idea-head-main">
                <span class="play-idea-kicker">抛球引导</span>
                <h3>${escapeHtml(uiState.playPromptQuestion || "你打算怎么做？")}</h3>
              </div>
              <div class="play-idea-head-actions">
                <button class="play-idea-refresh-btn" data-action="play-idea-refresh">换一组</button>
                <button data-action="play-idea-close">×</button>
              </div>
            </div>
            <p>选择一条引导可直接发送，也可关闭后自行输入：</p>
            <div class="play-idea-options">
              ${uiState.playIdeaOptions
                .map(
                  (x, i) => `
                <button data-action="play-idea-pick" data-text="${escapeHtml(x)}">
                  <span class="play-idea-index">0${i + 1}</span>
                  <span class="play-idea-copy">${escapeHtml(x)}</span>
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `
          : ""
      }
    </section>
    ${uiState.showProfileEditModal ? renderProfileEditModal() : ""}
  `;
}

function pagePlayModel() {
  return pagePlayCore();
}

function pagePlaySettings() {
  const world = getSelectedWorld();
  const bg = getPlayBackgroundState();
  const playShellStyle = buildPlayRouteHostStyleVars();
  const opacityPercent = Math.round(bg.opacity * 100);
  const previewStyle = buildPlayRouteHostStyleVars();
  const devOptions = [
    { title: "音效方案", desc: "切换音效包与氛围音" },
    { title: "文字字号", desc: "调整正文字号与行高" },
    { title: "语音播报", desc: "自动朗读与声线设置" },
    { title: "快捷操作", desc: "手势与按键偏好配置" }
  ];
  return `
    <section class="play-shell play-settings-shell" style="${escapeHtml(playShellStyle)}">
      <header class="play-topbar play-settings-topbar">
        <button class="play-back-btn" data-go="#/play/core" aria-label="返回">←</button>
        <div class="play-title-wrap">
          <h1>游戏设置</h1>
          <p>个性化你的沉浸体验</p>
        </div>
        <div class="play-settings-top-actions">
          <button class="play-settings-finish-btn" data-go="#/play/core">完成</button>
        </div>
      </header>

      ${uiState.playSystemHint ? `
        <div class="play-toast-hint tone-${escapeHtml(uiState.playSystemHintTone || "notice")}" role="status" aria-live="polite">
          <span class="play-toast-icon" aria-hidden="true">${
            uiState.playSystemHintTone === "success" ? "✓" : uiState.playSystemHintTone === "error" ? "×" : "!"
          }</span>
          <p>${escapeHtml(uiState.playSystemHint)}</p>
        </div>
      ` : ""}

      <main class="play-main">
        <section class="play-settings-stack">
          <article class="play-settings-card">
            <header>
              <h3>背景</h3>
              <p>纯色和自定义背景都支持透明度调节</p>
            </header>
            <div class="play-settings-color-grid">
              ${PLAY_BACKGROUND_PRESET_COLORS.map((item) => `
                <button
                  class="play-settings-color-chip ${bg.preset === item.id ? "active" : ""}"
                  data-action="play-bg-select-color"
                  data-id="${escapeHtml(item.id)}"
                  data-color="${escapeHtml(item.color)}"
                >
                  <span style="background:${escapeHtml(item.color)}"></span>
                  <em>${escapeHtml(item.label)}</em>
                </button>
              `).join("")}
            </div>
            <div class="play-settings-upload-row">
              <button data-action="play-bg-upload-trigger">上传背景</button>
              <button data-action="play-bg-clear-image" ${bg.image ? "" : "disabled"}>仅用纯色</button>
              <input class="play-bg-upload-input" type="file" accept="image/*" data-field="play-bg-file" />
            </div>
            <label class="play-settings-opacity-row">
              <span>透明度 <em>${opacityPercent}%</em></span>
              <input type="range" min="0" max="100" step="1" value="${opacityPercent}" data-field="play-bg-opacity" />
            </label>
            <div class="play-settings-preview-shell">
              <div class="play-settings-preview" style="${escapeHtml(previewStyle)}">
                <div class="play-settings-preview-inner">
                  <strong>${escapeHtml(world?.title || "剧情预览")}</strong>
                  <p>${bg.image ? "自定义背景已启用" : "当前为纯色背景"}</p>
                </div>
              </div>
            </div>
          </article>

          <article class="play-settings-card">
            <header>
              <h3>其他设置</h3>
              <p>这些功能会在后续版本开放</p>
            </header>
            <div class="play-settings-dev-list">
              ${devOptions.map((item) => `
                <button data-action="play-settings-dev" data-label="${escapeHtml(item.title)}">
                  <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <small>${escapeHtml(item.desc)}</small>
                  </div>
                  <span>›</span>
                </button>
              `).join("")}
            </div>
          </article>
        </section>
      </main>
    </section>
  `;
}

function getWorkshopDraftByMode(mode = uiState.workshopMode) {
  if (mode === "short_narrative") return uiState.workshopStoryDraft;
  if (mode === "virtual_character") return uiState.workshopCharacterDraft;
  return uiState.workshopWorldDraft;
}

function getWorkshopEffectiveAuthoringMode(mode = uiState.workshopMode) {
  if (WORKSHOP_FORCE_CUSTOM_MODES.has(mode)) return "custom";
  return WORKSHOP_AUTHORING_MODE_META[uiState.workshopAuthoringMode] ? uiState.workshopAuthoringMode : "template";
}

function resetWorkshopDraft(mode = uiState.workshopMode) {
  const normalized = normalizeWorkshopDraftForMode(mode, {});
  Object.entries(normalized).forEach(([key, value]) => {
    setWorkshopDraftField(mode, key, value);
  });
}

function setWorkshopDraftField(mode, field, value) {
  const safe = field === "albumMedia"
    ? (Array.isArray(value) ? value : [])
    : field === "openingLineAiAssist"
      ? parseBoolFlag(value, false)
      : String(value || "");
  if (mode === "short_narrative") {
    uiState.workshopStoryDraft[field] = safe;
    return;
  }
  if (mode === "virtual_character") {
    uiState.workshopCharacterDraft[field] = safe;
    return;
  }
  uiState.workshopWorldDraft[field] = safe;
}

function applyWorkshopTemplate(mode = uiState.workshopMode, templateId = "") {
  const list = WORKSHOP_TEMPLATES[mode] || [];
  const template = list.find((x) => x.id === templateId) || list[0];
  if (!template) return;
  uiState.workshopSelectedTemplateId[mode] = template.id;
  Object.entries(template).forEach(([key, value]) => {
    if (key === "id" || key === "name") return;
    setWorkshopDraftField(mode, key, value);
  });
  if (!String(template.cardName || "").trim()) {
    setWorkshopDraftField(mode, "cardName", String(template.name || "").trim());
  }
  if (!String(template.cardIntro || "").trim()) {
    const autoIntro = mode === "short_narrative"
      ? String(template.scopeLimits || template.primaryGoal || "").trim()
      : mode === "virtual_character"
        ? String(template.relationStart || template.personaCore || "").trim()
        : String(template.worldSetting || template.primaryGoal || "").trim();
    setWorkshopDraftField(mode, "cardIntro", autoIntro);
  }
}

function normalizeWorkshopDraftForMode(mode = "long_narrative", input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  const rawCardName = String(raw.cardName || raw.card_name || raw.title || "").trim();
  const rawCardIntro = String(raw.cardIntro || raw.card_intro || raw.subtitle || "").trim();
  const normalizeAlbumMedia = (value) => {
    const list = Array.isArray(value) ? value : [];
    return list
      .map((item, idx) => {
        if (typeof item === "string") {
          const url = String(item || "").trim();
          if (!url) return null;
          return { id: `album_${idx + 1}`, url, name: `image_${idx + 1}` };
        }
        const url = String(item?.url || item?.mediaUrl || item?.media_url || "").trim();
        if (!url) return null;
        return {
          id: String(item?.id || `album_${idx + 1}`).trim() || `album_${idx + 1}`,
          url,
          name: String(item?.name || `image_${idx + 1}`).trim() || `image_${idx + 1}`
        };
      })
      .filter(Boolean)
      .slice(0, 9);
  };
  const rawAlbum = Array.isArray(raw.albumMedia)
    ? raw.albumMedia
    : Array.isArray(raw.album_media)
      ? raw.album_media
      : Array.isArray(raw.mediaUrls)
        ? raw.mediaUrls
        : Array.isArray(raw.media_urls)
          ? raw.media_urls
          : [];
  const cardBackground = String(raw.cardBackground || raw.card_background || raw.cover || raw.coverUrl || "").trim();
  const albumMedia = normalizeAlbumMedia(rawAlbum);
  if (mode === "short_narrative") {
    const fallbackName = String(raw.openingLine || raw.opening_line || raw.openingAnchor || raw.opening_anchor || raw.primaryGoal || "").trim().slice(0, 24) || "未命名故事卡";
    const fallbackIntro = String(raw.scopeLimits || raw.primaryGoal || raw.coreConflict || "").trim();
    return {
      cardName: rawCardName || fallbackName,
      cardIntro: rawCardIntro || fallbackIntro,
      openingLine: String(raw.openingLine || raw.opening_line || raw.openingAnchor || raw.opening_anchor || "").trim(),
      openingLineAiAssist: parseBoolFlag(
        raw.openingLineAiAssist
          ?? raw.opening_line_ai_assist
          ?? raw.openingLineUseAi
          ?? raw.opening_line_use_ai,
        false
      ),
      openingAnchor: String(raw.openingAnchor || raw.opening_anchor || "").trim(),
      endingAnchors: String(raw.endingAnchors || raw.ending_anchors || "").trim(),
      fixedNpcs: String(raw.fixedNpcs || raw.fixed_npcs || raw.npcSeeds || "").trim(),
      scopeLimits: String(raw.scopeLimits || raw.scope_limits || "").trim(),
      primaryGoal: String(raw.primaryGoal || raw.primary_goal || raw.mainQuest || "").trim(),
      coreConflict: String(raw.coreConflict || raw.core_conflict || "").trim(),
      branchSeeds: String(raw.branchSeeds || raw.branch_seeds || "").trim(),
      pacingHint: String(raw.pacingHint || raw.pacing_hint || "").trim(),
      cluePool: String(raw.cluePool || raw.clue_pool || raw.clues || "").trim(),
      cardBackground,
      albumMedia
    };
  }
  if (mode === "virtual_character") {
    const fallbackName = String(raw.personaName || raw.persona_name || raw.npc || "").trim().slice(0, 24) || "未命名角色卡";
    const fallbackIntro = String(raw.relationStart || raw.personaCore || "").trim();
    return {
      cardName: rawCardName || fallbackName,
      cardIntro: rawCardIntro || fallbackIntro,
      personaName: String(raw.personaName || raw.persona_name || raw.npc || "").trim(),
      relationStart: String(raw.relationStart || raw.relation_start || "").trim(),
      personaCore: String(raw.personaCore || raw.persona_core || "").trim(),
      dialogueStyle: String(raw.dialogueStyle || raw.dialogue_style || "").trim(),
      relationBoundary: String(raw.relationBoundary || raw.relation_boundary || "").trim(),
      taboos: String(raw.taboos || raw.taboo || "").trim(),
      openingLine: String(raw.openingLine || raw.opening_line || "").trim(),
      openingLineAiAssist: parseBoolFlag(
        raw.openingLineAiAssist
          ?? raw.opening_line_ai_assist
          ?? raw.openingLineUseAi
          ?? raw.opening_line_use_ai,
        false
      ),
      memoryHooks: String(raw.memoryHooks || raw.memory_hooks || "").trim(),
      triggerWords: String(raw.triggerWords || raw.trigger_words || "").trim(),
      growthMilestones: String(raw.growthMilestones || raw.growth_milestones || "").trim(),
      cardBackground,
      albumMedia
    };
  }
  const fallbackName = String(raw.worldSetting || raw.world_setting || raw.primaryGoal || raw.mainQuest || "").trim().slice(0, 24) || "未命名世界卡";
  const fallbackIntro = String(raw.worldSetting || raw.primaryGoal || raw.coreConflict || "").trim();
  return {
    cardName: rawCardName || fallbackName,
    cardIntro: rawCardIntro || fallbackIntro,
    openingLine: String(raw.openingLine || raw.opening_line || "").trim(),
    openingLineAiAssist: parseBoolFlag(
      raw.openingLineAiAssist
        ?? raw.opening_line_ai_assist
        ?? raw.openingLineUseAi
        ?? raw.opening_line_use_ai,
      false
    ),
    worldSetting: String(raw.worldSetting || raw.world_setting || "").trim(),
    playerIdentity: String(raw.playerIdentity || raw.player_identity || raw.playerHook || "").trim(),
    primaryGoal: String(raw.primaryGoal || raw.primary_goal || raw.mainQuest || "").trim(),
    coreConflict: String(raw.coreConflict || raw.core_conflict || "").trim(),
    fixedNpcs: String(raw.fixedNpcs || raw.fixed_npcs || raw.npcSeeds || "").trim(),
    resourceSystem: String(raw.resourceSystem || raw.resource_system || "").trim(),
    toneStyle: String(raw.toneStyle || raw.tone_style || "").trim(),
    forbiddenRules: String(raw.forbiddenRules || raw.forbidden_rules || "").trim(),
    detailMemorySeed: String(raw.detailMemorySeed || raw.detail_memory_seed || "").trim(),
    cardBackground,
    albumMedia
  };
}

function hydrateWorkshopDraft(mode = uiState.workshopMode, payload = {}) {
  const normalized = normalizeWorkshopDraftForMode(mode, payload);
  Object.entries(normalized).forEach(([key, value]) => {
    setWorkshopDraftField(mode, key, value);
  });
}

function buildWorkshopContentJson(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const normalized = normalizeWorkshopDraftForMode(mode, draft);
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  if (mode === "short_narrative") {
    return {
      schemaVersion: "creator_card_v3",
      cardType: "story",
      authoringMode,
      cardName: normalized.cardName,
      cardIntro: normalized.cardIntro,
      openingLine: normalized.openingLine,
      openingLineAiAssist: parseBoolFlag(normalized.openingLineAiAssist, false),
      openingAnchor: normalized.openingAnchor,
      endingAnchors: normalized.endingAnchors,
      fixedNpcs: normalized.fixedNpcs,
      scopeLimits: normalized.scopeLimits,
      primaryGoal: normalized.primaryGoal,
      coreConflict: normalized.coreConflict,
      branchSeeds: normalized.branchSeeds,
      pacingHint: normalized.pacingHint,
      cluePool: normalized.cluePool,
      cardBackground: normalized.cardBackground,
      albumMedia: normalized.albumMedia,
      mediaUrls: (normalized.albumMedia || []).map((item) => String(item?.url || "").trim()).filter(Boolean)
    };
  }
  if (mode === "virtual_character") {
    return {
      schemaVersion: "creator_card_v3",
      cardType: "character",
      authoringMode,
      cardName: normalized.cardName,
      cardIntro: normalized.cardIntro,
      personaName: normalized.personaName,
      relationStart: normalized.relationStart,
      personaCore: normalized.personaCore,
      dialogueStyle: normalized.dialogueStyle,
      relationBoundary: normalized.relationBoundary,
      taboos: normalized.taboos,
      openingLine: normalized.openingLine,
      openingLineAiAssist: parseBoolFlag(normalized.openingLineAiAssist, false),
      memoryHooks: normalized.memoryHooks,
      growthMilestones: normalized.growthMilestones,
      triggerWords: normalized.triggerWords,
      cardBackground: normalized.cardBackground,
      albumMedia: normalized.albumMedia,
      mediaUrls: (normalized.albumMedia || []).map((item) => String(item?.url || "").trim()).filter(Boolean)
    };
  }
  return {
    schemaVersion: "creator_card_v3",
    cardType: "world",
    authoringMode,
    cardName: normalized.cardName,
    cardIntro: normalized.cardIntro,
    openingLine: normalized.openingLine,
    openingLineAiAssist: parseBoolFlag(normalized.openingLineAiAssist, false),
    worldSetting: normalized.worldSetting,
    playerIdentity: normalized.playerIdentity,
    primaryGoal: normalized.primaryGoal,
    coreConflict: normalized.coreConflict,
    fixedNpcs: normalized.fixedNpcs,
    resourceSystem: normalized.resourceSystem,
    toneStyle: normalized.toneStyle,
    forbiddenRules: normalized.forbiddenRules,
    detailMemorySeed: normalized.detailMemorySeed,
    cardBackground: normalized.cardBackground,
    albumMedia: normalized.albumMedia,
    mediaUrls: (normalized.albumMedia || []).map((item) => String(item?.url || "").trim()).filter(Boolean)
  };
}

function buildWorkshopRuntimeConfig(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const normalized = normalizeWorkshopDraftForMode(mode, draft);
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  if (mode === "short_narrative") {
    return {
      guidance_strength: "low",
      opening_min_chars: 500,
      must_fields: ["openingLine", "openingAnchor", "endingAnchors", "fixedNpcs", "primaryGoal", "coreConflict"],
      rules: ["respect_story_anchors", "keep_scope_limited", "recover_to_ending_anchor"],
      authoring_mode: authoringMode,
      field_snapshot: normalized,
      quality_gate: { min_opening_chars: 500, max_retry: 2 }
    };
  }
  if (mode === "virtual_character") {
    return {
      guidance_strength: "low",
      opening_min_chars: 500,
      must_fields: ["personaName", "relationStart", "personaCore", "dialogueStyle", "relationBoundary", "taboos", "openingLine", "memoryHooks"],
      rules: ["stay_in_character", "respect_relation_boundary", "avoid_narrator_takeover"],
      authoring_mode: authoringMode,
      field_snapshot: normalized,
      quality_gate: { min_opening_chars: 500, max_retry: 2 }
    };
  }
  return {
    guidance_strength: "none",
    opening_min_chars: 500,
    must_fields: ["openingLine", "worldSetting", "playerIdentity", "primaryGoal", "coreConflict", "fixedNpcs"],
    rules: ["follow_user_intent", "sandbox_freeplay", "state_first_narrative_second"],
    authoring_mode: authoringMode,
    field_snapshot: normalized,
    quality_gate: { min_opening_chars: 500, max_retry: 2 }
  };
}

function buildWorkshopQualityRules(mode = uiState.workshopMode) {
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  return {
    mode,
    authoring_mode: authoringMode,
    min_opening_chars: 500,
    must_include: mode === "long_narrative"
      ? ["背景", "任务", "可用资源", "潜在冲突", "行动入口"]
      : mode === "short_narrative"
        ? ["开场冲突", "目标", "人物立场", "行动切口"]
        : ["人物声音", "关系边界", "态度", "关系起点"],
    anti_repetition_threshold: 0.12,
    coherence_threshold: 0.9,
    option_quality_threshold: 0.8
  };
}

function normalizeCreatorCardToWorkshop(card = {}) {
  const mode = card.card_mode || "long_narrative";
  const content = card.content_json || {};
  const publish = card.publish_info_json || {};
  const draft = normalizeWorkshopDraftForMode(mode, {
    ...content,
    cardName: String(card.title || "").trim(),
    cardIntro: String(card.subtitle || publish?.summary || publish?.intro || "").trim()
  });
  return {
    id: card.id,
    mode,
    cardType: getWorkshopCardTypeByMode(mode),
    title: card.title || "未命名卡片",
    intro: String(card.subtitle || "").trim(),
    draft,
    status: card.publish_status === "published" ? "published" : "draft",
    updatedAt: card.updated_at ? new Date(card.updated_at).getTime() : Date.now(),
    publishedAt: card.published_at ? new Date(card.published_at).getTime() : null,
    worldCardId: card.published_world_card_id || null,
    authoringMode: String(content.authoringMode || content.authoring_mode || "template"),
    publishInfo: publish && typeof publish === "object" ? publish : null
  };
}

async function syncWorkshopCardsFromApi({ silent = true } = {}) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  if (uiState.workshopSyncInFlight) return;
  uiState.workshopSyncInFlight = true;
  try {
    const data = await apiGetJson(`/creator/cards?authorId=${encodeURIComponent(uiState.currentUserId)}&limit=120`);
    const cards = Array.isArray(data?.cards) ? data.cards : [];
    uiState.workshopSavedCards = cards.map((card) => normalizeCreatorCardToWorkshop(card));
    uiState.workshopCardsLoadedForUser = uiState.currentUserId;
    uiState.workshopLastSyncAt = Date.now();
    if (!silent) {
      uiState.workshopFeedback = `已同步 ${cards.length} 张创作卡`;
      render();
    }
  } catch (error) {
    if (!silent) {
      uiState.workshopFeedback = `同步失败：${error instanceof Error ? error.message : "unknown"}`;
      render();
    }
  } finally {
    uiState.workshopSyncInFlight = false;
  }
}

async function parseWorkshopCustomTextToDraft() {
  const text = String(uiState.workshopCustomRaw || "").trim();
  if (!text) {
    uiState.workshopFeedback = "请先输入要拆分的设定文本";
    render();
    return null;
  }
  uiState.workshopCustomParsing = true;
  render();
  if (authUserId) {
    void flushPendingWorldReactions()
      .then(() => {
        overlayWorldInteractionsForCurrentUser();
        render();
      })
      .catch(() => {});
  }
  try {
    const data = await apiJson("/creator/cards/parse", {
      mode: uiState.workshopMode,
      text
    });
    const targetMode = String(data?.mode || uiState.workshopMode);
    if (WORKSHOP_MODE_META[targetMode] && targetMode !== uiState.workshopMode) {
      uiState.workshopMode = targetMode;
    }
    const normalizedDraft = normalizeWorkshopDraftForMode(uiState.workshopMode, data?.normalizedDraft || {});
    hydrateWorkshopDraft(uiState.workshopMode, normalizedDraft);
    uiState.workshopCustomParsed = {
      source: String(data?.source || "unknown"),
      confidence: Number(data?.confidence || 0),
      missingFields: Array.isArray(data?.missingFields) ? data.missingFields : [],
      warnings: Array.isArray(data?.warnings) ? data.warnings : []
    };
    uiState.workshopFeedback = "拆分完成，已回填到字段表单。请确认后再保存。";
    return data;
  } catch (error) {
    uiState.workshopFeedback = `拆分失败：${error instanceof Error ? error.message : "unknown"}`;
    return null;
  } finally {
    uiState.workshopCustomParsing = false;
    render();
  }
}

async function saveWorkshopCardToApi() {
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.workshopFeedback = "请先登录后保存";
    uiState.showLoginModal = true;
    render();
    return null;
  }
  const mode = uiState.workshopMode;
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  const draft = getWorkshopDraftByMode(mode);
  const cardId = uiState.workshopActiveCardId;
  const payload = {
    authorId: uiState.currentUserId,
    cardMode: mode,
    title: getWorkshopCardTitle(mode, draft),
    subtitle: getWorkshopCardIntro(mode, draft) || null,
    templateId: authoringMode === "template" ? (uiState.workshopSelectedTemplateId[mode] || null) : null,
    contentJson: buildWorkshopContentJson(mode, draft),
    promptContextJson: {
      mode,
      source: "workshop_ui",
      authoring_mode: authoringMode,
      parse_meta: uiState.workshopCustomParsed || null,
      updatedAt: new Date().toISOString()
    },
    runtimeConfigJson: buildWorkshopRuntimeConfig(mode, draft),
    qualityRulesJson: buildWorkshopQualityRules(mode),
    uxConfigJson: { guidance: mode === "long_narrative" ? "none" : "low" },
    saveStatus: "saved",
    publishStatus: "unpublished"
  };

  uiState.workshopSaving = true;
  render();
  try {
    const data = cardId
      ? await apiJson(`/creator/cards/${cardId}`, payload, "PATCH")
      : await apiJson("/creator/cards", payload);
    const card = data?.card;
    if (!card?.id) throw new Error("CARD_SAVE_FAILED");
    uiState.workshopActiveCardId = card.id;
    await syncWorkshopCardsFromApi({ silent: true });
    const pending = uiState.workshopSavedCards.find((x) => x.id === card.id)
      || normalizeCreatorCardToWorkshop(card);
    uiState.workshopPendingCardId = pending.id;
    seedWorkshopPublishDraft(pending);
    uiState.workshopFeedback = "已保存到「我的-草稿箱」";
    return pending;
  } catch (error) {
    uiState.workshopFeedback = `保存失败：${error instanceof Error ? error.message : "unknown"}`;
    return null;
  } finally {
    uiState.workshopSaving = false;
    render();
  }
}

async function publishCreatorCardById(cardId, publishPayload = {}, syncToDynamic = true) {
  return apiJson(`/creator/cards/${cardId}/publish`, {
    authorId: uiState.currentUserId,
    syncToDynamic: syncToDynamic !== false,
    publishPayload
  });
}

async function publishWorkshopCardToApi(cardId, options = {}) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.workshopFeedback = "请先登录后发布";
    uiState.showLoginModal = true;
    render();
    return false;
  }
  uiState.workshopPublishing = true;
  render();
  try {
    const { clues, ...publishPayloadRaw } = uiState.workshopPublishDraft || {};
    const currentDraft = normalizeWorkshopDraftForMode(uiState.workshopMode, getWorkshopDraftByMode(uiState.workshopMode));
    const normalizedAlbum = Array.isArray(currentDraft.albumMedia)
      ? currentDraft.albumMedia
        .map((item, idx) => {
          const url = String(item?.url || item?.mediaUrl || item?.media_url || "").trim();
          if (!url) return null;
          return {
            id: String(item?.id || `album_${idx + 1}`).trim() || `album_${idx + 1}`,
            url,
            name: String(item?.name || `image_${idx + 1}`).trim() || `image_${idx + 1}`
          };
        })
        .filter(Boolean)
      : [];
    const publishPayload = {
      ...publishPayloadRaw,
      title: String(publishPayloadRaw?.title || currentDraft.cardName || "").trim(),
      intro: String(publishPayloadRaw?.intro || currentDraft.cardIntro || "").trim(),
      summary: String(publishPayloadRaw?.summary || publishPayloadRaw?.intro || currentDraft.cardIntro || "").trim(),
      cover: String(publishPayloadRaw?.cover || currentDraft.cardBackground || "").trim(),
      albumMedia: normalizedAlbum,
      mediaUrls: normalizedAlbum.map((item) => String(item?.url || "").trim()).filter(Boolean)
    };
    const data = await publishCreatorCardById(cardId, publishPayload, uiState.workshopSyncDynamic);
    const card = data?.card;
    if (!card?.id) throw new Error("CARD_PUBLISH_FAILED");
    const normalizedPublishedCard = normalizeCreatorCardToWorkshop(card);
    const existingIdx = uiState.workshopSavedCards.findIndex((x) => String(x?.id || "") === String(normalizedPublishedCard?.id || ""));
    if (existingIdx >= 0) {
      uiState.workshopSavedCards[existingIdx] = normalizedPublishedCard;
    } else if (normalizedPublishedCard?.id) {
      uiState.workshopSavedCards.unshift(normalizedPublishedCard);
    }
    void syncWorkshopCardsFromApi({ silent: true }).catch(() => {});
    const publishedWorld = {
      ...(data?.worldCard || {}),
      mediaUrls: publishPayload.mediaUrls || [],
      albumMedia: publishPayload.albumMedia || [],
      cover_url: String((data?.worldCard || {})?.cover_url || publishPayload.cover || "").trim(),
      cardBackground: String(publishPayload.cover || "").trim()
    };
    upsertFeedDataFromPublishedWorldCard(publishedWorld);
    const publishedWorldId = String(publishedWorld?.id || "").trim();
    if (publishedWorldId) {
      const feedItem = FEED_DATA.find((x) => String(x?.id || "") === publishedWorldId);
      if (feedItem) persistFeedItemToCache(feedItem);
    }
    if (options?.placeholderId) {
      settlePublishPlaceholderSuccess(options.placeholderId, publishedWorld);
    }
    scheduleBootstrapFullRefresh(uiState.currentUserId, { immediate: true });
    uiState.workshopFeedback = data?.message || "已发布";
    return true;
  } catch (error) {
    if (options?.placeholderId) {
      settlePublishPlaceholderFailed(options.placeholderId, error instanceof Error ? error.message : "发布失败");
    }
    uiState.workshopFeedback = `发布失败：${error instanceof Error ? error.message : "unknown"}`;
    return false;
  } finally {
    uiState.workshopPublishing = false;
    render();
  }
}

async function openWorldDetailEditor(world = getSelectedWorld()) {
  const worldId = String(world?.id || "").trim();
  const authorId = String(world?.authorId || "").trim();
  if (!worldId) {
    uiState.worldDetailMenuFeedback = "未找到可编辑内容";
    render();
    return;
  }
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.showLoginModal = true;
    render();
    return;
  }
  if (authorId && authorId !== String(uiState.currentUserId || "").trim()) {
    uiState.worldDetailMenuFeedback = "仅作者可编辑";
    render();
    return;
  }
  const cachedCard = uiState.workshopSavedCards.find((x) => String(x?.worldCardId || "").trim() === worldId);
  const fallbackMode = WORKSHOP_MODE_META[String(world?.mode || "").trim()]
    ? String(world?.mode || "").trim()
    : "long_narrative";
  const initialMode = cachedCard?.mode || fallbackMode;
  const applyCardToEditor = (card) => {
    uiState.workshopActiveCardId = card.id;
    uiState.workshopMode = card.mode;
    uiState.workshopCustomParsed = null;
    hydrateWorkshopDraft(card.mode, card.draft && typeof card.draft === "object" ? card.draft : {});
    uiState.workshopAuthoringMode = WORKSHOP_FORCE_CUSTOM_MODES.has(card.mode)
      ? "custom"
      : String(card.authoringMode || "template");
    uiState.workshopPendingCardId = card.id;
    seedWorkshopPublishDraft(card);
  };
  if (cachedCard) {
    applyCardToEditor(cachedCard);
  } else {
    uiState.workshopActiveCardId = "";
    uiState.workshopMode = initialMode;
    uiState.workshopCustomParsed = null;
    uiState.workshopAuthoringMode = WORKSHOP_FORCE_CUSTOM_MODES.has(initialMode) ? "custom" : "template";
    const fallbackDraft = normalizeWorkshopDraftForMode(initialMode, {
      cardName: String(world?.title || "").trim(),
      cardIntro: String(world?.summary || world?.subtitle || "").trim(),
      worldSetting: String(world?.setting || world?.overview || "").trim(),
      primaryGoal: String(world?.mainQuest || "").trim(),
      openingLine: String(world?.openingSummary || "").trim(),
      cardBackground: String(world?.coverUrl || world?.cardBackground || "").trim()
    });
    hydrateWorkshopDraft(initialMode, fallbackDraft);
    uiState.workshopPendingCardId = "";
    uiState.workshopFeedback = "正在加载草稿数据...";
  }
  uiState.worldDetailMenuOpen = false;
  uiState.worldDetailMenuFeedback = "";
  window.location.hash = getWorkshopEditorRouteByMode(initialMode);
  render();

  if (cachedCard) return;
  void syncWorkshopCardsFromApi({ silent: true })
    .then(() => {
      if (!String(window.location.hash || "").startsWith("#/workshop/")) return;
      const card = uiState.workshopSavedCards.find((x) => String(x?.worldCardId || "").trim() === worldId);
      if (!card) {
        uiState.workshopFeedback = "未找到原草稿，已为你打开可编辑副本。";
        render();
        return;
      }
      applyCardToEditor(card);
      uiState.workshopFeedback = `已载入《${card.title}》`;
      render();
    })
    .catch(() => {
      if (!String(window.location.hash || "").startsWith("#/workshop/")) return;
      uiState.workshopFeedback = "草稿同步失败，已打开本地可编辑副本。";
      render();
    });
}

function getWorkshopCardTypeByMode(mode = "long_narrative") {
  if (mode === "short_narrative") return "story";
  if (mode === "virtual_character") return "character";
  return "world";
}

function getWorkshopCardTitle(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const d = normalizeWorkshopDraftForMode(mode, draft);
  const explicit = String(d.cardName || "").trim();
  if (explicit) return explicit.slice(0, 80);
  if (mode === "short_narrative") return (d.openingLine || d.openingAnchor || d.primaryGoal || "").slice(0, 24) || "未命名故事卡";
  if (mode === "virtual_character") return (d.personaName || "").slice(0, 24) || "未命名角色卡";
  return (d.worldSetting || d.primaryGoal || "").slice(0, 24) || "未命名世界卡";
}

function getWorkshopCardIntro(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const d = normalizeWorkshopDraftForMode(mode, draft);
  return String(d.cardIntro || "").trim();
}

function getWorkshopBaseValidationErrors(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const d = normalizeWorkshopDraftForMode(mode, draft);
  if (!String(d.cardName || "").trim()) return "请填写卡片名称";
  if (mode === "short_narrative") {
    if (!String(d.openingLine || "").trim()) return "请先填写开场白";
    if (!String(d.openingAnchor || "").trim()) return "请先填写开场锚点";
    if (!String(d.endingAnchors || "").trim()) return "请先填写结局锚点";
    if (!String(d.fixedNpcs || "").trim()) return "请先填写固定 NPC";
    if (!String(d.primaryGoal || "").trim()) return "请先填写主目标";
    if (!String(d.coreConflict || "").trim()) return "请先填写核心冲突";
    return "";
  }
  if (mode === "virtual_character") {
    if (!String(d.personaName || "").trim()) return "请先填写人物名称";
    if (!String(d.relationStart || "").trim()) return "请先填写关系起点";
    if (!String(d.personaCore || "").trim()) return "请先填写核心性格";
    if (!String(d.dialogueStyle || "").trim()) return "请先填写说话风格";
    if (!String(d.relationBoundary || "").trim()) return "请先填写关系边界";
    if (!String(d.taboos || "").trim()) return "请先填写禁忌点";
    if (!String(d.openingLine || "").trim()) return "请先填写开场白";
    if (!String(d.memoryHooks || "").trim()) return "请先填写记忆钩子";
    return "";
  }
  if (!String(d.openingLine || "").trim()) return "请先填写开场句";
  if (!String(d.worldSetting || "").trim()) return "请先填写世界底盘";
  if (!String(d.playerIdentity || "").trim()) return "请先填写玩家身份";
  if (!String(d.primaryGoal || "").trim()) return "请先填写主目标";
  if (!String(d.coreConflict || "").trim()) return "请先填写核心冲突";
  if (!String(d.fixedNpcs || "").trim()) return "请先填写固定角色";
  return "";
}

function buildWorkshopCardSnapshot(mode = uiState.workshopMode) {
  const draft = getWorkshopDraftByMode(mode);
  return {
    id: `wc_${Date.now()}`,
    mode,
    cardType: getWorkshopCardTypeByMode(mode),
    title: getWorkshopCardTitle(mode, draft),
    draft: JSON.parse(JSON.stringify(draft)),
    status: "draft",
    updatedAt: Date.now(),
    publishedAt: null,
    publishInfo: null
  };
}

function buildWorkshopPublishDraftFromCard(card) {
  const d = normalizeWorkshopDraftForMode(card.mode, card.draft || {});
  const isStory = card.mode === "short_narrative";
  const isCharacter = card.mode === "virtual_character";
  const explicitTitle = String(d.cardName || card.title || "").trim();
  const explicitIntro = String(d.cardIntro || card.intro || "").trim();
  const npcSource = isCharacter ? d.personaName : d.fixedNpcs;
  const firstNpc = String(npcSource || "")
    .split(/[；;、/]/)
    .map((x) => x.trim())
    .filter(Boolean)[0] || "关键角色";
  const introLineA = isCharacter ? d.openingLine : isStory ? (d.openingLine || d.openingAnchor) : d.openingLine;
  const introLineB = isCharacter ? d.relationStart : isStory ? d.scopeLimits : d.worldSetting;
  const mainQuest = isCharacter
    ? "围绕关系里程碑推进互动，并保持人物一致性"
    : isStory
      ? (d.primaryGoal || d.endingAnchors || "在限定范围内推进到结局锚点")
      : (d.primaryGoal || d.coreConflict || "围绕核心冲突推进主线");
  return {
    title: explicitTitle || card.title || "",
    chapter: isCharacter ? "初次接触" : isStory ? "第一幕" : "序章",
    mainQuest,
    npc: firstNpc,
    clues: isCharacter ? (d.memoryHooks || d.triggerWords || "人物边界 / 情绪触发 / 关系阈值") : isStory ? (d.cluePool || d.branchSeeds || "主线线索 / 关系线 / 证据线") : (d.detailMemorySeed || d.resourceSystem || "线索网络 / 关系账本 / 核心证据"),
    intro: explicitIntro || [introLineA, introLineB].filter(Boolean).join("\n"),
    format: isCharacter ? "虚拟人物" : isStory ? "短叙事" : "长叙事",
    theme: isCharacter ? (d.dialogueStyle || "养成互动") : (d.toneStyle || "策略叙事"),
    setting: isCharacter ? (d.relationBoundary || "角色关系模拟") : isStory ? (d.scopeLimits || "故事卡分支") : (d.worldSetting || "开放世界"),
    background: isCharacter ? "角色互动场景" : "原创世界",
    recommend: "创作中心内测首发",
    cover: String(d.cardBackground || "").trim(),
    albumMedia: Array.isArray(d.albumMedia) ? d.albumMedia : [],
    mediaUrls: Array.isArray(d.albumMedia) ? d.albumMedia.map((item) => String(item?.url || "").trim()).filter(Boolean) : [],
    statline: "连载中 · 内测版本"
  };
}

function seedWorkshopPublishDraft(card) {
  uiState.workshopPublishDraft = buildWorkshopPublishDraftFromCard(card);
}

function getWorkshopPublishValidationErrors() {
  const d = uiState.workshopPublishDraft;
  if (!String(d.title || "").trim()) return "发布标题不能为空";
  if (!String(d.chapter || "").trim()) return "请填写章节标题";
  if (!String(d.mainQuest || "").trim()) return "请填写当前任务";
  if (!String(d.npc || "").trim()) return "请填写关键 NPC";
  if (!String(d.intro || "").trim()) return "请填写世界简介";
  if (String(d.intro || "").trim().length < 20) return "世界简介至少 20 字";
  if (!String(d.format || "").trim()) return "请填写体裁";
  if (!String(d.theme || "").trim()) return "请填写主题";
  if (!String(d.setting || "").trim()) return "请填写设定";
  if (!String(d.background || "").trim()) return "请填写背景";
  return "";
}

function getWorkshopModeLabel(mode = "long_narrative") {
  return WORKSHOP_MODE_META[mode]?.label || mode;
}

function getWorkshopEditorRouteByMode(mode = "long_narrative") {
  if (mode === "short_narrative") return "#/workshop/story/editor";
  if (mode === "virtual_character") return "#/workshop/character/editor";
  return "#/workshop/world/editor";
}

function getWorkshopPaintSizeByRatio(ratio = "1:1") {
  if (ratio === "16:9") return { width: 1280, height: 720 };
  if (ratio === "9:16") return { width: 720, height: 1280 };
  if (ratio === "4:3") return { width: 1280, height: 960 };
  if (ratio === "3:4") return { width: 960, height: 1280 };
  return { width: 1024, height: 1024 };
}

function inferWorkshopPaintCategory(prompt = "", style = "") {
  const text = `${String(prompt || "").trim()} ${String(style || "").trim()}`.toLowerCase();
  if (/\bnsfw\b|成人|露骨|情色/.test(text)) return "nsfw";
  if (/\banime\b|动漫|二次元/.test(text)) return "anime";
  return "sfw";
}

function readWorkshopPaintHistoryCache() {
  try {
    const raw = localStorage.getItem(WORKSHOP_PAINT_HISTORY_CACHE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeWorkshopPaintHistoryCache(items = []) {
  try {
    const payload = Array.isArray(items) ? items.slice(0, WORKSHOP_PAINT_HISTORY_MAX) : [];
    localStorage.setItem(WORKSHOP_PAINT_HISTORY_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore storage errors
  }
}

function normalizeWorkshopPaintImage(item = {}) {
  const source = item && typeof item === "object" ? item : {};
  const id = String(source.id || "").trim() || `paint_${Date.now()}_${Math.floor(Math.random() * 9999)}`;
  const url = String(source.url || "").trim();
  const ratio = String(source.ratio || "1:1").trim() || "1:1";
  const style = String(source.style || "cinematic").trim() || "cinematic";
  const prompt = String(source.prompt || "").trim();
  const negative = String(source.negative || source.negativePrompt || "").trim();
  const model = String(source.model || uiState.workshopPaintModel || WORKSHOP_PAINT_ACTIVE_MODEL_ID).trim();
  const seedRaw = Number.parseInt(String(source.seed || ""), 10);
  const seed = Number.isFinite(seedRaw) ? seedRaw : 0;
  const width = Number.parseInt(String(source.width || ""), 10) || getWorkshopPaintSizeByRatio(ratio).width;
  const height = Number.parseInt(String(source.height || ""), 10) || getWorkshopPaintSizeByRatio(ratio).height;
  const createdAt = Number.parseInt(String(source.createdAt || source.created_at || ""), 10) || Date.now();
  return {
    id,
    url,
    fallbackUrl: String(source.fallbackUrl || source.fallback_url || source.url || "").trim(),
    seed,
    width,
    height,
    ratio,
    style,
    model,
    prompt,
    negative,
    category: String(source.category || inferWorkshopPaintCategory(prompt, style)).trim() || "sfw",
    createdAt
  };
}

function mergeWorkshopPaintHistory(newItems = [], { persist = true } = {}) {
  const current = Array.isArray(uiState.workshopPaintHistory) ? uiState.workshopPaintHistory : [];
  const merged = [...(Array.isArray(newItems) ? newItems : []), ...current]
    .map((item) => normalizeWorkshopPaintImage(item))
    .filter((item) => item.url);
  const dedupMap = new Map();
  merged.forEach((item) => {
    const key = `${item.id}|${item.url}`;
    if (!dedupMap.has(key)) dedupMap.set(key, item);
  });
  const deduped = Array.from(dedupMap.values())
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0))
    .slice(0, WORKSHOP_PAINT_HISTORY_MAX);
  uiState.workshopPaintHistory = deduped;
  if (persist) writeWorkshopPaintHistoryCache(deduped);
}

function buildWorkshopPaintEnhancedPrompt({
  prompt = "",
  style = "cinematic",
  ratio = "1:1",
  enhance = true
}) {
  const basePrompt = String(prompt || "").trim();
  if (!enhance) return basePrompt;
  const styleHint = style === "anime"
    ? "anime key visual, clean linework, expressive lighting"
    : style === "realistic"
      ? "photorealistic, cinematic color grading, natural skin texture"
      : style === "illustration"
        ? "editorial illustration, layered composition, rich material details"
        : style === "watercolor"
          ? "watercolor texture, soft pigment bleeding, paper grain"
          : style === "pixel art"
            ? "pixel art, limited palette, crisp edge clusters"
            : "cinematic, dramatic lighting, film still composition";
  const ratioHint = ratio === "16:9"
    ? "landscape composition, wide establishing shot"
    : ratio === "9:16"
      ? "vertical composition, mobile poster framing"
      : "balanced composition";
  return `${basePrompt}, ${styleHint}, ${ratioHint}, highly detailed, coherent anatomy, no watermark`;
}

async function fetchWorkshopPaintHistoryFromApi({ userId = "", limit = 40 } = {}) {
  const uid = String(userId || "").trim();
  if (!uid) return [];
  const data = await apiGetJson(`/paint/history?userId=${encodeURIComponent(uid)}&limit=${encodeURIComponent(String(limit || 40))}`);
  const rows = Array.isArray(data?.history) ? data.history : [];
  const images = [];
  rows.forEach((row) => {
    const rowImages = Array.isArray(row?.images) ? row.images : [];
    rowImages.forEach((item, idx) => {
      images.push({
        ...item,
        id: String(item?.id || `${row?.id || "history"}_${idx + 1}`),
        createdAt: row?.created_at ? new Date(row.created_at).getTime() + idx : Date.now() - idx
      });
    });
  });
  return images.map((item) => normalizeWorkshopPaintImage(item)).filter((item) => item.url);
}

async function syncWorkshopPaintModels({ silent = true } = {}) {
  if (uiState.workshopPaintModelsLoading) return;
  uiState.workshopPaintModelsLoading = true;
  try {
    const data = await apiGetJson("/paint/models");
    const models = Array.isArray(data?.models) ? data.models : [];
    const next = models
      .map((item) => ({
        id: String(item?.id || "").trim(),
        label: String(item?.label || "").trim(),
        price: String(item?.price || "").trim(),
        quality: String(item?.quality || "").trim()
      }))
      .filter((item) => item.id);
    uiState.workshopPaintModels = next.length ? next : WORKSHOP_PAINT_MODEL_FALLBACK.slice();
    uiState.workshopPaintModelsLoaded = true;
    if (!uiState.workshopPaintModels.some((item) => item.id === uiState.workshopPaintModel)) {
      uiState.workshopPaintModel = WORKSHOP_PAINT_ACTIVE_MODEL_ID;
    }
  } catch {
    uiState.workshopPaintModels = WORKSHOP_PAINT_MODEL_FALLBACK.slice();
    uiState.workshopPaintModelsLoaded = true;
    if (!silent) {
      uiState.workshopPaintFeedback = "模型列表拉取失败，已使用本地预设。";
    }
  } finally {
    uiState.workshopPaintModelsLoading = false;
    if (!silent) render();
  }
}

async function syncWorkshopPaintHistory({ silent = false } = {}) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  if (uiState.workshopPaintHistoryLoading) return;
  const stale = (Date.now() - Number(uiState.workshopPaintHistoryLastSyncAt || 0)) > WORKSHOP_PAINT_HISTORY_SYNC_TTL_MS;
  if (!stale && uiState.workshopPaintHistoryLoadedForUser === uiState.currentUserId) return;
  uiState.workshopPaintHistoryLoading = true;
  if (!silent) {
    uiState.workshopPaintFeedback = "正在同步你的创作历史...";
    render();
  }
  try {
    const history = await fetchWorkshopPaintHistoryFromApi({
      userId: uiState.currentUserId,
      limit: 60
    });
    mergeWorkshopPaintHistory(history);
    uiState.workshopPaintHistoryLoadedForUser = uiState.currentUserId;
    uiState.workshopPaintHistoryLastSyncAt = Date.now();
    if (!silent) uiState.workshopPaintFeedback = history.length ? "历史记录已同步" : "当前账号还没有历史记录";
  } catch (error) {
    if (!silent) uiState.workshopPaintFeedback = `历史同步失败：${error instanceof Error ? error.message : "unknown"}`;
  } finally {
    uiState.workshopPaintHistoryLoading = false;
    if (!silent) render();
  }
}

async function generateWorkshopPaintWithApi({
  prompt = "",
  model = "wan2.2-t2i-flash",
  style = "cinematic",
  ratio = "1:1",
  negative = "",
  count = 4,
  seed = ""
}) {
  const safePrompt = String(prompt || "").trim();
  const safeModel = String(model || WORKSHOP_PAINT_ACTIVE_MODEL_ID).trim() || WORKSHOP_PAINT_ACTIVE_MODEL_ID;
  const safeStyle = String(style || "cinematic").trim() || "cinematic";
  const safeRatio = String(ratio || "1:1").trim() || "1:1";
  const safeNegative = String(negative || "").trim();
  const safeCount = Math.max(1, Math.min(4, Number.parseInt(String(count || 4), 10) || 4));
  const safeSeed = String(seed || "").trim();
  const data = await apiJson("/paint/generate", {
    userId: uiState.currentUserId || "",
    prompt: safePrompt,
    model: safeModel,
    style: safeStyle,
    ratio: safeRatio,
    negative: safeNegative,
    count: safeCount,
    seed: safeSeed || undefined
  });
  const images = Array.isArray(data?.images) ? data.images : [];
  const normalized = images
    .map((item) => normalizeWorkshopPaintImage({
      ...item,
      model: safeModel,
      style: safeStyle,
      ratio: safeRatio,
      prompt: safePrompt,
      negative: safeNegative
    }))
    .filter((item) => item.url);
  return {
    images: normalized,
    warnings: Array.isArray(data?.warnings) ? data.warnings : []
  };
}

function runWorkshopPaintGeneration(overrides = null) {
  const patch = overrides && typeof overrides === "object" ? overrides : {};
  if (Object.prototype.hasOwnProperty.call(patch, "prompt")) uiState.workshopPaintPrompt = String(patch.prompt || "").trim();
  if (Object.prototype.hasOwnProperty.call(patch, "negative")) uiState.workshopPaintNegativePrompt = String(patch.negative || "").trim();
  if (Object.prototype.hasOwnProperty.call(patch, "style")) uiState.workshopPaintStyle = String(patch.style || "cinematic").trim() || "cinematic";
  if (Object.prototype.hasOwnProperty.call(patch, "ratio")) uiState.workshopPaintRatio = String(patch.ratio || "1:1").trim() || "1:1";
  if (Object.prototype.hasOwnProperty.call(patch, "model")) uiState.workshopPaintModel = String(patch.model || WORKSHOP_PAINT_ACTIVE_MODEL_ID).trim() || WORKSHOP_PAINT_ACTIVE_MODEL_ID;
  if (Object.prototype.hasOwnProperty.call(patch, "seed")) uiState.workshopPaintSeedInput = String(patch.seed || "").trim();

  const prompt = String(uiState.workshopPaintPrompt || "").trim();
  if (!prompt) {
    uiState.workshopPaintFeedback = "请先输入提示词";
    render();
    return;
  }
  const model = String(uiState.workshopPaintModel || WORKSHOP_PAINT_ACTIVE_MODEL_ID).trim() || WORKSHOP_PAINT_ACTIVE_MODEL_ID;
  const ratio = String(uiState.workshopPaintRatio || "1:1").trim() || "1:1";
  const style = String(uiState.workshopPaintStyle || "cinematic").trim() || "cinematic";
  const negative = String(uiState.workshopPaintNegativePrompt || "").trim();
  const count = Math.max(1, Math.min(4, Number.parseInt(String(uiState.workshopPaintCount || 4), 10) || 4));
  const seedInput = String(uiState.workshopPaintSeedInput || "").trim();
  const safeSeed = uiState.workshopPaintSeedLocked && seedInput ? seedInput : "";
  const finalPrompt = buildWorkshopPaintEnhancedPrompt({
    prompt,
    style,
    ratio,
    enhance: uiState.workshopPaintPromptEnhance
  });
  uiState.workshopPaintGenerating = true;
  uiState.workshopPaintFeedback = "正在通过 API 生成图片...";
  uiState.workshopPaintComposerOpen = false;
  render();
  void generateWorkshopPaintWithApi({
    prompt: finalPrompt,
    model,
    style,
    ratio,
    negative,
    count,
    seed: safeSeed
  })
    .then(({ images, warnings }) => {
      uiState.workshopPaintResults = images.map((item) => normalizeWorkshopPaintImage(item));
      mergeWorkshopPaintHistory(images);
      if (!images.length) {
        uiState.workshopPaintFeedback = "未返回图片，请调整提示词后重试。";
      } else {
        uiState.workshopPaintFeedback = `已生成 ${images.length} 张图（模型：${model}）${Array.isArray(warnings) && warnings.length ? `，${warnings.length} 张失败` : ""}。`;
      }
      if (uiState.workshopPaintSeedLocked && !safeSeed && images[0]?.seed) {
        uiState.workshopPaintSeedInput = String(images[0].seed);
      }
      uiState.workshopPaintGenerating = false;
      render();
    })
    .catch((error) => {
      uiState.workshopPaintGenerating = false;
      uiState.workshopPaintFeedback = `生成失败：${error instanceof Error ? error.message : "unknown"}`;
      render();
    });
}

function buildCreatorWorks() {
  return [...uiState.workshopSavedCards]
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .map((item) => {
      const p = item.publishInfo || {};
      return {
        id: item.id,
        worldId: item.worldCardId || "",
        mode: item.mode,
        title: p.title || item.title || "未命名卡片",
        subtitle: p.chapter || getWorkshopModeLabel(item.mode),
        summary: p.summary || p.intro || item.intro || p.mainQuest || "待补充任务",
        status: item.status || "draft",
        updatedAt: item.updatedAt || Date.now()
      };
    });
}

function renderWorkshopPublishFlow() {
  const pending = uiState.workshopSavedCards.find((x) => x.id === uiState.workshopPendingCardId);
  if (!pending) return "";
  if (uiState.workshopSaveDecisionOpen) {
    return `
      <div class="workshop-flow-overlay" data-action="workshop-close-save-flow">
        <div class="workshop-flow-modal" data-action="noop">
          <button class="workshop-flow-close" data-action="workshop-close-save-flow">×</button>
          <h3>卡片已保存</h3>
          <p>《${escapeHtml(pending.title)}》已进入草稿箱。你可以先继续打磨，也可以立即发布。</p>
          <div class="workshop-flow-actions">
            <button class="ghost" data-action="workshop-hold-draft">暂不发布</button>
            <button class="primary" data-action="workshop-open-publish-modal">立即发布</button>
          </div>
        </div>
      </div>
    `;
  }
  if (!uiState.workshopPublishModalOpen) return "";
  const d = uiState.workshopPublishDraft;
  return `
    <div class="workshop-flow-overlay" data-action="workshop-close-save-flow">
      <div class="workshop-flow-modal workshop-flow-modal-wide" data-action="noop">
        <button class="workshop-flow-close" data-action="workshop-close-save-flow">×</button>
        <h3>发布前补充卡片详情</h3>
        <p>以下字段与卡片详情页同结构，发布后会直接用于详情展示。</p>
        <div class="workshop-sync-row">
          <span>同步到动态</span>
          <button class="${uiState.workshopSyncDynamic ? "active" : ""}" data-action="workshop-toggle-sync-dynamic">${uiState.workshopSyncDynamic ? "已开启" : "已关闭"}</button>
        </div>
        <div class="workshop-publish-grid">
          <label>标题<input data-field="workshop-publish-title" value="${escapeHtml(d.title)}" /></label>
          <label>章节<input data-field="workshop-publish-chapter" value="${escapeHtml(d.chapter)}" /></label>
          <label>当前任务<input data-field="workshop-publish-mainQuest" value="${escapeHtml(d.mainQuest)}" /></label>
          <label>关键 NPC<input data-field="workshop-publish-npc" value="${escapeHtml(d.npc)}" /></label>
          <label>体裁<input data-field="workshop-publish-format" value="${escapeHtml(d.format)}" /></label>
          <label>主题<input data-field="workshop-publish-theme" value="${escapeHtml(d.theme)}" /></label>
          <label>设定<input data-field="workshop-publish-setting" value="${escapeHtml(d.setting)}" /></label>
          <label>背景<input data-field="workshop-publish-background" value="${escapeHtml(d.background)}" /></label>
          <label>推荐位文案<input data-field="workshop-publish-recommend" value="${escapeHtml(d.recommend)}" /></label>
          <label>封面链接（可选）<input data-field="workshop-publish-cover" value="${escapeHtml(d.cover)}" /></label>
          <label>状态栏文案<input data-field="workshop-publish-statline" value="${escapeHtml(d.statline)}" /></label>
          <label class="full">世界简介<textarea data-field="workshop-publish-intro">${escapeHtml(d.intro)}</textarea></label>
        </div>
        <div class="workshop-flow-actions">
          <button class="ghost" data-action="workshop-hold-draft">暂不发布</button>
          <button class="primary" data-action="workshop-confirm-publish">${uiState.workshopPublishing ? "发布中..." : "确认发布"}</button>
        </div>
      </div>
    </div>
  `;
}

function pageWorkshopEntry() {
  const cards = [
    {
      icon: "🌍",
      title: "世界卡",
      desc: "搭建可持续连载的世界底盘，定义主目标、冲突与固定角色。",
      intro: "适合中长线创作，支持资源系统与规则约束，玩法更具策略深度。",
      go: "#/workshop/world/editor"
    },
    {
      icon: "📖",
      title: "故事卡",
      desc: "快速定义短篇叙事结构，围绕开场锚点和结局锚点推进体验。",
      intro: "适合单次体验与活动剧情，强调节奏控制与分支转折。",
      go: "#/workshop/story/editor"
    },
    {
      icon: "🎭",
      title: "角色卡",
      desc: "塑造高辨识度互动角色，配置语气风格、边界与成长里程碑。",
      intro: "适合角色向玩法，聚焦关系推进、情绪互动与长期记忆。",
      go: "#/workshop/character/editor"
    },
    {
      icon: "🖼️",
      title: "AI画图",
      desc: "输入提示词即可快速产出视觉参考图，用于封面、灵感图和场景草图。",
      intro: "支持风格、比例和负向词设置，生成后可直接挑图使用。",
      go: "#/workshop/paint"
    }
  ];
  return renderExploreShell(`
    <section class="workshop-entry-page">
      <h3>创作卡类型</h3>
      <div class="workshop-entry-list">
        ${cards
          .map(
            (item) => `
          <article class="workshop-entry-card" data-go="${item.go}">
            <div class="workshop-entry-left">
              <span class="workshop-entry-icon">${item.icon}</span>
              <strong>${item.title}</strong>
            </div>
            <div class="workshop-entry-right">
              <p>${item.desc}</p>
              <small>${item.intro}</small>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `);
}

function pageWorkshop() {
  const syncExpired = (Date.now() - Number(uiState.workshopLastSyncAt || 0)) > WORKSHOP_SYNC_TTL_MS;
  if (
    uiState.isLoggedIn
    && uiState.currentUserId
    && !uiState.workshopSyncInFlight
    && (uiState.workshopCardsLoadedForUser !== uiState.currentUserId || syncExpired)
  ) {
    void syncWorkshopCardsFromApi({ silent: true });
  }
  const mode = uiState.workshopMode;
  const meta = WORKSHOP_MODE_META[mode];
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  const draft = normalizeWorkshopDraftForMode(mode, getWorkshopDraftByMode(mode));
  const parseMeta = uiState.workshopCustomParsed || null;
  const modeFieldPrefix = mode === "short_narrative"
    ? "workshop-story-"
    : mode === "virtual_character"
      ? "workshop-character-"
      : "workshop-world-";
  const workshopFieldExamples = {
    "workshop-world-cardName": "例如：夜港档案：雾站追猎",
    "workshop-world-cardIntro": "例如：你将在近未来港城展开高压博弈，争夺进入上层议会的资格。",
    "workshop-world-openingLine": "例如：暴雨夜，旧站台广播突然点名你的代号。",
    "workshop-world-worldSetting": "例如：近未来港城，财团与灰产长期共治。",
    "workshop-world-playerIdentity": "例如：你是游走灰区的中间人，熟悉街头与体制缝隙。",
    "workshop-world-primaryGoal": "例如：180天内拿到进入上层议会的资格。",
    "workshop-world-coreConflict": "例如：黑账索引在你手里，但每次公开都要支付关系代价。",
    "workshop-world-fixedNpcs": "例如：审计官林序；安保队长段铮；线人白雀。",
    "workshop-world-resourceSystem": "例如：信用点、关系债、可验证证据。",
    "workshop-world-toneStyle": "例如：冷峻、压迫、博弈感强。",
    "workshop-world-forbiddenRules": "例如：禁止无代价获得核心情报。",
    "workshop-world-detailMemorySeed": "例如：N-17站台、断续女声、倾斜告示牌。",
    "workshop-story-openingLine": "例如：你刚走出礼堂，缩减名额公告已贴满走廊。",
    "workshop-story-openingAnchor": "例如：你在婚礼前夜收到匿名录像。",
    "workshop-story-cardName": "例如：保送风暴：名额暗战",
    "workshop-story-cardIntro": "例如：24小时内追查名额暗箱操作，在关系与证据之间做选择。",
    "workshop-story-endingAnchors": "例如：真相公开/沉默离场/同盟反噬。",
    "workshop-story-fixedNpcs": "例如：主角青梅、公司合伙人、匿名爆料者。",
    "workshop-story-scopeLimits": "例如：24小时内，仅城市核心区可行动。",
    "workshop-story-primaryGoal": "例如：在天亮前锁定幕后操盘人。",
    "workshop-story-coreConflict": "例如：救人会丢证据，追证据会牺牲关系。",
    "workshop-story-branchSeeds": "例如：医院监控、遗失U盘、错发短信。",
    "workshop-story-pacingHint": "例如：前紧后爆，第三幕反转。",
    "workshop-story-cluePool": "例如：门禁记录、通话清单、资金流水。",
    "workshop-character-personaName": "例如：叶言青",
    "workshop-character-cardName": "例如：顾衍：冷感总裁观察期",
    "workshop-character-cardIntro": "例如：与高控制欲角色建立关系，跨越试探、对抗与信任阈值。",
    "workshop-character-relationStart": "例如：你们是互相利用但默契很高的搭档。",
    "workshop-character-personaCore": "例如：克制、敏锐、极度重承诺。",
    "workshop-character-dialogueStyle": "例如：短句、反问、偶尔冷幽默。",
    "workshop-character-relationBoundary": "例如：不谈家庭，不接受公开羞辱。",
    "workshop-character-taboos": "例如：背叛、失约、拿过去威胁她。",
    "workshop-character-openingLine": "例如：‘你终于来了，比我预计晚了七分钟。’",
    "workshop-character-memoryHooks": "例如：总会记住你说过的小细节并回收利用。",
    "workshop-character-triggerWords": "例如：真相、交易、代价。",
    "workshop-character-growthMilestones": "例如：从试探合作到公开站队。"
  };
  const renderCardMetaFields = () => {
    const nameExampleKey = `${modeFieldPrefix}cardName`;
    const introExampleKey = `${modeFieldPrefix}cardIntro`;
    return `
      <div class="workshop-form-grid">
        <label>卡片名称（必填）<input data-field="${modeFieldPrefix}cardName" value="${escapeHtml(draft.cardName || "")}" placeholder="${escapeHtml(workshopFieldExamples[nameExampleKey] || "例如：我的新卡片")}" /></label>
        <label>卡片简介<textarea data-field="${modeFieldPrefix}cardIntro" placeholder="${escapeHtml(workshopFieldExamples[introExampleKey] || "例如：一句话介绍这张卡片")}" >${escapeHtml(draft.cardIntro || "")}</textarea></label>
      </div>
    `;
  };
  const renderModeFields = () => {
    if (mode === "long_narrative") {
      return `
        <div class="workshop-form-grid">
          <label>开场句（必填）<textarea data-field="workshop-world-openingLine" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-openingLine"])}">${escapeHtml(draft.openingLine || "")}</textarea></label>
          <label>开场白 AI 辅助
            <button type="button" data-action="workshop-toggle-opening-ai" data-mode="long_narrative" class="workshop-inline-toggle ${parseBoolFlag(draft.openingLineAiAssist, false) ? "active" : ""}">
              ${parseBoolFlag(draft.openingLineAiAssist, false) ? "需要（将由 AI 扩写/润色）" : "不需要（原样抛给用户）"}
            </button>
          </label>
          <label>世界底盘（必填）<textarea data-field="workshop-world-worldSetting" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-worldSetting"])}">${escapeHtml(draft.worldSetting || "")}</textarea></label>
          <label>玩家身份（必填）<textarea data-field="workshop-world-playerIdentity" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-playerIdentity"])}">${escapeHtml(draft.playerIdentity || "")}</textarea></label>
          <label>主目标（必填）<textarea data-field="workshop-world-primaryGoal" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-primaryGoal"])}">${escapeHtml(draft.primaryGoal || "")}</textarea></label>
          <label>核心冲突（必填）<textarea data-field="workshop-world-coreConflict" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-coreConflict"])}">${escapeHtml(draft.coreConflict || "")}</textarea></label>
          <label>固定角色（必填）<textarea data-field="workshop-world-fixedNpcs" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-fixedNpcs"])}">${escapeHtml(draft.fixedNpcs || "")}</textarea></label>
          <label>资源系统<input data-field="workshop-world-resourceSystem" value="${escapeHtml(draft.resourceSystem || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-resourceSystem"])}" /></label>
          <label>文风基调<input data-field="workshop-world-toneStyle" value="${escapeHtml(draft.toneStyle || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-toneStyle"])}" /></label>
          <label>禁行规则<textarea data-field="workshop-world-forbiddenRules" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-forbiddenRules"])}">${escapeHtml(draft.forbiddenRules || "")}</textarea></label>
          <label>细节记忆种子<textarea data-field="workshop-world-detailMemorySeed" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-detailMemorySeed"])}">${escapeHtml(draft.detailMemorySeed || "")}</textarea></label>
        </div>
      `;
    }
    if (mode === "short_narrative") {
      return `
        <div class="workshop-form-grid">
          <label>开场白（必填）<textarea data-field="workshop-story-openingLine" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-openingLine"])}">${escapeHtml(draft.openingLine || "")}</textarea></label>
          <label>开场白 AI 辅助
            <button type="button" data-action="workshop-toggle-opening-ai" data-mode="short_narrative" class="workshop-inline-toggle ${parseBoolFlag(draft.openingLineAiAssist, false) ? "active" : ""}">
              ${parseBoolFlag(draft.openingLineAiAssist, false) ? "需要（将由 AI 扩写/润色）" : "不需要（原样抛给用户）"}
            </button>
          </label>
          <label>开场锚点（必填）<textarea data-field="workshop-story-openingAnchor" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-openingAnchor"])}">${escapeHtml(draft.openingAnchor || "")}</textarea></label>
          <label>结局锚点（必填）<textarea data-field="workshop-story-endingAnchors" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-endingAnchors"])}">${escapeHtml(draft.endingAnchors || "")}</textarea></label>
          <label>固定 NPC（必填）<textarea data-field="workshop-story-fixedNpcs" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-fixedNpcs"])}">${escapeHtml(draft.fixedNpcs || "")}</textarea></label>
          <label>活动范围（必填）<textarea data-field="workshop-story-scopeLimits" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-scopeLimits"])}">${escapeHtml(draft.scopeLimits || "")}</textarea></label>
          <label>主目标（必填）<textarea data-field="workshop-story-primaryGoal" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-primaryGoal"])}">${escapeHtml(draft.primaryGoal || "")}</textarea></label>
          <label>核心冲突（必填）<textarea data-field="workshop-story-coreConflict" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-coreConflict"])}">${escapeHtml(draft.coreConflict || "")}</textarea></label>
          <label>分支种子<input data-field="workshop-story-branchSeeds" value="${escapeHtml(draft.branchSeeds || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-branchSeeds"])}" /></label>
          <label>节奏提示<input data-field="workshop-story-pacingHint" value="${escapeHtml(draft.pacingHint || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-pacingHint"])}" /></label>
          <label>线索池<textarea data-field="workshop-story-cluePool" placeholder="${escapeHtml(workshopFieldExamples["workshop-story-cluePool"])}">${escapeHtml(draft.cluePool || "")}</textarea></label>
        </div>
      `;
    }
    return `
      <div class="workshop-form-grid">
        <label>人物名称（必填）<input data-field="workshop-character-personaName" value="${escapeHtml(draft.personaName || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-personaName"])}" /></label>
        <label>关系起点（必填）<textarea data-field="workshop-character-relationStart" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-relationStart"])}">${escapeHtml(draft.relationStart || "")}</textarea></label>
        <label>核心性格（必填）<textarea data-field="workshop-character-personaCore" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-personaCore"])}">${escapeHtml(draft.personaCore || "")}</textarea></label>
        <label>说话风格（必填）<textarea data-field="workshop-character-dialogueStyle" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-dialogueStyle"])}">${escapeHtml(draft.dialogueStyle || "")}</textarea></label>
        <label>关系边界（必填）<textarea data-field="workshop-character-relationBoundary" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-relationBoundary"])}">${escapeHtml(draft.relationBoundary || "")}</textarea></label>
        <label>禁忌点（必填）<textarea data-field="workshop-character-taboos" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-taboos"])}">${escapeHtml(draft.taboos || "")}</textarea></label>
        <label>开场白（必填）<textarea data-field="workshop-character-openingLine" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-openingLine"])}">${escapeHtml(draft.openingLine || "")}</textarea></label>
        <label>开场白 AI 辅助
          <button type="button" data-action="workshop-toggle-opening-ai" data-mode="virtual_character" class="workshop-inline-toggle ${parseBoolFlag(draft.openingLineAiAssist, false) ? "active" : ""}">
            ${parseBoolFlag(draft.openingLineAiAssist, false) ? "需要（将由 AI 扩写/润色）" : "不需要（原样抛给用户）"}
          </button>
        </label>
        <label>记忆钩子（必填）<textarea data-field="workshop-character-memoryHooks" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-memoryHooks"])}">${escapeHtml(draft.memoryHooks || "")}</textarea></label>
        <label>触发词<input data-field="workshop-character-triggerWords" value="${escapeHtml(draft.triggerWords || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-triggerWords"])}" /></label>
        <label>成长里程碑<textarea data-field="workshop-character-growthMilestones" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-growthMilestones"])}">${escapeHtml(draft.growthMilestones || "")}</textarea></label>
      </div>
    `;
  };
  const renderMediaFields = () => {
    const backgroundUrl = String(draft.cardBackground || "").trim();
    const album = Array.isArray(draft.albumMedia) ? draft.albumMedia : [];
    return `
      <div class="workshop-media-panel">
        <h4>卡片视觉设置</h4>
        <div class="workshop-media-grid">
          <label>卡片背景（用于列表封面 / 详情兜底）
            <input
              data-field="${modeFieldPrefix}cardBackground"
              value="${escapeHtml(backgroundUrl)}"
              placeholder="可粘贴图片链接，或点击上传背景"
            />
          </label>
          <div class="workshop-media-actions">
            <button type="button" data-action="workshop-card-background-pick">上传背景</button>
            <button type="button" data-action="workshop-clear-card-background">清空背景</button>
          </div>
          ${backgroundUrl ? `<div class="workshop-card-background-preview"><img src="${escapeHtml(backgroundUrl)}" alt="卡片背景预览" loading="lazy" /></div>` : ""}
        </div>

        <div class="workshop-media-grid">
          <label>画册（详情页顶部轮播）
            <small>最多 9 张，支持多选上传；未上传时将默认使用卡片背景。</small>
          </label>
          <div class="workshop-media-actions">
            <button type="button" data-action="workshop-album-media-pick">上传画册图片</button>
          </div>
          <div class="workshop-album-grid">
            ${album.length
              ? album
                .map((item, idx) => `
                  <article class="workshop-album-item">
                    <img src="${escapeHtml(String(item?.url || ""))}" alt="画册 ${idx + 1}" loading="lazy" />
                    <button type="button" data-action="workshop-remove-album-media" data-id="${escapeHtml(String(item?.id || `album_${idx + 1}`))}">删除</button>
                  </article>
                `)
                .join("")
              : '<p class="workshop-media-empty">暂未上传画册图片</p>'
            }
          </div>
        </div>
        <input type="file" accept="image/*" data-field="workshop-card-background-file" class="workshop-upload-input" />
        <input type="file" accept="image/*" multiple data-field="workshop-album-media-file" class="workshop-upload-input" />
      </div>
    `;
  };
  return renderExploreShell(`
    <section class="workshop-studio workshop-editor-page">
      <div class="workshop-body">
        <article class="workshop-panel editor">
          <div class="workshop-panel-head">
            <div class="workshop-input-tabs">
              ${Object.entries(WORKSHOP_AUTHORING_MODE_META)
                .map(([key, item]) => `
                  <button
                    class="workshop-authoring-card ${authoringMode === key ? "active" : ""}"
                    data-action="workshop-set-authoring-mode"
                    data-authoring-mode="${key}"
                  >
                    <span class="workshop-authoring-icon">${item.icon || "•"}</span>
                    <span class="workshop-authoring-copy">
                      <strong>${item.label}</strong>
                      <small>${item.desc}</small>
                    </span>
                  </button>
                `).join("")}
            </div>
            ${
              authoringMode === "custom"
                ? `
              <div class="workshop-custom-panel">
                <label>自定义输入
                  <textarea data-field="workshop-custom-raw" placeholder="例如：近未来港城，三大势力共治。玩家是情报中间人，需要在180天内拿到议会资格。核心冲突是公开真相会失去同盟。">${escapeHtml(uiState.workshopCustomRaw || "")}</textarea>
                </label>
                <div class="workshop-custom-actions">
                  <button data-action="workshop-parse-custom" class="primary">${uiState.workshopCustomParsing ? "拆分中..." : "AI 拆分字段"}</button>
                </div>
                ${
                  parseMeta
                    ? `
                  <div class="workshop-custom-result">
                    <p>拆分来源：${escapeHtml(parseMeta.source || "unknown")} · 置信度 ${(Number(parseMeta.confidence || 0) * 100).toFixed(0)}%</p>
                    ${Array.isArray(parseMeta.missingFields) && parseMeta.missingFields.length ? `<p>缺失字段：${escapeHtml(parseMeta.missingFields.join(" / "))}</p>` : "<p>关键字段已覆盖。</p>"}
                    ${Array.isArray(parseMeta.warnings) && parseMeta.warnings.length ? `<p>提示：${escapeHtml(parseMeta.warnings.join("；"))}</p>` : ""}
                  </div>
                `
                    : ""
                }
              </div>
            `
                : ""
            }
          </div>

          ${renderCardMetaFields()}
          ${authoringMode === "template" ? renderModeFields() : ""}
          ${renderMediaFields()}

          <div class="workshop-action-row">
            <button class="primary" data-action="workshop-save-card">${uiState.workshopSaving ? "保存中..." : "保存到我的草稿箱"}</button>
            <button data-action="workshop-publish-card" ${uiState.workshopPublishing ? "disabled" : ""}>${uiState.workshopPublishing ? "发布中..." : "发布"}</button>
          </div>
          ${uiState.workshopFeedback ? `<p class="workshop-feedback">${escapeHtml(uiState.workshopFeedback)}</p>` : ""}
        </article>
      </div>
    </section>
  `);
}

function pageWorkshopWorldEditor() {
  uiState.workshopMode = "long_narrative";
  uiState.workshopAuthoringMode = getWorkshopEffectiveAuthoringMode("long_narrative");
  return pageWorkshop();
}

function pageWorkshopStoryEditor() {
  uiState.workshopMode = "short_narrative";
  uiState.workshopAuthoringMode = getWorkshopEffectiveAuthoringMode("short_narrative");
  return pageWorkshop();
}

function pageWorkshopCharacterEditor() {
  uiState.workshopMode = "virtual_character";
  uiState.workshopAuthoringMode = getWorkshopEffectiveAuthoringMode("virtual_character");
  return pageWorkshop();
}

function formatWorkshopPaintTime(ts = 0) {
  const delta = Date.now() - Number(ts || 0);
  const mins = Math.max(1, Math.floor(delta / 60000));
  if (mins < 60) return `${mins} 分钟前`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} 小时前`;
  return `${Math.floor(hours / 24)} 天前`;
}

function getWorkshopPaintResultItems() {
  const rows = Array.isArray(uiState.workshopPaintResults) ? uiState.workshopPaintResults : [];
  return rows.map((item, idx) => {
    const x = normalizeWorkshopPaintImage(item);
    return {
      ...x,
      cardId: `${x.id || "result"}_${idx + 1}`,
      timeText: formatWorkshopPaintTime(x.createdAt)
    };
  });
}

function getWorkshopPaintHistoryItems() {
  const raw = Array.isArray(uiState.workshopPaintHistory) ? uiState.workshopPaintHistory : [];
  const keyword = String(uiState.workshopPaintHistoryKeyword || "").trim().toLowerCase();
  const rows = raw
    .map((item) => normalizeWorkshopPaintImage(item))
    .filter((item) => item.url)
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
  const filtered = keyword
    ? rows.filter((item) => `${item.prompt} ${item.model} ${item.style}`.toLowerCase().includes(keyword))
    : rows;
  return filtered.map((item, idx) => ({
    ...item,
    cardId: `${item.id || "history"}_${idx + 1}`,
    timeText: formatWorkshopPaintTime(item.createdAt)
  }));
}

function pageWorkshopPaint() {
  if (!uiState.workshopPaintModelsLoaded) {
    void syncWorkshopPaintModels({ silent: true });
  }
  if (
    uiState.isLoggedIn
    && uiState.currentUserId
    && (
      uiState.workshopPaintHistoryLoadedForUser !== uiState.currentUserId
      || (Date.now() - Number(uiState.workshopPaintHistoryLastSyncAt || 0)) > WORKSHOP_PAINT_HISTORY_SYNC_TTL_MS
    )
  ) {
    void syncWorkshopPaintHistory({ silent: true });
  }

  const styleOptions = [
    { value: "cinematic", label: "电影感" },
    { value: "anime", label: "动漫" },
    { value: "realistic", label: "写实" },
    { value: "illustration", label: "插画" },
    { value: "watercolor", label: "水彩" },
    { value: "pixel art", label: "像素风" }
  ];
  const ratioOptions = ["1:1", "16:9", "9:16", "4:3", "3:4"];
  const modelTabs = Array.isArray(uiState.workshopPaintModels) && uiState.workshopPaintModels.length
    ? uiState.workshopPaintModels
    : WORKSHOP_PAINT_MODEL_FALLBACK;
  const resultItems = getWorkshopPaintResultItems();
  const historyItems = getWorkshopPaintHistoryItems();
  const totalGenerated = (Array.isArray(uiState.workshopPaintHistory) ? uiState.workshopPaintHistory.length : 0) + resultItems.length;
  const currentModelMeta = modelTabs.find((x) => x.id === uiState.workshopPaintModel) || modelTabs[0] || null;

  return renderExploreShell(`
    <section class="workshop-studio workshop-paint-page paint-studio-page">
      <header class="paint-studio-hero">
        <div>
          <h2>AI 画图工坊</h2>
          <p>参考主流文生图产品的核心交互，面向真实生产：生成、复现、复用、落地。</p>
        </div>
        <div class="paint-studio-metrics">
          <span><strong>${totalGenerated}</strong> 张累计生成</span>
          <span><strong>${historyItems.length}</strong> 条历史记录</span>
          <span><strong>${escapeHtml(String(currentModelMeta?.price || "--"))}</strong> 当前模型单价</span>
        </div>
      </header>

      <section class="paint-studio-models">
        ${modelTabs.map((model) => `
          <button
            class="${uiState.workshopPaintModel === model.id ? "active" : ""} ${model.id !== WORKSHOP_PAINT_ACTIVE_MODEL_ID ? "is-disabled" : ""}"
            data-action="workshop-paint-model"
            data-model="${model.id}"
            ${model.id !== WORKSHOP_PAINT_ACTIVE_MODEL_ID ? "disabled" : ""}
            title="${model.id !== WORKSHOP_PAINT_ACTIVE_MODEL_ID ? "当前版本暂未开放" : "当前可用"}"
          >
            <strong>${escapeHtml(model.label || model.id)}</strong>
            <small class="paint-studio-model-id">${escapeHtml(model.id || "")}</small>
            <em>${escapeHtml(model.price || "")}</em>
            <span>${escapeHtml(model.quality || "")}</span>
          </button>
        `).join("")}
      </section>

      <article class="paint-studio-composer">
        <div class="workshop-paint-preset-row">
          ${WORKSHOP_PAINT_PROMPT_PRESETS.map((item) => `<button data-action="workshop-paint-apply-preset" data-key="${item.key}">${item.label}</button>`).join("")}
        </div>
        <div class="workshop-paint-grid">
          <label>提示词
            <textarea data-field="workshop-paint-prompt" placeholder="描述主体、镜头、光线、材质、情绪">${escapeHtml(uiState.workshopPaintPrompt || "")}</textarea>
          </label>
          <label>反向提示词（可选）
            <textarea data-field="workshop-paint-negative" placeholder="例如：low quality, blurry, watermark, extra fingers">${escapeHtml(uiState.workshopPaintNegativePrompt || "")}</textarea>
          </label>
          <label>风格
            <select data-field="workshop-paint-style">
              ${styleOptions.map((item) => `<option value="${item.value}" ${uiState.workshopPaintStyle === item.value ? "selected" : ""}>${item.label}</option>`).join("")}
            </select>
          </label>
          <label>比例
            <select data-field="workshop-paint-ratio">
              ${ratioOptions.map((item) => `<option value="${item}" ${uiState.workshopPaintRatio === item ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </label>
          <label>数量
            <select data-field="workshop-paint-count">
              ${[1, 2, 3, 4].map((item) => `<option value="${item}" ${Number(uiState.workshopPaintCount || 4) === item ? "selected" : ""}>${item} 张</option>`).join("")}
            </select>
          </label>
          <label>Seed（可复现）
            <input data-field="workshop-paint-seed" value="${escapeHtml(String(uiState.workshopPaintSeedInput || ""))}" placeholder="留空随机，如 20260315" />
          </label>
        </div>
        <div class="workshop-paint-toggle-row">
          <button class="${uiState.workshopPaintPromptEnhance ? "active" : ""}" data-action="workshop-paint-toggle-enhance">${uiState.workshopPaintPromptEnhance ? "提示词增强：开" : "提示词增强：关"}</button>
          <button class="${uiState.workshopPaintSeedLocked ? "active" : ""}" data-action="workshop-paint-toggle-seed-lock">${uiState.workshopPaintSeedLocked ? "种子锁定：开" : "种子锁定：关"}</button>
          <button data-action="workshop-paint-copy-prompt">复制最终提示词</button>
          <button data-action="workshop-paint-sync-history" ${uiState.workshopPaintHistoryLoading ? "disabled" : ""}>${uiState.workshopPaintHistoryLoading ? "同步中..." : "同步历史"}</button>
        </div>
        <div class="workshop-paint-actions">
          <button class="primary" data-action="workshop-paint-generate" ${uiState.workshopPaintGenerating ? "disabled" : ""}>${uiState.workshopPaintGenerating ? "生成中..." : "立即生成"}</button>
          <button data-action="workshop-paint-clear">清空本次结果</button>
          <button data-action="workshop-paint-copy-all-result-links" ${resultItems.length ? "" : "disabled"}>复制本次全部链接</button>
        </div>
      </article>

      ${uiState.workshopPaintFeedback ? `<p class="workshop-feedback">${escapeHtml(uiState.workshopPaintFeedback)}</p>` : ""}

      <section class="paint-studio-section">
        <div class="paint-studio-section-head">
          <h3>本次生成</h3>
          <span>${resultItems.length} 张</span>
        </div>
        <div class="paint-studio-grid">
          ${
            resultItems.length
              ? resultItems.map((item) => `
                <article class="paint-studio-card">
                  <img class="workshop-paint-image" src="${escapeHtml(item.url)}" data-fallback-src="${escapeHtml(item.fallbackUrl || item.url)}" alt="generated" loading="lazy" referrerpolicy="no-referrer" />
                  <div class="paint-studio-card-meta">
                    <div class="paint-studio-tags">
                      <span>${escapeHtml(item.model)}</span>
                      <span>${escapeHtml(item.style)}</span>
                      <span>${escapeHtml(item.ratio)}</span>
                    </div>
                    <p>${escapeHtml(item.prompt || "（无提示词）")}</p>
                    <small>seed: ${escapeHtml(String(item.seed || 0))} · ${escapeHtml(item.timeText)}</small>
                    <div class="workshop-paint-card-actions">
                      <button data-action="workshop-paint-reuse" data-prompt="${escapeHtml(item.prompt)}" data-negative="${escapeHtml(item.negative)}" data-style="${escapeHtml(item.style)}" data-ratio="${escapeHtml(item.ratio)}" data-model="${escapeHtml(item.model)}" data-seed="${escapeHtml(String(item.seed || ""))}">复用参数</button>
                      <button data-action="workshop-paint-rerun" data-prompt="${escapeHtml(item.prompt)}" data-negative="${escapeHtml(item.negative)}" data-style="${escapeHtml(item.style)}" data-ratio="${escapeHtml(item.ratio)}" data-model="${escapeHtml(item.model)}" data-seed="${escapeHtml(String(item.seed || ""))}">相似再生</button>
                      <button data-action="workshop-paint-apply-cover" data-url="${escapeHtml(item.url)}">设为封面</button>
                      <button data-action="workshop-paint-download" data-url="${escapeHtml(item.url)}" data-title="${escapeHtml(item.cardId)}">下载</button>
                    </div>
                  </div>
                </article>
              `).join("")
              : '<p class="workshop-paint-empty">还没有本次生成结果，输入提示词后点击「立即生成」。</p>'
          }
        </div>
      </section>

      <section class="paint-studio-section">
        <div class="paint-studio-section-head">
          <h3>历史记录</h3>
          <span>${historyItems.length} 条</span>
        </div>
        <div class="paint-studio-history-tools">
          <input data-field="workshop-paint-history-keyword" placeholder="按提示词/模型搜索历史" value="${escapeHtml(uiState.workshopPaintHistoryKeyword || "")}" />
          <button data-action="workshop-paint-sync-history" ${uiState.workshopPaintHistoryLoading ? "disabled" : ""}>${uiState.workshopPaintHistoryLoading ? "同步中..." : "刷新"}</button>
        </div>
        <div class="paint-studio-grid history">
          ${
            historyItems.length
              ? historyItems.map((item) => `
                <article class="paint-studio-card compact">
                  <img class="workshop-paint-image" src="${escapeHtml(item.url)}" data-fallback-src="${escapeHtml(item.fallbackUrl || item.url)}" alt="history" loading="lazy" referrerpolicy="no-referrer" />
                  <div class="paint-studio-card-meta">
                    <div class="paint-studio-tags">
                      <span>${escapeHtml(item.model)}</span>
                      <span>${escapeHtml(item.ratio)}</span>
                    </div>
                    <small>${escapeHtml(item.timeText)} · seed ${escapeHtml(String(item.seed || 0))}</small>
                    <div class="workshop-paint-card-actions">
                      <button data-action="workshop-paint-reuse" data-prompt="${escapeHtml(item.prompt)}" data-negative="${escapeHtml(item.negative)}" data-style="${escapeHtml(item.style)}" data-ratio="${escapeHtml(item.ratio)}" data-model="${escapeHtml(item.model)}" data-seed="${escapeHtml(String(item.seed || ""))}">复用</button>
                      <button data-action="workshop-paint-rerun" data-prompt="${escapeHtml(item.prompt)}" data-negative="${escapeHtml(item.negative)}" data-style="${escapeHtml(item.style)}" data-ratio="${escapeHtml(item.ratio)}" data-model="${escapeHtml(item.model)}" data-seed="${escapeHtml(String(item.seed || ""))}">再生成</button>
                      <button data-action="workshop-paint-download" data-url="${escapeHtml(item.url)}" data-title="${escapeHtml(item.cardId)}">下载</button>
                    </div>
                  </div>
                </article>
              `).join("")
              : '<p class="workshop-paint-empty">暂无历史记录。登录后生成图片会自动沉淀在这里。</p>'
          }
        </div>
      </section>
    </section>
  `);
}

function renderCommunityHero(activeTab = "home") {
  return `
    <header class="backstage-hero community-backstage-hero">
      <div class="backstage-profile-row">
        <button class="backstage-avatar community-hero-icon" data-go="#/community/home">社</button>
        <div class="backstage-profile-meta">
          <h2>社区</h2>
          <p>找同好、聊剧情、组局共创</p>
          <small>实时更新高活跃社群与热门讨论</small>
        </div>
      </div>
      <div class="backstage-shortcuts community-shortcuts">
        <button data-action="toggle-community-filter"><span>⚲</span><em>筛选</em></button>
        <button data-action="open-unified-search" data-scope="community"><span>⌕</span><em>搜索</em></button>
        <button data-go="#/community/create"><span>＋</span><em>创建</em></button>
        <button data-go="#/community/mine"><span>◎</span><em>我的社群</em></button>
      </div>
      <button class="backstage-composer-trigger" data-action="open-unified-search" data-scope="community">
        <span>搜索社群 / 主题 / 设定 / 作者</span>
        <em>⌕</em>
      </button>
    </header>
    <div class="dynamic-tabs community-home-tabs">
      <button class="${activeTab === "home" ? "active" : ""}" data-go="#/community/home">推荐</button>
      <button class="${activeTab === "mine" ? "active" : ""}" data-go="#/community/mine">我的社群</button>
      <button data-go="#/community/create">创建</button>
    </div>
  `;
}

function pageCommunity() {
  const filteredList = getFilteredCommunityList();
  const themeGroup = COMMUNITY_FILTER_CONFIG.find((group) => group.key === "theme") || { label: "全部主题", options: [] };
  const communityTopicTabs = [themeGroup.label, ...themeGroup.options];
  const currentTheme = uiState.communityFilterTheme;
  return renderExploreShell(`
    <section class="community-page">
      <header class="community-home-top">
        <div class="community-head-row">
          <button class="me-inline-back unified-back-btn community-home-back" data-action="go-back" aria-label="返回">←</button>
          <h2>社区</h2>
          <div class="community-head-actions-right">
            <button class="community-head-icon-btn" data-action="open-unified-search" data-scope="community" aria-label="搜索">⌕</button>
            <button class="community-head-icon-btn create" data-go="#/community/create" aria-label="创建社区">＋</button>
          </div>
        </div>
        <div class="community-quick-entry-row">
          <button data-go="#/community/join">
            <span class="community-quick-entry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.25 9.25 0 0 0 12 2.75Z"></path>
                <path d="M12 6.5v5.5l3.5 2"></path>
              </svg>
            </span>
            <em>加入社区</em>
          </button>
          <button data-go="#/community/mine">
            <span class="community-quick-entry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M16.5 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"></path>
                <path d="M7.5 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"></path>
                <path d="M2.75 19.5a4.25 4.25 0 0 1 4.25-4.25h1"></path>
                <path d="M11.25 19.5a5.25 5.25 0 0 1 10.5 0"></path>
              </svg>
            </span>
            <em>我的社区</em>
          </button>
          <button data-go="#/community/manage/joined">
            <span class="community-quick-entry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M4 6.5h12"></path>
                <path d="M4 12h16"></path>
                <path d="M4 17.5h10"></path>
                <circle cx="18.5" cy="6.5" r="1.75"></circle>
                <circle cx="11.5" cy="12" r="1.75"></circle>
                <circle cx="15.5" cy="17.5" r="1.75"></circle>
              </svg>
            </span>
            <em>管理社区</em>
          </button>
          <button data-go="#/community/create">
            <span class="community-quick-entry-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 5.5v13"></path>
                <path d="M5.5 12h13"></path>
                <path d="M7.25 3.75h1.5"></path>
                <path d="M15.25 18.75h1.5"></path>
              </svg>
            </span>
            <em>创建社区</em>
          </button>
        </div>
      </header>
      <div class="community-filter-tabs-panel community-filter-topic-shell xh-mobile-topic-shell">
        <div class="community-filter-tabs-body xh-mobile-topic-bar">
          <div class="community-filter-tab-track xh-mobile-topic-tabs">
            ${communityTopicTabs
              .map(
                (topic) => `
              <button class="community-filter-tab xh-mobile-topic-tab ${currentTheme === topic ? "active" : ""}" data-action="community-filter-change" data-key="theme" data-value="${topic}">
                ${topic}
              </button>
            `
              )
              .join("")}
          </div>
          <button class="xh-mobile-topic-expand ${uiState.communityTopicPanelOpen ? "active" : ""}" data-action="toggle-community-topics" aria-label="更多主题">⌄</button>
        </div>
        ${
          uiState.communityTopicPanelOpen
            ? `
          <div class="xh-mobile-topic-panel">
            <section class="xh-mobile-topic-section">
              <div class="xh-mobile-topic-section-head">
                <strong>全部主题</strong>
                <span>点击切换主题</span>
              </div>
              <div class="xh-mobile-topic-grid">
                ${communityTopicTabs
                  .map(
                    (topic) => `
                  <button class="xh-mobile-topic-chip ${currentTheme === topic ? "active" : ""}" data-action="community-filter-change" data-key="theme" data-value="${topic}">${topic}</button>
                `
                  )
                  .join("")}
              </div>
            </section>
          </div>
        `
            : ""
        }
      </div>
      <h3>推荐社群（${filteredList.length}）</h3>
      ${renderCommunityCards(filteredList)}
    </section>
  `);
}

function pageCommunityJoin() {
  return renderExploreShell(`
    <section class="community-page community-join-page">
      <div class="community-join-top">
        <button class="community-join-back" data-action="go-back" aria-label="返回">←</button>
        <h2>加入社区</h2>
        <span></span>
      </div>
      ${renderCommunityCards(COMMUNITY_LIST, "暂时没有可加入的社群")}
    </section>
  `);
}

function pageCommunityMine() {
  const isJoinedTab = uiState.communityMyTab === "joined";
  const manageTarget = isJoinedTab ? "#/community/manage/joined" : "#/community/manage";
  const mineList = isJoinedTab ? getMyJoinedCommunities() : getMyCreatedCommunities();
  const emptyText = isJoinedTab ? "你还没有加入社群" : "你还没有创建社群";
  return renderExploreShell(`
    <section class="community-page">
      ${renderCommunityHero("mine")}
      <div class="community-head-actions"><button data-go="${manageTarget}">管理</button></div>
      <div class="community-tab-switch">
        <button class="${uiState.communityMyTab === "joined" ? "active" : ""}" data-action="community-my-tab" data-tab="joined">我加入</button>
        <button class="${uiState.communityMyTab === "created" ? "active" : ""}" data-action="community-my-tab" data-tab="created">我创建</button>
      </div>
      ${renderCommunityCards(mineList, emptyText)}
    </section>
  `);
}

function pageCommunitySearch() {
  const q = uiState.communitySearchQuery.trim();
  const tabs = ["综合", "社群", "话题"];
  const ranked = searchCommunityList(q, 80, uiState.communitySearchSort);
  const tagPool = new Map();
  ranked.forEach((item) => (item.tags || []).forEach((tag) => tagPool.set(tag, (tagPool.get(tag) || 0) + 1)));
  const topics = [...tagPool.entries()].sort((a, b) => b[1] - a[1]).map(([tag]) => tag).slice(0, 18);
  const activeTab = uiState.communitySearchTab;

  return renderExploreShell(`
    <section class="search-result-page">
      <div class="search-mobile-global">
        <div class="search-mobile-global-field xh-search">
          <input class="xh-mobile-search-input search-mobile-global-input" value="${escapeHtml(q)}" placeholder="搜索世界/主题/设定/作者" />
          <button class="xh-search-submit xh-search-close-btn" data-action="cancel-search-results" aria-label="返回">×</button>
          <button class="xh-search-submit" data-action="submit-search">搜索</button>
        </div>
      </div>

      <div class="search-result-tabs">
        ${tabs.map((t) => `<button class="${t === activeTab ? "active" : ""}" data-action="set-community-search-tab" data-tab="${t}">${t}</button>`).join("")}
      </div>
      ${
        activeTab === "话题"
          ? `
        <div class="search-topic-grid">
          ${
            topics.length
              ? topics.map((t) => `<button data-action="apply-search-term" data-term="${escapeHtml(t)}"># ${escapeHtml(t)}</button>`).join("")
              : renderSearchEmptyState("没有匹配话题", "换个话题词试试，或者先去综合看看。")
          }
        </div>
      `
          : (ranked.length
            ? renderCommunityCards(ranked, "暂无匹配社群，试试换个关键词")
            : renderSearchEmptyState("没有匹配社群", "试试更换关键词，或切换到话题标签。"))
      }
    </section>
  `);
}

function pageCommunityCreate() {
  const avatarStyle = uiState.communityCreateAvatar
    ? ` style="background-image:url('${escapeHtml(uiState.communityCreateAvatar)}');background-size:cover;background-position:center;"`
    : "";
  const coverUrl = String(uiState.communityCreateCover || "").trim();
  return renderExploreShell(`
    <section class="community-page community-form">
      <h2>新增社群</h2>
      <div class="community-create-media-grid">
        <div class="community-create-media-item">
          <label>群头像</label>
          <div class="row community-create-media-row">
            <div class="community-avatar-placeholder"${avatarStyle}></div>
            <button class="community-upload-btn" data-action="community-avatar-upload-trigger">${uiState.communityCreateAssetProcessing ? "处理中..." : "上传头像"}</button>
            <input class="community-cover-file-input" type="file" accept="image/*" data-field="community-create-avatar-file" />
          </div>
          <small>支持 JPG/PNG</small>
        </div>
        <div class="community-create-media-item">
          <label>卡片背景</label>
          <div class="row community-create-media-row">
            <div class="community-cover-preview" ${coverUrl ? `style="background-image:url('${escapeHtml(coverUrl)}');"` : ""}>${coverUrl ? "" : "封面"}</div>
            <button class="community-upload-btn" data-action="community-cover-upload-trigger">${uiState.communityCreateAssetProcessing ? "处理中..." : "上传背景"}</button>
            <input class="community-cover-file-input" type="file" accept="image/*" data-field="community-create-cover-file" />
          </div>
          <small>支持 JPG/PNG</small>
        </div>
      </div>
      <label>社区名称</label>
      <input data-field="community-create-name" value="${escapeHtml(uiState.communityCreateName)}" placeholder="请输入名称" />
      <label>社区标签</label>
      <input data-field="community-create-tags" value="${escapeHtml(uiState.communityCreateTags)}" placeholder="如：悬疑/校园/科幻" />
      <label>简介</label>
      <textarea data-field="community-create-desc" placeholder="一句话介绍你的社区定位">${escapeHtml(uiState.communityCreateDesc)}</textarea>
      <label>背景蒙版</label>
      <div class="community-inline-switch">
        <button class="${Number(uiState.communityCreateMaskOpacity) > 0 ? "active" : ""}" data-action="community-create-mask" data-mode="on">是</button>
        <button class="${Number(uiState.communityCreateMaskOpacity) <= 0 ? "active" : ""}" data-action="community-create-mask" data-mode="off">否</button>
      </div>
      <label>加入方式</label>
      <div class="community-inline-switch">
        <button class="${uiState.communityCreateJoinMode === "公开加入" ? "active" : ""}" data-action="community-create-join" data-mode="公开加入">公开加入</button>
        <button class="${uiState.communityCreateJoinMode === "审核加入" ? "active" : ""}" data-action="community-create-join" data-mode="审核加入">审核加入</button>
      </div>
      ${uiState.communityCreateError ? `<div class="community-empty" style="color:#ef4444;">${escapeHtml(uiState.communityCreateError)}</div>` : ""}
    </section>
  `);
}

function pageCommunityGroup() {
  const c = getSelectedCommunity();
  if (!c) return pageCommunity();
  const communityId = String(c.id || "").trim();
  const avatarUrl = String(c.avatarUrl || "").trim();
  const avatarText = String(c.name || "社").slice(0, 1);
  const cover = getCommunityCardCover(c, 0);
  const rawMaskOpacity = Number(c.maskOpacity);
  const maskOpacity = Number.isFinite(rawMaskOpacity)
    ? Math.max(0, Math.min(0.85, rawMaskOpacity))
    : 0.34;
  const hasLoadedMembers = communityId && Array.isArray(uiState.communityMembersByCommunityId[communityId]);
  const isLoadingMembers = communityId && Boolean(uiState.communityMembersLoadingByCommunityId[communityId]);
  const memberFetchAt = Number(uiState.communityMembersFetchedAtByCommunityId[communityId] || 0);
  const membersCacheFresh = Date.now() - memberFetchAt < 10000;
  if (uiState.communityGroupTab === "members" && communityId && !isLoadingMembers && (!hasLoadedMembers || !membersCacheFresh)) {
    void fetchCommunityMembersAndSync(communityId, { force: hasLoadedMembers });
  }
  const posts = getCommunityPosts(c.id);
  const previewMembers = hasLoadedMembers ? uiState.communityMembersByCommunityId[communityId] : [];
  const resolvedMemberCount = uiState.communityGroupTab === "members" && Array.isArray(previewMembers)
    ? previewMembers.length
    : Math.max(0, toMetricCount(c.memberCount || 0));
  const resolvedMembersLabel = `${resolvedMemberCount}人`;
  const joinLabel = c.joinedByMe ? "已加入" : (uiState.communityGroupJoining ? "加入中..." : "加入");
  const list = uiState.communityGroupTab === "featured" ? posts.filter((p) => p.featured) : posts;
  const activeTabTotal =
    uiState.communityGroupTab === "members"
      ? resolvedMemberCount
      : uiState.communityGroupTab === "featured"
        ? posts.filter((p) => p.featured).length
        : posts.length;
  return renderExploreShell(`
    <section class="community-group-page">
      <div class="community-detail-title-row">
        <button class="community-manage-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>社区详情</h2>
      </div>
      <article class="community-group-head" style="--community-cover:${escapeHtml(cover)};--community-mask-opacity:${escapeHtml(maskOpacity)};">
        <div class="community-group-avatar"${avatarUrl ? ` style="background-image:url('${escapeHtml(avatarUrl)}');"` : ""}>${avatarUrl ? "" : escapeHtml(avatarText)}</div>
        <div class="copy">
          <h2>${c.name}</h2>
          <p>${c.tags.join(" / ")} · ${c.desc}</p>
          <small>${resolvedMembersLabel} · 今日在线 ${c.online} · 最近活跃 ${c.updated}</small>
          <div class="community-head-metrics">
            <span>动态 ${posts.length}</span>
            <span>精华 ${posts.filter((p) => p.featured).length}</span>
            <span>成员 ${resolvedMemberCount}</span>
            <span>讨论热度 +12%</span>
          </div>
        </div>
        <div class="actions">
          <button class="ghost" data-action="community-join-group" ${c.joinedByMe || uiState.communityGroupJoining ? "disabled" : ""}>${joinLabel}</button>
          <button class="primary" data-go="#/community/group/post">发动态</button>
        </div>
      </article>
      ${uiState.communityGroupFeedback ? `<p class="community-empty">${escapeHtml(uiState.communityGroupFeedback)}</p>` : ""}

      <div class="community-tab-switch community-group-tabs">
        <button class="${uiState.communityGroupTab === "dynamic" ? "active" : ""}" data-action="community-group-tab" data-tab="dynamic">动态</button>
        <button class="${uiState.communityGroupTab === "featured" ? "active" : ""}" data-action="community-group-tab" data-tab="featured">精华</button>
        <button class="${uiState.communityGroupTab === "members" ? "active" : ""}" data-action="community-group-tab" data-tab="members">成员</button>
        <span class="community-group-tabs-count">共 ${activeTabTotal} 条</span>
      </div>

      ${
        uiState.communityGroupTab === "members"
          ? `
        <div class="community-member-list">
          ${uiState.communityMembersLoadingByCommunityId[c.id] ? `<p class="community-empty">成员加载中...</p>` : ""}
          ${uiState.communityMembersErrorByCommunityId[c.id] ? `<p class="community-empty">${escapeHtml(uiState.communityMembersErrorByCommunityId[c.id])}</p>` : ""}
          ${previewMembers.map((m) => `
            <article class="community-member-item">
              <span class="avatar user-avatar-click" style="${m.avatarUrl ? `background-image:url('${escapeHtml(m.avatarUrl)}');background-size:cover;background-position:center;color:transparent;` : `background:${m.color};`}">${m.name.slice(0,1)}</span>
              <div><h4>${m.name}</h4><p>${m.intro}</p></div>
              <span class="community-member-role">${m.role}</span>
            </article>
          `).join("")}
          ${!uiState.communityMembersLoadingByCommunityId[c.id] && !uiState.communityMembersErrorByCommunityId[c.id] && previewMembers.length === 0 ? `<p class="community-empty">暂无成员</p>` : ""}
        </div>
      `
          : `
        <div class="community-post-list">
          ${list
            .map(
              (p) => `
            <article class="community-post-card" data-action="open-community-post" data-id="${p.id}">
              <header><span class="avatar user-avatar-click">${p.user.slice(0,1)}</span><div><strong>${p.user}</strong><small>${p.time} · ${c.name}</small></div>${p.featured ? `<em>精华</em>` : ""}</header>
              <h4>${p.title}</h4>
              <p>${p.text}</p>
              ${renderCommunityPostMedia(p, { limit: 3 })}
              ${p.story ? `<div class="community-story-link"><span>附加故事卡：${p.story}</span><button data-action="open-world-detail" data-id="${getSafeWorldId(p.storyId, 0)}">查看</button></div>` : ""}
              <footer><span>赞 ${formatCount(p.likes)}</span><span>评 ${formatCount(p.comments)}</span><span>分享 ${formatCount(p.stars)}</span></footer>
            </article>
          `
            )
            .join("")}
        </div>
      `
      }
    </section>
  `);
}

function pageCommunityPost() {
  const storyOptions = getStoryBindOptions();
  resolveCommunityComposeTargetId();
  uiState.communityComposeVisibility = normalizeComposeVisibility(uiState.communityComposeVisibility);
  const mentionCandidates = getCommunityMentionCandidates();
  const topicCandidates = COMMUNITY_TOPIC_SUGGESTIONS;
  const media = Array.isArray(uiState.communityComposeMedia) ? uiState.communityComposeMedia : [];
  const canPublish = (media.length > 0
    || Boolean(String(uiState.communityComposeText || uiState.communityComposeTitle || "").trim()))
    && !uiState.communityPostPublished;
  return renderExploreShell(`
    <section class="community-page community-form community-compose-page">
      <div class="community-compose-media-strip">
        ${media
          .map(
            (m) => `
          <article class="community-compose-media-card">
            <img src="${escapeHtml(m.url)}" alt="已选择图片" loading="lazy" />
            <button data-action="community-compose-remove-media" data-id="${m.id}" aria-label="删除图片">×</button>
          </article>
        `
          )
          .join("")}
        ${media.length < 9 ? `<button class="community-compose-media-add" data-action="community-compose-pick-media">＋</button>` : ""}
      </div>
      <input class="community-cover-file-input" type="file" accept="image/*" multiple data-field="community-compose-media-file" />
      <input class="community-compose-title" data-field="community-compose-title" value="${escapeHtml(uiState.communityComposeTitle)}" placeholder="添加标题" />
      <textarea data-field="community-compose-text" placeholder="分享你的新发现、攻略或招募信息...">${escapeHtml(uiState.communityComposeText)}</textarea>
      <div class="community-compose-picked-row">
        ${uiState.communityComposeTopics.map((x) => `<span class="topic">#${escapeHtml(x)}</span>`).join("")}
        ${uiState.communityComposeMentions.map((x) => `<span class="mention">@${escapeHtml(x)}</span>`).join("")}
      </div>
      <div class="community-chip-row community-compose-toolbar">
        <button data-action="community-compose-open-mentions">@成员</button>
        <button data-action="community-compose-open-topics">#话题</button>
      </div>
      ${renderStoryBindSettingRow({ target: "community", options: storyOptions })}
      <div class="community-setting-row community-story-bind-row">
        <span>可见范围</span>
        <select data-field="community-compose-visibility">
          <option value="community_only" ${normalizeComposeVisibility(uiState.communityComposeVisibility) === "community_only" ? "selected" : ""}>本社区用户</option>
          <option value="public" ${normalizeComposeVisibility(uiState.communityComposeVisibility) === "public" ? "selected" : ""}>所有用户</option>
        </select>
      </div>
      <div class="community-setting-row"><span>同步到精华候选</span><button data-action="community-sync-toggle">${uiState.communityComposeSync ? "开启" : "关闭"}</button></div>
      ${uiState.communityGroupFeedback ? `<div class="msg-action-feedback">${escapeHtml(uiState.communityGroupFeedback)}</div>` : ""}
      <div class="community-compose-bottom-bar">
        <button class="ghost" data-action="community-compose-save-draft">存草稿</button>
        <button class="dynamic-publish-btn" data-action="publish-community-post" ${canPublish ? "" : "disabled"}>${uiState.communityPostPublished ? "发布中..." : "发布动态"}</button>
      </div>
      ${uiState.communityPostPublished ? `<div class="community-inline-success">✔ 发布成功 <button data-go="#/community/post/detail">去查看</button></div>` : ""}
      ${
        uiState.communityComposeMentionSheetOpen
          ? `
        <div class="community-compose-sheet-mask" data-action="community-compose-close-sheet">
          <div class="community-compose-sheet" data-action="noop">
            <header><h4>@成员</h4><button data-action="community-compose-close-sheet">完成</button></header>
            <div class="community-compose-sheet-list">
              ${
                mentionCandidates.length
                  ? mentionCandidates.map((m) => `
                <button data-action="community-compose-pick-mention" data-name="${escapeHtml(m.name)}">
                  <span class="avatar">${escapeHtml(m.avatar)}</span>
                  <em>${escapeHtml(m.name)}</em>
                </button>
              `).join("")
                  : `<p class="community-compose-sheet-empty">暂无可@好友（先去关注或互关）</p>`
              }
            </div>
          </div>
        </div>
      `
          : ""
      }
      ${
        uiState.communityComposeTopicSheetOpen
          ? `
        <div class="community-compose-sheet-mask" data-action="community-compose-close-sheet">
          <div class="community-compose-sheet" data-action="noop">
            <header><h4>#话题</h4><button data-action="community-compose-close-sheet">完成</button></header>
            <div class="community-compose-sheet-list">
              ${topicCandidates.map((topic) => `
                <button data-action="community-compose-pick-topic" data-topic="${escapeHtml(topic)}">
                  <span>#</span>
                  <em>${escapeHtml(topic)}</em>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `
          : ""
      }
      ${renderStoryBindSearchSheet()}
    </section>
  `);
}

function syncCommunityPublishButtonState() {
  const btn = document.querySelector("button[data-action='publish-community-post']");
  if (!(btn instanceof HTMLButtonElement)) return;
  const media = Array.isArray(uiState.communityComposeMedia) ? uiState.communityComposeMedia : [];
  const canPublish = (media.length > 0
    || Boolean(String(uiState.communityComposeText || uiState.communityComposeTitle || "").trim()))
    && !uiState.communityPostPublished;
  btn.disabled = !canPublish;
}

function syncDynamicPublishButtonState() {
  const btn = document.querySelector("button[data-action='publish-dynamic']");
  if (!(btn instanceof HTMLButtonElement)) return;
  const media = normalizeDynamicMediaItems(uiState.dynamicDraftMedia || []);
  const canPublish = (media.length > 0
    || Boolean(String(uiState.dynamicDraftText || uiState.dynamicDraftTitle || "").trim()))
    && !uiState.dynamicPublishing
    && !uiState.dynamicDraftMediaProcessing;
  btn.disabled = !canPublish;
}

function pageCommunityPostDetail() {
  const post = getSelectedCommunityPost();
  if (!post) return pageCommunityGroup();
  const meta = ensureCommunityPostMeta(post);
  const postId = String(post.id || "").trim();
  const communityCommentDraft = getCommunityCommentDraft(postId);
  if (postId && uiState.communityPostDetailLoadingId !== postId && meta && meta.comments.length === 0 && !uiState.communityPostDetailError) {
    uiState.communityPostDetailLoadingId = postId;
    void loadCommunityPostDetail(postId, { silent: true })
      .catch((error) => {
        uiState.communityPostDetailError = error instanceof Error ? error.message : "加载失败";
      })
      .finally(() => {
        if (uiState.communityPostDetailLoadingId === postId) uiState.communityPostDetailLoadingId = "";
        render();
      });
  }
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-post-detail">
        <header><span class="avatar user-avatar-click">${post.user.slice(0,1)}</span><div><strong>${post.user}</strong><small>${post.time} · ${getSelectedCommunity().name}</small></div></header>
        <h3>${post.title}</h3>
        <p>${post.text}</p>
        ${renderCommunityPostMedia(post)}
        ${post.story ? `<div class="community-story-link"><span>附加故事卡：${post.story}</span><button data-action="open-world-detail" data-id="${getSafeWorldId(post.storyId, 0)}">查看</button></div>` : ""}
        <footer class="community-post-toolbar">
          <button class="${meta.liked ? "active" : ""}" data-action="community-post-like" ${meta.likePending ? "disabled" : ""}>♡ ${formatCount(meta.likes)}</button>
          <button class="${meta.starred ? "active" : ""}" data-action="community-post-star" ${meta.starPending ? "disabled" : ""}>☆ ${formatCount(meta.stars)}</button>
          <button data-action="community-post-comment-focus">💬 ${formatCount(meta.commentsCount)}</button>
          <button data-action="community-post-share">↗ 分享 ${formatCount(meta.shares || 0)}</button>
        </footer>
      </article>
      <section class="world-comments ios-card">
        <div class="world-comments-head">
          <h3>共${formatMetricCount(meta.commentsCount || 0)}条评论</h3>
        </div>
        ${renderUnifiedCommentComposer({
          field: "community-comment",
          value: communityCommentDraft,
          submitAction: "community-post-comment-submit",
          placeholder: "说点什么...",
          submitting: Boolean(meta.commentSubmitting)
        })}
        ${uiState.communityPostDetailError ? `<p class="world-comments-error" style="color:#ef4444;">${escapeHtml(uiState.communityPostDetailError)}</p>` : ""}
        ${meta.commentError ? `<p class="world-comments-error">${escapeHtml(meta.commentError)}</p>` : ""}
        ${uiState.communityPostDetailLoadingId === postId ? `<p class="world-comments-loading">评论加载中...</p>` : ""}
        ${renderThreadCommentListWithControls({
          comments: meta.comments || [],
          state: meta || {},
          openReplyAction: "community-comment-open-reply",
          likeAction: "community-comment-like",
          deleteAction: "community-comment-delete",
          openMenuAction: "community-comment-open-menu",
          replyFromSheetAction: "community-comment-sheet-reply",
          copyFromSheetAction: "community-comment-sheet-copy",
          reportFromSheetAction: "community-comment-sheet-report",
          closeSheetAction: "community-comment-sheet-close",
          replyDraftField: "community-reply-draft",
          replyCancelAction: "community-comment-reply-cancel",
          replySubmitAction: "community-comment-reply-submit"
        })}
      </section>
    </section>
  `);
}

function pageCommunityUser() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-user-card">
        <div class="top">
          <span class="avatar">阿</span>
          <div>
            <h3>阿青</h3>
            <p>ID: drama_1024 · 记录航海细节与玩法心得</p>
          </div>
          <div class="actions"><button class="ghost">已关注</button><button class="primary">发私信</button></div>
        </div>
        <div class="stats"><span><b>8.4k</b> 笔记</span><span><b>268</b> 关注</span><span><b>1.3k</b> 粉丝</span></div>
        <div class="community-tab-switch"><button class="active">笔记</button><button>收藏</button><button>赞过</button></div>
      </article>
      <div class="user-feed-grid">
        ${new Array(6).fill(0).map(() => `<article class="user-feed-card"><div class="cover"></div><h4>雨夜档案：逆风局</h4><p>1.2k 赞 · 87 收藏</p></article>`).join("")}
      </div>
    </section>
  `);
}

function renderCommunityManageHeader(title, actionHtml = "") {
  return `
    <div class="community-manage-header">
      <button class="community-manage-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
      <h2>${title}</h2>
      ${actionHtml ? `<div class="community-manage-head-actions">${actionHtml}</div>` : `<div></div>`}
    </div>
  `;
}

function pageCommunityManage() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("社群管理")}
        <p class="sub">管理你创建的社群：成员、审核、公告与权限配置。</p>
        <div class="community-manage-list">
          <button data-go="#/community/manage/members">成员管理 <span>${uiState.communityCreatedMembers.length}人 ›</span></button>
          <button data-go="#/community/manage/review">入群审核 <span>${uiState.communityReviewQueue.length}条待处理 ›</span></button>
          <button data-go="#/community/manage/blacklist">黑名单 <span>${uiState.communityBlacklist.length}人 ›</span></button>
          <button data-go="#/community/manage/announcement">社群公告 <span>编辑 ›</span></button>
          <button data-go="#/community/manage/settings">社群设置 <span>›</span></button>
        </div>
        <button class="danger" data-action="community-open-dismiss-confirm">${uiState.communityDismissConfirm ? "再次确认解散社群" : "解散社群"}</button>
        ${uiState.communityDismissConfirm ? `<p class="sub">再次点击会进入解散确认页。</p>` : ""}
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageJoined() {
  const s = uiState.communityJoinedSettings;
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("我的社群管理")}
        <p class="sub">管理你加入的社群，支持隐身、免打扰、置顶与退出。</p>
        <div class="community-manage-list">
          <button data-go="#/community/manage/joined/members">查看群成员 <span>${uiState.communityJoinedMembers.length}人 ›</span></button>
          <button data-action="community-joined-toggle" data-key="hideInJoinedList">隐身加入 <span>${s.hideInJoinedList ? "已开启" : "关闭"} ›</span></button>
          <button data-action="community-joined-toggle" data-key="muteNotifications">消息免打扰 <span>${s.muteNotifications ? "已开启" : "关闭"} ›</span></button>
          <button data-action="community-joined-toggle" data-key="pinGroup">置顶该社群 <span>${s.pinGroup ? "已置顶" : "未置顶"} ›</span></button>
          <button data-action="community-joined-toggle" data-key="weeklyDigest">每周摘要提醒 <span>${s.weeklyDigest ? "已开启" : "关闭"} ›</span></button>
        </div>
        <button class="danger" data-action="community-quit-group">${s.hideInJoinedList ? "退出社群（隐身状态）" : "退出社群"}</button>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageJoinedMembers() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("群成员")}
        ${uiState.communityJoinedMembers
          .map(
            (m) => `
          <div class="community-member-item">
            <span class="avatar user-avatar-click" style="background:${m.color}">${m.name.slice(0,1)}</span>
            <div><h4>${m.name} · ${m.role}</h4><p>${m.intro}</p></div>
            <button data-action="community-member-message" data-name="${m.name}">私信</button>
          </div>
        `
          )
          .join("")}
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageMembers() {
  const members = uiState.communityCreatedMembers;
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("成员管理")}
        <input placeholder="搜索成员昵称/ID" />
        ${members
          .map((x) => {
            const isOwner = x.role === "群主";
            const isAdmin = x.role === "管理员";
            return `
            <div class="community-line-item">
              <strong>${x.name}（${x.role}）</strong>
              <div class="community-line-actions">
                ${
                  isOwner
                    ? `<button data-action="community-setting-stub" data-text="群主不可进行此操作">固定</button>`
                    : `<button data-action="community-created-member-toggle-admin" data-id="${x.id}">${isAdmin ? "取消管理" : "设为管理"}</button>`
                }
                ${
                  isOwner
                    ? ""
                    : `<button class="danger-text" data-action="community-created-member-remove" data-id="${x.id}">移出</button>`
                }
              </div>
            </div>
          `;
          })
          .join("")}
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageReview() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("入群审核")}
        ${
          uiState.communityReviewQueue.length
            ? uiState.communityReviewQueue
                .map(
                  (x) => `
              <div class="community-review-item">
                <p>${x.name} · ${x.note}</p>
                <div>
                  <button data-action="community-review-decline" data-id="${x.id}">拒绝</button>
                  <button class="primary" data-action="community-review-approve" data-id="${x.id}">通过</button>
                </div>
              </div>
            `
                )
                .join("")
            : `<p class="sub">当前没有待处理申请。</p>`
        }
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageBlacklist() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("黑名单")}
        <div class="community-tip danger-tip">被拉黑成员不可发帖/评论/入群</div>
        ${
          uiState.communityBlacklist.length
            ? uiState.communityBlacklist
                .map(
                  (x) => `
              <div class="community-line-item">
                <strong>${x.name}（${x.reason}）</strong>
                <button class="danger-text" data-action="community-blacklist-remove" data-id="${x.id}">解除 ›</button>
              </div>
            `
                )
                .join("")
            : `<p class="sub">黑名单为空。</p>`
        }
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageAnnouncement() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("社群公告", `<button data-action="save-community-announcement">保存</button>`)}
        <p class="sub">当前公告：本周六 20:30 组织社群语音活动，主题为高收益跑图路线。</p>
        <textarea data-field="community-announcement" placeholder="输入新公告内容...">${escapeHtml(uiState.communityAnnounceDraft)}</textarea>
        <button class="dynamic-publish-btn" data-action="save-community-announcement">发布公告</button>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageSettings() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("社群设置")}
        <div class="community-manage-list">
          <button data-action="community-setting-stub" data-text="社群名称修改已打开（后续接入）">社群名称 <span>月海航线 ›</span></button>
          <button data-action="community-setting-stub" data-text="入群方式设置已打开（后续接入）">入群方式 <span>需审核 ›</span></button>
          <button data-action="community-setting-stub" data-text="发帖权限已打开（后续接入）">发帖权限 <span>仅成员可发 ›</span></button>
          <button data-action="community-setting-stub" data-text="标签设置已打开（后续接入）">社群标签 <span>悬疑/跑图 ›</span></button>
          <button data-go="#/community/manage/transfer" class="danger-text">转让社群 <span>›</span></button>
        </div>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityManageTransfer() {
  const receiver = uiState.communityCreatedMembers.find((x) => x.id === uiState.communityTransferReceiverId);
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("转让社群", `<button class="danger-text" data-action="community-transfer-confirm">确认转让</button>`)}
        <div class="community-manage-list">
          <button data-go="#/community/manage/transfer/receiver">接收者 <span>${receiver ? `${receiver.name} ›` : "请选择成员 ›"}</span></button>
          <button data-go="#/community/manage/transfer/verify">验证方式 <span>${uiState.communityTransferMethod === "password" ? "输入登录密码" : "短信验证码"} ›</span></button>
        </div>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityTransferReceiver() {
  const candidates = uiState.communityCreatedMembers.filter((x) => x.role !== "群主");
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("选择接收者", `<button data-go="#/community/manage/transfer">确定</button>`)}
        ${candidates
          .map(
            (x) => `
          <div class="community-line-item">
            <strong>${x.name} · ${x.role}</strong>
            <button data-action="community-transfer-select-receiver" data-id="${x.id}">${uiState.communityTransferReceiverId === x.id ? "已选择" : "选择"}</button>
          </div>
        `
          )
          .join("")}
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityTransferVerify() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card">
        ${renderCommunityManageHeader("验证方式", `<button data-go="#/community/manage/transfer">下一步</button>`)}
        <div class="community-tab-switch">
          <button class="${uiState.communityTransferMethod === "password" ? "active" : ""}" data-action="community-transfer-method" data-method="password">登录密码</button>
          <button class="${uiState.communityTransferMethod === "sms" ? "active" : ""}" data-action="community-transfer-method" data-method="sms">短信验证码</button>
        </div>
        <input data-field="community-transfer-code" value="${escapeHtml(uiState.communityTransferCodeDraft)}" placeholder="${uiState.communityTransferMethod === "password" ? "请输入登录密码" : "请输入6位验证码"}" />
        <button class="dynamic-publish-btn" data-action="community-transfer-confirm">验证并继续</button>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function pageCommunityDismiss() {
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-manage-card danger-zone">
        ${renderCommunityManageHeader("确认解散社群")}
        <p class="sub">解散后将清空成员、帖子与审核记录，且操作不可恢复。</p>
        <input value="${uiState.communityTransferCodeDraft}" data-field="community-transfer-code" placeholder="输入 社群名-月海航线-确认" />
        <div class="row"><button data-go="#/community/manage">取消</button><button class="danger" data-action="community-dismiss-confirm">确认解散</button></div>
      </article>
      ${uiState.communityManageFeedback ? `<div class="msg-action-feedback">${uiState.communityManageFeedback}</div>` : ""}
    </section>
  `);
}

function getBackstageFeedByTab() {
  const merged = [...uiState.dynamicPosts, ...DYNAMIC_FEED];
  const unique = [];
  const seen = new Set();
  merged.forEach((item) => {
    const id = String(item?.id || "");
    if (!id || seen.has(id)) return;
    seen.add(id);
    unique.push(item);
  });
  const visibleList = unique.filter((item) => {
    if (!isDynamicItemHidden(item)) return true;
    return isMyDynamicItem(item) && uiState.dynamicTab === "我的";
  });
  const source = uiState.dynamicTab === "推荐"
    ? visibleList
    : visibleList.filter((item) => item.tab === uiState.dynamicTab);
  return source.slice(0, 30);
}

function renderBackstageHero() {
  const displayName = uiState.profile?.name || "Drama 用户";
  const displayHandle = uiState.profile?.handle || "@drama_user";
  const displayBio = uiState.backstageSignature || uiState.profile?.bio || "分享新鲜事...";
  const displayUserId = String(uiState.profile?.id || uiState.currentUserId || "").trim();
  const displayAvatarUrl = resolveAvatarUrlByIdentity(displayName, displayUserId);
  const customBg = String(uiState.backstageTopBackground || "").trim();
  const useMask = normalizeBackstageMaskValue(uiState.backstageTopBackgroundMask, true);
  const maskOpacity = customBg && useMask ? "0.38" : "0";
  const styleVars = [`--backstage-hero-mask-opacity:${maskOpacity}`];
  if (customBg) styleVars.push(`--backstage-hero-custom-bg:url("${escapeHtml(customBg)}")`);
  const heroStyle = `style='${styleVars.join(";")};'`;
  return `
    <header class="backstage-hero" ${heroStyle}>
      <div class="backstage-profile-row">
        <button
          class="backstage-avatar user-avatar-click"
          data-user="${escapeHtml(displayName)}"
          data-user-id="${escapeHtml(displayUserId)}"
          data-avatar-url="${escapeHtml(displayAvatarUrl || "")}"
        >${getAvatarText(displayName)}</button>
        <div class="backstage-profile-meta">
          <h2>${escapeHtml(displayName)}</h2>
          <p>${escapeHtml(displayHandle)}</p>
          <small>${escapeHtml(displayBio)}</small>
        </div>
      </div>
      <div class="backstage-shortcuts">
        <button data-go="#/messages/story/dynamic"><span>◉</span><em>动态</em></button>
        <button data-go="#/messages/story/album"><span>▦</span><em>相册</em></button>
        <button data-go="#/messages/story/stories"><span>✦</span><em>故事</em></button>
        <button data-action="open-backstage-settings"><span>⚙</span><em>设置</em></button>
      </div>
      <button class="backstage-composer-trigger" data-go="#/messages/story/publish">
        <span>分享新鲜事...</span>
        <em>＋</em>
      </button>
    </header>
  `;
}

function pageMessages() {
  const feed = getBackstageFeedByTab();
  return renderExploreShell(`
    <section class="dynamic-page">
      ${renderBackstageHero()}
      ${uiState.dynamicPublishFeedback ? `<div class="msg-action-feedback dynamic-publish-feedback">${escapeHtml(uiState.dynamicPublishFeedback)}</div>` : ""}

      <div class="dynamic-tabs">
        ${DYNAMIC_TABS.map((tab) => `<button class="${uiState.dynamicTab === tab ? "active" : ""}" data-action="set-dynamic-tab" data-tab="${tab}">${tab}</button>`).join("")}
      </div>

      <div class="dynamic-feed">
        ${feed.map((item) => renderDynamicCard(item)).join("")}
      </div>
    </section>
  `);
}

function pageBackstageDynamic() {
  const feed = getBackstageFeedByTab();
  return renderExploreShell(`
    <section class="dynamic-page">
      ${renderBackstageHero()}
      ${uiState.dynamicPublishFeedback ? `<div class="msg-action-feedback dynamic-publish-feedback">${escapeHtml(uiState.dynamicPublishFeedback)}</div>` : ""}
      <div class="dynamic-tabs">
        ${DYNAMIC_TABS.map((tab) => `<button class="${uiState.dynamicTab === tab ? "active" : ""}" data-action="set-dynamic-tab" data-tab="${tab}">${tab}</button>`).join("")}
      </div>
      <div class="dynamic-feed">
        ${feed.map((item) => renderDynamicCard(item)).join("")}
      </div>
    </section>
  `);
}

function pageBackstageAlbum() {
  const feed = getBackstageFeedByTab().filter((x) => x.type === "image");
  return renderExploreShell(`
    <section class="dynamic-page">
      ${renderBackstageHero()}
      <div class="dynamic-tabs">
        ${DYNAMIC_TABS.map((tab) => `<button class="${uiState.dynamicTab === tab ? "active" : ""}" data-action="set-dynamic-tab" data-tab="${tab}">${tab}</button>`).join("")}
      </div>
      <div class="backstage-album-grid">
        ${
          feed.length
            ? feed
                .map(
                  (item) => `
            <article class="backstage-album-card" data-action="open-dynamic-detail" data-id="${item.id}" data-user="${item.author}">
              <div class="cover"></div>
              <h4>${escapeHtml(item.title || "图片动态")}</h4>
              <p>${escapeHtml(item.date || "刚刚")}</p>
            </article>
          `
                )
                .join("")
            : `<div class="me-content-empty-tip">暂无图片动态</div>`
        }
      </div>
    </section>
  `);
}

function pageBackstageStories() {
  const feed = getBackstageFeedByTab().filter((x) => x.type === "story");
  return renderExploreShell(`
    <section class="dynamic-page">
      ${renderBackstageHero()}
      <div class="dynamic-tabs">
        ${DYNAMIC_TABS.map((tab) => `<button class="${uiState.dynamicTab === tab ? "active" : ""}" data-action="set-dynamic-tab" data-tab="${tab}">${tab}</button>`).join("")}
      </div>
      <div class="backstage-story-list">
        ${
          feed.length
            ? feed
                .map(
                  (item) => `
            <article class="backstage-story-item" data-action="open-dynamic-detail" data-id="${item.id}" data-user="${item.author}">
              <div class="copy">
                <h4>${escapeHtml(item.title || "故事动态")}</h4>
                <p>${escapeHtml(item.text || "")}</p>
                <small>${escapeHtml(item.author || "我")} · ${escapeHtml(item.date || "刚刚")}</small>
              </div>
              <button data-action="open-world-detail" data-id="${getSafeWorldId(item.worldId || "", 0)}">查看故事</button>
            </article>
          `
                )
                .join("")
            : `<div class="me-content-empty-tip">暂无故事动态</div>`
        }
      </div>
    </section>
  `);
}

function pageBackstagePublish() {
  const storyOptions = getStoryBindOptions();
  const media = normalizeDynamicMediaItems(uiState.dynamicDraftMedia || []);
  const visibility = normalizeDynamicVisibility(uiState.dynamicDraftVisibility);
  const allowComments = uiState.dynamicDraftAllowComments !== false;
  const canPublish = (media.length > 0
    || Boolean(String(uiState.dynamicDraftText || uiState.dynamicDraftTitle || "").trim()))
    && !uiState.dynamicPublishing
    && !uiState.dynamicDraftMediaProcessing;
  const mentionTags = Array.from(
    new Set(
      String(uiState.dynamicDraftText || "")
        .match(/@([^\s#@]+)/g)
        ?.map((x) => String(x || "").replace(/^@/, "").trim())
        .filter(Boolean) || []
    )
  ).slice(0, 12);
  const topicTags = Array.from(
    new Set(
      String(uiState.dynamicDraftText || "")
        .match(/#([^\s#@]+)/g)
        ?.map((x) => String(x || "").replace(/^#/, "").trim())
        .filter(Boolean) || []
    )
  ).slice(0, 12);
  return renderExploreShell(`
    <section class="community-page community-form community-compose-page backstage-compose-page">
      <div class="community-compose-media-strip">
        ${media
          .map(
            (item) => `
          <article class="community-compose-media-card">
            ${
              item.mediaType === "video"
                ? `<video src="${escapeHtml(item.url)}" muted playsinline preload="metadata"></video>`
                : `<img src="${escapeHtml(item.url)}" alt="已选择媒体" loading="lazy" />`
            }
            <button data-action="dynamic-remove-media" data-id="${item.id}" aria-label="删除媒体">×</button>
          </article>
        `
          )
          .join("")}
        ${media.length < 9 ? `<button class="community-compose-media-add" data-action="dynamic-pick-media">＋</button>` : ""}
      </div>
      <input class="community-cover-file-input" type="file" accept="image/*,video/*" data-field="dynamic-media-file" multiple />
      <input class="community-compose-title" data-field="dynamic-title" value="${escapeHtml(uiState.dynamicDraftTitle)}" placeholder="添加标题" />
      <textarea data-field="dynamic-text" placeholder="分享你的新发现、攻略或招募信息...">${escapeHtml(uiState.dynamicDraftText)}</textarea>
      <div class="community-compose-picked-row">
        ${topicTags.map((x) => `<span class="topic">#${escapeHtml(x)}</span>`).join("")}
        ${mentionTags.map((x) => `<span class="mention">@${escapeHtml(x)}</span>`).join("")}
      </div>
      <div class="community-chip-row community-compose-toolbar">
        <button data-action="dynamic-compose-insert-mention">@成员</button>
        <button data-action="dynamic-compose-insert-topic">#话题</button>
      </div>
      ${renderStoryBindSettingRow({ target: "dynamic", options: storyOptions })}
      <div class="community-setting-row community-story-bind-row">
        <span>可见范围</span>
        <select data-field="dynamic-visibility-select">
          <option value="public" ${visibility === "public" ? "selected" : ""}>所有人</option>
          <option value="followers" ${visibility === "followers" ? "selected" : ""}>粉丝</option>
          <option value="private" ${visibility === "private" ? "selected" : ""}>仅自己</option>
        </select>
      </div>
      <div class="community-setting-row"><span>允许评论</span><button data-action="dynamic-set-allow-comments" data-value="${allowComments ? "off" : "on"}">${allowComments ? "开启" : "关闭"}</button></div>
      ${uiState.dynamicShareFeedback ? `<div class="msg-action-feedback">${escapeHtml(uiState.dynamicShareFeedback)}</div>` : ""}
      <div class="community-compose-bottom-bar">
        <button class="ghost" data-action="dynamic-save-draft">存草稿</button>
        <button class="dynamic-publish-btn" data-action="publish-dynamic" ${canPublish ? "" : "disabled"}>${uiState.dynamicPublishing ? "发布中..." : "发布动态"}</button>
      </div>
      ${renderStoryBindSearchSheet()}
    </section>
  `);
}

function pageBackstageSettings() {
  const signatureValue = uiState.backstageSignatureDraft || uiState.backstageSignature || uiState.profile?.bio || "";
  const backgroundValue = uiState.backstageTopBackgroundDraft || uiState.backstageTopBackground || "";
  const useMask = normalizeBackstageMaskValue(uiState.backstageTopBackgroundMaskDraft, true);
  return renderExploreShell(`
    <section class="backstage-setting-page">
      <article class="backstage-setting-card">
        <label>主页签名</label>
        <textarea data-field="backstage-signature" placeholder="输入幕布主页签名">${escapeHtml(signatureValue)}</textarea>
      </article>
      <article class="backstage-setting-card">
        <label>顶部背景图</label>
        <div class="backstage-bg-upload-row">
          <button class="backstage-bg-preview-btn" data-action="backstage-top-bg-upload" aria-label="上传顶部背景图">
            ${
              backgroundValue
                ? `<img src="${escapeHtml(backgroundValue)}" alt="顶部背景预览" />`
                : `<span>封面预览</span>`
            }
          </button>
          <div class="backstage-bg-upload-copy">
            <button class="user-edit-btn subtle" data-action="backstage-top-bg-upload">${uiState.backstageTopBgProcessing ? "处理中..." : "上传背景"}</button>
            <small>建议横向图片，保存后将同步到幕后主页头图</small>
          </div>
        </div>
        <input class="backstage-top-bg-file-input" type="file" accept="image/*" data-field="backstage-top-bg-file" />
        <div class="backstage-setting-row">
          <span>背景蒙版</span>
          <div class="backstage-inline-switch">
            <button
              class="${useMask ? "active" : ""}"
              data-action="backstage-top-bg-mask"
              data-value="on"
            >开启</button>
            <button
              class="${useMask ? "" : "active"}"
              data-action="backstage-top-bg-mask"
              data-value="off"
            >关闭</button>
          </div>
        </div>
      </article>
      ${uiState.meFeedback ? `<div class="msg-action-feedback">${escapeHtml(uiState.meFeedback)}</div>` : ""}
    </section>
  `);
}

function pageMessageCenter() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看消息", "消息页包含联系人、群聊和通知。登录后可查看并回复。");
  }
  normalizeMessageInboxInPlace();

  const availableTabs = ["全部", "私聊", "卡片", "群聊", "通知"];
  const tab = availableTabs.includes(uiState.messageTab) ? uiState.messageTab : "全部";
  if (uiState.messageTab !== tab) uiState.messageTab = tab;
  const orderedInbox = orderMessageInboxWithPinned(MESSAGE_INBOX);
  const filtered = orderedInbox.filter((item) => {
    const isStoryCardChat = isStoryConversationInboxItem(item);
    let tabOk = true;
    if (tab === "私聊") {
      tabOk = item.type === "私聊" && !isStoryCardChat;
    } else if (tab === "卡片") {
      tabOk = isStoryCardChat;
    } else if (tab !== "全部") {
      tabOk = item.type === tab;
    }
    return tabOk;
  });
  const pinnedItems = filtered.filter((item) => isMessageThreadPinned(item?.id));
  const normalItems = filtered.filter((item) => !isMessageThreadPinned(item?.id));
  const groupedMessages = groupMessageInboxByTime(normalItems);
  const hasUnread = MESSAGE_INBOX.some((item) => Number(item?.badge || 0) > 0);

  return renderExploreShell(`
    <section class="msg-home">
      <div class="msg-head">
        <button class="me-inline-back unified-back-btn msg-head-back" data-action="go-back" aria-label="返回">←</button>
        <h2>消息</h2>
        <div class="msg-head-actions">
          <button data-action="open-unified-search" data-scope="messages" aria-label="搜索">⌕</button>
          <button data-action="toggle-message-plus" aria-label="更多">＋</button>
          ${
            uiState.messagesPlusOpen
              ? `
            <div class="msg-plus-menu" data-action="noop">
              <button data-action="message-menu-action" data-label="创建群聊">创建群聊</button>
              <button data-action="message-menu-action" data-label="添加好友">添加好友</button>
              <button data-action="message-menu-action" data-label="群聊广场">群聊广场</button>
            </div>
          `
              : ""
          }
        </div>
      </div>
      <div class="msg-quick-grid">
        <article data-go="#/messages/likes">
          <span class="msg-quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 20.5s-7-4.4-7-9.5A4 4 0 0 1 9 7.1c1.2 0 2.2.5 3 1.5.8-1 1.8-1.5 3-1.5a4 4 0 0 1 4 3.9c0 5.1-7 9.5-7 9.5z"></path>
            </svg>
          </span>
          <em>赞和收藏</em>
        </article>
        <article data-go="#/messages/follows">
          <span class="msg-quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="9" cy="8" r="2.8"></circle>
              <path d="M3.5 18a5.5 5.5 0 0 1 11 0"></path>
              <path d="M16 9.5h4"></path>
              <path d="M18 7.5v4"></path>
            </svg>
          </span>
          <em>新增关注</em>
        </article>
        <article data-go="#/messages/comments">
          <span class="msg-quick-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M4.5 6.5h15v9h-8l-4 3v-3h-3z"></path>
              <circle cx="9" cy="11" r="0.8"></circle>
              <circle cx="12" cy="11" r="0.8"></circle>
              <circle cx="15" cy="11" r="0.8"></circle>
            </svg>
          </span>
          <em>评论和@</em>
        </article>
      </div>
      ${uiState.messageFeedback ? `<div class="msg-action-feedback">${uiState.messageFeedback}</div>` : ""}

      <div class="msg-tabs-row">
        <div class="msg-tabs">
          ${availableTabs.map((x) => `<button class="${tab === x ? "active" : ""}" data-action="message-tab" data-tab="${x}">${x}</button>`).join("")}
        </div>
        <button class="msg-mark-read-btn" data-action="message-mark-all-read" ${hasUnread ? "" : "disabled"}>一键已读</button>
      </div>

      <div class="msg-list">
        ${
          pinnedItems.length
            ? `
          <section class="msg-group msg-pinned-group">
            <header class="msg-group-divider">
              <span>置顶聊天</span>
            </header>
            ${pinnedItems
              .map(
                (item) => `
                <article class="msg-item msg-touch-target is-pinned" data-action="open-message-thread" data-id="${escapeHtml(item.id || "")}" data-conversation-id="${escapeHtml(item.id || "")}">
                  ${renderMessageConversationAvatarNode(item, "avatar")}
                  <div class="copy">
                    <h4>${escapeHtml(item.name || "")}</h4>
                    <p>${escapeHtml(item.preview || "")}</p>
                  </div>
                  <div class="meta">
                    <time>${escapeHtml(item.time || "")}</time>
                    ${Number(item.badge || 0) > 0 ? `<span>${formatMessageUnreadCount(item.badge)}</span>` : ""}
                  </div>
                </article>
              `
              )
              .join("")}
          </section>
        `
            : ""
        }
        ${
          pinnedItems.length || groupedMessages.length
            ? groupedMessages.map((group) => `
              <section class="msg-group">
                <header class="msg-group-divider">
                  <span>${group.title}</span>
                </header>
                ${group.items
                  .map(
                    (item) => `
                    <article class="msg-item msg-touch-target ${isMessageThreadPinned(item.id) ? "is-pinned" : ""}" data-action="open-message-thread" data-id="${escapeHtml(item.id || "")}" data-conversation-id="${escapeHtml(item.id || "")}">
                      ${renderMessageConversationAvatarNode(item, "avatar")}
                      <div class="copy">
                        <h4>${escapeHtml(item.name || "")}</h4>
                        <p>${escapeHtml(item.preview || "")}</p>
                      </div>
                      <div class="meta">
                        <time>${escapeHtml(item.time || "")}</time>
                        ${Number(item.badge || 0) > 0 ? `<span>${formatMessageUnreadCount(item.badge)}</span>` : ""}
                      </div>
                    </article>
                  `
                  )
                  .join("")}
              </section>
            `).join("")
            : `<div class="msg-list-empty">当前暂无会话</div>`
        }
      </div>
      ${
        uiState.messageCardLongPressMenuOpen
          ? `
        <div class="msg-card-action-mask" data-action="close-message-card-longpress-menu">
          <div class="msg-card-action-menu" data-action="noop" style="left:${Number(uiState.messageCardLongPressAnchorX || 0)}px;top:${Number(uiState.messageCardLongPressAnchorY || 0)}px;--pointer-left:${Number(uiState.messageCardLongPressPointerOffsetX || 0)}px;">
            <button class="msg-card-action-btn unread" data-action="message-card-mark-unread">标记未读</button>
            <button class="msg-card-action-btn pin" data-action="message-card-pin-chat">${isMessageThreadPinned(uiState.messageCardLongPressConversationId) ? "取消置顶" : "置顶聊天"}</button>
            <button class="msg-card-action-btn delete" data-action="message-card-delete-chat">删除聊天</button>
          </div>
          ${
            uiState.messageCardDeleteConfirmOpen
              ? `
            <div class="dm-clear-confirm-mask" data-action="message-card-delete-cancel">
              <div class="dm-clear-confirm-modal" data-action="noop">
                <h4>确认删除该聊天？</h4>
                <p>删除后仅在你的消息列表移除，对方仍可看到历史消息。</p>
                <div class="dm-clear-confirm-actions">
                  <button data-action="message-card-delete-cancel">取消</button>
                  <button class="danger" data-action="message-card-delete-confirm">确认删除</button>
                </div>
              </div>
            </div>
          `
              : ""
          }
        </div>
      `
          : ""
      }
    </section>
  `);
}

function pageMessageLikes() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看赞和收藏", "同步互动记录，不错过每一次被喜欢。");
  }
  return renderExploreShell(`
    <section class="msg-notice-page">
      <header class="msg-notice-head">
        <div class="msg-notice-title">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>收到的赞和收藏</h2>
        </div>
        <p>最近 7 天互动</p>
      </header>
      <div class="msg-notice-list">
        ${MESSAGE_LIKES.map((item) => `
          <article class="msg-notice-item">
            <span class="avatar user-avatar-click" data-user="${escapeHtml(item.user || "")}" data-user-id="${escapeHtml(item.userId || "")}" data-avatar-url="${escapeHtml(item.avatarUrl || "")}">${item.user.slice(0, 1)}</span>
            <div class="msg-notice-copy">
              <h4>${item.user}</h4>
              <p>${item.action} · ${item.date}</p>
              <small data-action="message-like-thanks" data-id="${item.id}" data-user="${item.user}" data-user-id="${item.userId || ""}">${item.note}</small>
            </div>
            <img src="${item.cover}" alt="${item.user}互动封面" data-action="message-open-content" data-world="${item.worldId}" data-post-id="${item.targetId || ""}" data-target-type="${item.targetType || ""}" />
          </article>
        `).join("")}
      </div>
    </section>
  `);
}

function pageMessageFollows() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看新增关注", "获取回关提醒，快速建立创作关系。");
  }
  return renderExploreShell(`
    <section class="msg-notice-page">
      <header class="msg-notice-head">
        <div class="msg-notice-title">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>新增关注</h2>
        </div>
        <p>回关后更容易触达彼此更新</p>
      </header>
      <div class="msg-notice-list">
        ${MESSAGE_NEW_FOLLOWS.map((item) => `
          <article class="msg-notice-item follow">
            <span class="avatar user-avatar-click" data-user="${escapeHtml(item.user || "")}" data-user-id="${escapeHtml(item.userId || "")}" data-avatar-url="${escapeHtml(item.avatarUrl || "")}">${item.user.slice(0, 1)}</span>
            <div class="msg-notice-copy">
              <h4>${item.user}</h4>
              <p>${item.intro} · ${item.date}</p>
            </div>
            <button class="msg-follow-btn" data-action="message-follow-action" data-id="${item.id}" data-user="${item.user}" data-user-id="${item.userId || ""}" data-label="${uiState.messageFollowActions[item.id] || item.action}">${uiState.messageFollowActions[item.id] || item.action}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `);
}

function pageMessageComments() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看评论和@", "及时回复互动，保持你的社群活跃度。");
  }
  return renderExploreShell(`
    <section class="msg-notice-page">
      <header class="msg-notice-head">
        <div class="msg-notice-title">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>收到的评论和@</h2>
        </div>
        <p>按时间倒序</p>
      </header>
      <div class="msg-comment-list">
        ${MESSAGE_COMMENTS.map((item) => `
          <article class="msg-comment-item">
            <div class="msg-comment-top">
              <span class="avatar user-avatar-click" data-user="${escapeHtml(item.user || "")}" data-user-id="${escapeHtml(item.userId || "")}" data-avatar-url="${escapeHtml(item.avatarUrl || "")}">${item.user.slice(0, 1)}</span>
              <div class="msg-notice-copy">
                <h4>${item.user}</h4>
                <p>${item.action} · ${item.date}</p>
              </div>
              <img src="${item.cover}" alt="${item.user}评论封面" data-action="message-open-content" data-world="${item.worldId}" data-post-id="${item.postId || ""}" data-target-type="${item.targetType || ""}" />
            </div>
            <p class="msg-comment-text">${item.text}</p>
            <div class="msg-comment-reply">${item.reply}</div>
            <footer><button data-action="message-comment-like" data-id="${item.id}" data-user="${item.user}">${uiState.messageCommentLikes[item.id] ? "♥ 已赞" : "♡ 赞"}</button><button data-action="message-comment-reply" data-id="${item.id}" data-user="${item.user}">↩ 回复</button></footer>
            ${
              uiState.messageReplyTargetId === item.id
                ? `
              ${renderUnifiedCommentComposer({
                field: "message-reply-draft",
                value: getMessageReplyDraft(item.id),
                submitAction: "message-comment-reply-send",
                placeholder: `回复 ${item.user}...`,
                containerClass: "msg-comment-inline-composer",
                submitAttrs: `data-id="${escapeHtml(item.id)}" data-user="${escapeHtml(item.user)}"`
              })}
            `
                : ""
            }
          </article>
        `).join("")}
      </div>
    </section>
  `);
}

function renderDynamicCard(item) {
  const meta = ensureDynamicMeta(item);
  const followMeta = resolveDynamicAuthorFollowMeta(item);
  const isMine = followMeta.isMine;
  const hidden = isDynamicItemHidden(item);
  const mediaItems = normalizeDynamicMediaItems(item.mediaItems || item.media_items || item.mediaUrls || item.media_urls);
  const imageItems = mediaItems.filter((x) => x.mediaType === "image");
  const videoItem = mediaItems.find((x) => x.mediaType === "video") || null;
  const boundStory = resolveDynamicBoundStoryMeta(item);
  const media =
    item.type === "image" && imageItems.length > 0
      ? `
    <div class="dynamic-media image-grid">
      ${imageItems.slice(0, 3).map((m) => `<div><img src="${escapeHtml(m.url)}" alt="动态图片" loading="lazy" /></div>`).join("")}
    </div>
  `
      : item.type === "video" && videoItem
        ? `
    <div class="dynamic-media video-cover">
      <video src="${escapeHtml(videoItem.url)}" muted playsinline preload="metadata"></video>
      <span>▶ 视频</span>
    </div>
  `
        : item.type === "story"
          ? `
    <div class="dynamic-media story-share" data-action="open-world-detail" data-id="${escapeHtml(String(boundStory?.worldId || item.worldId || "").trim())}">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
      <button data-action="open-world-detail" data-id="${escapeHtml(String(boundStory?.worldId || item.worldId || "").trim())}">去开刷</button>
    </div>
  `
          : "";
  const storyBindEntry = boundStory
    ? `
    <div class="community-story-link">
      <span>附加故事卡：${escapeHtml(boundStory.title)}</span>
      <button data-action="open-world-detail" data-id="${escapeHtml(boundStory.worldId)}">查看</button>
    </div>
  `
    : "";

  return `
    <article
      class="dynamic-card ${item.type}"
      data-action="open-dynamic-detail"
      data-id="${item.id}"
      data-user="${escapeHtml(followMeta.authorName)}"
      data-user-id="${escapeHtml(followMeta.authorId)}"
    >
      <header class="dynamic-user">
        <span class="avatar user-avatar-click" data-user="${escapeHtml(followMeta.authorName)}" data-user-id="${escapeHtml(followMeta.authorId)}">${followMeta.authorName.slice(0, 1)}</span>
        <div class="dynamic-user-copy">
          <strong>${escapeHtml(followMeta.authorName)}</strong>
          <small>${item.handle} · ${item.time}${isMine && hidden ? ' · <em class="dynamic-hidden-mark">已隐藏</em>' : ""}</small>
        </div>
        ${
          !isMine
            ? `<button
                class="msg-follow-btn dynamic-follow-btn ${followMeta.followedByMe ? "ghost" : ""}"
                data-action="toggle-world-author-follow"
                data-user="${escapeHtml(followMeta.authorName)}"
                data-user-id="${escapeHtml(followMeta.authorId)}"
              >${followMeta.followedByMe ? "已关注" : "关注"}</button>`
            : ""
        }
      </header>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
      ${media}
      ${storyBindEntry}
      <div class="dynamic-tags">${item.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
      <footer class="dynamic-meta">
        <span class="dynamic-meta-item"><i>♡</i><b>${formatCount(meta.likes)}</b></span>
        <span class="dynamic-meta-item"><i>💬</i><b>${formatCount(meta.commentsCount)}</b></span>
      </footer>
    </article>
  `;
}

function renderMessageGuestState(title, desc) {
  return renderExploreShell(`
    <section class="msg-guest-page">
      <article class="msg-guest-hero">
        <div class="msg-guest-kicker">消息中心</div>
        <h2>${title}</h2>
        <p>${desc}</p>
        <div class="msg-guest-features">
          <span>私信会话同步</span>
          <span>互动提醒聚合</span>
          <span>未读状态管理</span>
        </div>
        <div class="msg-guest-actions">
          <button class="dynamic-publish-btn" data-action="open-login-modal">立即登录</button>
          <button class="msg-guest-secondary" data-go="#/theater/home">先看看首页</button>
        </div>
      </article>
    </section>
  `);
}

function pageDynamicDetail() {
  const item = getDynamicById(uiState.selectedDynamicId);
  if (!item) return pageMessages();
  const meta = ensureDynamicMeta(item);
  const dynamicCommentDraft = getDynamicCommentDraft(item?.id);
  const followMeta = resolveDynamicAuthorFollowMeta(item);
  const isMine = followMeta.isMine;
  const hidden = isDynamicItemHidden(item);
  const likeFxClass = isWorldActionFxActive("like") ? "tap-pop" : "";
  const commentFxClass = isWorldActionFxActive("comment") ? "tap-pop" : "";
  const shareFxClass = isWorldActionFxActive("share") ? "tap-pop" : "";
  ensureDynamicCommentsLoaded(item);

  const mediaItems = normalizeDynamicMediaItems(item.mediaItems || item.media_items || item.mediaUrls || item.media_urls);
  const imageItems = mediaItems.filter((x) => x.mediaType === "image");
  const videoItem = mediaItems.find((x) => x.mediaType === "video") || null;
  const boundStory = resolveDynamicBoundStoryMeta(item);
  const hero =
    item.type === "image" && imageItems.length > 0
      ? `<div class="dynamic-detail-hero image">${imageItems.map((m) => `<div><img src="${escapeHtml(m.url)}" alt="动态图片" loading="lazy" /></div>`).join("")}</div>`
      : item.type === "video" && videoItem
        ? `<div class="dynamic-detail-hero video"><video src="${escapeHtml(videoItem.url)}" controls playsinline preload="metadata"></video></div>`
        : item.type === "story"
          ? `<div class="dynamic-detail-hero story"><h3>${item.title}</h3><p>${item.text}</p><button data-action="open-world-detail" data-id="${escapeHtml(String(boundStory?.worldId || item.worldId || "").trim())}">去玩这个故事</button></div>`
          : "";
  const storyBindEntry = boundStory
    ? `<div class="community-story-link"><span>附加故事卡：${escapeHtml(boundStory.title)}</span><button data-action="open-world-detail" data-id="${escapeHtml(boundStory.worldId)}">查看</button></div>`
    : "";

  return renderExploreShell(`
    <section class="dynamic-detail-page">
      <div class="dynamic-detail-card" data-user="${escapeHtml(followMeta.authorName)}" data-user-id="${escapeHtml(followMeta.authorId)}">
        <header class="dynamic-user">
          <span class="avatar user-avatar-click" data-user="${escapeHtml(followMeta.authorName)}" data-user-id="${escapeHtml(followMeta.authorId)}">${followMeta.authorName.slice(0, 1)}</span>
          <div class="dynamic-user-copy">
            <strong>${escapeHtml(followMeta.authorName)}</strong>
            <small>${item.handle} · ${item.time}${isMine && hidden ? ' · <em class="dynamic-hidden-mark">已隐藏</em>' : ""}</small>
          </div>
          ${
            isMine
              ? `
            <div class="dynamic-detail-owner-menu-wrap">
              <button class="dynamic-detail-owner-menu-btn" data-action="toggle-dynamic-detail-menu" aria-label="更多操作">⋯</button>
              ${
                uiState.dynamicDetailMenuOpen
                  ? `
                <div class="dynamic-detail-owner-menu">
                  <button data-action="dynamic-detail-toggle-hide" ${uiState.dynamicDetailActionLoading ? "disabled" : ""}>${hidden ? "取消隐藏" : "隐藏"}</button>
                  <button class="danger" data-action="dynamic-detail-delete" ${uiState.dynamicDetailActionLoading ? "disabled" : ""}>删除</button>
                </div>
              `
                  : ""
              }
            </div>
          `
              : `<button
                  class="msg-follow-btn dynamic-follow-btn ${followMeta.followedByMe ? "ghost" : ""}"
                  data-action="toggle-world-author-follow"
                  data-user="${escapeHtml(followMeta.authorName)}"
                  data-user-id="${escapeHtml(followMeta.authorId)}"
                >${followMeta.followedByMe ? "已关注" : "关注"}</button>`
          }
        </header>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        ${hero}
        ${storyBindEntry}
        <div class="dynamic-tags">${item.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
        <section class="world-author-inline world-author-inline-hero dynamic-detail-inline-actions">
          <div class="world-author-inline-strip">
            <button
              class="world-author-action-ghost ${meta.liked ? "active" : ""} ${likeFxClass}"
              data-action="toggle-dynamic-like"
              ${meta.liking ? "disabled" : ""}
            ><span class="icon-like-outline" aria-hidden="true"></span> 赞 ${formatCount(meta.likes)}</button>
            <button
              class="world-author-action-ghost ${commentFxClass}"
              data-action="focus-dynamic-comment"
            >💬 评论 ${formatCount(meta.commentsCount)}</button>
            <button
              class="world-author-action-ghost ${shareFxClass}"
              data-action="share-dynamic"
            >↗ 分享</button>
          </div>
        </section>
        ${uiState.dynamicShareFeedback ? `<p class="dynamic-share-feedback">${uiState.dynamicShareFeedback}</p>` : ""}
      </div>

      <section class="world-comments ios-card">
        <div class="world-comments-head">
          <h3>共${formatMetricCount(meta.commentsCount || 0)}条评论</h3>
        </div>
        ${renderUnifiedCommentComposer({
          field: "dynamic-comment",
          value: dynamicCommentDraft,
          submitAction: "submit-dynamic-comment",
          placeholder: "说点什么...",
          submitting: Boolean(meta.commentSubmitting)
        })}
        ${meta.commentsLoading ? `<p class="world-comments-loading">评论加载中...</p>` : ""}
        ${meta.commentError ? `<p class="world-comments-error">${escapeHtml(meta.commentError)}</p>` : ""}
        ${renderThreadCommentListWithControls({
          comments: meta.comments || [],
          state: meta || {},
          openReplyAction: "dynamic-comment-open-reply",
          likeAction: "dynamic-comment-like",
          deleteAction: "dynamic-comment-delete",
          openMenuAction: "dynamic-comment-open-menu",
          replyFromSheetAction: "dynamic-comment-sheet-reply",
          copyFromSheetAction: "dynamic-comment-sheet-copy",
          reportFromSheetAction: "dynamic-comment-sheet-report",
          closeSheetAction: "dynamic-comment-sheet-close",
          replyDraftField: "dynamic-reply-draft",
          replyCancelAction: "dynamic-comment-reply-cancel",
          replySubmitAction: "dynamic-comment-reply-submit"
        })}
      </section>
    </section>
  `);
}

function pageMe() {
  if (!uiState.isLoggedIn) {
    return renderExploreShell(`
      <section class="me-page">
        <article class="me-hero me-guest">
          <h2>登录后开启你的个性化空间</h2>
          <p>同步创作记录、收藏偏好和通知设置，持续优化你的 Drama 体验。</p>
          <div class="me-guest-actions">
            <button class="dynamic-publish-btn" data-action="open-login-modal">立即登录</button>
            <button class="msg-guest-secondary" data-go="#/theater/home">先浏览首页</button>
          </div>
        </article>
      </section>
    `);
  }
  const meStats = uiState.meStats && typeof uiState.meStats === "object"
    ? uiState.meStats
    : { storyCount: 0, likedCount: 0, fansCount: 0 };
  const meWorks = Array.isArray(ME_CONTENT_LIBRARY?.works) ? ME_CONTENT_LIBRARY.works : [];
  const maybeEmptyMePage = (
    Number(meStats.storyCount || 0) <= 0
    && Number(meStats.likedCount || 0) <= 0
    && Number(meStats.fansCount || 0) <= 0
    && meWorks.length === 0
  );
  if (maybeEmptyMePage && uiState.currentUserId && (Date.now() - mePageAutoRecoverAt) > 8_000) {
    mePageAutoRecoverAt = Date.now();
    void fetchBootstrapSection("me", uiState.currentUserId, { force: true })
      .then(() => render())
      .catch(() => {});
  }
  const viewedId = String(uiState.meViewedUserId || "").trim();
  const viewedName = String(uiState.meViewedUserName || "").trim();
  const viewingOther = Boolean(
    (viewedId && viewedId !== uiState.currentUserId)
    || (viewedName && viewedName !== uiState.profile.name)
  );
  const viewedProfile = viewingOther
    ? buildAuthorProfileByName(viewedName || AUTHOR_DIRECTORY[viewedId]?.name || "Drama 用户", viewedId)
    : null;
  if (viewingOther && viewedProfile) {
    uiState.modalProfile = viewedProfile;
    uiState.isFollowingAuthor = Boolean(viewedProfile.isFollowedByMe);
  }

  const requestedTab = ["drafts", "works", "likes", "favorites", "history"].includes(uiState.meContentTab)
    ? uiState.meContentTab
    : "works";
  const tab = viewingOther && requestedTab === "drafts" ? "works" : requestedTab;
  if (!uiState.meContentVisibleLimitByTab || typeof uiState.meContentVisibleLimitByTab !== "object") {
    uiState.meContentVisibleLimitByTab = {
      drafts: ME_TAB_RENDER_LIMIT_INITIAL,
      works: ME_TAB_RENDER_LIMIT_INITIAL,
      likes: ME_TAB_RENDER_LIMIT_INITIAL,
      favorites: ME_TAB_RENDER_LIMIT_INITIAL,
      history: ME_TAB_RENDER_LIMIT_INITIAL
    };
  }
  const rawVisibleLimit = Number(uiState.meContentVisibleLimitByTab[tab] || ME_TAB_RENDER_LIMIT_INITIAL);
  const visibleLimit = Math.max(ME_TAB_RENDER_LIMIT_INITIAL, Math.min(120, rawVisibleLimit));
  const syncExpired = (Date.now() - Number(uiState.workshopLastSyncAt || 0)) > WORKSHOP_SYNC_TTL_MS;
  if (
    !viewingOther
    && uiState.isLoggedIn
    && uiState.currentUserId
    && !uiState.workshopSyncInFlight
    && (uiState.workshopCardsLoadedForUser !== uiState.currentUserId || syncExpired)
  ) {
    void syncWorkshopCardsFromApi({ silent: true });
  }
  const creatorWorks = buildCreatorWorks();
  const draftCreatorWorks = creatorWorks.filter((x) => x.status !== "published");
  const feedWorks = Array.isArray(ME_CONTENT_LIBRARY.works) ? ME_CONTENT_LIBRARY.works : [];
  const feed = ME_CONTENT_LIBRARY[tab] || [];
  const ownFeed = tab === "works"
    ? feed
      .filter((x) => {
        const id = String(x.id || "").trim();
        const status = String(x.status || "").trim();
        const isDraft = Boolean(x.draft) || status === "draft" || status === "unpublished";
        if (isDraft) return false;
        return Boolean(id);
      })
      .filter((item, index, list) => list.findIndex((x) => String(x?.id || "") === String(item?.id || "")) === index)
    : feed;
  const draftCardMap = new Map();
  draftCreatorWorks.forEach((item) => {
    const key = String(item.id || item.title || Math.random());
    if (!draftCardMap.has(key)) draftCardMap.set(key, item);
  });
  if (!viewingOther && draftCreatorWorks.length === 0) {
    feedWorks
      .filter((x) => Boolean(x?.draft) || String(x?.status || "").trim() === "draft" || String(x?.status || "").trim() === "unpublished")
      .forEach((x, idx) => {
        const key = String(x?.creatorCardId || x?.id || `feed_draft_${idx + 1}`);
        if (draftCardMap.has(key)) return;
        draftCardMap.set(key, {
          id: key,
          mode: "long_narrative",
          title: x?.title || `草稿 ${idx + 1}`,
          subtitle: x?.meta || "创作草稿",
          summary: x?.stat || "",
          status: "draft",
          worldId: ""
        });
      });
  }
  const draftTabCards = [...draftCardMap.values()];

  const visitorWorks = viewingOther
    ? FEED_DATA
      .filter((x) => String(x.authorId || "").trim() === viewedId || (viewedProfile && x.author === viewedProfile.name))
      .map((x) => ({
        id: x.id,
        title: x.title,
        meta: `${x.theme || "主题"} · ${x.background || "背景"}`,
        stat: `收藏 ${formatMetricCount(x.star)} · 点赞 ${formatMetricCount(x.like)}`
      }))
    : [];
  const visitorFeedByTab = {
    drafts: [],
    works: visitorWorks,
    likes: [],
    favorites: [],
    history: []
  };
  const uniqueFeed = viewingOther ? (visitorFeedByTab[tab] || []) : ownFeed;

  const displayedName = viewingOther ? (viewedProfile?.name || viewedName || "Drama 用户") : uiState.profile.name;
  const displayedHandle = viewingOther ? (viewedProfile?.handle || toHandle(displayedName)) : uiState.profile.handle;
  const displayedBio = viewingOther ? (viewedProfile?.bio || "热爱创作与互动剧情") : uiState.profile.bio;
  const displayedGender = viewingOther ? (viewedProfile?.gender || "保密") : (uiState.profile?.gender || "保密");
  const displayedBirthday = viewingOther ? (viewedProfile?.birthday || "") : (uiState.profile?.birthday || "");
  const displayedGenderAge = formatGenderAgeText(displayedGender, displayedBirthday);
  const meDataPending = !viewingOther && isMeBootstrapDataPending(uiState.currentUserId);
  const storyCount = viewingOther ? toMetricCount(viewedProfile?.stats?.works || 0) : uiState.meStats.storyCount;
  const likedCount = viewingOther ? 0 : uiState.meStats.likedCount;
  const fansCount = viewingOther ? toMetricCount(viewedProfile?.stats?.fans || 0) : uiState.meStats.fansCount;
  const coinCount = viewingOther ? 0 : (uiState.userCoins || 0);
  const storyCountText = meDataPending ? "..." : formatMetricCount(storyCount);
  const likedCountText = meDataPending ? "..." : formatMetricCount(likedCount);
  const fansCountText = meDataPending ? "..." : formatMetricCount(fansCount);
  const coinCountText = meDataPending ? "..." : formatMetricCount(coinCount);
  const followersAction = viewingOther
    ? 'data-action="noop"'
    : meDataPending
      ? 'data-action="noop"'
      : 'data-go="#/me/followers"';
  const coinsAction = viewingOther
    ? 'data-action="noop"'
    : meDataPending
      ? 'data-action="noop"'
      : 'data-go="#/me/coins"';
  const avatarText = getAvatarText(displayedName);
  const displayedAvatarUrl = viewingOther
    ? String(viewedProfile?.avatarUrl || viewedProfile?.avatar_url || "").trim()
    : String(uiState.profile?.avatarUrl || "").trim();
  const displayedCoverUrl = viewingOther
    ? String(viewedProfile?.coverUrl || "").trim()
    : String(extractRawUrlFromCssUrl(uiState.meHeroCover || "") || uiState.profile?.coverUrl || "").trim();
  const coverClass = displayedCoverUrl ? "me-hero me-hero-cover" : "me-hero";
  const coverStyle = displayedCoverUrl ? `style='--me-hero-cover:url("${escapeHtml(displayedCoverUrl)}");'` : "";
  const parseMetricNumberFromText = (value = "") => {
    const raw = String(value || "").replace(/[^\d.]/g, "");
    if (!raw) return "";
    const n = Number(raw);
    return Number.isFinite(n) ? n.toLocaleString() : "";
  };
  const splitMetaToTags = (meta = "") =>
    String(meta || "")
      .split("·")
      .map((x) => x.trim())
      .filter(Boolean)
      .slice(0, 3);
  const splitStatToMetrics = (stat = "") =>
    String(stat || "")
      .split("·")
      .map((x) => x.trim())
      .filter(Boolean)
      .slice(0, 4);
  const buildMeLibraryRenderableCard = (item = {}) => {
    const wid = String(item?.id || "").trim();
    if (!wid) return null;
    const sourceWorld = FEED_DATA.find((x) => String(x?.id || "") === wid);
    if (sourceWorld) return sourceWorld;
    const tags = Array.isArray(item?.tags) && item.tags.length
      ? item.tags.map((x) => String(x || "").trim()).filter(Boolean).slice(0, 3)
      : splitMetaToTags(item?.meta || "");
    const statMetrics = splitStatToMetrics(item?.stat || "");
    const likeFromStat = statMetrics.find((x) => x.includes("点赞") || x.includes("赞")) || "";
    const starFromStat = statMetrics.find((x) => x.includes("收藏")) || "";
    const commentFromStat = statMetrics.find((x) => x.includes("评论")) || "";
    const heatFromStat = statMetrics.find((x) => x.includes("热度") || x.includes("播放")) || "";
    const coverRaw = String(
      item?.cover
      || item?.coverStyle
      || item?.coverUrl
      || item?.firstImageUrl
      || item?.cardBackground
      || ""
    ).trim();
    let coverStyleText = "";
    if (coverRaw) {
      if (/gradient\(|url\(/i.test(coverRaw)) {
        coverStyleText = coverRaw;
      } else {
        const safe = coverRaw.replaceAll("'", "%27");
        coverStyleText = `linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.35)),url('${safe}') center/cover`;
      }
    }
    return {
      id: wid,
      title: String(item?.title || "未命名作品").trim() || "未命名作品",
      tags: tags.length ? tags : ["作品"],
      author: String(item?.author || displayedName || uiState.profile?.name || "Drama 用户").trim() || "Drama 用户",
      authorId: String(item?.authorId || uiState.currentUserId || "").trim(),
      cover: coverStyleText,
      like: String(item?.like || "").trim() || parseMetricNumberFromText(likeFromStat) || "-",
      star: String(item?.star || "").trim() || parseMetricNumberFromText(starFromStat) || "-",
      comment: String(item?.comment || "").trim() || parseMetricNumberFromText(commentFromStat) || "-",
      heat: String(item?.heat || "").trim() || heatFromStat || "-"
    };
  };
  const resolvedUniqueFeed = uniqueFeed
    .map((x) => buildMeLibraryRenderableCard(x))
    .filter(Boolean);
  const unresolvedUniqueFeedCount = Math.max(0, uniqueFeed.length - resolvedUniqueFeed.length);
  if (
    !viewingOther
    && tab === "works"
    && unresolvedUniqueFeedCount > 0
    && uiState.currentUserId
    && (Date.now() - meFeedAutoRecoverAt) > 2_500
  ) {
    meFeedAutoRecoverAt = Date.now();
    void bootstrapClientData(uiState.currentUserId, { force: FEED_DATA.length === 0 })
      .then(() => {
        render();
      })
      .catch(() => {});
  }
  if (
    !viewingOther
    && tab === "works"
    && unresolvedUniqueFeedCount > 0
    && resolvedUniqueFeed.length === 0
    && uiState.currentUserId
    && (Date.now() - meFeedFullRecoverAt) > 12_000
  ) {
    meFeedFullRecoverAt = Date.now();
    void bootstrapClientDataFull(uiState.currentUserId)
      .then(() => {
        render();
      })
      .catch(() => {});
  }
  const meMenuGroups = [
    ["添加好友", "创作者中心"],
    ["我的草稿", "浏览记录", "我的下载"],
    ["订单", "购物车", "钱包"],
    ["小程序"],
    ["社区公约"]
  ];
  const meMenuActionMap = {
    创作者中心: "me-open-workshop-center",
    我的草稿: "me-open-drafts-tab"
  };
  const renderMeMenuIcon = (item = "") => {
    const iconMap = {
      添加好友: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 5a3.8 3.8 0 1 1 0 7.6A3.8 3.8 0 0 1 12 5zM5.5 19.2c1.1-2.4 3.4-3.8 6.5-3.8s5.4 1.4 6.5 3.8"></path><path d="M19.1 7.1v4.4M16.9 9.3h4.4"></path></svg>',
      创作者中心: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4.8 6.2h14.4M4.8 12h14.4M4.8 17.8h9.2"></path><path d="M14.8 16.6l1.9 1.9 2.8-3"></path></svg>',
      我的草稿: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6.2 4.8h8.8l3.2 3.2v11.2H6.2z"></path><path d="M15 4.8V8h3.2M9 12h6M9 15.6h4.2"></path></svg>',
      浏览记录: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 6.2a5.8 5.8 0 1 1-4.1 1.7"></path><path d="M5.8 7.8v-3h3"></path><path d="M12 9v3.4l2.8 1.8"></path></svg>',
      我的下载: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 5.2v9.2"></path><path d="M8.8 11.8 12 15l3.2-3.2"></path><path d="M6.2 18.8h11.6"></path></svg>',
      订单: '<svg viewBox="0 0 24 24" focusable="false"><path d="M5.2 6.2h13.6v11.6H5.2z"></path><path d="M8.4 10h7.2M8.4 13.4h7.2"></path></svg>',
      购物车: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4.8 6.2h2.4l1.8 8.2h7.9l1.5-6.2H8.3"></path><path d="M10.1 18.8a1 1 0 1 0 0 .1M16.2 18.8a1 1 0 1 0 0 .1"></path></svg>',
      钱包: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4.8 7.6h14.4a1.6 1.6 0 0 1 1.6 1.6v6.2a1.6 1.6 0 0 1-1.6 1.6H4.8z"></path><path d="M4.8 9.4v-2a1.6 1.6 0 0 1 1.6-1.6H16"></path><path d="M14.8 12.3h3"></path></svg>',
      小程序: '<svg viewBox="0 0 24 24" focusable="false"><rect x="5.2" y="5.2" width="5.8" height="5.8" rx="1"></rect><rect x="13" y="5.2" width="5.8" height="5.8" rx="1"></rect><rect x="5.2" y="13" width="5.8" height="5.8" rx="1"></rect><path d="M13 13h5.8v5.8H13z"></path></svg>',
      社区公约: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4.8l6.4 2.4v4.7c0 4-2.5 6-6.4 7.3-3.9-1.3-6.4-3.3-6.4-7.3V7.2z"></path><path d="m9.5 12.2 1.7 1.7 3.3-3.3"></path></svg>'
    };
    const icon = iconMap[item] || iconMap.社区公约;
    return `<span class="me-side-item-icon" aria-hidden="true">${icon}</span>`;
  };
  const formatModeTag = (mode = "") => {
    if (mode === "virtual_character") return "虚拟人物";
    if (mode === "short_narrative") return "短叙事";
    if (mode === "long_narrative") return "长叙事";
    return "创作";
  };
  const shouldRecoverEmptyMeWorks = (
    !viewingOther
    && tab === "works"
    && uiState.currentUserId
    && uniqueFeed.length === 0
    && (Date.now() - meLibraryRecoverAt) > 2_500
  );
  if (shouldRecoverEmptyMeWorks) {
    meLibraryRecoverAt = Date.now();
    void Promise.allSettled([
      fetchBootstrapSection("me", uiState.currentUserId, { force: true }),
      bootstrapClientData(uiState.currentUserId, { force: true })
    ])
      .then((results) => {
        const rejected = results.filter((x) => x?.status === "rejected");
        if (rejected.length === 0) render();
      })
      .catch(() => {});
  }
  const shouldRecoverEmptyMeWorksFull = (
    !viewingOther
    && tab === "works"
    && uiState.currentUserId
    && uniqueFeed.length === 0
    && (Date.now() - meLibraryFullRecoverAt) > 12_000
  );
  if (shouldRecoverEmptyMeWorksFull) {
    meLibraryFullRecoverAt = Date.now();
    void bootstrapClientDataFull(uiState.currentUserId)
      .then(() => {
        render();
      })
      .catch(() => {});
  }
  const visibleDraftCards = draftTabCards.slice(0, visibleLimit);
  const visibleResolvedWorks = resolvedUniqueFeed.slice(0, visibleLimit);
  const visibleWorks = [...visibleResolvedWorks];
  const visibleOtherFeed = resolvedUniqueFeed.slice(0, visibleLimit);
  const canLoadMoreDrafts = draftTabCards.length > visibleDraftCards.length;
  const canLoadMoreWorks = resolvedUniqueFeed.length > visibleResolvedWorks.length;
  const canLoadMoreOther = resolvedUniqueFeed.length > visibleOtherFeed.length;
  const showLoadMore = (
    (tab === "drafts" && canLoadMoreDrafts)
    || (tab === "works" && canLoadMoreWorks)
    || (tab !== "drafts" && tab !== "works" && canLoadMoreOther)
  );

  return renderExploreShell(`
    <section class="me-page">
      <article class="${coverClass} ${viewingOther ? "me-hero-visitor" : ""}" ${coverStyle}>
        <div class="me-hero-nav">
          ${
            viewingOther
              ? `<button class="me-inline-back me-hero-back-btn unified-back-btn" data-action="go-back" aria-label="返回">←</button><div class="me-hero-nav-slot" aria-hidden="true"></div>`
              : `
            <button class="me-inline-back me-hero-back-btn unified-back-btn" data-action="go-back" aria-label="返回">←</button>
            <button class="me-menu-trigger" data-action="toggle-me-menu" aria-label="打开菜单">
              <span></span><span></span><span></span>
            </button>
          `
          }
        </div>
        <div class="me-hero-top">
          <button
            class="me-avatar ${displayedAvatarUrl ? "with-image" : ""}"
            data-action="open-profile-avatar-preview"
            data-avatar-name="${escapeHtml(displayedName)}"
            data-avatar-handle="${escapeHtml(displayedHandle)}"
            data-avatar-text="${escapeHtml(avatarText)}"
            data-avatar-url="${escapeHtml(displayedAvatarUrl)}"
          >${displayedAvatarUrl ? `<img src="${escapeHtml(displayedAvatarUrl)}" alt="${escapeHtml(displayedName)}" />` : avatarText}</button>
          <div class="me-meta">
            <h2>${escapeHtml(displayedName)}</h2>
            <p>${escapeHtml(displayedHandle)}</p>
            <p class="me-demographics">${escapeHtml(displayedGenderAge)}</p>
            <small>${escapeHtml(displayedBio)}</small>
          </div>
          <div class="me-hero-actions">
            ${
              viewingOther
                ? `
              <button class="me-edit-btn ${Boolean(viewedProfile?.isFollowedByMe) ? "active" : ""}" data-action="toggle-follow-author" data-user="${escapeHtml(displayedName)}" data-user-id="${escapeHtml(viewedId || viewedProfile?.id || "")}">
                ${Boolean(viewedProfile?.isFollowedByMe) ? "已关注" : "关注"}
              </button>
              <button class="me-edit-btn ghost" data-action="me-visitor-chat" data-user="${escapeHtml(displayedName)}" data-user-id="${escapeHtml(viewedId || viewedProfile?.id || "")}">私信</button>
            `
                : `
              <button class="me-edit-btn" data-action="open-profile-edit-modal">编辑资料</button>
              <button class="me-setting-btn" data-go="#/me/settings" aria-label="设置">⚙</button>
            `
            }
          </div>
        </div>
        <div class="me-stats">
          <button data-action="noop"><b>${storyCountText}</b> 故事数</button>
          <button data-action="noop"><b>${likedCountText}</b> 获赞量</button>
          <button ${followersAction}><b>${fansCountText}</b> 粉丝</button>
          <button ${coinsAction}><b>${coinCountText}</b> 马内</button>
        </div>
        ${meDataPending ? '<p class="me-stats-syncing">统计数据同步中...</p>' : ""}
      </article>

      <article class="me-content-card">
        <div class="me-tab-row">
          ${viewingOther ? "" : `<button class="${tab === "drafts" ? "active" : ""}" data-action="me-content-tab" data-tab="drafts">草稿箱（${draftTabCards.length}）</button>`}
          <button class="${tab === "works" ? "active" : ""}" data-action="me-content-tab" data-tab="works">作品</button>
          <button class="${tab === "likes" ? "active" : ""}" data-action="me-content-tab" data-tab="likes">喜欢</button>
          <button class="${tab === "favorites" ? "active" : ""}" data-action="me-content-tab" data-tab="favorites">收藏</button>
          <button class="${tab === "history" ? "active" : ""}" data-action="me-content-tab" data-tab="history">浏览</button>
        </div>
        <div class="me-content-grid">
          ${
            tab === "drafts"
              ? visibleDraftCards
                  .map((x) => renderHomeCard(
                    {
                      id: x.id,
                      title: x.title,
                      tags: [formatModeTag(x.mode), "草稿"],
                      author: displayedName,
                      authorId: uiState.currentUserId,
                      like: "-",
                      star: "-",
                      comment: "-",
                      heat: "草稿"
                    },
                    {
                      action: "me-draft-open-action",
                      id: String(x.id || ""),
                      className: "me-home-card creator-work-card",
                      coverClassName: `creator-cover mode-${x.mode}`
                    }
                  ))
                  .join("")
              : tab === "works"
              ? visibleWorks.map((world) => {
                  const wid = String(world?.id || "").trim();
                  return renderHomeCard(
                    world,
                    {
                      action: wid ? "open-world-detail" : "noop",
                      id: wid,
                      className: "me-home-card"
                    }
                  );
                }).join("")
              : visibleOtherFeed
                  .map((x) => {
                    const sourceWorld = buildMeLibraryRenderableCard(x);
                    if (!sourceWorld) return "";
                    return renderHomeCard(
                      sourceWorld,
                      {
                        action: "open-world-detail",
                        id: String(sourceWorld.id || ""),
                        className: "me-home-card"
                      }
                    );
                  })
                  .join("")
          }
          ${showLoadMore ? `<button class="me-load-more-btn" data-action="me-content-load-more" data-tab="${tab}">继续加载</button>` : ""}
          ${
            (
              (tab === "drafts" && draftTabCards.length === 0)
              || (tab !== "drafts" && tab !== "works" && resolvedUniqueFeed.length === 0)
              || (tab === "works" && resolvedUniqueFeed.length === 0 && unresolvedUniqueFeedCount === 0)
            )
              ? `<div class="me-content-empty-tip">${tab === "drafts" ? "暂无草稿" : "暂无内容"}</div>`
              : ""
          }
        </div>
      </article>
      ${
        viewingOther
          ? ""
          : `
        ${uiState.meMenuToast ? `<div class="me-menu-top-toast" role="status" aria-live="polite"><span class="me-menu-top-toast-icon" aria-hidden="true">!</span><p>${escapeHtml(uiState.meMenuToast)}</p></div>` : ""}
        ${uiState.meMenuOpen ? '<div class="me-side-mask" data-action="close-me-menu"></div>' : ""}
        <aside class="me-side-sheet ${uiState.meMenuOpen ? "open" : ""}" data-action="noop">
          <div class="me-side-sheet-inner">
            ${meMenuGroups
              .map(
                (group) => `
              <div class="me-side-group">
                ${group
                  .map(
                    (item) => `
                  <button
                    data-action="${meMenuActionMap[item] || "me-menu-feedback"}"
                    ${meMenuActionMap[item] ? "" : `data-text="${item}功能待接入"`}
                  >
                    ${renderMeMenuIcon(item)}
                    <span>${item}</span>
                  </button>
                `
                  )
                  .join("")}
              </div>
            `
              )
              .join("")}
          </div>
        </aside>
      `
      }
    </section>
  `);
}

function pageMeFollowers() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看粉丝列表", "登录后同步粉丝与关注关系。");
  }
  const meDataPending = isMeBootstrapDataPending(uiState.currentUserId);
  if (meDataPending) {
    return renderExploreShell(`
      <section class="me-followers-page">
        <div class="me-page-headline">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>关系列表</h2>
        </div>
        <article class="me-followers-head">
          <div class="me-relation-kpi">
            <div><b>...</b><span>全部粉丝</span></div>
            <div><b>...</b><span>全部关注</span></div>
            <div><b>...</b><span>互相关注</span></div>
          </div>
          <p class="me-relation-syncing">关系数据同步中...</p>
        </article>
      </section>
    `);
  }
  const tab = uiState.meRelationTab;
  const query = (uiState.meRelationSearch || "").trim().toLowerCase();
  const isFan = (x) => Boolean(x?.isFan || x?.tab === "粉丝" || x?.tab === "朋友");
  const isFollowing = (x) => Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友");
  const fansTotal = ME_RELATION_USERS.filter((x) => isFan(x)).length;
  const followsTotal = ME_RELATION_USERS.filter((x) => isFollowing(x)).length;
  const mutualTotal = ME_RELATION_USERS.filter((x) => isFan(x) && isFollowing(x)).length;
  const list = ME_RELATION_USERS.filter((x) => {
    if (tab === "粉丝") return isFan(x);
    if (tab === "关注") return isFollowing(x);
    return isFan(x) && isFollowing(x);
  }).filter((x) => {
    if (String(x?.id || "").trim() === String(uiState.currentUserId || "").trim()) return false;
    if (!query) return true;
    return `${x.name} ${x.handle} ${x.intro}`.toLowerCase().includes(query);
  });
  return renderExploreShell(`
    <section class="me-followers-page">
      <div class="me-page-headline">
        <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>关系列表</h2>
      </div>
      <article class="me-followers-head">
        <div class="me-relation-kpi">
          <div><b>${fansTotal}</b><span>全部粉丝</span></div>
          <div><b>${followsTotal}</b><span>全部关注</span></div>
          <div><b>${mutualTotal}</b><span>互相关注</span></div>
        </div>
        <div class="me-tab-row">
          ${["粉丝", "关注", "朋友"].map((x) => `<button class="${tab === x ? "active" : ""}" data-action="me-relation-tab" data-tab="${x}">${x}</button>`).join("")}
        </div>
        <div class="msg-search-inline">
          <input data-field="me-relation-search" value="${escapeHtml(uiState.meRelationSearch)}" placeholder="搜索昵称 / 账号" />
          ${uiState.meRelationSearch ? `<button class="msg-search-action clear" data-action="me-relation-search-clear">×</button>` : `<button class="msg-search-action" data-action="me-relation-search-submit">搜索</button>`}
        </div>
      </article>
      <div class="me-followers-list">
        ${list
          .map((x) => `
          <article class="me-follower-item">
            <span class="avatar user-avatar-click">${x.name.slice(0, 1)}</span>
            <div class="copy">
              <h4>${x.name}</h4>
              <p>${x.handle} · 粉丝 ${x.fans}</p>
              <small>${x.intro}</small>
            </div>
            <div class="actions">
              <button class="msg-follow-btn" data-action="me-follower-follow-toggle" data-id="${x.id}" data-name="${x.name}">${uiState.meRelationFollowing[x.id] ? "已关注" : "关注"}</button>
              <button class="msg-follow-btn ghost" data-action="me-follower-chat" data-id="${x.id}" data-name="${x.name}">私信</button>
            </div>
          </article>
        `)
          .join("")}
      </div>
    </section>
  `);
}

function pageMeCoins() {
  const tab = uiState.meCoinTab;
  if (!uiState.isLoggedIn) {
    return renderExploreShell(`
      <section class="me-coins-page">
        <div class="me-page-headline">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>马内中心</h2>
        </div>
        <article class="me-coins-hero guest">
          <h3>马内中心</h3>
          <p>登录后可查看完整资产、账单与奖励任务。</p>
          <div class="me-coins-amount">
            <strong>0</strong>
            <span>当前马内</span>
          </div>
          <button class="dynamic-publish-btn" data-action="open-login-modal">登录后解锁马内权益</button>
        </article>
        <article class="me-coins-preview">
          <h3>可解锁能力</h3>
          <div class="me-coins-benefits">
            ${COIN_BENEFITS.slice(0, 3)
              .map(
                (x) => `
              <div>
                <b>${x.title}</b>
                <p>${x.desc}</p>
                <small>${x.price} 马内</small>
              </div>
            `
              )
              .join("")}
          </div>
        </article>
      </section>
    `);
  }

  const nowTs = Date.now();
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const recentBills = COIN_BILLS.filter((x) => {
    const ts = x?.createdAt ? new Date(x.createdAt).getTime() : NaN;
    return Number.isFinite(ts) && nowTs - ts <= sevenDaysMs;
  });
  const incomeSum = recentBills.filter((x) => x.amount > 0).reduce((sum, x) => sum + x.amount, 0);
  const expenseSum = Math.abs(recentBills.filter((x) => x.amount < 0).reduce((sum, x) => sum + x.amount, 0));
  const doneTasks = COIN_TASKS.filter((x) => x.done).length;
  const totalTasks = COIN_TASKS.length;
  const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const netAmount = COIN_BILLS.reduce((sum, x) => sum + Number(x.amount || 0), 0);

  return renderExploreShell(`
    <section class="me-coins-page">
      <div class="me-page-headline">
        <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>马内中心</h2>
      </div>
      <article class="me-coins-hero">
        <div class="me-coins-title">
          <h3>资产总览</h3>
          <p>用于创作增益、社群成长、剧情道具与个性化装扮</p>
        </div>
        <div class="me-coins-amount">
          <strong>${(uiState.userCoins || 0).toLocaleString()}</strong>
          <span>当前马内余额</span>
        </div>
        <div class="me-coins-actions">
          <button data-action="me-coin-recharge">充值</button>
          <button data-action="me-coin-withdraw">提现</button>
          <button data-action="me-coin-help">规则</button>
        </div>
      </article>

      <article class="me-coins-kpi">
        <div><b>+${incomeSum}</b><span>近7日收入</span></div>
        <div><b>${expenseSum}</b><span>近7日支出</span></div>
        <div><b>${COIN_BILLS.length}</b><span>账单总笔数</span></div>
        <div><b>${completionRate}%</b><span>任务完成率</span></div>
      </article>

      <article class="me-coins-tabs">
        ${["总览", "账单", "任务", "权益"].map((x) => `<button class="${tab === x ? "active" : ""}" data-action="me-coin-tab" data-tab="${x}">${x}</button>`).join("")}
      </article>

      ${
        tab === "账单"
          ? `
        <article class="me-coins-list">
          ${COIN_BILLS.map(
            (x) => `
            <div class="me-coin-item">
              <div>
                <h4>${x.title}</h4>
                <p>${x.desc}</p>
                <small>${x.time}</small>
              </div>
              <strong class="${x.amount >= 0 ? "income" : "expense"}">${x.amount >= 0 ? "+" : ""}${x.amount}</strong>
            </div>
          `
          ).join("")}
        </article>
      `
          : ""
      }

      ${
        tab === "任务"
          ? `
        <article class="me-coins-list">
          ${COIN_TASKS.map((x) => {
            const claimed = uiState.meCoinClaimedTaskIds.includes(x.id);
            return `
              <div class="me-coin-item task">
                <div>
                  <h4>${x.title}</h4>
                  <p>进度 ${x.progress}</p>
                  <small>奖励 ${x.reward} 马内</small>
                </div>
                <button class="msg-follow-btn ${claimed ? "ghost" : ""}" data-action="me-coin-claim-task" data-id="${x.id}" ${x.done && !claimed ? "" : "disabled"}>
                  ${claimed ? "已领取" : x.done ? "领取奖励" : "未完成"}
                </button>
              </div>
            `;
          }).join("")}
        </article>
      `
          : ""
      }

      ${
        tab === "权益"
          ? `
        <article class="me-coins-benefits">
          ${COIN_BENEFITS.map(
            (x) => `
            <div>
              <span>${x.tag}</span>
              <b>${x.title}</b>
              <p>${x.desc}</p>
              <button data-action="me-coin-redeem" data-id="${x.id}" data-price="${x.price}" data-title="${x.title}">${x.price} 马内兑换</button>
            </div>
          `
          ).join("")}
        </article>
      `
          : ""
      }

      ${
        tab === "总览"
          ? `
        <div class="me-coins-overview">
          <article class="me-coins-list">
            <h3>近期流水</h3>
            ${COIN_BILLS.slice(0, 4)
              .map(
                (x) => `
              <div class="me-coin-item">
                <div>
                  <h4>${x.title}</h4>
                  <small>${x.time}</small>
                </div>
                <strong class="${x.amount >= 0 ? "income" : "expense"}">${x.amount >= 0 ? "+" : ""}${x.amount}</strong>
              </div>
            `
              )
              .join("")}
          </article>
          <article class="me-coins-list">
            <h3>累计统计</h3>
            <div class="me-coin-item">
              <div>
                <h4>历史净收益</h4>
                <small>累计账单汇总</small>
              </div>
              <strong class="${netAmount >= 0 ? "income" : "expense"}">${netAmount >= 0 ? "+" : ""}${netAmount}</strong>
            </div>
            <div class="me-coin-item">
              <div>
                <h4>任务完成数</h4>
                <small>已完成 / 总任务</small>
              </div>
              <strong>${doneTasks}/${totalTasks}</strong>
            </div>
          </article>
          <article class="me-coins-benefits">
            ${COIN_BENEFITS.slice(0, 2)
              .map(
                (x) => `
              <div>
                <span>${x.tag}</span>
                <b>${x.title}</b>
                <p>${x.desc}</p>
                <button data-action="me-coin-redeem" data-id="${x.id}" data-price="${x.price}" data-title="${x.title}">${x.price} 马内兑换</button>
              </div>
            `
              )
              .join("")}
          </article>
        </div>
      `
          : ""
      }
    </section>
  `);
}

function pageSettings() {
  if (!uiState.isLoggedIn) {
    return renderExploreShell(`
      <section class="me-settings-page">
        <div class="me-page-headline">
          <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
          <h2>账号与安全</h2>
        </div>
        <article class="me-setting-block">
          <h2>登录后查看完整设置</h2>
          <p>账号安全、隐私与个性化配置均需登录后生效。</p>
          <button class="dynamic-publish-btn" data-action="open-login-modal">去登录</button>
        </article>
      </section>
    `);
  }
  const s = uiState.meSettings;
  return renderExploreShell(`
    <section class="me-settings-page">
      <div class="me-page-headline">
        <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>账号与安全</h2>
      </div>
      <article class="me-setting-block">
        <h3>账号与登录</h3>
        <div class="me-setting-row"><span>手机号</span><button data-action="me-setting-feedback" data-text="已打开手机号绑定">138****2048 ›</button></div>
        <div class="me-setting-row"><span>第三方登录</span><button data-action="me-setting-feedback" data-text="已打开第三方绑定">微信 / Apple / Google ›</button></div>
        <div class="me-setting-row"><span>登录设备管理</span><button data-action="me-setting-feedback" data-text="已打开设备管理">2 台在线 ›</button></div>
      </article>

      <article class="me-setting-block">
        <h3>通知设置</h3>
        <div class="me-setting-row"><span>故事更新提醒</span><button class="me-switch ${s.storyPush ? "on" : ""}" data-action="me-setting-toggle" data-key="storyPush">${s.storyPush ? "开" : "关"}</button></div>
        <div class="me-setting-row"><span>评论与@提醒</span><button class="me-switch ${s.commentPush ? "on" : ""}" data-action="me-setting-toggle" data-key="commentPush">${s.commentPush ? "开" : "关"}</button></div>
        <div class="me-setting-row"><span>新增关注提醒</span><button class="me-switch ${s.followPush ? "on" : ""}" data-action="me-setting-toggle" data-key="followPush">${s.followPush ? "开" : "关"}</button></div>
        <div class="me-setting-row"><span>系统通知</span><button class="me-switch ${s.systemPush ? "on" : ""}" data-action="me-setting-toggle" data-key="systemPush">${s.systemPush ? "开" : "关"}</button></div>
      </article>

      <article class="me-setting-block">
        <h3>隐私与社交</h3>
        <div class="me-setting-row"><span>私密账号</span><button class="me-switch ${s.privateAccount ? "on" : ""}" data-action="me-setting-toggle" data-key="privateAccount">${s.privateAccount ? "开" : "关"}</button></div>
        <div class="me-setting-row"><span>允许陌生人私信</span><button class="me-switch ${s.allowStrangerDm ? "on" : ""}" data-action="me-setting-toggle" data-key="allowStrangerDm">${s.allowStrangerDm ? "开" : "关"}</button></div>
        <div class="me-setting-row"><span>展示在线状态</span><button class="me-switch ${s.showOnlineStatus ? "on" : ""}" data-action="me-setting-toggle" data-key="showOnlineStatus">${s.showOnlineStatus ? "开" : "关"}</button></div>
      </article>

      <article class="me-setting-block">
        <h3>个性化</h3>
        <div class="me-theme-row">
          <button class="${uiState.meTheme === "light" ? "active" : ""}" data-action="me-theme" data-theme="light">浅色</button>
          <button class="${uiState.meTheme === "dark" ? "active" : ""}" data-action="me-theme" data-theme="dark">深色</button>
          <button class="${uiState.meTheme === "auto" ? "active" : ""}" data-action="me-theme" data-theme="auto">跟随系统</button>
        </div>
        <div class="me-setting-row"><span>字体大小</span><button data-action="me-font-size-cycle">${uiState.meFontSize} ›</button></div>
        <div class="me-setting-row"><span>语言</span><button data-action="me-language-cycle">${uiState.meLanguage} ›</button></div>
        <div class="me-setting-row"><span>同步游玩历史</span><button class="me-switch ${s.syncPlayHistory ? "on" : ""}" data-action="me-setting-toggle" data-key="syncPlayHistory">${s.syncPlayHistory ? "开" : "关"}</button></div>
      </article>

      <article class="me-setting-block">
        <h3>支持与关于</h3>
        <div class="me-setting-row"><span>意见反馈</span><button data-action="me-setting-feedback" data-text="已打开反馈入口">提交建议 ›</button></div>
        <div class="me-setting-row"><span>关于爪马 Drama</span><button data-action="me-setting-feedback" data-text="版本 0.1.0">版本信息 ›</button></div>
        <div class="me-setting-row"><span>退出登录</span><button class="danger-text" data-action="me-logout">退出</button></div>
      </article>
    </section>
  `);
}

const renderers = {
  "#/auth/login": pageLogin,
  "#/auth/phone": pageAuthPhone,
  "#/auth/wechat": pageAuthWechat,
  "#/auth/google": pageAuthGoogle,
  "#/auth/account": pageAuthAccount,
  "#/theater/home": pageTheater,
  "#/theater/filter": pageFilter,
  "#/search": pageUnifiedSearch,
  "#/search/results": pageSearchResults,
  "#/drama/home": pageDramaHome,
  "#/drama/filter": pageDramaFilter,
  "#/drama/reserve": pageDramaReserve,
  "#/drama/reserve/upcoming": pageDramaReserve,
  "#/drama/reserve/week": pageDramaReserve,
  "#/drama/reserve/mine": pageDramaReserve,
  "#/drama/reserve/detail": pageWorldDetail,
  "#/drama/rank": pageDramaRank,
  "#/drama/rank/recommend": pageDramaRank,
  "#/drama/rank/hot": pageDramaRank,
  "#/drama/rank/new": pageDramaRank,
  "#/drama/filter/results": pageDramaFilterResults,
  "#/drama/bounty": pageDramaBounty,
  "#/theater/world": pageWorldDetail,
  "#/world/detail": pageWorldDetail,
  "#/author/detail": pageAuthorDetail,
  "#/author/detail/works": pageAuthorDetail,
  "#/author/detail/likes": pageAuthorDetail,
  "#/author/detail/favorites": pageAuthorDetail,
  "#/play/core": pagePlayCore,
  "#/play/model": pagePlayModel,
  "#/play/settings": pagePlaySettings,
  "#/workshop/world": pageWorkshopEntry,
  "#/workshop/world/editor": pageWorkshopWorldEditor,
  "#/workshop/story/editor": pageWorkshopStoryEditor,
  "#/workshop/character/editor": pageWorkshopCharacterEditor,
  "#/workshop/paint": pageWorkshopPaint,
  "#/community/home": pageCommunity,
  "#/community/join": pageCommunityJoin,
  "#/community/mine": pageCommunityMine,
  "#/community/search": pageCommunitySearch,
  "#/community/create": pageCommunityCreate,
  "#/community/group": pageCommunityGroup,
  "#/community/post": pageCommunityPost,
  "#/community/group/post": pageCommunityPost,
  "#/community/post/detail": pageCommunityPostDetail,
  "#/community/user": pageCommunityUser,
  "#/community/manage": pageCommunityManage,
  "#/community/manage/joined": pageCommunityManageJoined,
  "#/community/manage/joined/members": pageCommunityManageJoinedMembers,
  "#/community/manage/members": pageCommunityManageMembers,
  "#/community/manage/review": pageCommunityManageReview,
  "#/community/manage/blacklist": pageCommunityManageBlacklist,
  "#/community/manage/announcement": pageCommunityManageAnnouncement,
  "#/community/manage/settings": pageCommunityManageSettings,
  "#/community/manage/transfer": pageCommunityManageTransfer,
  "#/community/manage/transfer/receiver": pageCommunityTransferReceiver,
  "#/community/manage/transfer/verify": pageCommunityTransferVerify,
  "#/community/manage/dismiss": pageCommunityDismiss,
  "#/messages/story": pageMessages,
  "#/messages/story/dynamic": pageBackstageDynamic,
  "#/messages/story/album": pageBackstageAlbum,
  "#/messages/story/stories": pageBackstageStories,
  "#/messages/story/publish": pageBackstagePublish,
  "#/messages/story/settings": pageBackstageSettings,
  "#/messages/detail": pageDynamicDetail,
  "#/messages/chat": pageMessageCenter,
  "#/messages/likes": pageMessageLikes,
  "#/messages/follows": pageMessageFollows,
  "#/messages/comments": pageMessageComments,
  "#/messages/thread": pageDirectMessage,
  "#/me/home": pageMe,
  "#/me/followers": pageMeFollowers,
  "#/me/coins": pageMeCoins,
  "#/me/settings": pageSettings
};

function getCurrentRoutePath() {
  const hash = window.location.hash || "#/theater/home";
  return hash.split("?")[0] || "#/theater/home";
}

let lastRenderedRoutePath = "";
function handlePlayRouteTransition(nextRoutePath = "") {
  const nextRoute = String(nextRoutePath || "").trim();
  const prevRoute = String(lastRenderedRoutePath || "").trim();
  if (prevRoute && prevRoute !== nextRoute) {
    const leavingPlay = prevRoute.startsWith("#/play") && !nextRoute.startsWith("#/play");
    const enteringPlay = !prevRoute.startsWith("#/play") && nextRoute.startsWith("#/play");
    if (leavingPlay) {
      void pauseCurrentPlaySessionIfNeeded("leave_play_route");
    }
    if (enteringPlay && !String(uiState.playSessionId || "").trim()) {
      uiState.playSessionBlockedReason = "";
      uiState.playInitScrollPending = true;
    }
  }
  lastRenderedRoutePath = nextRoute;
}

function render() {
  const current = getCurrentRoutePath();
  const currentFullHash = window.location.hash || "#/theater/home";
  handlePlayRouteTransition(current);
  syncSearchStateFromHash(current);
  if (!uiState.isLoggedIn && !isAuthRoute(current)) {
    setPostLoginRedirectHash(currentFullHash);
    if (currentFullHash !== "#/auth/login") {
      window.location.hash = "#/auth/login";
      return;
    }
  }
  if (uiState.isLoggedIn && hasAuthSessionExpired()) {
    performLogoutAndRedirectToLogin();
    return;
  }
  if (uiState.isLoggedIn && isAuthRoute(current)) {
    const next = consumePostLoginRedirectHash();
    if (currentFullHash !== next) {
      window.location.hash = next;
      return;
    }
  }
  const activeElement = document.activeElement;
  const prevPlayMain = current.startsWith("#/play") ? document.querySelector(".play-main") : null;
  const prevPlayScrollTop = prevPlayMain instanceof HTMLElement ? Number(prevPlayMain.scrollTop || 0) : 0;
  const activeInput = activeElement instanceof HTMLInputElement ? activeElement : null;
  const activeEditable = (
    activeElement instanceof HTMLInputElement
    || activeElement instanceof HTMLTextAreaElement
    || activeElement instanceof HTMLSelectElement
  ) ? activeElement : null;
  const activeField = activeEditable?.getAttribute("data-field") || "";
  const activeCommentId = activeInput?.getAttribute("data-comment-id") || "";
  const preserveWorldInput = (current === "#/world/detail")
    && (activeField === "world-comment-draft" || activeField === "world-reply-draft");
  const preserveThreadInput = current.startsWith("#/messages/thread")
    && activeField === "message-thread-draft";
  const preserveProfileEditInput = Boolean(
    uiState.showProfileEditModal
    && activeEditable
    && activeEditable.classList.contains("profile-edit-input")
    && activeField
  );
  const preserveSelectionStart = (preserveWorldInput && activeInput) ? Number(activeInput.selectionStart ?? -1) : -1;
  const preserveSelectionEnd = (preserveWorldInput && activeInput) ? Number(activeInput.selectionEnd ?? -1) : -1;
  const preserveThreadSelectionStart = (preserveThreadInput && activeInput) ? Number(activeInput.selectionStart ?? -1) : -1;
  const preserveThreadSelectionEnd = (preserveThreadInput && activeInput) ? Number(activeInput.selectionEnd ?? -1) : -1;
  const preserveProfileSelectionStart = (
    preserveProfileEditInput
    && (activeEditable instanceof HTMLInputElement || activeEditable instanceof HTMLTextAreaElement)
  ) ? Number(activeEditable.selectionStart ?? -1) : -1;
  const preserveProfileSelectionEnd = (
    preserveProfileEditInput
    && (activeEditable instanceof HTMLInputElement || activeEditable instanceof HTMLTextAreaElement)
  ) ? Number(activeEditable.selectionEnd ?? -1) : -1;
  const profileBody = document.querySelector(".profile-edit-modal-body");
  const preserveProfileModalScrollTop = (
    uiState.showProfileEditModal && profileBody instanceof HTMLElement
  ) ? Number(profileBody.scrollTop || 0) : -1;
  const threadScrollSnapshot = current.startsWith("#/messages/thread")
    ? captureThreadScrollSnapshot()
    : null;

  document.body.classList.toggle("play-route", current.startsWith("#/play"));
  document.body.classList.toggle("message-thread-route", current.startsWith("#/messages/thread"));
  document.body.classList.toggle("world-detail-route", current === "#/world/detail");
  document.body.classList.toggle("auth-route", current.startsWith("#/auth"));
  const renderer = renderers[current] || pageLogin;
  let renderedHtml = "";
  try {
    renderedHtml = renderer();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error || "unknown");
    console.error("render.route.failed", { route: current, message, error });
    app.innerHTML = `
      <section class="screen">
        <div class="auth-wrap">
          <div class="auth-card">
            <h3>页面渲染失败</h3>
            <p class="sub">路由：${escapeHtml(current)}</p>
            <p class="sub">${escapeHtml(message)}</p>
            <button class="auth-btn auth-primary" data-action="noop" onclick="window.location.reload()">刷新重试</button>
          </div>
        </div>
      </section>
    `;
    return;
  }
  app.innerHTML = renderedHtml;
  if (current.startsWith("#/play") && !uiState.playInitScrollPending) {
    const nextPlayMain = document.querySelector(".play-main");
    if (nextPlayMain instanceof HTMLElement) nextPlayMain.scrollTop = prevPlayScrollTop;
  }
  try {
    hydrateAvatarNodes();
    syncWorldRoleScroll();
    ensureCarouselTimer();
    ensureDramaHeroTimer();
    ensureMessageRealtimeSync();
    if (current.startsWith("#/messages/thread")) {
      syncThreadMessageRowAlignment();
      bindThreadScrollTracker();
      bindThreadMediaAutoScroll();
    } else {
      bindThreadScrollTracker();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error || "unknown");
    console.error("render.post.failed", { route: current, message, error });
  }
  if (current.startsWith("#/messages/thread")) {
    const forceBottom = Boolean(
      !preserveThreadInput
      && (
        !threadScrollSnapshot
        || uiState.messageThreadAutoScrollOnEnter
        || Date.now() < Number(uiState.messageThreadForceBottomUntil || 0)
      )
    );
    restoreThreadScrollAfterRender(threadScrollSnapshot, { forceBottom });
    uiState.messageThreadAutoScrollOnEnter = false;
  }
  if (current.startsWith("#/play") && uiState.playInitScrollPending) {
    uiState.playInitScrollPending = false;
    scrollPlayTurnToTop("auto");
  }
  focusSearchInputIfNeeded();
  if (preserveWorldInput) {
    requestAnimationFrame(() => {
      const selector = activeField === "world-reply-draft"
        ? `.world-reply-editor input[data-field="world-reply-draft"][data-comment-id="${activeCommentId}"]`
        : `input[data-field="world-comment-draft"]`;
      const nextInput = document.querySelector(selector);
      if (!(nextInput instanceof HTMLInputElement)) return;
      nextInput.focus();
      const len = nextInput.value.length;
      const start = preserveSelectionStart >= 0 ? Math.min(preserveSelectionStart, len) : len;
      const end = preserveSelectionEnd >= 0 ? Math.min(preserveSelectionEnd, len) : start;
      try {
        nextInput.setSelectionRange(start, end);
      } catch {
        // ignore selection errors for unsupported input states
      }
    });
  }
  if (preserveThreadInput) {
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("input[data-field='message-thread-draft']");
      if (!(nextInput instanceof HTMLInputElement)) return;
      try {
        nextInput.focus({ preventScroll: true });
      } catch {
        nextInput.focus();
      }
      const len = nextInput.value.length;
      const start = preserveThreadSelectionStart >= 0 ? Math.min(preserveThreadSelectionStart, len) : len;
      const end = preserveThreadSelectionEnd >= 0 ? Math.min(preserveThreadSelectionEnd, len) : start;
      try {
        nextInput.setSelectionRange(start, end);
      } catch {
        // ignore selection errors on unsupported input states
      }
    });
  }
  if (uiState.showProfileEditModal && preserveProfileModalScrollTop >= 0) {
    requestAnimationFrame(() => {
      const nextBody = document.querySelector(".profile-edit-modal-body");
      if (nextBody instanceof HTMLElement) nextBody.scrollTop = preserveProfileModalScrollTop;
    });
  }
  if (preserveProfileEditInput) {
    requestAnimationFrame(() => {
      const nextInput = document.querySelector(`.profile-edit-modal-overlay .profile-edit-input[data-field="${activeField}"]`);
      if (!(nextInput instanceof HTMLElement)) return;
      try {
        nextInput.focus({ preventScroll: true });
      } catch {
        nextInput.focus();
      }
      if (!(nextInput instanceof HTMLInputElement || nextInput instanceof HTMLTextAreaElement)) return;
      const len = nextInput.value.length;
      const start = preserveProfileSelectionStart >= 0 ? Math.min(preserveProfileSelectionStart, len) : len;
      const end = preserveProfileSelectionEnd >= 0 ? Math.min(preserveProfileSelectionEnd, len) : start;
      try {
        nextInput.setSelectionRange(start, end);
      } catch {
        // ignore selection errors for unsupported input states
      }
    });
  }
  // Important: avoid triggering network fetches on every render frame.
  // Section data sync is driven by route changes/startup, not render loops.
}

function focusSearchInputIfNeeded() {
  if (!uiState.searchAutoFocus) return;
  const inputs = [...document.querySelectorAll(".unified-search-input, .xh-mobile-search-input")].filter((node) => node instanceof HTMLInputElement);
  const activeInput = inputs.find((el) => el.offsetParent !== null) || inputs[0];
  if (!(activeInput instanceof HTMLInputElement)) return;
  // Defer one frame to avoid mobile click-triggered rerender stealing focus.
  requestAnimationFrame(() => {
    activeInput.focus();
    activeInput.setSelectionRange(activeInput.value.length, activeInput.value.length);
    uiState.searchAutoFocus = false;
  });
}

function syncWorldRoleScroll() {
  const roleScroll = document.querySelector(".world-role-scroll");
  if (!roleScroll) return;
  roleScroll.scrollLeft = uiState.roleScrollLeft;
  roleScroll.addEventListener("scroll", () => {
    uiState.roleScrollLeft = roleScroll.scrollLeft;
  }, { passive: true });
}

let carouselTimer;
function ensureCarouselTimer() {
  const onWorldDetail = getCurrentRoutePath() === "#/world/detail";
  if (onWorldDetail && !carouselTimer) {
    carouselTimer = setInterval(() => {
      if (getCurrentRoutePath() !== "#/world/detail") return;
      uiState.worldCarouselIndex = (uiState.worldCarouselIndex + 1) % 3;
      render();
    }, 3500);
  }
  if (!onWorldDetail && carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = undefined;
  }
}

let dramaHeroTimer;
function ensureDramaHeroTimer() {
  const onDramaHome = window.location.hash === "#/drama/home";
  if (onDramaHome && !dramaHeroTimer) {
    dramaHeroTimer = setInterval(() => {
      if (window.location.hash !== "#/drama/home") return;
      uiState.dramaHeroIndex = (uiState.dramaHeroIndex + 1) % DRAMA_HERO_TOTAL;
      render();
    }, 4200);
  }
  if (!onDramaHome && dramaHeroTimer) {
    clearInterval(dramaHeroTimer);
    dramaHeroTimer = undefined;
  }
}

let messageRealtimeTimer;
let messageRealtimeSyncing = false;
let messageRealtimeSyncRunner = null;
let messageRealtimeEventSource = null;
let messageRealtimeConnectedUserId = "";
let messageRealtimeReconnectTimer = null;
let messageRealtimePendingRenderWhileTyping = false;
let messageRealtimePendingScrollWhileTyping = false;
let messageRealtimePendingForceBottomWhileTyping = false;
let messageLongPressTimer = null;
let messageLongPressTriggered = false;
let messageLongPressStartX = 0;
let messageLongPressStartY = 0;
let messageCardLongPressTimer = null;
let messageCardLongPressTriggered = false;
let messageCardLongPressStartX = 0;
let messageCardLongPressStartY = 0;
let meMenuToastTimer = null;
let threadScrollBoundNode = null;
let messageThreadStickToBottom = true;
const MESSAGE_THREAD_BOTTOM_THRESHOLD_PX = 72;

function getThreadMessagesWrap() {
  const wrap = document.querySelector(".dm-modern-messages");
  return wrap instanceof HTMLElement ? wrap : null;
}

function getThreadBottomDistance(wrap = null) {
  const node = wrap instanceof HTMLElement ? wrap : getThreadMessagesWrap();
  if (!(node instanceof HTMLElement)) return Number.POSITIVE_INFINITY;
  return Math.max(0, Number(node.scrollHeight || 0) - Number(node.scrollTop || 0) - Number(node.clientHeight || 0));
}

function isThreadNearBottom(wrap = null, thresholdPx = MESSAGE_THREAD_BOTTOM_THRESHOLD_PX) {
  return getThreadBottomDistance(wrap) <= Math.max(0, Number(thresholdPx || 0));
}

function captureThreadScrollSnapshot() {
  const wrap = getThreadMessagesWrap();
  if (!(wrap instanceof HTMLElement)) return null;
  const nearBottom = isThreadNearBottom(wrap);
  messageThreadStickToBottom = nearBottom;
  return {
    scrollTop: Number(wrap.scrollTop || 0),
    scrollHeight: Number(wrap.scrollHeight || 0),
    nearBottom
  };
}

function shouldAutoScrollThread(wrap = null) {
  if (!(window.location.hash || "").startsWith("#/messages/thread")) return false;
  const forceBottomUntil = Number(uiState.messageThreadForceBottomUntil || 0);
  if (Date.now() < forceBottomUntil) return true;
  if (uiState.messageThreadAutoScrollOnEnter) return true;
  const node = wrap instanceof HTMLElement ? wrap : getThreadMessagesWrap();
  if (node instanceof HTMLElement && isThreadNearBottom(node)) return true;
  return Boolean(messageThreadStickToBottom);
}

function onThreadMessagesScroll() {
  const wrap = threadScrollBoundNode;
  if (!(wrap instanceof HTMLElement)) return;
  messageThreadStickToBottom = isThreadNearBottom(wrap);
}

function bindThreadScrollTracker() {
  const nextWrap = getThreadMessagesWrap();
  if (threadScrollBoundNode && threadScrollBoundNode !== nextWrap) {
    threadScrollBoundNode.removeEventListener("scroll", onThreadMessagesScroll);
    threadScrollBoundNode = null;
  }
  if (!(nextWrap instanceof HTMLElement)) return;
  if (threadScrollBoundNode !== nextWrap) {
    threadScrollBoundNode = nextWrap;
    threadScrollBoundNode.addEventListener("scroll", onThreadMessagesScroll, { passive: true });
  }
  messageThreadStickToBottom = isThreadNearBottom(nextWrap);
}

function restoreThreadScrollAfterRender(snapshot = null, { forceBottom = false } = {}) {
  const wrap = getThreadMessagesWrap();
  if (!(wrap instanceof HTMLElement)) return;
  if (forceBottom || snapshot?.nearBottom || shouldAutoScrollThread(wrap)) {
    scrollThreadToBottom(1, { force: true });
    return;
  }
  if (!snapshot) return;
  const maxTop = Math.max(0, Number(wrap.scrollHeight || 0) - Number(wrap.clientHeight || 0));
  const nextTop = Math.max(0, Math.min(Number(snapshot.scrollTop || 0), maxTop));
  wrap.scrollTop = nextTop;
  messageThreadStickToBottom = isThreadNearBottom(wrap);
}

function bindThreadMediaAutoScroll(root = document) {
  const scope = root instanceof Element || root instanceof Document ? root : document;
  const wrap = getThreadMessagesWrap();
  if (!(wrap instanceof HTMLElement)) return;
  const images = scope.querySelectorAll(".dm-media-bubble img");
  images.forEach((img) => {
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.autoScrollBound === "1") return;
    img.dataset.autoScrollBound = "1";
    const onDone = () => {
      if (!shouldAutoScrollThread(wrap)) return;
      scrollThreadToBottom(1);
    };
    if (img.complete) return;
    img.addEventListener("load", onDone, { once: true });
    img.addEventListener("error", onDone, { once: true });
  });
}

function findDynamicItemById(postId) {
  const id = String(postId || "").trim();
  if (!id) return null;
  return allDynamicItems().find((x) => String(x?.id || "").trim() === id) || null;
}

function normalizeRealtimeCommentText(value) {
  return String(value || "").trim();
}

function applyRealtimeDynamicReaction(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(patch.postId || "").trim();
  if (!postId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const existing = findDynamicItemById(postId);
  const seedItem = existing || {
    id: postId,
    likes: Number(patch.likesCount || 0),
    star: Number(patch.favoritesCount || 0),
    comments: 0
  };
  const meta = ensureDynamicMeta(seedItem);
  if (!meta) return false;
  if (Number.isFinite(Number(patch.likesCount))) meta.likes = Number(patch.likesCount);
  if (Number.isFinite(Number(patch.favoritesCount))) meta.star = Number(patch.favoritesCount);
  if (isActorMe) {
    const interactionType = String(patch.reactionType || "").trim();
    if (interactionType === "like" && typeof patch.active === "boolean") meta.liked = patch.active;
    if (interactionType === "favorite" && typeof patch.active === "boolean") meta.favorited = patch.active;
  }
  const itemPatch = {
    likes: Number(meta.likes || 0),
    star: Number(meta.star || 0)
  };
  if (isActorMe) {
    itemPatch.liked = Boolean(meta.liked);
    itemPatch.favorited = Boolean(meta.favorited);
  }
  syncDynamicItemMetrics(postId, itemPatch);
  return true;
}

function applyRealtimeDynamicCommentCreated(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(payload?.postId || patch.postId || "").trim();
  if (!postId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const existing = findDynamicItemById(postId);
  const seedItem = existing || {
    id: postId,
    likes: 0,
    star: 0,
    comments: Number(patch.commentsCount || 0)
  };
  const meta = ensureDynamicMeta(seedItem);
  if (!meta) return false;
  if (Number.isFinite(Number(patch.commentsCount))) {
    meta.commentsCount = Math.max(0, Number(patch.commentsCount));
  }
  const rawComment = payload?.comment && typeof payload.comment === "object" ? payload.comment : null;
  const commentId = String(rawComment?.id || "").trim();
  if (rawComment && commentId && meta.commentsLoaded) {
    const normalized = normalizeThreadCommentNode(rawComment, `dynamic_${postId}_comment`, 0, null);
    if (normalized.parentCommentId) {
      const parentHit = findThreadCommentRowInList(meta.comments || [], String(normalized.parentCommentId || ""));
      const parent = parentHit?.row || null;
      if (parent) {
        if (!Array.isArray(parent.replies)) parent.replies = [];
        const ridx = parent.replies.findIndex((x) => String(x?.id || "") === commentId);
        if (ridx >= 0) parent.replies[ridx] = normalized;
        else {
          const optimisticIdx = isActorMe
            ? parent.replies.findIndex((x) => String(x?.id || "").startsWith("tmp_reply_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
            : -1;
          if (optimisticIdx >= 0) parent.replies[optimisticIdx] = normalized;
          else parent.replies.push(normalized);
        }
      }
    } else {
      const idx = meta.comments.findIndex((x) => String(x?.id || "") === commentId);
      if (idx >= 0) meta.comments[idx] = { ...meta.comments[idx], ...normalized };
      else {
        const optimisticIdx = isActorMe
          ? meta.comments.findIndex((x) => String(x?.id || "").startsWith("tmp_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
          : -1;
        if (optimisticIdx >= 0) meta.comments[optimisticIdx] = normalized;
        else meta.comments.unshift(normalized);
      }
    }
  }
  syncDynamicItemMetrics(postId, { comments: Number(meta.commentsCount || 0) });
  return true;
}

function applyRealtimeDynamicCommentDeleted(payload = {}) {
  const postId = String(payload?.postId || "").trim();
  const commentId = String(payload?.commentId || "").trim();
  if (!postId || !commentId) return false;
  const existing = findDynamicItemById(postId) || { id: postId, comments: 0 };
  const meta = ensureDynamicMeta(existing);
  if (!meta) return false;
  const removed = removeThreadCommentById(meta.comments || [], commentId);
  const removedTopLevel = Boolean(removed?.isTopLevel);
  if (Number.isFinite(Number(payload?.commentsCount))) {
    meta.commentsCount = Math.max(0, Number(payload.commentsCount));
  } else if (removedTopLevel) {
    meta.commentsCount = Math.max(0, Number(meta.commentsCount || 0) - 1);
  }
  syncDynamicItemMetrics(postId, { comments: Number(meta.commentsCount || 0) });
  return true;
}

function applyRealtimeDynamicCommentLike(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(patch.postId || "").trim();
  const commentId = String(patch.commentId || "").trim();
  if (!postId || !commentId) return false;
  const existing = findDynamicItemById(postId) || { id: postId, comments: 0 };
  const meta = ensureDynamicMeta(existing);
  if (!meta) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const hit = findThreadCommentRowInList(meta.comments, commentId);
  if (!hit.row) return false;
  if (Number.isFinite(Number(patch.likesCount))) hit.row.likes = Math.max(0, Number(patch.likesCount));
  if (isActorMe && typeof patch.likedByMe === "boolean") hit.row.likedByMe = patch.likedByMe;
  return true;
}

function applyRealtimeCommunityReaction(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(patch.postId || "").trim();
  if (!postId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const existing = findCommunityPostById(postId) || {
    id: postId,
    likes: Number(patch.likesCount || 0),
    stars: Number(patch.favoritesCount || 0),
    comments: 0
  };
  const meta = ensureCommunityPostMeta(existing);
  if (!meta) return false;
  if (Number.isFinite(Number(patch.likesCount))) meta.likes = Number(patch.likesCount);
  if (Number.isFinite(Number(patch.favoritesCount))) meta.stars = Number(patch.favoritesCount);
  if (isActorMe) {
    const reactionType = String(patch.reactionType || "").trim();
    if (reactionType === "like" && typeof patch.active === "boolean") meta.liked = patch.active;
    if (reactionType === "favorite" && typeof patch.active === "boolean") meta.starred = patch.active;
  }
  patchCommunityPostById(postId, {
    likes: Number(meta.likes || 0),
    stars: Number(meta.stars || 0)
  });
  persistCommunityPostState(postId, {
    likes: Number(meta.likes || 0),
    stars: Number(meta.stars || 0),
    ...(isActorMe ? { liked: Boolean(meta.liked), starred: Boolean(meta.starred) } : {})
  });
  return true;
}

function applyRealtimeCommunityCommentCreated(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(payload?.postId || patch.postId || "").trim();
  if (!postId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const existing = findCommunityPostById(postId) || { id: postId, comments: Number(patch.commentsCount || 0) };
  const meta = ensureCommunityPostMeta(existing);
  if (!meta) return false;
  if (Number.isFinite(Number(patch.commentsCount))) {
    meta.commentsCount = Math.max(0, Number(patch.commentsCount));
  }
  const rawComment = payload?.comment && typeof payload.comment === "object" ? payload.comment : null;
  const commentId = String(rawComment?.id || "").trim();
  if (rawComment && commentId) {
    const normalized = normalizeThreadCommentNode(rawComment, `community_${postId}_comment`, 0, null);
    if (normalized.parentCommentId) {
      const parentHit = findThreadCommentRowInList(meta.comments || [], String(normalized.parentCommentId || ""));
      const parent = parentHit?.row || null;
      if (parent) {
        if (!Array.isArray(parent.replies)) parent.replies = [];
        const ridx = parent.replies.findIndex((x) => String(x?.id || "") === commentId);
        if (ridx >= 0) parent.replies[ridx] = normalized;
        else {
          const optimisticIdx = isActorMe
            ? parent.replies.findIndex((x) => String(x?.id || "").startsWith("tmp_reply_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
            : -1;
          if (optimisticIdx >= 0) parent.replies[optimisticIdx] = normalized;
          else parent.replies.push(normalized);
        }
      }
    } else {
      const idx = meta.comments.findIndex((x) => String(x?.id || "") === commentId);
      if (idx >= 0) meta.comments[idx] = { ...meta.comments[idx], ...normalized };
      else {
        const optimisticIdx = isActorMe
          ? meta.comments.findIndex((x) => String(x?.id || "").startsWith("tmp_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
          : -1;
        if (optimisticIdx >= 0) meta.comments[optimisticIdx] = normalized;
        else meta.comments.unshift(normalized);
      }
    }
  }
  patchCommunityPostById(postId, { comments: Number(meta.commentsCount || 0) });
  persistCommunityPostState(postId, {
    commentsCount: Number(meta.commentsCount || 0),
    comments: Array.isArray(meta.comments) ? meta.comments : []
  });
  return true;
}

function applyRealtimeCommunityCommentDeleted(payload = {}) {
  const postId = String(payload?.postId || "").trim();
  const commentId = String(payload?.commentId || "").trim();
  if (!postId || !commentId) return false;
  const existing = findCommunityPostById(postId) || { id: postId, comments: 0 };
  const meta = ensureCommunityPostMeta(existing);
  if (!meta) return false;
  const removed = removeThreadCommentById(meta.comments || [], commentId);
  const removedTopLevel = Boolean(removed?.isTopLevel);
  if (Number.isFinite(Number(payload?.commentsCount))) {
    meta.commentsCount = Math.max(0, Number(payload.commentsCount));
  } else if (removedTopLevel) {
    meta.commentsCount = Math.max(0, Number(meta.commentsCount || 0) - 1);
  }
  patchCommunityPostById(postId, { comments: Number(meta.commentsCount || 0) });
  persistCommunityPostState(postId, {
    commentsCount: Number(meta.commentsCount || 0),
    comments: Array.isArray(meta.comments) ? meta.comments : []
  });
  return true;
}

function applyRealtimeCommunityCommentLike(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const postId = String(patch.postId || "").trim();
  const commentId = String(patch.commentId || "").trim();
  if (!postId || !commentId) return false;
  const existing = findCommunityPostById(postId) || { id: postId, comments: 0 };
  const meta = ensureCommunityPostMeta(existing);
  if (!meta) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const hit = findThreadCommentRowInList(meta.comments, commentId);
  if (!hit.row) return false;
  if (Number.isFinite(Number(patch.likesCount))) hit.row.likes = Math.max(0, Number(patch.likesCount));
  if (isActorMe && typeof patch.likedByMe === "boolean") hit.row.likedByMe = patch.likedByMe;
  persistCommunityPostState(postId, {
    commentsCount: Number(meta.commentsCount || 0),
    comments: Array.isArray(meta.comments) ? meta.comments : []
  });
  return true;
}

function findWorldCommentRow(state, commentId) {
  return findThreadCommentRowInList(state?.comments || [], commentId);
}

function applyRealtimeWorldReaction(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const worldCardId = String(patch.worldCardId || "").trim();
  if (!worldCardId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const baseWorld = FEED_DATA.find((x) => String(x?.id || "") === worldCardId) || {};
  const viewerPatch = { ...patch };
  if (!isActorMe) {
    delete viewerPatch.likedByMe;
    delete viewerPatch.favoritedByMe;
    delete viewerPatch.interactionType;
    delete viewerPatch.active;
  }
  const resolved = resolveWorldReactionPatch(baseWorld, viewerPatch);
  syncWorldStateEverywhere(worldCardId, {
    liked: resolved.liked,
    favorited: resolved.favorited,
    like: resolved.like,
    star: resolved.star
  });
  return true;
}

function applyRealtimeWorldCommentCreated(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const worldCardId = String(payload?.worldCardId || patch.worldCardId || "").trim();
  if (!worldCardId) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const world = FEED_DATA.find((x) => String(x?.id || "") === worldCardId) || null;
  const fallback = world ? toMetricCount(world.comment) : 0;
  const state = getWorldCommentState(worldCardId, fallback);
  if (!state) return false;
  if (Number.isFinite(Number(patch.commentsCount))) {
    state.commentsCount = Math.max(0, Number(patch.commentsCount));
  }
  const rawComment = payload?.comment && typeof payload.comment === "object" ? payload.comment : null;
  const commentId = String(rawComment?.id || "").trim();
  if (state.loaded && rawComment && commentId) {
    const normalized = {
      id: commentId,
      worldCardId: String(rawComment.worldCardId || worldCardId),
      userId: String(rawComment.userId || ""),
      parentCommentId: rawComment.parentCommentId || null,
      user: String(rawComment.user || "玩家"),
      text: normalizeRealtimeCommentText(rawComment.text),
      likes: Number(rawComment.likes || 0),
      likedByMe: Boolean(rawComment.likedByMe),
      createdAt: rawComment.createdAt || new Date().toISOString(),
      time: formatWorldCommentTime(rawComment.createdAt || new Date().toISOString()),
      replies: []
    };
    if (normalized.parentCommentId) {
      const parentHit = findThreadCommentRowInList(state.comments || [], String(normalized.parentCommentId || ""));
      const parent = parentHit?.row || null;
      if (parent) {
        if (!Array.isArray(parent.replies)) parent.replies = [];
        const ridx = parent.replies.findIndex((x) => String(x?.id || "") === commentId);
        if (ridx >= 0) parent.replies[ridx] = normalized;
        else {
          const optimisticIdx = isActorMe
            ? parent.replies.findIndex((x) => String(x?.id || "").startsWith("tmp_reply_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
            : -1;
          if (optimisticIdx >= 0) parent.replies[optimisticIdx] = normalized;
          else parent.replies.push(normalized);
        }
      }
    } else {
      const idx = (state.comments || []).findIndex((x) => String(x?.id || "") === commentId);
      if (idx >= 0) state.comments[idx] = { ...state.comments[idx], ...normalized };
      else {
        const optimisticIdx = isActorMe
          ? (state.comments || []).findIndex((x) => String(x?.id || "").startsWith("tmp_") && normalizeRealtimeCommentText(x?.text) === normalized.text)
          : -1;
        if (optimisticIdx >= 0) state.comments[optimisticIdx] = normalized;
        else state.comments.unshift(normalized);
      }
    }
    persistWorldCommentsCache(worldCardId, state);
  }
  syncWorldStateEverywhere(worldCardId, { comment: formatMetricCount(state.commentsCount) });
  return true;
}

function applyRealtimeWorldCommentDeleted(payload = {}) {
  const worldCardId = String(payload?.worldCardId || "").trim();
  const commentId = String(payload?.commentId || "").trim();
  if (!worldCardId || !commentId) return false;
  const world = FEED_DATA.find((x) => String(x?.id || "") === worldCardId) || null;
  const fallback = world ? toMetricCount(world.comment) : 0;
  const state = getWorldCommentState(worldCardId, fallback);
  if (!state) return false;
  const removed = removeThreadCommentById(state.comments || [], commentId);
  const removedTopLevel = Boolean(removed?.isTopLevel);
  if (Number.isFinite(Number(payload?.commentsCount))) {
    state.commentsCount = Math.max(0, Number(payload.commentsCount));
  } else if (removedTopLevel) {
    state.commentsCount = Math.max(0, Number(state.commentsCount || 0) - 1);
  }
  persistWorldCommentsCache(worldCardId, state);
  syncWorldStateEverywhere(worldCardId, { comment: formatMetricCount(state.commentsCount) });
  return true;
}

function applyRealtimeWorldCommentLike(payload = {}) {
  const patch = payload?.patch && typeof payload.patch === "object" ? payload.patch : {};
  const worldCardId = String(patch.worldCardId || "").trim();
  const commentId = String(patch.commentId || "").trim();
  if (!worldCardId || !commentId) return false;
  const world = FEED_DATA.find((x) => String(x?.id || "") === worldCardId) || null;
  const fallback = world ? toMetricCount(world.comment) : 0;
  const state = getWorldCommentState(worldCardId, fallback);
  if (!state) return false;
  const actorId = String(payload?.actorId || "").trim();
  const isActorMe = actorId && actorId === String(uiState.currentUserId || "");
  const hit = findWorldCommentRow(state, commentId);
  if (!hit.row) return false;
  if (Number.isFinite(Number(patch.likesCount))) hit.row.likes = Math.max(0, Number(patch.likesCount));
  if (isActorMe && typeof patch.likedByMe === "boolean") hit.row.likedByMe = patch.likedByMe;
  persistWorldCommentsCache(worldCardId, state);
  return true;
}

function applyRealtimeGameSessionInterrupted(payload = {}) {
  const worldCardId = String(payload?.worldCardId || "").trim();
  const incomingIds = Array.isArray(payload?.sessionIds) ? payload.sessionIds : [];
  const interruptedIds = new Set(incomingIds.map((x) => String(x || "").trim()).filter(Boolean));
  const activeSessionId = String(uiState.playSessionId || "").trim();
  const selectedWorldId = String(uiState.selectedWorldId || "").trim();
  const sessionMatched = activeSessionId && interruptedIds.has(activeSessionId);
  const worldMatched = worldCardId && selectedWorldId && worldCardId === selectedWorldId && Boolean(activeSessionId);
  if (!sessionMatched && !worldMatched) return false;
  uiState.playRequestNonce = Number(uiState.playRequestNonce || 0) + 1;
  uiState.playRequesting = false;
  uiState.playSessionId = "";
  clearPlaySessionHint(selectedWorldId || worldCardId, uiState.currentUserId);
  uiState.playSessionBlockedReason = "该剧情新版本已上线，请先退出并重新进入";
  uiState.playEntries = (Array.isArray(uiState.playEntries) ? uiState.playEntries : []).filter((x) => x?.type !== "streaming" && x?.type !== "pending");
  uiState.playEntries.push({ type: "impact", text: "系统提示：该剧情新版本已上线，请返回故事详情后重新进入。" });
  showPlaySystemHint(uiState.playSessionBlockedReason, "error");
  return true;
}

function applyRealtimeSocialPatch(payload = {}) {
  const kind = String(payload?.kind || "").trim();
  if (!kind) return false;
  if (kind === "dynamic.reaction") return applyRealtimeDynamicReaction(payload);
  if (kind === "dynamic.comment.created") return applyRealtimeDynamicCommentCreated(payload);
  if (kind === "dynamic.comment.deleted") return applyRealtimeDynamicCommentDeleted(payload);
  if (kind === "dynamic.comment.like") return applyRealtimeDynamicCommentLike(payload);
  if (kind === "community.reaction") return applyRealtimeCommunityReaction(payload);
  if (kind === "community.comment.created") return applyRealtimeCommunityCommentCreated(payload);
  if (kind === "community.comment.deleted") return applyRealtimeCommunityCommentDeleted(payload);
  if (kind === "community.comment.like") return applyRealtimeCommunityCommentLike(payload);
  if (kind === "world.reaction") return applyRealtimeWorldReaction(payload);
  if (kind === "world.comment.created") return applyRealtimeWorldCommentCreated(payload);
  if (kind === "world.comment.deleted") return applyRealtimeWorldCommentDeleted(payload);
  if (kind === "world.comment.like") return applyRealtimeWorldCommentLike(payload);
  if (kind === "game.session.interrupted") return applyRealtimeGameSessionInterrupted(payload);
  return false;
}

function isMessageThreadDraftFocused() {
  if (!(window.location.hash || "").startsWith("#/messages/thread")) return false;
  const active = document.activeElement;
  if (!(active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement)) return false;
  return active.getAttribute("data-field") === "message-thread-draft";
}

function triggerMessageRealtimeRender(options = {}) {
  const { scrollToBottom = false, forceBottom = false } = options;
  if (isMessageThreadDraftFocused()) {
    if (patchActiveThreadDomWhileTyping({ scrollToBottom, forceBottom })) return;
    messageRealtimePendingRenderWhileTyping = true;
    if (scrollToBottom) {
      messageRealtimePendingScrollWhileTyping = true;
      messageRealtimePendingForceBottomWhileTyping = messageRealtimePendingForceBottomWhileTyping || forceBottom;
    }
    return;
  }
  messageRealtimePendingRenderWhileTyping = false;
  render();
  if (scrollToBottom || messageRealtimePendingScrollWhileTyping) {
    const shouldForce = Boolean(forceBottom || messageRealtimePendingForceBottomWhileTyping);
    scrollThreadToBottom(1, { force: shouldForce });
    messageRealtimePendingScrollWhileTyping = false;
    messageRealtimePendingForceBottomWhileTyping = false;
  }
}

function getMessageRealtimePollIntervalMs() {
  const route = getCurrentRoutePath();
  if (document.visibilityState !== "visible") return 15_000;
  if (route.startsWith("#/messages/thread")) return 1_500;
  if (route.startsWith("#/messages/chat")) return 1_200;
  if (route.startsWith("#/messages")) return 2_000;
  return 30_000;
}

function scrollThreadToBottom(retry = 0, options = {}) {
  const force = Boolean(options?.force);
  requestAnimationFrame(() => {
    const wrap = getThreadMessagesWrap();
    if (!(wrap instanceof HTMLElement)) return;
    if (!force && !shouldAutoScrollThread(wrap)) return;
    wrap.scrollTop = wrap.scrollHeight;
    messageThreadStickToBottom = true;
    if (retry >= 1) return;
    setTimeout(() => {
      if (!force && !shouldAutoScrollThread(wrap)) return;
      wrap.scrollTop = wrap.scrollHeight;
      messageThreadStickToBottom = true;
    }, 32);
    setTimeout(() => {
      if (!force && !shouldAutoScrollThread(wrap)) return;
      wrap.scrollTop = wrap.scrollHeight;
      messageThreadStickToBottom = true;
    }, 180);
  });
}

function clearThreadDraftInputDom(options = {}) {
  const keepFocus = options?.keepFocus !== false;
  const input = document.querySelector("input[data-field='message-thread-draft']");
  if (!(input instanceof HTMLInputElement)) return;
  input.value = "";
  if (!keepFocus) return;
  try {
    input.focus({ preventScroll: true });
  } catch {
    input.focus();
  }
  try {
    input.setSelectionRange(0, 0);
  } catch {
    // ignore
  }
}

function clearThreadDraftStateAndInput(options = {}) {
  const keepFocus = options?.keepFocus !== false;
  uiState.messageThreadDraft = "";
  clearThreadDraftInputDom({ keepFocus });
  requestAnimationFrame(() => {
    clearThreadDraftInputDom({ keepFocus });
  });
}

function patchActiveThreadDomWhileTyping(options = {}) {
  const { scrollToBottom = false, forceBottom = false } = options;
  if (!isMessageThreadDraftFocused()) return false;
  const activeId = getActiveConversationId();
  if (!activeId) return false;
  const wrap = document.querySelector(".dm-modern-messages");
  if (!(wrap instanceof HTMLElement)) return false;
  const chatMeta = resolveThreadChatMeta(activeId);
  const myName = String(uiState.profile?.name || "我").trim() || "我";
  const myUserId = String(uiState.currentUserId || uiState.profile?.id || "").trim();
  const myAvatarText = myName.slice(0, 1) || "我";
  const myAvatarUrl = resolveAvatarUrlByIdentity(myName, myUserId);
  const nextHtml = buildThreadMessagesHtml(activeId, chatMeta, {
    name: myName,
    userId: myUserId,
    text: myAvatarText,
    avatarUrl: myAvatarUrl
  });
  if (wrap.innerHTML !== nextHtml) {
    wrap.innerHTML = nextHtml;
    syncThreadMessageRowAlignment(wrap);
    bindThreadMediaAutoScroll(wrap);
    hydrateAvatarNodes();
  }
  if (chatMeta.type === "私聊") {
    const statusNode = document.querySelector(".dm-user h3 + p");
    if (statusNode instanceof HTMLElement) {
      statusNode.textContent = formatPeerOnlineStatus(uiState.messagePeerPresence[activeId] || null);
    }
  }
  if (scrollToBottom) scrollThreadToBottom(1, { force: forceBottom });
  return true;
}

function ensureMessageRealtimeSync() {
  const canSync = uiState.isLoggedIn && Boolean(uiState.currentUserId);
  if (!canSync) {
    if (messageRealtimeTimer) {
      clearTimeout(messageRealtimeTimer);
      messageRealtimeTimer = undefined;
    }
    if (messageRealtimeReconnectTimer) {
      clearTimeout(messageRealtimeReconnectTimer);
      messageRealtimeReconnectTimer = null;
    }
    if (messageRealtimeEventSource) {
      messageRealtimeEventSource.close();
      messageRealtimeEventSource = null;
    }
    messageRealtimeConnectedUserId = "";
    messageRealtimeSyncRunner = null;
    messageRealtimePendingRenderWhileTyping = false;
    messageRealtimePendingScrollWhileTyping = false;
    messageRealtimePendingForceBottomWhileTyping = false;
    return;
  }
  const closeStream = () => {
    if (!messageRealtimeEventSource) return;
    messageRealtimeEventSource.close();
    messageRealtimeEventSource = null;
  };
  const scheduleNextSync = () => {
    if (messageRealtimeTimer) {
      clearTimeout(messageRealtimeTimer);
      messageRealtimeTimer = undefined;
    }
    const delay = getMessageRealtimePollIntervalMs();
    messageRealtimeTimer = setTimeout(() => {
      messageRealtimeTimer = undefined;
      runSync();
      scheduleNextSync();
    }, delay);
  };
  const runSync = () => {
    if (messageRealtimeSyncing) return;
    messageRealtimeSyncing = true;
    const liveHash = window.location.hash || "";
    const liveOnThreadPage = liveHash.startsWith("#/messages/thread");
    void syncMessageInbox()
      .then((inboxChanged) => {
        if (!liveOnThreadPage) {
          return {
            inboxChanged,
            threadState: { messageChanged: false, peerChanged: false }
          };
        }
        return syncActiveConversationThread().then((threadState) => ({ inboxChanged, threadState }));
      })
      .then(({ inboxChanged = false, threadState } = {}) => {
        const threadMessageChanged = Boolean(threadState?.messageChanged);
        const threadPeerChanged = Boolean(threadState?.peerChanged);
        const activeId = getActiveConversationId();
        if (liveOnThreadPage && activeId && shouldHeartbeatPresence(activeId)) {
          void markConversationReadOnServer(activeId)
            .then(() => {
              uiState.messageReadAckConversationId = activeId;
              markMessageRead(activeId);
              triggerMessageRealtimeRender();
            })
            .catch(() => {
              uiState.messagePresenceBeatAt[activeId] = 0;
            });
        }
        if (inboxChanged || threadMessageChanged || threadPeerChanged) {
          triggerMessageRealtimeRender({ scrollToBottom: liveOnThreadPage && threadMessageChanged });
        }
      })
      .catch(() => {})
      .finally(() => {
        messageRealtimeSyncing = false;
      });
  };
  messageRealtimeSyncRunner = runSync;
  const onRealtimeNewMessage = (payload) => {
    const conversationId = String(payload?.conversationId || "").trim();
    if (!conversationId) return;
    const message = payload?.message && typeof payload.message === "object" ? payload.message : null;
    if (!message) return;
    const deletedAt = getMessageConversationDeletedAt(conversationId);
    if (deletedAt) {
      const createdAtTs = new Date(String(message?.created_at || "")).getTime();
      if (Number.isFinite(createdAtTs) && createdAtTs <= deletedAt) return;
      clearMessageConversationDeletedAt(conversationId);
    }
    const activeId = getActiveConversationId();
    const onThread = (window.location.hash || "").startsWith("#/messages/thread");
    const isActiveThread = onThread && activeId === conversationId;
    const isWithdrawEvent = (
      String(message?.message_type || "").trim() === "system"
      && String(message?.payload?.kind || "").trim() === "withdraw"
    );
    if (isWithdrawEvent) {
      const handled = applyWithdrawSystemMessage(conversationId, message, uiState.currentUserId);
      const fromMe = String(message.sender_id || "") === String(uiState.currentUserId || "");
      if (fromMe) markMessageSendGuard(conversationId, String(message.id || "").trim());
      if (!fromMe && !isActiveThread) {
        const item = getMessageInboxItem(conversationId);
        if (item && !isMessageThreadMuted(conversationId)) item.badge = (Number(item.badge) || 0) + 1;
      } else {
        markMessageRead(conversationId);
      }
      if (handled) triggerMessageRealtimeRender({ scrollToBottom: isActiveThread });
      return;
    }
    const inserted = upsertThreadMessageFromServer(conversationId, message, uiState.currentUserId);
    const fromMe = String(message.sender_id || "") === String(uiState.currentUserId || "");
    if (fromMe) {
      markMessageSendGuard(conversationId, String(message.id || "").trim());
    }
    const preview = String(message.content || "").trim() || "新消息";
    const time = formatThreadClock(message.created_at);
    const messageCreatedAt = String(message.created_at || "").trim();
    updateMessageInboxPreview(conversationId, preview, {
      time,
      lastMessageAt: messageCreatedAt || new Date().toISOString()
    });
    const inboxItem = getMessageInboxItem(conversationId);
    const cachedMeta = getCachedMessageMeta(conversationId) || {};
    if (!inboxItem) {
      MESSAGE_INBOX.unshift(normalizeStoryInboxItem({
        id: conversationId,
        name: String(cachedMeta.name || "会话"),
        preview,
        type: "私聊",
        bizType: String(cachedMeta.bizType || "dm").trim() || "dm",
        time,
        lastMessageAt: messageCreatedAt || new Date().toISOString(),
        badge: 0,
        userId: String(cachedMeta.userId || "").trim(),
        avatarUrl: String(cachedMeta.avatarUrl || "").trim(),
        worldId: String(cachedMeta.worldId || "").trim(),
        sessionId: String(cachedMeta.sessionId || "").trim()
      }));
    }
    persistMessageMeta(conversationId, {
      name: inboxItem?.name || cachedMeta.name,
      userId: inboxItem?.userId || cachedMeta.userId,
      avatarUrl: inboxItem?.avatarUrl || cachedMeta.avatarUrl,
      bizType: inboxItem?.bizType || cachedMeta.bizType,
      worldId: inboxItem?.worldId || cachedMeta.worldId,
      sessionId: inboxItem?.sessionId || cachedMeta.sessionId
    });
    if (fromMe || isActiveThread) {
      markMessageRead(conversationId);
    } else {
      const item = getMessageInboxItem(conversationId);
      if (item && !isMessageThreadMuted(conversationId)) item.badge = (Number(item.badge) || 0) + 1;
    }
    if (inserted || isActiveThread) {
      persistMessageThreadForConversation(conversationId);
    }
    if (isActiveThread && shouldHeartbeatPresence(conversationId)) {
      void markConversationReadOnServer(conversationId)
        .then(() => {
          uiState.messageReadAckConversationId = conversationId;
          markMessageRead(conversationId);
          triggerMessageRealtimeRender();
        })
        .catch(() => {
          uiState.messagePresenceBeatAt[conversationId] = 0;
        });
    }
    if (inserted || !fromMe || isActiveThread) {
      triggerMessageRealtimeRender({ scrollToBottom: isActiveThread && inserted });
    }
  };
  const onRealtimeRead = (payload) => {
    const conversationId = String(payload?.conversationId || "").trim();
    const receipt = payload?.receipt && typeof payload.receipt === "object" ? payload.receipt : null;
    if (!conversationId || !receipt) return;
    const readerId = String(receipt.userId || "").trim();
    const lastReadAt = String(receipt.lastReadAt || "").trim();
    if (readerId === String(uiState.currentUserId || "")) {
      markMessageRead(conversationId);
      triggerMessageRealtimeRender();
      return;
    }
    const prevPeer = uiState.messagePeerPresence[conversationId] || {};
    uiState.messagePeerPresence[conversationId] = {
      ...prevPeer,
      lastReadAt,
      online: true
    };
    const changed = applyPeerReadReceipt(conversationId, lastReadAt);
    if (changed) triggerMessageRealtimeRender();
  };
  const onRealtimeSocialPatch = (payload) => {
    const changed = applyRealtimeSocialPatch(payload);
    if (changed) triggerMessageRealtimeRender();
  };

  runSync();
  scheduleNextSync();
  const userId = String(uiState.currentUserId || "").trim();
  if (!userId) return;
  if (messageRealtimeConnectedUserId === userId && messageRealtimeEventSource) return;
  closeStream();
  messageRealtimeConnectedUserId = userId;
  if (messageRealtimeReconnectTimer) {
    clearTimeout(messageRealtimeReconnectTimer);
    messageRealtimeReconnectTimer = null;
  }
  if (typeof window.EventSource !== "function") {
    return;
  }
  const url = `${API_BASE}/messages/stream?userId=${encodeURIComponent(userId)}&_ts=${Date.now()}`;
  messageRealtimeEventSource = new EventSource(url);
  messageRealtimeEventSource.addEventListener("connected", () => {
    runSync();
  });
  messageRealtimeEventSource.addEventListener("message:new", (event) => {
    let payload = null;
    try {
      payload = JSON.parse(String(event?.data || "{}"));
    } catch {
      payload = null;
    }
    if (payload) onRealtimeNewMessage(payload);
  });
  messageRealtimeEventSource.addEventListener("conversation:read", (event) => {
    let payload = null;
    try {
      payload = JSON.parse(String(event?.data || "{}"));
    } catch {
      payload = null;
    }
    if (payload) onRealtimeRead(payload);
  });
  messageRealtimeEventSource.addEventListener("social:patch", (event) => {
    let payload = null;
    try {
      payload = JSON.parse(String(event?.data || "{}"));
    } catch {
      payload = null;
    }
    if (payload) onRealtimeSocialPatch(payload);
  });
  messageRealtimeEventSource.onerror = () => {
    closeStream();
    if (messageRealtimeReconnectTimer) return;
    messageRealtimeReconnectTimer = setTimeout(() => {
      messageRealtimeReconnectTimer = null;
      ensureMessageRealtimeSync();
    }, 2_000);
  };
}

document.addEventListener("click", (event) => {
  if (messageLongPressTriggered || messageCardLongPressTriggered) {
    messageLongPressTriggered = false;
    messageCardLongPressTriggered = false;
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  const inCommunitySearchFlow = window.location.hash.startsWith("#/community");
  const cardLongPressMenu = event.target.closest(".msg-card-action-menu");
  const cardLongPressTrigger = event.target.closest(".msg-touch-target");
  const cardDeleteConfirmModal = event.target.closest(".dm-clear-confirm-modal");
  if (
    uiState.messageCardLongPressMenuOpen
    && !cardLongPressMenu
    && !cardLongPressTrigger
    && !(uiState.messageCardDeleteConfirmOpen && cardDeleteConfirmModal)
  ) {
    closeMessageCardLongPressMenu();
    render();
    return;
  }
  const plusTrigger = event.target.closest("[data-action='toggle-message-plus']");
  const plusMenu = event.target.closest(".msg-plus-menu");
  const threadMenuTrigger = event.target.closest("[data-action='toggle-message-thread-menu']");
  const threadMenu = event.target.closest(".dm-thread-menu");
  if (uiState.messagesPlusOpen && !plusTrigger && !plusMenu) {
    uiState.messagesPlusOpen = false;
    render();
    return;
  }
  if (uiState.messageThreadMenuOpen && !threadMenuTrigger && !threadMenu) {
    uiState.messageThreadMenuOpen = false;
    render();
    return;
  }
  const plazaTopicTrigger = event.target.closest("[data-action='toggle-plaza-topics']");
  const plazaTopicPanel = event.target.closest(".xh-mobile-topic-shell");
  if (uiState.plazaTopicPanelOpen && !plazaTopicTrigger && !plazaTopicPanel) {
    uiState.plazaTopicPanelOpen = false;
    render();
    return;
  }
  const communityTopicTrigger = event.target.closest("[data-action='toggle-community-topics']");
  const communityTopicPanel = event.target.closest(".community-filter-topic-shell");
  if (uiState.communityTopicPanelOpen && !communityTopicTrigger && !communityTopicPanel) {
    uiState.communityTopicPanelOpen = false;
    render();
    return;
  }
  const loginAvatarTrigger = event.target.closest(".xh-avatar-btn.guest, .avatar.guest");
  if (loginAvatarTrigger) {
    setPostLoginRedirectHash(window.location.hash || "#/theater/home");
    window.location.hash = "#/auth/login";
    return;
  }
  const profileAvatarTrigger = event.target.closest(".user-avatar-click");
  if (profileAvatarTrigger) {
    const userName = resolveUserNameFromNode(profileAvatarTrigger);
    const userId = resolveUserIdFromNode(profileAvatarTrigger);
    openAuthorProfileByName(userName, userId);
    render();
    return;
  }

  const meMenuTrigger = event.target.closest(".me-menu-trigger");
  const meSideSheet = event.target.closest(".me-side-sheet");
  if (uiState.meMenuOpen && !meMenuTrigger && !meSideSheet) {
    uiState.meMenuOpen = false;
    render();
    return;
  }
  const worldMenuTrigger = event.target.closest(".world-detail-owner-menu-btn");
  const worldMenuPanel = event.target.closest(".world-detail-owner-menu");
  if (uiState.worldDetailMenuOpen && !worldMenuTrigger && !worldMenuPanel) {
    uiState.worldDetailMenuOpen = false;
    render();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    const action = actionTarget.getAttribute("data-action");

    if (action === "world-tip-author") {
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      triggerWorldActionFx("tip", 620);
      return;
    }

    if (action === "noop") {
      return;
    }
    if (action === "open-unified-search") {
      const scope = actionTarget.getAttribute("data-scope") || "all";
      const query = actionTarget.getAttribute("data-query");
      if (query) {
        uiState.searchQuery = query;
        uiState.communitySearchQuery = query;
      }
      openUnifiedSearch(scope);
      return;
    }
    if (action === "open-search-panel") {
      openUnifiedSearch(inCommunitySearchFlow ? "community" : "all");
      return;
    }
    if (action === "close-search-panel") {
      openUnifiedSearch(inCommunitySearchFlow ? "community" : "all");
      return;
    }
    if (action === "submit-search") {
      const searchScope = actionTarget.closest(".xh-search, .xh-mobile-search-row, .search-mobile-global-field, .community-search-wrap, .unified-search-page");
      const scopeInput = searchScope?.querySelector("input");
      const directValue = (scopeInput instanceof HTMLInputElement ? scopeInput.value : "").trim();
      const fallbackValue = uiState.searchQuery.trim();
      const routeScope = window.location.hash.startsWith("#/community/search") ? "community" : "";
      const preferredScope = routeScope || searchScope?.getAttribute("data-search-scope") || actionTarget.getAttribute("data-scope") || uiState.unifiedSearchScope || "all";
      executeSearch(directValue || fallbackValue, { scope: preferredScope });
      return;
    }
    if (action === "cancel-search-results") {
      const currentRoute = getCurrentRoutePath();
      const inSearchFlow = currentRoute === "#/search" || currentRoute === "#/search/results" || currentRoute === "#/community/search";
      if (inSearchFlow) {
        const origin = (uiState.searchOriginRoute || getHashQueryValue("from") || "").trim();
        const fallback = "#/theater/home";
        const target = origin || fallback;
        if (window.location.hash !== target) {
          window.location.hash = target;
          return;
        }
        render();
        return;
      }
      window.history.back();
      return;
    }
    if (action === "toggle-message-plus") {
      uiState.messagesPlusOpen = !uiState.messagesPlusOpen;
      uiState.messageThreadMenuOpen = false;
      render();
      return;
    }
    if (action === "toggle-message-search") {
      openUnifiedSearch("messages");
      return;
    }
    if (action === "message-menu-action") {
      const label = actionTarget.getAttribute("data-label") || "功能";
      uiState.messagesPlusOpen = false;
      showMessageFeedback(`${label}功能已打开（占位）`);
      return;
    }
    if (action === "message-search-submit") {
      executeSearch(uiState.messageSearchQuery || "", { scope: "messages" });
      return;
    }
    if (action === "message-search-clear") {
      uiState.messageSearchQuery = "";
      uiState.messageSearchKeyword = "";
      render();
      return;
    }
    if (action === "message-search-clear-inline") {
      uiState.searchQuery = "";
      uiState.communitySearchQuery = "";
      const origin = (uiState.searchOriginRoute || getHashQueryValue("from") || "").trim();
      const params = new URLSearchParams();
      if (origin) params.set("from", origin);
      params.set("scope", "messages");
      const nextHash = `#/search?${params.toString()}`;
      if (window.location.hash !== nextHash) {
        window.location.hash = nextHash;
        return;
      }
      render();
      return;
    }
    if (action === "set-unified-search-scope") {
      const scope = actionTarget.getAttribute("data-scope") || "all";
      if (["all", "community", "messages"].includes(scope)) {
        uiState.unifiedSearchScope = scope;
        render();
      }
      return;
    }
    if (action === "message-like-thanks") {
      const user = actionTarget.getAttribute("data-user") || "对方";
      const userId = actionTarget.getAttribute("data-user-id") || "";
      void openOrCreateDirectThread(userId, user)
        .then((conversationId) => {
          if (!conversationId) return;
          return sendMessageToThread(conversationId, "谢谢你的点赞和收藏，真的很有动力！")
            .then((message) => {
              pushThreadMessage(conversationId, "谢谢你的点赞和收藏，真的很有动力！", "me", {
                type: String(message?.message_type || "text"),
                payload: message?.payload && typeof message.payload === "object" ? message.payload : {},
                createdAt: String(message?.created_at || message?.createdAt || "")
              });
              render();
            });
        })
        .catch((error) => {
          uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "message-open-content") {
      const worldRaw = actionTarget.getAttribute("data-world") || "";
      const worldId = getSafeWorldId(worldRaw, 0);
      const targetType = String(actionTarget.getAttribute("data-target-type") || "").trim();
      const postId = String(actionTarget.getAttribute("data-post-id") || "").trim();
      if (worldId > 0) {
        setSelectedWorldId(worldId);
        window.location.hash = "#/world/detail";
        return;
      }
      if (postId) {
        if (targetType === "community_post" || targetType === "community_post_comment") {
          uiState.selectedCommunityPostId = postId;
          window.location.hash = "#/community/post/detail";
          return;
        }
        uiState.selectedDynamicId = postId;
        window.location.hash = "#/messages/detail";
        return;
      }
      showMessageFeedback("暂时无法定位该内容");
      return;
    }
    if (action === "message-follow-action") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "对方";
      const userId = actionTarget.getAttribute("data-user-id") || "";
      const label = actionTarget.getAttribute("data-label") || "关注";
      if (label === "发私信") {
        void openOrCreateDirectThread(userId, user).catch((error) => {
          uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
        return;
      }
      if (!id) return;
      const current = String(uiState.messageFollowActions[id] || label || "").trim();
      const shouldFollow = !(current === "已关注" || current === "已回关");
      void setMessageNoticeFollowAction(id, shouldFollow)
        .then((relation) => {
          const followedByMe = Boolean(relation?.followedByMe);
          uiState.messageFollowActions[id] = followedByMe ? "发私信" : "回关";
          const idx = MESSAGE_NEW_FOLLOWS.findIndex((x) => String(x?.id || "") === id);
          if (idx >= 0) {
            MESSAGE_NEW_FOLLOWS[idx].followedByMe = followedByMe;
            MESSAGE_NEW_FOLLOWS[idx].action = uiState.messageFollowActions[id];
          }
          showMessageFeedback(`${followedByMe ? "已回关" : "已取消回关"} ${user}`);
          void syncMessageNoticeSections({ force: true });
        })
        .catch((error) => {
          showMessageFeedback(`关注操作失败：${error instanceof Error ? error.message : "unknown"}`);
        });
      return;
    }
    if (action === "message-comment-like") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "评论";
      if (!id) return;
      const nextActive = !Boolean(uiState.messageCommentLikes[id]);
      void setMessageNoticeCommentLike(id, nextActive)
        .then((result) => {
          uiState.messageCommentLikes[id] = Boolean(result?.likedByMe);
          showMessageFeedback(`${uiState.messageCommentLikes[id] ? "已点赞" : "已取消点赞"} ${user} 的评论`);
          void syncMessageNoticeSections({ force: true });
        })
        .catch((error) => {
          showMessageFeedback(`评论点赞失败：${error instanceof Error ? error.message : "unknown"}`);
        });
      return;
    }
    if (action === "message-comment-reply") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "评论";
      uiState.messageReplyTargetId = id;
      const nextDraft = getMessageReplyDraft(id).trim()
        ? getMessageReplyDraft(id)
        : `@${user} `;
      setMessageReplyDraft(id, nextDraft);
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector("[data-field='message-reply-draft']");
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "message-comment-reply-send") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "对方";
      const text = getMessageReplyDraft(id).trim();
      if (!text) return;
      if (!id) return;
      void sendMessageNoticeCommentReply(id, text)
        .then((reply) => {
          const idx = MESSAGE_COMMENTS.findIndex((x) => x.id === id);
          if (idx >= 0) {
            MESSAGE_COMMENTS[idx].reply = String(reply?.text || text);
            MESSAGE_COMMENTS[idx].date = String(reply?.time || "刚刚");
          }
          uiState.messageReplyTargetId = "";
          setMessageReplyDraft(id, "");
          showMessageFeedback(`已回复 ${user}`);
          void syncMessageNoticeSections({ force: true });
        })
        .catch((error) => {
          showMessageFeedback(`回复失败：${error instanceof Error ? error.message : "unknown"}`);
        });
      return;
    }
    if (action === "message-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.messageTab = tab;
        closeMessageCardLongPressMenu();
        render();
      }
      return;
    }
    if (action === "message-mark-all-read") {
      void markAllMessagesRead();
      return;
    }
    if (action === "close-message-card-longpress-menu") {
      closeMessageCardLongPressMenu();
      render();
      return;
    }
    if (action === "message-card-mark-unread") {
      const conversationId = String(uiState.messageCardLongPressConversationId || "").trim();
      const item = getMessageInboxItem(conversationId);
      if (item) item.badge = Math.max(1, Number(item.badge || 0));
      setMessageConversationForceUnread(conversationId, true);
      closeMessageCardLongPressMenu();
      render();
      return;
    }
    if (action === "message-card-pin-chat") {
      const conversationId = String(uiState.messageCardLongPressConversationId || "").trim();
      if (conversationId) {
        const nextPinned = !isMessageThreadPinned(conversationId);
        setMessageThreadPinned(conversationId, nextPinned);
        if (nextPinned) moveMessageToTop(conversationId);
      }
      closeMessageCardLongPressMenu();
      render();
      return;
    }
    if (action === "message-card-delete-chat") {
      if (uiState.messageCardLongPressConversationId) {
        uiState.messageCardDeleteConfirmOpen = true;
      } else {
        closeMessageCardLongPressMenu();
      }
      render();
      return;
    }
    if (action === "message-card-delete-cancel") {
      uiState.messageCardDeleteConfirmOpen = false;
      render();
      return;
    }
    if (action === "message-card-delete-confirm") {
      const conversationId = String(uiState.messageCardLongPressConversationId || "").trim();
      if (conversationId) {
        setMessageConversationDeletedAt(conversationId, Date.now());
        setMessageConversationForceUnread(conversationId, false);
        const index = MESSAGE_INBOX.findIndex((item) => String(item?.id || "") === conversationId);
        if (index >= 0) MESSAGE_INBOX.splice(index, 1);
        uiState.messageThreads[conversationId] = [];
        delete uiState.messageThreadSendGuardAt[conversationId];
        delete uiState.messageThreadRecentLocalIds[conversationId];
        delete uiState.messagePinnedByConversationId[conversationId];
        delete uiState.messageMutedByConversationId[conversationId];
        clearMessageThreadClearedState(conversationId);
        persistMessageThreadPrefs();
        clearMessageThreadCache(conversationId, uiState.currentUserId || "");
        const hiddenMap = readMessageThreadHiddenIdsCache();
        if (Object.prototype.hasOwnProperty.call(hiddenMap, conversationId)) {
          delete hiddenMap[conversationId];
          writeMessageThreadHiddenIdsCache(hiddenMap);
        }
        if (uiState.selectedMessageId === conversationId) {
          uiState.selectedMessageId = MESSAGE_INBOX[0]?.id || "";
        }
      }
      closeMessageCardLongPressMenu();
      render();
      return;
    }
    if (action === "me-content-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab && ["drafts", "works", "likes", "favorites", "history"].includes(tab)) {
        uiState.meContentTab = tab;
        if (!uiState.meContentVisibleLimitByTab || typeof uiState.meContentVisibleLimitByTab !== "object") {
          uiState.meContentVisibleLimitByTab = {};
        }
        uiState.meContentVisibleLimitByTab[tab] = ME_TAB_RENDER_LIMIT_INITIAL;
        uiState.meFeedback = "";
        render();
      }
      return;
    }
    if (action === "me-open-drafts-tab") {
      uiState.meMenuOpen = false;
      uiState.meContentTab = "drafts";
      if (!uiState.meContentVisibleLimitByTab || typeof uiState.meContentVisibleLimitByTab !== "object") {
        uiState.meContentVisibleLimitByTab = {};
      }
      uiState.meContentVisibleLimitByTab.drafts = ME_TAB_RENDER_LIMIT_INITIAL;
      uiState.meFeedback = "";
      render();
      return;
    }
    if (action === "me-open-workshop-center") {
      uiState.meMenuOpen = false;
      uiState.meMenuToast = "";
      if (meMenuToastTimer) {
        clearTimeout(meMenuToastTimer);
        meMenuToastTimer = null;
      }
      window.location.hash = "#/workshop/world";
      return;
    }
    if (action === "me-content-load-more") {
      const tab = String(actionTarget.getAttribute("data-tab") || uiState.meContentTab || "works").trim();
      if (!["drafts", "works", "likes", "favorites", "history"].includes(tab)) return;
      if (!uiState.meContentVisibleLimitByTab || typeof uiState.meContentVisibleLimitByTab !== "object") {
        uiState.meContentVisibleLimitByTab = {};
      }
      const currentLimit = Number(uiState.meContentVisibleLimitByTab[tab] || ME_TAB_RENDER_LIMIT_INITIAL);
      uiState.meContentVisibleLimitByTab[tab] = Math.min(120, Math.max(ME_TAB_RENDER_LIMIT_INITIAL, currentLimit + ME_TAB_RENDER_LIMIT_STEP));
      render();
      return;
    }
    if (action === "me-draft-open-action") {
      const id = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!id) return;
      const card = uiState.workshopSavedCards.find((item) => String(item.id || "") === id);
      if (!card) {
        uiState.meFeedback = "该草稿来自历史占位数据，暂不支持编辑";
        render();
        return;
      }
      uiState.workshopActiveCardId = card.id;
      uiState.workshopMode = card.mode;
      uiState.workshopCustomParsed = null;
      hydrateWorkshopDraft(card.mode, card.draft && typeof card.draft === "object" ? card.draft : {});
      uiState.workshopAuthoringMode = WORKSHOP_FORCE_CUSTOM_MODES.has(card.mode)
        ? "custom"
        : String(card.authoringMode || "template");
      uiState.workshopPendingCardId = card.id;
      seedWorkshopPublishDraft(card);
      window.location.hash = getWorkshopEditorRouteByMode(card.mode);
      return;
    }
    if (action === "me-stat-feedback") {
      uiState.meFeedback = actionTarget.getAttribute("data-text") || "该功能即将上线";
      render();
      return;
    }
    if (action === "toggle-me-menu") {
      uiState.meMenuOpen = !uiState.meMenuOpen;
      render();
      return;
    }
    if (action === "close-me-menu") {
      uiState.meMenuOpen = false;
      render();
      return;
    }
    if (action === "me-menu-feedback") {
      uiState.meMenuOpen = false;
      uiState.meFeedback = "";
      uiState.meMenuToast = "开发中";
      if (meMenuToastTimer) clearTimeout(meMenuToastTimer);
      meMenuToastTimer = setTimeout(() => {
        if (uiState.meMenuToast === "开发中") {
          uiState.meMenuToast = "";
          render();
        }
        meMenuToastTimer = null;
      }, 2200);
      render();
      return;
    }
    if (action === "me-relation-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab && ["粉丝", "关注", "朋友"].includes(tab)) {
        uiState.meRelationTab = tab;
        render();
      }
      return;
    }
    if (action === "me-relation-search-submit") {
      render();
      return;
    }
    if (action === "me-relation-search-clear") {
      uiState.meRelationSearch = "";
      render();
      return;
    }
    if (action === "me-hero-cover-upload") {
      const input = document.querySelector("[data-field='me-hero-cover-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "profile-avatar-upload") {
      const input = document.querySelector("[data-field='profile-avatar-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "me-follower-follow-toggle") {
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const targetName = String(actionTarget.getAttribute("data-name") || "").trim();
      const targetUserIdRaw = String(actionTarget.getAttribute("data-id") || "").trim();
      const targetUserId = targetUserIdRaw || resolveAuthorIdByName(targetName);
      if (!targetUserId) {
        uiState.meFeedback = "未找到该用户，暂无法关注";
        render();
        return;
      }
      if (targetUserId === uiState.currentUserId) {
        uiState.meFeedback = "不能关注自己";
        render();
        return;
      }
      const prevFollow = Boolean(uiState.meRelationFollowing[targetUserId]);
      const nextFollow = !prevFollow;
      syncRelationStateLocal(targetUserId, nextFollow, { id: targetUserId, name: targetName });
      queuePendingFollowOp(targetUserId, nextFollow);
      persistFollowState(targetUserId, nextFollow);
      if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nextFollow;
      uiState.meFeedback = "";
      render();
      void setUserFollowRelation(targetUserId, nextFollow, { keepalive: true })
        .then((relation) => {
          const followedByMe = Boolean(relation?.followedByMe);
          clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, followedByMe);
          syncRelationStateLocal(targetUserId, followedByMe, { id: targetUserId, name: targetName });
          if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = followedByMe;
          scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 80 });
          return null;
        })
        .then(() => {
          uiState.bootstrapFullLoaded = true;
          render();
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, prevFollow);
          syncRelationStateLocal(targetUserId, prevFollow, { id: targetUserId, name: targetName });
          if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = prevFollow;
          uiState.meFeedback = `关注失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "me-follower-chat") {
      const name = actionTarget.getAttribute("data-name") || "对方";
      const targetUserIdRaw = String(actionTarget.getAttribute("data-id") || "").trim();
      const targetUserId = targetUserIdRaw || resolveAuthorIdByName(name);
      if (!targetUserId) {
        uiState.messageFeedback = "未找到该用户，无法发起私聊";
        render();
        return;
      }
      if (targetUserId === uiState.currentUserId) {
        uiState.messageFeedback = "不能给自己发私信";
        render();
        return;
      }
      void openOrCreateDirectThread(targetUserId, name).catch((error) => {
        uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
        render();
      });
      return;
    }
    if (action === "me-coin-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab && ["总览", "账单", "任务", "权益"].includes(tab)) {
        uiState.meCoinTab = tab;
        render();
      }
      return;
    }
    if (action === "me-coin-claim-task") {
      const id = actionTarget.getAttribute("data-id") || "";
      const task = COIN_TASKS.find((x) => x.id === id);
      if (!task || !task.done || uiState.meCoinClaimedTaskIds.includes(id)) return;
      uiState.meCoinClaimedTaskIds = [...uiState.meCoinClaimedTaskIds, id];
      uiState.userCoins += task.reward;
      uiState.meCoinFeedback = `已领取 ${task.reward} 马内`;
      render();
      return;
    }
    if (action === "me-coin-redeem") {
      const id = actionTarget.getAttribute("data-id") || "";
      const title = actionTarget.getAttribute("data-title") || "权益";
      const price = Number(actionTarget.getAttribute("data-price") || "0");
      if (!id || !price) return;
      if (uiState.userCoins < price) {
        uiState.meCoinFeedback = "马内不足，先去做任务或充值";
        render();
        return;
      }
      uiState.userCoins -= price;
      uiState.meCoinFeedback = `兑换成功：${title}`;
      render();
      return;
    }
    if (action === "me-coin-recharge") {
      uiState.meCoinFeedback = "已打开充值入口（后续接支付）";
      render();
      return;
    }
    if (action === "me-coin-withdraw") {
      uiState.meCoinFeedback = "已打开提现入口（后续接实名校验）";
      render();
      return;
    }
    if (action === "me-coin-help") {
      uiState.meCoinFeedback = "马内规则：可用于道具兑换、流量加速与社群增益";
      render();
      return;
    }
    if (action === "me-preference-toggle") {
      const value = actionTarget.getAttribute("data-value");
      if (!value) return;
      if (uiState.mePreferences.includes(value)) {
        uiState.mePreferences = uiState.mePreferences.filter((x) => x !== value);
      } else {
        uiState.mePreferences = [...uiState.mePreferences, value].slice(-6);
      }
      uiState.meFeedback = "偏好已更新";
      render();
      setTimeout(() => {
        if (uiState.meFeedback === "偏好已更新") {
          uiState.meFeedback = "";
          render();
        }
      }, 1000);
      return;
    }
    if (action === "me-setting-toggle") {
      const key = actionTarget.getAttribute("data-key");
      if (!key || !Object.prototype.hasOwnProperty.call(uiState.meSettings, key)) return;
      uiState.meSettings[key] = !uiState.meSettings[key];
      uiState.meFeedback = "设置已更新";
      render();
      setTimeout(() => {
        if (uiState.meFeedback === "设置已更新") {
          uiState.meFeedback = "";
          render();
        }
      }, 1000);
      return;
    }
    if (action === "me-theme") {
      const theme = actionTarget.getAttribute("data-theme");
      if (theme && ["light", "dark", "auto"].includes(theme)) {
        uiState.meTheme = theme;
        uiState.meFeedback = "主题偏好已更新";
        render();
      }
      return;
    }
    if (action === "me-font-size-cycle") {
      const sizes = ["标准", "偏大", "超大"];
      const idx = sizes.indexOf(uiState.meFontSize);
      uiState.meFontSize = sizes[(idx + 1) % sizes.length];
      uiState.meFeedback = `字体已切换为${uiState.meFontSize}`;
      render();
      return;
    }
    if (action === "me-language-cycle") {
      const langs = ["简体中文", "English", "繁體中文"];
      const idx = langs.indexOf(uiState.meLanguage);
      uiState.meLanguage = langs[(idx + 1) % langs.length];
      uiState.meFeedback = `语言已切换为${uiState.meLanguage}`;
      render();
      return;
    }
    if (action === "me-setting-feedback") {
      const text = actionTarget.getAttribute("data-text") || "功能入口已打开";
      uiState.meFeedback = text;
      render();
      return;
    }
    if (action === "me-logout") {
      uiState.showProfileEditModal = false;
      uiState.meFeedback = "";
      setPostLoginRedirectHash("#/theater/home");
      performLogoutAndRedirectToLogin();
      return;
    }
    if (action === "open-message-thread") {
      const id = actionTarget.getAttribute("data-id");
      const conversationId = String(id || "").trim();
      if (conversationId && !isUuid(conversationId)) {
        uiState.messageFeedback = "会话ID无效，请从真实消息列表进入";
        render();
        return;
      }
      const inboxItem = getMessageInboxItem(conversationId);
      if (conversationId && inboxItem && isStoryConversationInboxItem(inboxItem)) {
        markMessageRead(conversationId);
        moveMessageToTop(conversationId);
        uiState.messageThreadToolsOpen = false;
        uiState.messageThreadMenuOpen = false;
        closeMessageLongPressMenu();
        closeMessageCardLongPressMenu();
        render();
        void openStoryConversationFromInbox(inboxItem).catch((error) => {
          uiState.messageFeedback = `打开失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
        return;
      }
      if (conversationId) {
        uiState.selectedMessageId = conversationId;
        uiState.messageReadAckConversationId = "";
        uiState.messagePresenceBeatAt[conversationId] = 0;
        uiState.messageThreadAutoScrollOnEnter = true;
        uiState.messageThreadForceBottomUntil = Date.now() + 1800;
        markMessageRead(conversationId);
        moveMessageToTop(conversationId);
        hydrateMessageThreadFromCache(conversationId);
      }
      uiState.messageThreadToolsOpen = false;
      uiState.messageThreadMenuOpen = false;
      closeMessageLongPressMenu();
      closeMessageCardLongPressMenu();
      const threadHash = buildMessageThreadHash(String(conversationId || uiState.selectedMessageId || "").trim());
      window.location.hash = threadHash;
      if (conversationId && isUuid(conversationId) && uiState.isLoggedIn && uiState.currentUserId) {
        void Promise.allSettled([syncMessageInbox(), syncActiveConversationThread({ conversationId })])
          .then(() => {
            triggerMessageRealtimeRender({ scrollToBottom: true });
          });
      }
      return;
    }
    if (action === "toggle-message-thread-menu") {
      uiState.messageThreadMenuOpen = !uiState.messageThreadMenuOpen;
      closeMessageLongPressMenu();
      render();
      return;
    }
    if (action === "close-message-longpress-menu") {
      closeMessageLongPressMenu();
      render();
      return;
    }
    if (action === "message-longpress-copy") {
      const msg = getThreadMessageById(uiState.messageLongPressConversationId, uiState.messageLongPressMessageId);
      const text = getThreadMessageActionText(msg);
      if (text) {
        const copyWithExecCommandFallback = () => {
          const area = document.createElement("textarea");
          area.value = text;
          area.style.position = "fixed";
          area.style.left = "-9999px";
          document.body.appendChild(area);
          area.focus();
          area.select();
          try {
            document.execCommand("copy");
          } catch {}
          document.body.removeChild(area);
        };
        if (navigator?.clipboard?.writeText) {
          void navigator.clipboard.writeText(text).catch(() => copyWithExecCommandFallback());
        } else {
          copyWithExecCommandFallback();
        }
      }
      closeMessageLongPressMenu();
      render();
      return;
    }
    if (action === "message-longpress-forward") {
      uiState.messageForwardPickerOpen = true;
      render();
      return;
    }
    if (action === "message-forward-cancel") {
      uiState.messageForwardPickerOpen = false;
      render();
      return;
    }
    if (action === "message-forward-pick-target") {
      const targetConversationId = String(actionTarget.getAttribute("data-id") || "").trim();
      const msg = getThreadMessageById(uiState.messageLongPressConversationId, uiState.messageLongPressMessageId);
      if (!msg || !targetConversationId) {
        closeMessageLongPressMenu();
        render();
        return;
      }
      closeMessageLongPressMenu();
      render();
      void forwardThreadMessageToConversation(msg, targetConversationId)
        .then(() => {
          render();
        })
        .catch((error) => {
          uiState.messageFeedback = `转发失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "message-longpress-quote") {
      const msg = getThreadMessageById(uiState.messageLongPressConversationId, uiState.messageLongPressMessageId);
      const text = getThreadMessageActionText(msg);
      if (text) {
        uiState.messageQuoteDraft = {
          conversationId: String(uiState.messageLongPressConversationId || "").trim(),
          messageId: String(uiState.messageLongPressMessageId || "").trim(),
          senderName: resolveQuoteSenderName(uiState.messageLongPressConversationId, msg),
          text: text.slice(0, 96)
        };
      }
      closeMessageLongPressMenu();
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector("input[data-field='message-thread-draft']");
        if (!(input instanceof HTMLInputElement)) return;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      });
      return;
    }
    if (action === "message-quote-cancel") {
      uiState.messageQuoteDraft = null;
      render();
      return;
    }
    if (action === "message-longpress-withdraw") {
      const cid = String(uiState.messageLongPressConversationId || "").trim();
      const mid = String(uiState.messageLongPressMessageId || "").trim();
      const messages = ensureMessageThread(cid);
      const idx = messages.findIndex((row) => String(row?.id || "") === mid);
      const target = idx >= 0 ? messages[idx] : null;
      if (!(target && String(target?.from || "") === "me" && !target?.pending)) {
        closeMessageLongPressMenu();
        render();
        return;
      }
      closeMessageLongPressMenu();
      render();
      void sendMessageToThread(cid, "你撤回了一条消息", {
        messageType: "system",
        payload: {
          kind: "withdraw",
          targetMessageId: mid
        }
      })
        .then((message) => {
          applyWithdrawSystemMessage(cid, message, uiState.currentUserId);
          triggerMessageRealtimeRender({ scrollToBottom: true });
        })
        .catch((error) => {
          uiState.messageFeedback = `撤回失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "message-longpress-delete") {
      const cid = String(uiState.messageLongPressConversationId || "").trim();
      const mid = String(uiState.messageLongPressMessageId || "").trim();
      if (!cid || !mid) {
        closeMessageLongPressMenu();
        render();
        return;
      }
      uiState.messageDeleteConfirmOpen = true;
      uiState.messageDeleteConfirmConversationId = cid;
      uiState.messageDeleteConfirmMessageId = mid;
      render();
      return;
    }
    if (action === "message-delete-cancel") {
      uiState.messageDeleteConfirmOpen = false;
      uiState.messageDeleteConfirmConversationId = "";
      uiState.messageDeleteConfirmMessageId = "";
      render();
      return;
    }
    if (action === "message-delete-confirm") {
      const cid = String(uiState.messageDeleteConfirmConversationId || "").trim();
      const mid = String(uiState.messageDeleteConfirmMessageId || "").trim();
      const rows = ensureMessageThread(cid);
      const idx = rows.findIndex((x) => String(x?.id || "") === mid);
      if (idx >= 0) {
        setThreadMessageHidden(cid, mid, true);
        rows.splice(idx, 1);
        refreshInboxPreviewFromThread(cid);
        persistMessageThreadForConversation(cid);
      }
      uiState.messageDeleteConfirmOpen = false;
      uiState.messageDeleteConfirmConversationId = "";
      uiState.messageDeleteConfirmMessageId = "";
      closeMessageLongPressMenu();
      render();
      return;
    }
    if (action === "pin-message-thread") {
      const activeId = getActiveConversationId();
      if (activeId) {
        const nextPinned = !isMessageThreadPinned(activeId);
        setMessageThreadPinned(activeId, nextPinned);
        if (nextPinned) moveMessageToTop(activeId);
      }
      uiState.messageFeedback = "";
      uiState.messageThreadMenuOpen = false;
      render();
      return;
    }
    if (action === "mute-message-thread") {
      const activeId = getActiveConversationId();
      if (activeId) {
        const nextMuted = !isMessageThreadMuted(activeId);
        setMessageThreadMuted(activeId, nextMuted);
      }
      uiState.messageFeedback = "";
      uiState.messageThreadMenuOpen = false;
      render();
      return;
    }
    if (action === "clear-message-thread") {
      const activeId = getActiveConversationId();
      if (activeId) {
        uiState.messageClearConfirmOpen = true;
        uiState.messageClearConfirmConversationId = activeId;
      }
      uiState.messageFeedback = "";
      uiState.messageThreadMenuOpen = false;
      render();
      return;
    }
    if (action === "message-clear-cancel") {
      uiState.messageClearConfirmOpen = false;
      uiState.messageClearConfirmConversationId = "";
      render();
      return;
    }
    if (action === "message-clear-confirm") {
      const activeId = String(uiState.messageClearConfirmConversationId || getActiveConversationId() || "").trim();
      if (activeId) {
        const currentInbox = getMessageInboxItem(activeId) || {};
        const clearedAt = setMessageThreadClearedAt(activeId, Date.now());
        setMessageThreadClearHint(activeId, {
          preview: String(currentInbox?.preview || "").trim(),
          time: String(currentInbox?.time || "").trim()
        });
        uiState.messageThreads[activeId] = [];
        delete uiState.messageThreadSendGuardAt[activeId];
        delete uiState.messageThreadRecentLocalIds[activeId];
        const hiddenMap = readMessageThreadHiddenIdsCache();
        if (Object.prototype.hasOwnProperty.call(hiddenMap, activeId)) {
          delete hiddenMap[activeId];
          writeMessageThreadHiddenIdsCache(hiddenMap);
        }
        clearMessageThreadCache(activeId, uiState.currentUserId || "");
        const inboxItem = getMessageInboxItem(activeId);
        if (inboxItem) {
          inboxItem.preview = "";
          inboxItem.time = "刚刚";
          inboxItem.badge = 0;
          inboxItem.lastMessageAt = new Date(clearedAt).toISOString();
        }
        if (uiState.isLoggedIn && uiState.currentUserId && isUuid(activeId)) {
          void markConversationReadOnServer(activeId).catch(() => {});
        }
      }
      uiState.messageClearConfirmOpen = false;
      uiState.messageClearConfirmConversationId = "";
      uiState.messageFeedback = "";
      render();
      return;
    }
    if (action === "toggle-message-emoji-panel") {
      uiState.messageEmojiPanelOpen = !uiState.messageEmojiPanelOpen;
      render();
      return;
    }
    if (action === "message-open-image-picker") {
      const input = document.querySelector("[data-field='message-thread-image-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "preview-message-image") {
      const imageUrl = String(actionTarget.getAttribute("data-url") || "").trim();
      if (!imageUrl) return;
      uiState.messageImagePreviewUrl = imageUrl;
      uiState.messageImagePreviewAlt = "聊天图片";
      render();
      return;
    }
    if (action === "close-message-image-preview") {
      uiState.messageImagePreviewUrl = "";
      uiState.messageImagePreviewAlt = "";
      render();
      return;
    }
    if (action === "message-send-emoji") {
      const emoji = String(actionTarget.getAttribute("data-emoji") || "").trim();
      if (!emoji) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const activeId = getActiveThreadForSending();
      if (!activeId) return;
      uiState.messageEmojiPanelOpen = false;
      const pendingId = appendPendingThreadMessage(activeId, {
        type: "emoji",
        text: emoji,
        payload: { emoji }
      });
      void sendMessageToThread(activeId, emoji, { messageType: "emoji", payload: { emoji } })
        .then((message) => {
          finalizePendingThreadMessage(activeId, pendingId, message, emoji);
        })
        .catch((err) => {
          removePendingMessage(activeId, pendingId);
          uiState.messageFeedback = `发送失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "toggle-message-thread-tools") {
      uiState.messageThreadToolsOpen = !uiState.messageThreadToolsOpen;
      render();
      return;
    }
    if (action === "message-tool") {
      const label = actionTarget.getAttribute("data-label") || "工具";
      uiState.messageThreadToolsOpen = false;
      showMessageFeedback(`${label}功能已触发（占位）`);
      return;
    }
    if (action === "message-thread-send") {
      const text = (uiState.messageThreadDraft || "").trim();
      if (!text) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const activeId = getActiveConversationId();
      if (!activeId || !isUuid(activeId)) {
        showMessageFeedback("请先打开一个真实会话再发送");
        return;
      }
      const draft = uiState.messageThreadDraft;
      const quote = normalizeQuotePayload(uiState.messageQuoteDraft || {});
      const messagePayload = quote ? { quote } : {};
      uiState.messageThreadToolsOpen = false;
      uiState.messageEmojiPanelOpen = false;
      uiState.messageThreadMenuOpen = false;
      clearThreadDraftStateAndInput({ keepFocus: true });
      const pendingId = appendPendingThreadMessage(activeId, {
        type: "text",
        text,
        payload: messagePayload
      });
      void sendMessageToThread(activeId, text, {
        messageType: "text",
        payload: messagePayload
      })
        .then((message) => {
          uiState.messageQuoteDraft = null;
          clearThreadDraftStateAndInput({ keepFocus: true });
          finalizePendingThreadMessage(activeId, pendingId, message, text);
        })
        .catch((err) => {
          removePendingMessage(activeId, pendingId);
          uiState.messageThreadDraft = draft;
          showMessageFeedback(`发送失败：${err instanceof Error ? err.message : "unknown"}`);
        });
      return;
    }
    if (action === "toggle-play-status") {
      uiState.playStatusExpanded = !uiState.playStatusExpanded;
      render();
      return;
    }
    if (action === "toggle-play-hint") {
      return;
    }
    if (action === "toggle-play-tools") {
      uiState.playToolsExpanded = !uiState.playToolsExpanded;
      render();
      return;
    }
    if (action === "toggle-play-model") {
      uiState.playModelMenuOpen = !uiState.playModelMenuOpen;
      render();
      return;
    }
    if (action === "play-model-select") {
      const model = actionTarget.getAttribute("data-model");
      if (model) {
        uiState.playModel = model;
        uiState.playModelMenuOpen = false;
        showPlaySystemHint(`模型已切换：${model}`, "success");
      }
      return;
    }
    if (action === "play-bg-select-color") {
      const color = normalizePlayBackgroundColor(actionTarget.getAttribute("data-color") || "");
      const presetId = String(actionTarget.getAttribute("data-id") || "").trim();
      const preset = PLAY_BACKGROUND_PRESET_COLORS.find((x) => x.id === presetId) || PLAY_BACKGROUND_PRESET_COLORS.find((x) => x.color.toLowerCase() === color.toLowerCase());
      uiState.playBackgroundColor = color;
      if (preset) uiState.playBackgroundPreset = preset.id;
      persistPlayBackgroundPreference();
      render();
      return;
    }
    if (action === "play-bg-upload-trigger") {
      const input = document.querySelector("input[data-field='play-bg-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "play-bg-clear-image") {
      uiState.playBackgroundImage = "";
      persistPlayBackgroundPreference();
      showPlaySystemHint("已切回纯色背景。", "success");
      render();
      return;
    }
    if (action === "play-settings-dev") {
      const label = String(actionTarget.getAttribute("data-label") || "该功能").trim();
      showPlaySystemHint(`${label}开发中，敬请期待。`, "notice");
      return;
    }
    if (action === "play-generate-image") {
      uiState.playSceneImageReady = true;
      showPlaySystemHint("已生成本回合场景图。", "success");
      return;
    }
    if (action === "play-generate-video") {
      showPlaySystemHint("文生视频功能即将开放。", "notice");
      return;
    }
    if (action === "play-export-record") {
      const world = getSelectedWorld();
      const exportText = (Array.isArray(uiState.playEntries) ? uiState.playEntries : [])
        .map((entry) => {
          const type = String(entry?.type || "narrator");
          const text = String(entry?.text || "").trim();
          if (!text) return "";
          if (type === "action") return `[你的行动] ${text}`;
          if (type === "impact") return `[结果变化] ${text}`;
          if (type === "pending") return `[系统处理中] ${text}`;
          return `[叙事] ${text}`;
        })
        .filter(Boolean)
        .join("\n\n");
      copyTextToClipboard(exportText || `${world?.title || "当前故事"} 暂无可导出内容`);
      showPlaySystemHint("已复制本局全文。", "success");
      return;
    }
    if (action === "play-copy-entry") {
      const text = String(actionTarget.getAttribute("data-text") || "").trim();
      if (!text) return;
      copyTextToClipboard(text);
      showPlaySystemHint("已复制该段文本。", "success");
      return;
    }
    if (action === "play-read-entry") {
      showPlaySystemHint("朗读功能即将开放。", "notice");
      return;
    }
    if (action === "play-regenerate-entry") {
      showPlaySystemHint("重新生成功能即将开放。", "notice");
      return;
    }
    if (action === "play-copy-latest") {
      const latest = [...(Array.isArray(uiState.playEntries) ? uiState.playEntries : [])]
        .reverse()
        .find((x) => String(x?.text || "").trim());
      const text = String(latest?.text || "").trim();
      if (!text) {
        showPlaySystemHint("当前暂无可复制内容。", "error");
        return;
      }
      copyTextToClipboard(text);
      showPlaySystemHint("已复制最新文本。", "success");
      return;
    }
    if (action === "play-bookmark-turn") {
      showPlaySystemHint(`已标记第 ${uiState.playRound} 幕关键节点。`, "success");
      return;
    }
    if (action === "play-random-action") {
      const candidates = getPlayIdeaPool(getSelectedWorld());
      const text = candidates[Math.floor(Math.random() * candidates.length)];
      uiState.playActionDraft = text;
      showPlaySystemHint("已生成随机行动建议。", "success");
      return;
    }
    if (action === "play-idea-tips") {
      if (!Array.isArray(uiState.playPromptOptions) || !uiState.playPromptOptions.length) {
        const latestNarrative = [...uiState.playEntries].reverse().find((x) => x?.type === "narrator" && String(x?.text || "").trim());
        if (latestNarrative?.text) {
          const promptData = extractPlayPromptFromResponse(latestNarrative.text, null, getSelectedWorld());
          uiState.playPromptQuestion = promptData.question || uiState.playPromptQuestion;
          uiState.playPromptOptions = Array.isArray(promptData.options) ? promptData.options : [];
        }
      }
      uiState.playIdeaOptions = pickPlayGuideOptions(getSelectedWorld(), 99);
      uiState.playIdeaModalOpen = true;
      render();
      return;
    }
    if (action === "play-idea-close") {
      uiState.playIdeaModalOpen = false;
      render();
      return;
    }
    if (action === "play-idea-refresh") {
      uiState.playIdeaOptions = pickPlayGuideOptions(getSelectedWorld(), 99);
      render();
      return;
    }
    if (action === "play-idea-pick") {
      const text = actionTarget.getAttribute("data-text");
      if (!text) return;
      uiState.playIdeaModalOpen = false;
      if (uiState.playRequesting) {
        showPlaySystemHint("正在生成中，请稍后再试。", "notice");
        render();
        return;
      }
      uiState.playActionDraft = "";
      render();
      void submitPlayTurn(text);
      return;
    }
    if (action === "play-prompt-pick") {
      const text = actionTarget.getAttribute("data-text");
      if (!text) return;
      uiState.playActionDraft = text;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector("[data-field='play-action-draft']");
        if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "play-submit-action") {
      const text = (uiState.playActionDraft || "").trim();
      if (!text) return;
      void submitPlayTurn(text);
      return;
    }
    if (action === "workshop-set-mode") {
      const mode = actionTarget.getAttribute("data-mode");
      if (mode && WORKSHOP_MODE_META[mode]) {
        uiState.workshopMode = mode;
        if (WORKSHOP_FORCE_CUSTOM_MODES.has(mode)) {
          uiState.workshopAuthoringMode = "custom";
        }
        uiState.workshopActiveCardId = "";
        uiState.workshopCustomParsed = null;
        uiState.workshopFeedback = `已切换：${WORKSHOP_MODE_META[mode].label}`;
        render();
      }
      return;
    }
    if (action === "workshop-set-authoring-mode") {
      if (WORKSHOP_FORCE_CUSTOM_MODES.has(uiState.workshopMode)) {
        uiState.workshopAuthoringMode = "custom";
        uiState.workshopFeedback = "当前模式仅支持自定义创建";
        render();
        return;
      }
      const authoringMode = actionTarget.getAttribute("data-authoring-mode");
      if (authoringMode && WORKSHOP_AUTHORING_MODE_META[authoringMode]) {
        uiState.workshopAuthoringMode = authoringMode;
        uiState.workshopFeedback = `已切换为${WORKSHOP_AUTHORING_MODE_META[authoringMode].label}`;
        render();
      }
      return;
    }
    if (action === "workshop-parse-custom") {
      if (uiState.workshopCustomParsing) return;
      void parseWorkshopCustomTextToDraft();
      return;
    }
    if (action === "workshop-save-card") {
      if (uiState.workshopSaving) return;
      const mode = uiState.workshopMode;
      const validationError = getWorkshopBaseValidationErrors(mode);
      if (validationError) {
        uiState.workshopFeedback = validationError;
        render();
        return;
      }
      void saveWorkshopCardToApi().then((card) => {
        if (!card) return;
        uiState.workshopActiveCardId = card.id;
        uiState.workshopSaveDecisionOpen = false;
        uiState.workshopPublishModalOpen = false;
        render();
      });
      return;
    }
    if (action === "workshop-publish-card") {
      if (uiState.workshopPublishing) return;
      const mode = uiState.workshopMode;
      const validationError = getWorkshopBaseValidationErrors(mode);
      if (validationError) {
        uiState.workshopFeedback = validationError;
        render();
        return;
      }
      const currentDraft = normalizeWorkshopDraftForMode(mode, getWorkshopDraftByMode(mode));
      const instantCardSnapshot = {
        id: uiState.workshopActiveCardId || `draft_${Date.now()}`,
        mode,
        title: getWorkshopCardTitle(mode, currentDraft),
        summary: getWorkshopCardIntro(mode, currentDraft),
        cardBackground: String(currentDraft.cardBackground || "").trim(),
        author: String(uiState.profile?.name || "Drama 用户"),
        authorId: String(uiState.currentUserId || ""),
        authorAvatarUrl: String(uiState.profile?.avatarUrl || "")
      };
      const placeholderId = createPublishPlaceholderFromCard(
        instantCardSnapshot,
        uiState.workshopPublishDraft || {}
      );
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = false;
      if (window.location.hash !== "#/theater/home") {
        window.location.hash = "#/theater/home";
      }
      render();
      void (async () => {
        if (uiState.workshopSaving) {
          const waitUntil = Date.now() + 12_000;
          while (uiState.workshopSaving && Date.now() < waitUntil) {
            await new Promise((resolve) => setTimeout(resolve, 120));
          }
        }
        const savedCard = await saveWorkshopCardToApi();
        const publishCardId = String(savedCard?.id || uiState.workshopActiveCardId || "").trim();
        if (!publishCardId) {
          uiState.workshopFeedback = "发布前保存失败，请稍后重试";
          settlePublishPlaceholderFailed(placeholderId, "发布前保存失败");
          render();
          return;
        }
        const publishValidationError = getWorkshopPublishValidationErrors();
        if (publishValidationError) {
          uiState.workshopFeedback = publishValidationError;
          settlePublishPlaceholderFailed(placeholderId, publishValidationError);
          render();
          return;
        }
        await publishWorkshopCardToApi(publishCardId, { placeholderId: placeholderId || undefined });
      })();
      return;
    }
    if (action === "workshop-card-background-pick") {
      const input = document.querySelector("[data-field='workshop-card-background-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "workshop-clear-card-background") {
      setWorkshopDraftField(uiState.workshopMode, "cardBackground", "");
      uiState.workshopFeedback = "已清空卡片背景";
      render();
      return;
    }
    if (action === "workshop-album-media-pick") {
      const input = document.querySelector("[data-field='workshop-album-media-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "workshop-remove-album-media") {
      const mediaId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!mediaId) return;
      const normalizedDraft = normalizeWorkshopDraftForMode(uiState.workshopMode, getWorkshopDraftByMode(uiState.workshopMode));
      const nextAlbum = (normalizedDraft.albumMedia || []).filter((item, idx) => {
        const itemId = String(item?.id || `album_${idx + 1}`).trim();
        return itemId !== mediaId;
      });
      setWorkshopDraftField(uiState.workshopMode, "albumMedia", nextAlbum);
      render();
      return;
    }
    if (action === "workshop-toggle-opening-ai") {
      const targetMode = actionTarget.getAttribute("data-mode") || uiState.workshopMode;
      if (!WORKSHOP_MODE_META[targetMode]) return;
      const draftByMode = normalizeWorkshopDraftForMode(targetMode, getWorkshopDraftByMode(targetMode));
      setWorkshopDraftField(targetMode, "openingLineAiAssist", !parseBoolFlag(draftByMode.openingLineAiAssist, false));
      render();
      return;
    }
    if (action === "workshop-select-existing-card") {
      const cardId = actionTarget.getAttribute("data-id");
      if (!cardId) return;
      const card = uiState.workshopSavedCards.find((x) => x.id === cardId);
      if (!card) return;
      uiState.workshopActiveCardId = card.id;
      uiState.workshopMode = card.mode;
      uiState.workshopCustomParsed = null;
      const draft = card.draft && typeof card.draft === "object" ? card.draft : {};
      hydrateWorkshopDraft(card.mode, draft);
      uiState.workshopAuthoringMode = WORKSHOP_FORCE_CUSTOM_MODES.has(card.mode)
        ? "custom"
        : String(card.authoringMode || "template");
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = false;
      uiState.workshopPendingCardId = card.id;
      seedWorkshopPublishDraft(card);
      uiState.workshopFeedback = `已载入《${card.title}》`;
      render();
      return;
    }
    if (action === "workshop-close-save-flow") {
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = false;
      render();
      return;
    }
    if (action === "workshop-hold-draft") {
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = false;
      uiState.workshopFeedback = "已存入草稿箱，可在「我的-草稿箱」中查看。";
      render();
      return;
    }
    if (action === "workshop-open-publish-modal") {
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = true;
      render();
      return;
    }
    if (action === "workshop-toggle-sync-dynamic") {
      uiState.workshopSyncDynamic = !uiState.workshopSyncDynamic;
      render();
      return;
    }
    if (action === "workshop-confirm-publish") {
      if (uiState.workshopPublishing) return;
      const pendingId = uiState.workshopPendingCardId;
      const idx = uiState.workshopSavedCards.findIndex((x) => x.id === pendingId);
      if (idx < 0) {
        uiState.workshopFeedback = "未找到待发布卡片，请重新保存";
        uiState.workshopSaveDecisionOpen = false;
        uiState.workshopPublishModalOpen = false;
        render();
        return;
      }
      const validationError = getWorkshopPublishValidationErrors();
      if (validationError) {
        uiState.workshopFeedback = validationError;
        render();
        return;
      }
      const pendingCard = uiState.workshopSavedCards[idx];
      const placeholderId = createPublishPlaceholderFromCard(pendingCard, uiState.workshopPublishDraft || {});
      uiState.workshopSaveDecisionOpen = false;
      uiState.workshopPublishModalOpen = false;
      if (window.location.hash !== "#/theater/home") {
        window.location.hash = "#/theater/home";
      }
      render();
      void publishWorkshopCardToApi(pendingId, { placeholderId }).then((ok) => {
        if (!ok) return;
        uiState.workshopSaveDecisionOpen = false;
        uiState.workshopPublishModalOpen = false;
        render();
      });
      return;
    }
    if (action === "workshop-apply-template") {
      const mode = uiState.workshopMode;
      if (WORKSHOP_FORCE_CUSTOM_MODES.has(mode)) {
        uiState.workshopFeedback = "当前模式不再使用模板，请直接编辑字段";
        render();
        return;
      }
      const templateId = uiState.workshopSelectedTemplateId[mode] || "";
      applyWorkshopTemplate(mode, templateId);
      uiState.workshopFeedback = "模板已套用";
      render();
      return;
    }
    if (action === "workshop-generate-preview") {
      const mode = uiState.workshopMode;
      const label = WORKSHOP_MODE_META[mode]?.label || mode;
      uiState.workshopFeedback = `已生成 ${label} 预览参数（可直接用于 /game/sessions）`;
      render();
      return;
    }
    if (action === "workshop-copy-spec") {
      const mode = uiState.workshopMode;
      const payload = {
        mode,
        storyContext: {
          card_type: mode === "long_narrative" ? "world" : mode === "short_narrative" ? "story" : "character",
          mode,
          ...buildWorkshopContentJson(mode, getWorkshopDraftByMode(mode))
        }
      };
      const text = JSON.stringify(payload, null, 2);
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      uiState.workshopFeedback = "运行上下文已复制";
      render();
      return;
    }
    if (action === "workshop-reset-mode") {
      const mode = uiState.workshopMode;
      if (WORKSHOP_FORCE_CUSTOM_MODES.has(mode)) {
        resetWorkshopDraft(mode);
        uiState.workshopFeedback = "当前模式字段已清空，可自由创建";
      } else {
        applyWorkshopTemplate(mode, (WORKSHOP_TEMPLATES[mode] || [])[0]?.id || "");
        uiState.workshopFeedback = "当前模式已重置为默认模板";
      }
      uiState.workshopCustomParsed = null;
      render();
      return;
    }
    if (action === "workshop-paint-generate") {
      runWorkshopPaintGeneration();
      return;
    }
    if (action === "workshop-paint-model") {
      const model = String(actionTarget.getAttribute("data-model") || "").trim();
      const allowed = (Array.isArray(uiState.workshopPaintModels) ? uiState.workshopPaintModels : [])
        .map((item) => String(item?.id || "").trim())
        .filter(Boolean);
      if (!allowed.includes(model)) return;
      uiState.workshopPaintModel = model;
      render();
      return;
    }
    if (action === "workshop-paint-toggle-enhance") {
      uiState.workshopPaintPromptEnhance = !uiState.workshopPaintPromptEnhance;
      render();
      return;
    }
    if (action === "workshop-paint-toggle-seed-lock") {
      uiState.workshopPaintSeedLocked = !uiState.workshopPaintSeedLocked;
      if (uiState.workshopPaintSeedLocked && !String(uiState.workshopPaintSeedInput || "").trim()) {
        uiState.workshopPaintSeedInput = String(Math.floor(Math.random() * 1000000));
      }
      render();
      return;
    }
    if (action === "workshop-paint-copy-prompt") {
      const prompt = String(uiState.workshopPaintPrompt || "").trim();
      const enhanced = buildWorkshopPaintEnhancedPrompt({
        prompt,
        style: uiState.workshopPaintStyle,
        ratio: uiState.workshopPaintRatio,
        enhance: uiState.workshopPaintPromptEnhance
      });
      copyTextToClipboard(enhanced || prompt);
      uiState.workshopPaintFeedback = "提示词已复制";
      render();
      return;
    }
    if (action === "workshop-paint-apply-preset") {
      const key = String(actionTarget.getAttribute("data-key") || "").trim();
      const hit = WORKSHOP_PAINT_PROMPT_PRESETS.find((x) => x.key === key);
      if (!hit) return;
      const current = String(uiState.workshopPaintPrompt || "").trim();
      uiState.workshopPaintPrompt = current ? `${current}，${hit.text}` : hit.text;
      uiState.workshopPaintFeedback = `已追加预设：${hit.label}`;
      render();
      return;
    }
    if (action === "workshop-paint-sync-history") {
      void syncWorkshopPaintHistory({ silent: false });
      return;
    }
    if (action === "workshop-paint-copy-all-result-links") {
      const links = (Array.isArray(uiState.workshopPaintResults) ? uiState.workshopPaintResults : [])
        .map((item) => String(item?.url || "").trim())
        .filter(Boolean);
      if (!links.length) {
        uiState.workshopPaintFeedback = "当前没有可复制的图片链接";
      } else {
        copyTextToClipboard(links.join("\n"));
        uiState.workshopPaintFeedback = `已复制 ${links.length} 条图片链接`;
      }
      render();
      return;
    }
    if (action === "workshop-paint-reuse") {
      uiState.workshopPaintPrompt = String(actionTarget.getAttribute("data-prompt") || "").trim();
      uiState.workshopPaintNegativePrompt = String(actionTarget.getAttribute("data-negative") || "").trim();
      uiState.workshopPaintStyle = String(actionTarget.getAttribute("data-style") || "cinematic").trim() || "cinematic";
      uiState.workshopPaintRatio = String(actionTarget.getAttribute("data-ratio") || "1:1").trim() || "1:1";
      uiState.workshopPaintModel = String(actionTarget.getAttribute("data-model") || uiState.workshopPaintModel || "wan2.2-t2i-flash").trim();
      uiState.workshopPaintSeedInput = String(actionTarget.getAttribute("data-seed") || "").trim();
      uiState.workshopPaintComposerOpen = true;
      uiState.workshopPaintFeedback = "参数已回填，可直接二次生成";
      render();
      return;
    }
    if (action === "workshop-paint-rerun") {
      runWorkshopPaintGeneration({
        prompt: String(actionTarget.getAttribute("data-prompt") || "").trim(),
        negative: String(actionTarget.getAttribute("data-negative") || "").trim(),
        style: String(actionTarget.getAttribute("data-style") || "cinematic").trim() || "cinematic",
        ratio: String(actionTarget.getAttribute("data-ratio") || "1:1").trim() || "1:1",
        model: String(actionTarget.getAttribute("data-model") || uiState.workshopPaintModel || "wan2.2-t2i-flash").trim(),
        seed: uiState.workshopPaintSeedLocked
          ? String(actionTarget.getAttribute("data-seed") || uiState.workshopPaintSeedInput || "").trim()
          : ""
      });
      return;
    }
    if (action === "workshop-paint-apply-cover") {
      const imageUrl = String(actionTarget.getAttribute("data-url") || "").trim();
      if (!imageUrl) return;
      setWorkshopDraftField(uiState.workshopMode, "cardBackground", imageUrl);
      uiState.workshopPaintFeedback = "已设为当前创作卡背景图";
      render();
      return;
    }
    if (action === "workshop-paint-download") {
      const imageUrl = String(actionTarget.getAttribute("data-url") || "").trim();
      const title = String(actionTarget.getAttribute("data-title") || "ai_paint").trim();
      if (!imageUrl) return;
      const a = document.createElement("a");
      a.href = imageUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.download = `${title.replace(/[\\/:*?"<>|]+/g, "_")}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      uiState.workshopPaintFeedback = "已尝试下载首图";
      render();
      return;
    }
    if (action === "workshop-paint-toggle-composer") {
      uiState.workshopPaintComposerOpen = !uiState.workshopPaintComposerOpen;
      render();
      return;
    }
    if (action === "workshop-paint-clear") {
      uiState.workshopPaintResults = [];
      uiState.workshopPaintFeedback = "已清空画图结果";
      render();
      return;
    }
    if (action === "apply-search-term") {
      const term = actionTarget.getAttribute("data-term");
      if (term) executeSearch(term);
      return;
    }
    if (action === "clear-search-history") {
      uiState.searchHistory = [];
      uiState.communitySearchHistory = [];
      render();
      return;
    }
    if (action === "rotate-hot-search") {
      if (inCommunitySearchFlow) uiState.communityHotSearchCursor += 1;
      else uiState.hotSearchCursor += 1;
      render();
      return;
    }
    if (action === "set-search-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.searchResultTab = tab;
        uiState.searchSubTab = "综合";
        render();
      }
      return;
    }
    if (action === "set-search-subtab") {
      const subTab = actionTarget.getAttribute("data-subtab");
      if (subTab) {
        uiState.searchSubTab = subTab;
        render();
      }
      return;
    }
    if (action === "set-search-sort") {
      const sort = actionTarget.getAttribute("data-sort");
      if (sort) {
        uiState.searchSort = sort;
        render();
      }
      return;
    }
    if (action === "set-community-search-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.communitySearchTab = tab;
        render();
      }
      return;
    }
    if (action === "set-community-search-sort") {
      const sort = actionTarget.getAttribute("data-sort");
      if (sort) {
        uiState.communitySearchSort = sort;
        render();
      }
      return;
    }
    if (action === "toggle-community-filter") {
      uiState.communityFilterExpanded = !uiState.communityFilterExpanded;
      render();
      return;
    }
    if (action === "community-filter-change") {
      const key = actionTarget.getAttribute("data-key");
      const value = actionTarget.getAttribute("data-value");
      if (!key || !value) return;
      if (key === "theme") uiState.communityFilterTheme = value;
      if (key === "gender") uiState.communityFilterGender = value;
      if (key === "time") uiState.communityFilterTime = value;
      if (key === "size") uiState.communityFilterSize = value;
      if (key === "theme") uiState.communityTopicPanelOpen = false;
      render();
      return;
    }
    if (action === "toggle-community-topics") {
      uiState.communityTopicPanelOpen = !uiState.communityTopicPanelOpen;
      render();
      return;
    }
    if (action === "community-filter-reset") {
      uiState.communityFilterTheme = "全部主题";
      uiState.communityFilterGender = "不限频向";
      uiState.communityFilterTime = "全部时间";
      uiState.communityFilterSize = "全部人数";
      render();
      return;
    }
    if (action === "community-filter-apply") {
      uiState.communityFilterExpanded = false;
      render();
      return;
    }
    if (action === "open-community-group") {
      const id = actionTarget.getAttribute("data-id");
      if (id) uiState.selectedCommunityId = id;
      uiState.communityGroupFeedback = "";
      if (uiState.communityGroupTab === "members" && id) {
        void fetchCommunityMembersAndSync(id, { force: true });
      }
      window.location.hash = "#/community/group";
      return;
    }
    if (action === "community-my-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab === "joined" || tab === "created") {
        uiState.communityMyTab = tab;
        render();
      }
      return;
    }
    if (action === "community-group-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab === "dynamic" || tab === "featured" || tab === "members") {
        uiState.communityGroupTab = tab;
        if (tab === "members") {
          const c = getSelectedCommunity();
          if (c?.id) void fetchCommunityMembersAndSync(c.id, { force: true });
        }
        render();
      }
      return;
    }
    if (action === "community-join-group") {
      void joinSelectedCommunity();
      return;
    }
    if (action === "community-compose-type") {
      const type = actionTarget.getAttribute("data-type");
      if (type) {
        uiState.communityComposeType = type;
        render();
      }
      return;
    }
    if (action === "community-compose-pick-media") {
      const input = document.querySelector("[data-field='community-compose-media-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "community-compose-remove-media") {
      const mediaId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!mediaId) return;
      uiState.communityComposeMedia = (uiState.communityComposeMedia || []).filter((x) => String(x?.id || "") !== mediaId);
      render();
      return;
    }
    if (action === "community-compose-open-mentions") {
      uiState.communityComposeMentionSheetOpen = true;
      uiState.communityComposeTopicSheetOpen = false;
      uiState.storyBindSheetOpen = false;
      render();
      return;
    }
    if (action === "community-compose-open-topics") {
      uiState.communityComposeTopicSheetOpen = true;
      uiState.communityComposeMentionSheetOpen = false;
      uiState.storyBindSheetOpen = false;
      render();
      return;
    }
    if (action === "open-story-bind-sheet") {
      const target = String(actionTarget.getAttribute("data-target") || "").trim();
      uiState.storyBindSheetTarget = target === "dynamic" ? "dynamic" : "community";
      uiState.storyBindSheetOpen = true;
      uiState.storyBindSearchKeyword = "";
      uiState.communityComposeTopicSheetOpen = false;
      uiState.communityComposeMentionSheetOpen = false;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector("[data-field='story-bind-search-keyword']");
        if (input instanceof HTMLInputElement) input.focus();
      });
      return;
    }
    if (action === "close-story-bind-sheet") {
      uiState.storyBindSheetOpen = false;
      uiState.storyBindSheetTarget = "";
      uiState.storyBindSearchKeyword = "";
      render();
      return;
    }
    if (action === "pick-story-bind") {
      const target = String(actionTarget.getAttribute("data-target") || "").trim() === "dynamic" ? "dynamic" : "community";
      const storyId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!storyId) return;
      if (target === "dynamic") uiState.dynamicComposeStoryId = storyId;
      else uiState.communityComposeStoryId = storyId;
      uiState.storyBindSheetOpen = false;
      uiState.storyBindSheetTarget = "";
      uiState.storyBindSearchKeyword = "";
      render();
      return;
    }
    if (action === "clear-story-bind") {
      const target = String(actionTarget.getAttribute("data-target") || "").trim() === "dynamic" ? "dynamic" : "community";
      if (target === "dynamic") uiState.dynamicComposeStoryId = "";
      else uiState.communityComposeStoryId = "";
      render();
      return;
    }
    if (action === "community-compose-close-sheet") {
      uiState.communityComposeTopicSheetOpen = false;
      uiState.communityComposeMentionSheetOpen = false;
      uiState.storyBindSheetOpen = false;
      uiState.storyBindSheetTarget = "";
      render();
      return;
    }
    if (action === "community-compose-pick-mention") {
      const name = String(actionTarget.getAttribute("data-name") || "").trim();
      if (!name) return;
      if (!uiState.communityComposeMentions.includes(name)) {
        uiState.communityComposeMentions = [...uiState.communityComposeMentions, name].slice(0, 12);
      }
      uiState.communityComposeText = appendTextTokenWithSpace(uiState.communityComposeText, `@${name}`);
      uiState.communityComposeMentionSheetOpen = false;
      render();
      return;
    }
    if (action === "community-compose-pick-topic") {
      const topic = String(actionTarget.getAttribute("data-topic") || "").trim();
      if (!topic) return;
      if (!uiState.communityComposeTopics.includes(topic)) {
        uiState.communityComposeTopics = [...uiState.communityComposeTopics, topic].slice(0, 12);
      }
      uiState.communityComposeText = appendTextTokenWithSpace(uiState.communityComposeText, `#${topic}`);
      uiState.communityComposeTopicSheetOpen = false;
      render();
      return;
    }
    if (action === "community-compose-save-draft") {
      uiState.communityGroupFeedback = "草稿已暂存（本地）";
      render();
      return;
    }
    if (action === "community-sync-toggle") {
      uiState.communityComposeSync = !uiState.communityComposeSync;
      render();
      return;
    }
    if (action === "community-cover-upload-trigger") {
      const input = document.querySelector("[data-field='community-create-cover-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "community-avatar-upload-trigger") {
      const input = document.querySelector("[data-field='community-create-avatar-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "community-create-mask") {
      const mode = String(actionTarget.getAttribute("data-mode") || "").trim();
      if (mode === "on") uiState.communityCreateMaskOpacity = 0.38;
      if (mode === "off") uiState.communityCreateMaskOpacity = 0;
      render();
      return;
    }
    if (action === "community-create-join") {
      const mode = actionTarget.getAttribute("data-mode");
      if (mode === "公开加入" || mode === "审核加入") {
        uiState.communityCreateJoinMode = mode;
        render();
      }
      return;
    }
    if (action === "publish-community-create") {
      void publishCommunityCreateAndPersist();
      return;
    }
    if (action === "publish-community-post") {
      void publishCommunityPostAndPersist();
      return;
    }
    if (action === "open-community-post") {
      const id = actionTarget.getAttribute("data-id");
      if (id) {
        uiState.selectedCommunityPostId = id;
        uiState.communityPostDetailError = "";
        uiState.communityPostDetailLoadingId = id;
        void loadCommunityPostDetail(id, { silent: true })
          .catch((error) => {
            uiState.communityPostDetailError = error instanceof Error ? error.message : "加载失败";
          })
          .finally(() => {
            if (uiState.communityPostDetailLoadingId === id) uiState.communityPostDetailLoadingId = "";
            render();
          });
      }
      window.location.hash = "#/community/post/detail";
      return;
    }
    if (action === "community-post-like") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId || !uiState.currentUserId) return;
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      if (meta.likePending) return;
      const next = !Boolean(meta.liked);
      const prevLiked = Boolean(meta.liked);
      const prevLikes = Number(meta.likes || 0);
      meta.likePending = true;
      meta.liked = next;
      meta.likes = Math.max(0, prevLikes + (next ? 1 : -1));
      patchCommunityPostById(postId, { likes: meta.likes });
      persistCommunityPostState(postId, { liked: meta.liked, likes: meta.likes });
      render();
      void apiJson("/community/posts/react", {
        postId,
        userId: uiState.currentUserId,
        reactionType: "like",
        active: next
      })
        .then((data) => {
          const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
          meta.liked = typeof patch.active === "boolean" ? patch.active : next;
          meta.likes = Number.isFinite(Number(patch.likesCount))
            ? Number(patch.likesCount)
            : Number(meta.likes || 0);
          patchCommunityPostById(postId, { likes: meta.likes });
          persistCommunityPostState(postId, { liked: meta.liked, likes: meta.likes });
          render();
        })
        .catch((error) => {
          meta.liked = prevLiked;
          meta.likes = prevLikes;
          patchCommunityPostById(postId, { likes: meta.likes });
          persistCommunityPostState(postId, { liked: meta.liked, likes: meta.likes });
          uiState.communityGroupFeedback = error instanceof Error ? error.message : "点赞失败";
          render();
        })
        .finally(() => {
          meta.likePending = false;
          render();
        });
      return;
    }
    if (action === "community-post-star") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId || !uiState.currentUserId) return;
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      if (meta.starPending) return;
      const next = !Boolean(meta.starred);
      const prevStarred = Boolean(meta.starred);
      const prevStars = Number(meta.stars || 0);
      meta.starPending = true;
      meta.starred = next;
      meta.stars = Math.max(0, prevStars + (next ? 1 : -1));
      patchCommunityPostById(postId, { stars: meta.stars });
      persistCommunityPostState(postId, { starred: meta.starred, stars: meta.stars });
      render();
      void apiJson("/community/posts/react", {
        postId,
        userId: uiState.currentUserId,
        reactionType: "favorite",
        active: next
      })
        .then((data) => {
          const patch = data?.patch && typeof data.patch === "object" ? data.patch : {};
          meta.starred = typeof patch.active === "boolean" ? patch.active : next;
          meta.stars = Number.isFinite(Number(patch.favoritesCount))
            ? Number(patch.favoritesCount)
            : Number(meta.stars || 0);
          patchCommunityPostById(postId, { stars: meta.stars });
          persistCommunityPostState(postId, { starred: meta.starred, stars: meta.stars });
          render();
        })
        .catch((error) => {
          meta.starred = prevStarred;
          meta.stars = prevStars;
          patchCommunityPostById(postId, { stars: meta.stars });
          persistCommunityPostState(postId, { starred: meta.starred, stars: meta.stars });
          uiState.communityGroupFeedback = error instanceof Error ? error.message : "收藏失败";
          render();
        })
        .finally(() => {
          meta.starPending = false;
          render();
        });
      return;
    }
    if (action === "community-post-comment-focus") {
      const input = document.querySelector("[data-field='community-comment']");
      if (input instanceof HTMLInputElement) input.focus();
      return;
    }
    if (action === "community-post-comment-submit") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      const draft = getCommunityCommentDraft(postId);
      const text = draft.trim();
      if (!text || !postId) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      if (meta.commentSubmitting) return;
      const prevCount = Number(meta.commentsCount || 0);
      const optimistic = {
        id: `tmp_${Date.now()}_${Math.random().toString(16).slice(2, 7)}`,
        userId: String(uiState.currentUserId || ""),
        parentCommentId: null,
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        replies: [],
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      meta.commentSubmitting = true;
      meta.commentError = "";
      meta.comments.unshift(optimistic);
      meta.commentsCount = prevCount + 1;
      setCommunityCommentDraft(postId, "");
      patchCommunityPostById(postId, { comments: meta.commentsCount });
      persistCommunityPostState(postId, {
        commentsCount: meta.commentsCount,
        comments: meta.comments
      });
      render();
      void createCommunityPostCommentAndSync(postId, text)
        .then(({ comment, commentsCount }) => {
          const normalized = comment || optimistic;
          upsertThreadComment(meta.comments, normalized, optimistic.id, 0);
          meta.commentsCount = Number.isFinite(Number(commentsCount))
            ? Math.max(0, Number(commentsCount))
            : meta.comments.length;
          patchCommunityPostById(postId, { comments: meta.commentsCount });
          persistCommunityPostState(postId, {
            commentsCount: meta.commentsCount,
            comments: meta.comments
          });
          render();
        })
        .catch((error) => {
          meta.comments = meta.comments.filter((x) => x !== optimistic && String(x?.id || "") !== optimistic.id);
          meta.commentsCount = Math.max(0, prevCount);
          setCommunityCommentDraft(postId, draft);
          patchCommunityPostById(postId, { comments: meta.commentsCount });
          persistCommunityPostState(postId, {
            commentsCount: meta.commentsCount,
            comments: meta.comments
          });
          meta.commentError = error instanceof Error ? error.message : "评论失败";
          render();
        })
        .finally(() => {
          meta.commentSubmitting = false;
          render();
        });
      return;
    }
    if (action === "community-comment-open-reply") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId) return;
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      const opened = openThreadReplyEditorForState(meta, meta.comments || [], commentId);
      if (!opened) return;
      meta.activeActionCommentId = "";
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`input[data-field="community-reply-draft"][data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "community-comment-open-menu") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      meta.activeActionCommentId = commentId;
      render();
      return;
    }
    if (action === "community-comment-sheet-close") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      meta.activeActionCommentId = "";
      render();
      return;
    }
    if (action === "community-comment-sheet-reply") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || meta.activeActionCommentId || "").trim();
      if (!commentId) return;
      meta.activeActionCommentId = "";
      const opened = openThreadReplyEditorForState(meta, meta.comments || [], commentId);
      if (!opened) return;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`input[data-field="community-reply-draft"][data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "community-comment-sheet-copy") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || meta.activeActionCommentId || "").trim();
      if (!commentId) return;
      const text = readThreadCommentTextById(meta.comments || [], commentId);
      void copyTextToClipboardBestEffort(text).then((ok) => {
        uiState.communityGroupFeedback = ok ? "评论已复制" : "复制失败";
        meta.activeActionCommentId = "";
        render();
      });
      return;
    }
    if (action === "community-comment-sheet-report") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      meta.activeActionCommentId = "";
      uiState.communityGroupFeedback = "已收到举报，我们会尽快处理";
      render();
      return;
    }
    if (action === "community-comment-reply-cancel") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      meta.activeReplyCommentId = "";
      meta.activeReplyTargetId = "";
      render();
      return;
    }
    if (action === "community-comment-reply-submit") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      if (meta.submittingReplyByCommentId[commentId]) return;
      const replyTarget = resolveThreadReplySubmitTarget(meta, meta.comments || [], commentId);
      if (!replyTarget?.row) return;
      const parentCommentId = String(replyTarget.row.id || "").trim();
      if (!parentCommentId) return;
      const text = String(meta.replyDraftByCommentId?.[commentId] || "").trim();
      if (!text) return;
      const parent = replyTarget.row;
      if (!Array.isArray(parent.replies)) parent.replies = [];
      const optimisticReply = {
        id: `tmp_reply_${Date.now()}`,
        userId: String(uiState.currentUserId || ""),
        parentCommentId,
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      parent.replies.push(optimisticReply);
      meta.submittingReplyByCommentId[commentId] = true;
      meta.replyDraftByCommentId[commentId] = "";
      meta.activeReplyCommentId = "";
      meta.activeReplyTargetId = "";
      meta.activeActionCommentId = "";
      meta.commentError = "";
      persistCommunityPostState(postId, {
        commentsCount: Number(meta.commentsCount || 0),
        comments: meta.comments
      });
      render();
      void createCommunityPostCommentAndSync(postId, text, parentCommentId)
        .then(({ comment }) => {
          meta.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(meta.comments || [], parentCommentId);
          if (!latestParentHit?.row) {
            render();
            return;
          }
          const latestParent = latestParentHit.row;
          if (!Array.isArray(latestParent.replies)) latestParent.replies = [];
          if (comment && typeof comment === "object") {
            upsertThreadReply(latestParent.replies, comment, optimisticReply.id);
          }
          delete meta.replyDraftByCommentId[commentId];
          persistCommunityPostState(postId, {
            commentsCount: Number(meta.commentsCount || 0),
            comments: meta.comments
          });
          render();
        })
        .catch((error) => {
          meta.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(meta.comments || [], parentCommentId);
          const latestParent = latestParentHit?.row || null;
          if (latestParent && Array.isArray(latestParent.replies)) {
            latestParent.replies = latestParent.replies.filter((x) => x !== optimisticReply);
          }
          meta.replyDraftByCommentId[commentId] = text;
          meta.activeReplyCommentId = commentId;
          meta.activeReplyTargetId = parentCommentId;
          meta.commentError = error instanceof Error ? error.message : "回复失败";
          persistCommunityPostState(postId, {
            commentsCount: Number(meta.commentsCount || 0),
            comments: meta.comments
          });
          render();
        });
      return;
    }
    if (action === "community-comment-delete") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId || meta.deletingByCommentId[commentId]) return;
      const deleteHit = findThreadCommentRowInList(meta.comments || [], commentId);
      if (!deleteHit?.row || !canDeleteCommentByCurrentUser(deleteHit.row)) return;
      const removedSnapshot = removeThreadCommentById(meta.comments || [], commentId);
      if (!removedSnapshot?.removed) return;
      if (removedSnapshot.isTopLevel) {
        meta.commentsCount = Math.max(0, Number(meta.commentsCount || 0) - 1);
        patchCommunityPostById(postId, { comments: meta.commentsCount });
      }
      if (meta.activeReplyCommentId === commentId) meta.activeReplyCommentId = "";
      if (meta.activeReplyTargetId === commentId) meta.activeReplyTargetId = "";
      if (meta.activeActionCommentId === commentId) meta.activeActionCommentId = "";
      meta.deletingByCommentId[commentId] = true;
      meta.commentError = "";
      persistCommunityPostState(postId, {
        commentsCount: meta.commentsCount,
        comments: meta.comments
      });
      render();
      void deleteCommunityPostCommentAndSync(commentId)
        .then(({ commentsCount }) => {
          meta.deletingByCommentId[commentId] = false;
          if (removedSnapshot.isTopLevel) {
            meta.commentsCount = Number.isFinite(Number(commentsCount))
              ? Math.max(0, Number(commentsCount))
              : Number(meta.commentsCount || 0);
            patchCommunityPostById(postId, { comments: meta.commentsCount });
          }
          persistCommunityPostState(postId, {
            commentsCount: meta.commentsCount,
            comments: meta.comments
          });
          render();
        })
        .catch((error) => {
          meta.deletingByCommentId[commentId] = false;
          const restored = restoreRemovedThreadComment(removedSnapshot);
          if (removedSnapshot.isTopLevel && restored) {
            meta.commentsCount = Number(meta.commentsCount || 0) + 1;
            patchCommunityPostById(postId, { comments: meta.commentsCount });
          }
          meta.commentError = error instanceof Error ? error.message : "删除失败";
          persistCommunityPostState(postId, {
            commentsCount: meta.commentsCount,
            comments: meta.comments
          });
          render();
        });
      return;
    }
    if (action === "community-comment-like") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const meta = ensureCommunityPostMeta(post);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId || meta.likingByCommentId[commentId]) return;
      const hit = findThreadCommentRowInList(meta.comments, commentId);
      if (!hit.row) return;
      const prevLiked = Boolean(hit.row.likedByMe);
      const prevLikes = Number(hit.row.likes || 0);
      const nextLiked = !prevLiked;
      hit.row.likedByMe = nextLiked;
      hit.row.likes = Math.max(0, prevLikes + (nextLiked ? 1 : -1));
      meta.likingByCommentId[commentId] = true;
      meta.commentError = "";
      render();
      void setCommunityPostCommentLike(commentId, nextLiked)
        .then((next) => {
          meta.likingByCommentId[commentId] = false;
          if (next) {
            hit.row.likedByMe = Boolean(next.likedByMe);
            hit.row.likes = Number(next.likes || 0);
          }
          render();
        })
        .catch((error) => {
          meta.likingByCommentId[commentId] = false;
          hit.row.likedByMe = prevLiked;
          hit.row.likes = prevLikes;
          meta.commentError = error instanceof Error ? error.message : "点赞失败";
          render();
        });
      return;
    }
    if (action === "community-post-share") {
      const post = getSelectedCommunityPost();
      const postId = String(post?.id || "").trim();
      if (!postId) return;
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      void apiJson("/community/posts/share", { postId, userId: uiState.currentUserId || null })
        .then((data) => {
          meta.shared = true;
          meta.shares = Number(data?.sharesCount || (Number(meta.shares || 0) + 1));
          patchCommunityPostById(postId, { shares: meta.shares });
          persistCommunityPostState(postId, { shared: true, shares: meta.shares });
          const shareLink = `${location.origin}${location.pathname}#/community/post/detail`;
          if (navigator.clipboard?.writeText) navigator.clipboard.writeText(shareLink).catch(() => {});
          uiState.communityGroupFeedback = "链接已复制";
          render();
        })
        .catch((error) => {
          uiState.communityGroupFeedback = error instanceof Error ? error.message : "分享失败";
          render();
        });
      return;
    }
    if (action === "community-joined-toggle") {
      const key = actionTarget.getAttribute("data-key");
      if (!key || !Object.prototype.hasOwnProperty.call(uiState.communityJoinedSettings, key)) return;
      uiState.communityJoinedSettings[key] = !uiState.communityJoinedSettings[key];
      uiState.communityManageFeedback = uiState.communityJoinedSettings[key] ? "已开启" : "已关闭";
      render();
      return;
    }
    if (action === "community-quit-group") {
      uiState.communityManageFeedback = "你已退出该社群";
      uiState.communityMyTab = "joined";
      window.location.hash = "#/community/mine";
      return;
    }
    if (action === "community-member-message") {
      const name = actionTarget.getAttribute("data-name") || "成员";
      uiState.messageFeedback = `已打开与 ${name} 的私信（占位）`;
      window.location.hash = "#/messages/story";
      return;
    }
    if (action === "community-created-member-toggle-admin") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      uiState.communityCreatedMembers = uiState.communityCreatedMembers.map((m) => {
        if (m.id !== id || m.role === "群主") return m;
        return { ...m, role: m.role === "管理员" ? "成员" : "管理员" };
      });
      uiState.communityManageFeedback = "成员权限已更新";
      render();
      return;
    }
    if (action === "community-created-member-remove") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      const before = uiState.communityCreatedMembers.length;
      uiState.communityCreatedMembers = uiState.communityCreatedMembers.filter((m) => m.id !== id || m.role === "群主");
      uiState.communityManageFeedback = before === uiState.communityCreatedMembers.length ? "群主不可移除" : "成员已移出社群";
      render();
      return;
    }
    if (action === "community-review-approve") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      const target = uiState.communityReviewQueue.find((x) => x.id === id);
      uiState.communityReviewQueue = uiState.communityReviewQueue.filter((x) => x.id !== id);
      if (target) {
        uiState.communityCreatedMembers.push({
          id: `cm_${Date.now()}`,
          name: target.name,
          role: "成员",
          intro: target.note
        });
      }
      uiState.communityManageFeedback = "已通过申请";
      render();
      return;
    }
    if (action === "community-review-decline") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      uiState.communityReviewQueue = uiState.communityReviewQueue.filter((x) => x.id !== id);
      uiState.communityManageFeedback = "已拒绝申请";
      render();
      return;
    }
    if (action === "community-blacklist-remove") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      uiState.communityBlacklist = uiState.communityBlacklist.filter((x) => x.id !== id);
      uiState.communityManageFeedback = "已解除黑名单";
      render();
      return;
    }
    if (action === "community-setting-stub") {
      uiState.communityManageFeedback = actionTarget.getAttribute("data-text") || "设置入口已打开（占位）";
      render();
      return;
    }
    if (action === "community-transfer-select-receiver") {
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      uiState.communityTransferReceiverId = id;
      const receiver = uiState.communityCreatedMembers.find((x) => x.id === id);
      uiState.communityManageFeedback = `已选择接收者：${receiver ? receiver.name : "成员"}`;
      render();
      return;
    }
    if (action === "community-transfer-confirm") {
      const receiver = uiState.communityCreatedMembers.find((x) => x.id === uiState.communityTransferReceiverId);
      const requiredCode = uiState.communityTransferMethod === "password" ? 6 : 4;
      const code = String(uiState.communityTransferCodeDraft || "").trim();
      if (!receiver) {
        uiState.communityManageFeedback = "请先选择接收者";
        render();
        return;
      }
      if (code.length < requiredCode) {
        uiState.communityManageFeedback = uiState.communityTransferMethod === "password" ? "请先输入至少6位密码" : "请先输入验证码";
        render();
        return;
      }
      uiState.communityManageFeedback = `社群已转让给 ${receiver.name}`;
      uiState.communityTransferCodeDraft = "";
      window.location.hash = "#/community/manage";
      return;
    }
    if (action === "community-open-dismiss-confirm") {
      if (!uiState.communityDismissConfirm) {
        uiState.communityDismissConfirm = true;
        uiState.communityManageFeedback = "再次点击将进入解散确认";
        render();
        return;
      }
      uiState.communityDismissConfirm = false;
      window.location.hash = "#/community/manage/dismiss";
      return;
    }
    if (action === "community-dismiss-confirm") {
      const verifyText = String(uiState.communityTransferCodeDraft || "").trim();
      if (verifyText !== "社群名-月海航线-确认") {
        uiState.communityManageFeedback = "请输入正确确认文案后再解散";
        render();
        return;
      }
      uiState.communityTransferCodeDraft = "";
      uiState.communityManageFeedback = "社群已解散（演示态）";
      window.location.hash = "#/community/home";
      return;
    }
    if (action === "save-community-announcement") {
      uiState.communityManageFeedback = uiState.communityAnnounceDraft.trim() ? "公告已保存并发布" : "请先输入公告内容";
      render();
      return;
    }
    if (action === "community-transfer-method") {
      const method = actionTarget.getAttribute("data-method");
      if (method === "password" || method === "sms") {
        uiState.communityTransferMethod = method;
        render();
      }
      return;
    }
    if (action === "open-backstage-settings") {
      uiState.backstageSignatureDraft = uiState.backstageSignature || uiState.profile?.bio || "";
      uiState.backstageTopBackgroundDraft = uiState.backstageTopBackground || uiState.profile?.backstageCoverUrl || "";
      uiState.backstageTopBackgroundMaskDraft = normalizeBackstageMaskValue(
        uiState.backstageTopBackgroundMask,
        normalizeBackstageMaskValue(uiState.profile?.backstageMask, true)
      );
      window.location.hash = "#/messages/story/settings";
      return;
    }
    if (action === "backstage-top-bg-upload") {
      const input = document.querySelector("[data-field='backstage-top-bg-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "backstage-top-bg-mask") {
      const value = String(actionTarget.getAttribute("data-value") || "").trim().toLowerCase();
      uiState.backstageTopBackgroundMaskDraft = value !== "off";
      render();
      return;
    }
    if (action === "save-backstage-settings") {
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (uiState.backstageTopBgProcessing) {
        uiState.meFeedback = "背景图片处理中，请稍候再保存";
        render();
        return;
      }
      if (uiState.backstageSettingsSaving) return;
      uiState.backstageSettingsSaving = true;
      uiState.meFeedback = "";
      render();
      const nextSignature = String(uiState.backstageSignatureDraft || "").trim();
      const nextCoverUrl = String(uiState.backstageTopBackgroundDraft || "").trim();
      const nextMaskEnabled = normalizeBackstageMaskValue(uiState.backstageTopBackgroundMaskDraft, true);
      void apiJson("/auth/profile", {
        userId: uiState.currentUserId,
        name: String(uiState.profile?.name || "Drama 用户").trim() || "Drama 用户",
        handle: String(uiState.profile?.handle || "@drama_user").trim() || "@drama_user",
        bio: nextSignature,
        avatarUrl: String(uiState.profile?.avatarUrl || "").trim(),
        gender: String(uiState.profile?.gender || "保密").trim(),
        birthday: String(uiState.profile?.birthday || "").trim(),
        coverUrl: String(uiState.profile?.coverUrl || extractRawUrlFromCssUrl(uiState.meHeroCover || "") || "").trim(),
        backstageCoverUrl: nextCoverUrl,
        backstageMask: nextMaskEnabled
      }, "POST", { timeoutMs: 12_000 })
        .then((resp) => {
          const saved = resp?.profile && typeof resp.profile === "object" ? resp.profile : {};
          const nextSavedProfile = {
            name: String(saved.name || uiState.profile?.name || "Drama 用户").trim() || "Drama 用户",
            handle: String(saved.handle || uiState.profile?.handle || "@drama_user").trim() || "@drama_user",
            bio: String(saved.bio || nextSignature || "").trim(),
            avatarUrl: String(saved.avatarUrl || uiState.profile?.avatarUrl || "").trim(),
            gender: String(saved.gender || uiState.profile?.gender || "保密").trim() || "保密",
            birthday: String(saved.birthday || uiState.profile?.birthday || "").trim(),
            coverUrl: String(saved.coverUrl || uiState.profile?.coverUrl || "").trim(),
            backstageCoverUrl: String(saved.backstageCoverUrl || nextCoverUrl || uiState.profile?.backstageCoverUrl || "").trim(),
            backstageMask: normalizeBackstageMaskValue(saved.backstageMask, nextMaskEnabled)
          };
          uiState.profile = nextSavedProfile;
          uiState.profileDraft = { ...nextSavedProfile };
          uiState.backstageSignature = nextSavedProfile.bio;
          uiState.backstageSignatureDraft = nextSavedProfile.bio;
          uiState.backstageTopBackground = nextSavedProfile.backstageCoverUrl;
          uiState.backstageTopBackgroundDraft = nextSavedProfile.backstageCoverUrl;
          uiState.backstageTopBackgroundMask = normalizeBackstageMaskValue(nextSavedProfile.backstageMask, true);
          uiState.backstageTopBackgroundMaskDraft = uiState.backstageTopBackgroundMask;
          uiState.profilePendingPatch = {
            values: { ...nextSavedProfile },
            expiresAt: Date.now() + 45_000
          };
          persistProfilePendingPatch(uiState.currentUserId, uiState.profilePendingPatch);
          persistProfileToCache(nextSavedProfile, uiState.currentUserId);
          if (uiState.currentUserId) {
            AUTHOR_DIRECTORY[uiState.currentUserId] = {
              ...(AUTHOR_DIRECTORY[uiState.currentUserId] || {}),
              id: uiState.currentUserId,
              name: nextSavedProfile.name,
              handle: nextSavedProfile.handle,
              bio: nextSavedProfile.bio,
              avatarUrl: nextSavedProfile.avatarUrl,
              coverUrl: nextSavedProfile.coverUrl,
              gender: nextSavedProfile.gender,
              birthday: nextSavedProfile.birthday
            };
          }
          uiState.profileCoreSyncGuardUntil = Date.now() + 20_000;
          uiState.meFeedback = "幕后主页设置已保存";
          window.location.hash = "#/messages/story";
          scheduleBootstrapFullRefresh(uiState.currentUserId);
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "unknown";
          uiState.meFeedback = msg === "REQUEST_TIMEOUT"
            ? "保存超时，请重试"
            : `保存失败：${msg}`;
          render();
        })
        .finally(() => {
          uiState.backstageSettingsSaving = false;
          render();
        });
      return;
    }
    if (action === "open-dynamic-composer") {
      uiState.showDynamicComposer = true;
      uiState.dynamicShareFeedback = "";
      render();
      return;
    }
    if (action === "close-dynamic-composer") {
      if (uiState.dynamicPublishing) return;
      uiState.showDynamicComposer = false;
      render();
      return;
    }
    if (action === "set-dynamic-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab && DYNAMIC_TABS.includes(tab)) {
        uiState.dynamicTab = tab;
        render();
      }
      return;
    }
    if (action === "set-dynamic-type") {
      const type = actionTarget.getAttribute("data-type");
      if (type) {
        uiState.dynamicComposerType = type;
        render();
      }
      return;
    }
    if (action === "dynamic-pick-media") {
      if (uiState.dynamicDraftMediaProcessing) return;
      const input = document.querySelector("[data-field='dynamic-media-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "dynamic-save-draft") {
      uiState.dynamicShareFeedback = "草稿已暂存（本地）";
      render();
      return;
    }
    if (action === "dynamic-compose-insert-mention") {
      uiState.dynamicDraftText = appendTextTokenWithSpace(uiState.dynamicDraftText, "@成员");
      syncDynamicPublishButtonState();
      render();
      return;
    }
    if (action === "dynamic-compose-insert-topic") {
      uiState.dynamicDraftText = appendTextTokenWithSpace(uiState.dynamicDraftText, "#话题");
      syncDynamicPublishButtonState();
      render();
      return;
    }
    if (action === "dynamic-remove-media") {
      const mediaId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!mediaId) return;
      uiState.dynamicDraftMedia = normalizeDynamicMediaItems(uiState.dynamicDraftMedia || []).filter((x) => String(x.id || "") !== mediaId);
      syncDynamicPublishButtonState();
      render();
      return;
    }
    if (action === "dynamic-set-visibility") {
      const next = normalizeDynamicVisibility(actionTarget.getAttribute("data-value") || "public");
      uiState.dynamicDraftVisibility = next;
      render();
      return;
    }
    if (action === "dynamic-set-allow-comments") {
      const next = String(actionTarget.getAttribute("data-value") || "").trim();
      uiState.dynamicDraftAllowComments = next !== "off";
      render();
      return;
    }
    if (action === "publish-dynamic") {
      if (uiState.dynamicPublishing || uiState.dynamicDraftMediaProcessing) return;
      const title = (uiState.dynamicDraftTitle || "").trim();
      const text = (uiState.dynamicDraftText || "").trim();
      const mediaItems = normalizeDynamicMediaItems(uiState.dynamicDraftMedia || []);
      if (!title && !text && mediaItems.length === 0) {
        uiState.dynamicShareFeedback = "请先输入内容，或上传图片/视频";
        render();
        return;
      }
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      uiState.dynamicPublishing = true;
      uiState.dynamicShareFeedback = "";
      uiState.dynamicPublishFeedback = "";
      render();
      void createDynamicPostAndSync({
        title,
        text,
        type: uiState.dynamicComposerType,
        mediaItems,
        linkedWorldCardId: uiState.dynamicComposeStoryId,
        visibility: uiState.dynamicDraftVisibility,
        allowComments: uiState.dynamicDraftAllowComments
      })
        .then(() => {
          uiState.dynamicDraftTitle = "";
          uiState.dynamicDraftText = "";
          uiState.dynamicDraftMedia = [];
          uiState.dynamicComposeStoryId = "";
          uiState.dynamicDraftVisibility = "public";
          uiState.dynamicDraftAllowComments = true;
          uiState.storyBindSheetOpen = false;
          uiState.storyBindSheetTarget = "";
          uiState.storyBindSearchKeyword = "";
          uiState.dynamicPublishing = false;
          uiState.showDynamicComposer = false;
          uiState.dynamicShareFeedback = "";
          uiState.dynamicPublishFeedback = "发布成功";
          window.location.hash = "#/messages/story";
          render();
          if (uiState.currentUserId) scheduleBootstrapFullRefresh(uiState.currentUserId);
          window.setTimeout(() => {
            if (uiState.dynamicPublishFeedback === "发布成功") {
              uiState.dynamicPublishFeedback = "";
              render();
            }
          }, 1800);
        })
        .catch((err) => {
          uiState.dynamicPublishing = false;
          uiState.dynamicShareFeedback = `发布失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "open-dynamic-detail") {
      const id = actionTarget.getAttribute("data-id");
      if (id) uiState.selectedDynamicId = id;
      uiState.dynamicShareFeedback = "";
      uiState.dynamicDetailMenuOpen = false;
      uiState.dynamicDetailActionLoading = false;
      window.location.hash = "#/messages/detail";
      return;
    }
    if (action === "toggle-dynamic-detail-menu") {
      uiState.dynamicDetailMenuOpen = !uiState.dynamicDetailMenuOpen;
      render();
      return;
    }
    if (action === "dynamic-detail-toggle-hide") {
      const item = getDynamicById(uiState.selectedDynamicId);
      if (!item?.id || !isMyDynamicItem(item)) return;
      if (uiState.dynamicDetailActionLoading) return;
      uiState.dynamicDetailActionLoading = true;
      const nextVisibility = isDynamicItemHidden(item) ? "public" : "private";
      uiState.dynamicShareFeedback = "";
      render();
      void setDynamicVisibility(item.id, nextVisibility)
        .then((post) => {
          const savedVisibility = normalizeDynamicVisibility(post?.visibility || nextVisibility);
          syncDynamicItemMetrics(item.id, { visibility: savedVisibility });
          const updated = getDynamicById(item.id);
          if (updated?.id) persistDynamicItemToCache(updated);
          uiState.dynamicDetailMenuOpen = false;
          uiState.dynamicShareFeedback = savedVisibility === "private" ? "已隐藏，其他用户不可见" : "已取消隐藏";
          scheduleBootstrapFullRefresh(uiState.currentUserId);
        })
        .catch((err) => {
          uiState.dynamicShareFeedback = `操作失败：${err instanceof Error ? err.message : "unknown"}`;
        })
        .finally(() => {
          uiState.dynamicDetailActionLoading = false;
          render();
        });
      return;
    }
    if (action === "dynamic-detail-delete") {
      const item = getDynamicById(uiState.selectedDynamicId);
      if (!item?.id || !isMyDynamicItem(item)) return;
      if (uiState.dynamicDetailActionLoading) return;
      const confirmed = window.confirm("删除后将无法恢复，确认删除这条动态吗？");
      if (!confirmed) return;
      uiState.dynamicDetailActionLoading = true;
      uiState.dynamicShareFeedback = "";
      render();
      void deleteDynamicPostByAuthor(item.id)
        .then((ok) => {
          if (!ok) throw new Error("DELETE_FAILED");
          uiState.dynamicPosts = uiState.dynamicPosts.filter((x) => String(x?.id || "") !== item.id);
          for (let i = DYNAMIC_FEED.length - 1; i >= 0; i -= 1) {
            if (String(DYNAMIC_FEED[i]?.id || "") === item.id) DYNAMIC_FEED.splice(i, 1);
          }
          delete uiState.dynamicMeta[item.id];
          removeDynamicItemFromCache(item.id);
          uiState.dynamicDetailMenuOpen = false;
          uiState.dynamicShareFeedback = "已删除";
          window.location.hash = "#/messages/story";
          scheduleBootstrapFullRefresh(uiState.currentUserId);
        })
        .catch((err) => {
          uiState.dynamicShareFeedback = `删除失败：${err instanceof Error ? err.message : "unknown"}`;
        })
        .finally(() => {
          uiState.dynamicDetailActionLoading = false;
          render();
        });
      return;
    }
    if (action === "toggle-dynamic-like") {
      const current = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(current);
      if (!meta || !current?.id) return;
      if (meta.liking) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      triggerWorldActionFx("like", 420);
      const next = !meta.liked;
      const prevLiked = meta.liked;
      const prevLikes = meta.likes;
      meta.liking = true;
      meta.liked = next;
      meta.likes = Math.max(0, meta.likes + (next ? 1 : -1));
      syncDynamicItemMetrics(current.id, { likes: meta.likes, liked: meta.liked });
      render();
      void setDynamicReaction(current.id, "like", next)
        .then((patch) => {
          if (!patch) return;
          meta.likes = Number.isFinite(Number(patch.likesCount)) ? Number(patch.likesCount) : meta.likes;
          meta.liked = typeof patch.active === "boolean" ? patch.active : next;
          syncDynamicItemMetrics(current.id, { likes: meta.likes, liked: meta.liked });
          render();
        })
        .catch((err) => {
          meta.liked = prevLiked;
          meta.likes = prevLikes;
          syncDynamicItemMetrics(current.id, { likes: prevLikes, liked: prevLiked });
          uiState.dynamicShareFeedback = `点赞失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        })
        .finally(() => {
          meta.liking = false;
          render();
        });
      return;
    }
    if (action === "toggle-dynamic-favorite") {
      const current = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(current);
      if (!meta || !current?.id) return;
      if (meta.favoriting) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const next = !meta.favorited;
      const prevFavorited = meta.favorited;
      const prevStar = Number.isFinite(Number(meta.star)) ? Number(meta.star) : toMetricCount(current?.star);
      meta.favoriting = true;
      meta.favorited = next;
      meta.star = Math.max(0, prevStar + (next ? 1 : -1));
      syncDynamicItemMetrics(current.id, { favorited: meta.favorited, star: meta.star });
      render();
      void setDynamicReaction(current.id, "favorite", next)
        .then((patch) => {
          if (!patch) return;
          meta.favorited = typeof patch.active === "boolean" ? patch.active : next;
          meta.star = Number.isFinite(Number(patch.favoritesCount))
            ? Number(patch.favoritesCount)
            : Number(meta.star || 0);
          syncDynamicItemMetrics(current.id, {
            favorited: meta.favorited,
            star: meta.star
          });
          render();
        })
        .catch((err) => {
          meta.favorited = prevFavorited;
          meta.star = prevStar;
          syncDynamicItemMetrics(current.id, { favorited: prevFavorited, star: prevStar });
          uiState.dynamicShareFeedback = `收藏失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        })
        .finally(() => {
          meta.favoriting = false;
          render();
        });
      return;
    }
    if (action === "share-dynamic") {
      const current = getDynamicById(uiState.selectedDynamicId);
      if (!current?.id) return;
      triggerWorldActionFx("share", 420);
      uiState.shareTargetType = "dynamic";
      uiState.shareTargetDynamicId = String(current.id || "");
      uiState.showWorldShareSheet = true;
      uiState.worldShareMode = "picker";
      uiState.worldShareSelectedUserId = "";
      uiState.worldShareSelectedUserName = "";
      uiState.worldShareDraft = "";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "focus-dynamic-comment") {
      triggerWorldActionFx("comment", 420);
      const input = document.querySelector("[data-field='dynamic-comment']");
      if (input instanceof HTMLInputElement) input.focus();
      return;
    }
    if (action === "submit-dynamic-comment") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta || !item?.id) return;
      const draft = getDynamicCommentDraft(item.id);
      const text = draft.trim();
      if (!text) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (meta.commentSubmitting) return;
      const prevCount = Number(meta.commentsCount || 0);
      const optimistic = {
        id: `tmp_${Date.now()}_${Math.random().toString(16).slice(2, 7)}`,
        userId: String(uiState.currentUserId || ""),
        parentCommentId: null,
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        replies: [],
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      meta.commentSubmitting = true;
      meta.commentError = "";
      meta.comments.unshift(optimistic);
      meta.commentsCount = prevCount + 1;
      setDynamicCommentDraft(item.id, "");
      syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
      render();
      void createDynamicCommentAndSync(item.id, text)
        .then(({ comment, commentsCount }) => {
          upsertThreadComment(meta.comments, comment || optimistic, optimistic.id, 0);
          if (Number.isFinite(Number(commentsCount)) && Number(commentsCount) >= 0) {
            meta.commentsCount = Number(commentsCount);
          }
          syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          render();
        })
        .catch((err) => {
          meta.comments = meta.comments.filter((c) => c !== optimistic);
          meta.commentsCount = Math.max(0, prevCount);
          setDynamicCommentDraft(item.id, draft);
          syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          meta.commentError = err instanceof Error ? err.message : "评论失败";
          render();
        })
        .finally(() => {
          meta.commentSubmitting = false;
          render();
        });
      return;
    }
    if (action === "dynamic-comment-open-reply") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta || !item?.id) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      const opened = openThreadReplyEditorForState(meta, meta.comments || [], commentId);
      if (!opened) return;
      meta.activeActionCommentId = "";
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`input[data-field="dynamic-reply-draft"][data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "dynamic-comment-open-menu") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      meta.activeActionCommentId = commentId;
      render();
      return;
    }
    if (action === "dynamic-comment-sheet-close") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      meta.activeActionCommentId = "";
      render();
      return;
    }
    if (action === "dynamic-comment-sheet-reply") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || meta.activeActionCommentId || "").trim();
      if (!commentId) return;
      meta.activeActionCommentId = "";
      const opened = openThreadReplyEditorForState(meta, meta.comments || [], commentId);
      if (!opened) return;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`input[data-field="dynamic-reply-draft"][data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "dynamic-comment-sheet-copy") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || meta.activeActionCommentId || "").trim();
      if (!commentId) return;
      const text = readThreadCommentTextById(meta.comments || [], commentId);
      void copyTextToClipboardBestEffort(text).then((ok) => {
        uiState.dynamicShareFeedback = ok ? "评论已复制" : "复制失败";
        meta.activeActionCommentId = "";
        render();
      });
      return;
    }
    if (action === "dynamic-comment-sheet-report") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      meta.activeActionCommentId = "";
      uiState.dynamicShareFeedback = "已收到举报，我们会尽快处理";
      render();
      return;
    }
    if (action === "dynamic-comment-reply-cancel") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta) return;
      meta.activeReplyCommentId = "";
      meta.activeReplyTargetId = "";
      render();
      return;
    }
    if (action === "dynamic-comment-reply-submit") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!item?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      if (meta.submittingReplyByCommentId[commentId]) return;
      const replyTarget = resolveThreadReplySubmitTarget(meta, meta.comments || [], commentId);
      if (!replyTarget?.row) return;
      const parentCommentId = String(replyTarget.row.id || "").trim();
      if (!parentCommentId) return;
      const text = String(meta.replyDraftByCommentId?.[commentId] || "").trim();
      if (!text) return;
      const parent = replyTarget.row;
      if (!Array.isArray(parent.replies)) parent.replies = [];
      const optimisticReply = {
        id: `tmp_reply_${Date.now()}`,
        userId: String(uiState.currentUserId || ""),
        parentCommentId,
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      parent.replies.push(optimisticReply);
      meta.submittingReplyByCommentId[commentId] = true;
      meta.replyDraftByCommentId[commentId] = "";
      meta.activeReplyCommentId = "";
      meta.activeReplyTargetId = "";
      meta.activeActionCommentId = "";
      meta.commentError = "";
      render();
      void createDynamicCommentAndSync(item.id, text, parentCommentId)
        .then(({ comment }) => {
          meta.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(meta.comments || [], parentCommentId);
          if (!latestParentHit?.row) {
            render();
            return;
          }
          const latestParent = latestParentHit.row;
          if (!Array.isArray(latestParent.replies)) latestParent.replies = [];
          if (comment && typeof comment === "object") {
            upsertThreadReply(latestParent.replies, comment, optimisticReply.id);
          }
          delete meta.replyDraftByCommentId[commentId];
          render();
        })
        .catch((error) => {
          meta.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(meta.comments || [], parentCommentId);
          const latestParent = latestParentHit?.row || null;
          if (latestParent && Array.isArray(latestParent.replies)) {
            latestParent.replies = latestParent.replies.filter((x) => x !== optimisticReply);
          }
          meta.replyDraftByCommentId[commentId] = text;
          meta.activeReplyCommentId = commentId;
          meta.activeReplyTargetId = parentCommentId;
          meta.commentError = error instanceof Error ? error.message : "回复失败";
          render();
        });
      return;
    }
    if (action === "dynamic-comment-delete") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!item?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId || meta.deletingByCommentId[commentId]) return;
      const deleteHit = findThreadCommentRowInList(meta.comments || [], commentId);
      if (!deleteHit?.row || !canDeleteCommentByCurrentUser(deleteHit.row)) return;
      const removedSnapshot = removeThreadCommentById(meta.comments || [], commentId);
      if (!removedSnapshot?.removed) return;
      if (removedSnapshot.isTopLevel) {
        meta.commentsCount = Math.max(0, Number(meta.commentsCount || 0) - 1);
        syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
      }
      if (meta.activeReplyCommentId === commentId) meta.activeReplyCommentId = "";
      if (meta.activeReplyTargetId === commentId) meta.activeReplyTargetId = "";
      if (meta.activeActionCommentId === commentId) meta.activeActionCommentId = "";
      meta.deletingByCommentId[commentId] = true;
      meta.commentError = "";
      render();
      void deleteDynamicCommentAndSync(commentId)
        .then(({ commentsCount }) => {
          meta.deletingByCommentId[commentId] = false;
          if (removedSnapshot.isTopLevel) {
            meta.commentsCount = Number.isFinite(Number(commentsCount))
              ? Math.max(0, Number(commentsCount))
              : Number(meta.commentsCount || 0);
            syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          }
          render();
        })
        .catch((error) => {
          meta.deletingByCommentId[commentId] = false;
          const restored = restoreRemovedThreadComment(removedSnapshot);
          if (removedSnapshot.isTopLevel && restored) {
            meta.commentsCount = Number(meta.commentsCount || 0) + 1;
            syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          }
          meta.commentError = error instanceof Error ? error.message : "删除失败";
          render();
        });
      return;
    }
    if (action === "dynamic-comment-like") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!item?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (!meta) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId || meta.likingByCommentId[commentId]) return;
      const hit = findThreadCommentRowInList(meta.comments, commentId);
      if (!hit.row) return;
      const prevLiked = Boolean(hit.row.likedByMe);
      const prevLikes = Number(hit.row.likes || 0);
      const nextLiked = !prevLiked;
      hit.row.likedByMe = nextLiked;
      hit.row.likes = Math.max(0, prevLikes + (nextLiked ? 1 : -1));
      meta.likingByCommentId[commentId] = true;
      meta.commentError = "";
      render();
      void setDynamicCommentLike(commentId, nextLiked)
        .then((next) => {
          meta.likingByCommentId[commentId] = false;
          if (next) {
            hit.row.likedByMe = Boolean(next.likedByMe);
            hit.row.likes = Number(next.likes || 0);
          }
          render();
        })
        .catch((error) => {
          meta.likingByCommentId[commentId] = false;
          hit.row.likedByMe = prevLiked;
          hit.row.likes = prevLikes;
          meta.commentError = error instanceof Error ? error.message : "点赞失败";
          render();
        });
      return;
    }

    if (action === "wechat-mode") {
      const mode = actionTarget.getAttribute("data-mode");
      if (mode === "account" || mode === "qrcode") {
        uiState.wechatMode = mode;
        render();
      }
      return;
    }

    if (action === "home-filter") {
      const key = actionTarget.getAttribute("data-key");
      const value = actionTarget.getAttribute("data-value");
      if (key && value && Object.prototype.hasOwnProperty.call(uiState.filters, key)) {
        uiState.filters[key] = value;
        uiState.lastFilterKey = key;
        render();
      }
      return;
    }
    if (action === "toggle-home-filter") {
      uiState.homeFilterExpanded = !uiState.homeFilterExpanded;
      render();
      return;
    }
    if (action === "toggle-plaza-topics") {
      uiState.plazaTopicPanelOpen = !uiState.plazaTopicPanelOpen;
      render();
      return;
    }
    if (action === "plaza-topic-pick") {
      const value = actionTarget.getAttribute("data-value");
      if (value && Object.prototype.hasOwnProperty.call(uiState.filters, "theme")) {
        uiState.filters.theme = value;
        uiState.lastFilterKey = "theme";
      }
      uiState.plazaTopicPanelOpen = false;
      render();
      return;
    }
    if (action === "reserve-gender") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.reserveGender = tab;
        render();
      }
      return;
    }
    if (action === "drama-home-rank-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.dramaHomeRankTab = tab;
        render();
      }
      return;
    }
    if (action === "drama-hero-prev") {
      uiState.dramaHeroIndex = (uiState.dramaHeroIndex + DRAMA_HERO_TOTAL - 1) % DRAMA_HERO_TOTAL;
      render();
      return;
    }
    if (action === "drama-hero-next") {
      uiState.dramaHeroIndex = (uiState.dramaHeroIndex + 1) % DRAMA_HERO_TOTAL;
      render();
      return;
    }
    if (action === "drama-hero-goto") {
      const idx = Number(actionTarget.getAttribute("data-index"));
      if (Number.isFinite(idx)) {
        uiState.dramaHeroIndex = ((idx % DRAMA_HERO_TOTAL) + DRAMA_HERO_TOTAL) % DRAMA_HERO_TOTAL;
        render();
      }
      return;
    }
    if (action === "drama-home-reserve-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.dramaHomeReserveTab = tab;
        render();
      }
      return;
    }
    if (action === "open-world-detail") {
      const id = getSafeWorldId(actionTarget.getAttribute("data-id") || "", 0);
      if (id) {
        if (uiState.selectedWorldId !== id) {
          resetPlayStateForWorld(id);
        }
        setSelectedWorldId(id);
        const nextHash = "#/world/detail";
        if ((window.location.hash || "") !== nextHash) window.location.hash = nextHash;
        else render();
      }
      return;
    }
    if (action === "open-play-session-card") {
      const sessionId = String(actionTarget.getAttribute("data-session-id") || "").trim();
      const worldId = String(actionTarget.getAttribute("data-world-id") || "").trim();
      const title = String(actionTarget.getAttribute("data-title") || "").trim();
      if (!sessionId || !worldId) return;
      void openPlaySessionFromSnapshot({ sessionId, worldId, fallbackTitle: title });
      return;
    }
    if (action === "open-reserve-detail") {
      const id = getSafeWorldId(actionTarget.getAttribute("data-id") || "", 12);
      if (id) {
        if (uiState.selectedWorldId !== id) {
          resetPlayStateForWorld(id);
        }
        setSelectedWorldId(id);
      }
      const nextHash = "#/drama/reserve/detail";
      if ((window.location.hash || "") !== nextHash) window.location.hash = nextHash;
      else render();
      return;
    }
    if (action === "carousel-prev") {
      const world = getSelectedWorld();
      const heroSlidesRaw = normalizeMediaUrls(world?.albumMedia || world?.album_media || world?.mediaUrls || world?.media_urls);
      const fallback = extractImageUrl(
        world?.cardBackground
        || world?.card_background
        || world?.coverUrl
        || world?.cover_url
        || world?.firstImageUrl
        || world?.first_image_url
      ) || getWorldImageUrl(world, `${world?.id || world?.title || "world"}-primary`);
      const slideCount = Math.max(1, heroSlidesRaw.length || (fallback ? 1 : 0));
      uiState.worldCarouselIndex = (uiState.worldCarouselIndex + slideCount - 1) % slideCount;
      render();
      return;
    }
    if (action === "carousel-next") {
      const world = getSelectedWorld();
      const heroSlidesRaw = normalizeMediaUrls(world?.albumMedia || world?.album_media || world?.mediaUrls || world?.media_urls);
      const fallback = extractImageUrl(
        world?.cardBackground
        || world?.card_background
        || world?.coverUrl
        || world?.cover_url
        || world?.firstImageUrl
        || world?.first_image_url
      ) || getWorldImageUrl(world, `${world?.id || world?.title || "world"}-primary`);
      const slideCount = Math.max(1, heroSlidesRaw.length || (fallback ? 1 : 0));
      uiState.worldCarouselIndex = (uiState.worldCarouselIndex + 1) % slideCount;
      render();
      return;
    }
    if (action === "carousel-goto") {
      const idx = Number(actionTarget.getAttribute("data-index"));
      if (Number.isFinite(idx)) {
        uiState.worldCarouselIndex = idx;
        render();
      }
      return;
    }
    if (action === "open-world-share") {
      uiState.worldDetailMenuOpen = false;
      uiState.shareTargetType = "world";
      uiState.shareTargetDynamicId = "";
      uiState.showWorldShareSheet = true;
      uiState.worldShareMode = "picker";
      uiState.worldShareSelectedUserId = "";
      uiState.worldShareSelectedUserName = "";
      uiState.worldShareDraft = "";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "restart-world-play") {
      const worldId = String(actionTarget.getAttribute("data-world-id") || uiState.selectedWorldId || "").trim();
      if (!worldId) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        setPostLoginRedirectHash("#/play/core");
        window.location.hash = "#/auth/login";
        return;
      }
      clearPlaySessionHint(worldId, uiState.currentUserId);
      resetPlayStateForWorld(worldId);
      setSelectedWorldId(worldId);
      const nextHash = "#/play/core";
      if ((window.location.hash || "") !== nextHash) window.location.hash = nextHash;
      else render();
      return;
    }
    if (action === "toggle-world-detail-menu") {
      uiState.worldDetailMenuOpen = !uiState.worldDetailMenuOpen;
      if (uiState.worldDetailMenuOpen) uiState.worldDetailMenuFeedback = "";
      render();
      return;
    }
    if (action === "world-detail-share") {
      uiState.worldDetailMenuOpen = false;
      uiState.shareTargetType = "world";
      uiState.shareTargetDynamicId = "";
      uiState.showWorldShareSheet = true;
      uiState.worldShareMode = "picker";
      uiState.worldShareSelectedUserId = "";
      uiState.worldShareSelectedUserName = "";
      uiState.worldShareDraft = "";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "world-detail-edit") {
      uiState.worldDetailMenuOpen = false;
      render();
      void openWorldDetailEditor(getSelectedWorld());
      return;
    }
    if (action === "close-world-share") {
      uiState.showWorldShareSheet = false;
      uiState.shareTargetType = "world";
      uiState.shareTargetDynamicId = "";
      uiState.worldShareMode = "picker";
      uiState.worldShareSelectedUserId = "";
      uiState.worldShareSelectedUserName = "";
      uiState.worldShareDraft = "";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "world-share-pick-friend") {
      const targetUserId = String(actionTarget.getAttribute("data-user-id") || "").trim();
      const targetName = String(actionTarget.getAttribute("data-user-name") || "").trim();
      if (!targetName) return;
      uiState.worldShareMode = "send";
      uiState.worldShareSelectedUserId = targetUserId;
      uiState.worldShareSelectedUserName = targetName;
      uiState.worldShareDraft = buildShareTargetDefaultDraft();
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "world-share-back") {
      uiState.worldShareMode = "picker";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "world-share-copy-link") {
      const target = getActiveShareTarget();
      const link = buildShareTargetUrl();
      copyTextToClipboard(link);
      uiState.worldShareFeedback = target.type === "dynamic" ? "已复制当前动态链接" : "已复制当前卡片链接";
      render();
      setTimeout(() => {
        if (uiState.worldShareFeedback === "已复制当前卡片链接" || uiState.worldShareFeedback === "已复制当前动态链接") {
          uiState.worldShareFeedback = "";
          render();
        }
      }, 1400);
      return;
    }
    if (action === "world-share-open-image") {
      uiState.showWorldShareImageModal = true;
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "close-world-share-image") {
      uiState.showWorldShareImageModal = false;
      render();
      return;
    }
    if (action === "world-share-download-image") {
      const target = getActiveShareTarget();
      const isDynamic = target.type === "dynamic";
      const world = target.world;
      const dynamic = target.dynamic;
      const shareLink = buildShareTargetUrl();
      const posterTitle = isDynamic
        ? String(dynamic?.title || "动态分享").trim() || "动态分享"
        : String(world?.title || "未命名故事卡");
      const posterDesc = isDynamic
        ? String(dynamic?.text || "来看看这条动态")
        : String(world?.desc || "来看看这张故事卡");
      const posterAuthor = isDynamic
        ? String(dynamic?.author || "Drama 用户")
        : String(world?.author || "Drama 用户");
      const posterTag = isDynamic
        ? "动态"
        : `${escapeHtml(world?.theme || "主题")} · ${escapeHtml(world?.format || "模式")}`;
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1620">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f5f6ff" />
              <stop offset="100%" stop-color="#eceff7" />
            </linearGradient>
          </defs>
          <rect width="1080" height="1620" fill="url(#bg)" />
          <rect x="80" y="120" width="920" height="620" rx="40" fill="#d8cff8" />
          <text x="100" y="820" font-size="64" font-family="Arial, sans-serif" fill="#111827" font-weight="700">${escapeHtml(posterTitle.slice(0, 22))}</text>
          <text x="100" y="900" font-size="38" font-family="Arial, sans-serif" fill="#4b5563">${escapeHtml(posterDesc.slice(0, 60))}</text>
          <text x="100" y="1080" font-size="34" font-family="Arial, sans-serif" fill="#6b7280">作者：${escapeHtml(posterAuthor)}</text>
          <text x="100" y="1140" font-size="34" font-family="Arial, sans-serif" fill="#6b7280">类型：${posterTag}</text>
          <rect x="80" y="1260" width="920" height="150" rx="24" fill="#ffffff" />
          <text x="112" y="1348" font-size="30" font-family="Arial, sans-serif" fill="#1f2937">${escapeHtml(shareLink.slice(0, 58))}</text>
        </svg>
      `;
      const encoded = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
      const anchor = document.createElement("a");
      anchor.href = encoded;
      anchor.download = `${(posterTitle || "share").replace(/[\\/:*?"<>|]+/g, "_")}.svg`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      uiState.worldShareFeedback = "分享图已下载";
      render();
      return;
    }
    if (action === "world-share-send") {
      const targetName = String(uiState.worldShareSelectedUserName || "").trim();
      const targetUserId = String(uiState.worldShareSelectedUserId || "").trim();
      if (!targetName) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const extraText = String(uiState.worldShareDraft || "").trim();
      const target = getActiveShareTarget();
      const shareLink = buildShareTargetUrl();
      void startOrReuseDirectConversation(targetUserId, targetName, { navigate: false })
        .then((conversationId) => {
          if (!conversationId) return;
          if (target.type === "dynamic") {
            const dynamic = target.dynamic || getDynamicById(uiState.selectedDynamicId);
            const title = String(dynamic?.title || "动态").trim() || "动态";
            const text = String(dynamic?.text || "").trim();
            const body = extraText || `给你分享一个我觉得不错的动态：${title}`;
            const message = `${body}\n${text ? `${text.slice(0, 72)}\n` : ""}${shareLink}`;
            return sendMessageToThread(conversationId, message).then(() => ({
              conversationId,
              preview: `📨 动态：${title}`
            }));
          }
          const world = target.world || getSelectedWorld();
          const cardPayload = {
            worldId: String(world?.id || ""),
            title: String(world?.title || "未命名故事卡"),
            desc: String(world?.desc || "来看看这张故事卡"),
            author: String(world?.author || "")
          };
          const payload = extraText || `给你分享一个我觉得不错的故事卡：${cardPayload.title}`;
          return sendMessageToThread(conversationId, payload, {
            messageType: "card",
            payload: cardPayload
          }).then(() => ({
            conversationId,
            preview: `📨 故事卡：${cardPayload.title}`
          }));
        })
        .then((result) => {
          if (!result?.conversationId) return;
          updateMessageInboxPreview(result.conversationId, result.preview || "📨 分享");
          uiState.worldShareFeedback = "已发送给好友";
          uiState.worldShareMode = "picker";
          uiState.worldShareDraft = "";
          uiState.worldShareSelectedUserId = "";
          uiState.worldShareSelectedUserName = "";
          render();
          setTimeout(() => {
            if (uiState.worldShareFeedback === "已发送给好友") {
              uiState.worldShareFeedback = "";
              uiState.showWorldShareSheet = false;
              render();
            }
          }, 1000);
        })
        .catch((error) => {
          uiState.worldShareFeedback = `发送失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "toggle-like-story") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      triggerWorldActionFx("like", 420);
      const prevLiked = Boolean(world.liked);
      const prevLikeCount = toMetricCount(world.like);
      const nextLiked = !prevLiked;
      const nextLikeCount = Math.max(0, prevLikeCount + (nextLiked ? 1 : -1));
      queuePendingWorldReaction(world.id, "like", nextLiked);
      syncWorldStateEverywhere(world.id, { liked: nextLiked, like: formatMetricCount(nextLikeCount) });
      if (nextLiked) upsertMeContentLibrary({ ...world, liked: nextLiked, like: formatMetricCount(nextLikeCount) }, "likes");
      else removeMeContentLibrary(world.id, "likes");
      render();
      void setWorldCardReaction(world.id, "like", nextLiked)
        .then((stats) => {
          if (!stats) return;
          const resolved = resolveWorldReactionPatch(world, stats);
          const nextWorld = { ...world, ...resolved };
          syncWorldStateEverywhere(world.id, {
            liked: nextWorld.liked,
            favorited: nextWorld.favorited,
            like: nextWorld.like,
            star: nextWorld.star
          });
          if (nextWorld.liked) upsertMeContentLibrary(nextWorld, "likes");
          else removeMeContentLibrary(world.id, "likes");
          if (nextWorld.favorited) upsertMeContentLibrary(nextWorld, "favorites");
          clearPendingWorldReaction(world.id, "like");
          reconcileWorldReactionsInBackground();
          render();
        })
        .catch((error) => {
          syncWorldStateEverywhere(world.id, { liked: prevLiked, like: formatMetricCount(prevLikeCount) });
          if (prevLiked) upsertMeContentLibrary({ ...world, liked: prevLiked, like: formatMetricCount(prevLikeCount) }, "likes");
          else removeMeContentLibrary(world.id, "likes");
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingWorldReaction(world.id, "like");
          render();
        });
      return;
    }
    if (action === "toggle-fav-story") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      triggerWorldActionFx("favorite", 420);
      const prevFavorited = Boolean(world.favorited);
      const prevFavCount = toMetricCount(world.star);
      const nextFavorited = !prevFavorited;
      const nextFavCount = Math.max(0, prevFavCount + (nextFavorited ? 1 : -1));
      queuePendingWorldReaction(world.id, "favorite", nextFavorited);
      syncWorldStateEverywhere(world.id, { favorited: nextFavorited, star: formatMetricCount(nextFavCount) });
      if (nextFavorited) upsertMeContentLibrary({ ...world, favorited: nextFavorited, star: formatMetricCount(nextFavCount) }, "favorites");
      else removeMeContentLibrary(world.id, "favorites");
      render();
      void setWorldCardReaction(world.id, "favorite", nextFavorited)
        .then((stats) => {
          if (!stats) return;
          const resolved = resolveWorldReactionPatch(world, stats);
          const nextWorld = { ...world, ...resolved };
          syncWorldStateEverywhere(world.id, {
            liked: nextWorld.liked,
            favorited: nextWorld.favorited,
            like: nextWorld.like,
            star: nextWorld.star
          });
          if (nextWorld.favorited) upsertMeContentLibrary(nextWorld, "favorites");
          else removeMeContentLibrary(world.id, "favorites");
          if (nextWorld.liked) upsertMeContentLibrary(nextWorld, "likes");
          clearPendingWorldReaction(world.id, "favorite");
          reconcileWorldReactionsInBackground();
          render();
        })
        .catch((error) => {
          syncWorldStateEverywhere(world.id, { favorited: prevFavorited, star: formatMetricCount(prevFavCount) });
          if (prevFavorited) upsertMeContentLibrary({ ...world, favorited: prevFavorited, star: formatMetricCount(prevFavCount) }, "favorites");
          else removeMeContentLibrary(world.id, "favorites");
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingWorldReaction(world.id, "favorite");
          render();
        });
      return;
    }
    if (action === "world-comment-submit") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state || state.submitting) return;
      const text = getWorldCommentDraft(world.id).trim();
      if (!text) return;

      const optimistic = {
        id: `tmp_${Date.now()}`,
        userId: String(uiState.currentUserId || ""),
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        parentCommentId: null,
        replies: [],
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      const prevCount = Number(state.commentsCount || 0);
      state.submitting = true;
      state.error = "";
      state.comments.unshift(optimistic);
      state.commentsCount = prevCount + 1;
      setWorldCommentDraft(world.id, "");
      syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
      persistWorldCommentsCache(world.id, state);
      render();

      void createWorldCardCommentAndSync(world.id, text)
        .then(({ comment, commentsCount }) => {
          state.submitting = false;
          if (comment) {
            state.comments[0] = {
              ...comment,
              replies: Array.isArray(comment?.replies) ? comment.replies : []
            };
          }
          state.commentsCount = Number.isFinite(commentsCount) && commentsCount >= 0 ? commentsCount : state.comments.length;
          syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
          persistWorldCommentsCache(world.id, state);
          render();
        })
        .catch((err) => {
          state.submitting = false;
          state.comments = state.comments.filter((x) => x !== optimistic);
          state.commentsCount = Math.max(0, prevCount);
          state.error = err instanceof Error ? err.message : "评论失败";
          setWorldCommentDraft(world.id, text);
          syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
          persistWorldCommentsCache(world.id, state);
          render();
        });
      return;
    }
    if (action === "world-comment-open-reply") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      const opened = openThreadReplyEditorForState(state, state.comments || [], commentId);
      if (!opened) return;
      state.activeActionCommentId = "";
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`.world-reply-editor input[data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "world-comment-open-menu") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      state.activeActionCommentId = commentId;
      render();
      return;
    }
    if (action === "world-comment-sheet-close") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      state.activeActionCommentId = "";
      render();
      return;
    }
    if (action === "world-comment-sheet-reply") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      const commentId = String(actionTarget.getAttribute("data-id") || state.activeActionCommentId || "").trim();
      if (!commentId) return;
      state.activeActionCommentId = "";
      const opened = openThreadReplyEditorForState(state, state.comments || [], commentId);
      if (!opened) return;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`.world-reply-editor input[data-comment-id="${opened.rootId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "world-comment-sheet-copy") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      const commentId = String(actionTarget.getAttribute("data-id") || state.activeActionCommentId || "").trim();
      if (!commentId) return;
      const text = readThreadCommentTextById(state.comments || [], commentId);
      void copyTextToClipboardBestEffort(text).then((ok) => {
        state.activeActionCommentId = "";
        state.error = ok ? "评论已复制" : "复制失败";
        render();
      });
      return;
    }
    if (action === "world-comment-sheet-report") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      state.activeActionCommentId = "";
      state.error = "已收到举报，我们会尽快处理";
      render();
      return;
    }
    if (action === "world-comment-reply-cancel") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      state.activeReplyCommentId = "";
      state.activeReplyTargetId = "";
      render();
      return;
    }
    if (action === "world-comment-reply-submit") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      if (state.submittingReplyByCommentId[commentId]) return;
      const replyTarget = resolveThreadReplySubmitTarget(state, state.comments || [], commentId);
      if (!replyTarget?.row) return;
      const parentCommentId = String(replyTarget.row.id || "").trim();
      if (!parentCommentId) return;
      const text = String(state.replyDraftByCommentId?.[commentId] || "").trim();
      if (!text) return;

      const parent = replyTarget.row;
      if (!Array.isArray(parent.replies)) parent.replies = [];
      const optimisticReply = {
        id: `tmp_reply_${Date.now()}`,
        worldCardId: world.id,
        userId: String(uiState.currentUserId || ""),
        parentCommentId,
        user: String(uiState.profile?.name || "我"),
        text,
        likes: 0,
        likedByMe: false,
        createdAt: new Date().toISOString(),
        time: "刚刚"
      };
      parent.replies.push(optimisticReply);
      state.submittingReplyByCommentId[commentId] = true;
      state.replyDraftByCommentId[commentId] = "";
      state.activeReplyCommentId = "";
      state.activeReplyTargetId = "";
      state.activeActionCommentId = "";
      persistWorldCommentsCache(world.id, state);
      render();

      void createWorldCardCommentAndSync(world.id, text, parentCommentId)
        .then(({ comment }) => {
          state.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(state.comments || [], parentCommentId);
          if (!latestParentHit?.row) {
            render();
            return;
          }
          const latestParent = latestParentHit.row;
          if (!Array.isArray(latestParent.replies)) latestParent.replies = [];
          if (comment && typeof comment === "object") {
            upsertThreadReply(latestParent.replies, comment, optimisticReply.id);
          }
          delete state.replyDraftByCommentId[commentId];
          persistWorldCommentsCache(world.id, state);
          render();
        })
        .catch((err) => {
          state.submittingReplyByCommentId[commentId] = false;
          const latestParentHit = findThreadCommentRowInList(state.comments || [], parentCommentId);
          const latestParent = latestParentHit?.row || null;
          if (latestParent && Array.isArray(latestParent.replies)) {
            latestParent.replies = latestParent.replies.filter((x) => x !== optimisticReply);
          }
          state.error = err instanceof Error ? err.message : "回复失败";
          state.replyDraftByCommentId[commentId] = text;
          state.activeReplyCommentId = commentId;
          state.activeReplyTargetId = parentCommentId;
          persistWorldCommentsCache(world.id, state);
          render();
        });
      return;
    }
    if (action === "world-comment-delete") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state || state.deletingByCommentId[commentId]) return;
      const deleteHit = findThreadCommentRowInList(state.comments || [], commentId);
      if (!deleteHit?.row || !canDeleteCommentByCurrentUser(deleteHit.row)) return;

      const removedSnapshot = removeThreadCommentById(state.comments || [], commentId);
      if (!removedSnapshot?.removed) return;
      if (removedSnapshot.isTopLevel) {
        state.commentsCount = Math.max(0, Number(state.commentsCount || 0) - 1);
        syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
      }
      state.deletingByCommentId[commentId] = true;
      if (state.activeReplyCommentId === commentId) state.activeReplyCommentId = "";
      if (state.activeReplyTargetId === commentId) state.activeReplyTargetId = "";
      if (state.activeActionCommentId === commentId) state.activeActionCommentId = "";
      persistWorldCommentsCache(world.id, state);
      render();

      void deleteWorldCardCommentAndSync(commentId)
        .then(({ commentsCount }) => {
          state.deletingByCommentId[commentId] = false;
          if (removedSnapshot.isTopLevel) {
            state.commentsCount = Number.isFinite(commentsCount) && commentsCount >= 0
              ? commentsCount
              : Number(state.commentsCount || 0);
            syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
          }
          persistWorldCommentsCache(world.id, state);
          render();
        })
        .catch((err) => {
          state.deletingByCommentId[commentId] = false;
          const restored = restoreRemovedThreadComment(removedSnapshot);
          if (removedSnapshot.isTopLevel && restored) {
            state.commentsCount = Number(state.commentsCount || 0) + 1;
            syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
          }
          state.error = err instanceof Error ? err.message : "删除失败";
          persistWorldCommentsCache(world.id, state);
          render();
        });
      return;
    }
    if (action === "world-comment-like") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const commentId = String(actionTarget.getAttribute("data-id") || "").trim();
      if (!commentId) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      if (state.likingByCommentId[commentId]) return;
      const hit = findThreadCommentRowInList(state.comments, commentId);
      if (!hit.row) return;
      const item = hit.row;
      const prevLiked = Boolean(item.likedByMe);
      const prevLikes = Number(item.likes || 0);
      const nextLiked = !prevLiked;
      item.likedByMe = nextLiked;
      item.likes = Math.max(0, prevLikes + (nextLiked ? 1 : -1));
      state.likingByCommentId[commentId] = true;
      render();

      void setWorldCardCommentLike(commentId, nextLiked)
        .then((next) => {
          state.likingByCommentId[commentId] = false;
          if (next) {
            item.likedByMe = Boolean(next.likedByMe);
            item.likes = Number(next.likes || 0);
          }
          render();
        })
        .catch(() => {
          state.likingByCommentId[commentId] = false;
          item.likedByMe = prevLiked;
          item.likes = prevLikes;
          render();
        });
      return;
    }

    if (action === "toggle-follow-author") {
      const profile = uiState.modalProfile;
      const actionUserId = String(actionTarget.getAttribute("data-user-id") || "").trim();
      const actionUserName = String(actionTarget.getAttribute("data-user") || "").trim();
      const fallbackUserId = String(uiState.meViewedUserId || "").trim();
      const fallbackUserName = String(uiState.meViewedUserName || "").trim();
      const targetName = String(profile?.name || actionUserName || fallbackUserName || "").trim();
      const targetHandle = String(profile?.handle || "").trim();
      const directTargetUserId = String(profile?.id || actionUserId || fallbackUserId || "").trim()
        || resolveAuthorIdByName(targetName || targetHandle || fallbackUserName)
        || resolveAuthUserIdByAlias(targetName || targetHandle || fallbackUserName);
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const runFollowToggle = (targetUserId) => {
        if (!targetUserId) {
          uiState.authorFeedback = "未找到作者，暂时无法关注";
          render();
          return;
        }
        if (uiState.modalProfile && !uiState.modalProfile.id) uiState.modalProfile.id = targetUserId;
        if (isUuid(targetUserId)) {
          const targetDisplayName = String(targetName || actionUserName || fallbackUserName || uiState.modalProfile?.name || "").trim();
          const viewedNameMatched = normalizeUserName(uiState.meViewedUserName || "")
            && normalizeUserName(uiState.meViewedUserName || "") === normalizeUserName(targetDisplayName);
          if (!uiState.meViewedUserId || uiState.meViewedUserId === targetUserId || viewedNameMatched) {
            uiState.meViewedUserId = targetUserId;
            if (!uiState.meViewedUserName && targetDisplayName) uiState.meViewedUserName = targetDisplayName;
            persistViewedProfile();
          }
        }
        if (targetUserId === uiState.currentUserId) {
          uiState.authorFeedback = "不能关注自己";
          render();
          return;
        }
        if (!uiState.modalProfile) {
          uiState.modalProfile = buildAuthorProfileByName(
            fallbackUserName || actionUserName || AUTHOR_DIRECTORY[targetUserId]?.name || "Drama 用户",
            targetUserId
          );
        }
        const nextFollow = !Boolean(uiState.modalProfile?.isFollowedByMe);
        queuePendingFollowOp(targetUserId, nextFollow);
        persistFollowState(targetUserId, nextFollow);
        syncRelationStateLocal(targetUserId, nextFollow, uiState.modalProfile || { id: targetUserId, name: targetName, handle: targetHandle });
        if (uiState.modalProfile) uiState.modalProfile.isFollowedByMe = nextFollow;
        if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nextFollow;
        uiState.isFollowingAuthor = nextFollow;
        uiState.authorFeedback = "";
        render();
        void setUserFollowRelation(targetUserId, nextFollow, { keepalive: true })
          .then((relation) => {
            const followedByMe = Boolean(relation?.followedByMe);
            clearPendingFollowOp(targetUserId);
            persistFollowState(targetUserId, followedByMe);
            syncRelationStateLocal(targetUserId, followedByMe, uiState.modalProfile || { id: targetUserId, name: targetName, handle: targetHandle });
            if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = followedByMe;
            if (AUTHOR_DIRECTORY[targetUserId]) {
              AUTHOR_DIRECTORY[targetUserId].followedByMe = followedByMe;
              if (relation?.targetStats) {
                AUTHOR_DIRECTORY[targetUserId].stats = {
                  ...AUTHOR_DIRECTORY[targetUserId].stats,
                  fansCount: toMetricCount(relation.targetStats.fansCount),
                  followsCount: toMetricCount(relation.targetStats.followsCount)
                };
              }
            }
            if (relation?.meStats) {
              uiState.meStats.fansCount = toMetricCount(relation.meStats.fansCount);
            }
            uiState.isFollowingAuthor = followedByMe;
            uiState.authorFeedback = "";
            scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 80 });
            return null;
          })
          .then(() => {
            render();
          })
          .catch((error) => {
            const msg = error instanceof Error ? error.message : "";
            if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingFollowOp(targetUserId);
            persistFollowState(targetUserId, !nextFollow);
            syncRelationStateLocal(targetUserId, !nextFollow, uiState.modalProfile || { id: targetUserId, name: targetName, handle: targetHandle });
            if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = !nextFollow;
            if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = !nextFollow;
            uiState.isFollowingAuthor = !nextFollow;
            uiState.authorFeedback = `操作失败：${error instanceof Error ? error.message : "unknown"}`;
            render();
          });
      };
      if (directTargetUserId) {
        runFollowToggle(directTargetUserId);
        return;
      }
      void resolveAuthorIdForAction({ userId: actionUserId, name: targetName, handle: targetHandle })
        .then((resolvedId) => {
          runFollowToggle(resolvedId);
        })
        .catch(() => {
          uiState.authorFeedback = "未找到作者，暂时无法关注";
          render();
        });
      return;
    }
    if (action === "toggle-world-author-follow") {
      const targetUserIdRaw = String(actionTarget.getAttribute("data-user-id") || "").trim();
      const targetUserName = String(actionTarget.getAttribute("data-user") || "").trim();
      const targetUserId = targetUserIdRaw || resolveAuthorIdByName(targetUserName);
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      if (!targetUserId) {
        uiState.authorFeedback = "未找到作者，暂时无法关注";
        render();
        return;
      }
      if (targetUserId === uiState.currentUserId) {
        uiState.authorFeedback = "不能关注自己";
        render();
        return;
      }
      triggerWorldActionFx("follow", 420);
      const nowFollowed = Boolean(AUTHOR_DIRECTORY[targetUserId]?.followedByMe);
      const nextFollow = !nowFollowed;
      queuePendingFollowOp(targetUserId, nextFollow);
      persistFollowState(targetUserId, nextFollow);
      syncRelationStateLocal(targetUserId, nextFollow, uiState.modalProfile || { id: targetUserId, name: targetUserName });
      if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nextFollow;
      if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = nextFollow;
      uiState.authorFeedback = "";
      render();
      void setUserFollowRelation(targetUserId, nextFollow, { keepalive: true })
        .then((relation) => {
          const followedByMe = Boolean(relation?.followedByMe);
          clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, followedByMe);
          syncRelationStateLocal(targetUserId, followedByMe, uiState.modalProfile || { id: targetUserId, name: targetUserName });
          if (AUTHOR_DIRECTORY[targetUserId]) {
            AUTHOR_DIRECTORY[targetUserId].followedByMe = followedByMe;
            if (relation?.targetStats) {
              AUTHOR_DIRECTORY[targetUserId].stats = {
                ...AUTHOR_DIRECTORY[targetUserId].stats,
                fansCount: toMetricCount(relation.targetStats.fansCount),
                followsCount: toMetricCount(relation.targetStats.followsCount)
              };
            }
          }
          if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = followedByMe;
          uiState.authorFeedback = "";
          scheduleBootstrapFullRefresh(uiState.currentUserId, { delayMs: 80 });
          return null;
        })
        .then(() => {
          render();
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, nowFollowed);
          syncRelationStateLocal(targetUserId, nowFollowed, uiState.modalProfile || { id: targetUserId, name: targetUserName });
          if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nowFollowed;
          if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = nowFollowed;
          uiState.authorFeedback = `操作失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "me-visitor-chat") {
      const actionUserId = String(actionTarget.getAttribute("data-user-id") || "").trim();
      const actionUserName = String(actionTarget.getAttribute("data-user") || "").trim();
      const targetName = String(actionUserName || uiState.meViewedUserName || uiState.modalProfile?.name || "对方").trim();
      const targetHandle = String(uiState.modalProfile?.handle || "").trim();
      const directTargetUserId = String(actionUserId || uiState.meViewedUserId || uiState.modalProfile?.id || "").trim();
      const openDm = (targetUserId) => {
        if (!targetUserId) {
          uiState.messageFeedback = "未找到用户，无法发起私聊";
          render();
          return;
        }
        if (targetUserId === uiState.currentUserId) {
          uiState.messageFeedback = "不能给自己发私信";
          render();
          return;
        }
        void openOrCreateDirectThread(targetUserId, targetName).catch((error) => {
          uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      };
      if (directTargetUserId) {
        openDm(directTargetUserId);
        return;
      }
      void resolveAuthorIdForAction({ userId: actionUserId, name: targetName, handle: targetHandle })
        .then((resolvedId) => {
          openDm(resolvedId);
        })
        .catch(() => {
          uiState.messageFeedback = "未找到用户，无法发起私聊";
          render();
        });
      return;
    }
    if (action === "open-author-dm") {
      const targetName = String(actionTarget.getAttribute("data-user") || uiState.modalProfile?.name || "对方").trim();
      const targetHandle = String(uiState.modalProfile?.handle || "").trim();
      const actionUserId = String(actionTarget.getAttribute("data-user-id") || "").trim();
      const directTargetUserId = String(actionUserId || uiState.modalProfile?.id || "").trim();
      const openDm = (targetUserId) => {
        if (!targetUserId) {
          uiState.messageFeedback = "未找到用户，无法发起私聊";
          render();
          return;
        }
        if (targetUserId === uiState.currentUserId) {
          uiState.messageFeedback = "不能给自己发私信";
          render();
          return;
        }
        void openOrCreateDirectThread(targetUserId, targetName).catch((error) => {
          uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      };
      if (directTargetUserId) {
        openDm(directTargetUserId);
        return;
      }
      void resolveAuthorIdForAction({ userId: actionUserId, name: targetName, handle: targetHandle })
        .then((resolvedId) => {
          openDm(resolvedId);
        })
        .catch(() => {
          uiState.messageFeedback = "未找到用户，无法发起私聊";
          render();
        });
      return;
    }
    if (action === "open-user-modal") {
      const userName = resolveUserNameFromNode(actionTarget) || actionTarget.getAttribute("data-user") || "";
      const userId = resolveUserIdFromNode(actionTarget);
      openAuthorProfileByName(String(userName).trim(), userId);
      render();
      return;
    }
    if (action === "open-self-profile") {
      if (!uiState.isLoggedIn) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      uiState.meViewedUserId = "";
      uiState.meViewedUserName = "";
      persistViewedProfile();
      if (window.location.hash !== "#/me/home") window.location.hash = "#/me/home";
      else render();
      return;
    }
    if (action === "open-profile-edit-modal") {
      if (!uiState.isLoggedIn) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      uiState.profileDraft = {
        ...uiState.profile,
        coverUrl: uiState.profile?.coverUrl || extractRawUrlFromCssUrl(uiState.meHeroCover || "")
      };
      uiState.profileSaving = false;
      uiState.showProfileEditModal = true;
      render();
      return;
    }
    if (action === "open-profile-avatar-preview") {
      const avatarName = String(actionTarget.getAttribute("data-avatar-name") || uiState.profile?.name || "Drama 用户").trim();
      const avatarHandle = String(actionTarget.getAttribute("data-avatar-handle") || uiState.profile?.handle || "@drama_user").trim();
      const avatarText = String(actionTarget.getAttribute("data-avatar-text") || getAvatarText(avatarName)).trim();
      uiState.profileAvatarPreview = {
        name: avatarName,
        handle: avatarHandle,
        avatarText: avatarText || getAvatarText(avatarName),
        avatarUrl: String(actionTarget.getAttribute("data-avatar-url") || uiState.profile?.avatarUrl || "").trim()
      };
      uiState.showProfileAvatarPreview = true;
      render();
      return;
    }
    if (action === "close-profile-avatar-preview") {
      uiState.showProfileAvatarPreview = false;
      render();
      return;
    }
    if (action === "close-profile-edit-modal") {
      uiState.showProfileEditModal = false;
      uiState.profileDraft = { ...uiState.profile };
      uiState.profileSaving = false;
      render();
      return;
    }
    if (action === "save-profile-edit-modal") {
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      syncProfileDraftFromFormDom();
      const name = String(uiState.profileDraft.name || "").trim();
      if (!name) {
        uiState.meFeedback = "昵称不能为空";
        render();
        return;
      }
      if (uiState.profileSaving) return;
      if (uiState.profileAssetProcessing) {
        uiState.meFeedback = "图片处理中，请稍候再保存";
        render();
        return;
      }
      uiState.profileSaving = true;
      uiState.meFeedback = "";
      render();
      void apiJson("/auth/profile", {
        userId: uiState.currentUserId,
        name,
        handle: String(uiState.profileDraft.handle || "").trim(),
        bio: String(uiState.profileDraft.bio || "").trim(),
        avatarUrl: String(uiState.profileDraft.avatarUrl || "").trim(),
        gender: String(uiState.profileDraft.gender || "保密").trim(),
        birthday: String(uiState.profileDraft.birthday || "").trim(),
        coverUrl: String(uiState.profileDraft.coverUrl || extractRawUrlFromCssUrl(uiState.meHeroCover || "") || "").trim(),
        backstageCoverUrl: String(uiState.profile?.backstageCoverUrl || uiState.backstageTopBackground || "").trim(),
        backstageMask: normalizeBackstageMaskValue(uiState.profile?.backstageMask, true)
      }, "POST", { timeoutMs: 12_000 })
        .then((resp) => {
          const saved = resp?.profile && typeof resp.profile === "object" ? resp.profile : {};
          const nextSavedProfile = {
            name: String(saved.name || name || uiState.profileDraft.name || uiState.profile.name || "Drama 用户").trim() || "Drama 用户",
            handle: String(saved.handle || uiState.profileDraft.handle || uiState.profile.handle || "@drama_user").trim() || "@drama_user",
            bio: String(saved.bio || uiState.profileDraft.bio || uiState.profile.bio || "").trim(),
            avatarUrl: String(saved.avatarUrl || uiState.profileDraft.avatarUrl || uiState.profile.avatarUrl || "").trim(),
            gender: String(saved.gender || uiState.profileDraft.gender || uiState.profile.gender || "保密").trim() || "保密",
            birthday: String(saved.birthday || uiState.profileDraft.birthday || uiState.profile.birthday || "").trim(),
            coverUrl: String(saved.coverUrl || uiState.profileDraft.coverUrl || uiState.profile.coverUrl || "").trim(),
            backstageCoverUrl: String(saved.backstageCoverUrl || uiState.profile?.backstageCoverUrl || uiState.backstageTopBackground || "").trim(),
            backstageMask: normalizeBackstageMaskValue(saved.backstageMask, uiState.profile?.backstageMask)
          };
          uiState.profile = nextSavedProfile;
          uiState.profileDraft = { ...uiState.profile };
          uiState.meHeroCover = uiState.profile.coverUrl ? `url("${uiState.profile.coverUrl}")` : "";
          uiState.backstageTopBackground = uiState.profile.backstageCoverUrl || "";
          uiState.backstageTopBackgroundDraft = uiState.backstageTopBackground;
          uiState.backstageTopBackgroundMask = normalizeBackstageMaskValue(nextSavedProfile.backstageMask, true);
          uiState.backstageTopBackgroundMaskDraft = uiState.backstageTopBackgroundMask;
          uiState.profilePendingPatch = {
            values: { ...nextSavedProfile },
            expiresAt: Date.now() + 45_000
          };
          persistProfilePendingPatch(uiState.currentUserId, uiState.profilePendingPatch);
          persistProfileToCache(nextSavedProfile, uiState.currentUserId);
          if (uiState.currentUserId) {
            AUTHOR_DIRECTORY[uiState.currentUserId] = {
              ...(AUTHOR_DIRECTORY[uiState.currentUserId] || {}),
              id: uiState.currentUserId,
              name: uiState.profile.name,
              handle: uiState.profile.handle,
              bio: uiState.profile.bio,
              avatarUrl: uiState.profile.avatarUrl,
              coverUrl: uiState.profile.coverUrl,
              gender: uiState.profile.gender,
              birthday: uiState.profile.birthday
            };
          }
          // Avoid stale core refresh overriding just-saved profile fields.
          uiState.profileCoreSyncGuardUntil = Date.now() + 20_000;
          uiState.meFeedback = "资料已保存";
          closeProfileEditAndReturnHome();
          scheduleBootstrapFullRefresh(uiState.currentUserId);
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "unknown";
          uiState.meFeedback = msg === "REQUEST_TIMEOUT"
            ? "保存超时，请重试（建议先压缩背景图）"
            : `保存失败：${msg}`;
        })
        .finally(() => {
          uiState.profileSaving = false;
          render();
        });
      return;
    }
    if (action === "user-modal-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab === "works" || tab === "likes" || tab === "favorites") {
        uiState.userModalTab = tab;
        render();
      }
      return;
    }
    if (action === "toggle-reserve-follow") {
      triggerWorldActionFx("favorite", 420);
      uiState.reserveFollowed = !uiState.reserveFollowed;
      uiState.reserveFeedback = uiState.reserveFollowed ? "预约成功，开播会第一时间通知你。" : "已取消预约提醒。";
      render();
      setTimeout(() => {
        if (uiState.reserveFeedback) {
          uiState.reserveFeedback = "";
          render();
        }
      }, 1800);
      return;
    }

    if (action === "go-back") {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.hash = "#/theater/home";
      }
      return;
    }

    if (action === "open-login-modal") {
      setPostLoginRedirectHash(window.location.hash || "#/theater/home");
      window.location.hash = "#/auth/login";
      uiState.loginError = "";
      return;
    }

    if (action === "close-login-modal") {
      window.location.hash = "#/auth/login";
      uiState.loginError = "";
      uiState.loginLoading = false;
      return;
    }

    if (action === "set-login-method") {
      const method = actionTarget.getAttribute("data-method");
      if (method === "phone" || method === "account" || method === "wechat" || method === "google") {
        uiState.loginMethod = method;
        uiState.accountAuthMode = "login";
        uiState.loginLoading = false;
        uiState.loginError = "";
        render();
      }
      return;
    }

    if (action === "toggle-account-auth-mode") {
      uiState.accountAuthMode = uiState.accountAuthMode === "register" ? "login" : "register";
      uiState.loginError = "";
      uiState.loginLoading = false;
      render();
      return;
    }

    if (action === "login-quick-provider") {
      const provider = String(actionTarget.getAttribute("data-provider") || "").trim();
      uiState.loginError = provider === "wechat"
        ? "微信号登录暂未接入，请先使用账号密码登录"
        : "Google 登录暂未接入，请先使用账号密码登录";
      render();
      return;
    }

    if (action === "set-account-auth-mode") {
      const mode = actionTarget.getAttribute("data-mode");
      if (mode === "login" || mode === "register") {
        uiState.accountAuthMode = mode;
        uiState.loginLoading = false;
        uiState.loginError = "";
        render();
      }
      return;
    }

    if (action === "confirm-login") {
      if (uiState.loginMethod === "account") {
        if (uiState.accountAuthMode === "register") {
          void registerWithAccountAndSync();
        } else {
          void loginWithAccountAndSync();
        }
        return;
      }
      if (uiState.loginMethod === "wechat") {
        uiState.loginError = "微信号登录暂未接入，请先使用账号密码登录";
        uiState.loginLoading = false;
        render();
        return;
      }
      if (uiState.loginMethod === "google") {
        uiState.loginError = "Google 登录暂未接入，请先使用账号密码登录";
        uiState.loginLoading = false;
        render();
        return;
      }
      uiState.loginError = "手机号登录暂未接入，请先使用账号密码登录";
      uiState.loginLoading = false;
      render();
      return;
    }
  }

  const target = event.target.closest("[data-go]");
  if (!target) return;
  let go = target.getAttribute("data-go");
  if (!go) return;
  const routePath = go.split("?")[0] || go;
  if (!uiState.isLoggedIn && !isAuthRoute(routePath)) {
    setPostLoginRedirectHash(go);
    go = "#/auth/login";
  }
  if (uiState.isLoggedIn && uiState.currentUserId) {
    prefetchBootstrapSectionsForRoute(routePath, uiState.currentUserId);
  }
  if (go === "#/me/home" && !(target.getAttribute("data-preserve-viewed-profile") === "1")) {
    uiState.meViewedUserId = "";
    uiState.meViewedUserName = "";
    persistViewedProfile();
  }
  uiState.showProfileEditModal = false;
  uiState.showProfileAvatarPreview = false;
  uiState.searchPanelOpen = false;
  uiState.communitySearchPanelOpen = false;
  uiState.messagesPlusOpen = false;
  uiState.messageThreadMenuOpen = false;
  closeMessageLongPressMenu();
  closeMessageCardLongPressMenu();
  uiState.messageFeedback = "";
  uiState.meMenuOpen = false;
  uiState.showDynamicComposer = false;
  uiState.dynamicShareFeedback = "";
  uiState.dynamicDetailMenuOpen = false;
  uiState.dynamicDetailActionLoading = false;
  uiState.worldDetailMenuOpen = false;
  uiState.worldDetailMenuFeedback = "";
  uiState.showWorldShareSheet = false;
  uiState.showWorldShareImageModal = false;
  uiState.shareTargetType = "world";
  uiState.shareTargetDynamicId = "";
  uiState.worldShareMode = "picker";
  uiState.worldShareSelectedUserId = "";
  uiState.worldShareSelectedUserName = "";
  uiState.worldShareDraft = "";
  uiState.worldShareFeedback = "";
  uiState.communityComposeMentionSheetOpen = false;
  uiState.communityComposeTopicSheetOpen = false;
  uiState.storyBindSheetOpen = false;
  uiState.storyBindSheetTarget = "";
  uiState.storyBindSearchKeyword = "";
  captureRouteScrollTop(getCurrentRoutePath());
  if (window.location.hash === go) {
    if (uiState.isLoggedIn && uiState.currentUserId) {
      ensureSectionDataOnDemand(go);
      if ((go.split("?")[0] || go) === "#/me/home") {
        void Promise.allSettled([
          fetchBootstrapSection("me", uiState.currentUserId, { force: true }),
          bootstrapClientData(uiState.currentUserId, { force: true })
        ]).catch(() => {});
      }
    }
    render();
    if (!shouldPreserveScrollForRoute(go)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }
  window.location.hash = go;
});

function clearMessageLongPressTimer() {
  if (messageLongPressTimer) {
    clearTimeout(messageLongPressTimer);
    messageLongPressTimer = null;
  }
}

function clearMessageCardLongPressTimer() {
  if (messageCardLongPressTimer) {
    clearTimeout(messageCardLongPressTimer);
    messageCardLongPressTimer = null;
  }
}

function resolveLongPressMessageNode(target) {
  if (!(target instanceof Element)) return null;
  return target.closest(".dm-message-touch-target");
}

function resolveLongPressMessageCardNode(target) {
  if (!(target instanceof Element)) return null;
  return target.closest(".msg-touch-target");
}

document.addEventListener("pointerdown", (event) => {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  if (!(event.target instanceof Element)) return;
  const goNode = event.target.closest("[data-go]");
  if (!(goNode instanceof Element)) return;
  const go = String(goNode.getAttribute("data-go") || "").trim();
  if (!go) return;
  const routePath = go.split("?")[0] || go;
  prefetchBootstrapSectionsForRoute(routePath, uiState.currentUserId);
}, { passive: true });

document.addEventListener("pointerdown", (event) => {
  const hash = window.location.hash || "";
  if (hash.startsWith("#/messages/thread")) {
    const messageNode = resolveLongPressMessageNode(event.target);
    if (!messageNode) return;
    const messageId = String(messageNode.getAttribute("data-message-id") || "").trim();
    const conversationId = String(messageNode.getAttribute("data-conversation-id") || "").trim() || getActiveConversationId();
    if (!messageId || !conversationId) return;
    messageLongPressTriggered = false;
    messageLongPressStartX = Number(event.clientX || 0);
    messageLongPressStartY = Number(event.clientY || 0);
    const rect = messageNode.getBoundingClientRect();
    const pointerX = rect.left + (rect.width / 2);
    const pointerY = rect.top + (rect.height / 2);
    clearMessageLongPressTimer();
    messageLongPressTimer = setTimeout(() => {
      messageLongPressTriggered = true;
      openMessageLongPressMenu({
        messageId,
        conversationId,
        anchorX: Number(pointerX || event.clientX || messageLongPressStartX || 0),
        anchorY: Number(pointerY || event.clientY || messageLongPressStartY || 0),
        pointerX: Number(pointerX || event.clientX || messageLongPressStartX || 0)
      });
    }, 420);
    return;
  }
  if (hash.startsWith("#/messages/chat")) {
    const cardNode = resolveLongPressMessageCardNode(event.target);
    if (!cardNode) return;
    const conversationId = String(cardNode.getAttribute("data-conversation-id") || cardNode.getAttribute("data-id") || "").trim();
    if (!conversationId) return;
    messageCardLongPressTriggered = false;
    messageCardLongPressStartX = Number(event.clientX || 0);
    messageCardLongPressStartY = Number(event.clientY || 0);
    const rect = cardNode.getBoundingClientRect();
    const pointerX = rect.left + (rect.width / 2);
    const pointerY = rect.top + (rect.height / 2);
    clearMessageCardLongPressTimer();
    messageCardLongPressTimer = setTimeout(() => {
      messageCardLongPressTriggered = true;
      openMessageCardLongPressMenu({
        conversationId,
        anchorX: Number(pointerX || event.clientX || messageCardLongPressStartX || 0),
        anchorY: Number(pointerY || event.clientY || messageCardLongPressStartY || 0),
        pointerX: Number(pointerX || event.clientX || messageCardLongPressStartX || 0)
      });
    }, 420);
  }
});

document.addEventListener("pointermove", (event) => {
  if (messageLongPressTimer) {
    const dx = Math.abs(Number(event.clientX || 0) - messageLongPressStartX);
    const dy = Math.abs(Number(event.clientY || 0) - messageLongPressStartY);
    if (dx > 10 || dy > 10) clearMessageLongPressTimer();
  }
  if (messageCardLongPressTimer) {
    const dx = Math.abs(Number(event.clientX || 0) - messageCardLongPressStartX);
    const dy = Math.abs(Number(event.clientY || 0) - messageCardLongPressStartY);
    if (dx > 10 || dy > 10) clearMessageCardLongPressTimer();
  }
});

document.addEventListener("pointerup", () => {
  clearMessageLongPressTimer();
  clearMessageCardLongPressTimer();
});

document.addEventListener("pointercancel", () => {
  clearMessageLongPressTimer();
  clearMessageCardLongPressTimer();
});

document.addEventListener("contextmenu", (event) => {
  const hash = window.location.hash || "";
  if (hash.startsWith("#/messages/thread")) {
    const messageNode = resolveLongPressMessageNode(event.target);
    if (!messageNode) return;
    const messageId = String(messageNode.getAttribute("data-message-id") || "").trim();
    const conversationId = String(messageNode.getAttribute("data-conversation-id") || "").trim() || getActiveConversationId();
    if (!messageId || !conversationId) return;
    const rect = messageNode.getBoundingClientRect();
    const pointerX = rect.left + (rect.width / 2);
    const pointerY = rect.top + (rect.height / 2);
    event.preventDefault();
    openMessageLongPressMenu({
      messageId,
      conversationId,
      anchorX: Number(pointerX || event.clientX || 0),
      anchorY: Number(pointerY || event.clientY || 0),
      pointerX: Number(pointerX || event.clientX || 0)
    });
    return;
  }
  if (hash.startsWith("#/messages/chat")) {
    const cardNode = resolveLongPressMessageCardNode(event.target);
    if (!cardNode) return;
    const conversationId = String(cardNode.getAttribute("data-conversation-id") || cardNode.getAttribute("data-id") || "").trim();
    if (!conversationId) return;
    const rect = cardNode.getBoundingClientRect();
    const pointerX = rect.left + (rect.width / 2);
    const pointerY = rect.top + (rect.height / 2);
    event.preventDefault();
    openMessageCardLongPressMenu({
      conversationId,
      anchorX: Number(pointerX || event.clientX || 0),
      anchorY: Number(pointerY || event.clientY || 0),
      pointerX: Number(pointerX || event.clientX || 0)
    });
    return;
  }
});

document.addEventListener("pointerleave", () => {
  if (messageLongPressTimer || messageCardLongPressTimer) {
    clearMessageLongPressTimer();
    clearMessageCardLongPressTimer();
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    if (target.classList.contains("profile-edit-input")) {
      const field = target.getAttribute("data-field");
      if (field === "name" || field === "handle" || field === "bio" || field === "birthday") {
        uiState.profileDraft[field] = target.value;
      }
      return;
    }
    const dynamicField = target.getAttribute("data-field");
    if (dynamicField === "dynamic-title") {
      uiState.dynamicDraftTitle = target.value;
      syncDynamicPublishButtonState();
      return;
    }
    if (dynamicField === "dynamic-text") {
      uiState.dynamicDraftText = target.value;
      syncDynamicPublishButtonState();
      return;
    }
    if (dynamicField === "dynamic-comment") {
      const item = getDynamicById(uiState.selectedDynamicId);
      setDynamicCommentDraft(item?.id, target.value);
      return;
    }
    if (dynamicField === "dynamic-reply-draft") {
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (meta && commentId) {
        meta.replyDraftByCommentId[commentId] = target.value;
      }
      return;
    }
    if (dynamicField === "world-comment-draft") {
      setWorldCommentDraft(getSelectedWorld()?.id, target.value);
      return;
    }
    if (dynamicField === "world-reply-draft") {
      const world = getSelectedWorld();
      const state = getWorldCommentState(world?.id, toMetricCount(world?.comment));
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (state && commentId) {
        state.replyDraftByCommentId[commentId] = target.value;
      }
      return;
    }
    if (dynamicField === "backstage-signature") {
      uiState.backstageSignatureDraft = target.value;
      return;
    }
    if (dynamicField === "backstage-top-bg") {
      uiState.backstageTopBackgroundDraft = target.value;
      return;
    }
    if (dynamicField === "community-compose-text") {
      uiState.communityComposeText = target.value;
      syncCommunityPublishButtonState();
      return;
    }
    if (dynamicField === "community-compose-title") {
      uiState.communityComposeTitle = target.value;
      syncCommunityPublishButtonState();
      return;
    }
    if (dynamicField === "story-bind-search-keyword") {
      uiState.storyBindSearchKeyword = target.value;
      if (event.isComposing) return;
      render();
      return;
    }
    if (dynamicField === "community-comment") {
      const postId = String(getSelectedCommunityPost()?.id || uiState.selectedCommunityPostId || "").trim();
      setCommunityCommentDraft(postId, target.value);
      return;
    }
    if (dynamicField === "community-reply-draft") {
      const post = getSelectedCommunityPost();
      const meta = ensureCommunityPostMeta(post);
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (meta && commentId) {
        meta.replyDraftByCommentId[commentId] = target.value;
      }
      return;
    }
    if (dynamicField === "community-announcement") {
      uiState.communityAnnounceDraft = target.value;
      return;
    }
    if (dynamicField === "workshop-custom-raw") {
      uiState.workshopCustomRaw = target.value;
      return;
    }
    if (dynamicField === "workshop-paint-prompt") {
      uiState.workshopPaintPrompt = target.value;
      return;
    }
    if (dynamicField === "workshop-paint-negative") {
      uiState.workshopPaintNegativePrompt = target.value;
      return;
    }
    if (dynamicField === "workshop-paint-seed") {
      const raw = String(target.value || "").replace(/[^\d]/g, "");
      uiState.workshopPaintSeedInput = raw.slice(0, 9);
      if (target.value !== uiState.workshopPaintSeedInput) target.value = uiState.workshopPaintSeedInput;
      return;
    }
    if (dynamicField === "workshop-paint-history-keyword") {
      uiState.workshopPaintHistoryKeyword = target.value;
      render();
      return;
    }
    if (dynamicField.startsWith("workshop-world-")) {
      setWorkshopDraftField("long_narrative", dynamicField.replace("workshop-world-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-story-")) {
      setWorkshopDraftField("short_narrative", dynamicField.replace("workshop-story-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-character-")) {
      setWorkshopDraftField("virtual_character", dynamicField.replace("workshop-character-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-publish-")) {
      const key = dynamicField.replace("workshop-publish-", "");
      if (key in uiState.workshopPublishDraft) {
        uiState.workshopPublishDraft[key] = target.value;
      }
      return;
    }
    if (dynamicField === "community-transfer-code") {
      uiState.communityTransferCodeDraft = target.value;
      return;
    }
    if (dynamicField === "community-create-name") {
      uiState.communityCreateName = target.value;
      if (uiState.communityCreateError) uiState.communityCreateError = "";
      return;
    }
    if (dynamicField === "community-create-tags") {
      uiState.communityCreateTags = target.value;
      if (uiState.communityCreateError) uiState.communityCreateError = "";
      return;
    }
    if (dynamicField === "community-create-desc") {
      uiState.communityCreateDesc = target.value;
      if (uiState.communityCreateError) uiState.communityCreateError = "";
      return;
    }
    if (dynamicField === "message-search") {
      uiState.messageSearchQuery = target.value;
      return;
    }
    if (dynamicField === "login-account") {
      uiState.loginAccount = target.value;
      if (uiState.loginError) uiState.loginError = "";
      return;
    }
    if (dynamicField === "login-password") {
      uiState.loginPassword = target.value;
      if (uiState.loginError) uiState.loginError = "";
      return;
    }
    if (dynamicField === "register-account") {
      uiState.registerAccount = target.value;
      if (uiState.loginError) uiState.loginError = "";
      return;
    }
    if (dynamicField === "register-password") {
      uiState.registerPassword = target.value;
      if (uiState.loginError) uiState.loginError = "";
      return;
    }
    if (dynamicField === "register-confirm-password") {
      uiState.registerConfirmPassword = target.value;
      if (uiState.loginError) uiState.loginError = "";
      return;
    }
    if (dynamicField === "login-phone") {
      uiState.loginPhone = target.value;
      return;
    }
    if (dynamicField === "login-code") {
      uiState.loginCode = target.value;
      return;
    }
    if (dynamicField === "message-thread-draft") {
      uiState.messageThreadDraft = target.value;
      return;
    }
    if (dynamicField === "world-share-draft") {
      uiState.worldShareDraft = target.value;
      return;
    }
    if (dynamicField === "play-action-draft") {
      uiState.playActionDraft = target.value;
      return;
    }
    if (dynamicField === "play-bg-opacity") {
      const ratio = Math.max(0, Math.min(1, Number(target.value) / 100));
      uiState.playBackgroundOpacity = normalizePlayBackgroundOpacity(ratio);
      persistPlayBackgroundPreference();
      render();
      return;
    }
    if (dynamicField === "world-comment-draft") {
      setWorldCommentDraft(getSelectedWorld()?.id, target.value);
      return;
    }
    if (dynamicField === "world-reply-draft") {
      const world = getSelectedWorld();
      const state = getWorldCommentState(world?.id, toMetricCount(world?.comment));
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (state && commentId) {
        state.replyDraftByCommentId[commentId] = target.value;
      }
      return;
    }
    if (dynamicField.startsWith("workshop-world-")) {
      setWorkshopDraftField("long_narrative", dynamicField.replace("workshop-world-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-story-")) {
      setWorkshopDraftField("short_narrative", dynamicField.replace("workshop-story-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-character-")) {
      setWorkshopDraftField("virtual_character", dynamicField.replace("workshop-character-", ""), target.value);
      return;
    }
    if (dynamicField.startsWith("workshop-publish-")) {
      const key = dynamicField.replace("workshop-publish-", "");
      if (key in uiState.workshopPublishDraft) {
        uiState.workshopPublishDraft[key] = target.value;
      }
      return;
    }
    if (dynamicField === "message-reply-draft") {
      setMessageReplyDraft(uiState.messageReplyTargetId, target.value);
      return;
    }
    if (dynamicField === "me-relation-search") {
      uiState.meRelationSearch = target.value;
      return;
    }
  }
  if (!(target instanceof HTMLInputElement)) return;
  const isSearchInput = target.classList.contains("unified-search-input") || target.classList.contains("search-mobile-global-input");
  if (isSearchInput) {
    uiState.searchQuery = target.value;
    uiState.communitySearchQuery = target.value;
  }
});

document.addEventListener("compositionend", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.getAttribute("data-field") !== "story-bind-search-keyword") return;
  uiState.storyBindSearchKeyword = target.value;
  render();
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "community-compose-story") {
    uiState.communityComposeStoryId = target.value;
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "gender") {
    uiState.profileDraft.gender = target.value;
    return;
  }
  if (target instanceof HTMLInputElement && target.getAttribute("data-field") === "birthday") {
    uiState.profileDraft.birthday = target.value;
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "community-compose-visibility") {
    uiState.communityComposeVisibility = normalizeComposeVisibility(target.value);
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "dynamic-visibility-select") {
    uiState.dynamicDraftVisibility = normalizeDynamicVisibility(target.value);
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "workshop-template-id") {
    if (WORKSHOP_FORCE_CUSTOM_MODES.has(uiState.workshopMode)) return;
    uiState.workshopSelectedTemplateId[uiState.workshopMode] = target.value;
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "workshop-paint-style") {
    uiState.workshopPaintStyle = target.value;
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "workshop-paint-ratio") {
    uiState.workshopPaintRatio = target.value;
    return;
  }
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "workshop-paint-count") {
    const count = Number.parseInt(String(target.value || "4"), 10);
    uiState.workshopPaintCount = Math.max(1, Math.min(4, Number.isFinite(count) ? count : 4));
    return;
  }
  if (!(target instanceof HTMLInputElement)) return;
  const field = target.getAttribute("data-field");
  if (field === "play-bg-file") {
    const file = target.files?.[0];
    target.value = "";
    if (!file || !String(file.type || "").startsWith("image/")) return;
    showPlaySystemHint("背景图片处理中...", "notice");
    void compressImageFileToDataUrl(file, {
      maxSide: 1680,
      jpegQuality: 0.76,
      minJpegQuality: 0.44,
      maxOutputBytes: 1_000_000
    })
      .then((dataUrl) => {
        uiState.playBackgroundImage = String(dataUrl || "").trim();
        persistPlayBackgroundPreference();
        showPlaySystemHint("背景图片已更新。", "success");
      })
      .catch((error) => {
        const msg = error instanceof Error ? error.message : "图片处理失败";
        showPlaySystemHint(msg, "error");
      });
    return;
  }
  if (field === "workshop-card-background-file") {
    const file = target.files?.[0];
    target.value = "";
    if (!file || !String(file.type || "").startsWith("image/")) return;
    uiState.workshopFeedback = "背景图处理中...";
    render();
    compressImageFileToDataUrl(file, {
      maxSide: 1600,
      jpegQuality: 0.78,
      minJpegQuality: 0.46,
      maxOutputBytes: 900_000
    })
      .then((url) => {
        setWorkshopDraftField(uiState.workshopMode, "cardBackground", url);
        uiState.workshopFeedback = "背景图已更新";
      })
      .catch((error) => {
        uiState.workshopFeedback = error instanceof Error ? error.message : "背景图处理失败";
      })
      .finally(() => {
        render();
      });
    return;
  }
  if (field === "workshop-album-media-file") {
    const files = Array.from(target.files || []).filter((f) => f && String(f.type || "").startsWith("image/"));
    target.value = "";
    if (!files.length) return;
    const draft = normalizeWorkshopDraftForMode(uiState.workshopMode, getWorkshopDraftByMode(uiState.workshopMode));
    const current = Array.isArray(draft.albumMedia) ? draft.albumMedia : [];
    const remain = Math.max(0, 9 - current.length);
    const picked = files.slice(0, remain);
    if (!picked.length) {
      uiState.workshopFeedback = "画册最多 9 张";
      render();
      return;
    }
    uiState.workshopFeedback = "画册图片处理中...";
    render();
    Promise.all(
      picked.map(async (file, idx) => ({
        id: `album_${Date.now()}_${idx + 1}`,
        url: await compressImageFileToDataUrl(file, {
          maxSide: 1800,
          jpegQuality: 0.78,
          minJpegQuality: 0.46,
          maxOutputBytes: 950_000
        }),
        name: String(file.name || `image_${idx + 1}`).trim() || `image_${idx + 1}`
      }))
    )
      .then((items) => {
        const valid = items.filter((x) => String(x?.url || "").trim());
        setWorkshopDraftField(uiState.workshopMode, "albumMedia", [...current, ...valid].slice(0, 9));
        uiState.workshopFeedback = "画册已更新";
      })
      .catch((error) => {
        uiState.workshopFeedback = error instanceof Error ? error.message : "画册处理失败";
      })
      .finally(() => {
        render();
      });
    return;
  }
  if (field === "dynamic-media-file") {
    const files = Array.from(target.files || []).filter((f) => f && (/^image\//.test(String(f.type || "")) || /^video\//.test(String(f.type || ""))));
    target.value = "";
    if (!files.length) return;
    if (uiState.dynamicDraftMediaProcessing) return;
    const current = normalizeDynamicMediaItems(uiState.dynamicDraftMedia || []);
    const hasCurrentVideo = current.some((x) => x.mediaType === "video");
    const pickedHasVideo = files.some((f) => /^video\//.test(String(f.type || "")));
    if ((hasCurrentVideo && files.length > 0) || (pickedHasVideo && (current.length > 0 || files.length > 1))) {
      uiState.dynamicShareFeedback = "视频暂不支持与其他媒体混传，请单独上传 1 个视频";
      render();
      return;
    }
    const imageRemain = Math.max(0, 9 - current.length);
    const chosen = pickedHasVideo
      ? files.filter((f) => /^video\//.test(String(f.type || ""))).slice(0, 1)
      : files.filter((f) => /^image\//.test(String(f.type || ""))).slice(0, imageRemain);
    if (!chosen.length) {
      uiState.dynamicShareFeedback = "最多上传 9 张图片";
      render();
      return;
    }
    uiState.dynamicDraftMediaProcessing = true;
    uiState.dynamicShareFeedback = "";
    render();
    Promise.all(
      chosen.map(async (file) => {
        const isVideo = /^video\//.test(String(file.type || ""));
        if (isVideo) {
          const maxVideoBytes = 6 * 1024 * 1024;
          if (Number(file.size || 0) > maxVideoBytes) {
            throw new Error("视频过大，请控制在 6MB 内");
          }
          const videoUrl = await fileToDataUrl(file);
          return {
            id: `${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
            mediaType: "video",
            url: videoUrl,
            durationSec: 0
          };
        }
        const imageUrl = await compressImageFileToDataUrl(file, {
          maxSide: 1560,
          jpegQuality: 0.76,
          minJpegQuality: 0.44,
          maxOutputBytes: 820_000
        });
        return {
          id: `${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
          mediaType: "image",
          url: imageUrl,
          durationSec: 0
        };
      })
    )
      .then((items) => {
        const valid = normalizeDynamicMediaItems(items);
        uiState.dynamicDraftMedia = [...current, ...valid].slice(0, 9);
        uiState.dynamicShareFeedback = "";
      })
      .catch((error) => {
        uiState.dynamicShareFeedback = error instanceof Error ? error.message : "媒体处理失败，请重试";
      })
      .finally(() => {
        uiState.dynamicDraftMediaProcessing = false;
        render();
      });
    return;
  }
  if (field === "community-compose-media-file") {
    const files = Array.from(target.files || []).filter((f) => f && String(f.type || "").startsWith("image/"));
    target.value = "";
    if (!files.length) return;
    const remain = Math.max(0, 9 - (uiState.communityComposeMedia || []).length);
    const picked = files.slice(0, remain);
    if (!picked.length) return;
    uiState.communityGroupFeedback = "图片处理中...";
    render();
    Promise.all(
      picked.map(async (file) => ({
        id: `${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
        url: await compressImageFileToDataUrl(file, {
          maxSide: 1560,
          jpegQuality: 0.76,
          minJpegQuality: 0.44,
          maxOutputBytes: 820_000
        }),
        name: String(file.name || "image").trim() || "image"
      }))
    )
      .then((items) => {
        const valid = items.filter(Boolean);
        if (!valid.length) return;
        uiState.communityComposeMedia = [...(uiState.communityComposeMedia || []), ...valid].slice(0, 9);
        uiState.communityGroupFeedback = "";
      })
      .catch((error) => {
        uiState.communityGroupFeedback = error instanceof Error ? error.message : "图片处理失败，请重试";
      })
      .finally(() => {
        render();
      });
    return;
  }
  if (field === "message-thread-image-file") {
    const file = target.files?.[0];
    target.value = "";
    if (!file || !isLikelyImageFile(file)) return;
    if (!uiState.isLoggedIn || !uiState.currentUserId) {
      uiState.showLoginModal = true;
      render();
      return;
    }
    const activeId = getActiveThreadForSending();
    if (!activeId) return;
    uiState.messageEmojiPanelOpen = false;
    const localPreviewUrl = URL.createObjectURL(file);
    const pendingId = appendPendingThreadMessage(activeId, {
      type: "image",
      text: "[图片]",
      payload: {
        url: String(localPreviewUrl || ""),
        name: String(file.name || "image")
      }
    });
    void compressImageFileToDataUrl(file, {
      maxSide: 1760,
      jpegQuality: 0.8,
      minJpegQuality: 0.4,
      maxOutputBytes: 3_900_000,
      allowRawFallback: true,
      rawFallbackMaxBytes: 9_500_000
    })
      .then(async (imageDataUrl) => {
        if (!imageDataUrl) throw new Error("IMAGE_ENCODE_FAILED");
        const payloadName = String(file.name || "image").trim() || "image";
        try {
          const imageUrl = await uploadMessageImage(imageDataUrl, "message/image");
          if (!imageUrl) throw new Error("IMAGE_UPLOAD_FAILED");
          return await sendMessageToThread(activeId, "[图片]", {
            messageType: "image",
            payload: {
              url: imageUrl,
              name: payloadName
            }
          });
        } catch (uploadErr) {
          // Fallback: let /messages/send route upload inline data URL when size is safe.
          if (dataUrlByteSize(imageDataUrl) > 3_900_000) throw uploadErr;
          return await sendMessageToThread(activeId, "[图片]", {
            messageType: "image",
            payload: {
              url: imageDataUrl,
              name: payloadName
            }
          });
        }
      })
      .then((message) => {
        URL.revokeObjectURL(localPreviewUrl);
        finalizePendingThreadMessage(activeId, pendingId, message, "[图片]");
      })
      .catch((err) => {
        removePendingMessage(activeId, pendingId);
        URL.revokeObjectURL(localPreviewUrl);
        showMessageFeedback(`发送失败：${formatThreadImageSendError(err)}`);
        render();
      });
    return;
  }
  if (
    field !== "community-create-cover-file"
    && field !== "community-create-avatar-file"
    && field !== "me-hero-cover-file"
    && field !== "profile-avatar-file"
    && field !== "backstage-top-bg-file"
  ) return;
  const file = target.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;
  if (field === "community-create-cover-file" || field === "community-create-avatar-file") {
    uiState.communityCreateAssetProcessing = true;
    if (uiState.communityCreateError) uiState.communityCreateError = "";
    render();
    const options = field === "community-create-cover-file"
      ? { maxSide: 1600, jpegQuality: 0.74, minJpegQuality: 0.42, maxOutputBytes: 950_000 }
      : { maxSide: 640, jpegQuality: 0.74, minJpegQuality: 0.42, maxOutputBytes: 280_000 };
    void compressImageFileToDataUrl(file, options)
      .then((dataUrl) => {
        if (field === "community-create-cover-file") {
          uiState.communityCreateCover = dataUrl;
        } else {
          uiState.communityCreateAvatar = dataUrl;
        }
      })
      .catch((err) => {
        uiState.communityCreateError = err instanceof Error ? err.message : "图片处理失败";
      })
      .finally(() => {
        uiState.communityCreateAssetProcessing = false;
        render();
      });
    return;
  }
  if (field === "backstage-top-bg-file") {
    uiState.backstageTopBgProcessing = true;
    uiState.meFeedback = "背景图片处理中...";
    render();
    void compressImageFileToDataUrl(file, {
      maxSide: 1600,
      jpegQuality: 0.74,
      minJpegQuality: 0.42,
      maxOutputBytes: 950_000
    })
      .then((dataUrl) => {
        uiState.backstageTopBackgroundDraft = dataUrl;
        uiState.meFeedback = "背景预览已更新";
      })
      .catch((err) => {
        uiState.meFeedback = err instanceof Error ? err.message : "图片处理失败";
      })
      .finally(() => {
        uiState.backstageTopBgProcessing = false;
        render();
      });
    return;
  }
  if (field === "me-hero-cover-file" || field === "profile-avatar-file") {
    uiState.profileAssetProcessing = true;
    uiState.meFeedback = "图片处理中...";
    render();
    const compressOptions = field === "me-hero-cover-file"
      ? { maxSide: 1440, jpegQuality: 0.72, minJpegQuality: 0.4, maxOutputBytes: 900_000 }
      : { maxSide: 640, jpegQuality: 0.74, minJpegQuality: 0.42, maxOutputBytes: 280_000 };
    void compressImageFileToDataUrl(file, compressOptions)
      .then((dataUrl) => {
        if (field === "me-hero-cover-file") {
          uiState.meHeroCover = `url("${dataUrl}")`;
          if (uiState.showProfileEditModal) {
            uiState.profileDraft.coverUrl = dataUrl;
          }
          uiState.meFeedback = "背景已更新";
        } else {
          uiState.profileDraft.avatarUrl = dataUrl;
          uiState.meFeedback = "头像已更新";
        }
      })
      .catch((err) => {
        uiState.meFeedback = err instanceof Error ? err.message : "图片处理失败";
      })
      .finally(() => {
        uiState.profileAssetProcessing = false;
        render();
      });
    return;
  }
  return;
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement)) return;
  if (target.getAttribute("data-field") === "community-comment") {
    if (event.key === "Enter") {
      event.preventDefault();
      const btn = document.querySelector("[data-action='community-post-comment-submit']");
      if (btn instanceof HTMLElement) btn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "community-reply-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (!commentId) return;
      const sendBtn = document.querySelector(`[data-action='community-comment-reply-submit'][data-id='${commentId}']`);
      if (sendBtn instanceof HTMLElement) sendBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "world-comment-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const sendBtn = document.querySelector("[data-action='world-comment-submit']");
      if (sendBtn instanceof HTMLElement) sendBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "world-reply-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (!commentId) return;
      const sendBtn = document.querySelector(`[data-action='world-comment-reply-submit'][data-id='${commentId}']`);
      if (sendBtn instanceof HTMLElement) sendBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "message-reply-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const commentId = String(uiState.messageReplyTargetId || "").trim();
      const idSelector = commentId ? `[data-action='message-comment-reply-send'][data-id='${commentId}']` : "[data-action='message-comment-reply-send']";
      const sendBtn = document.querySelector(idSelector);
      if (sendBtn instanceof HTMLElement) sendBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "message-search") {
    if (event.key === "Enter") {
      event.preventDefault();
      uiState.messageSearchKeyword = (uiState.messageSearchQuery || "").trim();
      render();
    }
    return;
  }
  if (target.getAttribute("data-field") === "message-thread-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const sendBtn = document.querySelector("[data-action='message-thread-send']");
      if (sendBtn instanceof HTMLElement) sendBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "dynamic-comment") {
    if (event.key === "Enter") {
      event.preventDefault();
      const submitBtn = document.querySelector("[data-action='submit-dynamic-comment']");
      if (submitBtn instanceof HTMLElement) submitBtn.click();
    }
    return;
  }
  if (target.getAttribute("data-field") === "dynamic-reply-draft") {
    if (event.key === "Enter") {
      event.preventDefault();
      const commentId = String(target.getAttribute("data-comment-id") || "").trim();
      if (!commentId) return;
      const submitBtn = document.querySelector(`[data-action='dynamic-comment-reply-submit'][data-id='${commentId}']`);
      if (submitBtn instanceof HTMLElement) submitBtn.click();
    }
    return;
  }
  if (
    target.getAttribute("data-field") === "login-password"
    || target.getAttribute("data-field") === "login-account"
    || target.getAttribute("data-field") === "register-account"
    || target.getAttribute("data-field") === "register-password"
    || target.getAttribute("data-field") === "register-confirm-password"
  ) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (uiState.loginMethod === "account") {
        if (uiState.accountAuthMode === "register") {
          void registerWithAccountAndSync();
        } else {
          void loginWithAccountAndSync();
        }
      }
    }
    return;
  }
  if (target.getAttribute("data-field") === "play-action-draft") {
    if (event.key === "Enter") {
      if (event.shiftKey) return;
      event.preventDefault();
      const text = (uiState.playActionDraft || "").trim();
      if (!text) return;
      void submitPlayTurn(text);
    }
    return;
  }
  const isSearchInput = target.classList.contains("unified-search-input") || target.classList.contains("search-mobile-global-input");
  if (!isSearchInput) return;
  if (event.key === "Enter") {
    event.preventDefault();
    const routeScope = window.location.hash.startsWith("#/community/search") ? "community" : (uiState.unifiedSearchScope || "all");
    executeSearch(target.value, { scope: routeScope });
  }
});

document.addEventListener("error", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLImageElement)) return;
  if (!target.classList.contains("workshop-paint-image")) return;

  const fallbackSrc = String(target.getAttribute("data-fallback-src") || "").trim();
  const triedFallback = target.getAttribute("data-fallback-used") === "1";

  if (!triedFallback && fallbackSrc) {
    target.setAttribute("data-fallback-used", "1");
    target.src = fallbackSrc;
    if (!String(uiState.workshopPaintFeedback || "").includes("备用图源")) {
      uiState.workshopPaintFeedback = "主图源加载失败，已切换备用图源。";
      render();
    }
    return;
  }

  uiState.workshopPaintFeedback = "图片加载失败：当前网络无法访问图源，请稍后重试或更换网络。";
  render();
}, true);

function scrollCurrentViewToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.querySelectorAll(".xh-main, .xh-main-message, .me-side-sheet-inner").forEach((node) => {
    if (node instanceof HTMLElement) node.scrollTop = 0;
  });
}

const ROUTE_SCROLL_TOP_CACHE = Object.create(null);

function normalizeRoutePath(route = "") {
  const raw = String(route || "").trim();
  if (!raw) return "";
  return raw.split("?")[0] || raw;
}

function routePathFromUrl(urlText = "") {
  try {
    const u = new URL(String(urlText || ""), window.location.origin);
    return normalizeRoutePath(u.hash || "");
  } catch {
    return normalizeRoutePath(String(urlText || "").split("#")[1] ? `#${String(urlText || "").split("#")[1]}` : "");
  }
}

function shouldPreserveScrollForRoute(route = "") {
  const path = normalizeRoutePath(route);
  if (!path) return false;
  return path === "#/theater/home"
    || path.startsWith("#/drama")
    || path.startsWith("#/messages/story")
    || path.startsWith("#/community");
}

function getCurrentViewScrollTop() {
  let maxTop = Math.max(
    Number(window.scrollY || 0),
    Number(document.documentElement.scrollTop || 0),
    Number(document.body.scrollTop || 0)
  );
  document.querySelectorAll(".xh-main, .xh-main-message, .me-side-sheet-inner").forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    maxTop = Math.max(maxTop, Number(node.scrollTop || 0));
  });
  return Math.max(0, Math.round(maxTop));
}

function setCurrentViewScrollTop(top = 0) {
  const y = Math.max(0, Number(top || 0));
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = y;
  document.body.scrollTop = y;
  document.querySelectorAll(".xh-main, .xh-main-message, .me-side-sheet-inner").forEach((node) => {
    if (node instanceof HTMLElement) node.scrollTop = y;
  });
}

function captureRouteScrollTop(route = getCurrentRoutePath()) {
  const path = normalizeRoutePath(route);
  if (!shouldPreserveScrollForRoute(path)) return;
  ROUTE_SCROLL_TOP_CACHE[path] = getCurrentViewScrollTop();
}

function syncMobileViewportForThread() {
  const root = document.documentElement;
  const innerHeightPx = window.innerHeight || document.documentElement.clientHeight || 0;
  const vv = window.visualViewport;
  const visualHeightPx = vv?.height || innerHeightPx;
  const routePath = getCurrentRoutePath();
  const onThread = routePath.startsWith("#/messages/thread");
  root.style.setProperty("--app-inner-height", `${Math.round(innerHeightPx)}px`);
  root.style.setProperty("--app-visual-height", `${Math.round(visualHeightPx)}px`);
  if (!onThread) {
    document.body.classList.remove("message-thread-input-focus");
  }
}

let deferredPwaInstallPromptEvent = null;
let pwaInstallHintRoot = null;
let pwaInstallHintMounted = false;

function isIosDevice() {
  const ua = String(navigator.userAgent || "").toLowerCase();
  return /iphone|ipad|ipod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function isAndroidDevice() {
  return /android/i.test(String(navigator.userAgent || ""));
}

function isSafariBrowser() {
  const ua = String(navigator.userAgent || "");
  return /Safari/i.test(ua) && !/Chrome|CriOS|Edg|OPR|FxiOS/i.test(ua);
}

function isRunningStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || Boolean(navigator.standalone);
}

function getPwaInstallHintDismissUntil() {
  try {
    return Number(localStorage.getItem(PWA_INSTALL_HINT_DISMISS_UNTIL_KEY) || 0);
  } catch {
    return 0;
  }
}

function setPwaInstallHintDismissCooldown() {
  try {
    localStorage.setItem(PWA_INSTALL_HINT_DISMISS_UNTIL_KEY, String(Date.now() + PWA_INSTALL_HINT_COOLDOWN_MS));
  } catch {}
}

function clearPwaInstallHintNode() {
  if (pwaInstallHintRoot && pwaInstallHintRoot.parentNode) {
    pwaInstallHintRoot.parentNode.removeChild(pwaInstallHintRoot);
  }
  pwaInstallHintRoot = null;
  pwaInstallHintMounted = false;
}

function shouldShowPwaInstallHint() {
  if (isRunningStandalone()) return false;
  if (!window.isSecureContext) return false;
  if (isLikelyLocalHost(window.location.hostname)) return false;
  if (isPwaDisabledByUser()) return false;
  if (Date.now() < getPwaInstallHintDismissUntil()) return false;
  return true;
}

function renderPwaInstallHint({ platform = "generic", canPrompt = false } = {}) {
  if (!shouldShowPwaInstallHint()) return;
  if (pwaInstallHintMounted) return;
  const title = platform === "ios" ? "可添加到主屏幕" : "安装爪马到桌面";
  const guideText = platform === "ios"
    ? "在 Safari 点击“分享”按钮，再点“添加到主屏幕”。"
    : "安装后会像原生 App 一样独立打开，入口在主屏幕。";
  const actionText = canPrompt ? "立即安装" : "知道了";

  const wrapper = document.createElement("aside");
  wrapper.className = "pwa-install-hint";
  wrapper.innerHTML = `
    <div class="pwa-install-hint__title">${escapeHtml(title)}</div>
    <p class="pwa-install-hint__sub">${escapeHtml(guideText)}</p>
    <div class="pwa-install-hint__actions">
      <button type="button" class="pwa-install-hint__btn pwa-install-hint__btn--ghost" data-action="dismiss">稍后</button>
      <button type="button" class="pwa-install-hint__btn pwa-install-hint__btn--primary" data-action="install">${escapeHtml(actionText)}</button>
    </div>
  `;

  wrapper.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.getAttribute("data-action");
    if (action === "dismiss") {
      setPwaInstallHintDismissCooldown();
      clearPwaInstallHintNode();
      return;
    }
    if (action !== "install") return;
    if (canPrompt && deferredPwaInstallPromptEvent) {
      const promptEvent = deferredPwaInstallPromptEvent;
      deferredPwaInstallPromptEvent = null;
      try {
        await promptEvent.prompt();
        await promptEvent.userChoice;
      } catch {}
      clearPwaInstallHintNode();
      return;
    }
    setPwaInstallHintDismissCooldown();
    clearPwaInstallHintNode();
  });

  document.body.appendChild(wrapper);
  pwaInstallHintRoot = wrapper;
  pwaInstallHintMounted = true;
}

function initPwaInstallExperience() {
  if (!("serviceWorker" in navigator)) return;
  if (isRunningStandalone()) return;

  window.addEventListener("appinstalled", () => {
    deferredPwaInstallPromptEvent = null;
    setPwaInstallHintDismissCooldown();
    clearPwaInstallHintNode();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPwaInstallPromptEvent = event;
    renderPwaInstallHint({ platform: "android", canPrompt: true });
  });

  if (isIosDevice() && isSafariBrowser()) {
    setTimeout(() => {
      renderPwaInstallHint({ platform: "ios", canPrompt: false });
    }, 1400);
    return;
  }

  if (isAndroidDevice()) {
    setTimeout(() => {
      if (!deferredPwaInstallPromptEvent) {
        renderPwaInstallHint({ platform: "android", canPrompt: false });
      }
    }, 2200);
  }
}

function isLikelyLocalHost(hostname = "") {
  const host = String(hostname || "").toLowerCase();
  return (
    host === "localhost"
    || host === "127.0.0.1"
    || host === "::1"
    || host.endsWith(".local")
  );
}

function isPwaDisabledByUser() {
  try {
    return localStorage.getItem(PWA_DISABLE_KEY) === "1";
  } catch {
    return false;
  }
}

function isPwaDebugEnabled() {
  try {
    return localStorage.getItem(PWA_DEBUG_KEY) === "1";
  } catch {
    return false;
  }
}

function shouldRegisterPwa() {
  if (!("serviceWorker" in navigator)) return false;
  if (!window.isSecureContext) return false;
  if (isLikelyLocalHost(window.location.hostname)) return false;
  if (isPwaDisabledByUser()) return false;
  return true;
}

async function unregisterAllServiceWorkers() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map((reg) => reg.unregister()));
  } catch {}
}

async function initPwa() {
  if (!("serviceWorker" in navigator)) return;
  if (!shouldRegisterPwa()) {
    await unregisterAllServiceWorkers();
    return;
  }
  try {
    const reg = await navigator.serviceWorker.register(PWA_SW_URL, { scope: "/" });
    if (isPwaDebugEnabled()) {
      console.info("[PWA] service worker registered", reg?.scope || "");
    }
  } catch (error) {
    if (isPwaDebugEnabled()) {
      console.warn("[PWA] service worker registration failed", error);
    }
  }
}

window.addEventListener("hashchange", (event) => {
  const prevRoute = routePathFromUrl(event?.oldURL || "");
  captureRouteScrollTop(prevRoute);
  const nextRoute = normalizeRoutePath(window.location.hash || "");
  ensureSectionDataOnDemand(nextRoute);
  if (nextRoute.startsWith("#/messages/thread")) {
    hydrateThreadRouteImmediately(getMessageConversationIdFromHash() || uiState.selectedMessageId || "");
  }
  render();
  syncMobileViewportForThread();
  const hash = getCurrentRoutePath();
  if (!hash.startsWith("#/messages/thread")) {
    document.body.classList.remove("message-thread-input-focus");
    uiState.messageImagePreviewUrl = "";
    uiState.messageImagePreviewAlt = "";
  }
  if (hash.startsWith("#/messages/thread")) {
    const hashConversationId = hydrateThreadRouteImmediately(getMessageConversationIdFromHash() || uiState.selectedMessageId || "");
    if (hashConversationId) uiState.messageReadAckConversationId = "";
    uiState.messageThreadForceBottomUntil = Date.now() + 1800;
    scrollThreadToBottom(1, { force: true });
    if (uiState.isLoggedIn && uiState.currentUserId) {
      void Promise.allSettled([
        syncMessageInbox(),
        syncActiveConversationThread({ conversationId: hashConversationId || uiState.selectedMessageId || "" })
      ])
        .then(() => {
          triggerMessageRealtimeRender({ scrollToBottom: true, forceBottom: true });
        });
    }
    return;
  }
  requestAnimationFrame(() => {
    if (shouldPreserveScrollForRoute(hash)) {
      const cachedTop = Number(ROUTE_SCROLL_TOP_CACHE[hash] || 0);
      setCurrentViewScrollTop(cachedTop);
      return;
    }
    scrollCurrentViewToTop();
  });
});

window.addEventListener("focus", () => {
  if (typeof messageRealtimeSyncRunner === "function") messageRealtimeSyncRunner();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") {
    void flushClientObservability({ force: true, keepalive: true }).catch(() => {});
    return;
  }
  if (uiState.isLoggedIn && hasAuthSessionExpired()) {
    performLogoutAndRedirectToLogin();
    return;
  }
  if (typeof messageRealtimeSyncRunner === "function") messageRealtimeSyncRunner();
});

window.addEventListener("pagehide", () => {
  void flushClientObservability({ force: true, keepalive: true }).catch(() => {});
});

let authExpiryTimer;
function ensureAuthExpiryTimer() {
  if (authExpiryTimer) return;
  authExpiryTimer = setInterval(() => {
    if (!uiState.isLoggedIn) return;
    if (!hasAuthSessionExpired()) return;
    performLogoutAndRedirectToLogin();
  }, 15_000);
}

window.addEventListener("resize", syncMobileViewportForThread, { passive: true });
window.addEventListener("orientationchange", syncMobileViewportForThread, { passive: true });
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", syncMobileViewportForThread, { passive: true });
}

document.addEventListener("focusin", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
  if (!(window.location.hash || "").startsWith("#/messages/thread")) return;
  if (target.getAttribute("data-field") !== "message-thread-draft") return;
  document.body.classList.add("message-thread-input-focus");
  if (uiState.messageThreadToolsOpen) {
    uiState.messageThreadToolsOpen = false;
    render();
    requestAnimationFrame(() => {
      const next = document.querySelector("input[data-field='message-thread-draft']");
      if (next instanceof HTMLInputElement) {
        next.focus();
        next.setSelectionRange(next.value.length, next.value.length);
      }
    });
  }
  syncMobileViewportForThread();
  setTimeout(() => {
    scrollThreadToBottom(1, { force: true });
  }, 80);
});

document.addEventListener("focusout", () => {
  if (!(window.location.hash || "").startsWith("#/messages/thread")) return;
  setTimeout(() => {
    const active = document.activeElement;
    const stillEditing = active instanceof HTMLInputElement && active.getAttribute("data-field") === "message-thread-draft";
    if (!stillEditing) {
      document.body.classList.remove("message-thread-input-focus");
      if (messageRealtimePendingRenderWhileTyping) triggerMessageRealtimeRender();
    }
    syncMobileViewportForThread();
  }, 120);
});

async function startApp() {
  void initPwa();
  initPwaInstallExperience();
  hydratePlayBackgroundPreference();
  hydrateSelectedWorldId();
  const cachedUserId = String(hydrateAuthUserId() || "").trim();
  const sessionUser = await getServerAuthSessionUser();
  const sessionUserId = String(sessionUser?.id || "").trim();
  const authUserId = sessionUserId || cachedUserId;
  if (authUserId) {
    uiState.currentUserId = authUserId;
    uiState.isLoggedIn = true;
    hydrateProfilePendingPatch(authUserId);
  } else {
    uiState.currentUserId = "";
    uiState.isLoggedIn = false;
    uiState.profilePendingPatch = null;
  }
  const hasFullCache = authUserId ? tryHydrateFullCache(authUserId) : false;
  const hasCache = hasFullCache || tryHydrateFromCache(authUserId);
  if (!window.location.hash || window.location.hash === "#/") {
    window.location.hash = authUserId ? "#/theater/home" : "#/auth/login";
  }
  render();
  ensureAuthExpiryTimer();
  syncMobileViewportForThread();
  if (authUserId) {
    await Promise.allSettled([flushPendingWorldReactions(), flushPendingFollowOps()]);
    overlayWorldInteractionsForCurrentUser();
    overlayFollowStateForCurrentUser();
    render();
  }
  try {
    if (authUserId) {
      const currentHash = window.location.hash || "#/theater/home";
      if (!hasCache) {
        const initialSections = getBootstrapSectionsForRoute(currentHash);
        initialSections.forEach((section) => {
          void fetchBootstrapSection(section, authUserId, { force: true })
            .then(() => {
              render();
            })
            .catch(() => {});
        });
      }
      if (hasCache) {
        void bootstrapClientData(authUserId)
          .then(() => {
            render();
          })
          .catch(() => {});
      } else {
        await bootstrapClientData(authUserId);
        render();
      }
      ensureSectionDataOnDemand(currentHash);
      if (hasCache) {
        scheduleBootstrapFullRefresh(authUserId, { delayMs: 520 });
      }
    } else {
      await bootstrapClientData();
      render();
    }
  } catch (error) {
    if (authUserId) {
      if (hasCache) {
        // Keep cached UI responsive and retry in background.
        void bootstrapClientData(authUserId).catch(() => {});
        return;
      }
      try {
        await bootstrapClientData();
        render();
        return;
      } catch {}
    }
    if (hasCache) return;
    app.innerHTML = `
      <section class="screen">
        <div class="auth-wrap">
          <div class="auth-card">
            <h3>数据加载失败</h3>
            <p class="sub">无法从数据库读取内容，请确认 API 服务和 Neon 连接是否正常。</p>
            <p class="sub">${escapeHtml(error instanceof Error ? error.message : String(error || "unknown"))}</p>
            <button class="auth-btn auth-primary" onclick="window.location.reload()">重试</button>
          </div>
        </div>
      </section>
    `;
    return;
  }
}

void startApp();
