import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { AvatarStack, type AvatarStackAmount, type AvatarStackDensity } from "./AvatarStack";

const DENSITIES: AvatarStackDensity[] = ["Standard", "Small"];
const AMOUNTS: AvatarStackAmount[] = ["2", "3", "3+"];

const meta = {
  title: "Design System/Avatar Stack",
  component: AvatarStack,
  tags: ["autodocs"],
  args: {
    density: "Standard",
    amount: "2",
    number: "+3",
  },
  argTypes: {
    density: { control: "inline-radio", options: DENSITIES },
    amount: { control: "select", options: AMOUNTS },
    number: { control: "text" },
    items: { control: false },
    overflow: { control: false },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40003163-153904",
    },
  },
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("group")).toBeInTheDocument();
  },
};
