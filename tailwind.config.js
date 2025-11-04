/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1628',
          800: '#0C1E3A',
          700: '#1A2B4A',
          600: '#2C3E66',
        },
        bitcoin: {
          500: '#F7931A',
          600: '#FF9500',
          400: '#FFA533',
        },
        gold: {
          500: '#D4AF37',
          600: '#B8860B',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #F7931A, 0 0 10px #F7931A' },
          '100%': { boxShadow: '0 0 20px #F7931A, 0 0 30px #F7931A' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
