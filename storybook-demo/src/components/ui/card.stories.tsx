import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Versatile container with header, title, description, content, action, and footer sub-components.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Basic stories ────────────────────────────────

export const Basic: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          A brief description of the card content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the main content area of the card.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
        <CardDescription>
          Are you sure you want to proceed?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This action cannot be undone.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

// ── Use-case stories ─────────────────────────────

export const MetricCard: Story = {
  render: () => (
    <Card className="w-[250px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">$45,231.89</p>
        <div className="flex items-center gap-1 mt-1">
          <Badge variant="default">+20.1%</Badge>
          <span className="text-xs text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Dashboard KPI metric card with trend badge." },
    },
  },
};

export const FeatureCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-xl">
          🚀
        </div>
        <CardTitle className="mt-2">Quick Deploy</CardTitle>
        <CardDescription>
          Ship your components in seconds with our registry.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Feature highlight card with icon and CTA." },
    },
  },
};

export const PricingCard: Story = {
  render: () => (
    <Card className="w-[300px] relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <Badge>Most Popular</Badge>
      </div>
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-lg">Pro Plan</CardTitle>
        <CardDescription>For growing teams</CardDescription>
        <p className="text-3xl font-bold mt-2">
          $29<span className="text-sm font-normal text-muted-foreground">/mo</span>
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {["Unlimited components", "Priority support", "Custom themes", "Team access"].map(
            (feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                {feature}
              </li>
            )
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Pricing tier card with feature list." },
    },
  },
};

export const EmptyState: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="text-4xl mb-4">📭</div>
        <CardTitle className="text-lg">No results found</CardTitle>
        <CardDescription className="mt-1 mb-4">
          Try adjusting your search or filters.
        </CardDescription>
        <Button variant="outline">Clear Filters</Button>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: { story: "Empty state card for no-data scenarios." },
    },
  },
};

// ── Showcase ─────────────────────────────────────

export const MetricGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "Total Users", value: "2,847", change: "+12.5%", up: true },
        { title: "Active Projects", value: "142", change: "+3.2%", up: true },
        { title: "Open Issues", value: "23", change: "-8.1%", up: false },
      ].map((metric) => (
        <Card key={metric.title} className="w-[220px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{metric.value}</p>
            <Badge variant={metric.up ? "default" : "secondary"} className="mt-1">
              {metric.change}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Dashboard metric grid composing multiple cards." },
    },
  },
};
