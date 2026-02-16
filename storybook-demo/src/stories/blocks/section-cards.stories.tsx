import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionCards } from "@/components/section-cards";

const meta: Meta<typeof SectionCards> = {
  title: "Blocks/Section Cards",
  component: SectionCards,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `KPI metrics row composing Card, Badge, and Tabler icons.

**Primitives used:**
- Card (CardHeader, CardAction, CardFooter)
- Badge (variant="outline" with trend icons)
- IconTrendingUp / IconTrendingDown

**Layout:** Responsive grid — 1 col → 2 col → 4 col via container queries.`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
