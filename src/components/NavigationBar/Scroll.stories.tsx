import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fireEvent, fn, waitFor } from "storybook/test";
import { Button } from "../Button/Button";
import { Device, DeviceBody, deviceStyles } from "./Device";
import { FullHeader, type FullHeaderProps } from "./FullHeader";
import { IconBell, IconChat, IconHelp, IconInfo, IconSearch } from "./icons";

const discoverTrail = (
  <>
    <Button type="transparent" size="small" iconOnly leadingIcon={<IconInfo />} aria-label="Info" />
    <Button type="transparent" size="small" iconOnly leadingIcon={<IconHelp />} aria-label="Help" />
    <Button type="transparent" size="small" iconOnly leadingIcon={<IconChat />} aria-label="Chat" />
  </>
);

const utilityTrail = (
  <>
    <Button type="transparent" size="small" iconOnly leadingIcon={<IconSearch />} aria-label="Search" />
    <Button type="transparent" size="small" iconOnly leadingIcon={<IconBell />} aria-label="Alerts" />
  </>
);

function ScrollDemo({ header }: { header: Omit<FullHeaderProps, "scrolled"> }) {
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState(header.activeTab);
  return (
    <Device>
      <div
        className={deviceStyles.scroll}
        data-testid="nav-scroll"
        onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 8)}
      >
        <FullHeader
          {...header}
          scrolled={scrolled}
          activeTab={tab ?? header.activeTab}
          onTabChange={(id) => {
            header.onTabChange?.(id);
            setTab(id);
          }}
        />
        <DeviceBody />
      </div>
    </Device>
  );
}

const meta = {
  title: "Design System/Navigation bar/Scroll",
  component: FullHeader,
  tags: ["autodocs"],
  args: {
    title: "Discover",
    titleMode: "navbar-start",
    trailing: discoverTrail,
    onTabChange: fn(),
    onBack: fn(),
  },
  argTypes: {
    titleMode: {
      control: "select",
      options: ["navbar-start", "navbar-center", "page", "hero"],
    },
    type: {
      control: "select",
      options: ["default", "product", "mlone"],
    },
    showProgress: { control: "boolean" },
    showTabs: { control: "boolean" },
    trailing: { control: false },
    tabs: { control: false },
    hero: { control: false },
    onBack: { control: false },
    onTabChange: { control: false },
  },
  parameters: {
    layout: "centered",
    previewWidth: "full",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40000019-14725",
    },
  },
} satisfies Meta<typeof FullHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Kept: device scroll interaction cannot be shown in static Docs alone. */
export const Playground: Story = {
  render: (args) => (
    <ScrollDemo
      header={{
        ...args,
        trailing: args.titleMode === "page" || args.type === "product" ? utilityTrail : discoverTrail,
      }}
    />
  ),
  play: async ({ canvas }) => {
    const region = canvas.getByTestId("nav-scroll");
    await expect(canvas.getByRole("banner")).toHaveAttribute("data-scrolled", "false");
    region.scrollTo(0, 240);
    fireEvent.scroll(region);
    await waitFor(() =>
      expect(region.querySelector("header")).toHaveAttribute("data-scrolled", "true"),
    );
  },
};
