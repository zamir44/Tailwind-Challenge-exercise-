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
         'tertiary': '#BDB2B2',
         black: {
          '100': '#444444',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#2ca2ce',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#0c5b79'
        },
         
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
       spacing: {
        '72': '18rem',
        '84': '21rem',
        '99': '40rem',
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
    extend: {
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require ('tailwind-bootstrap-grid')({
      gridGutterWidth: "32px",
    }),
  ],
}
