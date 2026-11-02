import { motion } from 'framer-motion';
import { whyUs } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function WhyUs() {
  usePageTitle(whyUs.title);
  return (
    <>
      <PageHeader title={whyUs.title} crumbs={[{ label: 'About Us', to: '/about-us' }]} />
      <section className="section bg-cream-50">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading eyebrow="Why Us" title={whyUs.heading}>
            <p>{whyUs.intro}</p>
          </SectionHeading>
          <Reveal>
            <img src={whyUs.image} alt="Why choose Amaltas Special School" loading="lazy" className="w-full rounded-5xl object-cover shadow-lift" />
          </Reveal>
        </div>

        <div className="container-x mt-20">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.points.map((p, i) => (
              <motion.article
                key={p.title}
                variants={rise}
                className="group relative overflow-hidden rounded-4xl bg-white p-8 shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="absolute right-6 top-5 font-display text-5xl font-semibold text-leaf-100 transition group-hover:text-blossom-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-leaf-700 text-cream-50 transition group-hover:bg-blossom-400 group-hover:text-leaf-950">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="relative mt-3 leading-relaxed text-ink-soft">{p.text}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-cream-50 pb-24">
        <div className="container-x">
          <Reveal className="rounded-5xl bg-blossom-300 p-10 text-center sm:p-14">
            <h2 className="font-display text-3xl font-semibold text-leaf-950 sm:text-4xl">{whyUs.join.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-leaf-700">{whyUs.join.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact-us#schedule-a-tour" variant="leaf" size="lg">
                Schedule a Tour
              </Button>
              <Button to="/contact-us" variant="light" size="lg">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
