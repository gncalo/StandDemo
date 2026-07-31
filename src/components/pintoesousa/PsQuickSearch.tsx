"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Contador } from "@/components/ui/Contador";
import { viaturas } from "@/data/viaturas";
import { getCombustiveis, getMarcas, getModelos } from "@/lib/derivados";
import { filtrarViaturas, serializeFiltros } from "@/lib/filtros";
import type { Combustivel } from "@/lib/types";

const selectClasses =
  "w-full appearance-none border border-line bg-background px-4 py-3 pr-9 text-sm text-ink outline-none transition-colors focus:border-gold [&>option]:bg-surface";

function Campo({ rotulo, children }: { rotulo: string; children: React.ReactNode }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {rotulo}
      </span>
      <span className="relative block">
        {children}
        <span aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gold">
          ▾
        </span>
      </span>
    </label>
  );
}

export function PsQuickSearch() {
  const router = useRouter();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [combustivel, setCombustivel] = useState("");

  const modelos = useMemo(() => getModelos(marca || undefined), [marca]);

  const filtros = {
    marca: marca || undefined,
    modelo: modelo || undefined,
    combustivel: (combustivel || undefined) as Combustivel | undefined,
  };
  const resultados = filtrarViaturas(viaturas, filtros).length;

  const pesquisar = () => {
    const qs = serializeFiltros(filtros);
    router.push(qs ? `/pintoesousa/viaturas?${qs}` : "/pintoesousa/viaturas");
  };

  return (
    <div className="w-full border border-line/70 bg-surface/90 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Campo rotulo="Marca">
          <select
            className={selectClasses}
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
              setModelo("");
            }}
          >
            <option value="">Selecionar</option>
            {getMarcas().map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.nome}
              </option>
            ))}
          </select>
        </Campo>
        <Campo rotulo="Modelo">
          <select className={selectClasses} value={modelo} onChange={(e) => setModelo(e.target.value)}>
            <option value="">Selecionar</option>
            {modelos.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.nome}
              </option>
            ))}
          </select>
        </Campo>
        <Campo rotulo="Combustível">
          <select
            className={selectClasses}
            value={combustivel}
            onChange={(e) => setCombustivel(e.target.value)}
          >
            <option value="">Selecionar</option>
            {getCombustiveis().map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Campo>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={pesquisar}
          className="gold-metal-fill inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-background sm:w-auto"
        >
          Ver <Contador valor={resultados} /> {resultados === 1 ? "resultado" : "resultados"}
          <span aria-hidden>🔍</span>
        </button>
        <Link
          href="/pintoesousa/viaturas"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne transition-colors hover:text-gold-bright"
        >
          Pesquisa Detalhada →
        </Link>
      </div>
    </div>
  );
}
