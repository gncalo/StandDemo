import Image from "next/image";
import { stand } from "@/data/stand";

const numeros = [
  { valor: "100%", rotulo: "Viaturas verificadas" },
  { valor: "12 m", rotulo: "Garantia mínima" },
  { valor: "6", rotulo: "Marcas premium" },
];

export function ClassicSobre() {
  return (
    <section id="sobre" className="scroll-mt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line/70">
          <Image
            src="/cars/mercedes-cla-250/01.jpg"
            alt={stand.nome}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Sobre nós
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {stand.nome}
          </h2>
          {stand.sobre.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
            >
              {p}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line/60 pt-8">
            {numeros.map((n) => (
              <div key={n.rotulo}>
                <dt className="text-2xl font-bold text-gold sm:text-3xl">{n.valor}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-muted">
                  {n.rotulo}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
