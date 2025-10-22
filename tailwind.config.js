/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5F0ED',
          100: '#E8DCD5',
          200: '#D2B48C',
          300: '#C19A6B',
          400: '#A0826D',
          500: '#8B4513',
          600: '#6F4E37',
          700: '#5C3D2E',
          800: '#3E2723',
          900: '#2C1810',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
