import { useState, type ReactNode } from "react";
import { AccordionItem, type AccordionState } from "./AccordionItem";
import "./Accordion.css";

export type AccordionType = "boxed" | "regular";

export interface AccordionRow {
  id: string;
  title?: string;
  subtext?: string;
  showSubtext?: boolean;
  showInfo?: boolean;
  icon?: ReactNode;
  showIcon?: boolean;
  /** Expanded body content (any of the slot components, or custom nodes). */
  content?: ReactNode;
  /** Custom right-side element; defaults to a chevron. */
  rightExtension?: ReactNode;
}

export interface AccordionProps {
  items: AccordionRow[];
  type?: AccordionType;
  /** Applies one state to every row (handy for Disabled / Skeleton demos). */
  state?: AccordionState;
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  showDivider?: boolean;
  /** Default append element for every row (rows can override via their own rightExtension). */
  rightExtensionType?: "none" | "icon" | "button" | "badge";
  className?: string;
}

export function Accordion({
  items,
  type = "boxed",
  state = "active",
  allowMultiple = false,
  defaultOpenIds = [],
  showDivider = true,
  rightExtensionType = "icon",
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  const rootClass = ["mlds-accordion", `mlds-accordion--${type}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtext={item.subtext}
          showSubtext={item.showSubtext}
          showInfo={item.showInfo}
          icon={item.icon}
          showIcon={item.showIcon}
          state={state}
          expanded={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
          showDivider={showDivider}
          isLast={i === items.length - 1}
          rightExtensionType={rightExtensionType}
          rightExtension={item.rightExtension}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
