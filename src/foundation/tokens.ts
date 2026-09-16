/**
 * MLDS 4.0 Tokens Collection
 * Semantic tokens with Light Mode and Dark Mode aliases
 */

export interface SemanticToken {
  name: string;
  variable: string;
  category: string;
  lightAlias: string;
  darkAlias: string;
}

export const semanticTokens: SemanticToken[] = [
  // Content — Typography
  { category: 'Content / Typography', name: 'Content Primary', variable: '--content-typography-content-primary', lightAlias: '--neutrals-neutral-1000', darkAlias: '--neutrals-neutral-0' },
  { category: 'Content / Typography', name: 'Content Secondary', variable: '--content-typography-content-secondary', lightAlias: '--neutrals-transparent-light-64', darkAlias: '--neutrals-transparent-dark-72' },
  { category: 'Content / Typography', name: 'Content Tertiary', variable: '--content-typography-content-tertiary', lightAlias: '--neutrals-transparent-light-48', darkAlias: '--neutrals-transparent-dark-60' },
  { category: 'Content / Typography', name: 'Content Disabled', variable: '--content-typography-content-disabled', lightAlias: '--neutrals-transparent-light-32', darkAlias: '--neutrals-transparent-dark-48' },
  { category: 'Content / Typography', name: 'Content Primary Alt', variable: '--content-typography-content-primary-alt', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-1000' },
  { category: 'Content / Typography', name: 'Content Secondary Alt', variable: '--content-typography-secondary-alt', lightAlias: '--neutrals-transparent-dark-72', darkAlias: '--neutrals-transparent-light-64' },

  // Content — Semantics
  { category: 'Content / Semantics', name: 'Content Positive', variable: '--content-semantics-content-positive', lightAlias: '--teal-800', darkAlias: '--teal-500' },
  { category: 'Content / Semantics', name: 'Content Warning', variable: '--content-semantics-content-warning', lightAlias: '--yellow-700', darkAlias: '--yellow-400' },
  { category: 'Content / Semantics', name: 'Content Negative', variable: '--content-semantics-content-negative', lightAlias: '--red-600', darkAlias: '--red-400' },
  { category: 'Content / Semantics', name: 'Content Membership', variable: '--content-semantics-content-membership', lightAlias: '--blue-700', darkAlias: '--blue-300' },
  { category: 'Content / Semantics', name: 'Content Branded', variable: '--content-semantics-content-branded', lightAlias: '--teal-600 · Primary', darkAlias: '--teal-500' },
  { category: 'Content / Semantics', name: 'Content Black', variable: '--content-semantics-content-black', lightAlias: '--neutrals-neutral-1000', darkAlias: '--neutrals-neutral-1000' },
  { category: 'Content / Semantics', name: 'Content Black Secondary', variable: '--content-semantics-content-black-secondary', lightAlias: '--neutrals-transparent-light-64', darkAlias: '--neutrals-transparent-light-64' },
  { category: 'Content / Semantics', name: 'Content White', variable: '--content-semantics-content-white', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-0' },
  { category: 'Content / Semantics', name: 'Content White Secondary', variable: '--content-semantics-content-white-secondary', lightAlias: '--neutrals-transparent-dark-72', darkAlias: '--neutrals-transparent-dark-72' },

  // Background — Main
  { category: 'Background / Main', name: 'Background Primary', variable: '--background-main-background-primary', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-1000' },
  { category: 'Background / Main', name: 'Background Secondary', variable: '--background-main-background-secondary', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-950' },
  { category: 'Background / Main', name: 'Background Tertiary', variable: '--background-main-background-tertiary', lightAlias: '--neutrals-neutral-100', darkAlias: '--neutrals-neutral-900' },
  { category: 'Background / Main', name: 'Background Success', variable: '--background-main-background-success', lightAlias: '--teal-600 · Primary', darkAlias: '--teal-500' },
  { category: 'Background / Main', name: 'Background Negative', variable: '--background-main-background-negative', lightAlias: '--red-700', darkAlias: '--red-600' },
  { category: 'Background / Main', name: 'Background Primary Alt', variable: '--background-main-background-primary-alt', lightAlias: '--neutrals-neutral-1000', darkAlias: '--neutrals-neutral-0' },
  { category: 'Background / Main', name: 'Background Secondary Alt', variable: '--background-main-background-secondary-alt', lightAlias: '--neutrals-neutral-800', darkAlias: '--neutrals-neutral-200' },
  { category: 'Background / Main', name: 'Background Black', variable: '--background-main-background-black', lightAlias: '--neutrals-neutral-1000', darkAlias: '--neutrals-neutral-1000' },
  { category: 'Background / Main', name: 'Background Black Secondary', variable: '--background-main-background-black-secondary', lightAlias: '--neutrals-neutral-900', darkAlias: '--neutrals-neutral-900' },
  { category: 'Background / Main', name: 'Background White Primary', variable: '--background-main-background-white-primary', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-0' },
  { category: 'Background / Main', name: 'Background White Secondary', variable: '--background-main-background-white-secondary', lightAlias: '--neutrals-neutral-50', darkAlias: '--neutrals-neutral-50' },

  // Background — Accent
  { category: 'Background / Accent', name: 'Background Neutral', variable: '--background-accent-background-neutral', lightAlias: '--neutrals-neutral-300', darkAlias: '--neutrals-neutral-900' },
  { category: 'Background / Accent', name: 'Background Neutral Transparent', variable: '--background-accent-background-neutral-transparent', lightAlias: '--neutrals-transparent-light-6', darkAlias: '--neutrals-transparent-dark-16' },
  { category: 'Background / Accent', name: 'Background Neutral Media', variable: '--background-accent-background-neutral-media', lightAlias: '--neutrals-transparent-light-32', darkAlias: '--neutrals-transparent-light-32' },
  { category: 'Background / Accent', name: 'Background Accent', variable: '--background-accent-background-accent', lightAlias: '--blue-100', darkAlias: '--blue-a20' },
  { category: 'Background / Accent', name: 'Background Positive', variable: '--background-accent-background-positive', lightAlias: '--teal-100', darkAlias: '--teal-a20' },
  { category: 'Background / Accent', name: 'Background Warning', variable: '--background-accent-background-warning', lightAlias: '--yellow-100', darkAlias: '--yellow-a30' },
  { category: 'Background / Accent', name: 'Background Negative', variable: '--background-accent-background-negative', lightAlias: '--red-100', darkAlias: '--red-a30' },
  { category: 'Background / Accent', name: 'Background Purple', variable: '--background-accent-background-purple', lightAlias: '--purple-100', darkAlias: '--purple-a20' },

  // Border
  { category: 'Border', name: 'Border Primary', variable: '--border-border-primary', lightAlias: '--neutrals-transparent-light-8', darkAlias: '--neutrals-transparent-dark-16' },
  { category: 'Border', name: 'Border Inherit', variable: '--border-border-inherit', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-1000' },
  { category: 'Border', name: 'Border Inverted', variable: '--border-border-inverted', lightAlias: '--neutrals-neutral-1000', darkAlias: '--neutrals-neutral-0' },
  { category: 'Border', name: 'Border Positive', variable: '--border-border-positive', lightAlias: '--teal-700', darkAlias: '--teal-300' },
  { category: 'Border', name: 'Border Positive Subtle', variable: '--border-border-positive-subtle', lightAlias: '--teal-a30', darkAlias: '--teal-a30' },
  { category: 'Border', name: 'Border Warning', variable: '--border-border-warning', lightAlias: '--yellow-700', darkAlias: '--yellow-300' },
  { category: 'Border', name: 'Border Warning Subtle', variable: '--border-border-warning-subtle', lightAlias: '--yellow-a40', darkAlias: '--yellow-a30' },
  { category: 'Border', name: 'Border Negative', variable: '--border-border-negative', lightAlias: '--red-600', darkAlias: '--red-300' },
  { category: 'Border', name: 'Border Negative Subtle', variable: '--border-border-negative-subtle', lightAlias: '--red-a30', darkAlias: '--red-a40' },
  { category: 'Border', name: 'Border Accent', variable: '--border-border-accent', lightAlias: '--blue-500 · Primary', darkAlias: '--blue-300' },
  { category: 'Border', name: 'Border Accent Subtle', variable: '--border-border-accent-subtle', lightAlias: '--blue-a30', darkAlias: '--blue-a30' },
  { category: 'Border', name: 'Border Purple', variable: '--border-border-purple', lightAlias: '--purple-500 · Primary', darkAlias: '--purple-400' },
  { category: 'Border', name: 'Border Purple Subtle', variable: '--border-border-purple-subtle', lightAlias: '--purple-a30', darkAlias: '--purple-a40' },
  { category: 'Border', name: 'Border Focus', variable: '--border-border-focus', lightAlias: '--neutrals-transparent-light-32', darkAlias: '--neutrals-transparent-dark-32' },

  // Contextual
  { category: 'Contextual', name: 'Light Blue', variable: '--contextual-light-blue', lightAlias: '--contextual-light-blue (primitive)', darkAlias: '--contextual-light-blue (primitive)' },
  { category: 'Contextual', name: 'Indigo', variable: '--contextual-indigo', lightAlias: '--contextual-indigo (primitive)', darkAlias: '--contextual-indigo (primitive)' },
  { category: 'Contextual', name: 'Yellow', variable: '--contextual-yellow', lightAlias: '--contextual-yellow (primitive)', darkAlias: '--contextual-yellow (primitive)' },
  { category: 'Contextual', name: 'Medium Teal', variable: '--contextual-medium-teal', lightAlias: '--contextual-medium-teal (primitive)', darkAlias: '--contextual-medium-teal (primitive)' },
  { category: 'Contextual', name: 'Periwinkle Blue', variable: '--contextual-periwinkle-blue', lightAlias: '--contextual-periwinkle-blue (primitive)', darkAlias: '--contextual-periwinkle-blue (primitive)' },
  { category: 'Contextual', name: 'Coral', variable: '--contextual-coral', lightAlias: '--contextual-coral (primitive)', darkAlias: '--contextual-coral (primitive)' },
  { category: 'Contextual', name: 'Purple', variable: '--contextual-purple', lightAlias: '--contextual-purple (primitive)', darkAlias: '--purple-400' },
  { category: 'Contextual', name: 'Blue', variable: '--contextual-blue', lightAlias: '--blue-500 · Primary', darkAlias: '--blue-300' },

  // Overlay
  { category: 'Overlay', name: 'Overlay Default', variable: '--overlay-overlay-default', lightAlias: '--neutrals-transparent-light-64', darkAlias: '--neutrals-transparent-light-64' },
  { category: 'Overlay', name: 'Overlay Default Alt', variable: '--overlay-overlay-default-alt', lightAlias: '--neutrals-transparent-dark-60', darkAlias: '--neutrals-transparent-light-64' },
  { category: 'Overlay', name: 'Overlay Surface Light', variable: '--overlay-overlay-surface-light', lightAlias: '--neutrals-neutral-0', darkAlias: '--neutrals-neutral-800' },
  { category: 'Overlay', name: 'Overlay Surface Dark', variable: '--overlay-overlay-surface-dark', lightAlias: '--neutrals-neutral-800', darkAlias: '--neutrals-neutral-0' },
  { category: 'Overlay', name: 'Overlay Hover State', variable: '--overlay-overlay-hover-state', lightAlias: '--neutrals-transparent-light-4', darkAlias: '--neutrals-transparent-dark-8' },
  { category: 'Overlay', name: 'Overlay Pressed State', variable: '--overlay-overlay-pressed-state', lightAlias: '--neutrals-transparent-light-8', darkAlias: '--neutrals-transparent-dark-16' },
  { category: 'Overlay', name: 'Overlay Hover Alt State', variable: '--overlay-overlay-hover-alt-state', lightAlias: '--neutrals-transparent-dark-8', darkAlias: '--neutrals-transparent-light-4' },
  { category: 'Overlay', name: 'Overlay Pressed Alt State', variable: '--overlay-overlay-pressed-alt-state', lightAlias: '--neutrals-transparent-dark-16', darkAlias: '--neutrals-transparent-light-16' },

  // Web-ALT
  { category: 'Web-ALT', name: 'Light Blue', variable: '--web-alt-light-blue', lightAlias: '--web-alt-light-blue (primitive)', darkAlias: '--web-alt-light-blue (primitive)' },
  { category: 'Web-ALT', name: 'Dark Blue', variable: '--web-alt-dark-blue', lightAlias: '--web-alt-dark-blue (primitive)', darkAlias: '--web-alt-dark-blue (primitive)' },
  { category: 'Web-ALT', name: 'Green', variable: '--web-alt-green', lightAlias: '--web-alt-green (primitive)', darkAlias: '--web-alt-green (primitive)' },
  { category: 'Web-ALT', name: 'Purple', variable: '--web-alt-purple', lightAlias: '--web-alt-purple (primitive)', darkAlias: '--web-alt-purple (primitive)' },
  { category: 'Web-ALT', name: 'Pink', variable: '--web-alt-pink', lightAlias: '--web-alt-pink (primitive)', darkAlias: '--web-alt-pink (primitive)' },
  { category: 'Web-ALT', name: 'Yellow', variable: '--web-alt-yellow', lightAlias: '--web-alt-yellow (primitive)', darkAlias: '--web-alt-yellow (primitive)' },

  // Membership
  { category: 'Membership', name: 'Membership 900', variable: '--membership-900', lightAlias: '--blue-900', darkAlias: '--blue-100' },
  { category: 'Membership', name: 'Membership 800', variable: '--membership-800', lightAlias: '--blue-800', darkAlias: '--blue-200' },
  { category: 'Membership', name: 'Membership 700', variable: '--membership-700', lightAlias: '--blue-700', darkAlias: '--blue-300' },
  { category: 'Membership', name: 'Membership 600', variable: '--membership-600', lightAlias: '--blue-600', darkAlias: '--blue-400' },
  { category: 'Membership', name: 'Membership Primary', variable: '--membership-primary', lightAlias: '--blue-500 · Primary', darkAlias: '--blue-500 · Primary' },
  { category: 'Membership', name: 'Membership 400', variable: '--membership-400', lightAlias: '--blue-400', darkAlias: '--blue-600' },
  { category: 'Membership', name: 'Membership 300', variable: '--membership-300', lightAlias: '--blue-300', darkAlias: '--blue-700' },
  { category: 'Membership', name: 'Membership 200', variable: '--membership-200', lightAlias: '--blue-200', darkAlias: '--blue-800' },
  { category: 'Membership', name: 'Membership 100', variable: '--membership-100', lightAlias: '--blue-100', darkAlias: '--blue-900' },
];
