# Dockfinity Brand Kit — Single Source of Truth

This document codifies the design tokens, typography, color palette, logo assets, and usage rules for Dockfinity Private Limited across all surfaces:
- `dockfinity.com` (holding company trust layer)
- `dockwarelabs.dockfinity.com` (software & technology division)
- `dockfinity.com/digital-services` (SME services)
- Client-facing credit lines and ecosystem properties

---

## 1. Typography

| Role | Font Family | Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Display / Headings** | **Syne** (`400, 500, 600, 700, 800`) | `var(--font-display)` / `font-display` | H1–H6 headlines, stat numbers, brand titles |
| **Body / UI** | **Inter** (`latin`) | `var(--font-sans)` / `font-sans` | Paragraphs, buttons, navigation, form inputs |
| **Code / Technical** | **JetBrains Mono** (`latin`) | `var(--font-mono)` / `font-mono` | Badges, code snippets, telemetry, identifiers (CIN, GSTIN, UDYAM) |

Configured in [`src/app/layout.tsx`](file:///src/app/layout.tsx) and mapped in [`src/app/globals.css`](file:///src/app/globals.css) via `@theme`.

---

## 2. Colour System

### Core Palette
- **Base Background (Dark)**: `#030711` (`hsl(224, 71%, 4%)`)
- **Base Background (Light)**: `#ffffff` (`hsl(0, 0%, 100%)`)
- **Primary Text (Dark)**: `#f8fafc` (`hsl(210, 40%, 98%)`)
- **Primary Text (Light)**: `#030711` (`hsl(224, 71%, 4%)`)

### Accent Orange Token
- **Token Name**: `--color-brand` / `hsl(var(--brand))`
- **Raw HSL**: `38 92% 50%`
- **Exact Hex**: `#f59e0b` (Amber 500)
- **Gradient**: `linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)`
- **Utility Classes**: `bg-brand`, `text-brand`, `border-brand`, `text-gradient-brand`
- **Rule**: Replace any hardcoded near-matches with `--color-brand` / `#f59e0b`.

### Neutral Scale Reference

| Token | Light Mode Value (HSL / Hex) | Dark Mode Value (HSL / Hex) | Description |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 100%` (`#ffffff`) | `224 71% 4%` (`#030711`) | Page base background |
| `--foreground` | `224 71% 4%` (`#030711`) | `210 40% 98%` (`#f8fafc`) | Primary high-contrast body text |
| `--card` | `0 0% 100%` (`#ffffff`) | `222 40% 10%` (`#0f172a`) | Elevated card / modal surface |
| `--card-foreground` | `224 71% 4%` (`#030711`) | `210 40% 98%` (`#f8fafc`) | Card text |
| `--secondary` | `220 14% 96%` (`#f1f5f9`) | `217 33% 13%` (`#161f2c`) | Subdued secondary containers, solid footer background |
| `--secondary-foreground` | `224 71% 4%` (`#030711`) | `210 40% 98%` (`#f8fafc`) | Text on secondary elements |
| `--muted` | `220 14% 96%` (`#f1f5f9`) | `217 33% 13%` (`#161f2c`) | Muted surface |
| `--muted-foreground` | `220 9% 46%` (`#64748b`) | `217 10% 62%` (`#94a3b8`) | Secondary descriptive text, captions |
| `--border` / `--input` | `220 13% 91%` (`#e2e8f0`) | `215 28% 14%` (`#1a2434`) | UI separators, component borders |
| `--ring` | `224 71% 4%` (`#030711`) | `38 92% 50%` (`#f59e0b`) | Focus ring indicator |
| `--destructive` | `0 84.2% 60.2%` (`#ef4444`) | `0 62.8% 30.6%` (`#7f1d1d`) | Error states and destructive alerts |

---

## 3. Official Logo Assets

| Background Type | PNG Asset | Vector SVG Asset | Usage |
| :--- | :--- | :--- | :--- |
| **Dark Backgrounds** | `/logo-mark-white.png` | `/logo-mark-white.svg` | Default dark theme, header/footer on dark bands |
| **Light Backgrounds** | `/logo-mark-navy.png` | `/logo-mark-navy.svg` | Light theme headers, print, light cards |

- Ratio: `461 x 267` (`~1.726:1`)
- All assets reside in `/public/`.

---

## 4. "Managed by Dockfinity" Credit Rule

Dockfinity appears as a credit line on client work across other brands.
- **Copy Requirement**: Must always read **"Managed by Dockfinity"**.
- **Visual Presentation**:
  - Dark backgrounds: white logo mark (`/logo-mark-white.svg` or `.png`)
  - Light backgrounds: navy logo mark (`/logo-mark-navy.svg` or `.png`)
  - Typography: `Inter` medium or `JetBrains Mono` uppercase tracking-wider
- **Component**: Reusable component provided at [`src/components/brand/managed-by-dockfinity.tsx`](file:///src/components/brand/managed-by-dockfinity.tsx).
