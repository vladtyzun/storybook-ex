import type { ReactNode } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../../foundation/icons";
import { IconChevronLeft, IconSearch } from "./icons";
import styles from "./Navbar.module.css";

/** Figma `Types` on Navigation Bar 4.0. */
export type NavbarVariant =
  | "title"
  | "icon"
  | "button"
  | "link"
  | "main"
  | "user"
  | "search"
  | "media";

export interface NavbarTab {
  id: string;
  label: string;
}

export interface NavbarProps {
  /** Figma `Types`. */
  variant?: NavbarVariant;
  /** Figma `Title`. */
  title?: string;
  /** Figma `Subtitle`. */
  subtitle?: string;
  titleAlign?: "start" | "center";
  /** Figma `Show Title`. */
  showTitle?: boolean;
  /** Figma `Show Subtitle`. */
  showSubtitle?: boolean;
  /**
   * Figma `Show left-icon`.
   * `showBack` is kept as an alias for existing call sites.
   */
  showLeftIcon?: boolean;
  showBack?: boolean;
  onBack?: () => void;
  /** Figma `Left icon` instance swap. */
  leftIcon?: ReactNode;
  /** Figma `Show Menu` (Main Page). */
  showMenu?: boolean;
  onMenu?: () => void;
  /** Figma ` Centre icon`. */
  showCentreIcon?: boolean;
  /** Centre icon / content when `showCentreIcon` is true. Also accepts legacy `centre`. */
  centreIcon?: ReactNode;
  centre?: ReactNode;
  /** Figma `Icon Button 2` visibility when using built-in trailing slots. */
  showIconButton2?: boolean;
  /** Figma `Icon Button 3` visibility when using built-in trailing slots. */
  showIconButton3?: boolean;
  iconButton1?: ReactNode;
  iconButton2?: ReactNode;
  iconButton3?: ReactNode;
  avatarSrc?: string;
  avatarAlt?: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  searchPlaceholder?: string;
  className?: string;
}

export function Navbar({
  variant,
  title,
  subtitle,
  titleAlign = "start",
  showTitle = true,
  showSubtitle = false,
  showLeftIcon,
  showBack = false,
  onBack,
  leftIcon,
  showMenu = false,
  onMenu,
  showCentreIcon = false,
  centreIcon,
  centre,
  showIconButton2 = true,
  showIconButton3 = true,
  iconButton1,
  iconButton2,
  iconButton3,
  avatarSrc,
  avatarAlt = "",
  leading,
  trailing,
  searchPlaceholder = "Type to search...",
  className = "",
}: NavbarProps) {
  const layout = variant ?? (titleAlign === "center" ? "title" : "main");
  const alignStart = layout === "main" || layout === "user";
  const leftVisible = showLeftIcon ?? showBack;
  const titleVisible = Boolean(title && showTitle && layout !== "search" && layout !== "media");
  const centreNode = showCentreIcon ? (centreIcon ?? centre) : centre;

  const back = leftVisible && (
    <Button
      type="transparent"
      size="small"
      iconOnly
      leadingIcon={leftIcon ?? <IconChevronLeft />}
      aria-label="Back"
      onClick={onBack}
    />
  );

  const menu = showMenu && (
    <Button
      type="transparent"
      size="small"
      iconOnly
      leadingIcon={<Icon name="burgerALT" />}
      aria-label="Menu"
      onClick={onMenu}
    />
  );

  const builtInTrailing = (() => {
    if (trailing !== undefined) return trailing;
    const items: ReactNode[] = [];
    if (showIconButton3 && iconButton3) items.push(iconButton3);
    if (showIconButton2 && iconButton2) items.push(iconButton2);
    if (iconButton1) items.push(iconButton1);
    return items.length ? <>{items}</> : null;
  })();

  const titleBlock = titleVisible ? (
    <span className={styles.cluster}>
      {centreNode}
      <span className={styles.titles}>
        <span className={styles.title}>{title}</span>
        {showSubtitle && subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
      </span>
    </span>
  ) : centreNode && !alignStart ? (
    <span className={styles.cluster}>{centreNode}</span>
  ) : null;

  return (
    <div className={[styles.bar, styles[layout], className].filter(Boolean).join(" ")}>
      {layout === "media" ? (
        <>
          {back}
          {builtInTrailing}
        </>
      ) : layout === "search" ? (
        <>
          <div className={styles.left}>{back}</div>
          <label className={styles.field}>
            <IconSearch />
            <span className={styles.searchText}>{searchPlaceholder}</span>
          </label>
        </>
      ) : (
        <>
          <div className={styles.left}>
            {back}
            {menu}
            {avatarSrc && <img className={styles.avatar} src={avatarSrc} alt={avatarAlt} />}
            {leading}
            {alignStart && titleBlock}
          </div>
          <div className={styles.center}>{!alignStart ? titleBlock : null}</div>
          <div className={styles.right}>{builtInTrailing}</div>
        </>
      )}
    </div>
  );
}
