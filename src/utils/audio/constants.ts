export const AUDIO_CONFIG = {
  BACKGROUND_MUSIC: {
    URL: 'https://assets.mixkit.co/sfx/preview/mixkit-tech-house-vibes-130.mp3',
    DEFAULT_VOLUME: 0.02, // Updated to 2%
    AUTO_PLAY: true,
    LOOP: true,
  },
} as const;

export const VOLUME_LEVELS = {
  MIN: 0,
  MAX: 1,
  DEFAULT: 0.02,
  MUTED: 0,
} as const;