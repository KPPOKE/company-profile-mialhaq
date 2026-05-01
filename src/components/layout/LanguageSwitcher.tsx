"use client";

import { useSite } from "@/components/layout/SiteContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type LanguageSwitcherProps = {
  variant?: "compact" | "full";
};

export function LanguageSwitcher({ variant = "compact" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useSite();

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-emerald-200 bg-white/90 p-1 shadow-soft backdrop-blur-md supports-[backdrop-filter]:bg-white/80",
        variant === "full" && "w-full",
      )}
      role="tablist"
      aria-label="Language switcher"
    >
      {[
        { code: "id", label: "ID" },
        { code: "en", label: "EN" },
      ].map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code as "id" | "en")}
          className={cn(
            "relative rounded-full px-3 py-1.5 text-xs font-semibold transition focus-ring",
            variant === "full" && "flex-1 py-2 text-center",
            language === item.code
              ? "text-white"
              : "text-muted hover:bg-soft hover:text-text",
          )}
          aria-pressed={language === item.code}
        >
          {language === item.code ? (
            <motion.span
              layoutId="language-pill"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
            />
          ) : null}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
