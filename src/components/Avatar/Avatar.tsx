import { forwardRef, type HTMLAttributes } from "react";
import { Logomark } from "./Logomark";
import { AVATAR_PRESET_SRC } from "./presets";
import styles from "./Avatar.module.css";

/** Figma Avatar `Type` variant values. */
export type AvatarType =
  | "Female_Asian_40px"
  | "Caucasian_40px"
  | "Female_AfricanAmerican_40px"
  | "Female_Caucasian_40px"
  | "ML_40px"
  | "Male_AfricanAmerican_40px"
  | "Male_Asian_40px";

/** Figma Avatar `Size` variant values. */
export type AvatarSize =
  | "Large - 40"
  | "Standard - 32"
  | "Small - 24"
  | "xSmall - 20";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma `Type`. Ignored when `src` is set (except `ML_40px` always renders Logomark). */
  type?: AvatarType;
  /** Figma `Size`. */
  size?: AvatarSize;
  /** Figma `Show border` — white outside ring for stacking. */
  showBorder?: boolean;
  /** Custom image URL; overrides Type preset photos. */
  src?: string;
  /** Accessible name for photo avatars. */
  alt?: string;
}

const SIZE_CLASS: Record<AvatarSize, string> = {
  "Large - 40": styles.sizeLarge,
  "Standard - 32": styles.sizeStandard,
  "Small - 24": styles.sizeSmall,
  "xSmall - 20": styles.sizeXSmall,
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    type = "Female_Caucasian_40px",
    size = "Large - 40",
    showBorder = false,
    src,
    alt = "",
    className = "",
    ...rest
  },
  ref,
) {
  const isMl = type === "ML_40px";
  const imageSrc =
    src ??
    (!isMl
      ? AVATAR_PRESET_SRC[type as keyof typeof AVATAR_PRESET_SRC]
      : undefined);

  const rootClass = [
    styles.root,
    SIZE_CLASS[size],
    isMl && styles.ml,
    showBorder && styles.showBorder,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      ref={ref}
      className={rootClass}
      role={isMl ? "img" : undefined}
      aria-label={isMl ? alt || "MoneyLion" : undefined}
      {...rest}
    >
      {showBorder ? <span className={styles.border} aria-hidden="true" /> : null}
      {isMl ? (
        <span className={styles.logomark}>
          <Logomark className={styles.logomarkSvg} />
        </span>
      ) : (
        <img className={styles.image} src={imageSrc} alt={alt} />
      )}
    </span>
  );
});

export default Avatar;
