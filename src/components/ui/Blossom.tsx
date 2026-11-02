import { cn } from '@/lib/utils';

/**
 * Signature decorative motif: a hanging Amaltas (golden shower) blossom chain.
 * Pure SVG, gently sways; hidden from assistive tech.
 */
export function BlossomChain({ className, length = 7 }: { className?: string; length?: number }) {
  const flowers = Array.from({ length });
  return (
    <svg
      className={cn('pointer-events-none origin-top animate-sway', className)}
      viewBox={`0 0 60 ${length * 34 + 20}`}
      aria-hidden="true"
    >
      <path d={`M30 0 V${length * 34}`} stroke="#0e6631" strokeWidth="1.5" fill="none" opacity="0.5" />
      {flowers.map((_, i) => {
        const cy = 18 + i * 34;
        const r = 9 - i * 0.6;
        const cx = 30 + (i % 2 === 0 ? -5 : 5);
        return (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse
                key={a}
                rx={r * 0.55}
                ry={r}
                transform={`rotate(${a}) translate(0 ${-r * 0.7})`}
                fill={i % 3 === 0 ? '#fbcd4d' : '#f9b924'}
                opacity={0.95 - i * 0.05}
              />
            ))}
            <circle r={r * 0.35} fill="#c97406" />
          </g>
        );
      })}
    </svg>
  );
}

/** A single soft five-petal flower, used as bullets and accents. */
export function Petal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} rx="3.6" ry="6" transform={`translate(12 12) rotate(${a}) translate(0 -4.5)`} fill="currentColor" />
      ))}
      <circle cx="12" cy="12" r="2.6" fill="#c97406" />
    </svg>
  );
}

/** Organic hand-drawn underline used under highlighted words in headlines. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 20" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M3 14 C 60 4, 110 4, 160 11 S 260 18, 297 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
