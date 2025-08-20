import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Particles } from './Particles';

export function Contact() {
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

    const element = document.querySelector('#contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="relative py-20 px-8">
      {/* Section Particles */}
      <Particles count={15} />
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-gray-400 text-sm tracking-wider mb-4"
            style={{
              fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: '500'
            }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative border border-gray-800 rounded-lg bg-black/50 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#c4ff00]/5 via-transparent to-[#c4ff00]/5"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />

          <div className="p-8 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <label className="block text-gray-300 text-sm mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#c4ff00] focus:ring-[#c4ff00]/20"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <label className="block text-gray-300 text-sm mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#c4ff00] focus:ring-[#c4ff00]/20"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <label className="block text-gray-300 text-sm mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#c4ff00] focus:ring-[#c4ff00]/20"
                  placeholder="Project inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <label className="block text-gray-300 text-sm mb-2">
                  Message *
                </label>
                <Textarea
                  required
                  rows={6}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#c4ff00] focus:ring-[#c4ff00]/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit"
                    className="bg-[#c4ff00] text-black hover:bg-[#b8f000] px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c4ff00]/25"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 text-sm text-gray-400"
        >
          <p>Based in Los Angeles • Available for remote work</p>
        </motion.div>
      </div>
    </section>
  );
}