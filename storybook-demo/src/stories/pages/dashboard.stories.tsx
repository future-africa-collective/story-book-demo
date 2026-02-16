import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockUser } from "../mocks/data/users";

const meta: Meta = {
  title: "Pages/Dashboard",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Full dashboard page prototype composing all primitives.

**Composition hierarchy:**
- Page shell (nav + content area)
  - Header bar (search Input + user info)
  - Metric Cards grid (Card + Badge)
  - Recent activity Card (Card + Badge + Button)

Demonstrates the **Primitives → Blocks → Pages** assembly.`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const metrics = [
  { title: "Total Users", value: "2,847", change: "+12.5%", up: true },
  { title: "Revenue", value: "$45,231", change: "+8.2%", up: true },
  { title: "Active Projects", value: "142", change: "+3.1%", up: true },
  { title: "Open Issues", value: "23", change: "-15.3%", up: false },
];

const recentActivity = [
  { action: "Deployed v2.1.0", time: "2 minutes ago", status: "default" as const },
  { action: "Merged PR #142", time: "15 minutes ago", status: "default" as const },
  { action: "Build failed on staging", time: "1 hour ago", status: "destructive" as const },
  { action: "New user signed up", time: "3 hours ago", status: "secondary" as const },
  { action: "Updated billing info", time: "5 hours ago", status: "secondary" as const },
];

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* ── Top Navigation Bar ──────────────────── */}
      <header className="border-b bg-card px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Workshop Dashboard</h1>
          <Badge variant="outline">Demo</Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[250px]">
            <Input placeholder="Search..." />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
              {mockUser.name.charAt(0)}
            </div>
            <span className="text-sm">{mockUser.name}</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* ── Sidebar ─────────────────────────── */}
        <aside className="w-[220px] border-r bg-card min-h-[calc(100vh-53px)] p-4">
          <nav className="space-y-1">
            {["Dashboard", "Projects", "Team", "Reports", "Settings"].map(
              (item, i) => (
                <Button
                  key={item}
                  variant={i === 0 ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item}
                </Button>
              )
            )}
          </nav>
        </aside>

        {/* ── Main Content ────────────────────── */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome */}
          <div>
            <h2 className="text-2xl font-bold">
              Welcome back, {mockUser.name.split(" ")[0]}!
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s what&apos;s happening with your projects.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <Badge
                    variant={metric.up ? "default" : "destructive"}
                    className="mt-1"
                  >
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest actions across your projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <Badge variant={item.status} className="text-xs">
                        {item.status === "destructive" ? "Error" : "OK"}
                      </Badge>
                      <span className="text-sm">{item.action}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  ),
};

export const EmptyDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Workshop Dashboard</h1>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
            {mockUser.name.charAt(0)}
          </div>
          <span className="text-sm">{mockUser.name}</span>
        </div>
      </header>

      <main className="flex items-center justify-center min-h-[calc(100vh-53px)]">
        <Card className="w-[450px]">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <CardTitle className="text-xl mb-2">
              Welcome to your dashboard
            </CardTitle>
            <CardDescription className="mb-6">
              Get started by creating your first project.
            </CardDescription>
            <Button>Create Project</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Empty state for new users with no projects yet.",
      },
    },
  },
};
