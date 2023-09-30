/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00D3F2',
        'custom-dark-blue': '#0295ab',
        'custom-title': '#00788a',
        'custom-yellow': '#F5F002'
      }
    }
  },
  plugins: []
}
