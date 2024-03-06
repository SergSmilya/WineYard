import React, { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { overrides } from "./overrides.ts";
import { palette } from "./palette.ts";
import { typography } from "./typography.ts";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Компонент, що надає тему для всього додатку.
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Мемоізоване значення теми, щоб уникнути непотрібних перерендерів.
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography: typography as TypographyOptions,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);
  // Підключаємо стилі MUI
  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
