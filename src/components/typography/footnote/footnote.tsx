import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './footnote.scss';

export type FootnoteProps = TypographyProps;

export function Footnote({
  children,
  className,
  weight = '2',
  caps,
  ...props
}: FootnoteProps) {
  const cn = clsx(
    className,
    'Footnote',
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
