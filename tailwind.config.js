/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['"Red Hat Text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}