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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export function SettingsGeneral({
  defaultValues = {
    name: "Ifeanyi Onubogu",
    email: "ifeanyi@example.com",
    username: "ifeanyi",
    bio: "Full-stack developer passionate about building great user experiences.",
    timezone: "est",
    language: "en",
  },
}: {
  defaultValues?: {
    name: string
    email: string
    username: string
    bio: string
    timezone: string
    language: string
  }
}) {
  return (
    <div className="space-y-6">
      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Your public profile information. This is visible to other team
            members.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="settings-name">Full Name</Label>
              <Input id="settings-name" defaultValue={defaultValues.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="settings-username">Username</Label>
              <Input
                id="settings-username"
                defaultValue={defaultValues.username}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="settings-email">Email</Label>
            <Input
              id="settings-email"
              type="email"
              defaultValue={defaultValues.email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="settings-bio">Bio</Label>
            <Textarea id="settings-bio" defaultValue={defaultValues.bio} />
            <p className="text-xs text-muted-foreground">
              Brief description for your profile. Max 500 characters.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 border-t pt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Regional and language settings for your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="settings-timezone">Timezone</Label>
              <Select defaultValue={defaultValues.timezone}>
                <SelectTrigger id="settings-timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">
                    Pacific Time (PT)
                  </SelectItem>
                  <SelectItem value="mst">
                    Mountain Time (MT)
                  </SelectItem>
                  <SelectItem value="cst">
                    Central Time (CT)
                  </SelectItem>
                  <SelectItem value="est">
                    Eastern Time (ET)
                  </SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="settings-language">Language</Label>
              <Select defaultValue={defaultValues.language}>
                <SelectTrigger id="settings-language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Button>Update Preferences</Button>
        </CardFooter>
      </Card>

      <Separator />

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions for your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">Delete Account</p>
            <p className="text-sm text-muted-foreground">
              Permanently remove your account and all associated data.
            </p>
          </div>
          <Button variant="destructive" className="shrink-0">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
