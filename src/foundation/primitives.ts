/**
 * MLDS 4.0 Primitives Collection
 * All primitive variables from Figma (Mode 1)
 */

export interface PrimitiveToken {
  name: string;
  variable: string;
  value: string;
  category: string;
}

export const primitives: PrimitiveToken[] = [
  // Teal
  { category: 'Teal', name: 'Teal / 100', variable: '--teal-100', value: 'rgb(225, 254, 250)' },
  { category: 'Teal', name: 'Teal / 200', variable: '--teal-200', value: 'rgb(206, 253, 246)' },
  { category: 'Teal', name: 'Teal / 300', variable: '--teal-300', value: 'rgb(178, 252, 241)' },
  { category: 'Teal', name: 'Teal / 400', variable: '--teal-400', value: 'rgb(118, 249, 229)' },
  { category: 'Teal', name: 'Teal / 500', variable: '--teal-500', value: 'rgb(51, 246, 216)' },
  { category: 'Teal', name: 'Teal / 600 · Primary', variable: '--teal-600', value: 'rgb(0, 229, 196)' },
  { category: 'Teal', name: 'Teal / 700', variable: '--teal-700', value: 'rgb(0, 184, 157)' },
  { category: 'Teal', name: 'Teal / 800', variable: '--teal-800', value: 'rgb(0, 143, 122)' },
  { category: 'Teal', name: 'Teal / 900', variable: '--teal-900', value: 'rgb(0, 102, 87)' },
  { category: 'Teal', name: 'Teal / 1000', variable: '--teal-1000', value: 'rgb(7, 44, 40)' },
  { category: 'Teal', name: 'Teal / A90', variable: '--teal-a90', value: 'rgba(0, 229, 196, 0.9)' },
  { category: 'Teal', name: 'Teal / A80', variable: '--teal-a80', value: 'rgba(0, 229, 196, 0.8)' },
  { category: 'Teal', name: 'Teal / A70', variable: '--teal-a70', value: 'rgba(0, 229, 196, 0.7)' },
  { category: 'Teal', name: 'Teal / A60', variable: '--teal-a60', value: 'rgba(0, 229, 196, 0.6)' },
  { category: 'Teal', name: 'Teal / A50', variable: '--teal-a50', value: 'rgba(0, 229, 196, 0.5)' },
  { category: 'Teal', name: 'Teal / A40', variable: '--teal-a40', value: 'rgba(0, 229, 196, 0.4)' },
  { category: 'Teal', name: 'Teal / A30', variable: '--teal-a30', value: 'rgba(0, 229, 196, 0.3)' },
  { category: 'Teal', name: 'Teal / A20', variable: '--teal-a20', value: 'rgba(0, 229, 196, 0.2)' },
  { category: 'Teal', name: 'Teal / A10', variable: '--teal-a10', value: 'rgba(0, 229, 196, 0.1)' },
  { category: 'Teal', name: 'Teal / A0', variable: '--teal-a0', value: 'rgba(0, 229, 196, 0)' },

  // Blue
  { category: 'Blue', name: 'Blue / 100', variable: '--blue-100', value: 'rgb(235, 243, 255)' },
  { category: 'Blue', name: 'Blue / 200', variable: '--blue-200', value: 'rgb(194, 220, 255)' },
  { category: 'Blue', name: 'Blue / 300', variable: '--blue-300', value: 'rgb(134, 185, 255)' },
  { category: 'Blue', name: 'Blue / 400', variable: '--blue-400', value: 'rgb(93, 161, 255)' },
  { category: 'Blue', name: 'Blue / 500 · Primary', variable: '--blue-500', value: 'rgb(53, 138, 255)' },
  { category: 'Blue', name: 'Blue / 600', variable: '--blue-600', value: 'rgb(42, 111, 206)' },
  { category: 'Blue', name: 'Blue / 700', variable: '--blue-700', value: 'rgb(32, 85, 158)' },
  { category: 'Blue', name: 'Blue / 800', variable: '--blue-800', value: 'rgb(21, 58, 109)' },
  { category: 'Blue', name: 'Blue / 900', variable: '--blue-900', value: 'rgb(11, 32, 61)' },
  { category: 'Blue', name: 'Blue / A90', variable: '--blue-a90', value: 'rgba(53, 138, 255, 0.9)' },
  { category: 'Blue', name: 'Blue / A80', variable: '--blue-a80', value: 'rgba(53, 138, 255, 0.8)' },
  { category: 'Blue', name: 'Blue / A70', variable: '--blue-a70', value: 'rgba(53, 138, 255, 0.7)' },
  { category: 'Blue', name: 'Blue / A60', variable: '--blue-a60', value: 'rgba(53, 138, 255, 0.6)' },
  { category: 'Blue', name: 'Blue / A50', variable: '--blue-a50', value: 'rgba(53, 138, 255, 0.5)' },
  { category: 'Blue', name: 'Blue / A40', variable: '--blue-a40', value: 'rgba(53, 138, 255, 0.4)' },
  { category: 'Blue', name: 'Blue / A30', variable: '--blue-a30', value: 'rgba(53, 138, 255, 0.3)' },
  { category: 'Blue', name: 'Blue / A20', variable: '--blue-a20', value: 'rgba(53, 138, 255, 0.2)' },
  { category: 'Blue', name: 'Blue / A10', variable: '--blue-a10', value: 'rgba(53, 138, 255, 0.1)' },
  { category: 'Blue', name: 'Blue / A0', variable: '--blue-a0', value: 'rgba(53, 138, 255, 0)' },

  // Purple
  { category: 'Purple', name: 'Purple / 100', variable: '--purple-100', value: 'rgb(241, 232, 252)' },
  { category: 'Purple', name: 'Purple / 200', variable: '--purple-200', value: 'rgb(227, 209, 250)' },
  { category: 'Purple', name: 'Purple / 300', variable: '--purple-300', value: 'rgb(200, 162, 245)' },
  { category: 'Purple', name: 'Purple / 400', variable: '--purple-400', value: 'rgb(158, 93, 238)' },
  { category: 'Purple', name: 'Purple / 500 · Primary', variable: '--purple-500', value: 'rgb(117, 23, 230)' },
  { category: 'Purple', name: 'Purple / 600', variable: '--purple-600', value: 'rgb(99, 20, 196)' },
  { category: 'Purple', name: 'Purple / 700', variable: '--purple-700', value: 'rgb(76, 15, 149)' },
  { category: 'Purple', name: 'Purple / 800', variable: '--purple-800', value: 'rgb(53, 10, 104)' },
  { category: 'Purple', name: 'Purple / 900', variable: '--purple-900', value: 'rgb(29, 6, 58)' },
  { category: 'Purple', name: 'Purple / A90', variable: '--purple-a90', value: 'rgba(117, 23, 230, 0.9)' },
  { category: 'Purple', name: 'Purple / A80', variable: '--purple-a80', value: 'rgba(117, 23, 230, 0.8)' },
  { category: 'Purple', name: 'Purple / A70', variable: '--purple-a70', value: 'rgba(117, 23, 230, 0.7)' },
  { category: 'Purple', name: 'Purple / A60', variable: '--purple-a60', value: 'rgba(117, 23, 230, 0.6)' },
  { category: 'Purple', name: 'Purple / A50', variable: '--purple-a50', value: 'rgba(117, 23, 230, 0.5)' },
  { category: 'Purple', name: 'Purple / A40', variable: '--purple-a40', value: 'rgba(117, 23, 230, 0.4)' },
  { category: 'Purple', name: 'Purple / A30', variable: '--purple-a30', value: 'rgba(117, 23, 230, 0.3)' },
  { category: 'Purple', name: 'Purple / A20', variable: '--purple-a20', value: 'rgba(117, 23, 230, 0.2)' },
  { category: 'Purple', name: 'Purple / A10', variable: '--purple-a10', value: 'rgba(117, 23, 230, 0.1)' },
  { category: 'Purple', name: 'Purple / A0', variable: '--purple-a0', value: 'rgba(117, 23, 230, 0)' },

  // Red
  { category: 'Red', name: 'Red / 100', variable: '--red-100', value: 'rgb(255, 235, 237)' },
  { category: 'Red', name: 'Red / 200', variable: '--red-200', value: 'rgb(255, 214, 220)' },
  { category: 'Red', name: 'Red / 300', variable: '--red-300', value: 'rgb(255, 173, 184)' },
  { category: 'Red', name: 'Red / 400', variable: '--red-400', value: 'rgb(255, 112, 131)' },
  { category: 'Red', name: 'Red / 500 · Primary', variable: '--red-500', value: 'rgb(255, 51, 78)' },
  { category: 'Red', name: 'Red / 600', variable: '--red-600', value: 'rgb(206, 41, 63)' },
  { category: 'Red', name: 'Red / 700', variable: '--red-700', value: 'rgb(157, 31, 47)' },
  { category: 'Red', name: 'Red / 800', variable: '--red-800', value: 'rgb(120, 22, 36)' },
  { category: 'Red', name: 'Red / 900', variable: '--red-900', value: 'rgb(84, 18, 27)' },
  { category: 'Red', name: 'Red / 1000', variable: '--red-1000', value: 'rgb(51, 0, 7)' },
  { category: 'Red', name: 'Red / A100', variable: '--red-a100', value: 'rgba(206, 41, 63, 0.9)' },
  { category: 'Red', name: 'Red / A90', variable: '--red-a90', value: 'rgba(206, 41, 63, 0.8)' },
  { category: 'Red', name: 'Red / A80', variable: '--red-a80', value: 'rgba(206, 41, 63, 0.7)' },
  { category: 'Red', name: 'Red / A70', variable: '--red-a70', value: 'rgba(206, 41, 63, 0.6)' },
  { category: 'Red', name: 'Red / A60', variable: '--red-a60', value: 'rgba(206, 41, 63, 0.5)' },
  { category: 'Red', name: 'Red / A50', variable: '--red-a50', value: 'rgba(206, 41, 63, 0.4)' },
  { category: 'Red', name: 'Red / A40', variable: '--red-a40', value: 'rgba(206, 41, 63, 0.3)' },
  { category: 'Red', name: 'Red / A30', variable: '--red-a30', value: 'rgba(206, 41, 63, 0.2)' },
  { category: 'Red', name: 'Red / A20', variable: '--red-a20', value: 'rgba(206, 41, 63, 0.1)' },
  { category: 'Red', name: 'Red / A10', variable: '--red-a10', value: 'rgba(206, 41, 63, 0.06)' },
  { category: 'Red', name: 'Red / A0', variable: '--red-a0', value: 'rgba(206, 41, 63, 0)' },

  // Yellow
  { category: 'Yellow', name: 'Yellow / 100', variable: '--yellow-100', value: 'rgb(255, 248, 204)' },
  { category: 'Yellow', name: 'Yellow / 200', variable: '--yellow-200', value: 'rgb(255, 248, 204)' },
  { category: 'Yellow', name: 'Yellow / 300', variable: '--yellow-300', value: 'rgb(255, 241, 153)' },
  { category: 'Yellow', name: 'Yellow / 400', variable: '--yellow-400', value: 'rgb(255, 235, 102)' },
  { category: 'Yellow', name: 'Yellow / 500 · Primary', variable: '--yellow-500', value: 'rgb(255, 225, 31)' },
  { category: 'Yellow', name: 'Yellow / 600', variable: '--yellow-600', value: 'rgb(218, 193, 27)' },
  { category: 'Yellow', name: 'Yellow / 700', variable: '--yellow-700', value: 'rgb(184, 159, 0)' },
  { category: 'Yellow', name: 'Yellow / 800', variable: '--yellow-800', value: 'rgb(122, 106, 0)' },
  { category: 'Yellow', name: 'Yellow / 900', variable: '--yellow-900', value: 'rgb(92, 80, 0)' },
  { category: 'Yellow', name: 'Yellow / 1000', variable: '--yellow-1000', value: 'rgb(51, 45, 6)' },
  { category: 'Yellow', name: 'Yellow / A100', variable: '--yellow-a100', value: 'rgba(218, 193, 27, 0.9)' },
  { category: 'Yellow', name: 'Yellow / A90', variable: '--yellow-a90', value: 'rgba(218, 193, 27, 0.8)' },
  { category: 'Yellow', name: 'Yellow / A80', variable: '--yellow-a80', value: 'rgba(218, 193, 27, 0.7)' },
  { category: 'Yellow', name: 'Yellow / A70', variable: '--yellow-a70', value: 'rgba(218, 193, 27, 0.6)' },
  { category: 'Yellow', name: 'Yellow / A60', variable: '--yellow-a60', value: 'rgba(218, 193, 27, 0.5)' },
  { category: 'Yellow', name: 'Yellow / A50', variable: '--yellow-a50', value: 'rgba(218, 193, 27, 0.4)' },
  { category: 'Yellow', name: 'Yellow / A40', variable: '--yellow-a40', value: 'rgba(218, 193, 27, 0.3)' },
  { category: 'Yellow', name: 'Yellow / A30', variable: '--yellow-a30', value: 'rgba(218, 193, 27, 0.2)' },
  { category: 'Yellow', name: 'Yellow / A20', variable: '--yellow-a20', value: 'rgba(218, 193, 27, 0.1)' },
  { category: 'Yellow', name: 'Yellow / A10', variable: '--yellow-a10', value: 'rgba(218, 193, 27, 0.06)' },
  { category: 'Yellow', name: 'Yellow / A0', variable: '--yellow-a0', value: 'rgba(218, 193, 27, 0)' },

  // Neutrals
  { category: 'Neutrals', name: 'Neutral / 0', variable: '--neutrals-neutral-0', value: 'rgb(255, 255, 255)' },
  { category: 'Neutrals', name: 'Neutral / 50', variable: '--neutrals-neutral-50', value: 'rgb(252, 252, 252)' },
  { category: 'Neutrals', name: 'Neutral / 100', variable: '--neutrals-neutral-100', value: 'rgb(246, 246, 246)' },
  { category: 'Neutrals', name: 'Neutral / 200', variable: '--neutrals-neutral-200', value: 'rgb(238, 238, 238)' },
  { category: 'Neutrals', name: 'Neutral / 300', variable: '--neutrals-neutral-300', value: 'rgb(226, 226, 226)' },
  { category: 'Neutrals', name: 'Neutral / 400', variable: '--neutrals-neutral-400', value: 'rgb(199, 199, 199)' },
  { category: 'Neutrals', name: 'Neutral / 700', variable: '--neutrals-neutral-700', value: 'rgb(80, 80, 80)' },
  { category: 'Neutrals', name: 'Neutral / 800', variable: '--neutrals-neutral-800', value: 'rgb(51, 51, 51)' },
  { category: 'Neutrals', name: 'Neutral / 900', variable: '--neutrals-neutral-900', value: 'rgb(31, 31, 31)' },
  { category: 'Neutrals', name: 'Neutral / 950', variable: '--neutrals-neutral-950', value: 'rgb(20, 20, 20)' },
  { category: 'Neutrals', name: 'Neutral / 1000', variable: '--neutrals-neutral-1000', value: 'rgb(0, 0, 0)' },
  { category: 'Neutrals', name: 'Transparent Light / 72', variable: '--neutrals-transparent-light-72', value: 'rgba(0, 0, 0, 0.72)' },
  { category: 'Neutrals', name: 'Transparent Light / 64', variable: '--neutrals-transparent-light-64', value: 'rgba(0, 0, 0, 0.64)' },
  { category: 'Neutrals', name: 'Transparent Light / 48', variable: '--neutrals-transparent-light-48', value: 'rgba(0, 0, 0, 0.48)' },
  { category: 'Neutrals', name: 'Transparent Light / 32', variable: '--neutrals-transparent-light-32', value: 'rgba(0, 0, 0, 0.32)' },
  { category: 'Neutrals', name: 'Transparent Light / 24', variable: '--neutrals-transparent-light-24', value: 'rgba(0, 0, 0, 0.24)' },
  { category: 'Neutrals', name: 'Transparent Light / 20', variable: '--neutrals-transparent-light-20', value: 'rgba(0, 0, 0, 0.2)' },
  { category: 'Neutrals', name: 'Transparent Light / 16', variable: '--neutrals-transparent-light-16', value: 'rgba(0, 0, 0, 0.16)' },
  { category: 'Neutrals', name: 'Transparent Light / 8', variable: '--neutrals-transparent-light-8', value: 'rgba(0, 0, 0, 0.08)' },
  { category: 'Neutrals', name: 'Transparent Light / 6', variable: '--neutrals-transparent-light-6', value: 'rgba(0, 0, 0, 0.06)' },
  { category: 'Neutrals', name: 'Transparent Light / 4', variable: '--neutrals-transparent-light-4', value: 'rgba(0, 0, 0, 0.04)' },
  { category: 'Neutrals', name: 'Transparent Light / 0', variable: '--neutrals-transparent-light-0', value: 'rgba(0, 0, 0, 0)' },
  { category: 'Neutrals', name: 'Transparent Dark / 72', variable: '--neutrals-transparent-dark-72', value: 'rgba(255, 255, 255, 0.72)' },
  { category: 'Neutrals', name: 'Transparent Dark / 60', variable: '--neutrals-transparent-dark-60', value: 'rgba(255, 255, 255, 0.6)' },
  { category: 'Neutrals', name: 'Transparent Dark / 48', variable: '--neutrals-transparent-dark-48', value: 'rgba(255, 255, 255, 0.48)' },
  { category: 'Neutrals', name: 'Transparent Dark / 32', variable: '--neutrals-transparent-dark-32', value: 'rgba(255, 255, 255, 0.32)' },
  { category: 'Neutrals', name: 'Transparent Dark / 24', variable: '--neutrals-transparent-dark-24', value: 'rgba(255, 255, 255, 0.24)' },
  { category: 'Neutrals', name: 'Transparent Dark / 20', variable: '--neutrals-transparent-dark-20', value: 'rgba(255, 255, 255, 0.2)' },
  { category: 'Neutrals', name: 'Transparent Dark / 16', variable: '--neutrals-transparent-dark-16', value: 'rgba(255, 255, 255, 0.16)' },
  { category: 'Neutrals', name: 'Transparent Dark / 8', variable: '--neutrals-transparent-dark-8', value: 'rgba(255, 255, 255, 0.08)' },
  { category: 'Neutrals', name: 'Transparent Dark / 6', variable: '--neutrals-transparent-dark-6', value: 'rgba(255, 255, 255, 0.06)' },
  { category: 'Neutrals', name: 'Transparent Dark / 4', variable: '--neutrals-transparent-dark-4', value: 'rgba(255, 255, 255, 0.04)' },
  { category: 'Neutrals', name: 'Transparent Dark / 0', variable: '--neutrals-transparent-dark-0', value: 'rgba(255, 255, 255, 0)' },

  // Contextual
  { category: 'Contextual', name: 'Light Blue', variable: '--contextual-light-blue-primitive', value: 'rgb(145, 235, 247)' },
  { category: 'Contextual', name: 'Indigo', variable: '--contextual-indigo-primitive', value: 'rgb(108, 130, 208)' },
  { category: 'Contextual', name: 'Yellow', variable: '--contextual-yellow-primitive', value: 'rgb(255, 229, 72)' },
  { category: 'Contextual', name: 'Medium Teal', variable: '--contextual-medium-teal-primitive', value: 'rgb(22, 171, 171)' },
  { category: 'Contextual', name: 'Periwinkle Blue', variable: '--contextual-periwinkle-blue-primitive', value: 'rgb(139, 182, 239)' },
  { category: 'Contextual', name: 'Coral', variable: '--contextual-coral-primitive', value: 'rgb(255, 160, 147)' },
  { category: 'Contextual', name: 'Purple', variable: '--contextual-purple-primitive', value: 'rgb(117, 23, 230)' },

  // Web-ALT
  { category: 'Web-ALT', name: 'Light Blue', variable: '--web-alt-light-blue-primitive', value: 'rgb(5, 240, 255)' },
  { category: 'Web-ALT', name: 'Dark Blue', variable: '--web-alt-dark-blue-primitive', value: 'rgb(53, 138, 255)' },
  { category: 'Web-ALT', name: 'Green', variable: '--web-alt-green-primitive', value: 'rgb(0, 255, 148)' },
  { category: 'Web-ALT', name: 'Purple', variable: '--web-alt-purple-primitive', value: 'rgb(117, 23, 230)' },
  { category: 'Web-ALT', name: 'Pink', variable: '--web-alt-pink-primitive', value: 'rgb(255, 146, 250)' },
  { category: 'Web-ALT', name: 'Yellow', variable: '--web-alt-yellow-primitive', value: 'rgb(255, 252, 0)' },
];

// Spacing tokens (non-color primitives)
export interface SpacingToken {
  name: string;
  variable: string;
  value: string;
}

export const spacingTokens: SpacingToken[] = [
  { name: 'Spacing / -24', variable: '--spacing--24', value: '-24px' },
  { name: 'Spacing / -20', variable: '--spacing--20', value: '-20px' },
  { name: 'Spacing / -16', variable: '--spacing--16', value: '-16px' },
  { name: 'Spacing / -12', variable: '--spacing--12', value: '-12px' },
  { name: 'Spacing / -8', variable: '--spacing--8', value: '-8px' },
  { name: 'Spacing / -4', variable: '--spacing--4', value: '-4px' },
  { name: 'Spacing / -2', variable: '--spacing--2', value: '-2px' },
  { name: 'Spacing / 0', variable: '--spacing-0', value: '0px' },
  { name: 'Spacing / 2', variable: '--spacing-2', value: '2px' },
  { name: 'Spacing / 4', variable: '--spacing-4', value: '4px' },
  { name: 'Spacing / 6', variable: '--spacing-6', value: '6px' },
  { name: 'Spacing / 8', variable: '--spacing-8', value: '8px' },
  { name: 'Spacing / 12', variable: '--spacing-12', value: '12px' },
  { name: 'Spacing / 16', variable: '--spacing-16', value: '16px' },
  { name: 'Spacing / 20', variable: '--spacing-20', value: '20px' },
  { name: 'Spacing / 24', variable: '--spacing-24', value: '24px' },
  { name: 'Spacing / 32', variable: '--spacing-32', value: '32px' },
  { name: 'Spacing / 40', variable: '--spacing-40', value: '40px' },
  { name: 'Spacing / 48', variable: '--spacing-48', value: '48px' },
  { name: 'Spacing / 56', variable: '--spacing-56', value: '56px' },
  { name: 'Spacing / 64', variable: '--spacing-64', value: '64px' },
  { name: 'Spacing / 72', variable: '--spacing-72', value: '72px' },
  { name: 'Spacing / 80', variable: '--spacing-80', value: '80px' },
];

export const borderTokens: SpacingToken[] = [
  { name: 'Border / 0', variable: '--border-0', value: '0px' },
  { name: 'Border / 0.5', variable: '--border-0-5', value: '0.5px' },
  { name: 'Border / 1', variable: '--border-1', value: '1px' },
];

export const radiusTokens: SpacingToken[] = [
  { name: 'Radius / 0', variable: '--radius-0', value: '0px' },
  { name: 'Radius / XXS', variable: '--radius-xxs', value: '4px' },
  { name: 'Radius / XS', variable: '--radius-xs', value: '6px' },
  { name: 'Radius / SM', variable: '--radius-sm', value: '8px' },
  { name: 'Radius / MD', variable: '--radius-md', value: '12px' },
  { name: 'Radius / LG', variable: '--radius-lg', value: '16px' },
  { name: 'Radius / XL', variable: '--radius-xl', value: '20px' },
  { name: 'Radius / 2XL', variable: '--radius-2xl', value: '24px' },
  { name: 'Radius / 3XL', variable: '--radius-3xl', value: '32px' },
  { name: 'Radius / Full', variable: '--radius-full', value: '360px' },
];
