import { motion } from 'framer-motion';

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Contact', href: '#contact' },
];

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-lg z-50 md:hidden"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};