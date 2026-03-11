# 沉浸纪 Web 系统蓝图（V1）

## 1. 架构目标

1. 支撑高频迭代，不因功能扩展导致重构灾难。
2. 将“游戏叙事逻辑”与“社区/账户”解耦，保证核心玩法独立演进。
3. 先单体后模块化，再按瓶颈拆分服务，避免过早微服务。

## 2. 推荐总体架构

采用 **模块化单体（Modular Monolith）+ 明确领域边界**：

- `Web App`（前端 BFF 可选）
- `API Core`（单体进程内按领域模块拆分）
- `Data Layer`（PostgreSQL + Redis）
- `Async Layer`（队列用于 TTS/文生图/审核）

领域模块：
- `identity`：注册、登录、账号安全、权限
- `gameplay`：会话、回合、状态机、防崩塌规则
- `worldcard`：世界卡/角色卡/故事卡创建与发布
- `community`：帖子、评论、点赞、收藏、悬赏、组队入口
- `moderation`：内容审核与风控

## 3. 可维护性原则

1. **单向依赖**：`interface -> application -> domain -> infrastructure`
2. **跨模块只走契约**：事件或 service interface，禁止直接读写他模块表。
3. **状态先行**：游戏文案必须由 `state_delta` 驱动。
4. **可观测性优先**：每个回合记录 traceId、latency、ruleCheckResult。
5. **渐进式演进**：优先稳定边界，再优化内部实现。

## 4. 技术栈建议（下一步逐步落地）

- 前端：Next.js + TypeScript + Tailwind + Zustand/React Query
- 后端：Node.js + TypeScript（Fastify/Nest 任选其一）
- 数据库：PostgreSQL（主数据）+ Redis（缓存/会话/限流）
- 异步：BullMQ / RabbitMQ（TTS、文生图、审核任务）
- 鉴权：JWT + Refresh Token + 设备指纹/风控策略

### 当前 identity 落地状态（2026-03-10）

- 已提供：
  - `POST /api/v1/auth/register`（邮箱 + 密码注册）
  - `POST /api/v1/auth/login`（账号密码登录，账号支持邮箱或昵称）
- Web 登录弹窗支持三种方式切换：
  - 手机号验证码（占位）
  - 账号密码（已接后端真实校验）
  - 微信登录（占位）

## 5. 核心流转（注册 -> 游玩 -> 结算 -> 社区）

1. 用户注册并完成基础资料。
2. 进入故事详情，创建游戏会话。
3. 每轮输入：意图解析 -> 规则校验 -> state_delta -> 文案生成。
4. 达到结算门槛后生成局内总结。
5. 用户可一键发布战报到社区并触发互动。

## 6. 发布策略

1. 本地开发：单容器/单进程。
2. 预发：分离 Web/API，接入 PostgreSQL + Redis。
3. 生产：按压力拆分 `gameplay` 与 `community` 读写链路。
