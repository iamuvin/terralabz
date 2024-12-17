import { motion } from 'framer-motion';

interface HeroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const HeroButton = ({ children, onClick, variant = 'primary' }: HeroButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default HeroButton;