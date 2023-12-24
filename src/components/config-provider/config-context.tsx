import { createContext, useContext } from 'react';

import { Appearance, AppearanceType } from '../../lib/appearance';

export type ConfigContextValue = {
  appearance: AppearanceType
};

export const ConfigContext = createContext<ConfigContextValue>({
  appearance: Appearance.light,
});

export const useConfigContext = () => useContext(ConfigContext);
