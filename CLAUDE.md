# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A workshop demo teaching AI-driven frontend development with Storybook 10 + shadcn/ui + Next.js 16. The `LESSON-PLAN.md` at the root is the instructor guide. All application code lives inside `storybook-demo/`.

## Commands

All commands run from `storybook-demo/`:

```bash
cd storybook-demo

# Development
npm run storybook          # Storybook dev server on :6006
npm run dev                # Next.js dev server on :3000

# Build
npm run build              # Next.js production build
npm run build-storybook    # Static Storybook build

# Lint
npm run lint               # ESLint (next + storybook rules)

# Test
npx vitest run             # Vitest browser tests (Playwright/Chromium, headless)

# Add a shadcn component
npx shadcn@latest add <component-name>

# Build the shadcn registry for distribution
npx shadcn build
```

## Architecture

### Story Hierarchy (three tiers)

Stories are organized as **Primitives -> Blocks -> Pages** in the Storybook sidebar:

| Tier | Location | Title prefix | Purpose |
|------|----------|-------------|---------|
| Primitives | `src/components/ui/*.stories.tsx` | `Primitives/` | Atomic shadcn/ui components, **co-located** next to their `.tsx` source |
| Blocks | `src/stories/blocks/*.stories.tsx` | `Blocks/` | Multi-component compositions (e.g. login form) |
| Pages | `src/stories/pages/*.stories.tsx` | `Pages/` | Full-page prototypes with `layout: "fullscreen"` |

### Key directories

```
storybook-demo/
  .storybook/          # Storybook config (main.ts, preview.ts, vitest.setup.ts)
  src/components/ui/   # shadcn/ui components + co-located stories
  src/stories/blocks/  # Composition stories
  src/stories/pages/   # Full-page prototype stories
  src/stories/mocks/   # Shared mock data for stories
  src/app/globals.css  # Tailwind v4 + shadcn theme (CSS variables, oklch)
  src/lib/utils.ts     # cn() utility (clsx + tailwind-merge)
  registry.json        # Custom shadcn registry manifest
  components.json      # shadcn config (new-york style, lucide icons)
```

### Storybook configuration

- **Framework**: `@storybook/nextjs-vite` (Storybook 10 with Vite)
- **Story globs** (defined in `.storybook/main.ts`):
  - `src/components/**/*.stories.@(js|jsx|ts|tsx)` — co-located primitives
  - `src/stories/**/*.stories.@(js|jsx|ts|tsx)` — blocks and pages
- **Preview** imports `globals.css` for Tailwind; default layout is `centered`; autodocs enabled globally via `tags: ["autodocs"]`
- **Addons**: a11y, docs, themes, vitest, onboarding, chromatic

### Component pattern (shadcn/ui)

Components use CVA (class-variance-authority) for type-safe variants, Radix `Slot` for the `asChild` composition pattern, and `cn()` for class merging. They emit `data-slot` attributes for styling hooks.

### Three story rendering strategies

1. **Args-only** — simplest, Storybook renders the component: `args: { children: "Label" }`
2. **Render function** — custom JSX layout: `render: () => <div>...</div>`
3. **Stateful render** — named function with hooks: `render: function Demo() { const [s, setS] = useState(0); ... }`

### Interaction tests

Stories use `play` functions with imports from `"storybook/test"`:
```tsx
import { within, userEvent, expect, fn } from "storybook/test";
```
These run automatically in both Storybook UI and `npx vitest run`.

### Mock data

Centralized in `src/stories/mocks/data/`. Import as `import { mockUser } from "../mocks/data/users"`.

## Conventions

- **Path alias**: `@/*` maps to `src/*` (configured in tsconfig.json)
- **Story meta imports**: always `import type { Meta, StoryObj } from "@storybook/nextjs-vite"`
- **Story title format**: `"Tier/ComponentName"` (e.g. `"Primitives/Button"`, `"Blocks/Login Form"`, `"Pages/Dashboard"`)
- **New primitive stories** go next to their component in `src/components/ui/`
- **New composition stories** go in `src/stories/blocks/` or `src/stories/pages/`
- **Registry**: when adding a new component, also add its entry to `registry.json`
