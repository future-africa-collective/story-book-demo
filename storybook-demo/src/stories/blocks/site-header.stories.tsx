"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

const meta: Meta<typeof SiteHeader> = {
  title: "Blocks/Site Header",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Top header bar with sidebar trigger, breadcrumb title, and action buttons.

**Primitives used:**
- Button (ghost variant, GitHub link)
- Separator (vertical divider)
- SidebarTrigger (hamburger toggle)`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
