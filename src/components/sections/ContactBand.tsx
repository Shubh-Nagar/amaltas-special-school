import { Phone } from 'lucide-react';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Petal } from '@/components/ui/Blossom';

/** Closing CTA used at the bottom of inner pages. */
export function ContactBand({ title = 'Schedule a Tour' }: { title?: string }) {
  return (
    <section className="bg-cream-50 pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-5xl bg-leaf-700 bg-grain p-10 text-cream-50 sm:p-14 lg:flex-row lg:items-center">
            <Petal className="absolute -right-10 -top-10 h-56 w-56 text-blossom-400/15" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
              <a href={site.phoneHref} className="mt-3 inline-flex items-center gap-2 text-lg text-cream-200 hover:text-blossom-300">
                <Phone className="h-5 w-5 text-blossom-400" aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <Button to="/contact-us#schedule-a-tour" size="lg">
                Schedule a Tour
              </Button>
              <Button to="/contact-us" variant="light" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
