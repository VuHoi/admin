const { themeConfig } = require("./src/utils/theme/theme.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/system-design/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: themeConfig.colors.primary.main,
        secondary: themeConfig.colors.secondary.main,
        success: themeConfig.colors.success.main,
        info: themeConfig.colors.info.main,
        warning: themeConfig.colors.warning.main,
        error: themeConfig.colors.error.main,
        border: themeConfig.colors.border,
        "neutral-600": themeConfig.colors.grey[600],
        "neutral-500": themeConfig.colors.grey[500],
        "neutral-400": themeConfig.colors.grey[400],
        "neutral-300": themeConfig.colors.grey[300],
        "neutral-200": themeConfig.colors.grey[200],
        "neutral-100": themeConfig.colors.grey[100],
      },
      spacing: themeConfig.spacing,
      fontSize: themeConfig.fontSize,
      borderRadius: themeConfig.borderRadius,
      fontFamily: {
        sans: themeConfig.fontFamily.sans,
        dmSans: themeConfig.fontFamily.dmSans,
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", width: "0px" },
          "100%": { opacity: "1", width: "270px" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      boxShadow: {
        button: "0px 4px 15px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
