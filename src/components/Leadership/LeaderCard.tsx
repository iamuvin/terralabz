import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface LeaderCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  delay?: number;
}

const LeaderCard = ({ name, role, bio, image, linkedin, twitter, delay = 0 }: LeaderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-black/40 to-black/60 rounded-xl overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-secondary mb-4">{role}</p>
        <p className="text-gray-400 mb-6">{bio}</p>
        <div className="flex space-x-4">
          {linkedin && (
            <motion.a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {twitter && (
            <motion.a 
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderCard;