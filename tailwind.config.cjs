/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-on-primary-container': {
          borderColor: 'var(--md-sys-color-on-primary-container)',
        },
        '.text-primary': {
          color: 'var(--md-sys-color-primary)',
        },
        '.text-secondary': {
          color: 'var(--md-sys-color-secondary)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
