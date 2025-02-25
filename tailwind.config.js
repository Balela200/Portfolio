/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tactical: {
          black: '#0A0A0A',
          gray: '#1E1E1E',
          green: '#1A4D2E',
          red: '#9B2226',
          sand: '#D4A373'
        }
      },
      fontFamily: {
        military: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
};