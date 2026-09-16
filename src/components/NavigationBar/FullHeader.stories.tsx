import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { expect, fn, userEvent } from "storybook/test";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Icon } from "../../foundation/icons";
import { StackButton } from "../StackButton/StackButton";
import { FullHeader, type FullHeaderType } from "./FullHeader";
import { IconBell, IconChat, IconHelp, IconInfo, IconSearch } from "./icons";

const AVATAR =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="32" fill="%23e1fefa"/><circle cx="32" cy="24" r="10" fill="%23111111"/><ellipse cx="32" cy="52" rx="16" ry="12" fill="%23111111"/></svg>',
  );

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

const mloneChildren = (
  <ButtonGroup layout="stack-buttons">
    <StackButton type="primary" icon={<Icon name="arrowUp" />}>
      Share
    </StackButton>
    <StackButton type="secondary" icon={<Icon name="arrowUp" />}>
      Label
    </StackButton>
  </ButtonGroup>
);

const tabs = [
  { id: "1st", label: "1st" },
  { id: "2nd", label: "2nd" },
];

type FullHeaderArgs = ComponentProps<typeof FullHeader>;

function withTypeDemo(args: FullHeaderArgs): FullHeaderArgs {
  const type = (args.type ?? "default") as FullHeaderType;
  const fromDefaultPlayground = args.trailing === discoverTrail;
  const base = { ...args };

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
        // Product optional chrome stays as Controls args (all default off).
        value: args.value ?? "$8,393",
        index: args.index ?? "+$0.95 (4.82%)",
        indexLabel: args.indexLabel ?? "Today",
        status: args.status ?? "Updated 1 min ago",
        trailing: fromDefaultPlayground ? utilityTrail : args.trailing,
      };
    case "mlone":
      return {
        ...base,
        title: fromDefaultPlayground && args.title === "Discover" ? "ML One" : args.title,
        showPageTitle: fromDefaultPlayground ? true : args.showPageTitle,
        showLeftIcon: fromDefaultPlayground ? true : args.showLeftIcon,
        showNavbarTitle: fromDefaultPlayground ? false : args.showNavbarTitle,
        // Keep product toggles off unless Controls enable them.
        showProductTitle: args.showProductTitle,
        showIndex: args.showIndex,
        navbarVariant: fromDefaultPlayground
          ? args.navbarVariant === "main"
            ? "icon"
            : args.navbarVariant
          : args.navbarVariant,
        value: args.value ?? "$8,393",
        indexLabel: args.indexLabel ?? "Cash balance",
        trailing: fromDefaultPlayground ? null : args.trailing,
        children: args.children ?? (fromDefaultPlayground ? mloneChildren : undefined),
      };
    default:
      return base;
  }
}

const meta = {
  title: "Design System/Navigation bar/FullHeader",
  component: FullHeader,
  tags: ["autodocs"],
  args: {
    title: "Discover",
    type: "default",
    titleMode: "navbar-start",
    scrolled: false,
    showLeftIcon: false,
    showStatusBar: true,
    showProgress: false,
    showPageTitle: false,
    showTabs: false,
    showSubtext: true,
    showTitleBadge: false,
    showIndex: false,
    showProductImage: false,
    showInfo: false,
    showProductTitle: false,
    showEye: false,
    showBadge: false,
    showIndexInfo: false,
    showNavbarTitle: true,
    navbarVariant: "main",
    onBack: fn(),
    onInfo: fn(),
    onEye: fn(),
    onTabChange: fn(),
    trailing: discoverTrail,
  },
  argTypes: {
    type: {
      name: "Type",
      control: "select",
      options: ["default", "product", "mlone"],
      description: "Figma: Default, Product, MLOne Membership",
    },
    title: { control: "text" },
    showStatusBar: { control: "boolean" },
    showPageTitle: { name: "Show Page Title", control: "boolean" },
    showProgress: { name: "Show Progress indicator", control: "boolean" },
    showTabs: { name: "Show Tabs", control: "boolean" },
    scrolled: { control: "boolean" },
    progress: {
      control: { type: "range", min: 0, max: 1, step: 0.05 },
      if: { arg: "showProgress", truthy: true },
    },
    progressType: {
      name: "Progress type",
      control: "select",
      options: ["determinate", "indeterminate", "buffer", "steps"],
      if: { arg: "showProgress", truthy: true },
    },
    pageTitleVariant: {
      name: "Page Title type",
      control: "inline-radio",
      options: ["default", "product"],
      if: { arg: "type", eq: "default" },
    },
    subtext: { control: "text", if: { arg: "type", eq: "default" } },
    showSubtext: {
      name: "Show subtext",
      control: "boolean",
      if: { arg: "type", eq: "default" },
    },
    showTitleBadge: {
      name: "Show Title Badge",
      control: "boolean",
      if: { arg: "showPageTitle", truthy: true },
    },
    value: { control: "text", if: { arg: "type", neq: "default" } },
    index: { control: "text", if: { arg: "type", eq: "product" } },
    indexLabel: { control: "text", if: { arg: "type", neq: "default" } },
    status: { control: "text", if: { arg: "type", neq: "default" } },
    showIndex: {
      name: "Show Index",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showProductImage: {
      name: "Show Product image",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showInfo: {
      name: "Show info",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showProductTitle: {
      name: "Show Product Title",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showEye: {
      name: "Show eye",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showBadge: {
      name: "Show Badge",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    showIndexInfo: {
      name: "Show Index info",
      control: "boolean",
      if: { arg: "type", neq: "default" },
    },
    navbarVariant: {
      name: "Navbar Types",
      control: "select",
      options: ["title", "icon", "button", "link", "main", "user", "search", "media"],
    },
    showNavbarTitle: {
      name: "Navbar Show Title",
      control: "boolean",
      if: { arg: "navbarVariant", neq: "search" },
    },
    showLeftIcon: { name: "Show left-icon", control: "boolean" },
    showMenu: {
      name: "Show Menu",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "main" },
    },
    showSubtitle: {
      name: "Show Subtitle",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "title" },
    },
    showCentreIcon: {
      name: "Centre icon",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "title" },
    },
    showIconButton2: {
      name: "Icon Button 2",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "icon" },
    },
    showIconButton3: {
      name: "Icon Button 3",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "icon" },
    },
    avatarSrc: {
      control: "text",
      if: { arg: "navbarVariant", eq: "user" },
    },
    titleMode: {
      control: "select",
      options: ["navbar-start", "navbar-center", "page", "hero"],
    },
    activeTab: { control: "text", if: { arg: "showTabs", truthy: true } },
    trailing: { control: false, table: { disable: true } },
    leading: { control: false, table: { disable: true } },
    tabs: { control: false, table: { disable: true } },
    hero: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    centre: { control: false, table: { disable: true } },
    centreIcon: { control: false, table: { disable: true } },
    leftIcon: { control: false, table: { disable: true } },
    iconButton1: { control: false, table: { disable: true } },
    iconButton2: { control: false, table: { disable: true } },
    iconButton3: { control: false, table: { disable: true } },
    onBack: { control: false, table: { disable: true } },
    onMenu: { control: false, table: { disable: true } },
    onTabChange: { control: false, table: { disable: true } },
    onInfo: { control: false, table: { disable: true } },
    onEye: { control: false, table: { disable: true } },
    onIndexInfo: { control: false, table: { disable: true } },
    showBack: { table: { disable: true } },
    subtitle: { table: { disable: true } },
    productImage: { table: { disable: true } },
    productImageAlt: { table: { disable: true } },
    productTitle: { table: { disable: true } },
    titleBadge: { table: { disable: true } },
    badge: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004270-11444",
    },
  },
  render: (args) => <FullHeader {...withTypeDemo(args)} />,
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
