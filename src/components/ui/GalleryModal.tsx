"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function GalleryModal({
  open,
  onClose,
  title,
  image,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/62 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.97, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.75 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lift"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(event) => event.stopPropagation()}
          >
            <motion.button
              onClick={onClose}
              aria-label="Close gallery preview"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-text shadow-soft focus-ring"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <X size={18} />
            </motion.button>
            <div className="grid gap-0 md:grid-cols-[1.3fr_0.7fr]">
              <motion.div
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative min-h-[320px] bg-soft md:min-h-[520px]"
              >
                <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
              </motion.div>
              <div className="flex items-end p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.08, ease: "easeOut" }}
                >
                  <p className="text-sm font-semibold uppercase text-primary">
                    Gallery Preview
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-text">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Tampilan pratinjau ini membantu pengunjung melihat dokumentasi sekolah dengan lebih jelas.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
