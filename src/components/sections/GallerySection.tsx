"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { GalleryModal } from "@/components/ui/GalleryModal";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import { useSite } from "@/components/layout/SiteContext";

const filters: { key: "all" | GalleryCategory; labelId: string; labelEn: string }[] = [
  { key: "all", labelId: "Semua", labelEn: "All" },
  { key: "learning", labelId: "Pembelajaran", labelEn: "Learning" },
  { key: "religious", labelId: "Kegiatan Religius", labelEn: "Religious Activities" },
  { key: "events", labelId: "Acara", labelEn: "Events" },
  { key: "facilities", labelId: "Fasilitas", labelEn: "Facilities" },
];

export function GallerySection() {
  const { language } = useSite();
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [active, setActive] = useState<(typeof galleryItems)[number] | null>(null);

  const items = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={language === "id" ? "Galeri" : "Gallery"}
          title={
            language === "id"
              ? "Dokumentasi kegiatan harian MI AL HAQ."
              : "Daily activity documentation from MI AL HAQ."
          }
          description={
            language === "id"
              ? "Galeri ini menampilkan suasana pembelajaran, kegiatan religius, acara sekolah, dan fasilitas yang digunakan siswa."
              : "This gallery shows learning moments, religious activities, school events, and facilities used by students."
          }
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <motion.button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              aria-pressed={filter === item.key}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-ring ${
                filter === item.key
                  ? "border-primary bg-primary text-white"
                  : "border-emerald-200 bg-white text-deep hover:bg-soft"
              }`}
            >
              {language === "id" ? item.labelId : item.labelEn}
            </motion.button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-4 md:columns-2 xl:columns-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.36, delay: index * 0.025, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className="mb-4 w-full break-inside-avoid overflow-hidden rounded-lg text-left focus-ring"
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-[4/3] bg-soft">
                    <Image
                      src={item.image}
                      alt={language === "id" ? item.titleId : item.titleEn}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                      <div className="text-sm font-semibold">
                        {language === "id" ? item.titleId : item.titleEn}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                        <Play size={16} />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      <GalleryModal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active ? (language === "id" ? active.titleId : active.titleEn) : ""}
        image={active?.image ?? ""}
      />
    </section>
  );
}
