import Image from "next/image";
import { PsQuickSearch } from "@/components/pintoesousa/PsQuickSearch";

export function PsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cars/porsche-macan/02.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <h1 className="text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Que Viatura <span className="text-gold-metal">Procura?</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base">
          Automóveis usados e seminovos premium, verificados ponto a ponto, com
          garantia e histórico documentado.
        </p>

        <div className="mt-10">
          <PsQuickSearch />
        </div>
      </div>
    </section>
  );
}
