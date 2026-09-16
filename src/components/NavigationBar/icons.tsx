import type { SVGProps } from "react";

function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 11v5M12 8h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function IconHelp(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.35c-.7.3-1.4.85-1.4 1.65V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </Svg>
  );
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3.2A2.5 2.5 0 0 1 5 13.5v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconBell(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path
        d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconSignal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 12" width="18" height="12" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="0" y="7" width="3" height="5" rx="0.5" />
      <rect x="5" y="5" width="3" height="7" rx="0.5" />
      <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
      <rect x="15" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

export function IconWifi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 12" width="16" height="12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 4.2C3.6 1.8 6.7.8 8 .8s4.4 1 7 3.4M3.2 6.6c1.6-1.5 3.4-2.2 4.8-2.2s3.2.7 4.8 2.2M5.6 8.8c.8-.7 1.6-1 2.4-1s1.6.3 2.4 1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconBattery(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 13" width="27" height="13" fill="none" aria-hidden="true" {...props}>
      <rect x="0.6" y="0.6" width="22" height="11.8" rx="2.4" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2.2" y="2.2" width="18.8" height="8.6" rx="1.2" fill="currentColor" />
      <path d="M24.2 4.2c.9.4 1.4 1.1 1.4 2.3s-.5 1.9-1.4 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconEye(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg width="24" height="24" {...props}>
      <path
        d="M2.5 12s3.6-7 9.5-7 9.5 7 9.5 7-3.6 7-9.5 7-9.5-7-9.5-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </Svg>
  );
}

export function IconTick(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
