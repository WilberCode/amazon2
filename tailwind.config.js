module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utilities/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          dark: "#131921",
          mellow: "#febd69",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
    lineClamp: ['responsive', 'hover']

  },
  plugins: [ 
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
