/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0c0c0c',
        paper: '#f7f2e8',
        sand: '#ddd4c2',
        sage: '#9bb29d',
        ember: '#bc7b56',
        platinum: '#C0C0C0',
        dusk: '#1c1b25',
        steel: '#b7b8c0',
      },
      fontFamily: {
        display: ['"Newsreader Variable"', 'Georgia', 'serif'],
        sans: ['"Manrope Variable"', 'Aptos', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.22)',
      },
      maxWidth: {
        copy: '68ch',
      },
      borderRadius: {
        panel: '2rem',
      },
      letterSpacing: {
        hush: '0.24em',
      },
    },
  },
  plugins: [],
};
