import { motion } from 'framer-motion';
import HeroButton from './HeroButton';
import GlowingRing from './GlowingRing';
import { Brain, Bot, Cpu, Code, Rocket } from 'lucide-react';

const HeroContent = () => {
  const technologies = [
    { icon: Brain, label: 'AI' },
    { icon: Bot, label: 'Blockchain' },
    { icon: Cpu, label: 'Drones' },
    { icon: Code, label: 'Software' },
    { icon: Rocket, label: 'Innovation' },
  ];

  return (
    <div className="relative z-10 text-center max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <GlowingRing />
      
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight 
          bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Experience Our Latest Innovations
      </motion.h1>
      
      <motion.p
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        AI, Blockchain, Drones, and Next-Gen Solutions for a Smarter Future
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {technologies.map(({ icon: Icon, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
            className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-lg 
              bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm
              border border-gray-800 hover:border-secondary/50 transition-all duration-300
              transform hover:scale-105"
          >
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            <span className="text-xs sm:text-sm font-medium">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <HeroButton onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          Explore Our Innovations
        </HeroButton>
        <HeroButton variant="secondary" onClick={() => document.getElementById('demo-projects')?.scrollIntoView({ behavior: 'smooth' })}>
          Test Our AI Chatbot
        </HeroButton>
      </motion.div>
    </div>
  );
};

export default HeroContent;