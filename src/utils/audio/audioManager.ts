import { VOLUME_LEVELS } from './constants';
import type { AudioConfig } from './types';

class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private initialVolume: number;
  private autoPlay: boolean;
  private loop: boolean;

  private constructor() {
    this.initialVolume = VOLUME_LEVELS.DEFAULT;
    this.autoPlay = true;
    this.loop = true;
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public initialize(url: string, config?: Partial<Omit<AudioConfig, 'url'>>) {
    try {
      this.audio = new Audio(url);
      this.initialVolume = config?.volume ?? VOLUME_LEVELS.DEFAULT;
      this.autoPlay = config?.autoPlay ?? true;
      this.loop = config?.loop ?? true;

      this.audio.volume = this.initialVolume;
      this.audio.loop = this.loop;

      // Pre-load the audio
      this.audio.load();

      return true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
      return false;
    }
  }

  public async play(): Promise<void> {
    if (!this.audio) return;

    try {
      await this.audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
      throw error;
    }
  }

  public pause(): void {
    if (!this.audio) return;
    this.audio.pause();
  }

  public setVolume(volume: number): void {
    if (!this.audio) return;
    this.audio.volume = Math.max(VOLUME_LEVELS.MIN, Math.min(VOLUME_LEVELS.MAX, volume));
  }

  public toggleMute(): void {
    if (!this.audio) return;
    
    if (this.audio.volume > VOLUME_LEVELS.MIN) {
      this.audio.volume = VOLUME_LEVELS.MUTED;
    } else {
      this.audio.volume = this.initialVolume;
    }
  }

  public cleanup(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = '';
      this.audio = null;
    }
  }
}

export const audioManager = AudioManager.getInstance();