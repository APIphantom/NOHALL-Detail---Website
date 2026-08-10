import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="grain border-y border-border bg-surface py-24 lg:py-36">
      <Container>
        <SectionHeading eyebrow="Processo" title="Como funciona" />

        <div className="relative mt-16 pl-8 sm:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.06}>
                <div className="relative grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10">
                  <span className="absolute -left-8 top-2.5 h-2 w-2 rounded-full bg-primary sm:-left-12" />
                  <span className="font-display text-3xl font-bold tracking-tight text-primary sm:w-24 lg:text-4xl">
                    {s.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl uppercase tracking-tight lg:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
