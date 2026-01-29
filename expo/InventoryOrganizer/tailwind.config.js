/** @type {import('tailwindcss').Config} */

export const colors = {
    bg: {
        primary:"var(--colors-bg-primary)",
        secondary:"var(--colors-bg-secondary)",
    },
    text:{
        primary:"var(--colors-text-primary)",
    },
};
module.exports = {
  content: [
      "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [
      require("nativewind/preset")
  ],
  theme: {
      extend: {
          colors,
      }
  },
  plugins: [],
}

