import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect } from "storybook/test";
import { Switch } from "./switch";
import { Label } from "./label";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const SettingsRow: Story = {
  render: () => (
    <div className="flex items-center justify-between w-[350px] rounded-lg border p-4">
      <div className="space-y-0.5">
        <Label htmlFor="marketing-emails">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products and features.
        </p>
      </div>
      <Switch id="marketing-emails" />
    </div>
  ),
  parameters: {
    docs: {
      description: { story: "Settings toggle row pattern used in preferences forms." },
    },
  },
};

export const ToggleInteraction: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="test-switch" />
      <Label htmlFor="test-switch">Toggle me</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole("switch");

    await expect(switchEl).not.toBeChecked();
    await userEvent.click(switchEl);
    await expect(switchEl).toBeChecked();
  },
};
