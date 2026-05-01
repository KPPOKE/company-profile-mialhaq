"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <Card className="group h-full p-6 transition-shadow duration-200 hover:shadow-lift">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-soft text-primary">
          <Icon size={22} />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-text">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </Card>
    </motion.div>
  );
}
