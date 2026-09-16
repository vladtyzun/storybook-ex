import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { useState } from "react";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import { expect, fn, userEvent } from "storybook/test";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Icon } from "../../foundation/icons";
import { StackButton } from "../StackButton/StackButton";
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

const FULL_HEADER_KEYS = [
  "type",
  "showPageTitle",
  "showProgress",
  "showTabs",
  "showStatusBar",
  "scrolled",
  "progress",
  "progressType",
  "activeTab",
] as const;

const NAVBAR_KEYS = [
  "navbarVariant",
  "showLeftIcon",
  "showNavbarTitle",
  "title",
  "showSubtitle",
  "subtitle",
  "showCentreIcon",
  "showMenu",
  "showIconButton2",
  "showIconButton3",
  "avatarType",
  "avatarSrc",
  "searchPlaceholder",
] as const;

const PAGE_TITLE_KEYS = [
  "pageTitleVariant",
  "subtext",
  "showSubtext",
  "showTitleBadge",
  "value",
  "index",
  "indexLabel",
  "status",
  "showIndex",
  "showProductImage",
  "showInfo",
  "showProductTitle",
  "showEye",
  "showBadge",
  "showIndexInfo",
] as const;

type DocsTab = "Full Header" | "Navbar" | "Page Title";

function TabbedDocsControls() {
  const [tab, setTab] = useState<DocsTab>("Full Header");
  const include =
    tab === "Full Header"
      ? [...FULL_HEADER_KEYS]
      : tab === "Navbar"
        ? [...NAVBAR_KEYS]
        : [...PAGE_TITLE_KEYS];

  return (
    <div style={{ marginTop: 24 }}>
      <div
        role="tablist"
        aria-label="Control groups"
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 16,
          borderBottom: "1px solid var(--border-border-primary, #e5e5e5)",
          paddingBottom: 8,
        }}
      >
        {(["Full Header", "Navbar", "Page Title"] as DocsTab[]).map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={tab === name}
            onClick={() => setTab(name)}
            style={{
              appearance: "none",
              border: 0,
              background: tab === name ? "var(--background-main-background-tertiary, #f5f5f5)" : "transparent",
              color: "inherit",
              font: "inherit",
              fontWeight: 600,
              padding: "8px 12px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <Controls include={include} />
    </div>
  );
}

function FullHeaderDocsPage() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <TabbedDocsControls />
      <Stories />
    </>
  );
}

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
    case "mlone":
      return {
        ...base,
        title: fromDefaultPlayground && args.title === "Discover" ? "ML One" : args.title,
        showPageTitle: fromDefaultPlayground ? true : args.showPageTitle,
        showLeftIcon: fromDefaultPlayground ? true : args.showLeftIcon,
        showNavbarTitle: fromDefaultPlayground ? false : args.showNavbarTitle,
        showProductTitle: args.showProductTitle,
        showIndex: args.showIndex,
        navbarVariant: fromDefaultPlayground
          ? args.navbarVariant === "main"
            ? "icon"
            : args.navbarVariant
          : args.navbarVariant,
        pageTitleVariant: args.pageTitleVariant ?? "product",
        value: args.value ?? "$8,393",
        indexLabel: args.indexLabel ?? "Cash balance",
        trailing: fromDefaultPlayground ? null : args.trailing,
        children: args.children ?? (fromDefaultPlayground ? mloneChildren : undefined),
      };
    default:
      return base;
  }
}

const cat = (category: string) => ({ table: { category } });

const meta = {
  title: "Design System/Navigation bar/FullHeader",
  component: FullHeader,
  tags: ["autodocs"],
  args: {
    title: "Discover",
    type: "default",
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
    pageTitleVariant: "default",
    avatarType: "Female_Caucasian_40px",
    onBack: fn(),
    onInfo: fn(),
    onEye: fn(),
    onTabChange: fn(),
    trailing: discoverTrail,
  },
  argTypes: {
    // —— Full Header (Figma top level) ——
    type: {
      name: "Type",
      control: "select",
      options: ["default", "product", "mlone"],
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
    showStatusBar: {
      name: "Show Status Bar",
      control: "boolean",
      ...cat("Full Header"),
    },
    scrolled: { control: "boolean", ...cat("Full Header") },
    progress: {
      control: { type: "range", min: 0, max: 1, step: 0.05 },
      if: { arg: "showProgress", truthy: true },
      ...cat("Full Header"),
    },
    progressType: {
      name: "Progress type",
      control: "select",
      options: ["determinate", "indeterminate", "buffer", "steps"],
      if: { arg: "showProgress", truthy: true },
      ...cat("Full Header"),
    },
    activeTab: {
      control: "text",
      if: { arg: "showTabs", truthy: true },
      ...cat("Full Header"),
    },

    // —— Nested Navigation Bar ——
    navbarVariant: {
      name: "Types",
      control: "select",
      options: ["title", "icon", "button", "link", "main", "user", "search", "media"],
      description: "Nested Navigation Bar `Types`",
      ...cat("Navbar"),
    },
    showLeftIcon: {
      name: "Show left-icon",
      control: "boolean",
      description: "Nested Navbar `Show left-icon`",
      ...cat("Navbar"),
    },
    showNavbarTitle: {
      name: "Show Title",
      control: "boolean",
      description: "Nested Navbar `Show Title`",
      if: { arg: "navbarVariant", neq: "search" },
      ...cat("Navbar"),
    },
    title: {
      name: "Title",
      control: "text",
      description: "Shared title (Navbar + Page Title)",
      ...cat("Navbar"),
    },
    showSubtitle: {
      name: "Show Subtitle",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "title" },
      ...cat("Navbar"),
    },
    subtitle: {
      name: "Subtitle",
      control: "text",
      if: { arg: "navbarVariant", eq: "title" },
      ...cat("Navbar"),
    },
    showCentreIcon: {
      name: "Centre icon",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "title" },
      ...cat("Navbar"),
    },
    showMenu: {
      name: "Show Menu",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "main" },
      ...cat("Navbar"),
    },
    showIconButton2: {
      name: "Icon Button 2",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "icon" },
      ...cat("Navbar"),
    },
    showIconButton3: {
      name: "Icon Button 3",
      control: "boolean",
      if: { arg: "navbarVariant", eq: "icon" },
      ...cat("Navbar"),
    },
    avatarType: {
      name: "Avatar type",
      control: "select",
      options: [
        "Female_Caucasian_40px",
        "Female_Asian_40px",
        "Female_AfricanAmerican_40px",
        "Caucasian_40px",
        "Male_AfricanAmerican_40px",
        "Male_Asian_40px",
        "ML_40px",
      ],
      if: { arg: "navbarVariant", eq: "user" },
      ...cat("Navbar"),
    },
    avatarSrc: {
      name: "Avatar src",
      control: "text",
      if: { arg: "navbarVariant", eq: "user" },
      ...cat("Navbar"),
    },
    searchPlaceholder: {
      name: "Search placeholder",
      control: "text",
      if: { arg: "navbarVariant", eq: "search" },
      ...cat("Navbar"),
    },

    // —— Nested Page Title ——
    pageTitleVariant: {
      name: "Type",
      control: "select",
      options: ["default", "product"],
      description: "Nested Page Title `Type`",
      if: { arg: "showPageTitle", truthy: true },
      ...cat("Page Title"),
    },
    subtext: {
      name: "Subtext",
      control: "text",
      if: { arg: "pageTitleVariant", eq: "default" },
      ...cat("Page Title"),
    },
    showSubtext: {
      name: "Show subtext",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "default" },
      ...cat("Page Title"),
    },
    showTitleBadge: {
      name: "Show Title Badge",
      control: "boolean",
      if: { arg: "showPageTitle", truthy: true },
      ...cat("Page Title"),
    },
    value: {
      name: "Value",
      control: "text",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    index: {
      name: "Index",
      control: "text",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    indexLabel: {
      name: "Index label",
      control: "text",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    status: {
      name: "Status",
      control: "text",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showIndex: {
      name: "Show Index",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showProductImage: {
      name: "Show Product image",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showInfo: {
      name: "Show info",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showProductTitle: {
      name: "Show Product Title",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showEye: {
      name: "Show eye",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showBadge: {
      name: "Show Badge",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },
    showIndexInfo: {
      name: "Show Index info",
      control: "boolean",
      if: { arg: "pageTitleVariant", eq: "product" },
      ...cat("Page Title"),
    },

    // —— Hidden / non-Figma junk ——
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
    className: { table: { disable: true } },
    avatarAlt: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    controls: { sort: "none" },
    docs: { page: FullHeaderDocsPage },
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
