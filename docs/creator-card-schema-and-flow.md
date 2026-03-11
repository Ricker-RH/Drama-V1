# 创作卡（世界/故事/人物）字段与流程（v2）

## 1. 数据模型

### creator_cards（统一创作源）
- `id` UUID
- `author_id` UUID
- `card_mode` text: `long_narrative | short_narrative | virtual_character`
- `title` / `subtitle`
- `template_id`
- `content_json`: 卡片核心内容（按模式写入）
- `prompt_context_json`: 推理提示上下文
- `runtime_config_json`: 运行时参数（节奏、NPC触发、温度策略等）
- `quality_rules_json`: 质量规则（首轮长度、结构约束、连贯约束）
- `ux_config_json`: 前端交互配置（建议强度、选项策略）
- `save_status`: `saved | autosaved`
- `publish_status`: `unpublished | published | archived`
- `publish_info_json`: 发布时的详情页信息快照
- `last_quality_score` numeric
- `published_world_card_id` UUID
- `published_at` / `archived_at`
- `created_at` / `updated_at` / `deleted_at`

### creator_card_npcs（可配置 NPC 池）
- `creator_card_id`
- `npc_key` / `name`
- `role` / `stance`
- `trigger_rule` / `cooldown_turns`
- `priority` / `enabled`
- `profile_json`

### creator_card_events（事件种子）
- `creator_card_id`
- `event_key` / `title`
- `mode_scope`
- `trigger_expr`
- `cooldown_turns`
- `priority` / `enabled`
- `payload_json`

### creator_card_publish_logs（发布审计）
- `creator_card_id`
- `author_id`
- `world_card_id`
- `action`
- `detail_json`

### world_cards（可游玩对象）
- 保留原有展示字段，并新增：
- `mode`
- `chapter_label`
- `main_quest`
- `key_npc`
- `key_clues`
- `opening_summary`
- `play_hook`
- `playable_config_json`
- `source_creator_card_id`

## 2. 三种模式 content_json 建议结构

### long_narrative
- `worldSetting`
- `coreConflict`
- `playerHook`
- `npcSeeds`
- `resourceSystem`
- `toneStyle`

### short_narrative
- `openingAnchor`
- `endingAnchors`
- `fixedNpcs`
- `scopeLimits`
- `branchSeeds`
- `pacingHint`

### virtual_character
- `personaName`
- `personaCore`
- `personaBackground`
- `dialogueStyle`
- `relationBoundary`
- `growthMilestones`
- `triggerWords`

## 3. 业务流程

1. 创作中心填写卡片内容
2. 点击保存 -> `POST /api/v1/creator/cards`（新建）或 `PATCH /api/v1/creator/cards/:id`（更新）
3. 保存成功后进入“保存成功”流转层：
   - 暂不发布：保留草稿状态
   - 立即发布：打开发布信息弹窗
4. 发布弹窗确认 -> `POST /api/v1/creator/cards/:id/publish`
5. 发布时将创作卡映射/同步为 `world_cards`，并写发布日志
6. 可选同步动态（`syncToDynamic=true`）
7. 发布结果提示：
   - 已同步动态 / 未同步动态
   - 均提示可在“我的-作品”查看

## 4. 前端展示规则

- “我的-作品”优先展示 creator_card 维度的作品卡
- 已发布：正常卡片
- 未发布：卡片上叠加灰色蒙版 + `草稿箱`
- 同一 world_card 仅显示一份（后端已按 id 去重）

## 5. 生成质量策略（服务端）

- 严格读取 `system prompt/system_prompt.md`
- LLM 输出必须包含 `<JSON_BLOCK>` 与 `<NARRATIVE_BLOCK>`
- 首回合门禁：优先 `【结果】>=500`；若分段导致分配不均，允许按整体叙事总量判定
- 若门禁失败：自动低温重试（最多 3 次）
- 仍失败：返回 `LLM_TURN_FAILED` + 失败原因（不使用模板兜底剧情）
