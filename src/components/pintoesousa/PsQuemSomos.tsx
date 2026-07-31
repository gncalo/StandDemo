import Image from "next/image";
import Link from "next/link";
import { PsSectionTitle } from "@/components/pintoesousa/PsSectionTitle";
import { stand } from "@/data/stand";

export function PsQuemSomos() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <PsSectionTitle titulo="Quem Somos" subtitulo="as nossas instalações" />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-line/70">
            <Image
              src="/cars/mercedes-cla-250/03.jpg"
              alt={stand.nome}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            {stand.sobre.map((p) => (
              <p key={p.slice(0, 24)} className="mb-4 text-sm leading-relaxed text-muted sm:text-base">
                {p}
              </p>
            ))}

            <div className="mt-6 border-l-2 border-gold/50 pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-champagne">
                De Segunda a Sexta
              </p>
              <p className="mt-1 text-sm text-ink">09:30 – 13:00 · 14:30 – 19:00</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-champagne">
                Sábado
              </p>
              <p className="mt-1 text-sm text-ink">09:30 – 13:00</p>
            </div>

            <Link
              href="/pintoesousa#contactos"
              className="mt-8 inline-flex items-center gap-2 border border-gold/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
