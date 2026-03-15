const OPENAI_BASE_DEFAULT = "https://api.openai.com/v1";
const XAI_BASE_DEFAULT = "https://api.x.ai/v1";

const MODEL_PRESETS = {
  "Prose-4": {
    provider: "openai",
    modelFromEnv: ["OPENAI_MODEL"],
    defaultModel: "gpt-4.1-mini"
  },
  "Prose-4 Lite": {
    provider: "openai",
    modelFromEnv: ["OPENAI_MODEL_LITE", "OPENAI_MODEL"],
    defaultModel: "gpt-4.1-mini"
  },
  "Director-3": {
    provider: "openai",
    modelFromEnv: ["OPENAI_MODEL_DIRECTOR", "OPENAI_MODEL"],
    defaultModel: "gpt-4.1-mini"
  },
  "Grok-4.1 Fast Reasoning": {
    provider: "xai",
    modelFromEnv: ["XAI_MODEL"],
    defaultModel: "grok-4-1-fast-reasoning"
  },
  "Grok-4.1 Quality": {
    provider: "xai",
    modelFromEnv: ["XAI_MODEL_QUALITY", "XAI_MODEL"],
    defaultModel: "grok-4-1-fast-reasoning"
  },
  // Backward-compatible alias for previous UI label.
  "Grok-3 Experimental": {
    provider: "xai",
    modelFromEnv: ["XAI_MODEL"],
    defaultModel: "grok-4-1-fast-reasoning"
  }
};

function readFirstEnv(keys = []) {
  for (const key of keys) {
    const val = String(process.env[key] || "").trim();
    if (val) return val;
  }
  return "";
}

function parseTemperature(raw, fallback) {
  const parsed = Number.parseFloat(String(raw || ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseTimeoutMs(raw, fallback = 60000) {
  const parsed = Number.parseInt(String(raw || ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function resolveRuntimeModelConfig(requestedLabel = "") {
  const label = String(requestedLabel || "").trim();
  const preset = MODEL_PRESETS[label] || MODEL_PRESETS["Prose-4"];

  if (preset.provider === "xai") {
    const apiKey = String(process.env.XAI_API_KEY || "").trim();
    return {
      selectedLabel: label || "Prose-4",
      provider: "xai",
      apiKey,
      apiBase: String(process.env.XAI_BASE_URL || XAI_BASE_DEFAULT).trim(),
      model: readFirstEnv(preset.modelFromEnv) || preset.defaultModel,
      temperature: parseTemperature(process.env.XAI_TEMPERATURE, 0.7),
      timeoutMs: parseTimeoutMs(process.env.XAI_TIMEOUT_MS, 60000)
    };
  }

  const model = readFirstEnv(preset.modelFromEnv) || preset.defaultModel;
  const defaultTemp = model.startsWith("kimi") ? 0.6 : 0.7;
  return {
    selectedLabel: label || "Prose-4",
    provider: "openai",
    apiKey: String(process.env.OPENAI_API_KEY || "").trim(),
    apiBase: String(process.env.OPENAI_BASE_URL || OPENAI_BASE_DEFAULT).trim(),
    model,
    temperature: parseTemperature(process.env.OPENAI_TEMPERATURE, defaultTemp),
    timeoutMs: parseTimeoutMs(process.env.OPENAI_TIMEOUT_MS, 60000)
  };
}

export function getSupportedPlayModels() {
  return Object.keys(MODEL_PRESETS);
}
