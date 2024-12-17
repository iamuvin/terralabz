import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

const BackgroundMusic = () => {
  const { isMuted, toggleMute } = useAudio({
    src: 'https://assets.mixkit.co/music/preview/mixkit-tech-ambient-2-121.mp3',
    initialVolume: 0.03,
    autoPlay: true,
    loop: true,
  });

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm
        border border-gray-800 hover:border-secondary/50 transition-all duration-300
        hover:bg-black/70 group"
      aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 group-hover:text-secondary transition-colors" />
      ) : (
        <Volume2 className="w-5 h-5 group-hover:text-secondary transition-colors" />
      )}
    </motion.button>
  );
};

export default BackgroundMusic;
