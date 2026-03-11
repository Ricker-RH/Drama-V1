# 领域模型草案（V1）

## 1. identity

核心实体：
- User(id, email/phone, nickname, status, createdAt)
- Credential(userId, passwordHash, provider, verifiedAt)
- Session(id, userId, refreshTokenHash, expiredAt, deviceInfo)

## 2. gameplay

核心实体：
- StoryTemplate(id, category, subCategory, difficulty, estimatedMinutes)
- GameSession(id, userId, templateId, status, currentAnchor, startedAt, endedAt)
- Turn(id, sessionId, roundNo, userInput, parsedIntent, ruleResult, stateDelta, narrative)
- PlayerState(sessionId, level, skills, resources, relationships)

## 3. worldcard

核心实体：
- WorldCard(id, authorId, title, setting, rules, era, taboo, publishStatus)
- RoleCard(id, worldCardId, name, motive, relationGraph, ability)
- StoryCard(id, worldCardId, openingConflict, anchors, endingDirections)
- CardVersion(id, cardId, version, payload)

## 4. community

核心实体：
- Post(id, authorId, type, content, relatedSessionId)
- Comment(id, postId, authorId, content)
- Reaction(id, targetType, targetId, userId, type)
- Bounty(id, creatorId, title, requirement, rewardDesc, status)

## 5. moderation

核心实体：
- ModerationTask(id, targetType, targetId, channel, result, reason)
- Report(id, reporterId, targetType, targetId, reason, status)
