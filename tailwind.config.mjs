/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'saffron': '#FF9933',
        'deep-red': '#C1272D',
        'navy': '#1F3D5A',
        'cream': '#FFF8DC',
      },
    },
  },
  plugins: [],
};
