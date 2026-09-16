import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./StackButton.css";

export type StackButtonType = "primary" | "secondary";

export type StackButtonState =
  | "default"
  | "hover"
  | "focus"
  | "active"
  | "disabled";

export interface StackButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Visual style. Matches Figma StackButton `Type` prop. */
  type?: StackButtonType;
  /** Force a visual state (useful for stories/demos). */
  state?: StackButtonState;
  /** Icon rendered inside the circle. */
  icon: ReactNode;
  /** Label displayed under the icon. */
  children: ReactNode;
  /** HTML button type. */
  htmlType?: "button" | "submit" | "reset";
}

export const StackButton = forwardRef<HTMLButtonElement, StackButtonProps>(
  function StackButton(
    {
      type = "primary",
      state = "default",
      icon,
      children,
      htmlType = "button",
      className = "",
      disabled,
      ...rest
    },
    ref,
  ) {
    const isDisabled = disabled || state === "disabled";
    const rootClass = [
      "mlds-stack-button",
      `mlds-stack-button--${type}`,
      `mlds-stack-button--state-${state}`,
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
        {...rest}
      >
        <span className="mlds-stack-button__circle" aria-hidden="true">
          <span className="mlds-stack-button__icon">{icon}</span>
        </span>
        <span className="mlds-stack-button__label">{children}</span>
      </button>
    );
  },
);

export default StackButton;
