import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { plans } from "@/data/plans";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="planos"
      className="grain relative border-y border-border bg-[linear-gradient(180deg,var(--petrol)_0%,var(--surface)_60%)] py-24 lg:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow text-primary">Planos</span>
            </div>
            <h2 className="display-xl text-[2.4rem] leading-[0.92] sm:text-6xl lg:text-[4.6rem]">
              Escolha o
              <br />
              nível do seu
              <br />
              tratamento.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:pb-2">
              Todos os planos são executados por especialistas, com produtos técnicos e
              inspeção final sob iluminação controlada.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-lg border bg-elevated p-7 transition-colors duration-300 hover:bg-surface-2 lg:p-9",
                  p.featured
                    ? "border-primary/25"
                    : "border-border hover:border-primary/25",
                )}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-7 rounded-sm bg-primary px-3 py-1.5 font-display text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground">
                    {p.badge}
                  </span>
                )}
                <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-subtle">
                  Plano 0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-8 flex items-end gap-3 border-t border-border pt-8">
                  <span
                    className={cn(
                      "font-display text-4xl font-bold tracking-tight",
                      p.featured && "text-primary",
                    )}
                  >
                    {p.price}
                  </span>
                  <span className="pb-1.5 text-xs text-subtle">{p.duration}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={cn(
                    "mt-10 inline-flex items-center justify-center rounded-sm border px-6 py-4 font-display text-[0.68rem] font-light uppercase tracking-[0.2em] transition-colors duration-300",
                    p.featured
                      ? "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                      : "border-foreground/35 bg-transparent text-foreground hover:border-primary hover:bg-primary/8",
                  )}
                >
                  {p.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
