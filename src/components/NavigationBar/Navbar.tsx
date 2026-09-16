import type { ReactNode } from "react";
import { Avatar, type AvatarType } from "../Avatar/Avatar";
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

/** Figma Search Field 4.0 `State`. */
export type NavbarSearchState = "default" | "active" | "typing" | "labels";

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
  /** Figma `Left icon` instance swap — composed as Button. */
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
  /** Media type: Figma nested `Button 1` / `Button 2` slots. */
  mediaButton1?: ReactNode;
  mediaButton2?: ReactNode;
  /** Photo URL for User variant Avatar (optional; presets used when omitted). */
  avatarSrc?: string;
  avatarAlt?: string;
  /** Figma Avatar `Type` when User variant has no `avatarSrc`. */
  avatarType?: AvatarType;
  leading?: ReactNode;
  trailing?: ReactNode;
  /** Figma Search Field `Placeholder`. */
  searchPlaceholder?: string;
  /** Figma Search Field `State`. */
  searchState?: NavbarSearchState;
  /** Figma Search Field `Search Text` (Typing / Labels). */
  searchText?: string;
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
  mediaButton1,
  mediaButton2,
  avatarSrc,
  avatarAlt = "",
  avatarType = "Female_Caucasian_40px",
  leading,
  trailing,
  searchPlaceholder = "Type to search...",
  searchState = "default",
  searchText = "Typing text",
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
    if (layout === "main") {
      if (showIconButton3 && iconButton3) items.push(iconButton3);
      if (showIconButton2 && iconButton2) items.push(iconButton2);
      if (iconButton1) items.push(iconButton1);
    } else if (layout === "icon") {
      if (showIconButton2 && iconButton2) items.push(iconButton2);
      if (iconButton1) items.push(iconButton1);
    } else {
      if (showIconButton3 && iconButton3) items.push(iconButton3);
      if (showIconButton2 && iconButton2) items.push(iconButton2);
      if (iconButton1) items.push(iconButton1);
    }
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
          {mediaButton1 ?? (
            <Button
              type="media"
              size="medium"
              iconOnly
              leadingIcon={leftIcon ?? <Icon name="arrowLeft" />}
              aria-label="Back"
              onClick={onBack}
            />
          )}
          {mediaButton2 ?? builtInTrailing}
        </>
      ) : layout === "search" ? (
        <>
          <div className={styles.left}>{back}</div>
          <label className={styles.field} data-state={searchState}>
            <IconSearch />
            {searchState === "default" || searchState === "active" ? (
              <span className={styles.searchText}>{searchPlaceholder}</span>
            ) : (
              <span className={styles.searchValue}>{searchText}</span>
            )}
            {(searchState === "active" || searchState === "typing" || searchState === "labels") && (
              <Button
                type="transparent"
                size="small"
                iconOnly
                leadingIcon={<Icon name="closeCircle" />}
                aria-label="Clear search"
                className={styles.searchClear}
              />
            )}
          </label>
        </>
      ) : (
        <>
          <div className={styles.left}>
            {layout !== "main" && back}
            {layout === "main" && menu}
            {layout === "user" && (
              <Avatar
                className={styles.avatar}
                size="Large - 40"
                type={avatarType}
                src={avatarSrc}
                alt={avatarAlt || "User"}
              />
            )}
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
