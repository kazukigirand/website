'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import VennCircle from './VennCircle';

interface CircleConfig {
  id: string;
  label: string;
  color: string;
  glowColor: string;
  route: string;
  cx: number;
  cy: number;
  description: string;
}

const circles: CircleConfig[] = [
  {
    id: 'japanese',
    label: '日本語',
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.5)',
    route: '/japanese',
    cx: 300,
    cy: 220,
    description: 'Language & Culture',
  },
  {
    id: 'art',
    label: 'Art',
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.5)',
    route: '/art',
    cx: 500,
    cy: 220,
    description: 'Creative Expression',
  },
  {
    id: 'math',
    label: 'Math',
    color: '#22c55e',
    glowColor: 'rgba(34, 197, 94, 0.5)',
    route: '/proofs',
    cx: 400,
    cy: 380,
    description: 'Elegant Proofs',
  },
];

export default function VennDiagram() {
  const router = useRouter();
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCircleClick = useCallback((route: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(route);
    }, 300);
  }, [router]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, route: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCircleClick(route);
    }
  }, [handleCircleClick]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: `rgba(${Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246'}, ${Math.random() * 0.3 + 0.1})`,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: Math.random() * 4 + 4 + 's',
            }}
          />
        ))}
      </div>

      {/* Main SVG Container */}
      <svg
        viewBox="0 0 800 600"
        className={`relative z-10 w-full max-w-4xl h-auto transition-all duration-300 ${isAnimating ? 'scale-105 opacity-0' : ''}`}
        role="img"
        aria-label="Interactive Venn diagram showing three areas: Japanese, Art, and Math"
      >
        <defs>
          {/* Glow filters */}
          <filter id="glow-japanese" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#ef4444" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-art" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#3b82f6" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-math" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#22c55e" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center blur filter */}
          <filter id="center-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* Clip path for center intersection */}
          <clipPath id="center-clip">
            <circle cx="300" cy="220" r="140" />
          </clipPath>
        </defs>

        {/* Render circles */}
        {circles.map((circle) => (
          <VennCircle
            key={circle.id}
            {...circle}
            isHovered={hoveredCircle === circle.id}
            onHover={() => setHoveredCircle(circle.id)}
            onLeave={() => setHoveredCircle(null)}
            onClick={() => handleCircleClick(circle.route)}
            onKeyDown={(e) => handleKeyDown(e, circle.route)}
          />
        ))}

        {/* Center intersection - blurred overlay */}
        <g className="pointer-events-none">
          <circle
            cx="400"
            cy="280"
            r="50"
            fill="rgba(15, 23, 42, 0.6)"
            filter="url(#center-blur)"
            className="animate-pulse-glow"
          />
        </g>
      </svg>

      {/* Center name overlay - positioned absolutely */}
      <div
        className="absolute z-20 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -30%)',
        }}
      >
        <div
          className="px-8 py-4 rounded-2xl glass"
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white animate-fade-in"
          >
            Kazuki Girand
          </h1>
          <p className="text-sm md:text-base text-slate-400 mt-2 font-medium">
            Click a circle to explore
          </p>
        </div>
      </div>

      {/* Hover info display */}
      {hoveredCircle && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in"
        >
          <div className="glass px-6 py-3 rounded-xl">
            <p className="text-lg font-semibold text-white">
              {circles.find(c => c.id === hoveredCircle)?.label}
            </p>
            <p className="text-sm text-slate-400">
              {circles.find(c => c.id === hoveredCircle)?.description}
            </p>
          </div>
        </div>
      )}

      {/* Navigation hints */}
      <nav className="absolute top-8 right-8 z-20 flex gap-4" aria-label="Quick navigation">
        <a
          href="/hyperfixations"
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Hyperfixations
        </a>
        <a
          href="/venn"
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Venn
        </a>
        <a
          href="/youtube"
          className="glass px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          YouTube
        </a>
      </nav>
    </div>
  );
}
