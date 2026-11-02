import { motion } from 'framer-motion';
import { Bus, CheckCircle2, Home, Library, Monitor, Palette } from 'lucide-react';
import { facilities } from '@/data/about';
import { creativeStorePhotos } from '@/data/products';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { Gallery } from '@/components/ui/Gallery';
import { Button } from '@/components/ui/Button';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Facilities() {
  usePageTitle(facilities.title);
  const { smartClassrooms: sc, library, transportation, creativeStore, residential } = facilities;

  return (
    <>
      <PageHeader title={facilities.title} />

      <section className="section bg-cream-50">
        <div className="container-x">
          <SectionHeading eyebrow="Facilities" title={facilities.title} align="center">
            <p>{facilities.intro}</p>
            <p className="mt-4">{facilities.intro2}</p>
          </SectionHeading>
        </div>

        {/* Smart Classrooms */}
        <div className="container-x mt-20 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={sc.image} alt={sc.heading} loading="lazy" className="w-full rounded-5xl object-cover shadow-lift" />
          </Reveal>
          <div>
            <Reveal>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-700 text-cream-50">
                <Monitor className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{sc.heading}</h2>
              {sc.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <p className="mt-6 font-bold text-ink">{sc.benefitsLabel}</p>
            </Reveal>
            <Stagger className="mt-3 flex flex-wrap gap-3">
              {sc.benefits.map((b) => (
                <motion.span
                  key={b}
                  variants={rise}
                  className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-2 font-semibold text-leaf-700"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> {b}
                </motion.span>
              ))}
            </Stagger>
          </div>
        </div>

        {/* Library */}
        <div className="container-x mt-24 grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="lg:order-2">
            <div className="grid grid-cols-3 gap-3">
              {library.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Library ${i + 1}`}
                  loading="lazy"
                  className={'h-64 w-full rounded-3xl object-cover shadow-soft ' + (i === 1 ? 'translate-y-6' : '')}
                />
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:order-1">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blossom-400 text-leaf-950">
              <Library className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{library.heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{library.text}</p>
          </Reveal>
        </div>

        {/* Transportation + Residential */}
        <div className="container-x mt-24">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {[
              { ...transportation, Icon: Bus, tone: 'bg-leaf-700 text-cream-50' },
              { ...residential, Icon: Home, tone: 'bg-blossom-300 text-leaf-950' },
            ].map(({ heading, text, Icon, tone }) => (
              <motion.article key={heading} variants={rise} className={`rounded-5xl p-10 ${tone}`}>
                <Icon className="h-12 w-12" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-3xl font-semibold">{heading}</h3>
                <p className="mt-4 text-lg leading-relaxed opacity-90">{text}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>

        {/* Creative Store */}
        <div className="container-x mt-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral text-white">
                <Palette className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">{creativeStore.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{creativeStore.text}</p>
            </Reveal>
            <Reveal>
              <Button to="/products" variant="leaf">
                View All Products
              </Button>
            </Reveal>
          </div>
          <div className="mt-10">
            <Gallery images={creativeStorePhotos} />
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
