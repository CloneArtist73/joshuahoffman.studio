import { siteConfig } from '../data/site';

export function GET() {
  const localOnlyRules = (siteConfig.localOnlyBuildPaths ?? [])
    .map((path) => `Disallow: ${path}`)
    .join('\n');
  const crawlRules = localOnlyRules || 'Allow: /';
  const body = `User-agent: *\n${crawlRules}\nSitemap: ${siteConfig.siteUrl}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
