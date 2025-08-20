import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Particles } from './Particles';
import { Play, ExternalLink, Smartphone, Monitor } from 'lucide-react';

export function PassionProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#passion-projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ROCK SCISSOR PAPER DUEL",
      description: "A strategic twist on the classic game with AI opponents, power-ups, and multiplayer battles. Built from scratch with AI assistance.",
      platform: "Desktop Browser",
      status: "Work in Progress",
      type: "desktop",
      year: "2024",
      features: ["AI Opponents", "Multiplayer", "Power-ups", "Real-time Battles"],
      videoThumb: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      link: "#",
      showCTA: false
    },
    {
      title: "KEY HUNTER",
      description: "A daily word puzzle game that challenges players to find hidden words within a grid. Features daily challenges and progressive difficulty.",
      platform: "Mobile",
      status: "Live",
      type: "mobile",
      year: "2024",
      features: ["Daily Puzzles", "Progressive Difficulty", "Achievements", "Leaderboards"],
      videoThumb: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=600&fit=crop",
      link: "https://example.com/key-hunter",
      showCTA: true
    }
  ];

  return (
    <section id="passion-projects" className="relative py-20 px-8">
      {/* Section Particles */}
      <Particles count={20} />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 
            className="text-gray-400 text-sm tracking-wider mb-4"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500'
            }}
          >
            PASSION PROJECTS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Games built from scratch using AI - from initial concept to full implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative border border-gray-800 rounded-lg bg-black/50 overflow-hidden group"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
              whileHover={{
                borderColor: 'rgba(196, 255, 0, 0.3)',
                boxShadow: '0 0 30px rgba(196, 255, 0, 0.1)',
              }}
            >
              {/* Hover Particles */}
              {hoveredProject === project.title && (
                <Particles count={15} className="opacity-30" />
              )}
              
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#c4ff00]/5 via-transparent to-[#c4ff00]/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hoveredProject === project.title ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />

              <div className="p-8 relative z-10">
                {/* Project Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    {project.type === 'desktop' ? (
                      <Monitor size={20} className="text-[#c4ff00]" />
                    ) : (
                      <Smartphone size={20} className="text-[#c4ff00]" />
                    )}
                  </div>
                  <div>
                    <motion.h3 
                      className="text-white font-medium mb-1"
                      animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#ffffff' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{project.platform}</span>
                      <span>•</span>
                      <span className={project.status === 'Live' ? 'text-green-400' : 'text-yellow-400'}>
                        {project.status}
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Game Preview */}
                <div className="relative mb-6 aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={project.videoThumb}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                  >
                    <motion.button
                      className="w-16 h-16 bg-[#c4ff00] rounded-full flex items-center justify-center text-black"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={24} fill="currentColor" />
                    </motion.button>
                  </motion.div>

                  {/* Video Thumbnail Glow */}
                  <motion.div
                    className="absolute inset-0 bg-[#c4ff00]/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={hoveredProject === project.title ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className={project.showCTA ? "mb-6" : "mb-0"}>
                  <h4 className="text-gray-400 text-xs tracking-wider mb-3">KEY FEATURES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        whileHover={{ 
                          backgroundColor: 'rgba(196, 255, 0, 0.1)',
                          borderColor: 'rgba(196, 255, 0, 0.3)',
                          color: '#c4ff00'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - Only show for projects with showCTA: true */}
                {project.showCTA && (
                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1 relative rounded-lg"
                      animate={hoveredProject === project.title ? {
                        boxShadow: '0 0 30px rgba(196, 255, 0, 0.4), 0 0 60px rgba(196, 255, 0, 0.2)'
                      } : {
                        boxShadow: '0 0 0px rgba(196, 255, 0, 0)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button className="w-full bg-[#c4ff00] text-black hover:bg-[#b8f000] text-sm py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative z-10">
                        <Play size={16} />
                        {project.status === 'Live' ? 'Play Game' : 'Watch Demo'}
                      </Button>
                    </motion.div>
                    
                    {project.status === 'Live' && (
                      <motion.div
                        className="relative rounded-lg"
                        animate={hoveredProject === project.title ? {
                          boxShadow: '0 0 30px rgba(196, 255, 0, 0.4), 0 0 60px rgba(196, 255, 0, 0.2)'
                        } : {
                          boxShadow: '0 0 0px rgba(196, 255, 0, 0)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button 
                          variant="outline" 
                          className="border-gray-600 text-gray-300 hover:border-[#c4ff00] hover:text-[#c4ff00] hover:bg-[#c4ff00]/10 text-sm py-2 px-4 rounded-lg transition-all duration-300 relative z-10"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}