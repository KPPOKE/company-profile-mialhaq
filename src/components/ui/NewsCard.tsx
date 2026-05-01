"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function NewsCard({
  title,
  category,
  date,
  excerpt,
  href,
  readMore,
}: {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  readMore: string;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <Card className="h-full p-6">
        <div className="text-xs font-semibold uppercase text-primary">
          {category}
        </div>
        <p className="mt-2 text-sm text-muted">{date}</p>
        <h3 className="mt-4 text-lg font-semibold leading-7 text-text">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{excerpt}</p>
        <a
          href={href}
          className="mt-5 inline-flex text-sm font-medium text-deep underline-offset-4 hover:underline"
        >
          {readMore}
        </a>
      </Card>
    </motion.div>
  );
}
