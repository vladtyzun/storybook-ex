import type { ReactNode } from "react";
import { BuildingIcon, InfoIcon } from "./icons";
import { RightExtension } from "./RightExtension";
import "./AccordionItem.css";

export type AccordionState = "active" | "disabled" | "skeleton";

export interface AccordionItemProps {
  /** Header text. */
  title?: string;
  /** Optional secondary line under the title. */
  subtext?: string;
  showSubtext?: boolean;
  /** Show the help/info icon next to the title. */
  showInfo?: boolean;
  /** Leading icon; falls back to a building glyph. */
  icon?: ReactNode;
  showIcon?: boolean;
  /** Visual state. */
  state?: AccordionState;
  /** Whether the row is open. */
  expanded?: boolean;
  /** Toggle handler (parent-controlled). */
  onToggle?: () => void;
  /** Divider under the item, separating it from the next. */
  showDivider?: boolean;
  /** Suppresses the divider for the final row. */
  isLast?: boolean;
  /** Pick the append element type. Ignored if `rightExtension` is provided. */
  rightExtensionType?: "none" | "icon" | "button" | "badge";
  /** Custom right-side append element; overrides `rightExtensionType`. */
  rightExtension?: ReactNode;
  /** Expanded body content (the swappable slot). */
  children?: ReactNode;
  /** id used to wire aria attributes. */
  id?: string;
}

export function AccordionItem({
  title = "Accordion header title",
  subtext = "Insert subtext here",
  showSubtext = false,
  showInfo = false,
  icon,
  showIcon = true,
  state = "active",
  expanded = false,
  onToggle,
  showDivider = true,
  isLast = false,
  rightExtensionType = "icon",
  rightExtension,
  children,
  id = "item",
}: AccordionItemProps) {
  const isSkeleton = state === "skeleton";
  const isDisabled = state === "disabled";
  const interactive = !isSkeleton && !isDisabled;

  const rootClass = [
    "mlds-acc-item",
    `is-${state}`,
    expanded ? "is-expanded" : "",
    showIcon ? "has-icon" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const dividerEl =
    showDivider && !isLast ? <div className="mlds-acc-item__divider" /> : null;

  // Skeleton: shimmer placeholders instead of real content.
  if (isSkeleton) {
    return (
      <div className={rootClass} aria-busy="true">
        <div className="mlds-acc-item__header mlds-acc-item__header--static">
          {showIcon && (
            <span className="mlds-acc-item__leading">
              <span className="mlds-acc-item__skeleton-circle mlds-skeleton" />
            </span>
          )}
          <span className="mlds-acc-item__container">
            <span className="mlds-acc-item__title-row">
              <span className="mlds-acc-item__skeleton-bar mlds-acc-item__skeleton-bar--title mlds-skeleton" />
              <span className="mlds-acc-item__skeleton-bar mlds-acc-item__skeleton-bar--append mlds-skeleton" />
            </span>
          </span>
        </div>
        {expanded && (
          <div className="mlds-acc-item__panel is-open">
            <div className="mlds-acc-item__panel-inner">
              <div className="mlds-acc-item__skeleton-content mlds-skeleton" />
            </div>
          </div>
        )}
        {dividerEl}
      </div>
    );
  }

  const HeaderInner = (
    <>
      {showIcon && (
        <span className="mlds-acc-item__leading">{icon ?? <BuildingIcon />}</span>
      )}
      <span className="mlds-acc-item__container">
        <span className="mlds-acc-item__title-row">
          <span className="mlds-acc-item__title-subtext">
            <span className="mlds-acc-item__title-line">
              <span className="mlds-acc-item__title">{title}</span>
              {showInfo && (
                <span className="mlds-acc-item__info">
                  <InfoIcon />
                </span>
              )}
            </span>
            {showSubtext && (
              <span className="mlds-acc-item__subtext">{subtext}</span>
            )}
          </span>
          <span className="mlds-acc-item__append">
            {rightExtension ??
              (rightExtensionType === "none" ? null : (
                <RightExtension
                  type={rightExtensionType}
                  expanded={expanded}
                  disabled={isDisabled}
                />
              ))}
          </span>
        </span>
      </span>
    </>
  );

  return (
    <div className={rootClass}>
      {interactive ? (
        <button
          type="button"
          className="mlds-acc-item__header"
          aria-expanded={expanded}
          aria-controls={`mlds-panel-${id}`}
          id={`mlds-header-${id}`}
          onClick={onToggle}
        >
          {HeaderInner}
        </button>
      ) : (
        // Disabled: same layout, not interactive.
        <div className="mlds-acc-item__header mlds-acc-item__header--static">
          {HeaderInner}
        </div>
      )}

      {expanded && (
        <div
          id={`mlds-panel-${id}`}
          role="region"
          aria-labelledby={`mlds-header-${id}`}
          className="mlds-acc-item__panel is-open"
        >
          <div className="mlds-acc-item__panel-inner">
            <div className="mlds-acc-item__content">
              {children ?? (
                <div className="mlds-acc-item__placeholder">Slot container. Swap me</div>
              )}
            </div>
          </div>
        </div>
      )}

      {dividerEl}
    </div>
  );
}

export default AccordionItem;
