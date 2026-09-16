import styles from "./Progress.module.css";

export type ProgressType = "determinate" | "indeterminate" | "buffer" | "steps";

export interface ProgressProps {
  /** Figma `Type` on Progress 3.0/Linear. */
  type?: ProgressType;
  /** 0–1 fill for determinate / buffer primary. */
  value?: number;
  /** 0–1 secondary fill for buffer. */
  bufferValue?: number;
  /** Step count when `type="steps"`. */
  steps?: number;
  /** 0-based current step index when `type="steps"`. */
  currentStep?: number;
  className?: string;
  "aria-label"?: string;
}

export function Progress({
  type = "determinate",
  value = 0.45,
  bufferValue = 0.7,
  steps = 5,
  currentStep = 2,
  className = "",
  "aria-label": ariaLabel = "Progress",
}: ProgressProps) {
  const root = [styles.root, styles[type], className].filter(Boolean).join(" ");
  const clamped = Math.min(1, Math.max(0, value));

  if (type === "steps") {
    return (
      <div className={root} role="progressbar" aria-label={ariaLabel} aria-valuemin={0} aria-valuemax={steps} aria-valuenow={currentStep + 1}>
        {Array.from({ length: steps }, (_, i) => (
          <span
            key={i}
            className={[
              styles.step,
              i < currentStep && styles.stepDone,
              i === currentStep && styles.stepCurrent,
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>
    );
  }

  if (type === "buffer") {
    return (
      <div className={[styles.root, styles.bufferTrack, className].filter(Boolean).join(" ")} role="progressbar" aria-label={ariaLabel} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(clamped * 100)}>
        <span className={styles.track} />
        <span className={styles.bufferFill} style={{ width: `${Math.min(1, Math.max(0, bufferValue)) * 100}%` }} />
        <span className={styles.fill} style={{ width: `${clamped * 100}%` }} />
      </div>
    );
  }

  if (type === "indeterminate") {
    return (
      <div className={root} role="progressbar" aria-label={ariaLabel}>
        <span className={styles.fill} />
      </div>
    );
  }

  return (
    <div
      className={root}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
    >
      <span className={styles.fill} style={{ width: `${clamped * 100}%` }} />
    </div>
  );
}
