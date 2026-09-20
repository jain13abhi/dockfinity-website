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

async function githubJson(url, { token, fetchImpl }) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "dockfinity-evidence-collector",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token?.trim()) headers.Authorization = `Bearer ${token.trim()}`;
  const response = await fetchImpl(url, { headers });
  if (!response.ok) return null;
  return response.json();
}

export async function collectDockfinityEvidence({
  date,
  githubToken = "",
  publishedNames = [],
  repositories = DEFAULT_REPOSITORIES,
  fetchImpl = fetch,
}) {
  const end = new Date(`${date}T23:59:59Z`);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 7);
  const excluded = new Set(publishedNames.map((name) => name.toLowerCase()));

  const candidates = await Promise.all(repositories.map(async (repository) => {
    const releases = await githubJson(
      `https://api.github.com/repos/${repository}/releases?per_page=5`,
      { token: githubToken, fetchImpl }
    );
    if (!Array.isArray(releases)) return null;
    const release = releases.find((item) => {
      const published = new Date(item.published_at ?? 0);
      return !item.draft && !item.prerelease && published >= start && published <= end;
    });
    if (!release) return null;

    const metadata = await githubJson(`https://api.github.com/repos/${repository}`, {
      token: githubToken,
      fetchImpl,
    });
    if (!metadata || excluded.has(String(metadata.name ?? "").toLowerCase())) return null;

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
  }));

  const usable = candidates.filter(Boolean);
  if (usable.length < 2) {
    throw new Error(
      `Public evidence collection found fewer than two eligible primary releases for ${date}.`
    );
  }
  return JSON.stringify(usable, null, 2);
}
