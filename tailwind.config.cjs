/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        coral: '#FF6F61',
				'black-blue': '#1E2832',
				white: '#FFFFFF',
				black: '#000000',
				blue: '#0A183D'
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
