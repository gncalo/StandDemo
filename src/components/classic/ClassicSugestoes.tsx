import { ClassicCarCard } from "@/components/classic/ClassicCarCard";
import { ClassicSectionHead } from "@/components/classic/ClassicSectionHead";
import { viaturas } from "@/data/viaturas";
import type { Viatura } from "@/lib/types";

export function ClassicSugestoes({ atual }: { atual: Viatura }) {
  const outras = viaturas.filter((v) => v.id !== atual.id).slice(0, 3);
  if (outras.length === 0) return null;

  return (
    <section className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <ClassicSectionHead
          rotulo="Sugestões"
          titulo="Também vai gostar destes"
          link="/classic/viaturas"
          linkRotulo="Ver todas"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outras.map((v) => (
            <ClassicCarCard key={v.id} viatura={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
