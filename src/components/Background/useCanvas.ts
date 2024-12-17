import { useEffect, RefObject } from 'react';
import { Star, drawStar, connectStars } from './starUtils';

interface UseCanvasProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  numStars?: number;
  speed?: number;
}

export const useCanvas = ({ 
  canvasRef, 
  numStars = 200, 
  speed = 0.2 
}: UseCanvasProps) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Star[] = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const updateCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth - centerX,
          y: Math.random() * window.innerHeight - centerY,
          z: Math.random() * 1000,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: ['rgba(0, 245, 255, ', 'rgba(0, 102, 255, ', 'rgba(0, 153, 255, '][
            Math.floor(Math.random() * 3)
          ]
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star, i) => {
        star.z -= speed;
        if (star.z <= 1) {
          star.z = 1000;
          star.x = Math.random() * window.innerWidth - centerX;
          star.y = Math.random() * window.innerHeight - centerY;
        }
        drawStar(ctx, star, centerX, centerY);

        for (let j = i + 1; j < stars.length; j++) {
          connectStars(ctx, star, stars[j], centerX, centerY);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateCanvas();
      initStars();
    };

    updateCanvas();
    initStars();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef, numStars, speed]);
};