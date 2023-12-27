import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Headline as Component, HeadlineProps as ComponentProps } from './headline.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Headline',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Headline: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component {...args}>Headline</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
