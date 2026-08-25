import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/container";
import { navLinks, site, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="grain border-t border-border bg-surface">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="display-xl text-[3.2rem] leading-[0.85] sm:text-7xl lg:text-8xl">
              {site.name}
            </p>
            <p className="mt-6 max-w-md font-display text-sm uppercase tracking-[0.24em] text-primary">
              {site.claim}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-subtle">
              {site.tagline} — polimento, revitalização e detailing com padrão de
              estúdio.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Navegação</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.hash}>
                    <Link
                      to="/"
                      hash={l.hash}
                      className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/marketing"
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contato</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>{site.address}</li>
                <li>{site.email}</li>
                <li>{site.phone}</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />
        <div className="mt-6 flex flex-col gap-2 text-xs tracking-wide text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.fullName}. Todos os direitos reservados.</p>
          <p className="font-display uppercase tracking-[0.24em]">{site.est}</p>
        </div>
      </Container>
    </footer>
  );
}
