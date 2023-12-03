import { HTMLAttributes } from 'react';
import './Button.scss';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" className="Button" {...props}>
      {children}
    </button>
  );
};
