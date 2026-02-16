import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect } from "storybook/test";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockCredentials } from "../mocks/data/users";

const meta: Meta = {
  title: "Blocks/Login Form",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Authentication login block composing Card, Input, Label, and Button primitives.

**Composition:**
- Card (container)
- Label + Input (email field)
- Label + Input (password field)
- Button (submit action)
- Button variant=link (forgot password)`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <Button variant="link" className="h-auto p-0 text-xs">
              Forgot password?
            </Button>
          </div>
          <Input id="login-password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Sign In</Button>
        <p className="text-xs text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button variant="link" className="h-auto p-0 text-xs">
            Create one
          </Button>
        </p>
      </CardFooter>
    </Card>
  ),
};

export const WithError: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3">
          <p className="text-sm text-destructive">
            Invalid email or password. Please try again.
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="err-email" className="text-destructive">
            Email
          </Label>
          <Input
            id="err-email"
            type="email"
            defaultValue="wrong@email.com"
            aria-invalid="true"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="err-password" className="text-destructive">
            Password
          </Label>
          <Input id="err-password" type="password" aria-invalid="true" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Login form displaying a validation error state." },
    },
  },
};

export const FilledState: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="filled-email">Email</Label>
          <Input
            id="filled-email"
            type="email"
            defaultValue={mockCredentials.email}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="filled-password">Password</Label>
          <Input
            id="filled-password"
            type="password"
            defaultValue={mockCredentials.password}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Pre-filled login using centralized mock data." },
    },
  },
};

export const FormInteraction: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="test-email">Email</Label>
          <Input
            id="test-email"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="test-password">Password</Label>
          <Input id="test-password" type="password" placeholder="Password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText("Email");
    const passwordInput = canvas.getByLabelText("Password");
    const submitButton = canvas.getByRole("button", { name: "Sign In" });

    await userEvent.click(emailInput);
    await userEvent.type(emailInput, mockCredentials.email);
    await expect(emailInput).toHaveValue(mockCredentials.email);

    await userEvent.click(passwordInput);
    await userEvent.type(passwordInput, mockCredentials.password);
    await expect(passwordInput).toHaveValue(mockCredentials.password);

    await expect(submitButton).toBeEnabled();
  },
  parameters: {
    docs: {
      description: {
        story: "Automated interaction test: fills email and password fields.",
      },
    },
  },
};
