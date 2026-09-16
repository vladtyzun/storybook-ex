import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Avatar, type AvatarSize, type AvatarType } from "./Avatar";

const TYPES: AvatarType[] = [
  "Female_Asian_40px",
  "Caucasian_40px",
  "Female_AfricanAmerican_40px",
  "Female_Caucasian_40px",
  "ML_40px",
  "Male_AfricanAmerican_40px",
  "Male_Asian_40px",
];

const SIZES: AvatarSize[] = [
  "Large - 40",
  "Standard - 32",
  "Small - 24",
  "xSmall - 20",
];

const meta = {
  title: "Design System/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    type: "Female_Caucasian_40px",
    size: "Large - 40",
    showBorder: false,
    alt: "User avatar",
  },
  argTypes: {
    type: { control: "select", options: TYPES },
    size: { control: "select", options: SIZES },
    showBorder: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40003163-153215",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};
