/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            lineHeight: theme('lineHeight.relaxed'),
            a: {
              color: theme('colors.sky.600'),
              textDecoration: 'none',
              fontWeight: theme('fontWeight.medium'),
              '&:hover': {
                textDecoration: 'underline'
              }
            }

            // p: {
            //   marginTop: '1em',
            //   marginBottom: '1em'
            // }
          }
        },
        invert: {
          css: {
            a: {
              color: theme('colors.sky.400')
            }
          }
        }
      })
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
