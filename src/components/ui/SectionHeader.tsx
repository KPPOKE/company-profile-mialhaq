import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-sm font-semibold uppercase text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
