import { json, parseBody } from "../core/http.js";
import { createPost, listPosts } from "../repos/community-repo.js";

export async function handleCommunity(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/community/posts") {
    const body = await parseBody(req);
    if (!body.authorId || !body.content) {
      return json(res, 400, { code: "INVALID_INPUT", message: "authorId and content are required" });
    }

    const post = await createPost({
      authorId: body.authorId,
      content: body.content
    });

    return json(res, 201, { post });
  }

  if (req.method === "GET" && pathname === "/api/v1/community/posts") {
    const posts = await listPosts();
    return json(res, 200, { posts });
  }

  return false;
}
