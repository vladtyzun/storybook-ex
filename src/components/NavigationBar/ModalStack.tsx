import type { ReactNode } from "react";
import { StatusBar } from "./StatusBar";
import { StatusSheet } from "./StatusSheet";
import styles from "./ModalStack.module.css";

export interface ModalStackProps {
  children?: ReactNode;
  className?: string;
}

export function ModalStack({ children, className = "" }: ModalStackProps) {
  return (
    <div className={[styles.stack, className].filter(Boolean).join(" ")}>
      <StatusBar inverted />
      <StatusSheet />
      <div className={styles.card}>{children}</div>
    </div>
  );
}
