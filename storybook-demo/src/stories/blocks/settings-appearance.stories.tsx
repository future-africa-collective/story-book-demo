"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SettingsAppearance } from "@/components/settings-appearance";

const meta: Meta<typeof SettingsAppearance> = {
  title: "Blocks/Settings Appearance",
  component: SettingsAppearance,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Appearance settings block with theme picker, display options, and accessibility toggles.

**Primitives used:**
- Card (CardHeader, CardContent, CardFooter)
- Switch (reduce motion, high contrast, keyboard nav)
- Label
- Select (font size, layout density)
- Button (apply, save)
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
