import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center max-w-md animate-fade-in">
                {/* 404 Display */}
                <div
                    className="text-9xl font-bold mb-6 text-white"
                >
                    404
                </div>

                {/* Message */}
                <h1 className="text-2xl font-bold text-white mb-4">
                    Page Not Found
                </h1>
                <p className="text-slate-400 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button variant="primary">
                            ← Back to Home
                        </Button>
                    </Link>
                    <Link href="/proofs">
                        <Button variant="secondary">
                            Explore Proofs
                        </Button>
                    </Link>
                </div>

                {/* Fun Message */}
                <p className="text-sm text-slate-500 mt-12">
                    Fun fact: 404 is the HTTP status code for "Not Found"
                    — but it's also a palindrome when reversed!
                </p>
            </div>
        </main>
    );
}
