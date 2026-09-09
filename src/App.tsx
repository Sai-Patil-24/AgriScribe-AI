import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { HowItWorks } from './sections/HowItWorks';
import { CoreFeatures } from './sections/CoreFeatures';
import { ProductPreview } from './sections/ProductPreview';
import { FarmerStory } from './sections/FarmerStory';
import { ImpactSection } from './sections/ImpactSection';
import { DesignPhilosophy } from './sections/DesignPhilosophy';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="font-sans text-[var(--color-agri-dark)] bg-[var(--color-agri-cream)] selection:bg-[var(--color-agri-yellow)] selection:text-[var(--color-agri-dark)]">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <CoreFeatures />
        <ProductPreview />
        <FarmerStory />
        <ImpactSection />
        <DesignPhilosophy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
