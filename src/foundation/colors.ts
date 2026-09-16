/**
 * MLDS 4.0 Color Tokens
 * Primitives collection - base color values
 */

export interface ColorToken {
  name: string;
  variable: string;
  value: string;
  description?: string;
}

export const colorTokens: ColorToken[] = [
  // Black scale
  {
    name: 'Black / 100',
    variable: '--mlds-color-black-100',
    value: '#000000',
    description: 'Pure black'
  },
  {
    name: 'Black / 100 - Transparent 0%',
    variable: '--mlds-color-black-100-transparent-0',
    value: 'rgba(0, 0, 0, 0)',
  },
  {
    name: 'Black / 100 - Transparent 5%',
    variable: '--mlds-color-black-100-transparent-5',
    value: 'rgba(0, 0, 0, 0.05)',
  },
  {
    name: 'Black / 100 - Transparent 10%',
    variable: '--mlds-color-black-100-transparent-10',
    value: 'rgba(0, 0, 0, 0.1)',
  },
  {
    name: 'Black / 100 - Transparent 15%',
    variable: '--mlds-color-black-100-transparent-15',
    value: 'rgba(0, 0, 0, 0.15)',
  },
  {
    name: 'Black / 100 - Transparent 20%',
    variable: '--mlds-color-black-100-transparent-20',
    value: 'rgba(0, 0, 0, 0.2)',
  },
  {
    name: 'Black / 100 - Transparent 32%',
    variable: '--mlds-color-black-100-transparent-32',
    value: 'rgba(0, 0, 0, 0.32)',
  },
  {
    name: 'Black / 100 - Transparent 48%',
    variable: '--mlds-color-black-100-transparent-48',
    value: 'rgba(0, 0, 0, 0.48)',
  },
  {
    name: 'Black / 100 - Transparent 64%',
    variable: '--mlds-color-black-100-transparent-64',
    value: 'rgba(0, 0, 0, 0.64)',
  },

  // White scale
  {
    name: 'White / 100',
    variable: '--mlds-color-white-100',
    value: '#FFFFFF',
    description: 'Pure white'
  },
  {
    name: 'White / 100 - Transparent 0%',
    variable: '--mlds-color-white-100-transparent-0',
    value: 'rgba(255, 255, 255, 0)',
  },
  {
    name: 'White / 100 - Transparent 5%',
    variable: '--mlds-color-white-100-transparent-5',
    value: 'rgba(255, 255, 255, 0.05)',
  },
  {
    name: 'White / 100 - Transparent 10%',
    variable: '--mlds-color-white-100-transparent-10',
    value: 'rgba(255, 255, 255, 0.1)',
  },
];

export const semanticColors: ColorToken[] = [
  {
    name: 'Positive',
    variable: '--mlds-color-positive',
    value: '#006657',
    description: 'Success state'
  },
  {
    name: 'Positive - Light',
    variable: '--mlds-color-positive-light',
    value: '#00A878',
    description: 'Success state (dark mode)'
  },
  {
    name: 'Negative',
    variable: '--mlds-color-negative',
    value: '#ce293f',
    description: 'Error state'
  },
  {
    name: 'Negative - Light',
    variable: '--mlds-color-negative-light',
    value: '#FF6B6B',
    description: 'Error state (dark mode)'
  },
  {
    name: 'Warning',
    variable: '--mlds-color-warning',
    value: '#ff9820',
    description: 'Warning state'
  },
  {
    name: 'Info',
    variable: '--mlds-color-info',
    value: '#0066CC',
    description: 'Information state'
  },
];
