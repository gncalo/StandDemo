import { ClassicCarCard } from "@/components/classic/ClassicCarCard";
import { ClassicSectionHead } from "@/components/classic/ClassicSectionHead";
import { viaturas } from "@/data/viaturas";

export function ClassicUltimasEntradas() {
  const ultimas = [...viaturas]
    .sort(
      (a, b) =>
        b.registoAno - a.registoAno || b.registoMes - a.registoMes,
    )
    .slice(0, 3);

  return (
    <section className="border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <ClassicSectionHead
          rotulo="Novidades"
          titulo="Últimas Entradas"
          descricao="As viaturas mais recentes a chegar ao nosso stand."
          link="/classic/viaturas?ordenar=ano-desc"
          linkRotulo="Ver todas"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ultimas.map((v) => (
            <ClassicCarCard key={v.id} viatura={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
