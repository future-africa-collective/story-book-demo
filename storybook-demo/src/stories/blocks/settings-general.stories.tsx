"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SettingsGeneral } from "@/components/settings-general";

const meta: Meta<typeof SettingsGeneral> = {
  title: "Blocks/Settings General",
  component: SettingsGeneral,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `General settings block with profile form, preferences, and danger zone.

**Primitives used:**
- Card (CardHeader, CardContent, CardFooter)
- Input (name, email, username)
- Textarea (bio)
- Label
- Select (timezone, language)
- Button (save, cancel, delete)
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

export const EmptyProfile: Story = {
  args: {
    defaultValues: {
      name: "",
      email: "",
      username: "",
      bio: "",
      timezone: "utc",
      language: "en",
    },
  },
  parameters: {
    docs: {
      description: { story: "Empty form state for new user onboarding." },
    },
  },
};
