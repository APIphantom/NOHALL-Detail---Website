import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/data/team";

export function Team() {
  return (
    <section className="grain py-24 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Equipe"
          title="Quem está por trás"
          subtitle="Especialistas dedicados a cada etapa do tratamento, do diagnóstico à entrega."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08}>
              <figure className="group relative overflow-hidden rounded-lg border border-border bg-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                  <figcaption>
                    <span className="block h-px w-8 bg-primary" />
                    <p className="mt-4 font-display text-lg uppercase tracking-tight">
                      {m.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-subtle">
                      {m.role}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
