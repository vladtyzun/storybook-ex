import type { Meta, StoryObj } from "@storybook/react-vite";
import { SlotItemList } from "./SlotItemList";
import { SlotBodyText } from "./SlotBodyText";
import { SlotBasicList } from "./SlotBasicList";

function SlotDemo({ variant }: { variant: string }) {
  if (variant === "bodyText") return <SlotBodyText />;
  if (variant === "basicList") return <SlotBasicList />;
  return <SlotItemList />;
}

// No autodocs here: docgen can't introspect an inline demo component,
// which is what broke the Slot Content "Docs" page.
const meta = {
  title: "Design System/Accordion/Slot Content",
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=8623-28684",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: { variant: "itemList" },
  argTypes: {
    variant: {
      control: "select",
      options: ["itemList", "bodyText", "basicList"],
    },
  },
  render: ({ variant }) => <SlotDemo variant={variant as string} />,
};
