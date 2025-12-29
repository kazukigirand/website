'use client';

import { useState } from 'react';
import { videos, type VideoEntry } from '@/data/videos';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import Footer from '@/app/components/navigation/Footer';

// Get unique categories
const categories = ['All', ...new Set(videos.flatMap(v => v.category))];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded) {
        return (
            <button
                onClick={() => setIsLoaded(true)}
                className="w-full aspect-video bg-[var(--background-tertiary)] rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-[var(--border)] transition-colors group"
                aria-label={`Load video: ${title}`}
            >
                <div className="w-16 h-16 rounded-full bg-japanese-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl ml-1">▶</span>
                </div>
                <span className="text-slate-400 text-sm">Click to load video</span>
            </button>
        );
    }

    return (
        <div className="video-container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default function YouTubePage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredVideos = selectedCategory === 'All'
        ? videos
        : videos.filter(v => v.category.includes(selectedCategory));

    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">▶</span>
                        <h1 className="text-white">YouTube Favorites</h1>
                    </div>
                    <p>
                        Curated videos that have shaped my understanding, sparked curiosity,
                        or simply brought joy. Each one comes with my personal commentary.
                    </p>
                </header>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${selectedCategory === category
                                    ? 'bg-japanese-primary text-white'
                                    : 'bg-[var(--background-secondary)] text-slate-400 hover:text-white hover:bg-[var(--background-tertiary)]'
                                }
              `}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredVideos.map((video, index) => (
                        <Card
                            key={video.id}
                            className="animate-fade-in-up overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            hover={false}
                        >
                            {/* Video Embed */}
                            <div className="mb-4">
                                <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
                            </div>

                            <CardHeader className="pt-0">
                                <CardTitle className="text-xl">{video.title}</CardTitle>
                                <CardDescription>{video.description}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                {/* Personal Commentary */}
                                <div
                                    className="p-4 rounded-xl mb-4"
                                    style={{
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                    }}
                                >
                                    <p className="text-sm text-slate-300 italic">
                                        "{video.commentary}"
                                    </p>
                                </div>

                                {/* Timestamps */}
                                {video.timestamps && video.timestamps.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Moments</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {video.timestamps.map((ts, i) => (
                                                <a
                                                    key={i}
                                                    href={`https://youtube.com/watch?v=${video.youtubeId}&t=${ts.time.replace(':', 'm')}s`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs px-3 py-1 rounded-full bg-[var(--background-tertiary)] text-slate-300 hover:text-white hover:bg-[var(--border)] transition-colors"
                                                >
                                                    {ts.time} - {ts.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {video.category.map((cat) => (
                                        <Badge key={cat} variant="japanese">{cat}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Empty State */}
                {filteredVideos.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-slate-400 text-lg">No videos found in this category.</p>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
