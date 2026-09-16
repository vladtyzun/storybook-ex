import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionItem } from "./AccordionItem";
import { SlotBodyText } from "./slots/SlotBodyText";

// component points at the real AccordionItem (so autodocs can introspect it);
// render wraps it so the single story can open/close.
const meta = {
  title: "Design System/Accordion/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  args: {
    title: "Accordion header title",
    state: "active",
    showIcon: true,
    showInfo: false,
    showSubtext: false,
    subtext: "Insert subtext here",
    rightExtensionType: "icon",
  },
  argTypes: {
    state: {
      control: "select",
      options: ["active", "disabled", "skeleton"],
    },
    rightExtensionType: {
      name: "right extension",
      control: "select",
      options: ["icon", "button", "badge", "none"],
    },
    showIcon: { control: "boolean" },
    showInfo: { control: "boolean" },
    showSubtext: { control: "boolean" },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=8623-28347",
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <AccordionItem
        {...args}
        expanded={open}
        onToggle={() => setOpen((v) => !v)}
        isLast
      >
        {args.children ?? <SlotBodyText />}
      </AccordionItem>
    );
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
