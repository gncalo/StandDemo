/** Título de secção da pintoesousa: h2 grande centrado + h3 subtítulo dourado por baixo. */
export function PsSectionTitle({
  titulo,
  subtitulo,
  alinhamento = "center",
}: {
  titulo: string;
  subtitulo?: string;
  alinhamento?: "center" | "left";
}) {
  return (
    <div className={alinhamento === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold uppercase tracking-tight text-ink sm:text-[2.5rem]">
        {titulo}
      </h2>
      {subtitulo && (
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-gold">
          {subtitulo}
        </p>
      )}
      <div
        className={`mt-5 h-px w-16 bg-gold ${alinhamento === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
