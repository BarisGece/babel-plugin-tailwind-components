module.exports = {
  theme: {
    screens: {
      sm: '699px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg',
      '3/4': '270deg'
    },
    extend: {
      colors: {
        customcolor: '#fde396'
      }
    },
    container: {
      //screens: ["400px", "500px"], Not Supported
      center: true,
      padding: '2rem'
    }
    // Some useful comment
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)'
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)'
        }
      }

      addUtilities(newUtilities)
    }
    //require('tailwindcss/lib/plugins/container') - Don't use with canary
    // Some useful comment
  ]
}
