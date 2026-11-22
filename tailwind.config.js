/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#E9F4FB',
        'card-bg': '#FFFDFA',
        'accent': '#5AB4E5',
        'accent-hover': '#3E9FD4',
        'text-primary': '#3B4A54',
        'text-secondary': '#7E8F9B',
      },
      fontFamily: {
        'quick': ['Quicksand', 'sans-serif'],
        'sans': ['"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(90, 180, 229, 0.18)',
        'card': '0 2px 12px rgba(59, 74, 84, 0.08)',
      },
    },
  },
  plugins: [],
}
