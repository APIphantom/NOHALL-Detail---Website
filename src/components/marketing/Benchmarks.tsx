import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { benchmarks } from "@/data/marketing";
import { cn } from "@/lib/utils";

function pct(value: number, max: number) {
  return `${Math.max(4, Math.min(100, (value / max) * 100))}%`;
}

export function Benchmarks() {
  return (
    <section id="benchmarks" className="grain border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Benchmark comparison"
          title="Acima da média do mercado."
          subtitle="Cada métrica comparada ao benchmark do setor e à meta interna."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
          {benchmarks.map((b, i) => {
            const max = Math.max(b.current, b.benchmark, b.target) * 1.15;
            const better = b.higherIsBetter ? b.current > b.benchmark : b.current < b.benchmark;
            return (
              <Reveal key={b.metric} delay={i * 0.05} className="bg-elevated">
                <div className="px-6 py-8 lg:px-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {b.metric}
                    </p>
                    <span
                      className={cn(
                        "font-display text-[0.6rem] uppercase tracking-[0.22em]",
                        better ? "text-primary" : "text-subtle",
                      )}
                    >
                      {better ? "Above benchmark" : "In progress"}
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-bold">
                    {b.unit === "R$" ? `R$ ${b.current}` : `${b.current}${b.unit}`}
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Atual", value: b.current, tone: "bg-primary" },
                      { label: "Benchmark", value: b.benchmark, tone: "bg-muted-foreground/50" },
                      { label: "Meta", value: b.target, tone: "bg-foreground/30" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-4">
                        <span className="w-20 shrink-0 font-display text-[0.58rem] uppercase tracking-[0.2em] text-subtle">
                          {row.label}
                        </span>
                        <span className="h-[6px] flex-1 overflow-hidden rounded-full bg-surface-2">
                          <span
                            className={cn("block h-full rounded-full", row.tone)}
                            style={{ width: pct(row.value, max) }}
                          />
                        </span>
                        <span className="w-14 shrink-0 text-right text-xs text-muted-foreground">
                          {row.value}
                        </span>
                      </div>
                    ))}
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
