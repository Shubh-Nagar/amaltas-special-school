import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { aboutPreview, flourish, trio } from '@/data/home';
import { site } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Petal } from '@/components/ui/Blossom';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

/** "Get to know us": image + four commitment points, then Mission / Who We Are / Our Approach. */
export function AboutPreview() {
  return (
    <section className="section bg-cream-50">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -inset-4 -rotate-3 rounded-5xl bg-blossom-200/60" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-5xl bg-leaf-100 shadow-lift">
            <img src={aboutPreview.image} alt="Students and teachers at Amaltas Special School" loading="lazy" className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-3xl bg-leaf-700 p-5 text-cream-50 shadow-lift sm:right-8">
            <Petal className="h-10 w-10 text-blossom-400" />
            <p className="max-w-[12rem] text-sm font-semibold leading-snug">A unit of {site.parentOrg}</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow={aboutPreview.eyebrow} title={aboutPreview.title}>
            <p>{aboutPreview.intro}</p>
          </SectionHeading>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {aboutPreview.points.map((p) => (
              <motion.div key={p.title} variants={rise} className="group">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-100 text-leaf-700 transition group-hover:bg-blossom-400 group-hover:text-leaf-950">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{p.text}</p>
              </motion.div>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10">
            <Button to={aboutPreview.cta.to} variant="leaf" size="lg">
              {aboutPreview.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Mission / Who We Are / Our Approach */}
      <div className="container-x mt-24">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {trio.map((card) => (
            <motion.article
              key={card.title}
              variants={rise}
              className={cn(
                'group relative flex flex-col overflow-hidden rounded-4xl p-8 transition-all duration-500 hover:-translate-y-1.5',
                card.tone === 'leaf' && 'bg-leaf-700 text-cream-50',
                card.tone === 'blossom' && 'bg-blossom-300 text-leaf-950',
                card.tone === 'cream' && 'bg-white text-ink ring-1 ring-leaf-100',
              )}
            >
              <Petal
                className={cn(
                  'absolute -right-6 -top-6 h-28 w-28 opacity-20 transition-transform duration-700 group-hover:rotate-90',
                  card.tone === 'leaf' ? 'text-blossom-300' : 'text-leaf-600',
                )}
              />
              <h3 className="font-display text-2xl font-semibold">{card.title}</h3>
              <p className={cn('mt-4 flex-1 leading-relaxed', card.tone === 'leaf' ? 'text-cream-100/90' : 'opacity-85')}>{card.text}</p>
              <Link to={card.to} className="mt-6 inline-flex items-center gap-1.5 font-bold underline-offset-4 hover:underline">
                Learn More <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </Stagger>
      </div>

      {/* Where Caring & Learning Flourish */}
      <Reveal className="container-x mt-16">
        <div className="relative overflow-hidden rounded-5xl shadow-lift">
          <img src={flourish.image} alt="Students of Amaltas Special School with their teacher" loading="lazy" className="h-72 w-full object-cover sm:h-96" />
          <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/75 via-leaf-950/30 to-transparent" aria-hidden="true" />
          <h2 className="absolute bottom-8 left-8 max-w-md font-display text-3xl font-semibold leading-tight text-cream-50 sm:bottom-12 sm:left-12 sm:text-5xl">
            {flourish.title[0]}
            <br />
            <span className="text-blossom-300">{flourish.title[1]}</span>
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
