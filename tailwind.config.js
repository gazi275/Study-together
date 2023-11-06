/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  
 
  
  
  theme: {
    extend: {
      colors: {
        "theme-yellow": '#ffc727',
        "theme-yellow-dark": '#e6b323',
        "theme-dark": '#37474f',
      },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      fontFamily: {
        'main': ['"Open Sans"']
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

