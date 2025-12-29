export interface Artwork {
    id: string;
    title: string;
    medium: string;
    dateCreated: string;
    description: string;
    imageUrl: string;
    thumbnailUrl: string;
    category: string[];
    tags: string[];
    dimensions?: string;
}

export const artworks: Artwork[] = [
    {
        id: 'neural-garden',
        title: 'Neural Garden',
        medium: 'Generative Art (p5.js)',
        dateCreated: '2024-06-15',
        description: 'A procedurally generated garden using L-systems and Perlin noise. Each refresh creates a unique botanical composition.',
        imageUrl: '/images/art/neural-garden.jpg',
        thumbnailUrl: '/images/art/neural-garden-thumb.jpg',
        category: ['generative', 'digital'],
        tags: ['code', 'nature', 'algorithms', 'p5js'],
        dimensions: '1920x1080',
    },
    {
        id: 'flow-field-study',
        title: 'Flow Field Study #3',
        medium: 'Generative Art (Processing)',
        dateCreated: '2024-05-20',
        description: 'Particles following a Perlin noise flow field, with color gradients based on velocity and direction.',
        imageUrl: '/images/art/flow-field-3.jpg',
        thumbnailUrl: '/images/art/flow-field-3-thumb.jpg',
        category: ['generative', 'digital'],
        tags: ['particles', 'noise', 'flow-field'],
    },
    {
        id: 'kanji-decomposition',
        title: '木漏れ日 (Komorebi)',
        medium: 'Digital Illustration',
        dateCreated: '2024-04-10',
        description: 'Visual representation of the Japanese word for sunlight filtering through leaves. A piece exploring the intersection of language and visual art.',
        imageUrl: '/images/art/komorebi.jpg',
        thumbnailUrl: '/images/art/komorebi-thumb.jpg',
        category: ['digital', 'japanese'],
        tags: ['japanese', 'nature', 'light'],
    },
    {
        id: 'fractal-tree-winter',
        title: 'Fractal Winter',
        medium: 'Generative Art (JavaScript)',
        dateCreated: '2024-02-28',
        description: 'Recursive tree structures with a winter color palette. Each branch follows the golden ratio in its subdivisions.',
        imageUrl: '/images/art/fractal-winter.jpg',
        thumbnailUrl: '/images/art/fractal-winter-thumb.jpg',
        category: ['generative', 'digital'],
        tags: ['fractals', 'recursion', 'trees', 'math'],
    },
    {
        id: 'ink-mountains',
        title: 'Ink Mountains',
        medium: 'Traditional (Sumi Ink)',
        dateCreated: '2024-01-15',
        description: 'Traditional Japanese sumi-e inspired mountain landscape. Exploring negative space and the beauty of simplicity.',
        imageUrl: '/images/art/ink-mountains.jpg',
        thumbnailUrl: '/images/art/ink-mountains-thumb.jpg',
        category: ['traditional', 'japanese'],
        tags: ['sumi-e', 'mountains', 'minimalist'],
        dimensions: '12x16 inches',
    },
    {
        id: 'cellular-automata-city',
        title: 'Emergent City',
        medium: 'Generative Art',
        dateCreated: '2023-11-20',
        description: 'A cityscape generated using cellular automata rules. The buildings and structures emerge from simple local rules.',
        imageUrl: '/images/art/emergent-city.jpg',
        thumbnailUrl: '/images/art/emergent-city-thumb.jpg',
        category: ['generative', 'digital'],
        tags: ['cellular-automata', 'architecture', 'emergence'],
    },
];
