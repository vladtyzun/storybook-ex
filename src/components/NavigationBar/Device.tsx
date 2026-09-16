import type { ReactNode } from "react";
import styles from "./Device.module.css";

export function Device({ children }: { children: ReactNode }) {
  return <div className={styles.device}>{children}</div>;
}

export function DeviceBody() {
  return <div className={styles.body}>Scrollable page content</div>;
}

export { styles as deviceStyles };
