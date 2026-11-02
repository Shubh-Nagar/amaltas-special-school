import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Therapy } from '@/data/types';
import { SmartImage } from '@/components/ui/SmartImage';
import { Icon } from '@/components/ui/Icon';
import { rise } from '@/components/ui/Reveal';

/** Therapy card: photo, "Free" badge, icon chip, first point as teaser. */
export function TherapyCard({ therapy, index = 0 }: { therapy: Therapy; index?: number }) {
  return (
    <motion.article variants={rise} className="group h-full">
      <Link
        to={`/therapies/${therapy.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-soft ring-1 ring-leaf-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blossom-500"
      >
        <div className="relative">
          <SmartImage
            src={therapy.image}
            alt={therapy.title}
            wrapperClassName="aspect-[4/3]"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-blossom-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-leaf-950">
            {therapy.price}
          </span>
          <span className="absolute -bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-leaf-700 text-cream-50 shadow-lift transition-transform duration-500 group-hover:rotate-6">
            <Icon name={therapy.icon} className="h-6 w-6" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">
            {String(index + 1).padStart(2, '0')} · {therapy.level}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{therapy.title}</h3>
          <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-soft">{therapy.points[0]}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-leaf-700">
            View therapy
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
