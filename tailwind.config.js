const { themeConfig } = require("./src/utils/theme/theme.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        primary: themeConfig.colors.primary,
        secondary: themeConfig.colors.secondary,
        success: themeConfig.colors.success,
        info: themeConfig.colors.info,
        warning: themeConfig.colors.warning,
        error: themeConfig.colors.error,
        grey: themeConfig.colors.grey,
      },
      spacing: themeConfig.spacing,
      borderRadius: themeConfig.borderRadius,
      fontFamily: {
        sans: themeConfig.fontFamily.sans,
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
