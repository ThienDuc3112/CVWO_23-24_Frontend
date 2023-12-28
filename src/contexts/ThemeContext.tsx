import {
  createTheme,
  CssBaseline,
  ThemeProvider as MThemeProvider,
} from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    allVariants: {
      fontFamily: "'Roboto Slab', serif",
    },
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3.25rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.6rem",
    },
    h6: {
      fontSize: "1.3rem",
    },
  },
});

const ThemeContext = createContext({
  theme: theme,
  themeSwitcher: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        themeSwitcher: () => {
          theme.palette.mode = theme.palette.mode == "light" ? "dark" : "light";
        },
      }}
    >
      <MThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MThemeProvider>
    </ThemeContext.Provider>
  );
};
