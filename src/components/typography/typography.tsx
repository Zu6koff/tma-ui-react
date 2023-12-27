import { clsx } from 'clsx';

import { TypographyProps } from './types.ts';
import './typography.scss';

export function Typography({
  Component = 'span',
  weight = '1',
  className,
  children,
  caps,
  ...props
}: TypographyProps) {
  const cn = clsx(
    className,
    'Typography',
    `Typography_weight_${weight}`,
    {
      Typography_caps: caps,
    },
  );

  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
}
