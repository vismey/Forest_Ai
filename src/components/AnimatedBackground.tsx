
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
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

    // Animated forest elements
    const trees = Array.from({ length: 15 }, (_, i) => ({
      x: (window.innerWidth / 15) * i,
      y: window.innerHeight - 100 - Math.random() * 150,
      height: 150 + Math.random() * 100,
      sway: Math.random() * 0.02,
      phase: Math.random() * Math.PI * 2
    }));

    const fox = {
      x: window.innerWidth * 0.7,
      y: window.innerHeight - 80,
      frame: 0,
      direction: 1
    };

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3
    }));

    let animationFrame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(142, 202, 230, 0.8)');
      gradient.addColorStop(0.5, 'rgba(46, 125, 50, 0.6)');
      gradient.addColorStop(1, 'rgba(27, 94, 32, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated trees
      trees.forEach((tree, i) => {
        const swayOffset = Math.sin(animationFrame * 0.01 + tree.phase) * tree.sway * 10;
        
        // Tree trunk
        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(tree.x - 8 + swayOffset, tree.y, 16, tree.height * 0.3);
        
        // Tree canopy
        ctx.fillStyle = i % 3 === 0 ? '#2E7D32' : i % 3 === 1 ? '#388E3C' : '#43A047';
        ctx.beginPath();
        ctx.arc(tree.x + swayOffset, tree.y - tree.height * 0.2, tree.height * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animated fox
      ctx.fillStyle = '#FF8A65';
      const foxBob = Math.sin(animationFrame * 0.05) * 3;
      
      // Fox body
      ctx.beginPath();
      ctx.ellipse(fox.x, fox.y + foxBob, 25, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Fox head
      ctx.beginPath();
      ctx.arc(fox.x - 20 * fox.direction, fox.y - 10 + foxBob, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Fox ears
      ctx.fillStyle = '#FF7043';
      ctx.beginPath();
      ctx.arc(fox.x - 25 * fox.direction, fox.y - 18 + foxBob, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(fox.x - 15 * fox.direction, fox.y - 18 + foxBob, 6, 0, Math.PI * 2);
      ctx.fill();

      // Fox tail
      ctx.fillStyle = '#FF8A65';
      const tailWag = Math.sin(animationFrame * 0.1) * 15;
      ctx.beginPath();
      ctx.ellipse(fox.x + 30 * fox.direction + tailWag, fox.y + foxBob, 15, 8, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // Floating particles (fireflies/pollen)
      particles.forEach(particle => {
        particle.y -= particle.speed;
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30"
      style={{ background: 'linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 100%)' }}
    />
  );
};

export default AnimatedBackground;
