# MLDS 4.0 Design Foundation

This document describes the design tokens and foundation setup for the MLDS 4.0 design system in Storybook.

## Overview

Design tokens are extracted from the MLDS 4.0 Figma file and are available as CSS custom properties (variables) throughout the Storybook.

## Token Files

All tokens are organized in `src/tokens/`:

- **`colors.css`** - Color tokens (content, semantic, background, borders)
- **`typography.css`** - Typography scales (font family, sizes, weights, line heights, letter spacing)
- **`spacing.css`** - Spacing scale (0px to 56px)
- **`effects.css`** - Border radius and effects (blur)
- **`index.css`** - Main entry point that imports all token files

The tokens are globally imported in `.storybook/preview.tsx` and are available in all stories.

## Using Design Tokens

### CSS Variables

All tokens are available as CSS custom properties (variables):

```css
/* Colors */
var(--content-typography-primary)      /* #000000 */
var(--content-typography-secondary)    /* rgba(0,0,0,0.64) */
var(--content-typography-tertiary)     /* rgba(0,0,0,0.48) */
var(--content-typography-disabled)     /* rgba(0,0,0,0.32) */
var(--content-semantics-positive)      /* #006657 */
var(--content-semantics-negative)      /* #ce293f */
var(--background-accent-neutral-transparent) /* rgba(0,0,0,0.06) */
var(--border-primary)                  /* rgba(0,0,0,0.08) */

/* Typography */
var(--font-family-primary)              /* 'Baton Turbo', sans-serif */
var(--font-size-headline-small)         /* 24px */
var(--font-size-title-small)            /* 16px */
var(--font-size-body-large)             /* 16px */
var(--font-size-body-medium)            /* 14px */
var(--font-size-label-large)            /* 14px */
var(--font-size-label-medium)           /* 12px */

/* Spacing */
var(--spacing-0)                        /* 0px */
var(--spacing-4)                        /* 4px */
var(--spacing-6)                        /* 6px */
var(--spacing-8)                        /* 8px */
var(--spacing-16)                       /* 16px */
var(--spacing-24)                       /* 24px */
var(--spacing-32)                       /* 32px */
var(--spacing-56)                       /* 56px */

/* Effects */
var(--radius-full)                      /* 360px */
var(--radius-lg)                        /* 32px */
var(--radius-md)                        /* 8px */
var(--blur-medium)                      /* blur(20px) */
```

### Example Usage in Components

```tsx
function MyComponent() {
  return (
    <div style={{
      color: 'var(--content-typography-primary)',
      fontSize: 'var(--font-size-body-large)',
      padding: 'var(--spacing-16)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid var(--border-primary)`
    }}>
      Hello Design System
    </div>
  );
}
```

## Foundation Stories

The Foundation stories showcase all available tokens:

- **Foundation / Colors** - Visual display of all color tokens
- **Foundation / Typography** - All typography scales with specifications
- **Foundation / Spacing** - Visual spacing scale

Navigate to these stories in Storybook to see the foundation in action.

## Adding New Tokens

To add new tokens:

1. Identify the token type (color, typography, spacing, etc.)
2. Add it to the appropriate CSS file in `src/tokens/`
3. Use the naming convention: `--category-type-variant` (e.g., `--spacing-12`, `--color-success`)
4. The token will be immediately available in all stories

## Syncing with Figma

To update tokens from Figma:

1. Go to the [MLDS 4.0 Figma file](https://www.figma.com/design/SyfKKZyUM3cW4IunxIk8Bj/MLDS-4.0)
2. Check the design tokens page for any updates
3. Update the corresponding token files
4. Push changes to the repository

## Best Practices

- **Always use tokens** instead of hard-coded values
- **Maintain consistency** by reusing existing tokens
- **Update tokens first** before creating new component styles
- **Document token usage** in component stories when necessary
- **Test across light/dark modes** when applicable (future enhancement)

## Future Enhancements

- [ ] Dark mode token variants
- [ ] Design token documentation page
- [ ] Figma → Storybook token sync automation
- [ ] TypeScript token types for better IDE support
- [ ] Token version history tracking
