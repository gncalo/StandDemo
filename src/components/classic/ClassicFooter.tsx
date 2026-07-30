import Image from "next/image";
import Link from "next/link";
import { stand } from "@/data/stand";

const anoAtual = 2026;

export function ClassicFooter() {
  return (
    <footer className="border-t border-line/70 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* marca */}
          <div className="lg:col-span-1">
            <Image
              src="/logo/imperio-mark.png"
              alt={stand.nome}
              width={1130}
              height={596}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {stand.slogan} Viaturas premium com garantia, histórico documentado
              e acompanhamento do primeiro contacto à entrega.
            </p>
          </div>

          {/* navegação */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/classic" className="transition-colors hover:text-gold-bright">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/classic/viaturas" className="transition-colors hover:text-gold-bright">
                  Viaturas
                </Link>
              </li>
              <li>
                <Link href="/classic#servicos" className="transition-colors hover:text-gold-bright">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/classic#sobre" className="transition-colors hover:text-gold-bright">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/classic#contactos" className="transition-colors hover:text-gold-bright">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* contactos */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contactos
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                {stand.morada}
                <br />
                {stand.codigoPostal}
              </li>
              <li>
                <a
                  href={`tel:+351${stand.telemovel.replaceAll(" ", "")}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {stand.telemovel}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+351${stand.telefone.replaceAll(" ", "")}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {stand.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${stand.email}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {stand.email}
                </a>
              </li>
              <li>
                <a
                  href={stand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-bright"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>

          {/* horário */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Horário
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {stand.horarios.map((h) => (
                <li key={h.dias} className="flex flex-col">
                  <span className="text-muted">{h.dias}</span>
                  <span className="text-ink">{h.horas}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {anoAtual} {stand.nome}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-4">
            <span>Demonstração — dados fictícios</span>
            <Link href="/" className="text-champagne transition-colors hover:text-gold-bright">
              Versão premium ↗
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
