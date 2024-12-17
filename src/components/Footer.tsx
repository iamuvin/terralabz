import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  // ... rest of the code remains the same ...

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="md" className="mb-4" />
            {/* Rest of the code remains the same */}
          </div>
          {/* Rest of the code remains the same */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;