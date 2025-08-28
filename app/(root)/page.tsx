import Hero from "@/components/Hero";
import OurVision from "@/components/OurVision";
import OurMinistries from "@/components/OurMinistries";
import HowItBegan from "@/components/how-it-began";
import ImpactSection from "@/components/impact";
import CallToActionSection from "@/components/cta";

export default function Home() {
  return (
    <div>
      <Hero />

      <OurVision />

      {/* HOW IT BEGAN */}
      <HowItBegan />

      <OurMinistries />

      {/* Impact Section */}
      <ImpactSection />

      {/* Call to Action */}
      <CallToActionSection />
    </div>
  );
}
