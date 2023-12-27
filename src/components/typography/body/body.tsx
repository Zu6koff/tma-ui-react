import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './body.scss';

export type BodyProps = TypographyProps;

export function Body({
  children,
  className,
  weight = '4',
  caps,
  ...props
}: BodyProps) {
  const cn = clsx(
    className,
    'Body',
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
