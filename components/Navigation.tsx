import { motion } from 'motion/react';

export function Navigation() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-400 hover:text-lime-400 transition-colors duration-300 cursor-pointer text-[16px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          David C • <span className="text-lime-400">Product Designer</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center space-x-8 text-sm"
        >
          <motion.button 
            onClick={() => smoothScrollTo('about')}
            className="text-gray-400 hover:text-lime-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            ABOUT
          </motion.button>
          <motion.button 
            onClick={() => smoothScrollTo('latest-work')}
            className="text-gray-400 hover:text-lime-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            WORK
          </motion.button>
          <motion.button 
            onClick={() => smoothScrollTo('contact')}
            className="text-gray-400 hover:text-lime-400 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            CONTACT
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
}