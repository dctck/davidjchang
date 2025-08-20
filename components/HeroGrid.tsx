import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Globe, Clock } from 'lucide-react';

export function HeroGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Animation for the shining effect on SIMPLICITY
  const shineProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const shinePosition = useTransform(shineProgress, [0, 1], ["-200%", "200%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-8 py-20"
    >
      {/* Clean static background */}
      <div className="absolute inset-0 bg-black" />

      {/* Very subtle geometric background pattern - static */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(196, 255, 0, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(196, 255, 0, 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Headline with Plus Jakarta Sans */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500',
                letterSpacing: '-0.025em'
              }}
            >
              <span className="text-white">Designing with </span>
              <motion.span 
                className="relative inline-block"
                style={{
                  fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: '500',
                  fontStyle: 'italic'
                }}
                whileHover={{ 
                  textShadow: "0 0 20px rgba(196, 255, 0, 0.3)"
                }}
                transition={{ duration: 0.15 }}
              >
                {/* Base text */}
                <span className="text-[#c4ff00]">SIMPLICITY</span>
                
                {/* Shining overlay */}
                <motion.span
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    background: `linear-gradient(
                      110deg,
                      transparent 20%,
                      rgba(255, 255, 255, 0.8) 50%,
                      transparent 80%
                    )`,
                    backgroundSize: '200% 100%',
                    backgroundPosition: shinePosition,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  SIMPLICITY
                </motion.span>

                {/* Subtle hover underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#c4ff00] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle with Inter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <p 
            className="text-xl md:text-2xl text-gray-300"
            style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500'
            }}
          >
            Lead Product Designer @{' '}
            <motion.span 
              className="text-[#c4ff00] relative inline-block cursor-pointer"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '600'
              }}
              whileHover={{ 
                color: "#ffffff",
                transition: { duration: 0.15 }
              }}
            >
              Enjin
              {/* Laser scan underline effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#c4ff00] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </motion.span>
          </p>
        </motion.div>

        {/* Supporting description with Inter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >

        </motion.div>

        {/* Clean pill badges with proper font pairing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Los Angeles Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full cursor-default"
            whileHover={{ 
              y: -2,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(196, 255, 0, 0.2)",
              backgroundColor: "rgba(196, 255, 0, 0.05)"
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <MapPin size={14} className="text-[#c4ff00]" />
            <span 
              className="text-sm text-gray-300"
              style={{
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500'
              }}
            >
              Los Angeles
            </span>
          </motion.div>

          {/* Remote Friendly Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full cursor-default"
            whileHover={{ 
              y: -2,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(196, 255, 0, 0.2)",
              backgroundColor: "rgba(196, 255, 0, 0.05)"
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Globe size={14} className="text-[#c4ff00]" />
            <span 
              className="text-sm text-gray-300"
              style={{
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500'
              }}
            >
              Remote Friendly
            </span>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full cursor-default"
            whileHover={{ 
              y: -2,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
              borderColor: "rgba(196, 255, 0, 0.2)",
              backgroundColor: "rgba(196, 255, 0, 0.05)"
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <Clock size={14} className="text-[#c4ff00]" />
            <span 
              className="text-sm text-gray-300"
              style={{
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '500'
              }}
            >
              8+ Years Experience
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle corner accents - very minimal and static */}
      <div className="absolute top-12 left-12 w-16 h-16 opacity-20">
        <div className="w-full h-full border-l border-t border-[#c4ff00]/10" />
      </div>

      <div className="absolute bottom-12 right-12 w-16 h-16 opacity-20">
        <div className="w-full h-full border-r border-b border-[#c4ff00]/10" />
      </div>
    </section>
  );
}