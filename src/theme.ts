import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Color {
    950?: string;
  }
  interface Palette {
    yellow: Palette["primary"];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions["primary"];
  }

  interface TypographyVariantsOptions {
    fontWeightExtraBold: number;
  }

  interface TypographyVariants {
    fontWeightExtraBold: number;
  }
}

let theme = createTheme({
  palette: {
    grey: {
      500: "#6B6B6B",
      950: "#111111",
    },
    yellow: {
      main: "#F4D04E",
    },
  },
  typography: {
    fontFamily: "Figtree, sans-serif",
    fontWeightExtraBold: 800,
  },
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: theme.palette.yellow.main,
      contrastText: theme.palette.grey[950],
    },
    text: {
      primary: theme.palette.grey[950],
    },
    background: {
      default: theme.palette.yellow.main,
      paper: theme.palette.common.white,
    },
  },
  typography: {
    lineHeight: 1.5,
    letterSpacing: 0,
    h1: {
      fontWeight: theme.typography.fontWeightExtraBold,
      fontSize: "1.25rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "0.875rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "0.75rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightExtraBold,
      fontSize: "0.75rem",
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;
