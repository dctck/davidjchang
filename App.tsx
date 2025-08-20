import { Navigation } from './components/Navigation';
import { HeroGrid } from './components/HeroGrid';
import { About } from './components/About';
import { WorkExperience } from './components/WorkExperience';
import { LatestWork } from './components/LatestWork';
import { GraphicDesign } from './components/GraphicDesign';
import { PassionProjects } from './components/PassionProjects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden dark">
      {/* Fine Grid Background */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      <Navigation />
      <div className="pt-20">
        <HeroGrid />
        <About />
        <WorkExperience />
        <LatestWork />
        <GraphicDesign />
        <PassionProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}