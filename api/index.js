import { handleHttp } from "../apps/api/src/app.js";

export default async function handler(req, res) {
  return handleHttp(req, res);
}

