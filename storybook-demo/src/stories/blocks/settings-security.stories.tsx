"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SettingsSecurity } from "@/components/settings-security";

const meta: Meta<typeof SettingsSecurity> = {
  title: "Blocks/Settings Security",
  component: SettingsSecurity,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Security settings block with password change, 2FA, and active session management.

**Primitives used:**
- Card (CardHeader, CardContent, CardFooter)
- Input (password fields)
- Label
- Switch (authenticator, SMS)
- Badge (current session, recommended)
- Button (update, revoke, generate codes)
- Table (active sessions list)
- Separator`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
