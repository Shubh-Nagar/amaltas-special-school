import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { mainNav, site } from '@/data/site';
import type { NavLink } from '@/data/types';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * Sticky main navigation.
 * Desktop: hover/focus dropdowns. Mobile: full-height drawer with accordion sub-menus.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { key } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer after every navigation. `key` (not `pathname`) also changes when a
  // link to the current page is tapped, which previously left the drawer open and the page locked.
  useEffect(() => setOpen(false), [key]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream-50/90 shadow-soft backdrop-blur-lg' : 'bg-cream-50',
      )}
    >
      <div className={cn('container-x flex items-center justify-between gap-4 transition-all', scrolled ? 'h-16' : 'h-20')}>
        <Link to="/" className="flex shrink-0 items-center" aria-label={`${site.name} — Home`}>
          <img src={site.logo} alt={site.name} className={cn('w-auto transition-all', scrolled ? 'h-11' : 'h-14')} />
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <DesktopItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button to="/contact-us#schedule-a-tour" variant="leaf" arrow={false} className="whitespace-nowrap">
            Schedule a Tour
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={site.phoneHref}
            aria-label="Call the school"
            className="grid h-11 w-11 place-items-center rounded-full bg-leaf-100 text-leaf-700"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full bg-leaf-700 text-cream-50"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>{open && <MobileDrawer onClose={() => setOpen(false)} />}</AnimatePresence>
    </header>
  );
}

function DesktopItem({ item }: { item: NavLink }) {
  const [hover, setHover] = useState(false);
  const { pathname, key } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const activeParent = item.children?.some((c) => path === c.to.split('#')[0]);

  // Close the dropdown once a page is chosen (it used to stay open over the new page
  // because the pointer is still hovering the menu).
  useEffect(() => setHover(false), [key]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[14.5px] font-bold transition-colors 2xl:px-3.5 2xl:text-[15px]',
      isActive || activeParent ? 'text-leaf-700' : 'text-ink-soft hover:text-leaf-700',
    );

  if (!item.children) {
    return (
      <li>
        <RouterNavLink to={item.to} end={item.to === '/'} className={linkClass}>
          {({ isActive }) => (
            <>
              {item.label}
              {isActive && (
                <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blossom-500" />
              )}
            </>
          )}
        </RouterNavLink>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setHover(false)}
      onKeyDown={(e) => e.key === 'Escape' && setHover(false)}
    >
      <RouterNavLink to={item.to} className={linkClass} aria-haspopup="true" aria-expanded={hover}>
        {item.label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', hover && 'rotate-180')} aria-hidden="true" />
      </RouterNavLink>
      {/* Always rendered and toggled with CSS: AnimatePresence could leave this menu stuck
          open after navigating, because the exit animation never started. */}
      <ul
        className={cn(
          'absolute left-0 top-full w-72 rounded-2xl border border-leaf-100 bg-white p-2 shadow-lift transition-all duration-200',
          hover ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-2 opacity-0',
        )}
      >
        {item.children.map((c) => (
          <li key={c.label}>
            <Link
              to={c.to}
              onClick={() => setHover(false)}
              aria-current={path === c.to.split('#')[0] ? 'page' : undefined}
              className="block rounded-xl px-4 py-2.5 aria-[current=page]:bg-leaf-50 aria-[current=page]:text-leaf-700 text-sm font-semibold text-ink-soft transition hover:bg-leaf-50 hover:text-leaf-700"
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed inset-0 z-[60] xl:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-leaf-950/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <motion.nav
        aria-label="Mobile"
        className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-cream-50 p-6"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <div className="mb-6 flex items-center justify-between">
          <img src={site.logo} alt={site.name} className="h-12 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-leaf-100 text-leaf-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex-1 space-y-1">
          {mainNav.map((item) => (
            <li key={item.label} className="border-b border-leaf-100/80">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    aria-expanded={expanded === item.label}
                    className="flex w-full items-center justify-between py-3.5 text-left text-lg font-bold text-ink"
                  >
                    {item.label}
                    <ChevronDown className={cn('h-5 w-5 transition-transform', expanded === item.label && 'rotate-180')} />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded === item.label && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pb-3 pl-3"
                      >
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <Link to={c.to} onClick={onClose} className="block py-2 font-semibold text-ink-soft hover:text-leaf-700">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link to={item.to} onClick={onClose} className="block py-3.5 text-lg font-bold text-ink">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3">
          <Button to="/contact-us#schedule-a-tour" onClick={onClose} variant="leaf" size="lg">
            Schedule a Tour
          </Button>
          <Button to={site.phoneHref} variant="outline" size="lg" arrow={false}>
            Call {site.phoneDisplay}
          </Button>
        </div>
      </motion.nav>
    </motion.div>
  );
}
