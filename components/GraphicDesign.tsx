import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function GraphicDesign() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#graphic-design');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const designs = [
    {
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop"
    },
    {
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop"
    },
    {
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    }
  ];

  // Auto-cycle through images every 10 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // Reset to 0 when reaching the end, considering we show 3 items at a time
        if (prevIndex >= designs.length - 3) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isVisible, designs.length]);

  const nextSlide = () => {
    if (currentIndex < designs.length - 3) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(designs.length - 3);
    }
  };

  return (
    <section id="graphic-design" className="relative py-20 px-8">
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
            GRAPHIC DESIGN WORK
          </h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#c4ff00] hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/80 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[#c4ff00] hover:text-black transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Auto-Cycling Carousel Container */}
          <div className="overflow-hidden mx-14">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex * (100/3)}%)`
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut"
              }}
            >
              {designs.map((design, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-1/3"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg border border-gray-800">
                    <ImageWithFallback
                      src={design.image}
                      alt={`Graphic design work ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: designs.length - 2 }).map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#c4ff00] w-8' 
                    : 'bg-gray-600 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}