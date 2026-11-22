/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#ffe9f2ff',
        'card-bg': '#FFFFFF',
        'accent': '#C05A85',
        'accent-hover': '#e383abff',
        'accent-soft': '#EE78A8',
        'accent-soft-hover': '#E7669C',
        'text-primary': '#4F434A',
        'text-secondary': '#d0d0d0ff',
      },
      fontFamily: {
        'quick': ['Quicksand', 'sans-serif'],
        'sans': ['"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(238, 120, 168, 0.18)',
        'card': '0 2px 12px rgba(59, 74, 84, 0.08)',
      },
    },
  },
  plugins: [],
}
