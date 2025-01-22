/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brown': {
          900: 'rgb(76,61,61)', // Marrón oscuro
          800: 'rgb(75,61,61)', // Marrón cacao
          700: 'rgb(90, 75, 75)', // Marrón madera
          600: 'rgb(105, 89, 89)',
500: 'rgb(120, 103, 103)',
400: 'rgb(135, 118, 118)', // Marrón arena
          300: 'rgb(210,180,140)', // Marrón claro
          200: '#e2c3a3', // Beige
          100: '#f0e1d4',
        }
      }, screens: {
        'max-xxsm': {
          'max': '399px'
        },
        'max-330': {
          'max': '330px'
        },
        'max-500': {
          'max': '500px'
        },
        'max-600': {
          'max': '600px'
        },
        'max-sm': {
          'max': '640px'
        }, // max-width: 640px
        'max-md': {
          'max': '768px'
        }, // max-width: 768px
        'max-800': {
          'max': '800px'
        },
        'max-995': {
          'max': '995px'
        },
        'max-lg': {
          'max': '1024px'
        }, // max-width: 1024px
        'max-xl': {
          'max': '1100px'
        }, // max-width: 1280px
        'max-xsm': {
          'max': '500px'
        },
        'max-intermedio': {
          'max': '800px'
        },
        'min-intermedio': {
          'min': '800px'
        }
      }
    },
  },
  plugins: [],
};
