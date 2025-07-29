import { MetadataRoute } from 'next';
import getPerfumeNames from './etiquettes';

async function getPerfumesForSitemap() {
  const perfumes = await getPerfumeNames();
  return perfumes.map(p => ({ name: p.name, lastModified: new Date() }));
}

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const perfumes = await getPerfumesForSitemap();
  const perfumeEntries: MetadataRoute.Sitemap = perfumes.map((perfume) => ({
    url: `https://luciasylvia.fr/perfume/${perfume.name}`,
    lastModified: perfume.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Retourner toutes les entrées du sitemap (statiques + dynamiques)
  return [
    {
      url: 'https://luciasylvia.fr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1, // La page d'accueil est généralement la plus importante
    },
    {
      url: 'https://luciasylvia.fr/#Parfums',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://luciasylvia.fr/#Contacts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...perfumeEntries,
  ];
}