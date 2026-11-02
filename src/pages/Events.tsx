import { archiveEvents, highlightEvents, upcomingIntro } from '@/data/events';
import { eventsIntro } from '@/data/home';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Stagger } from '@/components/ui/Reveal';
import { EventCard } from '@/components/cards/EventCard';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

/**
 * Activities / Events and Upcoming Events share this page.
 * `mode="upcoming"` mirrors /upcoming-events/ on the original site.
 */
export default function Events({ mode = 'all' }: { mode?: 'all' | 'upcoming' }) {
  const upcoming = mode === 'upcoming';
  const title = upcoming ? upcomingIntro.title : 'Activities / Events';
  usePageTitle(title);

  return (
    <>
      <PageHeader title={title} subtitle={upcoming ? upcomingIntro.subtitle : undefined} crumbs={[{ label: 'Explore Us' }]} />

      {!upcoming && (
        <section className="section bg-cream-50 pb-0">
          <div className="container-x">
            <SectionHeading eyebrow="Latest" title={eventsIntro.title} />
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlightEvents.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <section className="section bg-cream-50">
        <div className="container-x">
          {upcoming ? (
            <SectionHeading eyebrow="Events" title={upcomingIntro.subtitle} align="center" />
          ) : (
            <SectionHeading eyebrow="Archive" title="Activities / Events" />
          )}
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archiveEvents.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </Stagger>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
