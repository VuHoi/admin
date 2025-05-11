import { createTheme } from "@mui/material/styles";
import { themeConfig } from "./theme.config";

export const theme = (createTheme as any)({
  palette: {
    primary: {
      main: themeConfig.colors.primary.main,
      light: themeConfig.colors.primary.light,
      dark: themeConfig.colors.primary.dark,
      contrastText: themeConfig.colors.primary.contrastText,
    },
    secondary: {
      main: themeConfig.colors.secondary.main,
      light: themeConfig.colors.secondary.light,
      dark: themeConfig.colors.secondary.dark,
    },
    success: {
      main: themeConfig.colors.success.main,
      light: themeConfig.colors.success.light,
      dark: themeConfig.colors.success.dark,
    },
    info: {
      main: themeConfig.colors.info.main,
      light: themeConfig.colors.info.light,
      dark: themeConfig.colors.info.dark,
    },
    error: {
      main: themeConfig.colors.error.main,
      light: themeConfig.colors.error.light,
      dark: themeConfig.colors.error.dark,
    },
    warning: {
      main: themeConfig.colors.warning.main,
      light: themeConfig.colors.warning.light,
      dark: themeConfig.colors.warning.dark,
    },
    grey: themeConfig.colors.grey,
    text: {
      primary: themeConfig.colors.text.primary,
      secondary: themeConfig.colors.text.secondary,
    },
    custom: {
      main: themeConfig.colors.error.main,
      light: themeConfig.colors.error.light,
      dark: themeConfig.colors.error.dark,
    },
  },
  typography: {
    fontFamily: themeConfig.fontFamily.sans,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
          margin: 0,
          padding: 0,
        },
        "#root": {
          height: "100%",
        },
        "*[dir='rtl'] .buyNowImg": {
          transform: "scaleX(-1)",
        },
        ".border-none td": {
          border: "0px",
        },
        a: {
          textDecoration: "none",
        },
        ".dzu-dropzone": {
          overflow: "hidden !important",
        },
        ".dzu-inputLabel": {
          color: "#1e88e5 !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: themeConfig.borderRadius.lg,
          padding: themeConfig.spacing.md,
          margin: themeConfig.spacing.sm,
        },
      },
    },
  },
});
