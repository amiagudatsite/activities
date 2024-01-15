const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // TODO: Rename these with sed.
        "purple-400": "#f72585",
        "orange-400": "#7209b7",
        "blue-400": "#3a0ca3",
        "green-400": "#f4a261",
        "pink-400": "#4cc9f0",
        "bg-500": "#FAFAFA",
        "bg-600": "#F1F1F1",
        "bg-800": "#CFCFCF",
      },
      screens: {
        // Discard xl and 2xl by making them equal to lg.
        "2xl": "1024px",
        xl: "1024px",
      },
    },
  },
  plugins: [],
};
