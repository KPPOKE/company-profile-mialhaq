"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { facilities } from "@/data/school";
import { useSite } from "@/components/layout/SiteContext";
import {
  BookOpen,
  Trees,
  Monitor,
  HeartPulse,
  Building2,
  Presentation,
  School,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const facilityIcons: LucideIcon[] = [
  School,
  Sparkles,
  BookOpen,
  Trees,
  Monitor,
  HeartPulse,
  Building2,
  Presentation,
];

export function FacilitiesSection() {
  const { language } = useSite();

  return (
    <section id="facilities" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-3 shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-soft">
              <Image
                src="/placeholders/gallery-4.svg"
                alt={language === "id" ? "Ilustrasi fasilitas MI AL HAQ" : "MI AL HAQ facilities illustration"}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-b-xl bg-deep/88 p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold uppercase text-gold">
                {language === "id" ? "Lingkungan Sekolah" : "School Environment"}
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-50">
                {language === "id"
                  ? "Ruang belajar dan area kegiatan disiapkan agar anak merasa aman, tertib, dan leluasa bergerak."
                  : "Learning and activity spaces are prepared so children feel safe, orderly, and free to move."}
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              eyebrow={language === "id" ? "Fasilitas" : "Facilities"}
              title={
                language === "id"
                  ? "Fasilitas MI AL HAQ mendukung belajar, kegiatan siswa, dan kenyamanan anak."
                  : "MI AL HAQ facilities support learning, student activities, and children's comfort."
              }
              description={
                language === "id"
                  ? "Setiap ruang dijaga rapi dan fungsional agar kegiatan harian siswa berlangsung aman, tertib, dan nyaman."
                  : "Each space is kept neat and functional so students' daily activities feel safe, orderly, and comfortable."
              }
            />

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facilities.map((facility, index) => {
                const Icon = facilityIcons[index];
                return (
                  <motion.div
                    key={facility.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className="group flex items-center gap-3 rounded-xl border border-emerald-100 bg-white p-4 transition-colors hover:bg-soft/70"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-text">
                      {language === "id" ? facility.id : facility.en}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
