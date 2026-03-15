import http from "node:http";
import path from "node:path";
import fsSync from "node:fs";
import { fileURLToPath } from "node:url";
import { warmBootstrapCoreCache } from "./routes/bootstrap.js";
import { initDatabase, ensureRuntimeSchemaCompat } from "./db/init.js";
import { handleHttp } from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../..");
const envPath = path.resolve(projectRoot, ".env");

function loadEnvFromFile(filePath) {
  if (!fsSync.existsSync(filePath)) return;
  const raw = fsSync.readFileSync(filePath, "utf-8");
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex <= 0) return;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!key || Object.prototype.hasOwnProperty.call(process.env, key)) return;
    process.env[key] = value;
  });
}

loadEnvFromFile(envPath);
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";

const server = http.createServer(handleHttp);

let bootstrapRecoveryTimer = null;

async function warmupRuntime() {
  if (process.env.AUTO_INIT_DB === "true") {
    await initDatabase();
  } else {
    await ensureRuntimeSchemaCompat();
  }
  await warmBootstrapCoreCache();
}

function scheduleBootstrapRecovery() {
  if (bootstrapRecoveryTimer) return;
  bootstrapRecoveryTimer = setInterval(() => {
    void warmupRuntime()
      .then(() => {
        if (bootstrapRecoveryTimer) {
          clearInterval(bootstrapRecoveryTimer);
          bootstrapRecoveryTimer = null;
        }
        console.log("[bootstrap] runtime warmup recovered");
      })
      .catch(() => {
        // keep retrying in background
      });
  }, 15000);
}

async function bootstrap() {
  let degradedMode = false;
  try {
    await warmupRuntime();
  } catch (error) {
    degradedMode = true;
    const msg = error instanceof Error ? error.message : String(error || "unknown");
    console.error("[bootstrap] runtime warmup failed, starting in degraded mode:", msg);
  }

  server.listen(port, host, () => {
    console.log(`immersion-api listening on http://${host}:${port}${degradedMode ? " (degraded mode)" : ""}`);
  });
  if (degradedMode) scheduleBootstrapRecovery();
}

bootstrap().catch((error) => {
  console.error("Failed to bootstrap server:", error);
  process.exit(1);
});
