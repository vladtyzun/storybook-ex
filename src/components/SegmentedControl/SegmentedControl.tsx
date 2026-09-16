import styles from "./SegmentedControl.module.css";

/** Figma `State` on Segment Control 3.0/Segments 4.0. */
export type SegmentState = "default" | "active" | "hover" | "disabled";

export interface SegmentItem {
  id: string;
  /** Figma `Label`. */
  label: string;
  /** Figma `Leading Icon` — shows bank glyph when true. */
  leadingIcon?: boolean;
  /** Figma `Append icon` — shows bank glyph when true. */
  appendIcon?: boolean;
  /**
   * Figma `State` (forced visual for docs/demos).
   * Live interaction uses selection + `:hover` / `:active` when omitted.
   * `active` ↔ Active / Pressed; `disabled` disables the segment.
   */
  state?: SegmentState;
}

export interface SegmentedControlProps {
  /**
   * Segment items. Length is Figma `Segments no.` (2–5).
   */
  segments: SegmentItem[];
  /** Selected segment `id` (Active / Pressed). */
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
}

/** Figma nested `bank` icon (20×20 in segment). */
function BankIcon() {
  return (
    <svg
      className={styles.icon}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 2.5 2.5 6.25v1.25h15V6.25L10 2.5Zm-5.625 6.25v5H3.125v1.25h13.75v-1.25h-1.25v-5h-1.25v5H12.5v-5h-1.25v5H9.375v-5H8.125v5H6.25v-5H4.375Zm-1.25 7.5v1.25h13.75v-1.25H3.125Z"
        fill="currentColor"
      />
    </svg>
  );
}

function resolveState(
  segment: SegmentItem,
  selected: boolean,
): SegmentState {
  if (segment.state) return segment.state;
  if (selected) return "active";
  return "default";
}

export function SegmentedControl({
  segments,
  value,
  onChange,
  className = "",
}: SegmentedControlProps) {
  const active = value ?? segments[0]?.id;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      role="tablist"
    >
      {segments.map((segment) => {
        const selected = segment.id === active;
        const state = resolveState(segment, selected);
        const disabled = state === "disabled";
        const classNameSeg = [
          styles.segment,
          state === "active" && styles.active,
          state === "hover" && styles.hover,
          state === "disabled" && styles.disabled,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={segment.id}
            type="button"
            role="tab"
            aria-selected={selected && !disabled}
            disabled={disabled}
            data-state={state}
            className={classNameSeg}
            onClick={() => onChange?.(segment.id)}
          >
            {segment.leadingIcon ? <BankIcon /> : null}
            <span className={styles.label}>{segment.label}</span>
            {segment.appendIcon ? <BankIcon /> : null}
          </button>
        );
      })}
    </div>
  );
}
