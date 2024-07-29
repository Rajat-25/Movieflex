/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'netRed' : '#E50914',
        'netBack':'#333333'
      }
    },
  },
  plugins: [],
};
