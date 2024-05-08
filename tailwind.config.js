/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prim" : "rgba(63, 74, 114, 0.48)"
      }
    },
  },
  plugins: [],
}