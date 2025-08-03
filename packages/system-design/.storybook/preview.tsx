import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeConfig } from "../src/utils/theme/theme.config";
import "../src/globals.css";

const theme = createTheme({
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
      contrastText: themeConfig.colors.secondary.contrastText,
    },
    success: {
      main: themeConfig.colors.success.main,
      light: themeConfig.colors.success.light,
      dark: themeConfig.colors.success.dark,
      contrastText: themeConfig.colors.success.contrastText,
    },
    error: {
      main: themeConfig.colors.error.main,
      light: themeConfig.colors.error.light,
      dark: themeConfig.colors.error.dark,
      contrastText: themeConfig.colors.error.contrastText,
    },
    warning: {
      main: themeConfig.colors.warning.main,
      light: themeConfig.colors.warning.light,
      dark: themeConfig.colors.warning.dark,
    },
    info: {
      main: themeConfig.colors.info.main,
      light: themeConfig.colors.info.light,
      dark: themeConfig.colors.info.dark,
      contrastText: themeConfig.colors.info.contrastText,
    },
    text: {
      primary: themeConfig.colors.text.primary,
      secondary: themeConfig.colors.text.secondary,
    },
  },
  typography: {
    fontFamily: themeConfig.fontFamily.sans,
  },
});

import type { Preview } from "@storybook/react";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview; 