"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { programs } from "@/data/programs";
import { useSite } from "@/components/layout/SiteContext";

export function ProgramsSection() {
  const { language } = useSite();
  const leadPrograms = programs.slice(0, 2);
  const supportingPrograms = programs.slice(2, 6);

  return (
    <section id="programs" className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeader
            eyebrow={language === "id" ? "Program Unggulan" : "Featured Programs"}
            title={
              language === "id"
                ? "Layanan pendidikan yang memadukan kurikulum, karakter, dan lingkungan belajar nyaman."
                : "Educational services that combine curriculum, character, and a comfortable learning environment."
            }
            description={
              language === "id"
                ? "MI AL HAQ menyelenggarakan Kurikulum Merdeka dan Kurikulum Berbasis Cinta untuk mendukung perkembangan akademik serta karakter peserta didik."
                : "MI AL HAQ implements Kurikulum Merdeka and Love-Based Curriculum to support students' academic and character development."
            }
          />
          <p className="max-w-xl text-sm leading-7 text-muted lg:justify-self-end">
            {language === "id"
              ? "Fokusnya adalah mutu pendidikan yang terasa di kelas, dalam pembiasaan akhlak, serta kegiatan yang membuat anak kreatif dan percaya diri."
              : "The focus is education quality that is felt in class, in character habits, and in activities that make children creative and confident."}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          {leadPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className={
                  index === 0
                    ? "relative overflow-hidden rounded-2xl bg-deep p-7 text-white shadow-lift sm:p-9"
                    : "relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-7 text-text shadow-soft sm:p-9 lg:mt-10"
                }
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold/10" />
                <div className="absolute bottom-0 left-0 h-1 w-28 bg-gold" />
                <div className="relative flex items-center gap-3">
                  <div className={index === 0 ? "rounded-lg bg-white/12 p-3 text-gold" : "rounded-lg bg-soft p-3 text-primary"}>
                    <Icon size={23} />
                  </div>
                  <p className={index === 0 ? "text-sm font-semibold uppercase text-emerald-50" : "text-sm font-semibold uppercase text-primary"}>
                    {language === "id" ? "Program Inti" : "Core Program"}
                  </p>
                </div>
                <div className="relative mt-7 flex items-start justify-between gap-5">
                  <h3 className="text-2xl font-semibold leading-9">
                    {language === "id" ? program.id : program.en}
                  </h3>
                  <ArrowUpRight className={index === 0 ? "mt-1 shrink-0 text-gold" : "mt-1 shrink-0 text-primary"} size={22} />
                </div>
                <p className={index === 0 ? "relative mt-4 text-sm leading-7 text-emerald-50/90" : "relative mt-4 text-sm leading-7 text-muted"}>
                  {language === "id" ? program.descriptionId : program.descriptionEn}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-2xl border border-emerald-100 bg-white md:grid-cols-2">
          {supportingPrograms.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group flex gap-4 border-b border-emerald-100 p-5 transition-colors hover:bg-soft/55 last:border-b-0 md:border-r md:last:border-b md:even:border-r-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text">
                    {language === "id" ? program.id : program.en}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {language === "id" ? program.descriptionId : program.descriptionEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
