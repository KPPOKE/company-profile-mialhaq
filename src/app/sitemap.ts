import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mialhaq.lium.site";
  const routes = ["/", "/profil", "/program", "/guru", "/galeri", "/berita", "/faq", "/kontak"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
