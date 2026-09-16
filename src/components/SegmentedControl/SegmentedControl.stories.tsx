import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState, type ReactNode } from "react";
import {
  Controls,
  Description,
  Primary,
  Subtitle,
  Title,
} from "@storybook/addon-docs/blocks";
import { useArgs, useEffect as useStorybookEffect } from "storybook/preview-api";
import { expect, fn, userEvent } from "storybook/test";
import {
  SegmentedControl,
  type SegmentItem,
  type SegmentState,
} from "./SegmentedControl";

const FIGMA_STATES = [
  "Default",
  "Active / Pressed",
  "Hover",
  "Disabled",
] as const;

type FigmaState = (typeof FIGMA_STATES)[number];

const FIGMA_TO_STATE: Record<FigmaState, SegmentState> = {
  Default: "default",
  "Active / Pressed": "active",
  Hover: "hover",
  Disabled: "disabled",
};

const SLOT = ["1st", "2nd", "3rd", "4th", "5th"] as const;
type Slot = (typeof SLOT)[number];

type SegArgs = {
  segmentsNo: 2 | 3 | 4 | 5;
  /** Derived visibility flags for Controls `if` (Storybook has no gte). */
  _show3: boolean;
  _show4: boolean;
  _show5: boolean;
  s1State: FigmaState;
  s1Label: string;
  s1LeadingIcon: boolean;
  s1AppendIcon: boolean;
  s2State: FigmaState;
  s2Label: string;
  s2LeadingIcon: boolean;
  s2AppendIcon: boolean;
  s3State: FigmaState;
  s3Label: string;
  s3LeadingIcon: boolean;
  s3AppendIcon: boolean;
  s4State: FigmaState;
  s4Label: string;
  s4LeadingIcon: boolean;
  s4AppendIcon: boolean;
  s5State: FigmaState;
  s5Label: string;
  s5LeadingIcon: boolean;
  s5AppendIcon: boolean;
  onChange: (id: string) => void;
};

const cat = (category: string) => ({ table: { category } });

function segmentArgTypes(
  index: 1 | 2 | 3 | 4 | 5,
  category: Slot,
  visibleIf?: { if: { arg: string; truthy: boolean } },
) {
  const prefix = `s${index}` as const;
  return {
    [`${prefix}State`]: {
      name: "State",
      control: "select" as const,
      options: [...FIGMA_STATES],
      description: "Figma `State`",
      ...cat(category),
      ...visibleIf,
    },
    [`${prefix}Label`]: {
      name: "Label",
      control: "text" as const,
      description: "Figma `Label`",
      ...cat(category),
      ...visibleIf,
    },
    [`${prefix}LeadingIcon`]: {
      name: "Leading Icon",
      control: "boolean" as const,
      description: "Figma `Leading Icon`",
      ...cat(category),
      ...visibleIf,
    },
    [`${prefix}AppendIcon`]: {
      name: "Append icon",
      control: "boolean" as const,
      description: "Figma `Append icon`",
      ...cat(category),
      ...visibleIf,
    },
  };
}

function readSlot(args: SegArgs, index: 1 | 2 | 3 | 4 | 5, id: Slot): SegmentItem {
  return {
    id,
    label: args[`s${index}Label`],
    leadingIcon: args[`s${index}LeadingIcon`],
    appendIcon: args[`s${index}AppendIcon`],
    state: FIGMA_TO_STATE[args[`s${index}State`]],
  };
}

function buildFromArgs(args: SegArgs): { segments: SegmentItem[]; value: string } {
  const all: SegmentItem[] = [
    readSlot(args, 1, "1st"),
    readSlot(args, 2, "2nd"),
    readSlot(args, 3, "3rd"),
    readSlot(args, 4, "4th"),
    readSlot(args, 5, "5th"),
  ].slice(0, args.segmentsNo);

  const active = all.find((s) => s.state === "active") ?? all[0];
  return { segments: all, value: active?.id ?? "1st" };
}

/**
 * Sync hidden `_showN` flags from `segmentsNo` so Controls `if` can gate groups.
 * Storybook hooks only — allowed in decorators (see storybook-story-hooks.mdc).
 */
function withSegmentGroupVisibility(Story: () => ReactNode) {
  const [args, updateArgs] = useArgs<SegArgs>();
  const n = Number(args.segmentsNo ?? 2);

  useStorybookEffect(() => {
    const next = {
      _show3: n >= 3,
      _show4: n >= 4,
      _show5: n >= 5,
    };
    if (
      args._show3 !== next._show3 ||
      args._show4 !== next._show4 ||
      args._show5 !== next._show5
    ) {
      updateArgs(next);
    }
  }, [n, args._show3, args._show4, args._show5, updateArgs]);

  return <Story />;
}

/**
 * Wrapper outside `render` so React hooks are legal.
 * Storybook Controls drive props; local state only for click selection.
 */
function SegmentedControlDemo(args: SegArgs) {
  const built = buildFromArgs(args);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const value = clickedId ?? built.value;

  // Reset click override when Figma Controls change — not when _show* flags sync.
  useEffect(() => {
    setClickedId(null);
  }, [
    args.segmentsNo,
    args.s1State,
    args.s2State,
    args.s3State,
    args.s4State,
    args.s5State,
    args.s1Label,
    args.s2Label,
    args.s3Label,
    args.s4Label,
    args.s5Label,
    args.s1LeadingIcon,
    args.s2LeadingIcon,
    args.s3LeadingIcon,
    args.s4LeadingIcon,
    args.s5LeadingIcon,
    args.s1AppendIcon,
    args.s2AppendIcon,
    args.s3AppendIcon,
    args.s4AppendIcon,
    args.s5AppendIcon,
  ]);

  const segments = built.segments.map((seg) => {
    if (seg.state === "disabled" || seg.state === "hover") return seg;
    return {
      ...seg,
      state: (seg.id === value ? "active" : "default") as SegmentState,
    };
  });

  return (
    <div style={{ width: 343 }}>
      <SegmentedControl
        segments={segments}
        value={value}
        onChange={(id) => {
          args.onChange?.(id);
          setClickedId(id);
        }}
      />
    </div>
  );
}

const meta = {
  title: "Design System/Segmented Control",
  component: SegmentedControl,
  tags: ["autodocs"],
  decorators: [withSegmentGroupVisibility],
  args: {
    segmentsNo: 2,
    _show3: false,
    _show4: false,
    _show5: false,
    s1State: "Active / Pressed",
    s1Label: "1st",
    s1LeadingIcon: false,
    s1AppendIcon: false,
    s2State: "Default",
    s2Label: "2nd",
    s2LeadingIcon: false,
    s2AppendIcon: false,
    s3State: "Default",
    s3Label: "3rd",
    s3LeadingIcon: false,
    s3AppendIcon: false,
    s4State: "Default",
    s4Label: "4th",
    s4LeadingIcon: false,
    s4AppendIcon: false,
    s5State: "Default",
    s5Label: "5th",
    s5LeadingIcon: false,
    s5AppendIcon: false,
    onChange: fn(),
  } satisfies SegArgs,
  argTypes: {
    segmentsNo: {
      name: "Segments no.",
      control: "select",
      options: [2, 3, 4, 5],
      description: "Figma `Segments no.` (2–5)",
      ...cat("Segmented Control"),
    },
    ...segmentArgTypes(1, "1st"),
    ...segmentArgTypes(2, "2nd"),
    ...segmentArgTypes(3, "3rd", { if: { arg: "_show3", truthy: true } }),
    ...segmentArgTypes(4, "4th", { if: { arg: "_show4", truthy: true } }),
    ...segmentArgTypes(5, "5th", { if: { arg: "_show5", truthy: true } }),
    _show3: { table: { disable: true }, control: false },
    _show4: { table: { disable: true }, control: false },
    _show5: { table: { disable: true }, control: false },
    segments: { table: { disable: true } },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    previewWidth: "inset",
    controls: { sort: "none" },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0?node-id=40004290-147968",
    },
  },
  render: (args) => <SegmentedControlDemo {...(args as unknown as SegArgs)} />,
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole("tab", { name: "2nd" }));
    await expect(args.onChange).toHaveBeenCalledWith("2nd");
  },
};
