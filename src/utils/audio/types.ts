export interface AudioConfig {
  url: string;
  volume?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

export interface AudioState {
  isMuted: boolean;
  isPlaying: boolean;
  isAudioEnabled: boolean;
  error: string | null;
}

export interface AudioControls {
  toggleMute: () => void;
  play: () => Promise<void>;
  pause: () => void;
  setVolume: (volume: number) => void;
}