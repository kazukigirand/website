import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hyperfixations } from '@/data/hyperfixations';
import { Badge, StatusBadge } from '@/app/components/ui/Badge';
import { Button } from '@/app/components/ui/Button';
import { Card, CardContent } from '@/app/components/ui/Card';
import Footer from '@/app/components/navigation/Footer';
import Link from 'next/link';

interface HyperfixationPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: HyperfixationPageProps): Promise<Metadata> {
    const { id } = await params;
    const item = hyperfixations.find((h) => h.id === id);

    if (!item) {
        return { title: 'Not Found' };
    }

    return {
        title: `${item.title} | Hyperfixations | Kazuki Girand`,
        description: item.description,
    };
}

export function generateStaticParams() {
    return hyperfixations.map((item) => ({
        id: item.id,
    }));
}

export default async function HyperfixationPage({ params }: HyperfixationPageProps) {
    const { id } = await params;
    const item = hyperfixations.find((h) => h.id === id);

    if (!item) {
        notFound();
    }

    const completedMilestones = item.milestones.filter(m => m.completed).length;
    const totalMilestones = item.milestones.length;

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
                            <Link href="/hyperfixations" className="hover:text-white transition-colors">Hyperfixations</Link>
                        </li>
                        <li>/</li>
                        <li className="text-white">{item.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <header className="mb-12 animate-fade-in">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <StatusBadge status={item.status} />
                        <span className="text-slate-500 text-sm">
                            Started {new Date(item.startDate).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric'
                            })}
                            {item.endDate && (
                                <> → Ended {new Date(item.endDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    year: 'numeric'
                                })}</>
                            )}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl">{item.emoji}</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{item.title}</h1>
                    </div>
                    <p className="text-xl text-slate-300 max-w-3xl">
                        {item.description}
                    </p>
                </header>

                {/* Progress Bar */}
                <section className="mb-12 animate-fade-in-up">
                    <div className="glass p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-white">Progress</h3>
                            <span className="text-2xl font-bold text-math-primary">
                                {Math.round((completedMilestones / totalMilestones) * 100)}%
                            </span>
                        </div>
                        <div className="h-3 bg-[var(--background-tertiary)] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-math-primary to-art-primary transition-all duration-500"
                                style={{ width: `${(completedMilestones / totalMilestones) * 100}%` }}
                            />
                        </div>
                        <p className="text-sm text-slate-400 mt-2">
                            {completedMilestones} of {totalMilestones} milestones completed
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                            📝
                        </span>
                        Deep Dive
                    </h2>
                    <div
                        className="p-6 rounded-xl"
                        style={{
                            background: 'var(--background-secondary)',
                            border: '1px solid var(--border)',
                        }}
                    >
                        {item.content.split('\n\n').map((paragraph, i) => (
                            <p
                                key={i}
                                className="text-slate-300 leading-relaxed mb-4 last:mb-0"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Milestones */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-math-primary/20 flex items-center justify-center text-math-primary">
                            🎯
                        </span>
                        Milestones
                    </h2>
                    <div className="space-y-3">
                        {item.milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                                style={{
                                    background: milestone.completed ? 'rgba(34, 197, 94, 0.1)' : 'var(--background-secondary)',
                                    border: `1px solid ${milestone.completed ? 'rgba(34, 197, 94, 0.3)' : 'var(--border)'}`,
                                }}
                            >
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                                    style={{
                                        background: milestone.completed ? 'var(--math-primary)' : 'var(--background-tertiary)',
                                    }}
                                >
                                    {milestone.completed ? '✓' : index + 1}
                                </div>
                                <span className={`flex-1 ${milestone.completed ? 'text-slate-300' : 'text-slate-400'}`}>
                                    {milestone.title}
                                </span>
                                {milestone.date && (
                                    <span className="text-sm text-slate-500">
                                        {new Date(milestone.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resources */}
                {item.resources.length > 0 && (
                    <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-art-primary/20 flex items-center justify-center text-art-primary">
                                📚
                            </span>
                            Resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {item.resources.map((resource, index) => {
                                const typeEmoji = {
                                    link: '🔗',
                                    book: '📖',
                                    video: '🎬',
                                    course: '🎓',
                                }[resource.type];

                                return (
                                    <a
                                        key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Card className="h-full">
                                            <CardContent className="flex items-center gap-3">
                                                <span className="text-2xl">{typeEmoji}</span>
                                                <div>
                                                    <p className="font-medium text-white">{resource.title}</p>
                                                    <p className="text-sm text-slate-500 capitalize">{resource.type}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Tags */}
                <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <Badge key={tag} variant="default">{tag}</Badge>
                        ))}
                    </div>
                </section>

                {/* Navigation */}
                <nav className="flex justify-between items-center pt-8 border-t border-[var(--border)]">
                    <Link href="/hyperfixations">
                        <Button variant="secondary">
                            ← Back to Hyperfixations
                        </Button>
                    </Link>
                </nav>
            </main>
            <Footer />
        </>
    );
}
