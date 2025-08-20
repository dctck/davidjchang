import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AboutSection() {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experience = [
    { company: 'Tech Startup Inc.', role: 'Senior Product Designer', period: '2022 - Present' },
    { company: 'Design Agency', role: 'Product Designer', period: '2020 - 2022' },
    { company: 'Freelance', role: 'UI/UX Designer', period: '2018 - 2020' },
  ];

  return (
    <section className="min-h-screen flex items-center p-16 bg-muted/30">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-5xl font-medium mb-6">About Me</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I'm a passionate product designer with over 5 years of experience creating 
                digital experiences that matter. My approach combines user-centered design 
                principles with strategic thinking to solve complex problems.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I believe great design is invisible – it seamlessly integrates into users' 
                lives while delivering exceptional value. When I'm not designing, you can 
                find me exploring new technologies, reading design philosophy, or hiking local trails.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="p-4 bg-background rounded-lg border border-border"
                  >
                    <h4 className="font-medium">{exp.role}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}