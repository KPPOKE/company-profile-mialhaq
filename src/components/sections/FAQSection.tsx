"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqItems } from "@/data/faq";
import { useSite } from "@/components/layout/SiteContext";

export function FAQSection() {
  const { language } = useSite();

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title={
            language === "id"
              ? "Pertanyaan yang paling sering ditanyakan."
              : "Frequently asked questions."
          }
          description={
            language === "id"
              ? "Jawaban ringkas untuk membantu orang tua memahami pendaftaran, kurikulum, tahfidz, kunjungan, dan kegiatan siswa."
              : "Concise answers to help parents understand admissions, curriculum, tahfidz, visits, and student activities."
          }
        />

        <div className="mt-12">
          <FAQAccordion
            items={faqItems.map((item) => ({
              question: language === "id" ? item.questionId : item.questionEn,
              answer: language === "id" ? item.answerId : item.answerEn,
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
