import { useTheme } from "@mui/material/styles";

export function useInfoColors() {
  const theme = useTheme();

  const colors = {
    red: theme.palette.primary.main,
    green: theme.palette.secondary.light,
    dark: theme.palette.success.main,
    grey: theme.palette.success.light,
    light: theme.palette.info.main,
    black: theme.palette.success.dark
  };
  return colors;
}