import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Particles } from './Particles';

export function ContactGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-8 bg-gray-950/50">
      {/* Contact Particles */}
      <Particles count={25} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm text-gray-400 mb-4 tracking-wider">GET IN TOUCH</h2>
          <motion.h3 
            className="text-4xl font-medium mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            LET'S CREATE SOMETHING AMAZING TOGETHER
          </motion.h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to chat about design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 relative overflow-hidden group"
            whileHover={{ 
              borderColor: 'rgba(163, 230, 53, 0.3)',
              boxShadow: '0 0 30px rgba(163, 230, 53, 0.1)' 
            }}
          >
            {/* Form Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-lime-400/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <h4 className="text-xl font-medium mb-6 relative z-10">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-lime-400/50 transition-colors"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-lime-400/50 transition-colors"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 resize-none focus:border-lime-400/50 transition-colors"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-lime-400 text-black hover:bg-lime-300 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-medium mb-6">Contact Information</h4>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center group-hover:bg-lime-400/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail size={20} className="text-lime-400" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white group-hover:text-lime-400 transition-colors">hamza@example.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center group-hover:bg-lime-400/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Phone size={20} className="text-lime-400" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white group-hover:text-lime-400 transition-colors">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center group-hover:bg-lime-400/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin size={20} className="text-lime-400" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white group-hover:text-lime-400 transition-colors">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {['TW', 'LI', 'IG', 'DR'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lime-400 hover:text-black transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm">{social}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-16 border-t border-gray-800 mt-16"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Hamza Bagais. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}