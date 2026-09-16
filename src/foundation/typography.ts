/**
 * MLDS 4.0 Typography Collection
 * All typography variables across 9 modes
 */

export const TYPOGRAPHY_MODES = [
  'Standard (default)',
  '0.88 (xSmall)',
  '0.92 (Small)',
  '0.97 (Medium)',
  '1.06 (xLarge)',
  '1.12 (xxLarge)',
  '1.18 (xxxLarge)',
  '1.29 (Accessibility M)',
  '1.41 (Accessibility L)',
] as const;

export type TypographyMode = typeof TYPOGRAPHY_MODES[number];

export interface TypographyToken {
  name: string;
  variable: string;
  category: 'Font Family' | 'Weight' | 'Font Size' | 'Line Height' | 'Letter Spacing';
  values: Record<TypographyMode, string | number>;
}

const FONT_NAME = '"Baton Turbo"';

/** Numeric CSS font-weight matching fonts.css @font-face (not Figma style names). */
export const WEIGHTS_MAP = {
  regular: 400,
  book: 350,
  medium: 500,
  bold: 700,
  heavy: 900,
} as const;

export type WeightName = keyof typeof WEIGHTS_MAP;

/** Figma text-style roles → loaded Baton Turbo weight. */
const ROLE_WEIGHT: Record<string, WeightName> = {
  label: 'medium',
  title: 'medium',
  headline: 'medium',
  display: 'medium',
  body: 'regular',
  link: 'regular',
};

/** Figma tracking as em (px category tokens were size-specific). Display uses headline; link uses body. */
const LETTER_SPACING_BY_ROLE: Record<string, { variable: string; value: string }> = {
  headline: { variable: '--letter-spacing-headline', value: '-0.03em' },
  display: { variable: '--letter-spacing-headline', value: '-0.03em' },
  title: { variable: '--letter-spacing-title', value: '-0.03em' },
  label: { variable: '--letter-spacing-label', value: '-0.01em' },
  body: { variable: '--letter-spacing-body', value: '-0.02em' },
  link: { variable: '--letter-spacing-body', value: '-0.02em' },
};

// Font Sizes (px) — scaled by mode multiplier
const FONT_SIZES: Record<string, Record<TypographyMode, number>> = {
  'body-small': {
    'Standard (default)': 12, '0.88 (xSmall)': 10.56, '0.92 (Small)': 11.04, '0.97 (Medium)': 11.64,
    '1.06 (xLarge)': 12.72, '1.12 (xxLarge)': 13.44, '1.18 (xxxLarge)': 14.16, '1.29 (Accessibility M)': 15.48, '1.41 (Accessibility L)': 16.92,
  },
  'body-medium': {
    'Standard (default)': 14, '0.88 (xSmall)': 12.32, '0.92 (Small)': 12.88, '0.97 (Medium)': 13.58,
    '1.06 (xLarge)': 14.84, '1.12 (xxLarge)': 15.68, '1.18 (xxxLarge)': 16.52, '1.29 (Accessibility M)': 18.06, '1.41 (Accessibility L)': 19.74,
  },
  'body-large': {
    'Standard (default)': 16, '0.88 (xSmall)': 14.08, '0.92 (Small)': 14.72, '0.97 (Medium)': 15.52,
    '1.06 (xLarge)': 16.96, '1.12 (xxLarge)': 17.92, '1.18 (xxxLarge)': 18.88, '1.29 (Accessibility M)': 20.64, '1.41 (Accessibility L)': 22.56,
  },
  'body-xl': {
    'Standard (default)': 18, '0.88 (xSmall)': 15.84, '0.92 (Small)': 16.56, '0.97 (Medium)': 17.46,
    '1.06 (xLarge)': 19.08, '1.12 (xxLarge)': 20.16, '1.18 (xxxLarge)': 21.24, '1.29 (Accessibility M)': 23.22, '1.41 (Accessibility L)': 25.38,
  },
  'label-small': {
    'Standard (default)': 10, '0.88 (xSmall)': 8.8, '0.92 (Small)': 9.2, '0.97 (Medium)': 9.7,
    '1.06 (xLarge)': 10.6, '1.12 (xxLarge)': 11.2, '1.18 (xxxLarge)': 11.8, '1.29 (Accessibility M)': 12.9, '1.41 (Accessibility L)': 14.1,
  },
  'label-medium': {
    'Standard (default)': 12, '0.88 (xSmall)': 10.56, '0.92 (Small)': 11.04, '0.97 (Medium)': 11.64,
    '1.06 (xLarge)': 12.72, '1.12 (xxLarge)': 13.44, '1.18 (xxxLarge)': 14.16, '1.29 (Accessibility M)': 15.48, '1.41 (Accessibility L)': 16.92,
  },
  'label-large': {
    'Standard (default)': 14, '0.88 (xSmall)': 12.32, '0.92 (Small)': 12.88, '0.97 (Medium)': 13.58,
    '1.06 (xLarge)': 14.84, '1.12 (xxLarge)': 15.68, '1.18 (xxxLarge)': 16.52, '1.29 (Accessibility M)': 18.06, '1.41 (Accessibility L)': 19.74,
  },
  'link-small': {
    'Standard (default)': 12, '0.88 (xSmall)': 10.56, '0.92 (Small)': 11.04, '0.97 (Medium)': 11.64,
    '1.06 (xLarge)': 12.72, '1.12 (xxLarge)': 13.44, '1.18 (xxxLarge)': 14.16, '1.29 (Accessibility M)': 15.48, '1.41 (Accessibility L)': 16.92,
  },
  'link-medium': {
    'Standard (default)': 14, '0.88 (xSmall)': 12.32, '0.92 (Small)': 12.88, '0.97 (Medium)': 13.58,
    '1.06 (xLarge)': 14.84, '1.12 (xxLarge)': 15.68, '1.18 (xxxLarge)': 16.52, '1.29 (Accessibility M)': 18.06, '1.41 (Accessibility L)': 19.74,
  },
  'link-large': {
    'Standard (default)': 16, '0.88 (xSmall)': 14.08, '0.92 (Small)': 14.72, '0.97 (Medium)': 15.52,
    '1.06 (xLarge)': 16.96, '1.12 (xxLarge)': 17.92, '1.18 (xxxLarge)': 18.88, '1.29 (Accessibility M)': 20.64, '1.41 (Accessibility L)': 22.56,
  },
  'title-small': {
    'Standard (default)': 16, '0.88 (xSmall)': 14.08, '0.92 (Small)': 14.72, '0.97 (Medium)': 15.52,
    '1.06 (xLarge)': 16.96, '1.12 (xxLarge)': 17.92, '1.18 (xxxLarge)': 18.88, '1.29 (Accessibility M)': 20.64, '1.41 (Accessibility L)': 22.56,
  },
  'title-medium': {
    'Standard (default)': 18, '0.88 (xSmall)': 15.84, '0.92 (Small)': 16.56, '0.97 (Medium)': 17.46,
    '1.06 (xLarge)': 19.08, '1.12 (xxLarge)': 20.16, '1.18 (xxxLarge)': 21.24, '1.29 (Accessibility M)': 23.22, '1.41 (Accessibility L)': 25.38,
  },
  'title-large': {
    'Standard (default)': 20, '0.88 (xSmall)': 17.6, '0.92 (Small)': 18.4, '0.97 (Medium)': 19.4,
    '1.06 (xLarge)': 21.2, '1.12 (xxLarge)': 22.4, '1.18 (xxxLarge)': 23.6, '1.29 (Accessibility M)': 25.8, '1.41 (Accessibility L)': 28.2,
  },
  'headline-small': {
    'Standard (default)': 24, '0.88 (xSmall)': 21.12, '0.92 (Small)': 22.08, '0.97 (Medium)': 23.28,
    '1.06 (xLarge)': 25.44, '1.12 (xxLarge)': 26.88, '1.18 (xxxLarge)': 28.32, '1.29 (Accessibility M)': 30.96, '1.41 (Accessibility L)': 33.84,
  },
  'headline-medium': {
    'Standard (default)': 28, '0.88 (xSmall)': 24.64, '0.92 (Small)': 25.76, '0.97 (Medium)': 27.16,
    '1.06 (xLarge)': 29.68, '1.12 (xxLarge)': 31.36, '1.18 (xxxLarge)': 33.04, '1.29 (Accessibility M)': 36.12, '1.41 (Accessibility L)': 39.48,
  },
  'headline-large': {
    'Standard (default)': 36, '0.88 (xSmall)': 31.68, '0.92 (Small)': 33.12, '0.97 (Medium)': 34.92,
    '1.06 (xLarge)': 38.16, '1.12 (xxLarge)': 40.32, '1.18 (xxxLarge)': 42.48, '1.29 (Accessibility M)': 46.44, '1.41 (Accessibility L)': 50.76,
  },
  'display-small': {
    'Standard (default)': 44, '0.88 (xSmall)': 38.72, '0.92 (Small)': 40.48, '0.97 (Medium)': 42.68,
    '1.06 (xLarge)': 46.64, '1.12 (xxLarge)': 49.28, '1.18 (xxxLarge)': 51.92, '1.29 (Accessibility M)': 56.76, '1.41 (Accessibility L)': 62.04,
  },
  'display-medium': {
    'Standard (default)': 60, '0.88 (xSmall)': 52.8, '0.92 (Small)': 55.2, '0.97 (Medium)': 58.2,
    '1.06 (xLarge)': 63.6, '1.12 (xxLarge)': 67.2, '1.18 (xxxLarge)': 70.8, '1.29 (Accessibility M)': 77.4, '1.41 (Accessibility L)': 84.6,
  },
  'display-large': {
    'Standard (default)': 88, '0.88 (xSmall)': 77.44, '0.92 (Small)': 80.96, '0.97 (Medium)': 85.36,
    '1.06 (xLarge)': 93.28, '1.12 (xxLarge)': 98.56, '1.18 (xxxLarge)': 103.84, '1.29 (Accessibility M)': 113.52, '1.41 (Accessibility L)': 124.08,
  },
};

// Line Heights (px) — mode-dependent (some jump at xxLarge and Accessibility)
const LINE_HEIGHTS: Record<string, Record<TypographyMode, number>> = {
  'body-small': {
    'Standard (default)': 18, '0.88 (xSmall)': 18, '0.92 (Small)': 18, '0.97 (Medium)': 18,
    '1.06 (xLarge)': 18, '1.12 (xxLarge)': 26, '1.18 (xxxLarge)': 26, '1.29 (Accessibility M)': 28, '1.41 (Accessibility L)': 32,
  },
  'body-medium': {
    'Standard (default)': 20, '0.88 (xSmall)': 20, '0.92 (Small)': 20, '0.97 (Medium)': 20,
    '1.06 (xLarge)': 20, '1.12 (xxLarge)': 28, '1.18 (xxxLarge)': 28, '1.29 (Accessibility M)': 32, '1.41 (Accessibility L)': 36,
  },
  'body-large': {
    'Standard (default)': 24, '0.88 (xSmall)': 24, '0.92 (Small)': 24, '0.97 (Medium)': 24,
    '1.06 (xLarge)': 24, '1.12 (xxLarge)': 34, '1.18 (xxxLarge)': 34, '1.29 (Accessibility M)': 38, '1.41 (Accessibility L)': 44,
  },
  'body-xl': {
    'Standard (default)': 27, '0.88 (xSmall)': 27, '0.92 (Small)': 27, '0.97 (Medium)': 27,
    '1.06 (xLarge)': 27, '1.12 (xxLarge)': 38, '1.18 (xxxLarge)': 38, '1.29 (Accessibility M)': 44, '1.41 (Accessibility L)': 48,
  },
  'label-small': {
    'Standard (default)': 16, '0.88 (xSmall)': 16, '0.92 (Small)': 16, '0.97 (Medium)': 16,
    '1.06 (xLarge)': 16, '1.12 (xxLarge)': 22, '1.18 (xxxLarge)': 16, '1.29 (Accessibility M)': 26, '1.41 (Accessibility L)': 30,
  },
  'label-medium': {
    'Standard (default)': 18, '0.88 (xSmall)': 18, '0.92 (Small)': 18, '0.97 (Medium)': 18,
    '1.06 (xLarge)': 18, '1.12 (xxLarge)': 26, '1.18 (xxxLarge)': 18, '1.29 (Accessibility M)': 28, '1.41 (Accessibility L)': 32,
  },
  'label-large': {
    'Standard (default)': 20, '0.88 (xSmall)': 20, '0.92 (Small)': 20, '0.97 (Medium)': 20,
    '1.06 (xLarge)': 20, '1.12 (xxLarge)': 26, '1.18 (xxxLarge)': 20, '1.29 (Accessibility M)': 28, '1.41 (Accessibility L)': 30,
  },
  'link-small': {
    'Standard (default)': 18, '0.88 (xSmall)': 18, '0.92 (Small)': 18, '0.97 (Medium)': 18,
    '1.06 (xLarge)': 18, '1.12 (xxLarge)': 26, '1.18 (xxxLarge)': 18, '1.29 (Accessibility M)': 28, '1.41 (Accessibility L)': 32,
  },
  'link-medium': {
    'Standard (default)': 20, '0.88 (xSmall)': 20, '0.92 (Small)': 20, '0.97 (Medium)': 20,
    '1.06 (xLarge)': 20, '1.12 (xxLarge)': 28, '1.18 (xxxLarge)': 20, '1.29 (Accessibility M)': 32, '1.41 (Accessibility L)': 36,
  },
  'link-large': {
    'Standard (default)': 24, '0.88 (xSmall)': 24, '0.92 (Small)': 24, '0.97 (Medium)': 24,
    '1.06 (xLarge)': 24, '1.12 (xxLarge)': 28, '1.18 (xxxLarge)': 24, '1.29 (Accessibility M)': 32, '1.41 (Accessibility L)': 28,
  },
  'title-small': {
    'Standard (default)': 24, '0.88 (xSmall)': 24, '0.92 (Small)': 24, '0.97 (Medium)': 24,
    '1.06 (xLarge)': 24, '1.12 (xxLarge)': 34, '1.18 (xxxLarge)': 24, '1.29 (Accessibility M)': 38, '1.41 (Accessibility L)': 44,
  },
  'title-medium': {
    'Standard (default)': 24, '0.88 (xSmall)': 24, '0.92 (Small)': 24, '0.97 (Medium)': 24,
    '1.06 (xLarge)': 24, '1.12 (xxLarge)': 34, '1.18 (xxxLarge)': 24, '1.29 (Accessibility M)': 38, '1.41 (Accessibility L)': 42,
  },
  'title-large': {
    'Standard (default)': 28, '0.88 (xSmall)': 28, '0.92 (Small)': 28, '0.97 (Medium)': 28,
    '1.06 (xLarge)': 28, '1.12 (xxLarge)': 36, '1.18 (xxxLarge)': 28, '1.29 (Accessibility M)': 40, '1.41 (Accessibility L)': 36,
  },
  'headline-small': {
    'Standard (default)': 32, '0.88 (xSmall)': 32, '0.92 (Small)': 32, '0.97 (Medium)': 32,
    '1.06 (xLarge)': 32, '1.12 (xxLarge)': 44, '1.18 (xxxLarge)': 32, '1.29 (Accessibility M)': 50, '1.41 (Accessibility L)': 56,
  },
  'headline-medium': {
    'Standard (default)': 36, '0.88 (xSmall)': 36, '0.92 (Small)': 36, '0.97 (Medium)': 36,
    '1.06 (xLarge)': 36, '1.12 (xxLarge)': 50, '1.18 (xxxLarge)': 36, '1.29 (Accessibility M)': 58, '1.41 (Accessibility L)': 64,
  },
  'headline-large': {
    'Standard (default)': 44, '0.88 (xSmall)': 44, '0.92 (Small)': 44, '0.97 (Medium)': 44,
    '1.06 (xLarge)': 44, '1.12 (xxLarge)': 60, '1.18 (xxxLarge)': 44, '1.29 (Accessibility M)': 70, '1.41 (Accessibility L)': 80,
  },
  'display-small': {
    'Standard (default)': 52, '0.88 (xSmall)': 52, '0.92 (Small)': 52, '0.97 (Medium)': 52,
    '1.06 (xLarge)': 52, '1.12 (xxLarge)': 72, '1.18 (xxxLarge)': 52, '1.29 (Accessibility M)': 82, '1.41 (Accessibility L)': 92,
  },
  'display-medium': {
    'Standard (default)': 72, '0.88 (xSmall)': 72, '0.92 (Small)': 72, '0.97 (Medium)': 72,
    '1.06 (xLarge)': 72, '1.12 (xxLarge)': 99, '1.18 (xxxLarge)': 72, '1.29 (Accessibility M)': 114, '1.41 (Accessibility L)': 126,
  },
  'display-large': {
    'Standard (default)': 96, '0.88 (xSmall)': 96, '0.92 (Small)': 96, '0.97 (Medium)': 96,
    '1.06 (xLarge)': 96, '1.12 (xxLarge)': 120, '1.18 (xxxLarge)': 96, '1.29 (Accessibility M)': 136, '1.41 (Accessibility L)': 202,
  },
};

export const SCALE_ORDER = [
  'label-small', 'label-medium', 'label-large',
  'body-small', 'body-medium', 'body-large', 'body-xl',
  'link-small', 'link-medium', 'link-large',
  'title-small', 'title-medium', 'title-large',
  'headline-small', 'headline-medium', 'headline-large',
  'display-small', 'display-medium', 'display-large',
] as const;

export type ScaleKey = (typeof SCALE_ORDER)[number];

function roleOf(key: string): string {
  return key.split('-')[0] ?? 'body';
}

/** 16 Figma Dev-mode type nodes (links live in SCALE_ORDER but were not in this node set). Order: largest → smallest. */
export const FIGMA_TYPE_STYLE_NODES: { nodeId: string; key: ScaleKey }[] = [
  { nodeId: '8264:2467', key: 'display-large' },
  { nodeId: '8264:2476', key: 'display-medium' },
  { nodeId: '8264:2485', key: 'display-small' },
  { nodeId: '8264:2494', key: 'headline-large' },
  { nodeId: '8264:2503', key: 'headline-medium' },
  { nodeId: '8264:2512', key: 'headline-small' },
  { nodeId: '8264:2521', key: 'title-large' },
  { nodeId: '8264:2530', key: 'title-medium' },
  { nodeId: '8264:2539', key: 'title-small' },
  { nodeId: '8264:2548', key: 'label-large' },
  { nodeId: '8264:2557', key: 'label-medium' },
  { nodeId: '8264:2566', key: 'label-small' },
  { nodeId: '8264:2575', key: 'body-xl' },
  { nodeId: '8264:2584', key: 'body-large' },
  { nodeId: '8264:2593', key: 'body-medium' },
  { nodeId: '8264:2602', key: 'body-small' },
];

function toModeRecord<T extends string | number>(fn: (mode: TypographyMode) => T): Record<TypographyMode, T> {
  return TYPOGRAPHY_MODES.reduce((acc, mode) => {
    acc[mode] = fn(mode);
    return acc;
  }, {} as Record<TypographyMode, T>);
}

export const typographyTokens: TypographyToken[] = [
  // Font Family
  {
    category: 'Font Family',
    name: 'Font Name',
    variable: '--font-family-font-name',
    values: toModeRecord(() => FONT_NAME),
  },

  // Weights (numeric — matches fonts.css @font-face)
  ...(['regular', 'book', 'medium', 'bold', 'heavy'] as const).map((w) => ({
    category: 'Weight' as const,
    name: `Weight / ${w.charAt(0).toUpperCase()}${w.slice(1)}`,
    variable: `--weight-${w}`,
    values: toModeRecord(() => WEIGHTS_MAP[w]),
  })),

  // Font sizes
  ...SCALE_ORDER.map((key) => ({
    category: 'Font Size' as const,
    name: `Font Size / ${key.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' / ')}`,
    variable: `--font-size-${key}`,
    values: toModeRecord((mode) => `${FONT_SIZES[key][mode]}px`),
  })),

  // Line heights
  ...SCALE_ORDER.map((key) => ({
    category: 'Line Height' as const,
    name: `Line Height / ${key.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' / ')}`,
    variable: `--line-height-${key}`,
    values: toModeRecord((mode) => `${LINE_HEIGHTS[key][mode]}px`),
  })),

  // Letter spacing (documented category tokens; display → headline, link → body)
  ...(['headline', 'title', 'body', 'label'] as const).map((role) => ({
    category: 'Letter Spacing' as const,
    name: `Letter Spacing / ${role.charAt(0).toUpperCase()}${role.slice(1)}`,
    variable: `--letter-spacing-${role}`,
    values: toModeRecord(() => LETTER_SPACING_BY_ROLE[role].value),
  })),
];

// Also expose scale info for the "type sample" display
export const TYPE_SAMPLES = SCALE_ORDER.map((key) => {
  const role = roleOf(key);
  const weightName = ROLE_WEIGHT[role] ?? 'regular';
  const tracking = LETTER_SPACING_BY_ROLE[role] ?? LETTER_SPACING_BY_ROLE.body;
  return {
    key,
    name: key.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' / '),
    sizes: FONT_SIZES[key],
    lineHeights: LINE_HEIGHTS[key],
    weightName,
    weight: WEIGHTS_MAP[weightName],
    weightVariable: `--weight-${weightName}`,
    letterSpacing: tracking.value,
    letterSpacingVariable: tracking.variable,
  };
});

export const typography = {
  modes: TYPOGRAPHY_MODES,
  tokens: typographyTokens,
  samples: TYPE_SAMPLES,
};
