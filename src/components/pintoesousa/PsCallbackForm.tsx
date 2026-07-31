"use client";

import { useState } from "react";

/** Bloco "Precisa de Ajuda? Nós Ligamos!" — decorativo (demo, não envia nada). */
export function PsCallbackForm() {
  const [tel, setTel] = useState("");
  const [aceite, setAceite] = useState(false);
  const [enviado, setEnviado] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (tel && aceite) setEnviado(true);
      }}
      className="space-y-3"
    >
      <p className="text-sm font-semibold text-ink">Precisa de Ajuda? Nós Ligamos!</p>
      {enviado ? (
        <p className="text-sm text-gold-bright">
          Obrigado! Entraremos em contacto brevemente. ✓
        </p>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              type="tel"
              inputMode="tel"
              required
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="O seu telefone"
              className="min-w-0 flex-1 border border-line bg-background px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold"
            />
            <button
              type="submit"
              className="gold-metal-fill shrink-0 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-background"
            >
              Ligue-me
            </button>
          </div>
          <label className="flex items-start gap-2 text-xs text-muted">
            <input
              type="checkbox"
              checked={aceite}
              onChange={(e) => setAceite(e.target.checked)}
              required
              className="mt-0.5 accent-[oklch(0.70_0.093_76)]"
            />
            <span>
              Li e Aceito os Termos de Utilização e Proteção de Dados.
            </span>
          </label>
        </>
      )}
    </form>
  );
}
