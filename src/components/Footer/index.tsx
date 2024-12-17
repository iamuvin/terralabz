import { motion } from 'framer-motion';
import Logo from '../Logo';
import FooterSection from './FooterSection';
import SocialLinks from './SocialLinks';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <FooterSection title="">
            <Logo className="mb-6" />
            <p className="text-gray-400 mb-6">
              Shaping tomorrow with innovation today. We specialize in AI, blockchain, 
              drones, and next-gen solutions for a smarter future.
            </p>
            <SocialLinks />
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links" delay={0.2}>
            <QuickLinks />
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us" delay={0.4}>
            <ContactInfo />
          </FooterSection>

          {/* Newsletter */}
          <FooterSection title="Newsletter" delay={0.6}>
            <p className="text-gray-400 mb-4">
              Subscribe to stay updated with our latest innovations and announcements.
            </p>
            <Newsletter />
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Terra Labz. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;