import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import InnovationCard from './InnovationCard';

const Innovations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const innovations = [
    {
      title: 'AI-Powered Vein Finder',
      description: 'Revolutionary medical technology that uses advanced AI to locate veins with unprecedented accuracy.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
    },
    {
      title: 'Commercial AI Drones',
      description: 'Smart drones equipped with AI for agriculture, logistics, and surveillance applications.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800',
    },
    {
      title: 'Bladeless Wind Turbine',
      description: 'Compact and efficient wind energy solution for sustainable e-vehicle charging.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <section id="innovations" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Our Innovations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking technologies that are reshaping industries and creating new possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <InnovationCard
              key={innovation.title}
              {...innovation}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;