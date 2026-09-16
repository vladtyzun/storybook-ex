import type { ImgHTMLAttributes } from "react";
import { ML_LOGOMARK_SRC } from "./presets";

/** Figma Logomark `Type=Filled Black` — exported SVG asset. */
export function Logomark({
  className,
  alt = "",
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={ML_LOGOMARK_SRC}
      alt={alt}
      className={className}
      draggable={false}
      {...rest}
    />
  );
}
