"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { translations } from "@/data/translations";
import { useSite } from "@/components/layout/SiteContext";

const missionList: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const missionItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

export function VisionMissionSection() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t.vision.eyebrow} title={t.vision.title} />

        <div className="mt-12 grid overflow-hidden border border-emerald-100 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.55 }}
            className="bg-deep p-7 text-white sm:p-9"
          >
            <p className="text-sm font-semibold uppercase text-gold">{t.vision.visionTitle}</p>
            <p className="mt-4 text-2xl font-semibold leading-10 sm:text-[2rem]">
              {t.vision.visionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="bg-white p-7 sm:p-9"
          >
            <motion.p variants={missionItem} className="text-sm font-semibold uppercase text-primary">
              {t.vision.missionTitle}
            </motion.p>
            <motion.ul
              variants={missionList}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="mt-6 grid gap-4"
            >
              {t.vision.missions.map((mission) => (
                <motion.li key={mission} variants={missionItem} className="flex gap-3 text-sm leading-7 text-text">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{mission}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
