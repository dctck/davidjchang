import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';

interface MainContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function MainContent({ activeSection, setActiveSection }: MainContentProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}