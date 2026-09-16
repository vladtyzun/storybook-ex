import styles from "./StatusSheet.module.css";

export interface StatusSheetProps {
  className?: string;
}

export function StatusSheet({ className = "" }: StatusSheetProps) {
  return (
    <div className={[styles.sheet, className].filter(Boolean).join(" ")} aria-hidden="true">
      <div className={styles.peek} />
    </div>
  );
}
