/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#10b981', // Emerald 500
        'brand-dark': '#064e3b', // Emerald 900
      }
    },
  },
  plugins: [],
}
