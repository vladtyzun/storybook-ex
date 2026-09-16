import { IconBattery, IconSignal, IconWifi } from "./icons";
import styles from "./StatusBar.module.css";

export interface StatusBarProps {
  time?: string;
  inverted?: boolean;
  className?: string;
}

export function StatusBar({ time = "9:41", inverted = false, className = "" }: StatusBarProps) {
  return (
    <div
      className={[styles.bar, inverted && styles.inverted, className].filter(Boolean).join(" ")}
      role="status"
      aria-label="Device status"
    >
      <span className={styles.time}>{time}</span>
      <span className={styles.island} aria-hidden="true" />
      <span className={styles.metrics} aria-hidden="true">
        <IconSignal />
        <IconWifi />
        <IconBattery />
      </span>
    </div>
  );
}
