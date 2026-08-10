"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ctaCar from "@/assets/cta-car.jpg";
import { Container } from "@/components/ui/container";
import { ActionButton } from "@/components/ui/action-button";
import { whatsappUrl } from "@/data/site";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="grain relative isolate flex min-h-[560px] items-center overflow-hidden border-y border-border py-24 lg:min-h-[680px]"
    >
      <motion.img
        src={ctaCar}
        alt="Carro esportivo preto em ambiente escuro com iluminação vermelha"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 -z-10 h-[116%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/78" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,var(--background)_85%)]" />

      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl mx-auto max-w-4xl text-[2.4rem] leading-[0.92] sm:text-6xl lg:text-[5rem]"
        >
          Pronto para ver
          <br />
          seu carro de
          <br />
          <span className="text-primary">outra forma?</span>
        </motion.h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionButton href="#contato">Agendar meu serviço</ActionButton>
          <ActionButton href={whatsappUrl} target="_blank" rel="noreferrer" variant="outline">
            Falar no WhatsApp
          </ActionButton>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-subtle">
          Atendimento personalizado mediante agendamento.
        </p>
      </Container>
    </section>
  );
}
