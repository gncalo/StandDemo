"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { stand } from "@/data/stand";
// menu móvel fecha no clique de cada ligação (sem setState-em-effect por pathname)

const ligacoes = [
  { href: "/classic", rotulo: "Início" },
  { href: "/classic/viaturas", rotulo: "Viaturas" },
  { href: "/classic#servicos", rotulo: "Serviços" },
  { href: "/classic#sobre", rotulo: "Empresa" },
  { href: "/classic#contactos", rotulo: "Contactos" },
];

const telHref = `tel:+351${stand.telemovel.replaceAll(" ", "")}`;

export function ClassicHeader() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const [comFundo, setComFundo] = useState(false);

  useEffect(() => {
    const aoScroll = () => setComFundo(window.scrollY > 8);
    aoScroll();
    window.addEventListener("scroll", aoScroll, { passive: true });
    return () => window.removeEventListener("scroll", aoScroll);
  }, []);

  const ativo = (href: string) => {
    if (href === "/classic") return pathname === "/classic";
    if (href === "/classic/viaturas") return pathname.startsWith("/classic/viaturas");
    return false;
  };

  return (
    <header className="sticky top-0 z-50">
      {/* barra utilitária de contactos */}
      <div className="hidden border-b border-line/60 bg-background text-xs text-muted md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="flex items-center gap-2">
            <span className="text-gold">◆</span>
            {stand.morada}, {stand.codigoPostal}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${stand.email}`}
              className="transition-colors hover:text-gold-bright"
            >
              {stand.email}
            </a>
            <span className="text-line">|</span>
            <a
              href={stand.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-gold-bright"
            >
              Instagram
            </a>
            <span className="text-line">|</span>
            <Link href="/" className="text-champagne transition-colors hover:text-gold-bright">
              Ver versão premium ↗
            </Link>
          </div>
        </div>
      </div>

      {/* barra principal */}
      <div
        className={`border-b transition-colors duration-300 ${
          comFundo
            ? "border-line/70 bg-background/90 backdrop-blur-xl"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6">
          <Link href="/classic" aria-label={stand.nome} className="flex items-center">
            <Image
              src="/logo/imperio-mark.png"
              alt={stand.nome}
              width={1130}
              height={596}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {ligacoes.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  ativo(l.href) ? "text-gold" : "text-ink/80 hover:text-gold-bright"
                }`}
              >
                {l.rotulo}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={telHref}
              className="gold-metal-fill px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-background"
            >
              {stand.telemovel}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setAberto((a) => !a)}
            aria-expanded={aberto}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${aberto ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${aberto ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${aberto ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* menu móvel */}
      {aberto && (
        <nav
          className="border-b border-line/60 bg-background/98 px-6 py-6 lg:hidden"
          aria-label="Menu móvel"
        >
          <ul className="flex flex-col gap-1">
            {ligacoes.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="block py-3 text-lg font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold"
                >
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={telHref}
            onClick={() => setAberto(false)}
            className="gold-metal-fill mt-4 block px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-background"
          >
            Ligar {stand.telemovel}
          </a>
          <Link
            href="/"
            onClick={() => setAberto(false)}
            className="mt-4 block text-center text-xs text-champagne transition-colors hover:text-gold-bright"
          >
            Ver versão premium ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
