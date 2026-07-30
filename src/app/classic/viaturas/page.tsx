import type { Metadata } from "next";
import { ClassicCatalogoClient } from "@/components/classic/ClassicCatalogoClient";
import { parseFiltros } from "@/lib/filtros";

export const metadata: Metadata = {
  title: "Viaturas",
  description:
    "Pesquise o nosso stock de viaturas premium por marca, modelo, preço, ano, quilómetros e mais.",
};

export default async function ClassicViaturasPage({
  searchParams,
}: PageProps<"/classic/viaturas">) {
  const sp = await searchParams;
  const filtrosIniciais = parseFiltros(sp);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-12">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Stock
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Todas as Viaturas
        </h1>
      </header>
      <ClassicCatalogoClient filtrosIniciais={filtrosIniciais} />
    </div>
  );
}
