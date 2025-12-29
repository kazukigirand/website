'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sigma, Flame, Circle, Palette, Youtube, Languages } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Home', icon: <Home size={18} /> },
    { href: '/proofs', label: 'Proofs', icon: <Sigma size={18} /> },
    { href: '/hyperfixations', label: 'Hyperfixations', icon: <Flame size={18} /> },
    { href: '/venn', label: 'Venn', icon: <Circle size={18} /> },
    { href: '/art', label: 'Art', icon: <Palette size={18} /> },
    { href: '/youtube', label: 'YouTube', icon: <Youtube size={18} /> },
    { href: '/japanese', label: '日本語', icon: <Languages size={18} /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Don't show navbar on home page
    if (pathname === '/') return null;

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 glass"
            style={{
                height: 'var(--nav-height)',
                borderBottom: '1px solid var(--border)',
            }}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo / Home Link */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                            background: 'var(--art-primary)',
                        }}
                    >
                        <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <span className="text-lg font-bold text-foreground hidden sm:block">
                        Kazuki Girand
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.slice(1).map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  flex items-center gap-2
                  ${isActive
                                        ? 'bg-white/10 text-white'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }
                `}
                            >
                                <span className="text-base">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          md:hidden absolute top-full left-0 right-0 glass border-b
          transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
                style={{ borderColor: 'var(--border)' }}
            >
                <div className="p-4 flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                  px-4 py-3 rounded-lg text-base font-medium transition-all duration-200
                  flex items-center gap-3
                  ${isActive
                                        ? 'bg-white/10 text-white'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }
                `}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
