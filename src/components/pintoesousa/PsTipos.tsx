import Link from "next/link";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import { viaturas } from "@/data/viaturas";
import { getSegmentos } from "@/lib/derivados";
import type { Segmento } from "@/lib/types";

const icones: Record<Segmento, React.ReactNode> = {
  SUV: (
    <path
      d="M3 15h18M5 15l1.5-5h11L19 15M4 15v2m16-2v2M7.5 10.5 8 7h8l.5 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Coupé: (
    <path
      d="M3 15h18M4 15l2-4c3-2.5 9-2.5 13 0l2 4M4 15v2m16-2v2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Berlina: (
    <path
      d="M3 15h18M4 15l2-3.5c4-2 8-2 12 0l2 3.5M4 15v2m16-2v2M7 11.5 8 8.5h8l1 3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Carrinha: (
    <path
      d="M3 15h18M4 15l1-6h14l2 6M4 15v2m16-2v2M6 9v6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Cabrio: (
    <path
      d="M3 15h18M4 15l2-4c3-1 9-1 12 0l2 4M4 15v2m16-2v2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Citadino: (
    <path
      d="M4 15h16M5 15l1.5-4.5h9L17 15M5 15v2m14-2v2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
};

export function PsTipos() {
  const segmentos = getSegmentos().map((s) => ({
    nome: s,
    total: viaturas.filter((v) => v.segmento === s).length,
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <PsSectionTitle titulo="Encontre o tipo que procura" subtitulo="temos várias soluções" />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {segmentos.map((s) => (
          <Link
            key={s.nome}
            href={`/pintoesousa/viaturas?segmento=${encodeURIComponent(s.nome)}`}
            className="group flex flex-col items-center gap-3 border border-line/70 bg-surface px-4 py-6 text-center transition-all duration-300 hover:border-gold/50 hover:bg-raised"
          >
            <span className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5">
              <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden>
                {icones[s.nome]}
              </svg>
            </span>
            <span className="text-sm font-semibold text-ink transition-colors group-hover:text-gold-bright">
              {s.nome}
            </span>
            <span className="text-[11px] uppercase tracking-[0.1em] text-muted">
              {s.total} {s.total === 1 ? "viatura" : "viaturas"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
