# MLDS 4.0 Foundation Setup - Complete ✅

## Overview

The MLDS 4.0 design foundation has been properly structured in Storybook with **3 collections** (Primitives, Tokens, Typography) and **Light/Dark modes** for Tokens, following the Wix Storybook pattern.

## Structure

### File Organization

```
src/foundation/
├── primitives.ts          # Primitives Collection - base design tokens
├── tokens.ts              # Tokens Collection - semantic tokens (Light & Dark modes)
├── typography.ts          # Typography Collection - font scales and families
├── Foundation.stories.tsx # Storybook stories for all collections
├── Foundation.module.css   # Styling for foundation pages
└── index.ts               # Exports all collections
```

## Collections

### 1. **Primitives** (`primitives.ts`)
Base design tokens - the lowest level values used to build semantic tokens:
- **Colors**: Black, White
- **Spacing**: 0px → 56px (8 scales)
- **Border Radius**: 0px → 360px (8 scales)
- **Opacity**: 0 → 1 (8 levels)

### 2. **Tokens** (`tokens.ts`)
Semantic tokens built from Primitives with **Light and Dark modes**:
- **Content Typography**: Primary, Secondary, Tertiary, Disabled
- **Semantic**: Positive (#006657 light, #00A878 dark), Negative (#ce293f light, #FF6B6B dark)
- **Background**: Accent Neutral Transparent, Accent Primary
- **Border**: Primary

**Light Mode Colors**:
```typescript
contentTypographyPrimary: '#000000'
contentTypographySecondary: 'rgba(0, 0, 0, 0.64)'
contentSemanticsPositive: '#006657'
contentSemanticsNegative: '#ce293f'
```

**Dark Mode Colors**:
```typescript
contentTypographyPrimary: '#FFFFFF'
contentTypographySecondary: 'rgba(255, 255, 255, 0.64)'
contentSemanticsPositive: '#00A878'
contentSemanticsNegative: '#FF6B6B'
```

### 3. **Typography** (`typography.ts`)
Font families, scales, weights, line heights, and letter spacing:
- **Font Family**: Baton Turbo (primary)
- **Font Weights**: Regular (400), Medium (600)
- **Scales** (6 total):
  - Headline / Small: 24px, 600 weight, 32px line height
  - Title / Small: 16px, 600 weight, 24px line height
  - Body / Large: 16px, 400 weight, 24px line height
  - Body / Medium: 14px, 400 weight, 20px line height
  - Label / Large: 14px, 600 weight, 20px line height
  - Label / Medium: 12px, 600 weight, 18px line height

## Storybook Stories

### **Foundation > Primitives**
Displays all base design tokens organized by category:
- Colors (2)
- Spacing (8 scales)
- Border Radius (8 scales)
- Opacity (8 levels)

### **Foundation > Tokens** ⭐
Interactive story with **Light/Dark mode toggle buttons** at the top:
- Switch between Light and Dark modes
- See all semantic tokens update in real-time
- Organized by category:
  - Content Typography (4 levels)
  - Semantic (2: Positive, Negative)
  - Background & Border (3)

### **Foundation > Typography**
Displays all typography information:
- Font Families
- Typography Scales with full specifications

## Accessing the Foundation

In Storybook, navigate to:
```
Foundation
├── Primitives
├── Tokens  ← Interactive with Light/Dark toggle
└── Typography
```

## Usage in Components

Import and use the foundation tokens in your components:

```typescript
import { primitives, tokens, typography } from '@/foundation';

// Use in component code
const cardStyle = {
  backgroundColor: tokens.light.contentTypographyPrimary,
  fontSize: `${typography.scales.bodyLarge.fontSize}px`,
  padding: `${primitives.spacing[16]}`,
  borderRadius: primitives.radius[8],
};
```

Or use TypeScript types for better IDE support:

```typescript
import type { TypographyScale } from '@/foundation/typography';

const myScale: TypographyScale = typography.scales.bodyLarge;
```

## Next Steps

1. ✅ Review the foundation stories in Storybook
2. ✅ Verify Light/Dark mode tokens in the Tokens story
3. Integrate tokens into existing components
4. Update component stories to use foundation tokens
5. Consider adding CSS custom properties for global use
6. Plan dark mode implementation across the entire design system

## Notes

- Light/Dark modes are currently defined for Tokens collection only
- Primitives and Typography are shared across both modes
- The Tokens story includes an interactive toggle to preview both modes
- All token values are organized in TypeScript for type safety and IDE support
