import Link from 'next/link';
import { Github, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
    pages: [
        { href: '/proofs', label: 'Proofs' },
        { href: '/hyperfixations', label: 'Hyperfixations' },
        { href: '/venn', label: 'Venn' },
        { href: '/art', label: 'Art' },
        { href: '/youtube', label: 'YouTube' },
        { href: '/japanese', label: 'Japanese' },
    ],
    social: [
        { href: 'https://github.com', label: 'GitHub', icon: <Github size={20} /> },
        { href: 'https://twitter.com', label: 'Twitter', icon: <Twitter size={20} /> },
        { href: 'https://youtube.com', label: 'YouTube', icon: <Youtube size={20} /> },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                    background: 'var(--art-primary)',
                                }}
                            >
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <span className="text-lg font-bold text-foreground">
                                Kazuki Girand
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Exploring the beautiful intersections of Japanese, Art, and Mathematics.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Pages</h3>
                        <ul className="space-y-2">
                            {footerLinks.pages.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>
                        <div className="flex gap-3">
                            {footerLinks.social.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                                    style={{
                                        background: 'var(--background-secondary)',
                                        border: '1px solid var(--border)',
                                    }}
                                    aria-label={link.label}
                                >
                                    <span className="text-slate-400">{link.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Kazuki Girand. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
