"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import tableData from "../mocks/data/table-data.json";

const meta: Meta = {
  title: "Pages/Dashboard Full",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Complete dashboard page assembled from blocks and primitives.

## Composition Hierarchy

\`\`\`
Page
├── SidebarProvider (layout shell)
│   ├── AppSidebar (Block)
│   │   ├── NavMain (Sidebar, Button, Tooltip)
│   │   ├── NavDocuments (Sidebar)
│   │   ├── NavSecondary (Sidebar)
│   │   └── NavUser (Avatar, DropdownMenu)
│   └── SidebarInset
│       ├── SiteHeader (Block)
│       │   ├── SidebarTrigger
│       │   ├── Separator
│       │   └── Button
│       └── Content
│           ├── SectionCards (Block)
│           │   └── 4× Card + Badge
│           ├── ChartAreaInteractive (Block)
│           │   └── Card + AreaChart + ToggleGroup + Select
│           └── DataTable (Block)
│               └── Tabs + Table + Checkbox + DropdownMenu + Drawer
\`\`\`

**Primitives (12):** Badge, Button, Card, Checkbox, Chart, Drawer, DropdownMenu, Input, Label, Select, Separator, Table, Tabs, ToggleGroup, Tooltip, Sidebar

**Blocks (5):** AppSidebar, SiteHeader, SectionCards, ChartAreaInteractive, DataTable`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={tableData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const CollapsedSidebar: Story = {
  render: () => (
    <SidebarProvider
      defaultOpen={false}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={tableData.slice(0, 5)} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dashboard with sidebar collapsed to icon-only mode.",
      },
    },
  },
};
