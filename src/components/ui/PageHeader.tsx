import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { BlossomChain } from './Blossom';
import { cn, isHindi } from '@/lib/utils';

/** Inner-page banner with breadcrumb (replaces the original Elementor title bar). */
export function PageHeader({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-leaf-700 bg-grain pb-16 pt-14 text-cream-50 sm:pb-20 sm:pt-20">
      {/* Decorative depth */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-leaf-700/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-blossom-500/20 blur-3xl" aria-hidden="true" />
      <BlossomChain className="absolute right-[8%] top-0 hidden h-64 w-14 md:block" length={6} />
      <BlossomChain className="absolute right-[16%] top-0 hidden h-40 w-10 opacity-80 lg:block" length={4} />

      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream-200/80">
            <li>
              <Link to="/" className="hover:text-blossom-300">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-blossom-300">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span aria-current="page" className="text-blossom-300">
                {title}
              </span>
            </li>
          </ol>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl',
            isHindi(title) && 'font-hindi leading-snug',
          )}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-lg text-cream-200/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {/* Wavy bottom edge */}
      <svg className="absolute -bottom-px left-0 h-8 w-full text-cream-50" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C 360 0, 1080 0, 1440 40 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
