"use client";

import { useState } from "react";
import { stand } from "@/data/stand";

const telHref = `tel:+351${stand.telemovel.replaceAll(" ", "")}`;
const whatsapp = `https://api.whatsapp.com/send?phone=351${stand.telemovel.replaceAll(" ", "")}`;
const mailHref = `mailto:${stand.email}`;

const accoes = [
  { rotulo: "WhatsApp", href: whatsapp, externo: true },
  { rotulo: "Ligar", href: telHref, externo: false },
  { rotulo: "Email", href: mailHref, externo: false },
];

export function PsFaleAgora() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {aberto && (
        <ul className="flex flex-col items-end gap-2">
          {accoes.map((a) => (
            <li key={a.rotulo}>
              <a
                href={a.href}
                {...(a.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                className="block border border-gold/40 bg-surface px-4 py-2.5 text-sm font-medium tracking-wide text-champagne shadow-lg shadow-black/40 transition-colors hover:border-gold hover:text-gold-bright"
              >
                {a.rotulo}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => setAberto((a) => !a)}
        aria-expanded={aberto}
        className="gold-metal-fill flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-background shadow-xl shadow-black/50"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
        </span>
        {aberto ? "Fechar" : "Fale agora"}
      </button>
    </div>
  );
}
