/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'color-1':'#f9b4ab',
        'color-2':'#fdebd3',
        'color-3':'#264e70',
        'color-4':'#679186',
        'color-5':'#bbd4ce',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'sm':'250px'
      },
      gridTemplateRows:{
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
    
  },
    plugins: [],
}
