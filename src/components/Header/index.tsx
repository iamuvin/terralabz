import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../Logo';
import { MenuItems } from './MenuItems';
import { MobileMenu } from './MobileMenu';
import { useScrollEffect } from './hooks/useScrollEffect';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg py-3 md:py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Logo size={isScrolled ? 'md' : 'lg'} />
          </motion.a>

          <MenuItems />

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;