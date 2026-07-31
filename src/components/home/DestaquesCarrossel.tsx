"use client";

import { useEffect, useRef, useState } from "react";
import { CarCard } from "@/components/car/CarCard";
import type { Viatura } from "@/lib/types";

const GAP = 24;
const COPIAS = 3;
const LIMIAR_ARRASTO = 6;

function visiveisPara(largura: number): number {
  if (largura < 640) return 1;
  if (largura < 1024) return 2;
  return 3;
}

export function DestaquesCarrossel({ destaques }: { destaques: Viatura[] }) {
  const n = destaques.length;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ card: 0, visiveis: 3 });

  const [activo, setActivo] = useState(n);
  const [arrastoPx, setArrastoPx] = useState(0);
  const [aArrastar, setAArrastar] = useState(false);
  const [semTransicao, setSemTransicao] = useState(false);

  const inicioX = useRef(0);
  const moveu = useRef(false);
  const ativoPonteiro = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const medir = () => {
      const container = el.clientWidth;
      const visiveis = visiveisPara(container);
      const card = (container - GAP * (visiveis - 1)) / visiveis;
      setDims({ card, visiveis });
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (semTransicao) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setSemTransicao(false)),
      );
      return () => cancelAnimationFrame(id);
    }
  }, [semTransicao]);

  if (n === 0) return null;

  const estendido = Array.from({ length: COPIAS }, () => destaques).flat();
  const step = dims.card + GAP;
  const translate = -activo * step + arrastoPx;

  const recentrar = () => {
    if (aArrastar) return;
    if (activo < n || activo >= 2 * n) {
      setSemTransicao(true);
      setActivo(n + (((activo - n) % n) + n) % n);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!dims.card) return;
    ativoPonteiro.current = true;
    moveu.current = false;
    inicioX.current = e.clientX;
    setAArrastar(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!ativoPonteiro.current) return;
    const dx = e.clientX - inicioX.current;
    if (Math.abs(dx) > LIMIAR_ARRASTO) moveu.current = true;
    setArrastoPx(dx);
  };
  const terminarArrasto = (e: React.PointerEvent) => {
    if (!ativoPonteiro.current) return;
    ativoPonteiro.current = false;
    const dx = e.clientX - inicioX.current;
    const passos = Math.round(-dx / step);
    setArrastoPx(0);
    setAArrastar(false);
    if (passos !== 0) setActivo((a) => a + passos);
  };

  const dotAtivo = ((activo % n) + n) % n;

  return (
    <div className="mt-10">
      <div ref={wrapRef} className="relative overflow-hidden">
        {/* setas */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => setActivo((a) => a - 1)}
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line/70 bg-background/90 text-lg text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-bright"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Seguinte"
          onClick={() => setActivo((a) => a + 1)}
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line/70 bg-background/90 text-lg text-ink backdrop-blur transition-colors hover:border-gold hover:text-gold-bright"
        >
          ›
        </button>

        {/* trilho arrastável */}
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={terminarArrasto}
          onPointerCancel={terminarArrasto}
          onTransitionEnd={recentrar}
          onDragStart={(e) => e.preventDefault()}
          onClickCapture={(e) => {
            if (moveu.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          style={{
            gap: GAP,
            transform: `translateX(${translate}px)`,
            touchAction: "pan-y",
          }}
          className={`flex select-none ${aArrastar ? "cursor-grabbing" : "cursor-grab"} ${
            aArrastar || semTransicao ? "" : "transition-transform duration-500 ease-out"
          }`}
        >
          {estendido.map((v, i) => {
            const copia = Math.floor(i / n);
            return (
              <div
                key={`${copia}-${v.id}`}
                style={{ width: dims.card || undefined }}
                className="shrink-0"
              >
                <CarCard viatura={v} />
              </div>
            );
          })}
        </div>
      </div>

      {/* pontos */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {destaques.map((v, i) => (
          <button
            key={v.id}
            type="button"
            aria-label={`Ver viatura ${i + 1}`}
            aria-current={i === dotAtivo}
            onClick={() => setActivo((a) => Math.floor(a / n) * n + i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === dotAtivo ? "w-6 bg-gold" : "w-2 bg-line hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
