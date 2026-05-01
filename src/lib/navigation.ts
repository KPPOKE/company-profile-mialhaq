export const sectionRoutes = {
  "/": "home",
  "/profil": "profil",
  "/program": "programs",
  "/guru": "teachers",
  "/galeri": "gallery",
  "/berita": "news",
  "/faq": "faq",
  "/kontak": "contact",
} as const;

export type SectionPath = keyof typeof sectionRoutes;

export function getSectionIdFromPath(pathname: string) {
  return sectionRoutes[pathname as SectionPath] ?? null;
}

export function getSectionScrollTop(sectionId: string) {
  if (sectionId === "home") return 0;

  const section = document.getElementById(sectionId);
  if (!section) return null;

  const sectionHeading = section.querySelector("h2");
  const targetElement = sectionHeading ?? section;
  const targetElementTop = targetElement.getBoundingClientRect().top + window.scrollY;
  const viewportWidth = window.innerWidth;
  const headingOffset = viewportWidth >= 1024 ? 154 : 126;

  return Math.max(targetElementTop - headingOffset, 0);
}

export function scrollToSectionId(sectionId: string, behavior: ScrollBehavior = "smooth") {
  const targetTop = getSectionScrollTop(sectionId);
  if (targetTop === null) return;

  window.scrollTo({ top: targetTop, behavior });
}
