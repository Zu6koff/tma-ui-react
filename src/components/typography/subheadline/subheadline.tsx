import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './subheadline.scss';

export type SubheadlineProps = TypographyProps & {
  level?: '1' | '2';
};
export function Subheadline({
  children,
  className,
  level = '1',
  weight = '2',
  caps,
  ...props
}: SubheadlineProps) {
  const cn = clsx(
    className,
    'Subheadline',
    `Subheadline_level_${level}`,
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
