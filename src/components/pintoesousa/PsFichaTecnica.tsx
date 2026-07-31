"use client";

import { useState } from "react";
import { stand } from "@/data/stand";
import {
  formatarCilindrada,
  formatarKm,
  formatarPotencia,
  formatarRegisto,
} from "@/lib/format";
import type { Viatura } from "@/lib/types";

function simNao(v: boolean) {
  return v ? "Sim" : "Não";
}

function Par({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line/50 py-2.5">
      <dt className="text-sm text-muted">{rotulo}</dt>
      <dd className="text-right text-sm font-medium text-ink">{valor}</dd>
    </div>
  );
}

export function PsFichaTecnica({ viatura }: { viatura: Viatura }) {
  const [copiado, setCopiado] = useState(false);

  const principais: [string, string][] = [
    ["Registo", formatarRegisto(viatura.registoMes, viatura.registoAno)],
    ["Quilómetros", formatarKm(viatura.quilometros)],
    ["Lugares", String(viatura.lugares)],
    ["Segmento", viatura.segmento],
    ["Combustível", viatura.combustivel],
    ["Potência", formatarPotencia(viatura.potenciaCv)],
    ["Cilindrada", formatarCilindrada(viatura.cilindradaCc)],
    ["Transmissão", viatura.transmissao],
    ["Cor", viatura.cor],
    ["Portas", String(viatura.portas)],
    ["Estado", viatura.estado],
    ["Livro Revisões", simNao(viatura.livroRevisoes)],
    ["Garantia", viatura.garantia],
  ];

  const adicionais: [string, string][] = [
    ["Matrícula", viatura.matricula],
    ["Stand", stand.nome],
    ["Portagem", viatura.classePortagem],
    ["2ª Chave", simNao(viatura.segundaChave)],
    ["VIN", viatura.vin],
  ];

  const partilhar = async () => {
    const url = window.location.href;
    const titulo = `${viatura.marca} ${viatura.modelo} ${viatura.versao}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url });
      } catch {
        /* cancelado */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <section aria-labelledby="ficha-tecnica">
      <h2 id="ficha-tecnica" className="text-2xl font-bold uppercase tracking-tight text-ink">
        Ficha Técnica
      </h2>

      <dl className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {principais.map(([rotulo, valor]) => (
          <Par key={rotulo} rotulo={rotulo} valor={valor} />
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="border border-gold/40 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
        >
          Criar PDF / Imprimir
        </button>
        <button
          type="button"
          onClick={partilhar}
          className="border border-gold/40 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
        >
          {copiado ? "Ligação copiada ✓" : "Partilhar"}
        </button>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {adicionais.map(([rotulo, valor]) => (
          <Par key={rotulo} rotulo={rotulo} valor={valor} />
        ))}
      </dl>
    </section>
  );
}
