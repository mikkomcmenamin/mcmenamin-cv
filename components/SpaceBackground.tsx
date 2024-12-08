'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars: [number, number, number, number][] = [];
    for (let i = 0; i < 200; i++) {
      stars.push([
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random() * 0.3 + 0.7,
      ]);
    }

    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(([x, y, brightness, speed]) => {
        const size = brightness * 2;
        const yPos = (y + time * speed * 0.00002) % 1;
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`;
        ctx.fillRect(x * canvas.width, yPos * canvas.height, size, size);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/space.png"
          alt="Space background"
          fill
          priority
          className="object-cover opacity-80"
          quality={90}
        />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 z-[1] opacity-60" />
    </div>
  );
};

export default SpaceBackground;
