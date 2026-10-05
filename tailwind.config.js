/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#11110F',
        surface: '#171714',
        surfaceDark: '#141411',
        primary: '#5B7FA6',
        primaryHover: '#7598BE',
        accent: '#5B7FA6',
        accent1: '#5B7FA6',
        accent2: '#7598BE',
        textPrimary: '#F1EFE8',
        textSecondary: '#A7A59D',
        textMuted: '#77766F',
        borderToken: '#2A2925',
        statusGreen: '#6F9275',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
