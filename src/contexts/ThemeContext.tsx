import {
  createTheme,
  CssBaseline,
  ThemeProvider as MThemeProvider,
} from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const ThemeContext = createContext({
  theme: lightTheme,
  themeSwitcher: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light" as "light" | "dark");
  return (
    <ThemeContext.Provider
      value={{
        theme: theme == "light" ? lightTheme : darkTheme,
        themeSwitcher: () =>
          setTheme((prev) => (prev == "light" ? "dark" : "light")),
      }}
    >
      <MThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </MThemeProvider>
    </ThemeContext.Provider>
  );
};
