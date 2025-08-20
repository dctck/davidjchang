import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Design",
      skills: ["User Interface Design", "User Experience Design", "Design Systems", "Prototyping", "Visual Design"]
    },
    {
      title: "Research",
      skills: ["User Research", "Usability Testing", "Journey Mapping", "Analytics", "A/B Testing"]
    },
    {
      title: "Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Miro"]
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "React Basics", "Design Tokens", "Responsive Design", "Accessibility"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center p-16 bg-muted/30">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-medium mb-6">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive toolkit built through years of experience in design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="text-muted-foreground flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}