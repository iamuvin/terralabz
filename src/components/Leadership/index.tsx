import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import LeaderCard from './LeaderCard';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const leaders = [
    {
      name: 'Baptist Kevin',
      role: 'Co-Founder & Director of High-Tech Innovations',
      bio: 'A visionary in AI drones, medical technologies, and aerospace innovations.',
      image: 'public/kevin.jpeg',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Uvin Vindula (IAMUVIN)',
      role: 'Co-Founder & Director of Blockchain Solutions',
      bio: 'Global blockchain expert and innovator in AI-driven solutions and software development.',
      image: 'public/uvin.jpeg',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Meet Our Visionaries</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The innovative minds driving Terra Labz forward with their expertise
            and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} {...leader} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
