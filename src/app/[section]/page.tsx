import { notFound } from "next/navigation";
import { MainPage } from "@/components/layout/MainPage";
import { sectionRoutes, type SectionPath } from "@/lib/navigation";

type SectionPageProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(sectionRoutes)
    .filter((path) => path !== "/")
    .map((path) => ({ section: path.slice(1) }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const path = `/${section}` as SectionPath;

  if (!(path in sectionRoutes)) {
    notFound();
  }

  return <MainPage />;
}
