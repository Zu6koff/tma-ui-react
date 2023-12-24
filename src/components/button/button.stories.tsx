import type { Meta, StoryObj } from '@storybook/react';

import { Button as Component, ButtonProps } from './button.tsx';

type StoryButtonProps = ButtonProps;

const meta: Meta<StoryButtonProps> = {
  title: 'UI/Button',
  component: Component,
  parameters: {
    layout: 'fullscreen',
    viewMode: 'story',
  },
};

export default meta;

type Story = StoryObj<StoryButtonProps>;

export const Button: Story = {
  args: {
    children: 'Button',
    size: 'l',
    stretched: false,
  },
};
