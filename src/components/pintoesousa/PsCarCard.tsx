"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BadgeEstado } from "@/components/car/BadgeEstado";
import {
  formatarNumero,
  formatarPreco,
  formatarRegisto,
} from "@/lib/format";
import { urlViaturaPs } from "@/lib/slug";
import type { Viatura } from "@/lib/types";

export function PsCarCard({
  viatura,
  prioridade = false,
}: {
  viatura: Viatura;
  prioridade?: boolean;
}) {
  const [foto, setFoto] = useState(0);
  const total = viatura.fotos.length;
  const vendido = viatura.estadoVenda === "vendido";
  const href = urlViaturaPs(viatura);

  const mudar = (delta: number, e: React.MouseEvent) => {
    e.preventDefault();
    setFoto((f) => (f + delta + total) % total);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-line/70 bg-surface transition-colors duration-300 hover:border-gold/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        <BadgeEstado viatura={viatura} />
        <Link href={href} aria-label={`${viatura.marca} ${viatura.modelo}`}>
          <Image
            src={viatura.fotos[foto]}
            alt={`${viatura.marca} ${viatura.modelo} — foto ${foto + 1}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
            priority={prioridade && foto === 0}
            className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
              vendido ? "opacity-60 saturate-50" : ""
            }`}
          />
        </Link>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(e) => mudar(-1, e)}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-background/70 text-ink backdrop-blur transition-opacity duration-200 hover:bg-background/90 lg:opacity-0 lg:group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Foto seguinte"
              onClick={(e) => mudar(1, e)}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center bg-background/70 text-ink backdrop-blur transition-opacity duration-200 hover:bg-background/90 lg:opacity-0 lg:group-hover:opacity-100"
            >
              ›
            </button>
          </>
        )}
      </div>

      <Link href={href} className="flex flex-1 flex-col p-4">
        {/* linha de stats */}
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.08em] text-muted">
          <span>{formatarRegisto(viatura.registoMes, viatura.registoAno)}</span>
          <span className="h-3 w-px bg-line" />
          <span>{viatura.combustivel}</span>
          <span className="h-3 w-px bg-line" />
          <span>{vendido ? "—" : `${formatarNumero(viatura.quilometros)} km`}</span>
        </div>

        <h3 className="mt-2.5 text-[15px] font-bold leading-tight text-ink transition-colors group-hover:text-gold-bright">
          {viatura.marca} {viatura.modelo}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-[13px] text-muted">{viatura.versao}</p>

        <div className="mt-3 flex items-end justify-between border-t border-line/50 pt-3">
          {vendido ? (
            <span className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">
              Viatura Vendida
            </span>
          ) : (
            <span className="flex items-baseline gap-1.5">
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted">Preço</span>
              <span className="text-lg font-bold text-gold">
                {formatarPreco(viatura.preco)}
              </span>
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
