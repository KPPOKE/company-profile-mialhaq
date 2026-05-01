"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteScrollManager } from "@/components/layout/RouteScrollManager";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VideoProfileSection } from "@/components/sections/VideoProfileSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useSite } from "@/components/layout/SiteContext";

export function MainPage() {
  const { language } = useSite();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white pt-[72px]">
      <RouteScrollManager />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={language}
          initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -4, filter: "blur(2px)" }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSection />
          <AboutSection />
          <VisionMissionSection />
          <ProgramsSection />
          <FacilitiesSection />
          <TeachersSection />
          <GallerySection />
          <VideoProfileSection />
          <NewsSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </div>
  );
}
