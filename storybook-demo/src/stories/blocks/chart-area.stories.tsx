"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

const meta: Meta<typeof ChartAreaInteractive> = {
  title: "Blocks/Chart Area Interactive",
  component: ChartAreaInteractive,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Interactive area chart with time-range filtering.

**Primitives used:**
- Card (container)
- Chart (ChartContainer, ChartTooltip)
- Select (mobile time range picker)
- ToggleGroup (desktop time range picker)
- Recharts (AreaChart, Area, CartesianGrid, XAxis)

**Features:**
- 90-day / 30-day / 7-day time range filtering
- Desktop vs. mobile traffic overlay
- Responsive: ToggleGroup on desktop, Select on mobile
- Gradient fills with CSS variable colors`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
