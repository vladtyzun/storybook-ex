import type { MouseEvent, ReactNode } from "react";
import { ChevronDownIcon, ShareIcon } from "./icons";
import "./RightExtension.css";

export type RightExtensionType = "icon" | "button" | "badge";

export interface RightExtensionProps {
  /** Which append element to show. */
  type?: RightExtensionType;
  /** Icon variant: rotates the chevron when the row is expanded. */
  expanded?: boolean;
  /** Icon variant: override the default chevron. */
  icon?: ReactNode;
  /** Button variant: label text. */
  buttonLabel?: string;
  /** Button variant: trailing icon. */
  buttonIcon?: ReactNode;
  /** Button variant: click handler. Stops propagation so the row doesn't toggle. */
  onButtonClick?: (e: MouseEvent) => void;
  /** Badge variant: label text. */
  badgeLabel?: string;
  /** Dim the element (used when the whole row is disabled). */
  disabled?: boolean;
}

export function RightExtension({
  type = "icon",
  expanded = false,
  icon,
  buttonLabel = "Action",
  buttonIcon,
  onButtonClick,
  badgeLabel = "LABEL",
  disabled = false,
}: RightExtensionProps) {
  if (type === "button") {
    return (
      <span
        className={`mlds-rext mlds-rext--button${disabled ? " is-disabled" : ""}`}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={(e) => {
          if (disabled) return;
          e.stopPropagation();
          onButtonClick?.(e);
        }}
      >
        <span className="mlds-rext__button-label">{buttonLabel}</span>
        <span className="mlds-rext__button-icon">{buttonIcon ?? <ShareIcon />}</span>
      </span>
    );
  }

  if (type === "badge") {
    return (
      <span className={`mlds-rext mlds-rext--badge${disabled ? " is-disabled" : ""}`}>
        {badgeLabel}
      </span>
    );
  }

  // Default: chevron icon (visual only; the row header owns the click).
  return (
    <span
      className={`mlds-rext mlds-rext--icon${expanded ? " is-open" : ""}${
        disabled ? " is-disabled" : ""
      }`}
    >
      {icon ?? <ChevronDownIcon />}
    </span>
  );
}

export default RightExtension;
