import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import exampleImage from 'figma:asset/2270f1cfc0cc1f43752480ae9ff941f30f2f5c33.png';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="text-gray-400 text-lg">Hi there! I'm Sarah Chen</span>
          </div>
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl mb-4">
              I LOVE SOLVING
            </h1>
            <h1 className="text-5xl md:text-7xl">
              <span className="text-lime-400 italic">different</span> PROBLEMS
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Hi! I am Sarah, a product designer
            focused on digital experiences and
            solutions. I'm passionate about crafting
            intuitive experiences that solve real
            problems and delight users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-lime-400 text-black hover:bg-lime-300 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="text-gray-400 hover:text-lime-400 transition-colors animate-bounce"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}