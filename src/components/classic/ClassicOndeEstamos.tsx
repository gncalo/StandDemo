import { stand } from "@/data/stand";

const mapaEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${stand.morada} ${stand.codigoPostal}`,
)}&z=15&output=embed`;

export function ClassicOndeEstamos() {
  return (
    <section id="contactos" className="scroll-mt-24 border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* contactos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Onde estamos
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Visite o nosso stand
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Estamos à sua espera. Marque uma visita ou fale connosco — respondemos
              rápido e sem compromisso.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                  Morada
                </p>
                <p className="mt-1.5 text-sm text-ink">
                  {stand.morada}, {stand.codigoPostal}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                  Telefones
                </p>
                <p className="mt-1.5 space-x-4 text-sm">
                  <a
                    href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
                    className="text-ink transition-colors hover:text-gold-bright"
                  >
                    {stand.telemovel}
                  </a>
                  <a
                    href={`tel:+351${stand.telefone.replaceAll(" ", "")}`}
                    className="text-ink transition-colors hover:text-gold-bright"
                  >
                    {stand.telefone}
                  </a>
                </p>
                <p className="mt-1 text-xs text-muted">{stand.telemovelNota}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                  Email
                </p>
                <a
                  href={`mailto:${stand.email}`}
                  className="mt-1.5 block text-sm text-ink transition-colors hover:text-gold-bright"
                >
                  {stand.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                  Horário
                </p>
                <ul className="mt-1.5 space-y-1 text-sm">
                  {stand.horarios.map((h) => (
                    <li key={h.dias} className="flex justify-between gap-4">
                      <span className="text-muted">{h.dias}</span>
                      <span className="text-ink">{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
                className="gold-metal-fill rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-background"
              >
                Ligar agora
              </a>
              <a
                href={stand.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-gold/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
              >
                Ver no Maps ↗
              </a>
            </div>
          </div>

          {/* mapa */}
          <div className="min-h-[320px] overflow-hidden rounded-lg border border-line/70">
            <iframe
              title={`Mapa — ${stand.nome}`}
              src={mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full grayscale-[0.3] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
