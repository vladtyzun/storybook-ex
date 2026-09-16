import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
import { SlotItemList } from "./slots/SlotItemList";
import { SlotBodyText } from "./slots/SlotBodyText";
import { SlotBasicList } from "./slots/SlotBasicList";

const items = [
  {
    id: "what",
    title: "What is the MLDS design system?",
    content: (
      <SlotBodyText bodyText="A shared library of components, tokens, and patterns so design and code stay in sync across products." />
    ),
  },
  { id: "pricing", title: "Pricing breakdown", content: <SlotBasicList /> },
  { id: "accounts", title: "Linked accounts", content: <SlotItemList /> },
  {
    id: "help",
    title: "Need help getting started?",
    showInfo: true,
    content: <SlotBodyText />,
  },
];

const meta = {
  title: "Design System/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items,
    type: "boxed",
    state: "active",
    allowMultiple: false,
    showDivider: true,
    rightExtensionType: "icon",
    defaultOpenIds: ["what"],
  },
  argTypes: {
    type: { control: "inline-radio", options: ["boxed", "regular"] },
    state: {
      control: "select",
      options: ["active", "disabled", "skeleton"],
    },
    rightExtensionType: {
      name: "right extension",
      control: "select",
      options: ["icon", "button", "badge", "none"],
    },
    allowMultiple: { control: "boolean" },
    showDivider: { control: "boolean" },
    items: { control: false },
    defaultOpenIds: { control: false },
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=8623-28347",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
