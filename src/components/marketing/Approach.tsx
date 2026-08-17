import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { methodology } from "@/data/marketing";

export function Approach() {
  return (
    <section className="grain border-y border-border bg-surface py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Approach"
          title="From attention to action."
          subtitle="Combinamos estratégia, direção criativa, mídia paga e análise de performance para construir sistemas de marketing que geram resultado real de negócio."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {methodology.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.06}>
              <div className="group h-full bg-background px-7 py-10 transition-colors duration-500 hover:bg-elevated lg:px-9 lg:py-12">
                <span className="font-display text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                  {s.number}
                </span>
                <h3 className="mt-6 font-display text-xl uppercase tracking-tight lg:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
