import { awards, giftDistribution, happyParents, newsImages, photogallery } from '@/data/media';
import type { GalleryImage } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { Gallery } from '@/components/ui/Gallery';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

/** One page component for all image-led pages on the original site. */
const pages: Record<string, { title: string; crumb: { label: string; to?: string }; images: GalleryImage[]; columns?: string }> = {
  news: { title: 'Amaltas Special School in News', crumb: { label: 'Explore Us' }, images: newsImages },
  photogallery: { title: 'Photogallery', crumb: { label: 'Explore Us' }, images: photogallery },
  gift: { title: 'Gift Distribution', crumb: { label: 'Explore Us' }, images: giftDistribution },
  parents: {
    title: 'Happy Parents',
    crumb: { label: 'Explore Us' },
    images: happyParents,
    columns: 'columns-1 sm:columns-2 lg:columns-3',
  },
  awards: {
    title: 'Awards & Achievements',
    crumb: { label: 'About Us', to: '/about-us' },
    images: awards,
    columns: 'columns-1 md:columns-2',
  },
};

export default function GalleryPage({ kind }: { kind: keyof typeof pages }) {
  const page = pages[kind];
  usePageTitle(page.title);
  return (
    <>
      <PageHeader title={page.title} crumbs={[page.crumb]} />
      <section className="section bg-cream-50">
        <div className="container-x">
          <Gallery images={page.images} columns={page.columns} />
        </div>
      </section>
      <ContactBand />
    </>
  );
}
