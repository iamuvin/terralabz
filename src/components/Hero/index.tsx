import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import HeroContent from './HeroContent';
import { BackgroundMusic } from '../Audio';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      <ParticleBackground />
      
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.15), transparent 50%)',
        }}
      />
      
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent, black)',
          opacity: 0.7,
        }}
      />

      <BackgroundMusic />
      <HeroContent />
    </motion.section>
  );
};

export default Hero;