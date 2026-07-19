import { BotaoLink } from "@/components/ui/Botao";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Erro 404</p>
      <h1 className="mt-4 font-display h-section text-ink">
        Página <span className="italic text-gold">não encontrada</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        A página que procura já não existe — talvez a viatura tenha sido
        vendida. Veja o nosso stock atualizado.
      </p>
      <div className="mt-8 flex gap-4">
        <BotaoLink href="/viaturas">Ver viaturas</BotaoLink>
        <BotaoLink href="/" variante="contorno">
          Início
        </BotaoLink>
      </div>
    </div>
  );
}
