"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/data/marketing";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [active, setActive] = useState(caseStudies[0]!.id);
  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <section id="cases" className="grain border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Case studies"
          title="Desafio, estratégia, resultado."
          subtitle="Operações reais em estrutura ilustrativa — pronta para receber os números do cliente."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Reveal className="flex flex-col gap-2">
            {caseStudies.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-sm border px-5 py-5 text-left transition-colors",
                  active === c.id
                    ? "border-primary bg-elevated"
                    : "border-border hover:border-primary/60",
                )}
              >
                <span className="font-display text-[0.58rem] uppercase tracking-[0.24em] text-subtle">
                  {c.segment}
                </span>
                <p className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.12em]">
                  {c.name}
                </p>
              </button>
            ))}
          </Reveal>

          <div className="rounded-lg border border-border bg-elevated p-6 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  {[
                    { label: "Desafio", value: current.challenge },
                    { label: "Estratégia", value: current.strategy },
                    { label: "Execução", value: current.execution },
                  ].map((b) => (
                    <div key={b.label}>
                      <p className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-primary">
                        {b.label}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {b.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
                  {current.results.map((r) => (
                    <div key={r.label} className="bg-surface-2 px-4 py-6 text-center">
                      <p className="text-xl font-bold text-primary lg:text-2xl">{r.value}</p>
                      <p className="mt-2 font-display text-[0.56rem] uppercase tracking-[0.24em] text-subtle">
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
