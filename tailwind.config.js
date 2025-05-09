/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: true, // to work with MUI
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
        primary: {
          light: "#8794dd",
          main: "#dadada",
          dark: "#3f51b5",
          contrast: "#fff",
        },
        secondary: {
          light: "#33a095",
          main: "#19857b",
          dark: "#115d56",
          contrast: "#fff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, width: "0px" },
          "100%": { opacity: 1, width: "270px" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
