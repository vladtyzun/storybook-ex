import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusSheet } from "./StatusSheet";

const meta = {
  title: "Design System/Navigation bar/StatusSheet",
  component: StatusSheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    previewWidth: "full",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=3639-96897",
    },
  },
} satisfies Meta<typeof StatusSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
