import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './headline.scss';

export type HeadlineProps = TypographyProps;

export function Headline({
  children,
  className,
  weight = '2',
  caps,
  ...props
}: HeadlineProps) {
  const cn = clsx(
    className,
    'Headline',
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
