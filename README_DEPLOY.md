# Deploying this Astro site to InMotion cPanel (static only)

1. Install dependencies:

```bash
npm install
```

2. Build the static site:

```bash
npm run build
```

3. Upload all files from the generated `dist/` folder to `public_html` on your cPanel account.

Notes:

- This is a static Astro output (`output: 'static'`).
- No backend, database, Node runtime, WordPress, or server-side rendering is required.
- Update links in `src/data/externalLinks.ts` and the form action in `site.config.mjs` before launch.
