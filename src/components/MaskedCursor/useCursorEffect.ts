import { useEffect, RefObject } from 'react';

interface UseCursorEffectProps {
  cursorRef: RefObject<HTMLDivElement>;
  cursorBlurRef: RefObject<HTMLDivElement>;
}

export const useCursorEffect = ({ cursorRef, cursorBlurRef }: UseCursorEffectProps) => {
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBlur = cursorBlurRef.current;
    if (!cursor || !cursorBlur) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        cursorBlur.style.transform = `translate(${e.clientX - 48}px, ${e.clientY - 48}px)`;
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorRef, cursorBlurRef]);
};