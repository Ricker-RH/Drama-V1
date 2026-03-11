import { json, parseBody } from "../core/http.js";
import { createDynamicPost, createPostComment, listPostComments, setPostReaction } from "../repos/post-repo.js";
import { invalidateBootstrapCoreCache } from "./bootstrap.js";

function toClock(dateLike) {
  if (!dateLike) return "刚刚";
  const d = new Date(dateLike);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export async function handlePosts(req, res, pathname, url) {
  if (req.method === "POST" && pathname === "/api/v1/posts") {
    const body = await parseBody(req);
    if (!body.authorId || (!body.title && !body.content)) {
      return json(res, 400, { code: "INVALID_INPUT", message: "authorId and (title/content) are required" });
    }
    const post = await createDynamicPost({
      authorId: body.authorId,
      postType: body.postType || "text",
      title: body.title || "",
      content: body.content || "",
      linkedWorldCardId: body.linkedWorldCardId || null
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, { post });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/reaction") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId || !body.reactionType) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId, reactionType are required" });
    }
    const active = body.active !== false;
    const post = await setPostReaction({
      postId: body.postId,
      userId: body.userId,
      reactionType: body.reactionType,
      active
    });
    invalidateBootstrapCoreCache();
    return json(res, 200, { post, active });
  }
  if (req.method === "GET" && pathname === "/api/v1/posts/comments") {
    const postId = url?.searchParams?.get("postId");
    const limit = Number(url?.searchParams?.get("limit") || 100);
    if (!postId) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId is required" });
    }
    const rows = await listPostComments(postId, limit);
    return json(res, 200, {
      comments: rows.map((row) => ({
        id: row.id,
        user: row.user_name || "玩家",
        text: row.content || "",
        time: toClock(row.created_at)
      }))
    });
  }
  if (req.method === "POST" && pathname === "/api/v1/posts/comments") {
    const body = await parseBody(req);
    if (!body.postId || !body.userId || !body.content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "postId, userId, content are required" });
    }
    const comment = await createPostComment({
      postId: body.postId,
      userId: body.userId,
      content: body.content,
      parentCommentId: body.parentCommentId || null
    });
    invalidateBootstrapCoreCache();
    return json(res, 201, {
      comment: comment
        ? {
            id: comment.id,
            user: "我",
            text: comment.content || "",
            time: toClock(comment.created_at)
          }
        : null
    });
  }
  return false;
}
