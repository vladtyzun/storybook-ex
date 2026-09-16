import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { expect, fn, userEvent } from "storybook/test";
import { Button } from "../Button/Button";
import { FullHeader, type FullHeaderType } from "./FullHeader";
import { IconBell, IconChat, IconHelp, IconInfo, IconSearch } from "./icons";

const PRODUCT_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" rx="12" fill="#E1FEFA"/><circle cx="24" cy="24" r="10" fill="#008F7A"/></svg>',
  );

const discoverTrail = (
  <>
    <Button type="transparent" size="medium" iconOnly leadingIcon={<IconInfo />} aria-label="Info" />
    <Button type="transparent" size="medium" iconOnly leadingIcon={<IconHelp />} aria-label="Help" />
    <Button type="transparent" size="medium" iconOnly leadingIcon={<IconChat />} aria-label="Chat" />
  </>
);

const utilityTrail = (
  <>
    <Button type="transparent" size="medium" iconOnly leadingIcon={<IconSearch />} aria-label="Search" />
    <Button type="transparent" size="medium" iconOnly leadingIcon={<IconBell />} aria-label="Alerts" />
  </>
);


const tabs = [
  { id: "1st", label: "1st" },
  { id: "2nd", label: "2nd" },
];

type FullHeaderArgs = ComponentProps<typeof FullHeader>;

function withTypeDemo(args: FullHeaderArgs): FullHeaderArgs {
  const type = (args.type ?? "default") as FullHeaderType;
  const fromDefaultPlayground = args.trailing === discoverTrail;
  const base = { ...args, productImage: args.productImage ?? PRODUCT_IMAGE };

  if (args.showTabs && !args.tabs) {
    base.tabs = tabs;
    base.activeTab = args.activeTab ?? "1st";
  }

  switch (type) {
    case "product":
      return {
        ...base,
        title: fromDefaultPlayground && args.title === "Discover" ? "Active Investing" : args.title,
        showPageTitle: fromDefaultPlayground ? true : args.showPageTitle,
        showLeftIcon: fromDefaultPlayground ? true : args.showLeftIcon,
        showNavbarTitle: fromDefaultPlayground ? false : args.showNavbarTitle,
        navbarVariant: fromDefaultPlayground
          ? args.navbarVariant === "main"
            ? "icon"
            : args.navbarVariant
          : args.navbarVariant,
        pageTitleVariant: args.pageTitleVariant ?? "product",
        value: args.value ?? "$8,393",
        index: args.index ?? "+$0.95 (4.82%)",
        indexLabel: args.indexLabel ?? "Today",
        status: args.status ?? "Updated 1 min ago",
        trailing: fromDefaultPlayground ? utilityTrail : args.trailing,
      };
    default:
      return base;
  }
}

const cat = (category: string) => ({ table: { category } });

/** Module-scope render — no hooks. */
function FullHeaderDemo(args: FullHeaderArgs) {
  return <FullHeader {...withTypeDemo(args)} />;
}

const meta = {
  title: "Design System/Navigation bar/FullHeader",
  component: FullHeader,
  tags: ["autodocs"],
  args: {
    title: "Discover",
    type: "default",
    showLeftIcon: false,
    showStatusBar: true,
    showProgress: false,
    showPageTitle: false,
    showTabs: false,
    showSubtext: true,
    subtext: "Description copy (optional)",
    showTitleBadge: false,
    showIndex: false,
    showProductImage: false,
    showInfo: false,
    showProductTitle: false,
    showEye: false,
    showBadge: false,
    showIndexInfo: false,
    showNavbarTitle: true,
    showSubtitle: false,
    showCentreIcon: false,
    showMenu: false,
    showIconButton2: true,
    showIconButton3: true,
    navbarVariant: "main",
    pageTitleVariant: "default",
    searchPlaceholder: "Type to search...",
    searchState: "default",
    onBack: fn(),
    onInfo: fn(),
    onEye: fn(),
    onTabChange: fn(),
    trailing: discoverTrail,
  },
  argTypes: {
    // —— Full Header 4.0 ——
    type: {
      name: "Type",
      control: "select",
      options: ["default", "product"],
      labels: { default: "Default", product: "Product" },
      description: "Figma Full Header `Type`",
      ...cat("Full Header"),
    },
    showPageTitle: {
      name: "Show Page Title",
      control: "boolean",
      description: "Figma `Show Page Title`",
      ...cat("Full Header"),
    },
    showProgress: {
      name: "Show Progress indicator",
      control: "boolean",
      description: "Figma `Show Progress indicator`",
      ...cat("Full Header"),
    },
    showTabs: {
      name: "Show Tabs",
      control: "boolean",
      description: "Figma `Show Tabs`",
      ...cat("Full Header"),
    },

    // —— Nested Navigation Bar 4.0 ——
    navbarVariant: {
      name: "Types",
      control: "select",
      options: ["title", "icon", "button", "link", "main", "user", "search", "media"],
      labels: {
        title: "Title only",
        icon: "Icon",
        button: "Button",
        link: "Link",
        main: "Main Page",
        user: "User",
        search: "Search",
        media: "Media",
      },
      description: "Nested Navigation Bar `Types`",
      ...cat("Navbar"),
    },
    showLeftIcon: {
      name: "Show left-icon",
      control: "boolean",
      description: "Nested Navbar `Show left-icon`",
      ...cat("Navbar"),
    },
    showMenu: {
      name: "Show Menu",
      control: "boolean",
      description: "Nested Navbar `Show Menu`",
      ...cat("Navbar"),
    },
    showNavbarTitle: {
      name: "Show Title",
      control: "boolean",
      description: "Nested Navbar `Show Title`",
      ...cat("Navbar"),
    },
    title: {
      name: "Title",
      control: "text",
      description: "Figma Navbar `Title` / Page Title `Title`",
      ...cat("Navbar"),
    },
    showCentreIcon: {
      name: "Centre icon",
      control: "boolean",
      description: "Nested Navbar ` Centre icon`",
      ...cat("Navbar"),
    },
    showSubtitle: {
      name: "Show Subtitle",
      control: "boolean",
      description: "Nested Navbar `Show Subtitle`",
      ...cat("Navbar"),
    },
    subtitle: {
      name: "Subtitle",
      control: "text",
      description: "Nested Navbar `Subtitle`",
      ...cat("Navbar"),
    },
    showIconButton2: {
      name: "Icon Button 2",
      control: "boolean",
      description: "Nested Navbar `Icon Button 2`",
      ...cat("Navbar"),
    },
    showIconButton3: {
      name: "Icon Button 3",
      control: "boolean",
      description: "Nested Navbar `Icon Button 3`",
      ...cat("Navbar"),
    },
    searchState: {
      name: "State",
      control: "select",
      options: ["default", "active", "typing", "labels"],
      labels: { default: "Default", active: "Active", typing: "Typing", labels: "Labels" },
      description: "Nested Search Field `State`",
      ...cat("Navbar"),
    },
    searchPlaceholder: {
      name: "Placeholder",
      control: "text",
      description: "Nested Search Field `Placeholder`",
      ...cat("Navbar"),
    },

    // —— Nested Page Title 4.0 ——
    pageTitleVariant: {
      name: "Type",
      control: "select",
      options: ["default", "product"],
      labels: { default: "Default", product: "Product" },
      description: "Nested Page Title `Type`",
      ...cat("Page Title"),
    },
    subtext: {
      name: "Subtext",
      control: "text",
      description: "Figma Page Title `Subtext`",
      ...cat("Page Title"),
    },
    showSubtext: {
      name: "Show subtext",
      control: "boolean",
      description: "Figma Page Title `Show subtext`",
      ...cat("Page Title"),
    },
    showTitleBadge: {
      name: "Show Title Badge",
      control: "boolean",
      description: "Figma Page Title `Show Title Badge`",
      ...cat("Page Title"),
    },
    showIndex: {
      name: "Show Index",
      control: "boolean",
      description: "Figma Page Title `Show Index`",
      ...cat("Page Title"),
    },
    showProductImage: {
      name: "Show Product image",
      control: "boolean",
      description: "Figma Page Title `Show Product image`",
      ...cat("Page Title"),
    },
    showInfo: {
      name: "Show info",
      control: "boolean",
      description: "Figma Page Title `Show info`",
      ...cat("Page Title"),
    },
    showProductTitle: {
      name: "Show Product Title",
      control: "boolean",
      description: "Figma Page Title `Show Product Title`",
      ...cat("Page Title"),
    },
    showEye: {
      name: "Show eye",
      control: "boolean",
      description: "Figma Page Title `Show eye`",
      ...cat("Page Title"),
    },
    showBadge: {
      name: "Show Badge",
      control: "boolean",
      description: "Figma Page Title `Show Badge`",
      ...cat("Page Title"),
    },
    showIndexInfo: {
      name: "Show Index info",
      control: "boolean",
      description: "Figma Page Title `Show Index info`",
      ...cat("Page Title"),
    },

    // —— Non-Figma / internal — hidden ——
    showStatusBar: { table: { disable: true } },
    scrolled: { table: { disable: true } },
    progress: { table: { disable: true } },
    progressType: { table: { disable: true } },
    activeTab: { table: { disable: true } },
    titleMode: { table: { disable: true } },
    hero: { control: false, table: { disable: true } },
    trailing: { control: false, table: { disable: true } },
    leading: { control: false, table: { disable: true } },
    tabs: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    centre: { control: false, table: { disable: true } },
    centreIcon: { control: false, table: { disable: true } },
    leftIcon: { control: false, table: { disable: true } },
    iconButton1: { control: false, table: { disable: true } },
    iconButton2: { control: false, table: { disable: true } },
    iconButton3: { control: false, table: { disable: true } },
    mediaButton1: { control: false, table: { disable: true } },
    mediaButton2: { control: false, table: { disable: true } },
    onBack: { control: false, table: { disable: true } },
    onMenu: { control: false, table: { disable: true } },
    onTabChange: { control: false, table: { disable: true } },
    onInfo: { control: false, table: { disable: true } },
    onEye: { control: false, table: { disable: true } },
    onIndexInfo: { control: false, table: { disable: true } },
    showBack: { table: { disable: true } },
    productImage: { table: { disable: true } },
    productImageAlt: { table: { disable: true } },
    productTitle: { table: { disable: true } },
    titleBadge: { table: { disable: true } },
    badge: { table: { disable: true } },
    value: { table: { disable: true } },
    index: { table: { disable: true } },
    indexLabel: { table: { disable: true } },
    status: { table: { disable: true } },
    avatarType: { table: { disable: true } },
    avatarSrc: { table: { disable: true } },
    avatarAlt: { table: { disable: true } },
    searchText: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    controls: { sort: "none" },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004270-11444",
    },
  },
  render: (args) => <FullHeaderDemo {...args} />,
} satisfies Meta<typeof FullHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    showLeftIcon: true,
    showPageTitle: true,
    showTabs: true,
    tabs,
    activeTab: "1st",
    navbarVariant: "title",
    trailing: null,
  },
  play: async ({ canvas, args }) => {
    await canvas.getByRole("button", { name: "Back" }).click();
    await expect(args.onBack).toHaveBeenCalled();
    await userEvent.click(canvas.getByRole("tab", { name: "2nd" }));
    await expect(args.onTabChange).toHaveBeenCalledWith("2nd");
  },
};
