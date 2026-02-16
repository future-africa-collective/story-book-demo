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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

function NotificationRow({
  id,
  title,
  description,
  defaultChecked = false,
}: {
  id: string
  title: string
  description: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="space-y-0.5 pr-4">
        <Label htmlFor={id} className="text-sm font-medium cursor-pointer">
          {title}
        </Label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}

export function SettingsNotifications() {
  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Choose which emails you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <NotificationRow
            id="notif-security"
            title="Security alerts"
            description="Get notified about sign-ins from new devices and password changes."
            defaultChecked
          />
          <NotificationRow
            id="notif-product"
            title="Product updates"
            description="News about new features, improvements, and releases."
            defaultChecked
          />
          <NotificationRow
            id="notif-marketing"
            title="Marketing emails"
            description="Tips, offers, and promotional content."
          />
          <NotificationRow
            id="notif-newsletter"
            title="Weekly newsletter"
            description="A digest of activity, analytics, and insights."
            defaultChecked
          />
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Push Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>
            In-app and browser push notification settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <NotificationRow
            id="push-mentions"
            title="Direct mentions"
            description="When someone mentions you in a comment or task."
            defaultChecked
          />
          <NotificationRow
            id="push-assignments"
            title="Task assignments"
            description="When a task is assigned to you."
            defaultChecked
          />
          <NotificationRow
            id="push-comments"
            title="Comment replies"
            description="Replies to your comments and threads."
            defaultChecked
          />
          <NotificationRow
            id="push-status"
            title="Status changes"
            description="When a project or task status changes."
          />
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Notification Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Schedule</CardTitle>
          <CardDescription>
            Control when you receive notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="digest-frequency">Email digest frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="digest-frequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quiet-hours">Quiet hours</Label>
              <Select defaultValue="10pm-8am">
                <SelectTrigger id="quiet-hours">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="10pm-8am">10 PM – 8 AM</SelectItem>
                  <SelectItem value="9pm-7am">9 PM – 7 AM</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Update Schedule</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
