import type { Parameters, Preview } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

import { ConfigProvider, AppRoot } from '../src';
import '../src/assets/index.scss';

export const globalTypes: Preview['globalTypes'] = {
  // platform: {
  //   name: "Platform",
  //   defaultValue: "ios",
  //   toolbar: {
  //     icon: "tablet",
  //     items: ["ios", "android"],
  //     dynamicTitle: true,
  //   },
  // },
  appearance: {
    name: "Appearance",
    defaultValue: "light",
    toolbar: {
      items: [
        {
          value: "light",
          title: "light",
          icon: "sun"
        },
        {
          value: "dark",
          title: "dark",
          icon: "moon"
        },
      ],
      dynamicTitle: true,
    },
  },
};

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    },
  },
  cartesian: { disabled: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: "mobile1",
  },
  options: {
    storySort: {
      order: [
        'Typography',
        ['Title', 'Headline', 'Body', 'Callout', 'Subheadline', 'Footnote', 'Caption'],
        'UI'
      ]
    },
  },
};

const withTMAUIWrapper = (Story, context) => {
  const { appearance, platform } = context.globals;

  return (
    <ConfigProvider appearance={appearance}>
      <AppRoot style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Story {...context} />
      </AppRoot>
    </ConfigProvider>
  );
};
export const decorators = [withTMAUIWrapper];
