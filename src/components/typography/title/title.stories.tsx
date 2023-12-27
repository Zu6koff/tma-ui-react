import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Title as Component, TitleProps as ComponentProps } from './title.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Title',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
    level: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Title: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component level="1" {...args}>Title 1</Component>
        <Component level="2" {...args}>Title 2</Component>
        <Component level="3" {...args}>Title 3</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
