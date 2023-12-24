import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';
import './button.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: 'l' | 'm'
  stretched?: boolean,
};

export const Button = ({
  children,
  className,
  size = 'l',
  stretched,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        className,
        'Button',
        `Button_size_${size}`,
        {
          'Button-stretched': stretched,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};
