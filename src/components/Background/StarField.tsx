import { useRef } from 'react';
import { useCanvas } from './useCanvas';

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useCanvas({ 
    canvasRef,
    numStars: 200,
    speed: 0.2
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'radial-gradient(circle at center, #000 0%, #000B3B 100%)' }}
    />
  );
};

export default StarField;