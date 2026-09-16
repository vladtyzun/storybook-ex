import "./SlotContent.css";

export interface SlotBodyTextProps {
  bodyText?: string;
}

export function SlotBodyText({
  bodyText = "This is an example body text slot. Insert any body text content in here.",
}: SlotBodyTextProps) {
  return (
    <div className="mlds-slot mlds-slot-body-text">
      <p className="mlds-slot-body-text__text">{bodyText}</p>
    </div>
  );
}

export default SlotBodyText;
