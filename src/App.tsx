import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { HowItWorks } from './sections/HowItWorks';
import { CoreFeatures } from './sections/CoreFeatures';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <CoreFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

