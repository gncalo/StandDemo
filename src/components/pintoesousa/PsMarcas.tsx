import Link from "next/link";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import { viaturas } from "@/data/viaturas";
import { getMarcas } from "@/lib/derivados";
import { urlViaturasPsPorMarca } from "@/lib/slug";

export function PsMarcas() {
  const marcas = getMarcas().map((m) => ({
    ...m,
    total: viaturas.filter((v) => v.marcaSlug === m.slug).length,
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <PsSectionTitle titulo="Marcas" subtitulo="Marcas que Comercializamos" />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {marcas.map((m) => (
          <Link
            key={m.slug}
            href={urlViaturasPsPorMarca(m.slug)}
            className="group flex aspect-[3/2] flex-col items-center justify-center gap-1.5 border border-line/70 bg-surface px-3 text-center transition-all duration-300 hover:border-gold/50 hover:bg-raised"
          >
            <span className="font-display text-lg font-medium tracking-wide text-ink transition-colors group-hover:text-gold-bright sm:text-xl">
              {m.nome}
            </span>
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
              {m.total} {m.total === 1 ? "viatura" : "viaturas"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
