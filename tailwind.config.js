const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            lineHeight: theme('lineHeight.normal'),
            a: {
              color: theme('colors.gray.900'),
              '&:hover': {
                color: theme('colors.blue.600')
              }
            }
          }
        }
      })
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
