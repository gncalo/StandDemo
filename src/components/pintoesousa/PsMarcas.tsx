import Link from "next/link";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import { viaturas } from "@/data/viaturas";
import { getMarcas } from "@/lib/derivados";
import { logoMarca } from "@/lib/marcas";
import { urlViaturasPsPorMarca } from "@/lib/slug";

export function PsMarcas() {
  const marcas = getMarcas().map((m) => ({
    ...m,
    total: viaturas.filter((v) => v.marcaSlug === m.slug).length,
    logo: logoMarca(m.slug),
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <PsSectionTitle titulo="Marcas" subtitulo="Marcas que Comercializamos" />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {marcas.map((m) => (
          <Link
            key={m.slug}
            href={urlViaturasPsPorMarca(m.slug)}
            title={`${m.nome} — ${m.total} ${m.total === 1 ? "viatura" : "viaturas"}`}
            className="group flex aspect-[3/2] flex-col items-center justify-center gap-3 border border-line/70 bg-surface px-4 transition-all duration-300 hover:border-gold/50 hover:bg-raised"
          >
            {m.logo ? (
              // eslint-disable-next-line @next/next/no-img-element -- logo estático em /public
              <img
                src={m.logo}
                alt={m.nome}
                className="h-9 w-auto max-w-[70%] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            ) : (
              <span className="font-display text-lg font-medium tracking-wide text-ink transition-colors group-hover:text-gold-bright sm:text-xl">
                {m.nome}
              </span>
            )}
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
              {m.total} {m.total === 1 ? "viatura" : "viaturas"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
