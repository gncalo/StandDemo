import type { Viatura } from "@/lib/types";

export function urlViatura(v: Viatura): string {
  return `/carros/${v.marcaSlug}/${v.modeloSlug}/${v.id}`;
}

export function urlViaturasPorMarca(marcaSlug: string): string {
  return `/viaturas?marca=${marcaSlug}`;
}

/* variante "classic" (rota /classic) — mesma estrutura, prefixo próprio */
export function urlViaturaClassic(v: Viatura): string {
  return `/classic/carros/${v.marcaSlug}/${v.modeloSlug}/${v.id}`;
}

export function urlViaturasClassicPorMarca(marcaSlug: string): string {
  return `/classic/viaturas?marca=${marcaSlug}`;
}
