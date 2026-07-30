"use client";

import { useEffect, useState } from "react";
import { stand } from "@/data/stand";

/** CTA flutuante "Fale agora" da variante classic — pílula dourada arredondada. */
export function ClassicCtaFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoScroll = () => setVisivel(window.scrollY > 520);
    aoScroll();
    window.addEventListener("scroll", aoScroll, { passive: true });
    return () => window.removeEventListener("scroll", aoScroll);
  }, []);

  return (
    <a
      href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`gold-metal-fill fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold text-background shadow-xl shadow-black/50 transition-all duration-300 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z"
          fill="currentColor"
        />
      </svg>
      Fale agora
    </a>
  );
}
