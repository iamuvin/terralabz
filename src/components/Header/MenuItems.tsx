import { motion } from 'framer-motion';

const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Innovations', href: '#innovations' },
  { label: 'Contact', href: '#contact' },
];

export const MenuItems = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item.label}
        </motion.a>
      ))}
    </div>
  );
};