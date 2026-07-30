import Image from "next/image";
import Link from "next/link";
import { viaturas } from "@/data/viaturas";
import { ClassicQuickSearch } from "@/components/classic/ClassicQuickSearch";

export function ClassicHero() {
  const total = viaturas.length;

  return (
    <section className="relative isolate overflow-hidden">
      {/* imagem de fundo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cars/porsche-macan/01.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24 lg:pb-24 lg:pt-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-champagne backdrop-blur">
            <span className="text-gold">◆</span>
            {total} viaturas premium em stock
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            A viatura certa,
            <br />
            <span className="text-gold-metal">escolhida a dedo.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Automóveis usados e seminovos, verificados ponto a ponto, com garantia
            e histórico documentado. Pesquise e encontre o seu.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/classic/viaturas"
              className="gold-metal-fill rounded-md px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-background"
            >
              Ver todas as viaturas
            </Link>
            <Link
              href="/classic#contactos"
              className="rounded-md border border-gold/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <ClassicQuickSearch />
        </div>
      </div>
    </section>
  );
}
