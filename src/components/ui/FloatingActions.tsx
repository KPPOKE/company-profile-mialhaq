"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { contactInfo } from "@/data/school";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 h-[116px] w-14 md:bottom-6 md:right-6">
      <motion.a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="pointer-events-auto absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lift transition-transform hover:scale-105 focus-ring"
        animate={{ y: visible ? -60 : 0 }}
        transition={
          visible
            ? { type: "tween", duration: 0.2, ease: "easeOut" }
            : { type: "tween", duration: 0.28, ease: [0.55, 0, 1, 0.45] }
        }
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <MessageCircle size={24} />
      </motion.a>

      <AnimatePresence initial={false}>
        {visible ? (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pointer-events-auto absolute bottom-0 left-1 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white text-deep shadow-soft focus-ring"
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ type: "tween", duration: 0.16, ease: "easeOut" }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
