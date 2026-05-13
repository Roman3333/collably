import type { MetadataRoute } from 'next';

//TODO:заменить HOST тут и в pablic когда загрузим на реал хост
const BASE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy-police/`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];
}
