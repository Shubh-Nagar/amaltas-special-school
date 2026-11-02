import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

/** Scrolls to top on route change, or to the #hash target when one is present. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  // `key` changes on every navigation, so clicking a link to the URL you are already on
  // (e.g. "Schedule a Tour" while on /contact-us#schedule-a-tour) still scrolls.
  useEffect(() => {
    if (hash) {
      // The target page may still be loading (lazy chunk) or animating in, so poll for the
      // anchor for up to ~3s instead of guessing a fixed delay.
      let tries = 0;
      const id = decodeURIComponent(hash.slice(1));
      const t = setInterval(() => {
        const el = document.getElementById(id);
        if (el || ++tries > 30) {
          clearInterval(t);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearInterval(t);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash, key]);
  return null;
}

export function Layout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-[200] rounded-full bg-blossom-400 px-5 py-3 font-bold text-leaf-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollManager />
      <TopBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </div>
  );
}
