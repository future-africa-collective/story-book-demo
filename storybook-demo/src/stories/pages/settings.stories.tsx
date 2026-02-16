"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SettingsGeneral } from "@/components/settings-general";
import { SettingsNotifications } from "@/components/settings-notifications";
import { SettingsAppearance } from "@/components/settings-appearance";
import { SettingsSecurity } from "@/components/settings-security";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const meta: Meta = {
  title: "Pages/Settings",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Full settings page integrated with the dashboard shell.

## Composition Hierarchy

\`\`\`
Page
├── SidebarProvider
│   ├── AppSidebar (Block)
│   └── SidebarInset
│       ├── SiteHeader (Block)
│       └── Settings Content
│           ├── Page heading + description
│           └── Tabs
│               ├── General (Block: SettingsGeneral)
│               │   ├── Profile Card (Input, Textarea, Label)
│               │   ├── Preferences Card (Select)
│               │   └── Danger Zone Card (Button destructive)
│               ├── Notifications (Block: SettingsNotifications)
│               │   ├── Email Notifications (Switch rows)
│               │   ├── Push Notifications (Switch rows)
│               │   └── Schedule (Select)
│               ├── Appearance (Block: SettingsAppearance)
│               │   ├── Theme Picker (custom ThemeCards)
│               │   ├── Display (Select)
│               │   └── Accessibility (Switch rows)
│               └── Security (Block: SettingsSecurity)
│                   ├── Password Change (Input)
│                   ├── Two-Factor Auth (Switch, Badge)
│                   └── Active Sessions (Table, Badge, Button)
\`\`\`

**Primitives (14):** Badge, Button, Card, Input, Label, Select, Separator, Switch, Table, Tabs, Textarea, Tooltip, Sidebar, DropdownMenu
**Blocks (6):** AppSidebar, SiteHeader, SettingsGeneral, SettingsNotifications, SettingsAppearance, SettingsSecurity`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

function SettingsPage({ defaultTab = "general" }: { defaultTab?: string }) {
  return (
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
          <div className="flex flex-1 flex-col gap-2 px-4 py-6 lg:px-6">
            {/* Page heading */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
            <Separator className="my-4" />

            {/* Tabbed settings */}
            <Tabs defaultValue={defaultTab} className="space-y-6">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <SettingsGeneral />
              </TabsContent>

              <TabsContent value="notifications">
                <SettingsNotifications />
              </TabsContent>

              <TabsContent value="appearance">
                <SettingsAppearance />
              </TabsContent>

              <TabsContent value="security">
                <SettingsSecurity />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export const General: Story = {
  render: () => <SettingsPage defaultTab="general" />,
};

export const Notifications: Story = {
  render: () => <SettingsPage defaultTab="notifications" />,
};

export const Appearance: Story = {
  render: () => <SettingsPage defaultTab="appearance" />,
};

export const Security: Story = {
  render: () => <SettingsPage defaultTab="security" />,
};
