import { therapies } from '@/data/therapies';
import { therapiesIntro } from '@/data/home';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Stagger } from '@/components/ui/Reveal';
import { TherapyCard } from '@/components/cards/TherapyCard';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Therapies() {
  usePageTitle('Therapies');
  return (
    <>
      <PageHeader title="Therapies" subtitle={therapiesIntro.title} />
      <section className="section bg-cream-50">
        <div className="container-x">
          <SectionHeading eyebrow={therapiesIntro.eyebrow} title={therapiesIntro.title} align="center">
            <p>{therapiesIntro.text}</p>
          </SectionHeading>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {therapies.map((t, i) => (
              <TherapyCard key={t.slug} therapy={t} index={i} />
            ))}
          </Stagger>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
