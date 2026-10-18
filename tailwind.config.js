/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        surfaceDark: 'var(--bg-surface-subtle)',
        primary: 'var(--accent-primary)',
        primaryHover: 'var(--accent-hover)',
        accent: 'var(--accent-primary)',
        accent1: 'var(--accent-primary)',
        accent2: 'var(--accent-hover)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        borderToken: 'var(--border-token)',
        statusGreen: '#6F9275',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
