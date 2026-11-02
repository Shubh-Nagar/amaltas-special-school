import { motion } from 'framer-motion';
import { about, visionMission } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Petal } from '@/components/ui/Blossom';
import { TestimonialsSection, InstitutionsSection } from '@/components/sections/HomeSections';
import { TourSection } from '@/components/sections/TourSection';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function About() {
  usePageTitle(about.title);
  return (
    <>
      <PageHeader title={about.title} crumbs={[]} />

      {/* Welcome + image */}
      <section className="section bg-cream-50">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-5xl bg-leaf-100" aria-hidden="true" />
            <img src={about.image} alt="Amaltas Special School" loading="lazy" className="relative w-full rounded-5xl object-cover shadow-lift" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="About Us" title={about.welcome.heading}>
              <p>{about.welcome.text}</p>
            </SectionHeading>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[about.story, about.philosophy].map((b, i) => (
                <Reveal key={b.heading} delay={i * 0.1} className="rounded-4xl bg-white p-7 shadow-soft ring-1 ring-leaf-100">
                  <h3 className="font-display text-xl font-semibold text-ink">{b.heading}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs & services */}
      <section className="section bg-leaf-700 bg-grain">
        <div className="container-x">
          <SectionHeading eyebrow="What We Offer" title={about.programs.heading} tone="light" align="center">
            <p>{about.programs.intro}</p>
          </SectionHeading>
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.programs.items.map((item, i) => (
              <motion.div
                key={item}
                variants={rise}
                className="group flex items-center gap-4 rounded-3xl bg-cream-50/5 p-5 ring-1 ring-cream-50/10 transition hover:bg-cream-50/10"
              >
                <span className="font-display text-2xl font-semibold text-blossom-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-bold text-cream-50">{item}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="section bg-cream-50">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-4xl bg-blossom-300 p-8 text-leaf-950">
            <h3 className="font-display text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 leading-relaxed">{visionMission.mission.lead}</p>
            <ul className="mt-4 space-y-2">
              {visionMission.mission.points.slice(0, 2).map((p) => (
                <li key={p.title} className="flex gap-2.5">
                  <Petal className="mt-1 h-4 w-4 shrink-0 text-leaf-700" />
                  <span>
                    <strong>{p.title}</strong> {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-4xl bg-leaf-700 p-8 text-cream-50">
            <h3 className="font-display text-2xl font-semibold">{visionMission.vision.heading}</h3>
            <p className="mt-3 leading-relaxed text-cream-100/90">{visionMission.vision.text}</p>
          </Reveal>
          <Reveal delay={0.2} className="rounded-4xl bg-white p-8 ring-1 ring-leaf-100">
            <h3 className="font-display text-2xl font-semibold text-ink">{about.approach.heading}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{about.approach.text}</p>
          </Reveal>
        </div>
        <div className="container-x mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/vision-mission" variant="outline">
            Vision & Mission
          </Button>
          <Button to="/why-us" variant="outline">
            Why Us
          </Button>
          <Button to="/our-team" variant="outline">
            Our Team
          </Button>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-cream-50 pb-8">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{about.joinUs.heading}</h2>
            <p className="mt-4 text-lg text-ink-soft">{about.joinUs.text}</p>
          </Reveal>
        </div>
      </section>

      <TourSection />
      <TestimonialsSection />
      <InstitutionsSection />
    </>
  );
}
