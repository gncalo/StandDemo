const euros = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const numero = new Intl.NumberFormat("pt-PT");

export const MESES_ABREV = [
  "Jan.",
  "Fev.",
  "Mar.",
  "Abr.",
  "Mai.",
  "Jun.",
  "Jul.",
  "Ago.",
  "Set.",
  "Out.",
  "Nov.",
  "Dez.",
] as const;

export function formatarPreco(valor: number): string {
  return euros.format(valor);
}

export function formatarNumero(valor: number): string {
  return numero.format(valor);
}

export function formatarKm(valor: number): string {
  return `${numero.format(valor)} km`;
}

export function formatarRegisto(mes: number, ano: number): string {
  return `${MESES_ABREV[mes - 1]} ${ano}`;
}

export function formatarPotencia(cv: number): string {
  return `${cv} cv`;
}

export function formatarCilindrada(cc: number): string {
  return `${numero.format(cc)} cc`;
}
