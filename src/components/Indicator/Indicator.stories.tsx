import type { Meta, StoryObj } from "@storybook/react-vite";
import { Indicator } from "./Indicator";

const meta = {
  title: "Design System/Indicator",
  component: Indicator,
  tags: ["autodocs"],
  args: {
    variation: "dot",
    color: "standard",
    number: "+24",
    showBorder: false,
  },
  argTypes: {
    variation: {
      control: "inline-radio",
      options: ["dot", "number"],
    },
    color: {
      control: "select",
      options: ["standard", "teal", "neutral"],
    },
    number: { control: "text" },
    showBorder: { control: "boolean" },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=3078-89052",
    },
  },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
