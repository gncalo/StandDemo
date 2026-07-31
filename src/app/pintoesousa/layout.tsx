import type { Metadata } from "next";
import { PsHeader } from "@/components/pintoesousa/PsHeader";
import { PsFooter } from "@/components/pintoesousa/PsFooter";
import { PsFaleAgora } from "@/components/pintoesousa/PsFaleAgora";

export const metadata: Metadata = {
  title: {
    default: "Imperio Auto Concept — Stand de Carros Usados no Porto",
    template: "%s | Imperio Auto Concept",
  },
};

export default function PintoesousaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PsHeader />
      <main className="flex-1">{children}</main>
      <PsFooter />
      <PsFaleAgora />
    </>
  );
}
