import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { PageTitle } from "./PageTitle";

const PRODUCT_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" rx="12" fill="#E1FEFA"/><circle cx="24" cy="24" r="10" fill="#008F7A"/></svg>',
  );

const meta = {
  title: "Design System/Navigation bar/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  args: {
    title: "Page title",
    subtitle: "Description copy (optional)",
    variant: "default",
    showSubtext: true,
    // Product optional chrome — all off by default (Figma Product intent).
    showTitleBadge: false,
    showIndex: false,
    showProductImage: false,
    productImage: PRODUCT_IMAGE,
    showInfo: false,
    showProductTitle: false,
    showEye: false,
    showBadge: false,
    showIndexInfo: false,
    value: "$8,393",
    index: "+$0.95 (4.82%)",
    indexLabel: "Today",
    status: "Updated 1 min ago",
    onInfo: fn(),
    onEye: fn(),
    onIndexInfo: fn(),
  },
  argTypes: {
    variant: {
      name: "Type",
      control: "inline-radio",
      options: ["default", "product"],
      labels: { default: "Default", product: "Product" },
    },
    title: { name: "Title", control: "text" },
    subtitle: { control: "text" },
    subtext: { name: "Subtext", control: "text" },
    showSubtext: { name: "Show subtext", control: "boolean" },
    showTitleBadge: { name: "Show Title Badge", control: "boolean" },
    titleBadge: { control: "text" },
    showIndex: { name: "Show Index", control: "boolean" },
    index: { control: "text" },
    indexLabel: { control: "text" },
    showProductImage: { name: "Show Product image", control: "boolean" },
    productImage: { control: "text" },
    showInfo: { name: "Show info", control: "boolean" },
    showProductTitle: { name: "Show Product Title", control: "boolean" },
    productTitle: { control: "text" },
    showEye: { name: "Show eye", control: "boolean" },
    showBadge: { name: "Show Badge", control: "boolean" },
    badge: { control: "text" },
    showIndexInfo: { name: "Show Index info", control: "boolean" },
    value: { control: "text" },
    status: { control: "text" },
    inverted: { control: "boolean" },
    onInfo: { control: false },
    onEye: { control: false },
    onIndexInfo: { control: false },
  },
  parameters: {
    layout: "centered",
    previewWidth: "inset",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004270-11354",
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole("heading", { name: "Page title" })).toBeInTheDocument();
    await expect(args.onInfo).not.toHaveBeenCalled();
  },
};
