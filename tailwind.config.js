/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    colors:{
      black:{
        1: '#000000',
      },
      green:{
        1: '#50E18A',
      },
      gray:{
        1: '#D9D9D9',
      },
      white:{
        1:'#EEEEEE',
      },
      red:{
        1:'#FF0000 '
      },
      blue:{
        1:'#0000FF',
        2:'#00BFFF'
      },
      yellow:{
        1:'#FFFF00'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      opacity:{
        '80': '.80',
        '95': '.95',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'back-header': "url('/public/back-header-map-V3.jpg')",
        'back-ambiente-conscientizacao': "url('/public/back-cont.png')"
      },
    },
  },
  plugins: [],
}

