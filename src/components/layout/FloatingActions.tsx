import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/data/site';

/** Floating call / WhatsApp / back-to-top actions — high-intent shortcuts for parents on mobile. */
export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="grid h-11 w-11 place-items-center rounded-full bg-cream-50 text-leaf-700 shadow-lift ring-1 ring-leaf-100"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={site.phoneHref}
        aria-label="Call the school"
        className="grid h-12 w-12 place-items-center rounded-full bg-leaf-700 text-cream-50 shadow-lift transition hover:scale-105 sm:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" aria-hidden="true" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
