# Storybook + shadcn/ui Workshop Demo

A workshop demo teaching AI-driven frontend development with **Storybook 10**, **shadcn/ui**, and **Next.js 16**. The UI library follows a composable architecture — Primitives, Blocks, and Pages — styled with an Anthropic-inspired warm cream and coral theme.

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.1.6 |
| React | 19.2.3 |
| Storybook | 10.2.8 |
| Tailwind CSS | v4 |
| shadcn/ui | new-york style |
| TypeScript | 5.x |

## Getting Started

```bash
cd storybook-demo

# Install dependencies
npm install

# Run Storybook (port 6006)
npm run storybook

# Run Next.js dev server (port 3000)
npm run dev
```

## Architecture

Stories are organized in three composable tiers:

```
Primitives → Blocks → Pages
```

| Tier | Location | Description |
|------|----------|-------------|
| **Primitives** | `src/components/ui/` | Atomic shadcn/ui components with co-located stories |
| **Blocks** | `src/stories/blocks/` | Multi-component compositions (sidebar, settings sections, charts) |
| **Pages** | `src/stories/pages/` | Full-page prototypes with `layout: "fullscreen"` |

### Directory Structure

```
storybook-demo/
├── .storybook/              # Storybook config (main.ts, preview.ts)
├── src/
│   ├── app/
│   │   ├── globals.css      # Anthropic theme (CSS variables, hex)
│   │   └── dashboard/       # Dashboard route + data
│   ├── components/
│   │   ├── ui/              # 25 shadcn/ui primitives + 14 co-located stories
│   │   ├── app-sidebar.tsx  # Dashboard shell blocks
│   │   ├── site-header.tsx
│   │   ├── section-cards.tsx
│   │   ├── chart-area-interactive.tsx
│   │   ├── data-table.tsx
│   │   ├── settings-general.tsx
│   │   ├── settings-notifications.tsx
│   │   ├── settings-appearance.tsx
│   │   └── settings-security.tsx
│   ├── stories/
│   │   ├── blocks/          # 10 block stories
│   │   ├── pages/           # 3 page stories (dashboard, dashboard-full, settings)
│   │   └── mocks/data/      # Shared mock data
│   └── lib/utils.ts         # cn() utility
├── components.json          # shadcn config
└── registry.json            # Custom registry manifest
```

## Theme

The UI uses an Anthropic-inspired design language:

- **Warm cream** backgrounds (`#faf9f5`)
- **Coral** primary accent (`#c96442` light / `#d97757` dark)
- **Near-black** text (`#3d3929`)
- **Pill-shaped** buttons (`rounded-full`)
- **Soft** card corners (`rounded-2xl`)
- Full **dark mode** support

## What's Inside

### Primitives (25 components, 14 with stories)

Avatar, Badge, Breadcrumb, Button, Card, Chart, Checkbox, Drawer, Dropdown Menu, Input, Label, Select, Separator, Sheet, Sidebar, Skeleton, Sonner, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

### Blocks (10 stories)

- **App Sidebar** — Navigation with collapsible sections
- **Site Header** — Top bar with sidebar trigger
- **Section Cards** — KPI metric cards with trends
- **Chart Area** — Interactive area chart with time filtering
- **Data Table** — Full-featured table with DnD, inline editing, drawer detail view
- **Login Form** — Auth form with interaction tests
- **Settings General** — Profile form, preferences, danger zone
- **Settings Notifications** — Email/push toggles, digest schedule
- **Settings Appearance** — Theme picker, display, accessibility
- **Settings Security** — Password, 2FA, active sessions

### Pages (3 stories)

- **Dashboard** — Simple prototype layout
- **Dashboard Full** — Complete dashboard-01 with sidebar shell and all blocks
- **Settings** — 4-tab settings page integrated with dashboard shell

## Commands

```bash
cd storybook-demo

npm run storybook          # Storybook dev server on :6006
npm run dev                # Next.js dev server on :3000
npm run build              # Next.js production build
npm run build-storybook    # Static Storybook export
npm run lint               # ESLint
npx vitest run             # Interaction tests (Playwright/Chromium)
npx shadcn@latest add <name>  # Add a shadcn component
```

## Workshop

See [`LESSON-PLAN.md`](./LESSON-PLAN.md) for the full instructor guide covering the scaffolding sequence, component patterns, story anatomy, and verification checklist.

## Stats

- **~8,200** lines of source code
- **71** source files
- **25** shadcn/ui primitives
- **14** primitive stories with variants and interaction tests
- **10** block stories
- **3** page stories

## License

MIT
