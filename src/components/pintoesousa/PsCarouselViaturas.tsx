"use client";

import Link from "next/link";
import { useRef } from "react";
import { PsCarCard } from "@/components/pintoesousa/PsCarCard";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import type { Viatura } from "@/lib/types";

export function PsCarouselViaturas({
  titulo,
  subtitulo,
  viaturas,
  verTodasHref = "/pintoesousa/viaturas",
  fundo = "base",
}: {
  titulo: string;
  subtitulo: string;
  viaturas: Viatura[];
  verTodasHref?: string;
  fundo?: "base" | "surface";
}) {
  const trilho = useRef<HTMLDivElement>(null);

  const deslizar = (dir: number) => {
    const el = trilho.current;
    if (!el) return;
    const passo = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * passo, behavior: "smooth" });
  };

  return (
    <section
      className={`${fundo === "surface" ? "border-y border-line/60 bg-surface/40" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <PsSectionTitle titulo={titulo} subtitulo={subtitulo} />

        <div className="relative mt-10">
          {/* setas */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => deslizar(-1)}
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-line/70 bg-background/90 text-lg text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-bright md:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Seguinte"
            onClick={() => deslizar(1)}
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-line/70 bg-background/90 text-lg text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-bright md:flex"
          >
            ›
          </button>

          <div
            ref={trilho}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {viaturas.map((v, i) => (
              <div
                key={v.id}
                className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
              >
                <PsCarCard viatura={v} prioridade={i < 2} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={verTodasHref}
            className="inline-flex items-center gap-2 border border-gold/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
          >
            Ver Listagem Viaturas
          </Link>
        </div>
      </div>
    </section>
  );
}
