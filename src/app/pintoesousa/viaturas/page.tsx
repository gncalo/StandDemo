import type { Metadata } from "next";
import { PsCatalogoClient } from "@/components/pintoesousa/PsCatalogoClient";
import { PsOndeEstamos } from "@/components/pintoesousa/PsOndeEstamos";
import { parseFiltros } from "@/lib/filtros";

export const metadata: Metadata = {
  title: "Viaturas Usadas",
  description:
    "Pesquise o nosso stock de viaturas usadas e seminovas por marca, modelo, preço, ano, quilómetros, potência e mais.",
};

export default async function PsViaturasPage({
  searchParams,
}: PageProps<"/pintoesousa/viaturas">) {
  const sp = await searchParams;
  const filtrosIniciais = parseFiltros(sp);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-12">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
            Que Viatura Procura?
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </header>
        <PsCatalogoClient filtrosIniciais={filtrosIniciais} />
      </div>
      <PsOndeEstamos />
    </>
  );
}
