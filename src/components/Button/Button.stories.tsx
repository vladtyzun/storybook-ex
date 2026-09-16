import type { Meta, StoryObj } from "@storybook/react-vite";
import { iconNames } from "../../foundation/icons";
import { Button } from "./Button";

const iconOptions = ["", ...iconNames] as const;

const meta = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    type: "primary",
    size: "large",
    state: "default",
    iconOnly: false,
    children: "Button text",
    leadingIcon: undefined,
    appendIcon: undefined,
  },
  argTypes: {
    type: {
      control: "select",
      options: [
        "primary",
        "primary-alt",
        "secondary",
        "negative",
        "outline",
        "transparent",
        "media",
      ],
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    state: {
      control: "select",
      options: ["default", "hover", "focus", "active", "disabled", "loading"],
      description:
        "Forced visual state for every type (incl. outline, transparent, media).",
    },
    iconOnly: { control: "boolean" },
    leadingIcon: {
      control: "select",
      options: [...iconOptions],
      mapping: Object.fromEntries(
        iconOptions.map((name) => [name, name === "" ? undefined : name]),
      ),
      description: "Foundation IconName, or leave empty",
    },
    appendIcon: {
      control: "select",
      options: [...iconOptions],
      mapping: Object.fromEntries(
        iconOptions.map((name) => [name, name === "" ? undefined : name]),
      ),
      description: "Foundation IconName, or leave empty",
    },
    children: { control: "text" },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=347-9225",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
