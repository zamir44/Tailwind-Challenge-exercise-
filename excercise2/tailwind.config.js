module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
       'lg': '50%',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FFFDFD',
        'secondary': '#988787',
        'danger': '#e3342f',
       }),
       colors: {
        'primary': '#FFFDFD',
         'secondary': '#988787',
         'tertiary': '#E5DFDF'
       },
       fontFamily: {
        body: [ 'Montserrat' ]
       },
       fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
       gradientColorStops: theme => ({
        ...theme('colors'),
        'square-left': 'rgba(255,255,255, 1)',
        'square-right': 'rgba(229, 223, 223, 1)',
        'danger': '#e3342f',
       })
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
