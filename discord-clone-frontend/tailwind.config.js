/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e1f22',
        secondary: '#5865f2',
        secondsidebar: '#2b2d31',
        maincontent: '#313338',
        profile: '#232428',
        hover: '#36373d',
        chat: '#403c44'
      },
  },
  plugins: [],
  }
}
