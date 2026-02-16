import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent, expect } from "storybook/test";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-2">
      {["Email notifications", "SMS alerts", "Push notifications"].map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Checkbox id={item.toLowerCase().replace(/\s/g, "-")} />
          <Label htmlFor={item.toLowerCase().replace(/\s/g, "-")}>{item}</Label>
        </div>
      ))}
    </div>
  ),
};

export const ToggleInteraction: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="test-check" />
      <Label htmlFor="test-check">Toggle me</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};
