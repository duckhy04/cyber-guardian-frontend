/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#5e17eb',
        'primary2': '#00e7ef',
        'primary3': '#3D2C8D',
        'primary4': '#BEA1F7',
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'toolbar-gradient': 'linear-gradient(122deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,231,239,1) 25%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 75%)',
      },
    },
  },
  plugins: [],
}

