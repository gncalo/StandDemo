import Link from "next/link";
import { stand } from "@/data/stand";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ink">
              Stand<span className="italic text-gold">Demo</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {stand.slogan}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted transition-colors hover:text-ink">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/viaturas"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Viaturas
                </Link>
              </li>
              <li>
                <Link
                  href="/#contactos"
                  className="text-muted transition-colors hover:text-ink"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Contactos
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                {stand.morada}, {stand.codigoPostal}
              </li>
              <li>
                <a
                  href={`tel:+351${stand.telefone.replaceAll(" ", "")}`}
                  className="transition-colors hover:text-ink"
                >
                  {stand.telefone}
                </a>{" "}
                <span className="text-xs">({stand.telefoneNota})</span>
              </li>
              <li>
                <a
                  href={`mailto:${stand.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {stand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-12" />
        <p className="mt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} {stand.nome} — site de demonstração.
          Viaturas e dados fictícios.
        </p>
      </div>
    </footer>
  );
}
