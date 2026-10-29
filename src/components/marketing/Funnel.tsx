import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { funnel } from "@/data/marketing";

const fmt = new Intl.NumberFormat("pt-BR");

export function Funnel() {
  const max = funnel[0]!.value;

  return (
    <section id="funil" className="border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Conversion funnel"
          title="Do impacto à receita."
          subtitle="Cada etapa medida, com perda controlada e ponto de otimização visível."
        />

        <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-border bg-border">
          {funnel.map((step, i) => {
            const width = Math.max(18, (step.value / max) * 100);
            const prev = i > 0 ? funnel[i - 1]!.value : null;
            const rate = prev ? ((step.value / prev) * 100).toFixed(1) : null;
            return (
              <Reveal key={step.stage} delay={i * 0.05}>
                <div className="group relative bg-elevated px-6 py-7 transition-colors duration-500 hover:bg-surface-2 lg:px-8">
                  <span
                    className="absolute inset-y-0 left-0 bg-primary/10 transition-all duration-700 group-hover:bg-primary/20"
                    style={{ width: `${width}%` }}
                  />
                  <div className="relative flex flex-wrap items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-[0.62rem] tracking-[0.26em] text-primary">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
                          {step.stage}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{step.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold lg:text-3xl">{fmt.format(step.value)}</p>
                      {rate && (
                        <p className="font-display text-[0.58rem] uppercase tracking-[0.22em] text-subtle">
                          {rate}% da etapa anterior
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
