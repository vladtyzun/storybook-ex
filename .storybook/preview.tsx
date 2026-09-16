import type { Preview } from '@storybook/react-vite'
import '../src/tokens/index.css'
import '../src/foundation/fonts.css'
import '../src/foundation/tokens.css'
import {
  DEFAULT_SCREEN_WIDTH,
  SCREEN_WIDTHS,
} from './screenWidth'
import { withScreenWidth } from './withScreenWidth'
import { transformToRnSource } from './rnDocsSource'

const preview: Preview = {
  globalTypes: {
    screenWidth: {
      description: 'iPhone screen width for preview layout',
      toolbar: {
        title: 'Screen',
        icon: 'mobile',
        items: SCREEN_WIDTHS.map((width) => ({
          value: String(width),
          title: `${width}px`,
        })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    screenWidth: String(DEFAULT_SCREEN_WIDTH),
  },
  decorators: [withScreenWidth],
  parameters: {
    options: {
      storySort: {
        order: ["Design System", ["Button"], "Foundations"],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      source: {
        // Strip Storybook decorators / device chrome from the Code panel.
        excludeDecorators: true,
        // Portable public API for iOS/Android (RN) consumers — web preview unchanged.
        transform: transformToRnSource,
        language: 'tsx',
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
