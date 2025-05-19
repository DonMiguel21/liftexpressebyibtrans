/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f6',
          200: '#99c3ed',
          300: '#66a5e3',
          400: '#3386da',
          500: '#0066B3', // Main primary color
          600: '#0059a0',
          700: '#004c8c',
          800: '#003e73',
          900: '#00315c',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d9d9d9',
          300: '#c4c4c4',
          400: '#9e9e9e',
          500: '#7b7b7b',
          600: '#555555',
          700: '#434343',
          800: '#262626',
          900: '#111111',
        },
        accent: {
          500: '#FF9500',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'service': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};