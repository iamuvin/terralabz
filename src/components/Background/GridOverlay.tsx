import { motion } from 'framer-motion';

const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default GridOverlay;