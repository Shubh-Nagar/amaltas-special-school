import { motion } from 'framer-motion';
import { CalendarCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hero, features } from '@/data/home';
import { therapies } from '@/data/therapies';
import { Button } from '@/components/ui/Button';
import { BlossomChain, Petal, Squiggle } from '@/components/ui/Blossom';
import { Icon } from '@/components/ui/Icon';
import { Stagger, rise } from '@/components/ui/Reveal';

const ease = [0.22, 1, 0.36, 1] as const;

/** Home hero: warm editorial headline, arched photo frame with hanging Amaltas blossoms. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 bg-grain">
      {/* Soft background blooms */}
      <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-blossom-100 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-leaf-100 blur-3xl" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 pb-32 pt-12 lg:grid-cols-[1.05fr_1fr] lg:pb-40 lg:pt-16">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-leaf-700 shadow-soft ring-1 ring-leaf-100"
          >
            <Petal className="h-4 w-4 text-blossom-400" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]"
          >
            Helping Children <em className="font-medium italic text-leaf-700">Learn</em> and{' '}
            <span className="relative inline-block">
              Grow
              <Squiggle className="absolute -bottom-2 left-0 h-4 w-full text-blossom-400" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button to={hero.primaryCta.to} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <img src={hero.rating.googleIcon} alt="Google" className="h-9 w-9" />
              <div>
                <p className="font-display text-xl font-bold leading-none text-ink">{hero.rating.value}</p>
                <p className="text-sm text-ink-muted">{hero.rating.label}</p>
              </div>
            </div>
            <div className="h-10 w-px bg-leaf-200" aria-hidden="true" />
            <Link to="/therapies" className="group flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-100 text-leaf-700">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-xl font-bold leading-none text-ink">{therapies.length}</p>
                <p className="text-sm text-ink-muted group-hover:text-leaf-700">Therapy Programs</p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <BlossomChain className="absolute -top-16 left-6 z-10 h-56 w-12" length={6} />
          <BlossomChain className="absolute -top-16 left-20 z-10 h-36 w-9 opacity-90" length={4} />
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[12rem] rounded-b-5xl bg-gradient-to-b from-leaf-600 to-leaf-700 shadow-lift">
            <div className="absolute inset-x-8 top-10 h-[70%] rounded-t-[10rem] border-2 border-dashed border-cream-50/25" aria-hidden="true" />
            <img
              src={hero.image}
              alt="Children learning at Amaltas Special School"
              className="absolute inset-0 h-full w-full object-cover object-top"
              fetchPriority="high"
            />
          </div>

          {/* Floating tour card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="absolute -left-4 bottom-10 animate-floaty sm:-left-10"
          >
            <Link
              to="/contact-us#schedule-a-tour"
              className="flex items-center gap-3 rounded-3xl bg-white p-4 pr-6 shadow-lift ring-1 ring-leaf-100 transition hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blossom-400 text-leaf-950">
                <CalendarCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink-muted">Witness Education</span>
                <span className="block font-display text-lg font-semibold text-ink">Schedule a Tour</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature highlights, overlapping into the next section */}
      <div className="container-x relative -mt-20 pb-6 lg:-mt-24">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={rise}
              className={
                'group rounded-4xl p-7 shadow-soft ring-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ' +
                (i === 1 ? 'bg-leaf-700 text-cream-50 ring-leaf-600' : 'bg-white text-ink ring-leaf-100')
              }
            >
              <span
                className={
                  'grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 ' +
                  (i === 1 ? 'bg-blossom-400 text-leaf-950' : 'bg-leaf-100 text-leaf-700')
                }
              >
                <Icon name={f.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold">{f.title}</h2>
              <p className={'mt-2 leading-relaxed ' + (i === 1 ? 'text-cream-200/90' : 'text-ink-soft')}>{f.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
