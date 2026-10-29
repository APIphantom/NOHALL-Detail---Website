import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Pricing } from "@/components/sections/Pricing";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

const title = "Estética Automotiva Premium | Nohall Custom";
const description =
  "Polimento, revitalização, detailing e tratamentos automotivos premium. Transformamos cada detalhe do seu veículo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "Nohall Custom",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Jurandir Diniz de Souza, n11, Jardim Montreal",
            addressLocality: "Maringá",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          telephone: "+55 44 97695773",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <BeforeAfter />
        <Pricing />
        <Stats />
        <Process />
        <Team />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
