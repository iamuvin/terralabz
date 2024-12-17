export interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  color: string;
}

export const drawStar = (
  ctx: CanvasRenderingContext2D,
  star: Star,
  centerX: number,
  centerY: number
) => {
  const x = (star.x / star.z) * 1000 + centerX;
  const y = (star.y / star.z) * 1000 + centerY;
  const size = (1 - star.z / 1000) * 3;
  const opacity = (1 - star.z / 1000) * star.opacity;

  ctx.beginPath();
  ctx.fillStyle = `${star.color}${opacity})`;
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
};

export const connectStars = (
  ctx: CanvasRenderingContext2D,
  star1: Star,
  star2: Star,
  centerX: number,
  centerY: number
) => {
  const x1 = (star1.x / star1.z) * 1000 + centerX;
  const y1 = (star1.y / star1.z) * 1000 + centerY;
  const x2 = (star2.x / star2.z) * 1000 + centerX;
  const y2 = (star2.y / star2.z) * 1000 + centerY;
  
  const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  
  if (distance < 150) {
    ctx.beginPath();
    ctx.strokeStyle = `${star1.color}${(1 - distance / 150) * 0.2})`;
    ctx.lineWidth = 0.5;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
};