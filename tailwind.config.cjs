/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
    './index.html',
  ],
  
  theme: {
    extend: {colors:{
      "base-input" : "#040F1A",
      "base-background" : "#071422",
      "base-profile" : "#0B1B2B",
      "base-post" : "#112131",
      "base-border" : "#1C2F41",
      "base-label" : "#3A536B",
      "base-span" : "#7B96B2",
      "base-text" : "#AFC2D4",
      "base-subtitle" : "#C4D4E3",
      "base-title" : "#E7EDF4",
      "base-title" : "#E7EDF4",
      "blue": "#3294F8",

      "button_reset" : "#134980"
    },
    
    fontFamily:{
      'sans' : ['Nunito' , 'sans-serif'],
    },
    
    keyframes: {
      opacity: {
        '0%' : {opacity: .1},
        '100%' : {opacity: 1}
      },
    },
    animation: {
      'opacity' : 'opacity  '
    }
  },
  },
  plugins: [],
}

