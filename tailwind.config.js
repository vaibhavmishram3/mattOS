/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': '#008000',
      },
      fontFamily :{
        glory: ["glory","sans-serif"],
        chicago: ["chicago","sans"],
      },
      boxShadow: {
        '3xl': '10px 10px 0px 0px rgba(94, 93, 91, 0.279)',
      }
    },
  },
  plugins: [],
}

