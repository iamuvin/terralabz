import { motion } from 'framer-motion';
import { FileText, Globe, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Access comprehensive guides and technical documentation.'
  },
  {
    icon: Globe,
    title: 'Global Resources',
    description: 'Resources available in multiple languages and regions.'
  },
  {
    icon: Users,
    title: 'Community Hub',
    description: 'Connect with developers and tech enthusiasts worldwide.'
  },
  {
    icon: Zap,
    title: 'Live Updates',
    description: 'Stay updated with our latest innovations and releases.'
  }
];

const PublicDeskFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-black/40 to-black/60 p-4 sm:p-6 rounded-xl
            border border-gray-800 hover:border-secondary/50 transition-all duration-300
            transform hover:scale-105"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <feature.icon className="w-6 h-6 text-secondary" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default PublicDeskFeatures;