const rootConfig = require("../../tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...rootConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
