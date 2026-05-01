import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-emerald-100 bg-white shadow-soft",
        className,
      )}
      {...props}
    />
  );
}
