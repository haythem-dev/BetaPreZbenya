import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  type?: 'particles' | 'stars' | 'grid' | 'waves';
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  color?: string;
}

export function AnimatedBackground({
  children,
  className = "",
  type = "stars",
  density = "medium",
  speed = "medium",
  color = "primary"
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Convert prop choices to numbers for the animation
  const getDensityValue = () => {
    switch (density) {
      case 'low': return 50;
      case 'high': return 150;
      default: return 100;
    }
  };
  
  const getSpeedValue = () => {
    switch (speed) {
      case 'slow': return 0.5;
      case 'fast': return 2;
      default: return 1;
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas to full container size
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    // Initialize canvas size
    resizeCanvas();
    
    // Update canvas size when window resizes
    window.addEventListener('resize', resizeCanvas);
    
    let animationFrameId: number;
    
    // Get primary color from CSS variable
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = color === 'primary' 
      ? computedStyle.getPropertyValue('--primary') || 'hsl(220, 70%, 50%)'
      : color;
    
    if (type === 'stars') {
      // Stars animation
      const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
      const numStars = getDensityValue();
      const speedFactor = getSpeedValue();
      
      // Initialize stars
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * speedFactor,
          vy: (Math.random() - 0.5) * speedFactor
        });
      }
      
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw each star
        stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();
          
          // Update position
          star.x += star.vx;
          star.y += star.vy;
          
          // Wrap around edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        });
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
    } 
    else if (type === 'particles') {
      // Particles animation with connecting lines
      const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
      const numParticles = getDensityValue() * 0.8;
      const speedFactor = getSpeedValue();
      const connectionDistance = 100;
      
      // Initialize particles
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * speedFactor,
          vy: (Math.random() - 0.5) * speedFactor
        });
      }
      
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connecting lines first
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 0.3;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              ctx.globalAlpha = 1 - (distance / connectionDistance);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        
        // Draw each particle
        ctx.globalAlpha = 1;
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();
          
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
    }
    else if (type === 'grid') {
      // Animated grid pattern
      const cellSize = density === 'low' ? 50 : density === 'high' ? 20 : 30;
      const speedFactor = getSpeedValue();
      let offset = 0;
      
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        offset += 0.2 * speedFactor;
        const shiftedOffset = offset % cellSize;
        
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        
        // Draw vertical lines
        for (let x = shiftedOffset; x < canvas.width; x += cellSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = shiftedOffset; y < canvas.height; y += cellSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        
        // Add some floating particles for extra effect
        const numParticles = 10;
        ctx.globalAlpha = 0.6;
        
        for (let i = 0; i < numParticles; i++) {
          const x = (Math.sin(offset * 0.01 + i) + 1) * 0.5 * canvas.width;
          const y = (Math.cos(offset * 0.02 + i * 2) + 1) * 0.5 * canvas.height;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = primaryColor;
          ctx.fill();
        }
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
    }
    else if (type === 'waves') {
      // Animated waves
      const speedFactor = getSpeedValue();
      const amplitude = density === 'low' ? 10 : density === 'high' ? 30 : 20;
      let time = 0;
      
      const render = () => {
        time += 0.03 * speedFactor;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create multiple wave layers
        for (let layer = 1; layer <= 3; layer++) {
          ctx.beginPath();
          
          // Different frequency and phase for each layer
          const frequency = 0.005 / layer;
          const layerAmplitude = amplitude / layer;
          const phaseShift = time * layer;
          
          ctx.moveTo(0, canvas.height / 2);
          
          for (let x = 0; x < canvas.width; x += 5) {
            const y = Math.sin(x * frequency + phaseShift) * layerAmplitude + canvas.height / 2;
            ctx.lineTo(x, y);
          }
          
          ctx.strokeStyle = primaryColor;
          ctx.lineWidth = 4 - layer;
          ctx.globalAlpha = 0.2 / layer;
          ctx.stroke();
        }
        
        animationFrameId = requestAnimationFrame(render);
      };
      
      render();
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type, density, speed, color]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Specific variants for easy use
export function ParticlesBackground({ children, className = "", density = "medium", speed = "medium", color = "primary" }: Omit<AnimatedBackgroundProps, 'type'>) {
  return (
    <AnimatedBackground type="particles" density={density} speed={speed} color={color} className={className}>
      {children}
    </AnimatedBackground>
  );
}

export function StarsBackground({ children, className = "", density = "medium", speed = "medium", color = "primary" }: Omit<AnimatedBackgroundProps, 'type'>) {
  return (
    <AnimatedBackground type="stars" density={density} speed={speed} color={color} className={className}>
      {children}
    </AnimatedBackground>
  );
}

export function GridBackground({ children, className = "", density = "medium", speed = "medium", color = "primary" }: Omit<AnimatedBackgroundProps, 'type'>) {
  return (
    <AnimatedBackground type="grid" density={density} speed={speed} color={color} className={className}>
      {children}
    </AnimatedBackground>
  );
}

export function WavesBackground({ children, className = "", density = "medium", speed = "medium", color = "primary" }: Omit<AnimatedBackgroundProps, 'type'>) {
  return (
    <AnimatedBackground type="waves" density={density} speed={speed} color={color} className={className}>
      {children}
    </AnimatedBackground>
  );
}