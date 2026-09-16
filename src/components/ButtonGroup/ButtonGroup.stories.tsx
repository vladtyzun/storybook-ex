import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button/Button";
import { StackButton } from "../StackButton/StackButton";
import { Icon } from "../../foundation/icons";

const meta = {
  title: "Design System/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  args: {
    layout: "side-by-side",
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["side-by-side", "stacked", "stack-buttons"],
    },
    children: { control: false },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=2486-118825",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) =>
    args.layout === "stack-buttons" ? (
      <ButtonGroup {...args}>
        <StackButton icon={<Icon name="arrowUp" />}>Label</StackButton>
        <StackButton icon={<Icon name="arrowUp" />}>Label</StackButton>
        <StackButton icon={<Icon name="arrowUp" />}>Label</StackButton>
        <StackButton icon={<Icon name="arrowUp" />}>Label</StackButton>
      </ButtonGroup>
    ) : (
      <ButtonGroup {...args}>
        <Button type="primary-alt">Primary</Button>
        <Button type="secondary">Secondary</Button>
        {args.layout === "side-by-side" ? (
          <Button
            type="secondary"
            iconOnly
            leadingIcon="burger"
            aria-label="More actions"
          />
        ) : null}
      </ButtonGroup>
    ),
};
