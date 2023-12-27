import { clsx } from 'clsx';

import { TypographyProps } from '../types.ts';
import { Typography } from '../typography.tsx';

import './title.scss';

export type TitleProps = TypographyProps & {
  level?: '1' | '2' | '3';
};

export function Title({
  children,
  className,
  level = '1',
  weight = '1',
  caps,
  ...props
}: TitleProps) {
  // const { platform } = usePlatform();
  //
  // if (
  //   platform !== 'android'
  //     && caps === undefined
  //     && level !== '4'
  // ) {
  //   caps = true;
  // }

  const cn = clsx(
    className,
    'Title',
    `Title_level_${level}`,
  );

  return (
    <Typography
      className={cn}
      caps={caps}
      weight={weight}
      {...props}
    >
      {children}
    </Typography>
  );
}
