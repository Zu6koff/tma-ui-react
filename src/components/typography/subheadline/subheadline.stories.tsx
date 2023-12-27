import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Subheadline as Component, SubheadlineProps as ComponentProps } from './subheadline.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Subheadline',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
    level: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Subheadline: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component level="1" {...args}>Subheadline 1</Component>
        <Component level="2" {...args}>Subheadline 2</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
