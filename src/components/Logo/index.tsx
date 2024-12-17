import { motion } from 'framer-motion';
import { LogoSizes, getLogoSize } from './utils';

interface LogoProps {
  className?: string;
  size?: LogoSizes;
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClass = getLogoSize(size);

  return (
    <motion.div
      className={`relative ${sizeClass} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/logo.png"
        alt="Terra Labz"
        className={`h-full w-auto object-contain transition-transform duration-300 hover:scale-105 ${className}`}
        style={{
          filter: 'brightness(0) invert(1)',
        }}
      />
    </motion.div>
  );
};

export default Logo;