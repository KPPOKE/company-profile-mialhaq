"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeacherCard } from "@/components/ui/TeacherCard";
import { teachers } from "@/data/teachers";
import { useSite } from "@/components/layout/SiteContext";

export function TeachersSection() {
  const { language } = useSite();

  return (
    <section id="teachers" className="bg-surface/60 py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={language === "id" ? "Guru dan Tim" : "Teachers & Team"}
          title={
            language === "id"
              ? "Tim pendidik yang hangat, profesional, dan dekat dengan anak."
              : "A warm, professional team that stays close to children."
          }
          description={
            language === "id"
              ? "Guru MI AL HAQ hadir sebagai pendamping harian yang menjaga adab, ritme belajar, dan komunikasi dengan orang tua."
              : "MI AL HAQ teachers serve as daily companions who care for adab, learning rhythm, and parent communication."
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.name}
              name={teacher.name}
              role={language === "id" ? teacher.roleId : teacher.roleEn}
              description={language === "id" ? teacher.descriptionId : teacher.descriptionEn}
              image={teacher.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
