import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { proofs } from '@/data/proofs';
import { Badge, DifficultyBadge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import Footer from '@/app/components/navigation/Footer';
import Link from 'next/link';

interface ProofPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProofPageProps): Promise<Metadata> {
    const { id } = await params;
    const proof = proofs.find((p) => p.id === id);

    if (!proof) {
        return { title: 'Proof Not Found' };
    }

    return {
        title: `${proof.title} | Kazuki Girand`,
        description: proof.theorem,
    };
}

export function generateStaticParams() {
    return proofs.map((proof) => ({
        id: proof.id,
    }));
}

export default async function ProofPage({ params }: ProofPageProps) {
    const { id } = await params;
    const proof = proofs.find((p) => p.id === id);

    if (!proof) {
        notFound();
    }

    return (
        <>
            <main className="page-container min-h-screen">
                {/* Breadcrumb */}
                <nav className="mb-8 animate-fade-in">
                    <ol className="flex items-center gap-2 text-sm text-slate-400">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/proofs" className="hover:text-white transition-colors">Proofs</Link>
                        </li>
                        <li>/</li>
                        <li className="text-white">{proof.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 animate-fade-in">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <DifficultyBadge level={proof.difficulty} />
                        <span className="text-slate-500 text-sm">
                            Added {new Date(proof.dateAdded).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{proof.title}</h1>
                    <div
                        className="p-6 rounded-xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                        }}
                    >
                        <p className="text-xl text-slate-200 font-medium italic">
                            <span className="text-math-primary">Theorem:</span> {proof.theorem}
                        </p>
                    </div>
                </header>

                {/* Proof Content */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-math-primary/20 flex items-center justify-center text-math-primary">
                            📜
                        </span>
                        The Proof
                    </h2>
                    <div
                        className="p-6 rounded-xl"
                        style={{
                            background: 'var(--background-secondary)',
                            border: '1px solid var(--border)',
                        }}
                    >
                        <div className="prose prose-invert max-w-none">
                            {proof.proof.split('\n\n').map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-slate-300 leading-relaxed mb-4 last:mb-0 font-mono text-sm whitespace-pre-wrap"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Commentary */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-art-primary/20 flex items-center justify-center text-art-primary">
                            💭
                        </span>
                        Why I Love This Proof
                    </h2>
                    <div
                        className="p-6 rounded-xl glass"
                    >
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {proof.commentary}
                        </p>
                    </div>
                </section>

                {/* Tags */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {proof.category.map((cat) => (
                            <Badge key={cat} variant="math">{cat}</Badge>
                        ))}
                        {proof.tags.map((tag) => (
                            <Badge key={tag} variant="default">{tag}</Badge>
                        ))}
                    </div>
                </section>

                {/* Navigation */}
                <nav className="flex justify-between items-center pt-8 border-t border-[var(--border)]">
                    <Link href="/proofs">
                        <Button variant="secondary">
                            ← Back to Proofs
                        </Button>
                    </Link>
                </nav>
            </main>
            <Footer />
        </>
    );
}
