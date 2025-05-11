import "../src/app/globals.css";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../src/utils/theme/DefaultColors";
import "../src/app/globals.css";

import type { Preview } from "@storybook/react";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
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
