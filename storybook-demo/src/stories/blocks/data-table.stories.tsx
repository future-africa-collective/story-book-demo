"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DataTable } from "@/components/data-table";
import tableData from "../mocks/data/table-data.json";

const meta: Meta<typeof DataTable> = {
  title: "Blocks/Data Table",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `Full-featured data table with drag-and-drop, inline editing, and row detail drawers.

**Primitives used:**
- Table (TableHeader, TableBody, TableRow, TableCell)
- Tabs (view switching: Outline, Performance, Personnel, Documents)
- Badge (status indicators)
- Button (pagination, actions)
- Checkbox (row selection)
- DropdownMenu (column visibility, row actions)
- Input (inline target/limit editing)
- Select (reviewer assignment, pagination)
- Drawer (row detail view with chart)
- Label, Separator

**Libraries:**
- @tanstack/react-table (sorting, filtering, pagination)
- @dnd-kit (drag-and-drop row reordering)
- recharts (mini chart in drawer)
- zod (row schema validation)
- sonner (toast notifications)`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: tableData,
  },
};

export const FewRows: Story = {
  args: {
    data: tableData.slice(0, 5),
  },
  parameters: {
    docs: {
      description: { story: "Table with a small dataset (5 rows)." },
    },
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
  parameters: {
    docs: {
      description: { story: "Table with no data showing empty state." },
    },
  },
};
