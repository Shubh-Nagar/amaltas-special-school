import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { GalleryImage } from '@/data/types';
import { SmartImage } from './SmartImage';
import { cn } from '@/lib/utils';

/**
 * Masonry-style image grid with an accessible lightbox
 * (Esc to close, ←/→ to navigate, focusable controls).
 */
export function Gallery({
  images,
  columns = 'columns-2 md:columns-3 lg:columns-4',
  pageSize = 24,
}: {
  images: GalleryImage[];
  columns?: string;
  /** Images shown before "Load more" (keeps big galleries fast on mobile). */
  pageSize?: number;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(pageSize);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  return (
    <>
      <div className={cn(columns, 'gap-4 [column-fill:_balance]')}>
        {images.slice(0, visible).map((img, i) => (
          <motion.button
            key={img.full}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blossom-500"
            aria-label={`Open ${img.alt}`}
          >
            <SmartImage
              src={img.thumb ?? img.full}
              alt={img.alt}
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-leaf-950/60 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="m-3 h-5 w-5 text-cream-50" aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </div>

      {visible < images.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + pageSize)}
            className="rounded-full border-2 border-leaf-700 px-6 py-3 text-sm font-bold text-leaf-700 transition hover:bg-leaf-700 hover:text-cream-50"
          >
            Load more ({images.length - visible} remaining)
          </button>
        </div>
      )}

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-leaf-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.img
              key={images[active].full}
              src={images[active].full}
              alt={images[active].alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-1.5 text-sm text-cream-100">
              {active + 1} / {images.length}
            </p>
            <LightboxButton label="Close" className="right-4 top-4" onClick={close}>
              <X className="h-6 w-6" />
            </LightboxButton>
            <LightboxButton label="Previous image" className="left-3 top-1/2 -translate-y-1/2" onClick={() => step(-1)}>
              <ChevronLeft className="h-7 w-7" />
            </LightboxButton>
            <LightboxButton label="Next image" className="right-3 top-1/2 -translate-y-1/2" onClick={() => step(1)}>
              <ChevronRight className="h-7 w-7" />
            </LightboxButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LightboxButton({
  label,
  className,
  onClick,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={cn(
        'absolute grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 transition hover:bg-blossom-400 hover:text-leaf-950',
        className,
      )}
    >
      {children}
    </button>
  );
}
