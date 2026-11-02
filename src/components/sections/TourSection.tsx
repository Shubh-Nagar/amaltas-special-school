import { Mail, Phone } from 'lucide-react';
import { discover, tour, hero } from '@/data/home';
import { site } from '@/data/site';
import { TourForm } from '@/components/forms/TourForm';
import { Reveal } from '@/components/ui/Reveal';

/**
 * "Discover Our School" + "Schedule a Tour" — the primary conversion block.
 * Anchored at #schedule-a-tour so any CTA can deep-link to it.
 */
export function TourSection({ id = 'schedule-a-tour' }: { id?: string }) {
  return (
    <section id={id} className="section scroll-mt-24 bg-cream-50">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-5xl bg-white shadow-lift ring-1 ring-leaf-100 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Discover panel */}
          <div className="relative flex flex-col justify-end overflow-hidden bg-leaf-700 p-8 text-cream-50 sm:p-12">
            <img src={discover.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-leaf-800 via-leaf-700/70 to-leaf-700/20" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blossom-300">Witness Education</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">{discover.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-cream-200/90">{discover.text}</p>
              <div className="mt-8 flex items-center gap-4 rounded-3xl bg-cream-50/10 p-4 ring-1 ring-cream-50/15 backdrop-blur">
                <img src={hero.rating.googleIcon} alt="Google" className="h-10 w-10 rounded-full bg-white p-1.5" />
                <p className="font-display text-xl font-semibold">
                  {hero.rating.label} {hero.rating.value}
                </p>
              </div>
              <div className="mt-6 grid gap-2 text-[15px]">
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-blossom-300">
                  <Phone className="h-4 w-4 text-blossom-400" aria-hidden="true" /> {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-blossom-300">
                  <Mail className="h-4 w-4 text-blossom-400" aria-hidden="true" /> {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <Reveal className="p-8 sm:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blossom-600">{tour.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{tour.title}</h2>
            <div className="mt-8">
              <TourForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
