"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function TeacherCard({
  name,
  role,
  description,
  image,
}: {
  name: string;
  role: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <Card className="group relative overflow-hidden p-0 transition-shadow hover:shadow-lift">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-gold to-emerald-100 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="flex gap-4 p-5 sm:p-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-soft ring-1 ring-emerald-100">
            <Image src={image} alt={name} fill sizes="80px" className="object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-text">{name}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{role}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
