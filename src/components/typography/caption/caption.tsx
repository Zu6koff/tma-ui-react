import { clsx } from 'clsx';
// import { usePlatform } from '@/shared/providers';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './caption.scss';

export type CaptionProps = TypographyProps & {
  level?: '1' | '2';
};

export function Caption({
  children,
  className,
  level = '1',
  weight = '4',
  caps,
  ...props
}: CaptionProps) {
  // const { platform } = usePlatform();

  // if (level === '1' && platform === 'android') {
  //   level = '2';
  // }

  const cn = clsx(
    className,
    'Caption',
    `Caption_level_${level}`,
  );

  return (
    <Typography
      className={cn}
      weight={weight}
      caps={caps}
      {...props}
    >
      {children}
    </Typography>
  );
}
