import type { MetadataRoute } from 'next';

const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://mcmenamin.dev'
    : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SERVER_URL,
    },
  ];
}
