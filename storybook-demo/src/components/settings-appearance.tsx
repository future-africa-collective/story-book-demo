"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

function ThemeCard({
  theme,
  label,
  active = false,
}: {
  theme: "light" | "dark" | "system"
  label: string
  active?: boolean
}) {
  const previewClasses =
    theme === "dark"
      ? "bg-zinc-900 border-zinc-700"
      : theme === "light"
        ? "bg-white border-zinc-200"
        : "bg-gradient-to-r from-white to-zinc-900 border-zinc-300"

  return (
    <button
      className={`flex flex-col items-center gap-2 rounded-lg border-2 p-3 transition-colors hover:border-primary/50 ${
        active ? "border-primary bg-primary/5" : "border-muted"
      }`}
    >
      <div
        className={`h-20 w-full rounded-md border ${previewClasses} flex items-end p-2`}
      >
        <div className="flex gap-1">
          <div
            className={`h-2 w-8 rounded-full ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-300"}`}
          />
          <div
            className={`h-2 w-4 rounded-full ${theme === "dark" ? "bg-zinc-700" : "bg-zinc-200"}`}
          />
        </div>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

export function SettingsAppearance() {
  return (
    <div className="space-y-6">
      {/* Theme */}
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>
            Select your preferred color theme for the interface.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <ThemeCard theme="light" label="Light" />
            <ThemeCard theme="dark" label="Dark" />
            <ThemeCard theme="system" label="System" active />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Apply Theme</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Display */}
      <Card>
        <CardHeader>
          <CardTitle>Display</CardTitle>
          <CardDescription>
            Customize layout density and font preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="font-size">Font size</Label>
              <Select defaultValue="md">
                <SelectTrigger id="font-size">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="md">Medium (Default)</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="density">Layout density</Label>
              <Select defaultValue="default">
                <SelectTrigger id="density">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="comfortable">Comfortable</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Save Display Settings</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Options to improve readability and navigation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <Label
                htmlFor="reduce-motion"
                className="text-sm font-medium cursor-pointer"
              >
                Reduce motion
              </Label>
              <p className="text-sm text-muted-foreground">
                Minimize animations throughout the interface.
              </p>
            </div>
            <Switch id="reduce-motion" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <Label
                htmlFor="high-contrast"
                className="text-sm font-medium cursor-pointer"
              >
                High contrast
              </Label>
              <p className="text-sm text-muted-foreground">
                Increase contrast for better visibility.
              </p>
            </div>
            <Switch id="high-contrast" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <Label
                htmlFor="keyboard-nav"
                className="text-sm font-medium cursor-pointer"
              >
                Enhanced keyboard navigation
              </Label>
              <p className="text-sm text-muted-foreground">
                Show focus indicators and enable shortcut hints.
              </p>
            </div>
            <Switch id="keyboard-nav" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
