import { Metadata } from 'next';
import { proofs } from '@/data/proofs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/app/components/ui/Card';
import { Badge, DifficultyBadge } from '@/app/components/ui/Badge';
import Footer from '@/app/components/navigation/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Favorite Proofs | Kazuki Girand',
    description: 'A collection of elegant mathematical proofs that showcase the beauty and creativity of mathematics.',
};

export default function ProofsPage() {
    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl">∑</span>
                        <h1 className="text-white">Favorite Proofs</h1>
                    </div>
                    <p>
                        A collection of elegant mathematical proofs that showcase the beauty,
                        creativity, and sometimes surprising simplicity of rigorous reasoning.
                    </p>
                </header>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <Badge variant="default">All</Badge>
                    <Badge variant="math">Number Theory</Badge>
                    <Badge variant="art">Set Theory</Badge>
                    <Badge variant="japanese">Algebra</Badge>
                    <Badge variant="default">Logic</Badge>
                </div>

                {/* Proofs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {proofs.map((proof, index) => (
                        <Link key={proof.id} href={`/proofs/${proof.id}`}>
                            <Card
                                className="h-full animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <CardTitle>{proof.title}</CardTitle>
                                        <DifficultyBadge level={proof.difficulty} />
                                    </div>
                                    <CardDescription className="mt-2 font-mono text-base italic">
                                        "{proof.theorem}"
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                                        {proof.commentary}
                                    </p>
                                </CardContent>

                                <CardFooter className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {proof.tags.slice(0, 3).map((tag) => (
                                            <Badge key={tag} variant="default">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-500">
                                        {new Date(proof.dateAdded).toLocaleDateString('en-US', {
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div
                    className="mt-16 text-center p-8 rounded-2xl glass animate-fade-in"
                    style={{ animationDelay: '0.5s' }}
                >
                    <h2 className="text-2xl font-bold text-white mb-4">Love mathematical proofs?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        These are just a few of my favorites. Mathematics is full of beautiful arguments
                        that reveal deep truths about the universe. Each proof tells a story.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
