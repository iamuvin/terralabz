import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Plane,
  Brain,
  Code,
  Share2,
  Palette,
  Database
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Plane,
      title: 'High-Tech Innovations',
      description: 'Advanced AI drones and aerospace solutions pushing the boundaries of what\'s possible.',
    },
    {
      icon: Brain,
      title: 'AI & Blockchain Solutions',
      description: 'Cutting-edge AI-driven medical tools and decentralized platforms for the future.',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom websites, mobile applications, and DApps built with modern technologies.',
    },
    {
      icon: Share2,
      title: 'Social Media Consulting',
      description: 'Strategic solutions to amplify your brand\'s digital presence and engagement.',
    },
    {
      icon: Palette,
      title: 'NFT & Content Creation',
      description: 'Immersive visuals, animations, and complete NFT ecosystem development.',
    },
    {
      icon: Database,
      title: 'Blockchain Infrastructure',
      description: 'Robust blockchain solutions and smart contract development for various industries.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 gradient-text">
            What We Do
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions across multiple domains, leveraging the latest 
            technologies to create innovative solutions for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;