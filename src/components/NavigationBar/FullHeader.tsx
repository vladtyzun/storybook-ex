import type { ReactNode } from "react";
import { Progress, type ProgressType } from "../Progress/Progress";
import { SegmentedControl } from "../SegmentedControl/SegmentedControl";
import { Navbar, type NavbarProps, type NavbarTab } from "./Navbar";
import { PageTitle, type PageTitleProps, type PageTitleVariant } from "./PageTitle";
import { StatusBar } from "./StatusBar";
import styles from "./FullHeader.module.css";

export type HeaderTitleMode = "navbar-start" | "navbar-center" | "page" | "hero";
/** Figma Full Header `Type`: Default / Product. */
export type FullHeaderType = "default" | "product";

export interface HeaderHero {
  label: string;
  value: string;
  delta?: string;
  meta?: string;
  status?: string;
}

export type { NavbarTab };

type PageTitlePass = Omit<PageTitleProps, "title" | "variant" | "className" | "inverted">;

export interface FullHeaderProps
  extends Omit<NavbarProps, "titleAlign" | "showTitle" | "title" | "variant">,
    PageTitlePass {
  title: string;
  /** Figma `Type`. */
  type?: FullHeaderType;
  titleMode?: HeaderTitleMode;
  scrolled?: boolean;
  progress?: number;
  /** Progress 3.0/Linear type when progress is shown. */
  progressType?: ProgressType;
  /** Figma `Show Progress indicator`. */
  showProgress?: boolean;
  showStatusBar?: boolean;
  /** Figma `Show Page Title`. */
  showPageTitle?: boolean;
  /** Nested Page Title 4.0 `Type` override. */
  pageTitleVariant?: PageTitleVariant;
  /** Figma `Show Tabs` (Segmented Control). */
  showTabs?: boolean;
  tabs?: NavbarTab[];
  activeTab?: string;
  onTabChange?: (id: string) => void;
  /** Nested Navbar `Types` override. */
  navbarVariant?: NavbarProps["variant"];
  /** Nested Navbar `Show Title`. */
  showNavbarTitle?: boolean;
  hero?: HeaderHero;
  children?: ReactNode;
}

function resolveType(type: FullHeaderType | undefined, titleMode: HeaderTitleMode): FullHeaderType {
  if (type) return type;
  if (titleMode === "hero") return "product";
  return "default";
}

export function FullHeader({
  title,
  type: typeProp,
  subtitle,
  subtext,
  titleMode = "navbar-start",
  scrolled = false,
  progress,
  progressType = "determinate",
  showProgress = false,
  showStatusBar = true,
  showPageTitle: showPageTitleProp,
  pageTitleVariant,
  showTabs: showTabsProp,
  tabs,
  activeTab,
  onTabChange,
  navbarVariant,
  showNavbarTitle,
  hero,
  children,
  showSubtext,
  showTitleBadge,
  titleBadge,
  showIndex,
  index,
  indexLabel,
  showProductImage,
  productImage,
  productImageAlt,
  showInfo,
  onInfo,
  showProductTitle,
  productTitle,
  showEye,
  onEye,
  showBadge,
  badge,
  showIndexInfo,
  onIndexInfo,
  value,
  status,
  showLeftIcon,
  showBack,
  ...navbar
}: FullHeaderProps) {
  const type = resolveType(typeProp, titleMode);
  const collapsed = scrolled && (titleMode === "page" || titleMode === "hero" || type !== "default");
  const showPageTitle =
    showPageTitleProp ?? (Boolean(typeProp) || titleMode === "page" || titleMode === "hero");
  const navbarTitleVisible =
    showNavbarTitle ??
    (type === "default" &&
      (titleMode === "navbar-start" || titleMode === "navbar-center" || titleMode === "page" || collapsed));
  const tabsVisible = showTabsProp ?? Boolean(tabs?.length);
  const pageVariant = pageTitleVariant ?? (type === "default" ? "default" : "product");
  const copy = subtext ?? subtitle;
  const resolvedNavbarVariant =
    navbarVariant ??
    (type !== "default"
      ? "icon"
      : titleMode === "navbar-start" && !typeProp
        ? "main"
        : titleMode === "page" && !collapsed
          ? "icon"
          : "title");

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled ? "true" : "false"}
      data-type={type}
    >
      {showStatusBar && <StatusBar />}
      <Navbar
        {...navbar}
        showLeftIcon={showLeftIcon}
        showBack={showBack}
        className={[type !== "default" && styles.navFlush, navbar.className].filter(Boolean).join(" ")}
        variant={resolvedNavbarVariant}
        title={title}
        subtitle={copy}
        showTitle={type === "default" ? Boolean(navbarTitleVisible) : Boolean(collapsed && (showNavbarTitle ?? true))}
      />
      {showProgress && (
        <div className={styles.progressWrap}>
          <Progress type={progressType} value={progress ?? 0.45} aria-label="Page progress" />
        </div>
      )}
      {showPageTitle && (
        <div className={[styles.collapsible, collapsed && styles.collapsed].filter(Boolean).join(" ")}>
          <PageTitle
            variant={pageVariant}
            title={title}
            subtext={copy}
            showSubtext={showSubtext}
            showTitleBadge={showTitleBadge}
            titleBadge={titleBadge}
            showIndex={showIndex}
            index={index ?? hero?.delta}
            indexLabel={indexLabel ?? (hero?.delta ? "" : undefined)}
            showProductImage={showProductImage}
            productImage={productImage}
            productImageAlt={productImageAlt}
            showInfo={showInfo}
            onInfo={onInfo}
            showProductTitle={showProductTitle}
            productTitle={productTitle ?? hero?.label}
            showEye={showEye}
            onEye={onEye}
            showBadge={showBadge}
            badge={badge}
            showIndexInfo={showIndexInfo}
            onIndexInfo={onIndexInfo}
            value={value ?? hero?.value}
            status={status ?? hero?.status ?? hero?.meta}
          />
        </div>
      )}
      {tabsVisible && tabs && tabs.length > 0 && (
        <div className={styles.tabs}>
          <SegmentedControl segments={tabs} value={activeTab} onChange={onTabChange} />
        </div>
      )}
      {children ? <div className={styles.slot}>{children}</div> : null}
    </header>
  );
}
