"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="grain py-24 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow text-primary">Depoimentos</span>
            </div>
            <h2 className="display-xl text-[2.3rem] leading-[0.92] sm:text-5xl lg:text-[4rem]">
              Quem confia,
              <br />
              recomenda.
            </h2>
            <div className="mt-10 flex gap-3">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
                className="grid h-12 w-12 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => setI((v) => (v + 1) % testimonials.length)}
                className="grid h-12 w-12 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="ml-3 self-center font-display text-xs tracking-[0.24em] text-subtle">
                0{i + 1} / 0{testimonials.length}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border border-border bg-elevated p-8 lg:p-12"
              >
                <div className="flex gap-1" aria-label={`Avaliação ${t.rating} de 5`}>
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-8 font-display text-xl leading-snug sm:text-2xl lg:text-[1.8rem]">
                  “{t.quote}”
                </p>
                <footer className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-primary/50 font-display text-sm text-primary">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm uppercase tracking-[0.14em]">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-subtle">{t.car}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
