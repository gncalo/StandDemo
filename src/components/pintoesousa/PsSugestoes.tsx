import { PsCarCard } from "@/components/pintoesousa/PsCarCard";
import { viaturas } from "@/data/viaturas";
import type { Viatura } from "@/lib/types";

export function PsSugestoes({ atual }: { atual: Viatura }) {
  const outras = viaturas.filter((v) => v.id !== atual.id).slice(0, 3);
  if (outras.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-xl font-bold uppercase tracking-tight text-ink">
        Também vai gostar destes!
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {outras.map((v) => (
          <PsCarCard key={v.id} viatura={v} />
        ))}
      </div>
    </section>
  );
}
