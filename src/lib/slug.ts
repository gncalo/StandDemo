import type { Viatura } from "@/lib/types";

export function urlViatura(v: Viatura): string {
  return `/carros/${v.marcaSlug}/${v.modeloSlug}/${v.id}`;
}

export function urlViaturasPorMarca(marcaSlug: string): string {
  return `/viaturas?marca=${marcaSlug}`;
}

/* variante "pintoesousa" (rota /pintoesousa) — mesma estrutura, prefixo próprio */
export function urlViaturaPs(v: Viatura): string {
  return `/pintoesousa/carros/${v.marcaSlug}/${v.modeloSlug}/${v.id}`;
}

export function urlViaturasPsPorMarca(marcaSlug: string): string {
  return `/pintoesousa/viaturas?marca=${marcaSlug}`;
}
