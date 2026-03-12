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
  { key: "theme", label: "全部主题", options: ["悬疑", "言情", "古风", "科幻"] },
  { key: "gender", label: "不限频向", options: ["男频", "女频", "不限"] },
  { key: "time", label: "全部时间", options: ["24小时", "3天", "7天", "30天"] },
  { key: "size", label: "全部人数", options: ["<100", "100-500", "500-1k", ">1k"] }
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
let DRAMA_HERO_TOTAL = 1;
const API_BASE = "/api/v1";
const BOOTSTRAP_CORE_CACHE_KEY = "drama_bootstrap_core_v6";
const BOOTSTRAP_FULL_CACHE_PREFIX = "drama_bootstrap_full_v6_";
const SELECTED_WORLD_ID_CACHE_KEY = "drama_selected_world_id_v4";
const AUTH_USER_ID_SESSION_KEY = "drama_auth_session_v3";
const AUTH_USER_ID_LEGACY_LOCAL_KEY = "drama_auth_user_id_v1";
const AUTH_REDIRECT_HASH_KEY = "drama_auth_redirect_hash_v1";
const AUTH_TTL_MS = 30 * 60 * 1000;
const AUTH_PUBLIC_ROUTES = new Set(["#/auth/login"]);
const WORLD_INTERACTION_CACHE_PREFIX = "drama_world_interactions_v1_";
const WORLD_REACTION_PENDING_PREFIX = "drama_world_reaction_pending_v1_";
const FOLLOW_STATE_CACHE_PREFIX = "drama_follow_state_v1_";
const FOLLOW_PENDING_PREFIX = "drama_follow_pending_v1_";
const ME_VIEWED_PROFILE_CACHE_KEY = "drama_me_viewed_profile_v1";
const PLAY_RESPONSE_POOL = [];
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
      memoryHooks: "耳返线打结 / 舞台返听杂音 / 纸杯上的口红印",
      growthMilestones: "默契阈值 25/55/85 解锁：后台闲聊、私人行程、合作创作。",
      triggerWords: "舞台、自由、合同、真话。"
    }
  ]
};

const app = document.getElementById("app");

function clearLegacyClientCaches() {
  try {
    localStorage.removeItem("drama_bootstrap_core_v1");
    localStorage.removeItem("drama_bootstrap_core_v2");
    localStorage.removeItem("drama_bootstrap_core_v3");
    localStorage.removeItem("drama_bootstrap_core_v4");
    localStorage.removeItem("drama_bootstrap_core_v5");
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
  worldShareMode: "picker",
  worldShareSelectedUserId: "",
  worldShareSelectedUserName: "",
  worldShareDraft: "",
  worldShareFeedback: "",
  profileAvatarPreview: {
    name: "",
    handle: "",
    avatarText: ""
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
  searchPanelOpen: false,
  searchQuery: "",
  searchHistory: [],
  hotSearchCursor: 0,
  communitySearchPanelOpen: false,
  communitySearchQuery: "",
  communitySearchHistory: [],
  communityHotSearchCursor: 0,
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
    bio: ""
  },
  profileDraft: {
    name: "Drama 用户",
    handle: "@drama_user",
    bio: ""
  },
  dynamicTab: "推荐",
  showDynamicComposer: false,
  dynamicPublishing: false,
  dynamicComposerType: "图文",
  dynamicDraftText: "",
  dynamicDraftTitle: "",
  dynamicPublishFeedback: "",
  dynamicPosts: [],
  selectedDynamicId: null,
  dynamicMeta: {},
  dynamicCommentDraft: "",
  dynamicShareFeedback: "",
  backstageSignature: "",
  backstageTopBackground: "",
  backstageSignatureDraft: "",
  backstageTopBackgroundDraft: "",
  meContentTab: "works",
  mePreferences: ["悬疑", "系统", "都市", "女性成长"],
  meTheme: "light",
  meFontSize: "标准",
  meLanguage: "简体中文",
  meFeedback: "",
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
  messageThreadToolsOpen: false,
  messageThreadMenuOpen: false,
  messageThreadAutoScrollOnEnter: false,
  messageThreadForceBottomUntil: 0,
  messageFeedback: "",
  messageFollowActions: {},
  messageCommentLikes: {},
  messageReplyTargetId: "",
  messageReplyDraft: "",
  messageReadAckConversationId: "",
  messagePeerPresence: {},
  messagePresenceBeatAt: {},
  messageThreads: {},
  communityMyTab: "joined",
  communityGroupTab: "dynamic",
  selectedCommunityId: "c_1",
  selectedCommunityPostId: "cp_1",
  communityComposeType: "图片",
  communityComposeText: "",
  communityComposeStoryId: "",
  communityComposeVisibility: "公开 · 社区内",
  communityComposeSync: true,
  communityPostPublished: false,
  communityPostMeta: {},
  communityCommentDraft: "",
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
  communityCreateCover: COMMUNITY_CARD_IMAGES[0],
  communityCreateMaskOpacity: 0.38,
  communityCreatePublishedId: "",
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
  playIdeaModalOpen: false,
  playIdeaOptions: [],
  playPromptQuestion: "你打算怎么做？",
  playPromptOptions: [],
  playAutoOpeningRequested: false,
  workshopMode: "long_narrative",
  workshopAuthoringMode: "custom",
  workshopSelectedTemplateId: {
    long_narrative: "",
    short_narrative: "",
    virtual_character: ""
  },
  workshopWorldDraft: {
    openingLine: "",
    worldSetting: "",
    playerIdentity: "",
    primaryGoal: "",
    coreConflict: "",
    fixedNpcs: "",
    resourceSystem: "",
    toneStyle: "",
    forbiddenRules: "",
    detailMemorySeed: ""
  },
  workshopStoryDraft: {
    openingAnchor: "",
    endingAnchors: "",
    fixedNpcs: "",
    scopeLimits: "",
    primaryGoal: "",
    coreConflict: "",
    branchSeeds: "",
    pacingHint: "",
    cluePool: ""
  },
  workshopCharacterDraft: {
    personaName: "",
    relationStart: "",
    personaCore: "",
    dialogueStyle: "",
    relationBoundary: "",
    taboos: "",
    openingLine: "",
    memoryHooks: "",
    growthMilestones: "",
    triggerWords: ""
  },
  workshopCustomRaw: "",
  workshopCustomParsing: false,
  workshopCustomParsed: null,
  workshopFeedback: "",
  workshopSavedCards: [],
  workshopCardsLoadedForUser: "",
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
  workshopPaintGenerating: false,
  workshopPaintResults: [],
  workshopPaintFeedback: "",
  workshopPaintCategory: "all",
  workshopPaintSort: "latest",
  workshopPaintComposerOpen: false,
  playRound: 1,
  playChapter: getWorldProfile(FEED_DATA[0]).chapter,
  worldCommentDraftByCard: {},
  worldCommentsState: {},
  worldActionFxUntil: {
    like: 0,
    favorite: 0,
    follow: 0,
    tip: 0
  },
  playSceneImageReady: false,
  playEntries: getProfileOpeningEntries(getWorldProfile(FEED_DATA[0])),
  bootstrapFullLoaded: false,
  bootstrapFullLoading: false
};

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

function applyBootstrapData(payload, sourceMode = "unknown") {
  replaceArray(FEED_DATA, payload?.feedData || []);
  replaceArray(DRAMA_STORY_IMAGES, payload?.dramaStoryImages || []);
  replaceArray(DYNAMIC_FEED, payload?.dynamicFeed || []);
  uiState.dynamicMeta = {};
  replaceArray(COMMUNITY_LIST, payload?.communityList || []);
  replaceObject(COMMUNITY_POSTS, payload?.communityPosts || {});
  replaceObject(AUTHOR_DIRECTORY, payload?.authors || {});
  overlayFollowStateForCurrentUser();
  if (uiState.modalProfile?.id && AUTHOR_DIRECTORY[uiState.modalProfile.id]) {
    const nextProfile = buildAuthorProfileByName(uiState.modalProfile.name, uiState.modalProfile.id);
    uiState.modalProfile = nextProfile;
    uiState.isFollowingAuthor = Boolean(nextProfile.isFollowedByMe);
  }
  replaceArray(MESSAGE_INBOX, payload?.messages?.inbox || []);
  replaceArray(MESSAGE_LIKES, payload?.messages?.likes || []);
  replaceArray(MESSAGE_NEW_FOLLOWS, payload?.messages?.follows || []);
  replaceArray(MESSAGE_COMMENTS, payload?.messages?.comments || []);
  replaceObject(uiState.messageThreads, payload?.messages?.threads || {});
  replaceArray(ME_RELATION_USERS, payload?.me?.relationUsers || []);
  uiState.meRelationFollowing = {};
  ME_RELATION_USERS.forEach((x) => {
    const id = String(x?.id || "").trim();
    if (!id) return;
    uiState.meRelationFollowing[id] = Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友");
  });
  replaceArray(COIN_BILLS, payload?.me?.coinBills || []);
  replaceArray(COIN_TASKS, payload?.me?.coinTasks || []);
  replaceArray(COIN_BENEFITS, payload?.me?.coinBenefits || []);
  replaceArray(HOT_SEARCH_TERMS, payload?.search?.hotTerms || []);
  const history = payload?.search?.history || [];
  uiState.searchHistory = [...history];
  uiState.communitySearchHistory = [...history];
  const incomingLibrary = payload?.me?.contentLibrary || {};
  const incomingStats = payload?.me?.stats || {};
  const incomingWorks = Array.isArray(incomingLibrary.works) ? incomingLibrary.works : null;
  const incomingLikes = Array.isArray(incomingLibrary.likes) ? incomingLibrary.likes : null;
  const incomingFavorites = Array.isArray(incomingLibrary.favorites) ? incomingLibrary.favorites : null;
  const incomingHistory = Array.isArray(incomingLibrary.history) ? incomingLibrary.history : null;
  uiState.meStats = {
    storyCount: toMetricCount(incomingStats.storyCount),
    likedCount: toMetricCount(incomingStats.likedCount),
    fansCount: toMetricCount(incomingStats.fansCount)
  };
  if (sourceMode === "full") {
    ME_CONTENT_LIBRARY.works = incomingWorks || [];
    ME_CONTENT_LIBRARY.likes = incomingLikes || [];
    ME_CONTENT_LIBRARY.favorites = incomingFavorites || [];
    ME_CONTENT_LIBRARY.history = incomingHistory || [];
  } else {
    if (!Array.isArray(ME_CONTENT_LIBRARY.works)) ME_CONTENT_LIBRARY.works = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.likes)) ME_CONTENT_LIBRARY.likes = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.favorites)) ME_CONTENT_LIBRARY.favorites = [];
    if (!Array.isArray(ME_CONTENT_LIBRARY.history)) ME_CONTENT_LIBRARY.history = [];
    // core bootstrap may carry placeholder empty arrays; avoid wiping the full-view cache in "我的"
    if (incomingWorks && incomingWorks.length > 0) ME_CONTENT_LIBRARY.works = incomingWorks;
    if (incomingLikes && incomingLikes.length > 0) ME_CONTENT_LIBRARY.likes = incomingLikes;
    if (incomingFavorites && incomingFavorites.length > 0) ME_CONTENT_LIBRARY.favorites = incomingFavorites;
    if (incomingHistory && incomingHistory.length > 0) ME_CONTENT_LIBRARY.history = incomingHistory;
  }
  DRAMA_HERO_TOTAL = Math.max(1, Math.min(3, FEED_DATA.length));

  const me = payload?.user;
  if (me) {
    const prevUser = uiState.currentUserId;
    uiState.isLoggedIn = true;
    uiState.currentUserId = me.id || "";
    persistAuthUserId();
    uiState.userCoins = Number(me.coins || 0);
    uiState.profile = {
      name: me.name || "Drama 用户",
      handle: me.handle || "@drama_user",
      bio: me.bio || ""
    };
    uiState.profileDraft = { ...uiState.profile };
    if (me.coverUrl) uiState.meHeroCover = `url("${me.coverUrl}")`;
    if (prevUser !== uiState.currentUserId) {
      uiState.workshopCardsLoadedForUser = "";
      uiState.workshopSavedCards = [];
      uiState.workshopActiveCardId = "";
      uiState.meViewedUserId = "";
      uiState.meViewedUserName = "";
      persistViewedProfile();
    }
  } else {
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
    uiState.workshopSavedCards = [];
    uiState.workshopActiveCardId = "";
    uiState.meViewedUserId = "";
    uiState.meViewedUserName = "";
    persistViewedProfile();
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
  persistSelectedWorldId();
  const hasFullMessages = Array.isArray(payload?.messages?.inbox) && payload.messages.inbox.length > 0;
  const hasFullMe = Array.isArray(payload?.me?.coinBills) && payload.me.coinBills.length > 0;
  if (hasFullMessages || hasFullMe) uiState.bootstrapFullLoaded = true;
  resetPlayStateForWorld(uiState.selectedWorldId);
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

function setSelectedWorldId(worldId) {
  const id = String(worldId || "").trim();
  if (!id) return;
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
    const id = String(uiState.currentUserId || "").trim();
    if (!id) {
      sessionStorage.removeItem(AUTH_USER_ID_SESSION_KEY);
      sessionStorage.removeItem(AUTH_REDIRECT_HASH_KEY);
      localStorage.removeItem(AUTH_USER_ID_LEGACY_LOCAL_KEY);
      uiState.authLoginAt = 0;
      return;
    }
    let loginAt = Number(uiState.authLoginAt || 0);
    if (!Number.isFinite(loginAt) || loginAt <= 0) {
      try {
        const raw = sessionStorage.getItem(AUTH_USER_ID_SESSION_KEY);
        const prev = raw ? JSON.parse(raw) : null;
        if (String(prev?.userId || "").trim() === id) {
          loginAt = Number(prev?.loginAt || 0);
        }
      } catch {}
    }
    if (!Number.isFinite(loginAt) || loginAt <= 0) loginAt = Date.now();
    uiState.authLoginAt = loginAt;
    sessionStorage.setItem(AUTH_USER_ID_SESSION_KEY, JSON.stringify({ userId: id, loginAt }));
    localStorage.removeItem(AUTH_USER_ID_LEGACY_LOCAL_KEY);
  } catch {}
}

function hydrateAuthUserId() {
  try {
    const raw = sessionStorage.getItem(AUTH_USER_ID_SESSION_KEY);
    if (!raw) return "";
    const parsed = JSON.parse(raw);
    const userId = String(parsed?.userId || "").trim();
    const loginAt = Number(parsed?.loginAt || 0);
    if (!userId || !Number.isFinite(loginAt) || loginAt <= 0) {
      sessionStorage.removeItem(AUTH_USER_ID_SESSION_KEY);
      return "";
    }
    if (Date.now() - loginAt > AUTH_TTL_MS) {
      sessionStorage.removeItem(AUTH_USER_ID_SESSION_KEY);
      uiState.authLoginAt = 0;
      return "";
    }
    uiState.authLoginAt = loginAt;
    return userId;
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
  uiState.authLoginAt = Date.now();
  persistAuthUserId();
}

function hasAuthSessionExpired() {
  const loginAt = Number(uiState.authLoginAt || 0);
  if (!Number.isFinite(loginAt) || loginAt <= 0) return false;
  return Date.now() - loginAt > AUTH_TTL_MS;
}

function performLogoutAndRedirectToLogin() {
  uiState.isLoggedIn = false;
  uiState.currentUserId = "";
  uiState.bootstrapFullLoaded = false;
  uiState.bootstrapFullLoading = false;
  uiState.showLoginModal = false;
  persistAuthUserId();
  if (window.location.hash !== "#/auth/login") {
    window.location.hash = "#/auth/login";
  }
}

async function bootstrapClientData(userId = "") {
  const query = userId
    ? `?mode=core&userId=${encodeURIComponent(userId)}`
    : "?mode=core";
  const resp = await fetch(`${API_BASE}/bootstrap${query}`);
  if (!resp.ok) throw new Error(`BOOTSTRAP_HTTP_${resp.status}`);
  const data = await resp.json();
  applyBootstrapData(data, "core");
  try {
    localStorage.setItem(BOOTSTRAP_CORE_CACHE_KEY, JSON.stringify(data));
  } catch {}
}

async function bootstrapClientDataFull(userId = uiState.currentUserId || "") {
  const query = userId ? `?mode=full&userId=${encodeURIComponent(userId)}` : "?mode=full";
  const resp = await fetch(`${API_BASE}/bootstrap${query}`);
  if (!resp.ok) throw new Error(`BOOTSTRAP_FULL_HTTP_${resp.status}`);
  const data = await resp.json();
  applyBootstrapData(data, "full");
  try {
    if (userId) {
      localStorage.setItem(`${BOOTSTRAP_FULL_CACHE_PREFIX}${userId}`, JSON.stringify(data));
    }
  } catch {}
}

function tryHydrateFullCache(userId = uiState.currentUserId || "") {
  if (!userId) return false;
  try {
    const raw = localStorage.getItem(`${BOOTSTRAP_FULL_CACHE_PREFIX}${userId}`);
    if (!raw) return false;
    const cached = JSON.parse(raw);
    if (!cached || typeof cached !== "object") return false;
    applyBootstrapData(cached, "full");
    uiState.bootstrapFullLoaded = true;
    return true;
  } catch {
    return false;
  }
}

function tryHydrateFromCache() {
  try {
    const raw = localStorage.getItem(BOOTSTRAP_CORE_CACHE_KEY);
    if (!raw) return false;
    const cached = JSON.parse(raw);
    if (!cached || typeof cached !== "object") return false;
    applyBootstrapData(cached, "core");
    return true;
  } catch {
    return false;
  }
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

function isMobileViewport() {
  return window.innerWidth <= 980;
}

function pageLogin() {
  return `
    <section class="screen">
      ${renderExploreLoginModal({ standalone: true })}
    </section>
  `;
}

function pageAuthPhone() {
  return `
    <section class="screen">
      <div class="auth-wrap">
        <div class="auth-card">
          <div class="auth-head-row">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <span>手机号登录</span>
            <span></span>
          </div>
          <p class="sub">输入手机号并获取验证码后登录</p>
          <div class="auth-inline" style="margin-top:10px;">
            <input class="auth-input" placeholder="请输入手机号" />
            <div class="row">
              <input class="auth-input" placeholder="验证码" style="flex:1;" />
              <button class="auth-btn" style="width:auto;">获取验证码</button>
            </div>
            <button class="auth-btn auth-primary" data-go="#/theater/home">验证码登录</button>
          </div>
          <p class="auth-footnote">未注册手机号将自动创建账号</p>
        </div>
      </div>
    </section>
  `;
}

function pageAuthWechat() {
  return `
    <section class="screen">
      <div class="auth-wrap">
        <div class="auth-card">
          <div class="auth-head-row">
            <button class="text-btn" data-go="#/auth/login">返回</button>
            <span>微信登录</span>
            <span></span>
          </div>
          <div class="auth-section" style="margin-top:10px;">
            <div class="auth-row">
              <strong>登录方式</strong>
              <div class="auth-switch">
                <button class="${uiState.wechatMode === "account" ? "active" : ""}" data-action="wechat-mode" data-mode="account">账号</button>
                <button class="${uiState.wechatMode === "qrcode" ? "active" : ""}" data-action="wechat-mode" data-mode="qrcode">扫码</button>
              </div>
            </div>
            ${
              uiState.wechatMode === "account"
                ? `
              <div class="auth-inline">
                <input class="auth-input" placeholder="微信号 / 手机号 / 邮箱" />
                <input class="auth-input" placeholder="微信密码" type="password" />
                <button class="auth-btn auth-primary" data-go="#/theater/home">微信账号登录</button>
              </div>
            `
                : `
              <div class="wechat-qr">
                <div class="qr-box">扫码区</div>
                <p>请使用微信扫码登录</p>
                <button class="auth-btn auth-primary" data-go="#/theater/home">已扫码，继续</button>
              </div>
            `
            }
          </div>
        </div>
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
    "#/theater/filter": "筛选",
    "#/search/results": "搜索结果",
    "#/drama/filter": "Drama筛选",
    "#/drama/filter/results": "筛选结果",
    "#/play/core": "开刷",
    "#/play/model": "模型模式",
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
  const showMobileTopBar = !isDynamicDetailRoute && (
    currentHash === "#/theater/home" ||
    currentHash === "#/theater" ||
    currentHash.startsWith("#/drama") ||
    (isBackstageRoute && currentHash !== "#/messages/story/publish")
  );
  const mobileTopTabs = [
    { label: "推荐", path: "#/theater/home", match: (hash) => hash.startsWith("#/theater") || hash.startsWith("#/world") || hash.startsWith("#/author") || hash.startsWith("#/search") },
    { label: "Drama", path: "#/drama/home", match: (hash) => hash.startsWith("#/drama") || hash.startsWith("#/play") },
    { label: "幕后", path: "#/messages/story", match: (hash) => hash.startsWith("#/messages/story") || hash === "#/messages/detail" }
  ];
  const showHeadSearch = (!isCommunityRoute && !isMessageRoute && !isMeRoute && !isWorkshopRoute) || currentHash === "#/community/search";
  const isSearchResultRoute = currentHash === "#/search/results" || currentHash === "#/community/search";
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
  const activeSearchPanelOpen = isCommunitySearchContext ? uiState.communitySearchPanelOpen : uiState.searchPanelOpen;
  const activeSearchMode = isCommunitySearchContext ? "community" : "global";
  const pageTitleActionHtml = currentHash === "#/messages/story/settings"
    ? `<button class="page-title-action backstage-settings-save-btn" data-action="save-backstage-settings">保存</button>`
    : currentHash === "#/messages/story/publish"
      ? `<button class="page-title-action backstage-settings-save-btn" data-action="publish-dynamic" ${uiState.dynamicPublishing ? "disabled" : ""}>${uiState.dynamicPublishing ? "发布中..." : "发布"}</button>`
      : `<span class="page-title-spacer"></span>`;
  const mobileAddon = mobileAddonHtml.trim();
  const mobileAddonForRender = showMobileTopBar ? mobileAddon : "";

  if (isPlayRoute) {
    return `
      <div class="play-route-host">
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
            <img class="xh-mobile-home-logo" src="/assets/logo-v3.png" alt="爪马 Logo" loading="eager" fetchpriority="high" />
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
            <button class="xh-mobile-top-search-btn ${activeSearchPanelOpen ? "active" : ""}" data-action="open-search-panel" aria-label="搜索">⌕</button>
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
    <div class="xh-mobile-search-host">
      ${
        showMobileTopBar && ((showHeadSearch || isCommunityRoute))
          ? (isCommunityRoute
              ? (uiState.communitySearchPanelOpen ? renderSearchPanel("community") : "")
              : (activeSearchPanelOpen ? renderSearchPanel(activeSearchMode) : ""))
          : ""
      }
    </div>

    <section class="xh-shell ${isMessageFullRoute ? "xh-shell-message" : ""} ${showMobileTopBar ? "mobile-top-visible" : ""} ${isTopNavLinkedRoute ? "top-nav-linked" : ""} ${isBackstageRoute ? "is-backstage-route" : ""}">
      <aside class="xh-left">
        <div class="xh-logo"><img src="/assets/logo-v3.png" alt="爪马 Logo" loading="eager" fetchpriority="high" /></div>
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
                ? `<button class="xh-avatar-btn logged" data-action="open-self-profile">${getAvatarText(uiState.profile.name)}</button>`
                : `<button class="xh-avatar-btn guest" data-action="open-login-modal">👤</button>`
            }
          </div>
          ${
            !showHeadSearch
              ? `<div></div>`
              : `
            <div class="xh-search-wrap" data-action="noop">
              <div class="xh-search" data-action="open-search-panel">
                <input class="xh-mobile-search-input" value="${escapeHtml(activeSearchQuery)}" placeholder="搜索世界/主题/设定/作者" />
                ${
                  isSearchResultRoute
                    ? `<button class="xh-search-submit xh-search-close-btn" data-action="cancel-search-results">×</button>`
                    : `<button class="xh-search-submit" data-action="submit-search">⌕</button>`
                }
              </div>
              ${activeSearchPanelOpen ? renderSearchPanel(activeSearchMode) : ""}
            </div>
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
        <button class="xh-mobile-bottom-item ${isMobileMessageActive ? "active" : ""}" data-go="#/messages/chat">消息</button>
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

function renderSearchPanel(mode = "global") {
  const isCommunity = mode === "community";
  const query = isCommunity ? uiState.communitySearchQuery : uiState.searchQuery;
  const history = isCommunity ? uiState.communitySearchHistory : uiState.searchHistory;
  const cursor = isCommunity ? uiState.communityHotSearchCursor : uiState.hotSearchCursor;
  const activeHot = getHotSearchBatch(cursor);
  const suggestions = query.trim()
    ? (isCommunity ? searchCommunityList(query, 6) : searchFeed(query, 6)).map((item) => item.title || item.name)
    : [];

  return `
    <div class="xh-search-dropdown" data-action="noop">
        ${
          isCommunity
            ? ""
            : `
        <div class="xh-mobile-search-row">
          <input class="xh-mobile-search-input" value="${escapeHtml(query)}" placeholder="搜索世界/主题/设定/作者" />
          <button data-action="submit-search">搜索</button>
        </div>
        `
        }
        <div class="xh-search-block">
          <div class="xh-search-block-head">
            <h4>历史搜索</h4>
            <button data-action="clear-search-history">清空</button>
          </div>
          <div class="xh-search-history">
            ${history.map((x) => `<button data-action="apply-search-term" data-term="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")}
          </div>
        </div>

        <div class="xh-search-block">
          <div class="xh-search-block-head">
            <h4>热门搜索</h4>
            <button data-action="rotate-hot-search">换一换</button>
          </div>
          <ol class="xh-search-hot-list">
            ${activeHot
              .map(
                (term, idx) => `
              <li>
                <span class="rank ${idx === 0 ? "hot" : ""}">${idx + 1}</span>
                <button data-action="apply-search-term" data-term="${escapeHtml(term)}">${escapeHtml(term)}${idx === 0 ? ' <em>热</em>' : ""}</button>
              </li>
            `
              )
              .join("")}
          </ol>
        </div>

        ${
          suggestions.length
            ? `
          <div class="xh-search-block">
            <div class="xh-search-block-head">
              <h4>搜索建议</h4>
            </div>
            <div class="xh-search-suggest">
              ${suggestions.map((x) => `<button data-action="apply-search-term" data-term="${escapeHtml(x)}">${escapeHtml(x)}</button>`).join("")}
            </div>
          </div>
        `
            : ""
        }
      </div>
  `;
}

function pageSearchResults() {
  return renderExploreShell(renderSearchResultSection());
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
        <div class="search-mobile-global-field xh-search" data-action="open-search-panel">
          <input class="xh-mobile-search-input search-mobile-global-input" value="${escapeHtml(q)}" placeholder="搜索世界/主题/设定/作者" />
          <button class="xh-search-submit" data-action="submit-search">搜索</button>
        </div>
        <button class="search-mobile-global-close" data-action="cancel-search-results" aria-label="返回">×</button>
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
        <div class="search-author-list">
          ${authors
            .map(
              (a) => `
            <article class="search-author-item" data-action="open-user-modal" data-user="${a.name}">
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
          : renderDramaStoryDeck(
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
            <img src="/assets/logo-v3.png" alt="爪马 Logo" loading="eager" fetchpriority="high" />
            <h1>爪马 Drama</h1>
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
          <div class="login-mini-brand"><img src="/assets/logo-v3.png" alt="爪马 Logo" loading="eager" fetchpriority="high" /><span>爪马 Drama</span></div>
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
  return `
    <div class="profile-edit-modal-overlay" data-action="close-profile-edit-modal">
      <div class="profile-edit-modal-card" data-action="noop">
        <div class="profile-edit-modal-head">
          <button class="profile-edit-head-btn" data-action="close-profile-edit-modal">返回</button>
          <h3>编辑资料</h3>
          <button class="profile-edit-head-btn primary" data-action="save-profile-edit-modal">保存</button>
        </div>
        <section class="profile-edit-modal-body">
          <div class="user-profile-edit-box">
            <label>昵称<input class="profile-edit-input" data-field="name" value="${escapeHtml(draft.name)}" /></label>
            <label>简介标签<input class="profile-edit-input" data-field="handle" value="${escapeHtml(draft.handle)}" /></label>
            <label>个人介绍<textarea class="profile-edit-input profile-edit-textarea" data-field="bio">${escapeHtml(draft.bio)}</textarea></label>
            <div class="user-profile-cover-tools">
              <span>顶部背景</span>
              <div class="actions">
                <button class="user-edit-btn subtle" data-action="me-hero-cover-upload">上传背景</button>
                <button class="user-edit-btn subtle" data-action="me-hero-cover-reset">恢复默认</button>
              </div>
              <input class="me-hero-cover-input" type="file" accept="image/*" data-field="me-hero-cover-file" />
            </div>
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
  return `
    <div class="avatar-preview-overlay" data-action="close-profile-avatar-preview">
      <div class="avatar-preview-modal" data-action="noop">
        <button class="avatar-preview-close" data-action="close-profile-avatar-preview" aria-label="关闭">×</button>
        <div class="avatar-preview-bubble">${escapeHtml(avatarText)}</div>
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

function buildWorldShareMessage(world = getSelectedWorld()) {
  const title = String(world?.title || "这张故事卡");
  const descRaw = String(world?.desc || "").trim();
  const desc = descRaw.length > 64 ? `${descRaw.slice(0, 64)}...` : descRaw;
  const link = buildWorldShareUrl(world);
  return `${title}\n${desc || "来看看这张故事卡"}\n${link}`;
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
              <strong>生成卡片分享链接</strong>
              <small>点击后复制当前卡片网址</small>
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
  const world = getSelectedWorld();
  const link = buildWorldShareUrl(world);
  return `
    <div class="world-share-image-overlay" data-action="close-world-share-image">
      <section class="world-share-image-modal" data-action="noop">
        <header class="world-share-image-head">
          <h3>分享</h3>
          <button data-action="close-world-share-image" aria-label="关闭">×</button>
        </header>
        <p>保存下方图片或复制链接即可分享给好友</p>
        <article class="world-share-poster">
          <div class="world-share-poster-cover" style="background:${getWorldCoverStyle(world, world?.id || world?.title || "share")};"></div>
          <div class="world-share-poster-body">
            <h4>${escapeHtml(world?.title || "未命名故事卡")}</h4>
            <p>${escapeHtml((world?.desc || "和我一起玩这个故事吧").slice(0, 120))}</p>
            <div class="world-share-poster-meta">
              <span>${escapeHtml(world?.author || "Drama 用户")}</span>
              <span>${escapeHtml(world?.theme || "主题")}</span>
              <span>${escapeHtml(world?.format || "模式")}</span>
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

function renderHomeCard(item) {
  return `
    <article class="home-card" data-action="open-world-detail" data-id="${item.id}">
      <div class="home-cover" style="background:${item.cover};"></div>
      <div class="home-body">
        ${item.isTest ? `<div class="home-test-badge">TEST可玩</div>` : ""}
        <h4>${item.title}</h4>
        <div class="home-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="home-author">${item.author}</div>
        <div class="home-metrics"><span>♡ ${item.like}</span><span>☆ ${item.star}</span><span>💬 ${item.comment}</span><span>🔥 ${item.heat}</span></div>
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
            return `
        <article class="home-card drama-story-card" data-action="${action}" data-id="${getSafeWorldId(item.id, idx)}">
          <div class="home-cover" style="background:${coverStyle};background-size:cover;background-position:center;"></div>
          <div class="home-body">
            ${item.isTest ? `<div class="home-test-badge">TEST可玩</div>` : ""}
            <h4>${item.title}</h4>
            <div class="home-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <div class="home-author">${item.author}</div>
            <div class="home-metrics"><span>♡ ${item.like}</span><span>☆ ${item.star}</span><span>💬 ${item.comment}</span><span>🔥 ${item.heat}</span></div>
          </div>
        </article>
      `;
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

function getWorldImageUrl(world, seed = "") {
  const candidates = [
    world?.cover,
    world?.coverUrl,
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

function allDynamicItems() {
  return [...uiState.dynamicPosts, ...DYNAMIC_FEED];
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
      commentsCount: Number(item.comments) || 0,
      commentsLoaded: false,
      commentsLoading: false,
      comments: []
    };
  }
  return uiState.dynamicMeta[item.id];
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

    const genderOk = (uiState.communityFilterGender === "不限" || uiState.communityFilterGender === "不限频向")
      ? true
      : item.gender === uiState.communityFilterGender;

    const timeLimit = uiState.communityFilterTime === "全部时间"
      ? Number.POSITIVE_INFINITY
      : uiState.communityFilterTime === "24小时"
        ? 24
        : uiState.communityFilterTime === "3天"
          ? 72
          : uiState.communityFilterTime === "7天"
            ? 168
            : 720;
    const timeOk = item.updatedHours <= timeLimit;

    const sizeOk = matchCommunitySize(item.memberCount, uiState.communityFilterSize);
    return themeOk && genderOk && timeOk && sizeOk;
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
  return `
    <div class="xh-filter-row">
      <button class="xh-filter-label ${current === group.label ? "active" : ""}" data-action="community-filter-change" data-key="${group.key}" data-value="${group.label}">${group.label}</button>
      ${group.options
        .map(
          (option) => `
        <button class="xh-filter-option ${current === option ? "active" : ""}" data-action="community-filter-change" data-key="${group.key}" data-value="${option}">${option}</button>
      `
        )
        .join("")}
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
          const tags = (x.tags || []).slice(0, 3);
          const cover = getCommunityCardCover(x, i);
          const maskOpacity = typeof x.maskOpacity === "number" ? x.maskOpacity : 0.34;
          return `
            <article class="community-mini-card" style="--community-cover:${cover};--community-mask-opacity:${maskOpacity};" data-action="open-community-group" data-id="${x.id}">
              <div class="community-mini-cover"></div>
              <div class="head">
                <div class="avatar">${avatarText}</div>
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

function getSelectedCommunity() {
  return COMMUNITY_LIST.find((x) => x.id === uiState.selectedCommunityId) || COMMUNITY_LIST[0];
}

function getCommunityPosts(cid) {
  return COMMUNITY_POSTS[cid] || [];
}

function getSelectedCommunityPost() {
  const c = getSelectedCommunity();
  const all = [...getCommunityPosts(c.id)];
  return all.find((x) => x.id === uiState.selectedCommunityPostId) || all[0] || null;
}

function ensureCommunityPostMeta(post) {
  if (!post) return null;
  if (!uiState.communityPostMeta[post.id]) {
    uiState.communityPostMeta[post.id] = {
      liked: false,
      starred: false,
      shared: false,
      likes: post.likes || 0,
      stars: post.stars || 0,
      commentsCount: post.comments || 0,
      comments: [
        { user: "夜航", text: "路线图太有用了，今晚就组队试。", likes: 56 },
        { user: "青木", text: "能否补一份低配船只的跑图建议？", likes: 34 },
        { user: "雾汐", text: "已实测，补给点B在暴风时段更稳。", likes: 19 }
      ]
    };
  }
  return uiState.communityPostMeta[post.id];
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
  const resolved = byId || byName;
  const stats = resolved?.stats || {};
  return {
    id: resolved?.id || safeAuthorId || "",
    name: resolved?.name || safeName,
    handle: resolved?.handle || toHandle(safeName),
    bio: resolved?.bio || works[0]?.tags?.join(" · ") || "热爱创作与互动剧情",
    isFollowedByMe: Boolean(resolved?.followedByMe),
    stats: {
      fans: formatMetricCount(stats.fansCount || 0),
      follows: formatMetricCount(stats.followsCount || 0),
      works: formatMetricCount(stats.worksCount ?? works.length)
    },
    likes: [],
    favorites: []
  };
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

function openAuthorProfileByName(name = "") {
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
  const resolvedAuthorId = resolveAuthorIdByName(resolved);
  uiState.meViewedUserId = resolvedAuthorId;
  uiState.meViewedUserName = resolved;
  persistViewedProfile();
  uiState.modalProfile = buildAuthorProfileByName(resolved, resolvedAuthorId);
  uiState.isFollowingAuthor = Boolean(uiState.modalProfile?.isFollowedByMe);
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

function getWorldProfile(world = getSelectedWorld()) {
  const w = world || FEED_DATA[0];
  const preset = TEST_WORLD_PROFILES[w?.id];
  if (preset) return preset;
  const chapter = String(w?.chapter || w?.chapterLabel || "").trim();
  const mainQuest = String(w?.mainQuest || w?.main_quest || "").trim();
  const npc = String(w?.npc || w?.keyNpc || w?.key_npc || "").trim();
  const clues = String(w?.clues || w?.keyClues || w?.key_clues || "").trim();
  const openingSummary = String(w?.openingSummary || w?.opening_summary || "").trim();
  const overview = String(w?.overview || "").trim();
  const summary = String(w?.summary || "").trim();
  if (chapter || mainQuest || npc || clues || openingSummary || overview || summary) {
    return {
      chapter: chapter || "序幕",
      hint: String(w?.playHook || w?.play_hook || `先围绕“${w?.theme || "核心主题"}”做小步试探，再决定是否强推进主线。`),
      mainQuest: mainQuest || `推进《${w?.title || "当前世界"}》主线并锁定关键胜负手`,
      npc: npc || "关键角色（待接触）",
      clues: clues || "",
      statline: String(w?.statline || `世界热度 ${80 + (hashText(w?.id) % 18)} · 连载中 · ${((4 + (hashText(w?.title) % 80)) / 10).toFixed(1)}万人在追`),
      intro: [summary, overview].filter(Boolean),
      opening: openingSummary ? [openingSummary] : []
    };
  }
  return {
    chapter: "序幕",
    hint: `先围绕“${w?.theme || "核心主题"}”做小步试探，再决定是否强推进主线。`,
    mainQuest: `推进《${w?.title || "当前世界"}》主线并锁定关键胜负手`,
    npc: "关键角色（待接触）",
    clues: "",
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
    const prev = map.get(item.author) || { name: item.author, count: 0, heat: 0 };
    prev.count += 1;
    prev.heat += Number.parseFloat(item.heat.replace("w", "")) || 0;
    map.set(item.author, prev);
  });
  const arr = [...map.values()].sort((a, b) => b.count - a.count || b.heat - a.heat);
  if (!query.trim()) return arr.slice(0, 12).map((x) => ({ ...x, heat: `${x.heat.toFixed(1)}w` }));
  return arr.slice(0, 12).map((x) => ({ ...x, heat: `${x.heat.toFixed(1)}w` }));
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

function executeSearch(term) {
  const q = term.trim();
  if (!q) return;
  const isCommunitySearchFlow = window.location.hash.startsWith("#/community");
  if (isCommunitySearchFlow) {
    uiState.communitySearchQuery = q;
    uiState.communitySearchPanelOpen = false;
    uiState.communitySearchTab = "综合";
    uiState.communitySearchSort = "相关度";
    uiState.communitySearchHistory = [q, ...uiState.communitySearchHistory.filter((x) => x !== q)].slice(0, 8);
  } else {
    uiState.searchQuery = q;
    uiState.searchPanelOpen = false;
    uiState.searchResultTab = "全部";
    uiState.searchSubTab = "综合";
    uiState.searchSort = "相关度";
    uiState.searchHistory = [q, ...uiState.searchHistory.filter((x) => x !== q)].slice(0, 8);
  }
  const target = isCommunitySearchFlow ? "#/community/search" : "#/search/results";
  if (window.location.hash !== target) {
    window.location.hash = target;
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
  const heroPromos = [
    {
      title: "逆风局",
      subtitle: "长玉遇袭中迷药，谢征出手霸气护妻！",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80"
    },
    {
      title: "玻璃列车",
      subtitle: "密闭空间对峙，真相在第7回合突然反转",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80"
    },
    {
      title: "凌晨四点的电话",
      subtitle: "都市悬疑高能开局，三分钟进入主线冲突",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80"
    }
  ];
  const heroIndex = ((uiState.dramaHeroIndex % heroPromos.length) + heroPromos.length) % heroPromos.length;
  const hero = heroPromos[heroIndex];
  return renderExploreShell(`
    <section class="drama-home drama-home-vision">
      <article class="drama-hero-stage">
        <div class="drama-hero-visual" style="background-image:linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.55)),url('${hero.image}');">
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
  const heroSlidesRaw = [
    getWorldImageUrl(world, `${world.id || world.title}-primary`),
    getDramaFallbackImage(`${world.id || world.title}-alt-1`),
    getDramaFallbackImage(`${world.id || world.title}-alt-2`)
  ].filter(Boolean);
  const heroSlides = heroSlidesRaw.length
    ? heroSlidesRaw
    : ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"];
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
  const worldCommentState = getWorldCommentState(world?.id, toMetricCount(world?.comment));
  ensureWorldCardCommentsLoaded(world);
  const worldCommentDraft = getWorldCommentDraft(world?.id);
  const currentUserName = String(uiState.profile?.name || (uiState.isLoggedIn ? "我" : "游客"));
  const currentUserAvatar = getAvatarText(currentUserName);
  const likeFxClass = isWorldActionFxActive("like") ? "tap-pop" : "";
  const favoriteFxClass = isWorldActionFxActive("favorite") ? "tap-pop" : "";
  const followFxClass = isWorldActionFxActive("follow") ? "tap-pop" : "";
  const tipFxClass = isWorldActionFxActive("tip") ? "tip-anim" : "";

  return renderExploreShell(`
    <section class="world-page world-rich">
      <div class="world-hero world-carousel">
        <button class="world-hero-back-float unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <div class="world-hero-nav">
          <button class="world-hero-share" data-action="open-world-share" aria-label="分享">分享</button>
        </div>
        <img src="${currentSlide}" alt="${world.title}" />
        <div class="world-hero-copy">
          <h1>${world.title}</h1>
          <p class="world-statline">${escapeHtml(profile.statline)}</p>
          <section class="world-author-inline world-author-inline-hero">
            <div class="world-author-inline-strip">
              <button class="world-author-avatar user-link" data-action="open-user-modal" data-user="${world.author}">${getAvatarText(world.author)}</button>
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
        <div class="world-comment-input">
          <button class="avatar user-link world-comment-self-avatar" data-action="${uiState.isLoggedIn ? "open-self-profile" : "open-login-modal"}">${escapeHtml(currentUserAvatar)}</button>
          <input data-field="world-comment-draft" value="${escapeHtml(worldCommentDraft)}" placeholder="说点什么..." />
          <button class="world-comment-send-btn" data-action="world-comment-submit">${worldCommentState?.submitting ? "发送中..." : "发送"}</button>
        </div>
        ${worldCommentState?.loading ? `<p class="world-comments-loading">评论加载中...</p>` : ""}
        ${worldCommentState?.error ? `<p class="world-comments-error">评论加载失败：${escapeHtml(worldCommentState.error)}</p>` : ""}
        ${
          Array.isArray(worldCommentState?.comments) && worldCommentState.comments.length
            ? worldCommentState.comments
              .map((c) => `
              <article class="world-comment-item ${worldCommentState?.activeReplyCommentId === String(c.id || "") ? "is-replying" : ""}">
                <button class="avatar user-link" data-action="open-user-modal" data-user="${escapeHtml(c.user || "玩家")}">${escapeHtml(getAvatarText(String(c.user || "玩家")))}</button>
                <div class="world-comment-body">
                  <div class="meta" data-action="world-comment-open-reply" data-id="${escapeHtml(c.id || "")}">${escapeHtml(c.user || "玩家")} · ${escapeHtml(formatWorldCommentTime(c.createdAt || c.time || ""))}</div>
                  <p class="world-comment-text" data-action="world-comment-open-reply" data-id="${escapeHtml(c.id || "")}">${escapeHtml(c.text || "")}</p>
                  <div class="world-comment-actions">
                  <button
                    class="world-comment-like-btn ${c.likedByMe ? "active" : ""}"
                    data-action="world-comment-like"
                    data-id="${escapeHtml(c.id || "")}"
                    data-liked="${c.likedByMe ? "1" : "0"}"
                    ${worldCommentState?.likingByCommentId?.[c.id] ? "disabled" : ""}
                  >♡ ${formatMetricCount(c.likes || 0)}</button>
                    <button class="world-comment-reply-btn" data-action="world-comment-open-reply" data-id="${escapeHtml(c.id || "")}">回复</button>
                    ${
                      String(c.userId || "") === String(uiState.currentUserId || "")
                        ? `<button class="world-comment-delete-btn" data-action="world-comment-delete" data-id="${escapeHtml(c.id || "")}" ${worldCommentState?.deletingByCommentId?.[c.id] ? "disabled" : ""}>${worldCommentState?.deletingByCommentId?.[c.id] ? "删除中..." : "删除"}</button>`
                        : ""
                    }
                  </div>
                  ${
                    Array.isArray(c.replies) && c.replies.length
                      ? `
                    <div class="world-reply-list">
                      ${c.replies
                        .map((r) => `
                          <div class="world-reply-item">
                            <button class="avatar world-reply-avatar user-link" data-action="open-user-modal" data-user="${escapeHtml(r.user || "玩家")}">${escapeHtml(getAvatarText(String(r.user || "玩家")))}</button>
                            <div class="world-reply-main">
                              <div class="meta">${escapeHtml(r.user || "玩家")} · ${escapeHtml(formatWorldCommentTime(r.createdAt || r.time || ""))}</div>
                              <p>${escapeHtml(r.text || "")}</p>
                              ${
                                String(r.userId || "") === String(uiState.currentUserId || "")
                                  ? `<button class="world-comment-delete-btn small" data-action="world-comment-delete" data-id="${escapeHtml(r.id || "")}" ${worldCommentState?.deletingByCommentId?.[r.id] ? "disabled" : ""}>${worldCommentState?.deletingByCommentId?.[r.id] ? "删除中..." : "删除"}</button>`
                                  : ""
                              }
                            </div>
                          </div>
                        `)
                        .join("")}
                    </div>
                  `
                      : ""
                  }
                  ${
                    worldCommentState?.activeReplyCommentId === String(c.id || "")
                      ? `
                    <div class="world-reply-editor">
                      <input data-field="world-reply-draft" data-comment-id="${escapeHtml(c.id || "")}" value="${escapeHtml(String(worldCommentState?.replyDraftByCommentId?.[c.id] || ""))}" placeholder="回复 ${escapeHtml(c.user || "玩家")}..." />
                      <button class="ghost" data-action="world-comment-reply-cancel">取消</button>
                      <button class="primary" data-action="world-comment-reply-submit" data-id="${escapeHtml(c.id || "")}" ${worldCommentState?.submittingReplyByCommentId?.[c.id] ? "disabled" : ""}>${worldCommentState?.submittingReplyByCommentId?.[c.id] ? "发送中..." : "发送"}</button>
                    </div>
                  `
                      : ""
                  }
                </div>
              </article>
            `)
              .join("")
            : `<p class="world-comments-empty">还没有评论，来抢首评吧。</p>`
        }
      </section>

      <div class="world-detail-floatbar" aria-label="剧情操作栏">
        <div class="world-detail-floatbar-left">
          <button class="world-detail-floatbar-btn ghost" data-action="noop">功能1</button>
          <button class="world-detail-floatbar-btn ghost" data-action="noop">功能2</button>
        </div>
        <button class="world-detail-floatbar-btn start" data-go="#/play/core">开始抓马</button>
      </div>
    </section>
  `);
}

function pageAuthorDetail() {
  const currentWorld = getSelectedWorld();
  const profile = uiState.modalProfile || buildAuthorProfileByName(currentWorld?.author || "Drama 用户", currentWorld?.authorId || "");
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
  const activeFeed = feedByTab[activeTab] || [];
  const isActiveFeedEmpty = activeFeed.length === 0;
  return renderExploreShell(`
    <section class="world-page user-page">
      <article class="user-profile-head ios-card">
        <div class="user-profile-main">
          <div class="user-profile-avatar">${getAvatarText(profile.name)}</div>
          <div class="user-profile-meta">
            <h2>${escapeHtml(profile.name)}</h2>
            <p>${escapeHtml(profile.handle)}</p>
            <div class="user-profile-stats">
              <span><b>${stats.fans}</b> 粉丝</span>
              <span><b>${stats.follows}</b> 关注</span>
              <span><b>${stats.works}</b> 作品</span>
            </div>
          </div>
          <div class="user-profile-actions">
            <button class="user-follow-btn ${isFollowing ? "active" : ""}" data-action="toggle-follow-author">
              ${isFollowing ? "已关注" : "+ 关注"}
            </button>
            <button class="user-dm-btn" data-action="open-author-dm" data-user="${escapeHtml(profile.name)}" data-user-id="${escapeHtml(profile.id || "")}">私聊</button>
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
  const id = String(hit?.id || "").trim();
  return isUuid(id) ? id : "";
}

function getActiveConversationId() {
  const selected = String(uiState.selectedMessageId || "").trim();
  if (isUuid(selected)) return selected;
  const fallback = MESSAGE_INBOX.find((x) => isUuid(x.id));
  return fallback?.id || "";
}

function moveMessageToTop(messageId) {
  const index = MESSAGE_INBOX.findIndex((x) => x.id === messageId);
  if (index <= 0) return;
  const [item] = MESSAGE_INBOX.splice(index, 1);
  MESSAGE_INBOX.unshift(item);
}

function markMessageRead(messageId) {
  const item = getMessageInboxItem(messageId);
  if (!item) return;
  item.badge = 0;
}

function updateMessageInboxPreview(messageId, preview, options = {}) {
  const item = getMessageInboxItem(messageId);
  if (!item) return;
  item.preview = preview;
  item.time = String(options.time || "").trim() || nowClockText();
  moveMessageToTop(messageId);
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
  }
  return false;
}

async function syncMessageInbox() {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return false;
  const data = await apiGetJson(`/messages/inbox?userId=${encodeURIComponent(uiState.currentUserId)}&limit=80&_ts=${Date.now()}`);
  const next = Array.isArray(data?.inbox) ? data.inbox : [];
  if (!messageInboxChanged(MESSAGE_INBOX, next)) return false;
  replaceArray(MESSAGE_INBOX, next);
  const activeId = String(uiState.selectedMessageId || "").trim();
  if (!activeId || !MESSAGE_INBOX.some((x) => x.id === activeId)) {
    uiState.selectedMessageId = MESSAGE_INBOX[0]?.id || "";
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
    updateMessageInboxPreview(messageId, text, { time: resolvedTime });
    markMessageRead(messageId);
  } else {
    const item = getMessageInboxItem(messageId);
    if (!item) return;
    item.preview = text;
    item.time = resolvedTime;
    item.badge = (Number(item.badge) || 0) + 1;
    moveMessageToTop(messageId);
  }
}

function upsertThreadMessageFromServer(messageId, row, currentUserId) {
  if (!messageId || !row) return false;
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
  return rows.map((row) => ({
    id: String(row?.id || ""),
    from: String(row?.sender_id || "") === String(currentUserId || "") ? "me" : "other",
    type: String(row?.message_type || "text"),
    payload: row?.payload && typeof row.payload === "object" ? row.payload : {},
    text: String(row?.content || ""),
    time: formatThreadClock(row?.created_at),
    createdAt: String(row?.created_at || ""),
    read: Boolean(row?.read_by_peer)
  }));
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

async function syncActiveConversationThread() {
  if (!uiState.isLoggedIn || !uiState.currentUserId) return false;
  const currentHash = window.location.hash || "";
  if (!currentHash.startsWith("#/messages/thread")) return false;
  const activeId = getActiveConversationId();
  if (!activeId || !isUuid(activeId)) return false;
  const payload = await fetchThreadMessages(activeId, uiState.currentUserId, 120);
  const prevPeer = uiState.messagePeerPresence[activeId] || null;
  const rows = payload.messages || [];
  if (payload.peer) {
    uiState.messagePeerPresence[activeId] = payload.peer;
  }
  const peerChanged = peerPresenceChanged(prevPeer, uiState.messagePeerPresence[activeId] || null);
  const next = toThreadViewMessages(rows, uiState.currentUserId);
  const prev = ensureMessageThread(activeId);
  if (!threadViewChanged(prev, next)) return peerChanged;
  uiState.messageThreads[activeId] = next;
  const latest = next[next.length - 1];
  if (latest?.text) {
    updateMessageInboxPreview(activeId, latest.text);
    if (latest.from === "me") markMessageRead(activeId);
  }
  return true;
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
  if (!MESSAGE_INBOX.some((x) => x.id === conversationId)) {
    MESSAGE_INBOX.unshift({
      id: conversationId,
      name: String(targetName || "私聊会话").trim() || "私聊会话",
      preview: "",
      type: "私聊",
      time: "刚刚",
      badge: 0
    });
  }
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
    if (window.location.hash !== "#/messages/thread") window.location.hash = "#/messages/thread";
    else render();
    void syncActiveConversationThread()
      .then((changed) => {
        if (changed) render();
      })
      .catch(() => {});
  } else {
    render();
  }
  void bootstrapClientDataFull(uiState.currentUserId)
    .then(() => {
      uiState.bootstrapFullLoaded = true;
      render();
    })
    .catch(() => {});
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

function scrollPlayTurnToTop() {
  requestAnimationFrame(() => {
    const latestAction = document.querySelector(".play-log .play-log-action:last-of-type");
    if (latestAction instanceof HTMLElement) {
      latestAction.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
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
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      ...fetchOptions
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
    throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
  }
  return data;
}

async function apiGetJson(path) {
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      cache: "no-store",
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
    throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
  }
  return data;
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
    throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
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

async function createDynamicPostAndSync({ title, text, type }) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const postType = type === "视频" ? "video" : type === "故事卡" ? "story_card" : type === "文字" ? "text" : "image";
  const data = await apiJson("/posts", {
    authorId: uiState.currentUserId,
    postType,
    title,
    content: text,
    linkedWorldCardId: getSelectedWorld()?.id || null
  });
  const row = data?.post;
  if (!row?.id) throw new Error("POST_CREATE_FAILED");
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
    worldId: row.linked_world_card_id || getSelectedWorld()?.id || null
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

function prependDynamicItemInPayload(payload, dynamicItem) {
  if (!payload || typeof payload !== "object" || !dynamicItem?.id) return false;
  const list = Array.isArray(payload.dynamicFeed) ? payload.dynamicFeed : [];
  const deduped = list.filter((x) => String(x?.id || "") !== String(dynamicItem.id));
  payload.dynamicFeed = [dynamicItem, ...deduped].slice(0, 120);
  return true;
}

function persistDynamicItemToCache(dynamicItem) {
  try {
    const rawCore = localStorage.getItem(BOOTSTRAP_CORE_CACHE_KEY);
    if (rawCore) {
      const core = JSON.parse(rawCore);
      if (prependDynamicItemInPayload(core, dynamicItem)) {
        localStorage.setItem(BOOTSTRAP_CORE_CACHE_KEY, JSON.stringify(core));
      }
    }
  } catch {}
  try {
    const uid = String(uiState.currentUserId || "").trim();
    if (!uid) return;
    const fullKey = `${BOOTSTRAP_FULL_CACHE_PREFIX}${uid}`;
    const rawFull = localStorage.getItem(fullKey);
    if (!rawFull) return;
    const full = JSON.parse(rawFull);
    if (prependDynamicItemInPayload(full, dynamicItem)) {
      localStorage.setItem(fullKey, JSON.stringify(full));
    }
  } catch {}
}

function persistWorldMetricsToCache(worldCardId, patch = {}) {
  try {
    const rawCore = localStorage.getItem(BOOTSTRAP_CORE_CACHE_KEY);
    if (rawCore) {
      const core = JSON.parse(rawCore);
      if (patchWorldMetricsInPayload(core, worldCardId, patch)) {
        localStorage.setItem(BOOTSTRAP_CORE_CACHE_KEY, JSON.stringify(core));
      }
    }
  } catch {}
  try {
    const uid = String(uiState.currentUserId || "").trim();
    if (!uid) return;
    const fullKey = `${BOOTSTRAP_FULL_CACHE_PREFIX}${uid}`;
    const rawFull = localStorage.getItem(fullKey);
    if (!rawFull) return;
    const full = JSON.parse(rawFull);
    if (patchWorldMetricsInPayload(full, worldCardId, patch)) {
      localStorage.setItem(fullKey, JSON.stringify(full));
    }
  } catch {}
}

function syncWorldCardMetricsAndCache(worldCardId, patch = {}) {
  syncWorldCardMetrics(worldCardId, patch);
  persistWorldMetricsToCache(worldCardId, patch);
  persistWorldInteractionState(worldCardId, patch);
}

function syncWorldStateEverywhere(worldCardId, patch = {}) {
  syncWorldCardMetricsAndCache(worldCardId, patch);
}

function reconcileWorldReactionsInBackground() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid) return;
  void bootstrapClientDataFull(uid)
    .then(() => {
      uiState.bootstrapFullLoaded = true;
      overlayWorldInteractionsForCurrentUser();
      render();
    })
    .catch(() => {});
}

let worldReactionFlushRunning = false;
async function flushPendingWorldReactions() {
  const uid = String(uiState.currentUserId || "").trim();
  if (!uid || worldReactionFlushRunning) return;
  const bucket = readPendingWorldReactions(uid);
  const jobs = Object.values(bucket || {});
  if (!jobs.length) return;
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
          syncWorldStateEverywhere(worldCardId, {
            liked: Boolean(stats.likedByMe),
            favorited: Boolean(stats.favoritedByMe),
            like: formatMetricCount(stats.likesCount),
            star: formatMetricCount(stats.favoritesCount)
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
  return data?.stats || null;
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

async function setDynamicReaction(postId, reactionType, active) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/reaction", {
    postId,
    userId: uiState.currentUserId,
    reactionType,
    active
  });
  return data?.post || null;
}

async function loadDynamicComments(postId) {
  const data = await apiGetJson(`/posts/comments?postId=${encodeURIComponent(postId)}&limit=120`);
  return Array.isArray(data?.comments) ? data.comments : [];
}

async function createDynamicCommentAndSync(postId, text) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/posts/comments", {
    postId,
    userId: uiState.currentUserId,
    content: text
  });
  return data?.comment || null;
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
      replyDraftByCommentId: {}
    };
  } else if (!Number.isFinite(Number(uiState.worldCommentsState[id].commentsCount || 0))) {
    uiState.worldCommentsState[id].commentsCount = Number(fallbackCount || 0);
  }
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
  const payload = {
    worldCardId,
    userId: uiState.currentUserId,
    content: text
  };
  const parentId = String(parentCommentId || "").trim();
  if (parentId) payload.parentCommentId = parentId;
  const data = await apiJson("/worldcards/comments", payload);
  return {
    comment: data?.comment || null,
    commentsCount: Number(data?.commentsCount || 0)
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
  return data?.comment || null;
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
  void loadDynamicComments(item.id)
    .then((comments) => {
      meta.comments = comments;
      meta.commentsCount = comments.length;
      meta.commentsLoaded = true;
      meta.commentsLoading = false;
      syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
      render();
    })
    .catch(() => {
      meta.commentsLoaded = true;
      meta.commentsLoading = false;
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
      body: JSON.stringify({ account, password })
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data?.user?.id) {
      throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    }

    await syncUserAfterAuth(data.user.id);

    uiState.showLoginModal = false;
    uiState.loginPassword = "";
    uiState.loginError = "";
    touchAuthLoginNow();
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
      body: JSON.stringify({ account, password, confirmPassword })
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || !data?.user?.id) {
      throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
    }

    await syncUserAfterAuth(data.user.id);

    uiState.showLoginModal = false;
    uiState.accountAuthMode = "login";
    uiState.registerAccount = "";
    uiState.registerPassword = "";
    uiState.registerConfirmPassword = "";
    uiState.loginPassword = "";
    uiState.loginError = "";
    touchAuthLoginNow();
    window.location.hash = consumePostLoginRedirectHash();
  } catch (err) {
    uiState.loginError = err instanceof Error ? err.message : "注册失败，请稍后重试";
  } finally {
    uiState.loginLoading = false;
    render();
  }
}

async function syncUserAfterAuth(userId) {
  const boot = await fetch(`${API_BASE}/bootstrap?mode=full&userId=${encodeURIComponent(userId)}`);
  if (!boot.ok) throw new Error(`BOOTSTRAP_${boot.status}`);
  const payload = await boot.json();
  applyBootstrapData(payload, "full");
  uiState.bootstrapFullLoaded = true;
  try {
    localStorage.setItem(`${BOOTSTRAP_FULL_CACHE_PREFIX}${userId}`, JSON.stringify(payload));
  } catch {}
}

async function ensurePlaySession() {
  if (uiState.playSessionId) return uiState.playSessionId;
  const world = getSelectedWorld();
  const profile = getWorldProfile(world);
  const storyContext = buildStoryContext(world);
  const data = await apiJson("/game/sessions", {
    category: world?.theme || "悬疑",
    subCategory: world?.format || "都市追踪",
    mode: storyContext.mode,
    worldId: world?.id || "",
    worldTitle: world?.title || "",
    chapter: profile.chapter || "序幕",
    storyContext
  });
  const id = data?.session?.id;
  if (!id) throw new Error("SESSION_CREATE_FAILED");
  uiState.playSessionId = id;
  return id;
}

async function submitPlayTurn(actionText, options = {}) {
  const input = String(actionText || "").trim();
  if (!input || uiState.playRequesting) return;
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
    };
    await apiSseJson(
      "/game/turns/stream",
      { sessionId, input, mode: storyContext.mode, storyContext },
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
          throw new Error(err?.message || err?.code || "STREAM_FAILED");
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
      showPlaySystemHint("已保留流式正文，结构化字段将在下一回合继续补全。");
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
    clearPlayPendingEntries();
    const streamedText = String(streamingEntry.text || "").trim();
    uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
    if (streamedText && streamedText !== "...") {
      uiState.playEntries.push({ type: "narrator", text: streamedText });
      showPlaySystemHint("已保留本回合已生成内容。");
    }
    try {
      const sessionId = await ensurePlaySession();
      const data = await apiJson("/game/turns", { sessionId, input, mode: storyContext.mode, storyContext });
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
      showPlaySystemHint("流式不可用，已自动切换普通生成");
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
  }
}

function ensurePlayAutoOpening(world) {
  if (uiState.playAutoOpeningRequested) return;
  if (uiState.playRequesting) return;
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

function showPlaySystemHint(text) {
  const message = String(text || "").trim();
  if (!message) return;
  uiState.playSystemHint = message;
  render();
  setTimeout(() => {
    if (uiState.playSystemHint === message) {
      uiState.playSystemHint = "";
      render();
    }
  }, 1800);
}

function showPlaySystemHintBatch(lines) {
  const queue = (Array.isArray(lines) ? lines : [])
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  if (!queue.length) return;
  queue.forEach((line, index) => {
    setTimeout(() => showPlaySystemHint(line), index * 1900);
  });
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

function renderThreadMessageBubble(message) {
  const type = String(message?.type || "text");
  const cardLike = type === "story_card" || type === "card";
  if (!cardLike) {
    return `<div class="dm-modern-bubble">${escapeHtml(String(message?.text || ""))}</div>`;
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

function pageDirectMessage() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看私信", "查看聊天记录、已读状态和快捷回复。");
  }
  const activeId = getActiveConversationId();
  const chatMeta = MESSAGE_INBOX.find((x) => x.id === activeId) || { id: "", name: "请选择会话", preview: "", type: "私聊", time: "刚刚", badge: 0 };
  const messages = ensureMessageThread(activeId);
  const peerPresence = uiState.messagePeerPresence[activeId] || null;
  const onlineStatusText = formatPeerOnlineStatus(peerPresence);
  const myAvatarText = (uiState.profile?.name || "我").trim().slice(0, 1) || "我";
  return renderExploreShell(`
    <section class="dm-modern-page">
      <article class="dm-modern-shell ${uiState.messageThreadToolsOpen ? "tools-open" : ""}">
        <div class="dm-head">
          <div class="dm-user">
            <button class="dm-back-btn unified-back-btn" data-action="go-back">←</button>
            <div class="dm-avatar user-avatar-click">${chatMeta.name.slice(0, 1)}</div>
            <div>
              <h3>${chatMeta.name}</h3>
              <p>${chatMeta.type === "私聊" ? onlineStatusText : chatMeta.type}</p>
            </div>
          </div>
          <div class="dm-head-actions">
            <button class="dm-more-btn" data-action="toggle-message-thread-menu">◫</button>
            ${
              uiState.messageThreadMenuOpen
                ? `
              <div class="dm-thread-menu" data-action="noop">
                <button data-action="pin-message-thread">置顶会话</button>
                <button data-action="mute-message-thread">免打扰</button>
                <button data-action="clear-message-thread">清空聊天</button>
                <button data-action="open-user-modal" data-user="${chatMeta.name}">查看资料</button>
              </div>
            `
                : ""
            }
          </div>
        </div>
        <div class="dm-modern-messages dm-modern-messages-dark">
          ${messages
            .map(
              (m, idx) => `
            ${
              idx === 0 || messages[idx - 1].time !== m.time
                ? `<div class="dm-time-sep dm-time-sep-dark">${m.time || ""}</div>`
                : ""
            }
            <div class="dm-modern-row ${m.from === "me" ? "right" : "left"}">
              ${m.from === "other" ? `<span class="dm-modern-avatar user-avatar-click">${chatMeta.name.slice(0, 1)}</span>` : ""}
              <div class="dm-modern-bubble-wrap">
                ${renderThreadMessageBubble(m)}
                ${
                  m.from === "me" && !messages.slice(idx + 1).some((x) => x.from === "me")
                    ? `<div class="dm-read-flag">${m.read ? "已读" : "送达"}</div>`
                    : ""
                }
              </div>
              ${m.from === "me" ? `<button class="dm-modern-avatar self dm-self-avatar-btn" data-action="open-self-profile">${escapeHtml(myAvatarText)}</button>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
        <div class="dm-modern-input-wrap dm-modern-input-wrap-dark">
          <button class="dm-plus-btn" data-action="toggle-message-thread-tools">＋</button>
          <input data-field="message-thread-draft" value="${escapeHtml(uiState.messageThreadDraft)}" placeholder="发消息..." />
          <button class="dm-send-btn dm-send-btn-dark" data-action="message-thread-send">发送</button>
        </div>
        ${uiState.messageFeedback ? `<div class="msg-action-feedback">${uiState.messageFeedback}</div>` : ""}
        ${
          uiState.messageThreadToolsOpen
            ? `
          <div class="dm-tools-grid">
            <button data-action="message-tool" data-label="相册">相册</button>
            <button data-action="message-tool" data-label="拍照">拍照</button>
            <button data-action="message-tool" data-label="语音通话">语音通话</button>
            <button data-action="message-tool" data-label="分享笔记">分享笔记</button>
            <button data-action="message-tool" data-label="便利贴">便利贴</button>
            <button data-action="message-tool" data-label="地图">地图</button>
          </div>
        `
            : ""
        }
      </article> 
    </section>
  `);
}

function pagePlayCore() {
  const world = getSelectedWorld();
  const profile = getWorldProfile(world);
  ensurePlayAutoOpening(world);
  const stage = `${Math.min(4, Math.max(1, Math.floor((uiState.playRound + 1) / 2)))}/4`;
  const modelMenuOpen = uiState.playModelMenuOpen || window.location.hash === "#/play/model";
  const roundLabel = `第${uiState.playRound}幕 · ${uiState.playChapter} · 03:17`;
  return `
    <section class="play-shell">
      <header class="play-topbar">
        <button class="play-back-btn" data-action="go-back" aria-label="返回">←</button>
        <div class="play-title-wrap">
          <h1>${escapeHtml(world?.title || "夜港档案")}</h1>
          <p>${roundLabel}</p>
        </div>
        <div class="play-top-actions">
          <button class="play-model-pill" data-action="toggle-play-model">${escapeHtml(uiState.playModel)} ▾</button>
          <button class="play-status-btn" data-action="toggle-play-status">状态</button>
          ${
            modelMenuOpen
              ? `
            <div class="play-model-popover">
              ${["Prose-4", "Prose-4 Lite", "Director-3"].map((model) => `<button class="${uiState.playModel === model ? "active" : ""}" data-action="play-model-select" data-model="${model}">${model}${uiState.playModel === model ? "（当前）" : ""}</button>`).join("")}
            </div>
          `
              : ""
          }
        </div>
      </header>

      <main class="play-main">
        <section class="play-story-card">
          ${uiState.playSystemHint ? `<div class="play-system-hint">${escapeHtml(uiState.playSystemHint)}</div>` : ""}
          ${
            uiState.playStatusExpanded
              ? `
            <div class="play-status-strip">
              <div class="play-status-item"><span>当前任务</span><strong>${escapeHtml(profile.mainQuest)}</strong></div>
              <div class="play-status-item"><span>阶段</span><strong>${stage}</strong></div>
              <div class="play-status-item"><span>NPC</span><strong>${escapeHtml(profile.npc)}</strong></div>
              <div class="play-status-item"><span>关系进展</span><strong>互动推进中</strong></div>
            </div>
          `
              : ""
          }

          <div class="play-log">
            ${uiState.playEntries
              .map((entry) => {
                if (entry.type === "action") return `<div class="play-log-action">你：${escapeHtml(entry.text)}</div>`;
                if (entry.type === "impact") return `<div class="play-log-impact">${escapeHtml(entry.text)}</div>`;
                if (entry.type === "pending") return `<div class="play-log-pending">${escapeHtml(entry.text)}</div>`;
                if (entry.type === "streaming") return `<article class="play-narrative-block is-streaming"><p>${escapeHtml(entry.text)}</p><div class="play-narrative-sep"></div></article>`;
                return `<article class="play-narrative-block"><p>${escapeHtml(entry.text)}</p><div class="play-narrative-sep"></div></article>`;
              })
              .join("")}

            ${
              uiState.playSceneImageReady
                ? `
              <div class="play-scene-card">
                <div class="play-scene-placeholder"></div>
                <p>场景图已生成：雨夜站台，雾重，列车进站</p>
              </div>
            `
                : ""
            }

          </div>
        </section>

      </main>

      <footer class="play-input-dock">
        <button class="play-dock-idea" data-action="play-idea-tips">💡</button>
        <input data-field="play-action-draft" value="${escapeHtml(uiState.playActionDraft)}" placeholder="写下行动，世界会给出代价..." />
        <button class="play-dock-menu" data-action="toggle-play-tools">☰</button>
        <button class="play-dock-send ${uiState.playRequesting ? "is-loading" : ""}" data-action="play-submit-action">${uiState.playRequesting ? "生成中" : "发送"}</button>
      </footer>

      ${
        uiState.playToolsExpanded
          ? `
        <div class="play-tools-sheet-mask" data-action="toggle-play-tools">
          <section class="play-tools-sheet" data-action="noop">
            <div class="play-tools-head">
              <div class="play-tools-grab"></div>
              <strong>功能菜单</strong>
              <button class="play-tools-close" data-action="toggle-play-tools">×</button>
            </div>
            <div class="play-tools-list">
              <button data-action="play-generate-image">文生图（生成本回合场景图）</button>
              <button data-action="play-generate-video">文生视频（即将开放）</button>
              <button data-action="play-export-record">记录（导出 / 复制）</button>
              <button data-action="play-bookmark-turn">标记本回合</button>
              <button data-action="play-random-action">随机行动建议</button>
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
  const safe = String(value || "");
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
}

function normalizeWorkshopDraftForMode(mode = "long_narrative", input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  if (mode === "short_narrative") {
    return {
      openingAnchor: String(raw.openingAnchor || raw.opening_line || "").trim(),
      endingAnchors: String(raw.endingAnchors || raw.ending_anchors || "").trim(),
      fixedNpcs: String(raw.fixedNpcs || raw.fixed_npcs || raw.npcSeeds || "").trim(),
      scopeLimits: String(raw.scopeLimits || raw.scope_limits || "").trim(),
      primaryGoal: String(raw.primaryGoal || raw.primary_goal || raw.mainQuest || "").trim(),
      coreConflict: String(raw.coreConflict || raw.core_conflict || "").trim(),
      branchSeeds: String(raw.branchSeeds || raw.branch_seeds || "").trim(),
      pacingHint: String(raw.pacingHint || raw.pacing_hint || "").trim(),
      cluePool: String(raw.cluePool || raw.clue_pool || raw.clues || "").trim()
    };
  }
  if (mode === "virtual_character") {
    return {
      personaName: String(raw.personaName || raw.persona_name || raw.npc || "").trim(),
      relationStart: String(raw.relationStart || raw.relation_start || "").trim(),
      personaCore: String(raw.personaCore || raw.persona_core || "").trim(),
      dialogueStyle: String(raw.dialogueStyle || raw.dialogue_style || "").trim(),
      relationBoundary: String(raw.relationBoundary || raw.relation_boundary || "").trim(),
      taboos: String(raw.taboos || raw.taboo || "").trim(),
      openingLine: String(raw.openingLine || raw.opening_line || "").trim(),
      memoryHooks: String(raw.memoryHooks || raw.memory_hooks || "").trim(),
      triggerWords: String(raw.triggerWords || raw.trigger_words || "").trim(),
      growthMilestones: String(raw.growthMilestones || raw.growth_milestones || "").trim()
    };
  }
  return {
    openingLine: String(raw.openingLine || raw.opening_line || "").trim(),
    worldSetting: String(raw.worldSetting || raw.world_setting || "").trim(),
    playerIdentity: String(raw.playerIdentity || raw.player_identity || raw.playerHook || "").trim(),
    primaryGoal: String(raw.primaryGoal || raw.primary_goal || raw.mainQuest || "").trim(),
    coreConflict: String(raw.coreConflict || raw.core_conflict || "").trim(),
    fixedNpcs: String(raw.fixedNpcs || raw.fixed_npcs || raw.npcSeeds || "").trim(),
    resourceSystem: String(raw.resourceSystem || raw.resource_system || "").trim(),
    toneStyle: String(raw.toneStyle || raw.tone_style || "").trim(),
    forbiddenRules: String(raw.forbiddenRules || raw.forbidden_rules || "").trim(),
    detailMemorySeed: String(raw.detailMemorySeed || raw.detail_memory_seed || "").trim()
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
      openingAnchor: normalized.openingAnchor,
      endingAnchors: normalized.endingAnchors,
      fixedNpcs: normalized.fixedNpcs,
      scopeLimits: normalized.scopeLimits,
      primaryGoal: normalized.primaryGoal,
      coreConflict: normalized.coreConflict,
      branchSeeds: normalized.branchSeeds,
      pacingHint: normalized.pacingHint,
      cluePool: normalized.cluePool
    };
  }
  if (mode === "virtual_character") {
    return {
      schemaVersion: "creator_card_v3",
      cardType: "character",
      authoringMode,
      personaName: normalized.personaName,
      relationStart: normalized.relationStart,
      personaCore: normalized.personaCore,
      dialogueStyle: normalized.dialogueStyle,
      relationBoundary: normalized.relationBoundary,
      taboos: normalized.taboos,
      openingLine: normalized.openingLine,
      memoryHooks: normalized.memoryHooks,
      growthMilestones: normalized.growthMilestones,
      triggerWords: normalized.triggerWords
    };
  }
  return {
    schemaVersion: "creator_card_v3",
    cardType: "world",
    authoringMode,
    openingLine: normalized.openingLine,
    worldSetting: normalized.worldSetting,
    playerIdentity: normalized.playerIdentity,
    primaryGoal: normalized.primaryGoal,
    coreConflict: normalized.coreConflict,
    fixedNpcs: normalized.fixedNpcs,
    resourceSystem: normalized.resourceSystem,
    toneStyle: normalized.toneStyle,
    forbiddenRules: normalized.forbiddenRules,
    detailMemorySeed: normalized.detailMemorySeed
  };
}

function buildWorkshopRuntimeConfig(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const normalized = normalizeWorkshopDraftForMode(mode, draft);
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  if (mode === "short_narrative") {
    return {
      guidance_strength: "low",
      opening_min_chars: 500,
      must_fields: ["openingAnchor", "endingAnchors", "fixedNpcs", "primaryGoal", "coreConflict"],
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
  return {
    id: card.id,
    mode,
    cardType: getWorkshopCardTypeByMode(mode),
    title: card.title || "未命名卡片",
    draft: normalizeWorkshopDraftForMode(mode, content),
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
  try {
    const data = await apiGetJson(`/creator/cards?authorId=${encodeURIComponent(uiState.currentUserId)}&limit=120`);
    const cards = Array.isArray(data?.cards) ? data.cards : [];
    uiState.workshopSavedCards = cards.map((card) => normalizeCreatorCardToWorkshop(card));
    uiState.workshopCardsLoadedForUser = uiState.currentUserId;
    if (!silent) {
      uiState.workshopFeedback = `已同步 ${cards.length} 张创作卡`;
      render();
    }
  } catch (error) {
    if (!silent) {
      uiState.workshopFeedback = `同步失败：${error instanceof Error ? error.message : "unknown"}`;
      render();
    }
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
    subtitle: WORKSHOP_MODE_META[mode]?.label || mode,
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
    uiState.workshopFeedback = "卡片已保存到草稿箱";
    return pending;
  } catch (error) {
    uiState.workshopFeedback = `保存失败：${error instanceof Error ? error.message : "unknown"}`;
    return null;
  } finally {
    uiState.workshopSaving = false;
    render();
  }
}

async function publishWorkshopCardToApi(cardId) {
  if (!uiState.isLoggedIn || !uiState.currentUserId) {
    uiState.workshopFeedback = "请先登录后发布";
    uiState.showLoginModal = true;
    render();
    return false;
  }
  uiState.workshopPublishing = true;
  render();
  try {
    const { clues, ...publishPayload } = uiState.workshopPublishDraft || {};
    const data = await apiJson(`/creator/cards/${cardId}/publish`, {
      authorId: uiState.currentUserId,
      syncToDynamic: uiState.workshopSyncDynamic,
      publishPayload
    });
    const card = data?.card;
    if (!card?.id) throw new Error("CARD_PUBLISH_FAILED");
    await syncWorkshopCardsFromApi({ silent: true });
    uiState.workshopFeedback = data?.message || "发布成功。可在“我的-作品”中查看。";
    return true;
  } catch (error) {
    uiState.workshopFeedback = `发布失败：${error instanceof Error ? error.message : "unknown"}`;
    return false;
  } finally {
    uiState.workshopPublishing = false;
    render();
  }
}

function getWorkshopCardTypeByMode(mode = "long_narrative") {
  if (mode === "short_narrative") return "story";
  if (mode === "virtual_character") return "character";
  return "world";
}

function getWorkshopCardTitle(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const d = normalizeWorkshopDraftForMode(mode, draft);
  if (mode === "short_narrative") return (d.openingAnchor || d.primaryGoal || "").slice(0, 24) || "未命名故事卡";
  if (mode === "virtual_character") return (d.personaName || "").slice(0, 24) || "未命名角色卡";
  return (d.worldSetting || d.primaryGoal || "").slice(0, 24) || "未命名世界卡";
}

function getWorkshopBaseValidationErrors(mode = uiState.workshopMode, draft = getWorkshopDraftByMode(mode)) {
  const d = normalizeWorkshopDraftForMode(mode, draft);
  if (mode === "short_narrative") {
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
    if (!String(d.openingLine || "").trim()) return "请先填写开场镜头句";
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

function seedWorkshopPublishDraft(card) {
  const d = normalizeWorkshopDraftForMode(card.mode, card.draft || {});
  const isStory = card.mode === "short_narrative";
  const isCharacter = card.mode === "virtual_character";
  const npcSource = isCharacter ? d.personaName : d.fixedNpcs;
  const firstNpc = String(npcSource || "")
    .split(/[；;、/]/)
    .map((x) => x.trim())
    .filter(Boolean)[0] || "关键角色";
  const introLineA = isCharacter ? d.openingLine : isStory ? d.openingAnchor : d.openingLine;
  const introLineB = isCharacter ? d.relationStart : isStory ? d.scopeLimits : d.worldSetting;
  const mainQuest = isCharacter
    ? "围绕关系里程碑推进互动，并保持人物一致性"
    : isStory
      ? (d.primaryGoal || d.endingAnchors || "在限定范围内推进到结局锚点")
      : (d.primaryGoal || d.coreConflict || "围绕核心冲突推进主线");
  uiState.workshopPublishDraft = {
    title: card.title || "",
    chapter: isCharacter ? "初次接触" : isStory ? "第一幕" : "序章",
    mainQuest,
    npc: firstNpc,
    clues: isCharacter ? (d.memoryHooks || d.triggerWords || "人物边界 / 情绪触发 / 关系阈值") : isStory ? (d.cluePool || d.branchSeeds || "主线线索 / 关系线 / 证据线") : (d.detailMemorySeed || d.resourceSystem || "线索网络 / 关系账本 / 核心证据"),
    intro: [introLineA, introLineB].filter(Boolean).join("\n"),
    format: isCharacter ? "虚拟人物" : isStory ? "短叙事" : "长叙事",
    theme: isCharacter ? (d.dialogueStyle || "养成互动") : (d.toneStyle || "策略叙事"),
    setting: isCharacter ? (d.relationBoundary || "角色关系模拟") : isStory ? (d.scopeLimits || "故事卡分支") : (d.worldSetting || "开放世界"),
    background: isCharacter ? "角色互动场景" : "原创世界",
    recommend: "创作中心内测首发",
    cover: "",
    statline: "连载中 · 内测版本"
  };
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

function getWorkshopPaintSizeByRatio(ratio = "1:1") {
  if (ratio === "16:9") return { width: 1280, height: 720 };
  if (ratio === "9:16") return { width: 720, height: 1280 };
  if (ratio === "4:3") return { width: 1280, height: 960 };
  if (ratio === "3:4") return { width: 960, height: 1280 };
  return { width: 1024, height: 1024 };
}

function buildWorkshopPaintPreviewUrls({
  prompt = "",
  style = "cinematic",
  ratio = "1:1",
  negative = ""
}) {
  const p = String(prompt || "").trim();
  const s = String(style || "cinematic").trim();
  const n = String(negative || "").trim();
  const { width, height } = getWorkshopPaintSizeByRatio(ratio);
  const basePrompt = `${p}, ${s} style, highly detailed, best quality${n ? `, avoid: ${n}` : ""}`;
  const normalizedPrompt = `${p} ${n}`.toLowerCase();
  const category = /\bnsfw\b|成人|露骨|情色/.test(normalizedPrompt)
    ? "nsfw"
    : (/\banime\b|动漫|二次元/.test(normalizedPrompt) || s === "anime")
      ? "anime"
      : "sfw";
  return new Array(4).fill(0).map((_, idx) => {
    const seed = Math.floor(Math.random() * 100000) + idx * 97;
    const src = `https://image.pollinations.ai/prompt/${encodeURIComponent(basePrompt)}?seed=${seed}&width=${width}&height=${height}&nologo=true`;
    const fallbackUrl = `https://picsum.photos/seed/drama-paint-${seed}/${width}/${height}`;
    return {
      id: `paint_${Date.now()}_${idx}`,
      url: src,
      fallbackUrl,
      seed,
      width,
      height,
      style: s,
      ratio,
      category,
      prompt: p,
      createdAt: Date.now() + idx
    };
  });
}

async function generateWorkshopPaintWithApi({
  prompt = "",
  style = "cinematic",
  ratio = "1:1",
  negative = "",
  count = 4
}) {
  const data = await apiJson("/paint/generate", {
    prompt,
    style,
    ratio,
    negative,
    count
  });
  return {
    images: Array.isArray(data?.images) ? data.images : [],
    warnings: Array.isArray(data?.warnings) ? data.warnings : []
  };
}

function buildCreatorWorks() {
  return [...uiState.workshopSavedCards]
    .sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
    .map((item) => {
      const p = item.publishInfo || {};
      return {
        id: item.id,
        mode: item.mode,
        title: p.title || item.title || "未命名卡片",
        subtitle: p.chapter || getWorkshopModeLabel(item.mode),
        summary: p.mainQuest || "待补充任务",
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
  if (uiState.isLoggedIn && uiState.currentUserId && uiState.workshopCardsLoadedForUser !== uiState.currentUserId) {
    void syncWorkshopCardsFromApi({ silent: true });
  }
  const mode = uiState.workshopMode;
  const meta = WORKSHOP_MODE_META[mode];
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  const draft = normalizeWorkshopDraftForMode(mode, getWorkshopDraftByMode(mode));
  const creatorWorks = buildCreatorWorks();
  const parseMeta = uiState.workshopCustomParsed || null;
  const workshopFieldExamples = {
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
    "workshop-story-openingAnchor": "例如：你在婚礼前夜收到匿名录像。",
    "workshop-story-endingAnchors": "例如：真相公开/沉默离场/同盟反噬。",
    "workshop-story-fixedNpcs": "例如：主角青梅、公司合伙人、匿名爆料者。",
    "workshop-story-scopeLimits": "例如：24小时内，仅城市核心区可行动。",
    "workshop-story-primaryGoal": "例如：在天亮前锁定幕后操盘人。",
    "workshop-story-coreConflict": "例如：救人会丢证据，追证据会牺牲关系。",
    "workshop-story-branchSeeds": "例如：医院监控、遗失U盘、错发短信。",
    "workshop-story-pacingHint": "例如：前紧后爆，第三幕反转。",
    "workshop-story-cluePool": "例如：门禁记录、通话清单、资金流水。",
    "workshop-character-personaName": "例如：叶言青",
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
  const renderModeFields = () => {
    if (mode === "long_narrative") {
      return `
        <div class="workshop-form-grid">
          <label>开场句（必填）<textarea data-field="workshop-world-openingLine" placeholder="${escapeHtml(workshopFieldExamples["workshop-world-openingLine"])}">${escapeHtml(draft.openingLine || "")}</textarea></label>
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
        <label>开场镜头句（必填）<textarea data-field="workshop-character-openingLine" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-openingLine"])}">${escapeHtml(draft.openingLine || "")}</textarea></label>
        <label>记忆钩子（必填）<textarea data-field="workshop-character-memoryHooks" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-memoryHooks"])}">${escapeHtml(draft.memoryHooks || "")}</textarea></label>
        <label>触发词<input data-field="workshop-character-triggerWords" value="${escapeHtml(draft.triggerWords || "")}" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-triggerWords"])}" /></label>
        <label>成长里程碑<textarea data-field="workshop-character-growthMilestones" placeholder="${escapeHtml(workshopFieldExamples["workshop-character-growthMilestones"])}">${escapeHtml(draft.growthMilestones || "")}</textarea></label>
      </div>
    `;
  };
  return renderExploreShell(`
    <section class="workshop-studio workshop-editor-page">
      <header class="workshop-editor-head">
        <h2>${meta.title}</h2>
      </header>

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

          ${authoringMode === "template" ? renderModeFields() : ""}

          <div class="workshop-action-row">
            <button class="primary" data-action="workshop-save-card">${uiState.workshopSaving ? "保存中..." : "保存卡片"}</button>
            <button data-action="workshop-generate-preview">生成预览回合</button>
            <button data-action="workshop-copy-spec">复制运行上下文</button>
            <button data-action="workshop-reset-mode">重置当前模式</button>
          </div>
          ${uiState.workshopFeedback ? `<p class="workshop-feedback">${escapeHtml(uiState.workshopFeedback)}</p>` : ""}
          <div class="workshop-card-list">
            <h4>我的创作卡</h4>
            <div class="workshop-card-list-grid">
              ${
                creatorWorks.length
                  ? creatorWorks.slice(0, 8).map((item) => `
                    <button class="workshop-card-chip ${item.id === uiState.workshopActiveCardId ? "active" : ""}" data-action="workshop-select-existing-card" data-id="${item.id}">
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.subtitle)} · ${item.status === "published" ? "已发布" : "草稿"}</span>
                    </button>
                  `).join("")
                  : "<p class='workshop-card-empty'>暂无卡片，先保存一张。</p>"
              }
            </div>
          </div>
        </article>
      </div>
    </section>
    ${renderWorkshopPublishFlow()}
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

function getWorkshopPaintGalleryCards() {
  const placeholders = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
  ];
  const source = Array.isArray(uiState.workshopPaintResults) && uiState.workshopPaintResults.length
    ? uiState.workshopPaintResults
    : placeholders.map((url, idx) => ({
      id: `sample_${idx + 1}`,
      url,
      fallbackUrl: url,
      seed: 3000 + idx,
      width: 1024,
      height: 1024,
      style: idx % 2 === 0 ? "anime" : "cinematic",
      category: idx % 4 === 0 ? "anime" : "sfw",
      prompt: "科技都市插画",
      createdAt: Date.now() - idx * 60000
    }));
  const cards = [];
  for (let i = 0; i < source.length; i += 4) {
    const block = source.slice(i, i + 4);
    while (block.length < 4 && source.length) block.push(source[block.length % source.length]);
    const seed = Number(block[0]?.seed || i + 1);
    const like = seed % 17;
    const comment = seed % 7;
    cards.push({
      id: `gallery_${i}`,
      title: `创作草图 ${Math.floor(i / 4) + 1}`,
      author: String(uiState.profile?.name || "ZR"),
      authorTag: String(uiState.profile?.name || "ZR").slice(0, 2).toUpperCase(),
      images: block.map((x) => ({
        url: x.url,
        fallbackUrl: x.fallbackUrl || x.url
      })),
      category: block[0]?.category || "sfw",
      style: block[0]?.style || "cinematic",
      like,
      comment,
      createdAt: Number(block[0]?.createdAt || Date.now()),
      timeText: `${(Math.floor(seed % 5) + 1)} 分钟前`
    });
  }
  return cards;
}

function pageWorkshopPaint() {
  const styleOptions = [
    { value: "cinematic", label: "电影感" },
    { value: "anime", label: "动漫" },
    { value: "realistic", label: "写实" },
    { value: "illustration", label: "插画" },
    { value: "watercolor", label: "水彩" },
    { value: "pixel art", label: "像素风" }
  ];
  const ratioOptions = ["1:1", "16:9", "9:16", "4:3", "3:4"];
  const categoryTabs = [
    { key: "all", label: "全部" },
    { key: "sfw", label: "SFW" },
    { key: "nsfw", label: "NSFW" },
    { key: "anime", label: "动漫" }
  ];
  const sortTabs = [
    { key: "latest", label: "最新" },
    { key: "hot", label: "热门" },
    { key: "top_like", label: "最多点赞" }
  ];
  let cards = getWorkshopPaintGalleryCards();
  if (uiState.workshopPaintCategory !== "all") {
    cards = cards.filter((item) => item.category === uiState.workshopPaintCategory);
  }
  if (uiState.workshopPaintSort === "hot") {
    cards = [...cards].sort((a, b) => (b.like + b.comment) - (a.like + a.comment));
  } else if (uiState.workshopPaintSort === "top_like") {
    cards = [...cards].sort((a, b) => b.like - a.like);
  } else {
    cards = [...cards].sort((a, b) => b.createdAt - a.createdAt);
  }
  return renderExploreShell(`
    <section class="workshop-studio workshop-paint-page workshop-gallery-page">
      <header class="workshop-gallery-banner">
        <div class="workshop-gallery-banner-copy">
          <h2>画廊</h2>
        </div>
        <button class="workshop-gallery-create-btn" data-action="workshop-paint-toggle-composer">✧ 创作</button>
      </header>

      <div class="workshop-gallery-tabs">
        ${categoryTabs.map((tab) => `
          <button
            class="${uiState.workshopPaintCategory === tab.key ? "active" : ""}"
            data-action="workshop-paint-category"
            data-key="${tab.key}"
          >${tab.label}</button>
        `).join("")}
      </div>

      <div class="workshop-gallery-sort">
        ${sortTabs.map((tab) => `
          <button
            class="${uiState.workshopPaintSort === tab.key ? "active" : ""}"
            data-action="workshop-paint-sort"
            data-key="${tab.key}"
          >${tab.label}</button>
        `).join("")}
      </div>

      ${
        uiState.workshopPaintComposerOpen
          ? `
        <article class="workshop-paint-panel workshop-gallery-compose">
          <div class="workshop-paint-grid">
            <label>正向提示词
              <textarea data-field="workshop-paint-prompt" placeholder="例如：雨夜霓虹街头，少女撑透明伞站在路口，电影光影，细节丰富">${escapeHtml(uiState.workshopPaintPrompt || "")}</textarea>
            </label>
            <label>负向提示词（可选）
              <textarea data-field="workshop-paint-negative" placeholder="例如：低清晰度、模糊、畸形手指、文字水印">${escapeHtml(uiState.workshopPaintNegativePrompt || "")}</textarea>
            </label>
            <label>画面风格
              <select data-field="workshop-paint-style">
                ${styleOptions.map((item) => `<option value="${item.value}" ${uiState.workshopPaintStyle === item.value ? "selected" : ""}>${item.label}</option>`).join("")}
              </select>
            </label>
            <label>图片比例
              <select data-field="workshop-paint-ratio">
                ${ratioOptions.map((item) => `<option value="${item}" ${uiState.workshopPaintRatio === item ? "selected" : ""}>${item}</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="workshop-paint-actions">
            <button class="primary" data-action="workshop-paint-generate" ${uiState.workshopPaintGenerating ? "disabled" : ""}>${uiState.workshopPaintGenerating ? "生成中..." : "开始生成"}</button>
            <button data-action="workshop-paint-clear">清空结果</button>
            <button data-action="workshop-paint-toggle-composer">收起</button>
          </div>
        </article>
      `
          : ""
      }

      ${uiState.workshopPaintFeedback ? `<p class="workshop-feedback">${escapeHtml(uiState.workshopPaintFeedback)}</p>` : ""}

      <section class="workshop-gallery-grid">
        ${
          cards.length
            ? cards.map((item) => `
              <article class="workshop-gallery-card">
                <div class="workshop-gallery-collage">
                  ${item.images.map((img, idx) => `
                    <img
                      class="workshop-paint-image"
                      src="${escapeHtml(img.url || "")}"
                      data-fallback-src="${escapeHtml(img.fallbackUrl || "")}"
                      alt="${escapeHtml(item.title)}-${idx + 1}"
                      loading="lazy"
                      referrerpolicy="no-referrer"
                    />
                  `).join("")}
                </div>
                <div class="workshop-gallery-card-body">
                  <h4>${escapeHtml(item.title)}</h4>
                  <div class="workshop-gallery-author-row">
                    <span class="workshop-gallery-author-dot">${escapeHtml(item.authorTag)}</span>
                    <strong>${escapeHtml(item.author)}</strong>
                    <em>${escapeHtml(item.timeText)}</em>
                  </div>
                  <div class="workshop-gallery-metrics">
                    <span>👍 ${item.like}</span>
                    <span>💬 ${item.comment}</span>
                  </div>
                </div>
              </article>
            `).join("")
            : '<p class="workshop-paint-empty">当前分类下暂无图片，试试切换分类或点击创作。</p>'
        }
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
        <button data-go="#/community/search"><span>⌕</span><em>搜索</em></button>
        <button data-go="#/community/create"><span>＋</span><em>创建</em></button>
        <button data-go="#/community/mine"><span>◎</span><em>我的社群</em></button>
      </div>
      <button class="backstage-composer-trigger" data-go="#/community/search">
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
  return renderExploreShell(`
    <section class="community-page">
      <header class="community-home-top">
        <div class="community-head-row">
          <h2>社区</h2>
        </div>
        <div class="community-search-create-row">
          <div class="community-search-wrap xh-search-wrap" data-action="noop">
            <div class="xh-search" data-action="open-search-panel">
              <input class="xh-mobile-search-input" value="${escapeHtml(uiState.communitySearchQuery)}" placeholder="搜索世界/主题/设定/作者" />
              <button class="xh-search-submit" data-action="submit-search">⌕</button>
            </div>
            ${uiState.communitySearchPanelOpen ? renderSearchPanel("community") : ""}
          </div>
          <button class="community-plus-create-btn" data-go="#/community/create">
            <span>＋</span>
            <em>创建社区</em>
          </button>
        </div>
        <div class="community-quick-entry-row">
          <button data-go="#/community/join"><span>🧭</span><em>加入社区</em></button>
          <button data-go="#/community/mine"><span>👥</span><em>我的社区</em></button>
          <button data-go="#/community/manage/joined"><span>🛠</span><em>管理社区</em></button>
          <button data-go="#/community/create"><span>✨</span><em>创建社区</em></button>
        </div>
      </header>
      <div class="xh-filter-panel expanded drama-filter-panel community-filter-drama">
        <div class="xh-filter-body">
          ${COMMUNITY_FILTER_CONFIG.map((group) => renderCommunityFilterGroup(group)).join("")}
        </div>
      </div>
      <h3>推荐社群（${filteredList.length}）</h3>
      ${renderCommunityCards(filteredList)}
    </section>
  `);
}

function pageCommunityJoin() {
  return renderExploreShell(`
    <section class="community-page community-join-page">
      <h3 class="community-join-title">加入社区</h3>
      ${renderCommunityCards(COMMUNITY_LIST, "暂时没有可加入的社群")}
    </section>
  `);
}

function pageCommunityMine() {
  const isJoinedTab = uiState.communityMyTab === "joined";
  const manageTarget = isJoinedTab ? "#/community/manage/joined" : "#/community/manage";
  return renderExploreShell(`
    <section class="community-page">
      ${renderCommunityHero("mine")}
      <div class="community-head-actions"><button data-go="${manageTarget}">管理</button></div>
      <div class="community-tab-switch">
        <button class="${uiState.communityMyTab === "joined" ? "active" : ""}" data-action="community-my-tab" data-tab="joined">我加入</button>
        <button class="${uiState.communityMyTab === "created" ? "active" : ""}" data-action="community-my-tab" data-tab="created">我创建</button>
      </div>
      ${renderCommunityCards(uiState.communityMyTab === "joined" ? COMMUNITY_LIST.slice(5, 11) : COMMUNITY_LIST.slice(0, 4), "你还没有加入社群")}
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
        <div class="search-mobile-global-field xh-search" data-action="open-search-panel">
          <input class="xh-mobile-search-input search-mobile-global-input" value="${escapeHtml(q)}" placeholder="搜索世界/主题/设定/作者" />
          <button class="xh-search-submit" data-action="submit-search">搜索</button>
        </div>
        <button class="search-mobile-global-close" data-action="cancel-search-results" aria-label="返回">×</button>
      </div>

      <div class="search-result-tabs">
        ${tabs.map((t) => `<button class="${t === activeTab ? "active" : ""}" data-action="set-community-search-tab" data-tab="${t}">${t}</button>`).join("")}
      </div>
      ${
        activeTab === "话题"
          ? `
        <div class="search-topic-grid">
          ${(topics.length ? topics : ["悬疑", "言情", "古风", "脑洞", "科幻", "校园"]).map((t) => `<button data-action="apply-search-term" data-term="${escapeHtml(t)}"># ${escapeHtml(t)}</button>`).join("")}
        </div>
      `
          : renderCommunityCards(ranked, "暂无匹配社群，试试换个关键词")
      }
    </section>
  `);
}

function pageCommunityCreate() {
  const coverOptions = COMMUNITY_CARD_IMAGES.slice(0, 4);
  return renderExploreShell(`
    <section class="community-page community-form">
      <h2>新增社群</h2>
      <label>群头像</label>
      <div class="row">
        <div class="community-avatar-placeholder"></div>
        <button class="community-upload-btn">上传头像</button>
        <small>支持 JPG/PNG</small>
      </div>
      <label>社区名称</label>
      <input data-field="community-create-name" value="${escapeHtml(uiState.communityCreateName)}" placeholder="请输入名称" />
      <label>社区标签</label>
      <input data-field="community-create-tags" value="${escapeHtml(uiState.communityCreateTags)}" placeholder="如：悬疑/校园/科幻" />
      <label>简介</label>
      <textarea data-field="community-create-desc" placeholder="一句话介绍你的社区定位">${escapeHtml(uiState.communityCreateDesc)}</textarea>
      <label>卡片背景</label>
      <div class="community-cover-picks">
        ${coverOptions
          .map(
            (cover, idx) => `
          <button class="community-cover-pick ${uiState.communityCreateCover === cover ? "active" : ""}" style="--pick-cover:${cover}" data-action="community-create-cover" data-cover="${idx}"></button>
        `
          )
          .join("")}
        <button class="community-cover-pick community-cover-upload" data-action="community-cover-upload-trigger">上传背景</button>
        <input class="community-cover-file-input" type="file" accept="image/*" data-field="community-create-cover-file" />
      </div>
      <label>背景蒙版</label>
      <div class="community-mask-row">
        ${[
          { label: "弱", value: "0.24" },
          { label: "中", value: "0.38" },
          { label: "强", value: "0.52" }
        ]
          .map(
            (x) => `
          <button class="${Number(x.value) === Number(uiState.communityCreateMaskOpacity) ? "active" : ""}" data-action="community-create-mask" data-value="${x.value}">${x.label}</button>
        `
          )
          .join("")}
      </div>
      <div class="community-create-preview">
        <div class="community-create-preview-cover" style="--community-cover:${uiState.communityCreateCover};--community-mask-opacity:${uiState.communityCreateMaskOpacity};"></div>
        <strong>${escapeHtml(uiState.communityCreateName || "你的社群名称")}</strong>
        <p>${escapeHtml(uiState.communityCreateDesc || "社群简介将在这里展示，建议一句话说清定位。")}</p>
      </div>
      <label>加入方式</label>
      <div class="community-tab-switch">
        <button class="${uiState.communityCreateJoinMode === "公开加入" ? "active" : ""}" data-action="community-create-join" data-mode="公开加入">公开加入</button>
        <button class="${uiState.communityCreateJoinMode === "审核加入" ? "active" : ""}" data-action="community-create-join" data-mode="审核加入">审核加入</button>
      </div>
      <button class="dynamic-publish-btn" data-action="publish-community-create">发布社群</button>
      ${
        uiState.communityCreatePublishedId
          ? `<div class="community-inline-success">✔ 创建成功 <button data-action="open-community-group" data-id="${uiState.communityCreatePublishedId}">去社群</button></div>`
          : ""
      }
    </section>
  `);
}

function pageCommunityGroup() {
  const c = getSelectedCommunity();
  const posts = getCommunityPosts(c.id);
  const list = uiState.communityGroupTab === "featured" ? posts.filter((p) => p.featured) : posts;
  const activeTabTotal =
    uiState.communityGroupTab === "members"
      ? COMMUNITY_MEMBERS.length
      : uiState.communityGroupTab === "featured"
        ? posts.filter((p) => p.featured).length
        : posts.length;
  return renderExploreShell(`
    <section class="community-group-page">
      <div class="community-detail-title-row">
        <button class="community-manage-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>社区详情</h2>
        <span>${c.members}</span>
      </div>
      <article class="community-group-head">
        <div class="cover"></div>
        <div class="copy">
          <h2>${c.name}</h2>
          <p>${c.tags.join(" / ")} · ${c.desc}</p>
          <small>${c.members} · 今日在线 ${c.online} · 最近活跃 ${c.updated}</small>
          <div class="community-head-metrics">
            <span>动态 ${posts.length}</span>
            <span>精华 ${posts.filter((p) => p.featured).length}</span>
            <span>成员 ${COMMUNITY_MEMBERS.length}</span>
            <span>讨论热度 +12%</span>
          </div>
        </div>
        <div class="actions">
          <button class="ghost">已加入</button>
          <button class="primary" data-go="#/community/group/post">发动态</button>
        </div>
      </article>

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
          ${COMMUNITY_MEMBERS.map((m) => `
            <article class="community-member-item">
              <span class="avatar user-avatar-click" style="background:${m.color}">${m.name.slice(0,1)}</span>
              <div><h4>${m.name} · ${m.role}</h4><p>${m.intro}</p></div>
            </article>
          `).join("")}
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
              <div class="community-post-media"><div></div><div></div><div></div></div>
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
  const storyOptions = getCommunityStoryOptions();
  return renderExploreShell(`
    <section class="community-page community-form">
      <div class="community-head-row"><h2>发动态</h2><button data-action="publish-community-post">发布</button></div>
      <textarea data-field="community-compose-text" placeholder="分享你的新发现、攻略或招募信息...">${escapeHtml(uiState.communityComposeText)}</textarea>
      <div class="community-chip-row">
        ${["图片", "@成员", "话题"].map((x) => `<button class="${uiState.communityComposeType === x ? "active" : ""}" data-action="community-compose-type" data-type="${x}">${x}</button>`).join("")}
      </div>
      <div class="community-media-upload"><div></div><div></div><div>+</div></div>
      <div class="community-setting-row community-story-bind-row">
        <span>绑定故事卡</span>
        <select data-field="community-compose-story">
          <option value="">不绑定</option>
          ${storyOptions
            .map((x) => `<option value="${x.id}" ${uiState.communityComposeStoryId === x.id ? "selected" : ""}>${x.title}</option>`)
            .join("")}
        </select>
      </div>
      <div class="community-setting-row"><span>可见范围</span><button data-action="community-visibility"> ${uiState.communityComposeVisibility}</button></div>
      <div class="community-setting-row"><span>同步到精华候选</span><button data-action="community-sync-toggle">${uiState.communityComposeSync ? "开启" : "关闭"}</button></div>
      <button class="dynamic-publish-btn" data-action="publish-community-post">${uiState.communityPostPublished ? "发布中..." : "发布动态"}</button>
      ${uiState.communityPostPublished ? `<div class="community-inline-success">✔ 发布成功 <button data-go="#/community/post/detail">去查看</button></div>` : ""}
    </section>
  `);
}

function pageCommunityPostDetail() {
  const post = getSelectedCommunityPost();
  if (!post) return pageCommunityGroup();
  const meta = ensureCommunityPostMeta(post);
  return renderExploreShell(`
    <section class="community-page">
      <article class="community-post-detail">
        <header><span class="avatar user-avatar-click">${post.user.slice(0,1)}</span><div><strong>${post.user}</strong><small>${post.time} · ${getSelectedCommunity().name}</small></div></header>
        <h3>${post.title}</h3>
        <p>${post.text}</p>
        <div class="community-post-media"><div></div><div></div><div></div></div>
        ${post.story ? `<div class="community-story-link"><span>附加故事卡：${post.story}</span><button data-action="open-world-detail" data-id="${getSafeWorldId(post.storyId, 0)}">查看</button></div>` : ""}
        <footer class="community-post-toolbar">
          <button class="${meta.liked ? "active" : ""}" data-action="community-post-like">♡ ${formatCount(meta.likes)}</button>
          <button class="${meta.starred ? "active" : ""}" data-action="community-post-star">☆ ${formatCount(meta.stars)}</button>
          <button data-action="community-post-comment-focus">💬 ${formatCount(meta.commentsCount)}</button>
          <button data-action="community-post-share">↗ 分享</button>
        </footer>
      </article>
      <article class="community-comments-card">
        <h4>评论（${meta.commentsCount}）</h4>
        <div class="community-comment-input-row"><input data-field="community-comment" value="${escapeHtml(uiState.communityCommentDraft)}" placeholder="说点什么..." /><button data-action="community-post-comment-submit">发送</button></div>
        ${meta.comments
          .map(
            (c) => `
          <div class="community-comment-item"><span class="avatar user-avatar-click">${c.user.slice(0,1)}</span><div><strong>${c.user}</strong><p>${c.text}</p></div><em>赞 ${c.likes}</em></div>
        `
          )
          .join("")}
      </article>
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
  const source = uiState.dynamicTab === "推荐"
    ? unique
    : unique.filter((item) => item.tab === uiState.dynamicTab);
  return source.slice(0, 30);
}

function renderBackstageHero() {
  const displayName = uiState.profile?.name || "Drama 用户";
  const displayHandle = uiState.profile?.handle || "@drama_user";
  const displayBio = uiState.backstageSignature || uiState.profile?.bio || "分享新鲜事...";
  const customBg = String(uiState.backstageTopBackground || "").trim();
  const heroStyle = customBg ? `style='--backstage-hero-custom-bg:url(${escapeHtml(customBg)});'` : "";
  return `
    <header class="backstage-hero" ${heroStyle}>
      <div class="backstage-profile-row">
        <button class="backstage-avatar user-avatar-click">${getAvatarText(displayName)}</button>
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
  return renderExploreShell(`
    <section class="backstage-publish-page">
      <article class="backstage-publish-card">
        <textarea class="backstage-publish-input" data-field="dynamic-text" placeholder="分享新鲜事...">${escapeHtml(uiState.dynamicDraftText)}</textarea>
        <div class="backstage-publish-upload">照片/视频</div>
        <div class="backstage-publish-chip-row">
          <button data-action="noop">@ 好友</button>
          <button data-action="noop">添加标签</button>
          <button data-action="noop">添加地点</button>
          <button data-action="noop">AI配文</button>
        </div>
      </article>

      <article class="backstage-publish-setting">
        <button data-action="noop"><span>谁可以看</span><em>所有人可见 ›</em></button>
        <button data-action="noop"><span>发表设置</span><em>›</em></button>
      </article>

      <article class="backstage-publish-setting single">
        <button data-action="noop"><span>投稿至「空友爱看」</span><em>○</em></button>
      </article>
      ${uiState.dynamicShareFeedback ? `<p class="dynamic-compose-error">${escapeHtml(uiState.dynamicShareFeedback)}</p>` : ""}
    </section>
  `);
}

function pageBackstageSettings() {
  const signatureValue = uiState.backstageSignatureDraft || uiState.backstageSignature || uiState.profile?.bio || "";
  const backgroundValue = uiState.backstageTopBackgroundDraft || uiState.backstageTopBackground || "";
  return renderExploreShell(`
    <section class="backstage-setting-page">
      <article class="backstage-setting-card">
        <label>主页签名</label>
        <textarea data-field="backstage-signature" placeholder="输入幕布主页签名">${escapeHtml(signatureValue)}</textarea>
      </article>
      <article class="backstage-setting-card">
        <label>顶部背景图 URL</label>
        <input data-field="backstage-top-bg" value="${escapeHtml(backgroundValue)}" placeholder="https://example.com/cover.jpg" />
        <small>留空则使用默认背景</small>
      </article>
      ${uiState.meFeedback ? `<div class="msg-action-feedback">${escapeHtml(uiState.meFeedback)}</div>` : ""}
    </section>
  `);
}

function pageMessageCenter() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看消息", "消息页包含联系人、群聊和通知。登录后可查看并回复。");
  }

  const query = uiState.messageSearchKeyword.trim().toLowerCase();
  const tab = uiState.messageTab;
  const filtered = MESSAGE_INBOX.filter((item) => {
    const tabOk = tab === "全部" ? true : item.type === tab;
    const queryOk = query ? `${item.name} ${item.preview}`.toLowerCase().includes(query) : true;
    return tabOk && queryOk;
  });

  return renderExploreShell(`
    <section class="msg-home">
      <div class="msg-head">
        <h2>消息</h2>
        <div class="msg-head-actions">
          <button data-action="toggle-message-search" aria-label="搜索">⌕</button>
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
      ${
        uiState.messageSearchOpen
          ? `
        <div class="msg-search-inline compact">
          <input data-field="message-search" value="${escapeHtml(uiState.messageSearchQuery)}" placeholder="搜索联系人/群聊/聊天记录" />
          ${
            uiState.messageSearchKeyword
              ? `<button class="msg-search-action clear" data-action="message-search-clear">×</button>`
              : `<button class="msg-search-action" data-action="message-search-submit">搜索</button>`
          }
        </div>
      `
          : ""
      }

      <div class="msg-quick-grid">
        <article data-go="#/messages/likes"><div>❤</div><p>赞和收藏</p></article>
        <article data-go="#/messages/follows"><div>👤</div><p>新增关注</p></article>
        <article data-go="#/messages/comments"><div>💬</div><p>评论和@</p></article>
      </div>
      ${uiState.messageFeedback ? `<div class="msg-action-feedback">${uiState.messageFeedback}</div>` : ""}

      <div class="msg-tabs">
        ${["全部", "故事", "私聊", "群聊", "通知"].map((x) => `<button class="${uiState.messageTab === x ? "active" : ""}" data-action="message-tab" data-tab="${x}">${x}</button>`).join("")}
      </div>

      <div class="msg-list">
        ${filtered
          .map(
            (item, idx) => `
          <article class="msg-item" data-action="open-message-thread" data-id="${item.id}">
            <div class="avatar user-avatar-click">${getAvatarText(item.name)}</div>
            <div class="copy">
              <h4>${item.name}</h4>
              <p>${item.preview}</p>
            </div>
            <div class="meta">
              <time>${item.time}</time>
              ${item.badge ? `<span>${item.badge}</span>` : ""}
            </div>
          </article>
        `
          )
          .join("")}
      </div>
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
            <span class="avatar user-avatar-click">${item.user.slice(0, 1)}</span>
            <div class="msg-notice-copy">
              <h4>${item.user}</h4>
              <p>${item.action} · ${item.date}</p>
              <small data-action="message-like-thanks" data-id="${item.id}" data-user="${item.user}" data-user-id="${item.userId || ""}">${item.note}</small>
            </div>
            <img src="${item.cover}" alt="${item.user}互动封面" data-action="message-open-content" data-world="${item.worldId}" />
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
            <span class="avatar user-avatar-click">${item.user.slice(0, 1)}</span>
            <div class="msg-notice-copy">
              <h4>${item.user}</h4>
              <p>${item.intro} · ${item.date}</p>
            </div>
            <button class="msg-follow-btn" data-action="message-follow-action" data-id="${item.id}" data-user="${item.user}" data-user-id="${item.userId || ""}" data-label="${item.action}">${uiState.messageFollowActions[item.id] || item.action}</button>
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
              <span class="avatar user-avatar-click">${item.user.slice(0, 1)}</span>
              <div class="msg-notice-copy">
                <h4>${item.user}</h4>
                <p>${item.action} · ${item.date}</p>
              </div>
              <img src="${item.cover}" alt="${item.user}评论封面" data-action="message-open-content" data-world="${item.worldId}" />
            </div>
            <p class="msg-comment-text">${item.text}</p>
            <div class="msg-comment-reply">${item.reply}</div>
            <footer><button data-action="message-comment-like" data-id="${item.id}" data-user="${item.user}">${uiState.messageCommentLikes[item.id] ? "♥ 已赞" : "♡ 赞"}</button><button data-action="message-comment-reply" data-id="${item.id}" data-user="${item.user}">↩ 回复</button></footer>
            ${
              uiState.messageReplyTargetId === item.id
                ? `
              <div class="msg-inline-reply">
                <input data-field="message-reply-draft" value="${escapeHtml(uiState.messageReplyDraft)}" placeholder="回复 ${item.user}..." />
                <button data-action="message-comment-reply-send" data-id="${item.id}" data-user="${item.user}">发送</button>
              </div>
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
  const media =
    item.type === "image"
      ? `
    <div class="dynamic-media image-grid">
      <div></div><div></div><div></div>
    </div>
  `
      : item.type === "video"
        ? `
    <div class="dynamic-media video-cover">
      <span>▶ 00:58</span>
    </div>
  `
        : item.type === "story"
          ? `
    <div class="dynamic-media story-share" data-action="open-world-detail" data-id="${getSafeWorldId(item.worldId || "", 0)}">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
      <button data-action="open-world-detail" data-id="${getSafeWorldId(item.worldId || "", 0)}">去开刷</button>
    </div>
  `
          : "";

  return `
    <article class="dynamic-card ${item.type}" data-action="open-dynamic-detail" data-id="${item.id}" data-user="${item.author}">
      <header class="dynamic-user">
        <span class="avatar user-avatar-click" data-user="${item.author}">${item.author.slice(0, 1)}</span>
        <div>
          <strong>${item.author}</strong>
          <small>${item.handle} · ${item.time}</small>
        </div>
      </header>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
      ${media}
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
  ensureDynamicCommentsLoaded(item);

  const hero =
    item.type === "image"
      ? `<div class="dynamic-detail-hero image"><div></div><div></div><div></div></div>`
      : item.type === "video"
        ? `<div class="dynamic-detail-hero video"><span>▶ 01:12</span></div>`
        : item.type === "story"
          ? `<div class="dynamic-detail-hero story"><h3>${item.title}</h3><p>${item.text}</p><button data-action="open-world-detail" data-id="${getSafeWorldId(item.worldId || "", 0)}">去玩这个故事</button></div>`
          : "";

  return renderExploreShell(`
    <section class="dynamic-detail-page">
      <div class="dynamic-detail-card" data-user="${item.author}">
        <header class="dynamic-user">
          <span class="avatar user-avatar-click" data-user="${item.author}">${item.author.slice(0, 1)}</span>
          <div>
            <strong>${item.author}</strong>
            <small>${item.handle} · ${item.time}</small>
          </div>
        </header>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        ${hero}
        <div class="dynamic-tags">${item.tags.map((tag) => `<span>#${tag}</span>`).join("")}</div>
        <div class="dynamic-detail-actions">
          <button class="${meta.liked ? "active" : ""}" data-action="toggle-dynamic-like">♡ ${formatCount(meta.likes)}</button>
          <button class="${meta.favorited ? "active" : ""}" data-action="toggle-dynamic-favorite">☆ ${meta.favorited ? "已收藏" : "收藏"}</button>
          <button data-action="focus-dynamic-comment">💬 评论 ${formatCount(meta.commentsCount)}</button>
          <button data-action="share-dynamic">↗ 分享</button>
        </div>
        ${uiState.dynamicShareFeedback ? `<p class="dynamic-share-feedback">${uiState.dynamicShareFeedback}</p>` : ""}
      </div>

      <div class="dynamic-comments">
        <h3>评论 ${formatCount(meta.commentsCount)}</h3>
        <div class="dynamic-comment-input-wrap">
          <input class="dynamic-comment-input" data-field="dynamic-comment" value="${escapeHtml(uiState.dynamicCommentDraft)}" placeholder="说点什么..." />
          <button data-action="submit-dynamic-comment">发送</button>
        </div>
        <div class="dynamic-comment-list">
          ${meta.commentsLoading ? `<p class="dynamic-comments-loading">评论加载中...</p>` : ""}
          ${meta.comments
            .map(
              (c) => `
            <article class="dynamic-comment-item">
              <span class="avatar user-avatar-click">${c.user.slice(0, 1)}</span>
              <div>
                <strong>${c.user}</strong>
                <p>${c.text}</p>
                <small>${c.time}</small>
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

  const tab = uiState.meContentTab;
  const creatorWorks = buildCreatorWorks();
  const feed = ME_CONTENT_LIBRARY[tab] || [];
  const creatorTitleSet = new Set(creatorWorks.map((x) => x.title));
  const ownFeed = tab === "works"
    ? feed.filter((x) => !creatorTitleSet.has(x.title))
    : feed;

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
    works: visitorWorks,
    likes: [],
    favorites: [],
    history: []
  };
  const uniqueFeed = viewingOther ? (visitorFeedByTab[tab] || []) : ownFeed;

  const displayedName = viewingOther ? (viewedProfile?.name || viewedName || "Drama 用户") : uiState.profile.name;
  const displayedHandle = viewingOther ? (viewedProfile?.handle || toHandle(displayedName)) : uiState.profile.handle;
  const displayedBio = viewingOther ? (viewedProfile?.bio || "热爱创作与互动剧情") : uiState.profile.bio;
  const storyCount = viewingOther ? toMetricCount(viewedProfile?.stats?.works || 0) : uiState.meStats.storyCount;
  const likedCount = viewingOther ? 0 : uiState.meStats.likedCount;
  const fansCount = viewingOther ? toMetricCount(viewedProfile?.stats?.fans || 0) : uiState.meStats.fansCount;
  const coinCount = viewingOther ? 0 : (uiState.userCoins || 0);
  const avatarText = getAvatarText(displayedName);
  const coverClass = uiState.meHeroCover ? "me-hero me-hero-cover" : "me-hero";
  const coverStyle = uiState.meHeroCover ? `style='--me-hero-cover:${uiState.meHeroCover};'` : "";
  const meMenuGroups = [
    ["添加好友", "创作者中心"],
    ["我的草稿", "浏览记录", "我的下载"],
    ["订单", "购物车", "钱包"],
    ["小程序"],
    ["社区公约"]
  ];
  const formatModeTag = (mode = "") => {
    if (mode === "virtual_character") return "虚拟人物";
    if (mode === "short_narrative") return "短叙事";
    if (mode === "long_narrative") return "长叙事";
    return "创作";
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
  return renderExploreShell(`
    <section class="me-page">
      <article class="${coverClass} ${viewingOther ? "me-hero-visitor" : ""}" ${coverStyle}>
        <div class="me-hero-nav">
          ${
            viewingOther
              ? `<button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button><div></div>`
              : `
            <button class="me-menu-trigger" data-action="toggle-me-menu" aria-label="打开菜单">
              <span></span><span></span><span></span>
            </button>
            <div class="me-hero-nav-right">
              <button class="me-nav-icon" data-action="me-menu-feedback" data-text="扫一扫即将上线" aria-label="扫一扫">⌲</button>
              <button class="me-nav-icon" data-action="me-menu-feedback" data-text="分享能力即将上线" aria-label="分享">↗</button>
            </div>
          `
          }
        </div>
        <div class="me-hero-top">
          <button
            class="me-avatar"
            data-action="open-profile-avatar-preview"
            data-avatar-name="${escapeHtml(displayedName)}"
            data-avatar-handle="${escapeHtml(displayedHandle)}"
            data-avatar-text="${escapeHtml(avatarText)}"
          >${avatarText}</button>
          <div class="me-meta">
            <h2>${escapeHtml(displayedName)}</h2>
            <p>${escapeHtml(displayedHandle)}</p>
            <small>${escapeHtml(displayedBio)}</small>
          </div>
          <div class="me-hero-actions">
            ${
              viewingOther
                ? `
              <button class="me-edit-btn ${Boolean(viewedProfile?.isFollowedByMe) ? "active" : ""}" data-action="toggle-follow-author">
                ${Boolean(viewedProfile?.isFollowedByMe) ? "已关注" : "关注"}
              </button>
              <button class="me-edit-btn ghost" data-action="me-visitor-chat">私信</button>
            `
                : `
              <button class="me-edit-btn" data-action="open-profile-edit-modal">编辑资料</button>
              <button class="me-setting-btn" data-go="#/me/settings" aria-label="设置">⚙</button>
            `
            }
          </div>
        </div>
        <div class="me-stats">
          <button data-action="noop"><b>${formatMetricCount(storyCount)}</b> 故事数</button>
          <button data-action="noop"><b>${formatMetricCount(likedCount)}</b> 获赞量</button>
          <button ${viewingOther ? 'data-action="noop"' : 'data-go="#/me/followers"'}><b>${formatMetricCount(fansCount)}</b> 粉丝</button>
          <button ${viewingOther ? 'data-action="noop"' : 'data-go="#/me/coins"'}><b>${formatMetricCount(coinCount)}</b> 马内</button>
        </div>
      </article>

      <article class="me-content-card">
        <div class="me-tab-row">
          <button class="${tab === "works" ? "active" : ""}" data-action="me-content-tab" data-tab="works">作品</button>
          <button class="${tab === "likes" ? "active" : ""}" data-action="me-content-tab" data-tab="likes">喜欢</button>
          <button class="${tab === "favorites" ? "active" : ""}" data-action="me-content-tab" data-tab="favorites">收藏</button>
          <button class="${tab === "history" ? "active" : ""}" data-action="me-content-tab" data-tab="history">浏览</button>
        </div>
        <div class="me-content-grid">
          ${
            tab === "works"
              ? [
                  ...creatorWorks.map(
                    (x) => `
              <article class="home-card me-home-card creator-work-card" data-action="noop">
                <div class="home-cover creator-cover mode-${x.mode}">
                  ${x.status !== "published" ? '<div class="creator-draft-mask"><span>草稿箱</span></div>' : ""}
                </div>
                <div class="home-body">
                  <h4>${x.title}</h4>
                  <div class="home-tags">
                    <span>${formatModeTag(x.mode)}</span>
                    <span>${x.status === "published" ? "已发布" : "草稿"}</span>
                  </div>
                  <div class="home-author">${escapeHtml(displayedName)}</div>
                  <div class="home-metrics">
                    <span>${escapeHtml(x.subtitle || "创作作品")}</span>
                    <span>${escapeHtml(x.summary || "")}</span>
                  </div>
                </div>
              </article>
            `
                  ),
                  ...uniqueFeed.map(
                    (x) => `
              <article class="home-card me-home-card" ${hasWorldCard(x.id) ? `data-action="open-world-detail" data-id="${x.id}"` : 'data-action="noop"'}>
                <div class="home-cover" style="background:${getWorldCoverStyle({ ...x, author: displayedName }, x.id || x.title || "me-card")}"></div>
                <div class="home-body">
                  <h4>${x.title}</h4>
                  <div class="home-tags">
                    ${splitMetaToTags(x.meta).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
                  </div>
                  <div class="home-author">${escapeHtml(displayedName)}</div>
                  <div class="home-metrics">
                    ${splitStatToMetrics(x.stat).map((s) => `<span>${escapeHtml(s)}</span>`).join("")}
                  </div>
                </div>
              </article>
            `
                  )
                ].join("")
              : uniqueFeed
                  .map(
                    (x) => `
              <article class="home-card me-home-card" ${hasWorldCard(x.id) ? `data-action="open-world-detail" data-id="${x.id}"` : 'data-action="noop"'}>
                <div class="home-cover" style="background:${getWorldCoverStyle({ ...x, author: displayedName }, x.id || x.title || "me-card")}"></div>
                <div class="home-body">
                  <h4>${x.title}</h4>
                  <div class="home-tags">
                    ${splitMetaToTags(x.meta).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
                  </div>
                  <div class="home-author">${escapeHtml(displayedName)}</div>
                  <div class="home-metrics">
                    ${splitStatToMetrics(x.stat).map((s) => `<span>${escapeHtml(s)}</span>`).join("")}
                  </div>
                </div>
              </article>
            `
                  )
                  .join("")
          }
          ${
            tab !== "works" && uniqueFeed.length === 0
              ? `<div class="me-content-empty-tip">暂无内容</div>`
              : ""
          }
        </div>
      </article>
      ${
        viewingOther
          ? ""
          : `
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
                  <button data-action="me-menu-feedback" data-text="${item}功能待接入">
                    <span class="me-side-item-icon"></span>
                    <span>${item}</span>
                  </button>
                `
                  )
                  .join("")}
              </div>
            `
              )
              .join("")}
            <div class="me-side-bottom">
              <button data-action="me-menu-feedback" data-text="扫一扫即将上线"><span>⌲</span><small>扫一扫</small></button>
              <button data-action="me-menu-feedback" data-text="帮助与客服即将上线"><span>◌</span><small>帮助与客服</small></button>
              <button data-go="#/me/settings"><span>⚙</span><small>设置</small></button>
            </div>
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
  const tab = uiState.meRelationTab;
  const query = (uiState.meRelationSearch || "").trim().toLowerCase();
  const isFan = (x) => Boolean(x?.isFan || x?.tab === "粉丝" || x?.tab === "朋友");
  const isFollowing = (x) => Boolean(x?.isFollowing || x?.tab === "关注" || x?.tab === "朋友");
  const fansTotal = ME_RELATION_USERS.filter((x) => isFan(x)).length;
  const followsTotal = ME_RELATION_USERS.filter((x) => isFollowing(x)).length;
  const mutualTotal = ME_RELATION_USERS.filter((x) => isFan(x) && isFollowing(x)).length;
  const list = ME_RELATION_USERS.filter((x) => {
    if (tab === "粉丝") return isFan(x) && !isFollowing(x);
    if (tab === "关注") return isFollowing(x) && !isFan(x);
    return isFan(x) && isFollowing(x);
  }).filter((x) => {
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
              <button class="msg-follow-btn" data-action="me-follower-follow-toggle" data-id="${x.id}">${uiState.meRelationFollowing[x.id] ? "已关注" : "关注"}</button>
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
  "#/auth/phone": pageLogin,
  "#/auth/wechat": pageLogin,
  "#/theater/home": pageTheater,
  "#/theater/filter": pageFilter,
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

function render() {
  const current = getCurrentRoutePath();
  const currentFullHash = window.location.hash || "#/theater/home";
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
  const active = document.activeElement instanceof HTMLInputElement
    ? document.activeElement
    : null;
  const activeField = active?.getAttribute("data-field") || "";
  const activeCommentId = active?.getAttribute("data-comment-id") || "";
  const preserveWorldInput = (current === "#/world/detail")
    && (activeField === "world-comment-draft" || activeField === "world-reply-draft");
  const preserveSelectionStart = preserveWorldInput ? Number(active?.selectionStart ?? -1) : -1;
  const preserveSelectionEnd = preserveWorldInput ? Number(active?.selectionEnd ?? -1) : -1;

  document.body.classList.toggle("play-route", current.startsWith("#/play"));
  document.body.classList.toggle("message-thread-route", current.startsWith("#/messages/thread"));
  document.body.classList.toggle("world-detail-route", current === "#/world/detail");
  document.body.classList.toggle("auth-route", current.startsWith("#/auth"));
  const renderer = renderers[current] || pageLogin;
  app.innerHTML = renderer();
  syncWorldRoleScroll();
  ensureCarouselTimer();
  ensureDramaHeroTimer();
  ensureMessageRealtimeSync();
  if (current.startsWith("#/messages/thread")) {
    scrollThreadToBottom();
    uiState.messageThreadAutoScrollOnEnter = false;
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
  ensureFullDataOnDemand(current);
}

function needsFullData(hash) {
  return hash.startsWith("#/messages") || hash.startsWith("#/me");
}

function ensureFullDataOnDemand(hash) {
  if (uiState.bootstrapFullLoaded || uiState.bootstrapFullLoading) return;
  if (!needsFullData(hash)) return;
  if (!uiState.isLoggedIn || !uiState.currentUserId) return;
  if (tryHydrateFullCache(uiState.currentUserId)) {
    render();
    return;
  }
  uiState.bootstrapFullLoading = true;
  void bootstrapClientDataFull(uiState.currentUserId)
    .then(() => {
      uiState.bootstrapFullLoaded = true;
    })
    .catch(() => {})
    .finally(() => {
      uiState.bootstrapFullLoading = false;
      render();
    });
}

function focusSearchInputIfNeeded() {
  if (!uiState.searchAutoFocus) return;
  const inputs = [...document.querySelectorAll(".xh-mobile-search-input")].filter((node) => node instanceof HTMLInputElement);
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

function scrollThreadToBottom(retry = 0) {
  requestAnimationFrame(() => {
    const wrap = document.querySelector(".dm-modern-messages");
    if (!(wrap instanceof HTMLElement)) return;
    const lastBubble = wrap.querySelector(".dm-modern-row:last-child, .dm-time-sep:last-child");
    if (lastBubble instanceof HTMLElement) {
      lastBubble.scrollIntoView({ block: "end", inline: "nearest" });
    }
    wrap.scrollTop = wrap.scrollHeight;
    setTimeout(() => {
      wrap.scrollTop = wrap.scrollHeight;
      if (retry < 4) scrollThreadToBottom(retry + 1);
    }, 40);
  });
}
function ensureMessageRealtimeSync() {
  const canSync = uiState.isLoggedIn && Boolean(uiState.currentUserId);
  if (!canSync) {
    if (messageRealtimeTimer) {
      clearInterval(messageRealtimeTimer);
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
    return;
  }
  const closeStream = () => {
    if (!messageRealtimeEventSource) return;
    messageRealtimeEventSource.close();
    messageRealtimeEventSource = null;
  };
  const runSync = () => {
    if (messageRealtimeSyncing) return;
    messageRealtimeSyncing = true;
    const liveHash = window.location.hash || "";
    const liveOnThreadPage = liveHash.startsWith("#/messages/thread");
    void syncMessageInbox()
      .then((inboxChanged) => {
        if (!liveOnThreadPage) return { inboxChanged, threadChanged: false };
        return syncActiveConversationThread().then((threadChanged) => ({ inboxChanged, threadChanged }));
      })
      .then(({ inboxChanged = false, threadChanged = false } = {}) => {
        const activeId = getActiveConversationId();
        if (liveOnThreadPage && activeId && shouldHeartbeatPresence(activeId)) {
          void markConversationReadOnServer(activeId)
            .then(() => {
              uiState.messageReadAckConversationId = activeId;
              markMessageRead(activeId);
              render();
            })
            .catch(() => {
              uiState.messagePresenceBeatAt[activeId] = 0;
            });
        }
        if (inboxChanged || threadChanged) {
          render();
          if (threadChanged) {
            scrollThreadToBottom();
          }
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
    const activeId = getActiveConversationId();
    const onThread = (window.location.hash || "").startsWith("#/messages/thread");
    const isActiveThread = onThread && activeId === conversationId;
    const inserted = upsertThreadMessageFromServer(conversationId, message, uiState.currentUserId);
    const fromMe = String(message.sender_id || "") === String(uiState.currentUserId || "");
    const preview = String(message.content || "").trim() || "新消息";
    const time = formatThreadClock(message.created_at);
    updateMessageInboxPreview(conversationId, preview, { time });
    const inboxItem = getMessageInboxItem(conversationId);
    if (!inboxItem) {
      MESSAGE_INBOX.unshift({
        id: conversationId,
        name: "会话",
        preview,
        type: "私聊",
        time,
        badge: 0
      });
    }
    if (fromMe || isActiveThread) {
      markMessageRead(conversationId);
    } else {
      const item = getMessageInboxItem(conversationId);
      if (item) item.badge = (Number(item.badge) || 0) + 1;
    }
    if (isActiveThread && shouldHeartbeatPresence(conversationId)) {
      void markConversationReadOnServer(conversationId)
        .then(() => {
          uiState.messageReadAckConversationId = conversationId;
          markMessageRead(conversationId);
          render();
        })
        .catch(() => {
          uiState.messagePresenceBeatAt[conversationId] = 0;
        });
    }
    if (inserted || !fromMe || isActiveThread) {
      render();
      if (isActiveThread) scrollThreadToBottom();
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
      render();
      return;
    }
    const prevPeer = uiState.messagePeerPresence[conversationId] || {};
    uiState.messagePeerPresence[conversationId] = {
      ...prevPeer,
      lastReadAt,
      online: true
    };
    const changed = applyPeerReadReceipt(conversationId, lastReadAt);
    if (changed) render();
  };

  runSync();
  if (!messageRealtimeTimer) {
    messageRealtimeTimer = setInterval(runSync, 30_000);
  }
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
    if (!messageRealtimeTimer) messageRealtimeTimer = setInterval(runSync, 2_000);
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
  const inCommunitySearchFlow = window.location.hash.startsWith("#/community");
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
  const loginAvatarTrigger = event.target.closest(".xh-avatar-btn.guest, .avatar.guest");
  if (loginAvatarTrigger) {
    setPostLoginRedirectHash(window.location.hash || "#/theater/home");
    window.location.hash = "#/auth/login";
    return;
  }
  const profileAvatarTrigger = event.target.closest(".user-avatar-click");
  if (profileAvatarTrigger) {
    const userName = resolveUserNameFromNode(profileAvatarTrigger);
    openAuthorProfileByName(userName);
    render();
    return;
  }

  const clickedInSearch = event.target.closest(
    ".xh-search-wrap, .xh-mobile-search-host, .xh-mobile-search-btn, .xh-mobile-inline-search-btn, .community-search-portal"
  );
  if ((uiState.searchPanelOpen || uiState.communitySearchPanelOpen) && !clickedInSearch) {
    uiState.searchPanelOpen = false;
    uiState.communitySearchPanelOpen = false;
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
    if (action === "open-search-panel") {
      const openKey = inCommunitySearchFlow ? "communitySearchPanelOpen" : "searchPanelOpen";
      if (!uiState[openKey]) {
        uiState[openKey] = true;
        uiState.searchAutoFocus = true;
        render();
      } else {
        uiState.searchAutoFocus = true;
        focusSearchInputIfNeeded();
      }
      return;
    }
    if (action === "close-search-panel") {
      if (inCommunitySearchFlow) uiState.communitySearchPanelOpen = false;
      else uiState.searchPanelOpen = false;
      render();
      return;
    }
    if (action === "submit-search") {
      const searchScope = actionTarget.closest(".xh-search, .xh-mobile-search-row, .search-mobile-global-field, .community-search-wrap");
      const scopeInput = searchScope?.querySelector("input");
      const directValue = (scopeInput instanceof HTMLInputElement ? scopeInput.value : "").trim();
      const fallbackValue = (inCommunitySearchFlow ? uiState.communitySearchQuery : uiState.searchQuery).trim();
      executeSearch(directValue || fallbackValue);
      return;
    }
    if (action === "cancel-search-results") {
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
      uiState.messageSearchOpen = !uiState.messageSearchOpen;
      if (!uiState.messageSearchOpen) {
        uiState.messageSearchQuery = "";
        uiState.messageSearchKeyword = "";
      }
      render();
      return;
    }
    if (action === "message-menu-action") {
      const label = actionTarget.getAttribute("data-label") || "功能";
      uiState.messagesPlusOpen = false;
      showMessageFeedback(`${label}功能已打开（占位）`);
      return;
    }
    if (action === "message-search-submit") {
      uiState.messageSearchKeyword = (uiState.messageSearchQuery || "").trim();
      render();
      return;
    }
    if (action === "message-search-clear") {
      uiState.messageSearchQuery = "";
      uiState.messageSearchKeyword = "";
      render();
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
      const worldId = getSafeWorldId(actionTarget.getAttribute("data-world") || "", 0);
      setSelectedWorldId(worldId);
      window.location.hash = "#/world/detail";
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
      if (id) {
        const current = uiState.messageFollowActions[id] || label;
        if (current === "关注") uiState.messageFollowActions[id] = "已关注";
        else if (current === "回关") uiState.messageFollowActions[id] = "已回关";
        else if (current === "已关注") uiState.messageFollowActions[id] = "取消关注";
        else if (current === "已回关") uiState.messageFollowActions[id] = "取消回关";
        else uiState.messageFollowActions[id] = label;
      }
      showMessageFeedback(`${uiState.messageFollowActions[id] || label} ${user} 成功`);
      return;
    }
    if (action === "message-comment-like") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "评论";
      if (id) uiState.messageCommentLikes[id] = !uiState.messageCommentLikes[id];
      showMessageFeedback(`${uiState.messageCommentLikes[id] ? "已点赞" : "已取消点赞"} ${user} 的评论`);
      return;
    }
    if (action === "message-comment-reply") {
      const id = actionTarget.getAttribute("data-id") || "";
      const user = actionTarget.getAttribute("data-user") || "评论";
      uiState.messageReplyTargetId = id;
      uiState.messageReplyDraft = `@${user} `;
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
      const text = (uiState.messageReplyDraft || "").trim();
      if (!text) return;
      if (id) {
        const idx = MESSAGE_COMMENTS.findIndex((x) => x.id === id);
        if (idx >= 0) {
          MESSAGE_COMMENTS[idx].reply = text;
          MESSAGE_COMMENTS[idx].date = "刚刚";
        }
      }
      uiState.messageReplyTargetId = "";
      uiState.messageReplyDraft = "";
      showMessageFeedback(`已回复 ${user}`);
      return;
    }
    if (action === "message-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab) {
        uiState.messageTab = tab;
        render();
      }
      return;
    }
    if (action === "me-content-tab") {
      const tab = actionTarget.getAttribute("data-tab");
      if (tab && ["works", "likes", "favorites", "history"].includes(tab)) {
        uiState.meContentTab = tab;
        render();
      }
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
      uiState.meFeedback = actionTarget.getAttribute("data-text") || "功能待接入";
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
    if (action === "me-hero-cover-reset") {
      uiState.meHeroCover = "";
      uiState.meFeedback = "已恢复默认背景";
      render();
      return;
    }
    if (action === "me-follower-follow-toggle") {
      uiState.meFeedback = "关注能力待接入，当前仅展示真实关系数据";
      render();
      return;
    }
    if (action === "me-follower-chat") {
      const name = actionTarget.getAttribute("data-name") || "对方";
      const targetUserId = actionTarget.getAttribute("data-id") || "";
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
      if (id) {
        if (!isUuid(id)) {
          uiState.messageFeedback = "会话ID无效，请从真实消息列表进入";
          render();
          return;
        }
        uiState.selectedMessageId = id;
        uiState.messageReadAckConversationId = "";
        uiState.messagePresenceBeatAt[id] = 0;
        uiState.messageThreadAutoScrollOnEnter = true;
        uiState.messageThreadForceBottomUntil = Date.now() + 1800;
        markMessageRead(id);
        moveMessageToTop(id);
      }
      uiState.messageThreadToolsOpen = false;
      uiState.messageThreadMenuOpen = false;
      window.location.hash = "#/messages/thread";
      return;
    }
    if (action === "toggle-message-thread-menu") {
      uiState.messageThreadMenuOpen = !uiState.messageThreadMenuOpen;
      render();
      return;
    }
    if (action === "pin-message-thread") {
      const activeId = uiState.selectedMessageId || MESSAGE_INBOX[0]?.id || "";
      moveMessageToTop(activeId);
      uiState.messageThreadMenuOpen = false;
      showMessageFeedback("已置顶该会话");
      return;
    }
    if (action === "mute-message-thread") {
      uiState.messageThreadMenuOpen = false;
      showMessageFeedback("已开启消息免打扰");
      return;
    }
    if (action === "clear-message-thread") {
      uiState.messageThreadMenuOpen = false;
      showMessageFeedback("清空聊天待接入后端接口，当前仅支持真实消息展示");
      render();
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
        uiState.messageFeedback = "请先打开一个真实会话再发送";
        render();
        return;
      }
      const draft = uiState.messageThreadDraft;
      uiState.messageThreadDraft = "";
      uiState.messageThreadToolsOpen = false;
      uiState.messageThreadMenuOpen = false;
      render();
      void sendMessageToThread(activeId, text)
        .then((message) => {
          upsertThreadMessageFromServer(activeId, message || {}, uiState.currentUserId);
          updateMessageInboxPreview(activeId, String(message?.content || text), {
            time: formatThreadClock(message?.created_at),
            createdAt: String(message?.created_at || "")
          });
          markMessageRead(activeId);
          uiState.messageReadAckConversationId = "";
          render();
          requestAnimationFrame(() => {
            const wrap = document.querySelector(".dm-modern-messages");
            if (wrap) wrap.scrollTop = wrap.scrollHeight;
          });
        })
        .catch((err) => {
          uiState.messageThreadDraft = draft;
          uiState.messageFeedback = `发送失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
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
        showPlaySystemHint(`模型已切换：${model}`);
      }
      return;
    }
    if (action === "play-generate-image") {
      uiState.playSceneImageReady = true;
      uiState.playToolsExpanded = false;
      showPlaySystemHint("已生成本回合场景图。");
      return;
    }
    if (action === "play-generate-video") {
      uiState.playToolsExpanded = false;
      showPlaySystemHint("文生视频功能即将开放。");
      return;
    }
    if (action === "play-export-record") {
      uiState.playToolsExpanded = false;
      showPlaySystemHint("记录已复制到剪贴板。");
      return;
    }
    if (action === "play-bookmark-turn") {
      uiState.playToolsExpanded = false;
      showPlaySystemHint(`已标记第 ${uiState.playRound} 幕关键节点。`);
      return;
    }
    if (action === "play-random-action") {
      const candidates = getPlayIdeaPool(getSelectedWorld());
      const text = candidates[Math.floor(Math.random() * candidates.length)];
      uiState.playActionDraft = text;
      uiState.playToolsExpanded = false;
      showPlaySystemHint("已生成随机行动建议。");
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
      uiState.playIdeaOptions = pickPlayGuideOptions(getSelectedWorld(), 3);
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
      uiState.playIdeaOptions = pickPlayGuideOptions(getSelectedWorld(), 3);
      render();
      return;
    }
    if (action === "play-idea-pick") {
      const text = actionTarget.getAttribute("data-text");
      if (!text) return;
      uiState.playIdeaModalOpen = false;
      if (uiState.playRequesting) {
        showPlaySystemHint("正在生成中，请稍后再试。");
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
        if (input instanceof HTMLInputElement) {
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
        uiState.workshopPendingCardId = card.id;
        uiState.workshopActiveCardId = card.id;
        uiState.workshopSaveDecisionOpen = true;
        uiState.workshopPublishModalOpen = false;
        render();
      });
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
      uiState.workshopFeedback = "已存入草稿箱，可在「我的-作品」中查看。";
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
      void publishWorkshopCardToApi(pendingId).then((ok) => {
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
      const prompt = String(uiState.workshopPaintPrompt || "").trim();
      if (!prompt) {
        uiState.workshopPaintFeedback = "请先输入提示词";
        render();
        return;
      }
      uiState.workshopPaintGenerating = true;
      uiState.workshopPaintFeedback = "正在通过 API 生成图片...";
      uiState.workshopPaintComposerOpen = false;
      render();
      void generateWorkshopPaintWithApi({
        prompt,
        style: uiState.workshopPaintStyle,
        ratio: uiState.workshopPaintRatio,
        negative: uiState.workshopPaintNegativePrompt,
        count: 4
      })
        .then(({ images, warnings }) => {
          uiState.workshopPaintResults = images;
          if (!images.length) {
            uiState.workshopPaintFeedback = "未返回图片，请调整提示词后重试。";
          } else {
            uiState.workshopPaintFeedback = `已生成 ${images.length} 张预览图${Array.isArray(warnings) && warnings.length ? `（${warnings.length} 张失败）` : ""}，你可以继续修改提示词再试。`;
          }
          uiState.workshopPaintGenerating = false;
          render();
        })
        .catch((error) => {
          uiState.workshopPaintGenerating = false;
          uiState.workshopPaintFeedback = `生成失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "workshop-paint-toggle-composer") {
      uiState.workshopPaintComposerOpen = !uiState.workshopPaintComposerOpen;
      render();
      return;
    }
    if (action === "workshop-paint-category") {
      const key = String(actionTarget.getAttribute("data-key") || "").trim();
      if (key === "all" || key === "sfw" || key === "nsfw" || key === "anime") {
        uiState.workshopPaintCategory = key;
        render();
      }
      return;
    }
    if (action === "workshop-paint-sort") {
      const key = String(actionTarget.getAttribute("data-key") || "").trim();
      if (key === "latest" || key === "hot" || key === "top_like") {
        uiState.workshopPaintSort = key;
        render();
      }
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
      if (inCommunitySearchFlow) uiState.communitySearchHistory = [];
      else uiState.searchHistory = [];
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
        render();
      }
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
    if (action === "community-sync-toggle") {
      uiState.communityComposeSync = !uiState.communityComposeSync;
      render();
      return;
    }
    if (action === "community-visibility") {
      uiState.communityComposeVisibility = uiState.communityComposeVisibility === "公开 · 社区内" ? "仅社区内可见" : "公开 · 社区内";
      render();
      return;
    }
    if (action === "community-create-cover") {
      const index = Number(actionTarget.getAttribute("data-cover"));
      const coverOptions = COMMUNITY_CARD_IMAGES.slice(0, 4);
      if (Number.isInteger(index) && coverOptions[index]) {
        uiState.communityCreateCover = coverOptions[index];
        render();
      }
      return;
    }
    if (action === "community-cover-upload-trigger") {
      const input = document.querySelector("[data-field='community-create-cover-file']");
      if (input instanceof HTMLInputElement) input.click();
      return;
    }
    if (action === "community-create-mask") {
      const value = Number(actionTarget.getAttribute("data-value"));
      if (value > 0 && value <= 1) {
        uiState.communityCreateMaskOpacity = value;
        render();
      }
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
      const name = (uiState.communityCreateName || "").trim();
      const desc = (uiState.communityCreateDesc || "").trim();
      const rawTags = (uiState.communityCreateTags || "").trim();
      if (!name || !desc) return;
      const id = `c_custom_${Date.now()}`;
      const tags = rawTags ? rawTags.split(/[、,/，\s]+/).filter(Boolean).slice(0, 5) : ["新社群"];
      COMMUNITY_LIST.unshift({
        id,
        name,
        desc,
        tags,
        members: "1人",
        online: "1",
        updated: "刚刚",
        gender: "不限",
        updatedHours: 0,
        memberCount: 1,
        cover: uiState.communityCreateCover,
        maskOpacity: uiState.communityCreateMaskOpacity
      });
      uiState.selectedCommunityId = id;
      uiState.communityCreatePublishedId = id;
      uiState.communityMyTab = "created";
      render();
      return;
    }
    if (action === "publish-community-post") {
      const text = (uiState.communityComposeText || "").trim();
      if (!text) return;
      const cid = uiState.selectedCommunityId || "c_1";
      const storyTitle = uiState.communityComposeStoryId
        ? FEED_DATA.find((x) => x.id === uiState.communityComposeStoryId)?.title
        : "";
      const post = {
        id: `cp_custom_${Date.now()}`,
        user: uiState.isLoggedIn ? "我" : "游客",
        time: "刚刚",
        title: "新发布动态",
        text,
        tag: "动态",
        likes: 0,
        stars: 0,
        comments: 0,
        featured: false,
        story: storyTitle || undefined,
        storyId: uiState.communityComposeStoryId || undefined
      };
      if (!COMMUNITY_POSTS[cid]) COMMUNITY_POSTS[cid] = [];
      COMMUNITY_POSTS[cid].unshift(post);
      uiState.selectedCommunityPostId = post.id;
      uiState.communityComposeText = "";
      uiState.communityComposeStoryId = "";
      uiState.communityPostPublished = true;
      render();
      setTimeout(() => {
        uiState.communityPostPublished = false;
        render();
      }, 1200);
      return;
    }
    if (action === "open-community-post") {
      const id = actionTarget.getAttribute("data-id");
      if (id) uiState.selectedCommunityPostId = id;
      window.location.hash = "#/community/post/detail";
      return;
    }
    if (action === "community-post-like") {
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      meta.liked = !meta.liked;
      meta.likes += meta.liked ? 1 : -1;
      render();
      return;
    }
    if (action === "community-post-star") {
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      meta.starred = !meta.starred;
      meta.stars += meta.starred ? 1 : -1;
      render();
      return;
    }
    if (action === "community-post-comment-focus") {
      const input = document.querySelector("[data-field='community-comment']");
      if (input instanceof HTMLInputElement) input.focus();
      return;
    }
    if (action === "community-post-comment-submit") {
      const text = (uiState.communityCommentDraft || "").trim();
      if (!text) return;
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      meta.comments.unshift({ user: uiState.isLoggedIn ? "我" : "游客", text, likes: 0 });
      meta.commentsCount += 1;
      uiState.communityCommentDraft = "";
      render();
      return;
    }
    if (action === "community-post-share") {
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      meta.shared = true;
      render();
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
      uiState.backstageTopBackgroundDraft = uiState.backstageTopBackground || "";
      window.location.hash = "#/messages/story/settings";
      return;
    }
    if (action === "save-backstage-settings") {
      uiState.backstageSignature = (uiState.backstageSignatureDraft || "").trim();
      uiState.backstageTopBackground = (uiState.backstageTopBackgroundDraft || "").trim();
      uiState.meFeedback = "幕后主页设置已保存";
      window.location.hash = "#/messages/story";
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
    if (action === "publish-dynamic") {
      if (uiState.dynamicPublishing) return;
      const title = (uiState.dynamicDraftTitle || "").trim();
      const text = (uiState.dynamicDraftText || "").trim();
      if (!title && !text) {
        uiState.dynamicShareFeedback = "请先输入标题或正文内容";
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
      void createDynamicPostAndSync({ title, text, type: uiState.dynamicComposerType })
        .then(() => {
          uiState.dynamicDraftTitle = "";
          uiState.dynamicDraftText = "";
          uiState.dynamicPublishing = false;
          uiState.showDynamicComposer = false;
          uiState.dynamicShareFeedback = "";
          uiState.dynamicPublishFeedback = "发布成功";
          window.location.hash = "#/messages/story";
          render();
          if (uiState.currentUserId) {
            void bootstrapClientDataFull(uiState.currentUserId)
              .then(() => {
                render();
              })
              .catch(() => {});
          }
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
      window.location.hash = "#/messages/detail";
      return;
    }
    if (action === "toggle-dynamic-like") {
      const current = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(current);
      if (!meta || !current?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const next = !meta.liked;
      const prevLiked = meta.liked;
      const prevLikes = meta.likes;
      meta.liked = next;
      meta.likes = Math.max(0, meta.likes + (next ? 1 : -1));
      syncDynamicItemMetrics(current.id, { likes: meta.likes, liked: meta.liked });
      render();
      void setDynamicReaction(current.id, "like", next)
        .then((post) => {
          if (!post) return;
          meta.likes = Number(post.likes_count || meta.likes);
          meta.liked = next;
          syncDynamicItemMetrics(current.id, { likes: meta.likes, liked: meta.liked });
          render();
        })
        .catch((err) => {
          meta.liked = prevLiked;
          meta.likes = prevLikes;
          syncDynamicItemMetrics(current.id, { likes: prevLikes, liked: prevLiked });
          uiState.dynamicShareFeedback = `点赞失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "toggle-dynamic-favorite") {
      const current = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(current);
      if (!meta || !current?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const next = !meta.favorited;
      const prevFavorited = meta.favorited;
      meta.favorited = next;
      syncDynamicItemMetrics(current.id, { favorited: meta.favorited });
      render();
      void setDynamicReaction(current.id, "favorite", next)
        .then((post) => {
          if (!post) return;
          meta.favorited = next;
          syncDynamicItemMetrics(current.id, {
            favorited: meta.favorited,
            star: Number(post.favorites_count || 0).toLocaleString()
          });
          render();
        })
        .catch((err) => {
          meta.favorited = prevFavorited;
          syncDynamicItemMetrics(current.id, { favorited: prevFavorited });
          uiState.dynamicShareFeedback = `收藏失败：${err instanceof Error ? err.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "share-dynamic") {
      uiState.dynamicShareFeedback = "已复制动态链接，快去分享给好友吧。";
      render();
      setTimeout(() => {
        if (uiState.dynamicShareFeedback) {
          uiState.dynamicShareFeedback = "";
          render();
        }
      }, 1500);
      return;
    }
    if (action === "focus-dynamic-comment") {
      const input = document.querySelector(".dynamic-comment-input");
      if (input instanceof HTMLInputElement) input.focus();
      return;
    }
    if (action === "submit-dynamic-comment") {
      const text = (uiState.dynamicCommentDraft || "").trim();
      if (!text) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const item = getDynamicById(uiState.selectedDynamicId);
      const meta = ensureDynamicMeta(item);
      if (!meta || !item?.id) return;
      const draft = uiState.dynamicCommentDraft;
      const optimistic = { user: "我", text, time: "刚刚" };
      meta.comments.unshift(optimistic);
      meta.commentsCount += 1;
      uiState.dynamicCommentDraft = "";
      syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
      render();
      void createDynamicCommentAndSync(item.id, text)
        .then((comment) => {
          if (comment) {
            meta.comments[0] = comment;
          }
          syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          render();
        })
        .catch((err) => {
          meta.comments = meta.comments.filter((c) => c !== optimistic);
          meta.commentsCount = Math.max(0, meta.commentsCount - 1);
          uiState.dynamicCommentDraft = draft;
          syncDynamicItemMetrics(item.id, { comments: meta.commentsCount });
          uiState.dynamicShareFeedback = `评论失败：${err instanceof Error ? err.message : "unknown"}`;
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
        window.location.hash = "#/world/detail";
      }
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
      window.location.hash = "#/drama/reserve/detail";
      return;
    }
    if (action === "carousel-prev") {
      uiState.worldCarouselIndex = (uiState.worldCarouselIndex + 2) % 3;
      render();
      return;
    }
    if (action === "carousel-next") {
      uiState.worldCarouselIndex = (uiState.worldCarouselIndex + 1) % 3;
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
      uiState.showWorldShareSheet = true;
      uiState.worldShareMode = "picker";
      uiState.worldShareSelectedUserId = "";
      uiState.worldShareSelectedUserName = "";
      uiState.worldShareDraft = "";
      uiState.worldShareFeedback = "";
      render();
      return;
    }
    if (action === "close-world-share") {
      uiState.showWorldShareSheet = false;
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
      uiState.worldShareDraft = `给你分享一个我觉得不错的故事卡：${getSelectedWorld()?.title || ""}`;
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
      const link = buildWorldShareUrl(getSelectedWorld());
      copyTextToClipboard(link);
      uiState.worldShareFeedback = "已复制当前卡片链接";
      render();
      setTimeout(() => {
        if (uiState.worldShareFeedback === "已复制当前卡片链接") {
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
      const world = getSelectedWorld();
      const shareLink = buildWorldShareUrl(world);
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
          <text x="100" y="820" font-size="64" font-family="Arial, sans-serif" fill="#111827" font-weight="700">${escapeHtml((world?.title || "未命名故事卡").slice(0, 22))}</text>
          <text x="100" y="900" font-size="38" font-family="Arial, sans-serif" fill="#4b5563">${escapeHtml((world?.desc || "来看看这张故事卡").slice(0, 60))}</text>
          <text x="100" y="1080" font-size="34" font-family="Arial, sans-serif" fill="#6b7280">作者：${escapeHtml(world?.author || "Drama 用户")}</text>
          <text x="100" y="1140" font-size="34" font-family="Arial, sans-serif" fill="#6b7280">主题：${escapeHtml(world?.theme || "主题")} · ${escapeHtml(world?.format || "模式")}</text>
          <rect x="80" y="1260" width="920" height="150" rx="24" fill="#ffffff" />
          <text x="112" y="1348" font-size="30" font-family="Arial, sans-serif" fill="#1f2937">${escapeHtml(shareLink.slice(0, 58))}</text>
        </svg>
      `;
      const encoded = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
      const anchor = document.createElement("a");
      anchor.href = encoded;
      anchor.download = `${(world?.title || "story-share").replace(/[\\/:*?"<>|]+/g, "_")}.svg`;
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
      const world = getSelectedWorld();
      const cardPayload = {
        worldId: String(world?.id || ""),
        title: String(world?.title || "未命名故事卡"),
        desc: String(world?.desc || "来看看这张故事卡"),
        author: String(world?.author || "")
      };
      const payload = extraText || `给你分享一个我觉得不错的故事卡：${cardPayload.title}`;
      void startOrReuseDirectConversation(targetUserId, targetName, { navigate: false })
        .then((conversationId) => {
          if (!conversationId) return;
          return sendMessageToThread(conversationId, payload, {
            messageType: "card",
            payload: cardPayload
          }).then(() => conversationId);
        })
        .then((conversationId) => {
          if (!conversationId) return;
          updateMessageInboxPreview(conversationId, `📨 故事卡：${cardPayload.title}`);
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
          const nextWorld = {
            ...world,
            liked: Boolean(stats.likedByMe),
            favorited: Boolean(stats.favoritedByMe),
            like: formatMetricCount(stats.likesCount),
            star: formatMetricCount(stats.favoritesCount)
          };
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
          const nextWorld = {
            ...world,
            liked: Boolean(stats.likedByMe),
            favorited: Boolean(stats.favoritedByMe),
            like: formatMetricCount(stats.likesCount),
            star: formatMetricCount(stats.favoritesCount)
          };
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
      state.activeReplyCommentId = commentId;
      if (!String(state.replyDraftByCommentId?.[commentId] || "").trim()) {
        const targetComment = (state.comments || []).find((x) => String(x.id || "") === commentId);
        if (targetComment?.user) {
          state.replyDraftByCommentId[commentId] = `@${targetComment.user} `;
        }
      }
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector(`.world-reply-editor input[data-comment-id="${commentId}"]`);
        if (input instanceof HTMLInputElement) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }
    if (action === "world-comment-reply-cancel") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      const state = getWorldCommentState(world.id, toMetricCount(world.comment));
      if (!state) return;
      state.activeReplyCommentId = "";
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
      const parentIdx = state.comments.findIndex((x) => String(x.id || "") === commentId);
      if (parentIdx < 0) return;
      const text = String(state.replyDraftByCommentId?.[commentId] || "").trim();
      if (!text) return;

      const parent = state.comments[parentIdx];
      if (!Array.isArray(parent.replies)) parent.replies = [];
      const optimisticReply = {
        id: `tmp_reply_${Date.now()}`,
        worldCardId: world.id,
        userId: String(uiState.currentUserId || ""),
        parentCommentId: commentId,
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
      persistWorldCommentsCache(world.id, state);
      render();

      void createWorldCardCommentAndSync(world.id, text, commentId)
        .then(({ comment }) => {
          state.submittingReplyByCommentId[commentId] = false;
          const latestParent = state.comments.find((x) => String(x.id || "") === commentId);
          if (!latestParent) {
            render();
            return;
          }
          if (!Array.isArray(latestParent.replies)) latestParent.replies = [];
          const idx = latestParent.replies.findIndex((x) => x === optimisticReply);
          if (idx >= 0) {
            latestParent.replies[idx] = comment || optimisticReply;
          }
          delete state.replyDraftByCommentId[commentId];
          persistWorldCommentsCache(world.id, state);
          render();
        })
        .catch((err) => {
          state.submittingReplyByCommentId[commentId] = false;
          const latestParent = state.comments.find((x) => String(x.id || "") === commentId);
          if (latestParent && Array.isArray(latestParent.replies)) {
            latestParent.replies = latestParent.replies.filter((x) => x !== optimisticReply);
          }
          state.error = err instanceof Error ? err.message : "回复失败";
          state.replyDraftByCommentId[commentId] = text;
          state.activeReplyCommentId = commentId;
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

      let removedTopLevel = false;
      let removedItem = null;
      let parentRef = null;
      const topIdx = state.comments.findIndex((x) => String(x.id || "") === commentId);
      if (topIdx >= 0) {
        removedTopLevel = true;
        removedItem = state.comments[topIdx];
        state.comments.splice(topIdx, 1);
      } else {
        for (const parent of state.comments) {
          if (!Array.isArray(parent.replies)) continue;
          const ridx = parent.replies.findIndex((x) => String(x.id || "") === commentId);
          if (ridx >= 0) {
            removedItem = parent.replies[ridx];
            parentRef = parent;
            parent.replies.splice(ridx, 1);
            break;
          }
        }
      }
      if (!removedItem) return;
      if (removedTopLevel) {
        state.commentsCount = Math.max(0, Number(state.commentsCount || 0) - 1);
        syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
      }
      state.deletingByCommentId[commentId] = true;
      if (state.activeReplyCommentId === commentId) state.activeReplyCommentId = "";
      persistWorldCommentsCache(world.id, state);
      render();

      void deleteWorldCardCommentAndSync(commentId)
        .then(({ commentsCount }) => {
          state.deletingByCommentId[commentId] = false;
          if (removedTopLevel) {
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
          if (removedTopLevel) {
            state.comments.unshift(removedItem);
            state.commentsCount = Number(state.commentsCount || 0) + 1;
            syncWorldStateEverywhere(world.id, { comment: formatMetricCount(state.commentsCount) });
          } else if (parentRef) {
            if (!Array.isArray(parentRef.replies)) parentRef.replies = [];
            parentRef.replies.unshift(removedItem);
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
      const idx = state.comments.findIndex((x) => String(x.id || "") === commentId);
      if (idx < 0) return;
      const item = state.comments[idx];
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
      const fallbackUserId = String(uiState.meViewedUserId || "").trim();
      const fallbackUserName = String(uiState.meViewedUserName || "").trim();
      const targetUserId = String(profile?.id || fallbackUserId || "").trim() || resolveAuthorIdByName(profile?.name || profile?.handle || fallbackUserName);
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
      if (uiState.modalProfile && !uiState.modalProfile.id) uiState.modalProfile.id = targetUserId;
      if (targetUserId === uiState.currentUserId) {
        uiState.authorFeedback = "不能关注自己";
        render();
        return;
      }
      if (!uiState.modalProfile) {
        uiState.modalProfile = buildAuthorProfileByName(
          fallbackUserName || AUTHOR_DIRECTORY[targetUserId]?.name || "Drama 用户",
          targetUserId
        );
      }
      const nextFollow = !Boolean(uiState.modalProfile?.isFollowedByMe);
      queuePendingFollowOp(targetUserId, nextFollow);
      persistFollowState(targetUserId, nextFollow);
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
          return bootstrapClientDataFull(uiState.currentUserId);
        })
        .then(() => {
          render();
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, !nextFollow);
          if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = !nextFollow;
          if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = !nextFollow;
          uiState.isFollowingAuthor = !nextFollow;
          uiState.authorFeedback = `操作失败：${error instanceof Error ? error.message : "unknown"}`;
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
      if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nextFollow;
      if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = nextFollow;
      uiState.authorFeedback = "";
      render();
      void setUserFollowRelation(targetUserId, nextFollow, { keepalive: true })
        .then((relation) => {
          const followedByMe = Boolean(relation?.followedByMe);
          clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, followedByMe);
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
          return bootstrapClientDataFull(uiState.currentUserId);
        })
        .then(() => {
          render();
        })
        .catch((error) => {
          const msg = error instanceof Error ? error.message : "";
          if (msg && msg !== "NETWORK_UNREACHABLE") clearPendingFollowOp(targetUserId);
          persistFollowState(targetUserId, nowFollowed);
          if (AUTHOR_DIRECTORY[targetUserId]) AUTHOR_DIRECTORY[targetUserId].followedByMe = nowFollowed;
          if (uiState.modalProfile?.id === targetUserId) uiState.modalProfile.isFollowedByMe = nowFollowed;
          uiState.authorFeedback = `操作失败：${error instanceof Error ? error.message : "unknown"}`;
          render();
        });
      return;
    }
    if (action === "me-visitor-chat") {
      const targetUserId = String(uiState.meViewedUserId || uiState.modalProfile?.id || "").trim();
      const targetName = String(uiState.meViewedUserName || uiState.modalProfile?.name || "对方").trim();
      if (!targetUserId) {
        uiState.messageFeedback = "未找到用户，无法发起私聊";
        render();
        return;
      }
      void openOrCreateDirectThread(targetUserId, targetName).catch((error) => {
        uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
        render();
      });
      return;
    }
    if (action === "open-author-dm") {
      const targetName = String(actionTarget.getAttribute("data-user") || uiState.modalProfile?.name || "对方").trim();
      const targetUserId = String(actionTarget.getAttribute("data-user-id") || uiState.modalProfile?.id || "").trim();
      void openOrCreateDirectThread(targetUserId, targetName).catch((error) => {
        uiState.messageFeedback = `发私信失败：${error instanceof Error ? error.message : "unknown"}`;
        render();
      });
      return;
    }
    if (action === "open-user-modal") {
      const userName = resolveUserNameFromNode(actionTarget) || actionTarget.getAttribute("data-user") || "";
      openAuthorProfileByName(String(userName).trim());
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
      uiState.profileDraft = { ...uiState.profile };
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
        avatarText: avatarText || getAvatarText(avatarName)
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
      render();
      return;
    }
    if (action === "save-profile-edit-modal") {
      uiState.profile = { ...uiState.profileDraft };
      uiState.showProfileEditModal = false;
      render();
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
  uiState.messageFeedback = "";
  uiState.meMenuOpen = false;
  uiState.showDynamicComposer = false;
  uiState.dynamicShareFeedback = "";
  uiState.showWorldShareSheet = false;
  uiState.showWorldShareImageModal = false;
  uiState.worldShareMode = "picker";
  uiState.worldShareFeedback = "";
  if (window.location.hash === go) {
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = go;
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
    if (target.classList.contains("profile-edit-input")) {
      const field = target.getAttribute("data-field");
      if (field === "name" || field === "handle" || field === "bio") {
        uiState.profileDraft[field] = target.value;
      }
      return;
    }
    const dynamicField = target.getAttribute("data-field");
    if (dynamicField === "dynamic-title") {
      uiState.dynamicDraftTitle = target.value;
      return;
    }
    if (dynamicField === "dynamic-text") {
      uiState.dynamicDraftText = target.value;
      return;
    }
    if (dynamicField === "dynamic-comment") {
      uiState.dynamicCommentDraft = target.value;
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
      return;
    }
    if (dynamicField === "community-comment") {
      uiState.communityCommentDraft = target.value;
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
      return;
    }
    if (dynamicField === "community-create-tags") {
      uiState.communityCreateTags = target.value;
      return;
    }
    if (dynamicField === "community-create-desc") {
      uiState.communityCreateDesc = target.value;
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
      uiState.messageReplyDraft = target.value;
      return;
    }
    if (dynamicField === "me-relation-search") {
      uiState.meRelationSearch = target.value;
      return;
    }
  }
  if (!(target instanceof HTMLInputElement)) return;
  if (target.closest(".xh-search") || target.classList.contains("xh-mobile-search-input")) {
    const inCommunitySearchFlow = window.location.hash.startsWith("#/community");
    if (inCommunitySearchFlow) {
      uiState.communitySearchQuery = target.value;
    } else {
      uiState.searchQuery = target.value;
    }
    const openKey = inCommunitySearchFlow ? "communitySearchPanelOpen" : "searchPanelOpen";
    if (!uiState[openKey]) {
      uiState[openKey] = true;
      render();
    }
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target instanceof HTMLSelectElement && target.getAttribute("data-field") === "community-compose-story") {
    uiState.communityComposeStoryId = target.value;
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
  if (!(target instanceof HTMLInputElement)) return;
  const field = target.getAttribute("data-field");
  if (field !== "community-create-cover-file" && field !== "me-hero-cover-file") return;
  const file = target.files?.[0];
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => {
    if (typeof reader.result === "string") {
      if (field === "community-create-cover-file") {
        uiState.communityCreateCover = `url("${reader.result}")`;
      } else {
        uiState.meHeroCover = `url(${reader.result})`;
        uiState.meFeedback = "背景已更新";
      }
      render();
    }
  };
  reader.readAsDataURL(file);
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.getAttribute("data-field") === "community-comment") {
    if (event.key === "Enter") {
      event.preventDefault();
      const text = (uiState.communityCommentDraft || "").trim();
      if (!text) return;
      const meta = ensureCommunityPostMeta(getSelectedCommunityPost());
      if (!meta) return;
      meta.comments.unshift({ user: uiState.isLoggedIn ? "我" : "游客", text, likes: 0 });
      meta.commentsCount += 1;
      uiState.communityCommentDraft = "";
      render();
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
      event.preventDefault();
      const text = (uiState.playActionDraft || "").trim();
      if (!text) return;
      void submitPlayTurn(text);
    }
    return;
  }
  if (target.classList.contains("dynamic-comment-input")) {
    if (event.key === "Enter") {
      event.preventDefault();
      const submitBtn = document.querySelector("[data-action='submit-dynamic-comment']");
      if (submitBtn instanceof HTMLElement) submitBtn.click();
    }
    return;
  }
  if (!target.closest(".xh-search") && !target.classList.contains("xh-mobile-search-input")) return;
  if (event.key === "Enter") {
    event.preventDefault();
    executeSearch(target.value);
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

window.addEventListener("hashchange", () => {
  render();
  syncMobileViewportForThread();
  const hash = getCurrentRoutePath();
  if (!hash.startsWith("#/messages/thread")) document.body.classList.remove("message-thread-input-focus");
  if (hash.startsWith("#/messages/thread")) {
    uiState.messageThreadForceBottomUntil = Date.now() + 1800;
    scrollThreadToBottom();
    return;
  }
  requestAnimationFrame(scrollCurrentViewToTop);
});

window.addEventListener("focus", () => {
  if (typeof messageRealtimeSyncRunner === "function") messageRealtimeSyncRunner();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (uiState.isLoggedIn && hasAuthSessionExpired()) {
    performLogoutAndRedirectToLogin();
    return;
  }
  if (typeof messageRealtimeSyncRunner === "function") messageRealtimeSyncRunner();
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
    scrollThreadToBottom();
  }, 80);
});

document.addEventListener("focusout", () => {
  if (!(window.location.hash || "").startsWith("#/messages/thread")) return;
  setTimeout(() => {
    const active = document.activeElement;
    const stillEditing = active instanceof HTMLInputElement && active.getAttribute("data-field") === "message-thread-draft";
    if (!stillEditing) document.body.classList.remove("message-thread-input-focus");
    syncMobileViewportForThread();
  }, 120);
});

async function startApp() {
  hydrateSelectedWorldId();
  const authUserId = hydrateAuthUserId();
  if (authUserId) {
    uiState.currentUserId = authUserId;
    uiState.isLoggedIn = true;
  }
  const hasCache = authUserId
    ? tryHydrateFullCache(authUserId)
    : tryHydrateFromCache();
  if (!window.location.hash || window.location.hash === "#/") {
    window.location.hash = authUserId ? "#/theater/home" : "#/auth/login";
  }
  if (hasCache && uiState.isLoggedIn && needsFullData(window.location.hash || "#/theater/home")) {
    tryHydrateFullCache(uiState.currentUserId);
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
      await bootstrapClientDataFull(authUserId);
      uiState.bootstrapFullLoaded = true;
    } else {
      await bootstrapClientData();
    }
    render();
  } catch (error) {
    if (authUserId) {
      try {
        await bootstrapClientData(authUserId);
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
