import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/terralabz.io', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/terralabz.io', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/terralabzio', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/terralabzio', label: 'Twitter' },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-secondary transition-colors"
          aria-label={label}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;