import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

/** Eyebrow + display title + optional lead text. Used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'left',
  tone = 'dark',
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const center = align === 'center';
  return (
    <Reveal className={cn(center && 'mx-auto text-center', 'max-w-3xl', className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em]',
            tone === 'dark' ? 'text-blossom-600' : 'text-blossom-300',
          )}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.85rem]',
          tone === 'dark' ? 'text-ink' : 'text-cream-50',
        )}
      >
        {title}
      </h2>
      {children && (
        <div className={cn('mt-5 text-lg leading-relaxed', tone === 'dark' ? 'text-ink-soft' : 'text-cream-200/90')}>
          {children}
        </div>
      )}
    </Reveal>
  );
}
