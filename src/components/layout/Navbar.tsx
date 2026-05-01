"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useSite } from "@/components/layout/SiteContext";
import { translations } from "@/data/translations";
import { getSectionIdFromPath, getSectionScrollTop, scrollToSectionId } from "@/lib/navigation";

const navItems = [
  { id: "home", href: "/", sectionId: "home" },
  { id: "profile", href: "/profil", sectionId: "profil" },
  { id: "programs", href: "/program", sectionId: "programs" },
  { id: "teachers", href: "/guru", sectionId: "teachers" },
  { id: "gallery", href: "/galeri", sectionId: "gallery" },
  { id: "news", href: "/berita", sectionId: "news" },
  { id: "faq", href: "/faq", sectionId: "faq" },
  { id: "contact", href: "/kontak", sectionId: "contact" },
] as const;

type SectionId = (typeof navItems)[number]["sectionId"];

const isSectionId = (value: string): value is SectionId => navItems.some((item) => item.sectionId === value);

export function Navbar() {
  const { language } = useSite();
  const t = translations[language];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const pendingSection = useRef<SectionId | null>(null);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string, sectionId: SectionId) => {
    event.preventDefault();
    setOpen(false);
    setActiveSection(sectionId);
    pendingSection.current = sectionId;
    window.history.pushState(null, "", href);
    scrollToSectionId(sectionId);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;

    const lockActiveSection = (sectionId: SectionId) => {
      setActiveSection(sectionId);
      pendingSection.current = sectionId;
    };

    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + 96;
      const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      if (pendingSection.current) {
        const target = document.getElementById(pendingSection.current);
        const targetScrollTop = getSectionScrollTop(pendingSection.current);
        const reachedTarget =
          pendingSection.current === "home"
            ? window.scrollY <= 2
            : Boolean(target && targetScrollTop !== null && Math.abs(targetScrollTop - window.scrollY) <= 24);
        const reachedBottomTarget = pendingSection.current === navItems[navItems.length - 1].sectionId && pageBottom;

        if (!reachedTarget && !reachedBottomTarget) return;
        pendingSection.current = null;
      }

      if (pageBottom) {
        setActiveSection(navItems[navItems.length - 1].sectionId);
        return;
      }

      const current = navItems.reduce<SectionId>((active, item) => {
        const section = document.getElementById(item.sectionId);
        if (!section) return active;

        return section.offsetTop <= viewportAnchor ? item.sectionId : active;
      }, "home");

      setActiveSection(current);
    };

    const onSectionNavigate = (event: Event) => {
      const sectionId = (event as CustomEvent<string>).detail;
      if (!sectionId || !isSectionId(sectionId)) return;

      lockActiveSection(sectionId);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    const initialSection = getSectionIdFromPath(window.location.pathname);
    if (initialSection && isSectionId(initialSection)) {
      lockActiveSection(initialSection);
    }

    updateActiveSection();
    window.addEventListener("section:navigate", onSectionNavigate as EventListener);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("section:navigate", onSectionNavigate as EventListener);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/78 shadow-[0_1px_0_rgba(15,118,110,0.06),0_10px_30px_rgba(6,78,59,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/72"
          : "border-b border-transparent bg-white shadow-none"
      }`}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="/" onClick={(event) => scrollToSection(event, "/", "home")} className="group flex items-center gap-3 focus-ring">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-emerald-100">
              <Image
                src="/clear_bckround_logo_sekolah.png"
                alt="Logo MI AL HAQ"
                width={44}
                height={44}
                className="h-full w-full object-contain p-1"
                priority
              />
            </div>
            <div>
              <p className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? "text-primary" : "text-deep"}`}>
                MI AL HAQ
              </p>
              <p className={`text-xs transition-colors duration-300 ${scrolled ? "text-muted/90" : "text-muted"}`}>
                Madrasah Ibtidaiyah
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href, item.sectionId)}
                className={`relative rounded-full px-1.5 py-2 text-sm font-medium transition focus-ring ${
                  activeSection === item.sectionId ? "text-deep" : "text-muted hover:text-deep"
                }`}
              >
                {activeSection === item.sectionId ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                {t.nav[item.id]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button href="/login-sia" variant="outline" size="sm" className="rounded-full">
              {t.nav.loginSia}
            </Button>
            <Button href="/ppdb" variant="default" size="sm" className="rounded-full">
              {t.nav.ppdb}
            </Button>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-text focus-ring transition-colors duration-300 lg:hidden ${
              scrolled ? "border-emerald-200/70 bg-white/75 backdrop-blur-xl" : "border-emerald-200 bg-white shadow-soft"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden"
            >
              <div
                className={`mt-4 max-h-[calc(100svh-96px)] overflow-y-auto rounded-lg border p-4 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-white/72 ${
                  scrolled ? "border-emerald-100/60 bg-white/76" : "border-emerald-100 bg-white"
                }`}
              >
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(event) => scrollToSection(event, item.href, item.sectionId)}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                        activeSection === item.sectionId ? "bg-soft text-deep" : "text-text hover:bg-soft"
                      }`}
                    >
                      {t.nav[item.id]}
                    </a>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-[auto_auto] sm:items-center">
                  <LanguageSwitcher variant="full" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button href="/login-sia" variant="outline" size="sm" className="rounded-full">
                      {t.nav.loginSia}
                    </Button>
                    <Button href="/ppdb" variant="default" size="sm" className="rounded-full">
                      {t.nav.ppdb}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
