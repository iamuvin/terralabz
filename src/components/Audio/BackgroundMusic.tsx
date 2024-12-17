import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { AUDIO_CONFIG } from '@/utils/audio/constants';

export const BackgroundMusic = () => {
  const { isMuted, toggleMute, isAudioEnabled } = useAudio({
    url: AUDIO_CONFIG.BACKGROUND_MUSIC.URL,
    volume: AUDIO_CONFIG.BACKGROUND_MUSIC.DEFAULT_VOLUME,
    autoPlay: AUDIO_CONFIG.BACKGROUND_MUSIC.AUTO_PLAY,
    loop: AUDIO_CONFIG.BACKGROUND_MUSIC.LOOP,
  });

  // Don't render the control on mobile/tablet
  if (!isAudioEnabled) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/50 backdrop-blur-sm
          border border-gray-800 hover:border-secondary/50 transition-all duration-300
          hover:bg-black/70 group"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 group-hover:text-secondary transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 group-hover:text-secondary transition-colors" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};