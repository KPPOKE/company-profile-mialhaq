"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NewsCard } from "@/components/ui/NewsCard";
import { news } from "@/data/news";
import { translations } from "@/data/translations";
import { useSite } from "@/components/layout/SiteContext";

export function NewsSection() {
  const { language } = useSite();
  const t = translations[language];
  const formatter = new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section id="news" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={language === "id" ? "Berita" : "News"}
          title={
            language === "id"
              ? "Kabar MI AL HAQ untuk orang tua dan calon keluarga baru."
              : "MI AL HAQ updates for parents and prospective families."
          }
          description={
            language === "id"
              ? "Informasi disusun ringkas agar mudah dipahami, mulai dari kegiatan sekolah sampai pengumuman PPDB."
              : "Updates are kept concise and easy to understand, from school activities to admissions announcements."
          }
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => (
            <NewsCard
              key={item.titleId}
              title={language === "id" ? item.titleId : item.titleEn}
              category={language === "id" ? item.categoryId : item.categoryEn}
              date={formatter.format(new Date(item.date))}
              excerpt={language === "id" ? item.excerptId : item.excerptEn}
              href={item.href}
              readMore={t.common.readMore}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
