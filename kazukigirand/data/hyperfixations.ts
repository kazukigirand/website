export interface Resource {
    type: 'link' | 'book' | 'video' | 'course';
    title: string;
    url: string;
}

export interface Milestone {
    title: string;
    completed: boolean;
    date?: string;
}

export interface Hyperfixation {
    id: string;
    title: string;
    status: 'current' | 'paused' | 'past';
    startDate: string;
    endDate?: string;
    description: string;
    content: string;
    resources: Resource[];
    milestones: Milestone[];
    tags: string[];
    emoji: string;
}

export const hyperfixations: Hyperfixation[] = [
    {
        id: 'japanese-language',
        title: 'Japanese Language',
        status: 'current',
        startDate: '2023-06-01',
        emoji: '🇯🇵',
        description: 'Deep diving into Japanese language learning, from kanji to conversation.',
        content: `My journey into Japanese started with anime and manga, but it quickly became something more profound. The writing system alone - with its three scripts (hiragana, katakana, kanji) - is a fascinating puzzle.

Currently focusing on:
- JLPT N3 preparation
- Reading native materials (manga, light novels)
- Pitch accent and natural pronunciation
- Kanji etymology and radicals

The language reveals so much about the culture - concepts like 空気を読む (reading the air) or 木漏れ日 (sunlight filtering through leaves) show a different way of perceiving the world.`,
        resources: [
            { type: 'course', title: 'WaniKani', url: 'https://www.wanikani.com' },
            { type: 'book', title: 'Genki Textbook Series', url: 'https://genki3.japantimes.co.jp/en/' },
            { type: 'video', title: 'Japanese Ammo with Misa', url: 'https://www.youtube.com/c/JapaneseAmmowithMisa' },
        ],
        milestones: [
            { title: 'Learn Hiragana & Katakana', completed: true, date: '2023-07-15' },
            { title: 'Complete Genki I', completed: true, date: '2023-12-01' },
            { title: 'Learn 500 Kanji', completed: true, date: '2024-03-15' },
            { title: 'Pass JLPT N4', completed: true, date: '2024-07-01' },
            { title: 'Learn 1000 Kanji', completed: false },
            { title: 'Pass JLPT N3', completed: false },
        ],
        tags: ['language', 'japanese', 'kanji', 'jlpt'],
    },
    {
        id: 'generative-art',
        title: 'Generative Art',
        status: 'current',
        startDate: '2024-01-15',
        emoji: '🎨',
        description: 'Creating algorithmic art through code, exploring the intersection of mathematics and aesthetics.',
        content: `Generative art sits at the perfect intersection of my interests - it's mathematics made visual, logic transformed into beauty.

Exploring:
- Noise functions (Perlin, Simplex)
- Cellular automata
- L-systems and fractals
- Particle systems
- Shader programming

There's something magical about defining rules and letting emergence happen. The art creates itself, guided by algorithms.`,
        resources: [
            { type: 'book', title: 'The Nature of Code', url: 'https://natureofcode.com/' },
            { type: 'link', title: 'Generative Artistry', url: 'https://generativeartistry.com/' },
            { type: 'course', title: 'Creative Coding with p5.js', url: 'https://www.kadenze.com/courses/introduction-to-programming-for-the-visual-arts-with-p5-js' },
        ],
        milestones: [
            { title: 'Learn p5.js basics', completed: true, date: '2024-02-01' },
            { title: 'Create 10 sketches', completed: true, date: '2024-04-15' },
            { title: 'Learn GLSL shaders', completed: false },
            { title: 'Create interactive installation', completed: false },
        ],
        tags: ['art', 'code', 'creative-coding', 'algorithms'],
    },
    {
        id: 'proof-theory',
        title: 'Mathematical Proof Theory',
        status: 'paused',
        startDate: '2023-09-01',
        endDate: '2024-02-15',
        emoji: '📐',
        description: 'Studying the foundations of mathematical reasoning and formal proof systems.',
        content: `What does it mean to prove something? This question led me down a rabbit hole of logic, set theory, and metamathematics.

Topics explored:
- Propositional and predicate logic
- Natural deduction systems
- Gödel's incompleteness theorems
- Type theory basics

Paused to focus on Japanese, but planning to return to explore proof assistants like Lean or Coq.`,
        resources: [
            { type: 'book', title: 'How to Prove It', url: 'https://www.cambridge.org/highereducation/books/how-to-prove-it/6D2965D625C6836CD4A785A2C843B3DA' },
            { type: 'course', title: 'Introduction to Logic', url: 'https://www.coursera.org/learn/logic-introduction' },
        ],
        milestones: [
            { title: 'Complete propositional logic', completed: true },
            { title: 'Understand Gödel\'s theorems', completed: true },
            { title: 'Learn Lean/Coq', completed: false },
        ],
        tags: ['math', 'logic', 'foundations'],
    },
    {
        id: 'mechanical-keyboards',
        title: 'Mechanical Keyboards',
        status: 'past',
        startDate: '2022-03-01',
        endDate: '2023-05-15',
        emoji: '⌨️',
        description: 'The rabbit hole of custom mechanical keyboards, switches, and keycaps.',
        content: `What started as "I need a better keyboard" turned into soldering switches, designing layouts, and learning about group buys.

Built:
- 65% Alice-layout board
- 40% ortholinear daily driver
- Custom macropad

Learned about switch types, keycap profiles, plate materials, and the wonderful chaos of the community.`,
        resources: [
            { type: 'link', title: 'r/MechanicalKeyboards', url: 'https://reddit.com/r/MechanicalKeyboards' },
            { type: 'link', title: 'QMK Firmware', url: 'https://qmk.fm/' },
        ],
        milestones: [
            { title: 'Build first keyboard', completed: true },
            { title: 'Try 10+ switch types', completed: true },
            { title: 'Design custom PCB', completed: false },
        ],
        tags: ['hardware', 'diy', 'keyboards'],
    },
];
