module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
   corePlugins: {
      preflight: false,
    },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
