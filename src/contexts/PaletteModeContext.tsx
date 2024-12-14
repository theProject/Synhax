import React from 'react';

interface PaletteModeContextValue {
  paletteMode: 'light' | 'dark';
  setPaletteMode: (mode: 'light' | 'dark') => void;
  isDualTheme: boolean;
}

const PaletteModeContext = React.createContext<PaletteModeContextValue>({
  paletteMode: 'light',
  setPaletteMode: (mode: 'light' | 'dark') => {
    console.warn(`setPaletteMode called with mode: ${mode}`);
  },
  isDualTheme: true,
});


export { PaletteModeContext };
