/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FFEAF1',
        'card-bg': '#FFFFFF',
        'accent': '#F282B0',
        'accent-hover': '#F282B0',
        'accent-soft': '#F282B0',
        'accent-soft-hover': '#ffdfe7ff',
      'text-primary': '#5C4A4E',
        'text-secondary': '#8B7D80',
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
