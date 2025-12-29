'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { artworks, type Artwork } from '@/data/artworks';
import { Badge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import Footer from '@/app/components/navigation/Footer';
import { Palette, X } from 'lucide-react';

// Get unique categories
const categories = ['All', ...new Set(artworks.flatMap(a => a.category))];

export default function ArtPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    const filteredArtworks = selectedCategory === 'All'
        ? artworks
        : artworks.filter(a => a.category.includes(selectedCategory));

    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Palette size={40} className="text-blue-500" />
                        <h1 className="text-white">Art Gallery</h1>
                    </div>
                    <p>
                        A collection of creative works spanning generative art, digital illustrations,
                        and traditional media. Each piece tells a story.
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
                                    ? 'bg-art-primary text-white'
                                    : 'bg-[var(--background-secondary)] text-slate-400 hover:text-white hover:bg-[var(--background-tertiary)]'
                                }
              `}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArtworks.map((artwork, index) => (
                        <div
                            key={artwork.id}
                            className="gallery-item animate-fade-in-up cursor-pointer group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedArtwork(artwork)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedArtwork(artwork);
                                }
                            }}
                            aria-label={`View ${artwork.title}`}
                        >
                            {/* Placeholder for image - using solid color as placeholder */}
                            <div
                                className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                                style={{
                                    background: 'var(--background-secondary)',
                                }}
                            >
                                {/* Art placeholder with title */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <Palette size={40} className="text-slate-600" />
                                </div>
                            </div>

                            {/* Overlay */}
                            <div className="gallery-overlay">
                                <div>
                                    <h3 className="text-white font-bold text-lg">{artwork.title}</h3>
                                    <p className="text-slate-300 text-sm">{artwork.medium}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredArtworks.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-slate-400 text-lg">No artworks found in this category.</p>
                    </div>
                )}
            </main>

            {/* Lightbox Modal */}
            {selectedArtwork && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in"
                    onClick={() => setSelectedArtwork(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedArtwork.title} details`}
                >
                    <div
                        className="max-w-4xl w-full glass rounded-2xl overflow-hidden animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image area */}
                        <div
                            className="aspect-video w-full flex items-center justify-center"
                            style={{
                                background: 'var(--background-secondary)',
                            }}
                        >
                            <Palette size={80} className="text-slate-600 opacity-50" />
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{selectedArtwork.title}</h2>
                                    <p className="text-slate-400">{selectedArtwork.medium}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedArtwork(null)}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <p className="text-slate-300 mb-4">{selectedArtwork.description}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {selectedArtwork.tags.map((tag) => (
                                        <Badge key={tag} variant="art">{tag}</Badge>
                                    ))}
                                </div>
                                <span className="text-sm text-slate-500">
                                    {new Date(selectedArtwork.dateCreated).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>

                            {selectedArtwork.dimensions && (
                                <p className="text-sm text-slate-500 mt-4">
                                    Dimensions: {selectedArtwork.dimensions}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
