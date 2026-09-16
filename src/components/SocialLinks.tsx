"use client";

import React from "react";
import { liveAccounts, type SocialAccount } from "@/lib/social";

/**
 * The row of profile links in the footer.
 *
 * Marks are drawn inline rather than pulled from an icon package: lucide
 * dropped its brand icons, and a wrong-shaped logo on a supplier's site reads
 * as carelessness to the buyer it is meant to reassure.
 *
 * At rest each mark carries its own colour at low strength, so the row reads
 * as a set rather than a sticker sheet on a dark ground. On hover the colour
 * comes up to full and the tile lifts. Nothing renders for an account that
 * does not exist — see lib/social.ts.
 */

const PATHS: Record<SocialAccount["icon"], React.ReactNode> = {
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2.6" />
      <line x1="7" y1="10.4" x2="7" y2="17.4" />
      <circle cx="7" cy="7.1" r="1.25" fill="currentColor" stroke="none" />
      <path d="M11.3 17.4v-7m0 2.2c0-1.3 1-2.2 2.4-2.2s2.7.8 2.7 2.9v4.1" />
    </>
  ),
  threads: (
    <path d="M16.2 11.4c-.1 0-.2-.1-.3-.1-.2-3.2-2-5-5-5h-.1c-1.8 0-3.3.8-4.2 2.2l1.6 1.1c.7-1 1.7-1.3 2.6-1.3h.1c.9 0 1.6.3 2.1.8.3.4.6.9.7 1.6-.9-.2-1.8-.2-2.8-.2-2.8.2-4.6 1.8-4.5 4.1.1 1.1.6 2.1 1.5 2.8.8.6 1.8.8 2.9.8 1.4-.1 2.5-.6 3.3-1.6.6-.8.9-1.7 1.1-2.9.7.4 1.2 1 1.5 1.7.5 1.1.5 3-1 4.5-1.3 1.3-2.9 1.9-5.3 1.9-2.7 0-4.7-.9-6-2.5C3.2 17.4 2.6 15.3 2.5 12c0-3.3.6-5.4 1.9-6.9C5.7 3.4 7.7 2.6 10.4 2.6c2.7 0 4.7.9 6.1 2.5 1 1.2 1.6 2.6 1.8 4.3l1.9-.5c-.3-2.1-1-3.9-2.3-5.3C16.2 1.6 13.6.6 10.4.6h-.1C7.1.6 4.6 1.7 3 3.8 1.5 5.7.7 8.4.6 12c.1 3.6.9 6.3 2.4 8.2 1.6 2.1 4.1 3.2 7.3 3.2h.1c2.8 0 4.9-.8 6.5-2.4 2.1-2.1 2-4.8 1.3-6.4-.5-1.2-1.4-2.2-2.7-2.9Zm-4.9 5c-1.2.1-2.4-.5-2.5-1.6-.1-.9.6-1.8 2.6-1.9h.5c.7 0 1.4.1 2 .2-.2 2.7-1.5 3.2-2.6 3.3Z" fill="currentColor" stroke="none" />
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z" fill="currentColor" stroke="none" />
    </>
  ),
  x: (
    <path d="M17.2 3h3.3l-7.2 8.2L21.7 21h-6.6l-4.4-5.7L4.5 21H1.2l7.7-8.8L1.6 3h6.8l4 5.3L17.2 3Zm-1.1 16.1h1.8L7.6 4.8H5.6l10.5 14.3Z" fill="currentColor" stroke="none" />
  ),
  google: (
    <>
      <path d="M12 21c2.4 0 4.4-.8 5.9-2.2 1.6-1.5 2.4-3.7 2.4-6 0-.6-.1-1.1-.2-1.6H12v3.3h4.7c-.2 1.1-.8 2-1.7 2.6l-.02.15 2.6 2 .18.02" />
      <path d="M12 21c2.4 0 4.4-.8 5.9-2.2l-2.8-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8l-.15.01-2.7 2.1-.05.14A9 9 0 0 0 12 21Z" />
      <path d="M6.9 13.7a5.5 5.5 0 0 1 0-3.5l-.01-.16-2.74-2.13-.09.04a9 9 0 0 0 0 8l2.84-2.25Z" />
      <path d="M12 6.6c1.7 0 2.9.7 3.5 1.3l2.6-2.5C16.4 3.9 14.4 3 12 3a9 9 0 0 0-8 4.9l2.8 2.3c.7-2.2 2.7-3.6 5.2-3.6Z" />
    </>
  ),
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  const accounts = liveAccounts();
  if (accounts.length === 0) return null;

  return (
    <div className={className}>
      <p className="text-foreground font-bold text-xs uppercase tracking-widest mb-4">
        Follow Dockfinity
      </p>
      <ul className="flex flex-wrap items-center gap-2.5">
        {accounts.map((account) => (
          <li key={account.name}>
            <a
              href={account.href as string}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`Dockfinity on ${account.name}`}
              title={account.name}
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.04] transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ ["--brand" as string]: account.colour }}
            >
              {/* The colour, at rest and on hover. Kept on one element so the
                  two states cannot drift apart. */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[19px] w-[19px] opacity-60 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
                style={{ color: "var(--brand)" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {PATHS[account.icon]}
              </svg>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-25 motion-reduce:hidden"
                style={{ background: "var(--brand)" }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
