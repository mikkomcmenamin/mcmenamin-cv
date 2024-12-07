import type { MetadataRoute } from 'next';

const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://mcmenamin.dev'
    : 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SERVER_URL}/sitemap.xml`,
  };
}
