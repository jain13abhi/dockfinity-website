const DEFAULT_REPOSITORIES = [
  "openai/codex",
  "anthropics/claude-code",
  "google-gemini/gemini-cli",
  "cline/cline",
  "RooVetGit/Roo-Code",
  "continuedev/continue",
  "microsoft/playwright",
  "vercel/ai",
  "langchain-ai/langchainjs",
  "langchain-ai/langgraphjs",
  "modelcontextprotocol/typescript-sdk",
  "modelcontextprotocol/inspector",
  "browser-use/browser-use",
  "n8n-io/n8n",
  "langfuse/langfuse",
  "getsentry/sentry",
  "huggingface/transformers",
  "ollama/ollama",
  "astral-sh/uv",
  "denoland/deno",
];

const FALLBACK_REPOSITORIES = [
  "openai/openai-node",
  "openai/openai-python",
  "openai/openai-go",
  "googleapis/js-genai",
  "googleapis/python-genai",
  "anthropics/anthropic-sdk-typescript",
  "anthropics/anthropic-sdk-python",
  "modelcontextprotocol/python-sdk",
  "modelcontextprotocol/go-sdk",
  "pydantic/pydantic-ai",
  "microsoft/autogen",
  "microsoft/semantic-kernel",
  "crewAIInc/crewAI",
  "BerriAI/litellm",
  "run-llama/llama_index",
  "langchain-ai/langchain",
  "langchain-ai/langchain-mcp-adapters",
  "vllm-project/vllm",
  "ggml-org/llama.cpp",
  "sgl-project/sglang",
  "huggingface/diffusers",
  "huggingface/accelerate",
  "huggingface/peft",
  "gradio-app/gradio",
  "streamlit/streamlit",
  "open-webui/open-webui",
  "FlowiseAI/Flowise",
  "langflow-ai/langflow",
  "pytorch/pytorch",
  "tensorflow/tensorflow",
  "jax-ml/jax",
  "microsoft/onnxruntime",
  "triton-lang/triton",
  "kubernetes/kubernetes",
  "docker/compose",
  "hashicorp/terraform",
  "pulumi/pulumi",
  "supabase/supabase",
  "prisma/prisma",
  "drizzle-team/drizzle-orm",
  "vitejs/vite",
  "nodejs/node",
  "oven-sh/bun",
  "astral-sh/ruff",
  "rust-lang/rust",
  "grafana/grafana",
  "prometheus/prometheus",
];

const MAX_EVIDENCE_ITEMS = 8;
const EVIDENCE_CONCURRENCY = 8;

const defaultSleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function isTransientStatus(status) {
  return status === 408 || status === 429 || (status >= 500 && status <= 599);
}

async function githubJson(url, { token, fetchImpl, sleepImpl }) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "dockfinity-evidence-collector",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token?.trim()) headers.Authorization = `Bearer ${token.trim()}`;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetchImpl(url, { headers });
      if (response.ok) return response.json();
      if (!isTransientStatus(response.status) || attempt === 3) return null;
      console.log(`evidence_retry=url:${url} attempt:${attempt + 1} status:${response.status}`);
    } catch {
      if (attempt === 3) return null;
      console.log(`evidence_retry=url:${url} attempt:${attempt + 1} reason:network`);
    }
    await sleepImpl(750 * attempt);
  }
  return null;
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index]);
    }
  });
  await Promise.all(workers);
  return results;
}

async function collectFromRepositories({
  repositories,
  start,
  end,
  excludedReleaseUrls,
  githubToken,
  fetchImpl,
  sleepImpl,
}) {
  return mapWithConcurrency(repositories, EVIDENCE_CONCURRENCY, async (repository) => {
    const releases = await githubJson(
      `https://api.github.com/repos/${repository}/releases?per_page=10`,
      { token: githubToken, fetchImpl, sleepImpl }
    );
    if (!Array.isArray(releases)) return null;
    const release = releases.find((item) => {
      const published = new Date(item.published_at ?? 0);
      return !item.draft
        && !item.prerelease
        && published >= start
        && published <= end
        && !excludedReleaseUrls.has(String(item.html_url ?? "").toLowerCase());
    });
    if (!release) return null;

    const metadata = await githubJson(`https://api.github.com/repos/${repository}`, {
      token: githubToken,
      fetchImpl,
      sleepImpl,
    });
    if (!metadata) return null;

    return {
      repository: metadata.full_name,
      name: metadata.name,
      description: metadata.description,
      repositoryUrl: metadata.html_url,
      homepage: metadata.homepage || undefined,
      licence: metadata.license?.spdx_id || "NOASSERTION",
      topics: metadata.topics ?? [],
      release: {
        tag: release.tag_name,
        name: release.name || release.tag_name,
        publishedAt: release.published_at,
        url: release.html_url,
        notes: String(release.body ?? "").slice(0, 5000),
        assets: (release.assets ?? []).slice(0, 12).map((asset) => asset.name),
      },
    };
  });
}

export async function collectDockfinityEvidence({
  date,
  githubToken = "",
  publishedReleaseUrls = [],
  repositories = DEFAULT_REPOSITORIES,
  fallbackRepositories = FALLBACK_REPOSITORIES,
  fetchImpl = fetch,
  sleepImpl = defaultSleep,
}) {
  const end = new Date(`${date}T23:59:59Z`);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 7);
  const excludedReleaseUrls = new Set(
    publishedReleaseUrls.map((url) => String(url).toLowerCase())
  );
  const primary = (await collectFromRepositories({
    repositories,
    start,
    end,
    excludedReleaseUrls,
    githubToken,
    fetchImpl,
    sleepImpl,
  })).filter(Boolean);

  let candidates = primary;
  if (candidates.length < 2 && fallbackRepositories.length) {
    const primarySet = new Set(repositories.map((repository) => repository.toLowerCase()));
    const expandedRepositories = fallbackRepositories.filter(
      (repository) => !primarySet.has(repository.toLowerCase())
    );
    const fallback = (await collectFromRepositories({
      repositories: expandedRepositories,
      start,
      end,
      excludedReleaseUrls,
      githubToken,
      fetchImpl,
      sleepImpl,
    })).filter(Boolean);
    candidates = [...primary, ...fallback];
    console.log(
      `evidence_fallback=expanded-catalog primary=${primary.length} total=${candidates.length}`
    );
  }

  const usable = [...new Map(
    candidates.map((candidate) => [candidate.release.url.toLowerCase(), candidate])
  ).values()]
    .sort((left, right) => (
      new Date(right.release.publishedAt).getTime() - new Date(left.release.publishedAt).getTime()
    ))
    .slice(0, MAX_EVIDENCE_ITEMS);
  if (usable.length < 2) {
    throw new Error(
      `Public evidence collection found fewer than two eligible primary releases for ${date} `
      + `after the verified fallback catalog (primary=${primary.length}, total=${usable.length}).`
    );
  }
  return JSON.stringify(usable, null, 2);
}
