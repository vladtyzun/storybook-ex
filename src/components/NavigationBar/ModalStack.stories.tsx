import type { Meta, StoryObj } from "@storybook/react-vite";
import { FullHeader } from "./FullHeader";
import { ModalStack } from "./ModalStack";

const meta = {
  title: "Design System/Navigation bar/ModalStack",
  component: ModalStack,
  tags: ["autodocs"],
  argTypes: { children: { control: false } },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=3639-96963",
    },
  },
} satisfies Meta<typeof ModalStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <FullHeader title="Page title" subtitle="Description copy (optional)" titleMode="page" showBack showStatusBar={false} />
    ),
  },
};
