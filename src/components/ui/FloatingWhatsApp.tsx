"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingWhatsApp({ href }: { href: string }) {
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 md:bottom-6 md:right-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: raised ? -48 : 0 }}
      transition={{
        opacity: { duration: 0.2 },
        y: { type: "spring", stiffness: 240, damping: 26, mass: 0.7 },
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lift transition-transform hover:scale-105 focus-ring"
      >
        <MessageCircle size={24} />
      </a>
    </motion.div>
  );
}
