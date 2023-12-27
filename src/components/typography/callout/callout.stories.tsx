import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Callout as Component, CalloutProps as ComponentProps } from './callout.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Callout',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Callout: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component {...args}>Callout</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
