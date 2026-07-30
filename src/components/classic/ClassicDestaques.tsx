import { ClassicCarCard } from "@/components/classic/ClassicCarCard";
import { ClassicSectionHead } from "@/components/classic/ClassicSectionHead";
import { getDestaques } from "@/lib/derivados";

export function ClassicDestaques() {
  const destaques = getDestaques();
  if (destaques.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <ClassicSectionHead
        rotulo="Seleção"
        titulo="Viaturas em Destaque"
        descricao="Uma escolha das viaturas mais procuradas do nosso stock atual."
        link="/classic/viaturas"
        linkRotulo="Ver todas"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destaques.map((v, i) => (
          <ClassicCarCard key={v.id} viatura={v} prioridade={i < 3} />
        ))}
      </div>
    </section>
  );
}
