import { createHash } from "node:crypto";

export function hashPassword(rawPassword) {
  // V1 使用 SHA-256 仅作为占位；后续切换为 argon2id。
  return createHash("sha256").update(rawPassword).digest("hex");
}
