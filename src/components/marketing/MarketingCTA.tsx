import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ActionButton } from "@/components/ui/action-button";
import ctaImg from "@/assets/gallery-3-graded.jpg";
import { whatsappUrl, site } from "@/data/site";

export function MarketingCTA() {
  return (
    <section id="contato-marketing" className="relative overflow-hidden border-t border-border">
      <img
        src={ctaImg}
        alt="Detalhe automotivo em iluminação de estúdio"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

      <Container className="relative z-10 py-28 lg:py-40">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow text-primary">Start a project</span>
          </div>
          <h2 className="display-xl mt-7 text-[2.4rem] leading-[0.92] sm:text-5xl lg:text-[5.5rem]">
            Vamos transformar
            <br />
            marketing em <span className="text-primary">crescimento.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
            Diagnóstico inicial gratuito: analisamos marca, canais e dados atuais antes de
            propor qualquer investimento.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionButton href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com o time
            </ActionButton>
            <ActionButton href={`mailto:${site.email}`} variant="outline">
              {site.email}
            </ActionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
