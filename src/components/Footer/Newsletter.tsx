import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 bg-black/50 border border-gray-800 rounded-lg px-4 py-2
          focus:outline-none focus:border-secondary transition-colors"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary p-2"
        type="submit"
        aria-label="Subscribe to newsletter"
      >
        <Send size={20} />
      </motion.button>
    </form>
  );
};

export default Newsletter;