import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function WorkExperience() {
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

    const element = document.querySelector('#experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    { role: "Lead Product Designer", company: "Enjin", period: "2021 - Present" },
    { role: "Designer", company: "Pi Distribution Inc.", period: "2016 - 2020" },
    { role: "Post Production GFX Designer", company: "Seoul Vision", period: "2015" }
  ];

  return (
    <section id="experience" className="relative py-32 px-8 bg-gray-950/30">
      <div className="max-w-4xl mx-auto">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-sm text-gray-400 mb-8 tracking-wider text-center"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500'
            }}
          >
            WORK EXPERIENCE
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex justify-between items-start py-6 border-b border-gray-800 last:border-b-0"
              >
                <div>
                  <h3 className="text-xl font-medium">{exp.role}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}