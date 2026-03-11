# 沉浸纪 Web 落地仓库

本仓库用于落地《沉浸纪》Web 端，目标是支持持续迭代：
- 用户注册登录
- 社区互动
- AI 剧情游玩
- 世界卡创建与发布

## 当前阶段

当前已完成：
- 架构蓝图与迭代计划（`docs/architecture`）
- 可运行的基础骨架（`apps/api` + `apps/web`）
- Neon 数据库接入底座（连接层 + 初始化 SQL + DB 路由读写）
- 登录弹窗支持账号密码方式（`POST /api/v1/auth/login`）

## 目录结构

- `apps/web`: Web 前端（当前为可运行原型壳）
- `apps/api`: API 服务（模块化路由 + Neon 数据层）
- `packages/shared`: 共享类型与常量（预留）
- `packages/config`: 工程级配置（预留）
- `docs/architecture`: 架构设计与落地计划

## 环境变量

复制 `.env.example` 并填写 Neon 连接串：

```bash
cp .env.example .env
```

关键变量：
- `DATABASE_URL`: Neon PostgreSQL 连接串
- `AUTO_INIT_DB`: 是否在服务启动时自动执行 `apps/api/sql/001_init.sql`

## 启动方式

```bash
npm install
npm run dev
```

初始化数据库（推荐首次执行）：

```bash
npm run db:init -w apps/api
```

启动后访问：
- Web: `http://localhost:3000`
- 健康检查: `http://localhost:3000/health`

账号密码登录（初版）：
- 前端入口：页面内登录弹窗 -> `账号密码`
- API：`POST /api/v1/auth/login`
- 参数：`{ "account": "邮箱或昵称", "password": "密码" }`

## 下一步

按 `docs/architecture/iteration-plan.md` 的顺序推进：
1. 身份系统与会话（JWT + refresh token）
2. 游戏核心回合与状态机
3. 世界卡创建/发布与版本
4. 社区互动闭环
