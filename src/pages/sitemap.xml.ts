import type { APIRoute } from 'astro';

const pages = [
  {
    path: '/',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/privacy-policy/',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/terms-of-use/',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/cookie-policy/',
    changefreq: 'yearly',
    priority: '0.3',
  },
];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString();
  const urls = pages
    .map(({ path, changefreq, priority }) => {
      const loc = new URL(path, site).toString();

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      '</urlset>',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    }
  );
};
