"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, BookOpenCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { translations } from "@/data/translations";
import { schoolStats } from "@/data/school";
import { useSite } from "@/components/layout/SiteContext";

const heroGroup: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
};

export function HeroSection() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <section id="home" className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden hero-school">
      <div className="absolute inset-x-0 top-0 h-14 bg-deep/18" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
      <Container className="relative flex min-h-[calc(100svh-76px)] flex-col justify-end pb-7 pt-20 sm:pb-9 sm:pt-24 lg:justify-center lg:pb-0 lg:pt-20 xl:pt-16">
        <motion.div
          variants={heroGroup}
          initial="hidden"
          animate="show"
          className="max-w-3xl pb-6 text-white sm:pb-7 lg:pb-8"
        >
          <motion.div variants={heroItem} className="flex max-w-[20rem] flex-wrap items-center gap-x-3 gap-y-2 text-sm text-emerald-50 sm:max-w-none">
            <span className="inline-flex items-center gap-2 border-l-2 border-gold pl-3 font-medium">
              <BookOpenCheck size={17} />
              {t.hero.eyebrow}
            </span>
            <span className="inline-flex items-center gap-2 text-emerald-50/85">
              <MapPin size={16} />
              {language === "id" ? "Lingkungan perkotaan strategis" : "Strategic urban environment"}
            </span>
          </motion.div>

          <motion.h1 variants={heroItem} className="mt-5 text-[3.15rem] font-semibold leading-[0.98] text-white sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl">
            {t.hero.title}
          </motion.h1>
          <motion.p variants={heroItem} className="mt-5 max-w-2xl text-base leading-8 text-emerald-50 sm:mt-6 sm:text-lg">
            {t.hero.description}
          </motion.p>

          <motion.div variants={heroItem} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button href="/ppdb" className="rounded-full bg-white text-deep hover:bg-soft" size="lg">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={heroGroup}
          initial="hidden"
          animate="show"
          className="relative grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/25 bg-white/20 backdrop-blur-md lg:grid-cols-4"
        >
          {schoolStats.map((stat) => (
            <motion.div key={stat.value} variants={heroItem} className="bg-white/86 p-4 sm:p-5">
              <div className="text-2xl font-semibold leading-none text-deep">{stat.value}</div>
              <div className="mt-1 text-sm text-muted">{language === "id" ? stat.id : stat.en}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
