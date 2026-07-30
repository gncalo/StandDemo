import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExtrasList } from "@/components/car/ExtrasList";
import { Gallery } from "@/components/car/Gallery";
import { SpecsTable } from "@/components/car/SpecsTable";
import { StickyCard } from "@/components/car/StickyCard";
import { ClassicSugestoes } from "@/components/classic/ClassicSugestoes";
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
}: PageProps<"/classic/carros/[marca]/[modelo]/[id]">): Promise<Metadata> {
  const { marca, modelo, id } = await params;
  const v = encontrarViatura(marca, modelo, id);
  if (!v) return { title: "Viatura não encontrada" };

  const titulo = `${v.marca} ${v.modelo} ${v.versao} — ${v.registoAno}`;
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

export default async function ClassicViaturaPage({
  params,
}: PageProps<"/classic/carros/[marca]/[modelo]/[id]">) {
  const { marca, modelo, id } = await params;
  const v = encontrarViatura(marca, modelo, id);
  if (!v) notFound();

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pt-12">
        <nav aria-label="Percurso" className="mb-6 text-xs text-muted">
          <Link href="/classic/viaturas" className="transition-colors hover:text-gold-bright">
            Viaturas
          </Link>
          <span className="mx-2 text-gold-deep">/</span>
          <Link
            href={`/classic/viaturas?marca=${v.marcaSlug}`}
            className="transition-colors hover:text-gold-bright"
          >
            {v.marca}
          </Link>
          <span className="mx-2 text-gold-deep">/</span>
          <span className="text-champagne">{v.modelo}</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {v.marca}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {v.modelo} <span className="text-muted">{v.versao}</span>
          </h1>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0 space-y-14">
            <Gallery fotos={v.fotos} alt={`${v.marca} ${v.modelo}`} />
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {v.descricao}
            </p>
            <SpecsTable viatura={v} />
            <ExtrasList viatura={v} />
          </div>

          <aside>
            <StickyCard viatura={v} />
          </aside>
        </div>
      </div>

      <ClassicSugestoes atual={v} />
    </>
  );
}
