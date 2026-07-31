import { Reveal } from "@/components/ui/Reveal";
import { stand } from "@/data/stand";

const mapaEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${stand.morada} ${stand.codigoPostal}`,
)}&z=15&output=embed`;

export function SobreContactos() {
  return (
    <section id="contactos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display h-section text-ink">
            Qualidade e <span className="italic text-gold">confiança</span>
          </h2>
          {stand.sobre.map((paragrafo) => (
            <p
              key={paragrafo.slice(0, 24)}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted"
            >
              {paragrafo}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-line/60 bg-surface p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Onde estamos
            </p>
            <p className="mt-4 font-display text-2xl text-ink">{stand.nome}</p>
            <p className="mt-1 text-sm text-muted">
              {stand.morada}, {stand.codigoPostal}
            </p>

            <div className="mt-6 space-y-1 text-sm">
              <p>
                <a
                  href={`tel:+351${stand.telefone.replaceAll(" ", "")}`}
                  className="text-champagne transition-colors hover:text-gold-bright"
                >
                  {stand.telefone}
                </a>{" "}
                <span className="text-xs text-muted">({stand.telefoneNota})</span>
              </p>
              <p>
                <a
                  href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
                  className="text-champagne transition-colors hover:text-gold-bright"
                >
                  {stand.telemovel}
                </a>{" "}
                <span className="text-xs text-muted">({stand.telemovelNota})</span>
              </p>
            </div>

            <div className="hairline my-6" />

            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Horário
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {stand.horarios.map((h) => (
                <li key={h.dias} className="flex justify-between gap-4">
                  <span>{h.dias}</span>
                  <span className="text-ink">{h.horas}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={stand.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-gold/40 px-5 py-2.5 text-sm text-champagne transition-colors hover:border-gold hover:text-gold-bright"
              >
                Abrir no Google Maps ↗
              </a>
              <a
                href={stand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-gold/40 px-5 py-2.5 text-sm text-champagne transition-colors hover:border-gold hover:text-gold-bright"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <a
          href={stand.mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir a localização de ${stand.nome} no Google Maps`}
          className="group relative mt-14 block aspect-[16/7] overflow-hidden border border-line/60"
        >
          <iframe
            title={`Mapa — ${stand.nome}`}
            src={mapaEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            className="pointer-events-none h-full w-full grayscale-[0.35] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0"
          />
          <span className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 border border-gold/40 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.15em] text-champagne backdrop-blur transition-colors group-hover:border-gold group-hover:text-gold-bright">
            Abrir no Google Maps ↗
          </span>
        </a>
      </Reveal>
    </section>
  );
}
