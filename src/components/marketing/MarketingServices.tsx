import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { marketingServices } from "@/data/marketing";

export function MarketingServices() {
  return (
    <section id="servicos-marketing" className="border-t border-border py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Marketing services"
          title="O que operamos."
          subtitle="Uma operação completa de marca, mídia e conversão."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {marketingServices.map((s, i) => (
            <Reveal key={s.number} delay={(i % 4) * 0.06} className="bg-elevated">
              <div className="group h-full px-6 py-9 transition-colors duration-500 hover:bg-surface-2">
                <span className="font-display text-[0.62rem] tracking-[0.26em] text-primary">
                  {s.number}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-[0.12em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-6 block h-px w-0 bg-primary transition-all duration-500 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
