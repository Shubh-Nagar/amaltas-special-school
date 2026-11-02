import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import type { SchoolEvent } from '@/data/types';
import { SmartImage } from '@/components/ui/SmartImage';
import { rise } from '@/components/ui/Reveal';
import { cn, isHindi } from '@/lib/utils';

/** Event card with a calendar-style date tile. `variant="row"` renders a compact list row. */
export function EventCard({ event, variant = 'card' }: { event: SchoolEvent; variant?: 'card' | 'row' }) {
  const hindi = isHindi(event.title);

  if (variant === 'row') {
    return (
      <motion.li variants={rise}>
        <Link
          to={`/events/${event.slug}`}
          className="group flex items-center gap-4 rounded-3xl bg-white p-3 pr-5 shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-0.5 hover:shadow-lift"
        >
          <SmartImage
            src={event.image}
            alt=""
            wrapperClassName="h-20 w-20 shrink-0 rounded-2xl"
            className="h-full w-full object-cover"
          />
          <DateTile event={event} small />
          <div className="min-w-0">
            <h3 className={cn('line-clamp-2 font-bold text-ink group-hover:text-leaf-700', hindi && 'font-hindi')}>
              {event.title}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {event.location}
            </p>
          </div>
        </Link>
      </motion.li>
    );
  }

  return (
    <motion.article variants={rise} className="group h-full">
      <Link
        to={`/events/${event.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-soft ring-1 ring-leaf-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blossom-500"
      >
        <div className="relative">
          <SmartImage
            src={event.image}
            alt={event.title}
            wrapperClassName="aspect-[4/3]"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <DateTile event={event} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className={cn('line-clamp-3 text-lg font-bold leading-snug text-ink group-hover:text-leaf-700', hindi && 'font-hindi')}>
            {event.title}
          </h3>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-muted">
            {event.time && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {event.time}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {event.location}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function DateTile({ event, small }: { event: SchoolEvent; small?: boolean }) {
  return (
    <div
      className={cn(
        'flex shrink-0 flex-col items-center justify-center rounded-2xl bg-blossom-400 text-leaf-950 shadow-glow',
        small ? 'h-14 w-14' : 'h-16 w-16',
      )}
    >
      <span className={cn('font-display font-bold leading-none', small ? 'text-xl' : 'text-2xl')}>{event.day}</span>
      <span className="text-[11px] font-extrabold uppercase tracking-wider">{event.month}</span>
    </div>
  );
}
