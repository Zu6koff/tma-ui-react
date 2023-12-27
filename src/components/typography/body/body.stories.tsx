import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Body as Component, BodyProps as ComponentProps } from './body.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Body',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Body: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component {...args}>Body</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
