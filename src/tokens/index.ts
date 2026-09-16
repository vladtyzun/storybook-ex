/**
 * MLDS 4.0 Design Tokens
 * Auto-generated from Figma design file
 * Use CSS variables in component styles instead of importing these constants
 */

export const colors = {
  // Content Typography
  contentTypographyPrimary: 'var(--content-typography-primary)',
  contentTypographySecondary: 'var(--content-typography-secondary)',
  contentTypographyTertiary: 'var(--content-typography-tertiary)',
  contentTypographyDisabled: 'var(--content-typography-disabled)',

  // Semantic
  contentSemanticsPositive: 'var(--content-semantics-positive)',
  contentSemanticsNegative: 'var(--content-semantics-negative)',

  // Background
  backgroundAccentNeutralTransparent: 'var(--background-accent-neutral-transparent)',

  // Borders
  borderPrimary: 'var(--border-primary)',
};

export const typography = {
  fontFamily: {
    primary: 'var(--font-family-primary)',
  },
  fontSize: {
    headlineSmall: 'var(--font-size-headline-small)',
    titleSmall: 'var(--font-size-title-small)',
    bodyLarge: 'var(--font-size-body-large)',
    bodyMedium: 'var(--font-size-body-medium)',
    labelLarge: 'var(--font-size-label-large)',
    labelMedium: 'var(--font-size-label-medium)',
  },
  fontWeight: {
    regular: 'var(--weight-regular)',
    book: 'var(--weight-book)',
    medium: 'var(--weight-medium)',
    bold: 'var(--weight-bold)',
    heavy: 'var(--weight-heavy)',
  },
  lineHeight: {
    headlineSmall: 'var(--line-height-headline-small)',
    titleSmall: 'var(--line-height-title-small)',
    bodyLarge: 'var(--line-height-body-large)',
    bodyMedium: 'var(--line-height-body-medium)',
    labelLarge: 'var(--line-height-label-large)',
    labelMedium: 'var(--line-height-label-medium)',
  },
  letterSpacing: {
    headline: 'var(--letter-spacing-headline)',
    title: 'var(--letter-spacing-title)',
    body: 'var(--letter-spacing-body)',
    label: 'var(--letter-spacing-label)',
  },
};

export const spacing = {
  0: 'var(--spacing-0)',
  4: 'var(--spacing-4)',
  6: 'var(--spacing-6)',
  8: 'var(--spacing-8)',
  16: 'var(--spacing-16)',
  24: 'var(--spacing-24)',
  32: 'var(--spacing-32)',
  56: 'var(--spacing-56)',
};

export const effects = {
  radius: {
    full: 'var(--radius-full)',
    lg: 'var(--radius-lg)',
    md: 'var(--radius-md)',
  },
  blur: {
    medium: 'var(--blur-medium)',
  },
};

export default {
  colors,
  typography,
  spacing,
  effects,
};
