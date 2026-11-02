import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { visionMission } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { Reveal, Stagger, rise } from '@/components/ui/Reveal';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function VisionMission() {
  usePageTitle(visionMission.title);
  const { vision, mission } = visionMission;
  return (
    <>
      <PageHeader title={visionMission.title} crumbs={[{ label: 'About Us', to: '/about-us' }]} />
      <section className="section bg-cream-50">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-28">
            <img src={visionMission.image} alt="Vision and Mission" loading="lazy" className="w-full rounded-5xl bg-leaf-50 object-contain shadow-soft" />
          </Reveal>

          <div className="space-y-8">
            <Reveal className="relative overflow-hidden rounded-5xl bg-leaf-700 p-10 text-cream-50">
              <Eye className="h-10 w-10 text-blossom-400" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-semibold">{vision.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-cream-100/90">{vision.text}</p>
            </Reveal>

            <Reveal className="rounded-5xl bg-white p-10 shadow-soft ring-1 ring-leaf-100">
              <Target className="h-10 w-10 text-blossom-500" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-semibold text-ink">{mission.heading}</h2>
              <p className="mt-4 text-lg text-ink-soft">{mission.lead}</p>
              <Stagger className="mt-6 grid gap-4">
                {mission.points.map((p, i) => (
                  <motion.div key={p.title} variants={rise} className="flex gap-5 rounded-3xl bg-leaf-50 p-5">
                    <span className="font-display text-3xl font-semibold text-leaf-600">{i + 1}</span>
                    <p className="text-ink-soft">
                      <strong className="block text-lg text-ink">{p.title}</strong>
                      {p.text}
                    </p>
                  </motion.div>
                ))}
              </Stagger>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{mission.closing}</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
