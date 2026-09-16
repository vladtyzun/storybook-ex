import type { Decorator } from "@storybook/react-vite";
import {
  contentWidth,
  parseScreenWidth,
  type PreviewWidthMode,
} from "./screenWidth";

/**
 * Constrains story canvas to the toolbar screen width.
 * - full: edge-to-edge chrome (nav, status bar, scroll demos)
 * - inset (default): content = screen − 40 (20px each side)
 * - none: skip (foundation docs, custom frames)
 */
export const withScreenWidth: Decorator = (Story, context) => {
  const mode = (context.parameters.previewWidth as PreviewWidthMode | undefined) ?? "inset";
  if (mode === "none") return <Story />;

  const screen = parseScreenWidth(context.globals.screenWidth);
  const width = mode === "full" ? screen : contentWidth(screen);

  return (
    <div
      data-preview-width={mode}
      data-screen-width={screen}
      style={{
        width,
        maxWidth: "100%",
        boxSizing: "border-box",
        // Device / scroll frames read this instead of a hard-coded 375.
        ["--story-screen-width" as string]: `${screen}px`,
      }}
    >
      <Story />
    </div>
  );
};
