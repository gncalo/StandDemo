import Image from "next/image";
import Link from "next/link";
import { stand } from "@/data/stand";
import { PsCallbackForm } from "@/components/pintoesousa/PsCallbackForm";

const telFixoHref = `tel:+351${stand.telefone.replaceAll(" ", "")}`;
const telMovelHref = `tel:+351${stand.telemovel.replaceAll(" ", "")}`;
const whatsapp = `https://api.whatsapp.com/send?phone=351${stand.telemovel.replaceAll(" ", "")}`;

const legais = [
  "Livro de reclamações",
  "Política de Privacidade",
  "Política de Cookies",
  "Termos e Condições",
];

export function PsFooter() {
  return (
    <footer className="border-t border-line/70 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.3fr]">
          {/* marca + social */}
          <div>
            <Image
              src="/logo/imperio-mark.png"
              alt={stand.nome}
              width={1130}
              height={596}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {stand.slogan}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={stand.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line/70 px-4 py-2 text-xs uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
              >
                Instagram
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line/70 px-4 py-2 text-xs uppercase tracking-[0.1em] text-champagne transition-colors hover:border-gold hover:text-gold-bright"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* contactos */}
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Telefone
              </p>
              <a href={telFixoHref} className="mt-1.5 block text-ink transition-colors hover:text-gold-bright">
                {stand.telefone}
              </a>
              <p className="text-xs text-muted">({stand.telefoneNota})</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Telemóvel
              </p>
              <a href={telMovelHref} className="mt-1.5 block text-ink transition-colors hover:text-gold-bright">
                {stand.telemovel}
              </a>
              <p className="text-xs text-muted">({stand.telemovelNota})</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Email
              </p>
              <a
                href={`mailto:${stand.email}`}
                className="mt-1.5 block break-all text-ink transition-colors hover:text-gold-bright"
              >
                {stand.email}
              </a>
            </div>
          </div>

          {/* call-back */}
          <div className="border border-line/70 bg-background p-6">
            <PsCallbackForm />
          </div>
        </div>
      </div>

      {/* barra legal */}
      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p>
            {stand.nome}, Lda | NIF: 500 000 000 | Copyright © 2026
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {legais.map((l) => (
              <span key={l} className="cursor-default transition-colors hover:text-champagne">
                {l}
              </span>
            ))}
            <Link href="/" className="text-champagne transition-colors hover:text-gold-bright">
              Versão premium ↗
            </Link>
          </p>
        </div>
        <p className="pb-6 text-center text-[11px] text-muted/70">
          Demonstração — dados fictícios
        </p>
      </div>
    </footer>
  );
}
