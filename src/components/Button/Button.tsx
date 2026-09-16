import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Icon, iconNames, type IconName } from "../../foundation/icons";
import { IconSpinner } from "./icons";
import "./Button.css";

export type ButtonType =
  | "primary"
  | "primary-alt"
  | "secondary"
  | "negative"
  | "outline"
  | "transparent"
  | "media";

export type ButtonSize = "large" | "medium" | "small";

export type ButtonState =
  | "default"
  | "hover"
  | "focus"
  | "active"
  | "disabled"
  | "loading";

/** Foundation icon name or a custom React node slot. */
export type ButtonIcon = IconName | ReactNode;

function isIconName(value: unknown): value is IconName {
  return typeof value === "string" && (iconNames as readonly string[]).includes(value);
}

function resolveIcon(icon: ButtonIcon | undefined): ReactNode {
  if (icon == null || icon === false) return null;
  if (isIconName(icon)) return <Icon name={icon} />;
  return icon;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Visual style. Matches Figma Button `Type` prop. */
  type?: ButtonType;
  /** Sizing token. Matches Figma Button `Size` prop. */
  size?: ButtonSize;
  /** Force a visual state (useful for stories/demos). Real interaction still works via pseudo-classes. */
  state?: ButtonState;
  /** Renders as an icon-only pill (no label). Requires `aria-label`. */
  iconOnly?: boolean;
  /**
   * Icon before the label (or the sole icon when `iconOnly`).
   * Pass a foundation `IconName` string or a custom ReactNode.
   */
  leadingIcon?: ButtonIcon;
  /**
   * Icon after the label. Ignored when `iconOnly` or loading.
   * Pass a foundation `IconName` string or a custom ReactNode.
   */
  appendIcon?: ButtonIcon;
  /** Label text — hidden when iconOnly. */
  children?: ReactNode;
  /** HTML button type. Independent from visual `type`. */
  htmlType?: "button" | "submit" | "reset";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type = "primary",
    size = "large",
    state = "default",
    iconOnly = false,
    leadingIcon,
    appendIcon,
    children = "Button text",
    htmlType = "button",
    className = "",
    disabled,
    "aria-label": ariaLabel,
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || state === "disabled";
  const isLoading = state === "loading";
  const leading = resolveIcon(leadingIcon);
  const append = resolveIcon(appendIcon);
  const accessibleName =
    ariaLabel ??
    ((iconOnly || isLoading) && typeof children === "string" ? children : undefined);

  const rootClass = [
    "mlds-button",
    `mlds-button--${type}`,
    `mlds-button--${size}`,
    `mlds-button--state-${state}`,
    iconOnly && "mlds-button--icon-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type={htmlType}
      className={rootClass}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      aria-label={accessibleName}
      {...rest}
    >
      {isLoading ? (
        <span className="mlds-button__icon mlds-button__spinner" aria-hidden="true">
          <IconSpinner />
        </span>
      ) : (
        leading && (
          <span className="mlds-button__icon" aria-hidden="true">
            {leading}
          </span>
        )
      )}
      {!iconOnly && !isLoading && (
        <span className="mlds-button__label">{children}</span>
      )}
      {!iconOnly && !isLoading && append && (
        <span className="mlds-button__icon" aria-hidden="true">
          {append}
        </span>
      )}
    </button>
  );
});

export default Button;
