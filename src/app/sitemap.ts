import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mia-alfaq.example";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/login-sia`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ppdb`,
      lastModified: new Date(),
    },
  ];
}
