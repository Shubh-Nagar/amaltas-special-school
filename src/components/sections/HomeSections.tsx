/**
 * Smaller home-page sections grouped in one module:
 * Testimonials, Pillars, Events, News marquee, Empowering CTA, Creative Store, Institutions.
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, HandHeart } from 'lucide-react';
import { empowering, eventsIntro, newsIntro, pillars, storeIntro } from '@/data/home';
import { testimonials, testimonialsIntro } from '@/data/testimonials';
import { messages } from '@/data/messages';
import { highlightEvents } from '@/data/events';
import { newsImages } from '@/data/media';
import { products } from '@/data/products';
import { institutions } from '@/data/site';
import { hero } from '@/data/home';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BlossomChain } from '@/components/ui/Blossom';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { MessageCard } from '@/components/cards/MessageCard';
import { EventCard } from '@/components/cards/EventCard';
import { ProductCard } from '@/components/cards/ProductCard';

/* ------------------------------------------------------------- Testimonials */
export function TestimonialsSection() {
  return (
    <section className="section bg-cream-100">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={testimonialsIntro.eyebrow} title={testimonialsIntro.title} />
          <Reveal className="flex items-center gap-4 rounded-3xl bg-white px-6 py-4 shadow-soft ring-1 ring-leaf-100">
            <img src={hero.rating.googleIcon} alt="Google" className="h-10 w-10" />
            <div>
              <p className="text-sm font-bold text-ink-muted">Parent's Feedback</p>
              <p className="font-display text-2xl font-bold text-ink">
                {hero.rating.label} {hero.rating.value}
              </p>
            </div>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={rise}>
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Button to="/happy-parents" variant="outline">
            Happy Parents
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Pillars */
export function PillarsSection() {
  return (
    <section className="section relative overflow-hidden bg-leaf-700 bg-grain">
      <img src={pillars.image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-leaf-700/70 via-leaf-700/85 to-leaf-700" aria-hidden="true" />
      <BlossomChain className="absolute left-[6%] top-0 hidden h-72 w-14 lg:block" length={7} />
      <BlossomChain className="absolute right-[5%] top-0 hidden h-48 w-12 lg:block" length={5} />
      <div className="container-x relative">
        <SectionHeading eyebrow="Our Pillars" title={pillars.title} tone="light" align="center" />
        <Stagger className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((m) => (
            <MessageCard key={m.slug} message={m} />
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button to={pillars.cta.to} size="lg">
            {pillars.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Events */
export function EventsSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <SectionHeading eyebrow={eventsIntro.eyebrow} title={eventsIntro.title} align="center" />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightEvents.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </Stagger>
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Button to={eventsIntro.ctaAll.to} variant="leaf" size="lg">
            {eventsIntro.ctaAll.label}
          </Button>
          <Button to={eventsIntro.ctaUpcoming.to} variant="outline" size="lg">
            {eventsIntro.ctaUpcoming.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- News marquee */
export function NewsSection() {
  const row = newsImages.slice(0, 14);
  return (
    <section className="section overflow-hidden bg-cream-100">
      <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="In the Press" title={newsIntro.title} />
        <Reveal>
          <Button to={newsIntro.cta.to} variant="leaf">
            {newsIntro.cta.label}
          </Button>
        </Reveal>
      </div>
      {/* Infinite marquee; pauses on hover. Duplicated list creates the seamless loop. */}
      <div className="group relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <ul className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...row, ...row].map((img, i) => (
            <li key={i} aria-hidden={i >= row.length}>
              <Link
                to={newsIntro.cta.to}
                tabIndex={i >= row.length ? -1 : 0}
                className="block h-72 w-56 overflow-hidden rounded-3xl bg-white p-2 shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-1"
              >
                <img src={img.thumb ?? img.full} alt={img.alt} loading="lazy" className="h-full w-full rounded-2xl object-cover" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- Empowering / Support */
export function SupportCTA() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-blossom-300 via-blossom-400 to-blossom-500 px-8 py-14 sm:px-14 lg:py-16">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cream-50/20 blur-2xl" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <HandHeart className="h-12 w-12 text-leaf-700" aria-hidden="true" />
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-leaf-950 text-balance sm:text-4xl lg:text-5xl">
                  {empowering.title}
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to={empowering.cta.to} variant="leaf" size="lg">
                    {empowering.cta.label}
                  </Button>
                  <Button to="/contact-us#schedule-a-tour" variant="light" size="lg">
                    Schedule a Tour
                  </Button>
                </div>
              </div>
              <img src={empowering.image} alt="" loading="lazy" className="mx-auto w-full max-w-sm drop-shadow-2xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Creative Store */
export function StoreSection() {
  return (
    <section className="section bg-leaf-50">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={storeIntro.eyebrow} title={storeIntro.title}>
            {storeIntro.text.map((t) => (
              <p key={t} className="mt-3 first:mt-0">
                {t}
              </p>
            ))}
          </SectionHeading>
          <Reveal className="mt-8">
            <Button to={storeIntro.cta.to} variant="leaf" size="lg">
              {storeIntro.cta.label}
            </Button>
          </Reveal>
        </div>
        <Stagger className="grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Institutions */
export function InstitutionsSection() {
  return (
    <section className="bg-cream-50 py-16">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-ink-muted">Our Institutions</h2>
        </Reveal>
        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-5">
          {institutions.map((inst) => (
            <motion.a
              key={inst.href}
              variants={rise}
              href={inst.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-28 w-44 items-center justify-center rounded-3xl bg-white p-4 shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-1 hover:shadow-lift"
              aria-label={inst.name}
            >
              <img src={inst.logo} alt={inst.name} loading="lazy" className="max-h-full max-w-full object-contain grayscale-[30%] transition group-hover:grayscale-0" />
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Small arrow link used in a few sections. */
export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex items-center gap-1.5 font-bold text-leaf-700 underline-offset-4 hover:underline">
      {children} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
