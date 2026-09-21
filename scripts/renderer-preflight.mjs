import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CONTENT_FAILURE_PATTERNS = [
  /text does not fit/i,
  /overfull/i,
  /underfilled/i,
  /too long/i,
  /shorten/i,
  /clearance/i,
  /spacing/i,
  /safe area/i,
  /accentPhrase/i,
  /slide holds two or three/i,
];

export function isRendererContentFailure(message) {
  return CONTENT_FAILURE_PATTERNS.some((pattern) => pattern.test(String(message ?? "")));
}

function rendererError(message, retryableByModel) {
  const error = new Error(message);
  error.retryableByModel = retryableByModel;
  return error;
}

export function validateFixedRenderer({
  brief,
  date,
  rendererPath = process.env.DOCKFINITY_RENDERER,
  logoPath = process.env.DOCKFINITY_LOGO,
  pythonCommand = process.env.PYTHON_COMMAND || "python",
  spawnImpl = spawnSync,
}) {
  if (!logoPath) {
    throw rendererError("Fixed renderer infrastructure failed: Dockfinity logo is missing.", false);
  }
  const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "dockfinity-render-check-"));
  const briefPath = path.join(workspace, "candidate.json");
  fs.writeFileSync(briefPath, `${JSON.stringify(brief, null, 2)}\n`, "utf8");
  const args = [
    "scripts/render-brief.py",
    date,
    "--brief-file",
    briefPath,
    "--logo",
    logoPath,
    "--out-dir",
    path.join(workspace, "slides"),
  ];
  if (rendererPath) args.push("--renderer", rendererPath);

  try {
    const result = spawnImpl(pythonCommand, args, {
      cwd: process.cwd(),
      encoding: "utf8",
      env: process.env,
    });
    if (result.error) {
      throw rendererError(`Fixed renderer infrastructure failed: ${result.error.message}`, false);
    }
    if (result.status === 0) return;
    const detail = `${result.stderr ?? ""}\n${result.stdout ?? ""}`.trim().slice(-2400);
    if (isRendererContentFailure(detail)) {
      throw rendererError(
        "Fixed renderer rejected the generated copy. Rewrite only the affected text; keep every " +
        "fact, source, field, and visual rule unchanged.\n\n" + detail,
        true
      );
    }
    throw rendererError(
      "Fixed renderer infrastructure failed; an LLM rewrite cannot repair this.\n\n" +
        (detail || `Renderer exited with status ${result.status}.`),
      false
    );
  } finally {
    fs.rmSync(workspace, { recursive: true, force: true });
  }
}
