import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Particles } from './Particles';

export function LatestWork() {
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

    const element = document.querySelector('#latest-work');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "NFT MARKETPLACE OFFERS",
      category: "Product design",
      type: "Web",
      year: "2024",
      device: "desktop",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop"
    },
    {
      title: "REDUCING FRICTION WITH QUICK ACTIONS",
      category: "Product design", 
      type: "Mobile",
      year: "2024",
      device: "mobile-quick-actions",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
    },
    {
      title: "NFT BEAM",
      category: "Product design",
      type: "QR Claim System",
      year: "2023",
      device: "nft-beam",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="latest-work" className="relative py-20 px-8">
      {/* Section Particles */}
      <Particles count={15} />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 
            className="text-gray-400 text-sm tracking-wider mb-8"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500'
            }}
          >
            PROJECTS
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative border border-gray-800 rounded-lg bg-black/50 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
              whileHover={{
                borderColor: 'rgba(196, 255, 0, 0.3)',
                boxShadow: '0 0 30px rgba(196, 255, 0, 0.1)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover Particles */}
              {hoveredProject === project.title && (
                <Particles count={25} className="opacity-50" />
              )}
              
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c4ff00]/5 via-transparent to-[#c4ff00]/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hoveredProject === project.title ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />

              <div className="p-8 min-h-[400px] flex flex-col relative z-10">
                {/* Project Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <motion.h3 
                      className="text-white text-xl font-medium mb-2"
                      animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#ffffff' }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>{project.type}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Device Mockup Container */}
                <div className="flex-1 flex items-center justify-center relative">
                  {project.device === 'mobile-quick-actions' && (
                    <motion.div 
                      className="relative"
                      animate={hoveredProject === project.title ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Simple Interface - No phone outline */}
                      <div className="flex flex-col items-center justify-center py-8">
                        {/* Balance */}
                        <motion.div 
                          className="text-center mb-12"
                          animate={hoveredProject === project.title ? { scale: 1.05 } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="text-white text-4xl mb-2"
                            animate={hoveredProject === project.title ? { 
                              color: '#c4ff00',
                              textShadow: '0 0 20px rgba(196, 255, 0, 0.3)'
                            } : { 
                              color: '#ffffff',
                              textShadow: 'none'
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                              fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: '500'
                            }}
                          >
                            $9,400.12
                          </motion.div>
                          <div className="text-gray-400 text-base">USD</div>
                        </motion.div>

                        {/* Quick Actions - 4 identical buttons */}
                        <div className="flex justify-center gap-6">
                          {[
                            { icon: '↑', label: 'Send' },
                            { icon: '↓', label: 'Receive' },
                            { icon: '⊞', label: 'Stake' },
                            { icon: '✦', label: 'Mint' }
                          ].map((action, index) => (
                            <motion.div
                              key={index}
                              className="w-16 h-16 bg-gray-700 rounded-xl border border-gray-600 flex items-center justify-center"
                              initial={{ 
                                opacity: 0.4,
                                backgroundColor: 'rgb(55 65 81)',
                                borderColor: 'rgb(75 85 99)',
                                boxShadow: 'none'
                              }}
                              animate={hoveredProject === project.title ? { 
                                opacity: 1,
                                backgroundColor: 'rgba(196, 255, 0, 0.1)',
                                borderColor: 'rgba(196, 255, 0, 0.5)',
                                boxShadow: '0 0 25px rgba(196, 255, 0, 0.3)'
                              } : { 
                                opacity: 0.4,
                                backgroundColor: 'rgb(55 65 81)',
                                borderColor: 'rgb(75 85 99)',
                                boxShadow: 'none'
                              }}
                              transition={{ 
                                duration: 0.4, 
                                delay: hoveredProject === project.title ? index * 0.15 : 0 
                              }}
                            >
                              {/* Icons */}
                              {index === 0 && (
                                <motion.div 
                                  className="text-gray-400 text-xl"
                                  animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#9ca3af' }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: hoveredProject === project.title ? index * 0.15 : 0 
                                  }}
                                >
                                  ↑
                                </motion.div>
                              )}
                              {index === 1 && (
                                <motion.div 
                                  className="text-gray-400 text-xl"
                                  animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#9ca3af' }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: hoveredProject === project.title ? index * 0.15 : 0 
                                  }}
                                >
                                  ↓
                                </motion.div>
                              )}
                              {index === 2 && (
                                <motion.div 
                                  className="text-gray-400 text-xl"
                                  animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#9ca3af' }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: hoveredProject === project.title ? index * 0.15 : 0 
                                  }}
                                >
                                  ⍜
                                </motion.div>
                              )}
                              {index === 3 && (
                                <motion.div 
                                  className="text-gray-400 text-lg"
                                  animate={hoveredProject === project.title ? { color: '#c4ff00' } : { color: '#9ca3af' }}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: hoveredProject === project.title ? index * 0.15 : 0 
                                  }}
                                >
                                  ✦
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {project.device === 'desktop' && (
                    <motion.div 
                      className="relative w-full max-w-lg"
                      animate={hoveredProject === project.title ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* NFT Offers Notification Interface - No Window UI */}
                      <div className="w-full h-full flex items-center justify-center relative bg-black rounded-lg p-6">

                        
                        {/* Default State - New Offers Notification */}
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={hoveredProject === project.title ? { 
                            opacity: 0, 
                            scale: 0.9,
                            y: -15
                          } : { 
                            opacity: 1, 
                            scale: 1,
                            y: 0
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="text-center">
                            {/* Notification Badge */}
                            <motion.div 
                              className="inline-flex items-center gap-4 px-8 py-4 bg-gray-800/50 border border-gray-600 rounded-full mb-6"
                              animate={hoveredProject === project.title ? { 
                                borderColor: 'rgba(196, 255, 0, 0.3)',
                                backgroundColor: 'rgba(31, 41, 55, 0.8)'
                              } : { 
                                borderColor: 'rgb(75 85 99)',
                                backgroundColor: 'rgba(31, 41, 55, 0.5)'
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {/* Notification Dot */}
                              <motion.div 
                                className="w-4 h-4 bg-[#c4ff00] rounded-full"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [1, 0.7, 1]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                              <span className="text-white text-2xl">New offers!</span>
                            </motion.div>


                          </div>
                        </motion.div>

                        {/* Hover State - Offer Details */}
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.9, y: 15 }}
                          animate={hoveredProject === project.title ? { 
                            opacity: 1, 
                            scale: 1,
                            y: 0
                          } : { 
                            opacity: 0, 
                            scale: 0.9,
                            y: 15
                          }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <div className="text-center max-w-md">
                            {/* Offer Details */}
                            <motion.div 
                              className="mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={hoveredProject === project.title ? { 
                                opacity: 1, 
                                y: 0 
                              } : { 
                                opacity: 0, 
                                y: 20 
                              }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              <div className="text-gray-400 text-lg mb-4">Offer Received</div>
                              <motion.div 
                                className="text-white text-5xl mb-3"
                                animate={hoveredProject === project.title ? { 
                                  color: '#c4ff00',
                                  textShadow: '0 0 20px rgba(196, 255, 0, 0.3)'
                                } : { 
                                  color: '#ffffff',
                                  textShadow: 'none'
                                }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                style={{
                                  fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                                  fontWeight: '500'
                                }}
                              >
                                0.38 ETH
                              </motion.div>
                              <div className="text-gray-500 text-lg">from @collector_x</div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div 
                              className="flex items-center gap-6 justify-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={hoveredProject === project.title ? { 
                                opacity: 1, 
                                y: 0 
                              } : { 
                                opacity: 0, 
                                y: 20 
                              }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                            >
                              {/* Accept Button */}
                              <motion.div 
                                className="px-8 py-4 bg-green-500/20 border border-green-500/30 rounded-full text-lg text-green-400 cursor-pointer"
                                whileHover={{ 
                                  backgroundColor: 'rgba(34, 197, 94, 0.3)',
                                  borderColor: 'rgba(34, 197, 94, 0.5)',
                                  scale: 1.05
                                }}
                                transition={{ duration: 0.2 }}
                                style={{
                                  fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                                  fontWeight: '500'
                                }}
                              >
                                Accept offer
                              </motion.div>

                              {/* Counter Button */}
                              <motion.div 
                                className="px-8 py-4 bg-[#c4ff00]/10 border border-[#c4ff00]/30 rounded-full text-lg text-[#c4ff00] cursor-pointer"
                                whileHover={{ 
                                  backgroundColor: 'rgba(196, 255, 0, 0.2)',
                                  borderColor: 'rgba(196, 255, 0, 0.5)',
                                  scale: 1.05,
                                  boxShadow: '0 0 20px rgba(196, 255, 0, 0.2)'
                                }}
                                transition={{ duration: 0.2 }}
                                style={{
                                  fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                                  fontWeight: '500'
                                }}
                              >
                                Counter
                              </motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  {project.device === 'nft-beam' && (
                    <motion.div 
                      className="relative w-full max-w-md"
                      animate={hoveredProject === project.title ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {/* Just QR Code - No container */}
                      <div className="flex items-center justify-center h-full">
                        <motion.div 
                          className="w-40 h-40 bg-gray-800 rounded-lg relative overflow-hidden"
                          animate={hoveredProject === project.title ? { 
                            backgroundColor: 'rgba(196, 255, 0, 0.05)',
                            scale: 1.05
                          } : { 
                            backgroundColor: 'rgb(31 41 55)',
                            scale: 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* QR Code Pattern */}
                          <div className="absolute inset-4 grid grid-cols-8 gap-1">
                            {[...Array(64)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="bg-gray-600 rounded-[2px]"
                                animate={hoveredProject === project.title ? { 
                                  backgroundColor: '#c4ff00',
                                  opacity: Math.random() > 0.3 ? 1 : 0.3
                                } : { 
                                  backgroundColor: '#4b5563',
                                  opacity: Math.random() > 0.3 ? 1 : 0.3
                                }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: (i * 0.015) + 0.1 
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Scanning Animation */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c4ff00]/30 to-transparent"
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={hoveredProject === project.title ? { 
                              y: '100%',
                              opacity: [0, 1, 0]
                            } : { 
                              y: '-100%',
                              opacity: 0
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: hoveredProject === project.title ? Infinity : 0,
                              ease: "easeInOut",
                              delay: 0.3
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Show Case Study Button - Positioned in lower right */}
                <div className="absolute bottom-8 right-8">
                  <motion.div
                    className="relative rounded-full"
                    animate={hoveredProject === project.title ? {
                      boxShadow: '0 0 30px rgba(196, 255, 0, 0.4), 0 0 60px rgba(196, 255, 0, 0.2)'
                    } : {
                      boxShadow: '0 0 0px rgba(196, 255, 0, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button 
                      className="rounded-full text-sm px-6 py-2 relative z-10 pointer-events-none transition-all duration-300 bg-[#c4ff00] text-black"
                      style={{
                        fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: '500'
                      }}
                    >
                      show case study
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}