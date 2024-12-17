import { motion } from 'framer-motion';

interface InnovationCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const InnovationCard = ({ title, description, image, delay = 0 }: InnovationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-black/40 to-black/60 rounded-xl overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default InnovationCard;