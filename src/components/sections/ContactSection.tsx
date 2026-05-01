"use client";

import type { ComponentPropsWithoutRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/school";
import { translations } from "@/data/translations";
import { useSite } from "@/components/layout/SiteContext";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

type FloatingInputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

type FloatingTextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
};

const fieldShellClass =
  "group relative rounded-xl border border-emerald-200 bg-white transition duration-200 focus-within:border-primary focus-within:shadow-[0_12px_34px_rgba(15,118,110,0.08)]";

const floatingLabelClass =
  "pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white px-1 text-sm text-muted transition-all duration-200 ease-out group-focus-within:top-0 group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-medium peer-not-placeholder-shown:text-primary";

function FloatingInput({ id, label, className = "", ...props }: FloatingInputProps) {
  return (
    <div className={fieldShellClass}>
      <input
        id={id}
        placeholder=" "
        className={`peer h-12 w-full rounded-xl bg-transparent px-4 text-sm text-text outline-none ${className}`}
        {...props}
      />
      <label className={floatingLabelClass} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ id, label, className = "", ...props }: FloatingTextareaProps) {
  return (
    <div className={fieldShellClass}>
      <textarea
        id={id}
        placeholder=" "
        className={`peer min-h-[124px] w-full resize-y rounded-xl bg-transparent px-4 py-4 text-sm text-text outline-none ${className}`}
        {...props}
      />
      <label
        className={`${floatingLabelClass} top-5 translate-y-0 group-focus-within:top-0 peer-not-placeholder-shown:top-0`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export function ContactSection() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <section id="contact" className="bg-surface/60 py-20 sm:py-24">
      <Container>
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-text">{t.contact.formTitle}</h3>
            <form className="mt-6 grid gap-4">
              <FloatingInput
                id="contact-name"
                type="text"
                label={t.contact.formName}
                autoComplete="name"
              />
              <FloatingInput
                id="contact-email"
                type="email"
                label={t.contact.formEmail}
                autoComplete="email"
              />
              <FloatingInput
                id="contact-phone"
                type="tel"
                label={t.contact.formPhone}
                autoComplete="tel"
              />
              <FloatingTextarea
                id="contact-message"
                rows={5}
                label={t.contact.formMessage}
              />
              <Button type="button" className="w-full rounded-full">
                {t.contact.formButton}
              </Button>
            </form>

            <div className="mt-8 grid gap-4 border-t border-emerald-100 pt-8 text-sm text-muted">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.phoneSecondary}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.phoneTertiary}</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 text-primary" size={18} />
                <span>{contactInfo.hours}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full"
                variant="secondary"
              >
                <MessageCircle size={16} />
                {t.contact.whatsappLabel}
              </Button>
              <Button href="/ppdb" variant="outline" className="rounded-full">
                {t.hero.ctaPrimary}
              </Button>
            </div>
          </Card>

          <div className="grid gap-4">
            <Card className="overflow-hidden rounded-2xl leading-none">
              <iframe
                title="Lokasi MI AL HAQ di Google Maps"
                className="block h-[320px] w-full border-0 md:h-[420px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2672222405054!2d106.74095647499048!3d-6.228457593759669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0b6b9566a07%3A0x7fe098ff1f64cc3a!2sMI%20Al%20Haq!5e0!3m2!1sen!2sid!4v1777600122051!5m2!1sen!2sid"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-semibold text-text">{language === "id" ? "Jam operasional" : "Office hours"}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{contactInfo.hours}</p>
              <div className="mt-6 rounded-lg bg-soft p-5 text-sm text-deep">
                {language === "id"
                  ? "Silakan jadwalkan kunjungan agar tim kami bisa mempersiapkan sambutan yang nyaman."
                  : "Please schedule your visit so our team can prepare a comfortable welcome."}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
