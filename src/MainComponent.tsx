import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import { PaletteModeContext } from "./contexts/PaletteModeContext";
import { ThemeSwitcher } from "./contexts/ThemeSwitcher"; // Adjust path if necessary
import Box from "@mui/material/Box";

const MainComponent: React.FC = () => {
  const [paletteMode, setPaletteMode] = React.useState<"light" | "dark">("light");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
        },
      }),
    [paletteMode]
  );

  const contextValue = React.useMemo(
    () => ({
      paletteMode,
      setPaletteMode,
      isDualTheme: true,
    }),
    [paletteMode]
  );

  return (
    <PaletteModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
          <ThemeSwitcher />
        </Box>
        <App />
      </ThemeProvider>
    </PaletteModeContext.Provider>
  );
};

export default MainComponent;
