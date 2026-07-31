import { stand } from "@/data/stand";
import { formatarKm, formatarPreco, formatarRegisto } from "@/lib/format";
import type { Viatura } from "@/lib/types";

export function PsResumoCard({ viatura }: { viatura: Viatura }) {
  const vendido = viatura.estadoVenda === "vendido";

  return (
    <div className="border border-line/70 bg-surface p-6 lg:sticky lg:top-24">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
        {viatura.marca}
      </p>
      <p className="mt-1 text-lg font-bold text-ink">
        {viatura.modelo} <span className="font-normal text-muted">{viatura.versao}</span>
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.08em] text-muted">
        <span>{formatarRegisto(viatura.registoMes, viatura.registoAno)}</span>
        <span className="h-3 w-px bg-line" />
        <span>{formatarKm(viatura.quilometros)}</span>
      </div>

      <div className="mt-5 border-t border-line/50 pt-5">
        <p className="text-xs uppercase tracking-[0.1em] text-muted">Preço</p>
        <p className="mt-1 text-3xl font-bold text-gold">
          {vendido ? "Vendido" : formatarPreco(viatura.preco)}
        </p>
        {viatura.ivaDedutivel && !vendido && (
          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-champagne">IVA dedutível</p>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <a
          href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
          className="gold-metal-fill block w-full px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-background"
        >
          Ligar {stand.telemovel}
        </a>
        <a
          href={`mailto:${stand.email}?subject=${encodeURIComponent(
            `Interesse: ${viatura.marca} ${viatura.modelo} (${viatura.id})`,
          )}`}
          className="block w-full border border-gold/40 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
        >
          Pedir Contacto
        </a>
      </div>
    </div>
  );
}
