"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { useSite } from "@/components/layout/SiteContext";

export function TestimonialsSection() {
  const { language } = useSite();
  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow={language === "id" ? "Testimoni" : "Testimonials"}
            title={
              language === "id"
                ? "Pengalaman yang terasa dari keseharian anak."
                : "Experiences reflected in children's daily growth."
            }
            description={
              language === "id"
                ? "Kami memilih suara yang sederhana dan natural karena profil sekolah seharusnya terasa dekat dengan keluarga."
                : "We keep the voices simple and natural because a school profile should feel close to families."
            }
          />

          <div className="grid gap-5">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55 }}
              className="bg-deep p-7 text-white sm:p-9"
            >
              <Quote className="text-gold" size={28} />
              <blockquote className="mt-5 text-xl font-medium leading-9">
                {language === "id" ? featured.quoteId : featured.quoteEn}
              </blockquote>
              <figcaption className="mt-7 text-sm text-emerald-50">
                <span className="font-semibold text-white">{featured.name}</span>
                <span className="mx-2 text-emerald-200">/</span>
                {language === "id" ? featured.roleId : featured.roleEn}
              </figcaption>
            </motion.figure>

            <div className="grid gap-0 border-y border-emerald-100 bg-white">
              {others.map((item, index) => (
                <motion.figure
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="grid gap-3 border-b border-emerald-100 p-5 last:border-b-0 sm:grid-cols-[0.28fr_0.72fr]"
                >
                  <figcaption>
                    <p className="font-semibold text-text">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {language === "id" ? item.roleId : item.roleEn}
                    </p>
                  </figcaption>
                  <blockquote className="text-sm leading-7 text-muted">
                    {language === "id" ? item.quoteId : item.quoteEn}
                  </blockquote>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
