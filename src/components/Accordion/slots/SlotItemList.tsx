import type { ReactNode } from "react";
import { CircleBuildingIcon } from "../icons";
import "./SlotContent.css";

export interface SlotItemListRow {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface SlotItemListProps {
  rows?: SlotItemListRow[];
}

const defaultRows: SlotItemListRow[] = [
  { id: "1", label: "Label" },
  { id: "2", label: "Label" },
  { id: "3", label: "Label" },
  { id: "4", label: "Label" },
];

export function SlotItemList({ rows = defaultRows }: SlotItemListProps) {
  return (
    <div className="mlds-slot mlds-slot-item-list">
      {rows.map((row) => (
        <div className="mlds-slot-item-list__row" key={row.id}>
          <span className="mlds-slot-item-list__icon">
            {row.icon ?? <CircleBuildingIcon />}
          </span>
          <span className="mlds-slot-item-list__label">{row.label}</span>
        </div>
      ))}
    </div>
  );
}

export default SlotItemList;
