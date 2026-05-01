"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.36, delay: index * 0.035, ease: "easeOut" }}
          >
          <Card className={cn("overflow-hidden transition-colors", open && "border-primary/30 bg-soft/30")}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-ring sm:px-6"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="text-base font-medium text-text">{item.question}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
                className="shrink-0 text-primary"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -6 }}
                    animate={{ y: 0 }}
                    exit={{ y: -4 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6"
                  >
                    {item.answer}
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
