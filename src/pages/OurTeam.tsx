import { motion } from 'framer-motion';
import { team } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function OurTeam() {
  usePageTitle(team.title);
  return (
    <>
      <PageHeader title={team.title} crumbs={[{ label: 'About Us', to: '/about-us' }]} />
      <section className="section bg-cream-50">
        <div className="container-x">
          <SectionHeading eyebrow="Our Team" title={team.title} align="center">
            <p>{team.intro}</p>
          </SectionHeading>
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <img src={team.image} alt="Amaltas Special School team" loading="lazy" className="w-full rounded-5xl object-cover shadow-lift" />
          </Reveal>
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.roles.map((r) => (
              <motion.div
                key={r.title}
                variants={rise}
                className="group rounded-4xl bg-white p-7 text-center shadow-soft ring-1 ring-leaf-100 transition hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf-100 text-leaf-700 transition group-hover:bg-blossom-400 group-hover:text-leaf-950">
                  <Icon name={r.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
