import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';

import { FULLSCREEN_STORY_LAYOUT } from '../../storybook';

import { Title } from './title/title.stories.tsx';
import { Headline } from './headline/headline.stories.tsx';
import { Body } from './body/body.stories.tsx';
import { Callout } from './callout/callout.stories.tsx';
import { Subheadline } from './subheadline/subheadline.stories.tsx';
import { Footnote } from './footnote/footnote.stories.tsx';
import { Caption } from './caption/caption.stories.tsx';

import { TypographyProps } from './types.ts';

type StoryComponentProps = Pick<TypographyProps, 'weight' | 'caps'>;

const meta: Meta<StoryComponentProps> = {
  title: 'Typography',
  parameters: FULLSCREEN_STORY_LAYOUT,
  argTypes: {
    weight: {
      control: 'radio',
      options: ['1', '2', '3', '4'],
    },
    caps: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<Omit<StoryComponentProps, 'Component'>>;

const TypographyWrapper = ({ children }: PropsWithChildren) => {
  return <div style={{ margin: 16 }}>{children}</div>;
};

export const Playground: Story = {
  render: (args, context) => {
    return (
      <div>
        <TypographyWrapper>
          {Title.render!({ ...Title.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Headline.render!({ ...Headline.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Body.render!({ ...Body.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Callout.render!({ ...Callout.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Subheadline.render!({ ...Subheadline.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Footnote.render!({ ...Footnote.args, ...args }, context)}
        </TypographyWrapper>
        <TypographyWrapper>
          {Caption.render!({ ...Caption.args, ...args }, context)}
        </TypographyWrapper>
      </div>
    );
  },
  args: {
    caps: false,
  },
};
