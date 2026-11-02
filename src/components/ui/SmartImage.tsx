import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Lazy-loaded image with a soft shimmer placeholder, fade-in on load, and a graceful
 * fallback if the remote (WordPress) URL ever becomes unavailable.
 */
export function SmartImage({ className, wrapperClassName, alt, ...props }: ImgHTMLAttributes<HTMLImageElement> & { wrapperClassName?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-cream-200', !loaded && !failed && 'animate-pulse', wrapperClassName)}>
      {failed ? (
        <div className="flex h-full min-h-[8rem] w-full flex-col items-center justify-center gap-2 p-4 text-center text-xs text-ink-muted">
          <ImageOff className="h-6 w-6" aria-hidden="true" />
          <span>{alt || 'Image unavailable'}</span>
        </div>
      ) : (
        <img
          loading="lazy"
          decoding="async"
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn('transition-opacity duration-700', loaded ? 'opacity-100' : 'opacity-0', className)}
          {...props}
        />
      )}
    </div>
  );
}
