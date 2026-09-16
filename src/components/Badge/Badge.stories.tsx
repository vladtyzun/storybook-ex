import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Design System/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    size: "small",
    color: "success",
    children: "Label",
    showLeftIcon: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["success", "neutral", "error", "warning", "standard-alt"],
    },
    children: { control: "text" },
    showLeftIcon: { control: "boolean" },
    leadingIcon: { control: false },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=2014-55186",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
