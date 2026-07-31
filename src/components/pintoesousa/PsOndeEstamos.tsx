"use client";

import { useEffect, useState } from "react";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import { stand } from "@/data/stand";

const HORARIO_SEMANA = "09:30 às 13:00 e das 14:30 às 19:00";
const HORARIO_SABADO = "09:30 às 13:00";

// índice 0 = Domingo ... 6 = Sábado (alinhado com Date.getDay)
const dias = [
  { nome: "Domingo", horas: "Encerrado", aberto: false },
  { nome: "Segunda", horas: HORARIO_SEMANA, aberto: true },
  { nome: "Terça", horas: HORARIO_SEMANA, aberto: true },
  { nome: "Quarta", horas: HORARIO_SEMANA, aberto: true },
  { nome: "Quinta", horas: HORARIO_SEMANA, aberto: true },
  { nome: "Sexta", horas: HORARIO_SEMANA, aberto: true },
  { nome: "Sábado", horas: HORARIO_SABADO, aberto: true },
];

const telFixoHref = `tel:+351${stand.telefone.replaceAll(" ", "")}`;
const telMovelHref = `tel:+351${stand.telemovel.replaceAll(" ", "")}`;
const mapaEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${stand.morada} ${stand.codigoPostal}`,
)}&z=15&output=embed`;

export function PsOndeEstamos() {
  // dia da semana só é conhecido no cliente — ler no efeito evita mismatch de hidratação
  const [hoje, setHoje] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- valor só disponível no browser após montagem
    setHoje(new Date().getDay());
  }, []);

  const diaHoje = hoje !== null ? dias[hoje] : null;
  // próximo dia em que abre (a partir de amanhã) — usado quando hoje está encerrado
  let proximoAberto: (typeof dias)[number] | null = null;
  if (hoje !== null) {
    for (let i = 1; i <= 7; i++) {
      const d = dias[(hoje + i) % 7];
      if (d.aberto) {
        proximoAberto = d;
        break;
      }
    }
  }

  return (
    <section id="contactos" className="scroll-mt-24 border-t border-line/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <PsSectionTitle titulo="Onde estamos?" subtitulo="Visite-nos!" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* cartão do stand */}
          <div className="border border-line/70 bg-surface p-7">
            <p className="text-lg font-bold text-ink">{stand.nome}</p>
            <p className="mt-1 text-sm text-muted">
              {stand.morada}, {stand.codigoPostal}
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p>
                <a href={telFixoHref} className="text-ink transition-colors hover:text-gold-bright">
                  {stand.telefone}
                </a>{" "}
                <span className="text-xs text-muted">({stand.telefoneNota})</span>
              </p>
              <p>
                <a href={telMovelHref} className="text-ink transition-colors hover:text-gold-bright">
                  {stand.telemovel}
                </a>{" "}
                <span className="text-xs text-muted">({stand.telemovelNota})</span>
              </p>
              <p>
                <a
                  href={`mailto:${stand.email}`}
                  className="break-all text-ink transition-colors hover:text-gold-bright"
                >
                  {stand.email}
                </a>
              </p>
            </div>

            <div className="my-6 h-px bg-line/60" />

            {/* estado de hoje */}
            <div className="min-h-[2.5rem]">
              {diaHoje &&
                (diaHoje.aberto ? (
                  <p className="text-sm font-bold text-gold-bright">
                    Hoje — {diaHoje.horas}
                  </p>
                ) : (
                  <p className="text-sm font-bold text-muted">
                    Encerrado hoje
                    {proximoAberto && (
                      <span className="text-gold-bright">
                        {" "}
                        · Abre {proximoAberto.nome} às 09:30h
                      </span>
                    )}
                  </p>
                ))}
            </div>

            <ul className="mt-4 space-y-1.5 text-sm">
              {[1, 2, 3, 4, 5, 6, 0].map((idx) => {
                const d = dias[idx];
                const ehHoje = hoje === idx;
                return (
                  <li
                    key={d.nome}
                    className={`flex justify-between gap-4 ${ehHoje ? "text-ink" : "text-muted"}`}
                  >
                    <span className={ehHoje ? "font-semibold text-gold" : ""}>{d.nome}</span>
                    <span>{d.horas}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href={stand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 border border-gold/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
            >
              Obter direções ↗
            </a>
          </div>

          {/* mapa */}
          <div className="min-h-[340px] overflow-hidden border border-line/70">
            <iframe
              title={`Mapa — ${stand.nome}`}
              src={mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[340px] w-full grayscale-[0.3] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
