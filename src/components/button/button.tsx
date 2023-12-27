import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import './button.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: 'primary' | 'secondary' | 'tertiary';
  appearance?: 'accent' | 'neutral';
  before?: ReactNode;
  after?: ReactNode;
  multiline?: boolean;
  stretched?: boolean;
  disabled?: boolean;
};

export const Button = ({
  type = 'button',
  children,
  className,
  mode = 'primary',
  appearance = 'accent',
  stretched,
  disabled,
  multiline,
  before,
  after,
  ...props
}: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        className,
        'Button',
        `Button_mode_${mode}`,
        `Button_appearance_${appearance}`,
        {
          Button_stretched: stretched,
          Button_multiline: multiline,
          Button_disabled: disabled,
        },
      )}
      disabled={disabled}
      {...props}
    >
      <span className="Button-In">
        {before && <span className="Button-Before">{before}</span>}
        {children && <span className="Button-Content">{children}</span>}
        {after && <span className="Button-After">{after}</span>}
      </span>
    </button>
  );
};
