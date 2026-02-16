import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect } from "storybook/test";
import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";
import { Mail, Search, Eye, EyeOff, DollarSign } from "lucide-react";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Text input field with focus ring, validation states, and file input support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The HTML input type",
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Args-only stories ────────────────────────────

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const Email: Story = {
  args: { type: "email", placeholder: "you@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled input", disabled: true },
};

export const WithValue: Story = {
  args: { defaultValue: "Pre-filled content" },
};

// ── Icon composition stories ─────────────────────

export const SearchInput: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-[300px]">
      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="email" placeholder="Email address" className="pl-10" />
    </div>
  ),
};

export const CurrencyInput: Story = {
  render: () => (
    <div className="relative w-[200px]">
      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="number" placeholder="0.00" className="pl-10" />
    </div>
  ),
};

// ── Stateful stories ─────────────────────────────

export const PasswordWithToggle: Story = {
  render: function PasswordToggle() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className="relative w-[300px]">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: { story: "Password input with show/hide toggle using stateful render." },
    },
  },
};

// ── Semantic pairing stories ─────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-[300px] gap-1.5">
      <Label htmlFor="email-input">Email</Label>
      <Input id="email-input" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const FormGroup: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Multiple labeled inputs in a form group." },
    },
  },
};

// ── Validation stories ───────────────────────────

export const ErrorState: Story = {
  render: () => (
    <div className="grid w-[300px] gap-1.5">
      <Label htmlFor="error-email">Email</Label>
      <Input
        id="error-email"
        type="email"
        placeholder="you@example.com"
        defaultValue="not-an-email"
        aria-invalid="true"
      />
      <p className="text-sm text-destructive">Please enter a valid email address.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Input showing error/invalid state with aria-invalid." },
    },
  },
};

// ── Interaction test stories ─────────────────────

export const TypingInteraction: Story = {
  args: { placeholder: "Type here..." },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Type here...");

    await expect(input).toBeInTheDocument();
    await userEvent.click(input);
    await userEvent.type(input, "Hello, Storybook!");
    await expect(input).toHaveValue("Hello, Storybook!");
  },
};
