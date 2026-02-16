import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect, fn } from "storybook/test";
import { Button } from "./button";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Primary action element with multiple variants, sizes, and icon support.",
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
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "The size of the button",
    },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Args-only stories ────────────────────────────

export const Default: Story = {
  args: { children: "Button", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "Link", variant: "link" },
};

// ── Size stories ─────────────────────────────────

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large", size: "lg" },
};

export const IconButton: Story = {
  args: { size: "icon", children: <Mail className="h-4 w-4" /> },
};

// ── Icon composition stories ─────────────────────

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail className="h-4 w-4" />
      Send Email
    </Button>
  ),
};

export const IconRight: Story = {
  render: () => (
    <Button>
      Next Step
      <ArrowRight className="h-4 w-4" />
    </Button>
  ),
};

// ── State stories ────────────────────────────────

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="h-4 w-4 animate-spin" />
      Loading...
    </Button>
  ),
};

// ── Showcase stories ─────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  ),
};

// ── Interaction test stories ─────────────────────

export const ClickInteraction: Story = {
  args: {
    children: "Click Me",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Click Me" });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const KeyboardNavigation: Story = {
  args: {
    children: "Press Enter",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Press Enter" });

    await button.focus();
    await expect(button).toHaveFocus();

    await userEvent.keyboard("{Enter}");
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const DisabledInteraction: Story = {
  args: {
    children: "Can't Click",
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Can't Click" });

    await expect(button).toBeDisabled();
  },
};

// ── Stateful stories ─────────────────────────────

export const Counter: Story = {
  render: function CounterDemo() {
    const [count, setCount] = React.useState(0);
    return (
      <Button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </Button>
    );
  },
  parameters: {
    docs: {
      description: { story: "Interactive counter demonstrating stateful render pattern." },
    },
  },
};
