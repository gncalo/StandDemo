import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/car/Gallery";
import { ExtrasList } from "@/components/car/ExtrasList";
import { PsFichaTecnica } from "@/components/pintoesousa/PsFichaTecnica";
import { PsResumoCard } from "@/components/pintoesousa/PsResumoCard";
import { PsSugestoes } from "@/components/pintoesousa/PsSugestoes";
import { PsOndeEstamos } from "@/components/pintoesousa/PsOndeEstamos";
import { viaturas } from "@/data/viaturas";
import { formatarKm, formatarPreco } from "@/lib/format";

export async function generateStaticParams() {
  return viaturas.map((v) => ({
    marca: v.marcaSlug,
    modelo: v.modeloSlug,
    id: v.id,
  }));
}

function encontrarViatura(marca: string, modelo: string, id: string) {
  return viaturas.find(
    (v) => v.id === id && v.marcaSlug === marca && v.modeloSlug === modelo,
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/pintoesousa/carros/[marca]/[modelo]/[id]">): Promise<Metadata> {
  const { marca, modelo, id } = await params;
  const v = encontrarViatura(marca, modelo, id);
  if (!v) return { title: "Viatura não encontrada" };

  const titulo = `${v.marca} ${v.modelo} ${v.versao}`;
  const descricao = `${v.marca} ${v.modelo} ${v.versao}, ${v.registoAno}, ${formatarKm(
    v.quilometros,
  )}, ${v.combustivel}. ${
    v.estadoVenda === "vendido" ? "Vendido" : formatarPreco(v.preco)
  }. ${v.descricao}`;

  return {
    title: titulo,
    description: descricao,
    openGraph: {
      title: titulo,
      description: descricao,
      images: [{ url: v.fotos[0] }],
    },
  };
}

export default async function PsViaturaPage({
  params,
}: PageProps<"/pintoesousa/carros/[marca]/[modelo]/[id]">) {
  const { marca, modelo, id } = await params;
  const v = encontrarViatura(marca, modelo, id);
  if (!v) notFound();

  const vendido = v.estadoVenda === "vendido";

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <nav aria-label="Percurso" className="mb-5 text-xs text-muted">
          <Link href="/pintoesousa/viaturas" className="transition-colors hover:text-gold-bright">
            Viaturas
          </Link>
          <span className="mx-2 text-gold-deep">/</span>
          <Link
            href={`/pintoesousa/viaturas?marca=${v.marcaSlug}`}
            className="transition-colors hover:text-gold-bright"
          >
            {v.marca}
          </Link>
          <span className="mx-2 text-gold-deep">/</span>
          <span className="text-champagne">{v.modelo}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <Gallery fotos={v.fotos} alt={`${v.marca} ${v.modelo}`} />

            <header className="mt-8">
              <h1 className="text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
                {v.marca} {v.modelo}{" "}
                <span className="font-normal text-muted">{v.versao}</span>
              </h1>
              <p className="mt-2 text-3xl font-bold text-gold">
                {vendido ? "Vendido" : formatarPreco(v.preco)}
              </p>
            </header>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{v.descricao}</p>

            <div className="mt-10">
              <PsFichaTecnica viatura={v} />
            </div>

            <div className="mt-12">
              <ExtrasList viatura={v} />
            </div>

            <PsSugestoes atual={v} />
          </div>

          <aside>
            <PsResumoCard viatura={v} />
          </aside>
        </div>
      </div>

      <PsOndeEstamos />
    </>
  );
}
