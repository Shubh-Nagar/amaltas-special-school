import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/types';

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-4xl bg-white p-8 shadow-soft ring-1 ring-leaf-100">
      <Quote className="absolute right-7 top-7 h-10 w-10 text-blossom-300" aria-hidden="true" />
      <blockquote className="mt-8 flex-1 font-display text-xl leading-relaxed text-ink">“{t.quote}”</blockquote>
      <figcaption className="mt-7 flex items-center gap-4 border-t border-leaf-100 pt-6">
        <img src={t.image} alt="" loading="lazy" className="h-14 w-14 rounded-full object-cover ring-4 ring-blossom-100" />
        <span className="font-bold text-ink">{t.name}</span>
      </figcaption>
    </figure>
  );
}
