import { json, parseBody } from "../core/http.js";
import { uploadPossibleDataUrl, uploadPossibleDataUrls } from "../services/media-storage.js";

function normalizeFolder(value = "") {
  const raw = String(value || "").trim().toLowerCase();
  if (!raw) return "misc";
  return raw.slice(0, 64);
}

export async function handleMedia(req, res, pathname) {
  if (req.method === "POST" && pathname === "/api/v1/media/upload") {
    const body = await parseBody(req);
    const dataUrl = String(body.dataUrl || "").trim();
    if (!dataUrl) {
      return json(res, 400, { code: "INVALID_INPUT", message: "dataUrl is required" });
    }
    const folder = normalizeFolder(body.folder || "misc");
    try {
      const url = await uploadPossibleDataUrl(dataUrl, { folder });
      return json(res, 201, { url });
    } catch (error) {
      const message = error instanceof Error ? error.message : "MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "MEDIA_UPLOAD_FAILED", message });
    }
  }

  if (req.method === "POST" && pathname === "/api/v1/media/upload/batch") {
    const body = await parseBody(req);
    const items = Array.isArray(body.items) ? body.items : [];
    if (!items.length) {
      return json(res, 400, { code: "INVALID_INPUT", message: "items are required" });
    }
    const folder = normalizeFolder(body.folder || "misc");
    try {
      const urls = await uploadPossibleDataUrls(items, { folder });
      return json(res, 201, { urls });
    } catch (error) {
      const message = error instanceof Error ? error.message : "MEDIA_UPLOAD_FAILED";
      return json(res, 400, { code: "MEDIA_UPLOAD_FAILED", message });
    }
  }

  return false;
}
