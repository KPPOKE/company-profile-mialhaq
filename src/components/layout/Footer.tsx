"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/layout/SiteContext";
import { translations } from "@/data/translations";
import { contactInfo } from "@/data/school";

const footerLinks = [
  { href: "/profil", id: "profile" },
  { href: "/program", id: "programs" },
  { href: "/galeri", id: "gallery" },
  { href: "/kontak", id: "contact" },
];

export function Footer() {
  const { language } = useSite();
  const t = translations[language];

  return (
    <footer className="border-t border-emerald-100 bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-emerald-100">
                <Image
                  src="/clear_bckround_logo_sekolah.png"
                  alt="Logo MI AL HAQ"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-deep">MI AL HAQ</p>
                <p className="text-xs text-muted">Madrasah Ibtidaiyah</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">{t.footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-deep">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 grid gap-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted hover:text-deep">
                    {t.nav[item.id as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-deep">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 grid gap-3 text-sm text-muted">
              <li>{contactInfo.address}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.phoneSecondary}</li>
              <li>{contactInfo.phoneTertiary}</li>
              <li>{contactInfo.email}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {contactInfo.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-emerald-200 px-4 py-2 text-sm text-deep transition hover:bg-soft"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-emerald-100 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} MI AL HAQ. {t.footer.copyright}</p>
          <p>
            {language === "id"
              ? "Dirancang untuk profil Madrasah Ibtidaiyah yang bersih dan bilingual."
              : "Designed for a clean bilingual Madrasah Ibtidaiyah profile."}
          </p>
        </div>
      </Container>
    </footer>
  );
}
