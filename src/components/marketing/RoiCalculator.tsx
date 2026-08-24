"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { DATA_DISCLAIMER } from "@/data/marketing";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [budget, setBudget] = useState(20000);
  const [ticket, setTicket] = useState(1200);
  const [conversion, setConversion] = useState(4);

  const result = useMemo(() => {
    const cpl = 9.5;
    const leads = Math.round(budget / cpl);
    const sales = Math.round((leads * conversion) / 100);
    const revenue = sales * ticket;
    const roas = budget > 0 ? revenue / budget : 0;
    return { leads, sales, revenue, roas };
  }, [budget, ticket, conversion]);

  const fields = [
    { label: "Investimento mensal", value: budget, set: setBudget, min: 3000, max: 120000, step: 1000, format: (v: number) => brl.format(v) },
    { label: "Ticket médio", value: ticket, set: setTicket, min: 100, max: 20000, step: 100, format: (v: number) => brl.format(v) },
    { label: "Taxa de conversão", value: conversion, set: setConversion, min: 1, max: 15, step: 1, format: (v: number) => `${v}%` },
  ];

  return (
    <section id="roi" className="border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="ROI projection"
          title="Simule o retorno."
          subtitle="Projeção baseada em médias ilustrativas da operação. Ajuste os parâmetros."
        />

        <Reveal className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
            <div className="space-y-9 bg-elevated px-6 py-9 lg:px-10">
              {fields.map((f) => (
                <div key={f.label}>
                  <div className="flex items-baseline justify-between">
                    <label
                      htmlFor={f.label}
                      className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <span className="font-display text-sm font-semibold text-primary">
                      {f.format(f.value)}
                    </span>
                  </div>
                  <input
                    id={f.label}
                    type="range"
                    min={f.min}
                    max={f.max}
                    step={f.step}
                    value={f.value}
                    onChange={(e) => f.set(Number(e.target.value))}
                    className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-surface-2 accent-primary"
                  />
                </div>
              ))}
              <p className="font-display text-[0.58rem] uppercase tracking-[0.24em] text-subtle">
                {DATA_DISCLAIMER}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { label: "Leads estimados", value: result.leads.toLocaleString("pt-BR") },
                { label: "Vendas estimadas", value: result.sales.toLocaleString("pt-BR") },
                { label: "Receita projetada", value: brl.format(result.revenue) },
                { label: "ROAS projetado", value: `${result.roas.toFixed(1)}x` },
              ].map((r) => (
                <div key={r.label} className="bg-elevated px-6 py-9">
                  <p className="font-display text-[0.6rem] uppercase tracking-[0.26em] text-subtle">
                    {r.label}
                  </p>
                  <p className="mt-4 text-2xl font-bold lg:text-3xl">{r.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
