'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import Footer from '@/app/components/navigation/Footer';

interface VennSection {
    id: string;
    label: string;
    color: string;
    items: string[];
}

interface VennDiagramData {
    id: string;
    title: string;
    description: string;
    circles: VennSection[];
    intersections: {
        key: string;
        label: string;
        circleIds: string[];
        items: string[];
    }[];
}

const vennDiagrams: VennDiagramData[] = [
    {
        id: 'interests',
        title: 'My Core Interests',
        description: 'How Japanese, Art, and Math intersect in my life',
        circles: [
            { id: 'japanese', label: 'Japanese', color: '#ef4444', items: ['Language study', 'Anime/Manga', 'Cultural traditions', 'J-POP/J-Rock'] },
            { id: 'art', label: 'Art', color: '#3b82f6', items: ['Digital illustration', 'Photography', 'Web design', 'Traditional drawing'] },
            { id: 'math', label: 'Math', color: '#22c55e', items: ['Number theory', 'Topology', 'Logic puzzles', 'Proof writing'] },
        ],
        intersections: [
            { key: 'jp-art', label: 'Japanese + Art', circleIds: ['japanese', 'art'], items: ['Sumi-e painting', 'Anime art style', 'Kanji calligraphy', 'Ukiyo-e appreciation'] },
            { key: 'jp-math', label: 'Japanese + Math', circleIds: ['japanese', 'math'], items: ['Japanese counting systems', 'Soroban (abacus)', 'Mathematical kanji'] },
            { key: 'art-math', label: 'Art + Math', circleIds: ['art', 'math'], items: ['Generative art', 'Fractals', 'Golden ratio', 'Geometric patterns', 'Creative coding'] },
            { key: 'all', label: 'All Three', circleIds: ['japanese', 'art', 'math'], items: ['Tessellation patterns in Japanese art', 'Algorithmic haiku generation'] },
        ],
    },
    {
        id: 'skills',
        title: 'Creative Skills',
        description: 'Where code, design, and math combine',
        circles: [
            { id: 'code', label: 'Code', color: '#8b5cf6', items: ['TypeScript/React', 'Python', 'Creative coding', 'Shader programming'] },
            { id: 'design', label: 'Design', color: '#ec4899', items: ['UI/UX', 'Typography', 'Color theory', 'Motion design'] },
            { id: 'math', label: 'Math', color: '#22c55e', items: ['Algorithms', 'Linear algebra', 'Statistics', 'Discrete math'] },
        ],
        intersections: [
            { key: 'code-design', label: 'Code + Design', circleIds: ['code', 'design'], items: ['Frontend development', 'Interactive prototypes', 'CSS animations'] },
            { key: 'code-math', label: 'Code + Math', circleIds: ['code', 'math'], items: ['Algorithm implementation', 'Data structures', 'Computational geometry'] },
            { key: 'design-math', label: 'Design + Math', circleIds: ['design', 'math'], items: ['Geometric design', 'Grid systems', 'Mathematical aesthetics'] },
            { key: 'all', label: 'All Three', circleIds: ['code', 'design', 'math'], items: ['Generative art tools', 'Data visualization', 'Procedural graphics'] },
        ],
    },
];

export default function VennPage() {
    const [selectedDiagram, setSelectedDiagram] = useState(vennDiagrams[0]);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [selectedSection, setSelectedSection] = useState<string | null>(null);

    const getSelectedItems = () => {
        if (!selectedSection) return null;

        const circle = selectedDiagram.circles.find(c => c.id === selectedSection);
        if (circle) {
            return { label: circle.label, items: circle.items, color: circle.color };
        }

        const intersection = selectedDiagram.intersections.find(i => i.key === selectedSection);
        if (intersection) {
            const colors = intersection.circleIds.map(id =>
                selectedDiagram.circles.find(c => c.id === id)?.color || '#fff'
            );
            return { label: intersection.label, items: intersection.items, colors };
        }

        return null;
    };

    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">◯</span>
                        <h1 className="text-white">Venn Diagrams</h1>
                    </div>
                    <p>
                        Interactive visualizations showing how different interests and skills
                        intersect and create unique combinations.
                    </p>
                </header>

                {/* Diagram Selector */}
                <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {vennDiagrams.map((diagram) => (
                        <button
                            key={diagram.id}
                            onClick={() => {
                                setSelectedDiagram(diagram);
                                setSelectedSection(null);
                            }}
                            className={`
                px-6 py-3 rounded-xl text-base font-medium transition-all duration-300
                ${selectedDiagram.id === diagram.id
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'bg-[var(--background-secondary)] text-slate-400 hover:text-white hover:bg-[var(--background-tertiary)]'
                                }
              `}
                        >
                            {diagram.title}
                        </button>
                    ))}
                </div>

                {/* Current Diagram Info */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedDiagram.title}</h2>
                    <p className="text-slate-400">{selectedDiagram.description}</p>
                </div>

                {/* Interactive Venn Diagram */}
                <div className="flex flex-col lg:flex-row gap-8 items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {/* SVG Diagram */}
                    <div className="flex-1 flex justify-center">
                        <svg
                            viewBox="0 0 500 450"
                            className="w-full max-w-lg"
                            role="img"
                            aria-label={`Venn diagram: ${selectedDiagram.title}`}
                        >
                            <defs>
                                {selectedDiagram.circles.map((circle) => (
                                    <radialGradient key={`grad-${circle.id}`} id={`grad-${circle.id}`} cx="30%" cy="30%">
                                        <stop offset="0%" stopColor={circle.color} stopOpacity="0.8" />
                                        <stop offset="100%" stopColor={circle.color} stopOpacity="0.4" />
                                    </radialGradient>
                                ))}
                                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="10" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Circle positions for 3-circle Venn */}
                            {selectedDiagram.circles.map((circle, index) => {
                                const positions = [
                                    { cx: 200, cy: 170 }, // Top left
                                    { cx: 300, cy: 170 }, // Top right
                                    { cx: 250, cy: 280 }, // Bottom center
                                ];
                                const pos = positions[index];
                                const isHovered = hoveredSection === circle.id;
                                const isSelected = selectedSection === circle.id;

                                return (
                                    <g key={circle.id}>
                                        <circle
                                            cx={pos.cx}
                                            cy={pos.cy}
                                            r={110}
                                            fill={`url(#grad-${circle.id})`}
                                            stroke={circle.color}
                                            strokeWidth={isHovered || isSelected ? 3 : 1}
                                            strokeOpacity={0.6}
                                            style={{
                                                mixBlendMode: 'screen',
                                                opacity: isHovered || isSelected ? 0.9 : 0.6,
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                filter: isSelected ? 'url(#glow)' : undefined,
                                            }}
                                            onMouseEnter={() => setHoveredSection(circle.id)}
                                            onMouseLeave={() => setHoveredSection(null)}
                                            onClick={() => setSelectedSection(selectedSection === circle.id ? null : circle.id)}
                                        />
                                        <text
                                            x={pos.cx + (index === 0 ? -50 : index === 1 ? 50 : 0)}
                                            y={pos.cy + (index === 2 ? 70 : -70)}
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize="16"
                                            fontWeight="600"
                                            style={{ pointerEvents: 'none' }}
                                        >
                                            {circle.label}
                                        </text>
                                    </g>
                                );
                            })}

                            {/* Intersection click areas (invisible but clickable) */}
                            {/* Center intersection */}
                            <circle
                                cx="250"
                                cy="210"
                                r="30"
                                fill="transparent"
                                style={{ cursor: 'pointer' }}
                                onMouseEnter={() => setHoveredSection('all')}
                                onMouseLeave={() => setHoveredSection(null)}
                                onClick={() => setSelectedSection(selectedSection === 'all' ? null : 'all')}
                            />

                            {/* Center text */}
                            <text
                                x="250"
                                y="215"
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                fontWeight="bold"
                                style={{ pointerEvents: 'none' }}
                            >
                                ✦
                            </text>

                            {/* Instructions */}
                            <text
                                x="250"
                                y="420"
                                textAnchor="middle"
                                fill="#64748b"
                                fontSize="12"
                            >
                                Click a section to explore
                            </text>
                        </svg>
                    </div>

                    {/* Details Panel */}
                    <div className="flex-1 min-w-[300px]">
                        {selectedSection && getSelectedItems() ? (
                            <Card className="animate-fade-in">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        {'color' in getSelectedItems()! && (
                                            <span
                                                className="w-4 h-4 rounded-full"
                                                style={{ background: (getSelectedItems() as any).color }}
                                            />
                                        )}
                                        {'colors' in getSelectedItems()! && (
                                            <div className="flex -space-x-1">
                                                {((getSelectedItems() as any).colors as string[]).map((color, i) => (
                                                    <span
                                                        key={i}
                                                        className="w-4 h-4 rounded-full border-2 border-[var(--background)]"
                                                        style={{ background: color }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {getSelectedItems()!.label}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {getSelectedItems()!.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3 text-slate-300 animate-fade-in"
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="glass p-8 rounded-xl text-center">
                                <p className="text-slate-400">
                                    Click on any circle or intersection to see what's inside!
                                </p>
                            </div>
                        )}

                        {/* All Sections Quick View */}
                        <div className="mt-6 space-y-3">
                            <h3 className="text-sm font-semibold text-slate-400">All Sections</h3>
                            {selectedDiagram.circles.map((circle) => (
                                <button
                                    key={circle.id}
                                    onClick={() => setSelectedSection(circle.id)}
                                    className={`
                    w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3
                    ${selectedSection === circle.id
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5'
                                        }
                  `}
                                >
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ background: circle.color }}
                                    />
                                    <span className="text-slate-300">{circle.label}</span>
                                    <span className="ml-auto text-xs text-slate-500">{circle.items.length} items</span>
                                </button>
                            ))}
                            <div className="border-t border-[var(--border)] my-2" />
                            {selectedDiagram.intersections.map((intersection) => (
                                <button
                                    key={intersection.key}
                                    onClick={() => setSelectedSection(intersection.key)}
                                    className={`
                    w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3
                    ${selectedSection === intersection.key
                                            ? 'bg-white/10'
                                            : 'hover:bg-white/5'
                                        }
                  `}
                                >
                                    <div className="flex -space-x-1">
                                        {intersection.circleIds.map((id) => {
                                            const circle = selectedDiagram.circles.find(c => c.id === id);
                                            return (
                                                <span
                                                    key={id}
                                                    className="w-3 h-3 rounded-full border border-[var(--background)]"
                                                    style={{ background: circle?.color }}
                                                />
                                            );
                                        })}
                                    </div>
                                    <span className="text-slate-300">{intersection.label}</span>
                                    <span className="ml-auto text-xs text-slate-500">{intersection.items.length} items</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
