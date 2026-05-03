import { rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import siteConfig from './site.config.mjs';

function normalizeRoutePath(pathname) {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedPath === '/') {
    return normalizedPath;
  }

  return normalizedPath.endsWith('/') || normalizedPath.includes('.')
    ? normalizedPath
    : `${normalizedPath}/`;
}

const noindexPathnames = new Set((siteConfig.noindexPaths ?? []).map(normalizeRoutePath));

function isNoindexUrl(pageUrl) {
  return noindexPathnames.has(normalizeRoutePath(new URL(pageUrl).pathname));
}

function pruneLocalOnlyBuildPaths() {
  return {
    name: 'prune-local-only-build-paths',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        for (const routePath of siteConfig.localOnlyBuildPaths ?? []) {
          const relativePath = normalizeRoutePath(routePath).replace(/^\/+/, '');

          await rm(new URL(relativePath, dir), { force: true, recursive: true });
          logger.info(`Removed local-only route from static output: ${routePath}`);
        }
      },
    },
  };
}

export default defineConfig({
  output: 'static',
  site: siteConfig.siteUrl,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexUrl(page),
    }),
    pruneLocalOnlyBuildPaths(),
  ],
});
