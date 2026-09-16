import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent } from "storybook/test";
import { SegmentedControl } from "./SegmentedControl";

const two = [
  { id: "1st", label: "1st" },
  { id: "2nd", label: "2nd" },
];

const meta = {
  title: "Design System/Segmented Control",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: {
    segments: two,
    value: "1st",
    onChange: fn(),
  },
  argTypes: {
    segments: { control: false },
    onChange: { control: false },
  },
  parameters: {
    layout: "centered",
    previewWidth: "inset",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004290-147952",
    },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole("tab", { name: "2nd" }));
    await expect(args.onChange).toHaveBeenCalledWith("2nd");
  },
};
