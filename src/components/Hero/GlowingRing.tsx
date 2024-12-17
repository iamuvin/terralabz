import { motion } from 'framer-motion';

const GlowingRing = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative w-[800px] h-[800px]"
      >
        {/* Multiple rotating rings with different speeds and colors */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full border-2 
              ${i % 2 === 0 ? 'border-cyan-500/20' : 'border-primary/20'}
              animate-[spin_${20 + i * 5}s_linear_infinite_${i % 2 === 0 ? '' : 'reverse'}]`}
            style={{ transform: `scale(${1 + i * 0.1})` }}
          />
        ))}
        
        {/* Pulsing gradient overlay */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"
        />
        
        {/* Additional decorative elements */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse" />
      </motion.div>
    </div>
  );
};

export default GlowingRing;