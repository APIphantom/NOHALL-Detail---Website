"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { LineChart } from "@/components/marketing/LineChart";
import { audienceCounters, audienceSeries, salesSeries, DATA_DISCLAIMER } from "@/data/marketing";
import { cn } from "@/lib/utils";

const tabs = Object.keys(audienceSeries);

export function GrowthCharts() {
  const [tab, setTab] = useState(tabs[0]!);

  return (
    <section id="crescimento" className="border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Growth evolution"
          title="Antes e depois da estratégia."
          subtitle="A curva muda quando marca, dado e execução operam juntos."
        />

        <Reveal className="mt-12">
          <div className="rounded-lg border border-border bg-elevated p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                Sales evolution
              </span>
              <span className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-subtle">
                {DATA_DISCLAIMER}
              </span>
            </div>
            <LineChart data={salesSeries} markerFrom={2} valueFormatter={(v) => `${Math.round(v)}`} />
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-lg border border-border bg-elevated p-6 lg:p-8">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={cn(
                    "rounded-sm border px-4 py-2.5 font-display text-[0.62rem] uppercase tracking-[0.22em] transition-colors",
                    tab === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <LineChart
              data={audienceSeries[tab]!}
              markerFrom={2}
              valueFormatter={(v) => `${Math.round(v)}`}
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {audienceCounters.map((c, i) => (
            <div key={c.label} className="bg-elevated px-6 py-8">
              <p className="font-display text-[0.62rem] uppercase tracking-[0.26em] text-subtle">
                {c.label}
              </p>
              <Counter
                value={c.value}
                suffix={c.suffix}
                duration={1200 + i * 80}
                className="mt-4 block text-3xl font-bold lg:text-4xl"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
