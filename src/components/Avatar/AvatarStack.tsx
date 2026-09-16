import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Avatar, type AvatarProps, type AvatarType } from "./Avatar";
import styles from "./AvatarStack.module.css";

/** Figma Avatar Stack `Density`. */
export type AvatarStackDensity = "Standard" | "Small";

/** Figma Avatar Stack `Amount`. */
export type AvatarStackAmount = "2" | "3" | "3+";

export interface AvatarStackItem
  extends Pick<AvatarProps, "type" | "src" | "alt" | "showBorder"> {}

export interface AvatarStackProps extends HTMLAttributes<HTMLDivElement> {
  /** Figma `Density` — Standard gap -8, Small gap -12. */
  density?: AvatarStackDensity;
  /** Figma `Amount` — how many avatars (and optional overflow indicator). */
  amount?: AvatarStackAmount;
  /** Avatar entries; sliced to visible count. Defaults to Figma sample types. */
  items?: AvatarStackItem[];
  /**
   * Figma Indicator `Number` text when Amount=3+.
   * Bound in design via component property `Number`.
   */
  number?: string;
  /** Override the overflow indicator node entirely. */
  overflow?: ReactNode;
}

const DEFAULT_ITEMS: AvatarStackItem[] = [
  { type: "Female_Asian_40px", alt: "Avatar 1" },
  { type: "Female_Caucasian_40px", alt: "Avatar 2" },
  { type: "Male_Asian_40px", alt: "Avatar 3" },
];

const VISIBLE: Record<AvatarStackAmount, number> = {
  "2": 2,
  "3": 3,
  "3+": 3,
};

export const AvatarStack = forwardRef<HTMLDivElement, AvatarStackProps>(
  function AvatarStack(
    {
      density = "Standard",
      amount = "2",
      items = DEFAULT_ITEMS,
      number = "+3",
      overflow,
      className = "",
      ...rest
    },
    ref,
  ) {
    const visible = items.slice(0, VISIBLE[amount]);
    const showOverflow = amount === "3+";

    const rootClass = [
      styles.root,
      density === "Standard" ? styles.densityStandard : styles.densitySmall,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={rootClass} role="group" {...rest}>
        {visible.map((item, index) => (
          <Avatar
            key={`${item.type ?? item.src ?? "avatar"}-${index}`}
            type={(item.type ?? "Female_Asian_40px") as AvatarType}
            src={item.src}
            alt={item.alt}
            size="Small - 24"
            showBorder={item.showBorder ?? true}
            className={styles.item}
          />
        ))}
        {showOverflow
          ? (overflow ?? (
              <span className={styles.indicator} aria-label={number}>
                {number}
              </span>
            ))
          : null}
      </div>
    );
  },
);

export default AvatarStack;
