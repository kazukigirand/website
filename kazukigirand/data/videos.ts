export interface VideoTimestamp {
    time: string;
    label: string;
}

export interface VideoEntry {
    id: string;
    youtubeId: string;
    title: string;
    description: string;
    commentary: string;
    category: string[];
    timestamps?: VideoTimestamp[];
    dateAdded: string;
}

export const videos: VideoEntry[] = [
    {
        id: 'veritasium-prime-numbers',
        youtubeId: 'Y-sEH0RsHFQ',
        title: 'Why Do Prime Numbers Make These Patterns?',
        description: 'Veritasium explores the beautiful patterns that emerge when you plot prime numbers in specific ways.',
        commentary: 'This video perfectly captures why I love math - there are patterns hiding everywhere, waiting to be discovered. The polar plot of primes is genuinely mind-blowing.',
        category: ['math', 'science'],
        timestamps: [
            { time: '2:30', label: 'Ulam Spiral' },
            { time: '8:15', label: 'Polar Coordinates' },
            { time: '12:40', label: 'Modular Arithmetic' },
        ],
        dateAdded: '2024-05-15',
    },
    {
        id: '3blue1brown-euler',
        youtubeId: 'mvmuCPvRoWQ',
        title: 'e^(iπ) in 3.14 minutes',
        description: '3Blue1Brown explains Euler\'s identity in an intuitive visual way.',
        commentary: 'Grant Sanderson\'s ability to make abstract math visual and intuitive is unmatched. This video made Euler\'s identity click for me in a way textbooks never could.',
        category: ['math'],
        dateAdded: '2024-04-20',
    },
    {
        id: 'cure-dolly-japanese',
        youtubeId: 'EuP7I8-OD9U',
        title: 'Japanese From Scratch: Unlocking the Language',
        description: 'Cure Dolly\'s revolutionary approach to understanding Japanese grammar organically.',
        commentary: 'This series completely changed how I understand Japanese. Instead of memorizing arbitrary rules, you learn the actual logic behind the language. Essential viewing for any Japanese learner.',
        category: ['japanese', 'language'],
        timestamps: [
            { time: '1:00', label: 'The は/が distinction' },
            { time: '5:30', label: 'Core sentence structure' },
        ],
        dateAdded: '2024-03-10',
    },
    {
        id: 'coding-train-perlin',
        youtubeId: 'Qf4dIN99e2w',
        title: 'Perlin Noise Flow Field',
        description: 'The Coding Train creates beautiful particle flow fields using Perlin noise.',
        commentary: 'Daniel Shiffman\'s enthusiasm is infectious. This tutorial sparked my interest in generative art and led me down a wonderful creative rabbit hole.',
        category: ['art', 'code'],
        dateAdded: '2024-02-25',
    },
    {
        id: 'numberphile-godel',
        youtubeId: 'O4ndIDcDSGc',
        title: 'Gödel\'s Incompleteness Theorem',
        description: 'Numberphile explains the theorem that shook the foundations of mathematics.',
        commentary: 'The idea that any consistent formal system is necessarily incomplete is both humbling and fascinating. This video makes Gödel\'s revolutionary work accessible.',
        category: ['math', 'logic'],
        timestamps: [
            { time: '3:20', label: 'Gödel Numbering' },
            { time: '8:45', label: 'Self-Reference' },
            { time: '12:00', label: 'Implications' },
        ],
        dateAdded: '2024-01-15',
    },
];
