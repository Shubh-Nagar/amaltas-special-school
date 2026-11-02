import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn, isExternal } from '@/lib/utils';

type Variant = 'gold' | 'leaf' | 'outline' | 'light' | 'ghost';

const variants: Record<Variant, string> = {
  gold: 'bg-blossom-400 text-leaf-950 hover:bg-blossom-300 shadow-glow',
  leaf: 'bg-leaf-700 text-cream-50 hover:bg-leaf-800 shadow-soft',
  outline: 'border-2 border-leaf-700/80 text-leaf-700 hover:bg-leaf-700 hover:text-cream-50',
  light: 'bg-cream-50 text-leaf-700 hover:bg-white shadow-soft',
  ghost: 'text-leaf-700 hover:text-leaf-800 underline-offset-4 hover:underline px-0',
};

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: 'md' | 'lg';
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

/** One button for internal links, external links and form buttons. */
export function Button({
  to,
  onClick,
  type = 'button',
  variant = 'gold',
  size = 'md',
  arrow = true,
  disabled,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blossom-500',
    'active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none',
    size === 'lg' ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm',
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to && isExternal(to)) {
    return (
      <a href={to} onClick={onClick} className={classes} target={to.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
