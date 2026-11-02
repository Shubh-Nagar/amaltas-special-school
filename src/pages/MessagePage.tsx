import { Link } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { getMessage, messages } from '@/data/messages';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Petal } from '@/components/ui/Blossom';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';
import NotFound from './NotFound';
import { cn } from '@/lib/utils';

/** Founder Chairman / Chairman / Principal message pages (shared layout). */
export default function MessagePage({ slug }: { slug: string }) {
  const m = getMessage(slug);
  usePageTitle(m?.pageTitle);
  if (!m) return <NotFound />;

  return (
    <>
      <PageHeader title={m.pageTitle} crumbs={[{ label: 'About Us', to: '/about-us' }]} />
      <section className="section bg-cream-50">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[0.8fr_1.4fr]">
          {/* Portrait */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 rounded-5xl bg-blossom-300" aria-hidden="true" />
              <img src={m.image} alt={m.name} className="relative aspect-[4/5] w-full rounded-5xl object-cover object-top shadow-lift" />
            </div>
            <div className="mt-8">
              <p className="font-display text-2xl font-semibold text-ink">{m.name}</p>
              <p className="mt-1 text-ink-muted">{m.designation}</p>
            </div>
          </Reveal>

          {/* Message body */}
          <article className="relative">
            <Quote className="h-14 w-14 text-blossom-400" aria-hidden="true" />
            {m.sections.map((s, i) => (
              <Reveal key={i} className="mt-8">
                {s.heading && <h2 className="mb-4 font-display text-2xl font-semibold text-leaf-700 sm:text-3xl">{s.heading}</h2>}
                {s.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className={cn(
                      'mb-5 text-lg leading-relaxed text-ink-soft',
                      i === 0 && j === 0 && 'font-display text-2xl leading-snug text-ink sm:text-[1.65rem]',
                    )}
                  >
                    {p}
                  </p>
                ))}
                {s.points && (
                  <ul className="grid gap-4">
                    {s.points.map((pt) => (
                      <li key={pt.title} className="flex gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-leaf-100">
                        <Petal className="mt-1 h-6 w-6 shrink-0 text-blossom-400" />
                        <p className="leading-relaxed text-ink-soft">
                          <strong className="block text-lg text-ink">{pt.title}</strong>
                          {pt.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {/* Other pillars */}
            <div className="mt-14 border-t border-leaf-100 pt-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink-muted">Our Pillars</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {messages
                  .filter((x) => x.slug !== m.slug)
                  .map((x) => (
                    <Link
                      key={x.slug}
                      to={`/${x.slug}`}
                      className="rounded-full bg-leaf-100 px-5 py-2.5 text-sm font-bold text-leaf-700 transition hover:bg-leaf-700 hover:text-cream-50"
                    >
                      {x.pageTitle}
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
