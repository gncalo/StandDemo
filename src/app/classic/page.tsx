import { ClassicHero } from "@/components/classic/ClassicHero";
import { ClassicDestaques } from "@/components/classic/ClassicDestaques";
import { ClassicUltimasEntradas } from "@/components/classic/ClassicUltimasEntradas";
import { ClassicMarcas } from "@/components/classic/ClassicMarcas";
import { ClassicServicos } from "@/components/classic/ClassicServicos";
import { ClassicSobre } from "@/components/classic/ClassicSobre";
import { ClassicOndeEstamos } from "@/components/classic/ClassicOndeEstamos";

export default function ClassicHome() {
  return (
    <>
      <ClassicHero />
      <ClassicDestaques />
      <ClassicUltimasEntradas />
      <ClassicMarcas />
      <ClassicServicos />
      <ClassicSobre />
      <ClassicOndeEstamos />
    </>
  );
}
