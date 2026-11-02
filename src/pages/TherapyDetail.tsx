import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle2, Layers, Mail, Phone } from 'lucide-react';
import { getTherapy, therapies } from '@/data/therapies';
import { site } from '@/data/site';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { usePageTitle } from '@/hooks/usePageTitle';
import NotFound from './NotFound';

/** Individual therapy page (Physiotherapy, Speech Therapy, …). */
export default function TherapyDetail() {
  const { slug = '' } = useParams();
  const t = getTherapy(slug);
  usePageTitle(t?.title);
  if (!t) return <NotFound />;

  const others = therapies.filter((x) => x.slug !== t.slug);

  return (
    <>
      <PageHeader title={t.title} crumbs={[{ label: 'Therapies', to: '/therapies' }]} />
      <section className="section bg-cream-50">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <img src={t.image} alt={t.title} className="aspect-[16/10] w-full rounded-5xl object-cover shadow-lift" />
            </Reveal>
            <Reveal className="mt-12">
              <h2 className="font-display text-3xl font-semibold text-ink">About Course</h2>
            </Reveal>
            <Stagger className="mt-6 grid gap-4">
              {t.points.map((p) => (
                <motion.div key={p} variants={rise} className="flex gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-leaf-100">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-leaf-600" aria-hidden="true" />
                  <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>

          {/* Sticky sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            <Reveal className="rounded-4xl bg-leaf-700 p-8 text-cream-50 shadow-lift">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blossom-400 text-leaf-950">
                <Icon name={t.icon} className="h-7 w-7" />
              </span>
              <p className="mt-6 font-display text-4xl font-semibold text-blossom-300">{t.price}</p>
              <ul className="mt-6 space-y-3 border-t border-cream-50/15 pt-6 text-cream-100">
                <li className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-blossom-400" aria-hidden="true" /> Course Level: {t.level}
                </li>
                <li className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-blossom-400" aria-hidden="true" /> {site.name}
                </li>
              </ul>
              <div className="mt-8 grid gap-3">
                <Button to="/contact-us#schedule-a-tour" size="lg">
                  Schedule a Tour
                </Button>
                <Button to={site.phoneHref} variant="light" size="lg" arrow={false}>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {site.phoneDisplay}
                  </span>
                </Button>
              </div>
              <a href={`mailto:${site.email}`} className="mt-5 flex items-center justify-center gap-2 text-sm text-cream-200 hover:text-blossom-300">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
            </Reveal>

            <Reveal className="rounded-4xl bg-white p-6 shadow-soft ring-1 ring-leaf-100">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-ink-muted">Other Therapies</h3>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/therapies/${o.slug}`}
                      className="flex items-center gap-3 rounded-2xl px-3 py-2.5 font-semibold text-ink-soft transition hover:bg-leaf-50 hover:text-leaf-700"
                    >
                      <Icon name={o.icon} className="h-5 w-5 text-leaf-600" />
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
