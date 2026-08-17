"use client";

import { motion } from "motion/react";
import heroCar from "@/assets/cta-car.jpg";
import { Container } from "@/components/ui/container";
import { ActionButton } from "@/components/ui/action-button";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function MarketingHero() {
  return (
    <section
      id="inicio"
      className="grain relative flex min-h-[92svh] flex-col justify-end overflow-hidden pt-28 lg:min-h-[820px]"
    >
      <motion.img
        src={heroCar}
        alt="Ambiente escuro com iluminação vermelha representando a divisão de marketing"
        fetchPriority="high"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_45%,transparent_0%,var(--background)_92%)] opacity-80" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />

      <Container className="relative z-10 pb-10 lg:pb-14">
        <motion.div variants={fade} custom={0} initial="hidden" animate="show" className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="eyebrow text-primary">Growth &amp; Performance Division</span>
        </motion.div>

        <motion.h1
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
          className="display-xl mt-7 text-[2.7rem] leading-[0.9] sm:text-6xl lg:text-[7.5rem]"
        >
          Marketing
          <br />
          that moves
          <br />
          <span className="text-primary">business.</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Estratégia, performance e execução criativa desenhadas para transformar
            atenção em crescimento mensurável.
          </motion.p>

          <motion.div
            variants={fade}
            custom={3}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <ActionButton href="#contato-marketing">Start a project</ActionButton>
            <ActionButton href="#performance" variant="outline">
              View performance
            </ActionButton>
          </motion.div>
        </div>

        <motion.div
          variants={fade}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-col gap-6 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {["We understand brands", "We understand data", "We turn marketing into growth"].map(
              (item) => (
                <span
                  key={item}
                  className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground"
                >
                  {item}
                </span>
              ),
            )}
          </div>
          <span className="font-display text-[0.62rem] uppercase tracking-[0.3em] text-subtle">
            Scroll to explore
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
