import type { HTMLAttributes } from "react";
import styles from "./Indicator.module.css";

export type IndicatorVariation = "dot" | "number";

/** Figma Indicator `Color` variants. */
export type IndicatorColor = "standard" | "teal" | "neutral";

export interface IndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma `Variation`. */
  variation?: IndicatorVariation;
  /** Figma `Color`. */
  color?: IndicatorColor;
  /** Figma `Number` — used when `variation="number"`. */
  number?: string;
  /** Figma `Show border` — white outside ring. */
  showBorder?: boolean;
}

const COLOR_CLASS: Record<IndicatorColor, string> = {
  standard: styles.colorStandard,
  teal: styles.colorTeal,
  neutral: styles.colorNeutral,
};

export function Indicator({
  variation = "dot",
  color = "standard",
  number = "+24",
  showBorder = false,
  className = "",
  ...rest
}: IndicatorProps) {
  if (variation === "number") {
    return (
      <span
        className={[
          styles.number,
          COLOR_CLASS[color],
          showBorder && styles.withBorder,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {number}
      </span>
    );
  }

  return (
    <span
      className={[
        styles.dot,
        COLOR_CLASS[color],
        showBorder && styles.withBorder,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
    />
  );
}
