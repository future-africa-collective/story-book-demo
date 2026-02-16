import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./label";
import { Input } from "./input";

const meta: Meta<typeof Label> = {
  title: "Primitives/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible form label built on Radix UI Label primitive. Supports disabled and error states through peer styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Label text content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Args-only stories ────────────────────────────

export const Default: Story = {
  args: { children: "Email Address" },
};

// ── Semantic pairing stories ─────────────────────

export const WithInput: Story = {
  render: () => (
    <div className="grid gap-1.5 w-[300px]">
      <Label htmlFor="paired-email">Email</Label>
      <Input id="paired-email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const RequiredField: Story = {
  render: () => (
    <div className="grid gap-1.5 w-[300px]">
      <Label htmlFor="required-name">
        Full Name <span className="text-destructive">*</span>
      </Label>
      <Input id="required-name" placeholder="John Doe" required />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Required field indicator pattern." },
    },
  },
};

export const OptionalField: Story = {
  render: () => (
    <div className="grid gap-1.5 w-[300px]">
      <Label htmlFor="optional-phone">
        Phone <span className="text-muted-foreground text-xs">(optional)</span>
      </Label>
      <Input id="optional-phone" type="tel" placeholder="(555) 123-4567" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Optional field label pattern." },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <div className="grid gap-1.5 w-[300px]">
      <Label htmlFor="desc-password">Password</Label>
      <Input id="desc-password" type="password" />
      <p className="text-xs text-muted-foreground">
        Must be at least 8 characters with one uppercase letter.
      </p>
    </div>
  ),
};

export const ErrorLabel: Story = {
  render: () => (
    <div className="grid gap-1.5 w-[300px]">
      <Label htmlFor="error-field" className="text-destructive">
        Email
      </Label>
      <Input
        id="error-field"
        type="email"
        defaultValue="bad-email"
        aria-invalid="true"
      />
      <p className="text-sm text-destructive">Invalid email format.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Label styled for validation error state." },
    },
  },
};

// ── Showcase ─────────────────────────────────────

export const FormField: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="grid gap-1.5">
        <Label htmlFor="ff-name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input id="ff-name" placeholder="John Doe" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="ff-email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input id="ff-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="ff-company">
          Company <span className="text-muted-foreground text-xs">(optional)</span>
        </Label>
        <Input id="ff-company" placeholder="Acme Inc." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multi-field form with mixed required and optional labels.",
      },
    },
  },
};
