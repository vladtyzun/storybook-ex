import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { fn, expect } from "storybook/test";
import { Button } from "../Button/Button";
import { Icon } from "../../foundation/icons";
import { IconBell, IconChat, IconHelp, IconInfo, IconSearch } from "./icons";
import { Navbar, type NavbarVariant } from "./Navbar";

const PRODUCT =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" rx="8" fill="#E1FEFA"/><circle cx="16" cy="16" r="7" fill="#008F7A"/></svg>',
  );

type NavbarArgs = ComponentProps<typeof Navbar>;

const searchBtn = (
  <Button type="transparent" size="small" iconOnly leadingIcon={<IconSearch />} aria-label="Search" />
);
const bellBtn = (
  <Button type="transparent" size="small" iconOnly leadingIcon={<IconBell />} aria-label="Alerts" />
);
const infoBtn = (
  <Button type="transparent" size="small" iconOnly leadingIcon={<IconInfo />} aria-label="Info" />
);
const helpBtn = (
  <Button type="transparent" size="small" iconOnly leadingIcon={<IconHelp />} aria-label="Help" />
);
const chatBtn = (
  <Button type="transparent" size="small" iconOnly leadingIcon={<IconChat />} aria-label="Chat" />
);
const actionSecondary = (
  <Button type="secondary" size="small">
    Action
  </Button>
);
const actionLink = (
  <Button type="transparent" size="small">
    Action
  </Button>
);
const mediaBtn1 = (
  <Button type="media" size="medium" iconOnly leadingIcon={<Icon name="arrowLeft" />} aria-label="Back" />
);
const mediaBtn2 = (
  <Button type="media" size="medium" iconOnly leadingIcon={<IconBell />} aria-label="Sound" />
);

/** Demo slots so Docs Types changes look like each Figma variant. */
function withVariantDemo(args: NavbarArgs): NavbarArgs {
  const variant = (args.variant ?? "title") as NavbarVariant;
  const centreIcon =
    args.centreIcon ??
    (args.showCentreIcon ? <img src={PRODUCT} alt="" width={32} height={32} /> : undefined);

  switch (variant) {
    case "icon":
      return {
        ...args,
        trailing: undefined,
        iconButton2: args.iconButton2 ?? searchBtn,
        iconButton1: args.iconButton1 ?? bellBtn,
        centreIcon,
      };
    case "button":
      return { ...args, trailing: args.trailing ?? actionSecondary, centreIcon };
    case "link":
      return { ...args, trailing: args.trailing ?? actionLink, centreIcon };
    case "user":
      return {
        ...args,
        trailing: args.trailing ?? actionSecondary,
        centreIcon,
      };
    case "search":
      return { ...args, showTitle: false, trailing: null, centreIcon };
    case "main":
      return {
        ...args,
        showLeftIcon: false,
        trailing: undefined,
        iconButton3: args.iconButton3 ?? infoBtn,
        iconButton2: args.iconButton2 ?? helpBtn,
        iconButton1: args.iconButton1 ?? chatBtn,
        centreIcon,
      };
    case "media":
      return {
        ...args,
        showTitle: false,
        trailing: undefined,
        mediaButton1: args.mediaButton1 ?? mediaBtn1,
        mediaButton2: args.mediaButton2 ?? mediaBtn2,
        centreIcon,
      };
    case "title":
    default:
      return { ...args, trailing: args.trailing ?? null, centreIcon };
  }
}

/** Module-scope render — no hooks. */
function NavbarDemo(args: NavbarArgs) {
  return <Navbar {...withVariantDemo(args)} />;
}

const meta = {
  title: "Design System/Navigation bar/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  args: {
    variant: "title",
    title: "Page title",
    subtitle: "Page subtitle",
    showTitle: true,
    showSubtitle: false,
    showLeftIcon: true,
    showMenu: false,
    showCentreIcon: false,
    showIconButton2: true,
    showIconButton3: true,
    searchPlaceholder: "Type to search...",
    searchState: "default",
    onBack: fn(),
    onMenu: fn(),
  },
  argTypes: {
    variant: {
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
      description: "Figma Navigation Bar `Types`",
    },
    showLeftIcon: { name: "Show left-icon", control: "boolean" },
    showMenu: { name: "Show Menu", control: "boolean" },
    showTitle: { name: "Show Title", control: "boolean" },
    title: { name: "Title", control: "text" },
    showCentreIcon: { name: "Centre icon", control: "boolean" },
    showSubtitle: { name: "Show Subtitle", control: "boolean" },
    subtitle: { name: "Subtitle", control: "text" },
    showIconButton2: { name: "Icon Button 2", control: "boolean" },
    showIconButton3: { name: "Icon Button 3", control: "boolean" },
    searchState: {
      name: "State",
      control: "select",
      options: ["default", "active", "typing", "labels"],
      labels: { default: "Default", active: "Active", typing: "Typing", labels: "Labels" },
      description: "Figma Search Field `State`",
    },
    searchPlaceholder: {
      name: "Placeholder",
      control: "text",
      description: "Figma Search Field `Placeholder`",
    },
    leftIcon: { control: false, table: { disable: true } },
    centreIcon: { control: false, table: { disable: true } },
    centre: { control: false, table: { disable: true } },
    leading: { control: false, table: { disable: true } },
    trailing: { control: false, table: { disable: true } },
    iconButton1: { control: false, table: { disable: true } },
    iconButton2: { control: false, table: { disable: true } },
    iconButton3: { control: false, table: { disable: true } },
    mediaButton1: { control: false, table: { disable: true } },
    mediaButton2: { control: false, table: { disable: true } },
    onBack: { control: false, table: { disable: true } },
    onMenu: { control: false, table: { disable: true } },
    showBack: { table: { disable: true } },
    titleAlign: { table: { disable: true } },
    className: { table: { disable: true } },
    avatarAlt: { table: { disable: true } },
    avatarType: { table: { disable: true } },
    avatarSrc: { table: { disable: true } },
    searchText: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    controls: { sort: "none" },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=3639-96495",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ background: "var(--background-main-background-primary)" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <NavbarDemo {...args} />,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas, args }) => {
    await canvas.getByRole("button", { name: "Back" }).click();
    await expect(args.onBack).toHaveBeenCalled();
  },
};
