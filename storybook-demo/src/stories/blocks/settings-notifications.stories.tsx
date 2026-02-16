"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SettingsNotifications } from "@/components/settings-notifications";

const meta: Meta<typeof SettingsNotifications> = {
  title: "Blocks/Settings Notifications",
  component: SettingsNotifications,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Notification preferences block with email, push, and schedule settings.

**Primitives used:**
- Card (CardHeader, CardContent, CardFooter)
- Switch (toggle rows for each notification type)
- Label
- Select (digest frequency, quiet hours)
- Button (save)
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
