import Link from "next/link";
import { ClassicSectionHead } from "@/components/classic/ClassicSectionHead";
import { viaturas } from "@/data/viaturas";
import { getMarcas } from "@/lib/derivados";
import { urlViaturasClassicPorMarca } from "@/lib/slug";

export function ClassicMarcas() {
  const marcas = getMarcas().map((m) => ({
    ...m,
    total: viaturas.filter((v) => v.marcaSlug === m.slug).length,
  }));

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <ClassicSectionHead
        rotulo="Marcas"
        titulo="Pesquise por Marca"
        descricao="Trabalhamos com marcas premium selecionadas. Escolha e filtre o stock."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {marcas.map((m) => (
          <Link
            key={m.slug}
            href={urlViaturasClassicPorMarca(m.slug)}
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-line/70 bg-surface px-6 py-8 text-center transition-all duration-300 hover:border-gold/50 hover:bg-raised"
          >
            <span className="font-display text-2xl font-medium tracking-wide text-ink transition-colors group-hover:text-gold-bright">
              {m.nome}
            </span>
            <span className="text-xs uppercase tracking-[0.12em] text-muted">
              {m.total} {m.total === 1 ? "viatura" : "viaturas"}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
