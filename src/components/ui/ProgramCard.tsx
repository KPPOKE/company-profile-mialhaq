"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import type { LucideIcon } from "lucide-react";

export function ProgramCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.01 }} transition={{ duration: 0.2 }}>
      <Card className="group h-full p-6 transition-shadow duration-200 hover:shadow-lift">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft text-primary transition-transform duration-200 group-hover:scale-105">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
