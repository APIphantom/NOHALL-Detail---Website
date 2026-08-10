"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ActionButton } from "@/components/ui/action-button";

const tags = ["Polimento técnico", "Recuperação de brilho", "Correção de pintura"];

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) update(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [update]);

  return (
    <section id="resultados" className="grain py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="See the difference"
          title="O resultado está nos detalhes."
          subtitle="Arraste o divisor e compare o estado real da pintura antes e depois da correção."
        />

        <Reveal className="mt-14">
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-lg border border-border sm:aspect-[16/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              update(e.clientX);
            }}
          >
            <img
              src={afterImg}
              alt="Pintura do veículo após o polimento técnico"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Pintura do veículo antes do polimento, com riscos e opacidade"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ width: ref.current?.offsetWidth ?? "100%", maxWidth: "none" }}
              />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-background/80 px-3 py-1.5 font-display text-[0.62rem] uppercase tracking-[0.24em] backdrop-blur">
              Antes
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-primary px-3 py-1.5 font-display text-[0.62rem] uppercase tracking-[0.24em] text-primary-foreground">
              Depois
            </span>

            <div
              className="absolute inset-y-0 w-px bg-primary"
              style={{ left: `${pos}%` }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Comparar antes e depois"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
                }}
                className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border border-primary bg-background/90 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-display text-[0.6rem] tracking-[0.1em] text-primary">
                  ⇄
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {tags.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 font-display text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground"
              >
                <span className="h-1 w-1 bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <ActionButton href="#galeria" variant="outline">
            Ver todos os resultados
          </ActionButton>
        </div>
      </Container>
    </section>
  );
}
