import { ReactNode, useEffect, useMemo } from 'react';

import { Appearance } from '../../lib/appearance';

import { ConfigContextValue, ConfigContext } from './config-context.tsx';

export type ConfigProviderProps = Partial<ConfigContextValue> & {
  children: ReactNode;
};
export const ConfigProvider = ({
  children,
  appearance = Appearance.light,
}: ConfigProviderProps) => {
  const contextValue = useMemo<ConfigContextValue>(() => ({
    appearance,
  }), [appearance]);

  useEffect(() => {
    document.documentElement.setAttribute('data-appearance', appearance);
  }, [appearance]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};
