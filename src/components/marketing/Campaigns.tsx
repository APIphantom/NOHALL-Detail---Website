"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { campaigns } from "@/data/marketing";
import { cn } from "@/lib/utils";

const rows: { key: keyof (typeof campaigns)[number]; label: string }[] = [
  { key: "objective", label: "Objetivo" },
  { key: "investment", label: "Investimento" },
  { key: "reach", label: "Alcance" },
  { key: "leads", label: "Leads" },
  { key: "sales", label: "Vendas" },
  { key: "revenue", label: "Receita" },
  { key: "roas", label: "ROAS" },
  { key: "conversion", label: "Conversão" },
];

export function Campaigns() {
  const [active, setActive] = useState(campaigns[0]!.id);
  const current = campaigns.find((c) => c.id === active)!;

  return (
    <section id="campanhas" className="grain border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Campaign performance"
          title="Resultado por campanha."
          subtitle="Cada operação com objetivo, verba e retorno declarados."
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-2">
            {campaigns.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "rounded-sm border px-5 py-3 font-display text-[0.62rem] uppercase tracking-[0.22em] transition-colors",
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {rows.map((r) => (
              <div key={r.key} className="bg-elevated px-6 py-7">
                <p className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-subtle">
                  {r.label}
                </p>
                <p className="mt-3 text-lg font-semibold lg:text-xl">{current[r.key]}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
