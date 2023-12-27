import type { Meta, StoryObj } from '@storybook/react';

import { FULLSCREEN_STORY_LAYOUT } from '../../storybook';
import { Button as Component, ButtonProps as ComponentProps } from './button.tsx';

type StoryComponentProps = ComponentProps & {
  showBefore: boolean;
  showAfter: boolean;
};

const meta: Meta<StoryComponentProps> = {
  title: 'UI/Button',
  component: Component,
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    before: { control: false },
    after: { control: false },
    showBefore: {
      control: { type: 'boolean' },
    },
    showAfter: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'icon'>>;

export const Button: Story = {
  render: ({ showBefore, showAfter, ...args }) => {
    const icon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    const iconBefore = showBefore && icon;
    const iconAfter = showAfter && icon;

    return <Component before={iconBefore} after={iconAfter} {...args} />;
  },
  args: {
    children: 'Button',
    disabled: false,
    stretched: false,
    multiline: false,
    showBefore: false,
    showAfter: false,
  },
};
