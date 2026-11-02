import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, ExternalLink, Info, MapPin } from 'lucide-react';
import { allEvents, getEvent } from '@/data/events';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, Stagger } from '@/components/ui/Reveal';
import { EventCard } from '@/components/cards/EventCard';
import { Button } from '@/components/ui/Button';
import { Gallery } from '@/components/ui/Gallery';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn, isHindi } from '@/lib/utils';
import NotFound from './NotFound';

export default function EventDetail() {
  const { slug = '' } = useParams();
  const e = getEvent(slug);
  usePageTitle(e?.title);
  if (!e) return <NotFound />;

  const more = allEvents.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <>
      <PageHeader title={e.title} crumbs={[{ label: 'Activities / Events', to: '/activities-events' }]} />
      <section className="section bg-cream-50">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <motion.img
                src={e.image}
                alt={e.title}
                className="w-full rounded-5xl bg-white object-contain shadow-lift"
              />
            </Reveal>
            {e.description && (
              <Reveal className={cn('mt-10 space-y-4 text-lg leading-relaxed text-ink-soft', isHindi(e.description.join(' ')) && 'font-hindi')}>
                {e.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            )}
            {e.gallery && e.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 font-display text-2xl font-semibold text-ink">Photos</h2>
                <Gallery
                  images={e.gallery.map((g, i) => ({ ...g, alt: `${e.title} — photo ${i + 1}` }))}
                  columns="columns-2 md:columns-3"
                />
              </div>
            )}
          </div>
          <aside className="space-y-5 lg:sticky lg:top-28">
            <Reveal className="rounded-4xl bg-white p-8 shadow-soft ring-1 ring-leaf-100">
              <h2 className={cn('font-display text-2xl font-semibold leading-snug text-ink', isHindi(e.title) && 'font-hindi')}>{e.title}</h2>
              <ul className="mt-6 space-y-4 text-ink-soft">
                <li className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-leaf-600" aria-hidden="true" /> {e.day} {e.month} {e.year}
                </li>
                {e.note && (
                  <li className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-leaf-600" aria-hidden="true" /> {e.note}
                  </li>
                )}
                {e.time && (
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-leaf-600" aria-hidden="true" /> {e.time}
                  </li>
                )}
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-leaf-600" aria-hidden="true" /> {e.location}
                </li>
              </ul>
              <div className="mt-8 grid gap-3">
                <Button to="/activities-events" variant="leaf">
                  View All Events
                </Button>
                {e.legacyUrl && (
                  <a
                    href={e.legacyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink-muted hover:text-leaf-700"
                  >
                    Original event page <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          </aside>
        </div>

        <div className="container-x mt-20">
          <h2 className="font-display text-3xl font-semibold text-ink">More Events</h2>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <EventCard key={m.slug} event={m} />
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
