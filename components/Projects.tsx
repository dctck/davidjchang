import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Eye, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Mobile App",
      description: "Complete redesign of a fashion e-commerce mobile application focusing on user experience and conversion optimization.",
      tags: ["Mobile Design", "UX Research", "Prototyping"],
      image: "/api/placeholder/400/300",
      year: "2024"
    },
    {
      title: "SaaS Dashboard Design",
      description: "Modern dashboard interface for a project management SaaS platform with emphasis on data visualization and workflow optimization.",
      tags: ["Dashboard", "SaaS", "Data Visualization"],
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      title: "Healthcare App Interface",
      description: "Patient-centered mobile application design for healthcare providers, focusing on accessibility and user-friendly navigation.",
      tags: ["Healthcare", "Accessibility", "Mobile"],
      image: "/api/placeholder/400/300",
      year: "2023"
    },
    {
      title: "Fintech Web Platform",
      description: "Comprehensive design system and user interface for a digital banking platform with focus on trust and security.",
      tags: ["Fintech", "Design System", "Web"],
      image: "/api/placeholder/400/300",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work in product design, user experience, and digital innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-700 overflow-hidden group hover:border-lime-400/50 transition-all duration-300">
                <div className="relative aspect-video bg-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Eye size={48} className="text-gray-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="sm" className="text-white border-white">
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-lime-400 text-black px-3 py-1 rounded-full text-sm">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-lime-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
          >
            View All Projects
            <ArrowUpRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}