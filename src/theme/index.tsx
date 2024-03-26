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
import type {} from '@mui/lab/themeAugmentation';

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
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1328,
          xl: 1536,
        },
      },
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
