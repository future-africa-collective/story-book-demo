# Workshop Lesson Plan: AI-Driven Frontend Development with Storybook & shadcn Registry

## Context

This lesson plan onboards junior developers into a **new demo codebase** (`story-book-demo/`) where they will learn the full lifecycle of building, testing, and documenting frontend UI components using AI tools, Storybook, and shadcn registry. The existing `waltoria-registry` (69+ components, Storybook 10, full test suite) serves as the production reference implementation. The workshop repo starts empty and will be scaffolded live during sessions.

**Audience:** Beginner-friendly — includes primers on React, TypeScript, and Tailwind before Storybook concepts.

**Format:** Multi-session — each session covers 2-3 modules (~45-60 min each).

---

## Session 1: Foundations & Project Setup

### Module 1: Primer — React, TypeScript & Tailwind (15 min)

#### React Components in 60 Seconds

React components are **functions that return JSX** (HTML-like syntax in JavaScript):

```tsx
// A simple React component
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Using it
<Greeting name="Ifeanyi" />
```

Key concepts:
- **Props** — inputs to a component (like function arguments)
- **JSX** — the HTML-like syntax (`<div>`, `<Button>`, etc.)
- **Export** — makes the component available to other files

#### TypeScript in 60 Seconds

TypeScript adds **type safety** to JavaScript. You define what shape your data takes:

```tsx
// Define the shape of props
interface ButtonProps {
  children: React.ReactNode;  // What goes inside the button
  variant?: "default" | "accent";  // Optional — limited to these values
  onClick?: () => void;  // Optional click handler
}

// Use the interface
function Button({ children, variant = "default", onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

Why it matters: TypeScript catches bugs **before** your code runs. Storybook uses TypeScript types to auto-generate the controls panel.

#### Tailwind CSS in 60 Seconds

Instead of writing CSS files, you add utility classes directly in JSX:

```tsx
// Traditional CSS: write a .btn class in a .css file
// Tailwind: compose utilities inline
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Click me
</button>
```

Common patterns:
| Class | What it does |
|-------|-------------|
| `bg-blue-600` | Blue background |
| `text-white` | White text |
| `px-4 py-2` | Horizontal/vertical padding |
| `rounded-lg` | Rounded corners |
| `hover:bg-blue-700` | Darker on hover |
| `flex gap-2` | Flexbox layout with gap |
| `dark:bg-gray-900` | Dark mode background |

---

### Module 2: Project Scaffolding (30 min)

This is a live-coding session. Everyone follows along.

#### 2.1 Create the Next.js Project

```bash
cd /home/waldhari/software-packages/story-book-demo

# Scaffold Next.js with TypeScript + Tailwind
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

What this creates:
- `src/app/` — Next.js App Router pages
- `src/app/globals.css` — Tailwind CSS entry point
- `tailwind.config.ts` — Tailwind configuration
- `tsconfig.json` — TypeScript configuration
- `package.json` — dependencies and scripts

#### 2.2 Initialize shadcn

```bash
npx shadcn@latest init
```

During init, select:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

This creates `components.json` — the configuration file that tells shadcn where to put components and how to style them.

#### 2.3 Install Storybook

```bash
# Initialize Storybook (auto-detects Next.js)
npx storybook@latest init
```

This creates:
- `.storybook/main.ts` — which files are stories, which addons to load
- `.storybook/preview.ts` — global configuration (styles, decorators)
- `src/stories/` — example stories (we'll replace these)

#### 2.4 Install Essential Addons

```bash
# Accessibility testing
npm install -D @storybook/addon-a11y

# Theme switching (dark/light mode)
npm install -D @storybook/addon-themes

# Documentation auto-generation
npm install -D @storybook/addon-docs
```

#### 2.5 Configure Storybook

Update `.storybook/main.ts`:

```ts
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    // Component-level stories (co-located with components)
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    // Page-level compositions and prototypes
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/nextjs-vite",
};

export default config;
```

Update `.storybook/preview.ts`:

```ts
import type { Preview } from "@storybook/nextjs-vite";

// Import Tailwind CSS so all components are styled
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "button-name", enabled: true },
          { id: "image-alt", enabled: true },
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
```

#### 2.6 Verify It Works

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Walk through the Storybook UI:
- **Sidebar** — component tree
- **Canvas** — the rendered component
- **Controls** — live prop editing
- **Docs** — auto-generated documentation
- **Accessibility** — a11y audit results

### Key Takeaway
Storybook is the **development environment** for components. Developers build and test in Storybook first, then integrate into the app.

---

## Session 2: Components, Stories & 21st.dev

### Module 3: UI Inspiration with 21st.dev (15 min)

#### What is 21st.dev?

[21st.dev](https://21st.dev/) is a community-driven marketplace of production-ready React + Tailwind components built on shadcn foundations. Think of it as "NPM for design engineers."

#### Workflow: Browse, Copy, Install, Customize

1. **Browse** — Visit [21st.dev](https://21st.dev/) and search for the component you need
2. **Preview** — Each component has multiple variants with live demos
3. **Copy the install command** — Components provide a one-line shadcn install command
4. **Install** — Run in your project:
   ```bash
   npx shadcn@latest add <component-name>
   ```
5. **Customize** — Modify Tailwind classes and props to match your design system

#### Live Exercise

Have each developer:
1. Go to [21st.dev](https://21st.dev/)
2. Find a component they like (card, button group, hero section)
3. Note the installation command — we use this pattern next

#### 21st Magic (AI-Powered Component Generation)

21st also provides an MCP server called **21st Magic** that integrates with AI coding tools (Cursor, Claude Code) to generate components from natural language. Describe what you want, AI generates shadcn-compatible code.

---

### Module 4: Adding Components & Writing Stories (30 min)

#### 4.1 Add shadcn Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add label
```

Each command installs **source code** into `src/components/ui/`. These are your files — not node_modules. You own and customize them.

#### 4.2 Understand the File Organization

Co-locate stories with their components:

```
src/components/ui/
├── button.tsx              # Component source
├── button.stories.tsx      # Its Storybook stories
├── card.tsx
├── card.stories.tsx
├── badge.tsx
├── badge.stories.tsx
└── ...
```

**Rule:** Primitive component stories live **next to** their component files.

#### 4.3 Anatomy of a Story File

A story file has three parts:

```tsx
// badge.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

// ── PART 1: Meta ─────────────────────────────────
// Describes the component to Storybook
const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",       // Sidebar location
  component: Badge,                 // The actual component
  tags: ["autodocs"],               // Auto-generate docs page
  parameters: {
    layout: "centered",             // Center in canvas
    docs: {
      description: {
        component: "Badge for status indicators and labels.",
      },
    },
  },
  argTypes: {                       // Configure the controls panel
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive"],
      description: "The visual style of the badge",
    },
  },
};

export default meta;

// ── PART 2: Type Alias ───────────────────────────
// DRY pattern — avoids repeating typeof meta everywhere
type Story = StoryObj<typeof meta>;

// ── PART 3: Named Exports = Individual Stories ───
// Each export becomes a story in the sidebar
export const Default: Story = {
  args: { children: "Default", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Destructive: Story = {
  args: { children: "Failed", variant: "destructive" },
};
```

#### 4.4 The Three Rendering Strategies

Teach in order of complexity:

**A) Args-only (simplest — Storybook renders for you):**
```tsx
export const Default: Story = {
  args: { children: "Click me", variant: "default" },
};
```

**B) Render function (custom JSX — you control layout):**
```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};
```

**C) Stateful render (interactive — simulates real behavior):**
```tsx
import React from "react";

export const Counter: Story = {
  render: function CounterDemo() {
    const [count, setCount] = React.useState(0);
    return (
      <Button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </Button>
    );
  },
};
```

| Strategy | When to Use |
|----------|-------------|
| Args-only | Simple prop variations |
| Render function | Custom layout or multiple components together |
| Stateful render | Interactive demos with useState or other hooks |

#### 4.5 Sidebar Hierarchy

The `title` string creates the sidebar tree:

```
title: "Primitives/Badge"              → Primitives → Badge
title: "Primitives/Button"             → Primitives → Button
title: "Patterns/Login Form"           → Patterns → Login Form
title: "Pages/Dashboard/Overview"      → Pages → Dashboard → Overview
```

#### Hands-On Exercise

Each developer creates story files for `badge` and `button` components with:
- A `Default` story (args-only)
- An `AllVariants` story (render function showing all variants)
- Verify they appear in the Storybook sidebar under `Primitives/`

---

## Session 3: Testing & Interaction

### Module 5: Interaction Testing with Play Functions (30 min)

#### What Are Play Functions?

Play functions turn stories into **automated tests** that run directly in the browser. They simulate user interactions and assert expected behavior. When you view a story, you see green/red pass/fail indicators.

#### Key Testing Imports

```tsx
import { within, userEvent, expect, fn } from "storybook/test";
```

| Import | What It Does |
|--------|-------------|
| `within` | Scopes queries to the story canvas |
| `userEvent` | Simulates clicks, typing, keyboard events |
| `expect` | Assertions (toBeInTheDocument, toHaveFocus, etc.) |
| `fn()` | Creates a tracked mock function (records calls) |

#### Click Test Example

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect, fn } from "storybook/test";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ClickTest: Story = {
  args: {
    children: "Click Me",
    onClick: fn(),  // tracked mock function
  },
  play: async ({ canvasElement, args }) => {
    // 1. Scope queries to the story canvas
    const canvas = within(canvasElement);

    // 2. Find the button by its accessible role
    const button = canvas.getByRole("button", { name: "Click Me" });

    // 3. Assert it exists
    await expect(button).toBeInTheDocument();

    // 4. Simulate a click
    await userEvent.click(button);

    // 5. Assert the handler was called
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
```

#### Keyboard Navigation Test

```tsx
export const KeyboardNav: Story = {
  args: {
    children: "Press Enter",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Press Enter" });

    // Focus the button
    await button.focus();
    await expect(button).toHaveFocus();

    // Press Enter
    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
```

#### Why This Matters

- **No separate test runner needed** — tests run in the browser alongside stories
- **Visual debugging** — you can see exactly what happened in the interactions panel
- **Accessibility testing** — verifying keyboard navigation proves components work for everyone

#### Hands-On Exercise

Each developer adds a `play` function to their Button story that:
1. Finds the button by role
2. Clicks it
3. Asserts the click handler was called
4. Verify the green checkmark appears in Storybook

---

### Module 6: Composing Components into Patterns (20 min)

#### Beyond Single Components

Once primitives work, compose them into real UI patterns:

```
src/
├── components/ui/          # Primitives (co-located stories)
│   ├── button.tsx + stories
│   ├── card.tsx + stories
│   └── input.tsx + stories
└── stories/                # Compositions (page-level prototypes)
    ├── patterns/
    │   └── login-form.stories.tsx
    └── mocks/
        └── data/
            └── users.ts    # Shared mock data
```

#### Composition Story Example

```tsx
// src/stories/patterns/login-form.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta = {
  title: "Patterns/Login Form",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
};
```

#### Decorators — Wrapping Stories

Decorators add layout or context around every story:

```tsx
const meta: Meta = {
  title: "Patterns/Login Form",
  decorators: [
    (Story) => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Story />
      </div>
    ),
  ],
};
```

#### Centralized Mock Data

```tsx
// src/stories/mocks/data/users.ts
export const mockUser = {
  id: "user-1",
  name: "Jane Doe",
  email: "jane@example.com",
  role: "admin",
};
```

Use in stories: `import { mockUser } from "../mocks/data/users";`

#### Hands-On Exercise

Each developer creates a composition story combining Card + Input + Button into a form pattern.

---

## Session 4: Registry & Agentic Workflow

### Module 7: Building a Custom shadcn Registry (30 min)

#### What is a Registry?

A shadcn registry is a **distribution system for UI components**. Instead of publishing to npm, you publish component source code that consumers install directly via `npx shadcn add`. The component code lands in their project — they own it.

#### 7.1 Create the Registry Schema

Create `registry.json` at the project root:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "workshop-registry",
  "homepage": "https://your-team-url.com",
  "items": [
    {
      "name": "button",
      "type": "registry:ui",
      "title": "Button",
      "description": "Workshop button with custom variants",
      "dependencies": ["@radix-ui/react-slot", "class-variance-authority"],
      "registryDependencies": ["utils"],
      "files": [
        {
          "path": "src/components/ui/button.tsx",
          "type": "registry:ui",
          "target": "components/ui/button.tsx"
        }
      ]
    },
    {
      "name": "badge",
      "type": "registry:ui",
      "title": "Badge",
      "description": "Status indicator badge with semantic variants",
      "dependencies": ["class-variance-authority"],
      "registryDependencies": ["utils"],
      "files": [
        {
          "path": "src/components/ui/badge.tsx",
          "type": "registry:ui",
          "target": "components/ui/badge.tsx"
        }
      ]
    }
  ]
}
```

#### 7.2 Registry Item Anatomy

| Field | Purpose |
|-------|---------|
| `name` | Unique identifier (used in `shadcn add <name>`) |
| `type` | `registry:ui` (components), `registry:lib` (utilities), `registry:block` (complex compositions) |
| `dependencies` | npm packages the component needs |
| `registryDependencies` | Other registry items it depends on (e.g., `utils`) |
| `files[].path` | Source location in registry repo |
| `files[].target` | Where it installs in consuming projects |

#### 7.3 Configure External Registries

In `components.json`, add third-party registries:

```json
{
  "registries": {
    "@magicui": "https://magicui.design/r/{name}",
    "@react-bits": "https://reactbits.dev/r/{name}.json",
    "@ai-elements": "https://registry.ai-sdk.dev/{name}.json"
  }
}
```

Install from them:

```bash
npx shadcn@latest add "@magicui/shimmer-button"
npx shadcn@latest add "@ai-elements/ai-input"
```

#### 7.4 Build & Serve the Registry

```bash
# Build the registry for distribution
npx shadcn build

# Consumers install from your hosted registry
npx shadcn@latest add "https://your-registry.com/r/button"
```

#### Hands-On Exercise

Each developer adds their button component to `registry.json` with correct dependencies, description, and file mappings.

---

### Module 8: Agentic UI Design Best Practices (20 min)

#### What is Agentic UI Development?

Using AI tools (Claude Code, Cursor, GitHub Copilot, v0, 21st Magic) as development partners to generate, refine, and test UI components. The developer maintains creative direction while AI handles implementation.

#### The Agentic Workflow

```
1. DESCRIBE  → Tell AI what you need (natural language)
2. GENERATE  → AI produces component code
3. REVIEW    → Developer reviews for quality, a11y, types
4. STORY     → Create Storybook story to visualize
5. TEST      → Add play functions for interaction testing
6. REGISTER  → Add to registry.json for distribution
7. ITERATE   → Use Storybook controls to refine props/variants
```

#### Best Practices

**1. Component Spec First**
Before asking AI to generate code, define:
- Props interface (what inputs does it accept?)
- Variants (what visual states does it have?)
- Accessibility requirements (ARIA roles, keyboard nav)
- Responsive behavior (mobile, tablet, desktop)

**2. Small and Focused**
- Generate one component at a time
- Start with simple primitives (Button, Badge, Input)
- Compose into patterns after primitives are solid

**3. Always Review AI Output**
- Check TypeScript types are correct
- Verify Tailwind class combinations make sense
- Test accessibility (keyboard nav, screen readers)
- Validate dark mode support

**4. Story-Driven Development**
- Write the story **alongside** the component
- Stories are living documentation — they replace stale wiki pages
- Each named export is a contract: `Default` = happy path, `Error` = failure state, `Loading` = transition

**5. Design Token Consistency**
Use the `cn()` utility for class merging (already installed with shadcn):

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Use `class-variance-authority` (CVA) for type-safe variants:

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center rounded-lg font-medium transition-colors", // base
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 hover:bg-gray-50",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);
```

**6. Accessibility is Not Optional**
- Every interactive component needs keyboard navigation
- Use semantic HTML (`button`, `nav`, `main` — not `div` for everything)
- Test with the Storybook a11y addon (green checkmark = pass)

---

## Session 5: Testing, Quality & Reference Architecture

### Module 9: Testing Layers (20 min)

| Layer | Tool | What It Tests |
|-------|------|---------------|
| **Interaction** | Storybook play functions | User flows in the browser |
| **Accessibility** | @storybook/addon-a11y + axe-core | WCAG compliance |
| **Unit** | Vitest + React Testing Library | Component logic, props, events |
| **Visual Regression** | Chromatic | Pixel-level visual diffs across commits |

#### Unit Testing Setup

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

#### Running Tests

```bash
# Start Storybook (play functions run automatically)
npm run storybook

# Unit tests
npx vitest run

# Accessibility — visible in the a11y tab of each story in Storybook
```

---

### Module 10: Reference Architecture Walk-Through (20 min)

Walk through the production reference at `packages/waltoria-registry/`:

#### Component File Pattern

```
registry/waltoria/button/
├── button.tsx              # Component with CVA variants
├── button.stories.tsx      # 15+ stories covering all variants/sizes/states
├── button.test.tsx          # Unit tests
└── index.ts                # Exports
```

#### Key Files to Study

| File | What to Learn |
|------|---------------|
| `registry/waltoria/badge/badge.stories.tsx` | Clean args-only + render function patterns, use-case stories |
| `registry/waltoria/button/button.stories.tsx` | Play functions, interaction testing, all variant showcases |
| `.storybook/main.ts` | Story source configuration, addon setup |
| `.storybook/preview.ts` | Theme switching, a11y rules, viewport presets |
| `registry.json` | Full registry schema with 58 components |
| `components.json` | shadcn config with external registry references |

#### Architecture Decisions Worth Discussing

- **Co-located stories** — primitives live next to their component files
- **Separate composition stories** — page-level prototypes live in `stories/`
- **Centralized mock data** — shared test data in `stories/mocks/data/`
- **Two-level sidebar** — `Primitives/` for atoms, `Patterns/` for compositions, `Pages/` for full layouts

---

## Quick Reference Card

### Essential Commands

```bash
# ── Project Setup ──────────────────────────
npx create-next-app@latest . --typescript --tailwind --app --src-dir
npx shadcn@latest init
npx storybook@latest init

# ── Add Components ─────────────────────────
npx shadcn@latest add button card badge input label

# ── Development ────────────────────────────
npm run storybook              # Start Storybook on :6006
npm run dev                    # Start Next.js on :3000

# ── Testing ────────────────────────────────
npm run storybook              # Play functions run in browser
npx vitest run                 # Unit tests

# ── Registry ───────────────────────────────
npx shadcn build               # Build registry for distribution
```

### Story File Template

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyComponent } from "./my-component";

const meta: Meta<typeof MyComponent> = {
  title: "Category/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { /* component props */ },
};
```

### CSF Cheat Sheet

| Concept | What It Does |
|---------|--------------|
| `Meta` | Describes the component (title, args, decorators) |
| `StoryObj` | Defines one story (args, render, play) |
| `args` | Props passed to the component |
| `argTypes` | Controls panel configuration |
| `render` | Custom JSX (overrides default rendering) |
| `play` | Interaction test that runs on story load |
| `decorators` | Wrappers (layout, providers, context) |
| `parameters` | Storybook config (`layout: "centered"`) |
| `tags: ["autodocs"]` | Auto-generate a docs page |

---

## Session Map

| Session | Modules | Duration | Focus |
|---------|---------|----------|-------|
| **1** | 1 (Primer) + 2 (Setup) | ~45 min | React/TS/Tailwind basics, scaffold the project |
| **2** | 3 (21st.dev) + 4 (Stories) | ~45 min | UI inspiration, add components, write first stories |
| **3** | 5 (Play Functions) + 6 (Composition) | ~50 min | Interaction testing, compose patterns |
| **4** | 7 (Registry) + 8 (Agentic) | ~50 min | Build registry, AI-assisted workflow |
| **5** | 9 (Testing) + 10 (Reference) | ~40 min | Testing layers, study production codebase |

---

## Verification Checklist

After the workshop series, each developer should be able to:

- [ ] Run `npm run storybook` and see all stories at `http://localhost:6006`
- [ ] See Badge, Button, and Card stories under `Primitives/` in the sidebar
- [ ] Change `variant` in the controls panel and see the component update live
- [ ] See green checkmarks on stories with `play` functions
- [ ] Click the "Docs" tab and see auto-generated documentation
- [ ] View the a11y tab and see pass/fail results for each story
- [ ] Have a valid `registry.json` with entries for all components created
- [ ] Have at least one composition story in `stories/patterns/` combining multiple primitives

---

## Files to Create in `story-book-demo/`

1. **Scaffold** — `create-next-app` + `shadcn init` + `storybook init` (Session 1)
2. `.storybook/main.ts` — Configure story sources and addons (Session 1)
3. `.storybook/preview.ts` — Import globals.css, configure a11y and docs (Session 1)
4. `src/components/ui/badge.stories.tsx` — Badge stories (Session 2)
5. `src/components/ui/button.stories.tsx` — Button stories with play functions (Session 3)
6. `src/stories/patterns/login-form.stories.tsx` — Composition story (Session 3)
7. `src/stories/mocks/data/users.ts` — Shared mock data (Session 3)
8. `registry.json` — Registry schema (Session 4)
9. Update `components.json` — Add external registry references (Session 4)
