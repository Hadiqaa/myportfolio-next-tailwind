/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-2': 'calc(100vh - 2rem)',
        'screen-minus-4': 'calc(100vh - 18rem)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-green': 'rgba(52, 76, 54, 1)',
        'custom-yellow': '#fbad1d',
        'custom-beige' : '#dbd2c1',
        'custom-maroon' : 'rgba(133, 47, 52, 1)',
        'custom-ligh-beige' : "#f6f1e4",
        'custom-orange' : 'rgba(242,96,60,255)',
      },
      textShadow: {
        'text-border': '1px 1px 0 #fbad1d, -1px -1px 0 #fbad1d, 1px -1px 0 #fbad1d, -1px 1px 0 #fbad1d',
      },
      fontFamily: {
        AbrilFatface: ['AbrilFatface', 'serif'], 
        NATS: ['NATS', 'sans-serif'],
        PlayfairDisplay: [ 'PlayfairDisplay','serif' ],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        extralight: 100,
        medium : 500,
        bold : 600,
      },
    },
  },
  plugins: [function({ addUtilities, theme }) {
    addUtilities({
      '.text-shadow': {
          textShadow: '1px 1px 0 #fbad1d, -1px -1px 0 #fbad1d, 1px -1px 0 #fbad1d, -1px 1px 0 #fbad1d',
        },
    });
  },
],
};
