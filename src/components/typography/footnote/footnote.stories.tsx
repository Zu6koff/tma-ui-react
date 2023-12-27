import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT, TypographyWrapper } from '../../../storybook';
import { Footnote as Component, FootnoteProps as ComponentProps } from './footnote.tsx';

type StoryComponentProps = ComponentProps;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography/Footnote',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    Component: { control: false },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

export const Footnote: Story = {
  render: (args) => {
    return (
      <TypographyWrapper>
        <Component {...args}>Footnote</Component>
      </TypographyWrapper>
    );
  },
  args: {
    caps: false,
  },
};
