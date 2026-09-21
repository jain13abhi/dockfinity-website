#!/usr/bin/env python3
"""
Renders the slide for a published discovery brief.

The brief JSON in content/discovery/ is the single source. Everything the
renderer needs is derived from it, so the page and the slide cannot carry
different items for the same date — which is exactly what happened on
9 September, when the slide showed three products that were in no brief.

    python scripts/render-brief.py 2026-09-15 --logo assets/dockfinity-logo.png

The renderer itself is fetched from the slide-renderers repository and is never
edited here. If it raises, the content does not fit: shorten the brief, not the
layout.
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import sys
import tempfile
import urllib.request
from datetime import datetime
from pathlib import Path

SLIDE_RENDERER_COMMIT = os.environ.get("SLIDE_RENDERER_COMMIT", "main")
RENDERER_URL = (
    "https://raw.githubusercontent.com/jain13abhi/slide-renderers/"
    f"{SLIDE_RENDERER_COMMIT}/dockfinity/render-slides.py"
)


def load_renderer(local: Path | None) -> object:
    """Import the renderer as a module so its BRIEF can be set directly."""
    if local:
        source = local.read_text(encoding="utf-8")
    else:
        with urllib.request.urlopen(RENDERER_URL, timeout=30) as response:
            if response.status != 200:
                raise SystemExit(f"Renderer fetch returned {response.status}. No slide produced.")
            source = response.read().decode("utf-8")

    # Written to a temporary directory, never into the repository: the
    # renderer is fetched fresh every run and must not be committed here,
    # where a stale copy would quietly become the one that gets used.
    directory = Path(tempfile.mkdtemp(prefix="renderer-"))
    path = directory / "renderer.py"
    path.write_text(source, encoding="utf-8")

    spec = importlib.util.spec_from_file_location("renderer", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def source_line(item: dict) -> str:
    """
    One footer line per item: name, date, and the address it was read from.

    The brief's own source string carries a "Source: " prefix and sometimes a
    publisher, which the 360px footer column cannot hold — six such lines
    overflowed it on 9 September. Name, date and URL is what fits.
    """
    raw = str(item.get("source", "")).replace("Source:", "").strip()
    url = raw.rsplit(" - ", 1)[-1].strip() if " - " in raw else ""
    date = display_date(str(item["releaseDate"]))
    return f"{item['name']} - {date} - {url}" if url else f"{item['name']} - {date}"


def display_date(iso: str) -> str:
    """2026-09-08 becomes 8 Sep 2026, without a platform-specific format flag."""
    when = datetime.strptime(iso, "%Y-%m-%d")
    return f"{when.day} {when.strftime('%b %Y')}"


def build_brief(brief: dict) -> dict:
    """Map the published brief onto the dictionary the renderer expects."""
    items = brief["items"]
    # Two, not one. A single card leaves the left column 675px tall with
    # about 100px in it, and the renderer refuses a column that empty - the
    # message it gives is a spacing figure in pixels, which nobody can act
    # on. Three briefs were refused that way on 19 September 2026. Say it
    # here instead, in items, before anything is drawn.
    if not 2 <= len(items) <= 3:
        raise SystemExit(
            f"{len(items)} item(s). The slide holds two or three. "
            f"One card cannot fill the left column and the render is "
            f"refused; four do not fit.\nAdd or drop an item. "
            f"Nothing was rendered."
        )

    accent = brief.get("accentPhrase")
    if not accent:
        raise SystemExit(
            "accentPhrase is missing from the brief. It must be a phrase that already "
            "appears in the thesis, so the renderer can colour it in place."
        )

    return {
        "date": brief["date"],
        "layout": "single",
        "slide_count": 1,
        "thesis": brief["thesis"],
        "accent_phrase": accent,
        "read_through": brief["readThrough"],
        "items": [
            {
                key: value
                for key, value in {
                    "name": item["name"],
                    "release_date": item["releaseDate"],
                    "version": item.get("version"),
                    "licence": item.get("licence"),
                    "platform": item.get("platform"),
                    "repo_url": item.get("releaseUrl"),
                    "product_url": item.get("productUrl"),
                }.items()
                if value
            }
            for item in items
        ],
        "footer_sources": [source_line(item) for item in items],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("date", help="brief date, YYYY-MM-DD")
    parser.add_argument("--brief-file", type=Path, help="unpublished candidate JSON")
    parser.add_argument("--logo", required=True, type=Path)
    parser.add_argument("--out-dir", type=Path, default=Path("public/briefs"))
    parser.add_argument("--renderer", type=Path, help="local renderer, for testing")
    args = parser.parse_args()

    brief_path = args.brief_file or Path("content/discovery") / f"{args.date}.json"
    if not brief_path.is_file():
        raise SystemExit(f"No brief at {brief_path}.")

    brief = json.loads(brief_path.read_text(encoding="utf-8"))
    if brief.get("date") != args.date:
        raise SystemExit(
            f"Brief date {brief.get('date')!r} does not match requested date {args.date!r}."
        )
    renderer = load_renderer(args.renderer)

    renderer.BRIEF = build_brief(brief)
    renderer.validate_brief(renderer.BRIEF)

    logo = renderer.load_logo(args.logo)
    images = [renderer.render_single(renderer.BRIEF, logo)]
    args.out_dir.mkdir(parents=True, exist_ok=True)
    for path in renderer.save_outputs(renderer.BRIEF, images, args.out_dir):
        print(f"wrote {path}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:  # noqa: BLE001 - the message is the point
        print(f"\nRENDER FAILED:\n{exc}", file=sys.stderr)
        raise SystemExit(1)
