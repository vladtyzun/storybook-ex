import { Children, type ReactNode } from "react";
import "./ButtonGroup.css";

export type ButtonGroupLayout = "side-by-side" | "stacked" | "stack-buttons";

export interface ButtonGroupProps {
  /**
   * Arrangement of the child buttons.
   * - `side-by-side` — Button 1/2/3 in a row (each button flex-grows)
   * - `stacked` — Buttons stacked vertically, full-width
   * - `stack-buttons` — Row of StackButtons, each flex-grows
   */
  layout?: ButtonGroupLayout;
  children: ReactNode;
  className?: string;
}

export function ButtonGroup({
  layout = "side-by-side",
  children,
  className = "",
}: ButtonGroupProps) {
  const rootClass = [
    "mlds-button-group",
    `mlds-button-group--${layout}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} role="group">
      {Children.map(children, (child, i) => (
        <div className="mlds-button-group__item" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default ButtonGroup;
