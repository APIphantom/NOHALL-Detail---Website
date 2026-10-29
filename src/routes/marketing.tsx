import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MarketingHero } from "@/components/marketing/MarketingHero";
import { Approach } from "@/components/marketing/Approach";
import { Dashboard } from "@/components/marketing/Dashboard";
import { GrowthCharts } from "@/components/marketing/GrowthCharts";
import { Benchmarks } from "@/components/marketing/Benchmarks";
import { Funnel } from "@/components/marketing/Funnel";
import { Campaigns } from "@/components/marketing/Campaigns";
import { MarketingServices } from "@/components/marketing/MarketingServices";
import { CaseStudies } from "@/components/marketing/CaseStudies";
import { RoiCalculator } from "@/components/marketing/RoiCalculator";
import { MarketingCTA } from "@/components/marketing/MarketingCTA";

const title = "Marketing & Performance | Nohall Custom";
const description =
  "Divisão de marketing e performance: estratégia, mídia paga, conteúdo, funis e dados para transformar atenção em crescimento mensurável.";

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/marketing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/marketing" }],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MarketingHero />
        <Approach />
        <Dashboard />
        <GrowthCharts />
        <Benchmarks />
        <Funnel />
        <Campaigns />
        <MarketingServices />
        <CaseStudies />
        <RoiCalculator />
        <MarketingCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
