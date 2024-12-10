import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { PaletteModeContext } from './PaletteModeContext';

function ThemeSwitcher() {

  const { paletteMode, setPaletteMode, isDualTheme } = React.useContext(PaletteModeContext);

  const toggleMode = React.useCallback(() => {
    setPaletteMode(paletteMode === 'dark' ? 'light' : 'dark');
  }, [paletteMode, setPaletteMode]);

  if (!isDualTheme) {
    return null;
  }

  return (
    <Tooltip title={`Switch to ${paletteMode === 'dark' ? 'light' : 'dark'} mode`} enterDelay={1000}>
      <div>
        <IconButton
          aria-label={`Switch to ${paletteMode === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggleMode}
          style={{
            color: paletteMode === "light" ? "white" : "white", // Adjust to contrast with your background
            opacity: 1, // Ensure full opacity
          }}
        >
          {paletteMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>
    </Tooltip>
  );
}

export { ThemeSwitcher };
