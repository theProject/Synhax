import React from 'react';

interface PaletteModeContextValue {
  paletteMode: 'light' | 'dark';
  setPaletteMode: (mode: 'light' | 'dark') => void;
  isDualTheme: boolean;
}

const PaletteModeContext = React.createContext<PaletteModeContextValue>({
  paletteMode: 'light',
  setPaletteMode: () => {},
  isDualTheme: true,
});

export { PaletteModeContext };
