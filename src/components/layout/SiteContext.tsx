"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "id" | "en";

type SiteContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("mia-language");
    if (saved === "id" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mia-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
