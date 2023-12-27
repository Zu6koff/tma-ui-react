import { AllHTMLAttributes, ElementType } from 'react';

export type TypographyProps = AllHTMLAttributes<HTMLElement> & {
  Component?: ElementType;
  weight?: '1' | '2' | '3' | '4';
  caps?: boolean;
};
