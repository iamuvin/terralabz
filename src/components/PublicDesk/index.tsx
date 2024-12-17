import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PublicDeskFeatures from './PublicDeskFeatures';
import PublicDeskEmbed from './PublicDeskEmbed';

const PublicDesk = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="public-desk" className="py-12 sm:py-16 md:py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
            Explore Our Public Desk
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Access our comprehensive resource center and stay updated with our latest developments.
            Discover documentation, guides, and community resources all in one place.
          </p>

          <PublicDeskFeatures />
          <PublicDeskEmbed />
        </motion.div>
      </div>
    </section>
  );
};

export default PublicDesk;