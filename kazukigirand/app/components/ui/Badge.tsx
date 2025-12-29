interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'japanese' | 'art' | 'math' | 'beginner' | 'intermediate' | 'advanced' | 'current' | 'paused' | 'past';
    className?: string;
}

const variantStyles: Record<string, string> = {
    default: 'bg-[var(--background-tertiary)] text-[var(--foreground-muted)]',
    japanese: 'tag-japanese',
    art: 'tag-art',
    math: 'tag-math',
    beginner: 'difficulty-beginner',
    intermediate: 'difficulty-intermediate',
    advanced: 'difficulty-advanced',
    current: 'status-current',
    paused: 'status-paused',
    past: 'status-past',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    return (
        <span className={`tag ${variantStyles[variant]} ${className}`}>
            {children}
        </span>
    );
}

interface DifficultyBadgeProps {
    level: 'beginner' | 'intermediate' | 'advanced';
}

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
    const labels = {
        beginner: '🌱 Beginner',
        intermediate: '🌿 Intermediate',
        advanced: '🌳 Advanced',
    };

    return (
        <Badge variant={level}>
            {labels[level]}
        </Badge>
    );
}

interface StatusBadgeProps {
    status: 'current' | 'paused' | 'past';
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const labels = {
        current: '🔥 Current',
        paused: '⏸️ Paused',
        past: '✅ Completed',
    };

    return (
        <Badge variant={status}>
            {labels[status]}
        </Badge>
    );
}
