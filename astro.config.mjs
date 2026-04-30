import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import siteConfig from './site.config.mjs';

export default defineConfig({
  output: 'static',
  site: siteConfig.siteUrl,
  integrations: [sitemap()],
});
