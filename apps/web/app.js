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
let DRAMA_HERO_TOTAL = 1;
const API_BASE = "/api/v1";
const BOOTSTRAP_CORE_CACHE_KEY = "drama_bootstrap_core_v4";
const BOOTSTRAP_FULL_CACHE_PREFIX = "drama_bootstrap_full_v4_";
const SELECTED_WORLD_ID_CACHE_KEY = "drama_selected_world_id_v4";
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
    subtitle: "高自由度、多 NPC、状态持续演化。",
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
    label: "模板录入",
    desc: "按字段精确填写，质量稳定可控。"
  },
  custom: {
    label: "自定义导入",
    desc: "输入一段设定，AI 拆分成结构字段后再编辑。"
  }
};
const WORKSHOP_FORCE_CUSTOM_MODES = new Set(["long_narrative", "short_narrative", "virtual_character"]);
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
    localStorage.removeItem("drama_selected_world_id_v1");
    localStorage.removeItem("drama_selected_world_id_v2");
    localStorage.removeItem("drama_selected_world_id_v3");
    const removeKeys = [];
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (
        key.startsWith("drama_bootstrap_full_v1_")
        || key.startsWith("drama_bootstrap_full_v2_")
        || key.startsWith("drama_bootstrap_full_v3_")
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
  showUserModal: false,
  modalProfile: null,
  userModalTab: "works",
  reserveFollowed: false,
  reserveFeedback: "",
  carouselTimerActive: false,
  showLoginModal: false,
  loginMethod: "phone",
  loginAccount: "",
  loginPassword: "",
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
  viewingSelfProfile: false,
  isEditingProfile: false,
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
  selectedMessageId: "m_6",
  messageThreadDraft: "",
  messageThreadToolsOpen: false,
  messageThreadMenuOpen: false,
  messageFeedback: "",
  messageFollowActions: {},
  messageCommentLikes: {},
  messageReplyTargetId: "",
  messageReplyDraft: "",
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
  playRound: 1,
  playChapter: getWorldProfile(FEED_DATA[0]).chapter,
  playSceneImageReady: false,
  playEntries: getProfileOpeningEntries(getWorldProfile(FEED_DATA[0])),
  bootstrapFullLoaded: false,
  bootstrapFullLoading: false
};

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
  replaceArray(MESSAGE_INBOX, payload?.messages?.inbox || []);
  replaceArray(MESSAGE_LIKES, payload?.messages?.likes || []);
  replaceArray(MESSAGE_NEW_FOLLOWS, payload?.messages?.follows || []);
  replaceArray(MESSAGE_COMMENTS, payload?.messages?.comments || []);
  replaceObject(uiState.messageThreads, payload?.messages?.threads || {});
  replaceArray(ME_RELATION_USERS, payload?.me?.relationUsers || []);
  replaceArray(COIN_BILLS, payload?.me?.coinBills || []);
  replaceArray(COIN_TASKS, payload?.me?.coinTasks || []);
  replaceArray(COIN_BENEFITS, payload?.me?.coinBenefits || []);
  replaceArray(HOT_SEARCH_TERMS, payload?.search?.hotTerms || []);
  const history = payload?.search?.history || [];
  uiState.searchHistory = [...history];
  uiState.communitySearchHistory = [...history];
  const incomingLibrary = payload?.me?.contentLibrary || {};
  const incomingWorks = Array.isArray(incomingLibrary.works) ? incomingLibrary.works : null;
  const incomingLikes = Array.isArray(incomingLibrary.likes) ? incomingLibrary.likes : null;
  const incomingFavorites = Array.isArray(incomingLibrary.favorites) ? incomingLibrary.favorites : null;
  const incomingHistory = Array.isArray(incomingLibrary.history) ? incomingLibrary.history : null;
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
    }
  } else {
    uiState.isLoggedIn = false;
    uiState.currentUserId = "";
    uiState.userCoins = 0;
    ME_CONTENT_LIBRARY.works = [];
    ME_CONTENT_LIBRARY.likes = [];
    ME_CONTENT_LIBRARY.favorites = [];
    ME_CONTENT_LIBRARY.history = [];
    uiState.workshopCardsLoadedForUser = "";
    uiState.workshopSavedCards = [];
    uiState.workshopActiveCardId = "";
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

async function bootstrapClientData() {
  const resp = await fetch(`${API_BASE}/bootstrap?mode=core`);
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
      <div class="auth-wrap">
        <div class="auth-card">
          <div class="auth-brand auth-brand-center">
            <div class="auth-logo"><img src="/assets/logo-v3.png" alt="爪马 Logo" loading="eager" fetchpriority="high" /></div>
            <h2>Drama</h2>
            <p>请选择登录方式</p>
          </div>
          <button class="auth-btn auth-primary" data-go="#/auth/phone">手机号登录</button>
          <button class="auth-btn" data-go="#/auth/wechat">微信登录</button>
          <button class="auth-btn">Apple 登录</button>
          <button class="auth-btn">Google 登录</button>
          <p class="auth-footnote">登录即表示你同意《用户协议》与《隐私政策》</p>
        </div>
      </div>
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
  const currentHash = window.location.hash || "#/theater/home";
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
  const hideMobileBottomNav = currentHash === "#/messages/thread";
  const isMobileMeActive = currentHash === "#/me/home" || currentHash.startsWith("#/me/");
  const isMobileWorkshopActive = currentHash.startsWith("#/workshop");
  const isTopNavLinkedRoute = isBackstageRoute || currentHash === "#/theater/home" || currentHash === "#/theater";
  const showMobileTopBar = (
    currentHash === "#/theater/home" ||
    currentHash === "#/theater" ||
    currentHash.startsWith("#/drama") ||
    isBackstageRoute ||
    currentHash === "#/messages/detail"
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
    "#/messages/story/publish",
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
  const mobileAddon = mobileAddonHtml.trim();
  const mobileAddonForRender = showMobileTopBar ? mobileAddon : "";

  if (isPlayRoute) {
    return `
      <div class="play-route-host">
        ${mainContentHtml}
      </div>
      ${uiState.showLoginModal ? renderExploreLoginModal() : ""}
      ${uiState.showUserModal ? renderUserProfileModal() : ""}
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
            <span class="page-title-spacer"></span>
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
    ${uiState.showLoginModal ? renderExploreLoginModal() : ""}
    ${uiState.showUserModal ? renderUserProfileModal() : ""}
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

function renderExploreLoginModal() {
  const method = uiState.loginMethod || "phone";
  return `
    <div class="login-overlay">
      <div class="login-modal">
        <button class="login-modal-close" data-action="close-login-modal">×</button>
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
            <button class="${method === "wechat" ? "active" : ""}" data-action="set-login-method" data-method="wechat">微信</button>
          </div>
          ${
            method === "account"
              ? `
            <div class="login-field-row"><input data-field="login-account" value="${escapeHtml(uiState.loginAccount)}" placeholder="邮箱或昵称" /></div>
            <div class="login-field-row"><input data-field="login-password" value="${escapeHtml(uiState.loginPassword)}" placeholder="密码" type="password" /></div>
            <button class="login-submit" data-action="confirm-login" ${uiState.loginLoading ? "disabled" : ""}>${uiState.loginLoading ? "登录中..." : "账号登录"}</button>
            <p class="login-note">测试账号可用：user1@drama.app / 123456</p>
          `
              : method === "wechat"
                ? `
            <div class="login-qr-box">微信扫码区</div>
            <button class="login-submit" data-action="confirm-login">微信登录</button>
          `
                : `
            <div class="login-field-row"><span>+86</span><input data-field="login-phone" value="${escapeHtml(uiState.loginPhone)}" placeholder="输入手机号" /></div>
            <div class="login-field-row"><input data-field="login-code" value="${escapeHtml(uiState.loginCode)}" placeholder="输入验证码" /><button type="button">获取验证码</button></div>
            <button class="login-submit" data-action="confirm-login">验证码登录</button>
          `
          }
          ${uiState.loginError ? `<p class="login-error">${escapeHtml(uiState.loginError)}</p>` : ""}
          <label class="login-agree"><input type="checkbox" checked /><span>已阅读并同意《用户协议》《隐私政策》</span></label>
          <p class="login-note">新用户可直接登录</p>
        </div>
      </div>
    </div>
  `;
}

function renderUserProfileModal() {
  const creatorWorks = buildCreatorWorks();
  const meWorks = (ME_CONTENT_LIBRARY.works || []).slice(0, 12);
  const meLikes = (ME_CONTENT_LIBRARY.likes || []).slice(0, 12);
  const meFavorites = (ME_CONTENT_LIBRARY.favorites || []).slice(0, 12);
  const activeTab = uiState.userModalTab;
  const self = uiState.viewingSelfProfile;
  const profile = self ? uiState.profile : (uiState.modalProfile || uiState.profile);
  const draft = uiState.profileDraft;
  const editing = uiState.isEditingProfile;
  const otherWorks = getModalProfileWorks(profile);
  const feedByTab = self
    ? {
        works: [
          ...creatorWorks.map((x) => ({ id: "", title: x.title, subtitle: `${x.subtitle} · ${x.status === "published" ? "已发布" : "草稿箱"}`, status: x.status, mode: x.mode, summary: x.summary, draft: true })),
          ...meWorks.map((x) => ({ id: x.id, title: x.title, subtitle: x.meta, summary: x.stat, draft: false }))
        ],
        likes: meLikes.map((x) => ({ id: x.id, title: x.title, subtitle: x.meta, summary: x.stat, draft: false })),
        favorites: meFavorites.map((x) => ({ id: x.id, title: x.title, subtitle: x.meta, summary: x.stat, draft: false }))
      }
    : {
        works: otherWorks,
        likes: Array.isArray(uiState.modalProfile?.likes) ? uiState.modalProfile.likes : [],
        favorites: Array.isArray(uiState.modalProfile?.favorites) ? uiState.modalProfile.favorites : []
      };
  const stats = profile.stats || {
    fans: "12.4万",
    follows: "312",
    works: String(feedByTab.works.length || 0),
    score: "4.8"
  };
  const activeFeed = feedByTab[activeTab] || [];
  const isActiveFeedEmpty = activeFeed.length === 0;

  return `
    <div class="user-modal-overlay">
      <div class="user-modal-card">
        <button class="user-modal-close" data-action="close-user-modal">×</button>
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
                  <span><b>${stats.score}</b> 综合评分</span>
                </div>
              </div>
              <div class="user-profile-actions">
                ${
                  self
                    ? `
                  ${
                    editing
                      ? `
                    <button class="user-edit-btn" data-action="save-profile-edit">保存资料</button>
                    <button class="user-edit-btn subtle" data-action="cancel-profile-edit">取消</button>
                  `
                      : `
                    <button class="user-edit-btn" data-action="toggle-edit-profile">编辑资料</button>
                  `
                  }
                `
                    : `
                  <button class="user-follow-btn ${uiState.isFollowingAuthor ? "active" : ""}" data-action="toggle-follow-author">
                    ${uiState.isFollowingAuthor ? "已关注" : "+ 关注"}
                  </button>
                  <button class="user-dm-btn" data-go="#/messages/thread">私信</button>
                `
                }
              </div>
            </div>
            ${uiState.authorFeedback ? `<div class="user-follow-feedback">${uiState.authorFeedback}</div>` : ""}
            ${
              self && editing
                ? `
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
            `
                : `<p class="user-profile-bio">${escapeHtml(profile.bio)}</p>`
            }
          </article>

          <div class="user-tabs ios-card">
            <button class="${activeTab === "works" ? "active" : ""}" data-action="user-modal-tab" data-tab="works">作品</button>
            <button class="${activeTab === "likes" ? "active" : ""}" data-action="user-modal-tab" data-tab="likes">喜欢</button>
            <button class="${activeTab === "favorites" ? "active" : ""}" data-action="user-modal-tab" data-tab="favorites">收藏</button>
          </div>

          <section class="user-feed-grid ${isActiveFeedEmpty ? "is-empty" : ""}">
            ${activeFeed
              .map((item) => {
                const clickable = !item.draft && hasWorldCard(item.id);
                return `
              <article class="user-feed-card ${item.draft ? "creator-work-card" : ""}" ${clickable ? `data-action="open-world-detail" data-id="${item.id}"` : 'data-action="noop"'}>
                <div class="cover ${item.mode ? `creator-cover mode-${item.mode}` : ""}">
                  ${item.draft && item.status !== "published" ? '<div class="creator-draft-mask"><span>草稿箱</span></div>' : ""}
                </div>
                <h4>${item.title}</h4>
                <p>${item.subtitle}</p>
                ${item.summary ? `<small>${item.summary}</small>` : ""}
              </article>
            `;
              })
              .join("")}
            ${
              isActiveFeedEmpty
                ? `
              <div class="user-feed-empty-tip">暂无内容</div>
            `
                : ""
            }
          </section>
        </section>
      </div>
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
      comments: [
        { user: "一锅炖不下", text: "这条思路我也试了，确实好用。", time: "3分钟前" },
        { user: "导向风", text: "建议把第3回合的提示词也放出来。", time: "12分钟前" }
      ]
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

function buildAuthorProfileByName(name = "") {
  const safeName = String(name || "").trim() || "Drama 用户";
  const works = FEED_DATA.filter((x) => x.author === safeName);
  const fansBase = 1200 + (hashText(safeName) % 60000);
  const followsBase = 20 + (hashText(`${safeName}_f`) % 800);
  const scoreBase = 40 + (hashText(`${safeName}_s`) % 60);
  return {
    id: "",
    name: safeName,
    handle: toHandle(safeName),
    bio: works[0]?.tags?.join(" · ") || "热爱创作与互动剧情",
    stats: {
      fans: `${(fansBase / 10000).toFixed(1)}万`,
      follows: String(followsBase),
      works: String(works.length),
      score: `${(scoreBase / 10).toFixed(1)}`
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
    if (uiState.isLoggedIn) {
      uiState.modalProfile = null;
      uiState.viewingSelfProfile = true;
      uiState.profileDraft = { ...uiState.profile };
      uiState.isEditingProfile = false;
      uiState.showUserModal = true;
    }
    return;
  }
  uiState.modalProfile = buildAuthorProfileByName(resolved);
  uiState.viewingSelfProfile = uiState.isLoggedIn && resolved === uiState.profile.name;
  if (uiState.viewingSelfProfile) {
    uiState.modalProfile = null;
    uiState.profileDraft = { ...uiState.profile };
  }
  uiState.isEditingProfile = false;
  uiState.showUserModal = true;
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
  const authorProfile = buildAuthorProfileByName(world.author);
  const authorOtherWorksRaw = FEED_DATA.filter((x) => x.author === world.author && x.id !== world.id);
  const authorOtherWorks = (authorOtherWorksRaw.length ? authorOtherWorksRaw : FEED_DATA.filter((x) => x.id !== world.id))
    .slice(0, 3);

  return renderExploreShell(`
    <section class="world-page world-rich">
      <div class="world-hero world-carousel">
        <button class="world-hero-back-float unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <div class="world-hero-nav">
          <button class="world-hero-share" aria-label="分享">分享</button>
        </div>
        <img src="${currentSlide}" alt="${world.title}" />
        <div class="world-carousel-actions">
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
        <h1>${world.title}</h1>
        <p class="world-statline">${escapeHtml(profile.statline)}</p>
        <div class="world-pill-row">
          <span>${escapeHtml(world.format)}</span><span>${escapeHtml(world.theme)}</span><span>${escapeHtml(world.setting)}</span><span>${escapeHtml(world.background)}</span>
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

      <div class="world-feature-card ios-card">
        <div class="world-grid-3 world-feature-grid">
          <article class="world-module world-feature-module">
            <h4>玩法亮点</h4>
            <ul>
              <li>自由输入行动，AI按规则解析，支持复杂策略表达</li>
              <li>状态先行，叙事不越界，所有反馈均与当前世界状态绑定</li>
              <li>关键节点触发插图与高光回放，方便复盘决策路径</li>
            </ul>
          </article>
          <article class="world-module world-feature-module">
            <h4>入坑理由</h4>
            <ul>
              <li>节奏快：3回合内必出冲突钩子，10回合内进入核心战场</li>
              <li>爽点稳：每局至少1次逆风翻盘，爽点来自策略而非数值堆叠</li>
              <li>可复玩：多结局和关系树分支，角色线可独立深挖</li>
            </ul>
          </article>
          <article class="world-module world-feature-module">
            <h4>新手引导</h4>
            <ul>
              <li>第 1 回合先观察现场，不急于表态</li>
              <li>优先保资源，再做关系押注，避免前期透支筹码</li>
              <li>遇到冲突先问“代价是什么”，再决定是否强推剧情</li>
            </ul>
          </article>
        </div>
        <div class="world-actions-rail">
          ${
            isReserveDetail
              ? `
            <button class="world-action-mini world-action-purple world-action-main ${uiState.reserveFollowed ? "active" : ""}" data-action="toggle-reserve-follow">
              ${uiState.reserveFollowed ? "已关注该新剧" : "关注新剧"}
            </button>
            <p class="reserve-follow-note">关注后开播将通过站内消息提醒你，不会错过首更。</p>
            ${uiState.reserveFeedback ? `<small class="reserve-follow-feedback">${uiState.reserveFeedback}</small>` : ""}
          `
              : `
            <button class="world-action-mini world-action-purple ${world.liked ? "active" : ""}" data-action="toggle-like-story">
              ${world.liked ? "已喜欢" : "喜欢"} ${formatMetricCount(world.like)}
            </button>
            <button class="world-action-mini world-action-purple ${world.favorited ? "active" : ""}" data-action="toggle-fav-story">
              ${world.favorited ? "已收藏" : "收藏"} ${formatMetricCount(world.star)}
            </button>
            <button class="world-action-mini world-action-purple world-action-main" data-go="#/play/core">立即开刷</button>
          `
          }
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

      <section class="world-author-section ios-card">
        <div class="world-author-main">
          <div class="world-author-left">
            <button class="world-author-avatar user-link" data-action="open-user-modal" data-user="${world.author}">${getAvatarText(world.author)}</button>
            <div>
              <h4>${escapeHtml(authorProfile.name)}</h4>
              <p>${escapeHtml(authorProfile.bio)} · 累计创作 ${authorProfile.stats.works} 个可玩世界，粉丝 ${authorProfile.stats.fans}。</p>
            </div>
          </div>
          <div class="world-author-right">
            <button class="world-link-btn" data-action="open-user-modal" data-user="${world.author}">查看作者主页</button>
          </div>
        </div>
        <div class="world-author-works-head">
          <h3>作者其他作品</h3>
          <button data-action="open-user-modal" data-user="${world.author}">查看全部</button>
        </div>
        <div class="world-works-row">
          ${authorOtherWorks
            .map(
              (item) => `
            <article data-action="open-world-detail" data-id="${item.id}">
              <div class="cover" style="background:${item.cover};"></div>
              <p>《${escapeHtml(item.title)}》· ${escapeHtml(item.theme)} / ${escapeHtml(item.background)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="world-comments ios-card">
        <div class="world-comments-head">
          <h3>共97条评论</h3>
        </div>
        <div class="world-comment-input">
          <span class="avatar user-link" data-action="open-user-modal"></span>
          <input placeholder="说点什么..." />
        </div>
        <article class="world-comment-item">
          <span class="avatar user-link" data-action="open-user-modal"></span>
          <div>
            <div class="meta">一锅炖不下 · ♡28</div>
            <p>这套系统太适合网文玩家了，尤其“状态先行”这一条，真的能明显感觉到每一步都在影响后续，不是那种随便点两下就能爽通关的模板剧情。</p>
          </div>
        </article>
        <article class="world-comment-item">
          <span class="avatar user-link" data-action="open-user-modal"></span>
          <div>
            <div class="meta">青柠剧评人 · ♡19</div>
            <p>角色关系处理得很好，尤其第六章反转非常自然。我二刷时换了谈判策略，居然开出了完全不同的支线，沉浸感很强。</p>
          </div>
        </article>
        <article class="world-comment-item">
          <span class="avatar user-link" data-action="open-user-modal"></span>
          <div>
            <div class="meta">Rui_夜猫 · ♡14</div>
            <p>作者把“救援效率”和“公众舆论”这两个系统做得很真实，玩到后面会非常纠结，像在做真实的危机决策。</p>
          </div>
        </article>
        <article class="world-comment-item">
          <span class="avatar user-link" data-action="open-user-modal"></span>
          <div>
            <div class="meta">阿莱同学 · ♡11</div>
            <p>建议新手先把资源线打稳再冲主线，我第一次太激进直接崩盘。二周目按引导来，体验提升非常明显。</p>
          </div>
        </article>
      </section>
    </section>
  `);
}

function pageAuthorDetail() {
  uiState.showUserModal = true;
  return pageTheater();
}

function getMessageThreadSeed(name) {
  return [
    { from: "me", text: "我把新支线写到一半了，想听听你对结局A的想法。", time: "今天 12:10" },
    { from: "other", text: "A线可以更冷一点，我刚发你一张关系图。", time: "今天 12:12" },
    { from: "me", text: "收到，我今晚把第一幕改完再发你。", time: "今天 12:15" },
    { from: "other", text: `${name}这边没问题，等你新稿。`, time: "今天 12:20" }
  ];
}

function ensureMessageThread(messageId) {
  const meta = MESSAGE_INBOX.find((x) => x.id === messageId) || MESSAGE_INBOX[0] || { name: "会话" };
  if (!messageId) return getMessageThreadSeed(meta.name);
  if (!uiState.messageThreads[messageId]) {
    uiState.messageThreads[messageId] = getMessageThreadSeed(meta.name);
  }
  return uiState.messageThreads[messageId];
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

function updateMessageInboxPreview(messageId, preview) {
  const item = getMessageInboxItem(messageId);
  if (!item) return;
  item.preview = preview;
  item.time = nowClockText();
  moveMessageToTop(messageId);
}

function pushThreadMessage(messageId, text, from = "me") {
  const messages = ensureMessageThread(messageId);
  messages.push({ from, text, time: "刚刚" });
  if (from === "me") {
    updateMessageInboxPreview(messageId, text);
    markMessageRead(messageId);
  } else {
    const item = getMessageInboxItem(messageId);
    if (!item) return;
    item.preview = text;
    item.time = nowClockText();
    item.badge = (Number(item.badge) || 0) + 1;
    moveMessageToTop(messageId);
  }
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

function ensurePrivateThreadByUser(name) {
  let item = MESSAGE_INBOX.find((x) => x.type === "私聊" && x.name === name);
  if (!item) {
    const id = `m_user_${Date.now()}`;
    item = { id, type: "私聊", name, preview: "开始聊天吧", time: nowClockText(), badge: 0 };
    MESSAGE_INBOX.unshift(item);
    uiState.messageThreads[id] = [
      { from: "other", text: `你好，我是${name}。`, time: "刚刚" }
    ];
  }
  return item;
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

async function apiJson(path, payload, method = "POST") {
  let resp;
  try {
    resp = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
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
    resp = await fetch(`${API_BASE}${path}`);
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
  const resp = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      authorId: uiState.currentUserId,
      postType,
      title,
      content: text,
      linkedWorldCardId: getSelectedWorld()?.id || null
    })
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) throw new Error(data?.message || data?.code || `HTTP_${resp.status}`);
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
  uiState.dynamicPosts.unshift(dynamic);
  uiState.selectedDynamicId = dynamic.id;
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
  });
  return data?.stats || null;
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

async function sendMessageToThread(conversationId, text) {
  if (!uiState.currentUserId) throw new Error("USER_NOT_READY");
  const data = await apiJson("/messages/send", {
    conversationId,
    senderId: uiState.currentUserId,
    content: text,
    messageType: "text",
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

    const boot = await fetch(`${API_BASE}/bootstrap?mode=full&userId=${encodeURIComponent(data.user.id)}`);
    if (!boot.ok) throw new Error(`BOOTSTRAP_${boot.status}`);
    const payload = await boot.json();
    applyBootstrapData(payload, "full");
    uiState.bootstrapFullLoaded = true;
    try {
      localStorage.setItem(`${BOOTSTRAP_FULL_CACHE_PREFIX}${data.user.id}`, JSON.stringify(payload));
    } catch {}

    uiState.showLoginModal = false;
    uiState.loginPassword = "";
    uiState.loginError = "";
  } catch (err) {
    uiState.loginError = err instanceof Error ? err.message : "登录失败，请稍后重试";
  } finally {
    uiState.loginLoading = false;
    render();
  }
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
    const flushStreamBuffer = () => {
      if (!streamBuffer) return;
      streamingEntry.text = `${streamingEntry.text === "..." ? "" : streamingEntry.text}${streamBuffer}`;
      streamBuffer = "";
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
    uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
    const response = finalResponse || {};
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
    uiState.playEntries = uiState.playEntries.filter((x) => x !== streamingEntry);
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

function pageDirectMessage() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看私信", "查看聊天记录、已读状态和快捷回复。");
  }
  const activeId = uiState.selectedMessageId || MESSAGE_INBOX[0]?.id || "";
  const chatMeta = MESSAGE_INBOX.find((x) => x.id === activeId) || MESSAGE_INBOX[0] || { id: "", name: "会话", preview: "", type: "私聊", time: "刚刚", badge: 0 };
  const messages = ensureMessageThread(activeId);
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
              <p>在线</p>
            </div>
          </div>
          <div class="dm-head-actions">
            <button class="world-link-btn" data-action="toggle-message-thread-menu">···</button>
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
        <div class="dm-modern-messages">
          ${messages
            .map(
              (m, idx) => `
            ${
              idx === 0 || messages[idx - 1].time !== m.time
                ? `<div class="dm-time-sep">${m.time || ""}</div>`
                : ""
            }
            <div class="dm-modern-row ${m.from === "me" ? "right" : "left"}">
              ${m.from === "other" ? `<span class="dm-modern-avatar user-avatar-click">${chatMeta.name.slice(0, 1)}</span>` : ""}
              <div class="dm-modern-bubble">${m.text}</div>
              ${m.from === "me" ? `<button class="dm-modern-avatar self dm-self-avatar-btn" data-action="open-self-profile">${escapeHtml(myAvatarText)}</button>` : ""}
            </div>
          `
            )
            .join("")}
        </div>
        <div class="dm-modern-input-wrap">
          <button class="dm-plus-btn" data-action="toggle-message-thread-tools">＋</button>
          <input data-field="message-thread-draft" value="${escapeHtml(uiState.messageThreadDraft)}" placeholder="发消息..." />
          <button class="dm-send-btn" data-action="message-thread-send">发送</button>
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
    ${uiState.showLoginModal ? renderExploreLoginModal() : ""}
    ${uiState.showUserModal ? renderUserProfileModal() : ""}
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

function pageWorkshop() {
  if (uiState.isLoggedIn && uiState.currentUserId && uiState.workshopCardsLoadedForUser !== uiState.currentUserId) {
    void syncWorkshopCardsFromApi({ silent: true });
  }
  const mode = uiState.workshopMode;
  const meta = WORKSHOP_MODE_META[mode];
  const authoringMode = getWorkshopEffectiveAuthoringMode(mode);
  const forceCustom = WORKSHOP_FORCE_CUSTOM_MODES.has(mode);
  const templateList = WORKSHOP_TEMPLATES[mode] || [];
  const selectedTemplate = uiState.workshopSelectedTemplateId[mode] || templateList[0]?.id || "";
  const draft = normalizeWorkshopDraftForMode(mode, getWorkshopDraftByMode(mode));
  const creatorWorks = buildCreatorWorks();
  const parseMeta = uiState.workshopCustomParsed || null;
  const renderModeFields = () => {
    if (mode === "long_narrative") {
      return `
        <div class="workshop-form-grid">
          <label>开场句（必填）<textarea data-field="workshop-world-openingLine">${escapeHtml(draft.openingLine || "")}</textarea></label>
          <label>世界底盘（必填）<textarea data-field="workshop-world-worldSetting">${escapeHtml(draft.worldSetting || "")}</textarea></label>
          <label>玩家身份（必填）<textarea data-field="workshop-world-playerIdentity">${escapeHtml(draft.playerIdentity || "")}</textarea></label>
          <label>主目标（必填）<textarea data-field="workshop-world-primaryGoal">${escapeHtml(draft.primaryGoal || "")}</textarea></label>
          <label>核心冲突（必填）<textarea data-field="workshop-world-coreConflict">${escapeHtml(draft.coreConflict || "")}</textarea></label>
          <label>固定角色（必填）<textarea data-field="workshop-world-fixedNpcs">${escapeHtml(draft.fixedNpcs || "")}</textarea></label>
          <label>资源系统<input data-field="workshop-world-resourceSystem" value="${escapeHtml(draft.resourceSystem || "")}" /></label>
          <label>文风基调<input data-field="workshop-world-toneStyle" value="${escapeHtml(draft.toneStyle || "")}" /></label>
          <label>禁行规则<textarea data-field="workshop-world-forbiddenRules">${escapeHtml(draft.forbiddenRules || "")}</textarea></label>
          <label>细节记忆种子<textarea data-field="workshop-world-detailMemorySeed">${escapeHtml(draft.detailMemorySeed || "")}</textarea></label>
        </div>
      `;
    }
    if (mode === "short_narrative") {
      return `
        <div class="workshop-form-grid">
          <label>开场锚点（必填）<textarea data-field="workshop-story-openingAnchor">${escapeHtml(draft.openingAnchor || "")}</textarea></label>
          <label>结局锚点（必填）<textarea data-field="workshop-story-endingAnchors">${escapeHtml(draft.endingAnchors || "")}</textarea></label>
          <label>固定 NPC（必填）<textarea data-field="workshop-story-fixedNpcs">${escapeHtml(draft.fixedNpcs || "")}</textarea></label>
          <label>活动范围（必填）<textarea data-field="workshop-story-scopeLimits">${escapeHtml(draft.scopeLimits || "")}</textarea></label>
          <label>主目标（必填）<textarea data-field="workshop-story-primaryGoal">${escapeHtml(draft.primaryGoal || "")}</textarea></label>
          <label>核心冲突（必填）<textarea data-field="workshop-story-coreConflict">${escapeHtml(draft.coreConflict || "")}</textarea></label>
          <label>分支种子<input data-field="workshop-story-branchSeeds" value="${escapeHtml(draft.branchSeeds || "")}" /></label>
          <label>节奏提示<input data-field="workshop-story-pacingHint" value="${escapeHtml(draft.pacingHint || "")}" /></label>
          <label>线索池<textarea data-field="workshop-story-cluePool">${escapeHtml(draft.cluePool || "")}</textarea></label>
        </div>
      `;
    }
    return `
      <div class="workshop-form-grid">
        <label>人物名称（必填）<input data-field="workshop-character-personaName" value="${escapeHtml(draft.personaName || "")}" /></label>
        <label>关系起点（必填）<textarea data-field="workshop-character-relationStart">${escapeHtml(draft.relationStart || "")}</textarea></label>
        <label>核心性格（必填）<textarea data-field="workshop-character-personaCore">${escapeHtml(draft.personaCore || "")}</textarea></label>
        <label>说话风格（必填）<textarea data-field="workshop-character-dialogueStyle">${escapeHtml(draft.dialogueStyle || "")}</textarea></label>
        <label>关系边界（必填）<textarea data-field="workshop-character-relationBoundary">${escapeHtml(draft.relationBoundary || "")}</textarea></label>
        <label>禁忌点（必填）<textarea data-field="workshop-character-taboos">${escapeHtml(draft.taboos || "")}</textarea></label>
        <label>开场镜头句（必填）<textarea data-field="workshop-character-openingLine">${escapeHtml(draft.openingLine || "")}</textarea></label>
        <label>记忆钩子（必填）<textarea data-field="workshop-character-memoryHooks">${escapeHtml(draft.memoryHooks || "")}</textarea></label>
        <label>触发词<input data-field="workshop-character-triggerWords" value="${escapeHtml(draft.triggerWords || "")}" /></label>
        <label>成长里程碑<textarea data-field="workshop-character-growthMilestones">${escapeHtml(draft.growthMilestones || "")}</textarea></label>
      </div>
    `;
  };
  return renderExploreShell(`
    <section class="workshop-studio">
      <header class="workshop-hero">
        <div class="workshop-hero-left">
          <h2>创作中心</h2>
          <p>${meta.subtitle}</p>
          <div class="workshop-mode-tabs">
            ${Object.entries(WORKSHOP_MODE_META)
              .map(
                ([key, item]) => `
              <button class="${mode === key ? "active" : ""}" data-action="workshop-set-mode" data-mode="${key}">
                <small>${item.kicker}</small>
                <strong>${item.label}</strong>
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      </header>

      <div class="workshop-body">
        <article class="workshop-panel editor">
          <div class="workshop-panel-head">
            <h3>模式编辑器</h3>
            ${
              forceCustom
                ? `<p class="workshop-feedback">当前模式支持自由创建，不再限制模板。</p>`
                : `
              <div class="workshop-input-tabs">
                ${Object.entries(WORKSHOP_AUTHORING_MODE_META)
                  .map(([key, item]) => `
                    <button class="${authoringMode === key ? "active" : ""}" data-action="workshop-set-authoring-mode" data-authoring-mode="${key}">
                      <strong>${item.label}</strong>
                      <small>${item.desc}</small>
                    </button>
                  `).join("")}
              </div>
            `
            }
            ${
              authoringMode === "template"
                ? `
              <div class="workshop-template-row">
                <select data-field="workshop-template-id">
                  ${templateList.map((tpl) => `<option value="${tpl.id}" ${tpl.id === selectedTemplate ? "selected" : ""}>${tpl.name}</option>`).join("")}
                </select>
                <button data-action="workshop-apply-template">套用模板</button>
              </div>
            `
                : `
              <div class="workshop-custom-panel">
                <label>自定义设定输入
                  <textarea data-field="workshop-custom-raw" placeholder="输入世界观、剧情或人物设定，系统会自动拆分为结构字段。">${escapeHtml(uiState.workshopCustomRaw || "")}</textarea>
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
            }
          </div>

          ${renderModeFields()}

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
      <div class="search-result-top"><h3>搜索结果</h3><p>找到 ${ranked.length} 个相关社群</p></div>
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
  const source = uiState.dynamicTab === "推荐"
    ? [...uiState.dynamicPosts, ...DYNAMIC_FEED]
    : [...uiState.dynamicPosts, ...DYNAMIC_FEED.filter((item) => item.tab === uiState.dynamicTab)];
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
      <header class="backstage-publish-head">
        <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>发布动态</h2>
        <button class="dynamic-publish-btn" data-action="publish-dynamic" ${uiState.dynamicPublishing ? "disabled" : ""}>${uiState.dynamicPublishing ? "发布中..." : "发布"}</button>
      </header>

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
      <header class="backstage-setting-head">
        <button class="me-inline-back unified-back-btn" data-action="go-back" aria-label="返回">←</button>
        <h2>幕后主页设置</h2>
        <button class="dynamic-publish-btn" data-action="save-backstage-settings">保存</button>
      </header>
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
            <div class="avatar user-avatar-click">${idx % 2 === 0 ? "群" : item.name.slice(0, 1)}</div>
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
              <small data-action="message-like-thanks" data-id="${item.id}" data-user="${item.user}">${item.note}</small>
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
            <button class="msg-follow-btn" data-action="message-follow-action" data-id="${item.id}" data-user="${item.user}" data-label="${item.action}">${uiState.messageFollowActions[item.id] || item.action}</button>
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
  const tab = uiState.meContentTab;
  const creatorWorks = buildCreatorWorks();
  const feed = ME_CONTENT_LIBRARY[tab] || [];
  const creatorTitleSet = new Set(creatorWorks.map((x) => x.title));
  const uniqueFeed = tab === "works"
    ? feed.filter((x) => !creatorTitleSet.has(x.title))
    : feed;
  const coverClass = uiState.meHeroCover ? "me-hero me-hero-cover" : "me-hero";
  const coverStyle = uiState.meHeroCover ? `style='--me-hero-cover:${uiState.meHeroCover};'` : "";
  const meMenuGroups = [
    ["添加好友", "创作者中心"],
    ["我的草稿", "浏览记录", "我的下载"],
    ["订单", "购物车", "钱包"],
    ["小程序"],
    ["社区公约"]
  ];
  return renderExploreShell(`
    <section class="me-page">
      <article class="${coverClass}" ${coverStyle}>
        <div class="me-hero-nav">
          <button class="me-menu-trigger" data-action="toggle-me-menu" aria-label="打开菜单">
            <span></span><span></span><span></span>
          </button>
          <div class="me-hero-nav-right">
            <button class="me-nav-icon" data-action="me-menu-feedback" data-text="扫一扫即将上线" aria-label="扫一扫">⌲</button>
            <button class="me-nav-icon" data-action="me-menu-feedback" data-text="分享能力即将上线" aria-label="分享">↗</button>
          </div>
        </div>
        <div class="me-hero-top">
          <button class="me-avatar" data-action="open-self-profile">序</button>
          <div class="me-meta">
            <h2>${escapeHtml(uiState.profile.name)}</h2>
            <p>${escapeHtml(uiState.profile.handle)}</p>
            <small>${escapeHtml(uiState.profile.bio)}</small>
          </div>
          <div class="me-hero-actions">
            <button class="me-edit-btn" data-action="open-self-profile">编辑资料</button>
            <button class="me-setting-btn" data-go="#/me/settings" aria-label="设置">⚙</button>
          </div>
        </div>
        <div class="me-stats">
          <button data-action="me-stat-feedback" data-text="故事管理将在下个版本开放"><b>6</b> 故事数</button>
          <button data-action="me-stat-feedback" data-text="获赞分析将在下个版本开放"><b>9.4w</b> 获赞量</button>
          <button data-go="#/me/followers"><b>12.8k</b> 粉丝</button>
          <button data-go="#/me/coins"><b>${(uiState.userCoins || 0).toLocaleString()}</b> 马内</button>
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
              <article class="me-content-item creator-work-card" data-action="noop">
                <div class="cover creator-cover mode-${x.mode}">
                  ${x.status !== "published" ? '<div class="creator-draft-mask"><span>草稿箱</span></div>' : ""}
                </div>
                <h4>${x.title}</h4>
                <p>${x.subtitle}</p>
                <small>${x.status === "published" ? "已发布" : "草稿"} · ${x.summary}</small>
              </article>
            `
                  ),
                  ...uniqueFeed.map(
                    (x) => `
              <article class="me-content-item" ${hasWorldCard(x.id) ? `data-action="open-world-detail" data-id="${x.id}"` : 'data-action="noop"'}>
                <div class="cover"></div>
                <h4>${x.title}</h4>
                <p>${x.meta}</p>
                <small>${x.stat}</small>
              </article>
            `
                  )
                ].join("")
              : uniqueFeed
                  .map(
                    (x) => `
              <article class="me-content-item" ${hasWorldCard(x.id) ? `data-action="open-world-detail" data-id="${x.id}"` : 'data-action="noop"'}>
                <div class="cover"></div>
                <h4>${x.title}</h4>
                <p>${x.meta}</p>
                <small>${x.stat}</small>
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
    </section>
  `);
}

function pageMeFollowers() {
  if (!uiState.isLoggedIn) {
    return renderMessageGuestState("登录后查看粉丝列表", "登录后同步粉丝与关注关系。");
  }
  const tab = uiState.meRelationTab;
  const query = (uiState.meRelationSearch || "").trim().toLowerCase();
  const list = ME_RELATION_USERS.filter((x) => x.tab === tab).filter((x) => {
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
          <div><b>${ME_RELATION_USERS.filter((x) => x.tab === "粉丝").length}</b><span>全部粉丝</span></div>
          <div><b>+26</b><span>7日新增</span></div>
          <div><b>38%</b><span>互动率</span></div>
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
              <button class="msg-follow-btn ghost" data-action="me-follower-chat" data-name="${x.name}">私信</button>
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

  const incomeSum = COIN_BILLS.filter((x) => x.amount > 0).reduce((sum, x) => sum + x.amount, 0);
  const expenseSum = Math.abs(COIN_BILLS.filter((x) => x.amount < 0).reduce((sum, x) => sum + x.amount, 0));

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
        <div><b>Lv.4</b><span>资产等级</span></div>
        <div><b>83%</b><span>任务完成率</span></div>
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
  "#/workshop/world": pageWorkshop,
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

function render() {
  const current = window.location.hash || "#/theater/home";
  document.body.classList.toggle("play-route", current.startsWith("#/play"));
  const renderer = renderers[current] || pageLogin;
  app.innerHTML = renderer();
  syncWorldRoleScroll();
  ensureCarouselTimer();
  ensureDramaHeroTimer();
  focusSearchInputIfNeeded();
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
  const onWorldDetail = window.location.hash === "#/world/detail";
  if (onWorldDetail && !carouselTimer) {
    carouselTimer = setInterval(() => {
      if (window.location.hash !== "#/world/detail") return;
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
    uiState.showLoginModal = true;
    render();
    return;
  }
  const profileAvatarTrigger = event.target.closest(".user-avatar-click");
  if (profileAvatarTrigger) {
    const userName = resolveUserNameFromNode(profileAvatarTrigger);
    if (userName) {
      openAuthorProfileByName(userName);
    } else {
      if (!uiState.isLoggedIn) {
        uiState.showLoginModal = true;
      } else {
        uiState.modalProfile = null;
        uiState.showUserModal = true;
        uiState.viewingSelfProfile = true;
        uiState.isEditingProfile = false;
        uiState.profileDraft = { ...uiState.profile };
      }
    }
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
      const targetThread = ensurePrivateThreadByUser(user);
      uiState.selectedMessageId = targetThread.id;
      pushThreadMessage(targetThread.id, "谢谢你的点赞和收藏，真的很有动力！", "me");
      markMessageRead(targetThread.id);
      uiState.messageFeedback = "";
      window.location.hash = "#/messages/thread";
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
      const label = actionTarget.getAttribute("data-label") || "关注";
      if (label === "发私信") {
        const targetThread = ensurePrivateThreadByUser(user);
        uiState.selectedMessageId = targetThread.id;
        markMessageRead(targetThread.id);
        window.location.hash = "#/messages/thread";
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
      const id = actionTarget.getAttribute("data-id");
      if (!id) return;
      uiState.meRelationFollowing[id] = !uiState.meRelationFollowing[id];
      uiState.meFeedback = uiState.meRelationFollowing[id] ? "已关注" : "已取消关注";
      render();
      return;
    }
    if (action === "me-follower-chat") {
      const name = actionTarget.getAttribute("data-name") || "对方";
      const thread = ensurePrivateThreadByUser(name);
      uiState.selectedMessageId = thread.id;
      markMessageRead(thread.id);
      window.location.hash = "#/messages/thread";
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
      uiState.isLoggedIn = false;
      uiState.showUserModal = false;
      uiState.meFeedback = "";
      uiState.showLoginModal = true;
      render();
      return;
    }
    if (action === "open-message-thread") {
      const id = actionTarget.getAttribute("data-id");
      if (id) {
        uiState.selectedMessageId = id;
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
      const activeId = uiState.selectedMessageId || MESSAGE_INBOX[0]?.id || "";
      uiState.messageThreads[activeId] = [];
      updateMessageInboxPreview(activeId, "暂无消息，发一条开始聊天吧");
      markMessageRead(activeId);
      uiState.messageThreadMenuOpen = false;
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
      const activeId = uiState.selectedMessageId || MESSAGE_INBOX[0]?.id || "";
      if (!activeId) return;
      const draft = uiState.messageThreadDraft;
      uiState.messageThreadDraft = "";
      uiState.messageThreadToolsOpen = false;
      uiState.messageThreadMenuOpen = false;
      render();
      void sendMessageToThread(activeId, text)
        .then(() => {
          pushThreadMessage(activeId, text, "me");
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
      uiState.dynamicTab = "我的";
      render();
      void createDynamicPostAndSync({ title, text, type: uiState.dynamicComposerType })
        .then(() => {
          uiState.dynamicDraftTitle = "";
          uiState.dynamicDraftText = "";
          uiState.dynamicPublishing = false;
          uiState.showDynamicComposer = false;
          uiState.dynamicShareFeedback = "";
          render();
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
    if (action === "toggle-like-story") {
      const world = getSelectedWorld();
      if (!world?.id) return;
      if (!uiState.isLoggedIn || !uiState.currentUserId) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      const prevLiked = Boolean(world.liked);
      const prevLikeCount = toMetricCount(world.like);
      const nextLiked = !prevLiked;
      const nextLikeCount = Math.max(0, prevLikeCount + (nextLiked ? 1 : -1));
      syncWorldCardMetrics(world.id, { liked: nextLiked, like: formatMetricCount(nextLikeCount) });
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
          syncWorldCardMetrics(world.id, {
            liked: nextWorld.liked,
            favorited: nextWorld.favorited,
            like: nextWorld.like,
            star: nextWorld.star
          });
          if (nextWorld.liked) upsertMeContentLibrary(nextWorld, "likes");
          else removeMeContentLibrary(world.id, "likes");
          if (nextWorld.favorited) upsertMeContentLibrary(nextWorld, "favorites");
          render();
        })
        .catch(() => {
          syncWorldCardMetrics(world.id, { liked: prevLiked, like: formatMetricCount(prevLikeCount) });
          if (prevLiked) upsertMeContentLibrary({ ...world, liked: prevLiked, like: formatMetricCount(prevLikeCount) }, "likes");
          else removeMeContentLibrary(world.id, "likes");
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
      const prevFavorited = Boolean(world.favorited);
      const prevFavCount = toMetricCount(world.star);
      const nextFavorited = !prevFavorited;
      const nextFavCount = Math.max(0, prevFavCount + (nextFavorited ? 1 : -1));
      syncWorldCardMetrics(world.id, { favorited: nextFavorited, star: formatMetricCount(nextFavCount) });
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
          syncWorldCardMetrics(world.id, {
            liked: nextWorld.liked,
            favorited: nextWorld.favorited,
            like: nextWorld.like,
            star: nextWorld.star
          });
          if (nextWorld.favorited) upsertMeContentLibrary(nextWorld, "favorites");
          else removeMeContentLibrary(world.id, "favorites");
          if (nextWorld.liked) upsertMeContentLibrary(nextWorld, "likes");
          render();
        })
        .catch(() => {
          syncWorldCardMetrics(world.id, { favorited: prevFavorited, star: formatMetricCount(prevFavCount) });
          if (prevFavorited) upsertMeContentLibrary({ ...world, favorited: prevFavorited, star: formatMetricCount(prevFavCount) }, "favorites");
          else removeMeContentLibrary(world.id, "favorites");
          render();
        });
      return;
    }

    if (action === "toggle-follow-author") {
      uiState.isFollowingAuthor = !uiState.isFollowingAuthor;
      uiState.authorFeedback = uiState.isFollowingAuthor ? "已关注，后续更新会第一时间通知你。" : "已取消关注。";
      render();
      setTimeout(() => {
        if (uiState.authorFeedback) {
          uiState.authorFeedback = "";
          render();
        }
      }, 1600);
      return;
    }
    if (action === "open-user-modal") {
      const userName = resolveUserNameFromNode(actionTarget) || actionTarget.getAttribute("data-user") || "";
      if (String(userName).trim()) {
        openAuthorProfileByName(String(userName).trim());
      } else {
        if (!uiState.isLoggedIn) {
          uiState.showLoginModal = true;
        } else {
          uiState.modalProfile = null;
          uiState.showUserModal = true;
          uiState.viewingSelfProfile = true;
          uiState.isEditingProfile = false;
          uiState.profileDraft = { ...uiState.profile };
        }
      }
      render();
      return;
    }
    if (action === "open-self-profile") {
      if (!uiState.isLoggedIn) {
        uiState.showLoginModal = true;
        render();
        return;
      }
      uiState.modalProfile = null;
      uiState.showUserModal = true;
      uiState.viewingSelfProfile = true;
      uiState.isEditingProfile = false;
      uiState.profileDraft = { ...uiState.profile };
      render();
      return;
    }
    if (action === "close-user-modal") {
      uiState.showUserModal = false;
      uiState.isEditingProfile = false;
      uiState.modalProfile = null;
      render();
      return;
    }
    if (action === "toggle-edit-profile") {
      uiState.isEditingProfile = true;
      uiState.profileDraft = { ...uiState.profile };
      render();
      return;
    }
    if (action === "save-profile-edit") {
      uiState.profile = { ...uiState.profileDraft };
      uiState.isEditingProfile = false;
      render();
      return;
    }
    if (action === "cancel-profile-edit") {
      uiState.isEditingProfile = false;
      uiState.profileDraft = { ...uiState.profile };
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
      uiState.showLoginModal = true;
      uiState.loginError = "";
      render();
      return;
    }

    if (action === "close-login-modal") {
      uiState.showLoginModal = false;
      uiState.loginError = "";
      uiState.loginLoading = false;
      render();
      return;
    }

    if (action === "set-login-method") {
      const method = actionTarget.getAttribute("data-method");
      if (method === "phone" || method === "account" || method === "wechat") {
        uiState.loginMethod = method;
        uiState.loginError = "";
        render();
      }
      return;
    }

    if (action === "confirm-login") {
      if (uiState.loginMethod === "account") {
        void loginWithAccountAndSync();
        return;
      }
      uiState.isLoggedIn = true;
      uiState.showLoginModal = false;
      uiState.loginError = "";
      uiState.loginLoading = false;
      render();
      return;
    }
  }

  const target = event.target.closest("[data-go]");
  if (!target) return;
  let go = target.getAttribute("data-go");
  if (!go) return;
  const isPublicBackstageRoute = go.startsWith("#/messages/story");
  const protectedMessageRoute = go.startsWith("#/messages") && !isPublicBackstageRoute && go !== "#/messages/detail";
  if (protectedMessageRoute && !uiState.isLoggedIn) {
    uiState.showLoginModal = true;
    go = "#/messages/chat";
  }
  uiState.showUserModal = false;
  uiState.searchPanelOpen = false;
  uiState.communitySearchPanelOpen = false;
  uiState.messagesPlusOpen = false;
  uiState.messageThreadMenuOpen = false;
  uiState.messageFeedback = "";
  uiState.meMenuOpen = false;
  uiState.showDynamicComposer = false;
  uiState.dynamicShareFeedback = "";
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
    if (dynamicField === "play-action-draft") {
      uiState.playActionDraft = target.value;
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
  if (target.getAttribute("data-field") === "login-password" || target.getAttribute("data-field") === "login-account") {
    if (event.key === "Enter") {
      event.preventDefault();
      if (uiState.loginMethod === "account") {
        void loginWithAccountAndSync();
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

window.addEventListener("hashchange", render);

async function startApp() {
  hydrateSelectedWorldId();
  const hasCache = tryHydrateFromCache();
  if (!window.location.hash || window.location.hash === "#/") window.location.hash = "#/theater/home";
  if (hasCache && uiState.isLoggedIn && needsFullData(window.location.hash || "#/theater/home")) {
    tryHydrateFullCache(uiState.currentUserId);
  }
  render();
  try {
    await bootstrapClientData();
    render();
  } catch (error) {
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
