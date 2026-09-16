import type { ReactNode } from "react";
import styles from "./SegmentedControl.module.css";

export interface SegmentItem {
  id: string;
  label: string;
  leadingIcon?: ReactNode;
}

export interface SegmentedControlProps {
  segments: SegmentItem[];
  value?: string;
  onChange?: (id: string) => void;
  className?: string;
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
        return (
          <button
            key={segment.id}
            type="button"
            role="tab"
            aria-selected={selected}
            className={[styles.segment, selected && styles.active].filter(Boolean).join(" ")}
            onClick={() => onChange?.(segment.id)}
          >
            {segment.leadingIcon}
            <span className={styles.label}>{segment.label}</span>
          </button>
        );
      })}
    </div>
  );
}
