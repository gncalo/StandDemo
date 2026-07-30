"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BadgeEstado } from "@/components/car/BadgeEstado";
import {
  formatarKm,
  formatarPreco,
  formatarRegisto,
} from "@/lib/format";
import { urlViaturaClassic } from "@/lib/slug";
import type { Viatura } from "@/lib/types";

export function ClassicCarCard({
  viatura,
  prioridade = false,
}: {
  viatura: Viatura;
  prioridade?: boolean;
}) {
  const [foto, setFoto] = useState(0);
  const total = viatura.fotos.length;
  const vendido = viatura.estadoVenda === "vendido";
  const href = urlViaturaClassic(viatura);

  const mudar = (delta: number) => {
    setFoto((f) => (f + delta + total) % total);
  };

  const specs = [
    formatarRegisto(viatura.registoMes, viatura.registoAno),
    formatarKm(viatura.quilometros),
    viatura.combustivel,
    viatura.transmissao,
  ];

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line/70 bg-surface transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-black/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <BadgeEstado viatura={viatura} />
        <Link href={href} tabIndex={-1} aria-hidden>
          <Image
            src={viatura.fotos[foto]}
            alt={`${viatura.marca} ${viatura.modelo} — foto ${foto + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={prioridade && foto === 0}
            className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
              vendido ? "opacity-60 saturate-50" : ""
            }`}
          />
        </Link>

        {/* contador de fotos */}
        <span className="absolute bottom-3 right-3 z-10 rounded bg-background/75 px-2 py-1 text-[11px] font-medium tracking-wide text-champagne backdrop-blur">
          {foto + 1}/{total}
        </span>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => mudar(-1)}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-ink backdrop-blur transition-opacity duration-200 hover:bg-background/90 focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Foto seguinte"
              onClick={() => mudar(1)}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-ink backdrop-blur transition-opacity duration-200 hover:bg-background/90 focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              ›
            </button>
          </>
        )}
      </div>

      <Link href={href} className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-tight text-ink transition-colors group-hover:text-gold-bright">
          {viatura.marca} {viatura.modelo}
        </h3>
        <p className="mt-0.5 text-sm text-muted">{viatura.versao}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {specs.map((s) => (
            <li
              key={s}
              className="rounded border border-line/70 bg-raised px-2 py-1 text-[11px] uppercase tracking-[0.08em] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-end justify-between border-t border-line/60 pt-4">
          <p className="text-xl font-bold text-gold">
            {vendido ? "Vendido" : formatarPreco(viatura.preco)}
          </p>
          <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-muted transition-colors group-hover:text-gold-bright">
            Detalhes
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
