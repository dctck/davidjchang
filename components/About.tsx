import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Particles } from './Particles';

export function About() {
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

    const element = document.querySelector('#about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Function to render text with highlighted keywords - selective highlighting
  const renderHighlightedText = (text: string) => {
    const keywords = [
      'David', 'product designer', 'simple', 'always'
    ];
    
    let result = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      result = result.replace(regex, `<span class="text-[#c4ff00] font-medium">${keyword}</span>`);
    });
    
    return result;
  };

  return (
    <section id="about" className="relative py-20 px-8">
      {/* Section Particles */}
      <Particles count={15} />
      
      <div className="max-w-6xl mx-auto">
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
            ABOUT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-black/50">
              {/* Subtle animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#c4ff00]/10 via-transparent to-[#c4ff00]/5"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <div className="relative z-10 p-4">
                <div className="aspect-[4/5] overflow-hidden rounded-md">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1634133472760-e5c2bd346787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NjIxOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="David Chang - Product Designer"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-[#c4ff00]/30" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-[#c4ff00]/30" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Main Text Block - Large flowing text like in reference */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8"
              >
                <p 
                  className="mb-0 text-white leading-relaxed"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '200',
                    fontSize: '24px', // Much larger - applied directly to p tag
                    lineHeight: '1.3'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: renderHighlightedText("Hi, I am David, a product designer who believes crypto shouldn't require a PhD to use. I've spent years making complex systems feel as simple as ordering coffee ☕. The best way to get my attention is to give me a product, and I'll always find a way to make it simpler 👌.")
                  }}
                />
              </motion.div>

              {/* PS Section - Smaller and muted like in reference */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p 
                  className="text-gray-400"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400',
                    fontSize: '20px', // Direct pixel value applied to p tag
                    lineHeight: '1.5'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: renderHighlightedText("PS: Outside of work, you'll find me collecting board games 🎲, hunting for perfect poker chips, or coding the next best game.")
                  }}
                />
              </motion.div>
            </div>

            {/* Stats/Highlights - Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl text-[#c4ff00] mb-2"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '600'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  8+
                </motion.div>
                <div 
                  className="text-gray-400 text-sm"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400'
                  }}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl text-[#c4ff00] mb-2"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '600'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  2M+
                </motion.div>
                <div 
                  className="text-gray-400 text-sm"
                  style={{
                    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: '400'
                  }}
                >
                  Users Impacted
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}