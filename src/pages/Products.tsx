import { products, creativeStorePhotos } from '@/data/products';
import { storeIntro } from '@/data/home';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Stagger } from '@/components/ui/Reveal';
import { Gallery } from '@/components/ui/Gallery';
import { ProductCard } from '@/components/cards/ProductCard';
import { ContactBand } from '@/components/sections/ContactBand';
import { usePageTitle } from '@/hooks/usePageTitle';

/** Creative Store / Products (original: /category/products/). */
export default function Products() {
  usePageTitle('Products');
  return (
    <>
      <PageHeader title="Products" subtitle={storeIntro.title} crumbs={[{ label: storeIntro.eyebrow }]} />
      <section className="section bg-cream-50">
        <div className="container-x">
          <SectionHeading eyebrow={storeIntro.eyebrow} title={storeIntro.title} align="center">
            {storeIntro.text.map((t) => (
              <p key={t} className="mt-2">
                {t}
              </p>
            ))}
          </SectionHeading>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Stagger>
          <div className="mt-20">
            <h2 className="mb-8 font-display text-3xl font-semibold text-ink">Creative Store</h2>
            <Gallery images={creativeStorePhotos} />
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
