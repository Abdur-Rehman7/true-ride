/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFB611", // blue-600
          light: "#FFB611",   // blue-500
          dark: "#1E40AF",    // blue-800
        },
        secondary: {
          DEFAULT: "#9333EA", // purple-600
          light: "#A855F7",   // purple-500
          dark: "#6B21A8",    // purple-800
        },
        accent: "#F59E0B",    // amber-500
        background: "#F9FAFB", // gray-50
        surface: "#FFFFFF",
        text: {
          primary: "#000000", // gray-900
          secondary: "#6B7280", // gray-500
        },
      },
    },
  },
  plugins: [],
}
