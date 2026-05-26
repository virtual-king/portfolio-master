/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        /* CSS variable injected by next/font */
        sans:    ['var(--font-inter)',   'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light:   '#0d1f3c',
          deep:    '#060e1a',
        },
      },
    },
  },
  plugins: [],
};
