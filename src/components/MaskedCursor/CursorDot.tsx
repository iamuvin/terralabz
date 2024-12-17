import { forwardRef } from 'react';

interface CursorDotProps {
  isBlur?: boolean;
}

export const CursorDot = forwardRef<HTMLDivElement, CursorDotProps>(({ isBlur }, ref) => {
  const baseClasses = "fixed pointer-events-none";
  const specificClasses = isBlur
    ? "w-24 h-24 z-40"
    : "w-8 h-8 z-50 mix-blend-difference";
  
  const innerClasses = isBlur
    ? "absolute inset-0 bg-cyan-500/30 rounded-full blur-xl"
    : "absolute inset-0 bg-white rounded-full transform scale-75";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${specificClasses}`}
      style={{ transition: `transform ${isBlur ? '0.3s' : '0.1s'} ease-out` }}
    >
      <div className={innerClasses} />
    </div>
  );
});

CursorDot.displayName = 'CursorDot';