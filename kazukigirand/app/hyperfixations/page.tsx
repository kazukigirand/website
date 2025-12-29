import { Metadata } from 'next';
import { hyperfixations } from '@/data/hyperfixations';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/app/components/ui/Card';
import { Badge, StatusBadge } from '@/app/components/ui/Badge';
import Footer from '@/app/components/navigation/Footer';
import Link from 'next/link';
import { Flame, Pause, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hyperfixations | Kazuki Girand',
    description: 'Current and past obsessions - deep dives into topics that captivate my attention.',
};

export default function HyperfixationsPage() {
    const current = hyperfixations.filter(h => h.status === 'current');
    const paused = hyperfixations.filter(h => h.status === 'paused');
    const past = hyperfixations.filter(h => h.status === 'past');

    return (
        <>
            <main className="page-container min-h-screen">
                {/* Header */}
                <header className="section-header animate-fade-in">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Flame size={40} className="text-orange-500" />
                        <h1 className="text-white">Hyperfixations</h1>
                    </div>
                    <p>
                        Deep dives into topics that captivate my attention. Some become lifelong
                        interests, others are intense but brief adventures.
                    </p>
                </header>

                {/* Current Hyperfixations */}
                {current.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 animate-fade-in">
                            <Flame size={32} className="text-orange-500" />
                            Currently Obsessed
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {current.map((item, index) => (
                                <Link key={item.id} href={`/hyperfixations/${item.id}`}>
                                    <Card
                                        className="h-full animate-fade-in-up border-l-4"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            borderLeftColor: 'var(--math-primary)',
                                        }}
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-3xl">{item.emoji}</span>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </div>
                                                <StatusBadge status={item.status} />
                                            </div>
                                            <CardDescription className="mt-2">
                                                Started {new Date(item.startDate).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                                {item.description}
                                            </p>

                                            {/* Progress indicator */}
                                            <div className="mt-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-slate-500">Milestones</span>
                                                    <span className="text-math-primary">
                                                        {item.milestones.filter(m => m.completed).length}/{item.milestones.length}
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-[var(--background-tertiary)] rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-math-primary transition-all duration-500"
                                                        style={{
                                                            width: `${(item.milestones.filter(m => m.completed).length / item.milestones.length) * 100}%`
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>

                                        <CardFooter>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="default">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Paused Hyperfixations */}
                {paused.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 animate-fade-in">
                            <Pause size={32} className="text-yellow-500" />
                            On Hold
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {paused.map((item, index) => (
                                <Link key={item.id} href={`/hyperfixations/${item.id}`}>
                                    <Card
                                        className="h-full animate-fade-in-up border-l-4"
                                        style={{
                                            animationDelay: `${index * 0.1 + 0.2}s`,
                                            borderLeftColor: '#fbbf24',
                                        }}
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-3xl">{item.emoji}</span>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </div>
                                                <StatusBadge status={item.status} />
                                            </div>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                                {item.description}
                                            </p>
                                        </CardContent>

                                        <CardFooter>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} variant="default">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Past Hyperfixations */}
                {past.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 animate-fade-in">
                            <CheckCircle size={32} className="text-green-500" />
                            Completed Adventures
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {past.map((item, index) => (
                                <Link key={item.id} href={`/hyperfixations/${item.id}`}>
                                    <Card
                                        className="h-full animate-fade-in-up opacity-80 hover:opacity-100"
                                        style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                                    >
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{item.emoji}</span>
                                                <CardTitle className="text-lg">{item.title}</CardTitle>
                                            </div>
                                            <CardDescription className="mt-1 text-xs">
                                                {new Date(item.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                {' → '}
                                                {item.endDate && new Date(item.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <p className="text-slate-400 text-sm line-clamp-2">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
