import type { Meta, StoryObj } from "@storybook/react-vite";
import { StackButton } from "./StackButton";
import { Icon } from "../../foundation/icons";

const meta = {
  title: "Design System/Stack Button",
  component: StackButton,
  tags: ["autodocs"],
  args: {
    type: "primary",
    state: "default",
    icon: <Icon name="arrowUp" />,
    children: "Share",
  },
  argTypes: {
    type: { control: "inline-radio", options: ["primary", "secondary"] },
    state: {
      control: "select",
      options: ["default", "hover", "focus", "active", "disabled"],
    },
    icon: { control: false },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004255-14135",
    },
  },
} satisfies Meta<typeof StackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
