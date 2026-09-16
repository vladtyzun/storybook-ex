/** Common iPhone CSS logical widths (pt), ascending from default mobile. */
export const SCREEN_WIDTHS = [375, 390, 393, 402, 430, 440] as const;

export type ScreenWidth = (typeof SCREEN_WIDTHS)[number];

/** Horizontal inset: 20px left + 20px right (= `--spacing-20` × 2). */
export const SCREEN_INSET = 40;

export type PreviewWidthMode = "full" | "inset" | "none";

export const DEFAULT_SCREEN_WIDTH: ScreenWidth = 375;

export function parseScreenWidth(value: unknown): ScreenWidth {
  const n = Number(value);
  return (SCREEN_WIDTHS as readonly number[]).includes(n)
    ? (n as ScreenWidth)
    : DEFAULT_SCREEN_WIDTH;
}

export function contentWidth(screen: ScreenWidth): number {
  return screen - SCREEN_INSET;
}
