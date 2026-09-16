import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBar } from "./StatusBar";

const meta = {
  title: "Design System/Navigation bar/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
  args: { time: "9:41", inverted: false },
  argTypes: { time: { control: "text" }, inverted: { control: "boolean" } },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=3639-96446",
    },
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
