import {
  PaletteColor,
  PaletteColorOptions,
  Shadows,
  createTheme,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primary: PaletteColor;
    icons: PaletteColor;
    stroke: {
      main: string;
      light: string;
      semiLight: string;
      dark: string;
      extraLight: string;
    };
    highEmphasis: PaletteColor;
    mediumEmphasis: PaletteColor;
    lowEmphasis: PaletteColor;
    accent: {
      main: string;
      yellow: string;
      grey: string;
      blue: string;
    };
    white: {
      main: string;
    };
    backgroundElevation: {
      main: string;
      light: string;
    };
    hover: PaletteColor;
    gradient: {
      gradientIconBg: string;
    };
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions;
    icons?: PaletteColorOptions;
    stroke?: {
      main: string;
      light: string;
      semiLight: string;
      dark: string;
      extraLight: string;
    };
    highEmphasis?: PaletteColorOptions;
    mediumEmphasis?: PaletteColorOptions;
    lowEmphasis?: PaletteColorOptions;
    accent?: {
      main?: string;
      yellow?: string;
      grey?: string;
      blue?: string;
    };
    white?: PaletteColorOptions;
    backgroundElevation?: PaletteColorOptions;
    hover?: PaletteColorOptions;
    gradient?: {
      gradientIconBg: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    subtitle4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    subtitle3: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    subtitle4: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3?: true;
    body4?: true;
    caption1?: true;
    caption2?: true;
    subtitle3?: true;
    caption3?: true;
    caption4?: true;
    subtitle4?: true;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#004BB9',
      light: '#002F5F',
      dark: '#007CF5',
    },
    icons: {
      main: 'rgb(158, 158, 158)',
      light: 'rgb(0, 75, 185)',
      dark: 'rgb(0, 124, 245);',
    },
    stroke: {
      main: '#9E9E9E',
      light: 'rgb(224, 224, 224)',
      semiLight: '#007aff',
      dark: 'rgb(97, 97, 97)',
      extraLight: 'rgba(224, 224, 224,0.3)',
    },
    highEmphasis: {
      light: '#1A1B25',
      dark: 'rgba(0, 0, 0, 0.87)',
      main: '#000000',
    },
    mediumEmphasis: {
      main: 'rgb(0, 47, 95)',
    },
    lowEmphasis: {
      main: '#687385',
    },
    accent: {
      yellow: '#FCD900',
      grey: '#616161',
      blue: '#007aff',
    },
    white: {
      main: '#FFFFFF',
    },
    backgroundElevation: {
      light: 'rgb(241, 245, 249)',
      main: 'rgb(0, 47, 95)',
    },
    gradient: {
      gradientIconBg:
        'linear-gradient(135deg, rgb(2, 116, 235) 0%, rgb(1, 79, 190) 95%)',
    },
    hover: {
      main: 'rgba(225, 225, 225, 0.2)',
    },
  },
  typography: {
    h1: {
      fontFamily: 'oswald',
      fontSize: '48px',
      fontWeight: '600',
      lineHeight: '1.5',
    },
    h2: {
      fontFamily: 'oswald',
      fontSize: '20px',
      fontWeight: '200',
      lineHeight: '1.2',
    },
    h3: {
      fontFamily: 'oswald',
      fontSize: '34px',
      fontWeight: '200',
      lineHeight: '1.2',
      letterSpacing: '1px',
    },
    h4: {
      fontFamily: 'oswald',
      fontSize: '34px',
      fontWeight: '100',
      lineHeight: '1.167',
    },
    h5: {
      fontFamily: 'oswald',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: 'normal',
      letterSpacing: '1.4px',
    },
    h6: {
      fontFamily: 'oswald',
      fontSize: '26px',
      fontWeight: '300',
      lineHeight: 'normal',
      letterSpacing: '1.4px',
    },
    subtitle1: {
      fontFamily: 'oswald',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    subtitle2: {
      fontFamily: 'open sans',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    subtitle3: {
      fontFamily: 'open sans',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: 'normal',
    },
    subtitle4: {
      fontFamily: 'open sans',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    body1: {
      fontFamily: 'oswald',
      fontSize: '24px',
      fontWeight: '400',
      lineHeight: '28.8px',
    },
    body2: {
      fontFamily: 'open sans',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: 'normal',
    },
    body3: {
      fontFamily: 'oswald',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '24.7px',
    },
    body4: {
      fontFamily: 'open sans',
      fontSize: '16px',
      fontWeight: '0',
      lineHeight: 'normal',
    },
    caption1: {
      fontFamily: 'oswald',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
    },
    caption2: {
      fontFamily: 'oswald',
      fontSize: '20px',
      fontWeight: '400',
      lineHeight: '30px',
    },
    caption3: {
      fontFamily: 'open sans',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: 'normal',
    },
    caption4: {
      fontFamily: 'open sans',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: 'normal',
    },
  },
  shadows: [
    'none',
    'rgba(0, 0, 0, 0.16) 0px 3px 6px',
    ...Array(23).fill('none'),
  ] as Shadows,
});

export default theme;
