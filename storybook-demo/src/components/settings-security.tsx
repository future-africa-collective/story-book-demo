"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const activeSessions = [
  {
    id: "session-1",
    device: "Chrome on macOS",
    location: "New York, US",
    lastActive: "Now",
    current: true,
  },
  {
    id: "session-2",
    device: "Safari on iPhone",
    location: "New York, US",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "session-3",
    device: "Firefox on Windows",
    location: "London, UK",
    lastActive: "3 days ago",
    current: false,
  },
]

export function SettingsSecurity() {
  return (
    <div className="space-y-6">
      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Update your password to keep your account secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm new password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Password must be at least 8 characters with one uppercase letter, one number,
            and one special character.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="2fa-toggle"
                  className="text-sm font-medium cursor-pointer"
                >
                  Authenticator app
                </Label>
                <Badge variant="outline">Recommended</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Use an authenticator app like Google Authenticator or Authy.
              </p>
            </div>
            <Switch id="2fa-toggle" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <Label
                htmlFor="sms-toggle"
                className="text-sm font-medium cursor-pointer"
              >
                SMS verification
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive a code via SMS when signing in.
              </p>
            </div>
            <Switch id="sms-toggle" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5 pr-4">
              <Label
                htmlFor="backup-codes"
                className="text-sm font-medium cursor-pointer"
              >
                Backup codes
              </Label>
              <p className="text-sm text-muted-foreground">
                Generate one-time backup codes for emergency access.
              </p>
            </div>
            <Button variant="outline" size="sm">
              Generate Codes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Active Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>
            Devices and locations where your account is currently signed in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {session.device}
                      {session.current && (
                        <Badge variant="default">Current</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{session.location}</TableCell>
                  <TableCell>{session.lastActive}</TableCell>
                  <TableCell className="text-right">
                    {!session.current && (
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        Revoke
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button variant="outline">Revoke All Other Sessions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
