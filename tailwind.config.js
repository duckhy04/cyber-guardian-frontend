/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

