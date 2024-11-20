/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00AD8C', 
        'dark-blue': '#021B51',
        'custom-purple': '#3d5dfc',
        'custom-yellow': '#F6BA16',
        'custom-purple-nova': '#131A3D',
        'custom-purple-button': '#B45FFF',
        'custom-border-color': '#404A7B',


      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'p14': '14px',
      },
      fontWeight: {
        'medium': '500',
      },
      lineHeight: {
        'tight': '18.23px',
      },
      screens: {
        'custom': '900px',
      },
      clipPath: {
        'polygon-tl': 'polygon(0 0, 100% 0, 100% 15%, 0 10%)',  // Inclinação superior
        'polygon-br': 'polygon(0 85%, 100% 90%, 100% 100%, 0 100%)',  // Inclinação inferior
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg',
      },
    },
  },
  plugins: [],
}

