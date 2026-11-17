/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f55d4',
          hover: '#2443ac',
          soft: 'rgba(47, 85, 212, 0.08)',
          subtle: 'rgba(47, 85, 212, 0.15)',
        },
        brand: {
          blue: '#0371d0',
          navy: '#172437',
          dark: '#202942',
          charcoal: '#212529',
          muted: '#8492a6',
          light: '#f8f9fa',
          softbg: '#f4f4f4',
          orange: '#f17425',
          green: '#2eca8b',
        }
      },
      fontFamily: {
        sans: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'clean-hover': '0 10px 30px -5px rgba(47, 85, 212, 0.12), 0 20px 30px -10px rgba(0, 0, 0, 0.06)',
        'premium': '0 20px 40px -15px rgba(23, 36, 55, 0.12)',
      }
    },
  },
  plugins: [],
}
