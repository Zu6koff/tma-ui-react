import type { Meta, StoryObj } from '@storybook/react';

import { TypographyWrapper, FULLSCREEN_STORY_LAYOUT } from '../../../storybook';
import { Caption as Component, CaptionProps as ComponentProps } from './caption.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Caption',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
    level: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Caption: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component level="1" {...args}>Caption 1</Component>
        <Component level="2" {...args}>Caption 2</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
