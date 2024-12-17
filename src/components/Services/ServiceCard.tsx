import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-black/40 to-black/60 p-6 rounded-xl backdrop-blur-sm 
        border border-gray-800 hover:border-secondary/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-secondary/10 rounded-lg">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;