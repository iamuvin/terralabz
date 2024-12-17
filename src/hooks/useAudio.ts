import { useState, useEffect } from 'react';
import { useDeviceDetection } from './useDeviceDetection';
import { audioManager } from '../utils/audio/audioManager';
import type { AudioConfig, AudioState, AudioControls } from '../utils/audio/types';

export const useAudio = (config: AudioConfig): AudioState & AudioControls => {
  const { isMobile, isTablet } = useDeviceDetection();
  const [state, setState] = useState<AudioState>({
    isMuted: false,
    isPlaying: false,
    isAudioEnabled: !isMobile && !isTablet,
    error: null,
  });

  useEffect(() => {
    if (isMobile || isTablet) return;

    const initialized = audioManager.initialize(config.url, {
      volume: config.volume,
      autoPlay: config.autoPlay,
      loop: config.loop,
    });

    if (!initialized) {
      setState(prev => ({ ...prev, error: 'Failed to initialize audio' }));
      return;
    }

    const handleUserInteraction = async () => {
      try {
        if (!state.isPlaying && config.autoPlay) {
          await audioManager.play();
          setState(prev => ({ ...prev, isPlaying: true }));
        }
      } catch (error) {
        setState(prev => ({ ...prev, error: 'Failed to play audio' }));
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      audioManager.cleanup();
    };
  }, [config, isMobile, isTablet]);

  const toggleMute = () => {
    if (!state.isAudioEnabled) return;

    try {
      audioManager.toggleMute();
      setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Failed to toggle mute' }));
    }
  };

  const play = async () => {
    if (!state.isAudioEnabled) return;

    try {
      await audioManager.play();
      setState(prev => ({ ...prev, isPlaying: true }));
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Failed to play audio' }));
    }
  };

  const pause = () => {
    if (!state.isAudioEnabled) return;

    try {
      audioManager.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Failed to pause audio' }));
    }
  };

  const setVolume = (volume: number) => {
    if (!state.isAudioEnabled) return;

    try {
      audioManager.setVolume(volume);
    } catch (error) {
      setState(prev => ({ ...prev, error: 'Failed to set volume' }));
    }
  };

  return {
    ...state,
    toggleMute,
    play,
    pause,
    setVolume,
  };
};