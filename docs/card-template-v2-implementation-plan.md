# Card Template V2 Implementation Plan

## Phase 0 (done)
- 清空旧卡片数据（creator_cards / world_cards 及关联表）。
- 产出模板规范文档（card-template-v2-spec.md）。
- 产出数据库迁移草案（004_card_template_v2_schema.sql）。
- 更新 system prompt：强制读取 V2 关键字段。

## Phase 1 (API schema & validation)
- 在 creator-cards route 增加 mode-specific 必填校验：
  - long_narrative: era_time, macro_setting, primary_goal, core_conflict, fixed_npcs
  - short_narrative: opening_anchor, ending_anchors, scope_limits
  - virtual_character: persona_name, core_traits, relationship_boundaries
- 增加统一校验错误结构：missing_fields / conflict_fields。
- 发布时强制 world_cards 快照字段补全。

## Phase 2 (repository mapping)
- create/update creator card: 结构化字段持久化到新列。
- publish mapping: creator_cards -> world_cards 快照映射。
- NPC 同步：fixed_npcs + random_npc_policy 持久化。
- story branches / state blueprints 入库。

## Phase 3 (frontend workshop)
- 三模式表单改成“Shared Core + Mode Fields”。
- 必填项前端即时校验（保存前/发布前两层）。
- NPC 编辑器：固定 NPC 与随机策略分区。
- 发布弹窗对齐新快照字段。

## Phase 4 (runtime contract)
- buildStoryContext 按 V2 字段输出。
- game turn 请求注入 previous_turn + fixed_npcs + random_npc_policy。
- 回合失败提示映射：质量门禁/网络波动/限流。

## Phase 5 (QA)
- 三模式各 5 组回归用例。
- 指标：重复率、回档率、动作命中率、首回合门禁通过率。
