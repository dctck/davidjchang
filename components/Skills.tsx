import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Palette, Users, Code, Lightbulb, Search, Target } from 'lucide-react';

export function Skills() {
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
      icon: <Palette size={32} />,
      title: "Visual Design",
      skills: ["UI Design", "Branding", "Typography", "Color Theory", "Design Systems"]
    },
    {
      icon: <Users size={32} />,
      title: "User Experience",
      skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: <Code size={32} />,
      title: "Technical Skills",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "HTML/CSS"]
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Strategy",
      skills: ["Design Thinking", "Problem Solving", "Innovation", "Product Strategy", "Business Analysis"]
    },
    {
      icon: <Search size={32} />,
      title: "Research",
      skills: ["User Interviews", "Surveys", "Analytics", "A/B Testing", "Competitive Analysis"]
    },
    {
      icon: <Target size={32} />,
      title: "Optimization",
      skills: ["Conversion Rate", "Performance", "Accessibility", "SEO", "Growth Design"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience in product design and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-lime-400/50 transition-colors duration-300"
            >
              <div className="text-lime-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-lime-400/10 to-transparent p-8 rounded-lg border border-lime-400/20">
            <h3 className="text-2xl mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I believe in continuous learning and staying updated with the latest design trends, 
              technologies, and methodologies. Currently exploring AI in design and advanced prototyping techniques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}