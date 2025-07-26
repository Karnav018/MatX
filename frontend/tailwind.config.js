/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
      },
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
