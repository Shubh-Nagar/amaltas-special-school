import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Message } from '@/data/types';
import { SmartImage } from '@/components/ui/SmartImage';
import { rise } from '@/components/ui/Reveal';

/** Leadership ("Our Pillars") card linking to the full message page. */
export function MessageCard({ message }: { message: Message }) {
  return (
    <motion.article variants={rise} className="group h-full">
      <Link
        to={`/${message.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-4xl bg-cream-50 ring-1 ring-cream-50/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <SmartImage
          src={message.image}
          alt={message.name}
          wrapperClassName="aspect-[4/4]"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="flex flex-1 items-end justify-between gap-3 p-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blossom-600">{message.pageTitle}</p>
            <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{message.name}</h3>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf-700 text-cream-50 transition group-hover:bg-blossom-400 group-hover:text-leaf-950">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
