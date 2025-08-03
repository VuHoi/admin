import "../packages/super-admin/src/app/globals.css";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../packages/super-admin/src/utils/theme/DefaultColors";
import "../packages/super-admin/src/app/globals.css";

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
