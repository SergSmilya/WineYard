export function remToPx(value: string): number { // Конвертує rem у px
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string { // Конвертує px у rem
  return `${value / 16}rem`;
}

interface ResponsiveFontSizes {
  xs: number;
  sm: number;
  md: number;
}

export function responsiveFontSizes({ xs, sm, md }: ResponsiveFontSizes): Record<string, string | Record<string, string>> {
  return {
    '@media (max-width:600px)': {
      fontSize: pxToRem(xs),
    },
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
  };
}

export const primaryFont = 'Epilogue, sans-serif';
export const secondaryFont = 'Della Respira, sans-serif';

// Об'єкт typography містить налаштування типографії для різних елементів інтерфейсу.
export const typography = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 500,
    lineHeight: "68px",
    fontFamily: secondaryFont,
    fontSize: "68px",
  },
  h2: {
    fontWeight: 700,
    lineHeight: "30px",
    fontSize: "64px",
    fontFamile: primaryFont,
  },
  h3: {
    fontWeight: 700,
    lineHeight: "30px",
    fontSize: "24px",
    ...responsiveFontSizes({ xs: 20, sm: 22, md: 24 }),
  },
  h4: {
    fontWeight: 500,
    lineHeight: "64px",
    fontSize: "64px",
    fontFamily: secondaryFont,
  },
  h5: {
    fontWeight: 700,
    lineHeight: '24px',
    fontSize: '16px',
    fontFamily: primaryFont,
  },
  h6: {
    fontWeight: 400,
    lineHeight: '16px',
    fontSize: '16px',
    fontFamily: primaryFont,
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: '24px',
    fontSize: '16px',
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 500,
    lineHeight: '25px',
    fontSize: '18px',
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    fontFamily: secondaryFont,
    lineHeight: '32px',
    fontSize: '24px',
  },
};



