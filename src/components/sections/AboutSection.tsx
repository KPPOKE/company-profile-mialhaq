"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { translations } from "@/data/translations";
import { schoolValues } from "@/data/school";
import { useSite } from "@/components/layout/SiteContext";

export function AboutSection() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <section id="profil" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />
            <div className="mt-8 h-px w-40 section-rule" />
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55 }}
              className="border-l border-emerald-200 pl-6 sm:pl-8"
            >
              <p className="text-sm font-semibold uppercase text-primary">
                {language === "id" ? "Sejarah Singkat" : "Short History"}
              </p>
              <p className="mt-4 text-base leading-8 text-muted">{t.about.history}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="bg-surface px-5 py-6 sm:px-7"
            >
              <p className="text-sm font-semibold text-deep">
                {language === "id" ? "Pendekatan MI AL HAQ" : "MI AL HAQ approach"}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                {language === "id"
                  ? "Ritme sekolah dijaga sederhana dan konsisten: anak datang dengan tenang, belajar dengan arahan jelas, beribadah bersama, lalu pulang membawa kebiasaan baik."
                  : "The school rhythm is kept simple and consistent: children arrive calmly, learn with clear guidance, worship together, and return home carrying good habits."}
              </p>
            </motion.div>

            <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
              {schoolValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="flex gap-4 border-t border-emerald-100 py-5"
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-soft text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-text">
                        {language === "id" ? value.id : value.en}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {language === "id" ? value.descriptionId : value.descriptionEn}
                      </p>
                    </div>
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
