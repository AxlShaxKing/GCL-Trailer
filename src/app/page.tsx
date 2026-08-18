import { HeroSection } from "@/components/campains/hero-section";
import IdeasSection from "@/components/campains/idea-section";
import { NetworkField } from "@/components/campains/network-field";
import { TransformationSection } from "@/components/campains/transformation-section";
import { DomainsSection } from "@/components/campains/domain-section";
import { ImpactSection } from "@/components/campains/impact-section";
import { SloganFooterSection } from "@/components/campains/sloganFooter-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-night text-white">
      {/* Fixed background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-60" />
        <div className="absolute inset-0 sky-glow opacity-50" />
        <NetworkField />
      </div>

      {/* Content */}
      <HeroSection />
      <DomainsSection/>
      <ImpactSection/>

      <SloganFooterSection/>
    </main>
  );
}