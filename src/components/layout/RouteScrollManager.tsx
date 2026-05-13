"use client";

import { useEffect } from "react";
import { getSectionIdFromPath, scrollToSectionId } from "@/lib/navigation";

export function RouteScrollManager() {
  useEffect(() => {
    let userInteracted = false;

    const markUserInteraction = () => {
      userInteracted = true;
    };

    const scrollToCurrentPath = (behavior: ScrollBehavior, alignHome = false) => {
      const sectionId = getSectionIdFromPath(window.location.pathname);
      if (!sectionId) return;

      window.dispatchEvent(new CustomEvent("section:navigate", { detail: sectionId }));

      if (sectionId === "home" && !alignHome) return;

      requestAnimationFrame(() => scrollToSectionId(sectionId, behavior));

      if (sectionId === "home") return;

      window.setTimeout(() => {
        if (!userInteracted && getSectionIdFromPath(window.location.pathname) === sectionId) {
          window.dispatchEvent(new CustomEvent("section:navigate", { detail: sectionId }));
          scrollToSectionId(sectionId, "auto");
        }
      }, 260);
    };

    scrollToCurrentPath("auto", false);

    window.addEventListener("wheel", markUserInteraction, { passive: true });
    window.addEventListener("touchstart", markUserInteraction, { passive: true });
    window.addEventListener("keydown", markUserInteraction);

    const onPopState = () => {
      userInteracted = false;
      scrollToCurrentPath("smooth", true);
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("wheel", markUserInteraction);
      window.removeEventListener("touchstart", markUserInteraction);
      window.removeEventListener("keydown", markUserInteraction);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}
