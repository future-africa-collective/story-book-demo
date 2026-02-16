"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const meta: Meta<typeof AppSidebar> = {
  title: "Blocks/App Sidebar",
  component: AppSidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Application sidebar with navigation, documents, and user menu.

**Primitives used:**
- Sidebar (SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton)
- Avatar (user avatar in footer)
- DropdownMenu (user account menu)
- Tooltip (menu button tooltips)
- Button (inbox action)

**Sub-blocks composed:**
- NavMain — primary navigation links with icons
- NavDocuments — document shortcuts
- NavSecondary — settings, help, search
- NavUser — user avatar + account dropdown`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
        <SidebarInset>
          <div className="flex items-center justify-center h-screen text-muted-foreground">
            Main content area
          </div>
        </SidebarInset>
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inset: Story = {
  args: {
    variant: "inset",
  },
};
