import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

// Червоний колір для кнопки та background
export const primary = {
  main: '#7D0006',
};

// Зелений колір для кнопки, background, і темніший для шрифту
export const secondary = {
  light: '#2C3812',
  main: '#2A3910',
  dark: '#1F2B09',
  textStyle: '#5A5757',
};

// Світлий колір для background та шрифту
export const info = {
  light: '#f5ebe2',
  main: '#F5EBE2',
  dark: '#DFC4AD'
};
// Додаткові кольори для шрифту
export const success = {
  lighter: '#6F6C90',
  light: '#475467',
  main: '#101828',
  dark: '#1A202C',
  darker: '#170F49',
  contrastText: '#667085'
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.4),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// Генерує об'єкт, що представляє палітру теми з використанням стандартних та власних кольорів.
export function palette() {
  return {
    ...base,
    mode: 'light' as PaletteMode,
    text: {
      primary: secondary.dark,
      secondary: info.main,
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
