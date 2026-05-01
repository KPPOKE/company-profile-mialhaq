"use client";

import { useEffect } from "react";
import { getSectionIdFromPath, scrollToSectionId } from "@/lib/navigation";

export function RouteScrollManager() {
  useEffect(() => {
    const scrollToCurrentPath = (behavior: ScrollBehavior) => {
      const sectionId = getSectionIdFromPath(window.location.pathname);
      if (!sectionId) return;

      window.dispatchEvent(new CustomEvent("section:navigate", { detail: sectionId }));

      requestAnimationFrame(() => scrollToSectionId(sectionId, behavior));

      // Deep sections can shift slightly while images/fonts finish layout.
      // Re-align shortly after mount so clean routes land at the same polished
      // position as navbar clicks without changing the visible URL.
      [160, 480, 900, 1500, 2300].forEach((delay) => {
        window.setTimeout(() => {
          if (getSectionIdFromPath(window.location.pathname) === sectionId) {
            window.dispatchEvent(new CustomEvent("section:navigate", { detail: sectionId }));
            scrollToSectionId(sectionId, "auto");
          }
        }, delay);
      });
    };

    scrollToCurrentPath("auto");

    const onPopState = () => scrollToCurrentPath("smooth");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
}
