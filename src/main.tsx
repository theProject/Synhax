import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import { PaletteModeContext } from "./contexts/PaletteModeContext";
import { ThemeSwitcher } from "./contexts/ThemeSwitcher"; // Make sure this path is correct

function Main() {
  const [paletteMode, setPaletteMode] = React.useState<"light" | "dark">("light");

  // Memoize the theme so it only recomputes when paletteMode changes
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
        },
      }),
    [paletteMode],
  );

  const contextValue = React.useMemo(
    () => ({
      paletteMode,
      setPaletteMode,
      isDualTheme: true,
    }),
    [paletteMode],
  );

  return (
    <PaletteModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Position the ThemeSwitcher absolutely in the top-right corner */}
        <div style={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
  <ThemeSwitcher />
</div>


        <App />
      </ThemeProvider>
    </PaletteModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
