import { ClassicSectionHead } from "@/components/classic/ClassicSectionHead";

type Servico = {
  titulo: string;
  texto: string;
  icone: React.ReactNode;
};

const servicos: Servico[] = [
  {
    titulo: "Financiamento",
    texto: "Soluções de crédito à medida, com resposta rápida e sem burocracia.",
    icone: (
      <path
        d="M3 7h18v10H3V7Zm0 4h18M7 15h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    titulo: "Garantia incluída",
    texto: "Todas as viaturas com garantia e histórico documentado ponto a ponto.",
    icone: (
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Zm-2.5 8.5 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    titulo: "Retoma",
    texto: "Avaliamos a sua viatura atual e integramos o valor no novo negócio.",
    icone: (
      <path
        d="M4 8h11l-2-2m2 2-2 2M20 16H9l2-2m-2 2 2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    titulo: "Entrega em todo o país",
    texto: "Tratamos de toda a logística e entregamos a viatura onde precisar.",
    icone: (
      <path
        d="M3 7h11v8H3V7Zm11 3h4l3 3v2h-7V10ZM7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function ClassicServicos() {
  return (
    <section id="servicos" className="scroll-mt-24 border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <ClassicSectionHead
          rotulo="O que oferecemos"
          titulo="Serviços"
          descricao="Acompanhamos cada cliente do primeiro contacto à entrega."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className="rounded-lg border border-line/70 bg-surface p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-raised text-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                  {s.icone}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
