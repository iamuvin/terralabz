import { useRef } from 'react';
import { CursorDot } from './CursorDot';
import { useCursorEffect } from './useCursorEffect';

const MaskedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useCursorEffect({ cursorRef, cursorBlurRef });

  return (
    <>
      <CursorDot ref={cursorRef} />
      <CursorDot ref={cursorBlurRef} isBlur />
    </>
  );
};

export default MaskedCursor;