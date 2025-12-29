'use client';

import { memo } from 'react';

interface VennCircleProps {
    id: string;
    label: string;
    color: string;
    glowColor: string;
    cx: number;
    cy: number;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}

const VennCircle = memo(function VennCircle({
    id,
    label,
    color,
    cx,
    cy,
    isHovered,
    onHover,
    onLeave,
    onClick,
    onKeyDown,
}: VennCircleProps) {
    const radius = 140;

    // Calculate label position (offset from center for better visibility)
    const labelOffset = {
        japanese: { x: -60, y: -20 },
        art: { x: 60, y: -20 },
        math: { x: 0, y: 80 },
    }[id] || { x: 0, y: 0 };

    return (
        <g
            role="button"
            tabIndex={0}
            aria-label={`Navigate to ${label} section`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
            onKeyDown={onKeyDown}
            style={{ cursor: 'pointer' }}
            className="focus:outline-none"
        >
            {/* Main circle */}
            <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill={color}
                filter={isHovered ? `url(#glow-${id})` : undefined}
                style={{
                    mixBlendMode: 'screen',
                    transition: 'all 0.3s ease',
                    opacity: isHovered ? 0.85 : 0.55,
                    transform: isHovered ? `scale(1.02)` : 'scale(1)',
                    transformOrigin: `${cx}px ${cy}px`,
                }}
            />

            {/* Circle border */}
            <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)'}
                strokeWidth={isHovered ? 2 : 1}
                style={{
                    transition: 'all 0.3s ease',
                }}
            />

            {/* Label */}
            <text
                x={cx + labelOffset.x}
                y={cy + labelOffset.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={isHovered ? 28 : 24}
                fontWeight="700"
                fontFamily="var(--font-sans)"
                style={{
                    transition: 'all 0.3s ease',
                    opacity: isHovered ? 1 : 0.8,
                    textShadow: isHovered
                        ? '0 0 20px rgba(255,255,255,0.5), 0 2px 10px rgba(0,0,0,0.5)'
                        : '0 2px 4px rgba(0,0,0,0.5)',
                    pointerEvents: 'none',
                }}
            >
                {label}
            </text>

            {/* Focus ring (for accessibility) */}
            <circle
                cx={cx}
                cy={cy}
                r={radius + 5}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeDasharray="8 4"
                opacity={0}
                className="focus-visible:opacity-100"
                style={{ transition: 'opacity 0.2s ease' }}
            />
        </g>
    );
});

export default VennCircle;
