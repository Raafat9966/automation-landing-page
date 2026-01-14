/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        'contact-card': '400px',
      },
      colors: {
        primary: '#3F9AAE',
        secondary: '#79C9C5',
        accent: '#FFE2AF',
        highlight: '#F96E5B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

