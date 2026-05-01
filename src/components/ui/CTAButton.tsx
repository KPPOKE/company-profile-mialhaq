import { Button } from "@/components/ui/Button";

export function CTAButton({
  href,
  children,
  variant = "default",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost";
}) {
  return (
    <Button href={href} variant={variant} className="rounded-full">
      {children}
    </Button>
  );
}
