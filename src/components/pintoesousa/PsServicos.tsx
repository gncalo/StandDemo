import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";

type Servico = { titulo: string; texto: string; icone: React.ReactNode };

const servicos: Servico[] = [
  {
    titulo: "Intermediação de Crédito",
    texto: "Protocolo com várias instituições financeiras, com taxas competitivas.",
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
    titulo: "Compramos o seu Carro",
    texto: "Avaliamos e compramos a sua viatura, com pagamento imediato.",
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
    titulo: "Garantia",
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
    titulo: "Financiamento Auto",
    texto: "Soluções de crédito à medida, com resposta rápida e sem burocracia.",
    icone: (
      <path
        d="M12 3v18M8 7h6a2.5 2.5 0 0 1 0 5H9a2.5 2.5 0 0 0 0 5h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function PsServicos() {
  return (
    <section id="servicos" className="scroll-mt-24 border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <PsSectionTitle titulo="Os nossos serviços" subtitulo="temos várias soluções" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className="border border-line/70 bg-surface p-6 text-center transition-colors duration-300 hover:border-gold/40"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-raised text-gold">
                <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
                  {s.icone}
                </svg>
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
