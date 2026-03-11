# Card Template V2 Spec (世界卡 / 故事卡 / 角色卡)

## 1. Goal
- 提供统一且强约束的创作模板，减少跑偏、重复、回档。
- 让创作中心字段、数据库字段、提示词输入三者一一对应。

## 2. Shared Core (all modes)

### Required
- title: 卡片标题
- opening_line: 开场白（首屏一句）
- player_identity: 玩家身份
- primary_goal: 主目标（可验证）
- core_conflict: 核心冲突
- tone_style: 文风基调
- hard_rules_json: 不可违背规则
- fixed_npc_count: 固定 NPC 数量
- random_npc_policy_json: 随机 NPC 触发规则

### Optional
- subtitle
- content_rating
- taboo_topics_json
- success_criteria_json
- failure_costs_json

## 3. World Card (long_narrative)

### Required
- era_time: 年代（如 2100）
- macro_setting: 社会/资源/权力结构
- reality_constraints_json: 客观现实约束（不可魔改）
- progression_requirements_json: 上升条件（钱/选票/推荐等）
- world_resource_system_json: 资源系统
- world_scope_json: 活动范围

### NPC requirements
- 至少 3 个固定 NPC（建议 5）
- 每个 NPC 必填：
  - npc_key, name, role
  - public_stance, hidden_motive
  - relation_to_player
  - trigger_conditions_json
  - red_lines_json

## 4. Story Card (short_narrative)

### Required
- opening_anchor: 开场锚点
- ending_anchors_json: 结局锚点（2-4）
- scope_limits: 活动范围
- beat_plan_json: 三幕节奏
- branch_policy_json: 分支与回收规则

### NPC requirements
- 至少 2 个固定 NPC
- 明确 relationship_tension 与 choice_impact

## 5. Character Card (virtual_character)

### Required
- persona_name
- demographics_json
- appearance_brief
- core_traits_json
- speech_style_json
- relationship_stage_init
- relationship_boundaries_json
- memory_slots_json

### Optional
- growth_milestones_json
- taboo_topics_json

## 6. Creation Workflow
1. 选择模式
2. 填写 Shared Core 必填
3. 填写模式专属必填
4. NPC 配置（固定/随机）
5. 质量检查（字段完整、冲突、重复风险）
6. 保存草稿
7. 发布补充信息（封面、标签、简介、章节）
8. 发布并可选同步动态

## 7. Runtime Mapping
- 创作字段 -> storyContext
- storyContext 必须包含：
  - card_type
  - mode
  - opening_line
  - primary_goal
  - core_conflict
  - fixed_npcs
  - random_npc_policy

## 8. Quality Gate (generic)
- 首回合正文长度门禁
- 用户动作命中门禁
- 相邻回合重复门禁
- 场景回档门禁
- 模式混杂门禁

## 9. Notes
- 该规范作为 V2 统一标准，旧 seed 风格卡不再用于生产创作流程。
