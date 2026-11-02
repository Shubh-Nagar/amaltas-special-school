import { Hero } from '@/components/sections/Hero';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { TherapiesPreview } from '@/components/sections/TherapiesPreview';
import { TourSection } from '@/components/sections/TourSection';
import {
  EventsSection,
  InstitutionsSection,
  NewsSection,
  PillarsSection,
  StoreSection,
  SupportCTA,
  TestimonialsSection,
} from '@/components/sections/HomeSections';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Home — section order follows the original site, regrouped for a clearer story. */
export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <AboutPreview />
      <TherapiesPreview />
      <TestimonialsSection />
      <PillarsSection />
      <EventsSection />
      <TourSection />
      <NewsSection />
      <SupportCTA />
      <StoreSection />
      <InstitutionsSection />
    </>
  );
}
