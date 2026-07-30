import type { Metadata } from "next";
import { ClassicHeader } from "@/components/classic/ClassicHeader";
import { ClassicFooter } from "@/components/classic/ClassicFooter";
import { ClassicCtaFlutuante } from "@/components/classic/ClassicCtaFlutuante";

export const metadata: Metadata = {
  title: {
    default: "Imperio Auto Concept — Stand de Automóveis",
    template: "%s | Imperio Auto Concept",
  },
};

export default function ClassicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClassicHeader />
      <main className="flex-1">{children}</main>
      <ClassicFooter />
      <ClassicCtaFlutuante />
    </>
  );
}
