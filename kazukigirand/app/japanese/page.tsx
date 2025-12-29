import { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import Footer from '@/app/components/navigation/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '日本語 Japanese | Kazuki Girand',
    description: 'My journey learning Japanese - resources, progress, and cultural exploration.',
};

const jlptLevels = [
    { level: 'N5', status: 'completed', description: 'Basic vocabulary and grammar' },
    { level: 'N4', status: 'completed', description: 'Elementary level' },
    { level: 'N3', status: 'current', description: 'Intermediate level' },
    { level: 'N2', status: 'future', description: 'Upper intermediate' },
    { level: 'N1', status: 'future', description: 'Advanced level' },
];

const resources = [
    {
        category: 'Kanji',
        items: [
            { name: 'WaniKani', url: 'https://www.wanikani.com', description: 'SRS-based kanji learning' },
            { name: 'Kanji Koohii', url: 'https://kanji.koohii.com', description: 'RTK with stories' },
        ],
    },
    {
        category: 'Grammar',
        items: [
            { name: 'Cure Dolly', url: 'https://www.youtube.com/c/CureDolly', description: 'Organic Japanese approach' },
            { name: 'Tae Kim', url: 'https://guidetojapanese.org', description: 'Free grammar guide' },
        ],
    },
    {
        category: 'Practice',
        items: [
            { name: 'Anki', url: 'https://apps.ankiweb.net', description: 'Spaced repetition flashcards' },
            { name: 'Bunpro', url: 'https://bunpro.jp', description: 'Grammar SRS system' },
        ],
    },
    {
        category: 'Immersion',
        items: [
            { name: 'Satori Reader', url: 'https://www.satorireader.com', description: 'Graded reading practice' },
            { name: 'Comprehensible Japanese', url: 'https://www.youtube.com/c/ComprehensibleJapanese', description: 'Input-based learning' },
        ],
    },
];

const favoriteWords = [
    { word: '木漏れ日', reading: 'こもれび', meaning: 'Sunlight filtering through leaves', note: 'A word that captures a moment of natural beauty' },
    { word: '侘び寂び', reading: 'わびさび', meaning: 'The beauty of imperfection and transience', note: 'An aesthetic philosophy I deeply resonate with' },
    { word: '生きがい', reading: 'いきがい', meaning: 'Reason for living, purpose', note: 'What drives you to get up in the morning' },
    { word: '懐かしい', reading: 'なつかしい', meaning: 'Nostalgic, fondly remembered', note: 'That bittersweet feeling of happy memories' },
    { word: '切ない', reading: 'せつない', meaning: 'A painful longing, heartache', note: 'When something is beautiful but sad' },
];

export default function JapanesePage() {
    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">🇯🇵</span>
                        <h1 className="text-white">日本語</h1>
                    </div>
                    <p>
                        My journey into Japanese - a language that reveals a different way
                        of seeing and experiencing the world.
                    </p>
                </header>

                {/* JLPT Progress */}
                <section className="mb-16 animate-fade-in-up">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-japanese-primary/20 flex items-center justify-center text-japanese-primary">
                            📊
                        </span>
                        JLPT Progress
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {jlptLevels.map((level, index) => (
                            <div
                                key={level.level}
                                className="flex-1 min-w-[120px] max-w-[180px] p-4 rounded-xl text-center transition-all duration-300"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    background: level.status === 'completed'
                                        ? 'rgba(34, 197, 94, 0.2)'
                                        : level.status === 'current'
                                            ? 'rgba(239, 68, 68, 0.2)'
                                            : 'var(--background-secondary)',
                                    border: `2px solid ${level.status === 'completed'
                                            ? 'rgba(34, 197, 94, 0.5)'
                                            : level.status === 'current'
                                                ? 'rgba(239, 68, 68, 0.5)'
                                                : 'var(--border)'
                                        }`,
                                }}
                            >
                                <div
                                    className="text-3xl font-bold mb-1"
                                    style={{
                                        color: level.status === 'completed'
                                            ? 'var(--math-primary)'
                                            : level.status === 'current'
                                                ? 'var(--japanese-primary)'
                                                : 'var(--foreground-muted)'
                                    }}
                                >
                                    {level.level}
                                </div>
                                <div className="text-xs text-slate-400">{level.description}</div>
                                {level.status === 'completed' && <span className="text-xs text-math-primary">✓ Passed</span>}
                                {level.status === 'current' && <span className="text-xs text-japanese-primary">Current Goal</span>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Favorite Words */}
                <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                            ✨
                        </span>
                        Words I Love
                    </h2>
                    <p className="text-slate-400 mb-6">
                        Japanese has words for concepts that English can only describe in paragraphs.
                        Here are some that capture something special.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {favoriteWords.map((item, index) => (
                            <Card
                                key={item.word}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                            >
                                <CardHeader>
                                    <CardTitle className="text-3xl font-normal mb-1" style={{ fontFamily: 'serif' }}>
                                        {item.word}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {item.reading}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-white font-medium mb-2">{item.meaning}</p>
                                    <p className="text-sm text-slate-400 italic">{item.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-art-primary/20 flex items-center justify-center text-art-primary">
                            📚
                        </span>
                        Learning Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {resources.map((category, index) => (
                            <div
                                key={category.category}
                                className="glass p-6 rounded-xl"
                            >
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Badge variant="japanese">{category.category}</Badge>
                                </h3>
                                <div className="space-y-3">
                                    {category.items.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block p-3 rounded-lg hover:bg-white/5 transition-colors"
                                        >
                                            <p className="font-medium text-white">{item.name}</p>
                                            <p className="text-sm text-slate-400">{item.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="text-center p-8 rounded-2xl glass animate-fade-in"
                    style={{ animationDelay: '0.6s' }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Want to learn more?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-6">
                        Check out my hyperfixation on Japanese language learning for a deeper dive
                        into my journey, resources, and learning methodology.
                    </p>
                    <Link href="/hyperfixations/japanese-language">
                        <Button variant="primary">
                            View Japanese Hyperfixation →
                        </Button>
                    </Link>
                </section>
            </main>
            <Footer />
        </>
    );
}
