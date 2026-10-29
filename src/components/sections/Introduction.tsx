import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  { n: "01", label: "Precisão" },
  { n: "02", label: "Técnica" },
  { n: "03", label: "Resultado" },
];

export function Introduction() {
  return (
    <section id="sobre" className="grain relative overflow-hidden py-24 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-24">
          <Reveal>
            <h2 className="display-xl text-[2.6rem] leading-[0.92] sm:text-6xl lg:text-[5.2rem]">
              Mais do que
              <br />
              limpeza.
              <br />
              <span className="text-subtle">Uma nova</span>
              <br />
              presença.
            </h2>
          </Reveal>

          <div className="flex flex-col justify-end gap-10 lg:pb-3">
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cada veículo possui características únicas. Por isso, nossos serviços
                são realizados considerando pintura, acabamento, interior e estado
                geral do veículo.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.n} className="bg-surface px-6 py-7">
                  <span className="font-display text-xs tracking-[0.24em] text-primary">
                    {p.n}
                  </span>
                  <p className="mt-3 font-display text-sm uppercase tracking-[0.2em]">
                    {p.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
