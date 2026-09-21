import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  isRendererContentFailure,
  validateFixedRenderer,
} from "./renderer-preflight.mjs";

test("render CLI supports unpublished candidates and a pinned renderer", () => {
  const source = fs.readFileSync("scripts/render-brief.py", "utf8");
  assert.match(source, /"--brief-file"/);
  assert.match(source, /SLIDE_RENDERER_COMMIT/);
});

test("renderer copy failures are model-correctable but infrastructure failures are not", () => {
  assert.equal(isRendererContentFailure("Text does not fit within 3 lines"), true);
  assert.equal(isRendererContentFailure("Required logo missing"), false);

  assert.throws(
    () => validateFixedRenderer({
      brief: { date: "2026-09-21" },
      date: "2026-09-21",
      rendererPath: ".renderer/dockfinity.py",
      logoPath: "logo.png",
      spawnImpl: (_command, args) => ({
        status: 1,
        stdout: "",
        stderr: `Text does not fit within 3 lines. ${args.join(" ")}`,
      }),
    }),
    (error) => {
      assert.equal(error.retryableByModel, true);
      assert.match(error.message, /fixed renderer rejected/i);
      assert.match(error.message, /--brief-file/);
      return true;
    }
  );

  assert.throws(
    () => validateFixedRenderer({
      brief: { date: "2026-09-21" },
      date: "2026-09-21",
      logoPath: "logo.png",
      spawnImpl: () => ({ status: 1, stdout: "", stderr: "urlopen error timed out" }),
    }),
    (error) => {
      assert.equal(error.retryableByModel, false);
      assert.match(error.message, /infrastructure/i);
      return true;
    }
  );
});

test("renderer preflight accepts content using the locked template", () => {
  validateFixedRenderer({
    brief: { date: "2026-09-21" },
    date: "2026-09-21",
    logoPath: "logo.png",
    spawnImpl: () => ({ status: 0, stdout: "wrote slide", stderr: "" }),
  });
});
