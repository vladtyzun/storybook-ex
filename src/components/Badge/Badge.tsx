import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeSize = "small" | "medium" | "large";

/** Figma Badge `Color` variants. */
export type BadgeColor =
  | "success"
  | "neutral"
  | "error"
  | "warning"
  | "standard-alt";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma `Size`. */
  size?: BadgeSize;
  /** Figma `Color`. `success` = Standard / Success. */
  color?: BadgeColor;
  /** Figma `Label`. */
  children?: ReactNode;
  /** Figma `Show Left Icon`. */
  showLeftIcon?: boolean;
  /** Custom left icon; defaults to info glyph when `showLeftIcon`. */
  leadingIcon?: ReactNode;
}

function InfoGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={styles.icon}
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9.25v4.5M10 6.75h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SIZE_CLASS: Record<BadgeSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

const COLOR_CLASS: Record<BadgeColor, string> = {
  success: styles.colorSuccess,
  neutral: styles.colorNeutral,
  error: styles.colorError,
  warning: styles.colorWarning,
  "standard-alt": styles.colorStandardAlt,
};

export function Badge({
  size = "small",
  color = "success",
  children = "Label",
  showLeftIcon = false,
  leadingIcon,
  className = "",
  ...rest
}: BadgeProps) {
  const iconSize = size === "small" ? 16 : 20;
  const icon = showLeftIcon
    ? (leadingIcon ?? <InfoGlyph size={iconSize} />)
    : null;

  return (
    <span
      className={[styles.root, SIZE_CLASS[size], COLOR_CLASS[color], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {icon}
      <span className={styles.label}>{children}</span>
    </span>
  );
}
