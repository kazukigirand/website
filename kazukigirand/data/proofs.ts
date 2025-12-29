export interface Proof {
    id: string;
    title: string;
    theorem: string;
    proof: string;
    category: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    dateAdded: string;
    commentary: string;
    tags: string[];
}

export const proofs: Proof[] = [
    {
        id: 'sqrt2-irrational',
        title: 'Irrationality of √2',
        theorem: 'The square root of 2 is irrational.',
        proof: `**Proof by contradiction:**

Assume √2 is rational. Then √2 = p/q where p and q are integers with no common factors.

Squaring both sides: 2 = p²/q²

Therefore: p² = 2q²

This means p² is even, so p must be even. Let p = 2k.

Then: (2k)² = 2q²
4k² = 2q²
2k² = q²

This means q² is even, so q must be even.

But if both p and q are even, they have a common factor of 2. **Contradiction!**

Therefore, √2 must be irrational. ∎`,
        category: ['number-theory'],
        difficulty: 'beginner',
        dateAdded: '2024-01-15',
        commentary: 'This is perhaps the most elegant proof by contradiction. The ancient Greeks discovered this, and it shook the foundations of their mathematical worldview. The Pythagoreans believed all numbers could be expressed as ratios - this proof shattered that belief.',
        tags: ['irrational-numbers', 'contradiction', 'classic'],
    },
    {
        id: 'infinite-primes',
        title: 'Infinitude of Primes',
        theorem: 'There are infinitely many prime numbers.',
        proof: `**Euclid's Proof:**

Assume there are only finitely many primes: p₁, p₂, ..., pₙ.

Consider the number N = p₁ × p₂ × ... × pₙ + 1

Case 1: N is prime
Then N is a prime not in our list. **Contradiction!**

Case 2: N is composite
Then N has a prime factor p. But p cannot be any pᵢ in our list, because N leaves remainder 1 when divided by any pᵢ.

So p is a prime not in our list. **Contradiction!**

Therefore, there must be infinitely many primes. ∎`,
        category: ['number-theory'],
        difficulty: 'beginner',
        dateAdded: '2024-02-10',
        commentary: 'Euclid\'s proof from around 300 BCE is still taught today because of its beautiful simplicity. It shows that mathematics can make infinite statements with finite reasoning.',
        tags: ['primes', 'euclid', 'infinity', 'classic'],
    },
    {
        id: 'cantor-diagonal',
        title: 'Uncountability of the Reals',
        theorem: 'The set of real numbers is uncountable.',
        proof: `**Cantor's Diagonal Argument:**

Assume the reals in [0,1] are countable. Then we can list them:
r₁ = 0.d₁₁d₁₂d₁₃...
r₂ = 0.d₂₁d₂₂d₂₃...
r₃ = 0.d₃₁d₃₂d₃₃...
...

Construct a new number x = 0.e₁e₂e₃... where:
eₙ = { 1 if dₙₙ ≠ 1, or 2 if dₙₙ = 1 }

This number x differs from rₙ at the nth decimal place.

So x is not in our list. **Contradiction!**

Therefore, the reals are uncountable. ∎`,
        category: ['set-theory'],
        difficulty: 'intermediate',
        dateAdded: '2024-03-05',
        commentary: 'Cantor\'s diagonal argument is mind-bending. It proves that there are different sizes of infinity - the reals are "more infinite" than the natural numbers. This idea revolutionized mathematics.',
        tags: ['infinity', 'cantor', 'set-theory', 'diagonalization'],
    },
    {
        id: 'fundamental-theorem-algebra',
        title: 'Fundamental Theorem of Algebra',
        theorem: 'Every non-constant polynomial with complex coefficients has at least one complex root.',
        proof: `**Sketch of Proof (Topological Argument):**

Consider p(z) = zⁿ + aₙ₋₁zⁿ⁻¹ + ... + a₀

For large |z|, p(z) ≈ zⁿ.

Consider the image of a large circle |z| = R under p(z).
As z traverses this circle once, p(z) winds around the origin n times.

As R → 0, this winding number cannot change continuously to 0 
(since the map p is continuous and the winding number is an integer).

The only way for the winding number to change is if p(z) = 0 for some z.

Therefore, p has at least one root. ∎`,
        category: ['algebra', 'topology'],
        difficulty: 'advanced',
        dateAdded: '2024-04-20',
        commentary: 'Despite its name suggesting algebra, the most elegant proofs use analysis or topology. This shows how mathematics is deeply interconnected - algebraic questions often have topological answers.',
        tags: ['polynomials', 'topology', 'complex-analysis'],
    },
    {
        id: 'halting-problem',
        title: 'Undecidability of the Halting Problem',
        theorem: 'There is no algorithm that can determine whether an arbitrary program will halt.',
        proof: `**Proof by contradiction:**

Assume there exists a function H(P, I) that returns:
- TRUE if program P halts on input I
- FALSE if program P runs forever on input I

Define a new program D(P):
  if H(P, P) == TRUE:
    loop forever
  else:
    halt

What happens when we run D(D)?

If H(D, D) = TRUE: D loops forever, so it shouldn't halt. **Contradiction!**
If H(D, D) = FALSE: D halts, so it should halt. **Contradiction!**

Therefore, H cannot exist. ∎`,
        category: ['computer-science', 'logic'],
        difficulty: 'intermediate',
        dateAdded: '2024-05-15',
        commentary: 'Turing\'s proof has profound implications - it shows there are fundamental limits to what computers can compute. Some problems are simply unsolvable, not just difficult.',
        tags: ['turing', 'computability', 'logic', 'self-reference'],
    },
];
