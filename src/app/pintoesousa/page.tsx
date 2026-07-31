import { PsHero } from "@/components/pintoesousa/PsHero";
import { PsCarouselViaturas } from "@/components/pintoesousa/PsCarouselViaturas";
import { PsTipos } from "@/components/pintoesousa/PsTipos";
import { PsServicos } from "@/components/pintoesousa/PsServicos";
import { PsMarcas } from "@/components/pintoesousa/PsMarcas";
import { PsQuemSomos } from "@/components/pintoesousa/PsQuemSomos";
import { PsOndeEstamos } from "@/components/pintoesousa/PsOndeEstamos";
import { viaturas } from "@/data/viaturas";
import { getDestaques } from "@/lib/derivados";

export default function PintoesousaHome() {
  const destaques = getDestaques();
  const ultimas = [...viaturas].sort(
    (a, b) => b.registoAno - a.registoAno || b.registoMes - a.registoMes,
  );

  return (
    <>
      <PsHero />
      <PsCarouselViaturas
        titulo="Viaturas em Destaque"
        subtitulo="Sugerimos estas viaturas para si"
        viaturas={destaques.length ? destaques : viaturas}
      />
      <PsTipos />
      <PsServicos />
      <PsCarouselViaturas
        titulo="Últimas Entradas"
        subtitulo="os mais recentes"
        viaturas={ultimas}
        verTodasHref="/pintoesousa/viaturas?ordenar=ano-desc"
        fundo="surface"
      />
      <PsMarcas />
      <PsQuemSomos />
      <PsOndeEstamos />
    </>
  );
}
