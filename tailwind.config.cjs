/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#6b1c2d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
