import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Badge } from "./badge";

const meta: Meta<typeof Tabs> = {
  title: "Primitives/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4 text-sm">
        Overview content goes here.
      </TabsContent>
      <TabsContent value="analytics" className="p-4 text-sm">
        Analytics content goes here.
      </TabsContent>
      <TabsContent value="reports" className="p-4 text-sm">
        Reports content goes here.
      </TabsContent>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Tabs defaultValue="outline" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="outline">Outline</TabsTrigger>
        <TabsTrigger value="performance">
          Performance <Badge variant="secondary">3</Badge>
        </TabsTrigger>
        <TabsTrigger value="personnel">
          Personnel <Badge variant="secondary">2</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="outline" className="p-4 text-sm">
        Outline tab with tabular data.
      </TabsContent>
      <TabsContent value="performance" className="p-4 text-sm">
        Past performance records.
      </TabsContent>
      <TabsContent value="personnel" className="p-4 text-sm">
        Key personnel directory.
      </TabsContent>
    </Tabs>
  ),
};
