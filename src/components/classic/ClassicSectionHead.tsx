import Link from "next/link";

/** Cabeçalho de secção da variante classic: rótulo dourado + título + link opcional. */
export function ClassicSectionHead({
  rotulo,
  titulo,
  descricao,
  link,
  linkRotulo,
}: {
  rotulo?: string;
  titulo: string;
  descricao?: string;
  link?: string;
  linkRotulo?: string;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        {rotulo && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {rotulo}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {titulo}
        </h2>
        {descricao && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {descricao}
          </p>
        )}
      </div>
      {link && linkRotulo && (
        <Link
          href={link}
          className="group inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.1em] text-champagne transition-colors hover:text-gold-bright"
        >
          {linkRotulo}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
