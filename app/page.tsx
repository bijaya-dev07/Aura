import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { SocialProof } from "@/components/sections/SocialProof";
import { FeatureDetails } from "@/components/sections/FeatureDetails";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <FeatureCards />
      <SocialProof />
      <FeatureDetails />
      <CTA />
      <Footer />
    </main>
  );
}
