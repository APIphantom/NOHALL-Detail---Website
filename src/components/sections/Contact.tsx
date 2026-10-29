"use client";

import { useState, type FormEvent } from "react";
import { Instagram, MapPin, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SubmitButton } from "@/components/ui/action-button";
import { site, whatsappUrl } from "@/data/site";

const serviceOptions = [
  "Polimento",
  "Revitalização interna",
  "Revitalização externa",
  "Higienização",
  "Detailing completo",
  "Outro",
];

const fieldClass =
  "w-full rounded-md border border-border bg-surface-2 px-4 py-3.5 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

const labelClass =
  "mb-2 block font-display text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Solicitação enviada", {
      description: "Nossa equipe entrará em contato pelo WhatsApp em breve.",
    });
    e.currentTarget.reset();
  }

  return (
    <section id="contato" className="grain py-24 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="eyebrow text-primary">Contato</span>
              </div>
              <h2 className="display-xl text-[2.4rem] leading-[0.92] sm:text-5xl lg:text-[4.2rem]">
                Vamos cuidar
                <br />
                do seu carro.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-12 space-y-8">
              <div className="flex gap-4">
                <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="eyebrow">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-2 inline-block text-sm text-foreground"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="eyebrow">Instagram</p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-2 inline-block text-sm text-foreground"
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="eyebrow">Endereço</p>
                  <p className="mt-2 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="eyebrow">Horário</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {site.hours.map((h) => (
                      <li key={h.day}>
                        {h.day} — {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-lg border border-border bg-elevated p-6 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="nome">
                    Nome
                  </label>
                  <input id="nome" name="nome" required className={fieldClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    required
                    inputMode="tel"
                    className={fieldClass}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="veiculo">
                    Veículo
                  </label>
                  <input
                    id="veiculo"
                    name="veiculo"
                    className={fieldClass}
                    placeholder="Modelo e ano"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="servico">
                    Serviço desejado
                  </label>
                  <select id="servico" name="servico" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Escolha o serviço
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="text-black/20 bg-primary">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className={fieldClass}
                    placeholder="Conte o que seu veículo precisa"
                  />
                </div>
              </div>

              <SubmitButton type="submit" className="mt-8 w-full sm:w-auto">
                Enviar solicitação
              </SubmitButton>
              <p className="mt-4 text-xs text-subtle" aria-live="polite">
                {sent
                  ? "Recebemos sua solicitação. Retornamos em breve."
                  : "Retornamos em até 24h úteis."}
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
