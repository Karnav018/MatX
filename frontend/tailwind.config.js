/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matx-primary-900': '#18181B',
        'matx-primary-800': '#27272A',
        'matx-primary-700': '#3F3F46',
        'matx-text-primary': '#FFFFFF',
        'matx-text-secondary': '#D4D4D8',
        'matx-text-muted': '#71717A',
        'matx-accent': '#78716C',
        'matx-accent-dark': '#57534E',
        'matx-accent-light': '#A8A29E',
        'matx-border': '#27272A',
        'matx-border-light': '#3F3F46'
      }
    },
  },
  plugins: [],
}
