import { HTMLAttributes, useLayoutEffect, useRef } from 'react';
import { clsx } from 'clsx';

import './app-root.scss';

export type AppRootProps = HTMLAttributes<HTMLDivElement>;

export const AppRoot = ({
  children,
  className,
  ...props
}: AppRootProps) => {
  const appRootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    document.documentElement.classList.add('Tmaui');
    appRootRef.current?.parentElement?.classList.add('Tmaui-Root');
  }, []);

  return (
    <div
      className={clsx(className, 'AppRoot')}
      ref={appRootRef}
      {...props}
    >
      {children}
    </div>
  );
};
