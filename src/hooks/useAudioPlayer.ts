import { useState, useEffect, useRef } from 'react';

interface UseAudioPlayerProps {
  url: string;
  volume?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

export const useAudioPlayer = ({
  url,
  volume = 0.05,
  autoPlay = true,
  loop = true,
}: UseAudioPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    
    const setupAudio = () => {
      audio.src = url;
      audio.loop = loop;
      audio.volume = volume;
      audioRef.current = audio;

      // Add event listeners
      audio.addEventListener('play', () => setIsPlaying(true));
      audio.addEventListener('pause', () => setIsPlaying(false));
      audio.addEventListener('ended', () => setIsPlaying(false));
    };

    setupAudio();

    const playAudio = async () => {
      try {
        if (audioRef.current && autoPlay) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Audio playback failed:', error);
        // Retry setup on error
        setupAudio();
      }
    };

    // Play on user interaction
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, [url, volume, autoPlay, loop]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = volume;
      if (!isPlaying) {
        audioRef.current.play().catch(console.error);
      }
    } else {
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  return {
    isMuted,
    isPlaying,
    toggleMute,
  };
};