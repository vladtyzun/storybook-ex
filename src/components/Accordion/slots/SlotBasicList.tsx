import "./SlotContent.css";

export interface SlotBasicListRow {
  id: string;
  label: string;
  value: string;
}

export interface SlotBasicListProps {
  rows?: SlotBasicListRow[];
}

const defaultRows: SlotBasicListRow[] = [
  { id: "1", label: "Item 1", value: "$100.00" },
  { id: "2", label: "Item 2", value: "$0.99" },
  { id: "3", label: "Item 3", value: "$2.50" },
];

export function SlotBasicList({ rows = defaultRows }: SlotBasicListProps) {
  return (
    <div className="mlds-slot mlds-slot-basic-list">
      {rows.map((row) => (
        <div className="mlds-slot-basic-list__row" key={row.id}>
          <span className="mlds-slot-basic-list__label">{row.label}</span>
          <span className="mlds-slot-basic-list__value">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export default SlotBasicList;
