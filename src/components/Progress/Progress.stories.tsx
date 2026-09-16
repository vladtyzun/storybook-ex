import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";

const meta = {
  title: "Design System/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    type: "determinate",
    value: 0.45,
    bufferValue: 0.7,
    steps: 5,
    currentStep: 2,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["determinate", "indeterminate", "buffer", "steps"],
    },
    value: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    bufferValue: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    steps: { control: { type: "number", min: 2, max: 8 } },
    currentStep: { control: { type: "number", min: 0, max: 7 } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "inset",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40003090-131563",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
