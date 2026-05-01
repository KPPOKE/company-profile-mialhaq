"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { translations } from "@/data/translations";
import { useSite } from "@/components/layout/SiteContext";

export function VideoProfileSection() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <section className="bg-surface/60 py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t.video.eyebrow} title={t.video.title} description={t.video.description} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] bg-[linear-gradient(180deg,#f8faf7,white)] p-6 sm:min-h-[420px] sm:p-8">
                <div className="absolute inset-0 pattern-dot opacity-25" />
                <div className="relative flex h-full items-center justify-center rounded-lg border border-dashed border-emerald-200 bg-white/70">
                  <button
                    type="button"
                    aria-label={t.common.watchVideo}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-lift transition-transform hover:scale-105 focus-ring"
                  >
                    <Play size={28} fill="currentColor" />
                  </button>
                </div>
              </div>
              <div className="flex items-end p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase text-primary">
                    MI AL HAQ
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-10 text-text">
                    {language === "id"
                      ? "Video profil yang singkat, jelas, dan mudah diakses."
                      : "A short, clear, and accessible profile video."}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {language === "id"
                      ? "Area ini dapat diganti dengan video resmi sekolah ketika materi final sudah tersedia."
                      : "This area can later be replaced by the school's official video once final material is ready."}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
