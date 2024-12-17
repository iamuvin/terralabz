import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  delay?: number;
  children: ReactNode;
}

const FooterSection = ({ title, delay = 0, children }: FooterSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      {children}
    </motion.div>
  );
};

export default FooterSection;