import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './callout.scss';

export type CalloutProps = TypographyProps;

export function Callout({
  children,
  className,
  weight = '4',
  ...props
}: CalloutProps) {
  const cn = clsx(
    className,
    'Callout',
  );

  return (
    <Typography
      className={cn}
      weight={weight}
      {...props}
    >
      {children}
    </Typography>
  );
}
