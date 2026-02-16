import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Status indicator badge with semantic variants for labels, notifications, and status displays.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "ghost",
        "link",
      ],
      description: "The visual style of the badge",
    },
    children: {
      control: "text",
      description: "Badge content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Args-only stories ────────────────────────────

export const Default: Story = {
  args: { children: "Default", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Destructive: Story = {
  args: { children: "Failed", variant: "destructive" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};

// ── Render function stories ──────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

// ── Use-case stories ─────────────────────────────

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Cancelled</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Task workflow status indicators." },
    },
  },
};

export const WithCount: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Messages 4</Badge>
      <Badge variant="secondary">Updates 12</Badge>
      <Badge variant="destructive">Errors 2</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Badges used as notification counters." },
    },
  },
};

export const CategoryTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">React</Badge>
      <Badge variant="outline">TypeScript</Badge>
      <Badge variant="outline">Tailwind</Badge>
      <Badge variant="outline">Storybook</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Badges as content category tags." },
    },
  },
};
