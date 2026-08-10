import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicos" className="grain relative border-y border-border bg-surface py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="O que fazemos"
          subtitle="Tratamentos desenvolvidos para transformar a aparência e a conservação do seu veículo."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-elevated transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.title} — estética automotiva premium`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elevated via-elevated/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/12" />
                  <span className="absolute left-5 top-5 font-display text-xs tracking-[0.3em] text-primary">
                    {s.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className="font-display text-2xl uppercase tracking-tight lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-sm border border-border px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.14em] text-subtle"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="mt-8 inline-flex items-center gap-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary"
                  >
                    Solicitar orçamento
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
