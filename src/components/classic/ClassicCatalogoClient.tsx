"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ClassicCarCard } from "@/components/classic/ClassicCarCard";
import { FiltersPanel } from "@/components/catalogo/FiltersPanel";
import { SortSelect } from "@/components/catalogo/SortSelect";
import { viaturas } from "@/data/viaturas";
import {
  filtrarViaturas,
  ordenarViaturas,
  serializeFiltros,
  type Filtros,
} from "@/lib/filtros";

export function ClassicCatalogoClient({
  filtrosIniciais,
}: {
  filtrosIniciais: Filtros;
}) {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciais);
  const [painelAberto, setPainelAberto] = useState(false);
  const primeiraRender = useRef(true);

  // estado ⇄ URL (replaceState: sem spam de histórico nem round-trips ao servidor)
  useEffect(() => {
    if (primeiraRender.current) {
      primeiraRender.current = false;
      return;
    }
    const qs = serializeFiltros(filtros);
    window.history.replaceState(
      null,
      "",
      qs ? `/classic/viaturas?${qs}` : "/classic/viaturas",
    );
  }, [filtros]);

  const resultados = useMemo(
    () => ordenarViaturas(filtrarViaturas(viaturas, filtros), filtros.ordenar),
    [filtros],
  );

  const limpar = () => setFiltros({ ordenar: filtros.ordenar });

  return (
    <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
      {/* filtros — sidebar em desktop, drawer em mobile */}
      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-lg border border-line/70 bg-surface p-6">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Pesquisa detalhada
          </p>
          <FiltersPanel
            filtros={filtros}
            onChange={setFiltros}
            resultados={resultados.length}
            onLimpar={limpar}
          />
        </div>
      </aside>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setPainelAberto(true)}
          className="w-full rounded-md border border-gold/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold"
        >
          Pesquisa detalhada · {resultados.length}{" "}
          {resultados.length === 1 ? "resultado" : "resultados"}
        </button>

        {painelAberto && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal>
            <button
              type="button"
              aria-label="Fechar filtros"
              onClick={() => setPainelAberto(false)}
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            />
            <div className="absolute inset-y-0 right-0 w-[88%] max-w-sm overflow-y-auto border-l border-line bg-surface p-6 shadow-2xl shadow-black/60">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                  Pesquisa detalhada
                </p>
                <button
                  type="button"
                  onClick={() => setPainelAberto(false)}
                  aria-label="Fechar"
                  className="flex h-9 w-9 items-center justify-center rounded border border-line text-muted transition-colors hover:border-gold hover:text-gold"
                >
                  ✕
                </button>
              </div>
              <FiltersPanel
                filtros={filtros}
                onChange={setFiltros}
                resultados={resultados.length}
                onLimpar={limpar}
              />
              <button
                type="button"
                onClick={() => setPainelAberto(false)}
                className="gold-metal-fill mt-8 w-full rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-background"
              >
                Ver resultados
              </button>
            </div>
          </div>
        )}
      </div>

      <section>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted" aria-live="polite">
            <span className="font-semibold text-ink">{resultados.length}</span>{" "}
            {resultados.length === 1 ? "viatura encontrada" : "viaturas encontradas"}
          </p>
          <SortSelect
            valor={filtros.ordenar ?? "relevancia"}
            onChange={(o) =>
              setFiltros({
                ...filtros,
                ordenar: o === "relevancia" ? undefined : o,
              })
            }
          />
        </div>

        {resultados.length === 0 ? (
          <div className="rounded-lg border border-line/70 bg-surface px-8 py-20 text-center">
            <p className="text-2xl font-bold text-ink">Sem resultados</p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Nenhuma viatura corresponde aos parâmetros escolhidos. Ajuste os
              filtros ou fale connosco — encontramos a viatura certa para si.
            </p>
            <button
              type="button"
              onClick={limpar}
              className="mt-6 rounded-md border border-gold/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
            >
              Limpar parâmetros
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {resultados.map((v, i) => (
              <ClassicCarCard key={v.id} viatura={v} prioridade={i < 2} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
