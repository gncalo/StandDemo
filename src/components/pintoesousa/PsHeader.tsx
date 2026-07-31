"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { stand } from "@/data/stand";

const telHref = `tel:+351${stand.telemovel.replaceAll(" ", "")}`;

type Item = { rotulo: string; href: string };
type Entrada = { rotulo: string; href?: string; filhos?: Item[] };

const nav: Entrada[] = [
  {
    rotulo: "Viaturas",
    filhos: [
      { rotulo: "Automóveis", href: "/pintoesousa/viaturas" },
      { rotulo: "Motos", href: "/pintoesousa/viaturas" },
    ],
  },
  { rotulo: "Pesquisar", href: "/pintoesousa/viaturas" },
  {
    rotulo: "Serviços",
    filhos: [
      { rotulo: "Intermediação de Crédito", href: "/pintoesousa#servicos" },
      { rotulo: "Compramos o seu Carro", href: "/pintoesousa#servicos" },
      { rotulo: "Notícias", href: "/pintoesousa#servicos" },
      { rotulo: "Galeria Automóvel", href: "/pintoesousa#servicos" },
    ],
  },
  { rotulo: "Contactos", href: "/pintoesousa#contactos" },
];

export function PsHeader() {
  // o menu móvel fecha no clique de cada ligação (sem setState-em-effect por pathname)
  const [menuMovel, setMenuMovel] = useState(false);
  const [abertoMovel, setAbertoMovel] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/pintoesousa" aria-label={stand.nome} className="flex items-center">
          <Image
            src="/logo/imperio-mark.png"
            alt={stand.nome}
            width={1130}
            height={596}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {nav.map((e) =>
            e.filhos ? (
              <div key={e.rotulo} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/85 transition-colors group-hover:text-gold-bright"
                >
                  {e.rotulo}
                  <span aria-hidden className="text-[10px] text-gold">
                    ▾
                  </span>
                </button>
                <div className="invisible absolute left-0 top-full min-w-[230px] translate-y-1 border border-line/70 bg-surface opacity-0 shadow-2xl shadow-black/50 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {e.filhos.map((f) => (
                    <Link
                      key={f.rotulo}
                      href={f.href}
                      className="block border-b border-line/40 px-4 py-3 text-[13px] text-muted transition-colors last:border-0 hover:bg-raised hover:text-gold-bright"
                    >
                      {f.rotulo}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={e.rotulo}
                href={e.href!}
                className="px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink/85 transition-colors hover:text-gold-bright"
              >
                {e.rotulo}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.12em] text-champagne/70 transition-colors hover:text-gold-bright"
          >
            Versão premium ↗
          </Link>
          <a
            href={telHref}
            className="gold-metal-fill px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.1em] text-background"
          >
            Falar agora
          </a>
        </div>

        {/* botão menu móvel */}
        <button
          type="button"
          onClick={() => setMenuMovel((a) => !a)}
          aria-expanded={menuMovel}
          aria-label={menuMovel ? "Fechar menu" : "Abrir menu"}
          className="flex items-center gap-2 lg:hidden"
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
            Menu
          </span>
          <span className="flex h-9 w-9 flex-col items-center justify-center gap-1.5">
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${menuMovel ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${menuMovel ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${menuMovel ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* menu móvel */}
      {menuMovel && (
        <nav className="border-t border-line/60 bg-background px-4 py-4 sm:px-6 lg:hidden" aria-label="Menu móvel">
          <ul className="flex flex-col">
            {nav.map((e) => (
              <li key={e.rotulo} className="border-b border-line/40">
                {e.filhos ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setAbertoMovel((a) => (a === e.rotulo ? null : e.rotulo))}
                      aria-expanded={abertoMovel === e.rotulo}
                      className="flex w-full items-center justify-between py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-ink"
                    >
                      {e.rotulo}
                      <span
                        aria-hidden
                        className={`text-gold transition-transform ${abertoMovel === e.rotulo ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                    {abertoMovel === e.rotulo && (
                      <ul className="pb-2">
                        {e.filhos.map((f) => (
                          <li key={f.rotulo}>
                            <Link
                              href={f.href}
                              onClick={() => setMenuMovel(false)}
                              className="block py-2.5 pl-4 text-sm text-muted transition-colors hover:text-gold-bright"
                            >
                              {f.rotulo}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={e.href!}
                    onClick={() => setMenuMovel(false)}
                    className="block py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold-bright"
                  >
                    {e.rotulo}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a
            href={telHref}
            onClick={() => setMenuMovel(false)}
            className="gold-metal-fill mt-4 block px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-background"
          >
            Falar agora — {stand.telemovel}
          </a>
          <Link
            href="/"
            onClick={() => setMenuMovel(false)}
            className="mt-3 block text-center text-xs uppercase tracking-[0.12em] text-champagne/70 transition-colors hover:text-gold-bright"
          >
            Versão premium ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
