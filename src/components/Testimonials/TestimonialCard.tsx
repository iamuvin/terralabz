import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  image,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-black/40 to-black/60 p-6 rounded-xl relative"
    >
      <Quote className="absolute top-6 right-6 text-secondary/20" size={40} />
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-secondary text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;