import { Link } from 'react-router-dom';
import { therapiesIntro } from '@/data/home';
import { therapies } from '@/data/therapies';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal, Stagger } from '@/components/ui/Reveal';
import { TherapyCard } from '@/components/cards/TherapyCard';

/** Three featured therapies (as on the original home page) + quick links to all seven. */
export function TherapiesPreview() {
  return (
    <section className="section relative overflow-hidden bg-leaf-50">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blossom-100 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={therapiesIntro.eyebrow} title={therapiesIntro.title}>
            <p>{therapiesIntro.text}</p>
          </SectionHeading>
          <Reveal>
            <Button to={therapiesIntro.cta.to} variant="leaf" size="lg">
              {therapiesIntro.cta.label}
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {therapies.slice(0, 3).map((t, i) => (
            <TherapyCard key={t.slug} therapy={t} index={i} />
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {therapies.slice(3).map((t) => (
            <Link
              key={t.slug}
              to={`/therapies/${t.slug}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 font-bold text-ink shadow-soft ring-1 ring-leaf-100 transition hover:bg-leaf-700 hover:text-cream-50"
            >
              <Icon name={t.icon} className="h-5 w-5 text-leaf-600 group-hover:text-blossom-300" />
              {t.title}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
