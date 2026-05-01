"use client";

import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <Card className="h-full p-6">
      <Quote className="text-primary/70" size={22} />
      <p className="mt-4 text-sm leading-7 text-text">{quote}</p>
      <div className="mt-6">
        <p className="font-semibold text-text">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </Card>
  );
}
