import { motion } from 'framer-motion';
import { CalendarDays, Heart } from 'lucide-react';
import type { Product } from '@/data/types';
import { SmartImage } from '@/components/ui/SmartImage';
import { rise } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';

/** Creative Store product card — enquiries go straight to the school via WhatsApp. */
export function ProductCard({ product }: { product: Product }) {
  const enquire = `${site.whatsappHref}?text=${encodeURIComponent(`Hello, I would like to enquire about ${product.title} from the Creative Store.`)}`;
  return (
    <motion.article variants={rise} className="group relative h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-4xl bg-white p-3 shadow-soft ring-1 ring-leaf-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
        <div className="relative overflow-hidden rounded-3xl">
          <SmartImage
            src={product.image}
            alt={product.title}
            wrapperClassName="aspect-[4/3]"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-cream-50/90 text-coral backdrop-blur">
            <Heart className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-leaf-700/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream-50 backdrop-blur">
            Handcrafted
          </span>
        </div>
        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {product.date}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">{product.title}</h3>
          {product.description && <p className="mt-2 leading-relaxed text-ink-soft">{product.description}</p>}
          <div className="mt-auto pt-5">
            <Button to={enquire} variant="outline" className="w-full">
              Enquire
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
