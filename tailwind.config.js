/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '400px',
      md: '600px',
      lg: '850px',
      xl: '900px'
    }
  },
  plugins: [],
}
