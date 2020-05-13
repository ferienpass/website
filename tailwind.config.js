/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#D7EDF5',
          100: '#C7E7F2',
          200: '#9AC8D9',
          300: '#22A6D6',
          400: '#1C89B0',
          500: '#1D8DB9',
          600: '#1c6b9c',
          700: '#185A85',
          800: '#084F69',
          900: '#0C394A',
        },
        tint: '#E08B2D',
      },
    }
  },
  variants: {},
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
