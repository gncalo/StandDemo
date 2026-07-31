"use client";

import { RangeSlider } from "@/components/catalogo/RangeSlider";
import { SelectField } from "@/components/catalogo/SelectField";
import { Contador } from "@/components/ui/Contador";
import {
  getCombustiveis,
  getIntervalos,
  getLotacoes,
  getMarcas,
  getModelos,
  getSegmentos,
  getTransmissoes,
} from "@/lib/derivados";
import type { Filtros } from "@/lib/filtros";
import { formatarKm, formatarPreco } from "@/lib/format";
import type { Combustivel, Segmento, Transmissao } from "@/lib/types";

export function PsFiltersPanel({
  filtros,
  onChange,
  resultados,
  onLimpar,
  onPesquisar,
}: {
  filtros: Filtros;
  onChange: (f: Filtros) => void;
  resultados: number;
  onLimpar: () => void;
  onPesquisar?: () => void;
}) {
  const intervalos = getIntervalos();
  const temFiltros = Object.entries(filtros).some(
    ([chave, valor]) => chave !== "ordenar" && valor !== undefined,
  );

  return (
    <div className="space-y-6">
      <SelectField
        rotulo="Marca"
        valor={filtros.marca ?? ""}
        todos="Selecionar"
        opcoes={getMarcas().map((m) => ({ valor: m.slug, rotulo: m.nome }))}
        onChange={(v) => onChange({ ...filtros, marca: v || undefined, modelo: undefined })}
      />
      <SelectField
        rotulo="Modelo"
        valor={filtros.modelo ?? ""}
        todos="Selecionar"
        opcoes={getModelos(filtros.marca).map((m) => ({ valor: m.slug, rotulo: m.nome }))}
        onChange={(v) => onChange({ ...filtros, modelo: v || undefined })}
      />

      <div className="hairline" />

      <RangeSlider
        rotulo="Intervalo de Preço"
        min={intervalos.preco[0]}
        max={intervalos.preco[1]}
        passo={1000}
        valorMin={filtros.precoMin ?? intervalos.preco[0]}
        valorMax={filtros.precoMax ?? intervalos.preco[1]}
        formatar={formatarPreco}
        onChange={(mn, mx) =>
          onChange({
            ...filtros,
            precoMin: mn === intervalos.preco[0] ? undefined : mn,
            precoMax: mx === intervalos.preco[1] ? undefined : mx,
          })
        }
      />
      <RangeSlider
        rotulo="Ano"
        min={intervalos.ano[0]}
        max={intervalos.ano[1]}
        passo={1}
        valorMin={filtros.anoMin ?? intervalos.ano[0]}
        valorMax={filtros.anoMax ?? intervalos.ano[1]}
        onChange={(mn, mx) =>
          onChange({
            ...filtros,
            anoMin: mn === intervalos.ano[0] ? undefined : mn,
            anoMax: mx === intervalos.ano[1] ? undefined : mx,
          })
        }
      />
      <RangeSlider
        rotulo="Quilómetros"
        min={intervalos.km[0]}
        max={intervalos.km[1]}
        passo={5000}
        valorMin={filtros.kmMin ?? intervalos.km[0]}
        valorMax={filtros.kmMax ?? intervalos.km[1]}
        formatar={formatarKm}
        onChange={(mn, mx) =>
          onChange({
            ...filtros,
            kmMin: mn === intervalos.km[0] ? undefined : mn,
            kmMax: mx === intervalos.km[1] ? undefined : mx,
          })
        }
      />
      <RangeSlider
        rotulo="Potência"
        min={intervalos.potencia[0]}
        max={intervalos.potencia[1]}
        passo={10}
        valorMin={filtros.potenciaMin ?? intervalos.potencia[0]}
        valorMax={filtros.potenciaMax ?? intervalos.potencia[1]}
        formatar={(v) => `${v} Cv`}
        onChange={(mn, mx) =>
          onChange({
            ...filtros,
            potenciaMin: mn === intervalos.potencia[0] ? undefined : mn,
            potenciaMax: mx === intervalos.potencia[1] ? undefined : mx,
          })
        }
      />

      <div className="hairline" />

      <SelectField
        rotulo="Transmissão"
        valor={filtros.transmissao ?? ""}
        todos="Selecionar"
        opcoes={getTransmissoes().map((t) => ({ valor: t, rotulo: t }))}
        onChange={(v) =>
          onChange({ ...filtros, transmissao: (v || undefined) as Transmissao | undefined })
        }
      />
      <SelectField
        rotulo="Combustível"
        valor={filtros.combustivel ?? ""}
        todos="Selecionar"
        opcoes={getCombustiveis().map((c) => ({ valor: c, rotulo: c }))}
        onChange={(v) =>
          onChange({ ...filtros, combustivel: (v || undefined) as Combustivel | undefined })
        }
      />
      <SelectField
        rotulo="Segmento"
        valor={filtros.segmento ?? ""}
        todos="Selecionar"
        opcoes={getSegmentos().map((s) => ({ valor: s, rotulo: s }))}
        onChange={(v) =>
          onChange({ ...filtros, segmento: (v || undefined) as Segmento | undefined })
        }
      />
      <SelectField
        rotulo="Lotação"
        valor={filtros.lugares ? String(filtros.lugares) : ""}
        todos="Selecionar"
        opcoes={getLotacoes().map((l) => ({ valor: String(l), rotulo: `${l} lugares` }))}
        onChange={(v) => onChange({ ...filtros, lugares: v ? Number(v) : undefined })}
      />

      <div className="hairline" />

      <button
        type="button"
        onClick={onPesquisar}
        className="gold-metal-fill flex w-full items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-background"
      >
        Ver <Contador valor={resultados} /> {resultados === 1 ? "resultado" : "resultados"}
        <span aria-hidden>🔍</span>
      </button>

      {temFiltros && (
        <button
          type="button"
          onClick={onLimpar}
          className="w-full text-center text-sm text-muted underline-offset-4 transition-colors hover:text-gold-bright hover:underline"
        >
          Limpar Parâmetros
        </button>
      )}
    </div>
  );
}
