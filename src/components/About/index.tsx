import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Brain, Code } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Pioneering solutions that reshape industries and define the future.',
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leveraging artificial intelligence to solve complex challenges.',
    },
    {
      icon: Code,
      title: 'Tech Excellence',
      description: 'Building robust solutions with cutting-edge technologies.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Who We Are</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Terra Labz, we are redefining industries with cutting-edge technologies in AI, blockchain, 
            drones, and software development. Since 2022, we've been committed to building a smarter 
            and more sustainable world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black/30 p-8 rounded-lg backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;