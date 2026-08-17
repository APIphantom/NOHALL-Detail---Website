import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { kpis, DATA_DISCLAIMER } from "@/data/marketing";

export function Dashboard() {
  return (
    <section id="performance" className="grain py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Performance dashboard"
          title="Growth, measured."
          subtitle="Toda campanha gera dado. Nós transformamos esse dado em decisão."
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-lg border border-border bg-elevated">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-display text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                  Nohall Growth Console
                </span>
              </div>
              <span className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-subtle">
                {DATA_DISCLAIMER}
              </span>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((k, i) => (
                <div
                  key={k.label}
                  className="group bg-elevated px-6 py-8 transition-colors duration-500 hover:bg-surface-2"
                >
                  <p className="font-display text-[0.62rem] uppercase tracking-[0.26em] text-subtle">
                    {k.label}
                  </p>
                  <Counter
                    value={k.value}
                    prefix={k.prefix}
                    suffix={k.suffix}
                    duration={1200 + i * 60}
                    className="mt-4 block text-3xl font-bold lg:text-4xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
